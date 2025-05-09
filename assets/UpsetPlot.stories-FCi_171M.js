import{U as L}from"./UpsetPlot-BmLQNL2v.js";import{f as u}from"./index-Dz9Bq-sO.js";import"./jsx-runtime-DR4tA_9P.js";import"./index-Vg79BID-.js";import"./iframe-CFDjoW5s.js";import"./LargeButton-B8VZJzhz.js";import"./DefaultPropsProvider-DEgZ9IxH.js";import"./createTheme-DXmTCCCj.js";import"./Button-DA8RCH2U.js";import"./ButtonBase-Bp4tlF7M.js";import"./useTimeout-Bmchsjft.js";import"./TransitionGroupContext-BzNTPzjo.js";import"./useForkRef-63n_0gwC.js";import"./useIsFocusVisible-B83Pi7Rh.js";import"./useEventCallback-C5p3MRGc.js";import"./useFiles-Bwg0s9f_.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-CC0rfazt.js";import"./OrientationBanner-D6g2n9Ed.js";import"./index-Ce5YK_VT.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy1cZ39D.js";import"./FullWidthAlert-DUYwRGp_.js";import"./Alert-DbEi88XW.js";import"./resolveComponentProps-CedEO8KE.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-9LdlP7Pe.js";import"./Close-bzmN7BlE.js";import"./IconButton-DDnvOzB0.js";import"./Paper-DVO33gFY.js";import"./Stack-BLi-xU46.js";import"./getThemeProps-BcJTOhRM.js";import"./useTheme-BwrFdNA1.js";import"./Box-Dx0zJWvv.js";import"./AlertTitle-PUy9LFc0.js";import"./Typography-CaIHMzUk.js";import"./useTheme-CsEanI0A.js";import"./Grow--OkInp2b.js";import"./index-BOC6r9lG.js";import"./utils-CeLCQfAC.js";import"./ClickAwayListener-mcCXQhRy.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Eupu-pPA.js";import"./index-D_Bz3QI0.js";import"./useControlled-CCdnr4Dv.js";import"./useId-vp5UP7jH.js";import"./Popper-DZ7-s0Kz.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-DD6Qx8YL.js";import"./utils-CzjhUDee.js";import"./Link-B9q2Qbuh.js";import"./Collapse-B0rWqOPL.js";import"./isNil-FLY8Au3U.js";import"./_Uint8Array-D4FAVcjH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CG8Lv5Yt.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-POOioTDn.js";import"./_getTag-Bm-7XfiV.js";import"./tinycolor-Begke6kS.js";import"./Fade-D9T8AoT0.js";import"./Skeleton-B_OQBy-8.js";import"./inputBaseClasses-DIzPzOvk.js";import"./calculateFriendlyFileSize-CZUPi2gZ.js";import"./CheckCircleTwoTone-CschQz1p.js";import"./InfoTwoTone-Dn-ZYr7l.js";import"./mutation-2Oe4VFYe.js";import"./dayjs.min-Dofo-31o.js";import"./chunk-AYJ5UCUI-DXwcYtNa.js";import"./cloneDeep-VFlbVhYR.js";import"./_initCloneObject-B8S0M8p_.js";import"./isEqual-BBn7n2HH.js";import"./merge-Cs-r_5th.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-CYMusMXZ.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-dgMVFgnc.js";import"./Backdrop-CnDaYanC.js";import"./LinearProgress-DGhuuKmT.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
