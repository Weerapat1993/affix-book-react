import{aD as n,j as i,Y as d}from"./app-DV9NRXND.js";import{B as c,E as x}from"./BookForm-yNeL1lNK.js";import{A as y}from"./AuthenticatedLayout-BH7Oq1bE.js";import{a as f}from"./case-DdUwvZRC.js";/* empty css            */import"./PrimaryButton-5loc_afy.js";import"./FormInput--c9u8Auq.js";import"./InputLabel-BLNzXVLX.js";import"./TextInput-Q7OBqHDO.js";import"./ApplicationLogo-BttutHq_.js";import"./index-DeQSvg7P.js";import"./FooterLayout-BQyBW5O-.js";import"./DeleteOutlined-CP_uMJld.js";import"./EyeOutlined-g2T2rbd4.js";import"./index-B3DRfpBm.js";import"./addEventListener-BXzlr4Dd.js";import"./PlusOutlined-B8Fa1fb7.js";import"./CategoryFilter-CfLWQ9B3.js";import"./index-DYFJxuvL.js";import"./index-Cbo5CzgP.js";import"./transition-DikKSpAg.js";const a=({categories:o,values:t})=>{const r=n().props.auth.user,m=((t==null?void 0:t.categories)||[]).map(s=>s.id),p=t.id,e={type:(t==null?void 0:t.type)||"Manga",title:(t==null?void 0:t.title)||"",synopsis:(t==null?void 0:t.synopsis)||"",categories:m,user_id:r.id,img_url:t.img_url,status:(t==null?void 0:t.status)||"Draft",cover_file:null};return i.jsx(c,{type:x.update,initialValues:e,categories:o,bookId:p})},h=a;function V({book:o,categories:t}){const r=[{key:1,title:"Home",href:route("home")},{key:2,title:o.type,href:route(`books.${f(o.type)}`)},{key:3,title:o.title,href:route("books.show",o.id)},{key:4,title:"Edit",isLast:!0}];return i.jsxs(y,{breadcrumbs:r,children:[i.jsx(d,{title:"Edit Book"}),i.jsx("div",{className:"py-12",children:i.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:i.jsx(h,{categories:t,values:o})})})]})}export{V as default};