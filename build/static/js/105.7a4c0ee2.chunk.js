(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[105],{2006:function(e,a,t){"use strict";t.r(a),t.d(a,"UserQuestionReply",(function(){return x}));var n=t(43),s=t(13),r=t(14),l=t(16),o=t(15),c=t(0),i=t.n(c),u=t(1239),m=t(1237),d=t(1238),p=t(187),f=t(1242),h=t(815),b=t(807),g=t(803),v=t(97),y=(t(826),t(58)),E=t(801),O=t(923),j=t.n(O),x=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;v.a.post("/user/reply/".concat(a),{answer:r.state.answer}).then((function(e){console.log(e.data.data),"success"===e.data.message&&j()("","Product Updated Successfully"),r.props.history.push("/app/askquestion/userAskQuesList")})).catch((function(e){console.log(e)}))},r.state={answer:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/user/getone_ask_qus/".concat(a)).then((function(a){console.log(a),e.setState({question:a.data.data.question})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(E.a,{breadCrumbTitle:" User Ask Question Reply",breadCrumbParent:"Home",breadCrumbActive:" User Ask Question Reply"}),i.a.createElement(u.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"User Ask Question Reply")),i.a.createElement(d.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/askquestion/userAskQuesList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(b.a,null,"Question"),i.a.createElement(g.a,{required:!0,type:"text",name:"question",placeholder:"Question",value:this.state.question,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(b.a,null,"Answer"),i.a.createElement("textarea",{className:"form-control",placeholder:"answer...",maxLength:200,name:"answer",value:this.state.answer,onChange:this.changeHandler}))),i.a.createElement(m.a,null),i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(b.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(c.Component);a.default=x},803:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),u=t.n(i),m=t(4),d=t.n(m),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},807:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),u=t.n(i),m=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,h=Object(s.a)(e,d),b=[];o.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(m.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),b.push(r)}}));var v=Object(m.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},826:function(e,a,t){}}]);
//# sourceMappingURL=105.7a4c0ee2.chunk.js.map