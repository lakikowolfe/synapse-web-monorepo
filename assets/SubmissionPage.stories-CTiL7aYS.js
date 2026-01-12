import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-CCwNk76Y.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-lxe0Fijm.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DM9txX0k.js";import"./useAccessRequirements-Bh9bujSa.js";import"./index-BEhf0JCb.js";import"./_baseOrderBy-BXVexttL.js";import"./_baseIteratee-F9qPnzzH.js";import"./_baseMap-D6vqmCJk.js";import"./_baseEach-BlvBxLnz.js";import"./useQueries-C_TnSIRo.js";import"./useInfiniteQuery-BLb_KQ8Z.js";import"./groupBy-hCoMwbWx.js";import"./_createAggregator-ojc8ACw-.js";import"./DialogBase-C7L5OOOB.js";import"./Close-DoMmdBed.js";import"./HelpPopover-D18mc-KU.js";import"./MarkdownPopover-hakBVyDP.js";import"./LightTooltip-CSSmAbKA.js";import"./MarkdownSynapse-y_5QBZZA.js";import"./SkeletonButton-CZc1MN4w.js";import"./SkeletonInlineBlock-Btd0x96s.js";import"./SkeletonTable-Cf4tCZO5.js";import"./SkeletonParagraph-BWcs457u.js";import"./EntityLink-0ChKafln.js";import"./useEntity-C4C1UydU.js";import"./pickBy-DCC_i3uh.js";import"./isString-CbBGTrSD.js";import"./useSuspenseQuery-BX7AVyeT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BS1z4KbJ.js";import"./useGetEntityHeaders-CRGFJp1A.js";import"./EntityIcon-YoSYm6xu.js";import"./ErrorChip-BTnLGfmQ.js";import"./Chip-Dkm58cKd.js";import"./UserOrTeamBadge-oGDZ0VX7.js";import"./UserBadge-B-zNz6cJ.js";import"./useUserBundle-ByJxUt3x.js";import"./MenuItem-CXyqq271.js";import"./Card-BskzqbhS.js";import"./TeamBadge-DekhYpS0.js";import"./UnmanagedACTAccessRequirementItem-DQ69hDiH.js";import"./RequirementItem-BfgLmppY.js";import"./LockTwoTone-DeAlH4Wl.js";import"./UserSearchBoxV2-B_yctYZp.js";import"./useDebouncedEffect-omTOKvcB.js";import"./use-deep-compare-effect.esm-uCkcZvw_.js";import"./uniq-DqRYO00W.js";import"./without-BmpUnbN6.js";import"./Select-aab027f3.esm-D4_JpAXU.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-fyjNtCyh.js";import"./SelfSignAccessRequirementItem-DvHhag25.js";import"./DataAccessRequestAccessorsFilesForm-CeYW_Muj.js";import"./enums-B1CGbZSG.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BYumRdb6.js";import"./RadioGroup-DeR7-uUz.js";import"./Radio-h-W8U7wE.js";import"./SwitchBase-CCLXZP7p.js";import"./FormGroup-B8gquKDe.js";import"./FormControlLabel-BXiw324X.js";import"./UploadDocumentField-yevTh2g4.js";import"./FileUpload-BN33IG-8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CBmZWOI6.js";import"./GridLegacy-BJxWVL3o.js";import"./ResearchProjectForm-Bl4Nf0NT.js";import"./TextFieldWithWordLimit-D-zOjxGU.js";import"./AuthenticatedRequirement-CIqnHhgp.js";import"./CertificationRequirement-CTqJ-ev0.js";import"./TwoFactorAuthEnabledRequirement-tAeMEpoo.js";import"./ValidationRequirement-DEIqJsY9.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BCt2FHnk.js";import"./RejectDataAccessRequestModal-DcAeM0VW.js";import"./CannedRejectionDialog-2EcEikgr.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DI-jktlk.js";import"./Checkbox-BiFNATGA.js";import"./Grid-TPR8Sk9k.js";import"./upperFirst-DqbVGMA-.js";import"./_stringToArray-CXNPQeZC.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
