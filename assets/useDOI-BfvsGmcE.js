import{u as a}from"./useQuery-6SsvXKRa.js";import{l as u,S as y}from"./useFiles-DA1G5KKi.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./StringUtils-By8SXO8c.js";function O(e,s,t="ENTITY",n){const{accessToken:o,keyFactory:r}=u();return a({...n,queryKey:r.getDOIAssociationQueryKey(t,e,s),queryFn:()=>y.getDOIAssociation(o,e,s,t)})}function p(e,s,t="ENTITY",n){const{accessToken:o,keyFactory:r}=u();return a({...n,queryKey:r.getDOIQueryKey(t,e,s),queryFn:()=>y.getDOI(o,e,s,t)})}export{O as a,p as u};
