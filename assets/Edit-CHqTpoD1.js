import{aE as d,j as o,aD as c,B as e,Y as x}from"./app-DpMSqZno.js";import{B as a,E as f}from"./BookForm-AuVv-AM7.js";import{A as h}from"./AuthenticatedLayout-Db7F19Hl.js";import{R as j}from"./FormInput-nJoPWxdA.js";import"./PrimaryButton-CGwrvBSN.js";import"./TextInput-DZ1nIDz2.js";import"./InputLabel-C_kKqmin.js";import"./ApplicationLogo-9L4KVSOt.js";import"./index-DaFZLRyg.js";import"./FooterLayout-B7IU0h2A.js";import"./DeleteOutlined-BeyAe15s.js";import"./EyeOutlined-NhxnA974.js";import"./index-DOobr709.js";import"./addEventListener-DkpXA2Nd.js";import"./PlusOutlined-BzUaCXBt.js";import"./CategoryFilter-1RmumQq_.js";import"./index-C0EIFI5v.js";import"./transition-Rh4TYZqv.js";const g=({categories:i,values:t})=>{const r=d().props.auth.user,m=((t==null?void 0:t.categories)||[]).map(n=>n.id),p=t.id,s={type:(t==null?void 0:t.type)||"Manga",title:(t==null?void 0:t.title)||"",synopsis:(t==null?void 0:t.synopsis)||"",categories:m,user_id:r.id,img_url:t.img_url,status:(t==null?void 0:t.status)||"Draft",cover_file:null};return o.jsx(a,{type:f.update,initialValues:s,categories:i,bookId:p})},y=g;function $({book:i,categories:t}){return o.jsxs(h,{header:o.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Edit Book"}),actions:o.jsx(c,{href:route("books.show",i.id),children:o.jsx(e,{type:"default",icon:o.jsx(j,{}),children:"Back"})}),children:[o.jsx(x,{title:"Edit Book"}),o.jsx("div",{className:"py-12",children:o.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:o.jsx(y,{categories:t,values:i})})})]})}export{$ as default};
