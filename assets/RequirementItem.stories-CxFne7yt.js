import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-D-tOs994.js";import{M as x}from"./MarkdownSynapse-D8ybiuUB.js";import{d as s}from"./ToastMessage-8Uy6d2M1.js";import{R as n,a as t}from"./RequirementItem-BH6U60_Q.js";import{P as O}from"./Paper-DONo8Upe.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BIJh-7D7.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./useFiles-CyBcMZHS.js";import"./SynapseConstants-ASFCM7Ww.js";import"./OrientationBanner-B3ssqBiM.js";import"./index-cqnCbW4t.js";import"./index-CJTOsSPC.js";import"./iframe-Dd7u0VpD.js";import"./spreadSx-CwcO6WA9.js";import"./react-CdW3PxEg.js";import"./FullWidthAlert-BJilBWIN.js";import"./Alert-CIsfmHNh.js";import"./createTheme-C2T5h-83.js";import"./DefaultPropsProvider-Hvyn696A.js";import"./useSlot-nP4Zk3Iq.js";import"./useForkRef-DUmGpmyr.js";import"./createSimplePaletteValueFilter-COVIpNOp.js";import"./createSvgIcon-F3Y5RxQg.js";import"./Close-OCLtD2ix.js";import"./IconButton-Cki87y21.js";import"./useTimeout-Bza7oBhH.js";import"./ButtonBase-DuLGVV-J.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BLDsdi-s.js";import"./Stack-HrePce9B.js";import"./extendSxProp-BEp23Kv4.js";import"./getThemeProps-B5BOBScs.js";import"./useTheme-DCz0mdMu.js";import"./Box-C6ZcRLgh.js";import"./AlertTitle-BCzeRpaL.js";import"./Typography-Dil5DNBP.js";import"./index-BsQu4-UU.js";import"./useTheme-BbCAWFxt.js";import"./ClickAwayListener-CLWsDWIQ.js";import"./getReactElementRef-C8kRQNY-.js";import"./index-ClIqjNg8.js";import"./index-DYANzCZO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DKIdI1nH.js";import"./Tooltip-CwHJ2Ovs.js";import"./index-DX2Kul0x.js";import"./useControlled-6BfN5IB5.js";import"./Popper-DeXHkWF5.js";import"./Button-CkxOqHsQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-BlgSxevE.js";import"./QueryClientProvider-CWLbqL56.js";import"./Link-BexGjm3B.js";import"./Collapse-DQEDekLN.js";import"./_baseUniq-D0DEGSFQ.js";import"./_Uint8Array-BzEOgZyv.js";import"./isArray-BXTnkRSJ.js";import"./_getTag-DM9TvJQS.js";import"./isEqual-Sg7VmSfq.js";import"./merge-DFdCtFjH.js";import"./_initCloneObject-Bqx55jMf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLBw8ob2.js";import"./inputBaseClasses-BfI4S3Jn.js";import"./calculateFriendlyFileSize-BII3Y8_i.js";import"./CheckCircleTwoTone-DR42jZ8T.js";import"./InfoTwoTone-CtPfwYmq.js";import"./useMutation-BjcKnYmp.js";import"./dayjs.min-DxXv0W1a.js";import"./chunk-AYJ5UCUI-G9Kj3eWZ.js";import"./cloneDeep-DSye7UDc.js";import"./Skeleton-BrZGpT9D.js";import"./SkeletonButton-Bcb6esn0.js";import"./SkeletonInlineBlock-BWRVR2Dx.js";import"./SkeletonTable-BXJzoyci.js";import"./times-Cusnazzc.js";import"./toInteger-C1p1LiW2.js";import"./isSymbol-CphrOMZQ.js";import"./SkeletonParagraph-fcqFmAn2.js";import"./uniqueId-Br9pNX66.js";import"./toString-DemyOjkl.js";import"./CSSTransition-IIfM1gxY.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BbFdivz7.js";import"./Avatar-CxTmk64h.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
