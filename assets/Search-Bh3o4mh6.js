import{j as s,Y as x}from"./app-DV9NRXND.js";import{A as h}from"./AuthenticatedLayout-BH7Oq1bE.js";import{u as d,S as g}from"./SearchBar-COJ0Xy3c.js";import{B as o}from"./BookList-MgNW8Zr7.js";import{B as j}from"./BannerAdvertising-zuhhoDVL.js";import{E as l,S as u,T as f}from"./FooterLayout-BQyBW5O-.js";import{C as a}from"./index-DYFJxuvL.js";/* empty css            */import"./ApplicationLogo-BttutHq_.js";import"./useDebounce-BCtLKJfd.js";import"./index-DhXKa_92.js";import"./EyeOutlined-g2T2rbd4.js";import"./index-B3DRfpBm.js";import"./addEventListener-BXzlr4Dd.js";import"./HeartFilled-n5Kvk4A6.js";import"./image-DcQEKmXL.js";import"./index-BKNjMPK8.js";import"./index-BIYMT-nh.js";import"./math-BRiXLSU_.js";import"./PlusOutlined-B8Fa1fb7.js";const{Title:m}=f;function H(n){const{keyword:c,categories:v}=n,{data:e,isLoading:r}=d(),i=((e==null?void 0:e.Manga)||[]).slice(0,5),t=((e==null?void 0:e.Novel)||[]).slice(0,5),p=i.length+t.length===0;return s.jsxs(h,{header:s.jsx(g,{size:"large",defaultValue:c}),children:[s.jsx(x,{title:"Search"}),s.jsx("div",{className:"pt-4 pb-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsxs(j,{children:[p?s.jsx(l,{image:l.PRESENTED_IMAGE_SIMPLE}):null,s.jsx("div",{className:`text-center overflow-hidden ${r?"block":"hidden"}`,style:{maxHeight:r?60:0,transition:"max-height 0.5s ease-in-out 0.5s"},children:s.jsx(u,{size:"large"})}),i.length?s.jsxs(a,{className:"my-4",children:[s.jsx(m,{level:3,children:"Manga List"}),s.jsx(o,{list:i})]}):null,t.length?s.jsxs(a,{className:"my-4",children:[s.jsx(m,{level:3,children:"Novel List"}),s.jsx(o,{list:t})]}):null]})})})]})}export{H as default};
