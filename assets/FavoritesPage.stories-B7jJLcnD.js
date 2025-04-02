import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{N as T}from"./NoSearchResults-DjZW1FpE.js";import{c as b}from"./useFavorites-DW6RShfo.js";import{P as w,l as R,J as E}from"./useFiles-D8yf2tkg.js";import{h as d,e as g}from"./StringUtils-CXT0ex8W.js";import{C as f,u as M,a as N,c as C,g as I,b as P,d as z,e as O,f as A}from"./ColumnHeader-DH94-BUm.js";import{r as i}from"./index-Dl6G-zuu.js";import{E as D}from"./EntityIcon-Cmg7DcFq.js";import{I as G}from"./IconSvg-qb8b8_G9.js";import{S as _}from"./LoadingScreen-Cpeaoznz.js";import{F as k}from"./FavoriteButton-CfRQMtlr.js";import{T as H}from"./TextField-BDNZH-7j.js";import{I as U}from"./InputAdornment-DuWyrfBY.js";import{S as V}from"./Stack-Cg5HdmvL.js";import"./Box-DN73Q90z.js";import"./createTheme-BAeQEIuu.js";import"./index-GEGPABih.js";import"./VerificationSubmission-BnFne12N.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./useMutation-DjwfMZ6R.js";import"./useInfiniteQuery-C51kmyg6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./SynapseConstants-GCT3viGy.js";import"./OrientationBanner-D36M4lTd.js";import"./index-C1_KPTmG.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-BrvKzVSR.js";import"./Alert-Dcz6JZ5x.js";import"./styled-CVek1lbE.js";import"./mergeSlotProps-D1doMhlu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-DGYn73cf.js";import"./Paper-BMFCclTH.js";import"./IconButton-B2vXFIju.js";import"./ButtonBase-CJOJSfnP.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./AlertTitle-D21D8EIu.js";import"./Typography-Cqa7rFgc.js";import"./useTheme-DGffmoS1.js";import"./Grow-DPWvTaVu.js";import"./index-BIzb42Jq.js";import"./utils-Cn9x6_1Z.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B_hdhCmy.js";import"./index-OQIcOgx6.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-jaxqGIs_.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-WscWG_aD.js";import"./CheckCircleTwoTone-ChmDaZaB.js";import"./calculateFriendlyFileSize-6vvdb7nH.js";import"./Skeleton-DmAZtRms.js";import"./inputBaseClasses-BQMLzgta.js";import"./Fade-BK4f5_SW.js";import"./Link-CFsiiapl.js";import"./cloneDeep-CU8tiSOH.js";import"./_initCloneObject-BtS9Lr92.js";import"./isArrayLike-DBJ5VOVB.js";import"./isObjectLike-Cu7zvyZq.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-Dxzbedgu.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-CvkBQyYg.js";import"./identity-DKeuBCMA.js";import"./_isIterateeCall-DxE_HXvA.js";import"./EnumFacetFilterUI-DGy0E35u.js";import"./FormControlLabel-DnTLgYas.js";import"./useFormControl-CQLCXd-P.js";import"./Checkbox-DdbW-GT9.js";import"./Radio-CE-oWTfw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuItem-2Gk2X7W7.js";import"./List-C2SITC5t.js";import"./dividerClasses-Cy1O_LBt.js";import"./Menu-I6c2rK6i.js";import"./Popover-DVT6tR4z.js";import"./Modal-CE0HKq0N.js";import"./Backdrop-CB6sMj4E.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerWindow-BN2rbQ_G.js";import"./MenuList-BD4KnLC5.js";import"./noop-DX6rZLP_.js";import"./LayersTwoTone-hfVo2OcY.js";import"./ErrorOutlined-Cv1ApGtt.js";import"./GetAppTwoTone-2-W2Mxbb.js";import"./InfoOutlined-BOPmYxHD.js";import"./DeleteTwoTone-BaSxwZ9v.js";import"./LinearProgress-Db_UF_B3.js";import"./ConditionalWrapper-Be926PbJ.js";import"./InputLabel-WFlJj3PA.js";import"./isMuiElement-DAcuSkv2.js";import"./Input-DX0FyYX4.js";const p=C(),W=[p.display({id:"removeFavorite",cell:r=>e.jsx(k,{entityId:r.row.original.id}),size:60,enableResizing:!1,meta:{textAlign:"center"}}),p.accessor("name",{cell:r=>e.jsx("a",{rel:"noopener noreferrer",href:`${w.PORTAL}Synapse:${r.row.original.id}`,children:r.row.original.name}),enableGlobalFilter:!0,header:r=>e.jsx(f,{...r,title:"Name"}),size:400,enableColumnFilter:!1,sortingFn:"alphanumeric",enableSorting:!0}),p.accessor("type",{cell:r=>{const o=d(r.row.original.type);return e.jsxs(e.Fragment,{children:[e.jsx(D,{type:o,style:{marginRight:"5px"}}),g(o)]})},header:r=>e.jsx(f,{...r,title:"Type"}),size:160,enableGlobalFilter:!1,sortingFn:"alphanumeric",filterFn:"arrIncludes",meta:{enableMultipleSelect:!0,filterVariant:"enumeration",getDisplayText:r=>g(d(r))},enableSorting:!0})];function q(){const{accessToken:r}=R(),[o,y]=i.useState(""),[n,m]=i.useState(),{data:t,isLoading:l,isError:c,error:a}=b(),v=i.useMemo(()=>(t==null?void 0:t.results)??[],[t==null?void 0:t.results]),u=M({data:v,columns:W,getCoreRowModel:I(),getFilteredRowModel:P(),getSortedRowModel:z(),getFacetedRowModel:O(),getFacetedUniqueValues:A(),globalFilterFn:"includesString",state:{globalFilter:o},columnResizeMode:"onChange"});if(i.useEffect(()=>{c&&a&&m(a)},[c,a]),i.useEffect(()=>{m(r?void 0:new Error("Please sign in to access your favorites."))},[r]),n)return e.jsx(E,{error:n});const S=u.getRowModel().rows.length>0;return e.jsxs("div",{className:"FavoritesPage",children:[e.jsx(H,{InputProps:{startAdornment:e.jsx(U,{position:"start",children:e.jsx(G,{icon:"search",wrap:!1})})},type:"search",placeholder:"Favorite Name",value:o,onChange:j=>{y(j.target.value)},fullWidth:!0,sx:{mb:4,maxWidth:"800px"}}),e.jsx(N,{table:u,fullWidth:!1}),!S&&!l&&e.jsxs(V,{sx:{textAlign:"center"},my:2,gap:1,children:[e.jsx(T,{height:"150px"}),(t==null?void 0:t.results.length)==0?e.jsx("p",{children:"You currently have no favorites"}):e.jsx("p",{children:"No matching favorites found"})]}),l&&e.jsx("div",{className:"placeholder",children:e.jsx(_,{size:30})})]})}const Ar={title:"Synapse/FavoritesPage",component:q},s={};var h,x,F;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const Dr=["Demo"];export{s as Demo,Dr as __namedExportsOrder,Ar as default};
