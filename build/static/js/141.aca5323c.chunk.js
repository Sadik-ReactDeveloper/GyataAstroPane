(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[141],{1296:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(14),s=a(16),r=a(15),i=a(0),o=a.n(i),l=a(194),u=a(803),f=a(61),p=a.n(f),d=a(25),h=a(866),m=a(32),b=a(80),v=a.n(b),g=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={value:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",status:null},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.status;return o.a.createElement("div",{className:"chat-profile-sidebar ".concat(this.props.userProfile?"show":null)},o.a.createElement("header",{className:"chat-profile-header"},o.a.createElement("div",{className:"close-icon",onClick:function(){return e.props.handleUserSidebar("close")}},o.a.createElement(l.a,{size:24})),o.a.createElement("div",{className:"header-profile-sidebar"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:v.a,alt:"User Profile",height:"66",width:"66"}),o.a.createElement("span",{className:"".concat("offline"===t?"avatar-status-offline":"dnd"===t?"avatar-status-busy":"away"===t?"avatar-status-away":"avatar-status-online"," avatar-status-lg")})),o.a.createElement("h4",{className:"chat-user-name"},"John Doe"))),o.a.createElement("div",{className:"profile-sidebar-area"},o.a.createElement(p.a,{className:"scroll-area",options:{wheelPropagation:!1}},o.a.createElement("h6",null,"About"),o.a.createElement("div",{className:"about-user"},o.a.createElement(u.a,{type:"textarea",name:"text",id:"userAbout",rows:"5",value:this.state.value,maxLength:"120",onChange:function(t){return e.setState({value:t.target.value})}}),o.a.createElement("small",{className:"counter-value float-right"},"".concat(this.state.value.length," / 120"))),o.a.createElement("h3",{className:"mt-3"},"Status"),o.a.createElement("ul",{className:"list-unstyled user-status mb-0"},o.a.createElement("li",{className:"pb-50"},o.a.createElement(m.a,{label:"Active",color:"success",defaultChecked:!0,name:"userStatus",onClick:function(){return e.props.changeStatus("active")}})),o.a.createElement("li",{className:"pb-50"},o.a.createElement(m.a,{label:"Do Not Disturb",color:"danger",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("dnd")}})),o.a.createElement("li",{className:"pb-50"},o.a.createElement(m.a,{label:"Away",color:"warning",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("away")}})),o.a.createElement("li",{className:"pb-50"},o.a.createElement(m.a,{label:"Offline",color:"secondary",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("offline")}}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.chat.status!==t.status?{status:e.chat.status}:null}}]),a}(o.a.Component);t.default=Object(d.b)((function(e){return{chat:e.chatApp.chats}}),{changeStatus:h.a})(g)},803:function(e,t,a){"use strict";var n=a(5),c=a(7),s=a(11),r=a(12),i=a(0),o=a.n(i),l=a(1),u=a.n(l),f=a(4),p=a.n(f),d=a(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,b=e.innerRef,v=Object(c.a)(e,h),g=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),S="form-control";m?(S+="-plaintext",y=u||"input"):"file"===s?S+="-file":"range"===s?S+="-range":g&&(S=f?null:"form-check-input"),v.size&&E.test(v.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var N=Object(d.mapToCssModules)(p()(t,l&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,S),a);return("input"===y||u&&"function"===typeof u)&&(v.type=s),v.children&&!m&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(y,Object(n.a)({},v,{ref:b,className:N,"aria-invalid":l}))},t}(o.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},866:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return f}));var n=a(42),c=a.n(n),s=function(){return function(e){c.a.get("api/app/chat/chats").then((function(t){e({type:"GET_CONTACTS",contacts:t.data.contacts,chats:t.data.chats})})).catch((function(e){return console.log(e)}))}},r=function(){return function(e){c.a.get("api/app/chat/chat-contacts").then((function(t){e({type:"GET_CHAT_CONTACTS",chats:t.data})})).catch((function(e){return console.log(e)}))}},i=function(e,t){return function(a){c.a.post("/api/apps/chat/set-pinned/",{contactId:e,value:t}).then((function(n){a({type:"SET_PINNED",id:e,value:t})})).catch((function(e){return console.log(e)}))}},o=function(e,t,a){return a.length>0?function(n){var r={textContent:a,isSent:!0,isSeen:!1,time:(new Date).toString()};c.a.post("/api/app/chat/send-message",{contactId:e,message:r,isPinned:t}).then((function(c){n({type:"SEND_MESSAGE",msg:r,id:e,isPinned:t,text:a}),n(s())})).catch((function(e){return console.log(e)}))}:void 0},l=function(e){return function(t){t({type:"CHANGE_STATUS",status:e})}},u=function(e){return function(t){t({type:"SEARCH_CONTACTS",query:e})}},f=function(e){return function(t){c.a.post("/api/apps/chat/mark-all-seen/",{contactId:e}).then((function(a){t({type:"MARK_AS_SEEN",id:e})})).catch((function(e){return console.log(e)}))}}}}]);
//# sourceMappingURL=141.aca5323c.chunk.js.map