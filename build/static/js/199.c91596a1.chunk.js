(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[199],{2030:function(e,t,a){"use strict";a.r(t),a.d(t,"PayoutAddRequest",(function(){return C}));var n=a(43),l=a(13),r=a(14),s=a(16),c=a(15),m=a(0),o=a.n(m),u=a(1242),i=a(1240),d=a(1241),h=a(187),p=a(1245),g=a(808),b=a(807),f=a(803),E=a(77),v=(a(826),a(58)),y=a(801),_=a(941),C=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={activeTab:"1"},e.toggle=function(t){e.setState({activeTab:t})},e.onChangeHandler=function(t){e.setState({selectedFile:t.target.files[0]}),e.setState({selectedName:t.target.files[0].name}),console.log(t.target.files[0])},e.changeHandler1=function(t){e.setState({status:t.target.value})},e.changeHandler=function(t){e.setState(Object(n.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),console.log(e.props.match.params,e.state);var a=e.props.match.params.id;E.a.post("/view_onecust/".concat(a),_.data).then((function(t){console.log(t),e.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var t=this.props.match.params.id;E.a.get("/getonecustomer/".concat(t)).then((function(t){console.log(t),e.setState({first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",selectedFile:null,status:t.data.data.status})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y.a,{breadCrumbTitle:"Add Payout Request",breadCrumbParent:"Home",breadCrumbActive:"Add Payout Request "}),o.a.createElement(u.a,null,o.a.createElement(i.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Payout Request")),o.a.createElement(d.a,null,o.a.createElement(v.b,{render:function(e){var t=e.history;return o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/prediction/predictionlist")}},"Back")}}))),o.a.createElement(p.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(i.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Current Amount"),o.a.createElement(f.a,{required:!0,type:"text",name:"first_name",placeholder:"Enter Title",value:this.state.first_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Request Amount"),o.a.createElement(f.a,{required:!0,type:"text",name:"first_name",placeholder:"Enter Title",value:this.state.first_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},o.a.createElement(b.a,null,"Date"),o.a.createElement(f.a,{required:!0,type:"date",name:"customer_email",placeholder:"Email",value:this.state.customer_email,onChange:this.changeHandler}))),o.a.createElement(i.a,null),o.a.createElement(i.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),a}(m.Component);t.default=C}}]);
//# sourceMappingURL=199.c91596a1.chunk.js.map