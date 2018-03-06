(function(){var fa,ja="function"==typeof Object.create?Object.create:function(a){function b(){}
  b.prototype=a;return new b},ma;
  if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var pa={Sf:!0},va={};try{va.__proto__=pa;na=va.Sf;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=ma;
  (function(){function a(){function a(){}
    Reflect.construct(a,[],function(){});
    return new a instanceof a}
    if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,e,d){a=b(a,e);d&&Reflect.setPrototypeOf(a,d.prototype);return a}}return function(a,b,d){void 0===d&&(d=a);
      d=ja(d.prototype||Object.prototype);return Function.prototype.apply.call(a,d,b)||d}})();
  var za=this;function Aa(a){return"string"==typeof a}
  function Ga(a){a=a.split(".");for(var b=za,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
  function Ha(){}
  function Ia(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
  else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
  function Ja(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
  function Ka(a,b,c){return a.call.apply(a.bind,arguments)}
  function Pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
  function Qa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa=Ka:Qa=Pa;return Qa.apply(null,arguments)}
  var Ra=Date.now||function(){return+new Date};
  function Sa(a,b){var c=a.split("."),e=za;c[0]in e||!e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
  function Ta(a,b){function c(){}
    c.prototype=b.prototype;a.mf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.nj=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
  ;var Ua,Va,Wa,Xa,Ya,Za,$a,ab,bb,cb,db,eb,fb,gb,hb,ib,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,$b,ac,bc,cc,dc,ec,fc,gc,hc,ic,mc,nc,oc=/^[6-9]$/,pc={Nf:0,Qd:1,Mf:2,ib:3},qc={EMPTY:0,Df:1,Dd:2},rc={Cf:1,Ef:2,Ri:3,Af:4,Ff:5,Zi:6,Ni:7,nb:8},sc={DONT_CARE:1,xf:2,Pf:3},tc={Hd:0,Of:1,ib:2},uc=[23,24],g={Rf:0,Ki:114,da:115,Ga:116,T:117,Ha:494,I:118,sa:119,ea:374,fa:120,ha:121,Md:122,U:123,ua:124,mb:125,Hf:230,Wi:553,Y:126,ia:127,R:128,
    Pd:343,Ka:129,Ji:231,qa:130,wf:131,Li:237,Mi:570,Ti:132,jb:134,ta:189,Gf:246,Vi:264,Ui:256,kb:133,If:184,Kf:419,aj:503,bj:578,cj:579,dj:505,gj:516,ej:509,fj:512,wa:173,Oi:568,Pi:569,Gd:135,Xb:136,Zb:137,Od:138,La:139,yf:140,Id:141,Kd:142,Ld:240,Lf:143,Qf:144,cb:347,Vb:191,eb:150,Fa:145,Ed:146,Ia:147,hj:148,Xi:245,Ad:155,Ea:149,fb:154,Jd:311,Yb:153,RENDERER:152,Ja:156,lb:151,cc:158,Nd:294,Jf:157,va:160,Qi:328,Za:159},vc={Bd:161,Rd:162};function wc(a){return{Ec:function(){return a.Ec()},
    Z:function(){return a.Z()},
    W:function(){return a.W()}}}
  ;(function(){function a(a){for(var b=[],e=0,d;d=a[e++];)b.push(d.api||{a:d.Jc,b:d.M,c:d.Aa,d:d.A,e:d.Qc,f:d.Bh,g:d.xh,i:d.Ic,j:d.getParameters,k:d.Pc,l:d.Yg});return b}
    Ua=function(a){var b={};if(a)for(var e=0;e<a.length;++e)b[a[e]]=!0;return b};
    Va=function(b){var c=a(b.W());return b.api||{a:b.Z,b:function(){return c},
        c:b.Ec}};
    Wa=function(a){return a?(a=a.toLowerCase(),"zh-tw"==a||"zh-cn"==a||"ja"==a||"ko"==a):!1};
    Xa=function(){return(new Date).getTime()};
    Ya=function(a){return"string"==typeof a};
    Za=function(a){return"number"==typeof a}})();function xc(){return{la:function(){return{clientName:"hp",requestIdentifier:"hp",fc:"google.com",kf:"",Fb:"en",Yd:"",Te:"",Ub:"",authuser:0,Xh:"",vd:"",ge:!1,Ye:"",nd:"",connectionType:0,zk:null,pf:!1,mk:!1,Ie:!1,Qb:Ua([19,5,0]),Qj:!1,mg:!0,qg:10,lg:!0,ee:!0,vj:!1,wg:!1,Uh:!1,Oe:!1,ck:!1,Wj:!1,lj:!0,uk:"en",He:!0,ig:!1,Dh:500,Wc:!1,rh:!0,Vj:!0,Eb:!1,Kb:"",Re:"//www.google.com/textinputassistant",Se:"",bi:7,Rj:!1,Sj:!1,yh:!1,uh:!0,zh:!1,Fe:!1,ri:!1,pi:!1,Rb:1,Pe:!0,yb:!1,Ac:!1,fe:!1,di:10,Uc:!1,rj:0,
    Uj:!1,fi:!0,og:!1,Ma:document.body,Ah:!0,lf:null,xb:{},xj:{},hk:0,xg:!1,Gh:!0,xa:!1,yj:!1,tk:null,ng:!1,Wh:null,Ci:null,de:!1,Fh:!0,Yf:!1,yk:1,oj:1,spellcheck:!1,Qe:!1,searchText:"Search",Bc:"I'm  Feeling Lucky",si:"",learnMoreText:"Learn more",We:"Remove",Ve:"This search was removed from your Web History",hintText:"",uj:"Did you mean:",Zh:"",qk:"",vk:"Search by voice",ug:!1,Jh:null,Zc:0,Kh:0,cd:"",wd:"",isRtl:!1,Na:"absolute",th:!1,De:!1,md:null,Ee:!0,wk:0,ub:[0,0,0],kg:null,Fi:null,Ud:[0],Vd:0,
    ii:1,xd:"",Gi:"",Ei:"",Cc:null,tg:"",sg:"",pj:1,Xd:{},Wf:!0}}}}
  ;var yc=/<\/?(?:b|em)>/gi,zc={vf:8,nb:9,Cd:13,Wb:27,Yi:32,sf:37,uf:38,tf:39,rf:40,DELETE:46,Si:190};var J=function(){function a(a,b,c){f[a]=c;k[a]=[b]}
    function b(a,b,d){var p=l[a];p?p!=c&&(l[a]=c):l[a]=d;(p=k[a])?p.push(b):k[a]=[b];h[b]=d}
    var c=$a,e=0,d={},f={},h={},l={},k={},n=1E4;return{Ij:function(){return e++},
      Hj:function(){return n++},
      Ue:a,jk:function(b,c){var d=n++;a(b,d,c);return d},
      register:b,kk:function(a,c){var d=n++;b(a,d,c);return d},
      Fg:function(){return k},
      la:function(a,b){var k=d[a];return k?k:(k=f[a])?d[a]=k():b?(k=h[b])?k():null:(k=l[a])&&k!=c?k():null}}}();function Ac(a,b,c,e,d,f){function h(){if(m){for(var a=0,b;b=u[a++];)b.N&&b.N();m=!1}}
    function l(a){for(var b in a){var c=b,d=a[c];if(d!=p.Bd)if(t[c]){for(var e=d,y=v[c]||[],f=0;f<e.length;++f)(d=k(c,e[f]))&&y.push(d);v[c]=y}else(d=k(c,d))&&(B[c]=d)}}
    function k(a,b){if(b&&b instanceof Object)var c=b;else if(c=z.la(a,b),!c)return null;if(c.Oa){var d=c.Oa();if(d)for(var k=0,e,p,y;e=d[k++];){y=!1;p=e.A();if(t[p]){if(y=x[p]){y.push(e);continue}y=!0}x[p]=y?[e]:e}}w.push([c,a]);u.push(c);return c}
    function n(a){for(var b=g.Rf,c=0,d;d=w[c++];)d[0]==a&&(b=d[1]);return b}
    function q(a,b){var c=ab(a.A(),r),d=ab(b.A(),r);return 0>c?1:0>d?-1:c-d}
    var p=vc,t=Ua([g.Za,g.Ad,g.Ea,g.Yb,g.fb,g.Jd,g.RENDERER,g.Ja,g.Md,g.lb,g.cc,g.Nd,g.va]),y=[g.Fa,g.T,g.I,g.sa,g.ea,g.Y,g.da,g.Ga,g.fa,g.Ia,g.ha,g.kb,g.U,g.ua,g.mb,g.ia,g.R,g.Pd,g.Ka],r=[g.ia,g.Ea,g.jb,g.U,g.ha,g.Y,g.I,g.da,g.R,g.va,g.wa,g.sa,g.Ga,g.RENDERER,g.Yb,g.Ka,g.fa,g.ea,g.ua,g.cc,g.Ad,g.wf,g.qa,g.Ia,g.Id,g.Kd,g.Zb,g.Ld,g.Lf,g.Od,g.Qf,g.La,g.yf,g.Gd,g.Xb],B={},v={},x={},w=[],u=[],m=!1,z=J,D={F:function(a){h();for(var b=0,c;c=u[b++];)c.F&&c.F(a);m=!0},
      N:h,isActive:function(){return m},
      get:function(a,b){var c=B[a];if(c)return c.C?c.C(n(b)):{}},
      O:function(a,b){var c=v[a];if(c){for(var d=[],k=n(b),e=0,p;p=c[e++];)d.push(p.C?p.C(k):{});return d}return[]},
      za:function(){return a},
      Ra:function(){return d},
      zj:function(a,b){var c=v[g.Za];if(c)for(var d=0,k;k=c[d++];)if(k.D()==a)return k.C?k.C(n(b)):{};return null}};
    (function(){if(f.Wf){var d=z.Fg(),r,n;for(n in d){var h=n;var v=d[h];var w=t[h];if(r=b[h]){if(r!=p.Bd&&w&&r.length){w=h;var L;h=void 0;r=r.slice(0);for(var V=[],W={},ha=0;L=r[ha++];)L instanceof Object&&(h=L.D(),W[h]||(V.push(L),W[h]=1),r.splice(--ha,1));L=Ua(r);L[p.Rd]&&(L=Ua(r.concat(v)),delete L[p.Rd]);for(h in L)W[h]||V.push(parseInt(h,10));b[w]=V}}else b[h]=w?v:v[0]}}l(b);for(d=0;n=y[d++];)b[n]||(w=k(n,void 0))&&(B[n]=w);l(x);u.sort(q);for(d=0;n=u[d++];)n.P&&n.P(c,e);a.gd(e,c.pb());e.Vf();for(d=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             0;n=u[d++];)n.G&&n.G(D);for(d=0;n=u[d++];)n.setup&&n.setup(f);for(d=0;n=u[d++];)n.F&&n.F(f);m=!0})();
    return D}
  ;function Bc(a,b,c){function e(){return a}
    function d(){return G}
    function f(){return Q}
    function h(){return b}
    function l(){return c||""}
    function k(a,b){t(a,b)}
    function n(a,b){t(a,b,!0)}
    function q(){w||(u=m=!0)}
    function p(){D=!0}
    function t(a,b,c){w||(u=!0,r[a]=b,c&&(B[a]=b))}
    var y=db(),r={},B={},v,x,w=!1,u=!1,m=!1,z=!1,D=!1,O={getId:function(){return y},
      se:function(){var a=parseInt(y,36);return isNaN(a)?-1:a},
      Z:e,ue:d,ma:f,Pa:h,getParameters:function(){return r},
      ke:function(){return v},
      dh:l,Rc:function(){return x},
      je:function(){return{Z:e,ue:d,ma:f,Pa:h,dh:l,setParameter:k,pd:n,vg:q,Xf:p}},
      setParameter:k,pd:n,vg:q,Xf:p,Qh:function(){return m},
      Hh:function(){u=z=!0},
      isReusable:function(d,k,e){return!u&&a==d&&b.equals(k)&&c==e},
      Ne:function(){return z},
      Je:function(){return D},
      rg:function(){w||(x=Xa(),"cp"in B||n("cp",b.Ab()),t("gs_id",y),v=bb(B)+":"+a,u=w=!0)}};
    var G=a.toLowerCase();var Q=cb(G);return O}
  ;function Cc(a,b,c,e,d,f){function h(){return!!b&&!!b[0]}
    var l,k=!0,n,q={ga:function(){return a},
      Z:function(){return a.Z()},
      Gc:function(){return h()?b[0]:null},
      W:function(){return b},
      na:h,getParameters:function(){return c},
      Le:function(){return e},
      dd:function(){return d},
      Oh:function(){return f},
      A:function(){return k},
      pe:function(){n||(n=wc(q));return n},
      Ec:function(){return l}};
    b?b.length&&33==b[0].A()&&(d=k=!1):b=[];c?l=c.getObject("t"):c=Dc;return q}
  ;function Ec(a,b,c,e,d,f){function h(a){if(d)for(var b=0,c;c=a[b++];)if(-1!=ab(c,d))return!0;return!1}
    var l=!1,k={Jc:function(){return a},
      M:function(){return b},
      Aa:function(){return c},
      A:function(){return e},
      Pc:function(){return f.getString("za")},
      Yg:function(){return f.getString("zb")},
      Qc:function(){return d||[]},
      Bh:function(a){return!!d&&h([a])},
      xh:h,getParameters:function(){return f},
      Ic:function(){return l}};
    switch(e){case 0:case 32:case 38:case 39:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:l=!0}f||(f=Dc);return k}
  ;(function(){var a=/\s/g,b=/\u3000/g,c=/^\s/,e=/\s+/,d=/\s+/g,f=/^\s+|\s+$/g,h=/^\s+$/,l=/<[^>]*>/g,k=/&nbsp;/g,n=/&#x3000;/g,q=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],p=document.getElementsByTagName("head")[0],t=0;fb=function(a,b){function c(){return b}
    void 0===b&&(b=a);return{Ab:c,ze:function(){return a},
      Wg:c,Tj:function(){return a<b},
      equals:function(c){return c&&a==c.ze()&&b==c.Wg()}}};
    eb=function(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))};
    bb=function(a){var b=[],c;for(c in a)eb(c,a[c],b);return b.join("&")};
    gb=function(a){return!!a&&!h.test(a)};
    hb=function(a){for(var b=q.length,c=0;c<b;c+=2)a=a.replace(q[c],q[c+1].source);return a};
    ib=function(a){for(var b=q.length,c=0;c<b;c+=2)a=a.replace(q[c+1],q[c].source);a=a.replace(k," ");return a.replace(n,"\u3000")};
    lb=function(a){return a.replace(yc,"")};
    mb=function(a){return a.replace(l,"")};
    nb=function(c){return c&&(-1<c.indexOf(" ")||e.test(c))?(c=c.replace(b,"&#x3000;"),c.replace(a,"&nbsp;")):c};
    cb=function(a,b){return a&&(-1<a.indexOf(" ")||e.test(a))?(a=a.replace(d," "),a.replace(b?f:c,"")):a};
    ob=function(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b};
    pb=function(a,b){return a||b?!!a&&!!b&&a.toLowerCase()==b.toLowerCase():!0};
    qb=function(a){window.clearTimeout(a)};
    $a=function(){};
    rb=function(){return p};
    db=function(){return(t++).toString(36)};
    sb=function(a){return oc.test(a)};
    ab=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1};
    tb=function(a,b){return a.V()-b.V()};
    ub=function(a,b){return b.V()-a.V()};
    vb=function(a){var b={},c;for(c in a)b[c]=a[c];return b}})();function Fc(a){return{contains:function(b){return b in a},
    Aj:function(b){return!!a[b]},
    we:function(b){return a[b]||0},
    getString:function(b){return a[b]||""},
    getObject:function(b){return a[b]||null}}}
  var Dc=Fc({});(function(){function a(a,b,c){a=document.createElement(a);b&&(a.className=b);c&&(a.id=c);return a}
    function b(b){return a("div",b)}
    function c(a,b){var c=a.getElementsByTagName("input");if(c)for(var d=0,k;k=c[d++];)if(k.name==b&&"submit"!=k.type.toLowerCase())return k;return null}
    function e(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
    function d(a){return a?a.ownerDocument||a.document:window.document}
    function f(a){return a?(a=d(a),a.defaultView||a.parentWindow):window}
    var h=void 0!=document.documentElement.style.opacity,l={rtl:"right",ltr:"left"};Bb=function(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(p){}};
    Cb=function(a){try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var e=a.createTextRange(),k=d(a).selection.createRange();e.inRange(k)&&(e.setEndPoint("EndToStart",k),b=e.text.length,e.setEndPoint("EndToEnd",k),c=e.text.length)}if(void 0!==b)return fb(b,c)}catch(y){}return null};
    Db=function(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(p){a=null}}return{yd:b,oa:c}};
    Eb=function(a){try{return d(a).activeElement==a}catch(n){}return!1};
    Fb=function(a){return 38==a||40==a};
    yb=a;Ib=function(){var b=a("table");b.cellPadding=b.cellSpacing=0;b.style.width="100%";return b};
    Jb=b;Kb=function(a){a=b(a);var c=a.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";return a};
    Lb=function(a,b){a.innerHTML!=b&&(b&&(wb?b=nb(b):xb&&(b='<pre style="font:inherit;margin:0">'+b+"</pre>")),a.innerHTML=b)};
    Mb=function(a,b){var c=0,d=a.style;"INPUT"!=a.nodeName&&(c+=1);d.left=d.right="";d[b]=c+"px"};
    Nb=function(a){return"rtl"==a?"right":"left"};
    Ob=function(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=l[b])};
    Pb=function(b,d,e){if(c(b,d))return null;var p=a("input");p.type="hidden";p.name=d;e&&(p.value=e);return b.appendChild(p)};
    Qb=c;Rb=function(a){var b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))};
    Sb=e;Tb=function(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return e(a)};
    Ub=function(a,b){b.parentNode.insertBefore(a,b.nextSibling)};
    Vb=function(a){a=a.insertCell(-1);var b=yb("a");b.href="#ifl";b.className="gssb_j gss_ifl";a.appendChild(b);return b};
    Wb=function(a){var b=f(a);return(a=b.getComputedStyle?b.getComputedStyle(a,""):a.currentStyle)?a.fontSize:null};
    Xb=function(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{qf:c,Ge:b}};
    Yb=function(a){return(a||window).document.documentElement.clientWidth};
    Zb=function(a){a=a.style;a.border="none";a.padding=zb||Ab?"0 1px":"0";a.margin="0";a.height="auto";a.width="100%"};
    $b=function(a){return(h?"opacity":"filter")+":"+(h?a+"":(wb?"progid:DXImageTransform.Microsoft.Alpha(":"alpha(")+"opacity="+Math.floor(100*a)+")")+";"};
    ac=function(a){var b={};if(a)for(var c=0,d;d=a[c++];)b[d.Oc()]=d;return b};
    bc=d;cc=f;dc=function(a){zb&&(a.tabIndex=0)}})();J.Ue(g.Vb,192,function(){function a(a){Ya(a)&&(a=e(a));var b="";if(a){for(var c=a.length,d=0,p=0,f=0;c--;)for(p<<=8,p|=a[f++],d+=8;6<=d;)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(p>>d-6&63),d-=6;d&&(b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(p<<8>>d+8-6&63))}return b}
    function b(a){var b=[];if(a)for(var c=0,d=0,e=0;e<a.length;++e){var p=a.charCodeAt(e);if(32>p||127<p||!k[p-32])return[];c<<=6;c|=k[p-32]-1;d+=6;8<=d&&(b.push(c>>d-8&255),d-=8)}return b}
    function c(a,b){var c={};c.J=Array(4);c.buffer=Array(4);c.Ii=Array(4);c.padding=Array(64);c.padding[0]=128;for(var p=1;64>p;++p)c.padding[p]=0;d(c);p=Array(64);if(64<b.length){d(c);h(c,b);var k=l(c)}else k=b;for(var n=0;n<k.length;++n)p[n]=k[n]^92;for(n=k.length;64>n;++n)p[n]=92;d(c);for(n=0;64>n;++n)c.buffer[n]=p[n]^106;f(c,c.buffer);c.total=64;h(c,e(a));k=l(c);d(c);f(c,p);c.total=64;h(c,k);return l(c)}
    function e(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
    function d(a){a.J[0]=1732584193;a.J[1]=4023233417;a.J[2]=2562383102;a.J[3]=271733878;a.qb=a.total=0}
    function f(a,b){for(var c=a.Ii,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.J[0];d=a.J[1];for(var p=a.J[2],f=a.J[3],h,k,l,t=0;64>t;++t)16>t?(h=f^d&(p^f),k=t):32>t?(h=p^f&(d^p),k=5*t+1&15):48>t?(h=d^p^f,k=3*t+5&15):(h=p^(d|~f),k=7*t&15),l=f,f=p,p=d,e=e+h+q[t]+c[k]&4294967295,h=n[t],d=d+((e<<h|e>>>32-h)&4294967295)&4294967295,e=l;a.J[0]=a.J[0]+e&4294967295;a.J[1]=a.J[1]+d&4294967295;a.J[2]=a.J[2]+p&4294967295;a.J[3]=a.J[3]+f&4294967295}
    function h(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.qb++]=b[d],64==a.qb&&(f(a,a.buffer),a.qb=0)}
    function l(a){var b=Array(16),c=8*a.total,d=a.qb;h(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;f(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.J[e]>>c&255;return b}
    var k=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],n=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],q=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
      4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
      4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];return{A:function(){return g.Vb},
      D:function(){return 192},
      C:function(){return{encode:a,decode:b,Xg:c}}}});J.Ue(g.eb,95,function(){function a(a,c){c=hb(lb(c));a=hb(cb(a,!0));if(ob(c,a))return a+"<b>"+c.substr(a.length)+"</b>";for(var b="",d=[],f=c.length-1,h=0,l=-1,k;k=c.charAt(h);++h)" "==k||"\t"==k?b.length&&(d.push({t:b,Xa:l,e:h+1}),b="",l=-1):(b+=k,-1==l?l=h:h==f&&d.push({t:b,Xa:l,e:h+1}));b=a.split(/\s+/);h={};for(f=0;l=b[f++];)h[l]=1;k=-1;b=[];var n=d.length-1;for(f=0;l=d[f];++f)h[l.t]?(l=-1==k,f==n?b.push({Xa:l?f:k,e:f}):l&&(k=f)):-1<k&&(b.push({Xa:k,e:f-1}),k=-1);if(!b.length)return"<b>"+c+"</b>";
    f="";for(h=l=0;k=b[h];++h)(n=d[k.Xa].Xa)&&(f+="<b>"+c.substring(l,n-1)+"</b> "),l=d[k.e].e,f+=c.substring(n,l);l<c.length&&(f+="<b>"+c.substring(l)+"</b> ");return f}
    return{A:function(){return g.eb},
      D:function(){return 95},
      C:function(){return{bold:a}}}});J.register(g.Ed,12,function(){function a(a){a=b(a,p,c);a=b(a,t,e);return b(a,r,d)}
    function b(a,b,c){for(var d,e="",f=0;null!=(d=b.exec(a));)f<d.index&&(e+=a.substring(f,d.index)),e+=c(d[0]),f=b.lastIndex;if(!e)return a;f<a.length&&(e+=a.substring(f));return e}
    function c(a){return String.fromCharCode(a.charCodeAt(0)-65248)}
    function e(a){var b=a.charCodeAt(0);return 1==a.length?h.charAt(b-65377):65438==a.charCodeAt(1)?l.charAt(b-65395):k.charAt(b-65418)}
    function d(a){var b=a.charCodeAt(0);return 12443==a.charCodeAt(1)?n.charAt(b-12454):q.charAt(b-12495)}
    function f(a){return eval('"\\u30'+a.split(",").join("\\u30")+'"')}
    var h=f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"),l=f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"),k=f("D1,D4,D7,DA,DD"),n=f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"),q=f("D1__,D4__,D7__,DA__,DD"),p=/[\uFF01-\uFF5E]/g,t=RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])",
      "g"),y="(["+f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB")+"]\u309b)|(["+f("CF,D2,D5,D8,DB")+"]\u309c)",r=new RegExp(y,"g");return{A:function(){return g.Ed},
      D:function(){return 12},
      C:function(){return{ek:a}}}});function Gc(a,b,c,e,d){var f=ec?"-moz-":Ab?"-ms-":zb?"-o-":fc?"-webkit-":"",h=".gstl_"+e,l=new RegExp("(\\.("+d.join("|")+")\\b)"),k=[];return{addRule:function(a,d){if(b){if(c){for(var e=a.split(","),f=[],n=0,q;q=e[n++];)q=l.test(q)?q.replace(l,h+"$1"):h+" "+q,f.push(q);a=f.join(",")}k.push(a,"{",d,"}")}},
    Vf:function(){if(b&&k.length){b=!1;var c=yb("style");c.setAttribute("type","text/css");(a||rb()).appendChild(c);var d=k.join("");k=null;c.styleSheet?c.styleSheet.cssText=d:c.appendChild(document.createTextNode(d))}},
    prefix:function(a,b){var c=a+(b||"");f&&(c+=b?a+f+b:f+a);return c}}}
  ;J.register(g.Ia,10,function(){function a(a){var b=0;a&&(h||c(),e(),a in l?b=l[a]:(Lb(h,hb(a)),l[a]=b=h.offsetWidth,Lb(h,"")));return b}
    function b(){h||c();e();k||(Lb(h,"|"),k=h.offsetHeight);return k}
    function c(){h=Kb(d.cd);h.style.visibility="hidden";f.appendChild(h)}
    function e(){var a=Xa();if(!q||q+3E3<a)q=a,a=Wb(h),n&&a==n||(l={},k=null,n=a)}
    var d,f,h,l,k,n,q;return{P:function(a){f=a.oe()||document.body},
      setup:function(a){d=a},
      A:function(){return g.Ia},
      D:function(){return 10},
      C:function(){return{Ba:a,getHeight:b}}}});function Hc(a){var b;(function(){function c(b){return a[b]||e}
    function e(){}
    a||(a={});b={Dc:c("a"),search:c("b"),Jb:c("c"),redirect:c("d"),Bb:c("e"),wb:c("f"),qc:c("g"),tc:c("h"),lc:c("i"),uc:c("j"),vb:c("k"),mc:c("l"),pc:c("m"),nf:c("n"),vc:c("o"),wc:c("p"),sb:c("q"),gd:c("r"),Zd:c("s"),ce:c("t"),oc:c("u"),xc:c("w"),ic:c("x"),nc:c("y"),kc:c("z"),jc:c("aa"),yc:c("ab"),ud:c("ac")}})();
    return{Dc:function(){return b.Dc()},
      search:function(a,e){b.search(a,e)},
      Jb:function(a){b.Jb(a)},
      redirect:function(a){b.redirect(a)},
      Bb:function(a){return b.Bb(a)},
      wb:function(a){b.wb(a)},
      qc:function(a){b.qc(a)},
      tc:function(a){b.tc(a)},
      lc:function(a){b.lc(a)},
      uc:function(a,e){b.uc(a,e)},
      vb:function(a,e){b.vb(a,e)},
      mc:function(){b.mc()},
      pc:function(a){b.pc(a)},
      nf:function(a){b.nf(a)},
      vc:function(){b.vc()},
      wc:function(){b.wc()},
      sb:function(a){b.sb(a)},
      gd:function(a,e){b.gd(a,e)},
      Zd:function(a){b.Zd(a)},
      ce:function(){b.ce()},
      oc:function(){b.oc()},
      nc:function(){b.nc()},
      xc:function(a){b.xc(a)},
      ic:function(){b.ic()},
      kc:function(){b.kc()},
      jc:function(){b.jc()},
      yc:function(){b.yc()},
      ud:function(a,e){return b.ud(a,e)}}}
  ;J.register(g.Ea,6,function(){function a(a,b,c,e){var f=a.getId(),h=a.Z();B.ge||d();b=q+p+t+"?"+(y?y+"&":"")+(b?b+"&":"");var k=eb;a=[];k("q",h,a,!0);B.pf||k("callback","google.sbox.p"+n,a);if(r){h="";for(var m=4+Math.floor(32*Math.random()),D=0,u;D<m;++D)u=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),h+=String.fromCharCode(u);k("gs_gbg",h,a)}k=yb("script");k.src=b+a.join("&");k.charset="utf-8";v[f]=k;x=B.ge?e:c;l.appendChild(k);return!0}
    function b(){return 0}
    function c(){return 0}
    function e(a){var b=v[a];b&&(l.removeChild(b),delete v[a])}
    function d(){for(var a in v)l.removeChild(v[a]);v={};x=null}
    function f(a){x&&x(a)}
    function h(a){a||(a=$a);var b=window.google;B.pf?b.ac.h=a:b.sbox["p"+n]=a}
    var l=rb(),k,n,q,p,t,y,r,B,v={},x,w={G:function(a){k=a.get(g.ia,w);n=a.Ra().getId()},
      F:function(a){B=a;0==a.connectionType&&(a=k.Dg(),q=a.protocol,p=a.host,t=a.nd,y=a.Di,r="https:"==document.location.protocol,h(f),(new Image).src=q+p+"/generate_204")},
      A:function(){return g.Ea},
      D:function(){return 6},
      C:function(){return{vi:a,jg:e,rb:$a,me:b,ne:c}},
      N:function(){h(null);d()}};
    return w});J.register(g.Fa,1,function(){function a(a){if(!l)return!0;for(var b=!1,c=!1,f=0,h;f<a.length;++f)if(h=a.charAt(f),!e.test(h)&&(d.test(h)?c=!0:b=!0,c&&b))return!0;return!1}
    function b(a,b,c){if(!l)return!0;var d=f.test(c),k=h.test(b);return"ltr"==a?d||k||e.test(c)||e.test(b):!d||!k}
    function c(a){var b=k;l&&(d.test(a)?b="ltr":e.test(a)||(b="rtl"));return b}
    var e=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),d=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),f=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
      h=RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),l=d.test("x"),k;return{P:function(a){k=a.Qa()},
      A:function(){return g.Fa},
      D:function(){return 1},
      C:function(){return{wh:a,Ph:b,Fc:c}}}});J.register(g.T,2,function(){function a(a,b,c,d,e){var f=q(a);f||(f={},r.push({element:a,qh:f}));var h=f[b];h||(h=f[b]=[],f=a.Bf?window:cc(a),f=n(b,f,h),Ya(b)?a.addEventListener?a.addEventListener(b,f,!1):a["on"+b]=f:a[b]=f);h.push({Nh:!!e,fd:!1,priority:d||0,process:c});h.sort(t);c.pg=b}
    function b(a,b){var c=q(a);if(c&&(c=c[b.pg]))for(var d=0,e;e=c[d++];)if(e.process==b){e.fd=!0;break}}
    function c(b,c,d,e){a(B,b,c,d,e)}
    function e(a){b(B,a)}
    function d(a,b){var c=b||{},d=B[a];d&&d(c,c.Ya)}
    function f(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
    function h(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)}
    function l(a){y?(v||(v=[],f(window,"message",k)),v.push(a),a=window.location.href,window.postMessage("sbox.df",/HTTPS?:\/\//i.test(a)?a:"*")):window.setTimeout(a,0)}
    function k(a){v&&a&&a.source==window&&"sbox.df"==a.data&&v.length&&(v.shift()(),v&&v.length&&window.postMessage("sbox.df",window.location.href))}
    function n(a,b,c){return function(d,e){if(c.length){var f;if(!(f=d)){f={};var h=b.event;h&&(h.keyCode&&(f.keyCode=h.keyCode),f.Mh=!0)}f.Ya=e||a;h=f;for(var k,l,n=0,m;m=c[n++];)m.fd?l=!0:k||(m.Nh?p(m,h):k=m.process(h));if(l)for(n=0;m=c[n];)m.fd?c.splice(n,1):++n;if(f.Gb)return delete f.Gb,f.Mh&&(f=b.event||f),Tb(f),f.returnValue=!1}}}
    function q(a){for(var b=0,c;b<r.length;++b)if(c=r[b],c.element==a)return c.qh;return null}
    function p(a,b){l(function(){a.process(b)})}
    function t(a,b){return b.priority-a.priority}
    var y=window.postMessage&&!(Ab||gc||zb),r=[],B={Bf:1},v;return{A:function(){return g.T},
      D:function(){return 2},
      C:function(){return{S:a,zd:b,Va:c,Bk:e,K:d,Ib:f,Ak:h,defer:l}},
      N:function(){v=null}}});J.register(g.Ha,495,function(){function a(a){l[a.getId()]=!0}
    function b(a){var b=a.ga(),c=b.getId();c in l&&(b=b.Rc(),b=Xa()-b,n+=b,++k,a.getParameters().getString("e")&&++q,delete l[c])}
    function c(){var a=0,b;for(b in l)a++;return a}
    function e(){return k}
    function d(){return n}
    function f(a){var b=!1;a&&(b=a.getParameters().getString("e"));a=0;b?(a|=1,1<q&&(a|=2)):0<q&&(a|=2);return a}
    function h(){l={};q=n=k=0}
    var l,k,n,q;return{F:function(){h()},
      A:function(){return g.Ha},
      D:function(){return 495},
      C:function(){return{Uf:a,Yh:b,yg:c,Tg:e,Zg:d,Hg:f,reset:h}}}});J.register(g.ea,375,function(){function a(a){d[a]=!0;f=a}
    function b(){var a=[],b;for(b in d)a.push(parseInt(b,10));return a}
    function c(){return f}
    function e(){d={};f=null}
    var d,f;return{F:function(){e()},
      A:function(){return g.ea},
      D:function(){return 375},
      C:function(){return{add:a,eh:b,Og:c,reset:e}}}});J.register(g.fa,9,function(){function a(a){var b=n.ca();var c=[];c[27]=23;c[0]=e(B.clientName);c[28]=e(B.requestIdentifier);c[1]=void 0==a?"":a+"";c[26]=q.eh().join("j");a="";t.Vc()?a="o":y.Ua()&&(a=y.ye()+"");c[2]=a;a="";var f=y.W();if(f){for(var m,u=0,H=0,R;R=f[H++];){var P=R.A()+"";R=R.Qc();R.length&&(P+="i"+R.join("i"));P!=m&&(1<u&&(a+="l"+u),a+=(m?"j":"")+P,u=0,m=P);++u}1<u&&(a+="l"+u)}c[3]=a;c[4]=Math.max(n.Ig()-x,0);c[5]=Math.max(n.Mg()-x,0);c[6]=v;c[7]=Xa()-x;c[18]=Math.max(n.Ng()-x,0);c[8]=
    k.Ug();if(m=k.Ag())c[25]=m.Th?"1"+(B.lg?"a":"")+(B.ee?"c":""):"",c[10]=m.Lh;c[11]=k.Hc();c[12]=k.Jg();if(m=k.Eg())c[9]=m.ki,c[22]=m.hi,c[17]=m.mi;c[13]=k.Rg();c[14]=k.Pg();c[15]=k.bh();c[16]=k.Bg();c[30]=p.yg();c[31]=p.Tg();c[32]=p.Zg();c[19]=e(B.vd);m=t.ja();m=p.Hg(m);c[20]=0==m?"":m+"";for(m=0;a=r[m++];)f=a.Aa(),h[f]&&(c[f]=void 0==c[f]?e(a.Nj()):"");c=c.join(".").replace(d,"");l&&w?(m=b+c,a=l.decode(w),m=l.Xg(m,a),m=m.slice(0,8),m=l.encode(m)):m="";return{oq:b,gs_l:c+"."+m}}
    function b(){x=Xa();++v;n.Da();q.reset();k.Da();for(var a=0,b;b=r[a++];)b.reset()}
    function c(a){w=a}
    function e(a){return a?a.replace(f,"-"):""}
    var d=/\.+$/,f=/\./g,h=Ua(uc),l,k,n,q,p,t,y,r,B,v=-1,x,w,u={G:function(a){l=a.get(g.Vb,u);k=a.get(g.U,u);n=a.get(g.I,u);q=a.get(g.ea,u);p=a.get(g.Ha,u);t=a.get(g.Y,u);y=a.get(g.R,u);r=a.O(g.Jd,u);ac(a.O(g.RENDERER,u))},
      setup:function(a){w=a.Xh},
      F:function(a){B=a;b()},
      A:function(){return g.fa},
      D:function(){return 9},
      C:function(){return{getParameters:a,reset:b,zi:c}}};
    return u});J.register(g.ha,11,function(){function a(a,b){if(y){for(var c=!1,d=0,e;e=y[d++];)2==e.Nc(a,b)&&(c=!0);if(c)return}if(gb(a)||m.xa||k&&k.xa())sb(b)?u&&!w&&(w=Pb(u,"btnI","1")):w&&(u.removeChild(w),w=null),h(b),x.search(a,b),f(),n.K(14,{query:a})}
    function b(a){h();x.Jb(a);f()}
    function c(a){h();x.redirect(a);f()}
    function e(a){h(1);x.sb(a);f()}
    function d(a){return x.Bb(a)}
    function f(){q.Yc();q.fg();t.reset();B?B.clear():r.clear();p.ca()!=p.ka()&&p.gg();v&&v.clear()}
    function h(a){l&&m.de&&l.od(a)}
    var l,k,n,q,p,t,y,r,B,v,x,w,u,m,z={P:function(a){u=a.oe()},
      G:function(a){l=a.get(g.cb,z);k=a.get(g.qa,z);n=a.get(g.T,z);q=a.get(g.U,z);p=a.get(g.I,z);t=a.get(g.fa,z);r=a.get(g.R,z);B=a.get(g.Pd,z);v=a.get(g.La,z);x=a.za();y=a.O(g.Nd,z)},
      F:function(a){m=a},
      A:function(){return g.ha},
      D:function(){return 11},
      C:function(){return{search:a,Jb:b,redirect:c,sb:e,Bb:d}}};
    return z});J.register(g.ua,14,function(){function a(a){return(a[d.ib]||{}).j}
    function b(a){return a[d.Hd]}
    function c(a,b){var c=a[d.Hd],p=a[d.Of];b||(b=Bc(c,fb(c.length)));var q={},v=a[d.ib];if(v)for(var t in v){var w=v[t];t in n&&(w=n[t].parse(w));q[t]=w}v=b;var u=!1,m=!1;t=!1;w=0;for(var z;z=p[w++];)if(33==(z[f.Qd]||0)?m=!0:u=!0,m&&u){t=!0;break}u=0;m=[];for(w=0;z=p[w++];){var D=z[f.Qd]||0;if(h[D]&&(!t||33!=D)){var O=z[f.Nf];k&&(O=l.bold(c.toLowerCase(),mb(ib(O))));m.push(Ec(O,mb(ib(O)),u++,D,z[f.Mf]||[],e(z)))}}return Cc(v,m,Fc(q),!1,!0,!1)}
    function e(a){return(a=a[f.ib])?Fc(a):Dc}
    var d=tc,f=pc,h,l,k,n={},q={G:function(a){l=a.get(g.eb,q);if(a=a.O(g.cc,q))for(var b=0,c;c=a[b++];)n[c.Jj()]=c},
      F:function(a){h=a.Qb;k=a.Uc},
      A:function(){return g.ua},
      D:function(){return 14},
      C:function(){return{ci:a,gk:b,kd:c}}};
    return q});J.register(g.mb,15,function(){function a(a){var c=b(a);if(c){if(h)for(var d=0,p;p=h[d++];)a=p.edit(a);l.wi(a);d=a;p=d.ga().Z();var q=d.W();k.isEnabled()&&(q.length?k.rd(p,q,0==d.A())&&f.Yh(d):k.clear());e.K(3,{input:p,suggestions:q})}n.uc(a,c);return c}
    function b(a){var b=d.ka(),c=l.ja();b=b.toLowerCase();var e=a.Z().toLowerCase();b==e?c=!0:(b=cb(b),a=(e=a.ga())?e.ma():cb(a.Z().toLowerCase()),c=c?c.ga().ma():"",c=0==b.indexOf(a)?0==b.indexOf(c)?a.length>=c.length:!0:!1);return c}
    function c(a,b){return a.V()-b.V()}
    var e,d,f,h,l,k,n,q={G:function(a){e=a.get(g.T,q);d=a.get(g.I,q);f=a.get(g.Ha,q);h=a.O(g.Md,q);l=a.get(g.Y,q);k=a.get(g.R,q);n=a.za();h.sort(c)},
      A:function(){return g.mb},
      D:function(){return 15},
      C:function(){return{process:a,Hb:b}}};
    return q});J.register(g.U,13,function(){function a(a,b){if(!(!ba||aa||R&&R.mj())){a.pd("ds",ka.Yd);a.pd("pq",sa);a.rg();var c=!0,d=a.se();d>K&&(K=d);++A;W.Uf(a);d=Xa();for(var e in oa)2500<d-oa[e].Rc()&&z(e);X&&(e=H.get(a))&&((c=I||a.Qh())&&ka.Gh&&a.Hh(),U.process(e),e.Le()&&++ia,F=null);c&&(F=a,C&&!b||m())}}
    function b(){return 10<=T||3<=P.ne()?!0:!1}
    function c(){Z=K}
    function e(){return K<=Z}
    function d(){F=null}
    function f(){return A}
    function h(){return{Th:X,Lh:X?H.zg():0}}
    function l(){return X?H.Hc():0}
    function k(){return ia}
    function n(){return{ki:ta,hi:la,mi:ya}}
    function q(){return Ea}
    function p(){return ua}
    function t(a){a=ha.kd(a);return U.Hb(a)}
    function y(){return qa}
    function r(){for(var a=[],b=0,c,d=0;d<=G;++d)c=ra[d],0==c?b++:(b=1==b?"0j":1<b?d+"-":"",a.push(b+c),b=0);return a.join("j")}
    function B(){X&&H.Zf()}
    function v(a){X&&H.cg(a)}
    function x(){X&&H.Da();qa=ua=Ea=ya=la=ta=ia=T=A=0;ra=[];for(var a=0;a<=G;++a)ra[a]=0}
    function w(a){sa=a}
    function u(a){return function(b){D(b,a)}}
    function m(){null!=C&&(qb(C),C=null);if(!(2<P.ne())&&F){var a=[],b=F.getParameters();if(b)for(var c in b)eb(c,b[c],a);E.mc();a=P.vi(F,a.join("&"),u(F),D);F.Ne()||(++ta,a?(a=F,oa[a.getId()]=a,++T):++la);F=null;a=100;b=(T-2)/2;for(c=1;c++<=b;)a*=2;a<Y&&(a=Y);C=window.setTimeout(m,a)}}
    function z(a){P.jg(a);delete oa[a];T&&--T}
    function D(a,b){if(ba){if(!b){var c=ha.ci(a);b=oa[c];if(!b)return}if(!b.Ne()){c=ha.kd(a,b);if(ca){var d=L.ka();c=ca.nk(c,d)}X&&H.put(c);b.se()<=Z||(++ya,U.process(c)||++Ea,d=b,Y=c.getParameters().we("d"),d&&(z(d.getId()),d=d.Rc(),d=Xa()-d,qa+=d,ua=Math.max(d,ua),++ra[d>Q?G:O[Math.floor(d/100)]]));c&&(c=c.getParameters().getString("q"))&&V.zi(c)}}}
    var O=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],G=O[O.length-1]+1,Q=100*O.length-1,H,R,P,L,V,W,ha,U,ca,N,E,ba=!1,F,K=-1,oa,A,T,ia,ta,la,ya,Ea,ua,qa,ra,Y,C,I,aa,Z,X,ka,sa,da={G:function(a){H=a.get(g.kb,da);R=a.get(g.qa,da);a.get(g.T,da);L=a.get(g.I,da);V=a.get(g.fa,da);W=a.get(g.Ha,da);ha=a.get(g.ua,da);U=a.get(g.mb,da);ca=a.get(g.Hf,da);a.get(g.Y,da);N=a.get(g.ia,da);a.get(g.R,da);E=a.za()},
      F:function(a){P=N.Cg();ka=a;ba=!0;oa={};Y=0;I=a.wg;aa=a.Ie;Z=-1;X=ka.mg&&!!H;sa=a.Te},
      A:function(){return g.U},
      D:function(){return 13},
      C:function(){return{he:a,Vc:b,Yc:c,Me:e,fg:d,Ug:f,Ag:h,Hc:l,Jg:k,Eg:n,Rg:q,Pg:p,Hb:t,bh:y,Bg:r,rb:B,dg:v,Da:x,hf:w}},
      N:function(){ba=!1;null!=C&&(qb(C),C=null);oa=F=null;c()}};
    return da});J.register(g.Y,5,function(){function a(){return d.Vc()}
    function b(a){f=a}
    function c(){return f}
    function e(){f=null}
    var d,f,h={G:function(a){d=a.get(g.U,h)},
      F:function(){f=null},
      A:function(){return g.Y},
      D:function(){return 5},
      C:function(){return{Vc:a,wi:b,ja:c,qj:e}}};
    return h});J.register(g.ia,16,function(){function a(){return d}
    function b(){return f}
    function c(){d&&d.rb()}
    var e={},d,f,h={G:function(a){a=a.O(g.Ea,h);for(var b=0,c;c=a[b++];)e[c.me()]=c},
      F:function(a){var b="https:"==document.location.protocol,c=eb,h=[];c("client",a.clientName,h);c("hl",a.Fb,h);c("gl",a.kf,h);c("sugexp",a.vd,h);c("gs_rn",23,h);c("gs_ri",a.requestIdentifier,h);a.authuser&&c("authuser",a.authuser,h);f={protocol:"http"+(b?"s":"")+"://",host:a.Ye||"clients1."+a.fc,nd:a.nd||"/complete/search",Di:h.length?h.join("&"):""};d&&d.me()==a.connectionType||(d=e[a.connectionType])},
      A:function(){return g.ia},
      D:function(){return 16},
      C:function(d){return{Cg:d==g.U?a:$a,Dg:b,eg:c}}};
    return h});J.register(g.da,7,function(){function a(a){k.Ob(a)}
    function b(){return n}
    function c(a){if(a in q){if(p){if(a==p.Mc())return;f();p.Ce()}p=q[a];k.Pb(p)}}
    function e(){return n?k.getHeight():0}
    function d(){n||(k.show(h()),n=!0)}
    function f(){n&&(k.hide(),n=!1)}
    function h(){var a=vb(l);p.Td(a);return a}
    var l={sh:!1,horizontalAlignment:"left",Ke:!0,ya:null,marginWidth:0},k,n,q={},p,t={G:function(a){k=a.get(g.Ga,t);if(a=a.O(g.fb,t))for(var b=0,c;c=a[b++];)q[c.Mc()]=c},
      F:function(){n=!1},
      A:function(){return g.da},
      D:function(){return 7},
      C:function(){return{isVisible:b,Pb:c,getHeight:e,show:d,hide:f,Ob:a}},
      N:function(){f()}};
    return t});J.register(g.I,3,function(){function a(){var a={};X.K(13,a);!a.cancel&&Fa.He&&X.defer(M.dismiss);Ca.nc()}
    function b(){X.K(12);Ca.oc()}
    function c(){la("rtl")}
    function e(){la("ltr")}
    function d(){M.oi()}
    function f(a){M.na()?M.ni():M.tb(a)}
    function h(){if(0==Fa.Rb)return!1;if(4==Fa.Rb)return Ca.yc(),!1;var a=ya();if(a)switch(Fa.Rb){case 1:if(Ea(a,!0))return sa.add(C.nb),!0;break;case 3:return M.Ta(a)}return!1}
    function l(){Fa.ri?oa(5):(M.isVisible()?M.dismiss():B(),D())}
    function k(a){ea&&a.ze()==ea.length&&(La&&La.clear(),Fa.pi&&oa(2),Ca.lc(ea))}
    function n(a){aa&&0==a.Ab()&&aa.ti()}
    function q(a,b,c,d){Fa.og&&!a&&M.gf(!0);Fa.ig&&!M.isVisible()&&"mousedown"==c&&M.tb(b);var e;kb&&kb.isReusable(a,b,c)?e=kb:kb=e=Bc(a,b,c);var f=b=!1;if(a!=ea||"onremovechip"==c)ob(c,"key")?sa.add(C.Cf):"paste"==c&&sa.add(C.Ef),b=!0,ra(a),X.K(1,{Ya:c,ya:Ma}),Ca.wb(a),f=Xa(),Gb||(Gb=f),jc=f,gb(a)&&(d=!0),f=!0;a=Y.DONT_CARE;var h=e.je(),k=xa.ja();if(Ba)for(var l=0,p;p=Ba[l++];)p=p.Nc(h,k),p>a&&(a=p);switch(a){case Y.xf:d=!0;break;case Y.Pf:d=!1}d?(b&&M.Bi(),Hb&&e.setParameter("gs_is",1),Ca.pc(Hb),ka.he(e),
      kb=null):f&&(M.clear(),ka.Yc());X.K(2,{Ya:c})}
    function p(a){(Hb=a)&&sa.add(C.Af)}
    function t(a){kc!=a&&((kc=a)?Ca.kc():Ca.jc())}
    function y(a){ua(a)}
    function r(){I.focus()}
    function B(){I.blur()}
    function v(){return I.ed()}
    function x(a,b,c){ob(a,ea,!0)&&(a=ea+a.substr(ea.length));c=c||fb(a.length);q(a,c,"",b);ua(a,!0)}
    function w(a){x(a,!0);lc=Xa();sa.add(C.Ff)}
    function u(){q(ea,P(),"onremovechip")}
    function m(a){ra(a);I.refresh();X.K(4,{ya:Ma,input:a})}
    function z(){I.select()}
    function D(){ea!=Na&&ra(Na);X.K(5,{input:Na,suggestions:M.W(),ya:Ma});I.refresh();Ca.tc(Na)}
    function O(){Na=ea}
    function G(){return I.le()}
    function Q(){return Na}
    function H(){return ea}
    function R(){return Ma}
    function P(){return I.Pa()}
    function L(){return I.Lc()}
    function V(){return I.getHeight()}
    function W(){return I.Ba()}
    function ha(){return I.re()}
    function U(){return Gb}
    function ca(){return jc}
    function N(){return lc}
    function E(){return 0!=hd}
    function ba(){if(jb){if(Fa.Wc)return!0;for(var a=0,b;b=Oa[a++];)if(b.isEnabled())return!0}return!1}
    function F(a){if(a==ea)return!0;var b=ea.length;return a.substr(0,b)==ea?Z.Ph(Ma,ea,a.substr(b)):!1}
    function K(){I.ld()}
    function oa(a){da.search(ea,a)}
    function A(a){ea&&(ra(""),I.clear(),X.K(1),M.clear(),Ca.wb(ea));a&&Ca.ic()}
    function T(){lc=jc=Gb=0}
    function ia(a){I.ff(a)}
    function ta(){var a=ya();a&&Ea(a)}
    function la(a){var b=P().Ab();Ma==a?M.na()&&b==ea.length&&(M.Ua()?Fa.yb&&(a=M.Sa(),da.search(a.M(),6)):Fa.Pe&&h()):aa&&0==b&&aa.ti()}
    function ya(){if(M.na()){var a=M.Ua()?M.Sa():M.Gc();if(a.Ic())return a}return null}
    function Ea(a,b){var c=a.M();return pb(Na,c)?!1:(O(),b?x(c,!0):m(c),!0)}
    function ua(a,b){ea=a||"";qa();I.refresh();b||(X.K(4,{ya:Ma,input:ea}),Ca.qc(ea))}
    function qa(){var a=Z.Fc(ea);a!=Ma&&(I.qd(a),Ma=a)}
    function ra(a){ea=Na=a||"";qa()}
    var Y=sc,C=rc,I,aa,Z,X,ka,sa,da,Ba,xa,M,La,jb,Oa,Ca,Na,ea,Ma,hd,Gb,jc,lc,Hb,kc,kb,Fa,Da={G:function(a){I=a.get(g.sa,Da);aa=a.get(g.qa,Da);Z=a.get(g.Fa,Da);X=a.get(g.T,Da);ka=a.get(g.U,Da);sa=a.get(g.ea,Da);da=a.get(g.ha,Da);Ba=a.O(g.Ja,Da);xa=a.get(g.Y,Da);M=a.get(g.R,Da);La=a.get(g.La,Da);jb=a.get(g.wa,Da);Oa=a.O(g.va,Da);Ca=a.za();hd=a.Ra().Kc()},
      setup:function(a){Fa=a;Ba.sort(tb);ea=Na=I.Lg()||""},
      F:function(a){Fa=a;kc=Hb=!1;qa()},
      A:function(){return g.I},
      D:function(){return 3},
      C:function(){return{Be:a,kh:b,mh:c,nh:e,ph:d,ih:f,Ta:h,jh:l,hh:k,fh:n,lh:q,yi:p,ef:t,Nb:y,ie:r,ec:B,Sh:v,jf:x,Oj:w,Pj:u,jd:m,df:z,cf:D,gg:O,le:G,ca:Q,ka:H,Fc:R,Pa:P,Lc:L,getHeight:V,Ba:W,re:ha,Ig:U,Mg:ca,Ng:N,vh:E,Xc:ba,ak:F,ld:K,search:oa,clear:A,Da:T,ff:ia,Sd:ta}}};
    return Da});J.register(g.R,17,function(){function a(a){a.ya=Ba;a.marginWidth=da;var b=xa.Fi;b||(b="rtl"==Ba?"right":"left");a.horizontalAlignment=b}
    function b(a,b,d){var e=!1;a=ua&&ua.Yj(b);D();(Y=b)&&b.length&&(e=b[0].M(),oa.wh(e)&&(e=ia.ca()),Ba=oa.Fc(e),d?(aa=F.Df,e=K.ji(b,Ba),b=b[0].getParameters().getString("a"),b=ib(b),da=ta.Ba(b)):(aa=F.Dd,e=K.X(U(),Ba),da=0),a&&(I=ua.Lj(),c(ua.Dj())),e?m():D());return e}
    function c(a){ba();if(C!=a){var b=C;C=a;E(b)}}
    function e(){if(x())if(Z){var a=C;C==Y.length-1?I=C=null:null==C?C=0:++C;I=C;N(a,e)}else m()}
    function d(){if(x())if(Z){var a=C;Y&&0!=C?null==C?C=Y.length-1:--C:I=C=null;I=C;N(a,d)}else m()}
    function f(a){var b=a?4:3;w()?(a=B(),K.Db(a)||ia.search(b),b=ia.ca(),ra.vb(b,a)):ia.search(b)}
    function h(a){return K.Ta(a)}
    function l(a){I=C=a;a=Y[a];var b=ia.ca();ra.vb(b,a)}
    function k(){return Z}
    function n(){return X}
    function q(a){X&&!a&&D();X=a}
    function p(){return aa}
    function t(){return Y}
    function y(){return x()?Y[0]:null}
    function r(){return C}
    function B(){return null!=I?Y[I]:null}
    function v(){return I}
    function x(){return!(!Y||!Y.length)}
    function w(){return null!=I}
    function u(){Z&&!ka&&(ka=window.setTimeout(D,xa.Dh))}
    function m(){Z||(A.Pb(17),A.show(),Z=!0,ra.vc())}
    function z(){Z&&(ka&&(qb(ka),ka=null),A.hide(),Z=!1,ra.wc())}
    function D(){z();Y=null;aa=F.EMPTY;null!=C&&K.Sb(C);I=C=null;K.clear()}
    function O(){T.Yc();z()}
    function G(){null!=C&&K.Sb(C);I=C=null}
    function Q(){ba();sa=window.setTimeout(G,0)}
    function H(){ba()}
    function R(a){if(x())m();else{var b=ia.ca();if(b){a=a||ia.Pa();b=Bc(b,a);if(ya){a=b.je();for(var c=Ea.ja(),d=0,e;e=ya[d++];)e.Nc(a,c)}T.he(b)}}}
    function P(){return K.L()}
    function L(){return K.Cb()}
    function V(){Z=!1}
    function W(){K.Wa()}
    function ha(){return 17}
    function U(){if(x()&&aa==F.Dd){for(var a=[],b=[],c=0,d;(d=la[c++])&&!d.Gj(ia.ca(),Y,b););(c=b?b.length:0)&&(c-=ca(b,a,0));for(d=0;d<Y.length;++d)a.push(Y[d]);c&&(c-=ca(b,a,1));xa.yh&&a.push(1);c&&ca(b,a,2);xa.Fe&&a.push(2);qa&&qa.kj(a);return a}return null}
    function ca(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(b.push(f),++d);return d}
    function N(a,b){if(null==C||K.isSelectable(C))if(E(a),null==C)ia.cf();else{var c=K.zc(Y[C]);ia.Nb(c);ra.xc(c)}else K.Sb(a),b()}
    function E(a){ba();null!=a&&K.Sb(a);null!=C&&K.Eh(C)}
    function ba(){sa&&(qb(sa),sa=null)}
    var F=qc,K,oa,A,T,ia,ta,la,ya,Ea,ua,qa,ra,Y,C,I,aa,Z,X,ka,sa,da,Ba,xa,M={G:function(a){K=a.get(g.Ka,M);oa=a.get(g.Fa,M);A=a.get(g.da,M);T=a.get(g.U,M);ia=a.get(g.I,M);ta=a.get(g.Ia,M);la=a.O(g.Yb,M);ya=a.O(g.Ja,M);Ea=a.get(g.Y,M);ua=a.get(g.If,M);qa=a.get(g.Jf,M);ra=a.za()},
      setup:function(){ya.sort(tb);la.sort(ub)},
      F:function(a){xa=a;I=C=null;aa=F.EMPTY;Z=!1;X=!0;Ba="";da=0},
      A:function(){return g.R},
      D:function(){return 17},
      C:function(){return{rd:b,xi:c,ni:e,oi:d,Db:f,Ta:h,gh:l,isVisible:k,isEnabled:n,gf:q,Qg:p,W:t,Gc:y,Kg:r,Sa:B,ye:v,na:x,Ua:w,Bi:u,show:m,hide:z,clear:D,dismiss:O,Ze:G,li:Q,ij:H,tb:R}},
      Oa:function(){var b={Td:a,L:P,Cb:L,Ce:V,Wa:W,Mc:ha};return[{P:$a,G:$a,setup:$a,F:$a,A:function(){return g.fb},
        D:function(){return 17},
        C:function(){return b},
        Oa:$a,N:$a}]},
      N:function(){ka&&(qb(ka),ka=null);Y=null;z()}};
    return M});J.register(g.Ga,8,function(){function a(a){a!=z&&(z=a,a=a.L(),D?a!=D&&u.replaceChild(a,D):u.appendChild(a),D=a)}
    function b(){m||(m=u?Math.max(u.offsetHeight,0):0);return m}
    function c(a){u.className=a.sh?"gssb_e gsdd_a":"gssb_e";var b=a.ya||R;B!=b&&(B=b,Ob(r,b));b=a.marginWidth;if(w!=b){var c=x.style;b?(v.hasChildNodes()||v.appendChild(x),c.width=b+"px",ec&&(c.paddingLeft="1px")):(v.hasChildNodes()&&v.removeChild(x),c.paddingLeft="");w=b}L=a.Ke;V=a.horizontalAlignment;k(O,!0);k(H,!0);p.K(16);d()}
    function e(){m=0;k(O,!1);k(H,!1);var a=R;B!=a&&(B=a,Ob(r,a));p.K(11)}
    function d(){m=0;h();if(H){var a=t.Ud[0],c=H.style;"relative"!=t.Na&&(c.top=r.style.top,c.left=r.offsetLeft+v.offsetWidth+"px");a=b()+a;H.style.height=Math.max(a,0)+"px";l(H,u.offsetWidth)}z&&z.Wa()}
    function f(a){if(G)Q!=a&&G.replaceChild(a,Q);else{var b=r.insertRow(-1);b.style.height="0";b.insertCell(-1);G=b.insertCell(-1);n.isVisible()||(k(u,!1),k(r,!0),d());O=u;G.appendChild(a)}Q=a}
    function h(){var a,b;var c=(a=z&&z.Cb())?a.offsetWidth:q.Ba();(b=P)?Ya(b)&&(b=null):w||!L?(u.style.width="",r.style.width=""):(u.style.width="100%",b=c+t.ub[2],l(r,b));if("relative"!=t.Na){var d=q.Lc();a&&(d.oa=Db(a).oa);a=t.ub;var e=a[1];a=a[0];a=d.yd+q.getHeight()+a;"right"==V?(b=cc(r),c=Yb(b)-(d.oa-e+c),b=void 0):(d=d.oa+e,"center"==V&&b&&(d+=(c-b)/2),b=d,c=void 0);e={oa:0,yd:0};"absolute"==t.Na&&t.Ma&&t.Ma!=document.body&&(e=Db(t.Ma));d=r.style;d.top=a-e.yd+"px";d.left=d.right="";void 0!=b?d.left=
      b-e.oa+"px":d.right=c+e.oa+"px"}wb&&(d.zoom="normal",d.zoom=1)}
    function l(a,b){Za(b)?0<b&&(a.style.width=b+"px"):a.style.width=b}
    function k(a,b){a&&(a.style.display=b?"":"none")}
    var n,q,p,t,y,r,B,v,x,w,u,m,z,D,O,G,Q,H,R,P,L=!0,V,W={P:function(a,b){R=a.Qa();b.addRule(".gssb_c","border:0;position:absolute;z-index:989");b.addRule(".gssb_e","border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".gssb_f","visibility:hidden;white-space:nowrap");b.addRule(".gssb_k","border:0;display:block;position:absolute;top:0;z-index:988");b.addRule(".gsdd_a","border:none!important")},
      G:function(a){n=a.get(g.da,W);q=a.get(g.I,W);p=a.get(g.T,W);y=a.Ra().getId()},
      setup:function(a){t=a;r=Ib();r.className="gstl_"+y+" gssb_c";k(r,!1);O=r;var b=r.insertRow(-1);v=b.insertCell(-1);v.className="gssb_f";x=Jb();u=b.insertCell(-1);u.className="gssb_e";u.style.width="100%";t.De&&(H=yb("iframe","gstl_"+y+" gssb_k"),k(H,!1),(t.Ma||document.body).appendChild(H));if(P=t.kg)Za(P)&&(P+=t.ub[2]),l(r,P);h();(a.Ma||document.body).appendChild(r);p.Va(8,d)},
      F:function(a){t=a;r.style.position=a.Na},
      A:function(){return g.Ga},
      D:function(){return 8},
      C:function(){return{Pb:a,getHeight:b,Ob:f,show:c,hide:e,Wa:d}}};
    return W});J.register(g.sa,4,function(){function a(a,b){ya&&(ya=!1,F.zd(A,H),F.zd(A,R));b||(b=a);A.parentNode.replaceChild(a,A);b.appendChild(A);la&&ta.fi&&(Ab||ec?F.defer(function(){A.focus();Bb(A,qa.Ab())}):A.focus());
    P()}
    function b(){return aa}
    function c(a){var b="rtl"==a==("rtl"==Ba);A.dir=a;if(Z){K.qd(a);var c=C.parentNode;c.removeChild(Z);b?Ub(Z,C):c.insertBefore(Z,C)}aa&&(aa.dir=a,c=aa.parentNode,c.removeChild(aa),b?c.insertBefore(aa,C):Ub(aa,C));0!=T&&(a=Nb(a),Mb(A,a))}
    function e(){return qa}
    function d(){return Db(I)}
    function f(){var a=I?I.offsetHeight:0;M>a&&(a=M);return a}
    function h(){return La?La:I?I.offsetWidth:0}
    function l(){var a=A.offsetWidth;ta.Oe&&(a-=A.offsetHeight);return a}
    function k(){return A.value}
    function n(a){(ta.ug?A:C||jb||A).style.background=a||"transparent"}
    function q(){Y=!0}
    function p(){A.select();U()}
    function t(){hc&&(A.value="");A.value=E.ka();hc&&(A.value=A.value);w()}
    function y(){if(!la)try{A.focus(),la=!0,w()}catch(Ca){}}
    function r(){la&&(A.blur(),la=!1)}
    function B(){return la}
    function v(){A.value=""}
    function x(){var b=xa.get("gs_id");if(b)aa=xa.get("gs_ttc"),C=xa.get("gs_tti"),E.Xc()&&K&&(X=K.L(),Z=X.parentNode);else{b=Ib();b.id=xa.getId("gs_id");b.className="gstl_"+ia+" "+(ta.xd||A.className);var c=b.insertRow(-1),d=b.style,e=A.style;d.width=La?La+"px":e.width;d.height=M?M+"px":e.height;d.padding="0";Zb(A);A.className=ta.cd;da&&(aa=c.insertCell(-1),aa.id=xa.getId("gs_ttc"),aa.style.whiteSpace="nowrap");C=c.insertCell(-1);C.id=xa.getId("gs_tti");C.className="gsib_a";E.Xc()&&K&&(X=K.L(),Z=c.insertCell(-1),
      Z.className="gsib_b",Z.appendChild(X));a(b,C)}ic&&fc&&(A.style.height="1.25em",A.style.marginTop="-0.0625em");u(b);I=b}
    function w(){if(la){var a=A.value.length;qa=fb(a);Bb(A,a)}}
    function u(a){F.S(a,"mouseup",function(){A.focus()})}
    function m(){function a(a){F.S(A,a,Q,10,b)}
      F.S(A,"keydown",D);(zb||ta.Yf)&&F.S(A,"keypress",G);F.S(A,"select",U,10);var b=!1;a("mousedown");a("keyup");a("keypress");b=!0;a("mouseup");a("keydown");a("focus");a("blur");a("cut");a("paste");a("input");F.S(A,"compositionstart",z);F.S(A,"compositionend",z)}
    function z(a){a=a.type;"compositionstart"==a?E.ef(!0):"compositionend"==a&&E.ef(!1)}
    function D(a){var b=a.keyCode;ra=b;var c=(fc||ec)&&Fb(b)&&ba.na(),d=b==N.Cd,e=b==N.Wb;ka=!1;b==N.nb&&(ka=E.Ta());d&&((b=ba.Sa())&&O(b)?ba.Db(a.shiftKey):F.defer(function(){ba.Db(a.shiftKey)}));
      if(c||d||e||ka)a.Gb=!0}
    function O(a){return(a=oa[a.A()].Zj)&&a()}
    function G(a){var b=a.keyCode,c=b==N.Wb,d=b==N.nb&&ka;if(b==N.Cd||c||d)a.Gb=!0}
    function Q(a){if(!sa){var b=a.Ya;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=Fb(a);if("keydown"==b){if(E.yi(229==a),c)break a}else{var d=a!=ra;ra=-1;if(!c||d)break a}switch(a){case N.Wb:E.jh();break;case N.sf:E.mh();break;case N.tf:E.nh();break;case N.uf:E.ph();break;case N.rf:E.ih(qa);break;case N.DELETE:E.hh(qa);break;case N.vf:E.fh(qa)}}U();E.lh(A.value,qa,b)}}
    function H(){la=!0;E.kh()}
    function R(){la=!1;E.Be()}
    function P(){ya||(ya=!0,F.S(A,"focus",H,99),F.S(A,"blur",R,99))}
    function L(){ua||(ua=window.setInterval(W,ta.di||50))}
    function V(){ua&&(qb(ua),ua=null)}
    function W(){Q({Ya:"polling"})}
    function ha(){ec&&Rb(A)}
    function U(){if(la){var a=Cb(A);a&&(qa=a)}}
    function ca(){var a;F.Ib(window,"pagehide",function(){sa=!0;a=A.value});
      F.Ib(window,"pageshow",function(b){sa=!1;(b.persisted||void 0!==a)&&E.jd(a)})}
    var N=zc,E,ba,F,K,oa,A,T,ia,ta,la,ya=!1,Ea,ua,qa=fb(0),ra=-1,Y=!1,C,I,aa,Z,X,ka,sa,da,Ba,xa,M,La,jb,Oa={P:function(a,b){xa=a;A=a.qe();Ba=a.Qa();a.pb()||(b.addRule(".gsib_a","width:100%;padding:4px 6px 0"),b.addRule(".gsib_a,.gsib_b","vertical-align:top"))},
      G:function(a){E=a.get(g.I,Oa);F=a.get(g.T,Oa);ba=a.get(g.R,Oa);K=a.get(g.wa,Oa);oa=ac(a.O(g.RENDERER,Oa));a=a.Ra();T=a.Kc();ia=a.getId()},
      setup:function(a){ta=a;M=a.Zc;La=a.Kh;la=Eb(A);U();Ab&&F.S(A,"beforedeactivate",function(a){Y&&(Y=!1,a.Gb=!0)},10);
        ec&&ca();I=A;da=!!a.xb[g.qa];(E.vh()||E.Xc()||da||a.xg)&&x();a.fe&&(F.S(A,"blur",V,10),F.S(A,"focus",L,10),Ea=!0);F.Va(8,ha);m();P()},
      F:function(a){ta=a;var b=a.Jh;b&&(jb=xa.zb(b));A.setAttribute("autocomplete","off");A.setAttribute("spellcheck",a.spellcheck);A.style.outline=a.Qe?"":"none";Ea&&L()},
      A:function(){return g.sa},
      D:function(){return 4},
      C:function(){return{xk:a,le:b,qd:c,Pa:e,Lc:d,getHeight:f,Ba:h,re:l,Lg:k,ff:n,ld:q,select:p,refresh:t,focus:y,blur:r,ed:B,clear:v}},
      N:function(){Ea&&V();ta.He&&F.zd(A,E.Be)}};
    return Oa});J.register(g.Ka,18,function(){function a(a,b){if(!U)return!1;W=b;x();for(var c=!1,d=0,e;e=a[d++];)t(e)&&(c=!0);return c}
    function b(a){var b=z[a.A()];return b&&b.oh?b.oh(a):!1}
    function c(a){return z[a.A()].Tc(null,a,D)}
    function e(a){var b=z[a.A()];if(b&&b.zc){var c=m.ca();return b.zc(a,c)}return a.M()}
    function d(a,b){if(!U)return!1;W=b;x();for(var c=!1,d=0,e;e=a[d++];)if(1==e)if(N)ca.appendChild(N);else{e=r();var f=e.style;f.textAlign="center";f.whiteSpace="nowrap";e.dir=ha;f=Jb();f.style.position="relative";E=Jb();E.className="gssb_g";G.Fe&&(E.style.paddingBottom="1px");y(G.searchText,E,13);G.uh?y(G.Bc,E,8):G.zh&&y(G.si,E,14);f.appendChild(E);e.appendChild(f);N=e.parentNode}else 2==e?ba?ca.appendChild(ba):(e=r(),f=e.style,f.padding="1px 4px 2px 0",f.fontSize="11px",f.textAlign="right",f=yb("a"),
      f.id="gssb_b",f.href="http://www.google.com/support/websearch/bin/answer.py?hl="+G.Fb+"&answer=106230",f.innerHTML=G.learnMoreText,e.appendChild(f),ba=e.parentNode):3==e?(e=P.pop())?ca.appendChild(e):(e=U.insertRow(-1),e.Vh=!0,e=e.insertCell(-1),f=yb("div","gssb_l"),e.appendChild(f)):t(e)&&(c=!0);return c}
    function f(a){B(a,F);var b=w.W();b&&u.K(9,{index:a,suggestion:b[a],template:L[a]})}
    function h(a){B(a,"");u.K(10)}
    function l(){for(var a,b,c;c=H.pop();)a=c.A(),(b=Q[a])||(b=Q[a]=[]),b.push(c),a=c.L(),a.parentNode.removeChild(a);for(;a=ca.firstChild;)a=ca.removeChild(a),a.Vh?P.push(a):a!=N&&a!=ba&&R.push(a);L=[]}
    function k(a){return(a=L[a])?a.isSelectable():!1}
    function n(){x()}
    function q(){return U}
    function p(){return G.Ee||ha==W?V:null}
    function t(a){var b=a.A(),c=z[b];if(!c)return!1;var d=(b=Q[b])&&b.pop();d||(d=c.gc(D));c.X(a,d);H.push(d);var e=d.L();b=r();b.className="gssb_a "+G.wd;b.appendChild(e);if(void 0!==a.Aa){L.push(d);d=W;var f=a.Aa();G.Fh&&(e.onmouseover=function(){w.xi(f)},e.onmouseout=function(){w.li()});
      e.onclick=function(b){m.ec();a.Ic()&&m.Nb(a.M());w.Ze();w.gh(f);b=b||cc(e).event;c.Ca(b,a,D)}}else d=ha;
      Ob(b,d);return!0}
    function y(a,b,c){var d=yb("input");d.type="button";d.value=ib(a);d.onclick=function(){D.search(m.ka(),c)};
      if(G.th){a="lsb";var e=yb("span");var f=yb("span");e.className="ds";f.className="lsbb";e.appendChild(f);f.appendChild(d)}else a="gssb_h",e=d;d.className=a;b.appendChild(e)}
    function r(){var a=R.pop();if(a)return ca.appendChild(a),a.firstChild;a=U.insertRow(-1);a=a.insertCell(-1);a.className=G.wd;a.onmousedown=v;return a}
    function B(a,b){var c=L[a];c&&c.isSelectable()&&(c.L().parentNode.parentNode.className=b)}
    function v(a){a=a||cc(U).event;a.stopPropagation?a.stopPropagation():zb||Ab&&m.ld();return!1}
    function x(){if(E)if(G.Vd){var a=G.Vd;0<a&&(E.style.width=a+"px")}else a=m.Ba()-3,0<a&&(E.style.width=a+"px")}
    var w,u,m,z,D,O,G,Q={},H=[],R=[],P=[],L=[],V,W,ha,U,ca,N,E,ba,F,K={P:function(a,b){O=a;ha=a.Qa();b.addRule(".gssb_a","padding:0 7px");b.addRule(".gssb_a,.gssb_a td","white-space:nowrap;overflow:hidden;line-height:22px");b.addRule("#gssb_b","font-size:11px;color:#36c;text-decoration:none");b.addRule("#gssb_b:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".gssb_g","text-align:center;padding:8px 0 7px;position:relative");b.addRule(".gssb_h","font-size:15px;height:28px;margin:0.2em"+
      (fc?";-webkit-appearance:button":""));b.addRule(".gssb_i","background:#eee");b.addRule(".gss_ifl","visibility:hidden;padding-left:5px");b.addRule(".gssb_i .gss_ifl","visibility:visible");b.addRule("a.gssb_j","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule("a.gssb_j:hover","text-decoration:underline");b.addRule(".gssb_l","height:1px;background-color:#e5e5e5");b.addRule(".gssb_m","color:#000;background:#fff")},
      G:function(a){w=a.get(g.R,K);u=a.get(g.T,K);m=a.get(g.I,K);D=a.get(g.ha,K);z=ac(a.O(g.RENDERER,K))},
      setup:function(a){G=a;U=Ib();a=yb("tbody");U.appendChild(a);ca=U.getElementsByTagName("tbody")[0]},
      F:function(a){G=a;var b=a.md;b&&(V=O.zb(b));U.className=a.Gi||"gssb_m";F=a.Ei||"gssb_i"},
      A:function(){return g.Ka},
      D:function(){return 18},
      C:function(){return{ji:a,zc:e,Db:c,Ta:b,X:d,Eh:f,Sb:h,clear:l,isSelectable:k,Wa:n,L:q,Cb:p}}};
    return K});J.register(g.cb,346,function(){function a(a){a=c.getParameters(a);for(var d in h)d in a||(a[d]=h[d]);b(e+bb(a))}
    function b(a){var b=new Image,c=f;b.onerror=b.onload=b.onabort=function(){try{delete d[c]}catch(p){}};
      d[f]=b;b.src=a;f++}
    var c,e,d=[],f=0,h,l={G:function(a){c=a.get(g.fa,l)},
      F:function(a){e="//"+(a.Wh||"www."+a.fc)+"/gen_204?";h=a.Ci||{}},
      A:function(){return g.cb},
      D:function(){return 346},
      C:function(){return{od:a}}};
    return l});J.register(g.kb,21,function(){function a(a){l(a);var b=a.ga();if((!b||!b.Je())&&p)for(b=0;b<p.length;++b)p[b].update(a)}
    function b(a){var b=q[a.ke()]||null;if(b)++t;else if(p&&!a.Je())for(var c=0;c<p.length;++c)if(b=p[c].get(a)){l(b);++y;break}return b?Cc(a,b.W(),b.getParameters(),b.Le(),b.dd(),b.Oh()):null}
    function c(){return t}
    function e(){return y}
    function d(){y=t=0}
    function f(a){var b,c,d;for(d in q){var e=q[d];e=e.W();for(c=0;b=e[c++];)if(b.A()==a){delete q[d];break}}k()}
    function h(){q={};k()}
    function l(a){a&&a.dd()&&(q[a.ga().ke()]=a)}
    function k(){if(p)for(var a=0;a<p.length;++a)p[a].reset()}
    function n(a,b){return b.V()-a.V()}
    var q={},p,t,y,r={G:function(a){p=a.O(g.lb,r);p.sort(n)},
      F:function(){d()},
      A:function(){return g.kb},
      D:function(){return 21},
      C:function(){return{put:a,get:b,zg:c,Hc:e,Da:d,cg:f,Zf:h}}};
    return r});J.register(g.Za,190,function(){function a(){q&&k.dc(l)}
    function b(){q&&k.Mb(l)}
    function c(){q&&n.dc(l)}
    function e(){q&&n.Mb(l)}
    var d,f,h,l,k,n,q=!1,p={P:function(a,b){function c(a){return"box-shadow:"+a+"-moz-box-shadow:"+a+"-webkit-box-shadow:"+a}
      h=a;b.addRule(".gsfe_a","border:1px solid #b9b9b9;border-top-color:#a0a0a0;"+c("inset 0px 1px 2px rgba(0,0,0,0.1);"));b.addRule(".gsfe_b","border:1px solid #4d90fe;outline:none;"+c("inset 0px 1px 2px rgba(0,0,0,0.3);"))},
      G:function(a){d=a.get(g.T,p);f=a.get(g.I,p)},
      setup:function(f){var p=f.Cc;if(l=p?h.zb(p):null)d.Va(12,c),d.Va(13,e),d.S(l,"mouseover",a),d.S(l,"mouseout",b),k=Ic(f.tg||"gsfe_a"),n=Ic(f.sg||"gsfe_b")},
      F:function(){q=!0;l&&f.Sh()&&n.dc(l)},
      A:function(){return g.Za},
      D:function(){return 190},
      N:function(){q=!1;l&&(k.Mb(l),n.Mb(l))}};
    return p});function Ic(a){var b=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)");return{dc:function(c){c&&!b.test(c.className)&&(c.className+=" "+a)},
    Mb:function(a){a&&(a.className=a.className.replace(b," "))}}}
  ;J.register(g.RENDERER,33,function(){function a(a){q=a.ii;p=a.We;t=a.Ve;y=a.Ac?a.Bc:""}
    function b(a){return Jc(f,h,l,k,n,a,q,t)}
    function c(a,b){b.X(a.Jc(),a.M(),a.Aa(),p,y)}
    function e(a,b,c){c.search(b.M(),1)}
    function d(){return 35}
    var f,h,l,k,n,q,p,t,y,r={P:function(a,b){b.addRule("a.gspqs_a","padding:0 3px 0 8px");b.addRule(".gspqs_b","color:#666;line-height:22px")},
      G:function(a){l=a.get(g.U,r);k=a.get(g.I,r);h=a.get(g.ta,r);f=a.get(g.ia,r);n=a.get(g.R,r)},
      setup:a,F:a,A:function(){return g.RENDERER},
      D:function(){return 33},
      C:function(){return{gc:b,X:c,Ca:e,Tc:$a,Oc:d}}};
    return r});function Jc(a,b,c,e,d,f,h,l){function k(a){m=!0;b.Xe(x,n);return Tb(a)}
    function n(){m&&(c.dg(35),a.eg(),q.onmouseover=q.onmouseout=q.onclick=null,p.style.display="none",t.style.display="",d.ye()==w&&e.cf(),d.Kg()==w&&(d.Ze(),e.ie()),u=!1)}
    var q,p,t,y,r,B,v,x,w,u=!0,m=!1;(function(){q=Jb();q.className="gsq_a";var a=Ib();q.appendChild(a);p=a.insertRow(-1);var b=p.insertCell(-1);y=yb("span");y.style.color="#52188c";b.appendChild(y);if(0!=h){B=yb("a");B.href="#ps";B.className="gspqs_a gssb_j";var c=p.insertCell(-1);c.appendChild(B);(2==h?c:b).style.width="100%";t=a.insertRow(-1);v=t.insertCell(-1);v.className="gspqs_b";v.innerHTML=l;v.colSpan="2"}})();
    return{L:function(){return q},
      A:function(){return 35},
      isSelectable:function(){return u},
      X:function(a,b,c,d,l){m=!1;u=!0;x=b;w=c;p.style.display="";y.innerHTML=a;0!=h&&(t.style.display="none",B.innerHTML=d,B.onclick=k);l&&!r&&(r=Vb(p),r.onclick=function(a){e.ec();e.Nb(x);f.search(x,9);return Tb(a)});
        l?(r.innerHTML=l+" &raquo;",r.style.display=""):r&&(r.style.display="none")}}}
  ;J.register(g.ta,188,function(){function a(){var a={};d&&(a.tok=e);return a}
    function b(a,b){c.ui(a,b)}
    var c,e,d,f={G:function(a){c=a.get(g.jb,f)},
      F:function(a){e=a.Ub;var b="https:"==document.location.protocol;a=!!a.Qb[35];d=!!(c&&e&&b&&a)},
      A:function(){return g.ta},
      D:function(){return 188},
      C:function(){return{Vg:a,Xe:b}}};
    return f});J.register(g.jb,186,function(){function a(a,b){n[a]=b;var p=[];eb("delq",a,p);eb("client",l,p);eb("callback","google.sbox.d"+e,p);var q=d;eb("tok",f,p);h&&eb("authuser",h,p);k=yb("script");k.src=q+p.join("&");c.appendChild(k)}
    function b(a){k&&(c.removeChild(k),k=null);a=a[0];var b=n[a];b&&(delete n[a],b())}
    var c=rb(),e,d,f,h,l,k,n={},q={G:function(a){a.get(g.ta,q);e=a.Ra().getId()},
      setup:function(){window.google.sbox["d"+e]=b},
      F:function(a){d="https://"+(a.Ye||"clients1."+a.fc)+"/complete/deleteitems?";f=a.Ub;h=a.authuser;l=a.clientName},
      A:function(){return g.jb},
      D:function(){return 186},
      C:function(){return{ui:a}},
      N:function(){k&&(c.removeChild(k),k=null)}};
    return q});J.register(g.Ja,187,function(){function a(a){var b=c.Vg(),d;for(d in b)a.setParameter(d,b[d]);return 1}
    function b(){return 12}
    var c,e={G:function(a){c=a.get(g.ta,e)},
      A:function(){return g.Ja},
      D:function(){return 187},
      C:function(){return{Nc:a,V:b}}};
    return e});J.register(g.lb,98,function(){function a(){return 3}
    function b(a){if(d){var b=a.ga(),c=a.W();if(c.length){var e=b.ma();a:{b=Number.MAX_VALUE;for(var k,l=0;k=c[l++];){if(!f[k.A()]){b=-1;break a}k=k.M();b=Math.min(k.length,b)}}if(-1!=b){var n=c[0].M();if(ob(n,e,!0))for(l=e.length+1;l<=b;){e=null;for(k=0;n=c[k++];){n=n.M();if(l>n.length)return;n=n.substr(0,l);if(!e)e=n;else if(e!=n)return}h[e]=a;++l}}}}}
    function c(a){if(d){var b=h[a.ma()];if(b){var c=a.ue(),e=a.ma();b.ga().ma();for(var f=b.getParameters(),n=k||!f.we("k"),q=[],x,w,u=b.W(),m=0,z;z=u[m++];)w=z.M(),x=n?l.bold(c,w):hb(w),q.push(Ec(x,w,z.Aa(),z.A(),z.Qc(),z.getParameters()));delete h[e];return Cc(a,q,f,!0,b.dd(),!1)}}return null}
    function e(){h={}}
    var d=!0,f,h={},l,k,n={G:function(a){l=a.get(g.eb,n)},
      setup:function(){f=Ua([0])},
      F:function(a){k=a.Uc;d=a.ee},
      A:function(){return g.lb},
      D:function(){return 98},
      C:function(){return{V:a,update:b,get:c,reset:e}},
      N:function(){d=!1}};
    return n});J.register(g.RENDERER,31,function(){function a(){return Kc()}
    function b(a,b){var c=a.getParameters(),d=c.getString("a");c=c.getString("b");b.X(d,c,a.M())}
    function c(a,b,c){c.search(b.M(),1)}
    function e(){return 33}
    return{P:function(a,b){b.addRule(".gspr_a","padding-right:1px")},
      A:function(){return g.RENDERER},
      D:function(){return 31},
      C:function(){return{gc:a,X:b,Ca:c,Tc:$a,Oc:e}}}});function Kc(){var a=Jb();a.className="gspr_a";return{A:function(){return 33},
    L:function(){return a},
    isSelectable:function(){return!0},
    X:function(b,c){a.innerHTML=c}}}
  ;J.register(g.RENDERER,20,function(){function a(a){return Lc(d,a)}
    function b(a,b){b.X(a.Jc(),a.M(),f)}
    function c(a,b,c){c.search(b.M(),1)}
    function e(){return 0}
    var d,f,h={P:function(a,b){b.addRule(".gsq_a","padding:0")},
      G:function(a){d=a.get(g.I,h)},
      F:function(a){f=a.Ac?a.Bc:""},
      A:function(){return g.RENDERER},
      D:function(){return 20},
      C:function(){return{gc:a,X:b,Ca:c,Tc:$a,Oc:e}}};
    return h});function Lc(a,b){var c,e,d,f,h;(function(){c=Jb();c.className="gsq_a";var a=Ib();c.appendChild(a);e=a.insertRow(-1);a=e.insertCell(-1);a.style.width="100%";d=yb("span");a.appendChild(d)})();
    return{L:function(){return c},
      A:function(){return 0},
      isSelectable:function(){return!0},
      X:function(c,k,n){d.innerHTML=c;h=k;n&&!f&&(f=Vb(e),f.onclick=function(c){a.ec();a.Nb(h);b.search(h,9);return Tb(c)});
        n?(f.innerHTML=n+" &raquo;",f.style.display=""):f&&(f.style.display="none")}}}
  ;J.register(g.va,78,function(){function a(){return B}
    function b(){return 78}
    function c(){return 3}
    function e(){return m}
    function d(){return{tooltip:r}}
    function f(a){if(!D)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+u+"/"+w+"_tia.js",document.body.appendChild(a),D=!0,p.add(3);else if(v.onclick)v.onclick(a)}
    function h(){t.dismiss()}
    function l(){y.Ch()}
    function k(a){y.Ai(78,a)}
    function n(a){y.Hi(78,a)}
    function q(a){m.className="gsok_a gsst_e "+a}
    var p,t,y,r,B,v,x,w,u,m,z,D,O={P:function(a,b){z=a;a.pb()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))},
      G:function(a){p=a.get(g.ea,O);t=a.get(g.R,O);y=a.get(g.wa,O)},
      setup:function(a){B=!!a.Eb;x=a.Re;w=a.Kb;u=a.bi;r=a.Zh;(m=z.get("gs_ok"))?v=m.firstChild:(v=yb("img"),v.src=x+"/tia.png",m=yb("span","gsok_a gsst_e"),m.id=z.getId("gs_ok"),m.appendChild(v));v.ds=h;v.hd=l;v.sc=q;v.sd=k;v.td=n;v.setAttribute("tia_field_name",z.qe().name);v.setAttribute("tia_disable_swap",!0)},
      F:function(a){a.Wc&&(B=!!a.Eb);v.setAttribute("tia_property",a.Se)},
      A:function(){return g.va},
      D:function(){return 78},
      C:function(){return{isEnabled:a,Ae:b,V:c,L:e,xe:d,Ca:f}}};
    return O});J.register(g.wa,174,function(){function a(){return 174}
    function b(a){U!=a&&(Q.dir=U=a,f())}
    function c(){return Q}
    function e(a){(a=R[a])&&a.style&&(a.style.display="")}
    function d(a){(a=R[a])&&a.style&&(a.style.display="none")}
    function f(){P&&(R[P].className="gsst_a",u.hide(),P=null)}
    function h(a,b){P=a;var c=R[a];c.className="gsst_a gsst_g";var d=L.lastChild;d!=b&&(d==V?L.appendChild(b):L.replaceChild(b,d));u.Pb(174);u.show();c=c.clientWidth;V.style.width=c+"px";V.style.left="rtl"==U?"0":L.clientWidth-c+"px"}
    function l(a,b){P==a?f():h(a,b)}
    function k(a){a.horizontalAlignment="rtl"==U?"left":"right";a.Ke=!1}
    function n(){return L}
    function q(){return G.Ee||ha==U?ca:null}
    function p(){f()}
    function t(){return 174}
    function y(a,b){return b.V()-a.V()}
    function r(){W!=P&&f()}
    function B(){for(var a,b=0,c;c=D[b++];)if(c.isEnabled()){a=!0;var d=yb("a","gsst_a");w(d,c);d.appendChild(c.L());Q.appendChild(d)}Q.style.display=a?"":"none"}
    function v(){W=null}
    function x(){R={};for(var a=0,b;b=D[a++];)if(b.isEnabled()){var c=b.Ae(),e=b.L().parentNode;e.onclick=b.Ca;e.onmouseover=function(){W=c};
      e.onmouseout=v;R[c]=e;b.xe&&(b=b.xe(),b.bk&&d(c),(b=b.tooltip)&&!O.ud(e,b)&&(e.title=b))}}
    function w(a,b){a.href="javascript:void(0)";dc(a);a.onkeydown=function(a){a=a||window.event;var c=a.keyCode;if(13==c||32==c)b.Ca(a),z.ie(),Tb(a)}}
    var u,m,z,D,O,G,Q,H,R={},P,L,V,W,ha,U,ca,N,E={P:function(a,b){H=a;ha=a.Qa();a.pb()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e",$b(.55)),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",$b(.72)),b.addRule(".gsst_a:active .gsst_e",$b(1)),b.addRule(".gsst_f",
      "background:white;text-align:left"),b.addRule(".gsst_g","background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"margin:-1px -3px;padding:0 6px"),b.addRule(".gsst_h","background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))},
      G:function(a){u=a.get(g.da,E);m=a.get(g.T,E);z=a.get(g.I,E);D=a.O(g.va,E);O=a.za()},
      setup:function(a){N=a.Wc;D.sort(y);Q=H.get("gs_st");if(!Q){Q=Jb("gsst_b");Q.id=H.getId("gs_st");if(a=a.Zc)Q.style.lineHeight=a+"px";B()}x()},
      F:function(a){G=a;(a=a.md)&&(ca=H.zb(a));if(N){a=0;for(var b;b=D[a++];){var c=!!R[b.Ae()];if(b.isEnabled()!=c){for(;Q.hasChildNodes();)Q.removeChild(Q.lastChild);B();x();break}}}V=Jb("gsst_h");L=Jb("gsst_f");L.dir="ltr";L.appendChild(V);m.Va(13,r)},
      A:function(){return g.wa},
      D:a,C:function(){return{qd:b,L:c,sk:e,Xj:d,Ch:f,Ai:h,Hi:l}},
      Oa:function(){var b={Td:k,L:n,Cb:q,Ce:p,Wa:$a,Mc:t};return[{P:$a,G:$a,setup:$a,F:$a,A:function(){return g.fb},
        D:a,C:function(){return b},
        Oa:$a,N:$a}]}};
    return E});mc=function(){function a(a){return 0<=b.indexOf(a)}
    var b=window.navigator.userAgent,c={};window.opera?c[2]=!0:a("MSIE")||a("Trident")?c[0]=!0:a("WebKit")?(c[5]=!0,a("Chrome")?c[3]=!0:a("Android")?c[7]=!0:a("Safari")&&(c[4]=!0),a("iPad")&&(c[6]=!0)):a("Gecko")&&(c[1]=!0);return c};function Mc(){function a(a){return{api:a,install:a.a,F:a.b,N:a.c,Cj:a.d,jj:a.e,ca:a.f,ka:a.g,na:a.h,Ua:a.i,te:a.j,Sg:a.k,dk:a.l,Mj:a.m,Tf:a.n,rb:a.o,wj:a.p,jf:a.q,Bj:a.r,sj:a.s,Hb:a.t,df:a.u,focus:a.v,blur:a.w,Me:a.x,ja:a.y,jd:a.z,fk:a.aa,Da:a.ab,search:a.ad,ik:a.ae,rk:a.af,tb:a.ag,Sa:a.ah,Ck:a.ai,Sd:a.al,isActive:a.am,gi:a.an,xa:a.ao,Gg:a.ap,Ej:a.aq,Kc:a.ar,getId:a.as,tj:a.at,rd:a.au,pk:a.av,ed:a.aw,hf:a.ax,Ob:a.ay,Rh:a.az,Pc:a.ba,lk:a.bb,Kj:a.bc,od:a.bd,Fj:a.be,hg:a.bf}}
    return{la:function(b,c,e,d){try{var f=window.google.sbox(b,c,e,d);return a(f)}catch(h){return null}},
      translate:function(b){return a(b.api||b)}}}
  ;var Nc=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(Aa(a))return Aa(b)&&1==b.length?a.indexOf(b,0):-1;
    for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oc=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,d=Aa(a)?a.split(""):a,f=0;f<e;f++)f in d&&b.call(c,d[f],f,a)};
  function Pc(a){var b=a.length;if(0<b){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]}
  ;var Qc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Rc(a){var b=Sc,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
  ;window.google||(window.google={});window.google.sbox=function(a,b,c,e){function d(){m.N()}
    function f(a){H.jd(a||"")}
    function h(){return K}
    function l(){return F}
    function k(){return H.ka()}
    function n(){return N.Sa()}
    function q(){G.K(8)}
    function p(a){return L.getParameters(a)}
    function t(){return A||!!D&&D.xa()}
    function y(){return P.Og()}
    function r(a){a=a.lf||rb();a=cc(a);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
    function B(){if(a)for(var b=a;b=b.parentNode;){var c=b.dir;if(c)return c}return"ltr"}
    function v(a){a=vb(a);a.Qb[35]||(a.Ub="");var b=a.Kb;b?a.Kb=b.toLowerCase():a.Eb=!1;a.yb&&!a.Ac&&(a.yb=!1);nc||(a.Oe=!1);return a}
    function x(a,b){var c=b.exec(a);return c&&c[1]?parseInt(c[1],10)||0:0}
    function w(){var b=cc(a),c=Xb(b);G.Ib(b,"resize",function(){var a=Xb(b);if(a.qf!=c.qf||a.Ge!=c.Ge)c=a,q()})}
    function u(a){var b=a.xb,c=b[g.Gd],d=b[g.Zb],e=b[g.Ld],f=b[g.Od],h=b[g.La];e=d||f||e;b[g.Xb]||h||c||e?(a.xb[g.Xb]=!0,a.xb[g.Id]=!0,e?(a=Wa(a.Fb),!d||ec&&(ic||a)||Ab&&a?(K=3,b[g.Zb]=!1,b[g.Kd]=!1):K=2):K=1):K=0}
    var m,z,D,O,G,Q,H,R,P,L,V,W,ha,U,ca,N,E,ba,F,K,oa=!1,A,T={a:function(c){if(!oa){c=v(c);F=null==e?r(c):e;var d=bc(a),f=B(),h=!!d.getElementById("gs_id"+F),k=["gssb_c","gssb_k"];c.xd&&k.push(c.xd);k=Gc(c.lf,c.Ah,c.ng,F,k);u(c);A=c.xa;m=Ac(ia,c.Xd||{},{pb:function(){return h},
      get:function(a){return d.getElementById(a+F)},
      zb:function(a){return d.getElementById(a)},
      oe:function(){return b},
      Qa:function(){return f},
      getId:function(a){return a+F},
      qe:function(){return a}},k,T,c);
      z=m.get(g.cb,T);D=m.get(g.qa,T);O=m.get(g.da,T);G=m.get(g.T,T);Q=m.get(g.U,T);H=m.get(g.I,T);R=m.get(g.sa,T);P=m.get(g.ea,T);L=m.get(g.fa,T);V=m.get(g.ta,T);W=m.get(g.Gf,T);ha=m.get(g.ua,T);U=m.get(g.Kf,T);ca=m.get(g.Y,T);N=m.get(g.R,T);E=m.get(g.La,T);ba=m.get(g.ha,T);w();oa=!0}},
      b:function(a){d();a=v(a);u(a);A=a.xa;m.F(a)},
      c:d,d:function(){return b},
      e:function(a,b){return Pb(a,b)},
      f:function(){return H.ca()},
      g:k,h:function(){return N.na()},
      i:function(){return N.Ua()},
      j:p,k:function(a,b){a||(a=L.getParameters(b));return bb(a)},
      l:function(){return N.isVisible()},
      m:function(){return N.Qg()},
      n:function(a,b){G.Ib(a,"click",function(a){ba.search(k(),b);return Sb(a)})},
      o:function(){Q.rb()},
      p:function(){N.dismiss()},
      q:function(a){H.jf(a||"")},
      r:function(){return O.getHeight()},
      s:function(){H.clear()},
      t:function(a){return Q.Hb(a)},
      u:function(){H.df()},
      v:function(){R.focus()},
      w:function(){R.blur()},
      x:function(){return Q.Me()},
      y:function(){var a=ca.ja();return a?Va(a.pe()):null},
      z:f,aa:function(a){a=ha.kd(a);return Va(a.pe())},
      ab:function(){L.reset()},
      ad:function(a,b){ba.search(a,b)},
      ae:function(){E&&E.refresh()},
      af:function(a){N.gf(a)},
      ag:function(){N.tb()},
      ah:n,ai:q,al:function(){H.Sd()},
      am:function(){return m&&m.isActive()},
      an:function(a){D&&D.gi(a)},
      ao:t,ap:function(){return t()&&D?D.Gg():""},
      aq:function(a,b){return Qb(a,b)},
      ar:h,as:l,at:function(){E&&E.clear()},
      au:function(a,b){f(a);N.isEnabled()&&N.rd(a,b,!1)},
      av:function(a){G.K(15,{query:a})},
      aw:function(){return R.ed()},
      ax:function(a){Q.hf(a)},
      ay:function(a){O.Ob(a)},
      az:function(a){return!!W&&W.Rh(a)},
      ba:function(){var a,b=ca.ja();if(b){var c=b.Gc();c&&((a=c.Pc())||(a=b.getParameters().getString("o")))}return a||""},
      bb:function(a,b){return V?(V.Xe(a,b),!0):!1},
      bc:function(a,b){switch(a){case "oq":case "gs_l":return p(b)[a]||null;case "gs_ssp":var c;a:{if((c=n())&&46==c.A()&&(c=c.getParameters().getString("g")))break a;c=null}return c;default:return null}},
      bd:function(a){z&&z.od(a)},
      be:y,bf:function(a){return 6==y()&&!!U&&U.hg(a)},
      getId:l,Kc:h};var ia=Hc(c);(function(a){var b=ia.Dc(),c=x(a,/Version\/(\d+)/);c||(c=x(a,/(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/));c||(c=x(a,/Trident[^)]*rv:(\d+)/));a=c;xb=(Ab=b[0])&&8>=a;wb=Ab&&7>=a;ec=b[1];zb=b[2];fc=b[5];gc=b[4];nc=b[3];hc=b[7]})(window.navigator.userAgent);
    ic=/Mac/.test(navigator&&(navigator.platform||navigator.appVersion)||"");return T};var Tc;(function(){function a(){return!0}
    function b(a){var b=0<=a.indexOf("?")?"&":"?",c=h.te();return a+b+h.Sg(c)}
    var c=/MSIE\s+(\S+)/,e=/Version\/(\S+)/,d=/\/(movie|show)s?($|[?#/])/i,f=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i,h,l,k,n,q,p,t,y={a:function(){return k},
      b:function(b,c){a(h.te(c))&&l.submit()},
      d:function(a){p(b(a))},
      e:b,r:function(a){t?(a.addRule(".gsfs","font-size:1.6rem;color:#222"),a.addRule(".gssb_a","padding:4px 24px 4px 65px"),a.addRule(".gssb_m","padding: 16px 0"),a.addRule(".gssb_e","border-top: 0")):(a.addRule(".gsfi","font-size:16px"),a.addRule(".gsfs","font-size:16px"),a.addRule("a.gssb_j","font-size:12px;color:#03c"),a.addRule(".gssb_a,.gssb_a td","line-height:20px"),a.addRule(".gssb_a","padding:0 6px"),a.addRule(".gssb_c","z-index:2000000007"),a.addRule(".gssb_i td","background:#eee"),a.addRule(".gssb_k",
        "z-index:2000000006"),a.addRule(".gssb_l","margin:2px 0"),a.addRule(".gsib_a","padding:0 6px"),a.addRule(".gsib_a .gsfi","position:relative !important"),a.addRule(".gsok_a","padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule(".gsfe_b",["border:1px solid #1c62b9;",a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);"),"outline:none;"].join("")))}};
    (function(){function a(a){return(a=b.match(a))?parseInt(a[1],10):NaN}
      var b=window.navigator.userAgent;k=mc();k[2]?q=a(e):k[0]&&(q=a(c));n=0<=b.indexOf("Windows")})();
    Tc=function(b,c,e,x,w,u,m){l=b;p=u;m&&(a=m);t=x.IS_POLYMER;u=Mc();m=xc().la();var r="youtube";m.clientName=r;m.requestIdentifier=r;m.Yd="yt";m.Fb=x.REQUEST_LANGUAGE;m.kf=x.REQUEST_DOMAIN;m.rh=!1;m.Rb=0;m.Pe=!1;m.yb=!1;m.Qe=!1;m.Uc=!0;m.cd="gsfi";m.wd="gsfs";m.Uh=!0;r=window.location.href;r=d.test(r)||f.test(r);m.Ie=r;m.Eb=x.HAS_ON_SCREEN_KEYBOARD;m.Kb=x.REQUEST_LANGUAGE;m.Re="//www.gstatic.com/inputtools/images";m.Se="youtube";m.de=!0;m.Na="fixed";x.PQ&&(m.Te=x.PQ);m.Ub=x.PSUGGEST_TOKEN;m.authuser=
      x.SESSION_INDEX;m.Ve=w.SUGGESTION_DISMISSED_LABEL;m.We=w.SUGGESTION_DISMISS_LABEL;m.Qb=Ua([0,33,35]);m.Cc="masthead-search-terms";m.Zc=30;m.Xd={};k[2]||(m.De=!0);w=k[2];r=k[4];-1!=window.location.href.indexOf("/watch?")&&(w||n&&r)&&(r="youtube-reduced",m.clientName=r,m.requestIdentifier=r,m.qg=4);m.md=m.Cc;w=-3;var v=r=0;n&&k[0]&&8==q&&(w=-5);x.IS_FUSION&&(r=-6,w=8);t&&(w=10,r=-67,v=79);m.ub=[w,r,v];w=[0];k[0]&&8==q&&(w[0]=-1);m.Ud=w;Wa(x.REQUEST_LANGUAGE)&&(m.fe=!0);if(x=x.SUGG_EXP_ID)m.vd=x;h?h.F(m):
      (h=u.la(c,b,y),h.install(m),e&&(h.Tf(e,12),e.onclick=null))};
    return y})();function Uc(){this.B=("undefined"==typeof document?null:document)||{cookie:""}}
  fa=Uc.prototype;fa.isEnabled=function(){return navigator.cookieEnabled};
  fa.set=function(a,b,c,e,d,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0!==c||(c=-1);d=d?";domain="+d:"";e=e?";path="+e:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ra()+1E3*c)).toUTCString();this.B.cookie=a+"="+b+d+e+c+f};
  fa.get=function(a,b){for(var c=a+"=",e=(this.B.cookie||"").split(";"),d=0,f;d<e.length;d++){f=Qc(e[d]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
  fa.remove=function(a,b,c){var e=void 0!==this.get(a);this.set(a,"",0,b,c);return e};
  fa.isEmpty=function(){return!this.B.cookie};
  fa.clear=function(){for(var a=(this.B.cookie||"").split(";"),b=[],c=[],e,d,f=0;f<a.length;f++)d=Qc(a[f]),e=d.indexOf("="),-1==e?(b.push(""),c.push(d)):(b.push(d.substring(0,e)),c.push(d.substring(e+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
  var Vc=new Uc;Vc.H=3950;function Wc(a,b){this.pa=a;this.ra=b;this.H=0;this.B=null}
  Wc.prototype.get=function(){if(0<this.H){this.H--;var a=this.B;this.B=a.next;a.next=null}else a=this.pa();return a};
  Wc.prototype.put=function(a){this.ra(a);100>this.H&&(this.H++,a.next=this.B,this.B=a)};var Xc;a:{var Yc=za.navigator;if(Yc){var Zc=Yc.userAgent;if(Zc){Xc=Zc;break a}}Xc=""}function S(a){return-1!=Xc.indexOf(a)}
  ;function $c(){return(S("Chrome")||S("CriOS"))&&!S("Edge")}
  ;function ad(a){za.setTimeout(function(){throw a;},0)}
  var bd;
  function cd(){var a=za.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!S("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),e="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=Qa(function(a){if(("*"==e||a.origin==e)&&a.data==
    c)this.port1.onmessage()},this);
    b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,e)}}});
    if("undefined"!==typeof a&&!S("Trident")&&!S("MSIE")){var b=new a,c={},e=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Wd;c.Wd=null;a()}};
      return function(a){e.next={Wd:a};e=e.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
      b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
      document.documentElement.appendChild(b)}:function(a){za.setTimeout(a,0)}}
  ;function dd(){this.H=this.B=null}
  var fd=new Wc(function(){return new ed},function(a){a.reset()});
  dd.prototype.add=function(a,b){var c=fd.get();c.set(a,b);this.H?this.H.next=c:this.B=c;this.H=c};
  dd.prototype.remove=function(){var a=null;this.B&&(a=this.B,this.B=this.B.next,this.B||(this.H=null),a.next=null);return a};
  function ed(){this.next=this.scope=this.B=null}
  ed.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
  ed.prototype.reset=function(){this.next=this.scope=this.B=null};function gd(a){id||jd();kd||(id(),kd=!0);ld.add(a,void 0)}
  var id;function jd(){if(-1!=String(za.Promise).indexOf("[native code]")){var a=za.Promise.resolve(void 0);id=function(){a.then(md)}}else id=function(){var a=md;
    "function"!=Ia(za.setImmediate)||za.Window&&za.Window.prototype&&!S("Edge")&&za.Window.prototype.setImmediate==za.setImmediate?(bd||(bd=cd()),bd(a)):za.setImmediate(a)}}
  var kd=!1,ld=new dd;function md(){for(var a;a=ld.remove();){try{a.B.call(a.scope)}catch(b){ad(b)}fd.put(a)}kd=!1}
  ;function nd(){this.pa=this.pa;this.ra=this.ra}
  nd.prototype.pa=!1;nd.prototype.dispose=function(){this.pa||(this.pa=!0,this.hc())};
  nd.prototype.hc=function(){if(this.ra)for(;this.ra.length;)this.ra.shift()()};function od(){return S("iPhone")&&!S("iPod")&&!S("iPad")}
  ;var pd=S("Opera"),qd=S("Trident")||S("MSIE"),rd=S("Edge"),sd=S("Gecko")&&!(-1!=Xc.toLowerCase().indexOf("webkit")&&!S("Edge"))&&!(S("Trident")||S("MSIE"))&&!S("Edge"),td=-1!=Xc.toLowerCase().indexOf("webkit")&&!S("Edge"),ud=S("Macintosh"),vd=S("Windows"),wd=S("Android"),xd=od(),yd=S("iPad"),zd=S("iPod"),Ad;
  a:{var Bd="",Cd=function(){var a=Xc;if(sd)return/rv:([^\);]+)(\)|;)/.exec(a);if(rd)return/Edge\/([\d\.]+)/.exec(a);if(qd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(td)return/WebKit\/(\S+)/.exec(a);if(pd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
    Cd&&(Bd=Cd?Cd[1]:"");if(qd){var Dd,Ed=za.document;Dd=Ed?Ed.documentMode:void 0;if(null!=Dd&&Dd>parseFloat(Bd)){Ad=String(Dd);break a}}Ad=Bd}var Fd=Ad;var Gd=S("Firefox"),Hd=od()||S("iPod"),Id=S("iPad"),Jd=S("Android")&&!($c()||S("Firefox")||S("Opera")||S("Silk")),Kd=$c(),Ld=S("Safari")&&!($c()||S("Coast")||S("Opera")||S("Edge")||S("Silk")||S("Android"))&&!(od()||S("iPad")||S("iPod"));function Md(){this.Sc="";this.B=Nd}
  Md.prototype.Ih=!0;function Od(a){return a instanceof Md&&a.constructor===Md&&a.B===Nd?a.Sc:"type_error:SafeUrl"}
  var Pd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Qd(a){if(a instanceof Md)return a;a=a.Ih?a.Sc:String(a);Pd.test(a)||(a="about:invalid#zClosurez");return Rd(a)}
  var Nd={};function Rd(a){var b=new Md;b.Sc=a;return b}
  Rd("about:blank");function Sd(a,b,c){for(var e=0;a&&(null==c||e<=c);){if(b(a))return a;a=a.parentNode;e++}return null}
  ;var Td="StopIteration"in za?za.StopIteration:{message:"StopIteration",stack:""};function Ud(){}
  Ud.prototype.next=function(){throw Td;};
  Ud.prototype.ob=function(){return this};
  function Vd(a){if(a instanceof Ud)return a;if("function"==typeof a.ob)return a.ob(!1);if(Ja(a)){var b=0,c=new Ud;c.next=function(){for(;;){if(b>=a.length)throw Td;if(b in a)return a[b++];b++}};
    return c}throw Error("Not implemented");}
  function Wd(a,b){if(Ja(a))try{Oc(a,b,void 0)}catch(c){if(c!==Td)throw c;}else{a=Vd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Td)throw c;}}}
  function Xd(a){if(Ja(a))return Pc(a);a=Vd(a);var b=[];Wd(a,function(a){b.push(a)});
    return b}
  ;function Yd(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
  function Zd(a){var b=a.type;switch(Aa(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,e=0;c=a.options[e];e++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
  ;(function(){if(vd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Xc))?a[1]:"0"}return ud?(a=/10[_.][0-9_.]+/,(a=a.exec(Xc))?a[0].replace(/_/g,"."):"10"):wd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Xc))?a[1]:""):xd||yd||zd?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Xc))?a[1].replace(/_/g,"."):""):""})();function $d(a){return(a=a.exec(Xc))?a[1]:""}
  (function(){if(Gd)return $d(/Firefox\/([0-9.]+)/);if(qd||rd||pd)return Fd;if(Kd)return od()||S("iPad")||S("iPod")?$d(/CriOS\/([0-9.]+)/):$d(/Chrome\/([0-9.]+)/);if(Ld&&!(od()||S("iPad")||S("iPod")))return $d(/Version\/([0-9.]+)/);if(Hd||Id){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Xc);if(a)return a[1]+"."+a[2]}else if(Jd)return(a=$d(/Android\s+([0-9.]+)/))?a:$d(/Version\/([0-9.]+)/);return""})();function ae(a){nd.call(this);this.Fd=1;this.gb=[];this.hb=0;this.B=[];this.H={};this.zf=!!a}
  Ta(ae,nd);fa=ae.prototype;fa.subscribe=function(a,b,c){var e=this.H[a];e||(e=this.H[a]=[]);var d=this.Fd;this.B[d]=a;this.B[d+1]=b;this.B[d+2]=c;this.Fd=d+3;e.push(d);return d};
  fa.Tb=function(a){var b=this.B[a];if(b){var c=this.H[b];if(0!=this.hb)this.gb.push(a),this.B[a+1]=Ha;else{if(c){var e=Nc(c,a);0<=e&&Array.prototype.splice.call(c,e,1)}delete this.B[a];delete this.B[a+1];delete this.B[a+2]}}return!!b};
  fa.Lb=function(a,b){var c=this.H[a];if(c){for(var e=Array(arguments.length-1),d=1,f=arguments.length;d<f;d++)e[d-1]=arguments[d];if(this.zf)for(d=0;d<c.length;d++){var h=c[d];be(this.B[h+1],this.B[h+2],e)}else{this.hb++;try{for(d=0,f=c.length;d<f;d++)h=c[d],this.B[h+1].apply(this.B[h+2],e)}finally{if(this.hb--,0<this.gb.length&&0==this.hb)for(;c=this.gb.pop();)this.Tb(c)}}return 0!=d}return!1};
  function be(a,b,c){gd(function(){a.apply(b,c)})}
  fa.clear=function(a){if(a){var b=this.H[a];b&&(Oc(b,this.Tb,this),delete this.H[a])}else this.B.length=0,this.H={}};
  fa.hc=function(){ae.mf.hc.call(this);this.clear();this.gb.length=0};function ce(){}
  ;function de(){}
  Ta(de,ce);de.prototype.clear=function(){var a=Xd(this.ob(!0)),b=this;Oc(a,function(a){b.remove(a)})};function ee(a){this.B=a}
  Ta(ee,de);fa=ee.prototype;fa.isAvailable=function(){if(!this.B)return!1;try{return this.B.setItem("__sak","1"),this.B.removeItem("__sak"),!0}catch(a){return!1}};
  fa.set=function(a,b){try{this.B.setItem(a,b)}catch(c){if(0==this.B.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
  fa.get=function(a){a=this.B.getItem(a);if(!Aa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
  fa.remove=function(a){this.B.removeItem(a)};
  fa.ob=function(a){var b=0,c=this.B,e=new Ud;e.next=function(){if(b>=c.length)throw Td;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!Aa(d))throw"Storage mechanism: Invalid value was encountered";return d};
    return e};
  fa.clear=function(){this.B.clear()};
  fa.key=function(a){return this.B.key(a)};function fe(){var a=null;try{a=window.localStorage||null}catch(b){}this.B=a}
  Ta(fe,ee);function ge(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.B=a}
  Ta(ge,ee);var he=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ie(a){return a?decodeURI(a):a}
  function je(a,b,c){if("array"==Ia(b))for(var e=0;e<b.length;e++)je(a,String(b[e]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
  function ke(a){var b=[],c;for(c in a)je(c,a[c],b);return b.join("&")}
  ;var le=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};Sa("yt.config_",le);function me(a){var b=arguments;if(1<b.length)le[b[0]]=b[1];else{b=b[0];for(var c in b)le[c]=b[c]}}
  function ne(a,b){return a in le?le[a]:b}
  ;Ra();var oe={};function pe(){return oe.clicktracking||(oe.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
  ;var qe=0;Sa("ytDomDomGetNextId",Ga("ytDomDomGetNextId")||function(){return++qe});function re(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(e){var b=e,c=Ga("yt.logging.errors.log");c?c(b,void 0,void 0,void 0,void 0):(c=ne("ERRORS",[]),c.push([b,void 0,void 0,void 0,void 0]),me("ERRORS",c))}}:a}
  ;var se={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
  function te(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in se||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
    b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
  te.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
  te.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
  te.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Sc=Ga("ytEventsEventsListeners")||{};Sa("ytEventsEventsListeners",Sc);var ue=Ga("ytEventsEventsCounter")||{count:0};Sa("ytEventsEventsCounter",ue);function ve(a,b,c,e){e=void 0===e?!1:e;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Rc(function(d){return!!d.length&&d[0]==a&&d[1]==b&&d[2]==c&&d[4]==!!e})}
  function we(a,b){var c=document,e=xe;b=void 0===b?!1:b;if(c&&(c.addEventListener||c.attachEvent)){var d=ve(c,a,e,b);if(!d){d=++ue.count+"";var f=!("mouseenter"!=a&&"mouseleave"!=a||!c.addEventListener||"onmouseenter"in document);var h=f?function(b){b=new te(b);if(!Sd(b.relatedTarget,function(a){return a==c}))return b.currentTarget=c,b.type=a,e.call(c,b)}:function(a){a=new te(a);
    a.currentTarget=c;return e.call(c,a)};
    h=re(h);c.addEventListener?("mouseenter"==a&&f?a="mouseover":"mouseleave"==a&&f?a="mouseout":"mousewheel"==a&&"MozBoxSizing"in document.documentElement.style&&(a="MozMousePixelScroll"),c.addEventListener(a,h,b)):c.attachEvent("on"+a,h);Sc[d]=[c,a,e,h,b]}}}
  ;var ye=Ga("ytPubsubPubsubInstance")||new ae;ae.prototype.subscribe=ae.prototype.subscribe;ae.prototype.unsubscribeByKey=ae.prototype.Tb;ae.prototype.publish=ae.prototype.Lb;ae.prototype.clear=ae.prototype.clear;Sa("ytPubsubPubsubInstance",ye);Sa("ytPubsubPubsubSubscribedKeys",Ga("ytPubsubPubsubSubscribedKeys")||{});Sa("ytPubsubPubsubTopicToKeys",Ga("ytPubsubPubsubTopicToKeys")||{});Sa("ytPubsubPubsubIsSynchronous",Ga("ytPubsubPubsubIsSynchronous")||{});var ze=Object.create(null);ze.log_event="GENERIC_EVENT_LOGGING";ze.log_interaction="INTERACTION_LOGGING";Sa("ytLoggingTransportLogPayloadsQueue_",Ga("ytLoggingTransportLogPayloadsQueue_")||{});Sa("ytLoggingTransportTokensToCttTargetIds_",Ga("ytLoggingTransportTokensToCttTargetIds_")||{});Sa("ytLoggingTransportDispatchedStats_",Ga("ytLoggingTransportDispatchedStats_")||{});Sa("ytytLoggingTransportCapturedTime_",Ga("ytLoggingTransportCapturedTime_")||{});function Ae(){}
  Ae.prototype.B=function(a,b){var c=b;isNaN(c)&&(c=void 0);var e=Ga("yt.scheduler.instance.addJob");e?c=e(a,1,c):void 0===c?(a(),c=NaN):(e=a,"function"==Ia(e)&&(e=re(e)),c=window.setTimeout(e,c||0));return c};function Be(){}
  Be.prototype=ja(Ae.prototype);Be.prototype.constructor=Be;if(wa)wa(Be,Ae);else for(var Ce in Ae)if("prototype"!=Ce)if(Object.defineProperties){var De=Object.getOwnPropertyDescriptor(Ae,Ce);De&&Object.defineProperty(Be,Ce,De)}else Be[Ce]=Ae[Ce];Be.mf=Ae.prototype;Be.prototype.start=function(){var a=Ga("yt.scheduler.instance.start");a&&a()};
  Be.B=void 0;Be.la=function(){return Be.B?Be.B:Be.B=new Be};
  var Ee=Be.la();function Fe(){}
  ;var Ge=Ra().toString();var He;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Ie=Array(16),Je=new Uint8Array(16);window.crypto.getRandomValues(Je);for(var Ke=0;Ke<Ie.length;Ke++)Ie[Ke]=Je[Ke];He=Ie;break a}catch(a){}for(var Le=Array(16),Me=0;16>Me;Me++){for(var Ne=Ra(),Oe=0;Oe<Ne%23;Oe++)Le[Me]=Math.random();Le[Me]=Math.floor(256*Math.random())}if(Ge)for(var Pe=1,Qe=0;Qe<Ge.length;Qe++)Le[Pe%16]=Le[Pe%16]^Le[(Pe-1)%16]/4^Ge.charCodeAt(Qe),Pe++;He=Le}
  for(var Re=He,Se=[],Te=0;Te<Re.length;Te++)Se.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(Re[Te]&63));(new fe).isAvailable();(new ge).isAvailable();Sa("yt.msgs_",window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{});Sa("ytglobal.prefsUserPrefsPrefs_",Ga("ytglobal.prefsUserPrefsPrefs_")||{});var Ue=Ga("ytPubsub2Pubsub2Instance")||new ae;ae.prototype.subscribe=ae.prototype.subscribe;ae.prototype.unsubscribeByKey=ae.prototype.Tb;ae.prototype.publish=ae.prototype.Lb;ae.prototype.clear=ae.prototype.clear;Sa("ytPubsub2Pubsub2Instance",Ue);Sa("ytPubsub2Pubsub2SubscribedKeys",Ga("ytPubsub2Pubsub2SubscribedKeys")||{});Sa("ytPubsub2Pubsub2TopicToKeys",Ga("ytPubsub2Pubsub2TopicToKeys")||{});Sa("ytPubsub2Pubsub2IsAsync",Ga("ytPubsub2Pubsub2IsAsync")||{});Sa("ytPubsub2Pubsub2SkipSubKey",null);function Ve(a,b,c){for(var e=0,d=0;d<a.length;++d)e=31*e+a.charCodeAt(d)>>>0;a="ST-"+e.toString(36);b=b?ke(b):"";Vc.set(""+a,b,c||5,"/","youtube.com",!1)}
  function We(a){if(a){var b=Ga("yt.logging.screen.storeParentElement");(a.itct||a.ved)&&b&&b(new Fe)}}
  ;var Xe={},Ye="ontouchstart"in document;function Ze(a,b,c){switch(a){case "mouseover":case "mouseout":var e=3;break;case "mouseenter":case "mouseleave":e=9}return Sd(c,function(a){a.classList?a=a.classList.contains(b):(a.classList?a=a.classList:(a=a.className,a=Aa(a)&&a.match(/\S+/g)||[]),a=0<=Nc(a,b));return a},e)}
  function xe(a){var b="mouseover"==a.type&&"mouseenter"in Xe||"mouseout"==a.type&&"mouseleave"in Xe,c=a.type in Xe||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Xe[b];for(var e in c.H){var d=Ze(b,e,a.target);d&&!Sd(a.relatedTarget,function(a){return a==d})&&c.Lb(e,d,b,a)}}if(b=Xe[a.type])for(e in b.H)(d=Ze(a.type,e,a.target))&&b.Lb(e,d,a.type,a)}}
  we("blur",!0);we("change",!0);we("click");we("focus",!0);we("mouseover");we("mouseout");we("mousedown");we("keydown");we("keyup");we("keypress");we("cut");we("paste");Ye&&(we("touchstart"),we("touchend"),we("touchcancel"));function $e(a,b,c,e,d){if(a&&d){var f=ne("SBOX_SETTINGS"),h=ne("SBOX_LABELS");f&&h&&(a=Ga("searchbox.yt.install")(a,b,c,f,h,af,e))&&d(a,100)}}
  function bf(a,b){var c=ne("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[pe()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";c=a;var e=ne("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=ie(window.location.href.match(he)[3]||null);d&&e.push(d);d=ie(c.match(he)[3]||null);if(0<=Nc(e,d)||!d&&0==c.lastIndexOf("/",0))if(ne("EXPERIMENT_FLAGS",{}).autoescape_tempdata_url&&(e=document.createElement("a"),c=c instanceof Md?c:Qd(c),
      e.href=Od(c),c=e.href),c){d=c.match(he);c=d[5];e=d[6];d=d[7];var f="";c&&(f+=c);e&&(f+="?"+e);d&&(f+="#"+d);c=f;e=c.indexOf("#");if(c=0>e?c:c.substr(0,e)){if(b.itct||b.ved)(e=b.csn)||(e=(e=ne("client-screen-nonce")||ne("EVENT_ID"))?e:null),b.csn=e;if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(Ve(c,b,h),We(b))}else Ve(c,b),We(b)}}}}
  function af(a,b){bf(a,b?{feature:b}:{});var c=Ga("yt.window.navigate");try{c(a)}catch(k){var e=void 0===e?{}:e;var d=void 0===d?"":d;var f=void 0===f?window:f;c=f.location;e=ke(e);if(e){f=a.indexOf("#");0>f&&(f=a.length);var h=a.indexOf("?");if(0>h||h>f){h=f;var l=""}else l=a.substring(h+1,f);f=[a.substr(0,h),l,a.substr(f)];h=f[1];f[1]=e?h?h+"&"+e:e:h;e=f[0]+(f[1]?"?"+f[1]:"")+f[2]}else e=a;d=e+d;d=d instanceof Md?d:Qd(d);c.href=Od(d)}}
  function cf(a){for(var b=document.getElementById("masthead-search"),c=[],e=b.elements,d,f=0;d=e[f];f++)if(d.form==b&&!d.disabled&&"FIELDSET"!=d.tagName){var h=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=Zd(d);if(null!=d)for(var l,k=0;l=d[k];k++)Yd(c,h,l);break;default:l=Zd(d),null!=l&&Yd(c,h,l)}}e=b.getElementsByTagName("INPUT");for(f=0;d=e[f];f++)d.form==b&&"image"==d.type.toLowerCase()&&(h=d.name,Yd(c,h,d.value),Yd(c,h+
    ".x","0"),Yd(c,h+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;bf(b,a);a=!!ne("SPF_SEARCH_BOX");if(!Ga("ytspf.enabled")||!a)return!0;a=Ga("yt.window.navigate");try{a(b)}catch(n){return!0}return!1}
  ;Sa("searchbox.yt.install",Tc);Sa("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");$e(a,a.search_query,document.getElementById("search-btn"),cf,window.setTimeout)});
  Sa("yt.www.masthead.searchbox.initPolymer",function(a,b,c,e){$e(a,b,c,e,Ee.B)});}).call(this);
