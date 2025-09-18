import{g as i}from"./entityHandlers-B_tqGrhj.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Bu7LMQiG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-PzZ__NgV.js";import{g as m}from"./userProfileHandlers-ypmeUDwb.js";import{P as L}from"./ProjectDataAvailability-CpWSp3FZ.js";import"./index-BWXxSG5k.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bl5bJ5Qk.js";import"./mockTeam-JyLJvJfi.js";import"./SynapseConstants-CAHPBJM2.js";import"./OrientationBanner-D20UWKCy.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CHRKc7Me.js";import"./index-C53BhZP8.js";import"./iframe-Cvn1CpwI.js";import"./spreadSx-CwcO6WA9.js";import"./react-CI6DqbZ9.js";import"./FullWidthAlert-DEwvacYo.js";import"./Alert-CIN1f2gN.js";import"./createTheme-BD-SoLjD.js";import"./DefaultPropsProvider-C2HhMOKj.js";import"./useSlot-CjpUEZLw.js";import"./useForkRef-CNZ3p3X0.js";import"./createSimplePaletteValueFilter-CB0cbmKV.js";import"./createSvgIcon-DvFBqQbS.js";import"./Close-Co3nFtZ3.js";import"./IconButton-CcjiQn_Y.js";import"./useTimeout-Bv6YmAp5.js";import"./ButtonBase-BYf4RcHP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Clwzq0Gd.js";import"./Paper-D2zgTwzo.js";import"./useTheme-BwdMo-wV.js";import"./useTheme-D3fydmcm.js";import"./Stack-CjwfZ6iZ.js";import"./extendSxProp-XPZEzUfX.js";import"./getThemeProps-CMdm_6rw.js";import"./Box-fj6Y8aC6.js";import"./AlertTitle-B6i-rp9E.js";import"./Typography-Dic5pSaj.js";import"./index-Bzb8KmWv.js";import"./ClickAwayListener-BP6ck353.js";import"./getReactElementRef-DkCkETYF.js";import"./index-6OWYtd6e.js";import"./index-c00cAjas.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-yQ0dz_Uo.js";import"./Tooltip-ChJXKMz1.js";import"./index-L0RnLnF9.js";import"./useControlled-BpEf1Ti3.js";import"./Popper-Ch3O4PLA.js";import"./Button-B9y5SAJO.js";import"./uniqueId-DnopFQoJ.js";import"./toString-Bh0IqsKj.js";import"./isArray-C3L0d1QQ.js";import"./isSymbol-C8JEvIiF.js";import"./times-MB5WwI_K.js";import"./_Uint8Array-BmrfN4JG.js";import"./identity-DKeuBCMA.js";import"./toInteger-DMPt-qd_.js";import"./mockTableEntity-C89pjsaz.js";import"./mockFileEntityACLVariants-BpVmzbrK.js";import"./fakerUtils-CrLT5Y8A.js";import"./mockFileEntity-BbC3SgV-.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BxUxi4gE.js";import"./mockSchema-DZFM_Z2H.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-jylX0jRs.js";import"./QueryClientProvider-leiBbqUo.js";import"./Link-Bhcv7JYy.js";import"./Collapse-Bel5vaKV.js";import"./_baseUniq-CFvBV96o.js";import"./_getTag-DDgx_p-c.js";import"./isEqual-DHNHQaNN.js";import"./merge-CGh2bkth.js";import"./_initCloneObject-REImA5o8.js";import"./tinycolor-Begke6kS.js";import"./Fade-CyFro7_y.js";import"./inputBaseClasses-CXJnUP_4.js";import"./calculateFriendlyFileSize-s5Z576be.js";import"./CheckCircleTwoTone-DQSQAPea.js";import"./InfoTwoTone-DET7zeyV.js";import"./useMutation-y6Ia0GTL.js";import"./dayjs.min-C1YSGxUe.js";import"./chunk-AYJ5UCUI-wTSMJf65.js";import"./cloneDeep-DsMMzjHx.js";import"./Skeleton-D9wi0HLZ.js";import"./HelpPopover-asRrsAZg.js";import"./MarkdownPopover-CkduoXAm.js";import"./LightTooltip-C_2fsIJz.js";import"./MarkdownSynapse-l3n6RWKU.js";import"./SkeletonButton-l7ZabV5-.js";import"./SkeletonInlineBlock-D-VhCZw6.js";import"./SkeletonTable-BjMblF5w.js";import"./SkeletonParagraph-D8ZZm3nf.js";import"./HelpOutlineTwoTone-BHBKNQxa.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
