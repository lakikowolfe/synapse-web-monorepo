import{l as a}from"./index-DXMoj0oL.js";import{R,f as n}from"./useFiles-CxxOxyKU.js";import{a as E}from"./MockResearchProject-Cj6zUlh0.js";function p(o){return[a.rest.post(`${o}${R}`,async(r,t,s)=>{const e=await r.json();return t(s.status(201),s.json(e))}),a.rest.get(`${o}${n(":id")}`,async(r,t,s)=>{const e={...E,accessRequirementId:r.params.id.toString()};return t(s.status(200),s.json(e))})]}export{p as g};
