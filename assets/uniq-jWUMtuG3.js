import{k as w,S as I,j as g}from"./useQuery-BiN9FESP.js";import{a as A,c as m}from"./_baseDifference-Dah6V4bZ.js";import{S as t}from"./cloneDeep-CT__oUM4.js";import{n as p}from"./noop-DX6rZLP_.js";var R=1/0,b=t&&1/w(new t([,-0]))[1]==R?function(n){return new t(n)}:p,q=200;function C(n,e,h){var u=-1,l=A,a=n.length,o=!0,f=[],s=f;if(h)o=!1,l=m;else if(a>=q){var S=e?null:b(n);if(S)return w(S);o=!1,l=g,s=new I}else s=e?[]:f;n:for(;++u<a;){var i=n[u],r=e?e(i):i;if(i=h||i!==0?i:0,o&&r===r){for(var c=s.length;c--;)if(s[c]===r)continue n;e&&s.push(r),f.push(i)}else l(s,r,h)||(s!==f&&s.push(r),f.push(i))}return f}function _(n){return n&&n.length?C(n):[]}export{C as b,_ as u};
