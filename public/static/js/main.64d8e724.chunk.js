(this.webpackJsonpskybox=this.webpackJsonpskybox||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},91:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(53),i=n.n(o),r=(n(63),n(64),n(1)),s=n(4),l=n(5),p=n(6),u=n(36),d=n(11),b=n(12),m=n(97),j=n(19),f=n.n(j),g=n(24),h=n(29),x=n.n(h);function v(){return(v=Object(g.a)(f.a.mark((function e(t){var n,a,c,o,i,r,s,l,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.getElementById("text"),a=document.getElementById("front"),c=document.getElementById("right"),o=document.getElementById("back"),i=document.getElementById("left"),r=document.getElementById("top"),s=document.getElementById("bottom"),(l=new FormData).append("text",n.value),l.append("front",a.files[0]),l.append("right",c.files[0]),l.append("back",o.files[0]),l.append("left",i.files[0]),l.append("top",r.files[0]),l.append("bottom",s.files[0]),e.next=18,x.a.post("/upload",l,{headers:{"Content-Type":"multipart/form-data"}});case 18:p=e.sent,console.log(p);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/scenes");case 2:n=e.sent,t(n.data.scenes);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(7);var k=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(e){O.apply(this,arguments)}(c)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Upload 6 images"}),Object(w.jsxs)(m.a,{onSubmit:function(e){!function(e){v.apply(this,arguments)}(e)},children:[Object(w.jsxs)(m.a.Group,{children:[Object(w.jsx)(m.a.Control,{type:"text",id:"text",placeholder:"Enter name of the project"}),Object(w.jsx)(m.a.File,{id:"front",label:"Frente"}),Object(w.jsx)(m.a.File,{id:"right",label:"Derecha"}),Object(w.jsx)(m.a.File,{id:"back",label:"atras"}),Object(w.jsx)(m.a.File,{id:"left",label:"izquierda"}),Object(w.jsx)(m.a.File,{id:"top",label:"arriba"}),Object(w.jsx)(m.a.File,{id:"bottom",label:"abajo"})]}),Object(w.jsx)("button",{children:"Send"})]}),Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:n?n.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(u.b,{to:"/scene/".concat(e),children:e})})})):null})})]})},y=n(22),E=n(2),F=n(55),z=n(56);n(91);Object(y.b)({OrbitControls:F.a}),Object(y.b)({DeviceOrientationControls:z.a});var C=function(){var e=Object(y.d)(),t=e.camera,n=e.gl.domElement,c=Object(a.useRef)();return Object(y.c)((function(){return c.current.update()})),Object(w.jsx)("orbitControls",{ref:c,args:[t,n],autoRotate:!1,enableZoom:!1})},B=function(){var e=Object(y.d)().camera,t=Object(a.useRef)();return Object(y.c)((function(){return t.current.update()})),Object(w.jsx)("deviceOrientationControls",{ref:t,args:[e],autoRotate:!1,enableZoom:!1})};function I(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){function e(){return(e=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/scenes/getimages/".concat(t));case 2:n=e.sent,c(n.data.scenes);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(window.location.href.split("/").pop())}),[]);var o=Object(y.d)().scene,i=(new E.CubeTextureLoader).load(["".concat(n.right),"".concat(n.left),"".concat(n.top),"".concat(n.bottom),"".concat(n.front),"".concat(n.back)]);return o.background=i,null}var S=function(){var e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),Object(w.jsxs)(y.a,{className:"canvas",children:[console.log(window.DeviceOrientationEvent),e?Object(w.jsx)(B,{}):Object(w.jsx)(C,{}),Object(w.jsx)(I,{})]})},q=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(e){return Object(w.jsx)(a.Fragment,{children:Object(w.jsx)(u.a,{onUpdate:function(){return window.scrollTo(0,0)},children:Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{exact:!0,path:"/",component:k}),Object(w.jsx)(d.a,{exact:!0,path:"/scene/:id",component:S})]})})})}}]),n}(a.Component);var D=function(){return Object(w.jsx)(q,{})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(D,{})}),document.getElementById("root")),T()}},[[95,1,2]]]);
//# sourceMappingURL=main.64d8e724.chunk.js.map