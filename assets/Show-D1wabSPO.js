import{j as s,aC as c,B as m}from"./app-CRwb5DPf.js";import{A as d}from"./AuthenticatedLayout-BzhvtyVY.js";import{B as u}from"./BookHeader-Cgk6Bm1s.js";import{z as n,A as x,B as o,C as j,u as f,T as g}from"./LayoutBreadcrumb-B8AWKc-X.js";import{a as y}from"./laravelBlade-DnAXOTAM.js";import{S as v}from"./SeoHead-DPcISVAR.js";import{a as B}from"./case-6XAStsvS.js";import{C}from"./index-Dbzr0D2n.js";import{R as $}from"./PlusOutlined-5Xeku6ay.js";import{F as w}from"./index-CJiKeHhG.js";/* empty css            */import"./ApplicationLogo-RDsWD0ee.js";import"./x-fZCBThN9.js";import"./createLucideIcon-DMkKqC3q.js";import"./index.es-VBRgfGMV.js";import"./HeartFilled-C8_s2WIJ.js";import"./index-DieUtbZg.js";import"./EyeOutlined-RXfTIp3S.js";import"./addEventListener-CAQlvG5O.js";import"./DeleteOutlined-BdtmIoRm.js";import"./index-CDM5uUcF.js";import"./scrollTo-hje9G3B6.js";const A=({list:r,book:e})=>s.jsx(n,{dataSource:r,renderItem:(t,l)=>{var a,i,p;return s.jsxs(n.Item,{children:[s.jsx(n.Item.Meta,{avatar:s.jsx(x,{src:y(`storage/avatar/${((a=e==null?void 0:e.user)==null?void 0:a.avatar_url)||""}`),icon:s.jsx(o,{})}),title:s.jsxs(c,{href:route("chapters.show",t.slug),children:["Chapter ",t.chapter," : ",t.title]}),description:`${((i=t==null?void 0:t.language)==null?void 0:i.flag)||""} ${((p=e==null?void 0:e.user)==null?void 0:p.name)||""}`}),t!=null&&t.published_at?s.jsx("div",{children:j(t.published_at)}):s.jsx("div",{children:"(DRAFT)"})]})}}),_=A,{Title:R}=g;function Y({book:r}){const{isRole:e,isUser:t}=f(),l=e("writer")&&t(r.user_id)?"chapters":"publish_chapters",a=(r==null?void 0:r[l])||[],i={title:`${r.title} - Affixbook.net | เว็บไซต์อ่านหนังสือออนไลน์`,description:(r==null?void 0:r.synopsis)||"",keywords:((r==null?void 0:r.categories)||[]).map(h=>h.name),author:"",canonical:route("books.show",r.id),image:`/storage/${r.img_url}`},p=[{key:1,title:"Home",href:route("home")},{key:2,title:r.type,href:route(`books.${B(r.type)}`)},{key:3,title:r.title,href:route("books.show",r.id),isLast:!0}];return s.jsxs(d,{breadcrumbs:p,children:[s.jsx(v,{meta:i}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsxs(C,{children:[s.jsx(u,{book:r}),t(r.user_id)?s.jsx("div",{className:"text-right m-4",children:s.jsx(c,{href:route("chapters.create",r.id),children:s.jsx(m,{type:"primary",icon:s.jsx($,{}),children:"Add Chapter"})})}):null,a.length?s.jsx(R,{level:3,children:"Chapters"}):null,s.jsx(_,{book:r,list:a})]})})}),s.jsx(w.BackTop,{})]})}export{Y as default};
