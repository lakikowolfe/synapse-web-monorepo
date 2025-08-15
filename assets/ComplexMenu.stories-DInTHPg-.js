import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-kwHCU-dl.js";import{C as p}from"./ComplexMenu-DbteA_rO.js";import"./createSvgIcon-BSBxXRvm.js";import"./index-1Uc_eVY1.js";import"./iframe-BQnb1gjJ.js";import"./createTheme-CNm8Y-1J.js";import"./DefaultPropsProvider-B7piOXtX.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BiB50Sfs.js";import"./useTheme-C50vd0HS.js";import"./Tooltip-BJeU3PTL.js";import"./index-ri-uGLIv.js";import"./useSlot-CoTRl55I.js";import"./useForkRef-BtFq_l26.js";import"./useTimeout-FPNZb3DU.js";import"./useControlled-CMwf4G1L.js";import"./getReactElementRef-B7_Rapqe.js";import"./index-G_C3QZev.js";import"./index-CvBeCTPO.js";import"./Grow-DCPUL9L1.js";import"./Popper-DeYw2bmc.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CqLp5m3S.js";import"./ContentCopyTwoTone-DLI4XKJd.js";import"./HelpOutlineTwoTone-RLI4EDPE.js";import"./ErrorOutlined-R-kGl0fq.js";import"./GetAppTwoTone-Bs33kcqF.js";import"./InfoOutlined-vxG0GtMq.js";import"./PhoneTwoTone-DsKl6Miv.js";import"./DeleteTwoTone-BoATfJOV.js";import"./CheckCircleTwoTone-DHxCdOti.js";import"./DropdownMenu-PoSx7cTe.js";import"./Button-Dh8lWdQv.js";import"./createSimplePaletteValueFilter-CUb_7v8W.js";import"./ButtonBase-b7aSDYLa.js";import"./CircularProgress-CmUNzBU3.js";import"./Typography-D8A0cTAg.js";import"./index-Cy7yRSoV.js";import"./extendSxProp-BzWV0Xzd.js";import"./Fade-BPBJHg1f.js";import"./Paper-C3rBidsJ.js";import"./ClickAwayListener-JBjPr4Pj.js";import"./MenuList-BOlbZoBr.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BFMbTbt3.js";import"./MenuItem-BAF2qLpW.js";import"./dividerClasses-DCYJzUwl.js";import"./ListItemIcon-CmBnDvpP.js";import"./ListItemText-mh3VrhV4.js";import"./Divider-Duj3TfUi.js";import"./IconSvgButton-CiDbK_sf.js";import"./IconButton-CBgFWAGZ.js";import"./index-D4QYeGpO.js";import"./getThemeProps-C5iK4XS1.js";import"./Box-BRV-43gQ.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconButtons: [{
      icon: 'edit',
      tooltipText: 'This is an icon button',
      onClick: onClickHandler('edit icon')
    }, {
      icon: 'label',
      tooltipText: 'View annotations',
      onClick: onClickHandler('label icon')
    }, {
      icon: 'createVersion',
      tooltipText: 'Create new version',
      onClick: onClickHandler('createVersion icon')
    }],
    dropdownMenus: [{
      dropdownButtonText: 'You can have...',
      buttonProps: {
        endIcon: <IconSvg icon="upload" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }, {
      dropdownButtonText: '...multiple dropdown menus!',
      buttonProps: {
        endIcon: <IconSvg icon="download" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }]
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Co=["Demo"];export{t as Demo,Co as __namedExportsOrder,xo as default};
