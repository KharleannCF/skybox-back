(this.webpackJsonpskybox=this.webpackJsonpskybox||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},90:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(53),o=n.n(r),s=(n(62),n.p,n(63),n(1)),i=n(4),u=n(5),l=n(6),b=n(36),j=n(11),d=n(14),p=n.n(d),f=n(21),O=n(12),x=n(96),h=n(29),m=n.n(h);function g(){return(g=Object(f.a)(p.a.mark((function e(t){var n,c,a,r,o,s,i,u,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.getElementById("text"),c=document.getElementById("front"),a=document.getElementById("right"),r=document.getElementById("back"),o=document.getElementById("left"),s=document.getElementById("top"),i=document.getElementById("bottom"),(u=new FormData).append("text",n.value),u.append("front",c.files[0]),u.append("right",a.files[0]),u.append("back",r.files[0]),u.append("left",o.files[0]),u.append("top",s.files[0]),u.append("bottom",i.files[0]),e.next=18,m.a.post("/upload",u,{headers:{"Content-Type":"multipart/form-data"}});case 18:l=e.sent,console.log(l);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/scenes");case 2:n=e.sent,t(n.data.scenes);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(7);var k=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)(Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(a);case 1:case"end":return e.stop()}}),e)}))),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Upload 6 images"}),Object(w.jsxs)(x.a,{onSubmit:function(e){!function(e){g.apply(this,arguments)}(e)},children:[Object(w.jsxs)(x.a.Group,{children:[Object(w.jsx)(x.a.Control,{type:"text",id:"text",placeholder:"Enter name of the project"}),Object(w.jsx)(x.a.File,{id:"front",label:"Frente"}),Object(w.jsx)(x.a.File,{id:"right",label:"Derecha"}),Object(w.jsx)(x.a.File,{id:"back",label:"atras"}),Object(w.jsx)(x.a.File,{id:"left",label:"izquierda"}),Object(w.jsx)(x.a.File,{id:"top",label:"arriba"}),Object(w.jsx)(x.a.File,{id:"bottom",label:"abajo"})]}),Object(w.jsx)("button",{children:"Send"})]}),Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:n?n.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(b.b,{to:"/scene/".concat(e),children:e})})})):null})})]})},F=n(27),E=n(2),B=n(55);n(90);Object(F.b)({OrbitControls:B.a});var C=function(){var e=Object(F.d)(),t=e.camera,n=e.gl.domElement,a=Object(c.useRef)();return Object(F.c)((function(){return a.current.update()})),Object(w.jsx)("orbitControls",{ref:a,args:[t,n],autoRotate:!1,enableZoom:!1})};function I(){var e=Object(c.useState)({}),t=Object(O.a)(e,2),n=t[0],a=t[1],r=window.location.href.split("/").pop();Object(c.useEffect)(Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/scenes/getimages/".concat(r));case 2:t=e.sent,a(t.data.scenes);case 4:case"end":return e.stop()}}),e)}))),[]);var o=Object(F.d)().scene,s=(new E.CubeTextureLoader).load(["".concat(n.right),"".concat(n.left),"".concat(n.top),"".concat(n.bottom),"".concat(n.front),"".concat(n.back)]);return o.background=s,null}var S=function(){return Object(w.jsxs)(F.a,{className:"canvas",children:[Object(w.jsx)(C,{}),Object(w.jsx)(I,{})]})},T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(e){return Object(w.jsx)(c.Fragment,{children:Object(w.jsx)(b.a,{onUpdate:function(){return window.scrollTo(0,0)},children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{exact:!0,path:"/",component:k}),Object(w.jsx)(j.a,{exact:!0,path:"/scene/:id",component:S})]})})})}}]),n}(c.Component);var D=function(){return Object(w.jsx)(T,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(D,{})}),document.getElementById("root")),L()}},[[94,1,2]]]);
//# sourceMappingURL=main.7253e389.chunk.js.map