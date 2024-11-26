import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{I as v}from"./IconSvg-vOk73ZFq.js";import{l as f}from"./useFiles-CxxOxyKU.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-CmcMRs19.js";import"./OrientationBanner-Dto5BQb9.js";import"./index-Cu9bd8lq.js";import{u as g,a as x,b as h}from"./useFavorites-BoTuIqWO.js";import{C as y}from"./ConditionalWrapper-C6_4TcM5.js";import{S as F}from"./Skeleton-BfmxkurM.js";import{T as I}from"./Tooltip-UqEOsFTY.js";import{I as _}from"./IconButton-Dr0cGlMc.js";function a(r){const{entityId:e}=r,{accessToken:d}=f(),n=!!d,{isFavorite:o,isLoading:s}=g(e),{mutate:p,isPending:m}=x(),{mutate:c,isPending:l}=h(),u=s||m||l||!n;let i="Add to Favorites";return n?o&&(i="Remove from Favorites"):i="Sign in to add this to your favorites",t.jsx(y,{condition:s,wrapper:F,children:t.jsx(I,{title:i,placement:"top",children:t.jsx("span",{children:t.jsx(_,{size:"small",disabled:u,onClick:()=>{o?c(e):p(e)},sx:{padding:"2px"},children:t.jsx(v,{icon:o?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{a.displayName="FavoriteButton",a.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
added to/removed from their favorites`,displayName:"FavoriteButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{a as F};
