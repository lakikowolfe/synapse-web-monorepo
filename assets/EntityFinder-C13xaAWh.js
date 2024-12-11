import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{i as te}from"./createTheme-BIBP8v0l.js";import{r as se}from"./createSvgIcon-n5rVXizw.js";import{d as ae}from"./Search-Cyfn2sgJ.js";import{E as c}from"./VerificationSubmission-DL9jxYsQ.js";import{a as ne,r as s}from"./index-Cu9bd8lq.js";import{l as re,a0 as ie,S as le,W as oe}from"./useFiles-DsiWygVK.js";import{E as y,e as v,b as O,c as k,R as ce,a as q,d as ue,B as de}from"./EntityTree-DWTws8jK.js";import{r as pe}from"./react-sizeme-Vw-aaS2E.js";import{g as ye,p as me}from"./RegularExpressions-SKYrON-T.js";import{u as fe}from"./useEntitySelection-nZ7VhNLs.js";import{V as he}from"./Renderers-CRtU6ixb.js";import{B as Ee}from"./Box-Bt_N9PQN.js";import{T as Te,a as M}from"./Tabs-CVHgP4g-.js";import{S as ve}from"./Stack-BbdlCzXz.js";import{C as xe}from"./Chip-C0KZG4C4.js";import{T as Se}from"./TextField-BM400Yg9.js";import{I as z}from"./InputAdornment-CMpygKTp.js";import{I as be}from"./IconButton-DhHKwBf8.js";var x={},je=te;Object.defineProperty(x,"__esModule",{value:!0});var K=x.default=void 0,Ce=je(se()),Ie=e;K=x.default=(0,Ce.default)((0,Ie.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");const ge=Object.values(c),we=Object.values(c),Re=[c.PROJECT,c.FOLDER],De=o=>Object.values(c).filter(i=>!o.includes(i)).map(i=>({key:"node_type",value:i.toString(),not:!0})),W=({initialScope:o,projectId:m,initialContainer:u=null,selectMultiple:i,onSelectedChange:S,versionSelection:b=he.TRACKED,selectableTypes:a=ge,visibleTypesInList:j=we,visibleTypesInTree:d=Re,treeOnly:C=!1})=>{const{accessToken:I}=re(),[f,g]=ne.useState(0),[p,w]=s.useState(!1),[R,D]=s.useState(),[l,A]=s.useState(),[U,_]=s.useState({items:[]}),[h,P]=s.useState([]),[H,Y]=s.useState({type:y.PROMPT}),G=s.useMemo(()=>[...d,...a],[d,a]),Q=s.useMemo(()=>[...j,...a],[j,a]),[L,E]=s.useState(u),V=ie(),J=s.useCallback(t=>{_({items:t})},[_]),[n,T]=fe(i),[$,X]=s.useState(n),B=s.useCallback(t=>n.has(t.id),[n]),F=s.useCallback(t=>{const r=ye(t);return a.includes(r)},[a]);s.useEffect(()=>{S(Array.from(n.values()))},[n,S]),s.useEffect(()=>{if((l==null?void 0:l.length)===1){const t=me(l[0]);t&&le.getEntityHeaders([t],I).then(r=>{P(r.results)}).catch(r=>V(r))}else P([])},[I,l,V]);const Z=(t,r)=>{X(n),g(r)},ee=p?"MainPanelSearch":C?"MainPanelSinglePane":"MainPanelDualPane",N={configuration:H,versionSelection:b,selected:n,isIdSelected:B,isSelectable:F,visibleTypes:Q,selectableTypes:a,selectColumnType:i?"checkbox":"none",toggleSelection:T,enableSelectAll:i,setCurrentContainer:E};return e.jsx(oe,{children:e.jsxs("div",{className:"EntityFinder",children:[e.jsxs(Ee,{display:"flex",justifyContent:"space-between",mb:2.5,flexWrap:"wrap",rowGap:2,columnGap:4,sx:{flexWrap:{xs:"wrap",md:"nowrap"}},children:[e.jsxs(Te,{value:f,onChange:Z,sx:{flex:"none"},children:[e.jsx(M,{value:0,label:"Browse"}),e.jsx(M,{value:1,label:e.jsxs(ve,{direction:"row",gap:.5,alignItems:"center",children:[e.jsx("span",{children:"Selected"}),e.jsx(xe,{size:"small",label:n.size.toLocaleString(),sx:{backgroundColor:"tertiary.500",color:"grey.900",height:"21px"}})]})})]}),e.jsx(Se,{size:"small",placeholder:"Search by name, wiki content, or SynID",value:R,onChange:t=>{D(t.target.value)},onKeyDown:t=>{if(t.key==="Enter"){const r=t.target.value.trim();w(!!r),r&&(A(r.split(/\s+/)),g(0))}},InputProps:{startAdornment:e.jsx(z,{position:"start",children:e.jsx(ae,{})}),endAdornment:l?e.jsx(z,{position:"end",children:e.jsx(be,{size:"small",onClick:()=>{D(""),A(void 0),w(!1)},"aria-label":"Clear Search",disabled:!R&&!p,children:e.jsx(K,{})})}):void 0},sx:{maxWidth:{xs:"100%",md:"350px"},flex:"1 1 350px"}})]}),e.jsxs("div",{role:"tabpanel",className:`EntityFinder__MainPanel ${ee}`,style:{display:f===0?"block":"none"},children:[p&&e.jsx(v,{configuration:h&&h.length>0?{type:y.HEADER_LIST,headerList:h}:{type:y.ENTITY_SEARCH,query:{queryTerm:l,booleanQuery:De(a)}},versionSelection:b,selectColumnType:i?"checkbox":"none",selected:n,isIdSelected:B,isSelectable:F,visibleTypes:a,selectableTypes:a,toggleSelection:T,enableSelectAll:i,setCurrentContainer:void 0}),e.jsx("div",{style:p?{display:"none"}:{},children:C?e.jsx("div",{children:e.jsx(O,{toggleSelection:T,showDropdown:!0,visibleTypes:G,initialScope:o,selectedEntities:n,projectId:m,initialContainer:u,currentContainer:L,setCurrentContainer:E,showScopeAsRootNode:!1,treeNodeType:k.SINGLE_PANE,selectableTypes:a})}):e.jsx("div",{className:"EntityFinderReflexContainer",children:e.jsx(pe.SizeMe,{children:({size:t})=>e.jsxs(ce,{orientation:"vertical",windowResizeAware:!0,children:[e.jsx(q,{className:"TreeViewReflexElement",flex:.24,children:e.jsx(O,{selectedEntities:n,setDetailsViewConfiguration:Y,showDropdown:!0,visibleTypes:d,initialScope:o,projectId:m,initialContainer:u,currentContainer:L,setCurrentContainer:E,treeNodeType:k.DUAL_PANE,setBreadcrumbItems:J,selectableTypes:d})}),e.jsx(ue,{}),e.jsxs(q,{className:"DetailsViewReflexElement",children:[e.jsx(v,{...N}),e.jsx(de,{...U})]})]},(!!t.width).toString())})})})]}),e.jsx("div",{role:"tabpanel",className:"MainPanelSelected",style:{display:f===1?"block":"none"},children:e.jsx(v,{...N,configuration:{type:y.REFERENCE_LIST,referenceList:Array.from($.values())}})})]})})};try{W.displayName="EntityFinder",W.__docgenInfo={description:"",displayName:"EntityFinder",props:{selectMultiple:{defaultValue:null,description:"Whether it is possible to select multiple entities",name:"selectMultiple",required:!0,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Callback invoked when the selection changes",name:"onSelectedChange",required:!0,type:{name:"(selected: Reference[]) => void"}},initialScope:{defaultValue:null,description:'The initial appearance of the entity finder. Possible values include "Current Project", "All Projects", "Projects Created By Me", "My Favorites"',name:"initialScope",required:!0,type:{name:"enum",value:[{value:'"Current Project"'},{value:'"All Projects"'},{value:'"Projects Created By Me"'},{value:'"My Favorites"'}]}},projectId:{defaultValue:null,description:`The SynID of the 'Current Project'. If this is not a defined, then the scope cannot be "Current Project"`,name:"projectId",required:!1,type:{name:"string"}},initialContainer:{defaultValue:{value:"null"},description:"The SynID of the entity that should open by default. If this is a Syn ID, then it must be in the project specified in `projectId`",name:"initialContainer",required:!1,type:{name:"string | null"}},versionSelection:{defaultValue:{value:"VersionSelectionType.TRACKED"},description:'Determines if versions are selectable, and if so, how they should be shown. Default is "TRACKED"',name:"versionSelection",required:!1,type:{name:"enum",value:[{value:'"DISALLOWED"'},{value:'"REQUIRED"'},{value:'"TRACKED"'},{value:'"UNTRACKED"'}]}},visibleTypesInList:{defaultValue:{value:"Object.values(EntityType)"},description:"The entity types to show in the details view (right pane). Any types specified in `selectableTypes` will automatically be included.",name:"visibleTypesInList",required:!1,type:{name:"EntityType[]"}},selectableTypes:{defaultValue:{value:"Object.values(EntityType)"},description:"The entity types that may be selected. Types in `visibleTypesInList` that are not in `selectableTypes` will appear as disabled options. Only the types in `selectableTypes` will appear in search",name:"selectableTypes",required:!1,type:{name:"EntityType[]"}},visibleTypesInTree:{defaultValue:{value:"[EntityType.PROJECT, EntityType.FOLDER]"},description:"The types to show in the tree used to navigate. If `treeOnly` is true, any types specified in `selectableTypes` will automatically be included.",name:"visibleTypesInTree",required:!1,type:{name:"EntityType[]"}},treeOnly:{defaultValue:{value:"false"},description:"Whether to show only the tree. If `true`, the tree will be used to make selections",name:"treeOnly",required:!1,type:{name:"boolean"}}}}}catch{}export{W as E};
