import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as c,a as z}from"./index-Cu9bd8lq.js";import{I as j}from"./IconSvg-CKrxCec8.js";import{I as _}from"./IconButton-DhHKwBf8.js";import{B as Y}from"./Box-Bt_N9PQN.js";import{F as O}from"./FormControlLabel-CARkfAdu.js";import{C as L}from"./Checkbox-BnrBea29.js";import{R as ee}from"./Radio-lcFkrfOW.js";import{D as T}from"./Dropdown-C1nIIVAr.js";import{T as w}from"./Tooltip-CTVx2uGI.js";import{M as le}from"./Menu-xRAbfX1G.js";import{F as te}from"./Fade-DPmnnOI3.js";import{T as ne}from"./TextField-BM400Yg9.js";import{C as ae}from"./cloneDeep-C-OZ4saa.js";const N=l=>e.jsxs("svg",{...l,className:`Icon-Plus ${l.className??""}`,width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.title&&e.jsx("title",{children:l.title}),e.jsx("path",{d:"M14.3887 8H8.38867V14H6.38867V8H0.388672V6H6.38867V0H8.38867V6H14.3887V8Z"})]});try{N.displayName="IconPlus",N.__docgenInfo={description:"",displayName:"IconPlus",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const I=l=>e.jsxs("svg",{...l,className:`Icon-Minus ${l.className??""}`,width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.title&&e.jsx("title",{children:l.title}),e.jsx("path",{d:"M14.3887 2H8.38867H6.38867H0.388672V0H6.38867H8.38867H14.3887V2Z"})]});try{I.displayName="IconMinus",I.__docgenInfo={description:"",displayName:"IconMinus",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}function E(l){const{label:a,isCollapsed:i,onClick:r,hideCollapsible:o=!1}=l;return e.jsxs("div",{className:"FacetFilterHeader",children:[e.jsx("label",{className:"FacetFilterHeader__label",children:a}),!o&&e.jsx(_,{size:"small",className:"FacetFilterHeader__collapseToggleBtn",onClick:()=>r(!i),children:i?e.jsx(N,{className:"icon-plus",title:"Expand Menu"}):e.jsx(I,{className:"icon-minus",title:"Collapse Menu"})})]})}try{E.displayName="FacetFilterHeader",E.__docgenInfo={description:"",displayName:"FacetFilterHeader",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hideCollapsible:{defaultValue:null,description:"",name:"hideCollapsible",required:!1,type:{name:"boolean"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(newValue: boolean) => void"}}}}}catch{}function k(l){const{id:a,label:i,count:r,isDropdown:o,checked:n,onChange:u,onHover:m,inputType:s}=l,p=s==="checkbox"?e.jsx(L,{}):e.jsx(ee,{});return e.jsxs(Y,{display:"flex",justifyContent:"space-between",alignItems:"center",className:"EnumFacetFilter__checkboxContainer",onClick:()=>{o&&u(!n)},onMouseEnter:m,children:[e.jsx(O,{control:p,className:"EnumFacetFilter__checkbox",onClick:v=>v.stopPropagation(),onChange:(v,V)=>{u(V)},checked:n,label:i},`${a}`),r!=null&&e.jsxs(e.Fragment,{children:[o&&e.jsxs("span",{className:"EnumFacetFilter__count",children:["(",r.toLocaleString(),")"]}),!o&&e.jsx("div",{className:"EnumFacetFilter__count",children:r.toLocaleString()})]})]})}try{k.displayName="EnumFacetFilterOption",k.__docgenInfo={description:"",displayName:"EnumFacetFilterOption",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},isDropdown:{defaultValue:null,description:"",name:"isDropdown",required:!0,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selected: boolean) => void"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!0,type:{name:"() => void"}},inputType:{defaultValue:null,description:"",name:"inputType",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}}}}}catch{}function re(l){const{menuText:a,children:i}=l,[r,o]=c.useState(!1),n=()=>o(!r);return e.jsxs(T,{className:"EnumFacetFilter EnumFacetFilterSelect",show:r,onToggle:n,children:[e.jsx(T.Toggle,{className:"secondary-caret",variant:"gray-select",children:a}),e.jsx(T.Menu,{children:i})]})}function oe(l){const{children:a,filterIsActive:i,facetTitle:r}=l,[o,n]=z.useState(null),u=p=>{n(p.currentTarget)},m=()=>{n(null)},s=!!o;return e.jsxs("div",{className:"EnumFacetFilter",children:[e.jsx(w,{title:`Filter by ${r}`,children:e.jsx(_,{onClick:u,size:"small",children:e.jsx(j,{icon:"filter",wrap:!1,sx:{color:i?"primary.main":"grey.700",fontSize:"20px"}})})}),e.jsx(le,{anchorEl:o,open:s,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},TransitionComponent:te,children:a})]})}function q(l){const{dropdownType:a}=l;return a==="SelectBox"?e.jsx(re,{...l}):e.jsx(oe,{...l})}try{q.displayName="EnumFacetFilterDropdown",q.__docgenInfo={description:"",displayName:"EnumFacetFilterDropdown",props:{facetTitle:{defaultValue:null,description:"",name:"facetTitle",required:!0,type:{name:"string"}},menuText:{defaultValue:null,description:"",name:"menuText",required:!0,type:{name:"string"}},filterIsActive:{defaultValue:null,description:"",name:"filterIsActive",required:!0,type:{name:"boolean"}},dropdownType:{defaultValue:null,description:"",name:"dropdownType",required:!1,type:{name:"enum",value:[{value:'"Icon"'},{value:'"SelectBox"'}]}}}}}catch{}const F=5;function D(l){return l.replace(/\s/g,"").toLowerCase()}function R(l){const{filterIsActive:a,containerAs:i="Collapsible",dropdownType:r="Icon",hideCollapsible:o=!1,facetValues:n,onAddValueToSelection:u,onRemoveValueFromSelection:m,facetTitle:s,onRemoveAllFacetSelections:p,onHoverOverValue:v,canMultiSelect:V=!0}=l,[P,C]=c.useState(!1),[A,U]=c.useState(!1),[h,M]=c.useState(!1),[d,S]=c.useState(""),H=n.length>F&&n.slice(F).some(({isSelected:t})=>t),y=P||h||H,f=c.useMemo(()=>h&&d.length>0?n.filter(({displayText:t})=>t.toLowerCase().indexOf(d.trim().toLowerCase())>-1):y?n:n.slice(0,F),[n,d,h,y]),b=z.createRef(),g=i==="Dropdown",$=!y&&n.length>F,W=y&&!d&&!H&&n.length>F,B=e.jsxs("div",{className:g?"EnumFacetFilter__dropdown_menu":"",children:[e.jsxs("div",{className:"EnumFacetFilter__checkboxContainer--forAll",children:[e.jsx(ne,{sx:{display:h?void 0:"none"},size:"small",fullWidth:!0,InputProps:{startAdornment:e.jsx(w,{title:"Close search",children:e.jsx(_,{size:"small",onClick:()=>{M(!1),C(!1)},children:e.jsx(j,{sx:{fontSize:"inherit"},wrap:!1,icon:"arrowBack"})})}),endAdornment:d.length>0&&e.jsx(w,{title:"Clear",children:e.jsx(_,{size:"small",onClick:()=>{var t;S(""),(t=b.current)==null||t.focus()},children:e.jsx(j,{sx:{fontSize:"inherit"},wrap:!1,icon:"close"})})})},type:"text",placeholder:"Find values",value:d,ref:b,onChange:t=>{S(t.target.value)}}),!h&&e.jsxs("div",{className:"EnumFacetFilter__checkAll",children:[e.jsx(O,{control:e.jsx(L,{}),className:"EnumFacetFilter__checkbox",onChange:()=>{a&&p()},checked:!a,label:"All"},"select_all"),e.jsx(w,{title:"Search",children:e.jsx(_,{size:"small",sx:{aspectRatio:"1 / 1"},onClick:()=>{var t;S(""),M(!0),(t=b.current)==null||t.focus()},children:e.jsx(j,{sx:{fontSize:"inherit"},wrap:!1,icon:"search"})})})]})]}),e.jsxs("div",{children:[f.map((t,G)=>{const{isSelected:X,displayText:J,value:x,count:K}=t;return e.jsx(k,{id:[D(s),D(String(x)),G].join("-"),label:J,count:K,isDropdown:g,checked:X,onHover:()=>{v(x)},onChange:Q=>{Q?u(x):m(x)},inputType:V?"checkbox":"radio"},String(x))}),!g&&e.jsxs(e.Fragment,{children:[$&&e.jsx("button",{className:"EnumFacetFilter__showMoreFacetsBtn",onClick:()=>C(!0),children:e.jsx("div",{className:"EnumFacetFilter__checkboxContainer",children:e.jsxs("div",{className:"EnumFacetFilter__showMoreFacetsLabel",children:["Show all (",n.length,")"]})})}),W&&e.jsx("button",{className:"EnumFacetFilter__showMoreFacetsBtn",onClick:()=>C(!1),children:e.jsx("div",{className:"EnumFacetFilter__checkboxContainer",children:e.jsx("div",{className:"EnumFacetFilter__showMoreFacetsLabel",children:"Show less"})})})]}),f.length<=0&&e.jsx("div",{className:"EnumFacetFilter__noMatch",children:"No match found"})]})]}),Z=c.useMemo(()=>a?a&&f.filter(t=>t.isSelected).length===1?f.filter(t=>t.isSelected)[0].displayText:"Multiple Values Selected":"All",[a,f]);return g?e.jsx(q,{facetTitle:s,dropdownType:r,menuText:Z,filterIsActive:a,children:B}):e.jsxs(e.Fragment,{children:[e.jsx(E,{hideCollapsible:o,isCollapsed:A,label:s,onClick:t=>U(t)}),e.jsx(ae,{className:"EnumFacetFilter",in:!A,children:B})]})}try{R.displayName="EnumFacetFilterUI",R.__docgenInfo={description:"",displayName:"EnumFacetFilterUI",props:{facetTitle:{defaultValue:null,description:"",name:"facetTitle",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"RenderedFacetValue<TValue>[]"}},filterIsActive:{defaultValue:null,description:"",name:"filterIsActive",required:!0,type:{name:"boolean"}},containerAs:{defaultValue:null,description:"",name:"containerAs",required:!1,type:{name:"enum",value:[{value:'"Collapsible"'},{value:'"Dropdown"'}]}},dropdownType:{defaultValue:null,description:"",name:"dropdownType",required:!1,type:{name:"enum",value:[{value:'"Icon"'},{value:'"SelectBox"'}]}},hideCollapsible:{defaultValue:null,description:"",name:"hideCollapsible",required:!1,type:{name:"boolean"}},onAddValueToSelection:{defaultValue:null,description:"",name:"onAddValueToSelection",required:!0,type:{name:"(value: TValue) => void"}},onRemoveValueFromSelection:{defaultValue:null,description:"",name:"onRemoveValueFromSelection",required:!0,type:{name:"(value: TValue) => void"}},onRemoveAllFacetSelections:{defaultValue:null,description:"",name:"onRemoveAllFacetSelections",required:!0,type:{name:"() => void"}},onHoverOverValue:{defaultValue:null,description:"",name:"onHoverOverValue",required:!0,type:{name:"(value: TValue) => void"}},canMultiSelect:{defaultValue:null,description:"",name:"canMultiSelect",required:!0,type:{name:"boolean"}}}}}catch{}export{R as E,E as F};
