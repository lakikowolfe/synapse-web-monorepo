import{l as n}from"./index-BhHv-35z.js";import{aH as c,aI as m,aJ as p,aK as u,j as h,B as l,aL as T,aM as g}from"./useFiles-DFdLn1TY.js";import{t as r}from"./VerificationSubmission-DL9jxYsQ.js";import{g as A}from"./asyncJobHandlers-Cj21ymrQ.js";import"./RegularExpressions-SKYrON-T.js";const i="session-456";r.READ_YOUR_PRIVATE_DATA;const d={sessionId:i,agentAccessLevel:r.PUBLICLY_ACCESSIBLE,startedOn:"2024-09-01T12:00:00Z",agentRegistrationId:"default-agent"},I={sessionId:"session-789",agentAccessLevel:r.WRITE_YOUR_PRIVATE_DATA,startedOn:"2024-09-01T12:00:00Z",agentRegistrationId:"default-agent"},y={page:[d,I],nextPageToken:"token-790"},R={sessionId:i,responseText:`This is the only response this agent is told to respond with.  

<function_results>
<result>
<tool_name><REDACTED>_get_description</tool_name>
<stdout>  **Adapt**: You can remix, transform, and build upon the material **Attribution:** You must acknowledge the Data Contributor using the acknowledgment statement below:  **Non-Commercial**: You may not use the material for commercial purposes. 

The TOPACIO study was a phase 2 clinical trial of the investigational drug OPB-51602 in patients with advanced solid tumors. The study was sponsored by Oncopia Therapeutics, Inc. and conducted at multiple sites in the United States between 2013 and 2015.

This dataset contains de-identified clinical data, biomarker data, and pharmacokinetic/pharmacodynamic (PK/PD) data from the TOPACIO study. Specific data files include:

- Demographics and baseline characteristics
- Adverse events 
- Tumor response data
- Pharmacokinetic data
- Pharmacodynamic biomarker data

The data has been de-identified in accordance with HIPAA regulations. Please see the study protocol and data dictionary files for more details on the collected data and definitions.

**Acknowledgment Statement**: The TOPACIO study data was contributed by Oncopia Therapeutics, Inc. Please use the following text to acknowledge the source of the data: "The results published here are in part based upon data generated by the TOPACIO clinical trial, provided by Oncopia Therapeutics, Inc."
</stdout>
</result>
`},S={sessionId:i,page:[{usersRequestText:"What is the weather like today?",usersRequestTimestamp:"2024-09-06T14:30:00Z",agentResponseText:"The weather is sunny with a high of 75°F.",agentResponseTimestamp:"2024-09-06T14:30:10Z"},{usersRequestText:"Can you tell me a joke?",usersRequestTimestamp:"2024-09-06T14:32:00Z",agentResponseText:"Why don’t scientists trust atoms? Because they make up everything!",agentResponseTimestamp:"2024-09-06T14:32:05Z"}],nextPageToken:void 0},E={jobId:":id",page:[{timestamp:1695567600,message:"Executing search on Synapse"}]},f={jobId:":id",page:[{timestamp:1695567700,message:"Gathering entity metadata"}]},_={jobId:":id",page:[{timestamp:1695567800,message:'<thinking>The metadata shows that the entity with ID syn9602623 is a Synapse project named "SearchIntegrationTest.Projecte475c6e8-414a-4842-b876-bf8232ce05d0". Its description contains the search term "e7b33c3a-2392-4ce7-a357-efa4612e4a41". The metadata ...'}]},b={jobId:":id",page:[]};let o=0;const j=(s=h(l.REPO_ENDPOINT))=>[n.rest.post(`${s}${c}`,async(a,t,e)=>t(e.status(201),e.json(d))),n.rest.post(`${s}${m}`,async(a,t,e)=>t(e.status(201),e.json(y))),n.rest.post(`${s}${p(i)}`,async(a,t,e)=>t(e.status(201),e.json(S))),A(g,a=>T(a),R,s),n.rest.post(`${s}${u(":id")}`,async(a,t,e)=>(o++,o==1?t(e.status(201),e.json(E)):o==5?t(e.status(201),e.json(f)):o==8?t(e.status(201),e.json(_)):t(e.status(201),e.json(b))))];export{j as g};