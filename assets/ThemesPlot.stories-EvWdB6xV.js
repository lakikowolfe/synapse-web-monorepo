import{T as p}from"./ThemesPlot-Biot4jJF.js";import"./jsx-runtime-K2fqsMI1.js";import"./index-BF-TFGr6.js";import"./iframe-CduSda18.js";import"./useFiles-Z5-hGPsU.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-B_tgEFoi.js";import"./OrientationBanner-CxPcUhkX.js";import"./index-BYwNUEh3.js";import"./spreadSx-CwcO6WA9.js";import"./react-pB_ySTRt.js";import"./FullWidthAlert-C7tYBYpO.js";import"./Alert-DoLuuX1K.js";import"./createTheme-fNsUonXl.js";import"./resolveComponentProps-DvJnYw6b.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-WQZqeZhB.js";import"./createSvgIcon-CRycykR-.js";import"./DefaultPropsProvider-pkj_z4mc.js";import"./Close-CtnschHy.js";import"./IconButton-yNyfERvq.js";import"./ButtonBase-HHO57Pnd.js";import"./useTimeout-DI2Gx5la.js";import"./TransitionGroupContext-OzWqrcBy.js";import"./useIsFocusVisible-RY2eniDj.js";import"./useEventCallback-b14gmjlt.js";import"./Paper-CBPY2_ME.js";import"./Stack-w5S_lSZ-.js";import"./getThemeProps-BpHqemHI.js";import"./useTheme-BV4ngjpd.js";import"./Box-B5j1LXc8.js";import"./AlertTitle-CJo_OcY2.js";import"./Typography-Cs0IiwfE.js";import"./useTheme-BnvDC3Cc.js";import"./Grow-teO_iWl5.js";import"./index-DVGoONCX.js";import"./utils-Bcb2eLt2.js";import"./ClickAwayListener-BndowNQw.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BcdnjFX2.js";import"./index-v-kyJxW4.js";import"./useControlled-DbZ2ahWR.js";import"./useId-DYwP7KU_.js";import"./Popper-dJS5SO_Y.js";import"./Button-JCjg7Upf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-KKIcYF_X.js";import"./utils-DIfgLFBq.js";import"./Link-Dbnlm_65.js";import"./Collapse-POhtEGak.js";import"./isNil-Bpym3iET.js";import"./_Uint8Array-Qe-AOk_D.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D9T7B50e.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DHB_eETG.js";import"./_getTag-B3HsDC7G.js";import"./tinycolor-Begke6kS.js";import"./Fade-NKvmRFmW.js";import"./Skeleton-ioLcvLoL.js";import"./inputBaseClasses-BDlfCoGX.js";import"./calculateFriendlyFileSize-B889KYnv.js";import"./CheckCircleTwoTone-xHXjx-id.js";import"./InfoTwoTone-G73G5jpY.js";import"./mutation-BvTYFNUq.js";import"./dayjs.min-Dlwyit3L.js";import"./chunk-AYJ5UCUI-By9W3JJY.js";import"./cloneDeep-BVPhsa5y.js";import"./_initCloneObject-C68wD5Vv.js";import"./isEqual-DMqmt8Qo.js";import"./merge-B9RYE8Kl.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-D0Lclv58.js";import"./Backdrop-CkWOUxEa.js";import"./LinearProgress-BBQJBK3V.js";import"./noop-DX6rZLP_.js";import"./uniq-Dn6Mdz9u.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-AFaq1FCQ.js";import"./index-BBBlR0Zt.js";import"./_createAggregator-nCBGDWAy.js";import"./_baseEach-BVPd759o.js";import"./_baseIteratee-kA_UohyF.js";import"./_baseGet-CHzuo8jZ.js";import"./isSymbol-cHLQiUDv.js";import"./toString-Dh-ZC1rt.js";import"./hasIn-jvOF-Qoi.js";import"./_baseOrderBy-CSYOo2EQ.js";import"./_baseMap-D4-z8WXk.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    onPointClick: e => {
      console.log(e.event);
    },
    topBarPlot: {
      entityId: 'syn21641485',
      xField: 'totalCount',
      yField: 'groupBy',
      groupField: 'consortium',
      colors: {
        CSBC: 'rgba(64,123,160, 1)',
        'PS-ON': 'rgba(91,176,181,1)',
        ICBP: 'rgba(197, 191, 223, 1)',
        TEC: 'rgba(156, 196, 233, 1)'
      },
      whereClause: 'totalCount is not NULL'
    },
    sideBarPlot: {
      entityId: 'syn21649281',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'consortium',
      countLabel: 'grants',
      plotStyle: {
        backgroundColor: '#f5f9fa'
      },
      colors: {
        CSBC: '#1c76af',
        'PS-ON': '#5bb0b5',
        ICBP: '#9cc4e9',
        TEC: '#c5bfdf'
      }
    },
    dotPlot: {
      entityId: 'syn21639584',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'groupBy',
      infoField: 'themeDescription',
      whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
      markerSymbols: {
        tools: 'y-down',
        datasets: 'diamond-x',
        publications: 'circle'
      },
      plotStyle: {
        markerLine: 'rgba(0, 0, 0,1)',
        markerFill: 'rgba(255, 255, 255,1)',
        markerSize: 11,
        backgroundColor: '#f5f9fa'
      }
    }
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Vo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Vo as __namedExportsOrder,Ro as default};
