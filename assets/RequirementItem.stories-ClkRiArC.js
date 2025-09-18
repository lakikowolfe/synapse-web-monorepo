import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-l3n6RWKU.js";import{d as s}from"./ToastMessage-CJQrl8E_.js";import{R as n,a as t}from"./RequirementItem-8tnMIAfr.js";import{P as O}from"./Paper-D2zgTwzo.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Bu7LMQiG.js";import"./SynapseConstants-CAHPBJM2.js";import"./OrientationBanner-D20UWKCy.js";import"./index-CHRKc7Me.js";import"./index-C53BhZP8.js";import"./iframe-Cvn1CpwI.js";import"./spreadSx-CwcO6WA9.js";import"./react-CI6DqbZ9.js";import"./FullWidthAlert-DEwvacYo.js";import"./Alert-CIN1f2gN.js";import"./createTheme-BD-SoLjD.js";import"./DefaultPropsProvider-C2HhMOKj.js";import"./useSlot-CjpUEZLw.js";import"./useForkRef-CNZ3p3X0.js";import"./createSimplePaletteValueFilter-CB0cbmKV.js";import"./createSvgIcon-DvFBqQbS.js";import"./Close-Co3nFtZ3.js";import"./IconButton-CcjiQn_Y.js";import"./useTimeout-Bv6YmAp5.js";import"./ButtonBase-BYf4RcHP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Clwzq0Gd.js";import"./Stack-CjwfZ6iZ.js";import"./extendSxProp-XPZEzUfX.js";import"./getThemeProps-CMdm_6rw.js";import"./useTheme-D3fydmcm.js";import"./Box-fj6Y8aC6.js";import"./AlertTitle-B6i-rp9E.js";import"./Typography-Dic5pSaj.js";import"./index-Bzb8KmWv.js";import"./useTheme-BwdMo-wV.js";import"./ClickAwayListener-BP6ck353.js";import"./getReactElementRef-DkCkETYF.js";import"./index-6OWYtd6e.js";import"./index-c00cAjas.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-yQ0dz_Uo.js";import"./Tooltip-ChJXKMz1.js";import"./index-L0RnLnF9.js";import"./useControlled-BpEf1Ti3.js";import"./Popper-Ch3O4PLA.js";import"./Button-B9y5SAJO.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-jylX0jRs.js";import"./QueryClientProvider-leiBbqUo.js";import"./Link-Bhcv7JYy.js";import"./Collapse-Bel5vaKV.js";import"./_baseUniq-CFvBV96o.js";import"./_Uint8Array-BmrfN4JG.js";import"./isArray-C3L0d1QQ.js";import"./_getTag-DDgx_p-c.js";import"./isEqual-DHNHQaNN.js";import"./merge-CGh2bkth.js";import"./_initCloneObject-REImA5o8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CyFro7_y.js";import"./inputBaseClasses-CXJnUP_4.js";import"./calculateFriendlyFileSize-s5Z576be.js";import"./CheckCircleTwoTone-DQSQAPea.js";import"./InfoTwoTone-DET7zeyV.js";import"./useMutation-y6Ia0GTL.js";import"./dayjs.min-C1YSGxUe.js";import"./chunk-AYJ5UCUI-wTSMJf65.js";import"./cloneDeep-DsMMzjHx.js";import"./Skeleton-D9wi0HLZ.js";import"./SkeletonButton-l7ZabV5-.js";import"./SkeletonInlineBlock-D-VhCZw6.js";import"./SkeletonTable-BjMblF5w.js";import"./times-MB5WwI_K.js";import"./toInteger-DMPt-qd_.js";import"./isSymbol-C8JEvIiF.js";import"./SkeletonParagraph-D8ZZm3nf.js";import"./uniqueId-DnopFQoJ.js";import"./toString-Bh0IqsKj.js";import"./CSSTransition-BnCL4xPs.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-hN33xPP-.js";import"./Avatar-DFLRFEfo.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
