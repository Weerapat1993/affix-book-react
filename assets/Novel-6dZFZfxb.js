import{r,j as e,Y as d}from"./app-CDBIudRN.js";import{M as p}from"./MangaLayout-DBN3ewYq.js";import{w as x,d as c,c as f,L as j,S as C,f as E,g as b,e as h,h as y,p as u,i as k}from"./mark-CDEOKV2K.js";import{C as S}from"./index-Biib7W-x.js";import{F as g}from"./index-C-pe8Ork.js";/* empty css            */import"./ApplicationLogo-BFtnq7K6.js";import"./laravelBlade-DnAXOTAM.js";import"./FooterLayout-CaEsYqvN.js";import"./index-BKNjMPK8.js";import"./index-BYQlvGxn.js";import"./DeleteOutlined-BwzV_Csm.js";import"./index-SOByvOF7.js";import"./index-pTK18D2Z.js";import"./index-BObQ_jZ2.js";import"./EyeOutlined-C0Lg3lp1.js";import"./addEventListener-i0WVkCre.js";import"./PlusOutlined-DsqJaumb.js";import"./scrollTo-CMA9vhg8.js";const w=({initialValue:i})=>{const[t,l]=r.useState(!1),s=r.useMemo(()=>x(c(h())),[]),a=r.useCallback(o=>e.jsx(f,{readOnly:!0,...o}),[]),n=r.useCallback(o=>e.jsx(j,{readOnly:!0,...o}),[]);return r.useEffect(()=>{t||l(!0)},[]),t?e.jsx(C,{editor:s,initialValue:E(i),children:e.jsx(S,{children:e.jsx(b,{renderElement:a,renderLeaf:n,placeholder:"Enter some content...",spellCheck:!0,autoFocus:!0,className:"b-none outline-none",readOnly:!0,style:{fontSize:18}})})}):null},R=w,V=[u({text:"No data"})];function K({auth:i,chapter:t,allChapterList:l}){var o,m;const s=t.novel_content||[],a=[y({text:`Chapter ${t.chapter}`}),u({text:t.title,bold:!0}),u({text:`By. ${((o=t.user)==null?void 0:o.name)||""}`}),k],n=s.length?[...a,...s]:[...a,...V];return e.jsxs(p,{title:((m=t==null?void 0:t.book)==null?void 0:m.title)||"",user:i.user,bookId:t.book_id,defaultChapter:t.chapter,list:l||[],children:[e.jsx(d,{title:`Chapter ${t.chapter} : ${t.title}`}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 pb-12",children:[e.jsx(R,{initialValue:n}),e.jsx(g.BackTop,{})]})]})}export{K as default};