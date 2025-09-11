import{U as L}from"./UpsetPlot-D5A7eIPT.js";import{f as u}from"./index-DMpV4slN.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BkuD1Y_1.js";import"./DefaultPropsProvider-Hvyn696A.js";import"./createTheme-C2T5h-83.js";import"./index-CJTOsSPC.js";import"./iframe-Dd7u0VpD.js";import"./Button-CkxOqHsQ.js";import"./createSimplePaletteValueFilter-COVIpNOp.js";import"./useTimeout-Bza7oBhH.js";import"./ButtonBase-DuLGVV-J.js";import"./useForkRef-DUmGpmyr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BLDsdi-s.js";import"./useFiles-CyBcMZHS.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-ASFCM7Ww.js";import"./OrientationBanner-B3ssqBiM.js";import"./index-cqnCbW4t.js";import"./spreadSx-CwcO6WA9.js";import"./react-CdW3PxEg.js";import"./FullWidthAlert-BJilBWIN.js";import"./Alert-CIsfmHNh.js";import"./useSlot-nP4Zk3Iq.js";import"./createSvgIcon-F3Y5RxQg.js";import"./Close-OCLtD2ix.js";import"./IconButton-Cki87y21.js";import"./Paper-DONo8Upe.js";import"./useTheme-BbCAWFxt.js";import"./useTheme-DCz0mdMu.js";import"./Stack-HrePce9B.js";import"./extendSxProp-BEp23Kv4.js";import"./getThemeProps-B5BOBScs.js";import"./Box-C6ZcRLgh.js";import"./AlertTitle-BCzeRpaL.js";import"./Typography-Dil5DNBP.js";import"./index-BsQu4-UU.js";import"./ClickAwayListener-CLWsDWIQ.js";import"./getReactElementRef-C8kRQNY-.js";import"./index-ClIqjNg8.js";import"./index-DYANzCZO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DKIdI1nH.js";import"./Tooltip-CwHJ2Ovs.js";import"./index-DX2Kul0x.js";import"./useControlled-6BfN5IB5.js";import"./Popper-DeXHkWF5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-BlgSxevE.js";import"./QueryClientProvider-CWLbqL56.js";import"./Link-BexGjm3B.js";import"./Collapse-DQEDekLN.js";import"./_baseUniq-D0DEGSFQ.js";import"./_Uint8Array-BzEOgZyv.js";import"./isArray-BXTnkRSJ.js";import"./_getTag-DM9TvJQS.js";import"./isEqual-Sg7VmSfq.js";import"./merge-DFdCtFjH.js";import"./_initCloneObject-Bqx55jMf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLBw8ob2.js";import"./inputBaseClasses-BfI4S3Jn.js";import"./calculateFriendlyFileSize-BII3Y8_i.js";import"./CheckCircleTwoTone-DR42jZ8T.js";import"./InfoTwoTone-CtPfwYmq.js";import"./useMutation-BjcKnYmp.js";import"./dayjs.min-DxXv0W1a.js";import"./chunk-AYJ5UCUI-G9Kj3eWZ.js";import"./cloneDeep-DSye7UDc.js";import"./Skeleton-BrZGpT9D.js";import"./SqlFunctions-DQ27hT8m.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DBfDInBT.js";import"./Backdrop-IlqHfnuC.js";import"./LinearProgress-BcTfHWeK.js";import"./index-DtR4swSW.js";import"./index-74F4gpJC.js";import"./index-DzjdlL1E.js";import"./const-BP60AzNb.js";import"./index-Bk2xuQNW.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
