import{aE as s,j as t,aD as i,B as a,Y as m}from"./app-D676uEx3.js";import{B as p,E as n}from"./BookForm-DOvtsrbp.js";import{A as l}from"./AuthenticatedLayout-C0E30u1r.js";import{R as x}from"./FormInput-CnWij1kx.js";/* empty css            */import"./PrimaryButton-CyqrO_Bc.js";import"./TextInput-DvBNWn9I.js";import"./InputLabel-CV-jyyF1.js";import"./ApplicationLogo-BN6NjkgJ.js";import"./index-h_ln6pYm.js";import"./FooterLayout-B0yBxQk0.js";import"./DeleteOutlined-Cb9AW-1q.js";import"./EyeOutlined-MY150vgR.js";import"./index-CTGmEV-i.js";import"./addEventListener-5cEcnNjk.js";import"./PlusOutlined-CS2PFFez.js";import"./CategoryFilter-DuBDmSOs.js";import"./index-PigG7urO.js";import"./transition-d2ZNtSPh.js";const c=({categories:o})=>{const r=s().props.auth.user,e={type:"Manga",title:"",synopsis:"",categories:[],status:"Draft",img_url:null,user_id:r.id};return t.jsx(p,{type:n.create,initialValues:e,categories:o})},u=c;function w({categories:o}){return t.jsxs(l,{header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create Book"}),actions:t.jsx(i,{href:route("books.index"),children:t.jsx(a,{type:"default",icon:t.jsx(x,{}),children:"Back"})}),children:[t.jsx(m,{title:"Create Book"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsx(u,{categories:o})})})]})}export{w as default};