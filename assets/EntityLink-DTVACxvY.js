import{j as u}from"./jsx-runtime-Du8NFWEI.js";import{l as g,S as E,g as N,B as k,L as T}from"./useFiles-CuNzHLyH.js";import"./VerificationSubmission-D0JvCzU5.js";import{d as v,h as q,j as H}from"./StringUtils-Cm4tp8FJ.js";import"./OrientationBanner-C-7EA0fi.js";import"./index-Dl6G-zuu.js";import{a as I}from"./useEntity-Bng6vOjv.js";import{u as b}from"./useQuery-BiN9FESP.js";import{u as V}from"./utils-Bx1BRerw.js";import{E as c}from"./EntityIcon-iLa7uQes.js";import{E as L}from"./ErrorChip-D2cxLG3s.js";import{L as Q}from"./Link-CWXcK22Y.js";import{S as j}from"./Skeleton-h9JRD3HJ.js";function z(t,n){const{accessToken:l,keyFactory:r}=g(),i=V();t=t.map(o=>({...o,targetId:v(o.targetId)}));const d=async()=>{const o=await E.getEntityHeaders(t,l);return o.results.forEach(e=>{const s=t.find(a=>a.targetVersionNumber?a.targetId===e.id&&a.targetVersionNumber===e.versionNumber:a.targetId===e.id);if(s&&(i.setQueryData(r.getEntityHeadersQueryKey([s]),{results:[e],totalNumberOfResults:1}),i.setQueryData(r.getEntityHeaderQueryKey(s.targetId,s.targetVersionNumber),e),s.targetVersionNumber&&e.isLatestVersion)){const a={targetId:e.id};i.setQueryData(r.getEntityHeadersQueryKey([a]),{results:[e],totalNumberOfResults:1}),i.setQueryData(r.getEntityHeaderQueryKey(s.targetId),e)}}),o};return b({...n,queryKey:r.getEntityHeadersQueryKey(t),queryFn:d})}function _(t="",n,l){const{accessToken:r,keyFactory:i}=g();return t&&(t=v(t)),b({enabled:!!t,...l,queryKey:i.getEntityHeaderQueryKey(t,n),queryFn:()=>E.getEntityHeader(t,n,r)})}const f=t=>{const{entity:n,className:l,versionNumber:r,displayTextField:i="name",link:d=!0,showIcon:o=!0}=t;let e="";typeof n=="string"&&(e=n);const s=!!e&&typeof n=="string",{data:a,isLoading:h}=_(e,r,{enabled:s}),x=s&&a==null&&!h,{error:m}=I(e,r,{enabled:x});if(a||typeof n!="string"){const y=a??n;let p;return"concreteType"in y?p=q(y.concreteType):p=H(y),d?u.jsxs(Q,{className:l,target:"_blank",rel:"noopener noreferrer",href:typeof d=="string"?d:`${N(k.PORTAL_ENDPOINT)}Synapse:${y.id}${r?`.${r}`:""}`,children:[o&&u.jsx(c,{type:p,style:{marginRight:"6px"}}),y[i]]}):u.jsxs("p",{className:l,children:[o&&u.jsx(c,{type:p,style:{marginRight:"6px"}}),y[i]]})}else return m?e?u.jsx(L,{chipText:e,error:m}):u.jsx(T,{error:m}):u.jsx(j,{variant:"rectangular",width:"100"})};try{f.displayName="EntityLink",f.__docgenInfo={description:"",displayName:"EntityLink",props:{entity:{defaultValue:null,description:"",name:"entity",required:!0,type:{name:"string | EntityHeader | Entity"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},link:{defaultValue:null,description:"Whether the component should link to the entity page in Synapse. Link can be overriden by passing a string. Default true",name:"link",required:!1,type:{name:"string | boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showIcon:{defaultValue:null,description:"Whether to display an icon identifying the entity type. Default true",name:"showIcon",required:!1,type:{name:"boolean"}},displayTextField:{defaultValue:null,description:"The field of the entity to display. Default is 'name'",name:"displayTextField",required:!1,type:{name:"enum",value:[{value:'"name"'},{value:'"type"'},{value:'"id"'},{value:'"description"'},{value:'"etag"'},{value:'"createdOn"'},{value:'"modifiedOn"'},{value:'"createdBy"'},{value:'"modifiedBy"'},{value:'"parentId"'},{value:'"concreteType"'},{value:'"versionNumber"'},{value:'"versionLabel"'},{value:'"benefactorId"'},{value:'"isLatestVersion"'}]}}}}}catch{}export{f as E,_ as a,z as u};
