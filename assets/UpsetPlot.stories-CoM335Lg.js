import{U as L}from"./UpsetPlot-Cge8fiN4.js";import{f as u}from"./index-CiDZh0aJ.js";import"./jsx-runtime-J8LmzxcM.js";import"./index-w4KlfFGg.js";import"./iframe-DHjlMvoh.js";import"./LargeButton-Cu5zrbqy.js";import"./DefaultPropsProvider-HByegv8E.js";import"./createTheme-B5jDAUkm.js";import"./Button-D6Yeisf2.js";import"./ButtonBase-Zy6_PQlA.js";import"./useTimeout-rekSewsX.js";import"./TransitionGroupContext-BB2sJPj0.js";import"./useForkRef-en9h5boq.js";import"./useIsFocusVisible-B8GJ3ILl.js";import"./useEventCallback-X_1b1bFu.js";import"./useFiles-B_xSXmXR.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-CwskSrtE.js";import"./OrientationBanner-CWHRIU5l.js";import"./index-B3fXTnZS.js";import"./spreadSx-CwcO6WA9.js";import"./react-VPSgbN1X.js";import"./FullWidthAlert-C30KN8xJ.js";import"./Alert-BOZGohyZ.js";import"./resolveComponentProps-1wnzLdW_.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-V0KlQ9Vq.js";import"./Close-C6m_fk2M.js";import"./IconButton-B0ToW79y.js";import"./Paper-C_v3_MPZ.js";import"./Stack-Bj3ZSgf1.js";import"./getThemeProps-BfKvM1_V.js";import"./useTheme-BsYdX0yo.js";import"./Box-BKG1AAgH.js";import"./AlertTitle-BcNZm7Ru.js";import"./Typography-DQAlW-NO.js";import"./useTheme-CY7cQsuX.js";import"./Grow-CWiU5o6y.js";import"./index--NsX-5Ju.js";import"./utils-BXLLkLzq.js";import"./ClickAwayListener-lcK2grUT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-cjwU-86R.js";import"./index-DKtiQNKb.js";import"./useControlled-gac5YXq7.js";import"./useId-T5i9QPOu.js";import"./Popper-DjZO7_qd.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-BXg3aRdm.js";import"./useQuery-BtSCUure.js";import"./utils-Bd6kc1Ou.js";import"./Link-lo45V4bc.js";import"./Collapse-Btj7iVIY.js";import"./isNil-vqhrspiG.js";import"./_Uint8Array-CT7Ow10W.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BmVguDK8.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BXwvZ3xj.js";import"./_getTag-Cnzq9Q2L.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoU4kqmW.js";import"./Skeleton-DdI72mVD.js";import"./inputBaseClasses-CzksuyV9.js";import"./calculateFriendlyFileSize-DwPSXRtB.js";import"./CheckCircleTwoTone-CchasTxV.js";import"./InfoTwoTone-llY9trof.js";import"./useMutation-DyWBnHp3.js";import"./isEqual-CZA66GsT.js";import"./dayjs.min-lzyg-c11.js";import"./chunk-AYJ5UCUI-C31SFKF5.js";import"./cloneDeep-DoWg_E5X.js";import"./_initCloneObject-CdnCFk_k.js";import"./merge-BjSSQWzY.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BY6bcuvw.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DbV-KfB6.js";import"./Backdrop-CgHY3vm9.js";import"./LinearProgress-B5vA00ro.js";import"./index-DAoWD6bd.js";import"./index-C-gX22vc.js";import"./const-Doag8klc.js";import"./index-Cu4tbAzs.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
