import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as a}from"./index-Cu9bd8lq.js";import{K as v,C as E}from"./ConfirmationDialog-DWtYmOhU.js";import{M as _}from"./MuiForm-B9c1Xjx_.js";import"./isPlainObject-BDeK4qKc.js";import"./index.modern-BSaf6tm9.js";import"./_getPrototype-DSx75BAr.js";import{v as N}from"./index-D7T9YJ1n.js";import"./styled-BBrRP0Md.js";import{g as D,A as b,a as w,b as F,c as I,B as O,E as P,T as J,D as q,d as M}from"./ErrorListTemplate-C4uZI2w9.js";import{p as R}from"./papaparse.min-aI5f60TX.js";import{i as B}from"./_baseTimes-36S_kd0L.js";import{B as S}from"./Box-BaZAwz5V.js";import{B as f}from"./Button-D1yxts2k.js";import{C as k}from"./cloneDeep-BhVrLcRV.js";import{T as W}from"./TextField-MZUQmcSK.js";import{A as L}from"./Alert-CFMVYrhF.js";import{A as H}from"./AlertTitle-D3sbju9B.js";import{T as U}from"./Typography-Cf0oTcRj.js";const $={jsonSchemaDefinition:{type:"string"}};function G(n=$){const{jsonSchemaDefinition:r}=n,i=a.useMemo(()=>B(r)&&r.type&&r.type==="string",[r]);return{parse:a.useCallback(l=>new Promise((s,u)=>{R.parse(l,{dynamicTyping:!i,complete:o=>{o.errors.length>0?u(o.errors):s(o.data.flat())}})}),[i])}}const x={type:"string"};function K(n=x){return{$schema:"http://json-schema.org/draft-07/schema#",type:"array",items:n}}function y(n){const{value:r=[],onChange:i,onSubmit:c,arrayItemDefinition:l=x,formRef:s}=n,[u,o]=a.useState(!1),[m,d]=a.useState(""),[p,h]=a.useState([]),C=a.useMemo(()=>K(l),[l]),{parse:g}=G({jsonSchemaDefinition:l}),A=a.useCallback(async()=>{if(m)try{const t=await g(m);i([...r,...t]),h([]),d(""),o(!1)}catch(t){h(t)}},[i,m,r,g]),V=a.useMemo(()=>D(),[]);return e.jsxs(S,{className:"JsonSchemaFormContainer",sx:{".JsonSchemaForm .LabelContainer":{display:"none",visibility:"hidden"}},children:[e.jsx(_,{ref:s,schema:C,className:"JsonSchemaForm",noHtml5Validate:!0,uiSchema:{"ui:submitButtonOptions":{norender:!0}},validator:N,formData:r,formContext:{allowRemovingLastItemInArray:!0},onChange:({formData:t})=>i(t),onSubmit:({formData:t})=>c(t),templates:{ArrayFieldDescriptionTemplate:b,ArrayFieldItemTemplate:w,ArrayFieldTemplate:F,ArrayFieldTitleTemplate:I,ButtonTemplates:O,ErrorListTemplate:P},transformErrors:V,widgets:{TextWidget:J,DateTimeWidget:q,SelectWidget:v,CheckboxWidget:M}}),e.jsx(f,{onClick:()=>o(!0),children:"Paste new values"}),e.jsxs(k,{sx:{mt:2},in:u,children:[e.jsx(W,{multiline:!0,InputProps:{inputProps:{"aria-label":"CSV or TSV to Append"}},rows:5,placeholder:"Place comma or tab delimited values here",value:m,onChange:t=>d(t.target.value)}),e.jsxs(S,{my:1,display:"flex",justifyContent:"flex-end",children:[e.jsx(f,{onClick:()=>o(!1),children:"Cancel"}),e.jsx(f,{onClick:()=>{A()},children:"Add"})]}),p&&p.length>0&&e.jsxs(L,{severity:"error",sx:{my:2},children:[e.jsx(H,{children:"Parsing errors encountered:"}),e.jsx("ul",{children:p.map((t,j)=>e.jsxs(U,{component:"li",lineHeight:1.5,variant:"smallText1",children:[t.row?`At ${t.row}: `:"",t.message]},j))})]})]})]})}try{y.displayName="JSONArrayEditor",y.__docgenInfo={description:"",displayName:"JSONArrayEditor",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: T[]) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(formData: T[]) => void"}},formRef:{defaultValue:null,description:"",name:"formRef",required:!1,type:{name:"Ref<Form<T, RJSFSchema, GenericObjectType>>"}}}}}catch{}function T(n){const{isShowingModal:r,onConfirm:i,onCancel:c,dialogTitle:l="Edit Values",value:s,...u}=n,o=a.useRef(null),[m,d]=a.useState(s??[]);return a.useEffect(()=>{s&&d(s)},[s]),e.jsx(E,{open:r,title:l,onCancel:c,maxWidth:"md",content:e.jsx(y,{formRef:o,value:m,onChange:p=>d(p),onSubmit:i,...u}),onConfirm:()=>{o.current.formElement.current.requestSubmit()}})}try{T.displayName="JSONArrayEditorModal",T.__docgenInfo={description:"",displayName:"JSONArrayEditorModal",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},dialogTitle:{defaultValue:null,description:"",name:"dialogTitle",required:!1,type:{name:"ReactNode"}},isShowingModal:{defaultValue:null,description:"",name:"isShowingModal",required:!0,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(value: T[]) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}}}catch{}export{T as J};
