import{b as k,a as w}from"./hasIn-DjPBe0dF.js";import{a as g}from"./toString-CYyvKWOl.js";import{b as A}from"./_baseIteratee-DXsLczOj.js";import{c as B,b as C,a as d}from"./merge-DLQdEICg.js";import{k as F}from"./cloneDeep-C-OZ4saa.js";import{i as c,b as M}from"./_initCloneObject-CKp18hZk.js";import{i as s}from"./isSymbol-BzKS7Qf1.js";import{i as O}from"./identity-DKeuBCMA.js";import{a as x}from"./isArray-ggc3KxVp.js";function y(n,r){return n&&B(n,r,F)}function E(n,r){return function(i,a){if(i==null)return i;if(!c(i))return n(i,a);for(var p=i.length,u=r?p:-1,f=Object(i);(r?u--:++u<p)&&a(f[u],u,f)!==!1;);return i}}var L=E(y);function G(n,r){var i=-1,a=c(n)?Array(n.length):[];return L(n,function(p,u,f){a[++i]=r(p,u,f)}),a}function U(n,r){var i=n.length;for(n.sort(r);i--;)n[i]=n[i].value;return n}function h(n,r){if(n!==r){var i=n!==void 0,a=n===null,p=n===n,u=s(n),f=r!==void 0,b=r===null,m=r===r,t=s(r);if(!b&&!t&&!u&&n>r||u&&f&&m&&!b&&!t||a&&f&&m||!i&&m||!p)return 1;if(!a&&!u&&!t&&n<r||t&&i&&p&&!a&&!u||b&&i&&p||!f&&p||!m)return-1}return 0}function j(n,r,i){for(var a=-1,p=n.criteria,u=r.criteria,f=p.length,b=i.length;++a<f;){var m=h(p[a],u[a]);if(m){if(a>=b)return m;var t=i[a];return m*(t=="desc"?-1:1)}}return n.index-r.index}function q(n,r,i){r.length?r=g(r,function(u){return x(u)?function(f){return k(f,u.length===1?u[0]:u)}:u}):r=[O];var a=-1;r=g(r,M(A));var p=G(n,function(u,f,b){var m=g(r,function(t){return t(u)});return{criteria:m,index:++a,value:u}});return U(p,function(u,f){return j(u,f,i)})}var X=C(function(n,r){if(n==null)return[];var i=r.length;return i>1&&d(n,r[0],r[1])?r=[]:i>2&&d(r[0],r[1],r[2])&&(r=[r[0]]),q(n,w(r,1),[])});export{y as a,L as b,E as c,G as d,q as e,h as f,X as s};
