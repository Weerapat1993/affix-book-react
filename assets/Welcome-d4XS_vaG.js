import{j as s,a9 as j,Y as h}from"./app-BMCNW8jw.js";import{A as m}from"./AuthenticatedLayout-zgmGGxiw.js";import{a as u,d as g}from"./ApplicationLogo-Cg6DUfms.js";import{S as f,l as v,T as d,p as k,C as y,E as n,D as L}from"./FooterLayout-Bsjv7eYk.js";import{C as x}from"./index-8ViR2Fpo.js";import{I as b}from"./index-BPH_3ySU.js";import{S as B}from"./SearchBar-B9we4hIQ.js";import{S}from"./SuggestBookCarousel-dh1a-OMB.js";import{F as C}from"./index-V_S9f0iW.js";import"./PlusOutlined-BO4X4D1A.js";import"./EyeOutlined-DSXNn0z0.js";import"./addEventListener-CYrrB4rT.js";import"./useDebounce-C4Tdgskq.js";import"./index-BDE-1FUJ.js";import"./HeartFilled-QKqT1rR5.js";import"./BookHeader-B9Joim5w.js";import"./index-PheoX0s4.js";import"./DeleteOutlined-CnhckrEc.js";import"./index-DVbmVBw5.js";import"./scrollTo-BbMOu6OJ.js";const{Meta:E}=x,{Text:c}=d,N=({item:t,joinKey:o})=>{var r,a,i;const e={title:((r=t==null?void 0:t.book)==null?void 0:r.title)||"",description:s.jsxs(f,{className:"gap-0",direction:"vertical",children:[s.jsxs(c,{ellipsis:!0,children:["Ch.",t.chapter," ",t.title]}),s.jsx(c,{type:"success",ellipsis:!0,children:v(t.published_at)})]})};return s.jsx(j,{href:route("chapters.show",t.slug),children:s.jsx(x,{style:{width:"auto",background:"transparent"},bordered:!1,cover:s.jsx(b,{preview:!1,alt:(a=t==null?void 0:t.book)==null?void 0:a.title,src:u(`storage/${(i=t==null?void 0:t.book)==null?void 0:i.img_url}`),style:{height:280,width:"100%",borderRadius:10},className:"object-cover",fallback:g}),size:"small",children:s.jsx(E,{...e})})})},w=({list:t,joinKey:o})=>(t||[]).length?s.jsx(k,{gutter:[8,8],children:(t||[]).map(e=>s.jsx(y,{xs:12,sm:8,md:6,lg:4,children:s.jsx(N,{joinKey:o,item:e})},e.id))}):s.jsx("div",{style:{padding:"30px 0"},children:s.jsx(n,{image:n.PRESENTED_IMAGE_SIMPLE})}),p=w,{Title:l}=d;function Q({mangas:t,novels:o,suggestBooks:e}){const r=t||[],a=o||[];return s.jsxs(m,{header:s.jsx(B,{size:"large",isMenu:!0}),children:[s.jsx(h,{title:"Book List"}),s.jsx("div",{className:"py-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.length?s.jsxs(s.Fragment,{children:[s.jsx(l,{level:3,children:"Suggest Books"}),s.jsx(S,{list:e}),s.jsx("br",{})]}):null,s.jsx(l,{level:3,children:"Latest Manga"}),s.jsx(p,{joinKey:"manga",list:r}),s.jsx(L,{}),s.jsx(l,{level:3,children:"Latest Novel"}),s.jsx(p,{joinKey:"novel",list:a}),s.jsx(C.BackTop,{})]})})]})}export{Q as default};
