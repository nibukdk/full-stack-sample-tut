(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{39:function(t,n,e){"use strict";e.r(n);var o=e(15),c=e.n(o),r=e(6),a=e(4),i=e(2),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,o=n.important?"make not important":"make important";return Object(u.jsxs)("li",{children:[n.content,Object(u.jsx)("button",{onClick:e,children:o})]})},j=e(3),f=e.n(j),b="/api/notes",l=function(){return f.a.get(b).then((function(t){return t.data}))},d=function(t){return f.a.post(b,t).then((function(t){return t.data}))},p=function(t,n){return f.a.put("".concat(b,"/").concat(t),n).then((function(t){return t.data}))},h=function(t){var n=Object(i.useState)([]),e=Object(a.a)(n,2),o=e[0],c=e[1],j=Object(i.useState)(!0),f=Object(a.a)(j,2),b=f[0],h=f[1],O=Object(i.useState)("a new note..."),m=Object(a.a)(O,2),g=m[0],v=m[1];Object(i.useEffect)((function(){l().then((function(t){c(t)}))}),[]),console.log("render",o.length,"notes");var x=b?o:o.filter((function(t){return!0===t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsxs)("button",{onClick:function(){return h(!b)},children:["show ",b?"important":"all"]}),Object(u.jsx)("ul",{children:x.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=o.find((function(n){return n.id===t})),e=Object(r.a)(Object(r.a)({},n),{},{important:!n.important});p(t,e).then((function(n){c(o.map((function(e){return e.id!==t?e:n})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:g,date:(new Date).toISOString(),important:Math.random()<.5};d(n).then((function(t){c(o.concat(t)),v("")}))},children:[Object(u.jsx)("input",{value:g,onChange:function(t){console.log(t.target.value),v(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.77fe18c0.chunk.js.map