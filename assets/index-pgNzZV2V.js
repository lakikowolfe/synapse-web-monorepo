import{r as a,a as J}from"./index-Dl6G-zuu.js";import{R as Q}from"./index-DJkgPHwn.js";import{D as z,a as B,R as Z,u as $,c as ee,b as te,m as ne,E as ae,N as W,s as O,d as ie,e as re,f as H,g as F,h as V,i as K,j}from"./index-CwhkrBS5.js";/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},b.apply(this,arguments)}function G(n,t){if(n==null)return{};var e={},r=Object.keys(n),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(e[i]=n[i]);return e}function oe(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function se(n,t){return n.button===0&&(!t||t==="_self")&&!oe(n)}const le=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ue=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ce="6";try{window.__reactRouterVersion=ce}catch{}function _e(n,t){return ee({basename:t==null?void 0:t.basename,future:b({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:te({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||fe(),routes:n,mapRouteProperties:ne,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function fe(){var n;let t=(n=window)==null?void 0:n.__staticRouterHydrationData;return t&&t.errors&&(t=b({},t,{errors:de(t.errors)})),t}function de(n){if(!n)return null;let t=Object.entries(n),e={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")e[r]=new ae(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let s=new o(i.message);s.stack="",e[r]=s}catch{}}if(e[r]==null){let o=new Error(i.message);o.stack="",e[r]=o}}else e[r]=i;return e}const X=a.createContext({isTransitioning:!1}),ve=a.createContext(new Map),he="startTransition",I=J[he],pe="flushSync",A=Q[pe];function me(n){I?I(n):n()}function k(n){A?A(n):n()}class we{constructor(){this.status="pending",this.promise=new Promise((t,e)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",e(r))}})}}function ke(n){let{fallbackElement:t,router:e,future:r}=n,[i,o]=a.useState(e.state),[s,g]=a.useState(),[h,l]=a.useState({isTransitioning:!1}),[c,y]=a.useState(),[p,T]=a.useState(),[m,L]=a.useState(),S=a.useRef(new Map),{v7_startTransition:C}=r||{},d=a.useCallback(u=>{C?me(u):u()},[C]),v=a.useCallback((u,R)=>{let{deletedFetchers:w,flushSync:U,viewTransitionOpts:E}=R;w.forEach(P=>S.current.delete(P)),u.fetchers.forEach((P,q)=>{P.data!==void 0&&S.current.set(q,P.data)});let Y=e.window==null||e.window.document==null||typeof e.window.document.startViewTransition!="function";if(!E||Y){U?k(()=>o(u)):d(()=>o(u));return}if(U){k(()=>{p&&(c&&c.resolve(),p.skipTransition()),l({isTransitioning:!0,flushSync:!0,currentLocation:E.currentLocation,nextLocation:E.nextLocation})});let P=e.window.document.startViewTransition(()=>{k(()=>o(u))});P.finished.finally(()=>{k(()=>{y(void 0),T(void 0),g(void 0),l({isTransitioning:!1})})}),k(()=>T(P));return}p?(c&&c.resolve(),p.skipTransition(),L({state:u,currentLocation:E.currentLocation,nextLocation:E.nextLocation})):(g(u),l({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}))},[e.window,p,c,S,d]);a.useLayoutEffect(()=>e.subscribe(v),[e,v]),a.useEffect(()=>{h.isTransitioning&&!h.flushSync&&y(new we)},[h]),a.useEffect(()=>{if(c&&s&&e.window){let u=s,R=c.promise,w=e.window.document.startViewTransition(async()=>{d(()=>o(u)),await R});w.finished.finally(()=>{y(void 0),T(void 0),g(void 0),l({isTransitioning:!1})}),T(w)}},[d,s,c,e.window]),a.useEffect(()=>{c&&s&&i.location.key===s.location.key&&c.resolve()},[c,p,i.location,s]),a.useEffect(()=>{!h.isTransitioning&&m&&(g(m.state),l({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),L(void 0))},[h.isTransitioning,m]),a.useEffect(()=>{},[]);let f=a.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:u=>e.navigate(u),push:(u,R,w)=>e.navigate(u,{state:R,preventScrollReset:w==null?void 0:w.preventScrollReset}),replace:(u,R,w)=>e.navigate(u,{replace:!0,state:R,preventScrollReset:w==null?void 0:w.preventScrollReset})}),[e]),x=e.basename||"/",_=a.useMemo(()=>({router:e,navigator:f,static:!1,basename:x}),[e,f,x]),N=a.useMemo(()=>({v7_relativeSplatPath:e.future.v7_relativeSplatPath}),[e.future.v7_relativeSplatPath]);return a.createElement(a.Fragment,null,a.createElement(z.Provider,{value:_},a.createElement(B.Provider,{value:i},a.createElement(ve.Provider,{value:S.current},a.createElement(X.Provider,{value:h},a.createElement(Z,{basename:x,location:i.location,navigationType:i.historyAction,navigator:f,future:N},i.initialized||e.future.v7_partialHydration?a.createElement(ge,{routes:e.routes,future:e.future,state:i}):t))))),null)}const ge=a.memo(ye);function ye(n){let{routes:t,future:e,state:r}=n;return $(t,void 0,r,e)}const Se=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Re=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=a.forwardRef(function(t,e){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:g,target:h,to:l,preventScrollReset:c,viewTransition:y}=t,p=G(t,le),{basename:T}=a.useContext(W),m,L=!1;if(typeof l=="string"&&Re.test(l)&&(m=l,Se))try{let v=new URL(window.location.href),f=l.startsWith("//")?new URL(v.protocol+l):new URL(l),x=O(f.pathname,T);f.origin===v.origin&&x!=null?l=x+f.search+f.hash:L=!0}catch{}let S=ie(l,{relative:i}),C=xe(l,{replace:s,state:g,target:h,preventScrollReset:c,relative:i,viewTransition:y});function d(v){r&&r(v),v.defaultPrevented||C(v)}return a.createElement("a",b({},p,{href:m||S,onClick:L||o?r:d,ref:e,target:h}))}),Ne=a.forwardRef(function(t,e){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:g,to:h,viewTransition:l,children:c}=t,y=G(t,ue),p=F(h,{relative:y.relative}),T=H(),m=a.useContext(B),{navigator:L,basename:S}=a.useContext(W),C=m!=null&&Ce(p)&&l===!0,d=L.encodeLocation?L.encodeLocation(p).pathname:p.pathname,v=T.pathname,f=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),f=f?f.toLowerCase():null,d=d.toLowerCase()),f&&S&&(f=O(f,S)||f);const x=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let _=v===d||!s&&v.startsWith(d)&&v.charAt(x)==="/",N=f!=null&&(f===d||!s&&f.startsWith(d)&&f.charAt(d.length)==="/"),u={isActive:_,isPending:N,isTransitioning:C},R=_?r:void 0,w;typeof o=="function"?w=o(u):w=[o,_?"active":null,N?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let U=typeof g=="function"?g(u):g;return a.createElement(Te,b({},y,{"aria-current":R,className:w,ref:e,style:U,to:h,viewTransition:l}),typeof c=="function"?c(u):c)});var D;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(D||(D={}));var M;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(M||(M={}));function Le(n){let t=a.useContext(z);return t||K(!1),t}function xe(n,t){let{target:e,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:g}=t===void 0?{}:t,h=re(),l=H(),c=F(n,{relative:s});return a.useCallback(y=>{if(se(y,e)){y.preventDefault();let p=r!==void 0?r:V(l)===V(c);h(n,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:g})}},[l,h,c,r,i,e,n,o,s,g])}function Ce(n,t){t===void 0&&(t={});let e=a.useContext(X);e==null&&K(!1);let{basename:r}=Le(D.useViewTransitionState),i=F(n,{relative:t.relative});if(!e.isTransitioning)return!1;let o=O(e.currentLocation.pathname,r)||e.currentLocation.pathname,s=O(e.nextLocation.pathname,r)||e.nextLocation.pathname;return j(i.pathname,s)!=null||j(i.pathname,o)!=null}export{Te as L,Ne as N,ke as R,_e as c};
