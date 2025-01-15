import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{o as v,Q as s}from"./useFiles-C_uTITWc.js";import{i as S,g as b}from"./SynapseConstants-BvEDI-PI.js";import"./index-Dl6G-zuu.js";import{p as R}from"./SqlFunctions-wrOf9Cnm.js";import{c as _}from"./RegularExpressions-jA8tWTUq.js";import"./VerificationSubmission-CjmU3lv6.js";import"./OrientationBanner-xckBiTXb.js";import{L as k}from"./index-pgNzZV2V.js";import{d as I}from"./dayjs.min-d18Up55D.js";import{f as D}from"./DateFormatter-dWOU8vCr.js";import{B as n}from"./Box-CaFleW7-.js";import{T as o}from"./Typography-DrqHmlDD.js";import{B as q}from"./Button-DtfaTZY_.js";import{G as C}from"./Grid2-B71BdJYM.js";import{S as B}from"./Skeleton-CW6YXi1_.js";import{L as w}from"./Link-DxNs_73S.js";const E=({pub:t,isLoading:l,categoryColIndex:a,titleColIndex:d,journalColIndex:x,publicationDateColIndex:p,doiColIndex:m})=>e.jsx(C,{height:{xs:"auto",sm:"initial"},minWidth:{xs:"280px",lg:"initial"},maxWidth:{xs:"450px",lg:"initial"},children:e.jsx(n,{sx:{height:"100%"},children:l?e.jsx(B,{variant:"rectangular",height:275,width:"100%"}):e.jsxs("div",{children:[t.values[a]&&e.jsx(o,{variant:"overline",fontSize:"14px",sx:{backgroundColor:"grey.300",borderRadius:"3px",padding:"4px 8px",border:"none",lineHeight:"initial"},children:t.values[a]}),e.jsx(o,{variant:"headline2",color:"grey.1000",fontSize:"21px",sx:{padding:"20px 0px"},children:e.jsx(w,{href:_(t.values[m]||""),target:"_blank",sx:{color:"inherit",textDecoration:"none",fontWeight:"inherit","&:hover":{textDecoration:"none"}},children:t.values[d]})}),e.jsxs(n,{display:"flex",gap:"8px",flexDirection:"column",children:[e.jsx(o,{variant:"body1",color:"grey.700",fontSize:"14px",fontStyle:"italic",lineHeight:1.35,children:t.values[x]}),e.jsx(o,{variant:"body1",color:"grey.700",fontSize:"14px",lineHeight:1.35,paddingBottom:{xs:0,md:"35px"},children:t.values[p]&&D(I(Number(t.values[p])),"MMMM, YYYY")})]})]})})},t.rowId);function u(t){const{sql:l,buttonLink:a,buttonLinkText:d,summaryText:x}=t,p=R(l),m={partMask:S|b,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:p,query:{sql:l}},{data:r,isLoading:f}=v(m),g=(r==null?void 0:r.queryResult.queryResults.rows)??[];let c;(i=>{i.CATEGORY="Category",i.JOURNAL="Journal",i.TITLE="Title",i.PUBLICATION_DATE="publicationDate",i.DOI="DOI"})(c||(c={}));const h=s("Category",r),y=s("Journal",r),j=s("Title",r),T=s("publicationDate",r),L=s("DOI",r);return e.jsxs(n,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"3fr 1fr"},height:{xs:"auto",md:"initial"},gap:{xs:"24px",md:"80px"},padding:{xs:"40px",lg:"80px"}},children:[e.jsx(n,{sx:{order:{xs:1,md:0}},children:e.jsx(n,{sx:i=>({display:"grid",gap:"32px",gridTemplateColumns:{xs:"1fr",sm:"repeat(auto-fill, minmax(280px, 1fr))",lg:"repeat(auto-fill, minmax(255px, 1fr))",xl:"repeat(auto-fill, minmax(322px, 1fr))"},[i.breakpoints.down("sm")]:{"& > :nth-of-type(n+4)":{display:"none"}}}),children:g.map(i=>e.jsx(E,{pub:i,isLoading:f,categoryColIndex:h,titleColIndex:j,journalColIndex:y,publicationDateColIndex:T,doiColIndex:L},i.rowId))})}),e.jsx(n,{children:e.jsxs(n,{display:"flex",flexDirection:"column",gap:"16px",sx:{borderTop:"3px solid",borderColor:"grey.400",padding:"30px 0"},children:[e.jsx(o,{variant:"headline2",color:"grey.1000",fontSize:"24px",children:"Recently Published"}),e.jsx(o,{variant:"body1",sx:{fontStyle:"italic",color:"grey.800"},children:x&&x}),a&&d&&e.jsx(q,{variant:"contained",to:a,component:k,sx:{whiteSpace:"nowrap",alignSelf:"flex-start",padding:"6px 24px",fontWeight:600},children:d})]})})]})}try{u.displayName="RecentPublicationsGrid",u.__docgenInfo={description:"",displayName:"RecentPublicationsGrid",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},buttonLink:{defaultValue:null,description:"",name:"buttonLink",required:!1,type:{name:"string"}},buttonLinkText:{defaultValue:null,description:"",name:"buttonLinkText",required:!1,type:{name:"string"}},summaryText:{defaultValue:null,description:"",name:"summaryText",required:!1,type:{name:"string"}}}}}catch{}export{u as R};
