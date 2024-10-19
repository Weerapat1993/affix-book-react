import{r as X,ah as ue,aR as ee,W as fe,j as a,aC as L,B as D,aK as pe}from"./app-BuAjSH8i.js";import{F as A,A as de}from"./ApplicationLogo-DKeDfmxM.js";import{u as te,I as he,p as me,J as ye,q as ve,R as be,s as xe,T as ge,N as J,K as we,Q as _e}from"./LayoutBreadcrumb-BLvKFZBi.js";import{p as ne}from"./index-BKNjMPK8.js";import{f as ke,k as je,D as Se}from"./index.es-BNIkzEIh.js";import{R as Te}from"./DeleteOutlined-Bqt9q-JB.js";import{M as Oe}from"./index-CqxG1YX9.js";var _={},U={};Object.defineProperty(U,"__esModule",{value:!0});var Pe=function(){function n(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,o,r){return o&&n(e.prototype,o),r&&n(e,r),e}}(),re=X,F=W(re),Ee=ue,$e=W(Ee),De=ne,b=W(De);function W(n){return n&&n.__esModule?n:{default:n}}function Re(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function Ce(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var C=function(n){Ce(e,n);function e(){var o,r,t,s;Re(this,e);for(var i=arguments.length,p=Array(i),u=0;u<i;u++)p[u]=arguments[u];return s=(r=(t=Q(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(p))),t),t.state={isSticky:!1,wasSticky:!1,style:{}},t.handleContainerEvent=function(f){var d=f.distanceFromTop,c=f.distanceFromBottom,y=f.eventSource,h=t.context.getParent(),x=!1;t.props.relative&&(x=y!==h,d=-(y.scrollTop+y.offsetTop)+t.placeholder.offsetTop);var $=t.placeholder.getBoundingClientRect(),N=t.content.getBoundingClientRect(),g=N.height,j=c-t.props.bottomOffset-g,S=!!t.state.isSticky,l=x?S:d<=-t.props.topOffset&&c>-t.props.bottomOffset;c=(t.props.relative?h.scrollHeight-h.scrollTop:c)-g;var T=l?{position:"fixed",top:j>0?t.props.relative?h.offsetTop-h.offsetParent.scrollTop:0:j,left:$.left,width:$.width}:{};t.props.disableHardwareAcceleration||(T.transform="translateZ(0)"),t.setState({isSticky:l,wasSticky:S,distanceFromTop:d,distanceFromBottom:c,calculatedHeight:g,style:T})},r),Q(t,s)}return Pe(e,[{key:"componentWillMount",value:function(){if(!this.context.subscribe)throw new TypeError("Expected Sticky to be mounted within StickyContainer");this.context.subscribe(this.handleContainerEvent)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.handleContainerEvent)}},{key:"componentDidUpdate",value:function(){this.placeholder.style.paddingBottom=this.props.disableCompensation?0:(this.state.isSticky?this.state.calculatedHeight:0)+"px"}},{key:"render",value:function(){var r=this,t=F.default.cloneElement(this.props.children({isSticky:this.state.isSticky,wasSticky:this.state.wasSticky,distanceFromTop:this.state.distanceFromTop,distanceFromBottom:this.state.distanceFromBottom,calculatedHeight:this.state.calculatedHeight,style:this.state.style}),{ref:function(i){r.content=$e.default.findDOMNode(i)}});return F.default.createElement("div",null,F.default.createElement("div",{ref:function(i){return r.placeholder=i}}),t)}}]),e}(re.Component);C.propTypes={topOffset:b.default.number,bottomOffset:b.default.number,relative:b.default.bool,children:b.default.func.isRequired};C.defaultProps={relative:!1,topOffset:0,bottomOffset:0,disableCompensation:!1,disableHardwareAcceleration:!1};C.contextTypes={subscribe:b.default.func,unsubscribe:b.default.func,getParent:b.default.func};U.default=C;var q={},M={exports:{}},P={exports:{}};(function(){var n,e,o,r,t,s;typeof performance<"u"&&performance!==null&&performance.now?P.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(P.exports=function(){return(n()-t)/1e6},e=process.hrtime,n=function(){var i;return i=e(),i[0]*1e9+i[1]},r=n(),s=process.uptime()*1e9,t=r-s):Date.now?(P.exports=function(){return Date.now()-o},o=Date.now()):(P.exports=function(){return new Date().getTime()-o},o=new Date().getTime())}).call(ee);var Me=P.exports,Ne=Me,m=typeof window>"u"?ee:window,R=["moz","webkit"],w="AnimationFrame",k=m["request"+w],E=m["cancel"+w]||m["cancelRequest"+w];for(var O=0;!k&&O<R.length;O++)k=m[R[O]+"Request"+w],E=m[R[O]+"Cancel"+w]||m[R[O]+"CancelRequest"+w];if(!k||!E){var B=0,V=0,v=[],Fe=1e3/60;k=function(n){if(v.length===0){var e=Ne(),o=Math.max(0,Fe-(e-B));B=o+e,setTimeout(function(){var r=v.slice(0);v.length=0;for(var t=0;t<r.length;t++)if(!r[t].cancelled)try{r[t].callback(B)}catch(s){setTimeout(function(){throw s},0)}},Math.round(o))}return v.push({handle:++V,callback:n,cancelled:!1}),V},E=function(n){for(var e=0;e<v.length;e++)v[e].handle===n&&(v[e].cancelled=!0)}}M.exports=function(n){return k.call(m,n)};M.exports.cancel=function(){E.apply(m,arguments)};M.exports.polyfill=function(n){n||(n=m),n.requestAnimationFrame=k,n.cancelAnimationFrame=E};var Be=M.exports;Object.defineProperty(q,"__esModule",{value:!0});var He=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},ze=function(){function n(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,o,r){return o&&n(e.prototype,o),r&&n(e,r),e}}(),oe=X,Le=I(oe),Ae=ne,H=I(Ae),Ue=Be,Y=I(Ue);function I(n){return n&&n.__esModule?n:{default:n}}function We(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function qe(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var ae=function(n){qe(e,n);function e(){var o,r,t,s;We(this,e);for(var i=arguments.length,p=Array(i),u=0;u<i;u++)p[u]=arguments[u];return s=(r=(t=Z(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(p))),t),t.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],t.subscribers=[],t.rafHandle=null,t.subscribe=function(f){t.subscribers=t.subscribers.concat(f)},t.unsubscribe=function(f){t.subscribers=t.subscribers.filter(function(d){return d!==f})},t.notifySubscribers=function(f){if(!t.framePending){var d=f.currentTarget;t.rafHandle=(0,Y.default)(function(){t.framePending=!1;var c=t.node.getBoundingClientRect(),y=c.top,h=c.bottom;t.subscribers.forEach(function(x){return x({distanceFromTop:y,distanceFromBottom:h,eventSource:d===window?document.body:t.node})})}),t.framePending=!0}},t.getParent=function(){return t.node},r),Z(t,s)}return ze(e,[{key:"getChildContext",value:function(){return{subscribe:this.subscribe,unsubscribe:this.unsubscribe,getParent:this.getParent}}},{key:"componentDidMount",value:function(){var r=this;this.events.forEach(function(t){return window.addEventListener(t,r.notifySubscribers)})}},{key:"componentWillUnmount",value:function(){var r=this;this.rafHandle&&(Y.default.cancel(this.rafHandle),this.rafHandle=null),this.events.forEach(function(t){return window.removeEventListener(t,r.notifySubscribers)})}},{key:"render",value:function(){var r=this;return Le.default.createElement("div",He({},this.props,{ref:function(s){return r.node=s},onScroll:this.notifySubscribers,onTouchStart:this.notifySubscribers,onTouchMove:this.notifySubscribers,onTouchEnd:this.notifySubscribers}))}}]),e}(oe.PureComponent);ae.childContextTypes={subscribe:H.default.func,unsubscribe:H.default.func,getParent:H.default.func};q.default=ae;Object.defineProperty(_,"__esModule",{value:!0});var ie=_.StickyContainer=le=_.Sticky=void 0,Ie=U,se=ce(Ie),Ke=q,Ge=ce(Ke);function ce(n){return n&&n.__esModule?n:{default:n}}var le=_.Sticky=se.default;ie=_.StickyContainer=Ge.default;_.default=se.default;const{Link:Je}=ge,{confirm:Qe}=Oe,Ve=({list:n,defaultChapter:e,bookId:o,title:r})=>{var g,j,S;const{get:t,delete:s}=fe(),{isUser:i}=te(),p=(j=(g=n.filter(l=>l.book_id===o&&l.chapter===e))==null?void 0:g[0])==null?void 0:j.slug,u=l=>{t(route("chapters.show",l))},f=l=>{var K;const T=(K=n.filter(G=>G.book_id===o&&G.chapter===l))==null?void 0:K[0];T&&u(T.slug)},d=n.map(l=>({label:`Chapter ${l.chapter} : ${l.title}`,value:l.slug,disabled:l.chapter===e})),c=((S=n.filter(l=>l.chapter===e))==null?void 0:S[0])||{},y=Math.max(...n.map(l=>l.chapter)),h=e-1<=0,x=e+1>y,$=()=>{Qe({title:"Delete Chapter",icon:a.jsx(pe,{}),content:"คุณต้องการลบ Chapter นี้หรือไม่?",okText:"Yes",okType:"danger",okButtonProps:{type:"primary"},cancelText:"No",onOk(){s(route("chapters.destroy",c.id))},onCancel(){}})},N=[{key:1,label:"Title",children:a.jsx(L,{href:route("books.show",o),children:a.jsx(Je,{children:r})})},{key:2,label:`Chapter ${c.chapter}`,children:c.title},{key:3,label:"Share",children:a.jsxs(A,{className:"w-full",wrap:!0,gap:"small",children:[a.jsx(ke,{url:route("chapters.show",c.slug),quote:`Chapter ${c.chapter} : ${c.title}`,hashtag:"#affixbook",size:32,round:!0}),a.jsx(je,{url:route("chapters.show",c.slug),title:`${r} ตอนใหม่มาแล้ว !!!`,size:32,round:!0})]})}];return a.jsx(he,{title:"Page Menu",children:a.jsxs("div",{className:"p-4",children:[a.jsx(Se,{column:1,items:N,size:"small"}),a.jsxs(me.Compact,{className:"m-4",children:[a.jsx(D,{disabled:h,onClick:()=>f(e-1),icon:a.jsx(ye,{}),type:"primary",size:"large"}),a.jsx(ve,{defaultValue:p,style:{width:"240px"},options:d,onChange:u,size:"large"}),a.jsx(D,{disabled:x,onClick:()=>f(e+1),icon:a.jsx(be,{}),iconPosition:"end",type:"primary",size:"large"})]}),i(c.user_id)?a.jsxs(A,{justify:"center",wrap:!0,gap:"small",children:[a.jsx(L,{href:route("chapters.edit",c.slug),children:a.jsx(D,{size:"large",type:"primary",icon:a.jsx(xe,{}),children:"Edit"})}),a.jsx(D,{size:"large",onClick:$,type:"primary",danger:!0,icon:a.jsx(Te,{}),children:"Delete"})]}):null]})})},z=Ve,Ye={breadcrumbs:[]};function at(n){const{user:e,list:o,defaultChapter:r,bookId:t,children:s,title:i,breadcrumbs:p}={...Ye,...n},{isAuth:u}=te();return a.jsx("div",{className:"min-h-screen",children:a.jsxs(ie,{children:[a.jsx(le,{distanceFromTop:128,calculatedHeight:!0,topOffset:0,children:({style:f})=>a.jsxs("nav",{style:f,className:"bg-primary border-b border-primary z-10",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between h-16",children:[a.jsx("div",{className:"flex",children:a.jsx("div",{className:"shrink-0 flex items-center",children:a.jsx(L,{href:"/",children:a.jsx(de,{size:36,className:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})})})}),a.jsx("div",{className:"hidden sm:flex sm:items-center space-x-2 sm:-my-px sm:ms-6",children:u?a.jsxs(a.Fragment,{children:[a.jsx(z,{list:o,bookId:t,defaultChapter:r,title:i}),a.jsx(J,{})]}):a.jsx(z,{list:o,bookId:t,defaultChapter:r,title:i})}),a.jsxs(A,{gap:"small",className:"items-center sm:hidden",children:[a.jsx(z,{list:o,bookId:t,defaultChapter:r,title:i}),a.jsx(J,{})]})]})}),a.jsx(we,{list:p||[]})]})}),a.jsx("main",{className:"min-h-screen",children:s}),a.jsx(_e,{})]})})}export{at as M};
