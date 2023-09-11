import{s as S,f as N,n as k,b as Q,h as X}from"../chunks/scheduler.89bf212d.js";import{S as V,i as B,g,s as I,m as R,h as v,j as q,c as D,n as z,f as _,k as b,a as E,x as d,o as G,d as $,p as J,b as K,t as x,y as Y,r as P,u as j,v as A,w as F,z as M,A as Z,B as ee,C as O}from"../chunks/index.b544c513.js";function T(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function te(r){let e,n,t,s,l,a,i,o,c,y;return{c(){e=g("div"),n=g("img"),s=I(),l=g("div"),a=g("h2"),i=R(r[1]),o=I(),c=g("p"),y=R(r[2]),this.h()},l(m){e=v(m,"DIV",{class:!0});var f=q(e);n=v(f,"IMG",{src:!0,alt:!0}),s=D(f),l=v(f,"DIV",{});var C=q(l);a=v(C,"H2",{});var p=q(a);i=z(p,r[1]),p.forEach(_),o=D(C),c=v(C,"P",{});var w=q(c);y=z(w,r[2]),w.forEach(_),C.forEach(_),f.forEach(_),this.h()},h(){N(n.src,t=`https://robohash.org/${r[0]}?200x200`)||b(n,"src",t),b(n,"alt","a robot"),b(e,"class","card svelte-1amln80")},m(m,f){E(m,e,f),d(e,n),d(e,s),d(e,l),d(l,a),d(a,i),d(l,o),d(l,c),d(c,y)},p(m,[f]){f&1&&!N(n.src,t=`https://robohash.org/${m[0]}?200x200`)&&b(n,"src",t),f&2&&G(i,m[1]),f&4&&G(y,m[2])},i:k,o:k,d(m){m&&_(e)}}}function ne(r,e,n){let{id:t,name:s,email:l}=e;return r.$$set=a=>{"id"in a&&n(0,t=a.id),"name"in a&&n(1,s=a.name),"email"in a&&n(2,l=a.email)},[t,s,l]}class se extends V{constructor(e){super(),B(this,e,ne,te,S,{id:0,name:1,email:2})}}function U(r,e,n){const t=r.slice();return t[1]=e[n].id,t[2]=e[n].name,t[3]=e[n].email,t}function W(r){let e,n;return e=new se({props:{id:r[1],name:r[2],email:r[3]}}),{c(){P(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.id=t[1]),s&1&&(l.name=t[2]),s&1&&(l.email=t[3]),e.$set(l)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function ae(r){let e,n,t=T(r[0]),s=[];for(let a=0;a<t.length;a+=1)s[a]=W(U(r,t,a));const l=a=>x(s[a],1,1,()=>{s[a]=null});return{c(){e=g("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=v(a,"DIV",{class:!0});var i=q(e);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(_),this.h()},h(){b(e,"class","card-list svelte-in3xk1")},m(a,i){E(a,e,i);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);n=!0},p(a,[i]){if(i&1){t=T(a[0]);let o;for(o=0;o<t.length;o+=1){const c=U(a,t,o);s[o]?(s[o].p(c,i),$(s[o],1)):(s[o]=W(c),s[o].c(),$(s[o],1),s[o].m(e,null))}for(J(),o=t.length;o<s.length;o+=1)l(o);K()}},i(a){if(!n){for(let i=0;i<t.length;i+=1)$(s[i]);n=!0}},o(a){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)x(s[i]);n=!1},d(a){a&&_(e),Y(s,a)}}}function le(r,e,n){let{robots:t}=e;return r.$$set=s=>{"robots"in s&&n(0,t=s.robots)},[t]}class re extends V{constructor(e){super(),B(this,e,le,ae,S,{robots:0})}}function oe(r){let e,n,t,s;return{c(){e=g("div"),n=g("input"),this.h()},l(l){e=v(l,"DIV",{});var a=q(e);n=v(a,"INPUT",{class:!0,type:!0,placeholder:!0}),a.forEach(_),this.h()},h(){b(n,"class","robo-search svelte-14n8y7v"),b(n,"type","search"),b(n,"placeholder","Search robots...")},m(l,a){E(l,e,a),d(e,n),M(n,r[0]),t||(s=Z(n,"input",r[1]),t=!0)},p(l,[a]){a&1&&n.value!==l[0]&&M(n,l[0])},i:k,o:k,d(l){l&&_(e),t=!1,s()}}}function ie(r,e,n){let{query:t=""}=e;function s(){t=this.value,n(0,t)}return r.$$set=l=>{"query"in l&&n(0,t=l.query)},[t,s]}class ce extends V{constructor(e){super(),B(this,e,ie,oe,S,{query:0})}}function ue(r){let e,n="No robots with that name!";return{c(){e=g("p"),e.textContent=n,this.h()},l(t){e=v(t,"P",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-2mbjf"&&(e.textContent=n),this.h()},h(){b(e,"class","message svelte-nasfl9")},m(t,s){E(t,e,s)},p:k,i:k,o:k,d(t){t&&_(e)}}}function fe(r){let e,n;return e=new re({props:{robots:r[1]}}),{c(){P(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,s){const l={};s&2&&(l.robots=t[1]),e.$set(l)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function he(r){let e,n,t="Welcome to RoboFriends",s,l,a,i,o,c,y;function m(u){r[3](u)}let f={};r[0]!==void 0&&(f.query=r[0]),l=new ce({props:f}),Q.push(()=>ee(l,"query",m));const C=[fe,ue],p=[];function w(u,h){return u[1].length>0?0:1}return o=w(r),c=p[o]=C[o](r),{c(){e=g("div"),n=g("h1"),n.textContent=t,s=I(),P(l.$$.fragment),i=I(),c.c(),this.h()},l(u){e=v(u,"DIV",{class:!0});var h=q(e);n=v(h,"H1",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-14uvpge"&&(n.textContent=t),s=D(h),j(l.$$.fragment,h),i=D(h),c.l(h),h.forEach(_),this.h()},h(){b(n,"class","animate-character svelte-nasfl9"),b(e,"class","home-page svelte-nasfl9")},m(u,h){E(u,e,h),d(e,n),d(e,s),A(l,e,null),d(e,i),p[o].m(e,null),y=!0},p(u,[h]){const H={};!a&&h&1&&(a=!0,H.query=u[0],X(()=>a=!1)),l.$set(H);let L=o;o=w(u),o===L?p[o].p(u,h):(J(),x(p[L],1,1,()=>{p[L]=null}),K(),c=p[o],c?c.p(u,h):(c=p[o]=C[o](u),c.c()),$(c,1),c.m(e,null))},i(u){y||($(l.$$.fragment,u),$(c),y=!0)},o(u){x(l.$$.fragment,u),x(c),y=!1},d(u){u&&_(e),F(l),p[o].d()}}}function de(r,e,n){let t,{data:s}=e,l="";function a(i){l=i,n(0,l)}return r.$$set=i=>{"data"in i&&n(2,s=i.data)},r.$$.update=()=>{r.$$.dirty&5&&n(1,t=s.robots.filter(i=>i.name.toLowerCase().includes(l.toLowerCase())))},[l,t,s,a]}class pe extends V{constructor(e){super(),B(this,e,de,he,S,{data:2})}}export{pe as component};
