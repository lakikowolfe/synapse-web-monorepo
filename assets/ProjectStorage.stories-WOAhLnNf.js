import{g as i}from"./entityHandlers-CohmDHwb.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-B6AFxzzh.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-XygmruLB.js";import{g as m}from"./userProfileHandlers-_gtOrV5c.js";import{P as L}from"./ProjectDataAvailability-DBxKqsX0.js";import"./index-DRNYsJ8E.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D8v3L3h6.js";import"./mockTeam-DSWgoWAd.js";import"./SynapseConstants-LoQQRkA3.js";import"./OrientationBanner-anD7LyV2.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-OUKVSNpz.js";import"./index-BOnT2B31.js";import"./iframe-DpbROzyC.js";import"./spreadSx-CwcO6WA9.js";import"./react-BNYXaJhL.js";import"./FullWidthAlert-ZMxoubS1.js";import"./Alert-nk4kzgt0.js";import"./createTheme-DZxfvGuT.js";import"./DefaultPropsProvider-Kvbw7Qnp.js";import"./useSlot-B65lHdsv.js";import"./useForkRef-s6AkVtM1.js";import"./createSimplePaletteValueFilter-BhobKFyN.js";import"./createSvgIcon-BGfGvUpT.js";import"./Close-uDT23R7X.js";import"./IconButton-CAjCQ32j.js";import"./useTimeout-BO4CYCW3.js";import"./ButtonBase-KvBlRtOG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W0PqCyay.js";import"./Paper-DOb69HxN.js";import"./useTheme-CZM24MID.js";import"./useTheme-BVyCU4zd.js";import"./Stack-qs2k7b9p.js";import"./extendSxProp-BLySzOF7.js";import"./getThemeProps-h4L2MJio.js";import"./Box-CxuL5sm2.js";import"./AlertTitle-CTbuirBl.js";import"./Typography-C_sJKJbQ.js";import"./index-CpGMUOtn.js";import"./ClickAwayListener-Bh2wWlDC.js";import"./getReactElementRef-DlmZGwTe.js";import"./index-D6saAtTK.js";import"./index-BoVGBxJQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DocbsSlT.js";import"./Tooltip-CSwsquKH.js";import"./index-BZfVTL3P.js";import"./useControlled-D7MA9vyU.js";import"./Popper-Ckc_p83Q.js";import"./Button-fS8A6UeN.js";import"./uniqueId-CCCyDKTX.js";import"./toString-BZiWaQPq.js";import"./isArray-BOKSIQNM.js";import"./isSymbol-LRYpap4s.js";import"./times-BeGOABfR.js";import"./_Uint8Array-kwRcGX1J.js";import"./identity-DKeuBCMA.js";import"./toInteger-CHCKNuxu.js";import"./mockTableEntity-B1G1iB8r.js";import"./mockFileEntityACLVariants-Db0WPSqx.js";import"./fakerUtils-Bl2yI3vN.js";import"./mockFileEntity-8fDIfL0P.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BZDBj4ts.js";import"./mockSchema-B6-V25Kk.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BkZ_yCIb.js";import"./QueryClientProvider-BhO8GH7N.js";import"./Link-Bxs-TvhH.js";import"./Collapse-BOgW-lYr.js";import"./_baseUniq-BKWx_RjF.js";import"./_getTag-XZCmnhGR.js";import"./isEqual-BboHBSTX.js";import"./merge-Ti5txTw0.js";import"./_initCloneObject-CDbuozmF.js";import"./tinycolor-Begke6kS.js";import"./Fade-CVezgcTc.js";import"./inputBaseClasses-CSVb0CMN.js";import"./calculateFriendlyFileSize-BgPXj7NU.js";import"./CheckCircleTwoTone-Byver7Ar.js";import"./InfoTwoTone-BrDLq8Q7.js";import"./useMutation-B4uIVdcz.js";import"./dayjs.min-DYMG4jJC.js";import"./chunk-AYJ5UCUI-CIPY0pky.js";import"./cloneDeep-nYJAO3GR.js";import"./Skeleton-3xP11vVd.js";import"./HelpPopover-7lI6FGHN.js";import"./MarkdownPopover-ChhLKuia.js";import"./LightTooltip-C2EBsCPA.js";import"./MarkdownSynapse-D3DyxeVu.js";import"./SkeletonButton-DptGI0wc.js";import"./SkeletonInlineBlock-Bhmjx9BA.js";import"./SkeletonTable-DI9M4G9b.js";import"./SkeletonParagraph-DuQMI7nO.js";import"./HelpOutlineTwoTone-_nydpvfh.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const ur=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,ur as __namedExportsOrder,Er as default};
