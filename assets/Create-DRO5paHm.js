import{aG as i,j as t,Y as m}from"./app-wQAUOKhq.js";import{B as s,E as p}from"./BookForm-DQuYJczg.js";import{A as a}from"./AuthenticatedLayout-CLMaEbWC.js";/* empty css            */import"./PrimaryButton-CkARO3cv.js";import"./FormInput-DKT4VAl-.js";import"./InputLabel-BwTOwdMK.js";import"./TextInput-CcMnUhp9.js";import"./laravelBlade-DnAXOTAM.js";import"./index-7bSTCAeD.js";import"./FooterLayout-BcVwboFD.js";import"./ApplicationLogo-CY0YNWAO.js";import"./DeleteOutlined-B-WHyIcN.js";import"./EyeOutlined-EUrdarin.js";import"./index-DLwnZxe6.js";import"./addEventListener-DLLlj0Iy.js";import"./PlusOutlined-D5_-Rjmm.js";import"./CategoryFilter-C5FMif5Y.js";import"./index-BiEXfQDL.js";import"./index-jAJgk8cK.js";import"./transition-BdR02cSw.js";import"./x-gMdKKmxa.js";const n=({categories:r})=>{const o=i().props.auth.user,e={type:"Manga",title:"",synopsis:"",categories:[],status:"Draft",img_url:null,user_id:o.id};return t.jsx(s,{type:p.create,initialValues:e,categories:r})},u=n;function G({categories:r}){const o=[{key:1,title:"Home",href:route("home")},{key:2,title:"หน้านักเขียน",href:route("writer.index")},{key:3,title:"Create",isLast:!0}];return t.jsxs(a,{breadcrumbs:o,children:[t.jsx(m,{title:"Create Book"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsx(u,{categories:r})})})]})}export{G as default};
