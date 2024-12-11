import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{c as d}from"./VerificationSubmission-DL9jxYsQ.js";import{E as p,u}from"./EvaluationFinder-DeuW4xlG.js";import{I as f}from"./IconSvg-CKrxCec8.js";import{T as s}from"./Typography-D6GCV-CB.js";import{B as a}from"./Box-Bt_N9PQN.js";import{S as x}from"./Skeleton-DxEJ6_Wp.js";import{A as h}from"./Alert-B6PGsAkP.js";import{L as v}from"./Link-DPsc3TBb.js";import{I as S}from"./IconButton-DhHKwBf8.js";function j(n){const{evaluationId:r,onRemove:i}=n,{data:o,isLoading:t,isError:m,error:c}=u(r);return t?e.jsx(x,{width:"100%"}):m?e.jsxs(h,{severity:"error",children:[e.jsx(s,{children:c.reason}),e.jsx(v,{onClick:g=>{i()},children:"Remove from scope"})]}):e.jsxs(a,{display:"flex",flexDirection:"row",gap:1,alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{variant:"smallText1",children:o.name},o.id),e.jsx(S,{size:"small","aria-label":`Remove ${o.name} from scope`,onClick:()=>{i()},sx:{"&:hover":{color:"error.main"}},children:e.jsx(f,{icon:"delete",fontSize:"inherit",wrap:!1})})]})}function l(n){const{evaluationIds:r=[],onChange:i}=n;return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"smallText1",sx:{fontWeight:700},mb:1,children:"Evaluations"}),e.jsx(p,{activeOnly:!1,accessType:d.READ_PRIVATE_SUBMISSION,selectedIds:r,onChange:i}),e.jsxs(a,{sx:{border:"1px solid",borderColor:"grey.300"},p:2.5,mb:2.5,children:[e.jsx(s,{variant:"smallText1",sx:{fontWeight:700},mb:1,children:"Selected"}),e.jsx(a,{display:"flex",flexDirection:"column",gap:1,children:r.map(o=>e.jsx(j,{evaluationId:o,onRemove:()=>{i(r.filter(t=>t!==o))}},o))})]})]})}try{l.displayName="SubmissionViewScopeEditor",l.__docgenInfo={description:"Component used to select evaluations to define a SubmissionView scope",displayName:"SubmissionViewScopeEditor",props:{evaluationIds:{defaultValue:null,description:"",name:"evaluationIds",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(evaluationIds: string[]) => void"}}}}}catch{}export{l as S};
