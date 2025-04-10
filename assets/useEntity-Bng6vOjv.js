import{be as M,bf as w,l as a,S as o,bg as I}from"./useFiles-CuNzHLyH.js";import"./VerificationSubmission-D0JvCzU5.js";import{x as h}from"./StringUtils-Cm4tp8FJ.js";import{l as A,u as d}from"./useQuery-BiN9FESP.js";import{i as S}from"./isArray-Dxzbedgu.js";import{i as T}from"./_baseTimes-M2nZWodf.js";import{i as Q,o as K}from"./omitBy-BrqSWPCK.js";import"./OrientationBanner-C-7EA0fi.js";import{r as G}from"./index-Dl6G-zuu.js";import{u as L}from"./useQueries-CnCwgKI-.js";import{u as m}from"./utils-Bx1BRerw.js";import{u as E}from"./useMutation-DjwfMZ6R.js";import{u as B}from"./useInfiniteQuery-BX22aJZe.js";import{i as F}from"./QueryFilterUtils-JVCgMZLh.js";import{g as p}from"./InfiniteQueryUtils-CKlRW-xB.js";import"./jsx-runtime-Du8NFWEI.js";import{p as D,o as O}from"./pick-BSFRNhG-.js";const k={includeEntity:!0,includeEntityPath:!0,includeAnnotations:!0,includePermissions:!0,includeHasChildren:!0,includeAccessControlList:!0,includeFileHandles:!0,includeTableBundle:!0,includeRootWikiId:!0,includeBenefactorACL:!0,includeDOIAssociation:!0,includeFileName:!0,includeThreadCount:!0,includeRestrictionInformation:!0},P=(e,t)=>{if(!(S(e)||S(t))&&!(!T(e)||!T(t))&&!(!Q(e,void 0)&&!Q(t,void 0)))return A(K(e,s=>s===void 0),K(t,s=>s===void 0),P)};function V(e,t){return A(e,t,P)}function v(e,t){const s=new Set;for(const u of e)s.add(u.id);for(const u of t)if(u.id!=null&&!s.has(u.id))throw new Error(`Proposed schema contains a new column model with ID ${u.id} that is not in the old schema.`)}async function J(e,t,s,u){v(s,u);const n=new Map;for(const l of s)n.set(l.id,l);const r=[];for(const l of u){const y={...l};if(y.id!=null){const g=n.get(y.id);g!=null&&!V(g,y)&&delete y.id}r.push(y)}const c=(await M(e,r)).list,i=[],f=new Set;for(let l=0;l<u.length;l++){const y=u[l].id??null,g=c[l].id;y!=null&&f.add(y),f.add(g),y!=null&&y!==g?i.push({oldColumnId:y,newColumnId:g}):y==null&&i.push({oldColumnId:null,newColumnId:g})}for(const l of s){const y=l.id;f.has(y)||i.push({oldColumnId:y,newColumnId:null})}return{concreteType:"org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest",entityId:t,changes:[{concreteType:"org.sagebionetworks.repo.model.table.TableSchemaChangeRequest",entityId:t,changes:i,orderedColumnIds:c.map(l=>l.id)}]}}function C(e,t,s=k){const{accessToken:u,keyFactory:n}=a();return{queryKey:n.getEntityBundleQueryKey(e,t,s),queryFn:()=>o.getEntityBundleV2(e,s,t,u)}}function ae(e,t,s=k,u){const n=C(e,t,s);return d({...u,...n})}function oe(e,t,s=k,u){const n=C(e,t,s);return w({...u,...n})}function U(){const{keyFactory:e,accessToken:t}=a();return(s,u)=>({queryKey:e.getEntityVersionQueryKey(s,u),queryFn:()=>o.getEntity(t,s,u==null?void 0:u.toString())})}function ie(e,t,s){const u=U();return d({...s,...u(e,t)})}function ye(e,t){const{accessToken:s,keyFactory:u}=a(),n=G.useMemo(()=>({queries:e.map(r=>({queryKey:u.getEntityVersionQueryKey(r.id,r.versionNumber),queryFn:()=>o.getEntity(s,r.id,r.versionNumber),options:t}))}),[s,e,u,t]);return L(n)}function le(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({mutationFn:n=>o.createEntity(n,s),onSuccess:async(n,r,c)=>{const i=u.getEntityQueryKey(n.id);t.setQueryData(i,n),t.setQueryData(u.getEntityLookupQueryKey({parentId:n.parentId,entityName:n.name}),n.id),await F(t,u,n.id,i),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function de(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({...e,mutationFn:n=>o.updateEntity(n,s),onSuccess:async(n,r,c)=>{const i=u.getEntityQueryKey(n.id);t.setQueryData(i,n),await F(t,u,n.id,i),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function fe(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({...e,mutationFn:n=>o.deleteEntity(s,n),onSuccess:async(n,r,c)=>{await F(t,u,r),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function me(e,t=0,s=200,u){const{accessToken:n,keyFactory:r}=a();return d({...u,queryKey:r.getPaginatedEntityVersionsQueryKey(e,s,t),queryFn:()=>o.getEntityVersions(e,n,t,s)})}function Ee(e,t){const{accessToken:u,keyFactory:n}=a();return B({...t,queryKey:n.getEntityVersionsQueryKey(e),queryFn:async r=>await o.getEntityVersions(e,u,r.pageParam,200),initialPageParam:void 0,getNextPageParam:p})}function R(e){return D(e,h[e.concreteType])}function b(e){return O(e,h[e.concreteType])}function ge(e,t,s,u){const{accessToken:n,keyFactory:r}=a();return d({...u,queryKey:r.getEntityJsonQueryKey(e,t,s),queryFn:()=>o.getEntityJson(e,t,s,n),select:c=>{const i=R(c),f=b(c);return{entity:c,entityMetadata:i,annotations:f}}})}function Fe(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({...e,mutationFn:n=>{const r=n.id;return o.updateEntityJson(r,n,s)},onSuccess:async(n,r,c)=>{const i=n.id,f=u.getEntityJsonQueryKey(i,void 0,!1);t.setQueryData(f,n),await F(t,u,i,f),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function ke(e,t){const{accessToken:s,keyFactory:u}=a();return d({...t,queryKey:u.getEntityPathQueryKey(e),queryFn:()=>o.getEntityPath(e,s)})}function Ce(e,t){const{accessToken:s,keyFactory:u}=a();return d({...t,queryKey:u.getEntityPathQueryKey(e),queryFn:()=>o.getEntityACL(e,s)})}function qe(e,t){const{accessToken:s,keyFactory:u}=a();return d({...t,queryKey:u.getEntityAliasQueryKey(e),queryFn:()=>o.getEntityAlias(e,s)})}function Se(e,t,s){const{accessToken:u,keyFactory:n}=a();return d({...s,queryKey:n.getEntityEvaluationsQueryKey(e),queryFn:()=>o.getAllEntityEvaluations(e,t,u)})}function Te(e,t){const{accessToken:s,keyFactory:u}=a();return d({...t,queryKey:u.getEntityPermissionsQueryKey(e),queryFn:()=>o.getEntityPermissions(e,s)})}const q=async(e,t,s,u)=>{const n=u.getEntityACLQueryKey(e);t&&s.setQueryData(n,t),await F(s,u,e,n)};function Qe(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({...e,mutationFn:n=>o.createEntityACL(n,s),onSuccess:async(n,r,c)=>{await q(n.id,n,t,u),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function Ke(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({...e,mutationFn:n=>o.updateEntityACL(n,s),onSuccess:async(n,r,c)=>{await q(n.id,n,t,u),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function we(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({...e,mutationFn:n=>o.deleteEntityACL(n,s),onSuccess:async(n,r,c)=>{await q(r,null,t,u),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function x(e){return{...C(e,void 0,{includeBenefactorACL:!0}),select:s=>s.benefactorAcl}}function he(e,t){const s=x(e);return w({...t,...s})}function Ae(e){const t=m(),{accessToken:s,keyFactory:u}=a();return E({...e,mutationFn:async n=>{const r=await J(s,n.entityId,n.originalColumnModels,n.newColumnModels);return o.updateTable(r,s)},onSuccess:async(n,r,c)=>{await F(t,u,r.entityId),e!=null&&e.onSuccess&&await e.onSuccess(n,r,c)}})}function Pe(){const{keyFactory:e,synapseClient:t}=a();return s=>({queryKey:e.getEntityLookupQueryKey(s),queryFn:async()=>{var u;return((u=await I(()=>t.entityServicesClient.postRepoV1EntityChild({entityLookupRequest:s})))==null?void 0:u.id)??null}})}export{k as A,ie as a,de as b,Ae as c,ge as d,me as e,fe as f,Se as g,ye as h,Ke as i,qe as j,Ce as k,Te as l,Fe as m,le as n,Ee as o,ke as p,Pe as q,U as r,oe as s,he as t,ae as u,Qe as v,we as w};
