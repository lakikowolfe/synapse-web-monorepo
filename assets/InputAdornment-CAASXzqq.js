import{g as y,a as C,b as c,_ as I,d as A,e as m}from"./createTheme-KpOM0lcD.js";import{r as f}from"./index-Cu9bd8lq.js";import{u as j,F as L}from"./useFormControl-vG3XTiAH.js";import{s as z,u as R,c as T}from"./styled-BBrRP0Md.js";import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{T as F}from"./Typography-Cf0oTcRj.js";function _(e){return C("MuiInputAdornment",e)}const b=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g;const $=["children","className","component","disablePointerEvents","disableTypography","position","variant"],M=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${m(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},N=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:s,position:o,size:a,variant:l}=e,d={root:["root",n&&"disablePointerEvents",o&&`position${m(o)}`,l,s&&"hiddenLabel",a&&`size${m(a)}`]};return T(d,_,t)},U=z("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:M})(({theme:e,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${b.positionStart}&:not(.${b.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),B=f.forwardRef(function(t,n){const s=R({props:t,name:"MuiInputAdornment"}),{children:o,className:a,component:l="div",disablePointerEvents:d=!1,disableTypography:x=!1,position:u,variant:v}=s,E=I(s,$),i=j()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},s,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),P=N(h);return r.jsx(L.Provider,{value:null,children:r.jsx(U,c({as:l,ownerState:h,className:A(P.root,a),ref:n},E,{children:typeof o=="string"&&!x?r.jsx(F,{color:"text.secondary",children:o}):r.jsxs(f.Fragment,{children:[u==="start"?g||(g=r.jsx("span",{className:"notranslate",children:"​"})):null,o]})}))})});export{B as I};
