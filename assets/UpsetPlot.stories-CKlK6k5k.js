import{U as L}from"./UpsetPlot-APLshWNX.js";import{f as u}from"./index-C2rgkYMn.js";import"./jsx-runtime-K2fqsMI1.js";import"./index-BF-TFGr6.js";import"./iframe-CduSda18.js";import"./LargeButton-B0R814nI.js";import"./DefaultPropsProvider-pkj_z4mc.js";import"./createTheme-fNsUonXl.js";import"./Button-JCjg7Upf.js";import"./ButtonBase-HHO57Pnd.js";import"./useTimeout-DI2Gx5la.js";import"./TransitionGroupContext-OzWqrcBy.js";import"./useForkRef-WQZqeZhB.js";import"./useIsFocusVisible-RY2eniDj.js";import"./useEventCallback-b14gmjlt.js";import"./useFiles-Z5-hGPsU.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-B_tgEFoi.js";import"./OrientationBanner-CxPcUhkX.js";import"./index-BYwNUEh3.js";import"./spreadSx-CwcO6WA9.js";import"./react-pB_ySTRt.js";import"./FullWidthAlert-C7tYBYpO.js";import"./Alert-DoLuuX1K.js";import"./resolveComponentProps-DvJnYw6b.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CRycykR-.js";import"./Close-CtnschHy.js";import"./IconButton-yNyfERvq.js";import"./Paper-CBPY2_ME.js";import"./Stack-w5S_lSZ-.js";import"./getThemeProps-BpHqemHI.js";import"./useTheme-BV4ngjpd.js";import"./Box-B5j1LXc8.js";import"./AlertTitle-CJo_OcY2.js";import"./Typography-Cs0IiwfE.js";import"./useTheme-BnvDC3Cc.js";import"./Grow-teO_iWl5.js";import"./index-DVGoONCX.js";import"./utils-Bcb2eLt2.js";import"./ClickAwayListener-BndowNQw.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BcdnjFX2.js";import"./index-v-kyJxW4.js";import"./useControlled-DbZ2ahWR.js";import"./useId-DYwP7KU_.js";import"./Popper-dJS5SO_Y.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-KKIcYF_X.js";import"./utils-DIfgLFBq.js";import"./Link-Dbnlm_65.js";import"./Collapse-POhtEGak.js";import"./isNil-Bpym3iET.js";import"./_Uint8Array-Qe-AOk_D.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D9T7B50e.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DHB_eETG.js";import"./_getTag-B3HsDC7G.js";import"./tinycolor-Begke6kS.js";import"./Fade-NKvmRFmW.js";import"./Skeleton-ioLcvLoL.js";import"./inputBaseClasses-BDlfCoGX.js";import"./calculateFriendlyFileSize-B889KYnv.js";import"./CheckCircleTwoTone-xHXjx-id.js";import"./InfoTwoTone-G73G5jpY.js";import"./mutation-BvTYFNUq.js";import"./dayjs.min-Dlwyit3L.js";import"./chunk-AYJ5UCUI-By9W3JJY.js";import"./cloneDeep-BVPhsa5y.js";import"./_initCloneObject-C68wD5Vv.js";import"./isEqual-DMqmt8Qo.js";import"./merge-B9RYE8Kl.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-BLzpoOon.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D0Lclv58.js";import"./Backdrop-CkWOUxEa.js";import"./LinearProgress-BBQJBK3V.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
