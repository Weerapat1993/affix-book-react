import{r as i,G as j,ab as F,c7 as I,c8 as S,c9 as v,ca as E,H as $,cb as M,cc as N,cd as _,ce as c,cf as V,cg as W,ch as A,ci as G,cj as b,ck as k,cl as z}from"./app-wQAUOKhq.js";import{a7 as B}from"./FooterLayout-BcVwboFD.js";var D=function(e,o){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(l[r[n]]=e[r[n]]);return l};const H=e=>{const{prefixCls:o,className:l,closeIcon:r,closable:n,type:a,title:h,children:d,footer:x}=e,y=D(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:m}=i.useContext(j),C=m(),s=o||m("modal"),p=F(C),[g,w,O]=I(s,p),f=`${s}-confirm`;let u={};return a?u={closable:n??!1,title:"",footer:"",children:i.createElement(S,Object.assign({},e,{prefixCls:s,confirmPrefixCls:f,rootPrefixCls:C,content:d}))}:u={closable:n??!0,title:h,footer:x!==null&&i.createElement(v,Object.assign({},e)),children:d},g(i.createElement(E,Object.assign({prefixCls:s,className:$(w,`${s}-pure-panel`,a&&f,a&&`${f}-${a}`,l,O,p)},y,{closeIcon:M(s,r),closable:n},u)))},R=B(H);function P(e){return c(z(e))}const t=N;t.useModal=_;t.info=function(o){return c(V(o))};t.success=function(o){return c(W(o))};t.error=function(o){return c(A(o))};t.warning=P;t.warn=P;t.confirm=function(o){return c(G(o))};t.destroyAll=function(){for(;b.length;){const o=b.pop();o&&o()}};t.config=k;t._InternalPanelDoNotUseOrYouWillBeFired=R;export{t as M};