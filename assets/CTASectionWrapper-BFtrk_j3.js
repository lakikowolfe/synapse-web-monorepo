import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{I as r}from"./index-C1_KPTmG.js";import{u}from"./useTheme-DGffmoS1.js";import{S as c}from"./Stack-Cg5HdmvL.js";import{B as l}from"./Box-DN73Q90z.js";const s=({content:i,themeMode:t,showBlobs:p=!0,sx:d})=>{const a=u(),n={position:"absolute",height:"100%",overflow:"hidden",display:{xs:"none",md:"block"}};return e.jsxs(c,{sx:{padding:{xs:"40px",lg:"80px"},justifyContent:"center",alignItems:"center",textAlign:"center",background:t==="light"?`linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), ${a.palette.primary.main}`:a.palette.primary.main,position:"relative",overflow:"hidden",color:t==="dark"?"#FFFF":"",svg:{mixBlendMode:t==="light"?"soft-light":""},...d},children:[p&&e.jsxs(e.Fragment,{children:[e.jsx(l,{sx:o=>({...n,left:0,[o.breakpoints.down("lg")]:{svg:{width:"280px",height:"100%"}}}),children:t==="light"?e.jsx(r.LeftDotBlob,{}):e.jsx(r.LeftDotBlobDark,{})}),e.jsx(l,{sx:o=>({...n,right:0,top:"30%",[o.breakpoints.down("lg")]:{svg:{width:"370px",height:"100%"}}}),children:t==="light"?e.jsx(r.RightDotBlob,{}):e.jsx(r.RightDotBlobDark,{})})]}),i]})};try{s.displayName="CTASectionWrapper",s.__docgenInfo={description:"",displayName:"CTASectionWrapper",props:{themeMode:{defaultValue:null,description:"",name:"themeMode",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},showBlobs:{defaultValue:{value:"true"},description:"",name:"showBlobs",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}export{s as C};
