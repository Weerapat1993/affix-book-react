import{j as t,Y as o,aC as n}from"./app-BuAjSH8i.js";import{A as m}from"./AuthenticatedLayout-DSELhlAX.js";import{a as x}from"./laravelBlade-DnAXOTAM.js";import{z as e,A as d,B as l}from"./LayoutBreadcrumb-BLvKFZBi.js";/* empty css            */import"./ApplicationLogo-DKeDfmxM.js";import"./x-pZaxt89m.js";import"./createLucideIcon-CnwCtmzH.js";function A(r){const{users:i}=r,s=i.map(a=>({id:a.id,name:a.name,avatar:a.avatar_url,mention:a.mention}));return t.jsxs(m,{header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"รายชื่อนักเขียน"}),children:[t.jsx(o,{title:"รายชื่อนักเขียน"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsx(e,{itemLayout:"horizontal",dataSource:s,renderItem:(a,c)=>t.jsx(e.Item,{children:t.jsx(e.Item.Meta,{avatar:t.jsx(d,{src:x(`storage/avatar/${a.avatar}`),icon:t.jsx(l,{})}),title:t.jsx(n,{href:route("writer.mention",a.mention),children:a.name}),description:"Writer"})})})})})]})}export{A as default};
