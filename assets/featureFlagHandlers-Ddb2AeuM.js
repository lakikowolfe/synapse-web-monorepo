import{l as n}from"./index-BhHv-35z.js";import{a as s}from"./VerificationSubmission-DL9jxYsQ.js";import"./RegularExpressions-SKYrON-T.js";import{j as i,B as u}from"./useFiles-DFdLn1TY.js";const l=Object.values(s).reduce((e,r)=>({...e,[r]:!1}),{});function O(e={portalOrigin:i(u.PORTAL_ENDPOINT),overrides:{}}){const{portalOrigin:r,overrides:a}=e;return n.rest.get(`${r}Portal/featureflags`,(p,o,t)=>o(t.status(200),t.json({...l,...a}),t.set("Content-Type","application/json")))}export{O as g};