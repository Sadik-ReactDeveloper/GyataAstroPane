(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[115],{1724:function(e,a,t){},2049:function(e,a,t){"use strict";t.r(a);var l=t(43),n=t(13),s=t(14),c=t(16),r=t(15),m=t(0),i=t.n(m),o=t(1240),d=t(1241),u=t(1242),p=t(810),h=t(1244),b=t(807),E=t(803),g=t(187),f=t(867),v=t.n(f),N=t(276),k=t(1058),x=t.n(k),C=(t(1059),t(77)),y=(t(1724),t(801)),S=t(819),j=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.getData=function(){var e=localStorage.getItem("astroId");C.a.get("/admin/getoneAstro/".concat(e)).then((function(e){console.log(e.data.data),s.setState({data:e.data.data,fullname:e.data.data.fullname,email:e.data.data.email,mobile:e.data.data.mobile,img:e.data.data.img})})).catch((function(e){console.log(e)}))},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("fullname",s.state.fullname),a.append("email",s.state.email),a.append("mobile",s.state.mobile),null!==s.state.selectedFile&&a.append("img",s.state.selectedFile);var t=localStorage.getItem("astroId");C.a.post("/user/editAstroDetails/".concat(t),a).then((function(e){console.log(e.data.data),s.setState({data:e.data.data,fullname:e.data.data.fullname,email:e.data.data.email,mobile:e.data.data.mobile,img:e.data.data.img}),s.getData(),v()("Success!","Edited SuccessFull!","success")})).catch((function(e){v()("Error!","You clicked the button!","error"),console.log(e.response)}))},s.state={fullname:"",email:"",mobile:"",img:"",selectedName:"",selectedFile:null,approvedstatus:"",data:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e,a=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),i.a.createElement("div",{id:"user-profile"},i.a.createElement(o.a,{className:"m-0 justify-content-center"},i.a.createElement(d.a,{lg:"4",md:"4",xl:"4",sm:"12"},i.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},i.a.createElement("div",{className:"profile-img text-center st-1"},i.a.createElement("img",{src:this.state.data.img,alt:"porfileImg",className:"img-fluid img-border rounded-circle box-shadow-1 rt-1"}),i.a.createElement("ul",{className:"lst-1"},i.a.createElement("li",{className:"lst-2"},"Name:",i.a.createElement("span",{className:"lst-3"},this.state.data.fullname)),i.a.createElement("li",{className:"lst-2"},"Mobile:",i.a.createElement("span",{className:"lst-3"},this.state.data.mobile)),i.a.createElement("li",{className:"lst-2"},"Email:",i.a.createElement("span",{className:"lst-3"},this.state.data.email)))))),i.a.createElement(d.a,{sm:"12",xl:"8",lg:"8",md:"8",className:"d-flex justify-content-center"},i.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement("div",{className:"st-2"},i.a.createElement(h.a,null,i.a.createElement("h4",{className:"mb-3"},"Edit Profile"),i.a.createElement(d.a,null)),i.a.createElement(o.a,{className:"m-0"},i.a.createElement(d.a,{sm:"12",className:"p-0"},i.a.createElement(b.a,null,"Name"),i.a.createElement(E.a,{type:"text",name:"fullname",placeholder:"Name",value:this.state.fullname,onChange:this.changeHandler}),i.a.createElement("br",null),i.a.createElement(b.a,null,"Email"),i.a.createElement(E.a,{type:"email",name:"email",placeholder:"email",disabled:!0,value:this.state.email,onChange:this.changeHandler}),i.a.createElement("br",null),i.a.createElement(b.a,null,"Mobile No."),i.a.createElement("div",{className:"form-group mtb-10"},i.a.createElement(x.a,{countryCodeEditable:!1,className:"mob-int",disabled:!0,country:"in",value:(null===(e=this.state)||void 0===e?void 0:e.mobile).toString(),onChange:function(e){a.setState({mobile:e})}}),""!==this.state.mobileError?i.a.createElement("span",{style:{color:"red"}},this.state.mobileError):null),i.a.createElement("br",null),i.a.createElement(b.a,null,"User Image"),i.a.createElement(E.a,{className:"form-control",type:"file",name:"img",onChange:this.onChangeHandler}),i.a.createElement("br",null),i.a.createElement(S.a,{color:"primary",icon:i.a.createElement(N.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0}),i.a.createElement("br",null),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(g.a.Ripple,{color:"primary",type:"submit"},"Submit")))))))))))}}]),t}(i.a.Component);a.default=j},819:function(e,a,t){"use strict";var l=t(13),n=t(14),s=t(16),c=t(15),r=t(0),m=t.n(r),i=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},m.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),m.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},m.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),m.a.createElement("span",null,this.props.label))}}]),t}(m.a.Component);a.a=i}}]);
//# sourceMappingURL=115.32ae0dd9.chunk.js.map