import{j as a}from"./jsx-runtime-DgXUeXrV.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-CeiY_SGy.js";import{d as s}from"./ToastMessage-BMBLiYtw.js";import{R as n,a as t}from"./RequirementItem-DF6NRJke.js";import{P as O}from"./Paper-Bb_IVGOL.js";import"./index-DNYajJt4.js";import"./iframe-BFG7XEN4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-Ds9iGu-J.js";import"./SynapseConstants-BtzEZQ3v.js";import"./OrientationBanner-sEjzdHT2.js";import"./index-uBzytXzk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CASrN-wO.js";import"./FullWidthAlert-BmsStTN7.js";import"./Alert-Dq9dqTyO.js";import"./createTheme-BnR6VDwz.js";import"./resolveComponentProps-CMpMeHlq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-EOHO42VY.js";import"./createSvgIcon-C0V79X_t.js";import"./DefaultPropsProvider-D91nxuKE.js";import"./Close-D1qDXkgU.js";import"./IconButton-TRF0fw9v.js";import"./ButtonBase-kMafs3ZH.js";import"./useTimeout-Dwal47qt.js";import"./TransitionGroupContext-Ws1iJWHd.js";import"./useIsFocusVisible-CYTOP6DT.js";import"./useEventCallback-DbNdZLPa.js";import"./Stack-DGetwxNI.js";import"./getThemeProps-CTJSO-h_.js";import"./useTheme-0X8He3Jf.js";import"./Box-BiQ94yKd.js";import"./AlertTitle-BZxRqgba.js";import"./Typography-DOK0zznv.js";import"./useTheme-mp-WflMx.js";import"./Grow-GHNX6R_F.js";import"./index-BiPuD5mw.js";import"./utils-D11Cwa0K.js";import"./ClickAwayListener-6B2KNGGV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DBH8_9eY.js";import"./index-Dvgf8y9s.js";import"./useControlled-D24p52r-.js";import"./useId-kwxvaFuc.js";import"./Popper-BsXe8Yg0.js";import"./Button-B8ygMq8k.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CTuOVL31.js";import"./utils-CCiraw5q.js";import"./Link-DvC6GJf8.js";import"./Collapse-B_wPnWsY.js";import"./isNil-D0hKcBfH.js";import"./_Uint8Array-D4QUxGuU.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C2bTK4BQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-HogoNuq1.js";import"./_getTag-DppqRXvs.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDgqfTrF.js";import"./Skeleton-BQOz6PNX.js";import"./inputBaseClasses-_yHk5MKC.js";import"./calculateFriendlyFileSize-C9Q8-tH3.js";import"./CheckCircleTwoTone-Rk5ugqpo.js";import"./InfoTwoTone-A0lNafO0.js";import"./useMutation-Bucg5_wJ.js";import"./isEqual-DO-FUjN-.js";import"./dayjs.min-BZYQtBUG.js";import"./chunk-AYJ5UCUI-B8ZPpuJL.js";import"./cloneDeep-DvGxmva1.js";import"./_initCloneObject-DJr2U3nk.js";import"./merge-BJhYPbVH.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-F5TzsRV0.js";import"./SkeletonInlineBlock-D9texr-u.js";import"./SkeletonTable-cx1gEjYW.js";import"./times-DK8jmPYh.js";import"./toInteger-2sm56FnW.js";import"./isSymbol-COIQsxX4.js";import"./SkeletonParagraph-BuxuUNVA.js";import"./uniqueId-B8dnEuPq.js";import"./toString-C_jpwJNq.js";import"./CSSTransition-gJkZsdgW.js";import"./ConditionalWrapper-aNnIiboH.js";import"./LockTwoTone-CcF7gtL0.js";import"./Avatar-DaDfis-2.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
