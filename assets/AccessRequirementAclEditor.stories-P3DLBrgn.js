import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-Dq0ovNdT.js";import{A as c}from"./AccessRequirementAclEditor-DWf_he_8.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BQgbMZF9.js";import"./index-DTP0DXs6.js";import"./_baseOrderBy-DljT-4R2.js";import"./_baseIteratee-BFoO-v6v.js";import"./_baseMap-1ZClMyFz.js";import"./_baseEach-C_dJ0zYu.js";import"./useQueries-Cbv2qeri.js";import"./useInfiniteQuery-32AmjFc-.js";import"./AclEditor-2aFvKQgI.js";import"./UserSearchBoxV2-D425GoGK.js";import"./useDebouncedEffect-CRoRmL4V.js";import"./use-deep-compare-effect.esm-Da70d-lr.js";import"./uniq-Bc8qRwvi.js";import"./without-CFPVCKGy.js";import"./UserBadge-C9WWvzHZ.js";import"./SkeletonTable-CZ5dFOqb.js";import"./MenuItem-DkoZAmqe.js";import"./Card-DomhAkD6.js";import"./Chip-Dvm89NDk.js";import"./Select-aab027f3.esm-DFS98S1x.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CvVJPfc8.js";import"./TeamBadge-C-3jU_QV.js";import"./SkeletonButton-CVWmDoUn.js";import"./SkeletonInlineBlock-CdycSzNS.js";import"./SkeletonParagraph-VtSaKYcR.js";import"./IconSvgButton-pYAVgaLJ.js";import"./FormControlLabel-bl7y3GIE.js";import"./Checkbox-CwNW9pTm.js";import"./SwitchBase-DR9JkQwt.js";import"./useUpdateAcl-BbfEcwVC.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
