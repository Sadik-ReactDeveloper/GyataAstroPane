/*! For license information please see 110.8b094c13.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[110],{1158:function(e,t,r){"use strict";var n=r(43),a=r(13),o=r(14),i=r(16),l=r(15),c=r(0),u=r.n(c),s=r(1245),h=r(810),f=r(818),d=r(803),p=r(807),m=r(187),v=r(135),g=r(25),y=r(58),b=r(867),w=r.n(b),E=r(77),O=r(1058),L=r.n(O),x=(r(1059),function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).handlechange=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.handleSignUp=function(e){window.location.replace("/#/pages/register")},o.handleLogin=function(e){e.preventDefault(),E.a.post("/user/loginsendotp",{mobile:o.state.mobile}).then((function(e){console.log(e.data),o.setState({otpMsg:e.data.msg}),"Waiting for Admin Approval"===e.data.msg&&w()("Waiting for Admin Approval")})).catch((function(e){console.log(e.response),w()("error!","Invalied! Please enter valied Phone No. or Password","error")}))},o.handleOtp=function(e){e.preventDefault(),E.a.post("/user/loginVerify",{mobile:o.state.mobile,otp:o.state.otp}).then((function(e){"otp verified"===e.data.msg&&(w()("Login Successfull"),localStorage.setItem("astroId",e.data._id),localStorage.setItem("astroData",JSON.stringify(e.data)),window.location.replace("/#/"))})).catch((function(e){console.log(e.response.data._id),w()("error!","Invalied! Please enter valied Phone No. or Password","error")}))},o.state={mobile:"",otpMsg:"",otp:""},o}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,"otp Send Successfully"===this.state.otpMsg?u.a.createElement(s.a,{className:"pt-1"},u.a.createElement(h.a,{onSubmit:this.handleOtp},u.a.createElement(f.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(d.a,{type:"number",name:"otp",required:!0,placeholder:"Enter OTP",maxLength:6,value:this.state.otp,onChange:this.handlechange}),u.a.createElement(p.a,null,"OTP*")),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(y.b,{render:function(e){e.history;return u.a.createElement(m.a.Ripple,{color:"primary",type:"submit"},"Login")}})))):u.a.createElement(s.a,{className:"pt-1"},u.a.createElement(h.a,{onSubmit:this.handleLogin},u.a.createElement(f.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement("div",{className:"form-group mtb-10"},u.a.createElement(p.a,null,"Mobile Number*"),u.a.createElement(L.a,{countryCodeEditable:!1,className:"mob-int",country:"in",value:this.state.mobile,onChange:function(t){e.setState({mobile:t})}}),""!==this.state.mobileError?u.a.createElement("span",{style:{color:"red"}},this.state.mobileError):null)),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(y.b,{render:function(e){e.history;return u.a.createElement(m.a.Ripple,{color:"primary",type:"submit"},"Get OTP")}}))),u.a.createElement("div",{className:"d-flex mt-2"},u.a.createElement("div",null,"New On Our PlatForm "),u.a.createElement(y.b,{render:function(t){t.history;return u.a.createElement("div",{className:"ml-1",style:{color:"blue",cursor:"pointer"},onClick:e.handleSignUp},"Sign up")}}))))}}]),r}(u.a.Component));t.a=Object(g.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:v.b})(x)},1670:function(e,t,r){},2149:function(e,t,r){"use strict";r.r(t);var n=r(13),a=r(14),o=r(182),i=r(16),l=r(15),c=r(0),u=r.n(c),s=r(60),h=(r(1158),r(1342));r(1670);function f(){f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new N(a||[]);return n(i,"_invoke",{value:O(e,r,l)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function d(){}function p(){}function m(){}var v={};c(v,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(P([])));y&&y!==t&&r.call(y,o)&&(v=y);var b=m.prototype=d.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,l){var c=s(e[a],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=L(i,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,n(b,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),c(b,l,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function d(e){var t="";if(t)return t;var r,n="12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",a=n.length;for(e=e||5,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*a));return t}function p(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,t=e.split("?")[1];return new URLSearchParams(t)}().get("roomID")||d(5);console.log("Room",e);var t=h.ZegoUIKitPrebuilt.Host;console.log("role",t);var r=[];t!==h.ZegoUIKitPrebuilt.Host&&t!==h.ZegoUIKitPrebuilt.Cohost||r.push({name:"Join as co-host",url:window.location.protocol+"//"+window.location.host+window.location.pathname+"?roomID="+e+"&role=Cohost"}),r.push({name:"Join as audience",url:window.location.protocol+"//"+window.location.host+window.location.pathname+"?roomID="+e+"&role=Audience"});var n=d(5),a=h.ZegoUIKitPrebuilt.generateKitTokenForTest(912338888,"2d117c2d3654bbba1611b3631f5ba758",e,d(5),n);console.log(e);var o=function(){var e=Object(s.a)(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.ZegoUIKitPrebuilt.create(a).joinRoom({container:n,useFrontFacingCamera:!1,scenario:{mode:h.ZegoUIKitPrebuilt.LiveStreaming,config:{role:t}},sharedLinks:r});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.createElement(c.Fragment,null,c.createElement("div",{className:"myCallContainer ",ref:o,style:{width:"100vw",height:"100vh"}}))}var m=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.call(this)).onValueChange=function(){},e.state={name:""},e.onValueChange=e.onValueChange.bind(Object(o.a)(e)),e}return Object(a.a)(r,[{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"radio"},u.a.createElement("label",null,u.a.createElement("input",{name:"name",type:"radio",value:"Available",onClick:function(t){e.setState({selectedOption:t.target.value}),e.onValueChange()}}),"Available")),u.a.createElement("div",{className:"radio"},u.a.createElement("label",null,u.a.createElement("input",{name:"name",type:"radio",value:"unavailable",onClick:function(t){e.setState({selectedOption:t.target.value}),e.onValueChange()}}),"Unavailable")),"Available"===this.state.selectedOption?u.a.createElement(u.a.Fragment,null,u.a.createElement(p,null)):null)}}]),r}(c.Component);t.default=m},818:function(e,t,r){"use strict";var n=r(5),a=r(7),o=r(0),i=r.n(o),l=r(1),c=r.n(l),u=r(4),s=r.n(u),h=r(3),f=["className","cssModule","row","disabled","check","inline","tag"],d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:h.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,r=e.cssModule,o=e.row,l=e.disabled,c=e.check,u=e.inline,d=e.tag,p=Object(a.a)(e,f),m=Object(h.mapToCssModules)(s()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!u)&&"form-check-inline",!(!c||!l)&&"disabled"),r);return"fieldset"===d&&(p.disabled=l),i.a.createElement(d,Object(n.a)({},p,{className:m}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=110.8b094c13.chunk.js.map