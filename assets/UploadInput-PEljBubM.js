import{r as t,j as s,B as S,av as O,a6 as y}from"./app-CDBIudRN.js";import{d as $,a as A}from"./laravelBlade-DnAXOTAM.js";import{n as E,F as H,G as L}from"./FooterLayout-CaEsYqvN.js";import{U as G,P as M,s as U}from"./index-DdtMpHb1.js";import{I as _}from"./index-BObQ_jZ2.js";import{R as D}from"./DeleteOutlined-BwzV_Csm.js";import{R as F}from"./PlusOutlined-DsqJaumb.js";var J=(a=>(a.POST="POST",a.PATCH="PATCH",a))(J||{});const q=a=>{const o=a.type==="image/jpeg"||a.type==="image/png";o||U.error("You can only upload JPG/PNG file!");const r=a.size/1024/1024<2;return r||U.error("Image must smaller than 2MB!"),o&&r},z=({onChangeUrl:a,onChangeFile:o,name:r,value:l,action:i,method:I,folderName:C})=>{const[u,g]=t.useState(0),[R,p]=t.useState(!1),[d,f]=t.useState(l),h=E(l),x=!!d,k=t.useCallback(n=>{const m=n==null?void 0:n.fileList[0].originFileObj;o&&o(m)},[]),j=t.useCallback(()=>{f("")},[]);t.useEffect(()=>{console.log(h,l),h&&l===""&&j()},[l]);const w=s.jsxs("button",{style:{border:0,background:"none",width:190,height:240},type:"button",children:[R?s.jsx(O,{}):s.jsx(F,{}),s.jsx("div",{style:{marginTop:8},children:"Upload"})]}),T=async n=>{const{onSuccess:m,onError:v,file:B,onProgress:N}=n,c=new FormData,P={headers:{"content-type":"multipart/form-data"},onUploadProgress:e=>{const b=Math.floor(e.loaded/e.total*100);g(b),b===100&&setTimeout(()=>g(0),1e3),N({percent:e.loaded/e.total*100})}};c.append(r,B),c.append("folder_name",C),c.append("old_file_url",`${d}`);try{p(!0);let e;I==="PATCH"?e=await y.patch(i,c,P):e=await y.post(i,c,P),m("Ok"),f(e.data.data),a(e.data.data),p(!1)}catch(e){v({err:e}),p(!1)}};return s.jsx(H,{children:s.jsxs(L,{className:"mx-auto",children:[s.jsxs(G,{accept:"image/png, image/jpeg",customRequest:T,name:r,listType:"picture",className:"book-cover",showUploadList:!1,action:i,beforeUpload:q,onChange:k,multiple:!1,maxCount:1,children:[x?s.jsx(_,{preview:!1,fallback:$,src:A(`storage/tmp/${d}`),alt:"image",style:{width:"100%"}}):w,x?s.jsx("div",{className:"absolute top-4 right-4",children:s.jsx(S,{className:"bg-transparent hover:bg-transparent",onClick:j,icon:s.jsx(D,{}),danger:!0,type:"dashed",shape:"circle"})}):null]}),s.jsx("div",{className:"h-4",children:u>0?s.jsx(M,{percent:u}):null})]})})},ss=z;export{J as E,ss as U};
