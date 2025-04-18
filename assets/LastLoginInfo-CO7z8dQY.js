import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{f as C}from"./DateFormatter-BkutHV-w.js";import{N as M,Q as N,L as D,T as U,W as Y,X as F,Y as z,Z as P}from"./SynapseConstants-Dk0Mz-dJ.js";import{d as $}from"./dayjs.min-d18Up55D.js";import{T as p}from"./Typography-DUswyeAh.js";import{T as H}from"./Tooltip-CbFhYBpv.js";import{I as q}from"./InfoTwoTone-B7fmYX5S.js";import{B as K}from"./Box-Tu95KWeq.js";import{L as B}from"./Link-D-YR7sBc.js";import{r as u}from"./index-Dl6G-zuu.js";import{u as S}from"./index-BRFx9jDd.js";const E=()=>{},l=typeof window<"u"&&typeof navigator<"u"&&typeof document<"u";function W(e,...t){var r;(r=e==null?void 0:e.addEventListener)==null||r.call(e,...t)}function J(e,...t){var r;(r=e==null?void 0:e.removeEventListener)==null||r.call(e,...t)}function V(){const e=u.useRef(!0);return u.useEffect(()=>{e.current=!1},[]),e.current}const j=l?u.useLayoutEffect:u.useEffect;function Q(e,t){const r=V();u.useEffect(r?E:e,t)}function X(e,t){return typeof e=="function"?e(t):e}const d=new Map,y=(e,t,r,n)=>{var o,f;(f=(o=d.get(e))==null?void 0:o.get(t))==null||f.forEach(i=>{i!==n&&i(r)})},G=e=>{e.storageArea&&e.key&&e.newValue&&y(e.storageArea,e.key,e.newValue)},Z=(e,t,r)=>{l&&d.size===0&&W(window,"storage",G,{passive:!0});let n=d.get(e);n||(n=new Map,d.set(e,n));let o=n.get(t);o||(o=new Set,n.set(t,o)),o.add(r)},k=(e,t,r)=>{const n=d.get(e);if(!n)return;const o=n.get(t);o&&(o.delete(r),o.size||n.delete(t),n.size||d.delete(e),l&&!d.size&&J(window,"storage",G))},b={defaultValue:null,initializeWithValue:!0};function ee(e,t,r){var _;const n=S({...b,...r}),o=(s,c)=>(n.current.parse??ne)(s,c),f=s=>(n.current.stringify??te)(s),i=S({fetchRaw:()=>e.getItem(t),fetch:()=>o(i.current.fetchRaw(),n.current.defaultValue),remove(){e.removeItem(t)},store(s){const c=f(s);return c!==null&&e.setItem(t,c),c}}),w=V(),[g,h]=u.useState((_=n.current)!=null&&_.initializeWithValue&&w?i.current.fetch():void 0),x=S(g),m=S({fetch(){h(i.current.fetch())},setRawVal(s){h(o(s,n.current.defaultValue))}});Q(()=>{m.current.fetch()},[t]),u.useEffect(()=>{n.current.initializeWithValue||m.current.fetch()},[]),j(()=>{const s=m.current.setRawVal;return Z(e,t,s),()=>{k(e,t,s)}},[e,t]);const L=S({set(s){if(!l)return;const c=X(s,x.current),O=i.current.store(c);O!==null&&y(e,t,O)},delete(){l&&(i.current.remove(),y(e,t,null))},fetch(){l&&y(e,t,i.current.fetchRaw())}}),v=u.useMemo(()=>({set:s=>{L.current.set(s)},remove(){L.current.delete()},fetch(){L.current.fetch()}}),[]);return u.useMemo(()=>({value:g,...v}),[g])}const te=e=>{if(e===null)return null;try{return JSON.stringify(e)}catch(t){return console.warn(t),null}},ne=(e,t)=>{if(e===null)return t;try{return JSON.parse(e)}catch(r){return console.warn(r),t}};let T;try{T=l&&!!window.localStorage}catch{T=!1}const A=T?(e,t)=>ee(localStorage,e,t):(e,t)=>({value:void 0,set:E,remove:E,fetch:E}),Se=[M,N,D];function re(e){switch(e){case M:return"Google";case N:return"ORCiD";case D:return"your email";default:return"unknown login method"}}function oe(){return{currentSourceAppNameState:A(U),lastLoginMethodState:A(Y),lastLoginSourceAppNameState:A(F),lastLoginSourceAppURLState:A(z),lastLoginDateState:A(P)}}function Ae(){const e=oe();return{currentSourceAppName:e.currentSourceAppNameState.value,lastLoginMethod:e.lastLoginMethodState.value,lastLoginSourceAppName:e.lastLoginSourceAppNameState.value,lastLoginSourceAppURL:e.lastLoginSourceAppURLState.value,lastLoginDate:e.lastLoginDateState.value}}function ae(e){return e.match(/^[aeiou]/i)?"an":"a"}function I(e){return e.match(" Portal$")?"the ":""}function R(e){const{currentSourceAppName:t,lastLoginMethod:r,lastLoginSourceAppName:n,lastLoginSourceAppURL:o,lastLoginDate:f,display:i}=e;if(!(t&&r&&n&&o&&f&&t!==n))return null;const g=ae(t),h=I(t),x=I(n),m=`You may already have ${g} ${t} account`,L=`Account last used on ${C($(f),"MMMM D, YYYY")}`,v=a.jsxs(a.Fragment,{children:[a.jsx(p,{variant:"smallText2",mb:1,children:m}),a.jsx(p,{variant:"smallText1",mb:1,color:"white",children:`This computer was used to sign in to an account on ${x}${n}. 
          You can use the same account to sign in to ${h}${t}.`}),a.jsx(p,{variant:"smallText1",color:"white",children:L})]}),_=a.jsxs(a.Fragment,{children:[a.jsx(p,{variant:"smallText2",mb:1,sx:{color:"grey.900",fontSize:"12px"},children:m}),a.jsxs(p,{variant:"smallText1",mb:1,sx:{color:"grey.900",fontSize:"12px"},children:["It looks like you already have an account, last used on"," ",x,a.jsx(B,{href:o,children:n}),"."," ",`You can use this account to sign in via ${re(r)}.`]}),a.jsx(p,{variant:"smallText1",sx:{color:"grey.700",fontSize:"10px"},children:L})]});return a.jsx(a.Fragment,{children:i==="sentence"?a.jsxs(p,{variant:"smallText1",sx:{color:"grey.700",textTransform:"none"},children:["You may be able to use an existing account",a.jsx(H,{title:v,placement:"top",componentsProps:{tooltip:{sx:{bgcolor:"#63676C","& .MuiTooltip-arrow":{color:"#63676C"}}}},children:a.jsx(q,{sx:{color:"grey.700",width:"12px",height:"12px",ml:"4px",verticalAlign:"middle"}})})]}):a.jsx(K,{sx:{backgroundColor:"grey.100",p:"10px"},children:_})})}try{R.displayName="LastLoginInfo",R.__docgenInfo={description:"",displayName:"LastLoginInfo",props:{currentSourceAppName:{defaultValue:null,description:"",name:"currentSourceAppName",required:!0,type:{name:"string | undefined"}},lastLoginMethod:{defaultValue:null,description:"",name:"lastLoginMethod",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"GOOGLE"'},{value:'"ORCID"'},{value:'"EMAIL"'}]}},lastLoginSourceAppName:{defaultValue:null,description:"",name:"lastLoginSourceAppName",required:!0,type:{name:"string | undefined"}},lastLoginSourceAppURL:{defaultValue:null,description:"",name:"lastLoginSourceAppURL",required:!0,type:{name:"string | undefined"}},lastLoginDate:{defaultValue:null,description:"",name:"lastLoginDate",required:!0,type:{name:"string | undefined"}},display:{defaultValue:null,description:"",name:"display",required:!0,type:{name:"enum",value:[{value:'"sentence"'},{value:'"box"'}]}}}}}catch{}export{R as L,Se as a,A as b,re as g,Ae as u};
