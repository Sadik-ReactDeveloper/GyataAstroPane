/*! For license information please see 175.5111ea33.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[175],{1340:function(t,e,r){"use strict";r.r(e),r.d(e,"getUrlParams",(function(){return l})),r.d(e,"default",(function(){return s}));var o=r(61),n=r(0),i=r(1159),a=r(60);function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:x(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var f={};function d(){}function v(){}function p(){}var g={};l(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==e&&r.call(m,i)&&(g=m);var w=p.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var n;o(this,"_invoke",{value:function(o,i){function a(){return new e((function(n,a){!function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}})}function x(t,e,r){var o="suspendedStart";return function(n,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw i;return O()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var u=h(t,e,r);if("normal"===u.type){if(o=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var n=h(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=p,o(w,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(L.prototype),l(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,o,n,i){void 0===i&&(i=Promise);var a=new L(s(e,r,o,n),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;S(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function u(t){var e="";if(e)return e;var r,o="12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",n=o.length;for(t=t||5,r=0;r<t;r++)e+=o.charAt(Math.floor(Math.random()*n));return e}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,e=t.split("?")[1];return new URLSearchParams(e)}function s(){var t=this,e=l().get("roomID")||u(5),r=l(window.location.href).get("role")||"Host",s="Host"===r?i.ZegoUIKitPrebuilt.Host:"Cohost"===r?i.ZegoUIKitPrebuilt.Cohost:i.ZegoUIKitPrebuilt.Audience,h=[];s!==i.ZegoUIKitPrebuilt.Host&&s!==i.ZegoUIKitPrebuilt.Cohost||h.push({name:"Join as co-host",url:window.location.protocol+"//"+window.location.host+window.location.pathname+"?roomID="+e+"&role=Cohost"}),h.push({name:"Join as audience",url:window.location.protocol+"//"+window.location.host+window.location.pathname+"?roomID="+e+"&role=Audience"});var f=i.ZegoUIKitPrebuilt.generateKitTokenForTest(913321685,"ec2b5151f49c5376a2e91a5a81a69bc0",e,u(5),u(5)),d=function(){var r=Object(o.a)(c().mark((function r(o){var n,u;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=i.ZegoUIKitPrebuilt.create(f),u=localStorage.getItem("astroId"),n.joinRoom({container:o,scenario:{mode:i.ZegoUIKitPrebuilt.LiveStreaming,config:{role:s}},sharedLinks:h,onJoinRoom:function(){console.log("joined Room")},preJoinViewConfig:{title:"Join Room For Live"},onLiveStart:function(){console.log("Starting Live");var r={astroid:u,status:"live",videoliveStream:e};a.a.post("/user/WebliveStream",r).then((function(e){var r;console.log("LIVE Call ",e.data),localStorage.setItem("stopLiveId",null===(r=e.data.data)||void 0===r?void 0:r._id),t.setState({status:""})})).catch((function(t){console.log(t)}))},onYouRemovedFromRoom:function(){console.log("llllll")},onLiveEnd:function(){a.a.get("/user/closeLiveStream/".concat(localStorage.getItem("stopLiveId"))).then((function(t){console.log("Stop LIVE  ",t.data)})).catch((function(t){console.log(t)}))}});case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();return n.createElement("div",{className:"myCallContainer",ref:d,style:{width:"100vw",height:"100vh"}})}}}]);
//# sourceMappingURL=175.5111ea33.chunk.js.map