import{g as h,a as b,e as p,b as t,_ as y,d as x}from"./createTheme-KpOM0lcD.js";import{r as d}from"./index-Cu9bd8lq.js";import{s as u,u as M,c as S}from"./styled-BBrRP0Md.js";import{u as O}from"./utils-tKVbghIn.js";import{j as c}from"./jsx-runtime-DoxjgJx5.js";import{B as V}from"./Backdrop-BqLX_ZJd.js";import{M as q}from"./Modal-DNSTGzgH.js";import{P as T}from"./Paper-1rWVnzjH.js";import{u as G}from"./useId-g68bhPgm.js";import{F as J}from"./Fade-AJK8kXQa.js";function Q(o){return b("MuiDialog",o)}const k=h("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Z=d.createContext({}),oo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],eo=u(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),ao=o=>{const{classes:e,scroll:a,maxWidth:i,fullWidth:r,fullScreen:s}=o,n={root:["root"],container:["container",`scroll${p(a)}`],paper:["paper",`paperScroll${p(a)}`,`paperWidth${p(String(i))}`,r&&"paperFullWidth",s&&"paperFullScreen"]};return S(n,Q,e)},io=u(q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),to=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${p(a.scroll)}`]]}})(({ownerState:o})=>t({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),ro=u(T,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${p(a.scroll)}`],e[`paperWidth${p(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>t({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),So=d.forwardRef(function(e,a){const i=M({props:e,name:"MuiDialog"}),r=O(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,BackdropComponent:g,BackdropProps:A,children:j,className:N,disableEscapeKeyDown:P=!1,fullScreen:F=!1,fullWidth:U=!1,maxWidth:_="sm",onBackdropClick:$,onClose:D,open:B,PaperComponent:I=T,PaperProps:R={},scroll:L="paper",TransitionComponent:E=J,transitionDuration:w=s,TransitionProps:Y}=i,X=y(i,oo),f=t({},i,{disableEscapeKeyDown:P,fullScreen:F,fullWidth:U,maxWidth:_,scroll:L}),v=ao(f),C=d.useRef(),z=m=>{C.current=m.target===m.currentTarget},H=m=>{C.current&&(C.current=null,$&&$(m),D&&D(m,"backdropClick"))},W=G(l),K=d.useMemo(()=>({titleId:W}),[W]);return c.jsx(io,t({className:x(v.root,N),closeAfterTransition:!0,components:{Backdrop:eo},componentsProps:{backdrop:t({transitionDuration:w,as:g},A)},disableEscapeKeyDown:P,onClose:D,open:B,ref:a,onClick:H,ownerState:f},X,{children:c.jsx(E,t({appear:!0,in:B,timeout:w,role:"presentation"},Y,{children:c.jsx(to,{className:x(v.container),onMouseDown:z,ownerState:f,children:c.jsx(ro,t({as:I,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":W},R,{className:x(v.paper,R.className),ownerState:f,children:c.jsx(Z.Provider,{value:K,children:j})}))})}))}))});function so(o){return b("MuiDialogActions",o)}h("MuiDialogActions",["root","spacing"]);const no=["className","disableSpacing"],lo=o=>{const{classes:e,disableSpacing:a}=o;return S({root:["root",!a&&"spacing"]},so,e)},co=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,!a.disableSpacing&&e.spacing]}})(({ownerState:o})=>t({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Po=d.forwardRef(function(e,a){const i=M({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:s=!1}=i,n=y(i,no),l=t({},i,{disableSpacing:s}),g=lo(l);return c.jsx(co,t({className:x(g.root,r),ownerState:l,ref:a},n))});function po(o){return b("MuiDialogContent",o)}h("MuiDialogContent",["root","dividers"]);function $o(o){return b("MuiDialogTitle",o)}const uo=h("MuiDialogTitle",["root"]),go=["className","dividers"],mo=o=>{const{classes:e,dividers:a}=o;return S({root:["root",a&&"dividers"]},po,e)},xo=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>t({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${uo.root} + &`]:{paddingTop:0}})),Bo=d.forwardRef(function(e,a){const i=M({props:e,name:"MuiDialogContent"}),{className:r,dividers:s=!1}=i,n=y(i,go),l=t({},i,{dividers:s}),g=mo(l);return c.jsx(xo,t({className:x(g.root,r),ownerState:l,ref:a},n))});export{So as D,Bo as a,Po as b,Z as c,k as d,$o as g};
