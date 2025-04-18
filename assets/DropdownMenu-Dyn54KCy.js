import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{r as l}from"./index-Dl6G-zuu.js";import{I as c}from"./IconSvg-Vi3BFtCs.js";import{B as m}from"./Button-BkKUhIiJ.js";import{T as f}from"./Typography-DUswyeAh.js";import{T as x}from"./Tooltip-CbFhYBpv.js";import{P as D}from"./Popper-BYhjzrIk.js";import{F as B}from"./Fade-DL1c9j4A.js";import{P}from"./Paper-sJzUMfPp.js";import{M as L}from"./MenuList-DcMoCfbK.js";import{M as S}from"./MenuItem-BJNXNXXI.js";import{L as _,a as q}from"./ListItemText-BiQbcWDf.js";import{D as V}from"./Divider-DZif6ozR.js";import{C as E}from"./ClickAwayListener-DMjw0JVT.js";function h(p){const{buttonTooltip:d,dropdownButtonText:y,items:s=[],convertSingleItemToButton:I=!0,renderMenuIfNoItems:b=!1,buttonProps:j={}}=p,r=l.useId(),[i,t]=l.useState(!1),a=l.useRef(null),u=s.flat().length;if(!b&&u===0)return null;if(I&&u===1){const e=s.flat()[0];return n.jsx(m,{component:"href"in e?"a":"button",title:e.tooltipText,variant:"outlined",href:"href"in e?e.href:void 0,rel:"href"in e?"noopener noreferrer":void 0,onClick:"onClick"in e?e.onClick:void 0,disabled:e.disabled,endIcon:e.icon&&n.jsx(c,{icon:e.icon,wrap:!1}),children:n.jsx(f,{variant:"buttonLink",children:e.text})})}const v=()=>{t(e=>!e)},T=e=>{a.current&&a.current.contains(e.target)||t(!1)};function g(e){e.key==="Tab"?(e.preventDefault(),t(!1)):e.key==="Escape"&&t(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(x,{title:d?n.jsx("div",{style:{whiteSpace:"pre-line"},children:d}):void 0,placement:"top",children:n.jsx("span",{children:n.jsx(m,{variant:"outlined",ref:a,id:`composition-button-${r}`,"aria-controls":i?`composition-menu-${r}`:void 0,"aria-expanded":i?"true":void 0,"aria-haspopup":"true",onClick:v,...j,children:n.jsx(f,{variant:"buttonLink",children:y})})})}),n.jsx(D,{open:i,anchorEl:a.current,role:void 0,placement:"bottom-end",transition:!0,style:{zIndex:10},children:({TransitionProps:e})=>n.jsx(B,{...e,children:n.jsx(P,{children:n.jsx(E,{onClickAway:T,children:n.jsx(L,{autoFocusItem:i,id:`composition-menu-${r}`,"aria-labelledby":`composition-button-${r}`,onKeyDown:g,children:s.map((w,M,k)=>[w.map(o=>n.jsx(x,{title:o.tooltipText,placement:"left",children:n.jsxs(S,{component:"a",sx:{"&:hover":{color:"unset"},"&:focus":{color:"unset",textDecoration:"unset"}},disabled:o.disabled,href:"href"in o?o.href:void 0,rel:"href"in o?"noopener noreferrer":void 0,style:{pointerEvents:"auto"},onClick:C=>{!o.disabled&&"onClick"in o&&o.onClick&&(t(!1),o.onClick(C))},children:[n.jsx(_,{style:{minWidth:"30px"},children:o.icon&&n.jsx(c,{icon:o.icon,sx:{width:"17px",height:"17px",...o.iconSx},wrap:!1})}),n.jsx(q,{primaryTypographyProps:{variant:"smallText1",sx:o.textSx},sx:{marginTop:0},children:o.text})]})},o.text)),M<k.length-1&&n.jsx(V,{})])})})})})})]})}try{h.displayName="DropdownMenu",h.__docgenInfo={description:"The DropdownMenu component provides a generic way to compose a MUI dropdown menu.",displayName:"DropdownMenu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropdownMenuItem[][]"}},dropdownButtonText:{defaultValue:null,description:"",name:"dropdownButtonText",required:!0,type:{name:"string"}},buttonTooltip:{defaultValue:null,description:"",name:"buttonTooltip",required:!1,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},convertSingleItemToButton:{defaultValue:null,description:"",name:"convertSingleItemToButton",required:!1,type:{name:"boolean"}},renderMenuIfNoItems:{defaultValue:null,description:"",name:"renderMenuIfNoItems",required:!1,type:{name:"boolean"}}}}}catch{}export{h as D};
