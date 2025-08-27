import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-D3sBTZ8e.js";import{d as s}from"./ToastMessage-09aFV2kM.js";import{R as n,a as t}from"./RequirementItem-DbYc3l00.js";import{P as O}from"./Paper-Dmx9m8f5.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-B8iGcL8P.js";import"./SynapseConstants-Bv2LGAGS.js";import"./OrientationBanner-wBgvkm2W.js";import"./index-DbC0eqpV.js";import"./index-_ua7RM_J.js";import"./iframe-CCwUWes3.js";import"./spreadSx-CwcO6WA9.js";import"./react-BWYrhhjR.js";import"./FullWidthAlert-DcJ9uPE2.js";import"./Alert-DjkyZCFm.js";import"./createTheme-Dv7X0J9j.js";import"./DefaultPropsProvider-BNDjYtxm.js";import"./useSlot-DBwew2p8.js";import"./useForkRef-C1MctNYz.js";import"./createSimplePaletteValueFilter-FtuzOVjX.js";import"./createSvgIcon-OIdd5Six.js";import"./Close-CaJrz68S.js";import"./IconButton-CdyPjgo2.js";import"./useTimeout-wlETIuGB.js";import"./ButtonBase-LPkH4HSZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-_lDF_zul.js";import"./Stack-BuPBuKY_.js";import"./extendSxProp-4uqTjkOV.js";import"./getThemeProps-CMOKEKiQ.js";import"./useTheme-C6oZUq1l.js";import"./Box-N4f6UJDY.js";import"./AlertTitle-Hq4Mb2ZI.js";import"./Typography-DWjuxWu_.js";import"./index-CoFUKuJt.js";import"./useTheme-CojY1kid.js";import"./ClickAwayListener-CdBsin_O.js";import"./getReactElementRef-CjQV4kKN.js";import"./index-D73yXCfo.js";import"./index-DEInpL0e.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BjCBc5iQ.js";import"./Tooltip-Dg50xbUf.js";import"./index-BvY2XDNC.js";import"./useControlled-CxUENiZe.js";import"./Popper-CbkkVKai.js";import"./Button-wJp7XZ08.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-BL_vVSiq.js";import"./QueryClientProvider-BxQiManm.js";import"./Link-CAfSbLTK.js";import"./Collapse-mizudac_.js";import"./_baseUniq-DvOGz5Z9.js";import"./_Uint8Array-CietwWHa.js";import"./isArray-CbiaBtQK.js";import"./_getTag-CmAat0Gn.js";import"./isEqual-BhBHzLP9.js";import"./merge-DMLXSLKL.js";import"./_initCloneObject-Cs3pao6J.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BkzJEMXy.js";import"./inputBaseClasses-BHiDCPXF.js";import"./calculateFriendlyFileSize-B27X_PhU.js";import"./CheckCircleTwoTone-CcxG3Ig0.js";import"./InfoTwoTone-B607NJn4.js";import"./useMutation-DoJgCRvH.js";import"./dayjs.min-D5j2OpQt.js";import"./chunk-AYJ5UCUI-DEmbKjED.js";import"./cloneDeep-CLwgqcCI.js";import"./Skeleton-DLKQK3Ge.js";import"./SkeletonButton-Dzp-4bDA.js";import"./SkeletonInlineBlock-aK8KBjGA.js";import"./SkeletonTable-CaNR-dG2.js";import"./times-DONsF5E2.js";import"./toInteger-BGw6nmpu.js";import"./isSymbol-BunvEDan.js";import"./SkeletonParagraph-C2_woS-A.js";import"./uniqueId-BcZQr1O9.js";import"./toString-DQpaVooY.js";import"./CSSTransition-Adp4ZZTT.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CLmk4PqT.js";import"./Avatar-CxW7g9Pd.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
