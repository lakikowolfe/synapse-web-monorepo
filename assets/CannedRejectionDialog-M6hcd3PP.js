import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{S as P}from"./immutable.es-DHy1u56X.js";import{r as C}from"./index-Cu9bd8lq.js";import{U as V,J as U}from"./useFiles-DFdLn1TY.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-SKYrON-T.js";import{f as G}from"./SynapseConstants-binLeAzi.js";import"./OrientationBanner-6TFYkqd5.js";import{C as W}from"./ConfirmationDialog-C9WJbO3q.js";import{F as Q}from"./FullWidthAlert-BvVq9GNb.js";import{I as Y}from"./IconSvg-CesIlRas.js";import{S as D}from"./LoadingScreen-Be03UZKS.js";import{T as u}from"./Typography-D6GCV-CB.js";import{S as F}from"./Stack-BbdlCzXz.js";import{F as J}from"./InputLabel-RHZu0c3g.js";import{T as X}from"./TextField-BM400Yg9.js";import{C as z}from"./cloneDeep-C-OZ4saa.js";import{F as K}from"./FormControlLabel-CARkfAdu.js";import{C as $}from"./Checkbox-BnrBea29.js";const N="category",H="category email prompt",Z="rejection reason",ee="email text";function te(l){const{category:m,rows:d,selectedRowIds:i,setSelectedRowIds:p,rejectionReasonFormTextIndex:o,initialIsExpanded:y=!1}=l,[c,g]=C.useState(y);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"body1",onClick:()=>g(!c),sx:{fontWeight:700,cursor:"pointer",my:1},children:[e.jsx(Y,{icon:c?"expandMore":"chevronRight",sx:{color:"grey.700"},wrap:!1}),m]}),e.jsx(z,{in:c,children:e.jsx(F,{sx:{ml:3},children:(d??[]).map(a=>e.jsx(K,{control:e.jsx($,{checked:i.has(a.rowId),size:"small",onChange:r=>{r.target.checked?p(i.add(a.rowId)):p(i.remove(a.rowId))}}),label:e.jsx(u,{variant:"smallText1",children:a.values[o]})},a.rowId))})})]})}function re(l){var j,R;const{tableQuery:m,selectedRowIds:d,setSelectedRowIds:i,rejectionFormPromptCopy:p}=l,{data:o,isLoading:y,error:c}=m,g=(j=o==null?void 0:o.queryResult)==null?void 0:j.queryResults.headers.findIndex(n=>n.name.toLowerCase()===N),a=(R=o==null?void 0:o.queryResult)==null?void 0:R.queryResults.headers.findIndex(n=>n.name.toLowerCase()===Z),r=o&&o.queryResult&&o.queryResult.queryResults.rows.reduce((n,x)=>{const E=x.values[g];return n[E]=[...n[E]||[],x],n},{});return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"headline3",gutterBottom:!0,children:"Reasons for rejecting"}),p&&e.jsx(u,{variant:"body1",gutterBottom:!0,children:p}),y&&e.jsx(F,{sx:{my:2},children:e.jsx(D,{size:30})}),c&&e.jsx(U,{error:c}),r&&e.jsx(J,{children:Object.keys(r).map(n=>e.jsx(te,{category:n,rows:r[n],selectedRowIds:d,setSelectedRowIds:i,rejectionReasonFormTextIndex:a,initialIsExpanded:Object.keys(r).length===1},n))}),e.jsx(u,{variant:"headline3",sx:{mt:1},gutterBottom:!0,children:"We’ll generate a response email message based on your selections."}),e.jsx(u,{variant:"body1",gutterBottom:!0,children:"If your reasons for rejecting are not shown here, that’s okay! You can edit the complete text of the message on the next screen before sending it."})]})}function ne(l){const{emailText:m,setEmailText:d}=l;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"headline3",gutterBottom:!0,children:"Edit the text of the rejection message"}),e.jsx(u,{variant:"body1",gutterBottom:!0,children:"This message will be sent to the requester. You may edit it, or add custom text to the message."}),e.jsx(X,{multiline:!0,fullWidth:!0,rows:15,value:m,onChange:i=>{d(i.target.value)}})]})}function v(l){var S,M,w;const{open:m,tableId:d,onClose:i,onConfirm:p,defaultMessagePrefix:o="",defaultMessageAppend:y="",rejectionFormPromptCopy:c,children:g,error:a}=l,[r,j]=C.useState(1),[R,n]=C.useState(""),[x,E]=C.useState(P()),q=V({entityId:d,query:{sql:`SELECT * FROM ${d}`},partMask:G,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"}),{data:s}=q,A=(S=s==null?void 0:s.queryResult)==null?void 0:S.queryResults.headers.findIndex(t=>t.name.toLowerCase()===N),L=(M=s==null?void 0:s.queryResult)==null?void 0:M.queryResults.headers.findIndex(t=>t.name.toLowerCase()===H),O=(w=s==null?void 0:s.queryResult)==null?void 0:w.queryResults.headers.findIndex(t=>t.name.toLowerCase()===ee),I=s&&s.queryResult&&x.reduce((t,T)=>{const h=s.queryResult.queryResults.rows.find(k=>k.rowId===T),f=h.values[A],B=h.values[L],b=h.values[O];return t[f]?t[f].reasons=[...t[f].reasons,b]:t[f]={sectionText:B,reasons:[b]},t},{}),_=I&&o+Object.keys(I).reduce((t,T)=>{t+=`
`;const h=I[T].sectionText;h&&(t+=h+`
`);for(const f of I[T].reasons)f!=null&&(t+=`
* `+f.replaceAll("\\n",`
`)+`
`);return t},"")+y;return C.useEffect(()=>{_&&n(_)},[x]),e.jsx(W,{open:m,onCancel:()=>{r===1&&i(),r===2&&j(1)},maxWidth:"md",fullWidth:!0,title:"Reject Request?",content:e.jsxs(e.Fragment,{children:[r===1&&e.jsx(re,{tableQuery:q,selectedRowIds:x,setSelectedRowIds:E,rejectionFormPromptCopy:c}),r===2&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{emailText:R,setEmailText:n}),g]}),a&&e.jsx(Q,{variant:"danger",description:a.reason,isGlobal:!1})]}),onConfirm:()=>{r===1&&j(2),r===2&&p(R)},confirmButtonProps:{children:r===1?"Generate Email":"Reject and Notify Requester"},cancelButtonProps:{children:r===1?"Cancel":"Back"}})}try{v.displayName="CannedRejectionDialog",v.__docgenInfo={description:`Modal component presented to a data access submission reviewer when they decide to reject a request.
The modal contains a form for selecting rejection reasons and a text field for editing the rejection message.
After crafting a message, the user can reject the submission and send the message to the requester.`,displayName:"CannedRejectionDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},tableId:{defaultValue:null,description:"",name:"tableId",required:!0,type:{name:"string"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(message: string) => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},defaultMessagePrefix:{defaultValue:null,description:"Text injected into the beginning of the email template",name:"defaultMessagePrefix",required:!1,type:{name:"string"}},defaultMessageAppend:{defaultValue:null,description:"Text appended onto the end of the email template",name:"defaultMessageAppend",required:!1,type:{name:"string"}},rejectionFormPromptCopy:{defaultValue:null,description:"Text to display above the canned rejection reasons",name:"rejectionFormPromptCopy",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error to display, in case one occurred in the callback to `onReject`",name:"error",required:!0,type:{name:"SynapseClientError | null"}},children:{defaultValue:null,description:"Optional children, can be used to extend the form as needed on step 2",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{v as C};
