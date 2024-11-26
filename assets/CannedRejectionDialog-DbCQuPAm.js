import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{S as V}from"./immutable.es-DHy1u56X.js";import{a as F,r as T}from"./index-Cu9bd8lq.js";import{a9 as U,q as G}from"./useFiles-CxxOxyKU.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-CmcMRs19.js";import{f as W}from"./SynapseConstants-DRP7luG1.js";import"./OrientationBanner-Dto5BQb9.js";import{C as Q}from"./ConfirmationDialog-DWtYmOhU.js";import{F as Y}from"./FullWidthAlert-DEIFRXi9.js";import{I as D}from"./IconSvg-vOk73ZFq.js";import{S as X}from"./LoadingScreen-DeTTX3br.js";import{T as u}from"./Typography-Cf0oTcRj.js";import{S as N}from"./Stack-D7-BSZET.js";import{F as z}from"./FormControl-50a7htm-.js";import{T as J}from"./TextField-MZUQmcSK.js";import{C as K}from"./cloneDeep-BhVrLcRV.js";import{F as $}from"./FormControlLabel-DV0Zwuvj.js";import{C as H}from"./Checkbox-ClPRnb5T.js";const A="category",Z="category email prompt",ee="rejection reason",te="email text";function re(l){const{category:m,rows:d,selectedRowIds:i,setSelectedRowIds:p,rejectionReasonFormTextIndex:o,initialIsExpanded:y=!1}=l,[c,g]=F.useState(y);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"body1",onClick:()=>g(!c),sx:{fontWeight:700,cursor:"pointer",my:1},children:[e.jsx(D,{icon:c?"expandMore":"chevronRight",sx:{color:"grey.700"},wrap:!1}),m]}),e.jsx(K,{in:c,children:e.jsx(N,{sx:{ml:3},children:(d??[]).map(a=>e.jsx($,{control:e.jsx(H,{checked:i.has(a.rowId),size:"small",onChange:r=>{r.target.checked?p(i.add(a.rowId)):p(i.remove(a.rowId))}}),label:e.jsx(u,{variant:"smallText1",children:a.values[o]})},a.rowId))})})]})}function ne(l){var j,R;const{tableQuery:m,selectedRowIds:d,setSelectedRowIds:i,rejectionFormPromptCopy:p}=l,{data:o,isLoading:y,error:c}=m,g=(j=o==null?void 0:o.queryResult)==null?void 0:j.queryResults.headers.findIndex(n=>n.name.toLowerCase()===A),a=(R=o==null?void 0:o.queryResult)==null?void 0:R.queryResults.headers.findIndex(n=>n.name.toLowerCase()===ee),r=o&&o.queryResult&&o.queryResult.queryResults.rows.reduce((n,x)=>{const C=x.values[g];return n[C]=[...n[C]||[],x],n},{});return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"headline3",gutterBottom:!0,children:"Reasons for rejecting"}),p&&e.jsx(u,{variant:"body1",gutterBottom:!0,children:p}),y&&e.jsx(N,{sx:{my:2},children:e.jsx(X,{size:30})}),c&&e.jsx(G,{error:c}),r&&e.jsx(z,{children:Object.keys(r).map(n=>e.jsx(re,{category:n,rows:r[n],selectedRowIds:d,setSelectedRowIds:i,rejectionReasonFormTextIndex:a,initialIsExpanded:Object.keys(r).length===1},n))}),e.jsx(u,{variant:"headline3",sx:{mt:1},gutterBottom:!0,children:"We’ll generate a response email message based on your selections."}),e.jsx(u,{variant:"body1",gutterBottom:!0,children:"If your reasons for rejecting are not shown here, that’s okay! You can edit the complete text of the message on the next screen before sending it."})]})}function oe(l){const{emailText:m,setEmailText:d}=l;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"headline3",gutterBottom:!0,children:"Edit the text of the rejection message"}),e.jsx(u,{variant:"body1",gutterBottom:!0,children:"This message will be sent to the requester. You may edit it, or add custom text to the message."}),e.jsx(J,{multiline:!0,fullWidth:!0,rows:15,value:m,onChange:i=>{d(i.target.value)}})]})}function v(l){var S,M,w;const{open:m,tableId:d,onClose:i,onConfirm:p,defaultMessagePrefix:o="",defaultMessageAppend:y="",rejectionFormPromptCopy:c,children:g,error:a}=l,[r,j]=F.useState(1),[R,n]=T.useState(""),[x,C]=T.useState(V()),q=U({entityId:d,query:{sql:`SELECT * FROM ${d}`},partMask:W,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"}),{data:s}=q,L=(S=s==null?void 0:s.queryResult)==null?void 0:S.queryResults.headers.findIndex(t=>t.name.toLowerCase()===A),O=(M=s==null?void 0:s.queryResult)==null?void 0:M.queryResults.headers.findIndex(t=>t.name.toLowerCase()===Z),B=(w=s==null?void 0:s.queryResult)==null?void 0:w.queryResults.headers.findIndex(t=>t.name.toLowerCase()===te),E=s&&s.queryResult&&x.reduce((t,I)=>{const h=s.queryResult.queryResults.rows.find(P=>P.rowId===I),f=h.values[L],k=h.values[O],b=h.values[B];return t[f]?t[f].reasons=[...t[f].reasons,b]:t[f]={sectionText:k,reasons:[b]},t},{}),_=E&&o+Object.keys(E).reduce((t,I)=>{t+=`
`;const h=E[I].sectionText;h&&(t+=h+`
`);for(const f of E[I].reasons)f!=null&&(t+=`
* `+f.replaceAll("\\n",`
`)+`
`);return t},"")+y;return T.useEffect(()=>{_&&n(_)},[x]),e.jsx(Q,{open:m,onCancel:()=>{r===1&&i(),r===2&&j(1)},maxWidth:"md",fullWidth:!0,title:"Reject Request?",content:e.jsxs(e.Fragment,{children:[r===1&&e.jsx(ne,{tableQuery:q,selectedRowIds:x,setSelectedRowIds:C,rejectionFormPromptCopy:c}),r===2&&e.jsxs(e.Fragment,{children:[e.jsx(oe,{emailText:R,setEmailText:n}),g]}),a&&e.jsx(Y,{variant:"danger",description:a.reason,isGlobal:!1})]}),onConfirm:()=>{r===1&&j(2),r===2&&p(R)},confirmButtonProps:{children:r===1?"Generate Email":"Reject and Notify Requester"},cancelButtonProps:{children:r===1?"Cancel":"Back"}})}try{v.displayName="CannedRejectionDialog",v.__docgenInfo={description:`Modal component presented to a data access submission reviewer when they decide to reject a request.
The modal contains a form for selecting rejection reasons and a text field for editing the rejection message.
After crafting a message, the user can reject the submission and send the message to the requester.`,displayName:"CannedRejectionDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},tableId:{defaultValue:null,description:"",name:"tableId",required:!0,type:{name:"string"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(message: string) => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},defaultMessagePrefix:{defaultValue:null,description:"Text injected into the beginning of the email template",name:"defaultMessagePrefix",required:!1,type:{name:"string"}},defaultMessageAppend:{defaultValue:null,description:"Text appended onto the end of the email template",name:"defaultMessageAppend",required:!1,type:{name:"string"}},rejectionFormPromptCopy:{defaultValue:null,description:"Text to display above the canned rejection reasons",name:"rejectionFormPromptCopy",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error to display, in case one occurred in the callback to `onReject`",name:"error",required:!0,type:{name:"SynapseClientError | null"}},children:{defaultValue:null,description:"Optional children, can be used to extend the form as needed on step 2",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{v as C};
