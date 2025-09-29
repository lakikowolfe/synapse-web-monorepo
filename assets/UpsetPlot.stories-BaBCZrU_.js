import{U as L}from"./UpsetPlot-BqwCTzLn.js";import{f as u}from"./index-IS_653A0.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CifIZ7vr.js";import"./DefaultPropsProvider-Kvbw7Qnp.js";import"./createTheme-DZxfvGuT.js";import"./index-BOnT2B31.js";import"./iframe-DpbROzyC.js";import"./Button-fS8A6UeN.js";import"./createSimplePaletteValueFilter-BhobKFyN.js";import"./useTimeout-BO4CYCW3.js";import"./ButtonBase-KvBlRtOG.js";import"./useForkRef-s6AkVtM1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W0PqCyay.js";import"./useFiles-B6AFxzzh.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-LoQQRkA3.js";import"./OrientationBanner-anD7LyV2.js";import"./index-OUKVSNpz.js";import"./spreadSx-CwcO6WA9.js";import"./react-BNYXaJhL.js";import"./FullWidthAlert-ZMxoubS1.js";import"./Alert-nk4kzgt0.js";import"./useSlot-B65lHdsv.js";import"./createSvgIcon-BGfGvUpT.js";import"./Close-uDT23R7X.js";import"./IconButton-CAjCQ32j.js";import"./Paper-DOb69HxN.js";import"./useTheme-CZM24MID.js";import"./useTheme-BVyCU4zd.js";import"./Stack-qs2k7b9p.js";import"./extendSxProp-BLySzOF7.js";import"./getThemeProps-h4L2MJio.js";import"./Box-CxuL5sm2.js";import"./AlertTitle-CTbuirBl.js";import"./Typography-C_sJKJbQ.js";import"./index-CpGMUOtn.js";import"./ClickAwayListener-Bh2wWlDC.js";import"./getReactElementRef-DlmZGwTe.js";import"./index-D6saAtTK.js";import"./index-BoVGBxJQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DocbsSlT.js";import"./Tooltip-CSwsquKH.js";import"./index-BZfVTL3P.js";import"./useControlled-D7MA9vyU.js";import"./Popper-Ckc_p83Q.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BkZ_yCIb.js";import"./QueryClientProvider-BhO8GH7N.js";import"./Link-Bxs-TvhH.js";import"./Collapse-BOgW-lYr.js";import"./_baseUniq-BKWx_RjF.js";import"./_Uint8Array-kwRcGX1J.js";import"./isArray-BOKSIQNM.js";import"./_getTag-XZCmnhGR.js";import"./isEqual-BboHBSTX.js";import"./merge-Ti5txTw0.js";import"./_initCloneObject-CDbuozmF.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CVezgcTc.js";import"./inputBaseClasses-CSVb0CMN.js";import"./calculateFriendlyFileSize-BgPXj7NU.js";import"./CheckCircleTwoTone-Byver7Ar.js";import"./InfoTwoTone-BrDLq8Q7.js";import"./useMutation-B4uIVdcz.js";import"./dayjs.min-DYMG4jJC.js";import"./chunk-AYJ5UCUI-CIPY0pky.js";import"./cloneDeep-nYJAO3GR.js";import"./Skeleton-3xP11vVd.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-AdD9rWNe.js";import"./Backdrop-7m-QGpy7.js";import"./LinearProgress-Cq58IrQR.js";import"./index-CiZmU9_C.js";import"./index-DKUd3zQm.js";import"./index-o99LDk0b.js";import"./const-BP60AzNb.js";import"./index-Bf09Azhy.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
