import{j as t,B as c,Y as l}from"./app-D676uEx3.js";import{C as x}from"./ChapterForm-DSJyFQUI.js";import{A as h}from"./AuthenticatedLayout-C0E30u1r.js";import{R as d}from"./FormInput-CnWij1kx.js";/* empty css            */import"./TextInput-DvBNWn9I.js";import"./InputLabel-CV-jyyF1.js";import"./ApplicationLogo-BN6NjkgJ.js";import"./index-h_ln6pYm.js";import"./FooterLayout-B0yBxQk0.js";import"./DeleteOutlined-Cb9AW-1q.js";import"./EyeOutlined-MY150vgR.js";import"./index-CTGmEV-i.js";import"./addEventListener-5cEcnNjk.js";import"./PlusOutlined-CS2PFFez.js";import"./mark-DahieQPb.js";import"./index-pTK18D2Z.js";import"./UploadInput-B0TGZtS_.js";import"./index-DdADvNfm.js";import"./index-BIWAtbNM.js";import"./index-CUslO5x5.js";import"./scrollTo-CF2MMUtD.js";import"./index-SsQ84OYB.js";import"./index-PigG7urO.js";import"./transition-d2ZNtSPh.js";const u=({book:r,bookId:e,languages:a,allChaptersByBookId:i})=>{const m=(r==null?void 0:r.type)||"Manga",o=(i||[]).map(n=>n.chapter),p=o.length?Math.max(...o):0,s={chapter:p+1,title:"",status:"Draft",book_id:e,language_id:1,pages:[],novel_content:[]};return t.jsx(x,{bookType:m,type:"create",initialValues:s,languages:a,bookId:e,listButtons:o,max:p})},H=({book:r,bookId:e,languages:a,allChaptersByBookId:i})=>t.jsxs(h,{header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create Chapter"}),actions:t.jsx(c,{onClick:()=>window.history.back(),type:"default",icon:t.jsx(d,{}),children:"Back"}),children:[t.jsx(l,{title:"Create Chapter"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsx(u,{book:r,languages:a,bookId:parseInt(e),allChaptersByBookId:i})})})]});export{H as default};