import{g as b}from"./app-seHo-2Pj.js";function g(e,o){for(var n=0;n<o.length;n++){const r=o[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const a=Object.getOwnPropertyDescriptor(r,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s,i;function p(){if(i)return s;i=1,s=e,e.displayName="rego",e.aliases=[];function e(o){o.languages.rego={comment:/#.*/,property:{pattern:/(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,boolean:/\b(?:false|true)\b/,function:{pattern:/\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,inside:{namespace:/\b\w+\b(?=\s*\.)/,punctuation:/\./}},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,operator:/[-+*/%|&]|[<>:=]=?|!=|\b_\b/,punctuation:/[,;.\[\]{}()]/}}return s}var u=p();const l=b(u),f=g({__proto__:null,default:l},[u]);export{f as r};
