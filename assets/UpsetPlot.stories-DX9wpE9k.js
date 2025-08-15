import{U as L}from"./UpsetPlot-BDl_pTnz.js";import{f as u}from"./index-B3jPnZrg.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CRY1VAsK.js";import"./DefaultPropsProvider-B7piOXtX.js";import"./createTheme-CNm8Y-1J.js";import"./index-1Uc_eVY1.js";import"./iframe-BQnb1gjJ.js";import"./Button-Dh8lWdQv.js";import"./createSimplePaletteValueFilter-CUb_7v8W.js";import"./useTimeout-FPNZb3DU.js";import"./ButtonBase-b7aSDYLa.js";import"./useForkRef-BtFq_l26.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CmUNzBU3.js";import"./useFiles-DLXFal_X.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DbkhDeAR.js";import"./OrientationBanner-D0d768pM.js";import"./index-BSXFsYyR.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLVSYXXU.js";import"./FullWidthAlert-CUJZvXhp.js";import"./Alert-CitiumEa.js";import"./useSlot-CoTRl55I.js";import"./createSvgIcon-BSBxXRvm.js";import"./Close-gJa7yj_J.js";import"./IconButton-CBgFWAGZ.js";import"./Paper-C3rBidsJ.js";import"./useTheme-BiB50Sfs.js";import"./useTheme-C50vd0HS.js";import"./Stack-CCxGCF3I.js";import"./extendSxProp-BzWV0Xzd.js";import"./getThemeProps-C5iK4XS1.js";import"./Box-BRV-43gQ.js";import"./AlertTitle-BQNqwUU3.js";import"./Typography-D8A0cTAg.js";import"./index-Cy7yRSoV.js";import"./ClickAwayListener-JBjPr4Pj.js";import"./getReactElementRef-B7_Rapqe.js";import"./index-G_C3QZev.js";import"./index-CvBeCTPO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DCPUL9L1.js";import"./Tooltip-BJeU3PTL.js";import"./index-ri-uGLIv.js";import"./useControlled-CMwf4G1L.js";import"./Popper-DeYw2bmc.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BiEFIXkE.js";import"./QueryClientProvider-ClDBJHBv.js";import"./Link-jBWEo9x-.js";import"./Collapse-Of-bT-XP.js";import"./_baseUniq-BhYHH9l1.js";import"./_Uint8Array-Cdhm8lIV.js";import"./isArray-ujt6FPEz.js";import"./_getTag-C_GqoGg0.js";import"./isEqual-DFclNyKn.js";import"./merge-Dgt318io.js";import"./_initCloneObject-SA0OKzV5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPBJHg1f.js";import"./inputBaseClasses-C9yqRtoq.js";import"./calculateFriendlyFileSize-DiHasolk.js";import"./CheckCircleTwoTone-DHxCdOti.js";import"./InfoTwoTone-BUMNGj87.js";import"./useMutation-HUFEil92.js";import"./dayjs.min-BuEKwDL8.js";import"./chunk-AYJ5UCUI-CYvl8rK-.js";import"./cloneDeep-3yRSmLqQ.js";import"./Skeleton-C5gDPkTB.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Clx8hWUR.js";import"./Backdrop-DbaoBEBe.js";import"./LinearProgress-CkluuGP1.js";import"./index-B1t3azDk.js";import"./index-CSWZb9fk.js";import"./index-DNhzQnzN.js";import"./const-BP60AzNb.js";import"./index-Cf16stVv.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
