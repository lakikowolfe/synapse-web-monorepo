import{j as o}from"./jsx-runtime-DoxjgJx5.js";import{j as c,B as u,l as m}from"./useFiles-CxxOxyKU.js";import{T as d}from"./TwoFactorEnrollmentForm-sS_p7pRF.js";import{u as l}from"./useTwoFactorEnrollment-7yNMz3fF.js";import{R as p,a as n}from"./RequirementItem-DyWLYxS_.js";import{T}from"./Typography-Cf0oTcRj.js";const f=`${c(u.PORTAL_ENDPOINT)}TwoFactorAuth:Enroll`;function E(t,r,e){return t?r?n.LOADING:e==="ENABLED"?n.COMPLETE:n.LOCKED:n.LOCKED}function a(){const{accessToken:t}=m(),r=!!t,{data:e,isLoading:s}=l({enabled:r,refetchOnWindowFocus:!0,staleTime:5e3}),i=(e==null?void 0:e.status)==="DISABLED"?[{variant:"outlined",href:f,target:"_blank",rel:"noopener noreferrer",children:"Activate 2FA (opens a new tab)"},{variant:"text",href:d,target:"_blank",rel:"noopener noreferrer",children:"2FA Documentation"}]:void 0;return o.jsx(p,{status:E(r,s,e==null?void 0:e.status),actions:i,children:o.jsx(T,{variant:"body1",children:"You must have Two-factor Authentication (2FA) active on your Synapse account in order to download the requested files"})})}try{a.displayName="TwoFactorAuthEnabledRequirement",a.__docgenInfo={description:"Displays a data access request requirement that prompts the user to enable two-factor authentication.",displayName:"TwoFactorAuthEnabledRequirement",props:{}}}catch{}export{a as T};
