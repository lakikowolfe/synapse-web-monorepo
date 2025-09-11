import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BexO3UZr.js";import{C as p}from"./ComplexMenu-CXJyFxmf.js";import"./createSvgIcon-F3Y5RxQg.js";import"./index-CJTOsSPC.js";import"./iframe-Dd7u0VpD.js";import"./createTheme-C2T5h-83.js";import"./DefaultPropsProvider-Hvyn696A.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BbCAWFxt.js";import"./useTheme-DCz0mdMu.js";import"./Tooltip-CwHJ2Ovs.js";import"./index-DX2Kul0x.js";import"./useSlot-nP4Zk3Iq.js";import"./useForkRef-DUmGpmyr.js";import"./useTimeout-Bza7oBhH.js";import"./useControlled-6BfN5IB5.js";import"./getReactElementRef-C8kRQNY-.js";import"./index-ClIqjNg8.js";import"./index-DYANzCZO.js";import"./Grow-DKIdI1nH.js";import"./Popper-DeXHkWF5.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CfaBM0zv.js";import"./ContentCopyTwoTone-CfLB1Ft4.js";import"./HelpOutlineTwoTone-CKw_Ym5O.js";import"./ErrorOutlined-B_qIzZtR.js";import"./GetAppTwoTone-BK8F4otA.js";import"./InfoOutlined-CgEPRSzZ.js";import"./PhoneTwoTone-CojANA_E.js";import"./DeleteTwoTone-yKrMONZJ.js";import"./CheckCircleTwoTone-DR42jZ8T.js";import"./DropdownMenu-DpyNCrR5.js";import"./Button-CkxOqHsQ.js";import"./createSimplePaletteValueFilter-COVIpNOp.js";import"./ButtonBase-DuLGVV-J.js";import"./CircularProgress-BLDsdi-s.js";import"./Typography-Dil5DNBP.js";import"./index-BsQu4-UU.js";import"./extendSxProp-BEp23Kv4.js";import"./Fade-BLBw8ob2.js";import"./Paper-DONo8Upe.js";import"./ClickAwayListener-CLWsDWIQ.js";import"./MenuList-DtQppnYR.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-7_WchhrM.js";import"./MenuItem-DdDpU0lT.js";import"./dividerClasses-B49joUlz.js";import"./ListItemIcon-mcK6-Dxh.js";import"./ListItemText-BDr7QOnN.js";import"./Divider-dBm3t0IZ.js";import"./IconSvgButton-DBZXwj_l.js";import"./IconButton-Cki87y21.js";import"./index-DBcB6hUR.js";import"./getThemeProps-B5BOBScs.js";import"./Box-C6ZcRLgh.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
