import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DvoYBNiD.js";import{A as i}from"./AccessRequirementAclEditor-CYYPePRY.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DcwEZM-2.js";import"./index-CMAWu6FN.js";import"./_baseOrderBy-BnyrwHOF.js";import"./_baseIteratee-C2VihgZa.js";import"./_baseMap-GSBEYVyh.js";import"./_baseEach-Byx7O7Em.js";import"./useQueries-H3vjvQPa.js";import"./useInfiniteQuery-DDXlKMJO.js";import"./AclEditor-zpFR4ckz.js";import"./UserSearchBoxV2-CZDPbJnQ.js";import"./useDebouncedEffect-mi9YdSvH.js";import"./use-deep-compare-effect.esm-CFWlAvyU.js";import"./uniq-B6BenvlG.js";import"./without-XsWpL-41.js";import"./UserBadge-CEUD_xnv.js";import"./useUserBundle-vsDX1dLg.js";import"./useSuspenseQuery-TSKBM31X.js";import"./SkeletonTable-h3HZ1dln.js";import"./MenuItem-DULlt_2w.js";import"./Card-BoGx4zp2.js";import"./Chip-Qo99dBLS.js";import"./Select-aab027f3.esm-OtH7ivmn.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C1woi-M7.js";import"./TeamBadge-DYzqkOvY.js";import"./SkeletonButton-rl5nAPBn.js";import"./SkeletonInlineBlock-CrALH587.js";import"./SkeletonParagraph--j7cXsut.js";import"./IconSvgButton-CcmN_yUJ.js";import"./FormControlLabel-DvUE49P8.js";import"./Checkbox-CZEsGXk1.js";import"./SwitchBase-GfkoXiNz.js";import"./useUpdateAcl--OGpmfrw.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
