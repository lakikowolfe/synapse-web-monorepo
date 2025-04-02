import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as c}from"./index-Dl6G-zuu.js";import{I as y}from"./IconSvg-qb8b8_G9.js";import{m as P}from"./merge-CvkBQyYg.js";const r=c.createContext(void 0),f=({children:e,queryContext:s})=>t.jsx(r.Provider,{value:s,children:e});function u(){const e=c.useContext(r);if(e===void 0)throw new Error("useQueryContext must be used within a QueryWrapper");return e}const _=r.Consumer;try{u.displayName="useQueryContext",u.__docgenInfo={description:"Returns the QueryContext, including QueryResultBundle",displayName:"useQueryContext",props:{}}}catch{}try{r.displayName="QueryContext",r.__docgenInfo={description:"This must be exported to use the context in class components.",displayName:"QueryContext",props:{}}}catch{}try{f.displayName="QueryContextProvider",f.__docgenInfo={description:"Provides data related to a Synapse table query, and functions for iterating through pages of the data.",displayName:"QueryContextProvider",props:{queryContext:{defaultValue:null,description:"",name:"queryContext",required:!0,type:{name:"QueryContextType"}}}}}catch{}try{_.displayName="QueryContextConsumer",_.__docgenInfo={description:"",displayName:"QueryContextConsumer",props:{}}}catch{}const v={sx:{fontSize:"24px"}};function C(e){const{iconConfigs:s,iconNames:x,commonIconProps:d=v,useTheme:g,useBackground:h}=e;let p=!1;const l=g?"icon-list themed":"icon-list",I=h?`${l} bg-circle`:l,Q=u(),{addValueToSelectedFacet:m}=Q,N=c.useCallback(n=>{m({columnName:"dataType"},n)},[m]),i=c.useMemo(()=>{const n={};for(const[o,a]of Object.entries(s))n[o]=P({},d,a);return n},[s,d]),q=()=>Array.from(new Set(x)).map(o=>{const a=i[o];if(a)return t.jsx(y,{...a,onClick:()=>N(o)},o);p=!0});return t.jsxs("span",{className:I,children:[q(),p&&i.other?t.jsx(y,{...i.other}):t.jsx(t.Fragment,{})]})}try{C.displayName="IconList",C.__docgenInfo={description:"",displayName:"IconList",props:{iconConfigs:{defaultValue:null,description:"",name:"iconConfigs",required:!0,type:{name:"IconConfigs"}},iconNames:{defaultValue:null,description:"",name:"iconNames",required:!0,type:{name:"string[]"}},commonIconProps:{defaultValue:null,description:"",name:"commonIconProps",required:!1,type:{name:'Omit<IconSvgProps, "icon">'}},useTheme:{defaultValue:null,description:"",name:"useTheme",required:!1,type:{name:"boolean"}},useBackground:{defaultValue:null,description:"",name:"useBackground",required:!1,type:{name:"boolean"}}}}}catch{}export{C as I,f as Q,_ as a,u};
