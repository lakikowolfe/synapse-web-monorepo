import{n as d,D as m}from"./VerificationSubmission-DL9jxYsQ.js";import{u as b}from"./useQuery-6SsvXKRa.js";import{u as l}from"./utils-Bx1BRerw.js";import{u as S}from"./useMutation-DjwfMZ6R.js";import{u as g}from"./useInfiniteQuery-DncR_COg.js";import{l as y,S as p,N as f}from"./useFiles-DA1G5KKi.js";import"./OrientationBanner-D-CGIdAn.js";import{r as Q}from"./index-Dl6G-zuu.js";import"./StringUtils-By8SXO8c.js";import"./jsx-runtime-Du8NFWEI.js";function w(t,e){const{accessToken:s,keyFactory:r}=y();return b({...e,queryKey:r.getSubscribersQueryKey(t.objectId,t.objectType),queryFn:()=>p.getSubscribers(s,t)})}function K(t,e,s){const{accessToken:r,keyFactory:n}=y(),i=async()=>{const u={objectType:e,idList:[t],sortByType:d.OBJECT_ID,sortDirection:m.ASC},o=await p.postSubscriptionList(r,u);return f(o.results)?null:o.results[0]};return b({...s,queryKey:n.getSubscriptionQueryKey(t,e),queryFn:i})}function B(t,e,s){const{accessToken:r,keyFactory:n}=y(),i=l();return g({...e,queryKey:s??n.getAllSubscriptionsQueryKey(t),queryFn:async u=>{const o=u.pageParam,c=await p.getAllSubscriptions(r,10,o,t);return c.results.forEach(a=>{i.setQueryData(n.getSubscriptionQueryKey(a.objectId,a.objectType),a)}),c},initialPageParam:void 0,getNextPageParam:(u,o)=>{const c=o.flatMap(a=>a.results).length;if(u.totalNumberOfResults>c)return c}})}function q(t){const e=l(),{accessToken:s,keyFactory:r}=y();return S({...t,mutationFn:n=>p.postSubscription(s,n),onSuccess:async(n,i,u)=>{await Promise.all([e.invalidateQueries({queryKey:r.getAllSubscriptionsQueryKey()}),e.invalidateQueries({queryKey:r.getSubscriptionQueryKey(i.objectId,i.objectType)}),e.invalidateQueries({queryKey:r.getSubscribersQueryKey(i.objectId,i.objectType)})])}})}function P(t){const e=l(),{accessToken:s,keyFactory:r}=y();return S({...t,mutationFn:n=>p.deleteSubscription(s,n.subscriptionId),onSuccess:async(n,i,u)=>{await Promise.all([e.invalidateQueries({queryKey:r.getAllSubscriptionsQueryKey()}),e.invalidateQueries({queryKey:r.getSubscriptionQueryKey(i.objectId,i.objectType)}),e.invalidateQueries({queryKey:r.getSubscribersQueryKey(i.objectId,i.objectType)})])}})}const E=(t,e)=>{const{data:s,isLoading:r}=K(t,e),{mutate:n,isPending:i}=q(),{mutate:u,isPending:o}=P(),c=r||i||o,a=Q.useCallback(()=>{s?u(s):n({objectId:t,objectType:e})},[u,t,e,n,s]);return{isLoading:c,subscription:s,toggleSubscribed:a,isSubscribed:!!s}};export{E as a,B as b,w as u};
