import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-DvoYBNiD.js";import{E as d}from"./EvaluationEditorPage-DCem-of8.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DGreOaok.js";import"./ConfirmationDialog-BbpYCSeJ.js";import"./DialogBase-lzCCYn9_.js";import"./Close-Bc0JSBY2.js";import"./HelpPopover-prgimuRN.js";import"./MarkdownPopover-Cg1db1MJ.js";import"./LightTooltip-CNKQ1XVV.js";import"./MarkdownSynapse-C-L_FMTC.js";import"./SkeletonButton-rl5nAPBn.js";import"./SkeletonInlineBlock-CrALH587.js";import"./SkeletonTable-h3HZ1dln.js";import"./SkeletonParagraph--j7cXsut.js";import"./CreatedOnByUserDiv-COyqr8kk.js";import"./UserBadge-CEUD_xnv.js";import"./useUserBundle-vsDX1dLg.js";import"./useSuspenseQuery-TSKBM31X.js";import"./MenuItem-DULlt_2w.js";import"./Card-BoGx4zp2.js";import"./Chip-Qo99dBLS.js";import"./DateTimePicker-DyWv1y3c.js";import"./useMobilePicker-cc3UAohf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-knHuLBlT.js";import"./index-CMAWu6FN.js";import"./ListItem-t_AmmaOm.js";import"./listItemButtonClasses-CS_ISlq4.js";import"./Tabs-CCXd4I9c.js";import"./KeyboardArrowRight-DILHsNiK.js";import"./CardContent-DbrKI6nI.js";import"./Grid-BPvFFemK.js";import"./upperFirst-DCPLju7B.js";import"./_stringToArray-DvtFjo6X.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id\`, () => {
        return HttpResponse.json({
          id: '9614712',
          etag: 'a2b871cb-faa4-471a-8c23-b917c77fecb2',
          name: 'a',
          description: 'b',
          ownerId: MOCK_USER_ID.toString(),
          createdOn: '2021-03-02T22:16:14.552Z',
          contentSource: 'syn5585645',
          submissionInstructionsMessage: 'c',
          submissionReceiptMessage: 'c'
        }, {
          status: 200
        });
      }), http.post(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/round/list\`, () => {
        return HttpResponse.json({
          page: [
          // Ended
          {
            id: '259',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: '2022-11-27T08:00:00.000Z',
            roundEnd: '2022-11-30T08:00:00.000Z'
          },
          // Ongoing
          {
            id: '260',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().subtract(1, 'day').toISOString(),
            roundEnd: dayjs().add(2, 'day').toISOString()
          },
          // Future
          {
            id: '261',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().add(1, 'week').toISOString(),
            roundEnd: dayjs().add(2, 'week').toISOString()
          }]
        }, {
          status: 200
        });
      })]
    }
  },
  args: {
    evaluationId: '9614712'
  }
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
