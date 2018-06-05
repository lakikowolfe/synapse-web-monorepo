import HttpError from './HTTPError.js';

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}

const fetch_with_exponential_timeout =
  (url, options, delayMs, retries) => {
    return fetch(url, options).then(resp => {
      if (resp.status > 199 && resp.status < 300) {
        // ok!
        return resp.json();
      } else if (resp.status === 429 || resp.status === 0) {
        // TOO_MANY_REQUESTS_STATUS_CODE, or network connection is down.  Retry after a couple of seconds.
        throw new HttpError(resp.status, resp.statusText);
      } else {
        // error status that indicates no more retries
        retries = 1;
        throw new HttpError(resp.status, resp.statusText);
      }
    }).catch(function (error) {
      if (retries === 1) throw error;
      return delay(delayMs).then(function () {
        return fetch_with_exponential_timeout(url, options, delayMs * 2, retries - 1);
      });
    });
  }

export const doPost =
  (url, requestJsonObject, endpoint) => {
    return fetch_with_exponential_timeout(endpoint + url,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'sessiontoken'
        },
        body: JSON.stringify(requestJsonObject)
      }
      , 1000, 5);
  }

export const doGet =
  (url, endpoint) => {
    return fetch_with_exponential_timeout(endpoint + url,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': '*/*',
          'Access-Control-Request-Headers': 'sessiontoken'
        }
      }
      , 1000, 5);
  }

export const getVersion =
  (endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doGet('/repo/v1/version', endpoint);
  }

export const getQueryTableResultsFromJobId =
  (entityId, jobId, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doGet('/repo/v1/entity/' + entityId + '/table/query/async/get/' + jobId, endpoint)
      .then(resp => {
        // is this the job status?
        if (resp.jobState && resp.jobState !== 'FAILED') {
          // still processing, wait for a second and try again
          return delay(1000).then(function () {
            return getQueryTableResultsFromJobId(entityId, jobId, endpoint);
          });
        } else {
          // these must be the query results!
          return resp;
        }
      }).catch(function (error) {
        throw error;
      })
  }

export const getQueryTableResults =
  (queryBundleRequest, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/entity/' + queryBundleRequest.entityId + '/table/query/async/start', queryBundleRequest, endpoint)
      .then(resp => {
        //started query, now attempt to get the results.
        return getQueryTableResultsFromJobId(queryBundleRequest.entityId, resp.token, endpoint);
      }).catch(function (error) {
        throw error;
      })
  }
