import{g as i}from"./entityHandlers-D7Lz3PEn.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-CyBcMZHS.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./StringUtils-DP1EOPFU.js";import{h as d,H as l}from"./index-auNnMdT8.js";import{g as m}from"./userProfileHandlers-DsYFkzYY.js";import{P as L}from"./ProjectDataAvailability-D4cpDA1M.js";import"./index-Mb8cls-C.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dsy_-MgF.js";import"./mockTeam-BcGt8tiq.js";import"./SynapseConstants-ASFCM7Ww.js";import"./OrientationBanner-B3ssqBiM.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-cqnCbW4t.js";import"./index-CJTOsSPC.js";import"./iframe-Dd7u0VpD.js";import"./spreadSx-CwcO6WA9.js";import"./react-CdW3PxEg.js";import"./FullWidthAlert-BJilBWIN.js";import"./Alert-CIsfmHNh.js";import"./createTheme-C2T5h-83.js";import"./DefaultPropsProvider-Hvyn696A.js";import"./useSlot-nP4Zk3Iq.js";import"./useForkRef-DUmGpmyr.js";import"./createSimplePaletteValueFilter-COVIpNOp.js";import"./createSvgIcon-F3Y5RxQg.js";import"./Close-OCLtD2ix.js";import"./IconButton-Cki87y21.js";import"./useTimeout-Bza7oBhH.js";import"./ButtonBase-DuLGVV-J.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BLDsdi-s.js";import"./Paper-DONo8Upe.js";import"./useTheme-BbCAWFxt.js";import"./useTheme-DCz0mdMu.js";import"./Stack-HrePce9B.js";import"./extendSxProp-BEp23Kv4.js";import"./getThemeProps-B5BOBScs.js";import"./Box-C6ZcRLgh.js";import"./AlertTitle-BCzeRpaL.js";import"./Typography-Dil5DNBP.js";import"./index-BsQu4-UU.js";import"./ClickAwayListener-CLWsDWIQ.js";import"./getReactElementRef-C8kRQNY-.js";import"./index-ClIqjNg8.js";import"./index-DYANzCZO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DKIdI1nH.js";import"./Tooltip-CwHJ2Ovs.js";import"./index-DX2Kul0x.js";import"./useControlled-6BfN5IB5.js";import"./Popper-DeXHkWF5.js";import"./Button-CkxOqHsQ.js";import"./uniqueId-Br9pNX66.js";import"./toString-DemyOjkl.js";import"./isArray-BXTnkRSJ.js";import"./isSymbol-CphrOMZQ.js";import"./times-Cusnazzc.js";import"./_Uint8Array-BzEOgZyv.js";import"./identity-DKeuBCMA.js";import"./toInteger-C1p1LiW2.js";import"./mockTableEntity-Ed2FvYVR.js";import"./mockFileEntityACLVariants-D4rU9tR2.js";import"./fakerUtils-CgzsWJvr.js";import"./mockFileEntity-BZ7g396O.js";import"./mock_file_handle-BIJh-7D7.js";import"./mockEntity-w4zR4U5u.js";import"./mockSchema-DJaGwDd1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BlgSxevE.js";import"./QueryClientProvider-CWLbqL56.js";import"./Link-BexGjm3B.js";import"./Collapse-DQEDekLN.js";import"./_baseUniq-D0DEGSFQ.js";import"./_getTag-DM9TvJQS.js";import"./isEqual-Sg7VmSfq.js";import"./merge-DFdCtFjH.js";import"./_initCloneObject-Bqx55jMf.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLBw8ob2.js";import"./inputBaseClasses-BfI4S3Jn.js";import"./calculateFriendlyFileSize-BII3Y8_i.js";import"./CheckCircleTwoTone-DR42jZ8T.js";import"./InfoTwoTone-CtPfwYmq.js";import"./useMutation-BjcKnYmp.js";import"./dayjs.min-DxXv0W1a.js";import"./chunk-AYJ5UCUI-G9Kj3eWZ.js";import"./cloneDeep-DSye7UDc.js";import"./Skeleton-BrZGpT9D.js";import"./HelpPopover-DVscJGBt.js";import"./MarkdownPopover-CZybdKhr.js";import"./LightTooltip-pTqkFSKk.js";import"./MarkdownSynapse-D8ybiuUB.js";import"./SkeletonButton-Bcb6esn0.js";import"./SkeletonInlineBlock-BWRVR2Dx.js";import"./SkeletonTable-BXJzoyci.js";import"./SkeletonParagraph-fcqFmAn2.js";import"./HelpOutlineTwoTone-CKw_Ym5O.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
