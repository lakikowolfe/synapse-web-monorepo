import{g as s}from"./entityHandlers-DK_ItbxD.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-Bwg0s9f_.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-RzTrTYSO.js";import{g as a}from"./userProfileHandlers-2GjCeL7S.js";import{P as N}from"./ProjectDataAvailability-DqA4ntyM.js";import"./index-EUmLfoec.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DAUZcLNo.js";import"./mockTeam-CGqDvC-Z.js";import"./SynapseConstants-CC0rfazt.js";import"./OrientationBanner-D6g2n9Ed.js";import"./jsx-runtime-DR4tA_9P.js";import"./index-Vg79BID-.js";import"./iframe-CFDjoW5s.js";import"./index-Ce5YK_VT.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy1cZ39D.js";import"./FullWidthAlert-DUYwRGp_.js";import"./Alert-DbEi88XW.js";import"./createTheme-DXmTCCCj.js";import"./resolveComponentProps-CedEO8KE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-63n_0gwC.js";import"./createSvgIcon-9LdlP7Pe.js";import"./DefaultPropsProvider-DEgZ9IxH.js";import"./Close-bzmN7BlE.js";import"./IconButton-DDnvOzB0.js";import"./ButtonBase-Bp4tlF7M.js";import"./useTimeout-Bmchsjft.js";import"./TransitionGroupContext-BzNTPzjo.js";import"./useIsFocusVisible-B83Pi7Rh.js";import"./useEventCallback-C5p3MRGc.js";import"./Paper-DVO33gFY.js";import"./Stack-BLi-xU46.js";import"./getThemeProps-BcJTOhRM.js";import"./useTheme-BwrFdNA1.js";import"./Box-Dx0zJWvv.js";import"./AlertTitle-PUy9LFc0.js";import"./Typography-CaIHMzUk.js";import"./useTheme-CsEanI0A.js";import"./Grow--OkInp2b.js";import"./index-BOC6r9lG.js";import"./utils-CeLCQfAC.js";import"./ClickAwayListener-mcCXQhRy.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Eupu-pPA.js";import"./index-D_Bz3QI0.js";import"./useControlled-CCdnr4Dv.js";import"./useId-vp5UP7jH.js";import"./Popper-DZ7-s0Kz.js";import"./Button-DA8RCH2U.js";import"./uniqueId-BktkPOeG.js";import"./toString-BX2rTywS.js";import"./isObjectLike-CG8Lv5Yt.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-izKfuV_7.js";import"./times-DG7oOr4e.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-KeGnbqiY.js";import"./mockTableEntity-BxgQOfFA.js";import"./mockFileEntityACLVariants-COhv5OHp.js";import"./fakerUtils-Bey0MtnT.js";import"./mockFileEntity-foKiks_C.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-CXITVxKl.js";import"./mockSchema-DSyMSWb9.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DD6Qx8YL.js";import"./utils-CzjhUDee.js";import"./Link-B9q2Qbuh.js";import"./Collapse-B0rWqOPL.js";import"./isNil-FLY8Au3U.js";import"./_Uint8Array-D4FAVcjH.js";import"./_baseIsEqual-POOioTDn.js";import"./_getTag-Bm-7XfiV.js";import"./tinycolor-Begke6kS.js";import"./Fade-D9T8AoT0.js";import"./Skeleton-B_OQBy-8.js";import"./inputBaseClasses-DIzPzOvk.js";import"./calculateFriendlyFileSize-CZUPi2gZ.js";import"./CheckCircleTwoTone-CschQz1p.js";import"./InfoTwoTone-Dn-ZYr7l.js";import"./mutation-2Oe4VFYe.js";import"./dayjs.min-Dofo-31o.js";import"./chunk-AYJ5UCUI-DXwcYtNa.js";import"./cloneDeep-VFlbVhYR.js";import"./_initCloneObject-B8S0M8p_.js";import"./isEqual-BBn7n2HH.js";import"./merge-Cs-r_5th.js";import"./util-4ytLFYtR.js";import"./HelpPopover-C80HPq38.js";import"./MarkdownPopover-BrxYD_J-.js";import"./LightTooltip-B4YOZbBt.js";import"./MarkdownSynapse-B6u4nxrQ.js";import"./SkeletonButton-Qs0IclQY.js";import"./SkeletonInlineBlock-BZCQXU9M.js";import"./SkeletonTable-knmiGeb6.js";import"./SkeletonParagraph-Bn9ZVxWe.js";import"./HelpOutlineTwoTone-DleXlZRs.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
