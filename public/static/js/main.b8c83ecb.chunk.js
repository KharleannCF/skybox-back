(this.webpackJsonpskybox=this.webpackJsonpskybox||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){},90:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(53),r=n.n(o),s=(n(62),n.p,n(63),n(1)),i=n(4),l=n(5),u=n(6),p=n(36),b=n(11),d=n(14),j=n.n(d),f=n(21),h=n(12),O=n(96),m=n(29),x=n.n(m);function g(){return(g=Object(f.a)(j.a.mark((function t(e){var n,a,c,o,r,s,i,l,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=document.getElementById("text"),a=document.getElementById("front"),c=document.getElementById("right"),o=document.getElementById("back"),r=document.getElementById("left"),s=document.getElementById("top"),i=document.getElementById("bottom"),(l=new FormData).append("text",n.value),l.append("front",a.files[0]),l.append("right",c.files[0]),l.append("back",o.files[0]),l.append("left",r.files[0]),l.append("top",s.files[0]),l.append("bottom",i.files[0]),t.next=18,x.a.post("http://localhost:3001/upload",l,{headers:{"Content-Type":"multipart/form-data"}});case 18:u=t.sent,console.log(u);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:3001/api/scenes");case 2:n=t.sent,e(n.data.scenes);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=n(7);var k=function(){var t=Object(a.useState)([]),e=Object(h.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)(Object(f.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(c);case 1:case"end":return t.stop()}}),t)}))),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Upload 6 images"}),Object(y.jsxs)(O.a,{onSubmit:function(t){!function(t){g.apply(this,arguments)}(t)},children:[Object(y.jsxs)(O.a.Group,{children:[Object(y.jsx)(O.a.Control,{type:"text",id:"text",placeholder:"Enter name of the project"}),Object(y.jsx)(O.a.File,{id:"front",label:"Frente"}),Object(y.jsx)(O.a.File,{id:"right",label:"Derecha"}),Object(y.jsx)(O.a.File,{id:"back",label:"atras"}),Object(y.jsx)(O.a.File,{id:"left",label:"izquierda"}),Object(y.jsx)(O.a.File,{id:"top",label:"arriba"}),Object(y.jsx)(O.a.File,{id:"bottom",label:"abajo"})]}),Object(y.jsx)("button",{children:"Send"})]}),Object(y.jsx)("div",{children:Object(y.jsx)("ul",{children:n?n.map((function(t){return Object(y.jsx)("li",{children:Object(y.jsx)(p.b,{to:"/scene/".concat(t),children:t})})})):null})})]})},E=n(27),F=n(2),B=n(55);n(90);Object(E.b)({OrbitControls:B.a}),window.addEventListener("devicemotion",(function(t){if(t.rotationRate.alpha||t.rotationRate.beta||t.rotationRate.gamma){alert("this is a motherfucker test")}}));var C=function(){var t=Object(E.d)(),e=t.camera,n=t.gl.domElement,c=Object(a.useRef)();return Object(E.c)((function(){return c.current.update()})),Object(y.jsx)("orbitControls",{ref:c,args:[e,n],autoRotate:!1,enableZoom:!1})};function I(){var t=Object(a.useState)({}),e=Object(h.a)(t,2),n=e[0],c=e[1],o=window.location.href.split("/").pop();Object(a.useEffect)(Object(f.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:3001/api/scenes/getimages/".concat(o));case 2:e=t.sent,c(e.data.scenes);case 4:case"end":return t.stop()}}),t)}))),[]);var r=Object(E.d)().scene,s=(new F.CubeTextureLoader).load(["http://localhost:3001".concat(n.right),"http://localhost:3001".concat(n.left),"http://localhost:3001".concat(n.top),"http://localhost:3001".concat(n.bottom),"http://localhost:3001".concat(n.front),"http://localhost:3001".concat(n.back)]);return r.background=s,null}var S=function(){return Object(y.jsxs)(E.a,{className:"canvas",children:[Object(y.jsx)(C,{}),Object(y.jsx)(I,{})]})},R=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(t){return Object(y.jsx)(a.Fragment,{children:Object(y.jsx)(p.a,{onUpdate:function(){return window.scrollTo(0,0)},children:Object(y.jsxs)(b.c,{children:[Object(y.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(y.jsx)(b.a,{exact:!0,path:"/scene/:id",component:S})]})})})}}]),n}(a.Component);var T=function(){return Object(y.jsx)(R,{})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),D()}},[[94,1,2]]]);
//# sourceMappingURL=main.b8c83ecb.chunk.js.map