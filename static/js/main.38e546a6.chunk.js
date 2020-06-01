(this.webpackJsonpwebviz=this.webpackJsonpwebviz||[]).push([[0],{101:function(e,t,n){e.exports=n(237)},106:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),l=(n(106),n(4)),i=n(13),u="rendering/3",s=[],m=[],p=0,y={t:{walker:{r:1,g:.8,b:1,a:.5},vehicle:{r:1,g:.8,b:1,a:.5}},d:{walker:{r:1,g:.5,b:0,a:1},vehicle:{r:0,g:.8,b:0,a:1}}},f={walker:{x:.5,y:.5,z:2},vehicle:{x:3,y:3,z:1.5}};function d(e,t,n,a,r,c){var o=[],l=[],i=[];e[n]&&(e[n].waypoints.forEach((function(e){o.push({x:e.center.x,y:-e.center.y,z:0}),e.right&&l.push({x:e.right.x,y:-e.right.y,z:0}),e.left&&i.push({x:e.left.x,y:-e.left.y,z:0})})),c.push({points:o,scale:{x:6,y:6,z:6},color:{r:0,g:0,b:1,a:1},pose:{position:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0,w:1}}}),c.push({points:l,scale:{x:6,y:6,z:6},color:{r:1,g:1,b:1,a:1},pose:{position:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0,w:1}}}),c.push({points:i,scale:{x:6,y:6,z:6},color:{r:1,g:1,b:1,a:1},pose:{position:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0,w:1}}}),e[n].actors.forEach((function(e){var n=e.type_id.split(".")[0],c="vehicle";"vehicle"===n||"car"===n||"bicycle"===n||"motorcycle"===n||"bus"===n||"truck"===n||"train"===n?c="vehicle":"walker"!==n&&"person"!==n||(c="walker"),"d"===t&&a.push({text:e.type_id+" "+e.id+" ~"+e.distance.toFixed(1)+"m",pose:{position:{x:e.relative_position.x,y:-e.relative_position.y,z:e.relative_position.z+2}},scale:{x:1,y:1,z:1}}),r.push({pose:{orientation:{x:0,y:0,z:0,w:1},position:{x:e.relative_position.x,y:-e.relative_position.y,z:"vehicle"===c?0:.25}},scale:f[c],color:y[t][c]})})))}function b(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),y=Object(l.a)(o,2),f=y[0],b=y[1],h=Object(a.useState)(0),E=Object(l.a)(h,2),x=E[0],v=E[1],g=Object(a.useState)(30),z=Object(l.a)(g,2),k=z[0],w=z[1],j=Object(a.useState)(!1),O=Object(l.a)(j,2),R=O[0],D=O[1],S=Object(a.useState)(null),C=Object(l.a)(S,2),K=(C[0],C[1]),I=Object(a.useRef)(null),_=Object(a.useRef)(null),N=Object(a.useRef)(null),T=Object(a.useState)(1),B=Object(l.a)(T,2),L=B[0],F=B[1];Object(a.useEffect)((function(){fetch(u+"/detected.json").then((function(e){return e.json()})).then((function(e){!function(e){m=e,p=Math.max(s.length,m.length),console.log(m.length),D(!1),b(!0),v(0),console.log("loaded detection")}(e)})).catch((function(e){})),fetch(u+"/frameList.json").then((function(e){return e.json()})).then((function(e){!function(e){s=e,p=Math.max(s.length,m.length),console.log(s.length),D(!1),c(!0),v(0),console.log("loaded truth")}(e)})).catch((function(e){}))}),[]);var M=function(){D((function(e){return!e}))},P=function(){D(!1),v(0),I.current.currentTime=0,_.current.currentTime=0,N.current.currentTime=0},U=function(){w((function(e){switch(e){case 15:return I.current.playbackRate=4,_.current.playbackRate=4,N.current.playbackRate=4,120;case 30:return I.current.playbackRate=.5,_.current.playbackRate=.5,N.current.playbackRate=.5,15;case 60:return I.current.playbackRate=1,_.current.playbackRate=1,N.current.playbackRate=1,30;case 120:return I.current.playbackRate=2,_.current.playbackRate=2,N.current.playbackRate=2,60}}))};Object(a.useEffect)((function(){var e=function(e,t){e.current.currentTime>t?(e.current.pause(),0===t&&(e.current.currentTime=0)):e.current.play()},t=function(){K((function(e){return clearInterval(e),I.current.pause(),_.current.pause(),N.current.pause(),null}))};return R?(t(),I.current.play(),_.current.play(),N.current.play(),K(setInterval((function(){v((function(t){var n=t/30;e(I,n),e(_,n),e(N,n);var a=t+1;return a=(a%p+p)%p}))}),1e3/k))):R||t(),t}),[R,k]);var V=[],W=[],X=[];return n&&d(s,"t",x,V,W,X),f&&d(m,"d",x,V,W,X),Object(a.useEffect)((function(){document.addEventListener("keydown",(function(e){switch(e.code){case"Digit1":M();break;case"Digit2":U();break;case"Digit3":P()}}))}),[n,f]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"videoContainer"},r.a.createElement("video",{style:{zIndex:0===L?1:0},src:u+"/output.webm",ref:I}),r.a.createElement("video",{style:{zIndex:1===L?1:0},src:u+"/outputDET.webm",ref:_}),r.a.createElement("video",{style:{zIndex:2===L?1:0},src:u+"/outputDP.webm",ref:N}),r.a.createElement("div",{className:"videoControl"},r.a.createElement("p",null,"Video:"),r.a.createElement("button",{onClick:function(){return F(0)}},0===L?r.a.createElement("strong",null,"Original"):"Original"),r.a.createElement("button",{onClick:function(){return F(1)}},1===L?r.a.createElement("strong",null,"Detection"):"Detection"),r.a.createElement("button",{onClick:function(){return F(2)}},2===L?r.a.createElement("strong",null,"Depth map"):"Depth map"))),r.a.createElement("div",{className:"webViz"},r.a.createElement("div",{className:"controlBoard"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("button",{disabled:!n&&!f,onClick:M},"Play/Pause ",r.a.createElement("strong",null,"(1)")),r.a.createElement("button",{disabled:!n&&!f,onClick:U},"Speed ",r.a.createElement("strong",null,"(2)"),": ",r.a.createElement("strong",null,k,"fps")),r.a.createElement("button",{disabled:!n&&!f,onClick:P},"Reset ",r.a.createElement("strong",null,"(3)"))),r.a.createElement("div",{style:{margin:"1rem 1.5rem"}},r.a.createElement("h1",null,"Frame: ",n?s[x].frame:"-",r.a.createElement("br",null),"Simulation time: ",(x/30).toFixed(1),"s"),r.a.createElement("p",null,r.a.createElement("span",{class:"gv"}),r.a.createElement("span",{class:"gw"})," Ground truth"),r.a.createElement("p",null,r.a.createElement("span",{class:"dv"}),r.a.createElement("span",{class:"dw"})," Detected"),r.a.createElement("p",null,"Use your mouse!"),r.a.createElement("p",null,"Left click move camera"),r.a.createElement("p",null,"Right click tilt camera"),r.a.createElement("p",null,"Scroll to zoom"))),r.a.createElement("div",{className:"worldView"},r.a.createElement(i.g,{defaultCameraState:{distance:37.40851758105467,fovy:.7853981633974483,phi:1.1931202979777147,thetaOffset:1.3685363026390311},keyMap:{KeyA:"moveLeft",KeyD:"moveRight",KeyE:"rotateRight",KeyF:"tiltUp",KeyQ:"rotateLeft",KeyR:"tiltDown",KeyS:"moveDown",KeyW:"moveUp",KeyX:"zoomOut",KeyZ:"zoomIn"}},r.a.createElement(i.c,null,[{pose:{orientation:{x:0,y:0,z:0,w:1},position:{x:0,y:0,z:0}},scale:{x:4,y:1.8,z:1.5},color:{r:1,g:0,b:0,a:1}}]),r.a.createElement(i.e,null,X),r.a.createElement(i.d,null,W),r.a.createElement(i.f,{autoBackgroundColor:!0},V),r.a.createElement(i.b,null),r.a.createElement(i.a,null,[{pose:{orientation:{x:1,y:0,z:0,w:0},position:{x:0,y:0,z:0}},scale:{x:10,y:.8,z:.8},color:{r:1,g:1,b:1,a:1}}]),r.a.createElement(i.f,{autoBackgroundColor:!0},[{text:"X 50m",pose:{position:{x:50,y:0,z:0}},scale:{x:1,y:1,z:1}},{text:"Y 50m",pose:{position:{x:0,y:-50,z:0}},scale:{x:1,y:1,z:1}},{text:"Z 25m",pose:{position:{x:0,y:0,z:25}},scale:{x:1,y:1,z:1}},{text:"X 100m",pose:{position:{x:100,y:0,z:0}},scale:{x:1,y:1,z:1}},{text:"Y 100m",pose:{position:{x:0,y:-100,z:0}},scale:{x:1,y:1,z:1}}])))))}var h=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.38e546a6.chunk.js.map