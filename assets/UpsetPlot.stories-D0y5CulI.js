import{U as L}from"./UpsetPlot-B0BZkkpW.js";import{f as u}from"./index-Ct8vxixK.js";import"./jsx-runtime-DgXUeXrV.js";import"./index-DNYajJt4.js";import"./iframe-BFG7XEN4.js";import"./LargeButton-BnNdR1OB.js";import"./DefaultPropsProvider-D91nxuKE.js";import"./createTheme-BnR6VDwz.js";import"./Button-B8ygMq8k.js";import"./ButtonBase-kMafs3ZH.js";import"./useTimeout-Dwal47qt.js";import"./TransitionGroupContext-Ws1iJWHd.js";import"./useForkRef-EOHO42VY.js";import"./useIsFocusVisible-CYTOP6DT.js";import"./useEventCallback-DbNdZLPa.js";import"./useFiles-Ds9iGu-J.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BtzEZQ3v.js";import"./OrientationBanner-sEjzdHT2.js";import"./index-uBzytXzk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CASrN-wO.js";import"./FullWidthAlert-BmsStTN7.js";import"./Alert-Dq9dqTyO.js";import"./resolveComponentProps-CMpMeHlq.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-C0V79X_t.js";import"./Close-D1qDXkgU.js";import"./IconButton-TRF0fw9v.js";import"./Paper-Bb_IVGOL.js";import"./Stack-DGetwxNI.js";import"./getThemeProps-CTJSO-h_.js";import"./useTheme-0X8He3Jf.js";import"./Box-BiQ94yKd.js";import"./AlertTitle-BZxRqgba.js";import"./Typography-DOK0zznv.js";import"./useTheme-mp-WflMx.js";import"./Grow-GHNX6R_F.js";import"./index-BiPuD5mw.js";import"./utils-D11Cwa0K.js";import"./ClickAwayListener-6B2KNGGV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DBH8_9eY.js";import"./index-Dvgf8y9s.js";import"./useControlled-D24p52r-.js";import"./useId-kwxvaFuc.js";import"./Popper-BsXe8Yg0.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CTuOVL31.js";import"./utils-CCiraw5q.js";import"./Link-DvC6GJf8.js";import"./Collapse-B_wPnWsY.js";import"./isNil-D0hKcBfH.js";import"./_Uint8Array-D4QUxGuU.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C2bTK4BQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-HogoNuq1.js";import"./_getTag-DppqRXvs.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDgqfTrF.js";import"./Skeleton-BQOz6PNX.js";import"./inputBaseClasses-_yHk5MKC.js";import"./calculateFriendlyFileSize-C9Q8-tH3.js";import"./CheckCircleTwoTone-Rk5ugqpo.js";import"./InfoTwoTone-A0lNafO0.js";import"./useMutation-Bucg5_wJ.js";import"./isEqual-DO-FUjN-.js";import"./dayjs.min-BZYQtBUG.js";import"./chunk-AYJ5UCUI-B8ZPpuJL.js";import"./cloneDeep-DvGxmva1.js";import"./_initCloneObject-DJr2U3nk.js";import"./merge-BJhYPbVH.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BBZgoX5b.js";import"./Backdrop-D1hH5Yp6.js";import"./LinearProgress-BMSnEYF2.js";import"./index-Dgo9Pi8S.js";import"./index-CYDVxVb5.js";import"./const-Doag8klc.js";import"./index-D0XLhtq9.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
