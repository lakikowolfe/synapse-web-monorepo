import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{R as a}from"./VerificationSubmission-DL9jxYsQ.js";import{r as m}from"./index-Cu9bd8lq.js";import{E as b}from"./EntityHeaderTable-DqK30WVz.js";import{B as f}from"./Box-BaZAwz5V.js";import{T as E}from"./Typography-Cf0oTcRj.js";import{u as y}from"./ThemesPlot-X9YwtegC.js";import{i as T}from"./useFiles-CxxOxyKU.js";const j="Mark for Removal from AR",x="No entities selected.",i=o=>{const{subjects:s,onUpdate:t,onUpdateEntityIDsTextbox:c}=o,n=m.useMemo(()=>s.filter(e=>e.type===a.ENTITY).map(e=>({targetId:e.id})),[s]),d=e=>{if(t){const u=y(e,T).map(l=>({id:l.targetId,type:a.ENTITY}));t(u)}};return r.jsxs(f,{mb:2,children:[n.length===0&&r.jsx(E,{variant:"body1Italic",mb:-4,children:x}),r.jsx(b,{references:n,isEditable:!!t,onUpdate:e=>{d(e)},removeSelectedRowsButtonText:j,onUpdateEntityIDsTextbox:c})]})};try{i.displayName="EntitySubjectsSelector",i.__docgenInfo={description:"",displayName:"EntitySubjectsSelector",props:{subjects:{defaultValue:null,description:"",name:"subjects",required:!0,type:{name:"RestrictableObjectDescriptor[]"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((subjects: RestrictableObjectDescriptor[]) => void)"}},onUpdateEntityIDsTextbox:{defaultValue:null,description:"",name:"onUpdateEntityIDsTextbox",required:!0,type:{name:"((value: string) => void) | undefined"}}}}}catch{}export{i as E};
