import{Z as f}from"./app-DV9NRXND.js";import{r as g}from"./json-BESjz4hO.js";function p(o,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in o)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(o,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var a,u;function c(){if(u)return a;u=1;var o=g();a=t,t.displayName="json5",t.aliases=[];function t(n){n.register(o),function(e){var r=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;e.languages.json5=e.languages.extend("json",{property:[{pattern:RegExp(r.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:r,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})}(n)}return a}var i=c();const d=f(i),y=p({__proto__:null,default:d},[i]);export{y as j};