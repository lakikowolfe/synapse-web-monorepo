import{_ as x,b as N}from"./createTheme-KpOM0lcD.js";import{u as C,c as b}from"./ThemeProvider-BS-PCUTx.js";import{a as n}from"./index-Cu9bd8lq.js";var y=/-(.)/g;function _(a){return a.replace(y,function(e,r){return r.toUpperCase()})}var h=["className","bsPrefix","as"],B=function(e){return e[0].toUpperCase()+_(e).slice(1)};function W(a,e){var r=e===void 0?{}:e,t=r.displayName,p=t===void 0?B(a):t,c=r.Component,f=r.defaultProps,o=n.forwardRef(function(s,l){var m=s.className,u=s.bsPrefix,i=s.as,d=i===void 0?c||"div":i,v=x(s,h),P=C(u,a);return n.createElement(d,N({ref:l,className:b(m,P)},v))});return o.defaultProps=f,o.displayName=p,o}export{W as c};
