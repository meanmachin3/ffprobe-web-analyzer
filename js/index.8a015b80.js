(function(t){function e(e){for(var a,s,o=e[0],l=e[1],f=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,f||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={index:0},i=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ffprobe-web-analyzer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var f=0;f<o.length;f++)e(o[f]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"2a73":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5f5b"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("div",{staticClass:"container"},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[t._v(" FFProbe ")])],1)],1)]),r("GitHubCorner"),r("div",{staticClass:"container",attrs:{id:"app"}},[r("h3",[t._v("FFProbe")]),r("hr"),r("File")],1),r("footer",{staticClass:"container mt-4 text-center"},[r("hr"),r("div",{staticClass:"text-muted"},[r("ul",[r("li",[t._v(t._s(t.name)+"-"+t._s(t.version))]),t._m(0),t._m(1)])])])],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://github.com/meanmachin3/ffprobe"}},[t._v("Source")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://github.com/meanmachin3/ffprobe/issues"}},[t._v("Report Bugs")])])}],o=r("9224"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"github-corner",attrs:{href:"https://github.com/alfg/ffprobe-web-analyzer","aria-label":"View source on GitHub"}},[r("svg",{staticStyle:{fill:"rgb(56, 141, 61)",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),r("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,\n      78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,\n      87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),r("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,\n      99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,\n      51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,\n      56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,\n      80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,\n      107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,\n      120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},f=[],c={name:"GitHubCorner"},u=c,d=(r("b134"),r("2877")),p=Object(d["a"])(u,l,f,!1,null,null,null),b=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"file"},[r("b-form-group",{attrs:{label:"Select a file:","label-for":"file"}},[r("b-form-file",{attrs:{id:"file",accept:"file/*",state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:t.onFile},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),t.showProgress?r("b-progress",{attrs:{height:"2px",value:t.progress,max:"100"}}):t._e(),t.data?r("div",[r("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file?t.file.name+": "+t.file.size+" bytes":""))]),r("b-tabs",{staticClass:"mt-4"},[r("b-tab",{staticClass:"mt-2",attrs:{title:"Overview"}},[t.data?r("div",[r("Overview",{attrs:{info:t.info}})],1):t._e()]),r("b-tab",{staticClass:"mt-2",attrs:{title:"Streams",disabled:""}}),r("b-tab",{staticClass:"mt-2",attrs:{title:"Frames",disabled:""}})],1)],1):t._e()],1)},m=[],v=(r("d3b7"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("Metadata")]),r("b-table",{attrs:{stacked:"",items:t.items}}),r("h4",[t._v("Streams")]),r("b-table",{attrs:{striped:"",hover:"",items:t.streams}}),r("h4",[t._v("Frames")]),r("b-table",{attrs:{striped:"",hover:"",items:t.frames}})],1)}),_=[],g=(r("b0c0"),r("5377"),{name:"Overview",props:["info"],computed:{streams:function(){for(var t=[],e=0;e<this.info.streams.size();e++)t.push(this.info.streams.get(e));return t},frames:function(){for(var t=[],e={66:"B",73:"I",80:"P"},r=0;r<this.info.frames.size();r++){var a=this.info.frames.get(r);a.frame_type=e[a.frame_type],t.push(a)}return t}},data:function(){return{items:[{name:this.info.name,duration:this.info.duration,bit_rate:this.info.bit_rate,url:this.info.url,nb_streams:this.info.nb_streams,flags:this.info.flags}]}}}),C=g,w=Object(d["a"])(C,v,_,!1,null,null,null),y=w.exports,x={name:"File",components:{Overview:y},data:function(){return{file:null,data:null,progress:0,showProgress:!1}},computed:{avformat_version:function(){return window.Module.c_avformat_version()},info:function(){return this.data&&window.Module.get_file_info()}},methods:{onFile:function(t){var e=this;this.data=null,this.progress=0,this.showProgress=!0;var r=t.dataTransfer?t.dataTransfer.files[0]:t.target.files[0],a=new FileReader;a.onload=function(t){e.progress=100,e.data=new Uint8Array(t.target.result),window.Module.FS.writeFile("file",new Uint8Array(e.data)),setTimeout((function(){e.showProgress=!1}),2e3)},a.onprogress=function(t){t.lengthComputable&&(e.progress=parseInt(t.loaded/t.total*100,10))},a.readAsArrayBuffer(r)}}},O=x,F=(r("ec9a"),Object(d["a"])(O,h,m,!1,null,"5c280413",null)),P=F.exports,S={name:"App",components:{File:P,GitHubCorner:b},data:function(){return{name:o["a"],version:o["b"]}}},j=S,M=(r("034f"),Object(d["a"])(j,i,s,!1,null,null,null)),k=M.exports;r("f9e3"),r("2dd8");a["default"].use(n["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,r){},9224:function(t){t.exports=JSON.parse('{"a":"ffprobe-web-analyzer","b":"0.0.1"}')},a1a1:function(t,e,r){},b134:function(t,e,r){"use strict";var a=r("2a73"),n=r.n(a);n.a},ec9a:function(t,e,r){"use strict";var a=r("a1a1"),n=r.n(a);n.a}});
//# sourceMappingURL=index.8a015b80.js.map