import{U as L}from"./UpsetPlot-CO6-kdae.js";import{f as u}from"./index-Dz4u_ohE.js";import"./jsx-runtime-DYWFqpqM.js";import"./index-Bv77PzVz.js";import"./iframe-DEhSGEmg.js";import"./LargeButton-CH7vZRUi.js";import"./DefaultPropsProvider-B2pcTdWQ.js";import"./createTheme-Yej-3d8C.js";import"./Button-BhZloWmq.js";import"./createSimplePaletteValueFilter-Bvqb_Z9t.js";import"./useTimeout-AmYutYOy.js";import"./ButtonBase-ek6tw78a.js";import"./useForkRef-CxGmXGLP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcHwvJKl.js";import"./useFiles-DWLH1Lqk.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-BOpc9axU.js";import"./OrientationBanner-C1Y63T_x.js";import"./index-DjbSVj3W.js";import"./spreadSx-CwcO6WA9.js";import"./react-CJsDjOVT.js";import"./FullWidthAlert-CD1RQDi-.js";import"./Alert-DAuMTRZB.js";import"./useSlot-ChBMCmlE.js";import"./createSvgIcon-agjiu9Tx.js";import"./Close-DqVJ9Trk.js";import"./IconButton-pzF2VmY0.js";import"./Paper-BYm56sLl.js";import"./useTheme-CKTStrFl.js";import"./useTheme-71X__tjS.js";import"./Stack-Ck4ZleCV.js";import"./extendSxProp-BQJgYz58.js";import"./getThemeProps-C6yV65Co.js";import"./Box-D0xk7u0M.js";import"./AlertTitle-CuN0v1NM.js";import"./Typography-DULc9QVD.js";import"./index-BoIQx-DG.js";import"./ClickAwayListener-CCGNSMwG.js";import"./getReactElementRef-DdpE5Ax6.js";import"./index-BEeRGpTj.js";import"./index-A5B2XHd6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DxwgIlJV.js";import"./Tooltip-CmDC_tLV.js";import"./index-gfUR_RBn.js";import"./useControlled-Wg8dKAvl.js";import"./Popper-B0EUNtqP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-Cn_AzoCC.js";import"./utils-D7zvEuSp.js";import"./Link-COikdhoO.js";import"./Collapse-B0sVDV2H.js";import"./_baseUniq-C9HaMReR.js";import"./_Uint8Array-DeYtE0z3.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CZiXmveU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BxJZaRXJ.js";import"./isEqual-CD86U-iZ.js";import"./merge-BE6icoZI.js";import"./_initCloneObject-DdyDp4_5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-e7BhvPm8.js";import"./inputBaseClasses-D2FVY1i_.js";import"./calculateFriendlyFileSize-Bo0QvQei.js";import"./CheckCircleTwoTone-WZ_t0bYC.js";import"./InfoTwoTone-BHzOkU1y.js";import"./useMutation-B595Dkg-.js";import"./dayjs.min-IzSjKYgi.js";import"./chunk-AYJ5UCUI-BjhJpVgS.js";import"./cloneDeep-CrtDZzGk.js";import"./Skeleton-BwKgclz6.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DvSbkl-O.js";import"./Backdrop-DmORkJMd.js";import"./LinearProgress-DhXwxebN.js";import"./index-DMp6eTrd.js";import"./index-CojTeTkn.js";import"./index-CS-LkmOP.js";import"./const-Doag8klc.js";import"./index-_m86eA2S.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
