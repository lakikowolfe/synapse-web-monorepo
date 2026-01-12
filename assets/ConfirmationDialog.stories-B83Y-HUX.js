import{j as o,B as n}from"./iframe-DvoYBNiD.js";import{C as r}from"./ConfirmationDialog-BbpYCSeJ.js";import"./index-Chi_LkuB.js";import"./DialogBase-lzCCYn9_.js";import"./Close-Bc0JSBY2.js";import"./HelpPopover-prgimuRN.js";import"./MarkdownPopover-Cg1db1MJ.js";import"./LightTooltip-CNKQ1XVV.js";import"./MarkdownSynapse-C-L_FMTC.js";import"./SkeletonButton-rl5nAPBn.js";import"./SkeletonInlineBlock-CrALH587.js";import"./SkeletonTable-h3HZ1dln.js";import"./SkeletonParagraph--j7cXsut.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'My Dialog Title',
    confirmButtonProps: {
      children: 'Confirm',
      color: 'error'
    },
    maxWidth: 'lg',
    content: <>
        <p>
          Some content within the dialog, which can contain other components:
        </p>
        <Button variant="contained">Button</Button>
      </>,
    titleHelpPopoverProps: {
      helpUrl: 'https://help.synapse.org',
      markdownText: 'Option to show a _HelpPopover_ in the title bar with a link to the docs site'
    },
    onCancel: fn(),
    onConfirm: fn()
  }
}`,...t.parameters?.docs?.source}}};const w=["Demo"];export{t as Demo,w as __namedExportsOrder,x as default};
