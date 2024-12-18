import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as u}from"./index-Cu9bd8lq.js";import"./useFiles-DFdLn1TY.js";import{O as N}from"./VerificationSubmission-DL9jxYsQ.js";import{T as j}from"./RegularExpressions-SKYrON-T.js";import"./OrientationBanner-6TFYkqd5.js";import{h as U,g as w}from"./useAccessRequirements-Cf1xallB.js";import{S as V}from"./LoadingScreen-Be03UZKS.js";import{L as F,A as b,S as v,M as C}from"./SelfSignAccessRequirement-CEwndEoz.js";import{C as O}from"./ConfirmationDialog-C9WJbO3q.js";import{B as y}from"./Box-Bt_N9PQN.js";import{T as d}from"./Typography-D6GCV-CB.js";import{B as k}from"./Button-j3jTttn9.js";import{W as D}from"./WikiMarkdownEditorButton-BTN_brNr.js";import{F as R}from"./FormControlLabel-CARkfAdu.js";import{C as _}from"./Checkbox-BnrBea29.js";import{A as g}from"./Alert-B6PGsAkP.js";function E(r){const{accessRequirement:t}=r;return e.jsxs(y,{mb:2,children:[e.jsx(d,{variant:"body1",fontWeight:700,children:"Instructions (wiki)"}),e.jsx(D,{ownerObjectType:N.ACCESS_REQUIREMENT,ownerObjectId:t.id.toString(),displayWikiMarkdown:!0,buttonProps:{children:"Edit Instructions"}})]})}try{E.displayName="AccessRequirementWikiInstructions",E.__docgenInfo={description:"",displayName:"AccessRequirementWikiInstructions",props:{accessRequirement:{defaultValue:null,description:"",name:"accessRequirement",required:!0,type:{name:"AccessRequirement"}}}}}catch{}const M="Access restricted pending review by Synapse Access and Compliance Team.",L=r=>{switch(r.concreteType){case C:case v:return"";case j:return r.termsOfUse;case b:return r.actContactInfo;case F:return M}},B=r=>r.concreteType===v||r.concreteType==C;function A(r){const{accessRequirement:t,onChange:i}=r;return e.jsx(e.Fragment,{children:B(t)&&e.jsx(e.Fragment,{children:e.jsxs(y,{mb:2,children:[e.jsx(d,{variant:"body1",fontWeight:700,children:"Accessor requirements"}),e.jsx(R,{control:e.jsx(_,{}),label:"Accessors must be certified.",checked:t.isCertifiedUserRequired,onChange:(c,n)=>i({...t,isCertifiedUserRequired:n})}),e.jsx(R,{control:e.jsx(_,{}),label:"Accessors must have a validated profile.",checked:t.isValidatedProfileRequired,onChange:(c,n)=>i({...t,isValidatedProfileRequired:n})}),t.concreteType===C&&e.jsx(R,{control:e.jsx(_,{}),label:"Accessors must use two-factor authentication (2FA).",checked:t.isTwoFaRequired,onChange:(c,n)=>i({...t,isTwoFaRequired:n})})]})})})}try{A.displayName="AccessorRequirements",A.__docgenInfo={description:"",displayName:"AccessorRequirements",props:{accessRequirement:{defaultValue:null,description:"",name:"accessRequirement",required:!0,type:{name:"AccessRequirement"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(updatedAr: AccessRequirement) => void"}}}}}catch{}function q(r){const{accessRequirement:t,onConfirmDelete:i,allowDelete:c=!1}=r,[n,o]=u.useState(!1),l=L(t);return e.jsx(e.Fragment,{children:!!l&&e.jsxs(y,{mb:2,children:[e.jsx(d,{variant:"body1",fontWeight:700,mb:1,children:"Legacy text-only instructions"}),e.jsx(d,{variant:"body1",mb:1,children:l}),c&&e.jsxs(e.Fragment,{children:[e.jsx(k,{variant:"contained",color:"error",onClick:()=>o(!0),children:"Delete old instructions"}),e.jsx(O,{open:n,title:"Are you sure?",content:"Deleting the old instructions cannot be undone. Continue?",onCancel:()=>o(!1),onConfirm:()=>{const s={...t};s.concreteType===j?s.termsOfUse=void 0:s.concreteType===b&&(s.actContactInfo=void 0),i(s),o(!1)}})]})]})})}try{q.displayName="AccessRequirementTextInstructions",q.__docgenInfo={description:"",displayName:"AccessRequirementTextInstructions",props:{accessRequirement:{defaultValue:null,description:"",name:"accessRequirement",required:!0,type:{name:"AccessRequirement"}},onConfirmDelete:{defaultValue:null,description:"",name:"onConfirmDelete",required:!0,type:{name:"(updatedAr: AccessRequirement) => void"}},allowDelete:{defaultValue:null,description:"",name:"allowDelete",required:!1,type:{name:"boolean"}}}}}catch{}const I=u.forwardRef(function(t,i){const{accessRequirementId:c,onSave:n,onError:o,allowDeleteTextInstructions:l=!1}=t,[s,m]=u.useState(null),{data:p,error:T}=U(c,{staleTime:1/0});u.useEffect(()=>{p&&m(p)},[p]);const{mutateAsync:h,error:x}=w(),f=u.useCallback(async(a,S)=>{try{await h(a),m(a),S||n()}catch{S||o()}},[n,o,h]);return u.useImperativeHandle(i,()=>({save(){s&&f(s,!1)}}),[s,f]),s?e.jsxs(e.Fragment,{children:[e.jsx(q,{accessRequirement:s,allowDelete:l,onConfirmDelete:a=>{f(a,!0)}}),e.jsx(E,{accessRequirement:s}),e.jsx(A,{accessRequirement:s,onChange:a=>m(a)}),x&&e.jsx(g,{severity:"error",sx:{marginTop:2},children:x.reason})]}):T?e.jsx(g,{severity:"error",children:T.reason}):e.jsx(V,{})});try{I.displayName="SetBasicAccessRequirementFields",I.__docgenInfo={description:"",displayName:"SetBasicAccessRequirementFields",props:{accessRequirementId:{defaultValue:null,description:"",name:"accessRequirementId",required:!0,type:{name:"string"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"() => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!0,type:{name:"() => void"}},allowDeleteTextInstructions:{defaultValue:null,description:"",name:"allowDeleteTextInstructions",required:!1,type:{name:"boolean"}}}}}catch{}export{E as A,I as S,A as a};
