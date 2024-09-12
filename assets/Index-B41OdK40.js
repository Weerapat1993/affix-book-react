import{aF as v,r as h,ci as S,cj as y,ck as A,cl as L,cm as b,j as t,Y as I,aD as N,B as T}from"./app-D676uEx3.js";import{A as z}from"./AuthenticatedLayout-C0E30u1r.js";import{B as D}from"./BookList-CSQ53vI7.js";import{m as c,n as E,p as F,f as H,P as $}from"./FooterLayout-B0yBxQk0.js";import{u as Y}from"./useDebounce-c9dJUg-Z.js";import{I as q}from"./index-CrW9meLg.js";import{F as G}from"./ApplicationLogo-BN6NjkgJ.js";import{R as J}from"./PlusOutlined-CS2PFFez.js";import{F as K}from"./index-CUslO5x5.js";/* empty css            */import"./index-SsQ84OYB.js";import"./index-CTGmEV-i.js";import"./EyeOutlined-MY150vgR.js";import"./addEventListener-5cEcnNjk.js";import"./scrollTo-CF2MMUtD.js";const M=({flash:p})=>{const{message:u}=v.useApp(),a=c(e=>e.writerReducer.isFetch),m=c(e=>e.writerReducer.isLoading),f=c(e=>e.writerReducer.isFlash),n=c(e=>e.writerReducer.error),o=c(e=>e.writerReducer.pagination),s=c(e=>e.writerReducer.pagination.page),i=c(e=>e.writerReducer.pages),r=c(e=>e.writerReducer.filters.title),l=E(),g=F(r),x=F(s),P=x!==s&&x!==void 0,j=g!==r&&g!==void 0,k=!(i!=null&&i[s]);h.useEffect(()=>{p==="refetch"&&!f?(u.success("Success"),d({page:s,title:r}),l(S(!0))):a?P&&k?d({page:s,title:r}):j&&s!==1?w(1):j&&s===1&&d({page:s,title:r}):d({page:s,title:r})},[s,r]);const C=h.useCallback(e=>{l(y({title:e}))},[]),R=h.useCallback(e=>{l(A({page:e}))},[]),w=h.useCallback(e=>{l(L({page:e}))},[]),d=async e=>await l(b(e)),B=(i==null?void 0:i[o==null?void 0:o.page])||[],W=(o==null?void 0:o.lastPage)||1;return{list:B,lastPage:W,pagination:o,page:s,title:r,isFetch:a,isLoading:m,error:n,refetch:d,setWriterPage:R,setWriterFilterTitle:C}},O=({onChangeText:p,defaultValue:u})=>{const[a,m]=h.useState(u);Y(()=>{p&&p(a)},1e3,[a]);const f=({currentTarget:n})=>{m((n==null?void 0:n.value)||"")};return t.jsx(q,{placeholder:"Writer Search",allowClear:!0,prefix:t.jsx(H,{}),size:"large",variant:"filled",onChange:f,defaultValue:u})},Q=O;function ue(p){const{flash:u}=p,{pagination:a,page:m,list:f,isLoading:n,title:o,setWriterPage:s,setWriterFilterTitle:i}=M({flash:u.message}),r=l=>{s(l)};return t.jsxs(z,{header:t.jsx(Q,{defaultValue:o,onChangeText:i}),children:[t.jsx(I,{title:"Book List"}),t.jsx("div",{className:"py-12",children:t.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[t.jsxs(G,{justify:"end",gap:"small",className:"my-4",children:[a.total?t.jsx($,{current:m,onChange:r,total:a.total,defaultPageSize:a.pageSize,align:"end"}):null,t.jsx(N,{href:route("books.create"),children:t.jsx(T,{type:"primary",icon:t.jsx(J,{}),children:"Create"})})]}),t.jsx(D,{isLoading:n,list:f}),t.jsx(K.BackTop,{})]})})]})}export{ue as default};
