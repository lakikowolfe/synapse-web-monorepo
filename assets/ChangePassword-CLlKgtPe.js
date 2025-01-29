import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as a}from"./index-Dl6G-zuu.js";import{N as q,L}from"./chunk-K6AXKMTT-B5GX6HSq.js";import{l as W,q as U}from"./useFiles-D6EkPeZl.js";import"./VerificationSubmission-CjmU3lv6.js";import"./RegularExpressions-DT_uNBo6.js";import{v as k}from"./StringUtils-COg2sgwz.js";import"./OrientationBanner-BcEAmQ0L.js";import{d as w}from"./ToastMessage-DyUFr4LZ.js";import{u as D}from"./useChangePasswordFormState-B6RuDS8d.js";import{A as f}from"./Alert-CduaGk2B.js";import{T as n}from"./TextField-CrNNFkUB.js";import{B as G}from"./Button-DtfaTZY_.js";import{L as I}from"./Link-DxNs_73S.js";const g="Your password was successfully changed.";function h(u){const{redirectToRoute:l,hideReset2FA:P=!1}=u,[i,x]=a.useState(""),[o,C]=a.useState(""),[y,v]=a.useState(void 0),[d,S]=a.useState(""),[t,m]=a.useState(""),{accessToken:j}=W(),c=!!j,{data:r,isLoading:N}=U({enabled:c});a.useEffect(()=>{r&&t==""&&m(r.userName)},[t,r,r==null?void 0:r.userName]);const{promptForTwoFactorAuth:T,TwoFactorAuthPrompt:A,successfullyChangedPassword:_,isPending:b,handleChangePasswordWithCurrentPassword:E,error:p}=D({hideReset2FA:P}),F=s=>{s.preventDefault(),o!==d?w("Passwords do not match.","danger"):E(t,i,o)};return _?l?(w(g,"success"),e.jsx(q,{to:l})):e.jsx(f,{severity:"success",children:g}):e.jsxs("div",{children:[T?e.jsx(A,{}):e.jsxs("form",{onSubmit:s=>{F(s)},children:[!c&&e.jsx(n,{required:!0,fullWidth:!0,autoFocus:!0,autoComplete:"username",label:"Username or Email Address",id:"username",type:"text",value:t,onChange:s=>m(s.target.value)}),e.jsx(n,{fullWidth:!0,required:!0,margin:"normal",type:"password",id:"currentPassword",label:"Current password",onChange:s=>x(s.target.value),value:i}),e.jsx(n,{fullWidth:!0,required:!0,helperText:y,margin:"normal",type:"password",id:"newPassword",label:"New password",onChange:s=>{const R=k(s.target.value);v(R),C(s.target.value)},value:o}),e.jsx(n,{fullWidth:!0,required:!0,margin:"normal",type:"password",id:"confirmPassword",label:"Confirm password",onChange:s=>S(s.target.value),value:d}),e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx(G,{sx:{marginRight:"26px"},disabled:!i||!o||!d||!t||N||b,variant:"contained",type:"submit",children:"Change Password"}),e.jsx(I,{component:L,to:"/resetPassword",sx:{display:"block",marginTop:"1em",marginLeft:"5px"},children:"Forgot password?"})]})]}),p&&e.jsx(f,{severity:"error",sx:{my:2},children:p.reason})]})}try{h.displayName="ChangePassword",h.__docgenInfo={description:"",displayName:"ChangePassword",props:{redirectToRoute:{defaultValue:null,description:"",name:"redirectToRoute",required:!1,type:{name:"string"}},hideReset2FA:{defaultValue:null,description:"",name:"hideReset2FA",required:!1,type:{name:"boolean"}}}}}catch{}export{h as C};
