!function(e,t){function r(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function a(){return T++}function n(e){return e.match(k)[0]}function o(e){for(e=e.replace(A,"/"),e=e.replace(_,"$1/");e.match(I);)e=e.replace(I,"/");return e}function i(e){var t=e.length-1,r=e.charAt(t);return"#"===r?e.substring(0,t):".js"===e.substring(t-2)||e.indexOf("?")>0||"/"===r?e:e+".js"}function s(e){var t=E.alias;return t&&S(t[e])?t[e]:e}function l(e){var t,r=E.paths;return r&&(t=e.match(O))&&S(r[t[1]])&&(e=r[t[1]]+t[2]),e}function c(e){var t=E.vars;return t&&e.indexOf("{")>-1&&(e=e.replace(C,function(e,r){return S(t[r])?t[r]:e})),e}function u(e){var t=E.map,r=e;if(t)for(var a=0,n=t.length;n>a;a++){var o=t[a];if(r=x(o)?o(e)||e:e.replace(o[0],o[1]),r!==e)break}return r}function f(e,t){var r,a=e.charAt(0);if(D.test(e))r=e;else if("."===a)r=o((t?n(t):E.cwd)+e);else if("/"===a){var i=E.cwd.match(G);r=i?i[0]+e.substring(1):e}else r=E.base+e;return 0===r.indexOf("//")&&(r=location.protocol+r),r}function v(e,t){if(!e)return"";e=s(e),e=l(e),e=c(e),e=i(e);var r=f(e,t);return r=u(r)}function d(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function h(e,t,r){var a=U.createElement("script");if(r){var n=x(r)?r(e):r;n&&(a.charset=n)}p(a,t,e),a.async=!0,a.src=e,P=a,J?z.insertBefore(a,J):z.appendChild(a),P=null}function p(e,t,r){function a(){e.onload=e.onerror=e.onreadystatechange=null,E.debug||z.removeChild(e),e=null,t()}var n="onload"in e;n?(e.onload=a,e.onerror=function(){N("error",{uri:r,node:e}),a()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&a()}}function m(){if(P)return P;if(X&&"interactive"===X.readyState)return X;for(var e=z.getElementsByTagName("script"),t=e.length-1;t>=0;t--){var r=e[t];if("interactive"===r.readyState)return X=r}}function g(e){var t=[];return e.replace(V,"").replace(H,function(e,r,a){a&&t.push(a)}),t}function y(e,t){this.uri=e,this.dependencies=t||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!e.seajs){var b=e.seajs={version:"2.3.0"},E=b.data={},w=r("Object"),S=r("String"),j=Array.isArray||r("Array"),x=r("Function"),T=0,q=E.events={};b.on=function(e,t){var r=q[e]||(q[e]=[]);return r.push(t),b},b.off=function(e,t){if(!e&&!t)return q=E.events={},b;var r=q[e];if(r)if(t)for(var a=r.length-1;a>=0;a--)r[a]===t&&r.splice(a,1);else delete q[e];return b};var N=b.emit=function(e,t){var r=q[e];if(r){r=r.slice();for(var a=0,n=r.length;n>a;a++)r[a](t)}return b},k=/[^?#]*\//,A=/\/\.\//g,I=/\/[^\/]+\/\.\.\//,_=/([^:\/])\/+\//g,O=/^([^\/:]+)(\/.+)$/,C=/{([^{]+)}/g,D=/^\/\/.|:\//,G=/^.*?\/\/.*?\//,U=document,M=location.href&&0!==location.href.indexOf("about:")?n(location.href):"",B=U.scripts,L=U.getElementById("seajsnode")||B[B.length-1],R=n(d(L)||M);b.resolve=v;var P,X,z=U.head||U.getElementsByTagName("head")[0]||U.documentElement,J=z.getElementsByTagName("base")[0];b.request=h;var F,H=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,V=/\\\\/g,$=b.cache={},W={},Z={},K={},Q=y.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};y.prototype.resolve=function(){for(var e=this,t=e.dependencies,r=[],a=0,n=t.length;n>a;a++)r[a]=y.resolve(t[a],e.uri);return r},y.prototype.load=function(){var e=this;if(!(e.status>=Q.LOADING)){e.status=Q.LOADING;var r=e.resolve();N("load",r);for(var a,n=e._remain=r.length,o=0;n>o;o++)a=y.get(r[o]),a.status<Q.LOADED?a._waitings[e.uri]=(a._waitings[e.uri]||0)+1:e._remain--;if(0===e._remain)return e.onload(),t;var i={};for(o=0;n>o;o++)a=$[r[o]],a.status<Q.FETCHING?a.fetch(i):a.status===Q.SAVED&&a.load();for(var s in i)i.hasOwnProperty(s)&&i[s]()}},y.prototype.onload=function(){var e=this;e.status=Q.LOADED,e.callback&&e.callback();var t,r,a=e._waitings;for(t in a)a.hasOwnProperty(t)&&(r=$[t],r._remain-=a[t],0===r._remain&&r.onload());delete e._waitings,delete e._remain},y.prototype.fetch=function(e){function r(){b.request(i.requestUri,i.onRequest,i.charset)}function a(){delete W[s],Z[s]=!0,F&&(y.save(o,F),F=null);var e,t=K[s];for(delete K[s];e=t.shift();)e.load()}var n=this,o=n.uri;n.status=Q.FETCHING;var i={uri:o};N("fetch",i);var s=i.requestUri||o;return!s||Z[s]?(n.load(),t):W[s]?(K[s].push(n),t):(W[s]=!0,K[s]=[n],N("request",i={uri:o,requestUri:s,onRequest:a,charset:E.charset}),i.requested||(e?e[i.requestUri]=r:r()),t)},y.prototype.exec=function(){function e(t){return y.get(e.resolve(t)).exec()}var r=this;if(r.status>=Q.EXECUTING)return r.exports;r.status=Q.EXECUTING;var n=r.uri;e.resolve=function(e){return y.resolve(e,n)},e.async=function(t,r){return y.use(t,r,n+"_async_"+a()),e};var o=r.factory,i=x(o)?o(e,r.exports={},r):o;return i===t&&(i=r.exports),delete r.factory,r.exports=i,r.status=Q.EXECUTED,N("exec",r),i},y.resolve=function(e,t){var r={id:e,refUri:t};return N("resolve",r),r.uri||b.resolve(r.id,t)},y.define=function(e,r,a){var n=arguments.length;1===n?(a=e,e=t):2===n&&(a=r,j(e)?(r=e,e=t):r=t),!j(r)&&x(a)&&(r=g(""+a));var o={id:e,uri:y.resolve(e),deps:r,factory:a};if(!o.uri&&U.attachEvent){var i=m();i&&(o.uri=i.src)}N("define",o),o.uri?y.save(o.uri,o):F=o},y.save=function(e,t){var r=y.get(e);r.status<Q.SAVED&&(r.id=t.id||e,r.dependencies=t.deps||[],r.factory=t.factory,r.status=Q.SAVED,N("save",r))},y.get=function(e,t){return $[e]||($[e]=new y(e,t))},y.use=function(t,r,a){var n=y.get(a,j(t)?t:[t]);n.callback=function(){for(var t=[],a=n.resolve(),o=0,i=a.length;i>o;o++)t[o]=$[a[o]].exec();r&&r.apply(e,t),delete n.callback},n.load()},b.use=function(e,t){return y.use(e,t,E.cwd+"_use_"+a()),b},y.define.cmd={},e.define=y.define,b.Module=y,E.fetchedList=Z,E.cid=a,b.require=function(e){var t=y.get(y.resolve(e));return t.status<Q.EXECUTING&&(t.onload(),t.exec()),t.exports},E.base=R,E.dir=R,E.cwd=M,E.charset="utf-8",b.config=function(e){for(var t in e){var r=e[t],a=E[t];if(a&&w(a))for(var n in r)a[n]=r[n];else j(a)?r=a.concat(r):"base"===t&&("/"!==r.slice(-1)&&(r+="/"),r=f(r)),E[t]=r}return N("config",e),b}}}(this),!function(){var e,t=/\W/g,r=document,a=document.getElementsByTagName("head")[0]||document.documentElement;seajs.importStyle=function(n,o){if(!o||(o=o.replace(t,"-"),!r.getElementById(o))){var i;if(!e||o?(i=r.createElement("style"),o&&(i.id=o),a.appendChild(i)):i=e,void 0!==i.styleSheet){if(r.getElementsByTagName("style").length>31)throw new Error("Exceed the maximal count of style tags in IE");i.styleSheet.cssText+=n}else i.appendChild(r.createTextNode(n));o||(e=i)}},define("seajs/seajs-style/1.0.2/seajs-style",[],{})}(),seajs.develop=!1,seajs.root="/front-flow-template",seajs.api={test:seajs.develop?"/develop":"/product"},seajs.set={util:{timeout:15e3}},seajs.config({base:seajs.root+"/modules",paths:{js:seajs.root+"/front-flow-template/dist/js",lib:seajs.root+"/front-flow-template/dist/lib"},alias:{audio:"audio/audio",copy:"copy/ZeroClipboard",flv:"flv/flv",hook:"hook/hook",jquery:"jquery/1/jquery",validform:"validform/validform",My97DatePicker:"My97DatePicker/WdatePicker",raty:"raty/raty",upload:"upload/upload",makethumb:"upload/makethumb",localResizeIMG:"upload/localResizeIMG",video:"video/video",webuploader:"webuploader/webuploader"},localcache:{timeout:2e4}}),module.exports=seajs,function(e){var t={"audio/audio":"v1.0.1","copy/ZeroClipboard":"v0.0.1","flv/flv":"v0.0.2","jquery/1/jquery":"v1.11.3","jquery/2/jquery":"v2.1.4","My97DatePicker/WdatePicker":"v0.0.1","raty/raty":"v0.1.0","upload/upload":"v1.1.0","upload/makethumb":"v0.0.1","upload/localResizeIMG":"v0.0.1","validform/validform":"v2.4.0","video/video":"v0.0.1","webuploader/webuploader":"v1.0.0",album:"v2.2.10",appcan:"v0.1.0",autocomplete:"v0.0.1",base:"v2.15.5",bdshare:"v3.1.2",box:"v3.10.4","city-select":"v0.0.3",countdown:"v1.0.2",counter:"v0.0.1",datepicker:"v1.0.0",drag:"v0.5.0",easing:"v0.0.1",echarts:"v0.0.2",etpl:"v0.0.1",fastclick:"v0.0.1","img-loaded":"v0.0.1","img-ready":"v1.0.0",instantclick:"v0.0.1",lazyload:"v2.0.1",marquee:"v0.10.1",masonry:"v0.0.1",mousemenu:"v1.0.0",mousetrap:"v1.5.3",mousewheel:"v0.0.1",offcanvas:"v2.0.4","on-scroll":"v2.1.3",photowall:"v0.1.1",pjax:"v0.0.1",qr:"v0.1.0","scroll-bar":"v2.2.7","scroll-col":"v4.2.4","scroll-row":"v3.0.6",select:"v3.1.9",slide:"v4.1.8",tab:"v2.1.2",tip:"v1.2.4",touch:"v0.1.1",zoom:"v2.0.2"},r={};for(var a in t)r[e.data.base+a+".js"]=t[a];e.data.localcache.manifest=r}(seajs),function(e){if(window.window.JSON&&window.localStorage&&!e.data.debug){var t=e.Module,r=e.data,a=t.prototype.fetch,n=["??",","],o=r.localcache&&r.localcache.manifest||{},i={_maxRetry:1,_retry:!0,get:function(e,t){var r;try{r=localStorage.getItem(e)}catch(e){return}return r?t?JSON.parse(r):r:void 0},set:function(e,t,r){r="undefined"==typeof r?this._retry:r;try{localStorage.setItem(e,t)}catch(n){if(r)for(var a=this._maxRetry;a>0;)a--,this.removeAll(),this.set(e,t,!1)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){}},removeAll:function(){for(var e=r.localcache&&r.localcache.prefix||/^https?\:/,t=localStorage.length-1;t>=0;t--){var a=localStorage.key(t);e.test(a)&&(o[a]||localStorage.removeItem(a))}}},s=i.get("manifest",!0)||{};if(o){var l=r.localcache&&r.localcache.validate||function(e,t){return!(!t||!e)},c=function(e,t){var a=new window.XMLHttpRequest,n=setTimeout(function(){a.abort(),t(null)},r.localcache&&r.localcache.timeout||3e4);a.open("GET",e,!0),a.onreadystatechange=function(){4===a.readyState&&(clearTimeout(n),t(200===a.status?a.responseText:null))},a.send(null)},u=function(e,t){if(t&&/\S/.test(t))if(/\.css(?:\?|$)/i.test(e)){var r=document,a=r.createElement("style");r.getElementsByTagName("head")[0].appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(r.createTextNode(t))}else try{t+="//# sourceURL="+e,(window.execScript||function(e){window.eval.call(window,e)})(t)}catch(e){return!1}return!0},f=function(e){var t=r.comboSyntax&&r.comboSyntax[0]||"??";return e.indexOf(t)>=0},v=function(e){var t=r.comboSyntax||n,a=e.split(t[0]);if(2!=a.length)return e;var o=a[0],i=a[1].split(t[1]),s={};s.host=o,s.files=[];for(var l=0,c=i.length;l<c;l++)s.files.push(i[l]);return s},d=r.localcache&&r.localcache.splitCombo||function(e,t,r){for(var a=e.split("define"),n=[],o=0,i=a.length;o<i;o++)a[o]&&n.push("define"+a[o]);return n},h={},p=function(e){var t=h[e];for(delete h[e];m=t.shift();)m.load()};t.prototype.fetch=function(t){var m=this;e.emit("fetch",m);var g=m.requestUri||m.uri,y=f(g);if(h[g])return void h[g].push(m);h[g]=[m];var b=function(e){delete h[e],a.call(m,t)};if(!y&&o[g]){var E=i.get(g),w=l(g,E);o[g]==s[g]&&w?u(g,E)?p(g):b(g):c(g+"?v="+Math.random().toString(),function(e){e&&l(g,e)&&u(g,e)?(s[g]=o[g],i.set("manifest",JSON.stringify(s)),i.set(g,e),p(g)):b(g)})}else if(y){for(var S=v(g),j=!1,x=S.files.length-1;x>=0;x--){var T=S.host+S.files[x],E=i.get(T),w=l(T,E);o[T]&&(j=!0,o[T]==s[T]&&w&&(u(T,E),S.files.splice(x,1)))}if(0==S.files.length)return void p(g);if(!j)return void b(g);var q=r.comboSyntax||n,N=S.host+q[0]+S.files.join(q[1]);c(N+"?v="+Math.random().toString(),function(e){if(!e)return void b(g);var t=d(e,N,S.files);if(S.files.length==t.length){for(var r=0,a=S.files.length;r<a;r++){var n=S.host+S.files[r];if(!u(n,t[r]))return void b(g);s[n]=o[n],i.set(n,t[r])}i.set("manifest",JSON.stringify(s)),p(g)}else b(g)})}else s[g]&&(delete s[g],i.set("manifest",JSON.stringify(s)),i.remove(g)),b(g)}}}}(seajs);