import{j as o}from"./jsx-runtime-DoxjgJx5.js";import{r as C}from"./index-Cu9bd8lq.js";import{c as _,d as U,e as V}from"./useThread-Dy9zD68N.js";import{u as B}from"./useQuery-BEUP4ZKU.js";import{u as p}from"./utils-BECe8vEQ.js";import{u as g}from"./useMutation-BUHlmdy0.js";import{u as N}from"./useInfiniteQuery-DAY-6DSP.js";import{l as c,S as d}from"./useFiles-DFdLn1TY.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-SKYrON-T.js";import"./OrientationBanner-6TFYkqd5.js";import{g as b}from"./InfiniteQueryUtils-CKlRW-xB.js";import{M as A}from"./MarkdownEditor-CcabD4uQ.js";import{C as G,y as z,x as H}from"./ConfirmationDialog-C9WJbO3q.js";import{B as W}from"./Box-Bt_N9PQN.js";function de(e,s,r,a,t,n){const{accessToken:i,keyFactory:m}=c();return N({...n,queryKey:m.getRepliesQueryKey(e,s,r,a,t),queryFn:async l=>d.getReplies(i,e,r,l.pageParam,a,s,t),initialPageParam:void 0,getNextPageParam:b})}function me(e,s){const{accessToken:r,keyFactory:a}=c(),t=async()=>{const n=await d.getReplyMessageUrl(e.messageKey,r);return(await fetch(n.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return B({...s,queryKey:a.getReplyQueryKey(e.threadId,e.id,e.messageKey),queryFn:t})}function J(e){const s=p(),{accessToken:r,keyFactory:a}=c();return g({...e,mutationFn:t=>d.postReply(t,r),onSuccess:async(t,n,i)=>{await s.invalidateQueries({queryKey:a.getAllRepliesQueryKey(t.threadId)}),e!=null&&e.onSuccess&&await e.onSuccess(t,n,i)}})}function L(e){const s=p(),{accessToken:r,keyFactory:a}=c();return g({...e,mutationFn:t=>d.putReply(t,r),onSuccess:async(t,n,i)=>{await s.invalidateQueries({queryKey:a.getAllRepliesQueryKey(t.threadId)}),e!=null&&e.onSuccess&&await e.onSuccess(t,n,i)}})}function ye(e){const s=p(),{accessToken:r,keyFactory:a}=c();return g({...e,mutationFn:t=>d.deleteReply(r,t.replyId),onSuccess:async(t,n,i)=>{await s.invalidateQueries({queryKey:a.getAllRepliesQueryKey(n.threadId)}),e!=null&&e.onSuccess&&await e.onSuccess(t,n,i)}})}function P(e){const{initialText:s,initialTitle:r,id:a,onClose:t,isReply:n,isDialog:i,openDialog:m}=e,[l,S]=C.useState(r??""),[y,q]=C.useState(s??""),{mutate:F,isPending:I}=_({onSuccess:()=>t()}),{mutate:k,isPending:w}=U({onSuccess:()=>t()}),{mutate:K,isPending:j}=V({onSuccess:()=>t()}),{mutate:Q,isPending:v}=J({onSuccess:()=>t()}),{mutate:E,isPending:M}=L({onSuccess:()=>t()}),D=w||v||j||I||M,f=!n&&r,h=(u,R)=>{n?s?E({replyId:a,messageMarkdown:u}):Q({threadId:a,messageMarkdown:u}):f?(F({title:R,threadId:a}),k({messageMarkdown:u,threadId:a})):K({forumId:a,title:R,messageMarkdown:u})},T=o.jsxs("div",{className:"bootstrap-4-backport",children:[!n&&o.jsx(H,{type:"text",placeholder:"Title",value:l,onChange:u=>S(u.target.value)}),o.jsx(A,{text:y,setText:q})]}),x=D?"Saving":"Save";return o.jsx(o.Fragment,{children:i?o.jsx(G,{maxWidth:"md",open:m,onCancel:t,title:n?"Edit Reply":f?"Edit Thread":"New Thread",content:T,onConfirm:()=>h(y,l),confirmButtonProps:{children:x}}):o.jsxs(o.Fragment,{children:[T,o.jsx(W,{display:"flex",justifyContent:"flex-end",children:o.jsx(z,{onCancel:t,onConfirm:()=>h(y,l),confirmButtonProps:{children:x}})})]})})}try{P.displayName="ForumThreadEditor",P.__docgenInfo={description:"",displayName:"ForumThreadEditor",props:{initialTitle:{defaultValue:null,description:"",name:"initialTitle",required:!1,type:{name:"string"}},initialText:{defaultValue:null,description:"",name:"initialText",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}},isDialog:{defaultValue:null,description:"",name:"isDialog",required:!0,type:{name:"boolean"}},openDialog:{defaultValue:null,description:"",name:"openDialog",required:!1,type:{name:"boolean"}}}}}catch{}export{P as F,ye as a,de as b,me as u};
