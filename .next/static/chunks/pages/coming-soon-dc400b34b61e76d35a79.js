_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"1OyB":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},JX7q:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},Ji7U:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},grO0:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("w/X4")}])},md7G:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var r=n("JX7q");function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(r.a)(t):e}},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},vuIU:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},"w/X4":function(t,e,n){"use strict";n.r(e);var o=n("1OyB"),r=n("vuIU"),i=n("JX7q"),u=n("Ji7U"),c=n("md7G"),a=n("foSv"),s=n("rePB"),f=n("q1tI"),l=n.n(f).a.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(a.a)(t);if(e){var r=Object(a.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var d=function(t){Object(u.a)(n,t);var e=p(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return t=e.call.apply(e,[this].concat(u)),Object(s.a)(Object(i.a)(t),"state",{days:"",hours:"",minutes:"",seconds:""}),Object(s.a)(Object(i.a)(t),"commingSoonTime",(function(){var e=new Date("August 23, 2021 17:00:00 PDT"),n=Date.parse(e)/1e3,o=new Date,r=n-Date.parse(o)/1e3,i=Math.floor(r/86400),u=Math.floor((r-86400*i)/3600),c=Math.floor((r-86400*i-3600*u)/60),a=Math.floor(r-86400*i-3600*u-60*c);u<"10"&&(u="0"+u),c<"10"&&(c="0"+c),a<"10"&&(a="0"+a),t.setState({days:i,hours:u,minutes:c,seconds:a})})),Object(s.a)(Object(i.a)(t),"onSubmit",(function(t){t.preventDefault()})),t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.myInterval=setInterval((function(){t.commingSoonTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return l("section",{className:"coming-soon"},l("div",{className:"d-table"},l("div",{className:"d-table-cell"},l("div",{className:"container"},l("div",{className:"coming-soon-content"},l("h1",null,"We are launching our new website"),l("p",null,"Working hard for something we don't care about is called stress. Working hard for smething we love is called passion."),l("div",{id:"timer"},l("div",{id:"days"},this.state.days," ",l("span",null,"Days")),l("div",{id:"hours"},this.state.hours," ",l("span",null,"Hours")),l("div",{id:"minutes"},this.state.minutes," ",l("span",null,"Minutes")),l("div",{id:"seconds"},this.state.seconds," ",l("span",null,"Seconds"))),l("form",{onSubmit:this.onSubmit},l("input",{type:"text",className:"form-control",placeholder:"Type your email address"}),l("button",{type:"submit"},"Subscribe")))))))}}]),n}(f.Component);e.default=d}},[["grO0",0,1]]]);