import{r as t,j as s,B as S,aw as O,a7 as y}from"./app-DpMSqZno.js";import{d as $,a as A}from"./ApplicationLogo-9L4KVSOt.js";import{p as E,R as H,C as L}from"./FooterLayout-B7IU0h2A.js";import{U as M,P as _,s as U}from"./index-DaFZLRyg.js";import{I as D}from"./index-DOobr709.js";import{R as G}from"./DeleteOutlined-BeyAe15s.js";import{R as J}from"./PlusOutlined-BzUaCXBt.js";var q=(a=>(a.POST="POST",a.PATCH="PATCH",a))(q||{});const z=a=>{const o=a.type==="image/jpeg"||a.type==="image/png";o||U.error("You can only upload JPG/PNG file!");const r=a.size/1024/1024<2;return r||U.error("Image must smaller than 2MB!"),o&&r},F=({onChangeUrl:a,onChangeFile:o,name:r,value:l,action:p,method:C,folderName:I})=>{const[u,g]=t.useState(0),[R,i]=t.useState(!1),[d,f]=t.useState(l),h=E(l),x=!!d,w=t.useCallback(n=>{const m=n==null?void 0:n.fileList[0].originFileObj;o&&o(m)},[]),j=t.useCallback(()=>{f("")},[]);t.useEffect(()=>{console.log(h,l),h&&l===""&&j()},[l]);const k=s.jsxs("button",{style:{border:0,background:"none",width:190,height:240},type:"button",children:[R?s.jsx(O,{}):s.jsx(J,{}),s.jsx("div",{style:{marginTop:8},children:"Upload"})]}),T=async n=>{const{onSuccess:m,onError:v,file:B,onProgress:N}=n,c=new FormData,P={headers:{"content-type":"multipart/form-data"},onUploadProgress:e=>{const b=Math.floor(e.loaded/e.total*100);g(b),b===100&&setTimeout(()=>g(0),1e3),N({percent:e.loaded/e.total*100})}};c.append(r,B),c.append("folder_name",I),c.append("old_file_url",`${d}`);try{i(!0);let e;C==="PATCH"?e=await y.patch(p,c,P):e=await y.post(p,c,P),m("Ok"),f(e.data.data),a(e.data.data),i(!1)}catch(e){v({err:e}),i(!1)}};return s.jsx(H,{children:s.jsxs(L,{className:"mx-auto",children:[s.jsxs(M,{accept:"image/png, image/jpeg",customRequest:T,name:r,listType:"picture",className:"book-cover",showUploadList:!1,action:p,beforeUpload:z,onChange:w,multiple:!1,maxCount:1,children:[x?s.jsx(D,{preview:!1,fallback:$,src:A(`storage/tmp/${d}`),alt:"image",style:{width:"100%"}}):k,x?s.jsx("div",{className:"absolute top-4 right-4",children:s.jsx(S,{className:"bg-transparent hover:bg-transparent",onClick:j,icon:s.jsx(G,{}),danger:!0,type:"dashed",shape:"circle"})}):null]}),s.jsx("div",{className:"h-4",children:u>0?s.jsx(_,{percent:u}):null})]})})},ss=F;export{q as E,ss as U};
