(this["webpackJsonpalgorithm-visualizer"]=this["webpackJsonpalgorithm-visualizer"]||[]).push([[0],{174:function(e,t,a){e.exports=a(441)},178:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),i=(a(178),a(13)),c=a(168),s=(a(179),{source:"#63C132",goal:"#cf2e2e",wall:"rgb(".concat([220,220,220],")"),visited:"#2d749a",shortestPath:"#ffff60",unvisited:""}),u=function(e){var t=Object(n.useState)(e.type),a=Object(i.a)(t,2),o=a[0],l=a[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),m=d[0],p=d[1],f=e.hooks.runState,y=function(t){l(t),e.setTypeInNode(t,e.coordinates)},v=function(){"unvisited"===e.type?y("wall"):"wall"===e.type&&y("unvisited"),p(!0)},h=Object(c.a)({height:"2.5em",width:"2.5em",border:"1px solid rgb(".concat([220,220,220],")"),background:s[o]},m&&"wall"===o&&{transform:"scale(".concat(1.3,")")});return r.a.createElement("div",{key:e.key,style:h,onMouseDown:function(){"empty"!==f&&"customized"!==f||(e.hooks.setRunState("customized"),e.hooks.setIsMouseDownInArray(!0),v())},onMouseUp:function(){e.hooks.setIsMouseDownInArray(!1),p(!1)},onMouseEnter:function(){"empty"!==f&&"customized"!==f||e.hooks.isMouseDownInArray&&(e.hooks.setIsMouseDownInArray(!0),v())},onMouseLeave:function(){p(!1),e.hooks.setIsMouseDownInArray(!1)}})},d=a(475),m=a(480),p=a(476),f=a(478),y=a(470),v=a(166),h=a.n(v),g=a(165),E=a.n(g),w=a(164),x=a.n(w),b=a(477),I=a(474),k=a(442),S=a(162),j=a.n(S),C={display:"flex",alignItems:"center",justifyContent:"center"},O={backgroundColor:"rgb(".concat([40,40,40],")"),border:"2px solid rgb(".concat([220,220,220],")"),textAlign:"left",padding:"1em"},A=function(){var e=localStorage.getItem("visited"),t=Object(n.useState)(!e),a=Object(i.a)(t,2),o=a[0],l=a[1],c=function(){l(!1),localStorage.setItem("visited",!0)};return r.a.createElement("div",null,r.a.createElement(y.a,{style:{fontSize:"0.9em",color:"white",margin:0},onClick:function(){l(!0)}},r.a.createElement(j.a,{style:{fontSize:"0.9em"}})),r.a.createElement(b.a,{style:C,open:o,onClose:c,closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500}},r.a.createElement(k.a,{in:o},r.a.createElement("div",{style:O},r.a.createElement("h2",null," Welcome to my Pathfinding Visualizer"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{color:"#63C132"}},"Green cell\xa0"),r.a.createElement("p",null," - start node ")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{color:"#cf2e2e"}},"Red cell\xa0"),r.a.createElement("p",null," - goal node ")),r.a.createElement("p",null," 1. Click inside the grid and hold down your mouse button to draw walls "),r.a.createElement("p",null," 2. Clicking again will allow you to remove walls "),r.a.createElement("p",null," 3. Select algorithm of choice (Currently only Dijkstra :D) "),r.a.createElement("p",null," 4. Select a different speed if you feel like it "),r.a.createElement("p",null," 5. Hit play :)  "),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(y.a,{style:{color:"rgb(".concat([20,20,20],")"),backgroundColor:"rgb(".concat([220,220,220],")"),fontSize:"0.9em"},onClick:c},"Let me play already"))))))},D=a(163),z=a.n(D),M=a(167),T=a(479),P=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],o=t[1],l=function(){o(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{style:{fontSize:"1em",color:"white",margin:0,marginTop:"6px"},"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(z.a,{style:{fontSize:"0.9em"}})),r.a.createElement(M.a,{anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:l},r.a.createElement(f.a,{onClick:l}," ",r.a.createElement(T.a,{target:"_blank",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",style:{color:"black"}},"Sorting Algorithms")),r.a.createElement(f.a,{onClick:l}," ",r.a.createElement(T.a,{target:"_blank",href:"https://github.com/martinstiles/algorithm-visualizer",style:{color:"black"}},"Go to repository")),r.a.createElement(f.a,{onClick:l}," ",r.a.createElement(T.a,{target:"_blank",href:"https://martinstiles.github.io/website/",style:{color:"black"}},"Visit my website"))))},F=function(e){var t={backgroundColor:"#FFE19C",minWidth:"12em",textAlign:"left"},a="empty"===e.runState,o="customized"===e.runState,l="running"===e.runState,c="finished"===e.runState,s=Object(n.useState)(""),u=Object(i.a)(s,2),v=u[0],g=u[1],w=Object(n.useState)("medium"),b=Object(i.a)(w,2),I=b[0],k=b[1];return r.a.createElement("div",{style:{marginBottom:"2em",display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(d.a,{variant:"filled"},r.a.createElement(m.a,null,r.a.createElement("div",{style:{color:"black",fontStyle:"italic"}},"Select algorithm")),r.a.createElement(p.a,{style:t,value:v,onChange:function(e){g(e.target.value),console.log(e.target.value)},label:"Algorithm",autoWidth:!0},r.a.createElement(f.a,{value:"aStar"},"A*"),r.a.createElement(f.a,{value:"dijkstra"},"Dijkstra"))),r.a.createElement(d.a,{variant:"filled",style:{marginLeft:"2em"}},r.a.createElement(m.a,null,r.a.createElement("div",{style:{color:"black",fontStyle:"italic"}},"Speed")),r.a.createElement(p.a,{style:t,value:I,onChange:function(t){k(t.target.value),e.setSpeed(t.target.value)},label:"Speed",autoWidth:!0},r.a.createElement(f.a,{value:"slow"},"Slow"),r.a.createElement(f.a,{value:"medium"},"Medium"),r.a.createElement(f.a,{value:"fast"},"Fast"))),r.a.createElement(y.a,{style:{marginLeft:"2em",color:"black",backgroundColor:""===v||l||c?"gray":"#63C132"},ariant:"contained",disabled:""===v||l,onClick:function(){e.runAlgorithm(v)}},r.a.createElement(x.a,null)),r.a.createElement(y.a,{style:{marginLeft:"1em",color:"black",backgroundColor:a||l?"gray":"#cf2e2e"},variant:"contained",disabled:a||l,onClick:o?e.resetNodes:e.clearPath},a||o?r.a.createElement(E.a,null):r.a.createElement(h.a,null))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"2.65em"}},r.a.createElement(A,null),r.a.createElement(P,null)))},B=function(){for(var e=[],t=0;t<11;t++){for(var a=[],n=0;n<21;n++){var r=t,o=n,l="unvisited";5===t&&4===n&&(l="source"),5===t&&16===n&&(l="goal"),a.push({type:l,rowIndex:r,colIndex:o})}e.push(a)}return e},L=a(109),R=function e(){var t=this;Object(L.a)(this,e),this.getFirstElem=function(){return t.array.shift()},this.add=function(e){for(var a=!1,n=0;n<t.array.length;n++)if(e.dist<t.array[n].dist){t.array.splice(n,0,e),a=!0;break}a||t.array.push(e)},this.clear=function(){t.array=[]},this.array=[]},W=function(e,t){var a=[],n=t.rowIndex,r=t.colIndex;if(n>0){var o=e[n-1][r];"unvisited"!==o.type&&"goal"!==o.type||a.push(o)}if(r<20){var l=e[n][r+1];"unvisited"!==l.type&&"goal"!==l.type||a.push(l)}if(n<10){var i=e[n+1][r];"unvisited"!==i.type&&"goal"!==i.type||a.push(i)}if(r>0){var c=e[n][r-1];"unvisited"!==c.type&&"goal"!==c.type||a.push(c)}return a},G=function(e,t){return Math.sqrt(Math.pow(e.rowIndex-t.rowIndex,2)+Math.pow(e.colIndex-t.colIndex,2))},N=function(e,t,a,n,r,o){var l=[],i=function(e){var t=[];return e.map((function(e){var a=[];e.map((function(e){a.push({type:e.type,rowIndex:e.rowIndex,colIndex:e.colIndex})})),t.push(a)})),t}(e),c=0,s=new R;i.map((function(e){return e.map((function(e){e.dist=1e4,e.prev=void 0}))}));var u=i[t.rowIndex][t.colIndex];u.dist=0,s.add(u);for(var d=void 0;0!==s.array.length;){var m=s.getFirstElem(),p=m.type;c++;for(var f=W(i,m),y=0;y<f.length;y++){var v=f[y];if("goal"===v.type){(d=v).prev=[m.rowIndex,m.colIndex],s.clear();break}v.type="visited",s.add(v);var h=m.dist+G(m,v);h<v.dist&&(v.dist=h,v.prev=[m.rowIndex,m.colIndex])}l.push({rowIndex:m.rowIndex,colIndex:m.colIndex,type:p})}if(d)for(var g=i[d.prev[0]][d.prev[1]];g.prev;)g.type="shortestPath",l.push({rowIndex:g.rowIndex,colIndex:g.colIndex,type:"shortestPath"}),g=i[g.prev[0]][g.prev[1]];var E=1,w=!0;l.map((function(t){setTimeout((function(){e[t.rowIndex][t.colIndex].type=t.type,n(w),w=!w}),a*E),E++})),setTimeout((function(){r("finished"),o(c)}),a*E);var x=d?"found":"not found";console.log("Dijkstra finished: Goal "+x)},V={slow:200,medium:100,fast:60},_=0,J=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(i.a)(l,2),s=c[0],d=c[1],m=Object(n.useState)("empty"),p=Object(i.a)(m,2),f=p[0],y=p[1],v=Object(n.useState)("medium"),h=Object(i.a)(v,2),g=h[0],E=h[1],w=Object(n.useState)(!1),x=Object(i.a)(w,2),b=(x[0],x[1]),I=Object(n.useState)(0),k=Object(i.a)(I,2),S=(k[0],k[1]),j={isMouseDownInArray:s,setIsMouseDownInArray:d,runState:f,setRunState:y};Object(n.useEffect)((function(){var e=B();o(e)}),[]);var C=function(e,t){var n=t[0],r=t[1];a[n][r].type=e};return r.a.createElement("div",null,r.a.createElement(F,{runState:f,runAlgorithm:function(e){y("running");var t=V[g];"dijkstra"===e?N(a,a[5][4],t,b,y,S):e&&function(e,t,a,n,r,o){console.log("ASTAR STARTED");var l=[],i=function(e){var t=[];return e.map((function(e){var a=[];e.map((function(e){a.push({type:e.type,rowIndex:e.rowIndex,colIndex:e.colIndex})})),t.push(a)})),t}(e),c=new R;i.map((function(e){return e.map((function(e){e.dist=1e4,e.prev=void 0}))}));var s=i[t.rowIndex][t.colIndex];s.dist=0,s.type="source",c.add(s);for(var u=i[a.rowIndex][a.colIndex],d=!1;0!==c.array.length;){var m=c.getFirstElem();"source"!==m.type&&(console.log(c.array),l.push({rowIndex:m.rowIndex,colIndex:m.colIndex,type:"visited"}));for(var p=W(i,m),f=0;f<p.length;f++){var y=p[f];if("goal"===y.type){d=!0,u.prev=[m.rowIndex,m.colIndex],c.clear();break}y.type="visited",y.dist=G(s,y)+G(y,u),y.prev=[m.rowIndex,m.colIndex],c.add(y)}}if(d)for(var v=i[u.prev[0]][u.prev[1]];v.prev;)v.type="shortestPath",l.push({rowIndex:v.rowIndex,colIndex:v.colIndex,type:"shortestPath"}),v=i[v.prev[0]][v.prev[1]];var h=1,g=!0;l.map((function(t){setTimeout((function(){e[t.rowIndex][t.colIndex].type=t.type,r(g),g=!g}),n*h),h++})),setTimeout((function(){o("finished")}),n*h);var E=d?"found":"not found";console.log("A* finished: Goal "+E)}(a,a[5][4],a[5][16],t,b,y)},setSpeed:E,resetNodes:function(){var e=B();o(e),y("empty")},clearPath:function(){var e=!1;a.map((function(t){t.map((function(t){"shortestPath"===t.type||"visited"===t.type?t.type="unvisited":"wall"===t.type&&(e=!0)}))})),y(e?"customized":"empty"),console.log("path cleared")}}),a.map((function(e,t){return r.a.createElement("div",{key:t,style:{display:"flex",flexDirection:"row"}},e.map((function(e,a){return r.a.createElement(u,{key:_++,type:e.type,hooks:j,setTypeInNode:C,coordinates:[t,a]})})))})))},Q=function(){return r.a.createElement(J,null)},q=function(){return r.a.createElement("div",{style:{marginBottom:"2em"}},r.a.createElement("h1",{style:{fontSize:"3.5em",color:"rgb(".concat([250,250,250],")")}}," Pathfinding Visualizer "))};var H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"table",marginLeft:"auto",marginRight:"auto"}},r.a.createElement(q,null),r.a.createElement(Q,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.07bb0b4c.chunk.js.map