(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],c=0,v=[];c<i.length;c++)s=i[c],a[s]&&v.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(v.length)v.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"07b90307"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var o,l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e),o=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,r[1](s)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,l.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mbrvaultslides/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("c21b"),a=r.n(n);a.a},"244b":function(e,t,r){},4487:function(e,t,r){"use strict";var n=r("244b"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),e._m(1),r("full-page",{ref:"fullpage",attrs:{options:e.options,id:"fullpage"}},[r("div",{staticClass:"section"},[r("h3",[e._v("Skip the data entry")]),r("img",{staticStyle:{"max-height":"40%"},attrs:{src:"/assets/reports.png"}})]),r("div",{staticClass:"section"},[r("h3",[e._v("Maintenance Free Online Directory")]),r("img",{staticStyle:{"max-height":"50%"},attrs:{src:"/assets/directory.png"}})]),r("div",{staticClass:"section"},[r("h3",[e._v("Sync with Outlook")]),r("img",{staticStyle:{"max-height":"50%"},attrs:{src:"/assets/outlook.png"}})]),r("div",{staticClass:"section"},[r("h3",[e._v("Send Text Messages With Ease")]),r("img",{staticStyle:{"max-height":"50%"},attrs:{src:"/assets/text.png"}})]),r("div",{staticClass:"section"},[r("h3",[e._v("Email Tracking")]),r("img",{staticStyle:{"max-height":"50%"},attrs:{src:"/assets/email_tracking.png"}})]),r("div",{staticClass:"section"},[r("h3",[e._v("Improve Retention")]),r("img",{staticStyle:{"max-height":"50%"},attrs:{src:"/assets/retention.png"}})]),r("div",{staticClass:"section"},[r("h3",[e._v("Event Management")]),r("img",{staticStyle:{"max-height":"50%"},attrs:{src:"/assets/events.png"}})])])],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{attrs:{id:"menu"}},[r("li",[r("img",{staticStyle:{height:"70px","padding-left":"20px"},attrs:{src:"/assets/MBRVault_Logo.png"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{attrs:{id:"benefits"}},[r("li",{staticStyle:{padding:"15px","font-size":"30px",color:"#3c4451","font-weight":"bold"}},[e._v("Less Work. More Growth")])])}],s={data:function(){return{options:{menu:"#menu",anchors:["page1","page2","page3","page4","page5","page6","page7"],sectionsColor:["#41b883","#3c4350","#0798ec","#41b883","#3c4350","#41b883","#3c4350"],autoScroll:!0,verticalCentered:!0,continuousVertical:!0}}},mounted:function(){this.flip()},methods:{flip:function(){var e=this;setInterval(function(){e.$refs.fullpage.api.moveSectionDown()},8e3)}}},i=s,l=(r("034f"),r("2877")),u=Object(l["a"])(i,a,o,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,p=r("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},d=m,_=(r("4487"),Object(l["a"])(d,h,g,!1,null,"4b4a4468",null));_.options.__file="HelloWorld.vue";var b=_.exports,y={name:"home",components:{HelloWorld:b}},j=y,k=Object(l["a"])(j,v,f,!1,null,null,null);k.options.__file="Home.vue";var w=k.exports;n["a"].use(p["a"]);var x=new p["a"]({routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),S=r("2f62");n["a"].use(S["a"]);var E=new S["a"].Store({state:{},mutations:{},actions:{}}),C=r("a45e"),O=r.n(C);n["a"].use(O.a),n["a"].config.productionTip=!1,new n["a"]({router:x,store:E,render:function(e){return e(c)}}).$mount("#app")},c21b:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8c6f40aa.js.map