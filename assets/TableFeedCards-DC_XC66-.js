import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{L as N}from"./LargeButton-C-XtqatF.js";import{l as F,S as v}from"./useFiles-D8yf2tkg.js";import"./VerificationSubmission-BnFne12N.js";import"./StringUtils-CXT0ex8W.js";import{h as R}from"./SynapseConstants-GCT3viGy.js";import{r as l}from"./index-Dl6G-zuu.js";import"./OrientationBanner-D36M4lTd.js";import{d as T}from"./dayjs.min-d18Up55D.js";import{l as _}from"./LoadingScreen-Cpeaoznz.js";import{M}from"./ConfirmationDialog-32lLgIPA.js";function p({tableEntityId:o}){const{accessToken:m}=F(),[r,x]=l.useState(),[d,f]=l.useState(3);let u=!0;if(l.useEffect(()=>((()=>{if(u){if(r)return;const n={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:`SELECT "categories", "date", "title", "mdDescription" FROM ${o} ORDER BY "date" desc`},entityId:o,partMask:R};v.getQueryTableResults(n,m).then(s=>{var a;x((a=s.queryResult)==null?void 0:a.queryResults)})}})(),()=>{u=!1}),[o,m]),!r)return _;const i=r.headers,h=i.findIndex(t=>t.name==="categories"),y=i.findIndex(t=>t.name==="date"),I=i.findIndex(t=>t.name==="title"),g=i.findIndex(t=>t.name==="mdDescription");return e.jsxs("div",{className:"Feed",children:[e.jsx("div",{className:"FeedItems",children:r.rows.map((t,n)=>{if(n>d-1)return;const s=t.values;s.some(c=>c===null)&&console.warn("Row has null value(s) when no nulls expected");const a=JSON.parse(s[h]),w=s[y],S=s[I],C=s[g];return e.jsx("div",{className:"FeedItem",children:e.jsxs("div",{children:[a&&e.jsx("div",{className:"FeedItemCategories",children:a.map((c,j)=>e.jsx("div",{className:"FeedItemCategory",children:c},`row-${n},categoryIndex-${j}`))}),e.jsx("p",{className:"FeedItemDate",children:T(new Date(parseInt(w))).format("MMMM YYYY")}),e.jsx("p",{className:"FeedItemTitle",children:S}),e.jsx("div",{className:"FeedItemDescription",children:e.jsx(M,{markdown:C})})]})},`row-${n}`)})}),r.rows.length>d&&e.jsx("div",{className:"FeedViewAllNewsButtonContainer",children:e.jsx(N,{color:"primary",variant:"contained",onClick:()=>f(d+3),children:"View More News"})})]})}try{p.displayName="TableFeedCards",p.__docgenInfo={description:"",displayName:"TableFeedCards",props:{tableEntityId:{defaultValue:null,description:"",name:"tableEntityId",required:!0,type:{name:"string"}}}}}catch{}export{p as T};
