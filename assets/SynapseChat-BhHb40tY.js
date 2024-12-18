import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as o}from"./index-Cu9bd8lq.js";import{M as ne}from"./ConfirmationDialog-C9WJbO3q.js";import{u as J}from"./utils-B6ltzQPV.js";import{L as K}from"./ListItem-CA4Es91E.js";import{L as ae}from"./ListItemText-DJt0e7Pw.js";import{B as d}from"./Box-Bt_N9PQN.js";import{c as oe}from"./createSvgIcon-Dn0UJ7ef.js";import{A as $}from"./Alert-B6PGsAkP.js";import"./SkeletonButton-Djog88RD.js";import"./SkeletonInlineBlock-93re9Qzh.js";import"./SkeletonTable-BZCRINy2.js";import{S as ce}from"./SkeletonParagraph-Xq_br2Sr.js";import{u as ie}from"./useQuery-BEUP4ZKU.js";import{u as k}from"./useMutation-BUHlmdy0.js";import{l as h,S as v}from"./useFiles-DFdLn1TY.js";import{t as y}from"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-SKYrON-T.js";import"./OrientationBanner-6TFYkqd5.js";import{D as le}from"./DropdownSelect-CeX4bhkJ.js";import{T as S}from"./Typography-D6GCV-CB.js";import{d as ue}from"./ToastMessage-BzITCHuf.js";import{S as de}from"./LoadingScreen-Be03UZKS.js";import{L as pe}from"./List-BhKoI0Qm.js";import{T as me}from"./ButtonBase-DSnjMKVu.js";import{F as xe}from"./Fade-DPmnnOI3.js";import{T as fe}from"./TextField-BM400Yg9.js";import{I as he}from"./IconButton-DhHKwBf8.js";import{A as ge}from"./ArrowUpward-CHkJ3lDq.js";const ye=oe([e.jsx("path",{d:"M18 7H6v12h12zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5M16 17H8v-2h8zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13",opacity:".3"},"0"),e.jsx("path",{d:"M8 15h8v2H8z"},"1"),e.jsx("path",{d:"M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3m-2 10H6V7h12z"},"2"),e.jsx("circle",{cx:"15",cy:"11.5",r:"1.5"},"3"),e.jsx("circle",{cx:"9",cy:"11.5",r:"1.5"},"4")],"SmartToyTwoTone");function T({userMessage:s,chatResponseText:i,chatErrorReason:r,scrollIntoView:a=!1}){const c=J(),l=o.useRef(null);o.useEffect(()=>{a&&l.current&&l.current.scrollIntoView({behavior:"smooth"})},[l]);const n=o.useMemo(()=>{const p=new DOMParser().parseFromString(i??"","text/html");return p.querySelectorAll("tool_name").forEach(C=>C.remove()),p.body.textContent??""},[i]);return e.jsxs(e.Fragment,{children:[e.jsx(K,{ref:l,sx:{alignSelf:"flex-end",backgroundColor:c.palette.secondary[100],borderRadius:"24px",maxWidth:"70%",display:"block",mb:"5px",p:"8px 12px",wordWrap:"break-word",width:"auto"},children:e.jsx(ae,{primary:s})}),n&&e.jsxs(K,{sx:{display:"grid",gridTemplateColumns:"50px auto",columnGap:"0px",justifyItems:"center",alignItems:"start",p:"0px"},children:[e.jsx(d,{sx:{p:"3px",mt:"10px",height:"31px",borderRadius:"50%",borderStyle:"solid",borderWidth:"1px",borderColor:"grey.300"},children:e.jsx(ye,{sx:{color:"secondary.main"}})}),e.jsx(d,{sx:{borderRadius:"10px",padding:"10px",maxWidth:"100%"},children:e.jsx(ne,{markdown:n})})]}),r&&e.jsx($,{severity:"error",sx:{my:2},children:r})]})}try{T.displayName="SynapseChatInteraction",T.__docgenInfo={description:"",displayName:"SynapseChatInteraction",props:{userMessage:{defaultValue:null,description:"",name:"userMessage",required:!0,type:{name:"string"}},chatResponseText:{defaultValue:null,description:"",name:"chatResponseText",required:!1,type:{name:"string"}},scrollIntoView:{defaultValue:{value:"false"},description:"",name:"scrollIntoView",required:!1,type:{name:"boolean"}},chatErrorReason:{defaultValue:null,description:"",name:"chatErrorReason",required:!1,type:{name:"string"}}}}}catch{}function Se(s){const{accessToken:i}=h();return k({mutationFn:r=>v.createAgentSession(r,i),onSuccess:async(r,a,c)=>{s!=null&&s.onSuccess&&await s.onSuccess(r,a,c)}})}function Te(s){const{accessToken:i}=h();return k({mutationFn:r=>v.updateAgentSession(r,i),onSuccess:async(r,a,c)=>{s!=null&&s.onSuccess&&await s.onSuccess(r,a,c)},onError:async(r,a,c)=>{s!=null&&s.onError&&await s.onError(r,a,c)}})}function ve(s,i){const{accessToken:r}=h();return k({mutationFn:a=>v.getAgentChatAsyncJobResults(a,r,i),onSuccess:(a,c,l)=>{s!=null&&s.onSuccess&&a.responseBody&&s.onSuccess(a.responseBody,c,l)},onError:(a,c,l)=>{s!=null&&s.onError&&s.onError(a,c,l)}})}function Ae(s,i){const{accessToken:r,keyFactory:a}=h();return ie({...i,queryKey:a.getChatAgentTraceKey(s),queryFn:()=>v.getChatAgentTraceEvents(s,r)})}const M=[{value:y.PUBLICLY_ACCESSIBLE,label:"Public Data Only"},{value:y.READ_YOUR_PRIVATE_DATA,label:"Read Your Private Data"},{value:y.WRITE_YOUR_PRIVATE_DATA,label:"Read & Write Your Data"}];function L({onChange:s,initAccessLevel:i}){const r=M.findIndex(n=>n.value==i),a=M.map(n=>n.label),[c,l]=o.useState(r);return e.jsxs(d,{sx:{display:"flex",justifyContent:"flex-end",mt:"20px"},children:[e.jsx(S,{variant:"label",sx:{gridColumn:"2",mt:"10px",mr:"15px"},children:"Access:"}),e.jsx(le,{variant:"outlined",options:a,selectedIndex:c,setSelectedIndex:n=>{c!==n&&(l(n),s(M[n].value))}})]})}try{L.displayName="AccessLevelMenu",L.__docgenInfo={description:"",displayName:"AccessLevelMenu",props:{initAccessLevel:{defaultValue:null,description:"",name:"initAccessLevel",required:!0,type:{name:"enum",value:[{value:'"PUBLICLY_ACCESSIBLE"'},{value:'"READ_YOUR_PRIVATE_DATA"'},{value:'"WRITE_YOUR_PRIVATE_DATA"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newAccessLevel: AgentAccessLevel) => void"}}}}}catch{}function G({initialMessage:s,agentRegistrationId:i,chatbotName:r="SynapseChat",hideTitle:a=!1,textboxPositionOffset:c="0px"}){const{accessToken:l}=h(),[n,A]=o.useState(),{mutate:p,error:I}=Se({onSuccess:t=>A(t)}),{mutate:C}=Te({onSuccess:t=>A(t),onError:t=>ue(`Unable to update the agent session: ${t.message}`,"danger")}),Q=J(),[V,X]=o.useState(y.PUBLICLY_ACCESSIBLE),[D,Z]=o.useState([]),[u,b]=o.useState(),[j,P]=o.useState(),[E,B]=o.useState(""),[R,q]=o.useState(""),[f,F]=o.useState(""),[O,ee]=o.useState(!1),[m,U]=o.useState(),{mutate:Y}=ve({onSuccess:t=>{B(t.responseText)},onError:t=>{q(t.reason)}},t=>{P(t.jobId)}),{data:x}=Ae({jobId:j,newerThanTimestamp:m==null?void 0:m.timestamp},{enabled:!!j,refetchInterval:j?1e3:!1,refetchIntervalInBackground:!0});o.useEffect(()=>{if(x&&x.page.length>0){const t=x.page[x.page.length-1],te=new DOMParser().parseFromString(t.message,"text/html").getElementsByTagName("thinking"),re=Array.from(te).map(w=>{var H;return(H=w==null?void 0:w.textContent)==null?void 0:H.trim()}).join(`
`);t.friendlyMessage=re??t.message,U(t),console.debug(x.page)}},[x]),o.useEffect(()=>{u&&(E||R)&&(u.chatResponseText=E,u.chatErrorReason=R,Z([...D,u]),B(""),q(""),b(void 0),P(void 0),U(void 0))},[E,R,u]),o.useEffect(()=>{p&&!n&&p({agentAccessLevel:V,agentRegistrationId:i})},[p,n,l]),o.useEffect(()=>{n&&s&&!O&&(b({userMessage:s}),Y({chatText:s,sessionId:n.sessionId,enableTrace:!0}),ee(!0))},[n,s,O]);const _=()=>{f.trim()&&(b({userMessage:f}),F(""),Y({chatText:f,sessionId:n.sessionId,enableTrace:!0}))},g=!n||!f||!!u,se=t=>{!g&&t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),_())},W=Q.palette.secondary[300];if(I)return e.jsx($,{severity:"error",sx:{my:2},children:I.reason});const N=(m==null?void 0:m.friendlyMessage)??"Processing...";return e.jsxs(d,{display:"flex",flexDirection:"column",justifyContent:"space-between",maxWidth:"1100px",mx:"auto",children:[!a&&e.jsx(S,{variant:"headline1",sx:{p:"20px",borderBottom:"1px solid",borderColor:"grey.300",position:"sticky",top:"0px",backgroundColor:"white",zIndex:1},children:r}),e.jsx(L,{initAccessLevel:V,onChange:t=>{X(t),C({agentAccessLevel:t,sessionId:n.sessionId})}}),!n&&e.jsx(ce,{numRows:10}),n&&e.jsx(d,{sx:{flexGrow:1,overflowY:"auto",mb:2},children:e.jsxs(pe,{sx:{flex:1,overflowY:"auto",pt:"20px",display:"flex",flexDirection:"column"},children:[D.map((t,z)=>e.jsx(T,{userMessage:t.userMessage,chatResponseText:t.chatResponseText,chatErrorReason:t.chatErrorReason},z)),u&&e.jsxs(e.Fragment,{children:[e.jsx(T,{userMessage:u.userMessage,chatResponseText:u.chatResponseText,chatErrorReason:u.chatErrorReason,scrollIntoView:!0}),e.jsxs(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",gap:"5px"},children:[e.jsx(de,{size:40}),e.jsx(d,{sx:{position:"relative",pt:"130px"},children:e.jsx(me,{children:e.jsx(xe,{timeout:500,children:e.jsx(S,{sx:{textAlign:"center",position:"absolute",width:"100%",top:0},variant:"body1Italic",children:N})},N)})})]})]})]})}),e.jsx(d,{sx:{position:"sticky",bottom:c,backgroundColor:"white"},children:e.jsxs(d,{component:"form",sx:{pb:"10px",position:"sticky"},onSubmit:_,children:[e.jsx(fe,{fullWidth:!0,value:f,onChange:t=>F(t.target.value),onKeyDown:se,placeholder:`Message ${r}`,InputProps:{sx:{borderRadius:96.6},endAdornment:e.jsx(he,{disabled:g,onClick:_,sx:{ml:"7px",mr:"-8px",color:W,borderStyle:"solid",borderWidth:g?"1px":"2px",borderColor:g?"gray":W},children:e.jsx(ge,{})})}}),e.jsxs(S,{variant:"smallText1",sx:{pt:"8px",textAlign:"center"},children:[r," can make mistakes."]})]})})]})}try{G.displayName="SynapseChat",G.__docgenInfo={description:"",displayName:"SynapseChat",props:{initialMessage:{defaultValue:null,description:"",name:"initialMessage",required:!1,type:{name:"string"}},agentRegistrationId:{defaultValue:null,description:"",name:"agentRegistrationId",required:!1,type:{name:"string"}},chatbotName:{defaultValue:{value:"SynapseChat"},description:"",name:"chatbotName",required:!1,type:{name:"string"}},hideTitle:{defaultValue:{value:"false"},description:"",name:"hideTitle",required:!1,type:{name:"boolean"}},textboxPositionOffset:{defaultValue:{value:"0px"},description:"",name:"textboxPositionOffset",required:!1,type:{name:"string"}}}}}catch{}export{G as S};
