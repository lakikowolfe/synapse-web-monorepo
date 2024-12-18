import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{d as oe}from"./DeleteTwoTone-Dtqgjh91.js";import{i as te}from"./createTheme-BIBP8v0l.js";import{r as re}from"./createSvgIcon-n5rVXizw.js";import{l as m,br as ne}from"./useFiles-DFdLn1TY.js";import{W as se}from"./WebhookVerificationStatus-CaCjD9x8.js";import{r as a}from"./index-Cu9bd8lq.js";import{C as E,g as ie}from"./ConfirmationDialog-C9WJbO3q.js";import{E as ae}from"./EntityFinderModal-C_36MPV1.js";import{F as ce}from"./EntityTree-Nmqfp8sk.js";import{V as le}from"./Renderers-Z9KvFAGZ.js";import{d as f}from"./ToastMessage-BzITCHuf.js";import{G as h}from"./Grid2-CvhXJ3NT.js";import{T as y}from"./Typography-D6GCV-CB.js";import{T as W}from"./TextField-BM400Yg9.js";import{I as de}from"./IconButton-DhHKwBf8.js";import{F as V}from"./FormControlLabel-CARkfAdu.js";import{S as ue}from"./Switch-SQoC4RCk.js";import{I as N}from"./InputLabel-RHZu0c3g.js";import{F as he}from"./FormGroup-FbDq9HHm.js";import{C as me}from"./Checkbox-BnrBea29.js";import{a as pe}from"./ThemesPlot-DTwb1x2M.js";import{B as fe}from"./Button-j3jTttn9.js";import{A as j}from"./Alert-B6PGsAkP.js";import{L as O}from"./Link-DPsc3TBb.js";import{B as ye}from"./Box-Bt_N9PQN.js";import{u as b}from"./utils-BECe8vEQ.js";import{u as k}from"./useMutation-BUHlmdy0.js";import{u as be}from"./useInfiniteQuery-DAY-6DSP.js";const ke={CREATE:"CREATE",UPDATE:"UPDATE",DELETE:"DELETE"},Ce={ENTITY:"ENTITY"};function io(o){const{synapseClient:t,keyFactory:s}=m();return be({...o,initialPageParam:void 0,queryKey:s.getWebhooksQueryKey(),queryFn:async n=>t.webhookServicesClient.postRepoV1WebhookList({listUserWebhooksRequest:{nextPageToken:n.pageParam}}),getNextPageParam:n=>n.nextPageToken})}function ve(o){const{synapseClient:t,keyFactory:s}=m(),n=b();return k({...o,mutationFn:r=>t.webhookServicesClient.postRepoV1Webhook({createOrUpdateWebhookRequest:r}),onSuccess:(...r)=>{n.invalidateQueries({queryKey:s.getWebhooksQueryKey()}),o!=null&&o.onSuccess&&o.onSuccess(...r)}})}function xe(o){const{synapseClient:t,keyFactory:s}=m(),n=b();return k({...o,mutationFn:r=>t.webhookServicesClient.putRepoV1WebhookWebhookId(r),onSuccess:(...r)=>{n.invalidateQueries({queryKey:s.getWebhooksQueryKey()}),o!=null&&o.onSuccess&&o.onSuccess(...r)}})}function ge(o){const{synapseClient:t,keyFactory:s}=m(),n=b();return k({...o,mutationFn:r=>t.webhookServicesClient.deleteRepoV1WebhookWebhookId({webhookId:r}),onSuccess:(...r)=>{n.invalidateQueries({queryKey:s.getWebhooksQueryKey()}),o!=null&&o.onSuccess&&o.onSuccess(...r)}})}function Se(o){const{synapseClient:t,keyFactory:s}=m(),n=b();return k({...o,mutationFn:r=>t.webhookServicesClient.postRepoV1WebhookWebhookIdVerify(r),onSuccess:(...r)=>{n.invalidateQueries({queryKey:s.getWebhooksQueryKey()}),o!=null&&o.onSuccess&&o.onSuccess(...r)}})}function ao(o){const{synapseClient:t,keyFactory:s}=m(),n=b();return k({...o,mutationFn:r=>t.webhookServicesClient.putRepoV1WebhookWebhookIdVerificationCode({webhookId:r}),onSuccess:(...r)=>{n.invalidateQueries({queryKey:s.getWebhooksQueryKey()})}})}var w={},Ee=te;Object.defineProperty(w,"__esModule",{value:!0});var U=w.default=void 0,We=Ee(re()),je=e;U=w.default=(0,We.default)((0,je.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"SearchOutlined");const we=encodeURIComponent("Request to add new domain for webhook verification"),Ie=encodeURIComponent("<Please provide the domain(s) you wish to use and any additional details related to your request.>"),_e=`https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=${we}&description=${Ie}`;function Te(o){return e.jsxs(ye,{sx:{backgroundColor:"rgb(178, 36, 42, 0.03)"},mt:"10px",py:2,px:4,children:[e.jsx(y,{sx:{my:1},color:"error",variant:"headline3",gutterBottom:!0,children:"DANGER ZONE"}),e.jsx(y,{variant:"body1",gutterBottom:!0,children:"Editing the following information will require you to re-verify the webhook."}),o.children]})}function A(o){const{initialData:t,open:s,onClose:n}=o,r=Ce.ENTITY,[p,c]=a.useState(""),[d,l]=a.useState(new Set),[C,I]=a.useState(""),[v,_]=a.useState(!0);a.useEffect(()=>{c((t==null?void 0:t.objectId)||""),l(new Set((t==null?void 0:t.eventTypes)||[])),I((t==null?void 0:t.invokeEndpoint)||""),_((t==null?void 0:t.isEnabled)??!0)},[t]);const[L,x]=a.useState(!1),[Q,g]=a.useState(!1),{mutate:M,isPending:K,error:G}=ve({onSuccess:()=>{f("Webhook created","success"),n()}}),{mutate:Y,isPending:$,error:z}=xe({onSuccess:()=>{f("Webhook updated","success"),n()}}),{mutate:H,isPending:T,error:R}=ge({onSuccess:()=>{f("Webhook deleted","info"),g(!1),n()}}),F=K||$,u=G||z;function J(){t?Y({webhookId:t.id,createOrUpdateWebhookRequest:{objectType:r,objectId:p,eventTypes:d,invokeEndpoint:C,isEnabled:v}}):M({objectType:r,objectId:p,eventTypes:d,invokeEndpoint:C,isEnabled:v})}function Z(){t&&H(t.id)}const P=u&&u.errorResponse&&"errorCode"in u.errorResponse&&u.errorResponse.errorCode===ne.UNSUPPORTED_WEBHOOK_DOMAIN,X=t&&t.verificationStatus===se.VERIFIED?Te:a.Fragment;return e.jsx(E,{open:s,title:"Create New Webhook",maxWidth:"md",onCancel:n,onConfirm:()=>{J()},confirmButtonProps:{children:`${t?"Update":"Create"} Webhook`,disabled:F},cancelButtonProps:{disabled:F},content:e.jsxs(e.Fragment,{children:[e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{xs:12,children:e.jsx(y,{variant:"body1",gutterBottom:!0,children:"Specify the ID of the entity and the types of events you would like to receive. Once you complete this step, Synapse will send a verification code to the endpoint you specify. After you verify your webhook, Synapse will send your chosen events to the verified endpoint."})}),e.jsxs(h,{xs:12,md:6,children:[e.jsx(ae,{configuration:{initialScope:ce.ALL_PROJECTS,initialContainer:"root",selectMultiple:!1,treeOnly:!1,versionSelection:le.DISALLOWED},show:L,onCancel:()=>{x(!1)},title:"Select item for Webhook",promptCopy:"Select an item to associate with the webhook. The webhook can be used to receive programmatic alerts when the item is updated.",onConfirm:i=>{c(i[0].targetId),x(!1)},confirmButtonCopy:"Select"}),e.jsx(W,{required:!0,label:e.jsxs(e.Fragment,{children:["Entity ID",e.jsx(ie,{containerSx:{position:"fixed",ml:"15px",fontSize:"12px"},markdownText:"The ID of a Synapse entity for which to receive events. For folders and projects, matching events are published to the webhook endpoint for any entity in their hierarchy."})]}),type:"text",fullWidth:!0,value:p,onChange:i=>{c(i.target.value)},InputProps:{endAdornment:e.jsx(de,{onClick:()=>x(!0),children:e.jsx(U,{})})}})]}),e.jsx(h,{xs:6,children:e.jsx(V,{control:e.jsx(ue,{}),labelPlacement:"top",label:e.jsx(N,{children:"Enabled"}),checked:v,onChange:(i,q)=>{_(q)}})}),e.jsx(h,{xs:12,md:6,children:e.jsxs(he,{children:[e.jsx(N,{required:!0,children:"Events"}),Object.values(ke).map(i=>e.jsx(V,{control:e.jsx(me,{}),label:pe(i.toLowerCase()),checked:d.has(i),onChange:(q,ee)=>{l(S=>{if(ee){const D=new Set(S);return D.add(i),D}else return S.delete(i),new Set(S)})}},i))]})}),e.jsx(h,{xs:12,children:e.jsxs(X,{children:[e.jsx(W,{label:"Endpoint",fullWidth:!0,value:C,onChange:i=>I(i.target.value),required:!0,placeholder:"https://"}),t&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{onClick:()=>{g(!0)},color:"error",variant:"outlined",startIcon:e.jsx(oe,{}),sx:{my:2},children:"Delete Webhook"}),e.jsx(E,{title:"Confirm Delete Webhook?",onCancel:()=>g(!1),open:Q,content:e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"body1",children:"Are you sure you want to delete this webhook? This action cannot be undone."}),R&&e.jsx(j,{severity:"error",sx:{mt:2},children:R.reason})]}),onConfirm:()=>{Z()},confirmButtonProps:{children:"Delete",color:"error",disabled:T},cancelButtonProps:{disabled:T}})]})]})})]}),u&&e.jsxs(j,{severity:"error",sx:{my:2},children:[P&&e.jsxs(e.Fragment,{children:["Synapse only permits configuring webhooks on verified domains, which are specified in the"," ",e.jsx(O,{href:"https://rest-docs.synapse.org/rest/index.html#org.sagebionetworks.repo.web.controller.WebhookController",target:"_blank",children:"REST documentation"}),". You have entered a domain that has not been verified."," ",e.jsx(O,{href:_e,target:"_blank",children:"Please fill out this form to request verification for your webhook domain"}),"."]}),!P&&u.reason]})]})})}try{A.displayName="CreateWebhookModal",A.__docgenInfo={description:"",displayName:"CreateWebhookModal",props:{initialData:{defaultValue:null,description:"",name:"initialData",required:!1,type:{name:"Webhook"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}function B(o){const{open:t,onClose:s}=o,[n,r]=a.useState(""),{mutate:p,isPending:c,error:d}=Se({onSuccess:l=>{l.isValid?f("Webhook verified","success"):f(`Webhook was not verified: ${l.invalidReason}`,"danger"),s()}});return e.jsx(E,{title:"Verify Webhook",onCancel:()=>{c||s()},open:t,content:e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"body1",gutterBottom:!0,children:"Enter the code sent to your webhook to verify it. Once the webhook has been verified, Synapse will start sending the events you chose to your webhook endpoint."}),e.jsx(W,{label:"Verification code",value:n,onChange:l=>r(l.target.value),sx:{mt:1}}),d&&e.jsx(j,{severity:"error",sx:{mt:2},children:d.reason})]}),onConfirm:()=>{p({webhookId:o.webhookId,verifyWebhookRequest:{verificationCode:n}})},confirmButtonProps:{children:"Verify",disabled:c},cancelButtonProps:{disabled:c}})}try{B.displayName="WebhookVerificationDialog",B.__docgenInfo={description:"",displayName:"WebhookVerificationDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},webhookId:{defaultValue:null,description:"",name:"webhookId",required:!0,type:{name:"string"}}}}}catch{}export{A as C,Ce as S,B as W,ao as a,io as u};
