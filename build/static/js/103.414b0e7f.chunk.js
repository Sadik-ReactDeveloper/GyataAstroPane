(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[103],{1159:function(e,a,t){},1996:function(e,a,t){"use strict";t.r(a);var n=t(27),o=t(0),l=t.n(o),c=t(1242),s=t(1240),i=t(1241),r=t(187),d=t(818),u=t(803),m=t(807),f=(t(1159),t(77));t(28),t(867);a.default=function(){var e=Object(o.useState)(!1),a=Object(n.a)(e,2),t=a[0],v=a[1],p=Object(o.useState)(""),b=Object(n.a)(p,2),g=(b[0],b[1]),h=Object(o.useState)(""),O=Object(n.a)(h,2),j=(O[0],O[1],Object(o.useState)("")),E=Object(n.a)(j,2),y=E[0],w=E[1],k=Object(o.useState)(""),S=Object(n.a)(k,2),N=(S[0],S[1]),z=Object(o.useState)(!1),x=Object(n.a)(z,2),T=x[0],M=(x[1],Object(o.useState)(!1)),C=Object(n.a)(M,2),I=C[0],R=C[1],P=Object(o.useState)(!1),A=Object(n.a)(P,2),D=(A[0],A[1],Object(o.useState)()),F=Object(n.a)(D,2);return F[0],F[1],Object(o.useEffect)((function(){var e=function(){window.history.pushState(null,null,window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),l.a.createElement("div",{className:"m-0 livestream"},l.a.createElement(c.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,{lg:"4",md:"4",sm:"4"},l.a.createElement("div",{className:"container mt-2 mb-1"},l.a.createElement(r.a,{onClick:function(e){return function(e){e.preventDefault();var a={astroAccount:localStorage.getItem("astroId"),status:!0};"Active"===y&&f.a.post("/user/astroLiveStreaming",a).then((function(e){var a,t,n,o,l,c,s,i,r,d,u,m;(console.log(e.data),"already exists"===e.data.msg)&&(N(null===(o=e.data)||void 0===o?void 0:o.token),g(null===(l=e.data)||void 0===l?void 0:l._id),localStorage.setItem("liveid",null===(c=e.data)||void 0===c?void 0:c._id),R(!0));"success"===(null===(a=e.data)||void 0===a?void 0:a.message)&&(localStorage.setItem("liveid",null===(s=e.data)||void 0===s||null===(i=s.data)||void 0===i?void 0:i._id),N(null===(r=e.data)||void 0===r||null===(d=r.data)||void 0===d?void 0:d.token),g(null===(u=e.data)||void 0===u||null===(m=u.data)||void 0===m?void 0:m._id),R(!0));localStorage.setItem("astrotokenforlivestream",null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.token),v(!0)})).catch((function(e){var a;console.log(null===(a=e.response)||void 0===a?void 0:a.data)})),"Deactive"===y&&localStorage.removeItem("astrotokenforlivestream")}(e)},color:"success"},"liveStreaming Now"))),l.a.createElement(i.a,null,l.a.createElement("div",{className:"container mt-1 mb-1"},l.a.createElement(s.a,null,!1===I?l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{className:"mt-1"},l.a.createElement(d.a,{check:!0},l.a.createElement(u.a,{value:"Active",onClick:function(e){w(e.target.value)},name:"radio1",type:"radio"})," ",l.a.createElement(m.a,{check:!0},"Online")))):null,l.a.createElement(i.a,{className:"mt-1"},l.a.createElement(d.a,{check:!0},l.a.createElement(u.a,{value:"Deactive",onClick:function(e){w(e.target.value),function(){var e=localStorage.getItem("liveid");console.log(e),f.a.get("/user/disConnectLiveStream/".concat(e)).then((function(e){console.log(e.data),R(!1),localStorage.removeItem("liveid"),window.location.replace("/")})).catch((function(e){console.log(e.response)}))}()},name:"radio1",type:"radio"})," ",l.a.createElement(m.a,{check:!0},"Offline"))))))),l.a.createElement(s.a,null,l.a.createElement("div",{className:"mt-1 mb-1"},t&&"Active"===y?l.a.createElement("div",{style:{display:"flex",width:"100vw",height:"80vh"}},l.a.createElement("h3",null,"Testing")):l.a.createElement(l.a.Fragment,null,!0===T?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{onClick:function(){return v(!0)},color:"success"},"liveStreams Now")):null)))))}},803:function(e,a,t){"use strict";var n=t(5),o=t(7),l=t(11),c=t(12),s=t(0),i=t.n(s),r=t(1),d=t.n(r),u=t(4),m=t.n(u),f=t(3),v=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,c=e.bsSize,s=e.valid,r=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,b=e.innerRef,g=Object(o.a)(e,v),h=["radio","checkbox"].indexOf(l)>-1,O=new RegExp("\\D","g"),j=d||("select"===l||"textarea"===l?l:"input"),E="form-control";p?(E+="-plaintext",j=d||"input"):"file"===l?E+="-file":"range"===l?E+="-range":h&&(E=u?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var y=Object(f.mapToCssModules)(m()(a,r&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,E),t);return("input"===j||d&&"function"===typeof d)&&(g.type=l),g.children&&!p&&"select"!==l&&"string"===typeof j&&"select"!==j&&(Object(f.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(j,Object(n.a)({},g,{ref:b,className:y,"aria-invalid":r}))},a}(i.a.Component);b.propTypes=p,b.defaultProps={type:"text"},a.a=b},807:function(e,a,t){"use strict";var n=t(5),o=t(7),l=t(0),c=t.n(l),s=t(1),i=t.n(s),r=t(4),d=t.n(r),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),v=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),p={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:v,sm:v,md:v,lg:v,xl:v,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,l=e.hidden,s=e.widths,i=e.tag,r=e.check,f=e.size,v=e.for,p=Object(o.a)(e,m),b=[];s.forEach((function(a,n){var o=e[a];if(delete p[a],o||""===o){var l,c=!n;if(Object(u.isObject)(o)){var s,i=c?"-":"-"+a+"-";l=g(c,a,o.size),b.push(Object(u.mapToCssModules)(d()(((s={})[l]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s))),t)}else l=g(c,a,o),b.push(l)}}));var h=Object(u.mapToCssModules)(d()(a,!!l&&"sr-only",!!r&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),t);return c.a.createElement(i,Object(n.a)({htmlFor:v},p,{className:h}))};h.propTypes=p,h.defaultProps=b,a.a=h},818:function(e,a,t){"use strict";var n=t(5),o=t(7),l=t(0),c=t.n(l),s=t(1),i=t.n(s),r=t(4),d=t.n(r),u=t(3),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},v=function(e){var a=e.className,t=e.cssModule,l=e.row,s=e.disabled,i=e.check,r=e.inline,f=e.tag,v=Object(o.a)(e,m),p=Object(u.mapToCssModules)(d()(a,!!l&&"row",i?"form-check":"form-group",!(!i||!r)&&"form-check-inline",!(!i||!s)&&"disabled"),t);return"fieldset"===f&&(v.disabled=s),c.a.createElement(f,Object(n.a)({},v,{className:p}))};v.propTypes=f,v.defaultProps={tag:"div"},a.a=v}}]);
//# sourceMappingURL=103.414b0e7f.chunk.js.map