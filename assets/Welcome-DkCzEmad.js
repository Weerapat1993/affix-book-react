import{j as s,a9 as j,Y as h}from"./app-seHo-2Pj.js";import{A as m}from"./AuthenticatedLayout-BbJCBrEl.js";import{a as u,d as g}from"./ApplicationLogo-Dsn01JS_.js";import{S as f,l as v,T as d,p as k,C as b,E as n,D as y}from"./FooterLayout-Vber5aYW.js";import{C as x}from"./index-B4QU2BuM.js";import{I as L}from"./index-CjLUmZqW.js";import{S as B}from"./SearchBar-CozDTcmn.js";import{S}from"./SuggestBookCarousel-CObEy_gC.js";import{F as C}from"./index-ClzvzJZk.js";import"./PlusOutlined-C_6t6gwO.js";import"./EyeOutlined-B47SA190.js";import"./addEventListener-DSkKtP-U.js";import"./useDebounce-Db7cR4wn.js";import"./index-BVUdEaiD.js";import"./HeartFilled-DDlXMaSx.js";import"./BookHeader-DwLKAzzU.js";import"./index-BAttJV0m.js";import"./DeleteOutlined-BRSLxfDv.js";import"./index-CSdIa1NU.js";import"./scrollTo-Buc-Uo-K.js";const{Meta:E}=x,{Text:c}=d,N=({item:t,joinKey:o})=>{var r,a,i;const e={title:((r=t==null?void 0:t.book)==null?void 0:r.title)||"",description:s.jsxs(f,{className:"gap-0",direction:"vertical",children:[s.jsxs(c,{ellipsis:!0,children:["Ch.",t.chapter," ",t.title]}),s.jsx(c,{type:"success",ellipsis:!0,children:v(t.published_at)})]})};return s.jsx(j,{href:`/books/${t.book_id}/chapter/${t.chapter}`,children:s.jsx(x,{style:{width:"auto",background:"transparent"},bordered:!1,cover:s.jsx(L,{preview:!1,alt:(a=t==null?void 0:t.book)==null?void 0:a.title,src:u(`storage/${(i=t==null?void 0:t.book)==null?void 0:i.img_url}`),style:{height:280,width:"100%",borderRadius:10},className:"object-cover",fallback:g}),size:"small",children:s.jsx(E,{...e})})})},M=({list:t,joinKey:o})=>(t||[]).length?s.jsx(k,{gutter:[8,8],children:(t||[]).map(e=>s.jsx(b,{xs:12,sm:8,md:6,lg:4,children:s.jsx(N,{joinKey:o,item:e})},e.id))}):s.jsx("div",{style:{padding:"30px 0"},children:s.jsx(n,{image:n.PRESENTED_IMAGE_SIMPLE})}),p=M,{Title:l}=d;function Q({mangas:t,novels:o,suggestBooks:e}){const r=t||[],a=o||[];return s.jsxs(m,{header:s.jsx(B,{size:"large",isMenu:!0}),children:[s.jsx(h,{title:"Book List"}),s.jsx("div",{className:"py-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.length?s.jsxs(s.Fragment,{children:[s.jsx(l,{level:3,children:"Suggest Books"}),s.jsx(S,{list:e}),s.jsx("br",{})]}):null,s.jsx(l,{level:3,children:"Latest Manga"}),s.jsx(p,{joinKey:"manga",list:r}),s.jsx(y,{}),s.jsx(l,{level:3,children:"Latest Novel"}),s.jsx(p,{joinKey:"novel",list:a}),s.jsx(C.BackTop,{})]})})]})}export{Q as default};
