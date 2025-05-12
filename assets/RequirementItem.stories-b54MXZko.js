import{j as a}from"./jsx-runtime-K2fqsMI1.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-B5y5NY56.js";import{d as s}from"./ToastMessage-4G5gLJ0w.js";import{R as n,a as t}from"./RequirementItem-8JboXiTz.js";import{P as O}from"./Paper-CBPY2_ME.js";import"./index-BF-TFGr6.js";import"./iframe-CduSda18.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-Z5-hGPsU.js";import"./SynapseConstants-B_tgEFoi.js";import"./OrientationBanner-CxPcUhkX.js";import"./index-BYwNUEh3.js";import"./spreadSx-CwcO6WA9.js";import"./react-pB_ySTRt.js";import"./FullWidthAlert-C7tYBYpO.js";import"./Alert-DoLuuX1K.js";import"./createTheme-fNsUonXl.js";import"./resolveComponentProps-DvJnYw6b.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-WQZqeZhB.js";import"./createSvgIcon-CRycykR-.js";import"./DefaultPropsProvider-pkj_z4mc.js";import"./Close-CtnschHy.js";import"./IconButton-yNyfERvq.js";import"./ButtonBase-HHO57Pnd.js";import"./useTimeout-DI2Gx5la.js";import"./TransitionGroupContext-OzWqrcBy.js";import"./useIsFocusVisible-RY2eniDj.js";import"./useEventCallback-b14gmjlt.js";import"./Stack-w5S_lSZ-.js";import"./getThemeProps-BpHqemHI.js";import"./useTheme-BV4ngjpd.js";import"./Box-B5j1LXc8.js";import"./AlertTitle-CJo_OcY2.js";import"./Typography-Cs0IiwfE.js";import"./useTheme-BnvDC3Cc.js";import"./Grow-teO_iWl5.js";import"./index-DVGoONCX.js";import"./utils-Bcb2eLt2.js";import"./ClickAwayListener-BndowNQw.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BcdnjFX2.js";import"./index-v-kyJxW4.js";import"./useControlled-DbZ2ahWR.js";import"./useId-DYwP7KU_.js";import"./Popper-dJS5SO_Y.js";import"./Button-JCjg7Upf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-KKIcYF_X.js";import"./utils-DIfgLFBq.js";import"./Link-Dbnlm_65.js";import"./Collapse-POhtEGak.js";import"./isNil-Bpym3iET.js";import"./_Uint8Array-Qe-AOk_D.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D9T7B50e.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DHB_eETG.js";import"./_getTag-B3HsDC7G.js";import"./tinycolor-Begke6kS.js";import"./Fade-NKvmRFmW.js";import"./Skeleton-ioLcvLoL.js";import"./inputBaseClasses-BDlfCoGX.js";import"./calculateFriendlyFileSize-B889KYnv.js";import"./CheckCircleTwoTone-xHXjx-id.js";import"./InfoTwoTone-G73G5jpY.js";import"./mutation-BvTYFNUq.js";import"./dayjs.min-Dlwyit3L.js";import"./chunk-AYJ5UCUI-By9W3JJY.js";import"./cloneDeep-BVPhsa5y.js";import"./_initCloneObject-C68wD5Vv.js";import"./isEqual-DMqmt8Qo.js";import"./merge-B9RYE8Kl.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-p6W8NDgX.js";import"./SkeletonInlineBlock-C17-wCtN.js";import"./SkeletonTable-Dm7Y5ZaJ.js";import"./times-BVopGqFr.js";import"./toInteger-CcDCAdmk.js";import"./isSymbol-cHLQiUDv.js";import"./SkeletonParagraph-WMYr-02e.js";import"./uniqueId-o2D8FNZw.js";import"./toString-Dh-ZC1rt.js";import"./CSSTransition-8MM_p7-S.js";import"./ConditionalWrapper-vu8LVdUY.js";import"./LockTwoTone-BflKN8mJ.js";import"./Avatar-Cwz80MVm.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
