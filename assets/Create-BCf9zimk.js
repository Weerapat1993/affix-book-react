import{j as r,Y as l}from"./app-CRwb5DPf.js";import{C as c}from"./ChapterForm-DpAyWVWp.js";import{A as h}from"./AuthenticatedLayout-BzhvtyVY.js";import{a as x}from"./case-6XAStsvS.js";/* empty css            */import"./FormInput-C0TrZOWp.js";import"./InputLabel-DDwbMmAj.js";import"./TextInput-BTaeJbji.js";import"./laravelBlade-DnAXOTAM.js";import"./index-6gN6vdr4.js";import"./LayoutBreadcrumb-B8AWKc-X.js";import"./ApplicationLogo-RDsWD0ee.js";import"./createLucideIcon-DMkKqC3q.js";import"./DeleteOutlined-BdtmIoRm.js";import"./EyeOutlined-RXfTIp3S.js";import"./index-DieUtbZg.js";import"./addEventListener-CAQlvG5O.js";import"./PlusOutlined-5Xeku6ay.js";import"./mark-BGHMxG-z.js";import"./index-pTK18D2Z.js";import"./UploadInput-OLPlcBLG.js";import"./index-CDM5uUcF.js";import"./index-DWiQWWG0.js";import"./index-CJiKeHhG.js";import"./scrollTo-hje9G3B6.js";import"./index-Dbzr0D2n.js";import"./index-DmXiCJRd.js";import"./transition-rU-LVumG.js";import"./x-fZCBThN9.js";const u=({book:t,bookId:e,languages:i,allChaptersByBookId:p})=>{const m=(t==null?void 0:t.type)||"Manga",o=(p||[]).map(n=>n.chapter),a=o.length?Math.max(...o):0,s={chapter:a+1,title:"",status:"Draft",book_id:e,language_id:1,pages:[],novel_content:[]};return r.jsx(c,{bookType:m,type:"create",initialValues:s,languages:i,bookId:e,listButtons:o,max:a})},J=({book:t,bookId:e,languages:i,allChaptersByBookId:p})=>{const m=[{key:1,title:"Home",href:route("home")},{key:2,title:t.type,href:route(`books.${x(t.type)}`)},{key:3,title:t.title,href:route("books.show",t.id)},{key:4,title:"สร้างตอนใหม่",isLast:!0}];return r.jsxs(h,{breadcrumbs:m,children:[r.jsx(l,{title:"Create Chapter"}),r.jsx("div",{className:"py-12",children:r.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:r.jsx(u,{book:t,languages:i,bookId:parseInt(e),allChaptersByBookId:p})})})]})};export{J as default};
