import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DSzJlIVH.js";import{d as s}from"./ToastMessage-BBNij3GH.js";import{R as n,a as t}from"./RequirementItem-eabqUd-F.js";import{P as O}from"./Paper-C3rBidsJ.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DLXFal_X.js";import"./SynapseConstants-DbkhDeAR.js";import"./OrientationBanner-D0d768pM.js";import"./index-BSXFsYyR.js";import"./index-1Uc_eVY1.js";import"./iframe-BQnb1gjJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLVSYXXU.js";import"./FullWidthAlert-CUJZvXhp.js";import"./Alert-CitiumEa.js";import"./createTheme-CNm8Y-1J.js";import"./DefaultPropsProvider-B7piOXtX.js";import"./useSlot-CoTRl55I.js";import"./useForkRef-BtFq_l26.js";import"./createSimplePaletteValueFilter-CUb_7v8W.js";import"./createSvgIcon-BSBxXRvm.js";import"./Close-gJa7yj_J.js";import"./IconButton-CBgFWAGZ.js";import"./useTimeout-FPNZb3DU.js";import"./ButtonBase-b7aSDYLa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CmUNzBU3.js";import"./Stack-CCxGCF3I.js";import"./extendSxProp-BzWV0Xzd.js";import"./getThemeProps-C5iK4XS1.js";import"./useTheme-C50vd0HS.js";import"./Box-BRV-43gQ.js";import"./AlertTitle-BQNqwUU3.js";import"./Typography-D8A0cTAg.js";import"./index-Cy7yRSoV.js";import"./useTheme-BiB50Sfs.js";import"./ClickAwayListener-JBjPr4Pj.js";import"./getReactElementRef-B7_Rapqe.js";import"./index-G_C3QZev.js";import"./index-CvBeCTPO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DCPUL9L1.js";import"./Tooltip-BJeU3PTL.js";import"./index-ri-uGLIv.js";import"./useControlled-CMwf4G1L.js";import"./Popper-DeYw2bmc.js";import"./Button-Dh8lWdQv.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BiEFIXkE.js";import"./QueryClientProvider-ClDBJHBv.js";import"./Link-jBWEo9x-.js";import"./Collapse-Of-bT-XP.js";import"./_baseUniq-BhYHH9l1.js";import"./_Uint8Array-Cdhm8lIV.js";import"./isArray-ujt6FPEz.js";import"./_getTag-C_GqoGg0.js";import"./isEqual-DFclNyKn.js";import"./merge-Dgt318io.js";import"./_initCloneObject-SA0OKzV5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPBJHg1f.js";import"./inputBaseClasses-C9yqRtoq.js";import"./calculateFriendlyFileSize-DiHasolk.js";import"./CheckCircleTwoTone-DHxCdOti.js";import"./InfoTwoTone-BUMNGj87.js";import"./useMutation-HUFEil92.js";import"./dayjs.min-BuEKwDL8.js";import"./chunk-AYJ5UCUI-CYvl8rK-.js";import"./cloneDeep-3yRSmLqQ.js";import"./Skeleton-C5gDPkTB.js";import"./SkeletonButton-DntGtZfR.js";import"./SkeletonInlineBlock-VORoxtk5.js";import"./SkeletonTable-DY05qp4-.js";import"./times-B-6qfDvx.js";import"./toInteger-CoGBxHcB.js";import"./isSymbol-51CbqnyM.js";import"./SkeletonParagraph-LRiVqAYW.js";import"./uniqueId-Ci4K3PoO.js";import"./toString-Gf41sRCl.js";import"./CSSTransition-C4hw6zx0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-fkYKS33X.js";import"./Avatar-DRmNWZ3L.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
