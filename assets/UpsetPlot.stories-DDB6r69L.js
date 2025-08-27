import{U as L}from"./UpsetPlot-qaaZlHXT.js";import{f as u}from"./index-DL-yO-yj.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BRxpQc97.js";import"./DefaultPropsProvider-BNDjYtxm.js";import"./createTheme-Dv7X0J9j.js";import"./index-_ua7RM_J.js";import"./iframe-CCwUWes3.js";import"./Button-wJp7XZ08.js";import"./createSimplePaletteValueFilter-FtuzOVjX.js";import"./useTimeout-wlETIuGB.js";import"./ButtonBase-LPkH4HSZ.js";import"./useForkRef-C1MctNYz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-_lDF_zul.js";import"./useFiles-B8iGcL8P.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-Bv2LGAGS.js";import"./OrientationBanner-wBgvkm2W.js";import"./index-DbC0eqpV.js";import"./spreadSx-CwcO6WA9.js";import"./react-BWYrhhjR.js";import"./FullWidthAlert-DcJ9uPE2.js";import"./Alert-DjkyZCFm.js";import"./useSlot-DBwew2p8.js";import"./createSvgIcon-OIdd5Six.js";import"./Close-CaJrz68S.js";import"./IconButton-CdyPjgo2.js";import"./Paper-Dmx9m8f5.js";import"./useTheme-CojY1kid.js";import"./useTheme-C6oZUq1l.js";import"./Stack-BuPBuKY_.js";import"./extendSxProp-4uqTjkOV.js";import"./getThemeProps-CMOKEKiQ.js";import"./Box-N4f6UJDY.js";import"./AlertTitle-Hq4Mb2ZI.js";import"./Typography-DWjuxWu_.js";import"./index-CoFUKuJt.js";import"./ClickAwayListener-CdBsin_O.js";import"./getReactElementRef-CjQV4kKN.js";import"./index-D73yXCfo.js";import"./index-DEInpL0e.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BjCBc5iQ.js";import"./Tooltip-Dg50xbUf.js";import"./index-BvY2XDNC.js";import"./useControlled-CxUENiZe.js";import"./Popper-CbkkVKai.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-BL_vVSiq.js";import"./QueryClientProvider-BxQiManm.js";import"./Link-CAfSbLTK.js";import"./Collapse-mizudac_.js";import"./_baseUniq-DvOGz5Z9.js";import"./_Uint8Array-CietwWHa.js";import"./isArray-CbiaBtQK.js";import"./_getTag-CmAat0Gn.js";import"./isEqual-BhBHzLP9.js";import"./merge-DMLXSLKL.js";import"./_initCloneObject-Cs3pao6J.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BkzJEMXy.js";import"./inputBaseClasses-BHiDCPXF.js";import"./calculateFriendlyFileSize-B27X_PhU.js";import"./CheckCircleTwoTone-CcxG3Ig0.js";import"./InfoTwoTone-B607NJn4.js";import"./useMutation-DoJgCRvH.js";import"./dayjs.min-D5j2OpQt.js";import"./chunk-AYJ5UCUI-DEmbKjED.js";import"./cloneDeep-CLwgqcCI.js";import"./Skeleton-DLKQK3Ge.js";import"./SqlFunctions-zz0CCrj4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-7t2iro7D.js";import"./Backdrop-BP1IcGfr.js";import"./LinearProgress-B2H4SJJq.js";import"./index-DGRwqYAl.js";import"./index-CW9VJ2Xe.js";import"./index-Dz21wIzF.js";import"./const-BP60AzNb.js";import"./index-B9GbfRf6.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
