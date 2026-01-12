import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CCwNk76Y.js";import{A as i}from"./AccessRequirementAclEditor-BlP0ev2P.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bh9bujSa.js";import"./index-BEhf0JCb.js";import"./_baseOrderBy-BXVexttL.js";import"./_baseIteratee-F9qPnzzH.js";import"./_baseMap-D6vqmCJk.js";import"./_baseEach-BlvBxLnz.js";import"./useQueries-C_TnSIRo.js";import"./useInfiniteQuery-BLb_KQ8Z.js";import"./AclEditor-BhxkjIMs.js";import"./UserSearchBoxV2-B_yctYZp.js";import"./useDebouncedEffect-omTOKvcB.js";import"./use-deep-compare-effect.esm-uCkcZvw_.js";import"./uniq-DqRYO00W.js";import"./without-BmpUnbN6.js";import"./UserBadge-B-zNz6cJ.js";import"./useUserBundle-ByJxUt3x.js";import"./useSuspenseQuery-BX7AVyeT.js";import"./SkeletonTable-Cf4tCZO5.js";import"./MenuItem-CXyqq271.js";import"./Card-BskzqbhS.js";import"./Chip-Dkm58cKd.js";import"./Select-aab027f3.esm-D4_JpAXU.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-oGDZ0VX7.js";import"./TeamBadge-DekhYpS0.js";import"./SkeletonButton-CZc1MN4w.js";import"./SkeletonInlineBlock-Btd0x96s.js";import"./SkeletonParagraph-BWcs457u.js";import"./IconSvgButton-BIAtQdIO.js";import"./FormControlLabel-BXiw324X.js";import"./Checkbox-BiFNATGA.js";import"./SwitchBase-CCLXZP7p.js";import"./useUpdateAcl-B0utsWG6.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
