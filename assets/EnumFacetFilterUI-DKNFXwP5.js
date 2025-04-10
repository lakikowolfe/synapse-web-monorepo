import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as s}from"./index-Dl6G-zuu.js";import{I as V}from"./IconSvg-T3FOJwSf.js";import{I as _}from"./IconButton-xnDYVMXw.js";import{B as O}from"./Box-sTghsUmj.js";import{F as D}from"./FormControlLabel-UUENBpmY.js";import{C as L}from"./Checkbox-Dz9GUn9M.js";import{R as Y}from"./Radio-JK7w0Ids.js";import{S as ee,T as le}from"./TextField-BJQecJUe.js";import{M as te}from"./MenuItem-CWmy7e8c.js";import{T as j}from"./Tooltip-DghXNkD2.js";import{M as ne}from"./Menu-B1TgkTrV.js";import{F as ae}from"./Fade-Cxdmh2eZ.js";import{C as re}from"./Collapse-CmkIepef.js";const T=l=>e.jsxs("svg",{...l,className:`Icon-Minus ${l.className??""}`,width:"15",height:"2",viewBox:"0 0 15 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.title&&e.jsx("title",{children:l.title}),e.jsx("path",{d:"M14.3887 2H8.38867H6.38867H0.388672V0H6.38867H8.38867H14.3887V2Z"})]});try{T.displayName="IconMinus",T.__docgenInfo={description:"",displayName:"IconMinus",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const I=l=>e.jsxs("svg",{...l,className:`Icon-Plus ${l.className??""}`,width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.title&&e.jsx("title",{children:l.title}),e.jsx("path",{d:"M14.3887 8H8.38867V14H6.38867V8H0.388672V6H6.38867V0H8.38867V6H14.3887V8Z"})]});try{I.displayName="IconPlus",I.__docgenInfo={description:"",displayName:"IconPlus",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}function N(l){const{label:n,isCollapsed:r,onClick:i,hideCollapsible:o=!1}=l;return e.jsxs("div",{className:"FacetFilterHeader",children:[e.jsx("label",{className:"FacetFilterHeader__label",children:n}),!o&&e.jsx(_,{size:"small",className:"FacetFilterHeader__collapseToggleBtn",onClick:()=>i(!r),children:r?e.jsx(I,{className:"icon-plus",title:"Expand Menu"}):e.jsx(T,{className:"icon-minus",title:"Collapse Menu"})})]})}try{N.displayName="FacetFilterHeader",N.__docgenInfo={description:"",displayName:"FacetFilterHeader",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hideCollapsible:{defaultValue:null,description:"",name:"hideCollapsible",required:!1,type:{name:"boolean"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(newValue: boolean) => void"}}}}}catch{}function E(l){const{id:n,label:r,count:i,isDropdown:o,checked:a,onChange:u,onHover:m,inputType:c}=l,p=c==="checkbox"?e.jsx(L,{}):e.jsx(Y,{});return e.jsxs(O,{display:"flex",justifyContent:"space-between",alignItems:"center",className:"EnumFacetFilter__checkboxContainer",onClick:()=>{o&&u(!a)},onMouseEnter:m,children:[e.jsx(D,{control:p,className:"EnumFacetFilter__checkbox",sx:{overflowWrap:"anywhere"},onClick:v=>v.stopPropagation(),onChange:(v,w)=>{u(w)},checked:a,label:r},`${n}`),i!=null&&e.jsxs(e.Fragment,{children:[o&&e.jsxs("span",{className:"EnumFacetFilter__count",children:["(",i.toLocaleString(),")"]}),!o&&e.jsx("div",{className:"EnumFacetFilter__count",children:i.toLocaleString()})]})]})}try{E.displayName="EnumFacetFilterOption",E.__docgenInfo={description:"",displayName:"EnumFacetFilterOption",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},isDropdown:{defaultValue:null,description:"",name:"isDropdown",required:!0,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selected: boolean) => void"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!0,type:{name:"() => void"}},inputType:{defaultValue:null,description:"",name:"inputType",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}}}}}catch{}function oe(l){const{menuText:n,children:r}=l;return e.jsxs(ee,{className:"EnumFacetFilter EnumFacetFilterSelect",value:n,renderValue:()=>n,onChange:()=>{},children:[e.jsx(te,{value:n,sx:{display:"none"}}),e.jsx(O,{sx:{"& .EnumFacetFilter__dropdown_menu":{maxWidth:"100%"}},children:r})]})}function ie(l){const{children:n,filterIsActive:r,facetTitle:i}=l,[o,a]=s.useState(null),u=p=>{a(p.currentTarget)},m=()=>{a(null)},c=!!o;return e.jsxs("div",{className:"EnumFacetFilter",children:[e.jsx(j,{title:`Filter by ${i}`,children:e.jsx(_,{onClick:u,size:"small",children:e.jsx(V,{icon:"filter",wrap:!1,sx:{color:r?"primary.main":"grey.700",fontSize:"20px"}})})}),e.jsx(ne,{anchorEl:o,open:c,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},TransitionComponent:ae,children:n})]})}function k(l){const{dropdownType:n}=l;return n==="SelectBox"?e.jsx(oe,{...l}):e.jsx(ie,{...l})}try{k.displayName="EnumFacetFilterDropdown",k.__docgenInfo={description:"",displayName:"EnumFacetFilterDropdown",props:{facetTitle:{defaultValue:null,description:"",name:"facetTitle",required:!0,type:{name:"string"}},menuText:{defaultValue:null,description:"",name:"menuText",required:!0,type:{name:"string"}},filterIsActive:{defaultValue:null,description:"",name:"filterIsActive",required:!0,type:{name:"boolean"}},dropdownType:{defaultValue:null,description:"",name:"dropdownType",required:!1,type:{name:"enum",value:[{value:'"Icon"'},{value:'"SelectBox"'}]}}}}}catch{}const F=5;function R(l){return l.replace(/\s/g,"").toLowerCase()}function z(l){const{filterIsActive:n,containerAs:r="Collapsible",dropdownType:i="Icon",hideCollapsible:o=!1,facetValues:a,onAddValueToSelection:u,onRemoveValueFromSelection:m,facetTitle:c,onRemoveAllFacetSelections:p,onHoverOverValue:v,canMultiSelect:w=!0,defaultShowAllValues:A=!1}=l,[P,C]=s.useState(A),[q,U]=s.useState(!1),[h,M]=s.useState(!1),[d,S]=s.useState(""),H=a.length>F&&a.slice(F).some(({isSelected:t})=>t),y=P||h||H,f=s.useMemo(()=>h&&d.length>0?a.filter(({displayText:t})=>t.toLowerCase().indexOf(d.trim().toLowerCase())>-1):y?a:a.slice(0,F),[a,d,h,y]),b=s.createRef(),g=r==="Dropdown",W=!y&&a.length>F,$=y&&!d&&!H&&a.length>F,B=e.jsxs("div",{className:g?"EnumFacetFilter__dropdown_menu":"",children:[e.jsxs("div",{className:"EnumFacetFilter__checkboxContainer--forAll",children:[e.jsx(le,{sx:{display:h?void 0:"none"},size:"small",fullWidth:!0,InputProps:{startAdornment:e.jsx(j,{title:"Close search",children:e.jsx(_,{size:"small",onClick:()=>{M(!1),C(A)},children:e.jsx(V,{sx:{fontSize:"inherit"},wrap:!1,icon:"arrowBack"})})}),endAdornment:d.length>0&&e.jsx(j,{title:"Clear",children:e.jsx(_,{size:"small",onClick:()=>{var t;S(""),(t=b.current)==null||t.focus()},children:e.jsx(V,{sx:{fontSize:"inherit"},wrap:!1,icon:"close"})})})},type:"text",placeholder:"Find values",value:d,ref:b,onChange:t=>{S(t.target.value)}}),!h&&e.jsxs("div",{className:"EnumFacetFilter__checkAll",children:[e.jsx(D,{control:e.jsx(L,{}),className:"EnumFacetFilter__checkbox",onChange:()=>{n&&p()},checked:!n,label:"All"},"select_all"),e.jsx(j,{title:"Search",children:e.jsx(_,{size:"small",sx:{aspectRatio:"1 / 1"},onClick:()=>{var t;S(""),M(!0),(t=b.current)==null||t.focus()},children:e.jsx(V,{sx:{fontSize:"inherit"},wrap:!1,icon:"search"})})})]})]}),e.jsxs("div",{children:[f.map((t,G)=>{const{isSelected:X,displayText:J,value:x,count:K}=t;return e.jsx(E,{id:[R(c),R(String(x)),G].join("-"),label:J,count:K,isDropdown:g,checked:X,onHover:()=>{v(x)},onChange:Q=>{Q?u(x):m(x)},inputType:w?"checkbox":"radio"},String(x))}),!g&&e.jsxs(e.Fragment,{children:[W&&e.jsx("button",{className:"EnumFacetFilter__showMoreFacetsBtn",onClick:()=>C(!0),children:e.jsx("div",{className:"EnumFacetFilter__checkboxContainer",children:e.jsxs("div",{className:"EnumFacetFilter__showMoreFacetsLabel",children:["Show all (",a.length,")"]})})}),$&&e.jsx("button",{className:"EnumFacetFilter__showMoreFacetsBtn",onClick:()=>C(!1),children:e.jsx("div",{className:"EnumFacetFilter__checkboxContainer",children:e.jsx("div",{className:"EnumFacetFilter__showMoreFacetsLabel",children:"Show less"})})})]}),f.length<=0&&e.jsx("div",{className:"EnumFacetFilter__noMatch",children:"No match found"})]})]}),Z=s.useMemo(()=>n?n&&f.filter(t=>t.isSelected).length===1?f.filter(t=>t.isSelected)[0].displayText:"Multiple Values Selected":"All",[n,f]);return g?e.jsx(k,{facetTitle:c,dropdownType:i,menuText:Z,filterIsActive:n,children:B}):e.jsxs(e.Fragment,{children:[e.jsx(N,{hideCollapsible:o,isCollapsed:q,label:c,onClick:t=>U(t)}),e.jsx(re,{className:"EnumFacetFilter",in:!q,children:B})]})}try{z.displayName="EnumFacetFilterUI",z.__docgenInfo={description:"",displayName:"EnumFacetFilterUI",props:{facetTitle:{defaultValue:null,description:"",name:"facetTitle",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"RenderedFacetValue<TValue>[]"}},filterIsActive:{defaultValue:null,description:"",name:"filterIsActive",required:!0,type:{name:"boolean"}},containerAs:{defaultValue:null,description:"",name:"containerAs",required:!1,type:{name:"enum",value:[{value:'"Collapsible"'},{value:'"Dropdown"'}]}},dropdownType:{defaultValue:null,description:"",name:"dropdownType",required:!1,type:{name:"enum",value:[{value:'"Icon"'},{value:'"SelectBox"'}]}},hideCollapsible:{defaultValue:null,description:"",name:"hideCollapsible",required:!1,type:{name:"boolean"}},onAddValueToSelection:{defaultValue:null,description:"",name:"onAddValueToSelection",required:!0,type:{name:"(value: TValue) => void"}},onRemoveValueFromSelection:{defaultValue:null,description:"",name:"onRemoveValueFromSelection",required:!0,type:{name:"(value: TValue) => void"}},onRemoveAllFacetSelections:{defaultValue:null,description:"",name:"onRemoveAllFacetSelections",required:!0,type:{name:"() => void"}},onHoverOverValue:{defaultValue:null,description:"",name:"onHoverOverValue",required:!0,type:{name:"(value: TValue) => void"}},canMultiSelect:{defaultValue:null,description:"",name:"canMultiSelect",required:!0,type:{name:"boolean"}},defaultShowAllValues:{defaultValue:null,description:"",name:"defaultShowAllValues",required:!1,type:{name:"boolean"}}}}}catch{}export{z as E,N as F};
