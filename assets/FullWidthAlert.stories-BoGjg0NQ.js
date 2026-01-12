import{ay as a,j as r,r as i}from"./iframe-CCwNk76Y.js";import{S as c}from"./SynapseNavDrawer-lPQ2x-d4.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BYumRdb6.js";import"./useInfiniteQuery-BLb_KQ8Z.js";import"./useDownloadList-D0gqJDtH.js";import"./waitForAsyncResult-BO0H5sQc.js";import"./useUserBundle-ByJxUt3x.js";import"./useSuspenseQuery-BX7AVyeT.js";import"./CreateProjectModal-DvztxrWn.js";import"./ConfirmationDialog-DI-jktlk.js";import"./DialogBase-C7L5OOOB.js";import"./Close-DoMmdBed.js";import"./HelpPopover-D18mc-KU.js";import"./MarkdownPopover-hakBVyDP.js";import"./LightTooltip-CSSmAbKA.js";import"./MarkdownSynapse-y_5QBZZA.js";import"./SkeletonButton-CZc1MN4w.js";import"./SkeletonInlineBlock-Btd0x96s.js";import"./SkeletonTable-Cf4tCZO5.js";import"./SkeletonParagraph-BWcs457u.js";import"./SynapseHomepageNavBar-CwRXxIsC.js";import"./SageResourcesPopover-DwQEKKRB.js";import"./Grid-TPR8Sk9k.js";import"./index-BEhf0JCb.js";import"./MenuItem-CXyqq271.js";import"./UserBadge-B-zNz6cJ.js";import"./Card-BskzqbhS.js";import"./Chip-Dkm58cKd.js";import"./Slide-CpSYqX_1.js";import"./InputAdornment-CIqNM6mP.js";import"./listItemButtonClasses-BY47SDXQ.js";import"./Badge-mDzFO7De.js";import"./usePreviousProps-Bi5Hv-GG.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
