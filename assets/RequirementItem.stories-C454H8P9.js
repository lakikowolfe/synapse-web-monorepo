import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-DALbr0rU.js";import{d as s}from"./ToastMessage-Dg8vdCnK.js";import{R as n,a as t}from"./RequirementItem-unK6dmJd.js";import{P as O}from"./Paper-BtUvorA0.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-BhepqCJ_.js";import"./SynapseConstants-CPG_-dF9.js";import"./OrientationBanner-KTqOsktd.js";import"./index-BGTqnpDM.js";import"./index-CQ_4abnw.js";import"./iframe-8YCJMRqG.js";import"./spreadSx-CwcO6WA9.js";import"./react-c40rAc90.js";import"./FullWidthAlert-CcNa6u-N.js";import"./Alert-CLwQPuUq.js";import"./createTheme-C70pto1P.js";import"./DefaultPropsProvider-BWZVoNQD.js";import"./useSlot-DRpfB6nJ.js";import"./useForkRef-COfw2awo.js";import"./createSimplePaletteValueFilter-BHN_6Cm0.js";import"./createSvgIcon-DMhl2Z0V.js";import"./Close-B7LZsPq0.js";import"./IconButton-D_USAq1B.js";import"./useTimeout-CE3vuiaQ.js";import"./ButtonBase-Bpx7kPUp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BNoOsuWz.js";import"./Stack-CdkXXRAJ.js";import"./extendSxProp-BQjQQvTo.js";import"./getThemeProps-5ghkHmB8.js";import"./useTheme-DVUR6C4x.js";import"./Box-C-0GvfO7.js";import"./AlertTitle-D8sZMUjV.js";import"./Typography-COKbE9F_.js";import"./index-CQr2p3YM.js";import"./useTheme-Gj-raE8f.js";import"./ClickAwayListener-CxamgXc3.js";import"./getReactElementRef-jQKT_OT7.js";import"./index-cH2dSFXP.js";import"./index-ELxRi61y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-GdTSHW1W.js";import"./Tooltip-BJ97YRQ0.js";import"./index-BwQAWK1V.js";import"./useControlled-DQXwrQKp.js";import"./Popper-WgzfoB-g.js";import"./Button-C8asOJJ9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CiR8cJtv.js";import"./QueryClientProvider-B3KQpPGk.js";import"./Link-Bndxo0ry.js";import"./Collapse-BzPi4MpR.js";import"./_baseUniq-CKr-aF0H.js";import"./_Uint8Array-DBi96NjI.js";import"./isArray-BvA8z7gR.js";import"./_getTag-E9XwGR1D.js";import"./isEqual-B_nR9CbE.js";import"./merge-DjcSGyFU.js";import"./_initCloneObject-BXwebgKA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDU_rISg.js";import"./inputBaseClasses-D73qyTvX.js";import"./calculateFriendlyFileSize-Clyn3Gmt.js";import"./CheckCircleTwoTone-Cnd4LgDH.js";import"./InfoTwoTone-DdrJ6n1e.js";import"./useMutation-C0fTyqD8.js";import"./dayjs.min-BJNwFXiM.js";import"./chunk-AYJ5UCUI-BI54EPi0.js";import"./cloneDeep-CFihcmAw.js";import"./Skeleton-CV6z7hQ2.js";import"./SkeletonButton-BRILEBTu.js";import"./SkeletonInlineBlock-DfFhJ8Md.js";import"./SkeletonTable-uGln_iGZ.js";import"./times-CnQrbzCN.js";import"./toInteger-B8gOYukp.js";import"./isSymbol-DpT8jBRA.js";import"./SkeletonParagraph-Bg2mUUO_.js";import"./uniqueId-BIkARLxu.js";import"./toString-Cht-rL0w.js";import"./CSSTransition-Dj87Njbp.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Bp7PfmCP.js";import"./Avatar-D2RjdCC6.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
