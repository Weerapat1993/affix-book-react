import{r as x,ct as w,cu as B,cv as v,j as o,Y as C}from"./app-lPWvVKsc.js";import{A as R}from"./AuthenticatedLayout-B5XN7Ces.js";import{B as F}from"./BookList-C-_AqzxC.js";import{l,m as L,n as U,P as W,T as A}from"./LayoutBreadcrumb-HJgglDuQ.js";import{U as E}from"./UserProfileHeader-IVL09eL9.js";import{F as N}from"./ApplicationLogo-CaRytBbP.js";import{C as S}from"./index-CUsB7CMy.js";import{F as T}from"./index-ByIMgK2I.js";/* empty css            */import"./x-0q9hW0YF.js";import"./createLucideIcon-CWU9h1rJ.js";import"./laravelBlade-DnAXOTAM.js";import"./index-DjWH4kQ6.js";import"./EyeOutlined-wlOElXWS.js";import"./addEventListener-SciXhUrV.js";import"./tslib.es6-D5k8Tp1K.js";import"./index-CfJWtGlJ.js";import"./index-B2SMkMCG.js";import"./DeleteOutlined-BN_GPNWk.js";import"./PlusOutlined-bTj_iHfT.js";import"./scrollTo-CxXVnHBD.js";const D=({userId:r})=>{const p=l(s=>{var t,e;return(e=(t=s.writerReducer.keys)==null?void 0:t[r])==null?void 0:e.isFetch}),n=l(s=>{var t,e;return(e=(t=s.writerReducer.keys)==null?void 0:t[r])==null?void 0:e.isLoading}),f=l(s=>{var t,e;return(e=(t=s.writerReducer.keys)==null?void 0:t[r])==null?void 0:e.error}),a=l(s=>{var t,e;return(e=(t=s.writerReducer.keys)==null?void 0:t[r])==null?void 0:e.pagination}),i=l(s=>{var t,e,d;return(d=(e=(t=s.writerReducer.keys)==null?void 0:t[r])==null?void 0:e.pagination)==null?void 0:d.page}),c=l(s=>{var t,e;return(e=(t=s.writerReducer.keys)==null?void 0:t[r])==null?void 0:e.pages}),m=L(),g=U(i),h=g!==i&&g!==void 0,P=!(c!=null&&c[i]);x.useEffect(()=>{m(w({userId:r}))},[]),x.useEffect(()=>{p===!1?u({page:i,userId:r}):h&&P&&p&&u({page:i,userId:r})},[i,r]);const j=x.useCallback(s=>{m(B({page:s,userId:r}))},[]),u=async s=>await m(v(s)),y=(c==null?void 0:c[a==null?void 0:a.page])||[],k=(a==null?void 0:a.lastPage)||1;return{list:y,lastPage:k,pagination:a,page:i,isFetch:p,isLoading:n,error:f,refetch:u,setWriterPage:j}},{Title:b}=A;function at(r){const{user:p}=r,{pagination:n,page:f,list:a,isLoading:i,setWriterPage:c}=D({userId:p.id}),m=g=>{c(g)};return o.jsxs(R,{children:[o.jsx(C,{title:"Book List"}),o.jsx(E,{user:p}),o.jsx("div",{className:"py-12",children:o.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 px-2",children:[o.jsx(b,{level:3,children:"Projects"}),o.jsx(N,{justify:"end",gap:"small",className:"my-4",children:n!=null&&n.total?o.jsx(W,{current:f,onChange:m,total:n.total,defaultPageSize:n.pageSize,align:"end"}):null}),o.jsx(S,{children:o.jsx(F,{isLoading:i,list:a})}),o.jsx(T.BackTop,{})]})})]})}export{at as default};