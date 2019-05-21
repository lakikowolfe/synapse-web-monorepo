import { SynapseClient } from '../utils'

/*
During SSO login, the authorization provider (Google) will send user back to the portal with the authorization code,
which can be exchanged for a Synapse user session.
This function should be called whenever the root App is initialized (to look for this code parameter and complete the round-trip).
*/
function detectSSOCode(authProvider: string, redirectURL: string) {
  // TODO: 'code' handling (from SSO) needs to be moved to root page, and then redirect to original route.
  let code: URL | null | string = new URL(window.location.href)
  // in test environment the searchParams isn't defined
  const { searchParams } = code
  if (!searchParams) {
    return
  }
  code = searchParams.get('code')
  if (code) {
    SynapseClient.oAuthSessionRequest(authProvider, code, `${redirectURL}?provider=${authProvider}`)
              .then((synToken: any) => {
                SynapseClient.setSessionTokenCookie(synToken.sessionToken).then(() => {
                  // go back to original route after successful SSO login
                  const originalUrl = localStorage.getItem('after-sso-login-url')
                  localStorage.removeItem('after-sso-login-url')
                  if (originalUrl) {
                    window.location.replace(originalUrl)
                  }
                }).catch((errSetSession) => {
                  console.error('Error on set sesion token cookie ', errSetSession)
                })
              })
              .catch((err: any) => {
                if (err.statusCode === 404) {
                  // Synapse account not found, send to registration page
                  window.location.replace('https://www.synapse.org/#!RegisterAccount:0')
                }
                console.error('Error on sso sign in ', err)
              })
  }
}

export { detectSSOCode }
