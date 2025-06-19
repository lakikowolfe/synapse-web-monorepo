import{j as i}from"./jsx-runtime-DYWFqpqM.js";import{I as n}from"./IconSvg-qcWImtBg.js";import{C as p}from"./ComplexMenu-D7MLCXM5.js";import"./index-Bv77PzVz.js";import"./iframe-DEhSGEmg.js";import"./createSvgIcon-agjiu9Tx.js";import"./createTheme-Yej-3d8C.js";import"./DefaultPropsProvider-B2pcTdWQ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CKTStrFl.js";import"./useTheme-71X__tjS.js";import"./Tooltip-CmDC_tLV.js";import"./index-gfUR_RBn.js";import"./useSlot-ChBMCmlE.js";import"./useForkRef-CxGmXGLP.js";import"./useTimeout-AmYutYOy.js";import"./useControlled-Wg8dKAvl.js";import"./getReactElementRef-DdpE5Ax6.js";import"./index-BEeRGpTj.js";import"./index-A5B2XHd6.js";import"./Grow-DxwgIlJV.js";import"./Popper-B0EUNtqP.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-c42Rbs6I.js";import"./ContentCopyTwoTone-rVfB2xmV.js";import"./HelpOutlineTwoTone-DUocm3WU.js";import"./ErrorOutlined-YeY9w2Gc.js";import"./GetAppTwoTone-J1PLxxs5.js";import"./InfoOutlined-DZx7QH8y.js";import"./PhoneTwoTone-Dpbwv-3M.js";import"./DeleteTwoTone-CnUHE1Y2.js";import"./CheckCircleTwoTone-WZ_t0bYC.js";import"./DropdownMenu-DyJVtcU9.js";import"./Button-BhZloWmq.js";import"./createSimplePaletteValueFilter-Bvqb_Z9t.js";import"./ButtonBase-ek6tw78a.js";import"./CircularProgress-DcHwvJKl.js";import"./Typography-DULc9QVD.js";import"./index-BoIQx-DG.js";import"./extendSxProp-BQJgYz58.js";import"./Fade-e7BhvPm8.js";import"./Paper-BYm56sLl.js";import"./ClickAwayListener-CCGNSMwG.js";import"./MenuList-BlmsSIyV.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DQAVya2F.js";import"./MenuItem-DXMn2vFT.js";import"./dividerClasses-BbuEHe8x.js";import"./ListItemIcon-CiiT8mMJ.js";import"./ListItemText-DaLQfuPP.js";import"./Divider-C7QdrfGP.js";import"./IconSvgButton-CjqEIJp9.js";import"./IconButton-pzF2VmY0.js";import"./index-DkbRjrDU.js";import"./getThemeProps-C6yV65Co.js";import"./Box-D0xk7u0M.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
