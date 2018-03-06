(function(){var g=this;function h(a){return"string"==typeof a}
  function k(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
  function l(){}
  function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
  else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
  var p="closure_uid_"+(1E9*Math.random()>>>0),aa=0;function ba(a,b,c){return a.call.apply(a.bind,arguments)}
  function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
  function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=ba:q=ca;return q.apply(null,arguments)}
  function da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
  function r(a,b){var c=a.split("."),d=g;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
  function ea(a,b){function c(){}
    c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.A=function(a,c,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}}
  ;var fa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(h(a))return h(b)&&1==b.length?a.indexOf(b,0):-1;
    for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},t=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=h(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function u(a,b){this.c=a;this.f=b;this.b=0;this.a=null}
  u.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};var v;a:{var w=g.navigator;if(w){var x=w.userAgent;if(x){v=x;break a}}v=""};function ha(a){g.setTimeout(function(){throw a;},0)}
  var y;
  function ia(){var a=g.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=q(function(a){if(("*"==d||a.origin==d)&&
    a.data==c)this.port1.onmessage()},this);
    b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
    if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.l;c.l=null;a()}};
      return function(a){d.next={l:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
      b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
      document.documentElement.appendChild(b)}:function(a){g.setTimeout(a,0)}}
  ;function z(){this.b=this.a=null}
  var B=new u(function(){return new A},function(a){a.reset()});
  z.prototype.add=function(a,b){var c=B.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
  z.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
  function A(){this.next=this.b=this.a=null}
  A.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
  A.prototype.reset=function(){this.next=this.b=this.a=null};function ja(a){C||ka();D||(C(),D=!0);E.add(a,void 0)}
  var C;function ka(){if(-1!=String(g.Promise).indexOf("[native code]")){var a=g.Promise.resolve(void 0);C=function(){a.then(F)}}else C=function(){var a=F,c;
    !(c="function"!=n(g.setImmediate))&&(c=g.Window&&g.Window.prototype)&&(c=-1==v.indexOf("Edge")&&g.Window.prototype.setImmediate==g.setImmediate);c?(y||(y=ia()),y(a)):g.setImmediate(a)}}
  var D=!1,E=new z;function F(){for(var a;a=E.remove();){try{a.a.call(a.b)}catch(c){ha(c)}var b=B;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}D=!1}
  ;function G(){this.c=this.c;this.f=this.f}
  G.prototype.c=!1;G.prototype.dispose=function(){this.c||(this.c=!0,this.i())};
  G.prototype.i=function(){if(this.f)for(;this.f.length;)this.f.shift()()};function H(){this.a="";this.b=I}
  H.prototype.o=!0;H.prototype.m=function(){return this.a};
  var I={};function J(){this.a="";this.b=K}
  J.prototype.o=!0;J.prototype.m=function(){return this.a};
  var la=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,K={};function L(a){var b=new J;b.a=a;return b}
  L("about:blank");function ma(a,b){a.src=b instanceof H&&b.constructor===H&&b.b===I?b.a:"type_error:TrustedResourceUrl"}
  ;function na(a){oa();var b=new H;b.a=a;return b}
  var oa=l;function M(a){G.call(this);this.s=1;this.g=[];this.h=0;this.a=[];this.b={};this.u=!!a}
  ea(M,G);M.prototype.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.s;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.s=e+3;d.push(e);return e};
  M.prototype.j=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.h)this.g.push(a),this.a[a+1]=l;else{if(c){var d=fa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
  M.prototype.v=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var m=c[e];pa(this.a[m+1],this.a[m+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)m=c[e],this.a[m+1].apply(this.a[m+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.j(c)}}return 0!=e}return!1};
  function pa(a,b,c){ja(function(){a.apply(b,c)})}
  M.prototype.clear=function(a){if(a){var b=this.b[a];b&&(t(b,this.j,this),delete this.b[a])}else this.a.length=0,this.b={}};
  M.prototype.i=function(){M.w.i.call(this);this.clear();this.g.length=0};var N=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",N);function O(a){var b=arguments;if(1<b.length)N[b[0]]=b[1];else{b=b[0];for(var c in b)N[c]=b[c]}}
  function P(a,b){return a in N?N[a]:b}
  ;function Q(a){return a?a.dataset?a.dataset[R()]:a.getAttribute("data-loaded"):null}
  var S={};function R(){return S.loaded||(S.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
  ;function qa(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){T(b)}}:a}
  function T(a){var b=k("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),O("ERRORS",b))}
  ;function U(a){"function"==n(a)&&(a=qa(a));window.setTimeout(a,0)}
  ;var ra=k("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.j;M.prototype.publish=M.prototype.v;M.prototype.clear=M.prototype.clear;r("ytPubsubPubsubInstance",ra);var V=k("ytPubsubPubsubSubscribedKeys")||{};r("ytPubsubPubsubSubscribedKeys",V);var W=k("ytPubsubPubsubTopicToKeys")||{};r("ytPubsubPubsubTopicToKeys",W);var X=k("ytPubsubPubsubIsSynchronous")||{};r("ytPubsubPubsubIsSynchronous",X);
  function sa(a,b){var c=Y();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){V[d]&&b.apply(window,c)};
    try{X[a]?f():U(f)}catch(m){T(m)}},void 0);
    V[d]=!0;W[a]||(W[a]=[]);W[a].push(d)}}
  function ta(a,b){var c=Y();c&&c.publish.apply(c,arguments)}
  function ua(a){var b=Y();if(b)if(b.clear(a),a)Z(a);else for(var c in W)Z(c)}
  function Y(){return k("ytPubsubPubsubInstance")}
  function Z(a){W[a]&&(a=W[a],t(a,function(a){V[a]&&delete V[a]}),a.length=0)}
  ;var va=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,wa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function xa(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(va,""),c=c.replace(wa,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ya(a,b)}
  function ya(a,b){var c=za(a),d=document.getElementById(c),e=d&&Q(d),f=d&&!e;e?b&&b():(b&&(sa(c,b),b[p]||(b[p]=++aa)),f||(d=Aa(a,c,function(){if(!Q(d)){var a=d;a&&(a.dataset?a.dataset[R()]="true":a.setAttribute("data-loaded","true"));ta(c);U(da(ua,c))}})))}
  function Aa(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
    d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
    ma(d,na(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
  function za(a){var b=document.createElement("a");a instanceof J||a instanceof J||(a=a.o?a.m():String(a),la.test(a)||(a="about:invalid#zClosurez"),a=L(a));b.href=a instanceof J&&a.constructor===J&&a.b===K?a.a:"type_error:SafeUrl";b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"js-"+a}
  ;r("_gel",function(a){var b=document;return h(a)?b.getElementById(a):a});
  r("yt.setConfig",O);r("yt.config.set",O);r("yt.www.notfound.init",function(){var a=P("SBOX_JS_URL",void 0);a&&xa(a,function(){try{k("yt.www.masthead.searchbox.init")()}catch(b){throw b.message+=' SboxUrl: "'+a+'"',b;}})});}).call(this);
