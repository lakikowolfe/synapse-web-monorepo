import{U as L}from"./UpsetPlot-DJd5BpyX.js";import{f as u}from"./index-hKpr4Omn.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-_iVqggJv.js";import"./DefaultPropsProvider-BWZVoNQD.js";import"./createTheme-C70pto1P.js";import"./index-CQ_4abnw.js";import"./iframe-8YCJMRqG.js";import"./Button-C8asOJJ9.js";import"./createSimplePaletteValueFilter-BHN_6Cm0.js";import"./useTimeout-CE3vuiaQ.js";import"./ButtonBase-Bpx7kPUp.js";import"./useForkRef-COfw2awo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BNoOsuWz.js";import"./useFiles-BhepqCJ_.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-CPG_-dF9.js";import"./OrientationBanner-KTqOsktd.js";import"./index-BGTqnpDM.js";import"./spreadSx-CwcO6WA9.js";import"./react-c40rAc90.js";import"./FullWidthAlert-CcNa6u-N.js";import"./Alert-CLwQPuUq.js";import"./useSlot-DRpfB6nJ.js";import"./createSvgIcon-DMhl2Z0V.js";import"./Close-B7LZsPq0.js";import"./IconButton-D_USAq1B.js";import"./Paper-BtUvorA0.js";import"./useTheme-Gj-raE8f.js";import"./useTheme-DVUR6C4x.js";import"./Stack-CdkXXRAJ.js";import"./extendSxProp-BQjQQvTo.js";import"./getThemeProps-5ghkHmB8.js";import"./Box-C-0GvfO7.js";import"./AlertTitle-D8sZMUjV.js";import"./Typography-COKbE9F_.js";import"./index-CQr2p3YM.js";import"./ClickAwayListener-CxamgXc3.js";import"./getReactElementRef-jQKT_OT7.js";import"./index-cH2dSFXP.js";import"./index-ELxRi61y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-GdTSHW1W.js";import"./Tooltip-BJ97YRQ0.js";import"./index-BwQAWK1V.js";import"./useControlled-DQXwrQKp.js";import"./Popper-WgzfoB-g.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CiR8cJtv.js";import"./QueryClientProvider-B3KQpPGk.js";import"./Link-Bndxo0ry.js";import"./Collapse-BzPi4MpR.js";import"./_baseUniq-CKr-aF0H.js";import"./_Uint8Array-DBi96NjI.js";import"./isArray-BvA8z7gR.js";import"./_getTag-E9XwGR1D.js";import"./isEqual-B_nR9CbE.js";import"./merge-DjcSGyFU.js";import"./_initCloneObject-BXwebgKA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDU_rISg.js";import"./inputBaseClasses-D73qyTvX.js";import"./calculateFriendlyFileSize-Clyn3Gmt.js";import"./CheckCircleTwoTone-Cnd4LgDH.js";import"./InfoTwoTone-DdrJ6n1e.js";import"./useMutation-C0fTyqD8.js";import"./dayjs.min-BJNwFXiM.js";import"./chunk-AYJ5UCUI-BI54EPi0.js";import"./cloneDeep-CFihcmAw.js";import"./Skeleton-CV6z7hQ2.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DUeikv8g.js";import"./Backdrop-IET3O8gD.js";import"./LinearProgress-Co45-mY6.js";import"./index-DC2GBu2-.js";import"./index-CFwoB4ZB.js";import"./index-BWkZpg-n.js";import"./const-BP60AzNb.js";import"./index-BD8nUbc7.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
