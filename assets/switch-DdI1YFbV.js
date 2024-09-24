import{c as pe}from"./x-DfbfF6hQ.js";import{r,j as o,q as fe}from"./app-BFpxoxyw.js";import{c as i,b as j,u as A,e as S,i as me,g as ge,j as he,P as R}from"./AuthenticatedLayout-DSw-8pht.js";import{c as T,b as be,O as xe,W as ve,C as ye,T as Ne,D as Ae,a as C,P as we,R as De,d as k,L as P}from"./index-aLA-5jOt.js";import{n as je}from"./FooterLayout-D0PuD2DU.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Se=r.forwardRef(({className:e,...t},a)=>o.jsx("div",{className:"relative w-full overflow-auto",children:o.jsx("table",{ref:a,className:i("w-full caption-bottom text-sm",e),...t})}));Se.displayName="Table";const Re=r.forwardRef(({className:e,...t},a)=>o.jsx("thead",{ref:a,className:i("[&_tr]:border-b",e),...t}));Re.displayName="TableHeader";const Te=r.forwardRef(({className:e,...t},a)=>o.jsx("tbody",{ref:a,className:i("[&_tr:last-child]:border-0",e),...t}));Te.displayName="TableBody";const Ce=r.forwardRef(({className:e,...t},a)=>o.jsx("tfoot",{ref:a,className:i("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));Ce.displayName="TableFooter";const ke=r.forwardRef(({className:e,...t},a)=>o.jsx("tr",{ref:a,className:i("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));ke.displayName="TableRow";const Pe=r.forwardRef(({className:e,...t},a)=>o.jsx("th",{ref:a,className:i("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));Pe.displayName="TableHead";const _e=r.forwardRef(({className:e,...t},a)=>o.jsx("td",{ref:a,className:i("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));_e.displayName="TableCell";const Ee=r.forwardRef(({className:e,...t},a)=>o.jsx("caption",{ref:a,className:i("mt-4 text-sm text-muted-foreground",e),...t}));Ee.displayName="TableCaption";var _="AlertDialog",[Oe,ct]=j(_,[T]),f=T(),E=e=>{const{__scopeAlertDialog:t,...a}=e,s=f(t);return o.jsx(De,{...s,...a,modal:!0})};E.displayName=_;var Me="AlertDialogTrigger",O=r.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...s}=e,n=f(a);return o.jsx(be,{...n,...s,ref:t})});O.displayName=Me;var $e="AlertDialogPortal",M=e=>{const{__scopeAlertDialog:t,...a}=e,s=f(t);return o.jsx(we,{...s,...a})};M.displayName=$e;var ze="AlertDialogOverlay",$=r.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...s}=e,n=f(a);return o.jsx(xe,{...n,...s,ref:t})});$.displayName=ze;var h="AlertDialogContent",[Be,He]=Oe(h),z=r.forwardRef((e,t)=>{const{__scopeAlertDialog:a,children:s,...n}=e,u=f(a),c=r.useRef(null),l=A(t,c),p=r.useRef(null);return o.jsx(ve,{contentName:h,titleName:B,docsSlug:"alert-dialog",children:o.jsx(Be,{scope:a,cancelRef:p,children:o.jsxs(ye,{role:"alertdialog",...u,...n,ref:l,onOpenAutoFocus:S(n.onOpenAutoFocus,d=>{var g;d.preventDefault(),(g=p.current)==null||g.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[o.jsx(me,{children:s}),o.jsx(Le,{contentRef:c})]})})})});z.displayName=h;var B="AlertDialogTitle",H=r.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...s}=e,n=f(a);return o.jsx(Ne,{...n,...s,ref:t})});H.displayName=B;var I="AlertDialogDescription",L=r.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...s}=e,n=f(a);return o.jsx(Ae,{...n,...s,ref:t})});L.displayName=I;var Ie="AlertDialogAction",F=r.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...s}=e,n=f(a);return o.jsx(C,{...n,...s,ref:t})});F.displayName=Ie;var W="AlertDialogCancel",q=r.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...s}=e,{cancelRef:n}=He(W,a),u=f(a),c=A(t,n);return o.jsx(C,{...u,...s,ref:c})});q.displayName=W;var Le=({contentRef:e})=>{const t=`\`${h}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${h}\` by passing a \`${I}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${h}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return r.useEffect(()=>{var s;document.getElementById((s=e.current)==null?void 0:s.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},Fe=E,We=O,qe=M,V=$,G=z,Y=F,K=q,U=H,X=L;const Ve=Fe,Ge=We,Ye=qe,J=r.forwardRef(({className:e,...t},a)=>o.jsx(V,{className:i("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:a}));J.displayName=V.displayName;const Q=r.forwardRef(({className:e,...t},a)=>o.jsxs(Ye,{children:[o.jsx(J,{}),o.jsx(G,{ref:a,className:i("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t})]}));Q.displayName=G.displayName;const Z=({className:e,...t})=>o.jsx("div",{className:i("flex flex-col space-y-2 text-center sm:text-left",e),...t});Z.displayName="AlertDialogHeader";const ee=({className:e,...t})=>o.jsx("div",{className:i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});ee.displayName="AlertDialogFooter";const te=r.forwardRef(({className:e,...t},a)=>o.jsx(U,{ref:a,className:i("text-lg font-semibold",e),...t}));te.displayName=U.displayName;const ae=r.forwardRef(({className:e,...t},a)=>o.jsx(X,{ref:a,className:i("text-sm text-muted-foreground",e),...t}));ae.displayName=X.displayName;const oe=r.forwardRef(({className:e,...t},a)=>o.jsx(Y,{ref:a,className:i(k(),e),...t}));oe.displayName=Y.displayName;const re=r.forwardRef(({className:e,...t},a)=>o.jsx(K,{ref:a,className:i(k({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));re.displayName=K.displayName;const Ke={onSubmit:()=>null,renderButton:()=>null,title:"Title",description:"",children:null,loading:!1,okTitle:"OK",customOkButton:null};function dt(e){const[t,a]=fe.useState(!1),{renderButton:s,title:n,description:u,onSubmit:c,loading:l,okTitle:p,customOkButton:d}={...Ke,...e},g=r.useMemo(()=>s(),[]),m=je(l),b=async y=>{y.preventDefault(),await c()};return r.useEffect(()=>{m&&!l&&a(!1)},[l]),o.jsxs(Ve,{open:t,onOpenChange:a,children:[o.jsx(Ge,{asChild:!0,children:g}),o.jsxs(Q,{children:[o.jsxs(Z,{children:[o.jsx(te,{children:n}),u&&o.jsx(ae,{children:u})]}),o.jsxs(ee,{children:[o.jsx(re,{children:"Cancel"}),d||o.jsx(oe,{onClick:b,children:l?o.jsx(P,{className:"w-4 h-4 animate-spin"}):p})]})]})]})}const ut=({isLoading:e,children:t,className:a})=>o.jsxs("div",{className:`relative ${a} ${e?"bg-secondary opacity-20":""}`,children:[t,e?o.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2",children:o.jsx(P,{className:"animate-spin"})}):null]});function Ue(e){const t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Xe(e){const[t,a]=r.useState(void 0);return ge(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});const s=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;const u=n[0];let c,l;if("borderBoxSize"in u){const p=u.borderBoxSize,d=Array.isArray(p)?p[0]:p;c=d.inlineSize,l=d.blockSize}else c=e.offsetWidth,l=e.offsetHeight;a({width:c,height:l})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}else a(void 0)},[e]),t}var w="Switch",[Je,pt]=j(w),[Qe,Ze]=Je(w),se=r.forwardRef((e,t)=>{const{__scopeSwitch:a,name:s,checked:n,defaultChecked:u,required:c,disabled:l,value:p="on",onCheckedChange:d,...g}=e,[m,b]=r.useState(null),y=A(t,v=>b(v)),N=r.useRef(!1),D=m?!!m.closest("form"):!0,[x=!1,de]=he({prop:n,defaultProp:u,onChange:d});return o.jsxs(Qe,{scope:a,checked:x,disabled:l,children:[o.jsx(R.button,{type:"button",role:"switch","aria-checked":x,"aria-required":c,"data-state":le(x),"data-disabled":l?"":void 0,disabled:l,value:p,...g,ref:y,onClick:S(e.onClick,v=>{de(ue=>!ue),D&&(N.current=v.isPropagationStopped(),N.current||v.stopPropagation())})}),D&&o.jsx(et,{control:m,bubbles:!N.current,name:s,value:p,checked:x,required:c,disabled:l,style:{transform:"translateX(-100%)"}})]})});se.displayName=w;var ne="SwitchThumb",ie=r.forwardRef((e,t)=>{const{__scopeSwitch:a,...s}=e,n=Ze(ne,a);return o.jsx(R.span,{"data-state":le(n.checked),"data-disabled":n.disabled?"":void 0,...s,ref:t})});ie.displayName=ne;var et=e=>{const{control:t,checked:a,bubbles:s=!0,...n}=e,u=r.useRef(null),c=Ue(a),l=Xe(t);return r.useEffect(()=>{const p=u.current,d=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(d,"checked").set;if(c!==a&&m){const b=new Event("click",{bubbles:s});m.call(p,a),p.dispatchEvent(b)}},[c,a,s]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...n,tabIndex:-1,ref:u,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function le(e){return e?"checked":"unchecked"}var ce=se,tt=ie;const at=r.forwardRef(({className:e,...t},a)=>o.jsx(ce,{className:i("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:a,children:o.jsx(tt,{className:i("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));at.displayName=ce.displayName;export{dt as A,ut as L,at as S,Se as T,Re as a,ke as b,Pe as c,Te as d,_e as e,lt as f};