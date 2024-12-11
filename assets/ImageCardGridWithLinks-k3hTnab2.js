import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{L as j}from"./index-7VgAWYHO.js";import{o as R,aZ as f,by as S}from"./useFiles-DsiWygVK.js";import{q as T,f as k}from"./SynapseConstants-spzdvz2t.js";import{r as L}from"./index-Cu9bd8lq.js";import{p as E}from"./SqlFunctions-Drr0XsQh.js";import"./RegularExpressions-SKYrON-T.js";import{F as q}from"./VerificationSubmission-DL9jxYsQ.js";import"./OrientationBanner-DJ0ZMRRM.js";import{a as w,g as U,b as x,_ as F,d as N,i as O}from"./createTheme-BIBP8v0l.js";import{r as D}from"./createSvgIcon-n5rVXizw.js";import{B as y}from"./Box-Bt_N9PQN.js";import{T as h}from"./Typography-D6GCV-CB.js";import{G as _}from"./Grid-zRSXpTvc.js";import{S as A}from"./Skeleton-DxEJ6_Wp.js";import{C as G}from"./Card-C3hcFJq7.js";import{L as B}from"./Link-DPsc3TBb.js";import{s as P,u as Q,c as W}from"./styled-DKRXvDfM.js";function z(e){return w("MuiCardMedia",e)}U("MuiCardMedia",["root","media","img"]);const V=["children","className","component","image","src","style"],$=e=>{const{classes:r,isMediaComponent:i,isImageComponent:s}=e;return W({root:["root",i&&"media",s&&"img"]},z,r)},H=P("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e,{isMediaComponent:s,isImageComponent:n}=i;return[r.root,s&&r.media,n&&r.img]}})(({ownerState:e})=>x({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),K=["video","audio","picture","iframe","img"],Y=["picture","img"],Z=L.forwardRef(function(r,i){const s=Q({props:r,name:"MuiCardMedia"}),{children:n,className:d,component:o="div",image:a,src:m,style:c}=s,g=F(s,V),l=K.indexOf(o)!==-1,p=!l&&a?x({backgroundImage:`url("${a}")`},c):c,u=x({},s,{component:o,isMediaComponent:l,isImageComponent:Y.indexOf(o)!==-1}),b=$(u);return t.jsx(H,x({className:N(b.root,d),as:o,role:!l&&a?"img":void 0,ref:i,style:p,ownerState:u,src:l?a||m:void 0},g,{children:n}))});var C={},J=O;Object.defineProperty(C,"__esModule",{value:!0});var M=C.default=void 0,X=J(D()),ee=t;M=C.default=(0,X.default)((0,ee.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");const I="6px",te=({card:e,isLoading:r,linkColumnIndex:i,linkTextColumnIndex:s,entityId:n,fileId:d})=>{const o={associateObjectId:n,associateObjectType:q.TableEntity,fileHandleId:d??""},a=S(o,!1,{enabled:!!d}),m=a==null?void 0:a.dataUrl;return t.jsx(_,{item:!0,xs:12,sm:6,md:4,sx:{height:"245px",paddingTop:"24px",paddingLeft:"24px"},children:r?t.jsx(A,{variant:"rectangular",height:221,width:"100%"}):t.jsxs(G,{raised:!1,sx:{height:"100%",position:"relative",borderRadius:I,border:"none"},children:[t.jsxs(B,{component:j,to:e.values[i]||"",sx:{display:"flex",alignItems:"center",gap:"10px",position:"absolute",backgroundColor:"#FFFF",borderRadius:`0px 0px ${I} 0px`,textDecoration:"none","&:hover":{textDecoration:"none"},padding:"6px 10px"},children:[t.jsx(h,{color:"grey.1000",variant:"headline2",sx:{fontSize:"16px"},children:e.values[s]}),t.jsx(M,{style:{color:"unset",width:16,height:16}})]}),t.jsx(Z,{component:"img",image:m,style:{height:"100%",width:"100%",objectFit:"cover"}})]})},e.rowId)};function v(e){const{sql:r,title:i,summaryText:s}=e,n=E(r),d={partMask:T|k,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,query:{sql:r}},{data:o,isLoading:a}=R(d),m=f("Image",o),c=(o==null?void 0:o.queryResult.queryResults.rows)??[],g=f("Link",o),l=f("LinkText",o);return t.jsxs(y,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 3fr"},gap:{xs:"38px",md:"80px"}},children:[t.jsx(y,{sx:{padding:{xs:"0 16px",md:0}},children:t.jsxs(y,{display:"flex",flexDirection:"column",gap:"16px",sx:{borderTop:"3px solid",borderColor:"grey.400"},children:[t.jsx(h,{color:"grey.1000",variant:"headline2",paddingTop:"26px",children:i}),t.jsx(h,{variant:"body1",color:"grey.800",sx:{fontStyle:"italic"},children:s})]})}),t.jsx(_,{container:!0,spacing:2.5,sx:{order:{xs:1,md:0}},children:c.map(p=>{const u=p.values[m];return t.jsx(te,{card:p,linkColumnIndex:g,linkTextColumnIndex:l,fileId:u,entityId:n,isLoading:a},p.rowId)})})]})}try{v.displayName="ImageCardGridWithLinks",v.__docgenInfo={description:"",displayName:"ImageCardGridWithLinks",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summaryText:{defaultValue:null,description:"",name:"summaryText",required:!0,type:{name:"string"}}}}}catch{}export{v as I};
