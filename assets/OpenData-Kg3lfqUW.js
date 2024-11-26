import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{I as l}from"./IconSvg-vOk73ZFq.js";import{s as d}from"./styled-BBrRP0Md.js";import{B as c}from"./Box-BaZAwz5V.js";import{T as n}from"./Typography-Cf0oTcRj.js";const s=d(c,{label:"OpenDataContainer"})(({theme:a})=>({background:a.palette.grey[100],padding:`${a.spacing(2.5)} ${a.spacing(4)}`,border:`1px solid ${a.palette.grey[300]}`,borderRadius:"3px",marginBottom:a.spacing(2)}));function i(a){const{isOpenData:r,isPublic:o,currentUserCanUpdateSharingSettings:t}=a;return r&&o?e.jsxs(s,{display:"flex",gap:1,children:[e.jsx(l,{icon:"checkCircle",color:"success",wrap:!1}),e.jsxs("div",{children:[e.jsx(n,{variant:"body1",color:"text.secondary",children:e.jsx("strong",{children:"This is anonymous access data."})}),e.jsx(n,{variant:"body1",color:"text.secondary",children:"Anyone can download it, even if they aren’t logged in to Synapse."})]})]}):r&&!o&&t?e.jsxs(s,{children:[e.jsx(n,{variant:"body1",color:"text.secondary",children:e.jsx("strong",{children:"This is not anonymous access data."})}),e.jsx(n,{variant:"body1",color:"text.secondary",children:"You must grant public access for all users to be able to anonymously download it."})]}):!r&&o&&t?e.jsxs(s,{children:[e.jsx(n,{variant:"body1",color:"text.secondary",children:e.jsx("strong",{children:"Users must be logged in to download public access data."})}),e.jsx(n,{variant:"body1",color:"text.secondary",children:"This data is publicly viewable, but only registered and logged-in users can download it."})]}):null}try{i.displayName="OpenData",i.__docgenInfo={description:"",displayName:"OpenData",props:{isOpenData:{defaultValue:null,description:"",name:"isOpenData",required:!0,type:{name:"boolean"}},isPublic:{defaultValue:null,description:"",name:"isPublic",required:!0,type:{name:"boolean"}},currentUserCanUpdateSharingSettings:{defaultValue:null,description:"",name:"currentUserCanUpdateSharingSettings",required:!0,type:{name:"boolean"}}}}}catch{}export{i as O};
