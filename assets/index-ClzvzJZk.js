import{aC as A,H as at,r as c,X as J,y as K,u as l,J as $,L as lt,N as it,bF as st,aJ as _,O as C,b3 as ct,P as U,I as T,aq as Y,V as dt,C as Q,aO as ut,bf as ft}from"./app-seHo-2Pj.js";import{s as mt,g as pt}from"./scrollTo-Buc-Uo-K.js";import{a7 as gt,q as bt,a as ht}from"./FooterLayout-Vber5aYW.js";function vt(t){let n;const o=r=>()=>{n=null,t.apply(void 0,at(r))},e=function(){if(n==null){for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];n=A(o(a))}};return e.cancel=()=>{A.cancel(n),n=null},e}var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},Ct=function(n,o){return c.createElement(J,K({},n,{ref:o,icon:yt}))},$t=c.forwardRef(Ct);const L=l.createContext(void 0),{Provider:Ot}=L;var St={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},xt=function(n,o){return c.createElement(J,K({},n,{ref:o,icon:St}))},Z=c.forwardRef(xt);const Bt=t=>{const{icon:n,description:o,prefixCls:e,className:r}=t,a=l.createElement("div",{className:`${e}-icon`},l.createElement(Z,null));return l.createElement("div",{onClick:t.onClick,onFocus:t.onFocus,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,className:$(r,`${e}-content`)},n||o?l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${e}-icon`},n),o&&l.createElement("div",{className:`${e}-description`},o)):a)},Et=c.memo(Bt),X=t=>t===0?0:t-Math.sqrt(Math.pow(t,2)/2),wt=t=>{const{componentCls:n,floatButtonSize:o,motionDurationSlow:e,motionEaseInOutCirc:r}=t,a=`${n}-group`,u=new _("antFloatButtonMoveDownIn",{"0%":{transform:`translate3d(0, ${C(o)}, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),m=new _("antFloatButtonMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${C(o)}, 0)`,transformOrigin:"0 0",opacity:0}});return[{[`${a}-wrap`]:Object.assign({},ct(`${a}-wrap`,u,m,e,!0))},{[`${a}-wrap`]:{[`
          &${a}-wrap-enter,
          &${a}-wrap-appear
        `]:{opacity:0,animationTimingFunction:r},[`&${a}-wrap-leave`]:{animationTimingFunction:r}}}]},It=t=>{const{antCls:n,componentCls:o,floatButtonSize:e,margin:r,borderRadiusLG:a,borderRadiusSM:u,badgeOffset:m,floatButtonBodyPadding:d,calc:f}=t,i=`${o}-group`;return{[i]:Object.assign(Object.assign({},U(t)),{zIndex:t.zIndexPopupBase,display:"block",border:"none",position:"fixed",width:e,height:"auto",boxShadow:"none",minHeight:e,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,borderRadius:a,[`${i}-wrap`]:{zIndex:-1,display:"block",position:"relative",marginBottom:r},[`&${i}-rtl`]:{direction:"rtl"},[o]:{position:"static"}}),[`${i}-circle`]:{[`${o}-circle:not(:last-child)`]:{marginBottom:t.margin,[`${o}-body`]:{width:e,height:e,borderRadius:"50%"}}},[`${i}-square`]:{[`${o}-square`]:{borderRadius:0,padding:0,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${C(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${n}-badge`]:{[`${n}-badge-count`]:{top:f(f(d).add(m)).mul(-1).equal(),insetInlineEnd:f(f(d).add(m)).mul(-1).equal()}}},[`${i}-wrap`]:{display:"block",borderRadius:a,boxShadow:t.boxShadowSecondary,[`${o}-square`]:{boxShadow:"none",marginTop:0,borderRadius:0,padding:d,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${C(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${o}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize}}}},[`${i}-circle-shadow`]:{boxShadow:"none"},[`${i}-square-shadow`]:{boxShadow:t.boxShadowSecondary,[`${o}-square`]:{boxShadow:"none",padding:d,[`${o}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:u}}}}},Pt=t=>{const{antCls:n,componentCls:o,floatButtonBodyPadding:e,floatButtonIconSize:r,floatButtonSize:a,borderRadiusLG:u,badgeOffset:m,dotOffsetInSquare:d,dotOffsetInCircle:f,calc:i}=t;return{[o]:Object.assign(Object.assign({},U(t)),{border:"none",position:"fixed",cursor:"pointer",zIndex:t.zIndexPopupBase,display:"block",width:a,height:a,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,boxShadow:t.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${n}-badge`]:{width:"100%",height:"100%",[`${n}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:i(m).mul(-1).equal(),insetInlineEnd:i(m).mul(-1).equal()}},[`${o}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${t.motionDurationMid}`,[`${o}-content`]:{overflow:"hidden",textAlign:"center",minHeight:a,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${C(i(e).div(2).equal())} ${C(e)}`,[`${o}-icon`]:{textAlign:"center",margin:"auto",width:r,fontSize:r,lineHeight:1}}}}),[`${o}-rtl`]:{direction:"rtl"},[`${o}-circle`]:{height:a,borderRadius:"50%",[`${n}-badge`]:{[`${n}-badge-dot`]:{top:f,insetInlineEnd:f}},[`${o}-body`]:{borderRadius:"50%"}},[`${o}-square`]:{height:"auto",minHeight:a,borderRadius:u,[`${n}-badge`]:{[`${n}-badge-dot`]:{top:d,insetInlineEnd:d}},[`${o}-body`]:{height:"auto",borderRadius:u}},[`${o}-default`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,[`${o}-body`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorFillContent},[`${o}-content`]:{[`${o}-icon`]:{color:t.colorText},[`${o}-description`]:{display:"flex",alignItems:"center",lineHeight:C(t.fontSizeLG),color:t.colorText,fontSize:t.fontSizeSM}}}},[`${o}-primary`]:{backgroundColor:t.colorPrimary,[`${o}-body`]:{backgroundColor:t.colorPrimary,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorPrimaryHover},[`${o}-content`]:{[`${o}-icon`]:{color:t.colorTextLightSolid},[`${o}-description`]:{display:"flex",alignItems:"center",lineHeight:C(t.fontSizeLG),color:t.colorTextLightSolid,fontSize:t.fontSizeSM}}}}}},Rt=t=>({dotOffsetInCircle:X(t.controlHeightLG/2),dotOffsetInSquare:X(t.borderRadiusLG)}),k=lt("FloatButton",t=>{const{colorTextLightSolid:n,colorBgElevated:o,controlHeightLG:e,marginXXL:r,marginLG:a,fontSize:u,fontSizeIcon:m,controlItemBgHover:d,paddingXXS:f,calc:i}=t,h=it(t,{floatButtonBackgroundColor:o,floatButtonColor:n,floatButtonHoverBackgroundColor:d,floatButtonFontSize:u,floatButtonIconSize:i(m).mul(1.5).equal(),floatButtonSize:e,floatButtonInsetBlockEnd:r,floatButtonInsetInlineEnd:a,floatButtonBodySize:i(e).sub(i(f).mul(2)).equal(),floatButtonBodyPadding:f,badgeOffset:i(f).mul(1.5).equal()});return[It(h),Pt(h),st(t),wt(h)]},Rt);var zt=function(t,n){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const M="float-btn",jt=l.forwardRef((t,n)=>{const{prefixCls:o,className:e,rootClassName:r,type:a="default",shape:u="circle",icon:m,description:d,tooltip:f,badge:i={}}=t,h=zt(t,["prefixCls","className","rootClassName","type","shape","icon","description","tooltip","badge"]),{getPrefixCls:p,direction:B}=c.useContext(T),O=c.useContext(L),g=p(M,o),v=Y(g),[S,E,x]=k(g,v),w=O||u,R=$(E,x,v,g,e,r,`${g}-${a}`,`${g}-${w}`,{[`${g}-rtl`]:B==="rtl"}),I=c.useMemo(()=>dt(i,["title","children","status","text"]),[i]),z=c.useMemo(()=>({prefixCls:g,description:d,icon:m,type:a}),[g,d,m,a]);let s=l.createElement("div",{className:`${g}-body`},l.createElement(Et,Object.assign({},z)));return"badge"in t&&(s=l.createElement(gt,Object.assign({},I),s)),"tooltip"in t&&(s=l.createElement(bt,{title:f,placement:B==="rtl"?"right":"left"},s)),S(t.href?l.createElement("a",Object.assign({ref:n},h,{className:R}),s):l.createElement("button",Object.assign({ref:n},h,{className:R,type:"button"}),s))}),P=jt;var Nt=function(t,n){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const tt=l.forwardRef((t,n)=>{const{prefixCls:o,className:e,type:r="default",shape:a="circle",visibilityHeight:u=400,icon:m=l.createElement($t,null),target:d,onClick:f,duration:i=450}=t,h=Nt(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[p,B]=c.useState(u===0),O=l.useRef(null);l.useImperativeHandle(n,()=>({nativeElement:O.current}));const g=()=>{var s;return((s=O.current)===null||s===void 0?void 0:s.ownerDocument)||window},v=vt(s=>{const b=pt(s.target);B(b>=u)});c.useEffect(()=>{const b=(d||g)();return v({target:b}),b==null||b.addEventListener("scroll",v),()=>{v.cancel(),b==null||b.removeEventListener("scroll",v)}},[d]);const S=s=>{mt(0,{getContainer:d||g,duration:i}),f==null||f(s)},{getPrefixCls:E}=c.useContext(T),x=E(M,o),w=E(),I=c.useContext(L)||a,z=Object.assign({prefixCls:x,icon:m,type:r,shape:I},h);return l.createElement(Q,{visible:p,motionName:`${w}-fade`},(s,b)=>{let{className:F}=s;return l.createElement(P,Object.assign({ref:ut(O,b)},z,{onClick:S,className:$(e,F)}))})});var Tt=function(t,n){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const Mt=t=>{var n;const{prefixCls:o,className:e,style:r,shape:a="circle",type:u="default",icon:m=l.createElement(Z,null),closeIcon:d,description:f,trigger:i,children:h,onOpenChange:p,open:B}=t,O=Tt(t,["prefixCls","className","style","shape","type","icon","closeIcon","description","trigger","children","onOpenChange","open"]),{direction:g,getPrefixCls:v,floatButtonGroup:S}=c.useContext(T),E=(n=d??(S==null?void 0:S.closeIcon))!==null&&n!==void 0?n:l.createElement(ft,null),x=v(M,o),w=Y(x),[R,I,z]=k(x,w),s=`${x}-group`,b=$(s,I,z,w,e,{[`${s}-rtl`]:g==="rtl",[`${s}-${a}`]:a,[`${s}-${a}-shadow`]:!i}),F=$(I,`${s}-wrap`),[q,N]=ht(!1,{value:B}),G=l.useRef(null),V=l.useRef(null),nt=l.useMemo(()=>i==="hover"?{onMouseEnter(){N(!0),p==null||p(!0)},onMouseLeave(){N(!1),p==null||p(!1)}}:{},[i]),rt=()=>{N(y=>(p==null||p(!y),!y))},D=c.useCallback(y=>{var j,H;if(!((j=G.current)===null||j===void 0)&&j.contains(y.target)){!((H=V.current)===null||H===void 0)&&H.contains(y.target)&&rt();return}N(!1),p==null||p(!1)},[i]);return c.useEffect(()=>{if(i==="click")return document.addEventListener("click",D),()=>{document.removeEventListener("click",D)}},[i]),R(l.createElement(Ot,{value:a},l.createElement("div",Object.assign({ref:G,className:b,style:r},nt),i&&["click","hover"].includes(i)?l.createElement(l.Fragment,null,l.createElement(Q,{visible:q,motionName:`${s}-wrap`},y=>{let{className:j}=y;return l.createElement("div",{className:$(j,F)},h)}),l.createElement(P,Object.assign({ref:V,type:u,icon:q?E:m,description:f,"aria-label":t["aria-label"]},O))):h)))},et=c.memo(Mt);var ot=function(t,n){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const W=t=>{var{backTop:n}=t,o=ot(t,["backTop"]);return n?c.createElement(tt,Object.assign({},o,{visibilityHeight:0})):c.createElement(P,Object.assign({},o))},Ft=t=>{var{className:n,items:o}=t,e=ot(t,["className","items"]);const{prefixCls:r}=e,{getPrefixCls:a}=c.useContext(T),m=`${a(M,r)}-pure`;return o?c.createElement(et,Object.assign({className:$(n,m)},e),o.map((d,f)=>c.createElement(W,Object.assign({key:f},d)))):c.createElement(W,Object.assign({className:$(n,m)},e))};P.BackTop=tt;P.Group=et;P._InternalPanelDoNotUseOrYouWillBeFired=Ft;export{P as F,vt as t};
