import{a3 as o,w as p,a4 as a}from"./iframe-Dq0ovNdT.js";import{A as m}from"./AclEditor-2aFvKQgI.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-D425GoGK.js";import"./useDebouncedEffect-CRoRmL4V.js";import"./use-deep-compare-effect.esm-Da70d-lr.js";import"./uniq-Bc8qRwvi.js";import"./without-CFPVCKGy.js";import"./UserBadge-C9WWvzHZ.js";import"./SkeletonTable-CZ5dFOqb.js";import"./MenuItem-DkoZAmqe.js";import"./Card-DomhAkD6.js";import"./Chip-Dvm89NDk.js";import"./Select-aab027f3.esm-DFS98S1x.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CvVJPfc8.js";import"./TeamBadge-C-3jU_QV.js";import"./SkeletonButton-CVWmDoUn.js";import"./SkeletonInlineBlock-CdycSzNS.js";import"./SkeletonParagraph-VtSaKYcR.js";import"./IconSvgButton-pYAVgaLJ.js";import"./FormControlLabel-bl7y3GIE.js";import"./Checkbox-CwNW9pTm.js";import"./SwitchBase-DR9JkQwt.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    resourceAccessList: [{
      principalId: MOCK_USER_ID,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS]
    }, {
      principalId: MOCK_TEAM_ID,
      accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE]
    }]
  },
  parameters: {
    stack: 'mock'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
