import{aG as n,j as i,Y as d}from"./app-BFpxoxyw.js";import{B as c,E as x}from"./BookForm-D_LzDOiH.js";import{A as y}from"./AuthenticatedLayout-DSw-8pht.js";import{a as f}from"./case-DdYwyPu4.js";/* empty css            */import"./PrimaryButton-C94-c2w_.js";import"./FormInput-B4jriRpL.js";import"./InputLabel-CjRbmS8A.js";import"./TextInput-DRjXFHGw.js";import"./laravelBlade-DnAXOTAM.js";import"./index-sX75uUl4.js";import"./FooterLayout-D0PuD2DU.js";import"./ApplicationLogo-CG8BTnY1.js";import"./DeleteOutlined-DF6d2Eqb.js";import"./EyeOutlined-C3l2NdQZ.js";import"./index-DExVx8W0.js";import"./addEventListener-BM1UMp7H.js";import"./PlusOutlined-C9eNGQRz.js";import"./CategoryFilter-BFEtAxiR.js";import"./index-CNuwTQPI.js";import"./index-CwNZv2Jy.js";import"./transition-DnCpvb5P.js";import"./x-DfbfF6hQ.js";const a=({categories:o,values:t})=>{const r=n().props.auth.user,m=((t==null?void 0:t.categories)||[]).map(s=>s.id),p=t.id,e={type:(t==null?void 0:t.type)||"Manga",title:(t==null?void 0:t.title)||"",synopsis:(t==null?void 0:t.synopsis)||"",categories:m,user_id:r.id,img_url:t.img_url,status:(t==null?void 0:t.status)||"Draft",cover_file:null};return i.jsx(c,{type:x.update,initialValues:e,categories:o,bookId:p})},h=a;function Y({book:o,categories:t}){const r=[{key:1,title:"Home",href:route("home")},{key:2,title:o.type,href:route(`books.${f(o.type)}`)},{key:3,title:o.title,href:route("books.show",o.id)},{key:4,title:"Edit",isLast:!0}];return i.jsxs(y,{breadcrumbs:r,children:[i.jsx(d,{title:"Edit Book"}),i.jsx("div",{className:"py-12",children:i.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:i.jsx(h,{categories:t,values:o})})})]})}export{Y as default};