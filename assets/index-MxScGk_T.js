import{L as ne,u as o,I as re,J as z,V as ie}from"./app-seHo-2Pj.js";import{r as L}from"./FooterLayout-Vber5aYW.js";import{t as b}from"./index-ClzvzJZk.js";const se=r=>{const{componentCls:c}=r;return{[c]:{position:"fixed",zIndex:r.zIndexPopup}}},ce=r=>({zIndexPopup:r.zIndexBase+10}),ae=ne("Affix",se,ce);function x(r){return r!==window?r.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function F(r,c,i){if(i!==void 0&&Math.round(c.top)>Math.round(r.top)-i)return i+c.top}function _(r,c,i){if(i!==void 0&&Math.round(c.bottom)<Math.round(r.bottom)+i){const S=window.innerHeight-c.bottom;return i+S}}const B=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function le(){return typeof window<"u"?window:null}const M=0,O=1,he=o.forwardRef((r,c)=>{var i;const{style:S,offsetTop:w,offsetBottom:m,prefixCls:H,className:V,rootClassName:U,children:G,target:l,onChange:R}=r,{getPrefixCls:X,getTargetContainer:j}=o.useContext(re),C=X("affix",H),[k,D]=o.useState(!1),[a,J]=o.useState(),[q,K]=o.useState(),y=o.useRef(M),E=o.useRef(null),f=o.useRef(),d=o.useRef(null),T=o.useRef(null),v=o.useRef(null),s=(i=l??j)!==null&&i!==void 0?i:le,A=m===void 0&&w===void 0?0:w,Q=()=>{if(y.current!==O||!T.current||!d.current||!s)return;const n=s();if(n){const t={status:M},e=x(d.current);if(e.top===0&&e.left===0&&e.width===0&&e.height===0)return;const h=x(n),p=F(e,h,A),P=_(e,h,m);p!==void 0?(t.affixStyle={position:"fixed",top:p,width:e.width,height:e.height},t.placeholderStyle={width:e.width,height:e.height}):P!==void 0&&(t.affixStyle={position:"fixed",bottom:P,width:e.width,height:e.height},t.placeholderStyle={width:e.width,height:e.height}),t.lastAffix=!!t.affixStyle,k!==t.lastAffix&&(R==null||R(t.lastAffix)),y.current=t.status,J(t.affixStyle),K(t.placeholderStyle),D(t.lastAffix)}},I=()=>{y.current=O,Q()},u=b(()=>{I()}),g=b(()=>{if(s&&a){const n=s();if(n&&d.current){const t=x(n),e=x(d.current),h=F(e,t,A),p=_(e,t,m);if(h!==void 0&&a.top===h||p!==void 0&&a.bottom===p)return}}I()}),N=()=>{const n=s==null?void 0:s();n&&(B.forEach(t=>{var e;f.current&&((e=E.current)===null||e===void 0||e.removeEventListener(t,f.current)),n==null||n.addEventListener(t,g)}),E.current=n,f.current=g)},W=()=>{v.current&&(clearTimeout(v.current),v.current=null);const n=s==null?void 0:s();B.forEach(t=>{var e;n==null||n.removeEventListener(t,g),f.current&&((e=E.current)===null||e===void 0||e.removeEventListener(t,f.current))}),u.cancel(),g.cancel()};o.useImperativeHandle(c,()=>({updatePosition:u})),o.useEffect(()=>(v.current=setTimeout(N),()=>W()),[]),o.useEffect(()=>{N()},[l,a]),o.useEffect(()=>{u()},[l,w,m]);const[Y,Z,$]=ae(C),ee=z(U,Z,C,$),te=z({[ee]:a});let oe=ie(r,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return Y(o.createElement(L,{onResize:u},o.createElement("div",Object.assign({style:S,className:V,ref:d},oe),a&&o.createElement("div",{style:q,"aria-hidden":"true"}),o.createElement("div",{className:te,ref:T,style:a},o.createElement(L,{onResize:u},G)))))});export{he as A};
