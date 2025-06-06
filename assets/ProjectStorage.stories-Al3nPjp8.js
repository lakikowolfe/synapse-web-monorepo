import{g as s}from"./entityHandlers-DI3tPuK8.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-Ds9iGu-J.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-Bbych7St.js";import{g as a}from"./userProfileHandlers-DYkCOA_n.js";import{P as N}from"./ProjectDataAvailability-DsWuuhgt.js";import"./index-DF7yN7NE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Btdgh6T7.js";import"./mockTeam-BnoCqEqU.js";import"./SynapseConstants-BtzEZQ3v.js";import"./OrientationBanner-sEjzdHT2.js";import"./jsx-runtime-DgXUeXrV.js";import"./index-DNYajJt4.js";import"./iframe-BFG7XEN4.js";import"./index-uBzytXzk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CASrN-wO.js";import"./FullWidthAlert-BmsStTN7.js";import"./Alert-Dq9dqTyO.js";import"./createTheme-BnR6VDwz.js";import"./resolveComponentProps-CMpMeHlq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-EOHO42VY.js";import"./createSvgIcon-C0V79X_t.js";import"./DefaultPropsProvider-D91nxuKE.js";import"./Close-D1qDXkgU.js";import"./IconButton-TRF0fw9v.js";import"./ButtonBase-kMafs3ZH.js";import"./useTimeout-Dwal47qt.js";import"./TransitionGroupContext-Ws1iJWHd.js";import"./useIsFocusVisible-CYTOP6DT.js";import"./useEventCallback-DbNdZLPa.js";import"./Paper-Bb_IVGOL.js";import"./Stack-DGetwxNI.js";import"./getThemeProps-CTJSO-h_.js";import"./useTheme-0X8He3Jf.js";import"./Box-BiQ94yKd.js";import"./AlertTitle-BZxRqgba.js";import"./Typography-DOK0zznv.js";import"./useTheme-mp-WflMx.js";import"./Grow-GHNX6R_F.js";import"./index-BiPuD5mw.js";import"./utils-D11Cwa0K.js";import"./ClickAwayListener-6B2KNGGV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DBH8_9eY.js";import"./index-Dvgf8y9s.js";import"./useControlled-D24p52r-.js";import"./useId-kwxvaFuc.js";import"./Popper-BsXe8Yg0.js";import"./Button-B8ygMq8k.js";import"./uniqueId-B8dnEuPq.js";import"./toString-C_jpwJNq.js";import"./isObjectLike-C2bTK4BQ.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-COIQsxX4.js";import"./times-DK8jmPYh.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-2sm56FnW.js";import"./mockTableEntity-CkUOYMuz.js";import"./mockFileEntityACLVariants-izKJTyWu.js";import"./fakerUtils-BXXuoOdy.js";import"./mockFileEntity-Df_1u6Ie.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-C-jWEx4p.js";import"./mockSchema-DPtrbzp5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CTuOVL31.js";import"./utils-CCiraw5q.js";import"./Link-DvC6GJf8.js";import"./Collapse-B_wPnWsY.js";import"./isNil-D0hKcBfH.js";import"./_Uint8Array-D4QUxGuU.js";import"./_baseIsEqual-HogoNuq1.js";import"./_getTag-DppqRXvs.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDgqfTrF.js";import"./Skeleton-BQOz6PNX.js";import"./inputBaseClasses-_yHk5MKC.js";import"./calculateFriendlyFileSize-C9Q8-tH3.js";import"./CheckCircleTwoTone-Rk5ugqpo.js";import"./InfoTwoTone-A0lNafO0.js";import"./useMutation-Bucg5_wJ.js";import"./isEqual-DO-FUjN-.js";import"./dayjs.min-BZYQtBUG.js";import"./chunk-AYJ5UCUI-B8ZPpuJL.js";import"./cloneDeep-DvGxmva1.js";import"./_initCloneObject-DJr2U3nk.js";import"./merge-BJhYPbVH.js";import"./util-T0h5Z1Q0.js";import"./HelpPopover-CiUDZpgW.js";import"./MarkdownPopover-CgRTS-re.js";import"./LightTooltip-Bxlshoie.js";import"./MarkdownSynapse-CeiY_SGy.js";import"./SkeletonButton-F5TzsRV0.js";import"./SkeletonInlineBlock-D9texr-u.js";import"./SkeletonTable-cx1gEjYW.js";import"./SkeletonParagraph-BuxuUNVA.js";import"./HelpOutlineTwoTone-DJmLVQ4s.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
