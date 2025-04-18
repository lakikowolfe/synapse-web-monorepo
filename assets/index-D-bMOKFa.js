import{b as m,a as xt,g as It,f as Be,_ as rt,e as ge,d as tt}from"./createTheme-BmUnpyjI.js";import{r as d}from"./index-Dl6G-zuu.js";import{i as ot}from"./Input-zZMWsBv4.js";import{i as ne}from"./inputBaseClasses-Bc0CX7u-.js";import{o as ft,f as fe,A as St}from"./TextField-B3rZxamg.js";import{C as Lt}from"./Close-DdzXEaRM.js";import{s as F,u as Ot,c as yt}from"./styled-_IoEwjFQ.js";import{j as v}from"./jsx-runtime-Du8NFWEI.js";import{I as Pt}from"./IconButton-CxrGCLVD.js";import{P as Ct}from"./Popper-BYhjzrIk.js";import{P as $t}from"./Paper-sJzUMfPp.js";import{u as At}from"./useId-BkqTTtmk.js";import{u as nt}from"./useControlled-1Y2rT-1r.js";import{u as _e}from"./TransitionGroupContext-DetLSwnr.js";import{s as Rt,u as kt}from"./useForkRef-BDoLG09A.js";import{C as Tt}from"./Chip-ByQPbXSE.js";import{u as wt}from"./index-BRFx9jDd.js";const Dt=o=>{const r=d.useRef({});return d.useEffect(()=>{r.current=o}),r.current};function gt(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function Nt(o={}){const{ignoreAccents:r=!0,ignoreCase:l=!0,limit:b,matchFrom:I="any",stringify:O,trim:x=!1}=o;return(h,{inputValue:N,getOptionLabel:T})=>{let P=x?N.trim():N;l&&(P=P.toLowerCase()),r&&(P=gt(P));const _=P?h.filter(Y=>{let M=(O||T)(Y);return l&&(M=M.toLowerCase()),r&&(M=gt(M)),I==="start"?M.indexOf(P)===0:M.indexOf(P)>-1}):h;return typeof b=="number"?_.slice(0,b):_}}function je(o,r){for(let l=0;l<o.length;l+=1)if(r(o[l]))return l;return-1}const Mt=Nt(),mt=5,Et=o=>{var r;return o.current!==null&&((r=o.current.parentElement)==null?void 0:r.contains(document.activeElement))};function Ft(o){const{unstable_isActiveElementInListbox:r=Et,unstable_classNamePrefix:l="Mui",autoComplete:b=!1,autoHighlight:I=!1,autoSelect:O=!1,blurOnSelect:x=!1,clearOnBlur:h=!o.freeSolo,clearOnEscape:N=!1,componentName:T="useAutocomplete",defaultValue:P=o.multiple?[]:null,disableClearable:_=!1,disableCloseOnSelect:Y=!1,disabled:M,disabledItemsFocusable:We=!1,disableListWrap:Ge=!1,filterOptions:st=Mt,filterSelectedOptions:me=!1,freeSolo:J=!1,getOptionDisabled:G,getOptionKey:Ue,getOptionLabel:Se=t=>{var e;return(e=t.label)!=null?e:t},groupBy:be,handleHomeEndKeys:Q=!o.freeSolo,id:at,includeInputInList:Ke=!1,inputValue:Le,isOptionEqualToValue:re=(t,e)=>t===e,multiple:f=!1,onChange:he,onClose:Ae,onHighlightChange:Re,onInputChange:U,onOpen:ke,open:it,openOnFocus:lt=!1,options:xe,readOnly:Z=!1,selectOnFocus:Ie=!o.freeSolo,value:Oe}=o,w=At(at);let A=Se;A=t=>{const e=Se(t);return typeof e!="string"?String(e):e};const ye=d.useRef(!1),Te=d.useRef(!0),C=d.useRef(null),D=d.useRef(null),[se,qe]=d.useState(null),[R,Pe]=d.useState(-1),we=I?0:-1,S=d.useRef(we),[a,pt]=nt({controlled:Oe,default:P,name:T}),[u,K]=nt({controlled:Le,default:"",name:T,state:"inputValue"}),[ae,De]=d.useState(!1),ee=d.useCallback((t,e)=>{if(!(f?a.length<e.length:e!==null)&&!h)return;let n;if(f)n="";else if(e==null)n="";else{const i=A(e);n=typeof i=="string"?i:""}u!==n&&(K(n),U&&U(t,n,"reset"))},[A,u,f,U,K,h,a]),[X,Ne]=nt({controlled:it,default:!1,name:T,state:"open"}),[Je,Me]=d.useState(!0),Ee=!f&&a!=null&&u===A(a),k=X&&!Z,g=k?st(xe.filter(t=>!(me&&(f?a:[a]).some(e=>e!==null&&re(t,e)))),{inputValue:Ee&&Je?"":u,getOptionLabel:A}):[],H=Dt({filteredOptions:g,value:a,inputValue:u});d.useEffect(()=>{const t=a!==H.value;ae&&!t||J&&!t||ee(null,a)},[a,ee,ae,H.value,J]);const Ce=X&&g.length>0&&!Z,ie=_e(t=>{t===-1?C.current.focus():se.querySelector(`[data-tag-index="${t}"]`).focus()});d.useEffect(()=>{f&&R>a.length-1&&(Pe(-1),ie(-1))},[a,f,R,ie]);function le(t,e){if(!D.current||t<0||t>=g.length)return-1;let s=t;for(;;){const n=D.current.querySelector(`[data-option-index="${s}"]`),i=We?!1:!n||n.disabled||n.getAttribute("aria-disabled")==="true";if(n&&n.hasAttribute("tabindex")&&!i)return s;if(e==="next"?s=(s+1)%g.length:s=(s-1+g.length)%g.length,s===t)return-1}}const j=_e(({event:t,index:e,reason:s="auto"})=>{if(S.current=e,e===-1?C.current.removeAttribute("aria-activedescendant"):C.current.setAttribute("aria-activedescendant",`${w}-option-${e}`),Re&&Re(t,e===-1?null:g[e],s),!D.current)return;const n=D.current.querySelector(`[role="option"].${l}-focused`);n&&(n.classList.remove(`${l}-focused`),n.classList.remove(`${l}-focusVisible`));let i=D.current;if(D.current.getAttribute("role")!=="listbox"&&(i=D.current.parentElement.querySelector('[role="listbox"]')),!i)return;if(e===-1){i.scrollTop=0;return}const c=D.current.querySelector(`[data-option-index="${e}"]`);if(c&&(c.classList.add(`${l}-focused`),s==="keyboard"&&c.classList.add(`${l}-focusVisible`),i.scrollHeight>i.clientHeight&&s!=="mouse"&&s!=="touch")){const y=c,W=i.clientHeight+i.scrollTop,dt=y.offsetTop+y.offsetHeight;dt>W?i.scrollTop=dt-i.clientHeight:y.offsetTop-y.offsetHeight*(be?1.3:0)<i.scrollTop&&(i.scrollTop=y.offsetTop-y.offsetHeight*(be?1.3:0))}}),z=_e(({event:t,diff:e,direction:s="next",reason:n="auto"})=>{if(!k)return;const c=le((()=>{const y=g.length-1;if(e==="reset")return we;if(e==="start")return 0;if(e==="end")return y;const W=S.current+e;return W<0?W===-1&&Ke?-1:Ge&&S.current!==-1||Math.abs(e)>1?0:y:W>y?W===y+1&&Ke?-1:Ge||Math.abs(e)>1?y:0:W})(),s);if(j({index:c,reason:n,event:t}),b&&e!=="reset")if(c===-1)C.current.value=u;else{const y=A(g[c]);C.current.value=y,y.toLowerCase().indexOf(u.toLowerCase())===0&&u.length>0&&C.current.setSelectionRange(u.length,y.length)}}),pe=()=>{const t=(e,s)=>{const n=e?A(e):"",i=s?A(s):"";return n===i};if(S.current!==-1&&H.filteredOptions&&H.filteredOptions.length!==g.length&&H.inputValue===u&&(f?a.length===H.value.length&&H.value.every((e,s)=>A(a[s])===A(e)):t(H.value,a))){const e=H.filteredOptions[S.current];if(e)return je(g,s=>A(s)===A(e))}return-1},$e=d.useCallback(()=>{if(!k)return;const t=pe();if(t!==-1){S.current=t;return}const e=f?a[0]:a;if(g.length===0||e==null){z({diff:"reset"});return}if(D.current){if(e!=null){const s=g[S.current];if(f&&s&&je(a,i=>re(s,i))!==-1)return;const n=je(g,i=>re(i,e));n===-1?z({diff:"reset"}):j({index:n});return}if(S.current>=g.length-1){j({index:g.length-1});return}j({index:S.current})}},[g.length,f?!1:a,me,z,j,k,u,f]),Qe=_e(t=>{Rt(D,t),t&&$e()});d.useEffect(()=>{$e()},[$e]);const E=t=>{X||(Ne(!0),Me(!0),ke&&ke(t))},q=(t,e)=>{X&&(Ne(!1),Ae&&Ae(t,e))},B=(t,e,s,n)=>{if(f){if(a.length===e.length&&a.every((i,c)=>i===e[c]))return}else if(a===e)return;he&&he(t,e,s,n),pt(e)},ue=d.useRef(!1),te=(t,e,s="selectOption",n="options")=>{let i=s,c=e;if(f){c=Array.isArray(a)?a.slice():[];const y=je(c,W=>re(e,W));y===-1?c.push(e):n!=="freeSolo"&&(c.splice(y,1),i="removeOption")}ee(t,c),B(t,c,i,{option:e}),!Y&&(!t||!t.ctrlKey&&!t.metaKey)&&q(t,i),(x===!0||x==="touch"&&ue.current||x==="mouse"&&!ue.current)&&C.current.blur()};function Fe(t,e){if(t===-1)return-1;let s=t;for(;;){if(e==="next"&&s===a.length||e==="previous"&&s===-1)return-1;const n=se.querySelector(`[data-tag-index="${s}"]`);if(!n||!n.hasAttribute("tabindex")||n.disabled||n.getAttribute("aria-disabled")==="true")s+=e==="next"?1:-1;else return s}}const He=(t,e)=>{if(!f)return;u===""&&q(t,"toggleInput");let s=R;R===-1?u===""&&e==="previous"&&(s=a.length-1):(s+=e==="next"?1:-1,s<0&&(s=0),s===a.length&&(s=-1)),s=Fe(s,e),Pe(s),ie(s)},ze=t=>{ye.current=!0,K(""),U&&U(t,"","clear"),B(t,f?[]:null,"clear")},Xe=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(R!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(Pe(-1),ie(-1)),e.which!==229))switch(e.key){case"Home":k&&Q&&(e.preventDefault(),z({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":k&&Q&&(e.preventDefault(),z({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),z({diff:-mt,direction:"previous",reason:"keyboard",event:e}),E(e);break;case"PageDown":e.preventDefault(),z({diff:mt,direction:"next",reason:"keyboard",event:e}),E(e);break;case"ArrowDown":e.preventDefault(),z({diff:1,direction:"next",reason:"keyboard",event:e}),E(e);break;case"ArrowUp":e.preventDefault(),z({diff:-1,direction:"previous",reason:"keyboard",event:e}),E(e);break;case"ArrowLeft":He(e,"previous");break;case"ArrowRight":He(e,"next");break;case"Enter":if(S.current!==-1&&k){const s=g[S.current],n=G?G(s):!1;if(e.preventDefault(),n)return;te(e,s,"selectOption"),b&&C.current.setSelectionRange(C.current.value.length,C.current.value.length)}else J&&u!==""&&Ee===!1&&(f&&e.preventDefault(),te(e,u,"createOption","freeSolo"));break;case"Escape":k?(e.preventDefault(),e.stopPropagation(),q(e,"escape")):N&&(u!==""||f&&a.length>0)&&(e.preventDefault(),e.stopPropagation(),ze(e));break;case"Backspace":if(f&&!Z&&u===""&&a.length>0){const s=R===-1?a.length-1:R,n=a.slice();n.splice(s,1),B(e,n,"removeOption",{option:a[s]})}break;case"Delete":if(f&&!Z&&u===""&&a.length>0&&R!==-1){const s=R,n=a.slice();n.splice(s,1),B(e,n,"removeOption",{option:a[s]})}break}},ut=t=>{De(!0),lt&&!ye.current&&E(t)},ce=t=>{if(r(D)){C.current.focus();return}De(!1),Te.current=!0,ye.current=!1,O&&S.current!==-1&&k?te(t,g[S.current],"blur"):O&&J&&u!==""?te(t,u,"blur","freeSolo"):h&&ee(t,a),q(t,"blur")},L=t=>{const e=t.target.value;u!==e&&(K(e),Me(!1),U&&U(t,e,"input")),e===""?!_&&!f&&B(t,null,"clear"):E(t)},$=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));S.current!==e&&j({event:t,index:e,reason:"mouse"})},V=t=>{j({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),ue.current=!0},ct=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));te(t,g[e],"selectOption"),ue.current=!1},Ye=t=>e=>{const s=a.slice();s.splice(t,1),B(e,s,"removeOption",{option:a[t]})},Ze=t=>{X?q(t,"toggleInput"):E(t)},et=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==w&&t.preventDefault()},Ve=t=>{t.currentTarget.contains(t.target)&&(C.current.focus(),Ie&&Te.current&&C.current.selectionEnd-C.current.selectionStart===0&&C.current.select(),Te.current=!1)},ve=t=>{!M&&(u===""||!X)&&Ze(t)};let oe=J&&u.length>0;oe=oe||(f?a.length>0:a!==null);let de=g;return be&&(de=g.reduce((t,e,s)=>{const n=be(e);return t.length>0&&t[t.length-1].group===n?t[t.length-1].options.push(e):t.push({key:s,index:s,group:n,options:[e]}),t},[])),M&&ae&&ce(),{getRootProps:(t={})=>m({"aria-owns":Ce?`${w}-listbox`:null},t,{onKeyDown:Xe(t),onMouseDown:et,onClick:Ve}),getInputLabelProps:()=>({id:`${w}-label`,htmlFor:w}),getInputProps:()=>({id:w,value:u,onBlur:ce,onFocus:ut,onChange:L,onMouseDown:ve,"aria-activedescendant":k?"":null,"aria-autocomplete":b?"both":"list","aria-controls":Ce?`${w}-listbox`:void 0,"aria-expanded":Ce,autoComplete:"off",ref:C,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:M}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:ze}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:Ze}),getTagProps:({index:t})=>m({key:t,"data-tag-index":t,tabIndex:-1},!Z&&{onDelete:Ye(t)}),getListboxProps:()=>({role:"listbox",id:`${w}-listbox`,"aria-labelledby":`${w}-label`,ref:Qe,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{var s;const n=(f?a:[a]).some(c=>c!=null&&re(e,c)),i=G?G(e):!1;return{key:(s=Ue==null?void 0:Ue(e))!=null?s:A(e),tabIndex:-1,role:"option",id:`${w}-option-${t}`,onMouseMove:$,onClick:ct,onTouchStart:V,"data-option-index":t,"aria-disabled":i,"aria-selected":n}},id:w,inputValue:u,value:a,dirty:oe,expanded:k&&se,popupOpen:k,focused:ae||R!==-1,anchorEl:se,setAnchorEl:qe,focusedTag:R,groupedOptions:de}}function Ht(o){return xt("MuiListSubheader",o)}It("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const zt=["className","color","component","disableGutters","disableSticky","inset"],Vt=o=>{const{classes:r,color:l,disableGutters:b,inset:I,disableSticky:O}=o,x={root:["root",l!=="default"&&`color${Be(l)}`,!b&&"gutters",I&&"inset",!O&&"sticky"]};return yt(x,Ht,r)},_t=F("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:l}=o;return[r.root,l.color!=="default"&&r[`color${Be(l.color)}`],!l.disableGutters&&r.gutters,l.inset&&r.inset,!l.disableSticky&&r.sticky]}})(({theme:o,ownerState:r})=>m({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},r.color==="primary"&&{color:(o.vars||o).palette.primary.main},r.color==="inherit"&&{color:"inherit"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.inset&&{paddingLeft:72},!r.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),vt=d.forwardRef(function(r,l){const b=Ot({props:r,name:"MuiListSubheader"}),{className:I,color:O="default",component:x="li",disableGutters:h=!1,disableSticky:N=!1,inset:T=!1}=b,P=rt(b,zt),_=m({},b,{color:O,component:x,disableGutters:h,disableSticky:N,inset:T}),Y=Vt(_);return v.jsx(_t,m({as:x,className:ge(Y.root,I),ref:l,ownerState:_},P))});vt.muiSkipListHighlight=!0;function jt(o){return xt("MuiAutocomplete",o)}const p=It("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var bt,ht;const Bt=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Wt=["ref"],Gt=o=>{const{classes:r,disablePortal:l,expanded:b,focused:I,fullWidth:O,hasClearIcon:x,hasPopupIcon:h,inputFocused:N,popupOpen:T,size:P}=o,_={root:["root",b&&"expanded",I&&"focused",O&&"fullWidth",x&&"hasClearIcon",h&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",N&&"inputFocused"],tag:["tag",`tagSize${Be(P)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",T&&"popupIndicatorOpen"],popper:["popper",l&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return yt(_,jt,r)},Ut=F("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:l}=o,{fullWidth:b,hasClearIcon:I,hasPopupIcon:O,inputFocused:x,size:h}=l;return[{[`& .${p.tag}`]:r.tag},{[`& .${p.tag}`]:r[`tagSize${Be(h)}`]},{[`& .${p.inputRoot}`]:r.inputRoot},{[`& .${p.input}`]:r.input},{[`& .${p.input}`]:x&&r.inputFocused},r.root,b&&r.fullWidth,O&&r.hasPopupIcon,I&&r.hasClearIcon]}})(({ownerState:o})=>m({[`&.${p.focused} .${p.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${p.clearIndicator}`]:{visibility:"visible"}}},o.fullWidth&&{width:"100%"},{[`& .${p.tag}`]:m({margin:3,maxWidth:"calc(100% - 6px)"},o.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${p.inputRoot}`]:{flexWrap:"wrap",[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:30},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:56},[`& .${p.input}`]:{width:0,minWidth:30}},[`& .${ot.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${ot.root}.${ne.sizeSmall}`]:{[`& .${ot.input}`]:{padding:"2px 4px 3px 0"}},[`& .${ft.root}`]:{padding:9,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${p.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${ft.root}.${ne.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${p.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${fe.root}`]:{paddingTop:19,paddingLeft:8,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${fe.input}`]:{padding:"7px 4px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${fe.root}.${ne.sizeSmall}`]:{paddingBottom:1,[`& .${fe.input}`]:{padding:"2.5px 4px"}},[`& .${ne.hiddenLabel}`]:{paddingTop:8},[`& .${fe.root}.${ne.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${p.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${fe.root}.${ne.hiddenLabel}.${ne.sizeSmall}`]:{[`& .${p.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${p.input}`]:m({flexGrow:1,textOverflow:"ellipsis",opacity:0},o.inputFocused&&{opacity:1})})),Kt=F("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,r)=>r.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),qt=F(Pt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,r)=>r.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Jt=F(Pt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},r)=>m({},r.popupIndicator,o.popupOpen&&r.popupIndicatorOpen)})(({ownerState:o})=>m({padding:2,marginRight:-2},o.popupOpen&&{transform:"rotate(180deg)"})),Qt=F(Ct,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,r)=>{const{ownerState:l}=o;return[{[`& .${p.option}`]:r.option},r.popper,l.disablePortal&&r.popperDisablePortal]}})(({theme:o,ownerState:r})=>m({zIndex:(o.vars||o).zIndex.modal},r.disablePortal&&{position:"absolute"})),Xt=F($t,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,r)=>r.paper})(({theme:o})=>m({},o.typography.body1,{overflow:"auto"})),Yt=F("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,r)=>r.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),Zt=F("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,r)=>r.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),eo=F("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,r)=>r.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${p.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${p.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${p.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:tt(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${p.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:tt(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${p.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:tt(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),to=F(vt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,r)=>r.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),oo=F("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,r)=>r.groupUl})({padding:0,[`& .${p.option}`]:{paddingLeft:24}}),Co=d.forwardRef(function(r,l){var b,I,O,x;const h=Ot({props:r,name:"MuiAutocomplete"}),{autoComplete:N=!1,autoHighlight:T=!1,autoSelect:P=!1,blurOnSelect:_=!1,ChipProps:Y,className:M,clearIcon:We=bt||(bt=v.jsx(Lt,{fontSize:"small"})),clearOnBlur:Ge=!h.freeSolo,clearOnEscape:st=!1,clearText:me="Clear",closeText:J="Close",componentsProps:G={},defaultValue:Ue=h.multiple?[]:null,disableClearable:Se=!1,disableCloseOnSelect:be=!1,disabled:Q=!1,disabledItemsFocusable:at=!1,disableListWrap:Ke=!1,disablePortal:Le=!1,filterSelectedOptions:re=!1,forcePopupIcon:f="auto",freeSolo:he=!1,fullWidth:Ae=!1,getLimitTagsText:Re=n=>`+${n}`,getOptionLabel:U,groupBy:ke,handleHomeEndKeys:it=!h.freeSolo,includeInputInList:lt=!1,limitTags:xe=-1,ListboxComponent:Z="ul",ListboxProps:Ie,loading:Oe=!1,loadingText:w="Loading…",multiple:A=!1,noOptionsText:ye="No options",openOnFocus:Te=!1,openText:C="Open",PaperComponent:D=$t,PopperComponent:se=Ct,popupIcon:qe=ht||(ht=v.jsx(St,{})),readOnly:R=!1,renderGroup:Pe,renderInput:we,renderOption:S,renderTags:a,selectOnFocus:pt=!h.freeSolo,size:u="medium",slotProps:K={}}=h,ae=rt(h,Bt),{getRootProps:De,getInputProps:ee,getInputLabelProps:X,getPopupIndicatorProps:Ne,getClearProps:Je,getTagProps:Me,getListboxProps:Ee,getOptionProps:k,value:g,dirty:H,expanded:Ce,id:ie,popupOpen:le,focused:j,focusedTag:z,anchorEl:pe,setAnchorEl:$e,inputValue:Qe,groupedOptions:E}=Ft(m({},h,{componentName:"Autocomplete"})),q=!Se&&!Q&&H&&!R,B=(!he||f===!0)&&f!==!1,{onMouseDown:ue}=ee(),{ref:te}=Ie??{},Fe=Ee(),{ref:He}=Fe,ze=rt(Fe,Wt),Xe=kt(He,te),ce=U||(n=>{var i;return(i=n.label)!=null?i:n}),L=m({},h,{disablePortal:Le,expanded:Ce,focused:j,fullWidth:Ae,getOptionLabel:ce,hasClearIcon:q,hasPopupIcon:B,inputFocused:z===-1,popupOpen:le,size:u}),$=Gt(L);let V;if(A&&g.length>0){const n=i=>m({className:$.tag,disabled:Q},Me(i));a?V=a(g,n,L):V=g.map((i,c)=>v.jsx(Tt,m({label:ce(i),size:u},n({index:c}),Y)))}if(xe>-1&&Array.isArray(V)){const n=V.length-xe;!j&&n>0&&(V=V.splice(0,xe),V.push(v.jsx("span",{className:$.tag,children:Re(n)},V.length)))}const Ye=Pe||(n=>v.jsxs("li",{children:[v.jsx(to,{className:$.groupLabel,ownerState:L,component:"div",children:n.group}),v.jsx(oo,{className:$.groupUl,ownerState:L,children:n.children})]},n.key)),et=S||((n,i)=>d.createElement("li",m({},n,{key:n.key}),ce(i))),Ve=(n,i)=>{const c=k({option:n,index:i});return et(m({},c,{className:$.option}),n,{selected:c["aria-selected"],index:i,inputValue:Qe},L)},ve=(b=K.clearIndicator)!=null?b:G.clearIndicator,oe=(I=K.paper)!=null?I:G.paper,de=(O=K.popper)!=null?O:G.popper,t=(x=K.popupIndicator)!=null?x:G.popupIndicator,e=n=>v.jsx(Qt,m({as:se,disablePortal:Le,style:{width:pe?pe.clientWidth:null},ownerState:L,role:"presentation",anchorEl:pe,open:le},de,{className:ge($.popper,de==null?void 0:de.className),children:v.jsx(Xt,m({ownerState:L,as:D},oe,{className:ge($.paper,oe==null?void 0:oe.className),children:n}))}));let s=null;return!Oe&&E.length>0?s=e(v.jsx(eo,m({as:Z,className:$.listbox,ownerState:L},ze,Ie,{ref:Xe,children:E.map((n,i)=>ke?Ye({key:n.key,group:n.group,children:n.options.map((c,y)=>Ve(c,n.index+y))}):Ve(n,i))}))):Oe&&E.length===0?s=e(v.jsx(Yt,{className:$.loading,ownerState:L,children:w})):E.length===0&&!he&&!Oe&&(s=e(v.jsx(Zt,{className:$.noOptions,ownerState:L,role:"presentation",onMouseDown:n=>{n.preventDefault()},children:ye}))),v.jsxs(d.Fragment,{children:[v.jsx(Ut,m({ref:l,className:ge($.root,M),ownerState:L},De(ae),{children:we({id:ie,disabled:Q,fullWidth:!0,size:u==="small"?"small":void 0,InputLabelProps:X(),InputProps:m({ref:$e,className:$.inputRoot,startAdornment:V,onClick:n=>{n.target===n.currentTarget&&ue(n)}},(q||B)&&{endAdornment:v.jsxs(Kt,{className:$.endAdornment,ownerState:L,children:[q?v.jsx(qt,m({},Je(),{"aria-label":me,title:me,ownerState:L},ve,{className:ge($.clearIndicator,ve==null?void 0:ve.className),children:We})):null,B?v.jsx(Jt,m({},Ne(),{disabled:Q,"aria-label":le?J:C,title:le?J:C,ownerState:L},t,{className:ge($.popupIndicator,t==null?void 0:t.className),children:qe})):null]})}),inputProps:m({className:$.input,disabled:Q,readOnly:R},ee())})})),pe?s:null]})});function no(o){const r=wt(o);d.useEffect(()=>()=>{r.current()},[])}function ro(o,r,l,b=0){const I=d.useRef(),O=d.useRef(),x=d.useRef(),h=()=>{I.current&&(clearTimeout(I.current),I.current=void 0),O.current&&(clearTimeout(O.current),O.current=void 0)};return no(h),d.useMemo(()=>{const N=()=>{if(!x.current)return;const P=x.current;x.current=void 0,o.apply(P.this,P.args),h()},T=function(...P){I.current&&clearTimeout(I.current),x.current={args:P,this:this},I.current=setTimeout(N,l),b>0&&!O.current&&(O.current=setTimeout(N,b))};return Object.defineProperties(T,{length:{value:o.length},name:{value:`${o.name||"anonymous"}__debounced__${l}`}}),T},[l,b,...r])}function $o(o,r,l,b=0){d.useEffect(ro(o,r,l,b),r)}export{Co as A,ro as a,Dt as b,Nt as c,$o as u};
