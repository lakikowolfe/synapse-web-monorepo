import{e as x,b as c,_ as v,d as b}from"./createTheme-KpOM0lcD.js";import{r as z}from"./index-Cu9bd8lq.js";import{u as T,f as F}from"./useFormControl-vG3XTiAH.js";import{s as C,u as H,c as R}from"./styled-BBrRP0Md.js";import{f as p,g as q}from"./InputLabel-BjkrglSW.js";import{j as f}from"./jsx-runtime-DoxjgJx5.js";var u;const j=["children","className","component","disabled","error","filled","focused","margin","required","variant"],_=e=>{const{classes:r,contained:s,size:t,disabled:a,error:n,filled:i,focused:l,required:d}=e,o={root:["root",a&&"disabled",n&&"error",t&&`size${x(t)}`,s&&"contained",l&&"focused",i&&"filled",d&&"required"]};return R(o,q,r)},h=C("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,s.size&&r[`size${x(s.size)}`],s.contained&&r.contained,s.filled&&r.filled]}})(({theme:e,ownerState:r})=>c({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${p.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${p.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),M=z.forwardRef(function(r,s){const t=H({props:r,name:"MuiFormHelperText"}),{children:a,className:n,component:i="p"}=t,l=v(t,j),d=T(),o=F({props:t,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),m=c({},t,{component:i,contained:o.variant==="filled"||o.variant==="outlined",variant:o.variant,size:o.size,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),g=_(m);return f.jsx(h,c({as:i,ownerState:m,className:b(g.root,n),ref:s},l,{children:a===" "?u||(u=f.jsx("span",{className:"notranslate",children:"​"})):a}))});export{M as F};
