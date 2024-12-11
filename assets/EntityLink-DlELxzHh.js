import{j as u}from"./jsx-runtime-DoxjgJx5.js";import{n as g,f as N,g as k}from"./RegularExpressions-SKYrON-T.js";import{l as E,S as v,j as T,B as q,a3 as H}from"./useFiles-DsiWygVK.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./OrientationBanner-DJ0ZMRRM.js";import"./index-Cu9bd8lq.js";import{a as I}from"./useEntity-B-ACtKOb.js";import{u as b}from"./useQuery-BEUP4ZKU.js";import{u as V}from"./utils-BECe8vEQ.js";import{E as c}from"./EntityIcon-CTFj70LP.js";import{E as Q}from"./ErrorChip-WFi26el3.js";import{L}from"./Link-DPsc3TBb.js";import{S as j}from"./Skeleton-DxEJ6_Wp.js";function z(t,n){const{accessToken:l,keyFactory:r}=E(),i=V();t=t.map(o=>({...o,targetId:g(o.targetId)}));const d=async()=>{const o=await v.getEntityHeaders(t,l);return o.results.forEach(e=>{const s=t.find(a=>a.targetVersionNumber?a.targetId===e.id&&a.targetVersionNumber===e.versionNumber:a.targetId===e.id);if(s&&(i.setQueryData(r.getEntityHeadersQueryKey([s]),{results:[e],totalNumberOfResults:1}),i.setQueryData(r.getEntityHeaderQueryKey(s.targetId,s.targetVersionNumber),e),s.targetVersionNumber&&e.isLatestVersion)){const a={targetId:e.id};i.setQueryData(r.getEntityHeadersQueryKey([a]),{results:[e],totalNumberOfResults:1}),i.setQueryData(r.getEntityHeaderQueryKey(s.targetId),e)}}),o};return b({...n,queryKey:r.getEntityHeadersQueryKey(t),queryFn:d})}function _(t="",n,l){const{accessToken:r,keyFactory:i}=E();return t&&(t=g(t)),b({enabled:!!t,...l,queryKey:i.getEntityHeaderQueryKey(t,n),queryFn:()=>v.getEntityHeader(t,n,r)})}const f=t=>{const{entity:n,className:l,versionNumber:r,displayTextField:i="name",link:d=!0,showIcon:o=!0}=t;let e="";typeof n=="string"&&(e=n);const s=!!e&&typeof n=="string",{data:a,isLoading:h}=_(e,r,{enabled:s}),x=s&&a==null&&!h,{error:m}=I(e,r,{enabled:x});if(a||typeof n!="string"){const y=a??n;let p;return"concreteType"in y?p=N(y.concreteType):p=k(y),d?u.jsxs(L,{className:l,target:"_blank",rel:"noopener noreferrer",href:typeof d=="string"?d:`${T(q.PORTAL_ENDPOINT)}Synapse:${y.id}${r?`.${r}`:""}`,children:[o&&u.jsx(c,{type:p,style:{marginRight:"6px"}}),y[i]]}):u.jsxs("p",{className:l,children:[o&&u.jsx(c,{type:p,style:{marginRight:"6px"}}),y[i]]})}else return m?e?u.jsx(Q,{chipText:e,error:m}):u.jsx(H,{error:m}):u.jsx(j,{variant:"rectangular",width:"100"})};try{f.displayName="EntityLink",f.__docgenInfo={description:"",displayName:"EntityLink",props:{entity:{defaultValue:null,description:"",name:"entity",required:!0,type:{name:"string | EntityHeader | Entity"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},link:{defaultValue:null,description:"Whether the component should link to the entity page in Synapse. Link can be overriden by passing a string. Default true",name:"link",required:!1,type:{name:"string | boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showIcon:{defaultValue:null,description:"Whether to display an icon identifying the entity type. Default true",name:"showIcon",required:!1,type:{name:"boolean"}},displayTextField:{defaultValue:null,description:"The field of the entity to display. Default is 'name'",name:"displayTextField",required:!1,type:{name:"enum",value:[{value:'"name"'},{value:'"type"'},{value:'"id"'},{value:'"modifiedOn"'},{value:'"modifiedBy"'},{value:'"benefactorId"'},{value:'"isLatestVersion"'},{value:'"versionNumber"'},{value:'"versionLabel"'},{value:'"createdOn"'},{value:'"createdBy"'},{value:'"etag"'},{value:'"description"'},{value:'"parentId"'},{value:'"concreteType"'}]}}}}}catch{}export{f as E,_ as a,z as u};
