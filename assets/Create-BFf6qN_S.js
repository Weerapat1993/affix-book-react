import{aG as i,j as t,Y as m}from"./app-lPWvVKsc.js";import{B as s,E as p}from"./BookForm-B9Y_Stn7.js";import{A as a}from"./AuthenticatedLayout-B5XN7Ces.js";/* empty css            */import"./PrimaryButton-Drzw6xvi.js";import"./FormInput-DxEhjFwt.js";import"./InputLabel-BCFStFdE.js";import"./TextInput-Dn7eC7lC.js";import"./laravelBlade-DnAXOTAM.js";import"./index-B2SMkMCG.js";import"./LayoutBreadcrumb-HJgglDuQ.js";import"./ApplicationLogo-CaRytBbP.js";import"./createLucideIcon-CWU9h1rJ.js";import"./DeleteOutlined-BN_GPNWk.js";import"./EyeOutlined-wlOElXWS.js";import"./index-DjWH4kQ6.js";import"./addEventListener-SciXhUrV.js";import"./PlusOutlined-bTj_iHfT.js";import"./CategoryFilter-1X2eNXNY.js";import"./index-CUsB7CMy.js";import"./index-B0jdu_Cb.js";import"./transition-v4w8w6CZ.js";import"./x-0q9hW0YF.js";const n=({categories:r})=>{const o=i().props.auth.user,e={type:"Manga",title:"",synopsis:"",categories:[],status:"Draft",img_url:null,user_id:o.id};return t.jsx(s,{type:p.create,initialValues:e,categories:r})},u=n;function H({categories:r}){const o=[{key:1,title:"Home",href:route("home")},{key:2,title:"หน้านักเขียน",href:route("writer.index")},{key:3,title:"Create",isLast:!0}];return t.jsxs(a,{breadcrumbs:o,children:[t.jsx(m,{title:"Create Book"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsx(u,{categories:r})})})]})}export{H as default};
