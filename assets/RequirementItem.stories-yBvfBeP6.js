import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-D3DyxeVu.js";import{d as s}from"./ToastMessage-Cjs4EdQW.js";import{R as n,a as t}from"./RequirementItem-ImDJIywZ.js";import{P as O}from"./Paper-DOb69HxN.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-B6AFxzzh.js";import"./SynapseConstants-LoQQRkA3.js";import"./OrientationBanner-anD7LyV2.js";import"./index-OUKVSNpz.js";import"./index-BOnT2B31.js";import"./iframe-DpbROzyC.js";import"./spreadSx-CwcO6WA9.js";import"./react-BNYXaJhL.js";import"./FullWidthAlert-ZMxoubS1.js";import"./Alert-nk4kzgt0.js";import"./createTheme-DZxfvGuT.js";import"./DefaultPropsProvider-Kvbw7Qnp.js";import"./useSlot-B65lHdsv.js";import"./useForkRef-s6AkVtM1.js";import"./createSimplePaletteValueFilter-BhobKFyN.js";import"./createSvgIcon-BGfGvUpT.js";import"./Close-uDT23R7X.js";import"./IconButton-CAjCQ32j.js";import"./useTimeout-BO4CYCW3.js";import"./ButtonBase-KvBlRtOG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W0PqCyay.js";import"./Stack-qs2k7b9p.js";import"./extendSxProp-BLySzOF7.js";import"./getThemeProps-h4L2MJio.js";import"./useTheme-BVyCU4zd.js";import"./Box-CxuL5sm2.js";import"./AlertTitle-CTbuirBl.js";import"./Typography-C_sJKJbQ.js";import"./index-CpGMUOtn.js";import"./useTheme-CZM24MID.js";import"./ClickAwayListener-Bh2wWlDC.js";import"./getReactElementRef-DlmZGwTe.js";import"./index-D6saAtTK.js";import"./index-BoVGBxJQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DocbsSlT.js";import"./Tooltip-CSwsquKH.js";import"./index-BZfVTL3P.js";import"./useControlled-D7MA9vyU.js";import"./Popper-Ckc_p83Q.js";import"./Button-fS8A6UeN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BkZ_yCIb.js";import"./QueryClientProvider-BhO8GH7N.js";import"./Link-Bxs-TvhH.js";import"./Collapse-BOgW-lYr.js";import"./_baseUniq-BKWx_RjF.js";import"./_Uint8Array-kwRcGX1J.js";import"./isArray-BOKSIQNM.js";import"./_getTag-XZCmnhGR.js";import"./isEqual-BboHBSTX.js";import"./merge-Ti5txTw0.js";import"./_initCloneObject-CDbuozmF.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CVezgcTc.js";import"./inputBaseClasses-CSVb0CMN.js";import"./calculateFriendlyFileSize-BgPXj7NU.js";import"./CheckCircleTwoTone-Byver7Ar.js";import"./InfoTwoTone-BrDLq8Q7.js";import"./useMutation-B4uIVdcz.js";import"./dayjs.min-DYMG4jJC.js";import"./chunk-AYJ5UCUI-CIPY0pky.js";import"./cloneDeep-nYJAO3GR.js";import"./Skeleton-3xP11vVd.js";import"./SkeletonButton-DptGI0wc.js";import"./SkeletonInlineBlock-Bhmjx9BA.js";import"./SkeletonTable-DI9M4G9b.js";import"./times-BeGOABfR.js";import"./toInteger-CHCKNuxu.js";import"./isSymbol-LRYpap4s.js";import"./SkeletonParagraph-DuQMI7nO.js";import"./uniqueId-CCCyDKTX.js";import"./toString-BZiWaQPq.js";import"./CSSTransition-CCCF-mO6.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CkD52M6b.js";import"./Avatar-CE4IIiKg.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
