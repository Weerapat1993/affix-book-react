import{j as s,Y as x}from"./app-c0J2B4Ql.js";import{A as h}from"./AuthenticatedLayout-Bfr6iSeh.js";import{u as d,S as g}from"./SearchBar-CigIFJi5.js";import{B as o}from"./BookList-DePZDCEd.js";import{B as j}from"./BannerAdvertising-JXXvkWaY.js";import{E as l,S as u,T as f}from"./FooterLayout-CVWs-C_W.js";import{C as m}from"./index-bR8CqCq2.js";/* empty css            */import"./ApplicationLogo-D1BYlDnj.js";import"./laravelBlade-DnAXOTAM.js";import"./x-C_LPEpna.js";import"./useDebounce-B4dv00W4.js";import"./index-CPCpilAD.js";import"./EyeOutlined-CCTf8tnR.js";import"./index-DUkPbCi7.js";import"./addEventListener--qcJR7Ko.js";import"./HeartFilled-DhbqoWsS.js";import"./image-BDdVQVvb.js";import"./index-BKNjMPK8.js";import"./index-4idUuTSD.js";import"./math-BRiXLSU_.js";import"./PlusOutlined-CbCWjMrA.js";const{Title:a}=f;function Y(n){const{keyword:p,categories:v}=n,{data:e,isLoading:r}=d(),i=((e==null?void 0:e.Manga)||[]).slice(0,5),t=((e==null?void 0:e.Novel)||[]).slice(0,5),c=i.length+t.length===0;return s.jsxs(h,{header:s.jsx(g,{size:"large",defaultValue:p}),children:[s.jsx(x,{title:"Search"}),s.jsx("div",{className:"pt-4 pb-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsxs(j,{children:[c?s.jsx(l,{image:l.PRESENTED_IMAGE_SIMPLE}):null,s.jsx("div",{className:`text-center overflow-hidden ${r?"block":"hidden"}`,style:{maxHeight:r?60:0,transition:"max-height 0.5s ease-in-out 0.5s"},children:s.jsx(u,{size:"large"})}),i.length?s.jsxs(m,{className:"my-4",children:[s.jsx(a,{level:3,children:"Manga List"}),s.jsx(o,{list:i})]}):null,t.length?s.jsxs(m,{className:"my-4",children:[s.jsx(a,{level:3,children:"Novel List"}),s.jsx(o,{list:t})]}):null]})})})]})}export{Y as default};