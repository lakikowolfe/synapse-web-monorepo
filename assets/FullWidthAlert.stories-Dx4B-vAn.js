import{ay as a,j as r,r as i}from"./iframe-DvoYBNiD.js";import{S as c}from"./SynapseNavDrawer-B6OgBBzV.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cks6khdC.js";import"./useInfiniteQuery-DDXlKMJO.js";import"./useDownloadList-BY1FfMh9.js";import"./waitForAsyncResult-BAkjXubD.js";import"./useUserBundle-vsDX1dLg.js";import"./useSuspenseQuery-TSKBM31X.js";import"./CreateProjectModal-0-2xFLz8.js";import"./ConfirmationDialog-BbpYCSeJ.js";import"./DialogBase-lzCCYn9_.js";import"./Close-Bc0JSBY2.js";import"./HelpPopover-prgimuRN.js";import"./MarkdownPopover-Cg1db1MJ.js";import"./LightTooltip-CNKQ1XVV.js";import"./MarkdownSynapse-C-L_FMTC.js";import"./SkeletonButton-rl5nAPBn.js";import"./SkeletonInlineBlock-CrALH587.js";import"./SkeletonTable-h3HZ1dln.js";import"./SkeletonParagraph--j7cXsut.js";import"./SynapseHomepageNavBar-B_KvHpcs.js";import"./SageResourcesPopover-D8W6v73q.js";import"./Grid-BPvFFemK.js";import"./index-CMAWu6FN.js";import"./MenuItem-DULlt_2w.js";import"./UserBadge-CEUD_xnv.js";import"./Card-BoGx4zp2.js";import"./Chip-Qo99dBLS.js";import"./Slide-DzU-_zAx.js";import"./InputAdornment-knHuLBlT.js";import"./listItemButtonClasses-CS_ISlq4.js";import"./Badge-xtO8KH7B.js";import"./usePreviousProps-D0zSXPWd.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
