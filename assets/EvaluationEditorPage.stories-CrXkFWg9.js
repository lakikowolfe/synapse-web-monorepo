import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-CCwNk76Y.js";import{E as d}from"./EvaluationEditorPage-D7tTHwHM.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DLHm-6aT.js";import"./ConfirmationDialog-DI-jktlk.js";import"./DialogBase-C7L5OOOB.js";import"./Close-DoMmdBed.js";import"./HelpPopover-D18mc-KU.js";import"./MarkdownPopover-hakBVyDP.js";import"./LightTooltip-CSSmAbKA.js";import"./MarkdownSynapse-y_5QBZZA.js";import"./SkeletonButton-CZc1MN4w.js";import"./SkeletonInlineBlock-Btd0x96s.js";import"./SkeletonTable-Cf4tCZO5.js";import"./SkeletonParagraph-BWcs457u.js";import"./CreatedOnByUserDiv-DOLhFPs2.js";import"./UserBadge-B-zNz6cJ.js";import"./useUserBundle-ByJxUt3x.js";import"./useSuspenseQuery-BX7AVyeT.js";import"./MenuItem-CXyqq271.js";import"./Card-BskzqbhS.js";import"./Chip-Dkm58cKd.js";import"./DateTimePicker-BCHa5mVY.js";import"./useMobilePicker-DJO8cQJu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CIqNM6mP.js";import"./index-BEhf0JCb.js";import"./ListItem-C3YTC5CM.js";import"./listItemButtonClasses-BY47SDXQ.js";import"./Tabs-CAuE5Cq-.js";import"./KeyboardArrowRight-C6cn59Ly.js";import"./CardContent-BDDaOWUI.js";import"./Grid-TPR8Sk9k.js";import"./upperFirst-DqbVGMA-.js";import"./_stringToArray-CXNPQeZC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
