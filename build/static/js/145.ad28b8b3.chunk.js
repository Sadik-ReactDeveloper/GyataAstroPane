(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[145],{1976:function(e,t,a){"use strict";a.r(t);var n=a(13),s=a(14),r=a(16),i=a(15),l=a(0),o=a.n(l),c=a(1240),d=a(1241),u=a(1238),h=a(1239),m=a(1242),g=a(187),x=a(1245),v=(a(28),a(848),a(77)),w=a(58),T=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).draw=function(){var e=document.getElementById("canvas"),t=document.getElementById("canvas").parentElement.offsetWidth;if(console.log(t),document.getElementById("canvas").style.width=t-10+"px",document.getElementById("canvas").style.height=t-10+"px",e.getContext){var a=e.getContext("2d");s.drawSquareHouse(a,50,0,75,25,50,50,25,25),s.setText(a,50,25,"1","subtext"),s.drawTriangleHouse(a,0,0,50,0,25,25),s.setText(a,25,12,"2","subtext"),s.drawTriangleHouse(a,0,0,25,25,0,50),s.setText(a,12,25,"3","subtext"),s.drawSquareHouse(a,25,25,50,50,25,75,0,50),s.setText(a,25,50,"4","subtext"),s.drawTriangleHouse(a,0,50,25,75,0,100),s.setText(a,12,75,"5","subtext"),s.drawTriangleHouse(a,25,75,50,100,0,100),s.setText(a,25,88,"6","subtext"),s.drawSquareHouse(a,50,50,75,75,50,100,25,75),s.setText(a,50,75,"7","subtext"),s.drawTriangleHouse(a,75,75,100,100,50,100),s.setText(a,75,88,"8","subtext"),s.drawTriangleHouse(a,75,75,100,50,100,100),s.setText(a,88,75,"9","subtext"),s.drawSquareHouse(a,75,25,100,50,75,75,50,50),s.setText(a,75,50,"10","subtext"),s.drawTriangleHouse(a,100,0,100,50,75,25),s.setText(a,88,25,"11","subtext"),s.drawTriangleHouse(a,50,0,100,0,75,25),s.setText(a,75,12,"12","subtext")}},s.drawTriangleHouse=function(e,t,a,n,s,r,i){var l=document.getElementById("canvas");e.beginPath(),e.moveTo(t*l.width/100,a*l.height/100),e.lineTo(n*l.width/100,s*l.height/100),e.lineTo(r*l.width/100,i*l.height/100),e.closePath(),e.lineWidth=1,e.strokeStyle="#666666",e.stroke()},s.drawSquareHouse=function(e,t,a,n,s,r,i,l,o){var c=document.getElementById("canvas");e.beginPath(),e.moveTo(t*c.width/100,a*c.height/100),e.lineTo(n*c.width/100,s*c.height/100),e.lineTo(r*c.width/100,i*c.height/100),e.lineTo(l*c.width/100,o*c.height/100),e.closePath(),e.lineWidth=1,e.strokeStyle="#666666",e.stroke()},s.setText=function(e,t,a,n,s){var r=document.getElementById("canvas");e.font="16px Comic Sans MS",e.fillStyle="red",e.fillText(n,t*r.width/100,a*r.width/100)},s.state={data:{}},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.draw();var t=this.props.match.params.id;v.a.get("/nodejs/api/dealer/getonebank/".concat(t)).then((function(t){console.log(t.data.data),e.setState({data:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(d.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(u.a,{listTag:"div"},o.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(h.a,{href:"/app/setting/bank/bankList",tag:"a"},"Bank List"),o.a.createElement(h.a,{active:!0},"View Bank"))))),o.a.createElement(m.a,{className:"overflow-hidden app-ecommerce-details"},o.a.createElement(c.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"BirthDetails")),o.a.createElement(d.a,null,o.a.createElement(w.b,{render:function(e){var t=e.history;return o.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/conversation/intakelist")}},"Back")}}))),o.a.createElement(x.a,{className:"pb-0"},"\xa0\xa0 ",o.a.createElement("canvas",{id:"canvas",width:"400",height:"500"})))))}}]),a}(o.a.Component);t.default=T},848:function(e,t,a){}}]);
//# sourceMappingURL=145.ad28b8b3.chunk.js.map