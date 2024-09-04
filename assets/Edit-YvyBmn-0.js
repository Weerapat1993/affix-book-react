import{W as l,j as e,a9 as m,B as p,Y as x}from"./app-seHo-2Pj.js";import{P as h}from"./PrimaryButton-39LiQFbT.js";import{F as i}from"./FormInput-BR6tTzwd.js";import{X as j}from"./transition-C_GOONea.js";import{A as g}from"./AuthenticatedLayout-BbJCBrEl.js";import{R as f}from"./CaretLeftOutlined-DOh7inuz.js";import"./InputLabel-lrheF2GI.js";import"./TextInput-DWkgGXts.js";import"./ApplicationLogo-Dsn01JS_.js";import"./FooterLayout-Vber5aYW.js";const v=({initialValues:s})=>{const{data:r,patch:n,reset:b,setData:a,processing:c,errors:o,recentlySuccessful:u}=l(s),d=t=>{t.preventDefault(),n(route("products.update",r.id))};return e.jsxs("form",{onSubmit:d,className:"mt-6 space-y-6",children:[e.jsx("input",{className:"hidden",name:"id",value:s.id}),e.jsx(i,{label:"Name",type:"text",value:r.name,onChange:t=>a("name",t.target.value),required:!0,isFocused:!0,errorMessage:o.name}),e.jsx(i,{label:"Price",value:r.price,type:"number",onChange:t=>a("price",parseInt(t.target.value)),required:!0,isFocused:!0,errorMessage:o.price}),e.jsx(i,{label:"Stock",value:r.stock,type:"number",onChange:t=>a("stock",parseInt(t.target.value)),required:!0,isFocused:!0,errorMessage:o.stock}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(h,{disabled:c,children:"Save"}),e.jsx(j,{show:u,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Saved."})})]})]})},y=v;function M({auth:s,product:r}){return e.jsxs(g,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Edit Product"}),actions:e.jsx(m,{href:route("products.index"),children:e.jsx(p,{type:"default",icon:e.jsx(f,{}),children:"Back"})}),children:[e.jsx(x,{title:"Create Product"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx(y,{initialValues:r})})})]})}export{M as default};
