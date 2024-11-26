import{a as I,c as W,s as z,u as q}from"./styled-BBrRP0Md.js";import{x as H,_ as T,s as J,b as a,y as G,n as K,z as Q,t as $,r as A,A as X,m as Y,B as Z,f as ee,d as te,a as oe,D as B}from"./createTheme-KpOM0lcD.js";import{r as E}from"./index-Cu9bd8lq.js";import{j as se}from"./jsx-runtime-DoxjgJx5.js";const re=["ownerState"],ne=["variants"],ie=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ce(e){return Object.keys(e).length===0}function le(e){return typeof e=="string"&&e.charCodeAt(0)>96}function D(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ae=G(),ue=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function F({defaultTheme:e,theme:s,themeId:t}){return ce(s)?e:s[t]||s}function pe(e){return e?(s,t)=>t[e]:null}function O(e,s){let{ownerState:t}=s,n=T(s,re);const c=typeof e=="function"?e(a({ownerState:t},n)):e;if(Array.isArray(c))return c.flatMap(i=>O(i,a({ownerState:t},n)));if(c&&typeof c=="object"&&Array.isArray(c.variants)){const{variants:i=[]}=c;let p=T(c,ne);return i.forEach(o=>{let r=!0;typeof o.props=="function"?r=o.props(a({ownerState:t},n,t)):Object.keys(o.props).forEach(m=>{(t==null?void 0:t[m])!==o.props[m]&&n[m]!==o.props[m]&&(r=!1)}),r&&(Array.isArray(p)||(p=[p]),p.push(typeof o.style=="function"?o.style(a({ownerState:t},n,t)):o.style))}),p}return c}function me(e={}){const{themeId:s,defaultTheme:t=ae,rootShouldForwardProp:n=D,slotShouldForwardProp:c=D}=e,i=u=>K(a({},u,{theme:F(a({},u,{defaultTheme:t,themeId:s}))}));return i.__mui_systemSx=!0,(u,p={})=>{H(u,l=>l.filter(d=>!(d!=null&&d.__mui_systemSx)));const{name:o,slot:r,skipVariantsResolver:m,skipSx:S,overridesResolver:y=pe(ue(r))}=p,V=T(p,ie),b=m!==void 0?m:r&&r!=="Root"&&r!=="root"||!1,_=S||!1;let C,v=D;r==="Root"||r==="root"?v=n:r?v=c:le(u)&&(v=void 0);const x=J(u,a({shouldForwardProp:v,label:C},V)),P=l=>typeof l=="function"&&l.__emotion_real!==l||Q(l)?d=>O(l,a({},d,{theme:F({theme:d.theme,defaultTheme:t,themeId:s})})):l,g=(l,...d)=>{let w=P(l);const k=d?d.map(P):[];o&&y&&k.push(h=>{const f=F(a({},h,{defaultTheme:t,themeId:s}));if(!f.components||!f.components[o]||!f.components[o].styleOverrides)return null;const R=f.components[o].styleOverrides,j={};return Object.entries(R).forEach(([L,U])=>{j[L]=O(U,a({},h,{theme:f}))}),y(h,j)}),o&&!b&&k.push(h=>{var f;const R=F(a({},h,{defaultTheme:t,themeId:s})),j=R==null||(f=R.components)==null||(f=f[o])==null?void 0:f.variants;return O({variants:j},a({},h,{theme:R}))}),_||k.push(i);const N=k.length-d.length;if(Array.isArray(l)&&N>0){const h=new Array(N).fill("");w=[...l,...h],w.raw=[...l.raw,...h]}const M=x(w,...k);return u.muiName&&(M.muiName=u.muiName),M};return x.withConfig&&(g.withConfig=x.withConfig),g}}const fe=me(),de=["component","direction","spacing","divider","children","className","useFlexGap"],he=G(),ye=fe("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function ve(e){return I({props:e,name:"MuiStack",defaultTheme:he})}function Se(e,s){const t=E.Children.toArray(e).filter(Boolean);return t.reduce((n,c,i)=>(n.push(c),i<t.length-1&&n.push(E.cloneElement(s,{key:`separator-${i}`})),n),[])}const xe=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ke=({ownerState:e,theme:s})=>{let t=a({display:"flex",flexDirection:"column"},$({theme:s},A({values:e.direction,breakpoints:s.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=X(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),i=A({values:e.direction,base:c}),u=A({values:e.spacing,base:c});typeof i=="object"&&Object.keys(i).forEach((o,r,m)=>{if(!i[o]){const y=r>0?i[m[r-1]]:"column";i[o]=y}}),t=Y(t,$({theme:s},u,(o,r)=>e.useFlexGap?{gap:B(n,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${xe(r?i[r]:e.direction)}`]:B(n,o)}}))}return t=Z(s.breakpoints,t),t};function Re(e={}){const{createStyledComponent:s=ye,useThemeProps:t=ve,componentName:n="MuiStack"}=e,c=()=>W({root:["root"]},o=>oe(n,o),{}),i=s(ke);return E.forwardRef(function(o,r){const m=t(o),S=ee(m),{component:y="div",direction:V="column",spacing:b=0,divider:_,children:C,className:v,useFlexGap:x=!1}=S,P=T(S,de),g={direction:V,spacing:b,useFlexGap:x},l=c();return se.jsx(i,a({as:y,ownerState:g,ref:r,className:te(l.root,v)},P,{children:_?Se(C,_):C}))})}const je=Re({createStyledComponent:z("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>q({props:e,name:"MuiStack"})});export{je as S,Re as c,fe as s};
