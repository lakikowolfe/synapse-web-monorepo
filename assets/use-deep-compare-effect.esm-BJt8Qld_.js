import{r as u}from"./index-Cu9bd8lq.js";var s=Object.prototype.hasOwnProperty;function c(t,e,n){for(n of t.keys())if(f(n,e))return n}function f(t,e){var n,r,i;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&f(t[r],e[r]););return r===-1}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if(i=r,i&&typeof i=="object"&&(i=c(e,i),!i)||!e.has(i))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if(i=r[0],i&&typeof i=="object"&&(i=c(e,i),!i)||!f(r[1],e.get(i)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(s.call(t,n)&&++r&&!s.call(e,n)||!(n in e)||!f(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}function l(t){var e=u.useRef(t),n=u.useRef(0);return f(t,e.current)||(e.current=t,n.current+=1),u.useMemo(function(){return e.current},[n.current])}function g(t,e){return u.useEffect(t,l(e))}function h(t,e){return u.useEffect(t,l(e))}export{g as a,l as b,h as u};
