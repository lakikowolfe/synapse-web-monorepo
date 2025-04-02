import{o as d,S as m,R as f,O as b}from"./VerificationSubmission-BnFne12N.js";import{M as e,b as g}from"./mock_user_profile-CyZOyNQ0.js";import{am as y,an as T,ao as k}from"./useFiles-D8yf2tkg.js";import{l as u}from"./index-qJX8Lv9f.js";import{f as w,M as E}from"./mockWiki-N_UJHCpv.js";import{b as O}from"./mockWikiPageKey-DHD16iMS.js";import{B as p}from"./BasicMockedCrudService-49NSg1j_.js";const j={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:d.RENEW_ACCESS},{userId:g.toString(),type:d.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:m.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:f.ENTITY},R={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:d.GAIN_ACCESS},{userId:g.toString(),type:d.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:m.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:f.ENTITY},h={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:d.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:m.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:f.ENTITY},B={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:d.RENEW_ACCESS},{userId:"3350396",type:d.GAIN_ACCESS},{userId:"3371908",type:d.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:m.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:f.ENTITY},v=[h,j,R,B],I=[b.ENTITY,b.ACCESS_REQUIREMENT,b.EVALUATION],S=new p({initialData:w,idField:"id",autoGenerateId:!0}),C=new p({initialData:O});function A(t){return I.map(o=>u.rest.get(`${t}${y(o,":ownerObjectId",":wikiPageId")}`,async(i,n,s)=>{let a=404,r={reason:`Mock Service worker could not find a wiki page with ID ${i.params.wikiPageId}`};const c=S.getOneById(i.params.wikiPageId);return c&&(r=c,a=200),n(s.status(a),s.json(r))}))}const P=t=>[...A(t),u.rest.get(`${t}/repo/v1/:objectType/:objectId/wiki2/:wikiId/attachmenthandles`,async(o,i,n)=>{const a={list:[]};return i(n.status(200),n.json(a))})];function _(t){return I.map(o=>u.rest.get(`${t}${T(o)}/:ownerObjectId/wikikey`,async(i,n,s)=>{let a=404,r={reason:`Mock Service worker could not find a WikiPageKey for ${o} ${i.params.ownerObjectId}`};const c=C.getOneByPredicate(l=>l.ownerObjectId===i.params.ownerObjectId);return c&&(r=c,a=200),n(s.status(a),s.json(r))}))}function q(t){return I.map(o=>u.rest.post(`${t}${k(o,":ownerObjectId")}`,async(i,n,s)=>{const a=await i.json(),r=new Date().toISOString(),c=S.create({...a,etag:E,createdBy:String(e),createdOn:r,modifiedBy:String(e),modifiedOn:r});return n(s.status(201),s.json(c))}))}function D(t){return I.map(o=>u.rest.put(`${t}${y(o,":ownerObjectId",":wikiPageId")}`,async(i,n,s)=>{const a=await i.json(),r=S.update(a.id,a,"replace");return n(s.status(201),s.json(r))}))}function G(t){return[...P(t),..._(t),...q(t),...D(t)]}export{v as a,G as b,P as g,h as m};
