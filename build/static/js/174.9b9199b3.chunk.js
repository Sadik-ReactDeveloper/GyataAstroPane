/*! For license information please see 174.9b9199b3.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[174],{1997:function(t,e,r){"use strict";r.r(e),r.d(e,"getUrlParams",(function(){return c})),r.d(e,"default",(function(){return u}));var n=r(60),o=r(0),i=r(1342);function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=h;var s={};function d(){}function p(){}function v(){}var y={};l(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==e&&r.call(m,i)&&(y=m);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),s;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,e=t.split("?")[1];return new URLSearchParams(e)}function u(){var t=c().get("roomID")||function(t){var e="";if(e)return e;var r,n="12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",o=n.length;for(t=t||5,r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*o));return e}(4),e=function(t,e){return fetch("".concat(t,"/access_token?userID=").concat(e,"&expired_ts=7200"),{method:"GET"}).then((function(t){return t.json()}))}("04AAAAAGRnaDEAEDF2NmRidmFvYzVtMDh5enYAoHQN1UVEX3SvxWqHyD+WAz+z3WcONHy/qPIazySzboYaHIHrFP8JfbW4YtDHgPhgaNS1l1R1229c4Z9ldg0UWlXeycDQyYf2WdBfzn9gTixATQ0Df3JZVR1NxZlgJAWKP6qqoOJnOZYQyY36WDp97m7ue/AS5JMXS5UasV3j56TKhpk3wKbIvkyYxG97NlVRIeWhl1bcPgKUm3L2B1LZ2gQ=","demo").token,r=function(){var r=Object(n.a)(a().mark((function r(n){var o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=i.ZegoUIKitPrebuilt.generateKitTokenForProduction(1011009319,e,t,"demo","demo"),i.ZegoUIKitPrebuilt.create(o).joinRoom({container:n,sharedLinks:[{name:"Personal link",url:window.location.protocol+"//"+window.location.host+"/#/VideoCall"+window.location.pathname+"?roomID="+t}],branding:{logoURL:"https://www.zegocloud.com/_nuxt/img/zegocloud_logo_white.ddbab9f.png"},scenario:{mode:i.ZegoUIKitPrebuilt.OneONoneCall}});case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();return o.createElement("div",{className:"container"},o.createElement("div",{className:"myCallContainer pt-3  container",ref:r,style:{width:"100vw",height:"100vh"}}))}}}]);
//# sourceMappingURL=174.9b9199b3.chunk.js.map