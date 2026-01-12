import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DvoYBNiD.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CZ6346A-.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BAiA-ZaF.js";import"./useAccessRequirements-DcwEZM-2.js";import"./index-CMAWu6FN.js";import"./_baseOrderBy-BnyrwHOF.js";import"./_baseIteratee-C2VihgZa.js";import"./_baseMap-GSBEYVyh.js";import"./_baseEach-Byx7O7Em.js";import"./useQueries-H3vjvQPa.js";import"./useInfiniteQuery-DDXlKMJO.js";import"./groupBy-Bg6IZRI-.js";import"./_createAggregator-BM9Opdae.js";import"./DialogBase-lzCCYn9_.js";import"./Close-Bc0JSBY2.js";import"./HelpPopover-prgimuRN.js";import"./MarkdownPopover-Cg1db1MJ.js";import"./LightTooltip-CNKQ1XVV.js";import"./MarkdownSynapse-C-L_FMTC.js";import"./SkeletonButton-rl5nAPBn.js";import"./SkeletonInlineBlock-CrALH587.js";import"./SkeletonTable-h3HZ1dln.js";import"./SkeletonParagraph--j7cXsut.js";import"./EntityLink-B6ZEaVm_.js";import"./useEntity-DEMnyQ3z.js";import"./pickBy-CPmP6JaB.js";import"./isString-C7Qxkgt4.js";import"./useSuspenseQuery-TSKBM31X.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dyaf_AgV.js";import"./useGetEntityHeaders-8tlnMzBr.js";import"./EntityIcon-BPUhgYRE.js";import"./ErrorChip-G-hSIE0i.js";import"./Chip-Qo99dBLS.js";import"./UserOrTeamBadge-C1woi-M7.js";import"./UserBadge-CEUD_xnv.js";import"./useUserBundle-vsDX1dLg.js";import"./MenuItem-DULlt_2w.js";import"./Card-BoGx4zp2.js";import"./TeamBadge-DYzqkOvY.js";import"./UnmanagedACTAccessRequirementItem-D5o6kQYl.js";import"./RequirementItem-BQb3Qm_v.js";import"./LockTwoTone-DQgC0qMT.js";import"./UserSearchBoxV2-CZDPbJnQ.js";import"./useDebouncedEffect-mi9YdSvH.js";import"./use-deep-compare-effect.esm-CFWlAvyU.js";import"./uniq-B6BenvlG.js";import"./without-XsWpL-41.js";import"./Select-aab027f3.esm-OtH7ivmn.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-D91ts9j_.js";import"./SelfSignAccessRequirementItem-DFQ9hB3Q.js";import"./DataAccessRequestAccessorsFilesForm-DQwoYFMU.js";import"./enums-DvTbjZOn.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Cks6khdC.js";import"./RadioGroup-BB0UZspt.js";import"./Radio-BmR6OloX.js";import"./SwitchBase-GfkoXiNz.js";import"./FormGroup-CiGpQOQ4.js";import"./FormControlLabel-DvUE49P8.js";import"./UploadDocumentField-D8K1uOhh.js";import"./FileUpload-4B6aVOYP.js";import"./ManagedACTAccessRequirementFormWikiWrapper-0Ghsj71l.js";import"./GridLegacy-CrMQBMgK.js";import"./ResearchProjectForm-Be-X_N1d.js";import"./TextFieldWithWordLimit-CuYcN8lK.js";import"./AuthenticatedRequirement-CQ16jlOe.js";import"./CertificationRequirement-DTKbOx7T.js";import"./TwoFactorAuthEnabledRequirement-_5HuFwiH.js";import"./ValidationRequirement-CKgNotH_.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-yLWsQ3AA.js";import"./RejectDataAccessRequestModal-C2Uf-NI9.js";import"./CannedRejectionDialog-CjqULhxg.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BbpYCSeJ.js";import"./Checkbox-CZEsGXk1.js";import"./Grid-BPvFFemK.js";import"./upperFirst-DCPLju7B.js";import"./_stringToArray-DvtFjo6X.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
