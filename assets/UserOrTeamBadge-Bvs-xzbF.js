import{j as a}from"./jsx-runtime-DoxjgJx5.js";import"./useFiles-CxxOxyKU.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-CmcMRs19.js";import"./OrientationBanner-Dto5BQb9.js";import"./index-Cu9bd8lq.js";import{u as p,U as m}from"./UserBadge-DvZd70pj.js";import{T as f}from"./TeamBadge-BpxFvWiu.js";import{S as c}from"./Skeleton-BfmxkurM.js";function t(n){let e=n.principalId;const{disableHref:l,showCardOnHover:d,showFullName:s,userGroupHeader:r,openLinkInNewTab:i}=n;e==null&&(e=r==null?void 0:r.ownerId);const{data:u}=p((e??"").toString(),{enabled:!r}),o=r??u;return e==null&&r==null?(console.error("Expected one of principalId or userGroupHeader to be defined but both were null or undefined"),a.jsx(a.Fragment,{})):o===void 0?a.jsx(c,{width:125,height:30}):o.isIndividual?a.jsx(m,{userId:e.toString(),disableLink:l,showFullName:s,showCardOnHover:d,openLinkInNewTab:i}):a.jsx(f,{teamId:e,teamName:o.userName,disableHref:l,openLinkInNewTab:i})}try{t.displayName="UserOrTeamBadge",t.__docgenInfo={description:"",displayName:"UserOrTeamBadge",props:{principalId:{defaultValue:null,description:"",name:"principalId",required:!1,type:{name:"string | number"}},userGroupHeader:{defaultValue:null,description:"",name:"userGroupHeader",required:!1,type:{name:"UserGroupHeader"}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}}}}}catch{}export{t as U};
