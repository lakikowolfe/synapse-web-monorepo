import{j as a}from"./jsx-runtime-J8LmzxcM.js";import{m as P}from"./mockWiki-5OtZEItt.js";import{M as x}from"./MarkdownSynapse-CA3hBiPu.js";import{d as s}from"./ToastMessage-BF22e8J9.js";import{R as n,a as t}from"./RequirementItem-Dy36t7Xz.js";import{P as O}from"./Paper-C_v3_MPZ.js";import"./index-w4KlfFGg.js";import"./iframe-DHjlMvoh.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-DwnN5i7-.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-B_xSXmXR.js";import"./SynapseConstants-CwskSrtE.js";import"./OrientationBanner-CWHRIU5l.js";import"./index-B3fXTnZS.js";import"./spreadSx-CwcO6WA9.js";import"./react-VPSgbN1X.js";import"./FullWidthAlert-C30KN8xJ.js";import"./Alert-BOZGohyZ.js";import"./createTheme-B5jDAUkm.js";import"./resolveComponentProps-1wnzLdW_.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-en9h5boq.js";import"./createSvgIcon-V0KlQ9Vq.js";import"./DefaultPropsProvider-HByegv8E.js";import"./Close-C6m_fk2M.js";import"./IconButton-B0ToW79y.js";import"./ButtonBase-Zy6_PQlA.js";import"./useTimeout-rekSewsX.js";import"./TransitionGroupContext-BB2sJPj0.js";import"./useIsFocusVisible-B8GJ3ILl.js";import"./useEventCallback-X_1b1bFu.js";import"./Stack-Bj3ZSgf1.js";import"./getThemeProps-BfKvM1_V.js";import"./useTheme-BsYdX0yo.js";import"./Box-BKG1AAgH.js";import"./AlertTitle-BcNZm7Ru.js";import"./Typography-DQAlW-NO.js";import"./useTheme-CY7cQsuX.js";import"./Grow-CWiU5o6y.js";import"./index--NsX-5Ju.js";import"./utils-BXLLkLzq.js";import"./ClickAwayListener-lcK2grUT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-cjwU-86R.js";import"./index-DKtiQNKb.js";import"./useControlled-gac5YXq7.js";import"./useId-T5i9QPOu.js";import"./Popper-DjZO7_qd.js";import"./Button-D6Yeisf2.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-BXg3aRdm.js";import"./useQuery-BtSCUure.js";import"./utils-Bd6kc1Ou.js";import"./Link-lo45V4bc.js";import"./Collapse-Btj7iVIY.js";import"./isNil-vqhrspiG.js";import"./_Uint8Array-CT7Ow10W.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BmVguDK8.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BXwvZ3xj.js";import"./_getTag-Cnzq9Q2L.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoU4kqmW.js";import"./Skeleton-DdI72mVD.js";import"./inputBaseClasses-CzksuyV9.js";import"./calculateFriendlyFileSize-DwPSXRtB.js";import"./CheckCircleTwoTone-CchasTxV.js";import"./InfoTwoTone-llY9trof.js";import"./useMutation-DyWBnHp3.js";import"./isEqual-CZA66GsT.js";import"./dayjs.min-lzyg-c11.js";import"./chunk-AYJ5UCUI-C31SFKF5.js";import"./cloneDeep-DoWg_E5X.js";import"./_initCloneObject-CdnCFk_k.js";import"./merge-BjSSQWzY.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CZgHjnWn.js";import"./SkeletonInlineBlock-BGhGjKYC.js";import"./SkeletonTable-BDD_QzCl.js";import"./times-CbDmmAob.js";import"./toInteger-C-BVQ4Ls.js";import"./isSymbol-WCqXLzWk.js";import"./SkeletonParagraph-DAiS1MW4.js";import"./uniqueId-CV9sHfgS.js";import"./toString-64kSU8yp.js";import"./CSSTransition-DUn3YQGT.js";import"./ConditionalWrapper-DaWrcILx.js";import"./LockTwoTone-s4sQcDZ7.js";import"./Avatar-BAfmAfQg.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
