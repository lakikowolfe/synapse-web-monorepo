import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{S as s}from"./useFiles-CxxOxyKU.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-CmcMRs19.js";import{d as l}from"./ToastMessage-CWs_grJW.js";import{S as p}from"./SageFullLogo-7YrvPvCV.js";import{P as m}from"./Paper-1rWVnzjH.js";import{T as t}from"./Typography-Cf0oTcRj.js";import{B as g}from"./Button-D1yxts2k.js";function r(o){const{onLogout:a,logo:i=e.jsx(p,{width:"100%"})}=o;return e.jsxs(m,{sx:{width:"450px",px:8,py:6,display:"flex",flexDirection:"column",alignItems:"center"},children:[i,e.jsx(t,{variant:"headline3",my:1,children:"Already Logged In"}),e.jsx(t,{variant:"smallText1",my:1,children:"To register an account, please log out first"}),e.jsx(g,{variant:"contained",size:"large",fullWidth:!0,sx:{p:1.5,mt:5,fontSize:"16px"},onClick:()=>{s.signOut().then(()=>{a()}).catch(n=>{l(n.message,"danger")})},children:"Log Out"})]})}try{r.displayName="RegisterPageLogoutPrompt",r.__docgenInfo={description:"",displayName:"RegisterPageLogoutPrompt",props:{onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}}}}}catch{}export{r as R};
