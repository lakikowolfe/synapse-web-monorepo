import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{l as N,S as F}from"./useFiles-DA1G5KKi.js";import{g as v}from"./SynapseConstants-CNeuDNxE.js";import{r as l}from"./index-Dl6G-zuu.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./StringUtils-By8SXO8c.js";import"./OrientationBanner-D-CGIdAn.js";import{d as R}from"./dayjs.min-d18Up55D.js";import{M as T}from"./ConfirmationDialog-BLDK9Jbx.js";import{l as _}from"./LoadingScreen-BDJMIc_E.js";import{L as M}from"./LargeButton-Kr7LLS6M.js";function p({tableEntityId:o}){const{accessToken:m}=N(),[r,x]=l.useState(),[d,f]=l.useState(3);let u=!0;if(l.useEffect(()=>((()=>{if(u){if(r)return;const n={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:`SELECT "categories", "date", "title", "mdDescription" FROM ${o} ORDER BY "date" desc`},entityId:o,partMask:v};F.getQueryTableResults(n,m).then(s=>{var a;x((a=s.queryResult)==null?void 0:a.queryResults)})}})(),()=>{u=!1}),[o,m]),!r)return _;const i=r.headers,y=i.findIndex(t=>t.name==="categories"),g=i.findIndex(t=>t.name==="date"),h=i.findIndex(t=>t.name==="title"),I=i.findIndex(t=>t.name==="mdDescription");return e.jsxs("div",{className:"Feed",children:[e.jsx("div",{className:"FeedItems",children:r.rows.map((t,n)=>{if(n>d-1)return;const s=t.values;s.some(c=>c===null)&&console.warn("Row has null value(s) when no nulls expected");const a=JSON.parse(s[y]),w=s[g],S=s[h],C=s[I];return e.jsx("div",{className:"FeedItem",children:e.jsxs("div",{children:[a&&e.jsx("div",{className:"FeedItemCategories",children:a.map((c,j)=>e.jsx("div",{className:"FeedItemCategory",children:c},`row-${n},categoryIndex-${j}`))}),e.jsx("p",{className:"FeedItemDate",children:R(new Date(parseInt(w))).format("MMMM YYYY")}),e.jsx("p",{className:"FeedItemTitle",children:S}),e.jsx("div",{className:"FeedItemDescription",children:e.jsx(T,{markdown:C})})]})},`row-${n}`)})}),r.rows.length>d&&e.jsx("div",{className:"FeedViewAllNewsButtonContainer",children:e.jsx(M,{color:"primary",variant:"contained",onClick:()=>f(d+3),children:"View More News"})})]})}try{p.displayName="TableFeedCards",p.__docgenInfo={description:"",displayName:"TableFeedCards",props:{tableEntityId:{defaultValue:null,description:"",name:"tableEntityId",required:!0,type:{name:"string"}}}}}catch{}export{p as T};
