import{j as s,aC as j}from"./app-DV9NRXND.js";import{A as h}from"./AuthenticatedLayout-BH7Oq1bE.js";import{a as m,d as u}from"./ApplicationLogo-BttutHq_.js";import{p as g,B as f,T as x,C as v,F as y,E as n,G as B}from"./FooterLayout-BQyBW5O-.js";import{C as i}from"./index-DYFJxuvL.js";import{I as k}from"./index-B3DRfpBm.js";import{S as L}from"./SearchBar-COJ0Xy3c.js";import{S as b}from"./SeoHead-eDWkpP8m.js";import{d as C}from"./seo-Bktiihya.js";import{B as E}from"./BannerAdvertising-zuhhoDVL.js";import{F as N}from"./index-D1J4Or1S.js";/* empty css            */import"./PlusOutlined-B8Fa1fb7.js";import"./EyeOutlined-g2T2rbd4.js";import"./addEventListener-BXzlr4Dd.js";import"./useDebounce-BCtLKJfd.js";import"./index-DhXKa_92.js";import"./HeartFilled-n5Kvk4A6.js";import"./image-DcQEKmXL.js";import"./index-BKNjMPK8.js";import"./index-BIYMT-nh.js";import"./math-BRiXLSU_.js";import"./scrollTo-DNHynvGF.js";const{Meta:M}=i,{Text:c}=x,S=({item:o,joinKey:r})=>{var a,t,l;const e={title:((a=o==null?void 0:o.book)==null?void 0:a.title)||"",description:s.jsxs(g,{className:"gap-0",direction:"vertical",children:[s.jsxs(c,{ellipsis:!0,children:["Ch.",o.chapter," ",o.title]}),s.jsx(c,{type:"success",ellipsis:!0,children:f(o.published_at)})]})};return s.jsx(j,{href:route("chapters.show",o.slug),children:s.jsx(i,{className:"bg-primary-foreground w-auto",bordered:!1,cover:s.jsx(k,{preview:!1,alt:(t=o==null?void 0:o.book)==null?void 0:t.title,src:m(`storage/${(l=o==null?void 0:o.book)==null?void 0:l.img_url}`),style:{height:200,width:"100%"},className:"object-cover rounded-md",fallback:u}),size:"small",children:s.jsx(M,{...e})})})},w=({list:o,joinKey:r})=>(o||[]).length?s.jsx(v,{gutter:[8,8],children:(o||[]).map(e=>s.jsx(y,{xs:12,sm:8,md:6,lg:4,children:s.jsx(S,{joinKey:r,item:e})},e.id))}):s.jsx("div",{style:{padding:"30px 0"},children:s.jsx(n,{image:n.PRESENTED_IMAGE_SIMPLE})}),p=w,{Title:d}=x;function ss({mangas:o,novels:r,suggestBooks:e}){const a=o||[],t=r||[],l={...C,canonical:m(route("home"))};return s.jsxs(h,{header:s.jsx(L,{size:"large",isMenu:!0}),children:[s.jsx(b,{meta:l}),s.jsx("div",{className:"py-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[s.jsx(E,{children:s.jsxs(i,{children:[s.jsx(d,{level:3,children:"Latest Manga"}),s.jsx(p,{joinKey:"manga",list:a}),s.jsx(B,{}),s.jsx(d,{level:3,children:"Latest Novel"}),s.jsx(p,{joinKey:"novel",list:t})]})}),s.jsx(N.BackTop,{})]})})]})}export{ss as default};