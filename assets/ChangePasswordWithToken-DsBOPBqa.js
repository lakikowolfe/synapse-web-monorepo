import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{r as a}from"./index-Dl6G-zuu.js";import{d as u}from"./ToastMessage-DXUykkkh.js";import{u as T}from"./useChangePasswordFormState-C-h4Bh9K.js";import{v}from"./StringUtils-CWePA3yc.js";import{T as c}from"./TextField-BxyjSNA_.js";import{B as S}from"./Button-DtfaTZY_.js";import{A as j}from"./Alert-CduaGk2B.js";function l(t){const{passwordChangeToken:m,onSuccess:p}=t,[r,n]=a.useState(""),[o,d]=a.useState(""),[w,h]=a.useState(void 0),{promptForTwoFactorAuth:P,TwoFactorAuthPrompt:f,isPending:g,handleChangePasswordWithResetToken:x,error:i}=T({onChangePasswordSuccess:()=>{n(""),d(""),u("Password successfully changed.","success"),p()}}),C=e=>{e.preventDefault(),r!==o?u("Passwords do not match.","danger"):x(r,m)};return s.jsxs("div",{children:[P?s.jsx(f,{}):s.jsxs("form",{onSubmit:e=>{C(e)},children:[s.jsx(c,{fullWidth:!0,required:!0,helperText:w,type:"password",id:"newPassword",name:"newPassword",label:"New password",onChange:e=>{const y=v(e.target.value);h(y),n(e.target.value)},value:r||"",sx:{mb:2}}),s.jsx(c,{fullWidth:!0,required:!0,type:"password",id:"confirmPassword",name:"confirmPassword",label:"Confirm password",onChange:e=>d(e.target.value),value:o||"",sx:{mb:2}}),s.jsx(S,{variant:"contained",type:"submit",fullWidth:!0,disabled:!r||!o||g,sx:{mt:3,py:2},children:"Change Password"})]}),i&&s.jsx(j,{severity:"error",sx:{my:2},children:i.reason})]})}try{l.displayName="ChangePasswordWithToken",l.__docgenInfo={description:"",displayName:"ChangePasswordWithToken",props:{passwordChangeToken:{defaultValue:null,description:"",name:"passwordChangeToken",required:!0,type:{name:"PasswordResetSignedToken"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!0,type:{name:"() => void"}}}}}catch{}export{l as C};
