import{j as a}from"./jsx-runtime-DR4tA_9P.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-B6u4nxrQ.js";import{d as s}from"./ToastMessage-CpnYtuWa.js";import{R as n,a as t}from"./RequirementItem-B_c_POQp.js";import{P as O}from"./Paper-DVO33gFY.js";import"./index-Vg79BID-.js";import"./iframe-CFDjoW5s.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-Bwg0s9f_.js";import"./SynapseConstants-CC0rfazt.js";import"./OrientationBanner-D6g2n9Ed.js";import"./index-Ce5YK_VT.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy1cZ39D.js";import"./FullWidthAlert-DUYwRGp_.js";import"./Alert-DbEi88XW.js";import"./createTheme-DXmTCCCj.js";import"./resolveComponentProps-CedEO8KE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-63n_0gwC.js";import"./createSvgIcon-9LdlP7Pe.js";import"./DefaultPropsProvider-DEgZ9IxH.js";import"./Close-bzmN7BlE.js";import"./IconButton-DDnvOzB0.js";import"./ButtonBase-Bp4tlF7M.js";import"./useTimeout-Bmchsjft.js";import"./TransitionGroupContext-BzNTPzjo.js";import"./useIsFocusVisible-B83Pi7Rh.js";import"./useEventCallback-C5p3MRGc.js";import"./Stack-BLi-xU46.js";import"./getThemeProps-BcJTOhRM.js";import"./useTheme-BwrFdNA1.js";import"./Box-Dx0zJWvv.js";import"./AlertTitle-PUy9LFc0.js";import"./Typography-CaIHMzUk.js";import"./useTheme-CsEanI0A.js";import"./Grow--OkInp2b.js";import"./index-BOC6r9lG.js";import"./utils-CeLCQfAC.js";import"./ClickAwayListener-mcCXQhRy.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Eupu-pPA.js";import"./index-D_Bz3QI0.js";import"./useControlled-CCdnr4Dv.js";import"./useId-vp5UP7jH.js";import"./Popper-DZ7-s0Kz.js";import"./Button-DA8RCH2U.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-DD6Qx8YL.js";import"./utils-CzjhUDee.js";import"./Link-B9q2Qbuh.js";import"./Collapse-B0rWqOPL.js";import"./isNil-FLY8Au3U.js";import"./_Uint8Array-D4FAVcjH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CG8Lv5Yt.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-POOioTDn.js";import"./_getTag-Bm-7XfiV.js";import"./tinycolor-Begke6kS.js";import"./Fade-D9T8AoT0.js";import"./Skeleton-B_OQBy-8.js";import"./inputBaseClasses-DIzPzOvk.js";import"./calculateFriendlyFileSize-CZUPi2gZ.js";import"./CheckCircleTwoTone-CschQz1p.js";import"./InfoTwoTone-Dn-ZYr7l.js";import"./mutation-2Oe4VFYe.js";import"./dayjs.min-Dofo-31o.js";import"./chunk-AYJ5UCUI-DXwcYtNa.js";import"./cloneDeep-VFlbVhYR.js";import"./_initCloneObject-B8S0M8p_.js";import"./isEqual-BBn7n2HH.js";import"./merge-Cs-r_5th.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Qs0IclQY.js";import"./SkeletonInlineBlock-BZCQXU9M.js";import"./SkeletonTable-knmiGeb6.js";import"./times-DG7oOr4e.js";import"./toInteger-KeGnbqiY.js";import"./isSymbol-izKfuV_7.js";import"./SkeletonParagraph-Bn9ZVxWe.js";import"./uniqueId-BktkPOeG.js";import"./toString-BX2rTywS.js";import"./CSSTransition-CfC_Bn9S.js";import"./ConditionalWrapper-Ck-L_fo9.js";import"./LockTwoTone-CwsdjS4E.js";import"./Avatar-AXcwDEE1.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
