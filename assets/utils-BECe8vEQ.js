var W=e=>{throw TypeError(e)};var z=(e,t,s)=>t.has(e)||W("Cannot "+s);var i=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>t.has(e)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),c=(e,t,s,n)=>(z(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),O=(e,t,s)=>(z(e,t,"access private method"),s);import{r as V}from"./index-Cu9bd8lq.js";import{j as at}from"./jsx-runtime-DoxjgJx5.js";var st=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},q=typeof window>"u"||"Deno"in window;function Ot(){}function Pt(e,t){return typeof e=="function"?e(t):e}function ct(e){return typeof e=="number"&&e>=0&&e!==1/0}function jt(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Mt(e,t){const{type:s="all",exact:n,fetchStatus:r,predicate:h,queryKey:y,stale:l}=e;if(y){if(n){if(t.queryHash!==ht(y,t.options))return!1}else if(!J(t.queryKey,y))return!1}if(s!=="all"){const p=t.isActive();if(s==="active"&&!p||s==="inactive"&&p)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof r<"u"&&r!==t.state.fetchStatus||h&&!h(t))}function Tt(e,t){const{exact:s,status:n,predicate:r,mutationKey:h}=e;if(h){if(!t.options.mutationKey)return!1;if(s){if(B(t.options.mutationKey)!==B(h))return!1}else if(!J(t.options.mutationKey,h))return!1}return!(n&&t.state.status!==n||r&&!r(t))}function ht(e,t){return((t==null?void 0:t.queryKeyHashFn)||B)(e)}function B(e){return JSON.stringify(e,(t,s)=>H(s)?Object.keys(s).sort().reduce((n,r)=>(n[r]=s[r],n),{}):s)}function J(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!J(e[s],t[s])):!1}function nt(e,t){if(e===t)return e;const s=X(e)&&X(t);if(s||H(e)&&H(t)){const n=s?e:Object.keys(e),r=n.length,h=s?t:Object.keys(t),y=h.length,l=s?[]:{};let p=0;for(let b=0;b<y;b++){const f=s?b:h[b];!s&&e[f]===void 0&&t[f]===void 0&&n.includes(f)?(l[f]=void 0,p++):(l[f]=nt(e[f],t[f]),l[f]===e[f]&&e[f]!==void 0&&p++)}return r===y&&p===r?e:l}return t}function Rt(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function X(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function H(e){if(!Y(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const s=t.prototype;return!(!Y(s)||!s.hasOwnProperty("isPrototypeOf"))}function Y(e){return Object.prototype.toString.call(e)==="[object Object]"}function lt(e){return new Promise(t=>{setTimeout(t,e)})}function Ft(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?nt(e,t):t}function Lt(e,t,s=0){const n=[...e,t];return s&&n.length>s?n.slice(1):n}function kt(e,t,s=0){const n=[t,...e];return s&&n.length>s?n.slice(0,-1):n}var T,j,k,Z,ft=(Z=class extends st{constructor(){super();v(this,T);v(this,j);v(this,k);c(this,k,t=>{if(!q&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){i(this,j)||this.setEventListener(i(this,k))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,j))==null||t.call(this),c(this,j,void 0))}setEventListener(t){var s;c(this,k,t),(s=i(this,j))==null||s.call(this),c(this,j,t(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()}))}setFocused(t){i(this,T)!==t&&(c(this,T,t),this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){var t;return typeof i(this,T)=="boolean"?i(this,T):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},T=new WeakMap,j=new WeakMap,k=new WeakMap,Z),dt=new ft,g,M,D,$,yt=($=class extends st{constructor(){super();v(this,g,!0);v(this,M);v(this,D);c(this,D,t=>{if(!q&&window.addEventListener){const s=()=>t(!0),n=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",n)}}})}onSubscribe(){i(this,M)||this.setEventListener(i(this,D))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,M))==null||t.call(this),c(this,M,void 0))}setEventListener(t){var s;c(this,D,t),(s=i(this,M))==null||s.call(this),c(this,M,t(this.setOnline.bind(this)))}setOnline(t){i(this,g)!==t&&(c(this,g,t),this.listeners.forEach(n=>{n(t)}))}isOnline(){return i(this,g)}},g=new WeakMap,M=new WeakMap,D=new WeakMap,$),it=new yt;function pt(e){return Math.min(1e3*2**e,3e4)}function rt(e){return(e??"online")==="online"?it.isOnline():!0}var ot=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function gt(e){return e instanceof ot}function mt(e){let t=!1,s=0,n=!1,r,h,y;const l=new Promise((a,u)=>{h=a,y=u}),p=a=>{var u;n||(m(new ot(a)),(u=e.abort)==null||u.call(e))},b=()=>{t=!0},f=()=>{t=!1},F=()=>!dt.isFocused()||e.networkMode!=="always"&&!it.isOnline(),o=a=>{var u;n||(n=!0,(u=e.onSuccess)==null||u.call(e,a),r==null||r(),h(a))},m=a=>{var u;n||(n=!0,(u=e.onError)==null||u.call(e,a),r==null||r(),y(a))},K=()=>new Promise(a=>{var u;r=x=>{const E=n||!F();return E&&a(x),E},(u=e.onPause)==null||u.call(e)}).then(()=>{var a;r=void 0,n||(a=e.onContinue)==null||a.call(e)}),L=()=>{if(n)return;let a;try{a=e.fn()}catch(u){a=Promise.reject(u)}Promise.resolve(a).then(o).catch(u=>{var I;if(n)return;const x=e.retry??(q?0:3),E=e.retryDelay??pt,Q=typeof E=="function"?E(s,u):E,A=x===!0||typeof x=="number"&&s<x||typeof x=="function"&&x(s,u);if(t||!A){m(u);return}s++,(I=e.onFail)==null||I.call(e,s,u),lt(Q).then(()=>{if(F())return K()}).then(()=>{t?m(u):L()})})};return rt(e.networkMode)?L():K().then(L),{promise:l,cancel:p,continue:()=>(r==null?void 0:r())?l:Promise.resolve(),cancelRetry:b,continueRetry:f}}function vt(){let e=[],t=0,s=o=>{o()},n=o=>{o()},r=o=>setTimeout(o,0);const h=o=>{r=o},y=o=>{let m;t++;try{m=o()}finally{t--,t||b()}return m},l=o=>{t?e.push(o):r(()=>{s(o)})},p=o=>(...m)=>{l(()=>{o(...m)})},b=()=>{const o=e;e=[],o.length&&r(()=>{n(()=>{o.forEach(m=>{s(m)})})})};return{batch:y,batchCalls:p,schedule:l,setNotifyFunction:o=>{s=o},setBatchNotifyFunction:o=>{n=o},setScheduler:h}}var wt=vt(),R,tt,bt=(tt=class{constructor(){v(this,R)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ct(this.gcTime)&&c(this,R,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(q?1/0:5*60*1e3))}clearGcTimeout(){i(this,R)&&(clearTimeout(i(this,R)),c(this,R,void 0))}},R=new WeakMap,tt),S,N,w,G,C,P,et,Dt=(et=class extends bt{constructor(t){super();v(this,C);v(this,S);v(this,N);v(this,w);v(this,G);this.mutationId=t.mutationId,c(this,N,t.defaultOptions),c(this,w,t.mutationCache),c(this,S,[]),this.state=t.state||xt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...i(this,N),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){i(this,S).includes(t)||(i(this,S).push(t),this.clearGcTimeout(),i(this,w).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){c(this,S,i(this,S).filter(s=>s!==t)),this.scheduleGc(),i(this,w).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){i(this,S).length||(this.state.status==="pending"?this.scheduleGc():i(this,w).remove(this))}continue(){var t;return((t=i(this,G))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var r,h,y,l,p,b,f,F,o,m,K,L,a,u,x,E,Q,A,I,_;const s=()=>(c(this,G,mt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(d,U)=>{O(this,C,P).call(this,{type:"failed",failureCount:d,error:U})},onPause:()=>{O(this,C,P).call(this,{type:"pause"})},onContinue:()=>{O(this,C,P).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),i(this,G).promise),n=this.state.status==="pending";try{if(!n){O(this,C,P).call(this,{type:"pending",variables:t}),await((h=(r=i(this,w).config).onMutate)==null?void 0:h.call(r,t,this));const U=await((l=(y=this.options).onMutate)==null?void 0:l.call(y,t));U!==this.state.context&&O(this,C,P).call(this,{type:"pending",context:U,variables:t})}const d=await s();return await((b=(p=i(this,w).config).onSuccess)==null?void 0:b.call(p,d,t,this.state.context,this)),await((F=(f=this.options).onSuccess)==null?void 0:F.call(f,d,t,this.state.context)),await((m=(o=i(this,w).config).onSettled)==null?void 0:m.call(o,d,null,this.state.variables,this.state.context,this)),await((L=(K=this.options).onSettled)==null?void 0:L.call(K,d,null,t,this.state.context)),O(this,C,P).call(this,{type:"success",data:d}),d}catch(d){try{throw await((u=(a=i(this,w).config).onError)==null?void 0:u.call(a,d,t,this.state.context,this)),await((E=(x=this.options).onError)==null?void 0:E.call(x,d,t,this.state.context)),await((A=(Q=i(this,w).config).onSettled)==null?void 0:A.call(Q,void 0,d,this.state.variables,this.state.context,this)),await((_=(I=this.options).onSettled)==null?void 0:_.call(I,void 0,d,t,this.state.context)),d}finally{O(this,C,P).call(this,{type:"error",error:d})}}}},S=new WeakMap,N=new WeakMap,w=new WeakMap,G=new WeakMap,C=new WeakSet,P=function(t){const s=n=>{switch(t.type){case"failed":return{...n,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!rt(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...n,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:t.error,failureCount:n.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),wt.batch(()=>{i(this,S).forEach(n=>{n.onMutationUpdate(t)}),i(this,w).notify({mutation:this,type:"updated",action:t})})},et);function xt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ut=V.createContext(void 0),Gt=e=>{const t=V.useContext(ut);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Kt=({client:e,children:t})=>(V.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),at.jsx(ut.Provider,{value:e,children:t}));function It(e,t){return typeof e=="function"?e(...t):!!e}export{Dt as M,Kt as Q,bt as R,st as S,It as a,Ot as b,ct as c,rt as d,Ft as e,dt as f,xt as g,B as h,q as i,mt as j,gt as k,ht as l,Mt as m,wt as n,Tt as o,kt as p,Lt as q,nt as r,Rt as s,jt as t,Gt as u,it as v,Pt as w,J as x};
