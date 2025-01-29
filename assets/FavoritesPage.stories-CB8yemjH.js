import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{C as d,u as T,S as b,c as w,g as R,a as E,b as M,d as N,e as C}from"./StyledTanStackTable-yCvNrS_v.js";import{r as i}from"./index-Dl6G-zuu.js";import{N as I}from"./NoSearchResults-B7alTFXX.js";import{c as P}from"./useFavorites-Cz7dVoYC.js";import{P as z,l as O,J as A}from"./useFiles-D6EkPeZl.js";import{g,e as f}from"./RegularExpressions-DT_uNBo6.js";import{E as D}from"./EntityIcon-9UKEHQEV.js";import{I as G}from"./IconSvg-nxWde1nE.js";import{S as _}from"./LoadingScreen-BDJMIc_E.js";import{F as k}from"./FavoriteButton-5nx2kyFL.js";import{T as H}from"./TextField-CrNNFkUB.js";import{I as U}from"./InputAdornment-HA7mspYf.js";import{S as V}from"./Stack-DTWuWz9s.js";import"./EnumFacetFilterUI-BbJh4kq3.js";import"./IconButton-BIc9jQ57.js";import"./createTheme-C4MKIpuQ.js";import"./index-GEGPABih.js";import"./styled-BwKg_4wT.js";import"./ButtonBase-6jsyScMO.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useForkRef-CEBgoE3Z.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Box-CaFleW7-.js";import"./FormControlLabel-CgCL0_qx.js";import"./useFormControl-CQLCXd-P.js";import"./useControlled-1Y2rT-1r.js";import"./Typography-DrqHmlDD.js";import"./Checkbox-CnAHeP9R.js";import"./createSvgIcon-CLD93Ce9.js";import"./Radio-BKgQCzNK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Dropdown-CauUxhYv.js";import"./index-BfyspvgH.js";import"./Tooltip-B08tzUFP.js";import"./index-CarQ_cRE.js";import"./utils-DDqOmLXv.js";import"./index-BIzb42Jq.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-30Ov46SB.js";import"./mergeSlotProps-BB45Ai_O.js";import"./isHostComponent-DVu5iVWx.js";import"./useId-BkqTTtmk.js";import"./hasClass-D5ZjVvBY.js";import"./Menu-BxlTrzRj.js";import"./Popover-8EWwwMP9.js";import"./Modal-DofGmAF7.js";import"./Backdrop-794lhd40.js";import"./Fade-BRP5-t6h.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerWindow-BN2rbQ_G.js";import"./Paper-BrACm7G9.js";import"./MenuList-CQMQk4tL.js";import"./List-nAK0nmZc.js";import"./cloneDeep-BzxzZd4X.js";import"./_initCloneObject-CKp18hZk.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./noop-DX6rZLP_.js";import"./merge-DLQdEICg.js";import"./identity-DKeuBCMA.js";import"./Skeleton-CW6YXi1_.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./useMutation-DjwfMZ6R.js";import"./useInfiniteQuery-DD6QhTQe.js";import"./VerificationSubmission-CjmU3lv6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./OrientationBanner-BcEAmQ0L.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-BZ3OMkjp.js";import"./Alert-CduaGk2B.js";import"./AlertTitle-G3es5_Tb.js";import"./ClickAwayListener-D7YV5tOA.js";import"./Button-DtfaTZY_.js";import"./SynapseConstants-D1fnTFbP.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-D-FIW5gs.js";import"./CheckCircleTwoTone-DTl0gYtq.js";import"./calculateFriendlyFileSize-B85TBsSb.js";import"./inputBaseClasses-u7jm9M-e.js";import"./Link-DxNs_73S.js";import"./StringUtils-COg2sgwz.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./LayersTwoTone-Be5uNxsz.js";import"./ErrorOutlined-qWluJVEZ.js";import"./GetAppTwoTone-BARpdX8y.js";import"./InfoOutlined-CgkZO6RQ.js";import"./DeleteTwoTone-DDTGJUFj.js";import"./LinearProgress-IGALd_S1.js";import"./ConditionalWrapper-Be926PbJ.js";import"./InputLabel-ChcIXaMM.js";import"./isMuiElement-DAcuSkv2.js";import"./Input-Bq8Rqd0B.js";const p=w(),W=[p.display({id:"removeFavorite",cell:r=>e.jsx(k,{entityId:r.row.original.id}),size:60,enableResizing:!1,meta:{textAlign:"center"}}),p.accessor("name",{cell:r=>e.jsx("a",{rel:"noopener noreferrer",href:`${z.PORTAL}Synapse:${r.row.original.id}`,children:r.row.original.name}),enableGlobalFilter:!0,header:r=>e.jsx(d,{...r,title:"Name"}),size:400,enableColumnFilter:!1,sortingFn:"alphanumeric",enableSorting:!0}),p.accessor("type",{cell:r=>{const o=g(r.row.original.type);return e.jsxs(e.Fragment,{children:[e.jsx(D,{type:o,style:{marginRight:"5px"}}),f(o)]})},header:r=>e.jsx(d,{...r,title:"Type"}),size:160,enableGlobalFilter:!1,sortingFn:"alphanumeric",filterFn:"arrIncludes",meta:{enableMultipleSelect:!0,filterVariant:"enumeration",getDisplayText:r=>f(g(r))},enableSorting:!0})];function q(){const{accessToken:r}=O(),[o,y]=i.useState(""),[n,m]=i.useState(),{data:t,isLoading:l,isError:c,error:a}=P(),S=i.useMemo(()=>(t==null?void 0:t.results)??[],[t==null?void 0:t.results]),u=T({data:S,columns:W,getCoreRowModel:R(),getFilteredRowModel:E(),getSortedRowModel:M(),getFacetedRowModel:N(),getFacetedUniqueValues:C(),globalFilterFn:"includesString",state:{globalFilter:o},columnResizeMode:"onChange"});if(i.useEffect(()=>{c&&a&&m(a)},[c,a]),i.useEffect(()=>{m(r?void 0:new Error("Please sign in to access your favorites."))},[r]),n)return e.jsx(A,{error:n});const v=u.getRowModel().rows.length>0;return e.jsxs("div",{className:"FavoritesPage",children:[e.jsx(H,{InputProps:{startAdornment:e.jsx(U,{position:"start",children:e.jsx(G,{icon:"search",wrap:!1})})},type:"search",placeholder:"Favorite Name",value:o,onChange:j=>{y(j.target.value)},fullWidth:!0,sx:{mb:4,maxWidth:"800px"}}),e.jsx(b,{table:u,fullWidth:!1}),!v&&!l&&e.jsxs(V,{sx:{textAlign:"center"},my:2,gap:1,children:[e.jsx(I,{height:"150px"}),(t==null?void 0:t.results.length)==0?e.jsx("p",{children:"You currently have no favorites"}):e.jsx("p",{children:"No matching favorites found"})]}),l&&e.jsx("div",{className:"placeholder",children:e.jsx(_,{size:30})})]})}const Pr={title:"Synapse/FavoritesPage",component:q},s={};var x,h,F;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(F=(h=s.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const zr=["Demo"];export{s as Demo,zr as __namedExportsOrder,Pr as default};
