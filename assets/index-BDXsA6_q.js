import{bI as v,bJ as x,bK as y,bL as F,u as c,H as O,b4 as P,bM as j,r as m,I as E,bN as M,bO as w}from"./app-seHo-2Pj.js";let a=null,i=e=>e(),g=[],d={};function h(){const{getContainer:e,duration:s,rtl:o,maxCount:n,top:t}=d,r=(e==null?void 0:e())||document.body;return{getContainer:()=>r,duration:s,rtl:o,maxCount:n,top:t}}const I=c.forwardRef((e,s)=>{const{messageConfig:o,sync:n}=e,{getPrefixCls:t}=m.useContext(E),r=d.prefixCls||t("message"),u=m.useContext(M),[f,C]=w(Object.assign(Object.assign(Object.assign({},o),{prefixCls:r}),u.message));return c.useImperativeHandle(s,()=>{const l=Object.assign({},f);return Object.keys(l).forEach(b=>{l[b]=function(){return n(),f[b].apply(f,arguments)}}),{instance:l,sync:n}}),C}),R=c.forwardRef((e,s)=>{const[o,n]=c.useState(h),t=()=>{n(h)};c.useEffect(t,[]);const r=j(),u=r.getRootPrefixCls(),f=r.getIconPrefixCls(),C=r.getTheme(),l=c.createElement(I,{ref:s,sync:t,messageConfig:o});return c.createElement(P,{prefixCls:u,iconPrefixCls:f,theme:C},r.holderRender?r.holderRender(l):l)});function p(){if(!a){const e=document.createDocumentFragment(),s={fragment:e};a=s,i(()=>{F(c.createElement(R,{ref:o=>{const{instance:n,sync:t}=o||{};Promise.resolve().then(()=>{!s.instance&&n&&(s.instance=n,s.sync=t,p())})}}),e)});return}a.instance&&(g.forEach(e=>{const{type:s,skipped:o}=e;if(!o)switch(s){case"open":{i(()=>{const n=a.instance.open(Object.assign(Object.assign({},d),e.config));n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":i(()=>{a==null||a.instance.destroy(e.key)});break;default:i(()=>{var n;const t=(n=a.instance)[s].apply(n,O(e.args));t==null||t.then(e.resolve),e.setCloseFn(t)})}}),g=[])}function G(e){d=Object.assign(Object.assign({},d),e),i(()=>{var s;(s=a==null?void 0:a.sync)===null||s===void 0||s.call(a)})}function H(e){const s=v(o=>{let n;const t={type:"open",config:e,resolve:o,setCloseFn:r=>{n=r}};return g.push(t),()=>{n?i(()=>{n()}):t.skipped=!0}});return p(),s}function A(e,s){const o=v(n=>{let t;const r={type:e,args:s,resolve:n,setCloseFn:u=>{t=u}};return g.push(r),()=>{t?i(()=>{t()}):r.skipped=!0}});return p(),o}const N=e=>{g.push({type:"destroy",key:e}),p()},D=["success","info","warning","error","loading"],S={open:H,destroy:N,config:G,useMessage:x,_InternalPanelDoNotUseOrYouWillBeFired:y},W=S;D.forEach(e=>{W[e]=function(){for(var s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return A(e,o)}});export{W as s};
