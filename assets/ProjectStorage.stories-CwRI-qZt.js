import{g as s}from"./entityHandlers-CcHEkN7r.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-Z5-hGPsU.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-BtJS2t6d.js";import{g as a}from"./userProfileHandlers-CRgogb2H.js";import{P as N}from"./ProjectDataAvailability-D2Si7hkc.js";import"./index-BuFuSIzj.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DYDc8K7W.js";import"./mockTeam-DQldfPlU.js";import"./SynapseConstants-B_tgEFoi.js";import"./OrientationBanner-CxPcUhkX.js";import"./jsx-runtime-K2fqsMI1.js";import"./index-BF-TFGr6.js";import"./iframe-CduSda18.js";import"./index-BYwNUEh3.js";import"./spreadSx-CwcO6WA9.js";import"./react-pB_ySTRt.js";import"./FullWidthAlert-C7tYBYpO.js";import"./Alert-DoLuuX1K.js";import"./createTheme-fNsUonXl.js";import"./resolveComponentProps-DvJnYw6b.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-WQZqeZhB.js";import"./createSvgIcon-CRycykR-.js";import"./DefaultPropsProvider-pkj_z4mc.js";import"./Close-CtnschHy.js";import"./IconButton-yNyfERvq.js";import"./ButtonBase-HHO57Pnd.js";import"./useTimeout-DI2Gx5la.js";import"./TransitionGroupContext-OzWqrcBy.js";import"./useIsFocusVisible-RY2eniDj.js";import"./useEventCallback-b14gmjlt.js";import"./Paper-CBPY2_ME.js";import"./Stack-w5S_lSZ-.js";import"./getThemeProps-BpHqemHI.js";import"./useTheme-BV4ngjpd.js";import"./Box-B5j1LXc8.js";import"./AlertTitle-CJo_OcY2.js";import"./Typography-Cs0IiwfE.js";import"./useTheme-BnvDC3Cc.js";import"./Grow-teO_iWl5.js";import"./index-DVGoONCX.js";import"./utils-Bcb2eLt2.js";import"./ClickAwayListener-BndowNQw.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BcdnjFX2.js";import"./index-v-kyJxW4.js";import"./useControlled-DbZ2ahWR.js";import"./useId-DYwP7KU_.js";import"./Popper-dJS5SO_Y.js";import"./Button-JCjg7Upf.js";import"./uniqueId-o2D8FNZw.js";import"./toString-Dh-ZC1rt.js";import"./isObjectLike-D9T7B50e.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-cHLQiUDv.js";import"./times-BVopGqFr.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CcDCAdmk.js";import"./mockTableEntity-XD9VBiUe.js";import"./mockFileEntityACLVariants-B3GiaEHS.js";import"./fakerUtils-D7pTrMng.js";import"./mockFileEntity-BVe00NOO.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BLr6hZs5.js";import"./mockSchema-CfXwUKIs.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-KKIcYF_X.js";import"./utils-DIfgLFBq.js";import"./Link-Dbnlm_65.js";import"./Collapse-POhtEGak.js";import"./isNil-Bpym3iET.js";import"./_Uint8Array-Qe-AOk_D.js";import"./_baseIsEqual-DHB_eETG.js";import"./_getTag-B3HsDC7G.js";import"./tinycolor-Begke6kS.js";import"./Fade-NKvmRFmW.js";import"./Skeleton-ioLcvLoL.js";import"./inputBaseClasses-BDlfCoGX.js";import"./calculateFriendlyFileSize-B889KYnv.js";import"./CheckCircleTwoTone-xHXjx-id.js";import"./InfoTwoTone-G73G5jpY.js";import"./mutation-BvTYFNUq.js";import"./dayjs.min-Dlwyit3L.js";import"./chunk-AYJ5UCUI-By9W3JJY.js";import"./cloneDeep-BVPhsa5y.js";import"./_initCloneObject-C68wD5Vv.js";import"./isEqual-DMqmt8Qo.js";import"./merge-B9RYE8Kl.js";import"./util-C952amXl.js";import"./HelpPopover-kVxQ-wru.js";import"./MarkdownPopover-D-Ydksr_.js";import"./LightTooltip-BR8KtiAe.js";import"./MarkdownSynapse-B5y5NY56.js";import"./SkeletonButton-p6W8NDgX.js";import"./SkeletonInlineBlock-C17-wCtN.js";import"./SkeletonTable-Dm7Y5ZaJ.js";import"./SkeletonParagraph-WMYr-02e.js";import"./HelpOutlineTwoTone-CSE8Hy7v.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
