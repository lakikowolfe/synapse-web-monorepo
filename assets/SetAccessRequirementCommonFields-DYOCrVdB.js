import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{R as l,c as B}from"./VerificationSubmission-DL9jxYsQ.js";import{S as V,M as Y}from"./SelfSignAccessRequirement-CEwndEoz.js";import{p as W}from"./pluralize-D3rOHoU0.js";import{r as n}from"./index-Cu9bd8lq.js";import{v as z}from"./useFiles-DFdLn1TY.js";import"./RegularExpressions-SKYrON-T.js";import"./OrientationBanner-6TFYkqd5.js";import{f as X,g as K,h as Z}from"./useAccessRequirements-Cf1xallB.js";import{E as ee}from"./EntitySubjectsSelector-Cq1Px0Tl.js";import{T as te}from"./TeamSubjectsSelector-DUdq9ntV.js";import{S as E}from"./Skeleton-DxEJ6_Wp.js";import{T as R}from"./TextField-BM400Yg9.js";import{A as _}from"./Alert-B6PGsAkP.js";import{T as b}from"./Typography-D6GCV-CB.js";import{F as y}from"./FormControlLabel-CARkfAdu.js";import{C as re}from"./Checkbox-BnrBea29.js";import{S as se}from"./Stack-BbdlCzXz.js";import{T as ne}from"./Tooltip-CTVx2uGI.js";import{H as oe}from"./IconSvg-CesIlRas.js";import{R as ae}from"./RadioGroup-clYTL0Ek.js";import{R as k}from"./Radio-lcFkrfOW.js";const ie="Please select at least one resource for this Access Requirement to be associated with.",C=c=>{const f=c===l.ENTITY?"Synapse":"Team",T=c[0].toUpperCase()+c.slice(1).toLowerCase();return`${f} IDs were specified but not added to the subjects list. Please either clear out the Add ${f} IDs textbox or click the Add ${W(T)} button.`},ce="Enter access requirement name. This will also be used when sending notifications for expiring or revoked approval. For example, 'The approval for the name access requirement was revoked...'",g={variant:"body1",fontWeight:700};function le(c){switch(c){case l.ENTITY:return B.DOWNLOAD;case l.TEAM:return B.PARTICIPATE;default:throw new Error(`RestrictableObjectType ${c} does not have an access type specified.`)}}const G=n.forwardRef(function(f,T){const{subject:o,accessRequirementId:I,onSave:H,onError:h}=f,d=!o,[u,j]=n.useState(o?[o]:[]),[x,$]=n.useState(!1),[N,p]=n.useState(null),[S,q]=n.useState(""),[a,v]=n.useState(!1),[A,w]=n.useState((o==null?void 0:o.type)===l.TEAM?V:Y),[U,M]=n.useState(null),F=t=>{M(null),H(t.id.toString(),t.concreteType)},D=t=>{M(t.reason),h()},{mutate:O}=X({onSuccess:t=>F(t),onError:t=>D(t)}),{mutate:P}=K({onSuccess:t=>F(t),onError:t=>D(t)}),{data:r,isLoading:J,error:L}=Z(I,{enabled:!!I});n.useEffect(()=>{r&&(w(r.concreteType),q(r.name),j(r.subjectIds),v(r.subjectsDefinedByAnnotations))},[r]);const i=n.useMemo(()=>{if(o)return o.type;if(r){const t=r.subjectIds;if(t.length>0)return t[0].type}return a?l.ENTITY:null},[o,r,a]),Q=n.useMemo(()=>{if(!i)return e.jsx(e.Fragment,{});function t(s){p(null),j(s)}function m(s){p(null),$(s.trim()!=="")}if(a)return e.jsx(e.Fragment,{});switch(i){case l.TEAM:return e.jsx(te,{subjects:u,onUpdate:s=>t(s),onUpdateTeamIDsTextbox:s=>m(s)});case l.ENTITY:return e.jsx(ee,{subjects:u,onUpdate:s=>t(s),onUpdateEntityIDsTextbox:s=>m(s)});default:return console.error(`RestrictableObjectType ${i} does not have a selector implemented.`),e.jsx(e.Fragment,{})}},[i,u,a]);return n.useImperativeHandle(T,()=>({save(){const t=d&&!r||!i,m=!a&&(x||u.length===0);if(t||m){m&&!t&&(x?p(C(i)):u.length===0&&p(ie)),h();return}const s=le(i);d||O({concreteType:A,subjectIds:u,name:S,accessType:s,subjectsDefinedByAnnotations:a}),d&&r&&P({...r,subjectIds:u,name:S,accessType:s,subjectsDefinedByAnnotations:a})}}),[x,i,u,S,A,r,d,h,O,P,a]),J||!i?e.jsxs(e.Fragment,{children:[e.jsx(E,{width:100,height:30}),e.jsx(E,{width:125,height:30}),e.jsx(E,{width:"100%",children:e.jsx(R,{})}),e.jsx(E,{width:100,height:30}),e.jsx(E,{width:"100%",children:e.jsx(R,{})})]}):L?e.jsx(_,{severity:"error",children:L.reason}):e.jsxs(e.Fragment,{children:[e.jsx(b,{...g,children:"Resources"}),i!==l.TEAM&&e.jsx(y,{control:e.jsx(re,{}),label:"Associated entities should be defined by annotations (DUO)",checked:a,onChange:()=>{p(null);let t=[];a&&(r?t=r.subjectIds:o&&(t=[o])),j(t),v(!a)}}),e.jsx(z,{children:Q}),N&&e.jsx(_,{severity:"error",children:N}),e.jsxs(se,{direction:"row",gap:1,alignItems:"center",mb:1,mt:2,children:[e.jsx(b,{component:"label",htmlFor:"arName",...g,children:"Name"}),e.jsx(ne,{title:ce,placement:"right",children:e.jsx(oe,{sx:{color:"grey.600"}})})]}),e.jsx(R,{id:"arName",name:"arName",value:S,placeholder:"Access requirement name",fullWidth:!0,onChange:t=>q(t.target.value)}),!d&&i!==l.TEAM&&e.jsxs(e.Fragment,{children:[e.jsx(b,{...g,mt:2,children:"Access requirement type"}),e.jsxs(ae,{value:A,onChange:(t,m)=>w(m),children:[e.jsx(y,{value:Y,control:e.jsx(k,{}),label:"Controlled - requests are in Synapse"}),e.jsx(y,{value:V,control:e.jsx(k,{}),label:"Click wrap"})]})]}),U&&e.jsx(_,{severity:"error",sx:{marginTop:2},children:U})]})});try{C.displayName="UNSAVED_SUBJECTS_ERROR_MESSAGE",C.__docgenInfo={description:"",displayName:"UNSAVED_SUBJECTS_ERROR_MESSAGE",props:{}}}catch{}try{G.displayName="SetAccessRequirementCommonFields",G.__docgenInfo={description:"",displayName:"SetAccessRequirementCommonFields",props:{subject:{defaultValue:null,description:"",name:"subject",required:!1,type:{name:"RestrictableObjectDescriptor"}},accessRequirementId:{defaultValue:null,description:"",name:"accessRequirementId",required:!1,type:{name:"string"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(accessRequirementId: string, accessRequirementConreteType: ACCESS_REQUIREMENT_CONCRETE_TYPE) => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!0,type:{name:"() => void"}}}}}catch{}export{G as S};