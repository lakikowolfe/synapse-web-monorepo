import{j as a}from"./jsx-runtime-DYWFqpqM.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-BZXWeQil.js";import{d as s}from"./ToastMessage-BjMj7gZW.js";import{R as n,a as t}from"./RequirementItem-DHOV91DK.js";import{P as O}from"./Paper-BYm56sLl.js";import"./index-Bv77PzVz.js";import"./iframe-DEhSGEmg.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-DWLH1Lqk.js";import"./SynapseConstants-BOpc9axU.js";import"./OrientationBanner-C1Y63T_x.js";import"./index-DjbSVj3W.js";import"./spreadSx-CwcO6WA9.js";import"./react-CJsDjOVT.js";import"./FullWidthAlert-CD1RQDi-.js";import"./Alert-DAuMTRZB.js";import"./createTheme-Yej-3d8C.js";import"./DefaultPropsProvider-B2pcTdWQ.js";import"./useSlot-ChBMCmlE.js";import"./useForkRef-CxGmXGLP.js";import"./createSimplePaletteValueFilter-Bvqb_Z9t.js";import"./createSvgIcon-agjiu9Tx.js";import"./Close-DqVJ9Trk.js";import"./IconButton-pzF2VmY0.js";import"./useTimeout-AmYutYOy.js";import"./ButtonBase-ek6tw78a.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcHwvJKl.js";import"./Stack-Ck4ZleCV.js";import"./extendSxProp-BQJgYz58.js";import"./getThemeProps-C6yV65Co.js";import"./useTheme-71X__tjS.js";import"./Box-D0xk7u0M.js";import"./AlertTitle-CuN0v1NM.js";import"./Typography-DULc9QVD.js";import"./index-BoIQx-DG.js";import"./useTheme-CKTStrFl.js";import"./ClickAwayListener-CCGNSMwG.js";import"./getReactElementRef-DdpE5Ax6.js";import"./index-BEeRGpTj.js";import"./index-A5B2XHd6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DxwgIlJV.js";import"./Tooltip-CmDC_tLV.js";import"./index-gfUR_RBn.js";import"./useControlled-Wg8dKAvl.js";import"./Popper-B0EUNtqP.js";import"./Button-BhZloWmq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-Cn_AzoCC.js";import"./utils-D7zvEuSp.js";import"./Link-COikdhoO.js";import"./Collapse-B0sVDV2H.js";import"./_baseUniq-C9HaMReR.js";import"./_Uint8Array-DeYtE0z3.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CZiXmveU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BxJZaRXJ.js";import"./isEqual-CD86U-iZ.js";import"./merge-BE6icoZI.js";import"./_initCloneObject-DdyDp4_5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-e7BhvPm8.js";import"./inputBaseClasses-D2FVY1i_.js";import"./calculateFriendlyFileSize-Bo0QvQei.js";import"./CheckCircleTwoTone-WZ_t0bYC.js";import"./InfoTwoTone-BHzOkU1y.js";import"./useMutation-B595Dkg-.js";import"./dayjs.min-IzSjKYgi.js";import"./chunk-AYJ5UCUI-BjhJpVgS.js";import"./cloneDeep-CrtDZzGk.js";import"./Skeleton-BwKgclz6.js";import"./SkeletonButton-Bkn_Iigx.js";import"./SkeletonInlineBlock-C8DT4w78.js";import"./SkeletonTable-B-Pkn04D.js";import"./times-CpRBO48d.js";import"./toInteger-DytaiDt-.js";import"./isSymbol-CPA-l8yi.js";import"./SkeletonParagraph-DZzGo27w.js";import"./uniqueId-D1OWTsLd.js";import"./toString-Cd05TEB5.js";import"./CSSTransition-FDnoyyU3.js";import"./ConditionalWrapper-DOrXfvGG.js";import"./LockTwoTone-D0B594DE.js";import"./Avatar-BhV-1xjb.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
