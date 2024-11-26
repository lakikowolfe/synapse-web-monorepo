import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as u}from"./index-Cu9bd8lq.js";import{F as j}from"./FullWidthAlert-DEIFRXi9.js";import{v as A}from"./ConfirmationDialog-DWtYmOhU.js";import{u as C,C as _,a as P,b as h,c as x}from"./OrientationBanner-Dto5BQb9.js";import{p as w}from"./SynapseConstants-DRP7luG1.js";import{D as B,a as I,b as D}from"./DialogContent-B9gl3KJH.js";import{T as a}from"./Typography-Cf0oTcRj.js";import{L as b}from"./Link-bWbmw0vG.js";import{B as S}from"./Button-D1yxts2k.js";import{B as g}from"./Box-BaZAwz5V.js";import{C as T}from"./Checkbox-ClPRnb5T.js";function l(o){const{title:t,description:n}=o,s="onChange"in o,i=s?"pointer":void 0;return e.jsxs(g,{onClick:()=>s?o.onChange(!o.checked):void 0,sx:{cursor:i},children:[e.jsxs(g,{sx:{display:"flex",justifyContent:"space-between",marginTop:"17px",alignItems:"center"},children:[e.jsx(a,{variant:"body1",sx:{fontWeight:400,color:"grey.900"},children:t}),"constantValue"in o&&e.jsx(a,{variant:"body1",sx:{fontWeight:700,marginBottom:"15px"},children:o.constantValue}),s&&e.jsx(T,{checked:o.checked})]}),e.jsx(a,{variant:"body1",sx:{fontWeight:400,color:"grey.700"},children:n})]})}function p(o){const[t,n]=C(),{onSave:s,onHide:i,isOpen:d}=o,[r,f]=u.useState(t.functionalAllowed),[m,v]=u.useState(t.analyticsAllowed);return e.jsxs(B,{maxWidth:"md",open:d,onClose:i,sx:{zIndex:1500},children:[e.jsx(A,{title:"Privacy Preferences",onCancel:i}),e.jsxs(I,{sx:{paddingRight:"20px"},children:[e.jsx(a,{variant:"body1",children:"Sage Bionetworks uses cookies and other browser storage methods to save information about how you use our websites, and to make our websites work the way you expect them to."}),e.jsxs(a,{variant:"body1",sx:{marginBottom:"30px"},children:["Read our ",e.jsx(b,{href:w,children:"privacy policy"}),"."]}),e.jsx(l,{title:"Strictly necessary cookies",description:"Information about your authentication, and other critical data. For example, after you log in successfully, we save a token in your browser that tells our website what level of access you are allowed to have. You can’t turn off these cookies, because the site wouldn’t function without them.",constantValue:"Always Active"}),e.jsx(l,{title:"Functional cookies",description:"This includes important customization preferences, for example, your local time, and whether you are using experimental features. You can turn off this setting, however it may impact your experience of using our websites.",checked:r,onChange:f}),e.jsx(l,{title:"Analytics cookie",description:"If you allow us to, we store information about how you use our websites. This helps us identify problems and improve our products. While we do not attempt to track you, it may be possible to identify individual users. Deactivating this setting will not affect your experience of using our websites.",checked:m,onChange:v}),e.jsx(l,{title:"Targeting and marketing cookies",description:"We do not store or exchange user or session information for targeting or marketing purposes.",constantValue:"Never"})]}),e.jsx(D,{children:e.jsx(S,{variant:"contained",onClick:()=>{const y={functionalAllowed:r,analyticsAllowed:m};n(y),s(y)},children:"Save"})})]})}try{p.displayName="CookiePreferencesDialog",p.__docgenInfo={description:"",displayName:"CookiePreferencesDialog",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(prefs: CookiePreference) => void"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!0,type:{name:"() => void"}}}}}catch{}const N=new _,c={title:"Our site uses cookies.",description:e.jsxs(a,{variant:"body1",children:["We use necessary cookies and store your data to ensure our websites function properly. With your consent, we would also like to use cookies to remember your preferences and enhance our websites. Please review our"," ",e.jsx(b,{href:w,children:"Privacy Policy"}),". By clicking “Accept All,” you consent to our use of cookies. You can adjust your cookie preferences anytime on the Settings page."]}),primaryButtonText:"ALLOW ALL",secondaryButtonText:"Disable All",tertiaryButtonText:"Customize"},k=o=>{const{onClose:t}=o,[,n]=C(),[s,i]=u.useState(!!N.get(P)),[d,r]=u.useState(!1);return s?e.jsx(e.Fragment,{}):e.jsxs(e.Fragment,{children:[e.jsx(j,{globalAlertSx:{zIndex:1500},variant:"info",title:c.title,description:c.description,primaryButtonConfig:{text:c.primaryButtonText,onClick:()=>{n(h),i(!0),t&&t(h)}},secondaryButtonConfig:{text:c.secondaryButtonText,onClick:()=>{n(x),i(!0),t&&t(x)}},tertiaryButtonConfig:{text:c.tertiaryButtonText,onClick:()=>{r(!0)}},isGlobal:!0}),e.jsx(p,{isOpen:d,onSave:f=>{i(!0),r(!1),t&&t(f)},onHide:()=>{r(!1)}})]})};try{k.displayName="CookiesNotification",k.__docgenInfo={description:"",displayName:"CookiesNotification",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((cookiePrefs: CookiePreference) => void)"}}}}}catch{}export{k as C};
