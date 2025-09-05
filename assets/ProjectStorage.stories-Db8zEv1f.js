import{g as i}from"./entityHandlers-O4bwvWzO.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-BhepqCJ_.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-CG39i3TT.js";import{g as m}from"./userProfileHandlers-Bprp1R3m.js";import{P as L}from"./ProjectDataAvailability-NyjHwO9E.js";import"./index-C2nTKbp4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DN_UulUZ.js";import"./mockTeam-DcQft7JY.js";import"./SynapseConstants-CPG_-dF9.js";import"./OrientationBanner-KTqOsktd.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BGTqnpDM.js";import"./index-CQ_4abnw.js";import"./iframe-8YCJMRqG.js";import"./spreadSx-CwcO6WA9.js";import"./react-c40rAc90.js";import"./FullWidthAlert-CcNa6u-N.js";import"./Alert-CLwQPuUq.js";import"./createTheme-C70pto1P.js";import"./DefaultPropsProvider-BWZVoNQD.js";import"./useSlot-DRpfB6nJ.js";import"./useForkRef-COfw2awo.js";import"./createSimplePaletteValueFilter-BHN_6Cm0.js";import"./createSvgIcon-DMhl2Z0V.js";import"./Close-B7LZsPq0.js";import"./IconButton-D_USAq1B.js";import"./useTimeout-CE3vuiaQ.js";import"./ButtonBase-Bpx7kPUp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BNoOsuWz.js";import"./Paper-BtUvorA0.js";import"./useTheme-Gj-raE8f.js";import"./useTheme-DVUR6C4x.js";import"./Stack-CdkXXRAJ.js";import"./extendSxProp-BQjQQvTo.js";import"./getThemeProps-5ghkHmB8.js";import"./Box-C-0GvfO7.js";import"./AlertTitle-D8sZMUjV.js";import"./Typography-COKbE9F_.js";import"./index-CQr2p3YM.js";import"./ClickAwayListener-CxamgXc3.js";import"./getReactElementRef-jQKT_OT7.js";import"./index-cH2dSFXP.js";import"./index-ELxRi61y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-GdTSHW1W.js";import"./Tooltip-BJ97YRQ0.js";import"./index-BwQAWK1V.js";import"./useControlled-DQXwrQKp.js";import"./Popper-WgzfoB-g.js";import"./Button-C8asOJJ9.js";import"./uniqueId-BIkARLxu.js";import"./toString-Cht-rL0w.js";import"./isArray-BvA8z7gR.js";import"./isSymbol-DpT8jBRA.js";import"./times-CnQrbzCN.js";import"./_Uint8Array-DBi96NjI.js";import"./identity-DKeuBCMA.js";import"./toInteger-B8gOYukp.js";import"./mockTableEntity-BveuoAcy.js";import"./mockFileEntityACLVariants-Bl6kQjSb.js";import"./fakerUtils-3f0w0lUd.js";import"./mockFileEntity-sNdJp0-P.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-Ci3loCw_.js";import"./mockSchema-0TOE6knL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CiR8cJtv.js";import"./QueryClientProvider-B3KQpPGk.js";import"./Link-Bndxo0ry.js";import"./Collapse-BzPi4MpR.js";import"./_baseUniq-CKr-aF0H.js";import"./_getTag-E9XwGR1D.js";import"./isEqual-B_nR9CbE.js";import"./merge-DjcSGyFU.js";import"./_initCloneObject-BXwebgKA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDU_rISg.js";import"./inputBaseClasses-D73qyTvX.js";import"./calculateFriendlyFileSize-Clyn3Gmt.js";import"./CheckCircleTwoTone-Cnd4LgDH.js";import"./InfoTwoTone-DdrJ6n1e.js";import"./useMutation-C0fTyqD8.js";import"./dayjs.min-BJNwFXiM.js";import"./chunk-AYJ5UCUI-BI54EPi0.js";import"./cloneDeep-CFihcmAw.js";import"./Skeleton-CV6z7hQ2.js";import"./HelpPopover-BbfyfT-C.js";import"./MarkdownPopover-B7ZDn93a.js";import"./LightTooltip-CwCSSEFI.js";import"./MarkdownSynapse-DALbr0rU.js";import"./SkeletonButton-BRILEBTu.js";import"./SkeletonInlineBlock-DfFhJ8Md.js";import"./SkeletonTable-uGln_iGZ.js";import"./SkeletonParagraph-Bg2mUUO_.js";import"./HelpOutlineTwoTone-CBhIIsfk.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
