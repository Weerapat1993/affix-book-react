import{j as r,Y as s,aC as a}from"./app-DV9NRXND.js";import{c as i,A as o}from"./AuthenticatedLayout-BH7Oq1bE.js";import{C as m,a as d,b as c,c as n}from"./card-Bm05RnMj.js";import{B as l}from"./index-CcBPE812.js";import{P as u}from"./ProductForm-DO3EJBcN.js";/* empty css            */import"./ApplicationLogo-BttutHq_.js";import"./FooterLayout-BQyBW5O-.js";import"./index-C4mrzbrJ.js";import"./tslib.es6-D5k8Tp1K.js";import"./tabs-3BqcHQHK.js";import"./image-DcQEKmXL.js";import"./index-BKNjMPK8.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=i("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);function v({auth:x}){const t=[{key:1,title:"Home",href:route("home")},{key:2,title:"Product",href:route("admin.products.index")},{key:3,title:"Create",href:route("admin.products.create"),isLast:!0}],e={name:"",slug:"",sku:"",description:"",price:0,img_url:"",target_link_url:""};return r.jsxs(o,{breadcrumbs:t,children:[r.jsx(s,{title:"Create Product"}),r.jsx("div",{className:"pb-12",children:r.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:r.jsxs(m,{className:"my-4",children:[r.jsx(d,{children:r.jsxs(c,{children:["Create Product",r.jsx("div",{className:"float-right",children:r.jsx(a,{href:route("admin.products.index"),children:r.jsxs(l,{size:"sm",children:[r.jsx(p,{className:"w-4 h-4 mr-2"}),"Back"]})})})]})}),r.jsx(n,{children:r.jsx(u,{initialValues:e,action:route("admin.products.store"),method:"post"})})]})})})]})}export{v as default};
