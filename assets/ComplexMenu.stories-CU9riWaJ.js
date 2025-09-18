import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BGE0032x.js";import{C as p}from"./ComplexMenu-B5HHiLLT.js";import"./createSvgIcon-DvFBqQbS.js";import"./index-C53BhZP8.js";import"./iframe-Cvn1CpwI.js";import"./createTheme-BD-SoLjD.js";import"./DefaultPropsProvider-C2HhMOKj.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BwdMo-wV.js";import"./useTheme-D3fydmcm.js";import"./Tooltip-ChJXKMz1.js";import"./index-L0RnLnF9.js";import"./useSlot-CjpUEZLw.js";import"./useForkRef-CNZ3p3X0.js";import"./useTimeout-Bv6YmAp5.js";import"./useControlled-BpEf1Ti3.js";import"./getReactElementRef-DkCkETYF.js";import"./index-6OWYtd6e.js";import"./index-c00cAjas.js";import"./Grow-yQ0dz_Uo.js";import"./Popper-Ch3O4PLA.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DS-RToqm.js";import"./ContentCopyTwoTone-BjkEh-jc.js";import"./HelpOutlineTwoTone-BHBKNQxa.js";import"./ErrorOutlined-Dl_xxNcB.js";import"./GetAppTwoTone-wO3tdMus.js";import"./InfoOutlined-Cs7JZbjI.js";import"./PhoneTwoTone-DFs5sAPb.js";import"./DeleteTwoTone-Cif6XvEp.js";import"./CheckCircleTwoTone-DQSQAPea.js";import"./DropdownMenu-DKJzvDRw.js";import"./Button-B9y5SAJO.js";import"./createSimplePaletteValueFilter-CB0cbmKV.js";import"./ButtonBase-BYf4RcHP.js";import"./CircularProgress-Clwzq0Gd.js";import"./Typography-Dic5pSaj.js";import"./index-Bzb8KmWv.js";import"./extendSxProp-XPZEzUfX.js";import"./Fade-CyFro7_y.js";import"./Paper-D2zgTwzo.js";import"./ClickAwayListener-BP6ck353.js";import"./MenuList-CsB2eUXS.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-yqo1OZLw.js";import"./MenuItem-CbOiH3z-.js";import"./dividerClasses-BS-89YLS.js";import"./ListItemIcon-BlNq527d.js";import"./ListItemText-xBW5CSFF.js";import"./Divider-rqVAI62W.js";import"./IconSvgButton-CW8PZ8gS.js";import"./IconButton-CcjiQn_Y.js";import"./index-D_pjumsi.js";import"./getThemeProps-CMdm_6rw.js";import"./Box-fj6Y8aC6.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
