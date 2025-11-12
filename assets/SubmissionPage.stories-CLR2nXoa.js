import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-Dq0ovNdT.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BNdcxuEn.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-GtCp-p4u.js";import"./useAccessRequirements-BQgbMZF9.js";import"./index-DTP0DXs6.js";import"./_baseOrderBy-DljT-4R2.js";import"./_baseIteratee-BFoO-v6v.js";import"./_baseMap-1ZClMyFz.js";import"./_baseEach-C_dJ0zYu.js";import"./useQueries-Cbv2qeri.js";import"./useInfiniteQuery-32AmjFc-.js";import"./groupBy-D_Zs0gBr.js";import"./_createAggregator-CPAnOzT8.js";import"./DialogBase-Cvjq7Dv5.js";import"./Close-BVVEO4rC.js";import"./HelpPopover-CbiRGPMZ.js";import"./MarkdownPopover-BcAA2VMT.js";import"./LightTooltip-5n4PTZp6.js";import"./MarkdownSynapse-CjeUGBpw.js";import"./SkeletonButton-CVWmDoUn.js";import"./SkeletonInlineBlock-CdycSzNS.js";import"./SkeletonTable-CZ5dFOqb.js";import"./SkeletonParagraph-VtSaKYcR.js";import"./EntityLink-DeWuLg0i.js";import"./useEntity-D6VBWzZr.js";import"./pickBy-BdX71-rw.js";import"./isString-BtD2QHAq.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bs6oTsPc.js";import"./useGetEntityHeaders-fc-ATOrk.js";import"./EntityIcon-DgNMrQZC.js";import"./ErrorChip-DA9hnFs0.js";import"./Chip-Dvm89NDk.js";import"./UserOrTeamBadge-CvVJPfc8.js";import"./UserBadge-C9WWvzHZ.js";import"./MenuItem-DkoZAmqe.js";import"./Card-DomhAkD6.js";import"./TeamBadge-C-3jU_QV.js";import"./UnmanagedACTAccessRequirementItem-DqvxlcCD.js";import"./RequirementItem-CZxz_8qL.js";import"./LockTwoTone-aSW49pRE.js";import"./UserSearchBoxV2-D425GoGK.js";import"./useDebouncedEffect-CRoRmL4V.js";import"./use-deep-compare-effect.esm-Da70d-lr.js";import"./uniq-Bc8qRwvi.js";import"./without-CFPVCKGy.js";import"./Select-aab027f3.esm-DFS98S1x.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BTxOcvk3.js";import"./SelfSignAccessRequirementItem-DLtyxlJc.js";import"./DataAccessRequestAccessorsFilesForm-MEIOd3tk.js";import"./enums-lYDblxei.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-C2yPrXev.js";import"./RadioGroup-DP8NrJB1.js";import"./Radio-CWqEyW_i.js";import"./SwitchBase-DR9JkQwt.js";import"./FormGroup-BK4MSrd4.js";import"./FormControlLabel-bl7y3GIE.js";import"./UploadDocumentField-peVpVINM.js";import"./FileUpload-DKOeAzfh.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cj-P9EHs.js";import"./GridLegacy-BxQhFgCG.js";import"./ResearchProjectForm-DmsXJciW.js";import"./TextFieldWithWordLimit-D18I7uTY.js";import"./AuthenticatedRequirement-CmjmKTXc.js";import"./CertificationRequirement-Bgae8-qo.js";import"./TwoFactorAuthEnabledRequirement-tr11KLAy.js";import"./ValidationRequirement-B_-zB4I0.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CJwt-23-.js";import"./RejectDataAccessRequestModal-CcvvYGe5.js";import"./CannedRejectionDialog-Ak8zoXCZ.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Df53s-uK.js";import"./Checkbox-CwNW9pTm.js";import"./Grid-D-QY8BPo.js";import"./upperFirst-C00Qy1VY.js";import"./_stringToArray-eibs-JHe.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
