const o=n=>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),e=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),r=n=>n.length===1?n[0]:n.length===0?null:n[e(1,n.length)-1];export{o as n,r};
