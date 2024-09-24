import{c as Ye}from"./x-DfbfF6hQ.js";import{r as c,j as v}from"./app-BFpxoxyw.js";import{c as Xe,a as ze,S as be,f as ce,u as G,P as k,b as $e,e as _,d as te,D as Ze,k as qe,l as Qe,j as Je}from"./AuthenticatedLayout-DSw-8pht.js";import{u as Y}from"./index-C75zqOhl.js";import{_ as D,a as ye,b as et}from"./tslib.es6-D5k8Tp1K.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=Ye("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),tt=ze("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",primary:"bg-primary-foreground text-primary hover:bg-primary-foreground/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),nt=c.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},i)=>{const s=r?be:"button";return v.jsx(s,{className:Xe(tt({variant:t,size:n,className:e})),ref:i,...a})});nt.displayName="Button";var X="focusScope.autoFocusOnMount",z="focusScope.autoFocusOnUnmount",ue={bubbles:!1,cancelable:!0},rt="FocusScope",Ee=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:i,...s}=e,[o,g]=c.useState(null),m=ce(a),h=ce(i),d=c.useRef(null),p=G(t,u=>g(u)),b=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let u=function(y){if(b.paused||!o)return;const E=y.target;o.contains(E)?d.current=E:R(d.current,{select:!0})},l=function(y){if(b.paused||!o)return;const E=y.relatedTarget;E!==null&&(o.contains(E)||R(d.current,{select:!0}))},f=function(y){if(document.activeElement===document.body)for(const C of y)C.removedNodes.length>0&&R(o)};document.addEventListener("focusin",u),document.addEventListener("focusout",l);const S=new MutationObserver(f);return o&&S.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",l),S.disconnect()}}},[r,o,b.paused]),c.useEffect(()=>{if(o){le.add(b);const u=document.activeElement;if(!o.contains(u)){const f=new CustomEvent(X,ue);o.addEventListener(X,m),o.dispatchEvent(f),f.defaultPrevented||(ot(st(Ce(o)),{select:!0}),document.activeElement===u&&R(o))}return()=>{o.removeEventListener(X,m),setTimeout(()=>{const f=new CustomEvent(z,ue);o.addEventListener(z,h),o.dispatchEvent(f),f.defaultPrevented||R(u??document.body,{select:!0}),o.removeEventListener(z,h),le.remove(b)},0)}}},[o,m,h,b]);const w=c.useCallback(u=>{if(!n&&!r||b.paused)return;const l=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,f=document.activeElement;if(l&&f){const S=u.currentTarget,[y,E]=at(S);y&&E?!u.shiftKey&&f===E?(u.preventDefault(),n&&R(y,{select:!0})):u.shiftKey&&f===y&&(u.preventDefault(),n&&R(E,{select:!0})):f===S&&u.preventDefault()}},[n,r,b.paused]);return v.jsx(k.div,{tabIndex:-1,...s,ref:p,onKeyDown:w})});Ee.displayName=rt;function ot(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(R(r,{select:t}),document.activeElement!==n)return}function at(e){const t=Ce(e),n=se(t,e),r=se(t.reverse(),e);return[n,r]}function Ce(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function se(e,t){for(const n of e)if(!it(n,{upTo:t}))return n}function it(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function ct(e){return e instanceof HTMLInputElement&&"select"in e}function R(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ct(e)&&t&&e.select()}}var le=ut();function ut(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=de(e,t),e.unshift(t)},remove(t){var n;e=de(e,t),(n=e[0])==null||n.resume()}}}function de(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function st(e){return e.filter(t=>t.tagName!=="A")}var $=0;function lt(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??fe()),document.body.insertAdjacentElement("beforeend",e[1]??fe()),$++,()=>{$===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),$--}},[])}function fe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var U="right-scroll-bar-position",V="width-before-scroll-bar",dt="with-scroll-bars-hidden",ft="--removed-body-scroll-bar-size";function Z(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function vt(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var mt=typeof window<"u"?c.useLayoutEffect:c.useEffect,ve=new WeakMap;function gt(e,t){var n=vt(null,function(r){return e.forEach(function(a){return Z(a,r)})});return mt(function(){var r=ve.get(n);if(r){var a=new Set(r),i=new Set(e),s=n.current;a.forEach(function(o){i.has(o)||Z(o,null)}),i.forEach(function(o){a.has(o)||Z(o,s)})}ve.set(n,e)},[e]),n}function ht(e){return e}function pt(e,t){t===void 0&&(t=ht);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(o){return o!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var o=n;n=[],o.forEach(i),s=n}var g=function(){var h=s;s=[],h.forEach(i)},m=function(){return Promise.resolve().then(g)};m(),n={push:function(h){s.push(h),m()},filter:function(h){return s=s.filter(h),n}}}};return a}function bt(e){e===void 0&&(e={});var t=pt(null);return t.options=D({async:!0,ssr:!1},e),t}var Se=function(e){var t=e.sideCar,n=ye(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,D({},n))};Se.isSideCarExport=!0;function yt(e,t){return e.useMedium(t),Se}var we=bt(),q=function(){},K=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:q,onWheelCapture:q,onTouchMoveCapture:q}),a=r[0],i=r[1],s=e.forwardProps,o=e.children,g=e.className,m=e.removeScrollBar,h=e.enabled,d=e.shards,p=e.sideCar,b=e.noIsolation,w=e.inert,u=e.allowPinchZoom,l=e.as,f=l===void 0?"div":l,S=e.gapMode,y=ye(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=p,C=gt([n,t]),A=D(D({},y),a);return c.createElement(c.Fragment,null,h&&c.createElement(E,{sideCar:we,removeScrollBar:m,shards:d,noIsolation:b,inert:w,setCallbacks:i,allowPinchZoom:!!u,lockRef:n,gapMode:S}),s?c.cloneElement(c.Children.only(o),D(D({},A),{ref:C})):c.createElement(f,D({},A,{className:g,ref:C}),o))});K.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};K.classNames={fullWidth:V,zeroRight:U};var Et=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Ct(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Et();return t&&e.setAttribute("nonce",t),e}function St(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function wt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var xt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Ct())&&(St(t,n),wt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Rt=function(){var e=xt();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},xe=function(){var e=Rt(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},Dt={left:0,top:0,right:0,gap:0},Q=function(e){return parseInt(e||"",10)||0},Nt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Q(n),Q(r),Q(a)]},At=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Dt;var t=Nt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Tt=xe(),M="data-scroll-locked",Pt=function(e,t,n,r){var a=e.left,i=e.top,s=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(dt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(M,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(U,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(V,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(U," .").concat(U,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(V," .").concat(V,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(M,`] {
    `).concat(ft,": ").concat(o,`px;
  }
`)},me=function(){var e=parseInt(document.body.getAttribute(M)||"0",10);return isFinite(e)?e:0},It=function(){c.useEffect(function(){return document.body.setAttribute(M,(me()+1).toString()),function(){var e=me()-1;e<=0?document.body.removeAttribute(M):document.body.setAttribute(M,e.toString())}},[])},Mt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;It();var i=c.useMemo(function(){return At(a)},[a]);return c.createElement(Tt,{styles:Pt(i,!t,a,n?"":"!important")})},ee=!1;if(typeof window<"u")try{var L=Object.defineProperty({},"passive",{get:function(){return ee=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch{ee=!1}var T=ee?{passive:!1}:!1,kt=function(e){return e.tagName==="TEXTAREA"},Re=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!kt(e)&&n[t]==="visible")},Ot=function(e){return Re(e,"overflowY")},_t=function(e){return Re(e,"overflowX")},ge=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=De(e,r);if(a){var i=Ne(e,r),s=i[1],o=i[2];if(s>o)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Ft=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Lt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},De=function(e,t){return e==="v"?Ot(t):_t(t)},Ne=function(e,t){return e==="v"?Ft(t):Lt(t)},Wt=function(e,t){return e==="h"&&t==="rtl"?-1:1},jt=function(e,t,n,r,a){var i=Wt(e,window.getComputedStyle(t).direction),s=i*r,o=n.target,g=t.contains(o),m=!1,h=s>0,d=0,p=0;do{var b=Ne(e,o),w=b[0],u=b[1],l=b[2],f=u-l-i*w;(w||f)&&De(e,o)&&(d+=f,p+=w),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!g&&o!==document.body||g&&(t.contains(o)||t===o));return(h&&(Math.abs(d)<1||!a)||!h&&(Math.abs(p)<1||!a))&&(m=!0),m},W=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},he=function(e){return[e.deltaX,e.deltaY]},pe=function(e){return e&&"current"in e?e.current:e},Bt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ut=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Vt=0,P=[];function Ht(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),a=c.useState(Vt++)[0],i=c.useState(xe)[0],s=c.useRef(e);c.useEffect(function(){s.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var u=et([e.lockRef.current],(e.shards||[]).map(pe),!0).filter(Boolean);return u.forEach(function(l){return l.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),u.forEach(function(l){return l.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=c.useCallback(function(u,l){if("touches"in u&&u.touches.length===2)return!s.current.allowPinchZoom;var f=W(u),S=n.current,y="deltaX"in u?u.deltaX:S[0]-f[0],E="deltaY"in u?u.deltaY:S[1]-f[1],C,A=u.target,O=Math.abs(y)>Math.abs(E)?"h":"v";if("touches"in u&&O==="h"&&A.type==="range")return!1;var F=ge(O,A);if(!F)return!0;if(F?C=O:(C=O==="v"?"h":"v",F=ge(O,A)),!F)return!1;if(!r.current&&"changedTouches"in u&&(y||E)&&(r.current=C),!C)return!0;var ie=r.current||C;return jt(ie,l,u,ie==="h"?y:E,!0)},[]),g=c.useCallback(function(u){var l=u;if(!(!P.length||P[P.length-1]!==i)){var f="deltaY"in l?he(l):W(l),S=t.current.filter(function(C){return C.name===l.type&&(C.target===l.target||l.target===C.shadowParent)&&Bt(C.delta,f)})[0];if(S&&S.should){l.cancelable&&l.preventDefault();return}if(!S){var y=(s.current.shards||[]).map(pe).filter(Boolean).filter(function(C){return C.contains(l.target)}),E=y.length>0?o(l,y[0]):!s.current.noIsolation;E&&l.cancelable&&l.preventDefault()}}},[]),m=c.useCallback(function(u,l,f,S){var y={name:u,delta:l,target:f,should:S,shadowParent:Gt(f)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(E){return E!==y})},1)},[]),h=c.useCallback(function(u){n.current=W(u),r.current=void 0},[]),d=c.useCallback(function(u){m(u.type,he(u),u.target,o(u,e.lockRef.current))},[]),p=c.useCallback(function(u){m(u.type,W(u),u.target,o(u,e.lockRef.current))},[]);c.useEffect(function(){return P.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",g,T),document.addEventListener("touchmove",g,T),document.addEventListener("touchstart",h,T),function(){P=P.filter(function(u){return u!==i}),document.removeEventListener("wheel",g,T),document.removeEventListener("touchmove",g,T),document.removeEventListener("touchstart",h,T)}},[]);var b=e.removeScrollBar,w=e.inert;return c.createElement(c.Fragment,null,w?c.createElement(i,{styles:Ut(a)}):null,b?c.createElement(Mt,{gapMode:e.gapMode}):null)}function Gt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Kt=yt(we,Ht);var Ae=c.forwardRef(function(e,t){return c.createElement(K,D({},e,{ref:t,sideCar:Kt}))});Ae.classNames=K.classNames;var Yt=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},I=new WeakMap,j=new WeakMap,B={},J=0,Te=function(e){return e&&(e.host||Te(e.parentNode))},Xt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Te(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},zt=function(e,t,n,r){var a=Xt(t,Array.isArray(e)?e:[e]);B[n]||(B[n]=new WeakMap);var i=B[n],s=[],o=new Set,g=new Set(a),m=function(d){!d||o.has(d)||(o.add(d),m(d.parentNode))};a.forEach(m);var h=function(d){!d||g.has(d)||Array.prototype.forEach.call(d.children,function(p){if(o.has(p))h(p);else try{var b=p.getAttribute(r),w=b!==null&&b!=="false",u=(I.get(p)||0)+1,l=(i.get(p)||0)+1;I.set(p,u),i.set(p,l),s.push(p),u===1&&w&&j.set(p,!0),l===1&&p.setAttribute(n,"true"),w||p.setAttribute(r,"true")}catch(f){console.error("aria-hidden: cannot operate on ",p,f)}})};return h(t),o.clear(),J++,function(){s.forEach(function(d){var p=I.get(d)-1,b=i.get(d)-1;I.set(d,p),i.set(d,b),p||(j.has(d)||d.removeAttribute(r),j.delete(d)),b||d.removeAttribute(n)}),J--,J||(I=new WeakMap,I=new WeakMap,j=new WeakMap,B={})}},$t=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Yt(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),zt(r,a,n,"aria-hidden")):function(){return null}},ne="Dialog",[Pe,dn]=$e(ne),[Zt,x]=Pe(ne),Ie=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:s=!0}=e,o=c.useRef(null),g=c.useRef(null),[m=!1,h]=Je({prop:r,defaultProp:a,onChange:i});return v.jsx(Zt,{scope:t,triggerRef:o,contentRef:g,contentId:Y(),titleId:Y(),descriptionId:Y(),open:m,onOpenChange:h,onOpenToggle:c.useCallback(()=>h(d=>!d),[h]),modal:s,children:n})};Ie.displayName=ne;var Me="DialogTrigger",ke=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=x(Me,n),i=G(t,a.triggerRef);return v.jsx(k.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ae(a.open),...r,ref:i,onClick:_(e.onClick,a.onOpenToggle)})});ke.displayName=Me;var re="DialogPortal",[qt,Oe]=Pe(re,{forceMount:void 0}),_e=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:a}=e,i=x(re,t);return v.jsx(qt,{scope:t,forceMount:n,children:c.Children.map(r,s=>v.jsx(te,{present:n||i.open,children:v.jsx(Qe,{asChild:!0,container:a,children:s})}))})};_e.displayName=re;var H="DialogOverlay",Fe=c.forwardRef((e,t)=>{const n=Oe(H,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=x(H,e.__scopeDialog);return i.modal?v.jsx(te,{present:r||i.open,children:v.jsx(Qt,{...a,ref:t})}):null});Fe.displayName=H;var Qt=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=x(H,n);return v.jsx(Ae,{as:be,allowPinchZoom:!0,shards:[a.contentRef],children:v.jsx(k.div,{"data-state":ae(a.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),N="DialogContent",Le=c.forwardRef((e,t)=>{const n=Oe(N,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=x(N,e.__scopeDialog);return v.jsx(te,{present:r||i.open,children:i.modal?v.jsx(Jt,{...a,ref:t}):v.jsx(en,{...a,ref:t})})});Le.displayName=N;var Jt=c.forwardRef((e,t)=>{const n=x(N,e.__scopeDialog),r=c.useRef(null),a=G(t,n.contentRef,r);return c.useEffect(()=>{const i=r.current;if(i)return $t(i)},[]),v.jsx(We,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:_(e.onCloseAutoFocus,i=>{var s;i.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:_(e.onPointerDownOutside,i=>{const s=i.detail.originalEvent,o=s.button===0&&s.ctrlKey===!0;(s.button===2||o)&&i.preventDefault()}),onFocusOutside:_(e.onFocusOutside,i=>i.preventDefault())})}),en=c.forwardRef((e,t)=>{const n=x(N,e.__scopeDialog),r=c.useRef(!1),a=c.useRef(!1);return v.jsx(We,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var s,o;(s=e.onCloseAutoFocus)==null||s.call(e,i),i.defaultPrevented||(r.current||(o=n.triggerRef.current)==null||o.focus(),i.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:i=>{var g,m;(g=e.onInteractOutside)==null||g.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const s=i.target;((m=n.triggerRef.current)==null?void 0:m.contains(s))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&a.current&&i.preventDefault()}})}),We=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:i,...s}=e,o=x(N,n),g=c.useRef(null),m=G(t,g);return lt(),v.jsxs(v.Fragment,{children:[v.jsx(Ee,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:i,children:v.jsx(Ze,{role:"dialog",id:o.contentId,"aria-describedby":o.descriptionId,"aria-labelledby":o.titleId,"data-state":ae(o.open),...s,ref:m,onDismiss:()=>o.onOpenChange(!1)})}),v.jsxs(v.Fragment,{children:[v.jsx(tn,{titleId:o.titleId}),v.jsx(rn,{contentRef:g,descriptionId:o.descriptionId})]})]})}),oe="DialogTitle",je=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=x(oe,n);return v.jsx(k.h2,{id:a.titleId,...r,ref:t})});je.displayName=oe;var Be="DialogDescription",Ue=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=x(Be,n);return v.jsx(k.p,{id:a.descriptionId,...r,ref:t})});Ue.displayName=Be;var Ve="DialogClose",He=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=x(Ve,n);return v.jsx(k.button,{type:"button",...r,ref:t,onClick:_(e.onClick,()=>a.onOpenChange(!1))})});He.displayName=Ve;function ae(e){return e?"open":"closed"}var Ge="DialogTitleWarning",[fn,Ke]=qe(Ge,{contentName:N,titleName:oe,docsSlug:"dialog"}),tn=({titleId:e})=>{const t=Ke(Ge),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},nn="DialogDescriptionWarning",rn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ke(nn).contentName}}.`;return c.useEffect(()=>{var i;const a=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},vn=Ie,mn=ke,gn=_e,hn=Fe,pn=Le,bn=je,yn=Ue,En=He;export{nt as B,pn as C,yn as D,ln as L,hn as O,gn as P,vn as R,bn as T,fn as W,En as a,mn as b,dn as c,tt as d};