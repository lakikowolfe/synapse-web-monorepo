import{_ as q,b as c}from"./createTheme-BAeQEIuu.js";import{r as E}from"./index-Dl6G-zuu.js";import{u as A}from"./useTheme-DGffmoS1.js";import{T as B,r as D,g as h}from"./utils-Cn9x6_1Z.js";import{j as G}from"./jsx-runtime-Du8NFWEI.js";import{u as H}from"./useForkRef-CEBgoE3Z.js";const J=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],K={entering:{opacity:1},entered:{opacity:1}},Y=E.forwardRef(function(l,y){const e=A(),g={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:p,appear:T=!0,children:s,easing:f,in:m,onEnter:x,onEntered:R,onEntering:L,onExit:u,onExited:P,onExiting:j,style:a,timeout:d=g,TransitionComponent:v=B}=l,w=q(l,J),r=E.useRef(null),F=H(r,s.ref,y),i=n=>t=>{if(n){const o=r.current;t===void 0?n(o):n(o,t)}},_=i(L),b=i((n,t)=>{D(n);const o=h({style:a,timeout:d,easing:f},{mode:"enter"});n.style.webkitTransition=e.transitions.create("opacity",o),n.style.transition=e.transitions.create("opacity",o),x&&x(n,t)}),C=i(R),k=i(j),S=i(n=>{const t=h({style:a,timeout:d,easing:f},{mode:"exit"});n.style.webkitTransition=e.transitions.create("opacity",t),n.style.transition=e.transitions.create("opacity",t),u&&u(n)}),z=i(P),W=n=>{p&&p(r.current,n)};return G.jsx(v,c({appear:T,in:m,nodeRef:r,onEnter:b,onEntered:C,onEntering:_,onExit:S,onExited:z,onExiting:k,addEndListener:W,timeout:d},w,{children:(n,t)=>E.cloneElement(s,c({style:c({opacity:0,visibility:n==="exited"&&!m?"hidden":void 0},K[n],a,s.props.style),ref:F},t))}))});export{Y as F};
