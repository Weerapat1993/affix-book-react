import{aL as y,r as h,co as S,cp as L,cq as b,cr as A,cs as I,j as t,Y as N,aC as T,B as E}from"./app-CDBIudRN.js";import{A as H}from"./AuthenticatedLayout-fSdatdOo.js";import{B as z}from"./BookList-Cp4b1fMg.js";import{l as c,m as D,n as C,e as $,P as q}from"./FooterLayout-CaEsYqvN.js";import{u as Y}from"./useDebounce-DcFFIMDT.js";import{I as G}from"./index-Cal608gz.js";import{F as P}from"./ApplicationLogo-BFtnq7K6.js";import{R as J}from"./PlusOutlined-DsqJaumb.js";import{C as K}from"./index-Biib7W-x.js";import{F as M}from"./index-C-pe8Ork.js";/* empty css            */import"./x-BG0Ohm6R.js";import"./laravelBlade-DnAXOTAM.js";import"./index-BObQ_jZ2.js";import"./EyeOutlined-C0Lg3lp1.js";import"./addEventListener-i0WVkCre.js";import"./scrollTo-CMA9vhg8.js";const O=({flash:p})=>{const{message:m}=y.useApp(),a=c(e=>e.writerReducer.isFetch),u=c(e=>e.writerReducer.isLoading),d=c(e=>e.writerReducer.isFlash),l=c(e=>e.writerReducer.error),o=c(e=>e.writerReducer.pagination),s=c(e=>e.writerReducer.pagination.page),i=c(e=>e.writerReducer.pages),r=c(e=>e.writerReducer.filters.title),n=D(),g=C(r),x=C(s),F=x!==s&&x!==void 0,j=g!==r&&g!==void 0,k=!(i!=null&&i[s]);h.useEffect(()=>{p==="refetch"&&!d?(m.success("Success"),f({page:s,title:r}),n(S(!0))):a?F&&k?f({page:s,title:r}):j&&s!==1?B(1):j&&s===1&&f({page:s,title:r}):f({page:s,title:r})},[s,r]);const R=h.useCallback(e=>{n(L({title:e}))},[]),w=h.useCallback(e=>{n(b({page:e}))},[]),B=h.useCallback(e=>{n(A({page:e}))},[]),f=async e=>await n(I(e)),W=(i==null?void 0:i[o==null?void 0:o.page])||[],v=(o==null?void 0:o.lastPage)||1;return{list:W,lastPage:v,pagination:o,page:s,title:r,isFetch:a,isLoading:u,error:l,refetch:f,setWriterPage:w,setWriterFilterTitle:R}},Q=({onChangeText:p,defaultValue:m})=>{const[a,u]=h.useState(m);Y(()=>{p&&p(a)},1e3,[a]);const d=({currentTarget:l})=>{u((l==null?void 0:l.value)||"")};return t.jsx(G,{placeholder:"Writer Search",allowClear:!0,prefix:t.jsx($,{}),variant:"filled",onChange:d,defaultValue:m})},U=Q;function fe(p){const{flash:m}=p,{pagination:a,page:u,list:d,isLoading:l,title:o,setWriterPage:s,setWriterFilterTitle:i}=O({flash:m.message}),r=g=>{s(g)},n=[{key:1,title:"Home",href:route("home")},{key:2,title:"หน้านักเขียน",isLast:!0}];return t.jsxs(H,{breadcrumbs:n,children:[t.jsx(N,{title:"Book List"}),t.jsx("div",{className:"py-12",children:t.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[t.jsxs(P,{justify:"end",gap:"small",className:"my-4",children:[a.total?t.jsx(q,{current:u,onChange:r,total:a.total,defaultPageSize:a.pageSize,align:"end"}):null,t.jsx(T,{href:route("books.create"),children:t.jsx(E,{type:"primary",icon:t.jsx(J,{}),children:"Create"})})]}),t.jsx(K,{title:t.jsx(P,{justify:"end",gap:"small",children:t.jsx(U,{defaultValue:o,onChangeText:i})}),children:t.jsx(z,{isLoading:l,list:d})}),t.jsx(M.BackTop,{})]})})]})}export{fe as default};