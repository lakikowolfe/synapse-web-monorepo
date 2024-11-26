import{j as i}from"./jsx-runtime-DoxjgJx5.js";import{r as x}from"./index-Cu9bd8lq.js";import{A as J}from"./Alert-CFMVYrhF.js";import{S as M}from"./Stack-D7-BSZET.js";import{B as Q}from"./Box-BaZAwz5V.js";import{A as Y}from"./AlertTitle-D3sbju9B.js";import{b as d,a as N,g as _,E as Z,_ as j,d as ee,e as k}from"./createTheme-KpOM0lcD.js";import{s as w,u as q,c as z}from"./styled-BBrRP0Md.js";import{u as ne}from"./utils-tKVbghIn.js";import{e as P}from"./mergeSlotProps-HzkJhcwJ.js";import{a as te,u as R}from"./TransitionGroupContext-C4KIfRep.js";import{u as oe,G as re}from"./Grow-B7DzSRwx.js";import{P as ae}from"./Paper-1rWVnzjH.js";import{C as ie}from"./ClickAwayListener-Ba-YFlDA.js";import{T as se}from"./Tooltip-UqEOsFTY.js";import{B as le}from"./Button-D1yxts2k.js";function ce(n={}){const{autoHideDuration:e=null,disableWindowBlurListener:a=!1,onClose:t,open:s,resumeHideDuration:p}=n,f=te();x.useEffect(()=>{if(!s)return;function o(r){r.defaultPrevented||(r.key==="Escape"||r.key==="Esc")&&(t==null||t(r,"escapeKeyDown"))}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[s,t]);const m=R((o,r)=>{t==null||t(o,r)}),u=R(o=>{!t||o==null||f.start(o,()=>{m(null,"timeout")})});x.useEffect(()=>(s&&u(e),f.clear),[s,e,u,f]);const g=o=>{t==null||t(o,"clickaway")},l=f.clear,h=x.useCallback(()=>{e!=null&&u(p??e*.5)},[e,p,u]),y=o=>r=>{const c=o.onBlur;c==null||c(r),h()},v=o=>r=>{const c=o.onFocus;c==null||c(r),l()},b=o=>r=>{const c=o.onMouseEnter;c==null||c(r),l()},C=o=>r=>{const c=o.onMouseLeave;c==null||c(r),h()};return x.useEffect(()=>{if(!a&&s)return window.addEventListener("focus",h),window.addEventListener("blur",l),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",l)}},[a,s,h,l]),{getRootProps:(o={})=>{const r=d({},P(n),P(o));return d({role:"presentation"},o,r,{onBlur:y(r),onFocus:v(r),onMouseEnter:b(r),onMouseLeave:C(r)})},onClickAway:g}}function ue(n){return N("MuiSnackbarContent",n)}_("MuiSnackbarContent",["root","message","action"]);const de=["action","className","message","role"],pe=n=>{const{classes:e}=n;return z({root:["root"],action:["action"],message:["message"]},ue,e)},fe=w(ae,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,e)=>e.root})(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98,a=Z(n.palette.background.default,e);return d({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(a),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),me=w("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,e)=>e.message})({padding:"8px 0"}),ge=w("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),he=x.forwardRef(function(e,a){const t=q({props:e,name:"MuiSnackbarContent"}),{action:s,className:p,message:f,role:m="alert"}=t,u=j(t,de),g=t,l=pe(g);return i.jsxs(fe,d({role:m,square:!0,elevation:6,className:ee(l.root,p),ownerState:g,ref:a},u,{children:[i.jsx(me,{className:l.message,ownerState:g,children:f}),s?i.jsx(ge,{className:l.action,ownerState:g,children:s}):null]}))});function xe(n){return N("MuiSnackbar",n)}_("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Ce=["onEnter","onExited"],be=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],ye=n=>{const{classes:e,anchorOrigin:a}=n,t={root:["root",`anchorOrigin${k(a.vertical)}${k(a.horizontal)}`]};return z(t,xe,e)},O=w("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:a}=n;return[e.root,e[`anchorOrigin${k(a.anchorOrigin.vertical)}${k(a.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:e})=>{const a={left:"50%",right:"auto",transform:"translateX(-50%)"};return d({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},e.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},e.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},e.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:d({},e.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},e.anchorOrigin.horizontal==="center"&&a,e.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},e.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),ve=x.forwardRef(function(e,a){const t=q({props:e,name:"MuiSnackbar"}),s=ne(),p={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{action:f,anchorOrigin:{vertical:m,horizontal:u}={vertical:"bottom",horizontal:"left"},autoHideDuration:g=null,children:l,className:h,ClickAwayListenerProps:y,ContentProps:v,disableWindowBlurListener:b=!1,message:C,open:S,TransitionComponent:o=re,transitionDuration:r=p,TransitionProps:{onEnter:c,onExited:T}={}}=t,F=j(t.TransitionProps,Ce),V=j(t,be),A=d({},t,{anchorOrigin:{vertical:m,horizontal:u},autoHideDuration:g,disableWindowBlurListener:b,TransitionComponent:o,transitionDuration:r}),I=ye(A),{getRootProps:W,onClickAway:H}=ce(d({},A)),[G,L]=x.useState(!0),U=oe({elementType:O,getSlotProps:W,externalForwardedProps:V,ownerState:A,additionalProps:{ref:a},className:[I.root,h]}),$=E=>{L(!0),T&&T(E)},K=(E,X)=>{L(!1),c&&c(E,X)};return!S&&G?null:i.jsx(ie,d({onClickAway:H},y,{children:i.jsx(O,d({},U,{children:i.jsx(o,d({appear:!0,in:S,timeout:r,direction:m==="top"?"down":"up",onEnter:K,onExited:$},F,{children:l||i.jsx(he,d({message:C,action:f},v))}))}))}))});function ke(n){return n==="danger"?"error":n}function B(n){const{config:e,variant:a}=n;return e&&("onClick"in e||"href"in e)?i.jsx(se,{title:e.tooltipText??"",enterNextDelay:300,children:i.jsx("span",{"data-tip-disable":!1,children:i.jsx(le,{variant:a,color:"primary",disabled:e.isDisabled,onClick:t=>{"onClick"in e?(t.preventDefault(),e.onClick(t)):"href"in e&&(t.preventDefault(),window.open(e.href,"_blank","noopener"))},children:e.text})})}):null}function D(n){const{title:e,description:a,primaryButtonConfig:t,secondaryButtonConfig:s,tertiaryButtonConfig:p,show:f=!0,onClose:m,autoCloseAfterDelayInSeconds:u,variant:g="info",isGlobal:l=!0,icon:h,sx:y,globalAlertSx:v}=n;x.useEffect(()=>{let C;return m&&u&&(C=setTimeout(m,u*1e3)),()=>{C&&clearTimeout(C)}},[m,u]);const b=i.jsx(J,{severity:ke(g),sx:{width:"100%",my:"10px",".MuiAlert-message":{flexGrow:1},...y},className:"FullWidthAlert",onClose:m,icon:h,children:i.jsxs(M,{direction:{xs:"column",sm:"row"},alignItems:{xs:"start",sm:"center"},spacing:{xs:1,sm:2},display:"flex",justifyContent:"space-between",children:[i.jsxs(Q,{children:[e&&i.jsx(Y,{children:e}),a]}),(t||s||p)&&i.jsxs(M,{spacing:{xs:1,lg:2},direction:{xs:"column-reverse",sm:"column",lg:"row"},alignItems:"center",display:"flex",flexShrink:0,children:[p&&i.jsx(B,{config:p,variant:"text"}),s&&i.jsx(B,{config:s,variant:"text"}),t&&i.jsx(B,{config:t,variant:"contained"})]})]})});return i.jsx(i.Fragment,{children:l?i.jsx(ve,{open:f,className:l?"FullWidthAlertGlobal":void 0,sx:{width:"96%",filter:"drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05))",...v},anchorOrigin:{vertical:"bottom",horizontal:"center"},TransitionProps:{appear:!1},children:b}):f&&b})}try{D.displayName="FullWidthAlert",D.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"FullWidthAlert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},primaryButtonConfig:{defaultValue:null,description:"",name:"primaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},secondaryButtonConfig:{defaultValue:null,description:"",name:"secondaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},tertiaryButtonConfig:{defaultValue:null,description:"",name:"tertiaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},autoCloseAfterDelayInSeconds:{defaultValue:null,description:"",name:"autoCloseAfterDelayInSeconds",required:!1,type:{name:"number"}},isGlobal:{defaultValue:null,description:"",name:"isGlobal",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},globalAlertSx:{defaultValue:null,description:"",name:"globalAlertSx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}export{D as F};
