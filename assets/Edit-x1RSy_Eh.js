import{j as i,B as d,Y as l}from"./app-DpMSqZno.js";import{C as x}from"./ChapterForm-Bp7z6zzY.js";import{A as c}from"./AuthenticatedLayout-Db7F19Hl.js";import{R as u}from"./FormInput-nJoPWxdA.js";import"./TextInput-DZ1nIDz2.js";import"./InputLabel-C_kKqmin.js";import"./ApplicationLogo-9L4KVSOt.js";import"./index-DaFZLRyg.js";import"./FooterLayout-B7IU0h2A.js";import"./DeleteOutlined-BeyAe15s.js";import"./EyeOutlined-NhxnA974.js";import"./index-DOobr709.js";import"./addEventListener-DkpXA2Nd.js";import"./PlusOutlined-BzUaCXBt.js";import"./mark-DXpI9QyR.js";import"./index-pTK18D2Z.js";import"./UploadInput-D-h_BHg9.js";import"./index-DsPkJ3u_.js";import"./index-D-1dYtwe.js";import"./index-CyrOCrc-.js";import"./scrollTo-D_iyd36Q.js";import"./index-BYqGNjfZ.js";import"./index-C0EIFI5v.js";import"./transition-Rh4TYZqv.js";const g=({book:o,languages:r,chapter:t,allChaptersByBookId:s})=>{const e=(o==null?void 0:o.type)||"Manga",a=(s||[]).map(n=>n.chapter),m=Math.max(...a),p={id:t.id,chapter:t.chapter,title:t.title,status:t.status,book_id:t.book_id,language_id:t.language_id,pages:t.pages,novel_content:t.novel_content||[]};return i.jsx(x,{bookType:e,type:"update",initialValues:p,languages:r,bookId:t.book_id,chapterId:t.id,listButtons:a,max:m})},G=({book:o,chapter:r,allChaptersByBookId:t,languages:s})=>i.jsxs(c,{header:i.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Edit Chapter"}),actions:i.jsx(d,{onClick:()=>window.history.back(),type:"default",icon:i.jsx(u,{}),children:"Back"}),children:[i.jsx(l,{title:"Edit Chapter"}),i.jsx("div",{className:"py-12",children:i.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:i.jsx(g,{book:o,languages:s,chapter:r,allChaptersByBookId:t})})})]});export{G as default};