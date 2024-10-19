import{r as m,U as N,w as $,aI as A,aJ as z,j as e,B as g,W as D,aC as C,aK as _}from"./app-BuAjSH8i.js";import{D as x,f as k,k as E}from"./index.es-BNIkzEIh.js";import{a as H,d as M}from"./laravelBlade-DnAXOTAM.js";import{l as p,m as O,u as S,r as R,F as B,G as f,p as P,s as U,T as L}from"./LayoutBreadcrumb-BLvKFZBi.js";import{R as q}from"./HeartFilled-Ci0eeU0-.js";import{F as j}from"./ApplicationLogo-DKeDfmxM.js";import{I as G}from"./index-CrsVFHyb.js";import{R as J}from"./DeleteOutlined-Bqt9q-JB.js";import{M as K}from"./index-CqxG1YX9.js";var W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]},name:"heart",theme:"outlined"},Y=function(n,o){return m.createElement(N,$({},n,{ref:o,icon:W}))},Q=m.forwardRef(Y);const V=({bookId:s,onFollow:n})=>{const o=p(r=>{var t,l;return(l=(t=r.bookFollowingReducer.keys)==null?void 0:t[s])==null?void 0:l.isLoading}),i=p(r=>{var t,l;return(l=(t=r.bookFollowingReducer.keys)==null?void 0:t[s])==null?void 0:l.isFetch}),a=p(r=>{var t,l;return(l=(t=r.bookFollowingReducer.keys)==null?void 0:t[s])==null?void 0:l.data}),u=p(r=>{var t,l;return(l=(t=r.bookFollowingReducer.keys)==null?void 0:t[s])==null?void 0:l.error}),c=O(),d=!!(a!=null&&a.is_following)||!1;m.useEffect(()=>{i||h({bookId:s})},[s]),m.useEffect(()=>{i&&n&&n(d?1:0)},[d]);const h=async r=>await c(A(r));return{isLoading:o,isFetch:i,isFollowing:d,data:a,error:u,onClickFollowing:r=>{c(z(r))},refetch:h}},X=s=>{const{bookId:n,onFollow:o,followCount:i}=s,{isFollowing:a,onClickFollowing:u,isFetch:c}=V({bookId:n,onFollow:o});return c?e.jsx(g,{type:a?"primary":"default",shape:"round",icon:a?e.jsx(q,{}):e.jsx(Q,{}),danger:!0,onClick:()=>u({bookId:n}),className:a?"hover:bg-transparent":"bg-transparent",children:i||null}):null},{Text:T}=L,{confirm:Z}=K,b=({book:s,isSuggest:n})=>{var y,F;const{isUser:o,isRole:i,isAuth:a}=S(),{delete:u}=D(),c=()=>{Z({title:"Delete Book",icon:e.jsx(_,{}),content:"Are you sure delete this book?",okText:"Yes",okType:"danger",okButtonProps:{type:"primary"},cancelText:"No",onOk(){u(route("books.destroy",s.id))},onCancel(){}})},[d,h]=m.useState(0),w=s.status==="Published"?"success":"warning",r=((s==null?void 0:s.active_followings_count)||0)+d,t=[{key:3,label:"Description",children:e.jsx("pre",{children:e.jsx(T,{className:"text-wrap",children:s.synopsis})})}],l=[{key:3,label:"Tags",children:e.jsx(j,{gap:"small",wrap:!0,children:s.categories.map(v=>e.jsx(R,{children:v.name},v.id))})}],I=[{key:1,label:"Author",children:e.jsx(C,{href:route("writer.mention",((y=s==null?void 0:s.user)==null?void 0:y.mention)||""),children:e.jsx(T,{children:((F=s==null?void 0:s.user)==null?void 0:F.name)||""})})},{key:2,label:"Status",children:e.jsx(R,{color:w,children:s.status})}];return e.jsx("div",{children:e.jsxs(B,{gutter:[16,16],children:[e.jsx(f,{md:6,sm:24,className:"text-center mx-auto",children:e.jsx(G,{preview:!1,alt:s.title,src:H(`storage/${s.img_url}`),fallback:M,style:{borderRadius:10}})}),e.jsxs(f,{md:18,sm:24,children:[e.jsxs(j,{vertical:!0,gap:"small",children:[e.jsx(x,{column:1,title:s.title,extra:o(s.user_id)&&!n?e.jsxs(P.Compact,{children:[e.jsx(C,{href:route("books.edit",s.id),children:e.jsx(g,{type:"primary",shape:"round",icon:e.jsx(U,{})})}),e.jsx(g,{shape:"round",onClick:c,type:"primary",danger:!0,icon:e.jsx(J,{})})]}):null,items:I}),e.jsx("div",{className:"hidden sm:block",children:e.jsx(x,{column:1,size:"small",items:t})}),e.jsx("div",{className:"sm:hidden block",children:e.jsx(x,{column:1,size:"small",layout:"vertical",items:t})}),e.jsx(x,{column:1,items:l})]}),e.jsxs(B,{className:"my-4",children:[e.jsx(f,{flex:1,children:a&&!n?e.jsx(X,{followCount:r,bookId:s.id,onFollow:h}):null}),e.jsx(f,{flex:1,children:e.jsxs(j,{className:"w-full justify-end",wrap:!0,gap:"small",children:[e.jsx(k,{url:route("books.show",s.id),quote:s.title,hashtag:"#affixbook",size:32,round:!0}),e.jsx(E,{url:route("books.show",s.id),title:`${s.title} ตอนใหม่มาแล้ว !!!`,size:32,round:!0})]})})]})]})]})})},ce=b;export{ce as B};
