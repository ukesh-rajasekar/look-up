(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{136:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(24),r=c.n(s),i=c(29),j=(c(96),c(97),c(91)),l=c(7),o=c(36),d=c(138),h=c(139),b=c(140),u=c(142),m=c(4);function O(e){var t=e.input,c=e.ifClicked,n=Object(l.f)(),s=Object(a.useState)([]),r=Object(i.a)(s,2),j=r[0],O=r[1];Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(e){e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),O(e)}))}),[]);return Object(m.jsx)(d.a,{fluid:"md",children:Object(m.jsx)(h.a,{className:"justify-content-md-center",children:Object(m.jsx)(b.a,{children:Object(m.jsx)(u.a,{variant:"flush",children:j.filter((function(e){return e.name.toString().toLowerCase().indexOf(t.toString().toLowerCase())>-1})).map((function(e){return Object(m.jsxs)(u.a.Item,{id:"bootstrap-overrides",onClick:function(){return c(e),void n.push("/contactlists")},children:[Object(m.jsx)(o.a,{className:"avatar",name:e.name,round:!0,size:"70"}),Object(m.jsx)("h3",{className:"name",children:e.name})]},e.id)}))})})})})}var x=c(141),f=c(144);function p(e){var t=e.keyword,c=e.setKeyword;return Object(m.jsx)(x.a,{bg:"light",expand:"lg",children:Object(m.jsx)(f.a,{type:"text",placeholder:"Search contacts",value:t,onChange:function(e){return c(e.target.value)},className:"mr-sm-2"})})}var v=c(143);function g(e){var t=e.selectedContact,c=t.name,a=t.email,n=t.phone,s=t.website;return Object(m.jsx)(d.a,{fluid:"md",children:Object(m.jsx)(h.a,{className:"justify-content-md-center",children:Object(m.jsxs)(b.a,{className:"contact-col",children:[Object(m.jsxs)(v.a.Header,{className:"contact-header",children:[Object(m.jsx)(o.a,{className:"avatar",name:c,round:!0,size:"70"}),Object(m.jsx)("h3",{className:"contact-name",children:c})]}),Object(m.jsxs)(u.a,{variant:"flush",children:[Object(m.jsxs)(u.a.Item,{children:[Object(m.jsx)("h5",{className:"contact-list",children:"Email"}),Object(m.jsx)("a",{href:"mailto:"+a,children:a})]}),Object(m.jsxs)(u.a.Item,{children:[Object(m.jsx)("h5",{className:"contact-list",children:"Call Mobile"}),Object(m.jsx)("a",{href:"tel:"+n,children:n})]}),Object(m.jsxs)(u.a.Item,{children:[Object(m.jsx)("h5",{className:"contact-list",children:"Go to site"}),Object(m.jsx)("a",{href:"https://"+s,target:"_blank",children:Object(m.jsx)("h5",{className:"contact-list",children:s})})]})]})]})})})}var N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],d=r[1];return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)(v.a,{className:"main-card",bg:"dark",children:Object(m.jsx)(j.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsxs)(l.a,{exact:!0,path:"/look-up/",children:[Object(m.jsxs)(v.a.Header,{children:[Object(m.jsx)(p,{keyword:c,setKeyword:n})," "]}),Object(m.jsx)(O,{input:c,ifClicked:d})]}),Object(m.jsx)(l.a,{exact:!0,path:"/contactlists",children:Object(m.jsx)(g,{selectedContact:o})})]})})})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,145)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),C()},96:function(e,t,c){}},[[136,1,2]]]);
//# sourceMappingURL=main.66765135.chunk.js.map