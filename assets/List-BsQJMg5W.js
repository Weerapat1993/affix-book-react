import{j as a,Y as n,aD as o}from"./app-D676uEx3.js";import{A as m}from"./AuthenticatedLayout-C0E30u1r.js";import{a as x}from"./ApplicationLogo-BN6NjkgJ.js";import{x as e,A as d,y as l}from"./FooterLayout-B0yBxQk0.js";/* empty css            */function v(r){const{users:s}=r,i=s.map(t=>({id:t.id,name:t.name,avatar:t.avatar_url,mention:t.mention}));return a.jsxs(m,{header:a.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"รายชื่อนักเขียน"}),children:[a.jsx(n,{title:"รายชื่อนักเขียน"}),a.jsx("div",{className:"py-12",children:a.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a.jsx(e,{itemLayout:"horizontal",dataSource:i,renderItem:(t,c)=>a.jsx(e.Item,{children:a.jsx(e.Item.Meta,{avatar:a.jsx(d,{src:x(`storage/avatar/${t.avatar}`),icon:a.jsx(l,{})}),title:a.jsx(o,{href:route("writer.mention",t.mention),children:t.name}),description:"Writer"})})})})})]})}export{v as default};
