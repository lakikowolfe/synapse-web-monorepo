import{u as y}from"./useQuery-BEUP4ZKU.js";import{u as i}from"./useInfiniteQuery-CNvMob5p.js";import{l as s,S as u}from"./useFiles-DsiWygVK.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-SKYrON-T.js";import"./OrientationBanner-DJ0ZMRRM.js";import"./index-Cu9bd8lq.js";import{g as F}from"./InfiniteQueryUtils-CKlRW-xB.js";import"./jsx-runtime-DoxjgJx5.js";function f(e,r){const{accessToken:a,keyFactory:t}=s();return y({...r,queryKey:t.getForumModeratorsQueryKey(e),queryFn:()=>u.getModerators(a,e)})}function h(e,r){const{accessToken:a,keyFactory:t}=s();return y({...r,queryKey:t.getForumMetadataQueryKey(e),queryFn:()=>u.getForumMetadata(a,e)})}function M(e,r,a,t,n,o){const{accessToken:m,keyFactory:c}=s();return i({...o,queryKey:c.getForumThreadsQueryKey(e,r,a,t,n),queryFn:async g=>u.getForumThreads(m,e,g.pageParam,r,a,t,n),initialPageParam:void 0,getNextPageParam:F})}function Q(e,r,a){const{synapseClient:t,keyFactory:n}=s();return i({...a,queryKey:n.getForumSearchQueryKey(e,r),queryFn:o=>t.discussionServicesClient.postRepoV1ForumForumIdSearch({forumId:e,discussionSearchRequest:{...r,nextPageToken:o.pageParam}}),initialPageParam:void 0,getNextPageParam:o=>o.nextPageToken})}export{f as a,Q as b,h as c,M as u};
