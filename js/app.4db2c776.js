(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d3fec83e","chunk-3807c74c":"543b8af4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,"chunk-3807c74c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ab52c84b","chunk-3807c74c":"726113fd"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1741:function(e,t,n){},"3cfe":function(e,t,n){"use strict";var r=n("1741"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("2877"),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("navbar"),n("h3",[e._v("Here is a joke from "),n("a",{attrs:{href:"https://icanhazdadjoke.com/"}},[e._v("icanhazdadjoke.com/")]),e._v(": "),n("br"),e._v(" "),n("br"),e._v(" "+e._s(e.joke)+" ")])],1)},p=[],d=n("d178"),h={name:"Home",components:{navbar:d["a"]},data:function(){return{joke:this.getData()}},methods:{getData:function(){var e=this,t=n("2192");t("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.joke=t.joke}))}}},v=h,m=Object(u["a"])(v,f,p,!1,null,null,null),b=m.exports;r["a"].use(l["a"]);var g=[{path:"/",name:"Home",component:b},{path:"/sudoku",name:"Sudoku",component:function(){return n.e("chunk-3807c74c").then(n.bind(null,"6bea"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/chatapp",name:"ChatApp",component:function(){return n.e("about").then(n.bind(null,"4788"))}}],y=new l["a"]({mode:"history",base:"/",routes:g}),k=y;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(s)}}).$mount("#app")},d178:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"header"},[e._v("Raymond")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/sudoku"}},[e._v("Sudoku")])],1),n("li",[n("router-link",{attrs:{to:"/chatapp"}},[e._v("About")])],1)])])},o=[],a={name:"Navbar",data:function(){return{curPage:this.page}},computed:{isActive:function(e){return console.log(e==this.curPage?"active":"nonactive"),e==this.curPage?"active":"nonactive"}}},u=a,c=(n("3cfe"),n("2877")),i=Object(c["a"])(u,r,o,!1,null,"0905b048",null);t["a"]=i.exports}});
//# sourceMappingURL=app.4db2c776.js.map