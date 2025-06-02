import{g as s}from"./entityHandlers-BBJ889pU.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-B_xSXmXR.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-BXg3aRdm.js";import{l as O}from"./index-i3RUUIfq.js";import{g as a}from"./userProfileHandlers-9mtx7oCY.js";import{P as N}from"./ProjectDataAvailability-BBxAWm3h.js";import"./index-D2SgmrOF.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-_TAnjPcT.js";import"./mockTeam-CWKARPKN.js";import"./SynapseConstants-CwskSrtE.js";import"./OrientationBanner-CWHRIU5l.js";import"./jsx-runtime-J8LmzxcM.js";import"./index-w4KlfFGg.js";import"./iframe-DHjlMvoh.js";import"./index-B3fXTnZS.js";import"./spreadSx-CwcO6WA9.js";import"./react-VPSgbN1X.js";import"./FullWidthAlert-C30KN8xJ.js";import"./Alert-BOZGohyZ.js";import"./createTheme-B5jDAUkm.js";import"./resolveComponentProps-1wnzLdW_.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-en9h5boq.js";import"./createSvgIcon-V0KlQ9Vq.js";import"./DefaultPropsProvider-HByegv8E.js";import"./Close-C6m_fk2M.js";import"./IconButton-B0ToW79y.js";import"./ButtonBase-Zy6_PQlA.js";import"./useTimeout-rekSewsX.js";import"./TransitionGroupContext-BB2sJPj0.js";import"./useIsFocusVisible-B8GJ3ILl.js";import"./useEventCallback-X_1b1bFu.js";import"./Paper-C_v3_MPZ.js";import"./Stack-Bj3ZSgf1.js";import"./getThemeProps-BfKvM1_V.js";import"./useTheme-BsYdX0yo.js";import"./Box-BKG1AAgH.js";import"./AlertTitle-BcNZm7Ru.js";import"./Typography-DQAlW-NO.js";import"./useTheme-CY7cQsuX.js";import"./Grow-CWiU5o6y.js";import"./index--NsX-5Ju.js";import"./utils-BXLLkLzq.js";import"./ClickAwayListener-lcK2grUT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-cjwU-86R.js";import"./index-DKtiQNKb.js";import"./useControlled-gac5YXq7.js";import"./useId-T5i9QPOu.js";import"./Popper-DjZO7_qd.js";import"./Button-D6Yeisf2.js";import"./uniqueId-CV9sHfgS.js";import"./toString-64kSU8yp.js";import"./isObjectLike-BmVguDK8.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-WCqXLzWk.js";import"./times-CbDmmAob.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-C-BVQ4Ls.js";import"./mockTableEntity-6i228ZES.js";import"./mockFileEntityACLVariants-2zjD7GVl.js";import"./fakerUtils-CltsX75F.js";import"./mockFileEntity-BK_mThDX.js";import"./mock_file_handle-DwnN5i7-.js";import"./mockEntity-D0DzY4x6.js";import"./mockSchema-DCIs133Q.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BtSCUure.js";import"./utils-Bd6kc1Ou.js";import"./Link-lo45V4bc.js";import"./Collapse-Btj7iVIY.js";import"./isNil-vqhrspiG.js";import"./_Uint8Array-CT7Ow10W.js";import"./_baseIsEqual-BXwvZ3xj.js";import"./_getTag-Cnzq9Q2L.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoU4kqmW.js";import"./Skeleton-DdI72mVD.js";import"./inputBaseClasses-CzksuyV9.js";import"./calculateFriendlyFileSize-DwPSXRtB.js";import"./CheckCircleTwoTone-CchasTxV.js";import"./InfoTwoTone-llY9trof.js";import"./useMutation-DyWBnHp3.js";import"./isEqual-CZA66GsT.js";import"./dayjs.min-lzyg-c11.js";import"./chunk-AYJ5UCUI-C31SFKF5.js";import"./cloneDeep-DoWg_E5X.js";import"./_initCloneObject-CdnCFk_k.js";import"./merge-BjSSQWzY.js";import"./util-CSXjsJOH.js";import"./HelpPopover-CYsuoJ1E.js";import"./MarkdownPopover-BLCaGp1S.js";import"./LightTooltip-91lEvqz6.js";import"./MarkdownSynapse-CA3hBiPu.js";import"./SkeletonButton-CZgHjnWn.js";import"./SkeletonInlineBlock-BGhGjKYC.js";import"./SkeletonTable-BDD_QzCl.js";import"./SkeletonParagraph-DAiS1MW4.js";import"./HelpOutlineTwoTone-xkOdjNRx.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
