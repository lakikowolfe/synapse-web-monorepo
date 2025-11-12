import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-Dq0ovNdT.js";import{r as l}from"./mockHomepageQueryResultData-hPH-29vl.js";import{b as c}from"./SynapseHomepageV2-DnJ8sxLP.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-D73A7HrQ.js";import"./SynapsePlans-peW-pMLD.js";import"./index-CICGBpvz.js";import"./Plot-DnXx5PaI.js";import"./index-Chjiymov.js";import"./Card-DomhAkD6.js";import"./Chip-Dvm89NDk.js";import"./index-DTP0DXs6.js";import"./SynapseNavDrawer-BaH2NSSv.js";import"./useDataAccessSubmission-C2yPrXev.js";import"./useInfiniteQuery-32AmjFc-.js";import"./useDownloadList-DXtMylnV.js";import"./waitForAsyncResult-C-7OIC8b.js";import"./CreateProjectModal-BvEmXbCm.js";import"./ConfirmationDialog-Df53s-uK.js";import"./DialogBase-Cvjq7Dv5.js";import"./Close-BVVEO4rC.js";import"./HelpPopover-CbiRGPMZ.js";import"./MarkdownPopover-BcAA2VMT.js";import"./LightTooltip-5n4PTZp6.js";import"./MarkdownSynapse-CjeUGBpw.js";import"./SkeletonButton-CVWmDoUn.js";import"./SkeletonInlineBlock-CdycSzNS.js";import"./SkeletonTable-CZ5dFOqb.js";import"./SkeletonParagraph-VtSaKYcR.js";import"./SynapseHomepageNavBar-Bt_I_kQh.js";import"./SageResourcesPopover-CdTE6v6h.js";import"./Grid-D-QY8BPo.js";import"./MenuItem-DkoZAmqe.js";import"./UserBadge-C9WWvzHZ.js";import"./Slide-DSLWLSkT.js";import"./InputAdornment-Djj3Fasx.js";import"./listItemButtonClasses-C4BzSnGN.js";import"./Badge-BYuiJbx5.js";import"./usePreviousProps-DYWR85x3.js";import"./useGetEntityHeaders-fc-ATOrk.js";import"./NavigateNext-Bzbpwz9a.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    gotoPlace: (href: string) => {
      window.alert(\`SynapseHomepageV2 calling back to change route to \${href}\`);
    }
  },
  loaders: [() => {
    registerSynapseHomepageMockQueries();
  }],
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0'
    },
    msw: {
      handlers: [...getFileHandlers(MOCK_REPO_ORIGIN), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), getFeatureFlagsOverride({
        portalOrigin: PRODUCTION_ENDPOINT_CONFIG.PORTAL,
        overrides: {
          [FeatureFlagEnum.HOMEPAGE_CHATBOT]: true
        }
      })]
    }
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const oe=["DemoVersion2"];export{e as DemoVersion2,oe as __namedExportsOrder,re as default};
