import{U as L}from"./UpsetPlot-CHnbDgZA.js";import{f as u}from"./index-Dck-Kp0-.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CXk-FWBT.js";import"./DefaultPropsProvider-C2HhMOKj.js";import"./createTheme-BD-SoLjD.js";import"./index-C53BhZP8.js";import"./iframe-Cvn1CpwI.js";import"./Button-B9y5SAJO.js";import"./createSimplePaletteValueFilter-CB0cbmKV.js";import"./useTimeout-Bv6YmAp5.js";import"./ButtonBase-BYf4RcHP.js";import"./useForkRef-CNZ3p3X0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Clwzq0Gd.js";import"./useFiles-Bu7LMQiG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CAHPBJM2.js";import"./OrientationBanner-D20UWKCy.js";import"./index-CHRKc7Me.js";import"./spreadSx-CwcO6WA9.js";import"./react-CI6DqbZ9.js";import"./FullWidthAlert-DEwvacYo.js";import"./Alert-CIN1f2gN.js";import"./useSlot-CjpUEZLw.js";import"./createSvgIcon-DvFBqQbS.js";import"./Close-Co3nFtZ3.js";import"./IconButton-CcjiQn_Y.js";import"./Paper-D2zgTwzo.js";import"./useTheme-BwdMo-wV.js";import"./useTheme-D3fydmcm.js";import"./Stack-CjwfZ6iZ.js";import"./extendSxProp-XPZEzUfX.js";import"./getThemeProps-CMdm_6rw.js";import"./Box-fj6Y8aC6.js";import"./AlertTitle-B6i-rp9E.js";import"./Typography-Dic5pSaj.js";import"./index-Bzb8KmWv.js";import"./ClickAwayListener-BP6ck353.js";import"./getReactElementRef-DkCkETYF.js";import"./index-6OWYtd6e.js";import"./index-c00cAjas.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-yQ0dz_Uo.js";import"./Tooltip-ChJXKMz1.js";import"./index-L0RnLnF9.js";import"./useControlled-BpEf1Ti3.js";import"./Popper-Ch3O4PLA.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-jylX0jRs.js";import"./QueryClientProvider-leiBbqUo.js";import"./Link-Bhcv7JYy.js";import"./Collapse-Bel5vaKV.js";import"./_baseUniq-CFvBV96o.js";import"./_Uint8Array-BmrfN4JG.js";import"./isArray-C3L0d1QQ.js";import"./_getTag-DDgx_p-c.js";import"./isEqual-DHNHQaNN.js";import"./merge-CGh2bkth.js";import"./_initCloneObject-REImA5o8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CyFro7_y.js";import"./inputBaseClasses-CXJnUP_4.js";import"./calculateFriendlyFileSize-s5Z576be.js";import"./CheckCircleTwoTone-DQSQAPea.js";import"./InfoTwoTone-DET7zeyV.js";import"./useMutation-y6Ia0GTL.js";import"./dayjs.min-C1YSGxUe.js";import"./chunk-AYJ5UCUI-wTSMJf65.js";import"./cloneDeep-DsMMzjHx.js";import"./Skeleton-D9wi0HLZ.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D0YHA9nj.js";import"./Backdrop-DYpH1-vM.js";import"./LinearProgress-Ca8vskYZ.js";import"./index-pz8OUr1z.js";import"./index-Cqvmz-aO.js";import"./index-BCGYONAa.js";import"./const-BP60AzNb.js";import"./index-DOHxVFmM.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
