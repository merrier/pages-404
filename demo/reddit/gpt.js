(function () {
  var window = this, document = this.document;
  var h, aa = "function" == typeof Object.create ? Object.create : function (a) {
    var b = function () {
    };
    b.prototype = a;
    return new b
  }, ba;
  if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf; else {
    var ca;
    a:{
      var da = {a: !0}, ea = {};
      try {
        ea.__proto__ = da;
        ca = ea.a;
        break a
      } catch (a) {
      }
      ca = !1
    }
    ba = ca ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b)throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var fa = ba, ha = function (a, b) {
      a.prototype = aa(b.prototype);
      a.prototype.constructor = a;
      if (fa) fa(a, b); else for (var c in b)if ("prototype" != c)if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d)
      } else a[c] = b[c];
      a.$b = b.prototype
    }, ia = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    ja = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
    ka = function () {
      ka = function () {
      };
      ja.Symbol || (ja.Symbol = la)
    }, la = function () {
      var a = 0;
      return function (b) {
        return "jscomp_symbol_" + (b || "") + a++
      }
    }(), oa = function () {
      ka();
      var a = ja.Symbol.iterator;
      a || (a = ja.Symbol.iterator = ja.Symbol("iterator"));
      "function" != typeof Array.prototype[a] && ia(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return ma(this)
        }
      });
      oa = function () {
      }
    }, ma = function (a) {
      var b = 0;
      return pa(function () {
        return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
      })
    }, pa = function (a) {
      oa();
      a = {next: a};
      a[ja.Symbol.iterator] = function () {
        return this
      };
      return a
    }, qa = function (a) {
      if (!(a instanceof Array)) {
        oa();
        var b = a[Symbol.iterator];
        a = b ? b.call(a) : ma(a);
        for (var c = []; !(b = a.next()).done;)c.push(b.value);
        a = c
      }
      return a
    }, m = this, p = function (a) {
      return void 0 !== a
    }, r = function (a) {
      return "string" == typeof a
    }, ra = function (a) {
      return "boolean" == typeof a
    }, t = function (a) {
      return "number" == typeof a
    }, sa = function () {
    }, ta = function (a) {
      a.Da = void 0;
      a.w = function () {
        return a.Da ? a.Da : a.Da = new a
      }
    }, ua = function (a) {
      var b = typeof a;
      if ("object" == b)if (a) {
        if (a instanceof Array)return "array";
        if (a instanceof Object)return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
      } else return "null"; else if ("function" == b && "undefined" == typeof a.call)return "object";
      return b
    }, u = function (a) {
      return "array" == ua(a)
    }, va = function (a) {
      var b = ua(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    }, wa = function (a) {
      return "function" == ua(a)
    }, v = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }, xa = "closure_uid_" + (1E9 * Math.random() >>> 0), ya = 0, za = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }, Aa = function (a, b, c) {
      if (!a)throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    }, w = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = za : w = Aa;
      return w.apply(null, arguments)
    }, Ba = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
      }
    }, Ca = function (a, b) {
      a = a.split(".");
      var c = m;
      a[0] in c || !c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());)!a.length && p(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    }, Da = function (a, b) {
      function c() {
      }

      c.prototype = b.prototype;
      a.$b = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.ve = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
      }
    };
  var Ea = document, Fa = window;
  var Ga = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ga); else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  Da(Ga, Error);
  Ga.prototype.name = "CustomError";
  var Ha;
  var Ia = function (a, b) {
    if (r(a))return r(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
    for (var c = 0; c < a.length; c++)if (c in a && a[c] === b)return c;
    return -1
  }, x = function (a, b, c) {
    for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
  }, Ja = function (a, b) {
    var c = a.length, d = r(a) ? a.split("") : a;
    for (--c; 0 <= c; --c)c in d && b.call(void 0, d[c], c, a)
  }, Ka = function (a, b) {
    for (var c = a.length, d = [], e = 0, f = r(a) ? a.split("") : a, g = 0; g < c; g++)if (g in f) {
      var k = f[g];
      b.call(void 0, k, g, a) && (d[e++] = k)
    }
    return d
  }, La = function (a, b, c) {
    for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
    return e
  }, Ma = function (a, b) {
    var c = 0;
    x(a, function (d, e) {
      c = b.call(void 0, c, d, e, a)
    });
    return c
  }, Na = function (a, b) {
    for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a))return !0;
    return !1
  }, Oa = function (a, b) {
    for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && !b.call(void 0, d[e], e, a))return !1;
    return !0
  }, Qa = function (a, b) {
    b = Pa(a, b, void 0);
    return 0 > b ? null : r(a) ? a.charAt(b) : a[b]
  }, Pa = function (a, b, c) {
    for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return f;
    return -1
  }, Ra = function (a, b) {
    return 0 <= Ia(a, b)
  }, Ua = function (a, b) {
    Ra(a, b) || a.push(b)
  }, Wa = function (a, b) {
    b = Ia(a, b);
    0 <= b && Va(a, b)
  }, Va = function (a, b) {
    return 1 == Array.prototype.splice.call(a, b, 1).length
  }, Xa = function (a, b) {
    b = Pa(a, b, void 0);
    0 <= b && Va(a, b)
  }, Ya = function (a, b) {
    var c = 0;
    Ja(a, function (d, e) {
      b.call(void 0, d, e, a) && Va(a, e) && c++
    })
  }, Za = function (a) {
    return Array.prototype.concat.apply([], arguments)
  }, $a = function (a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
      return c
    }
    return []
  }, ab = function (a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
  }, bb = function (a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
      var e = a[d++];
      var f = e;
      f = v(f) ? "o" + (f[xa] || (f[xa] = ++ya)) : (typeof f).charAt(0) + f;
      Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
    }
    a.length = c
  }, db = function (a, b) {
    a.sort(b || cb)
  }, eb = function (a, b) {
    for (var c = Array(a.length), d = 0; d < a.length; d++)c[d] = {index: d, value: a[d]};
    var e = b || cb;
    db(c, function (a, b) {
      return e(a.value, b.value) || a.index - b.index
    });
    for (d = 0; d < a.length; d++)a[d] = c[d].value
  }, cb = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  }, fb = function (a, b) {
    return a === b
  }, gb = function (a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
      var e = a[d], f = b.call(void 0, e, d, a);
      p(f) && (c[f] || (c[f] = [])).push(e)
    }
    return c
  };
  var hb = function (a) {
    var b = a.length - 1;
    return 0 <= b && a.indexOf("#", b) == b
  }, ib = function (a) {
    return /^[\s\xa0]*$/.test(a)
  }, kb = function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
  }, sb = function (a) {
    if (!lb.test(a))return a;
    -1 != a.indexOf("&") && (a = a.replace(mb, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(nb, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(ob, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(pb, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(qb, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(rb, "&#0;"));
    return a
  }, mb = /&/g, nb = /</g, ob = />/g, pb = /"/g, qb = /'/g, rb = /\x00/g, lb = /[\x00&<>"']/, vb = function (a) {
    return -1 != a.indexOf("&") ? "document" in m ? tb(a) : ub(a) : a
  }, tb = function (a) {
    var b = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
    var c = m.document.createElement("div");
    return a.replace(wb, function (a, e) {
      var d = b[a];
      if (d)return d;
      "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
      d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
      return b[a] = d
    })
  }, ub = function (a) {
    return a.replace(/&([^;]+);/g, function (a, c) {
      switch (c) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
      }
    })
  }, wb = /&([^;\s<&]+);?/g, xb = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "<"
  }, yb = {"'": "\\'"}, zb = function (a) {
    a = String(a);
    for (var b = ['"'], c = 0; c < a.length; c++) {
      var d = a.charAt(c), e = d.charCodeAt(0), f = c + 1, g;
      if (!(g = xb[d])) {
        if (!(31 < e && 127 > e))if (d in yb) d = yb[d]; else if (d in xb) d = yb[d] = xb[d]; else {
          g = d.charCodeAt(0);
          if (31 < g && 127 > g) e = d; else {
            if (256 > g) {
              if (e = "\\x", 16 > g || 256 < g) e += "0"
            } else e = "\\u", 4096 > g && (e += "0");
            e += g.toString(16).toUpperCase()
          }
          d = yb[d] = e
        }
        g = d
      }
      b[f] = g
    }
    b.push('"');
    return b.join("")
  }, Ab = function (a) {
    return null == a ? "" : String(a)
  }, Bb = function () {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36)
  }, Eb = function (a, b) {
    var c = 0;
    a = kb(String(a)).split(".");
    b = kb(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "", g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length)break;
        c = Cb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Cb(0 == f[2].length, 0 == g[2].length) || Cb(f[2], g[2]);
        f = f[3];
        g = g[3]
      } while (0 == c)
    }
    return c
  }, Cb = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  };
  var Fb;
  a:{
    var Gb = m.navigator;
    if (Gb) {
      var Hb = Gb.userAgent;
      if (Hb) {
        Fb = Hb;
        break a
      }
    }
    Fb = ""
  }
  var y = function (a) {
    return -1 != Fb.indexOf(a)
  }, Ib = function (a) {
    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);)c.push([d[1], d[2], d[3] || void 0]);
    return c
  };
  var Jb = function (a, b) {
      for (var c in a)b.call(void 0, a[c], c, a)
    }, Kb = function (a, b) {
      var c = {}, d;
      for (d in a)b.call(void 0, a[d], d, a) && (c[d] = a[d]);
      return c
    }, Lb = function (a, b) {
      for (var c in a)if (b.call(void 0, a[c], c, a))return !0;
      return !1
    }, Mb = function (a, b) {
      return null !== a && b in a
    }, Nb = function (a, b) {
      for (var c in a)if (a[c] == b)return !0;
      return !1
    }, Ob = function (a, b) {
      for (var c in a)if (b.call(void 0, a[c], c, a))return c
    }, Pb = function (a) {
      var b = {}, c;
      for (c in a)b[c] = a[c];
      return b
    }, Qb = function (a) {
      var b = {}, c;
      for (c in a)b[a[c]] = c;
      return b
    }, Rb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    Sb = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < Rb.length; f++)c = Rb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    };
  var Tb = function () {
    return y("Trident") || y("MSIE")
  }, Vb = function () {
    return y("Safari") && !(Ub() || y("Coast") || y("Opera") || y("Edge") || y("Silk") || y("Android"))
  }, Ub = function () {
    return (y("Chrome") || y("CriOS")) && !y("Edge")
  }, ac = function () {
    function a(a) {
      a = Qa(a, d);
      return c[a] || ""
    }

    var b = Fb;
    if (Tb())return Wb(b);
    b = Ib(b);
    var c = {};
    x(b, function (a) {
      c[a[0]] = a[1]
    });
    var d = Ba(Mb, c);
    return y("Opera") ? a(["Version", "Opera"]) : y("Edge") ? a(["Edge"]) : Ub() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
  }, Wb = function (a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1])return b[1];
    b = "";
    var c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])if (a && a[1])switch (a[1]) {
      case "4.0":
        b = "8.0";
        break;
      case "5.0":
        b = "9.0";
        break;
      case "6.0":
        b = "10.0";
        break;
      case "7.0":
        b = "11.0"
    } else b = "7.0"; else b = c[1];
    return b
  };
  var bc = function () {
    return y("iPhone") && !y("iPod") && !y("iPad")
  };
  var cc = function (a) {
    cc[" "](a);
    return a
  };
  cc[" "] = sa;
  var dc = function (a, b) {
    try {
      return cc(a[b]), !0
    } catch (c) {
    }
    return !1
  }, fc = function (a, b) {
    var c = ec;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
  };
  var gc = y("Opera"), hc = Tb(), ic = y("Edge"), jc = ic || hc,
    kc = y("Gecko") && !(-1 != Fb.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
    lc = -1 != Fb.toLowerCase().indexOf("webkit") && !y("Edge"), mc = lc && y("Mobile"), nc = y("Macintosh"),
    oc = y("Windows"), pc = y("Android"), qc = bc(), rc = y("iPad"), sc = y("iPod"),
    tc = bc() || y("iPad") || y("iPod"), uc = function () {
      var a = m.document;
      return a ? a.documentMode : void 0
    }, vc;
  a:{
    var wc = "", xc = function () {
      var a = Fb;
      if (kc)return /rv:([^\);]+)(\)|;)/.exec(a);
      if (ic)return /Edge\/([\d\.]+)/.exec(a);
      if (hc)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (lc)return /WebKit\/(\S+)/.exec(a);
      if (gc)return /(?:Version)[ \/]?(\S+)/.exec(a)
    }();
    xc && (wc = xc ? xc[1] : "");
    if (hc) {
      var yc = uc();
      if (null != yc && yc > parseFloat(wc)) {
        vc = String(yc);
        break a
      }
    }
    vc = wc
  }
  var zc = vc, ec = {}, Ac = function (a) {
    return fc(a, function () {
      return 0 <= Eb(zc, a)
    })
  }, Bc;
  var Cc = m.document;
  Bc = Cc && hc ? uc() || ("CSS1Compat" == Cc.compatMode ? parseInt(zc, 10) : 5) : void 0;
  var Dc = Ub(), Ec = Vb() && !(bc() || y("iPad") || y("iPod"));
  var Fc = null, Gc = null, Hc = kc || lc && !Ec || gc || "function" == typeof m.btoa, Ic = function (a, b) {
    if (!Fc) {
      Fc = {};
      Gc = {};
      for (var c = 0; 65 > c; c++)Fc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Gc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
    }
    b = b ? Gc : Fc;
    c = [];
    for (var d = 0; d < a.length; d += 3) {
      var e = a[d], f = d + 1 < a.length, g = f ? a[d + 1] : 0, k = d + 2 < a.length, l = k ? a[d + 2] : 0, n = e >> 2;
      e = (e & 3) << 4 | g >> 4;
      g = (g & 15) << 2 | l >> 6;
      l &= 63;
      k || (l = 64, f || (g = 64));
      c.push(b[n], b[e], b[g], b[l])
    }
    return c.join("")
  };
  var Jc = 0, Kc = 0;
  var Lc = function () {
    this.j = []
  };
  Lc.prototype.length = function () {
    return this.j.length
  };
  var Mc = function (a) {
    var b = a.j;
    a.j = [];
    return b
  };
  var Oc = function () {
    this.l = [];
    this.m = 0;
    this.j = new Lc
  };
  Oc.prototype.reset = function () {
    this.l = [];
    Mc(this.j);
    this.m = 0
  };
  var Pc = function (a, b, c) {
    if (null != c) {
      var d = a.j;
      for (b *= 8; 127 < b;)d.j.push(b & 127 | 128), b >>>= 7;
      d.j.push(b);
      a = a.j;
      b = c;
      c = 0 > b;
      b = Math.abs(b);
      d = b >>> 0;
      b = Math.floor((b - d) / 4294967296);
      b >>>= 0;
      c && (b = ~b >>> 0, d = (~d >>> 0) + 1, 4294967295 < d && (d = 0, b++, 4294967295 < b && (b = 0)));
      Jc = d;
      Kc = b;
      c = Jc;
      for (d = Kc; 0 < d || 127 < c;)a.j.push(c & 127 | 128), c = (c >>> 7 | d << 25) >>> 0, d >>>= 7;
      a.j.push(c)
    }
  };
  var Qc = function () {
  }, Rc = "function" == typeof Uint8Array, Sc = function (a, b) {
    a.l = null;
    b || (b = []);
    a.C = void 0;
    a.m = -1;
    a.j = b;
    a:{
      if (a.j.length) {
        b = a.j.length - 1;
        var c = a.j[b];
        if (c && "object" == typeof c && !u(c) && !(Rc && c instanceof Uint8Array)) {
          a.u = b - a.m;
          a.o = c;
          break a
        }
      }
      a.u = Number.MAX_VALUE
    }
    a.A = {}
  }, Tc = [], Uc = function (a, b) {
    if (b < a.u) {
      b += a.m;
      var c = a.j[b];
      return c === Tc ? a.j[b] = [] : c
    }
    if (a.o)return c = a.o[b], c === Tc ? a.o[b] = [] : c
  }, Vc = function (a, b, c) {
    if (b < a.u) a.j[b + a.m] = c; else {
      var d = a.u + a.m;
      a.j[d] || (a.o = a.j[d] = {});
      a.o[b] = c
    }
  }, Wc = function (a, b, c, d) {
    c != d ? Vc(a, b, c) : a.j[b + a.m] = null
  }, Yc = function (a, b, c) {
    a.l || (a.l = {});
    var d = c ? Xc(c) : c;
    a.l[b] = c;
    Vc(a, b, d)
  }, Zc = function (a) {
    if (a.l)for (var b in a.l) {
      var c = a.l[b];
      if (u(c))for (var d = 0; d < c.length; d++)c[d] && Xc(c[d]); else c && Xc(c)
    }
  }, Xc = function (a) {
    Zc(a);
    return a.j
  };
  Qc.prototype.toString = function () {
    Zc(this);
    return this.j.toString()
  };
  var $c = function (a) {
    Sc(this, a)
  };
  Da($c, Qc);
  var ad = function (a) {
    Sc(this, a)
  };
  Da(ad, Qc);
  var bd = function (a) {
    Sc(this, a)
  };
  Da(bd, Qc);
  var dd = function () {
    this.j = "";
    this.l = cd
  };
  dd.prototype.jb = !0;
  dd.prototype.Ta = function () {
    return this.j
  };
  var ed = function (a) {
    if (a instanceof dd && a.constructor === dd && a.l === cd)return a.j;
    ua(a);
    return "type_error:TrustedResourceUrl"
  }, cd = {};
  var gd = function () {
    this.ib = "";
    this.Ic = fd
  };
  gd.prototype.jb = !0;
  gd.prototype.Ta = function () {
    return this.ib
  };
  var hd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, fd = {}, id = function (a) {
    var b = new gd;
    b.ib = a;
    return b
  };
  id("about:blank");
  var z = {
    ma: function (a) {
      return function () {
        return a
      }
    }
  };
  z.Wd = z.ma(!1);
  z.te = z.ma(!0);
  z.de = z.ma(null);
  z.fd = function (a) {
    return a
  };
  z.error = function (a) {
    return function () {
      throw Error(a);
    }
  };
  z.ze = function (a) {
    return function () {
      throw a;
    }
  };
  z.lock = function (a, b) {
    b = b || 0;
    return function () {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
  };
  z.Ae = function (a) {
    return function () {
      return arguments[a]
    }
  };
  z.Be = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = Array.prototype.slice.call(arguments);
      b.push.apply(b, c);
      return a.apply(this, b)
    }
  };
  z.De = function (a, b) {
    return z.Hd(a, z.ma(b))
  };
  z.ye = function (a, b) {
    return function (c) {
      return b ? a == c : a === c
    }
  };
  z.we = function (a, b) {
    var c = arguments, d = c.length;
    return function () {
      var a;
      d && (a = c[d - 1].apply(this, arguments));
      for (var b = d - 2; 0 <= b; b--)a = c[b].call(this, a);
      return a
    }
  };
  z.Hd = function (a) {
    var b = arguments, c = b.length;
    return function () {
      for (var a, e = 0; e < c; e++)a = b[e].apply(this, arguments);
      return a
    }
  };
  z.and = function (a) {
    var b = arguments, c = b.length;
    return function () {
      for (var a = 0; a < c; a++)if (!b[a].apply(this, arguments))return !1;
      return !0
    }
  };
  z.or = function (a) {
    var b = arguments, c = b.length;
    return function () {
      for (var a = 0; a < c; a++)if (b[a].apply(this, arguments))return !0;
      return !1
    }
  };
  z.qb = function (a) {
    return function () {
      return !a.apply(this, arguments)
    }
  };
  z.create = function (a, b) {
    var c = function () {
    };
    c.prototype = a.prototype;
    c = new c;
    a.apply(c, Array.prototype.slice.call(arguments, 1));
    return c
  };
  z.lc = !0;
  z.ta = function (a) {
    var b = !1, c;
    return function () {
      if (!z.lc)return a();
      b || (c = a(), b = !0);
      return c
    }
  };
  z.once = function (a) {
    var b = a;
    return function () {
      if (b) {
        var a = b;
        b = null;
        a()
      }
    }
  };
  z.xe = function (a, b, c) {
    var d = 0;
    return function (e) {
      m.clearTimeout(d);
      var f = arguments;
      d = m.setTimeout(function () {
        a.apply(c, f)
      }, b)
    }
  };
  z.Ld = function (a, b) {
    var c = 0, d = !1, e = [], f = function () {
      c = 0;
      d && (d = !1, g())
    }, g = function () {
      c = m.setTimeout(f, 200);
      a.apply(b, e)
    };
    return function (a) {
      e = arguments;
      c ? d = !0 : g()
    }
  };
  z.Ce = function (a, b, c) {
    var d = 0, e = function () {
      d = 0
    };
    return function (f) {
      d || (d = m.setTimeout(e, b), a.apply(c, arguments))
    }
  };
  var kd = function (a) {
    jd();
    var b = new dd;
    b.j = a;
    return b
  }, jd = sa;
  var ld = /^[\w+/_-]+[=]{0,2}$/;
  var md = function (a) {
    try {
      return !!a && null != a.location.href && dc(a, "foo")
    } catch (b) {
      return !1
    }
  }, nd = function (a, b) {
    var c = a.createElement("script");
    b = kd(b);
    c.src = ed(b);
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
  }, qd = function (a, b) {
    if (!od()) {
      var c = Math.random();
      if (c < b)return c = pd(), a[Math.floor(c * a.length)]
    }
    return null
  }, pd = function () {
    if (!m.crypto)return Math.random();
    try {
      var a = new Uint32Array(1);
      m.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536
    } catch (b) {
      return Math.random()
    }
  }, A = function (a, b, c) {
    if (a)for (var d in a)Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
  }, rd = function (a) {
    for (var b in a)if (Object.prototype.hasOwnProperty.call(a, b))return !1;
    return !0
  }, sd = function (a) {
    var b = 0;
    A(a, function () {
      b++
    });
    return b
  }, td = function (a) {
    var b = [];
    A(a, function (a, d) {
      b.push(d)
    });
    return b
  }, ud = function (a) {
    var b = [];
    A(a, function (a) {
      b.push(a)
    });
    return b
  }, vd = function (a) {
    var b = a.length;
    if (0 == b)return 0;
    for (var c = 305419896, d = 0; d < b; d++)c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
    return 0 < c ? c : 4294967296 + c
  }, od = z.ta(function () {
    return -1 != Fb.indexOf("Google Web Preview") || 1E-4 > Math.random()
  }), wd = function (a, b) {
    try {
      for (var c = null; c != a; c = a, a = a.parent)switch (a.location.protocol) {
        case "https:":
          return !0;
        case "file:":
          return !!b;
        case "http:":
          return !1
      }
    } catch (d) {
    }
    return !0
  }, xd = function (a) {
    if (!a)return "";
    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
    try {
      var c = b.exec(decodeURIComponent(a));
      if (c)return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
    } catch (d) {
    }
    return ""
  }, yd = function () {
    var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation"];
    return Ka("allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation".split(" "), function (b) {
      return !Ra(a, b)
    }).join(" ")
  }, zd = function () {
    try {
      a:{
        var a = m.document.querySelector("script[nonce]");
        if (a) {
          var b = a.nonce || a.getAttribute("nonce");
          if (b && ld.test(b)) {
            var c = b;
            break a
          }
        }
        c = void 0
      }
      return c
    } catch (d) {
    }
  }, Ad = function (a) {
    a = a && a.toString && a.toString();
    return r(a) && -1 != a.indexOf("[native code]")
  };
  var Bd = !hc || 9 <= Number(Bc), Cd = !kc && !hc || hc && 9 <= Number(Bc) || kc && Ac("1.9.1"), Dd = hc || gc || lc;
  var Ed = function (a, b) {
    this.W = p(a) ? a : 0;
    this.y = p(b) ? b : 0
  };
  Ed.prototype.ceil = function () {
    this.W = Math.ceil(this.W);
    this.y = Math.ceil(this.y);
    return this
  };
  Ed.prototype.floor = function () {
    this.W = Math.floor(this.W);
    this.y = Math.floor(this.y);
    return this
  };
  Ed.prototype.round = function () {
    this.W = Math.round(this.W);
    this.y = Math.round(this.y);
    return this
  };
  var Fd = function (a, b) {
    this.width = a;
    this.height = b
  };
  h = Fd.prototype;
  h.Qc = function () {
    return this.width * this.height
  };
  h.aspectRatio = function () {
    return this.width / this.height
  };
  h.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  h.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  h.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  var Nd = function (a) {
    return a ? new Gd(Hd(a)) : Ha || (Ha = new Gd)
  }, Pd = function (a, b) {
    Jb(b, function (b, d) {
      b && b.jb && (b = b.Ta());
      "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Od.hasOwnProperty(d) ? a.setAttribute(Od[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
  }, Od = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  }, Qd = function (a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Fd(a.clientWidth, a.clientHeight)
  }, Rd = function (a) {
    return a.scrollingElement ? a.scrollingElement : lc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
  }, Sd = function (a) {
    return a.parentWindow || a.defaultView
  }, Ud = function (a, b, c) {
    function d(c) {
      c && b.appendChild(r(c) ? a.createTextNode(c) : c)
    }

    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !va(f) || v(f) && 0 < f.nodeType ? d(f) : x(Td(f) ? $a(f) : f, d)
    }
  }, Vd = function (a) {
    a && a.parentNode && a.parentNode.removeChild(a)
  }, Wd = function (a) {
    return Cd && void 0 != a.children ? a.children : Ka(a.childNodes, function (a) {
      return 1 == a.nodeType
    })
  }, Hd = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }, Td = function (a) {
    if (a && "number" == typeof a.length) {
      if (v(a))return "function" == typeof a.item || "string" == typeof a.item;
      if (wa(a))return "function" == typeof a.item
    }
    return !1
  }, Gd = function (a) {
    this.j = a || m.document || document
  };
  Gd.prototype.l = function (a, b, c) {
    var d = this.j, e = arguments, f = String(e[0]), g = e[1];
    if (!Bd && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', sb(g.name), '"');
      if (g.type) {
        f.push(' type="', sb(g.type), '"');
        var k = {};
        Sb(k, g);
        delete k.type;
        g = k
      }
      f.push(">");
      f = f.join("")
    }
    f = d.createElement(f);
    g && (r(g) ? f.className = g : u(g) ? f.className = g.join(" ") : Pd(f, g));
    2 < e.length && Ud(d, f, e);
    return f
  };
  var Xd = function (a, b) {
    return a.j.createElement(String(b))
  };
  var Yd = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  }, Zd = function (a) {
    return new Yd(a.top, a.right, a.bottom, a.left)
  };
  Yd.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  Yd.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  Yd.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  var $d = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
  }, ae = function (a) {
    return new Yd(a.top, a.left + a.width, a.top + a.height, a.left)
  }, be = function (a, b) {
    var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
    if (c <= d) {
      var e = Math.max(a.top, b.top);
      a = Math.min(a.top + a.height, b.top + b.height);
      if (e <= a)return new $d(c, e, d - c, a - e)
    }
    return null
  };
  $d.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  $d.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  $d.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  var ce = function (a, b) {
    var c = Hd(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
  }, de = function (a, b) {
    return ce(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
  }, ee = function (a) {
    try {
      var b = a.getBoundingClientRect()
    } catch (c) {
      return {left: 0, top: 0, right: 0, bottom: 0}
    }
    hc && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
  }, fe = function (a) {
    if (hc && !(8 <= Number(Bc)))return a.offsetParent;
    var b = Hd(a), c = de(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)if (11 == a.nodeType && a.host && (a = a.host), c = de(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))return a;
    return null
  }, ge = function (a) {
    var b = Hd(a), c = new Ed(0, 0);
    var d = b ? Hd(b) : document;
    d = !hc || 9 <= Number(Bc) || "CSS1Compat" == Nd(d).j.compatMode ? d.documentElement : d.body;
    if (a == d)return c;
    a = ee(a);
    d = Nd(b).j;
    b = Rd(d);
    d = Sd(d);
    b = hc && Ac("10") && d.pageYOffset != b.scrollTop ? new Ed(b.scrollLeft, b.scrollTop) : new Ed(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.W = a.left + b.W;
    c.y = a.top + b.y;
    return c
  }, he = function (a) {
    "number" == typeof a && (a = Math.round(a) + "px");
    return a
  }, ie = function (a, b) {
    if ("none" != de(b, "display"))return a(b);
    var c = b.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = a(b);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
  }, je = function (a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = lc && !b && !c;
    return p(b) && !d || !a.getBoundingClientRect ? new Fd(b, c) : (a = ee(a), new Fd(a.right - a.left, a.bottom - a.top))
  }, ke = function (a, b) {
    a.style.display = b ? "" : "none"
  };
  var le = function (a, b, c) {
    return a.addEventListener ? (a.addEventListener(b, c, void 0), !0) : a.attachEvent ? (a.attachEvent("on" + b, c), !0) : !1
  }, me = function (a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, void 0) : a.detachEvent && a.detachEvent("on" + b, c)
  };
  var ne = {"AMP-CAROUSEL": "ac", "AMP-FX-FLYING-CARPET": "fc", "AMP-LIGHTBOX": "lb", "AMP-STICKY-AD": "sa"},
    oe = function (a) {
      a = a || m;
      var b = a.context;
      if (!b)try {
        b = a.parent.context
      } catch (c) {
      }
      try {
        if (b && "pageViewId" in b && "canonicalUrl" in b)return b
      } catch (c) {
      }
      return null
    }, pe = function () {
      var a = oe();
      return a && a.initialIntersection ? a.initialIntersection : null
    }, qe = function () {
      var a = pe();
      return a && v(a.rootBounds) ? new Fd(a.rootBounds.width, a.rootBounds.height) : null
    }, re = function () {
      var a = oe();
      var b;
      return (a = a && (b = a.initialLayoutRect) && t(b.top) && t(b.left) && t(b.width) && t(b.height) ? new $d(b.left, b.top, b.width, b.height) : null) ? new Ed(a.left, a.top) : (b = pe()) && v(b.rootBounds) ? new Ed(b.rootBounds.left + b.boundingClientRect.left, b.rootBounds.top + b.boundingClientRect.top) : null
    }, se = function (a) {
      a = a || oe();
      if (!a)return null;
      a = a.master;
      return md(a) ? a : null
    }, te = function (a, b) {
      var c = a.ampInaboxIframes = a.ampInaboxIframes || [];
      b && c.push(b);
      if (!a.ampInaboxInitialized && (a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [], !c.google_amp_listener_added)) {
        c.google_amp_listener_added = !0;
        var d = function (b) {
          if (a.ampInaboxInitialized) me(a, "message", d); else {
            var c;
            a.ampInaboxPendingMessages && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || nd(a.document, "https://cdn.ampproject.org/" + (c[1] ? "rtv/" + c[1] + "/" : "") + "amp4ads-host-v0.js"))
          }
        };
        le(a, "message", d)
      }
    }, ue = !!oe() && m != m.top;
  var we = function (a, b) {
    return ve(window, a, b)
  }, ve = function (a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = a.document.createElement("img");
    if (c) {
      var e = function (a) {
        c(a);
        me(d, "load", e);
        me(d, "error", e)
      };
      le(d, "load", e);
      le(d, "error", e)
    }
    d.src = b;
    a.google_image_requests.push(d);
    return d
  };
  var xe = Object.prototype.hasOwnProperty, ye = function (a, b) {
    for (var c in a)xe.call(a, c) && b.call(void 0, a[c], c, a)
  }, Ae = function () {
    var a = ze();
    "google_onload_fired" in a || (a.google_onload_fired = !1, le(a, "load", function () {
      a.google_onload_fired = !0
    }))
  }, Be = !!window.google_async_iframe_id, Ce = Be && window.parent || window, ze = function () {
    if (Be && !md(Ce)) {
      var a = "." + Ea.domain;
      try {
        for (; 2 < a.split(".").length && !md(Ce);)Ea.domain = a = a.substr(a.indexOf(".") + 1), Ce = window.parent
      } catch (b) {
      }
      md(Ce) || (Ce = window)
    }
    return Ce
  }, De = function () {
    var a, b = window.ActiveXObject;
    if (navigator.plugins && navigator.mimeTypes.length) {
      if ((a = navigator.plugins["Shockwave Flash"]) && a.description)return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
    } else {
      if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
        var c = 3;
        for (a = 1; a;)try {
          a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
        } catch (d) {
          a = null
        }
        return c.toString()
      }
      if (Tb()) {
        a = null;
        try {
          a = new b("ShockwaveFlash.ShockwaveFlash.7")
        } catch (d) {
          c = 0;
          try {
            a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
          } catch (e) {
            if (6 === c)return c.toString()
          }
          try {
            a = new b("ShockwaveFlash.ShockwaveFlash")
          } catch (e) {
          }
        }
        if (a)return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
      }
    }
    return "0"
  };
  var Ee = null, Fe = function (a, b) {
    for (var c = 0, d = a, e = 0; a && a != a.parent;)if (a = a.parent, e++, md(a)) d = a, c = e; else if (b)break;
    return {ub: d, level: c}
  };
  var Ge = function (a) {
    return !!a && a.top == a
  }, He = function (a, b, c, d) {
    c = c || a.google_ad_width;
    d = d || a.google_ad_height;
    if (Ge(a))return !1;
    var e = b.documentElement;
    if (c && d) {
      var f = 1, g = 1;
      a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
      if (g > 2 * d || f > 2 * c)return !1
    }
    return !0
  }, Ie = function (a, b) {
    var c = {};
    c.Pd = Fe(a, !1).ub;
    var d = c.Pd;
    var e = d.location.href;
    if (d == d.top) e = {url: e, Nb: !0}; else {
      var f = !1, g = d.document;
      g && g.referrer && (e = g.referrer, d.parent == d.top && (f = !0));
      (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 == e.indexOf(d) && (f = !1, e = d);
      e = {url: e, Nb: f}
    }
    c.Qd = e;
    c.jd = He(ze(), b, a.google_ad_width, a.google_ad_height);
    a = c.jd;
    b = c.Qd.Nb;
    e = ze();
    e = e.top == e ? 0 : md(e.top) ? 1 : 2;
    f = 4;
    a || 1 != e ? a || 2 != e ? a && 1 == e ? f = 7 : a && 2 == e && (f = 8) : f = 6 : f = 5;
    b && (f |= 16);
    c.hd = "" + f;
    return c
  };
  var Je = function () {
    return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
  }, Ke = function () {
    return !(!Je() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))) && !Je()
  };
  var Me = function (a, b) {
    var c = b || Le;
    return function () {
      var b = this || m;
      b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
      var e = c(a[xa] || (a[xa] = ++ya), arguments);
      return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
    }
  }, Le = function (a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c)a.push(typeof b[c], b[c]);
    return a.join("\x0B")
  };
  var Ne = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    Oe = function (a) {
      return a ? decodeURI(a) : a
    }, Pe = /#|$/, Qe = function (a, b) {
      var c = a.search(Pe);
      a:{
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f)if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f)break a;
          d += e + 1
        }
        d = -1
      }
      if (0 > d)return null;
      e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    };
  var Re = function () {
    if (oc) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(Fb)) ? a[1] : "0"
    }
    return nc ? (a = /10[_.][0-9_.]+/, (a = a.exec(Fb)) ? a[0].replace(/_/g, ".") : "10") : pc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(Fb)) ? a[1] : "") : qc || rc || sc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(Fb)) ? a[1].replace(/_/g, ".") : "") : ""
  }();
  var Se = function (a) {
    if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
      a = a[0].toLowerCase();
      for (var b = 0, c = 0; c < a.length; ++c)b = 31 * b + a.charCodeAt(c) >>> 0;
      switch (b) {
        case 1967261364:
          return 0;
        case 3147493546:
          return 1;
        case 1567346461:
          return 2;
        case 2183041838:
          return 3;
        case 763236279:
          return 4;
        case 1342279801:
          return 5;
        case 526831769:
          return 6;
        case 352806002:
          return 7;
        case 2755048925:
          return 8;
        case 3306848407:
          return 9;
        case 2207000920:
          return 10;
        case 484037040:
          return 11;
        case 3506871055:
          return 12;
        case 672143848:
          return 13;
        case 2528751226:
          return 14;
        case 2744854768:
          return 15;
        case 3703278665:
          return 16;
        case 2014749173:
          return 17;
        case 133063824:
          return 18;
        case 2749334602:
          return 19;
        case 3131239845:
          return 20;
        case 2074086763:
          return 21;
        case 795772493:
          return 22;
        case 290857819:
          return 23;
        case 3035947606:
          return 24;
        case 2983138003:
          return 25;
        case 2197138676:
          return 26;
        case 4216016165:
          return 27;
        case 239803524:
          return 28;
        case 975993579:
          return 29;
        case 1794940339:
          return 30;
        case 1314429186:
          return 31;
        case 1643618937:
          return 32;
        case 497159982:
          return 33
      }
    }
    return -1
  }, Te = function (a) {
    if (!a.length)return 0;
    for (var b = [], c = 0; 33 >= c; c++)b[c] = 0;
    for (c = a.length - 1; 0 <= c; c--) {
      var d = Se(a[c]);
      0 <= d && (b[33 - d] = 1)
    }
    return parseInt(b.join(""), 2)
  };
  var Ue = function (a, b, c) {
    c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.line = b.line || -1;
    this.msg = b.message || "";
    this.file = b.file || "";
    this.id = b.id || "jserror";
    this.meta = c
  };
  var Ve = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/, We = function (a, b) {
    this.j = a;
    this.l = b
  }, Xe = function (a, b, c) {
    this.url = a;
    this.ub = b;
    this.Lb = !!c;
    this.depth = t(void 0) ? void 0 : null
  }, Ze = function (a) {
    a = (this.l = a || m) || m;
    this.m = a.top == a ? 1 : md(a.top) ? 2 : 3;
    3 != this.m && Date.parse(m.top.document.lastModified);
    this.j = Ye(this.l)
  }, $e = function (a, b) {
    for (var c = 0, d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && Oe(a.match(Ne)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++)if (a = null != b[f] && Oe(b[f].match(Ne)[3] || null) || "", c *= 4, a)if (d && a == d) c += 3; else {
      a:{
        var g = b[f];
        for (var k = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|(\/.*))/i, /^https?:\/\/(tpc|pagead2).googlesyndication\.com(:\d+)?($|(\/.*))/i, /^https?:\/\/www.googletagservices\.com(:\d+)?($|(\/.*))/i], l = 0; l < k.length; ++l)if (k[l].test(g)) {
          g = !0;
          break a
        }
        g = !1
      }
      g ? c += 2 : a && 0 <= Se(a) && (c += 1)
    }
    return c
  }, Ye = function (a) {
    var b = a || m, c = [], d = null;
    do {
      var e = b;
      if (md(e)) {
        var f = e.location.href;
        d = e.document && e.document.referrer || null
      } else f = d, d = null;
      c.push(new Xe(f || "", e));
      try {
        b = e.parent
      } catch (g) {
        b = null
      }
    } while (b && e != b);
    b = 0;
    for (e = c.length - 1; b <= e; ++b)c[b].depth = e - b;
    e = a || m;
    if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)for (b = 1; b < c.length; ++b)a = c[b], a.url || (a.url = e.location.ancestorOrigins[b - 1] || "", a.Lb = !0);
    return c
  };
  var af = function () {
    this.m = "&";
    this.o = p(void 0) ? void 0 : "trn";
    this.u = !1;
    this.l = {};
    this.A = 0;
    this.j = []
  }, bf = function (a, b) {
    var c = {};
    c[a] = b;
    return [c]
  }, df = function (a, b, c, d, e) {
    var f = [];
    A(a, function (a, k) {
      (a = cf(a, b, c, d, e)) && f.push(k + "=" + a)
    });
    return f.join(b)
  }, cf = function (a, b, c, d, e) {
    if (null == a)return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (d = d || 0, d < c.length) {
        for (var f = [], g = 0; g < a.length; g++)f.push(cf(a[g], b, c, d + 1, e));
        return f.join(c[d])
      }
    } else if ("object" == typeof a)return e = e || 0, 2 > e ? encodeURIComponent(df(a, b, c, d, e + 1)) : "...";
    return encodeURIComponent(String(a))
  }, ef = function (a, b, c, d) {
    a.j.push(b);
    a.l[b] = bf(c, d)
  }, gf = function (a, b, c, d) {
    b = b + "//" + c + d;
    var e = ff(a) - d.length;
    if (0 > e)return "";
    a.j.sort(function (a, b) {
      return a - b
    });
    d = null;
    c = "";
    for (var f = 0; f < a.j.length; f++)for (var g = a.j[f], k = a.l[g], l = 0; l < k.length; l++) {
      if (!e) {
        d = null == d ? g : d;
        break
      }
      var n = df(k[l], a.m, ",$");
      if (n) {
        n = c + n;
        if (e >= n.length) {
          e -= n.length;
          b += n;
          c = a.m;
          break
        } else a.u && (c = e, n[c - 1] == a.m && --c, b += n.substr(0, c), c = a.m, e = 0);
        d = null == d ? g : d
      }
    }
    f = "";
    a.o && null != d && (f = c + a.o + "=" + d);
    return b + f
  }, ff = function (a) {
    if (!a.o)return 4E3;
    var b = 1, c;
    for (c in a.l)b = c.length > b ? c.length : b;
    return 4E3 - a.o.length - b - a.m.length - 1
  };
  var hf = function (a, b, c, d, e, f) {
    if ((d ? a.u : Math.random()) < (e || a.j))try {
      if (c instanceof af)var g = c; else g = new af, A(c, function (a, b) {
        var c = g, d = c.A++;
        a = bf(b, a);
        c.j.push(d);
        c.l[d] = a
      });
      var k = gf(g, a.o, a.l, a.m + b + "&");
      k && ("undefined" === typeof f ? ve(m, k, void 0) : ve(m, k, f))
    } catch (l) {
    }
  };
  var jf = null, kf = function (a) {
    this.l = {};
    this.j = {};
    this.m = !1;
    a = a || [];
    for (var b = 0, c = a.length; b < c; ++b)this.j[a[b]] = ""
  }, lf = function () {
    if (null === jf) {
      jf = "";
      try {
        var a = "";
        try {
          a = m.top.location.hash
        } catch (c) {
          a = m.location.hash
        }
        if (a) {
          var b = a.match(/\bdeid=([\d,]+)/);
          jf = b ? b[1] : ""
        }
      } catch (c) {
      }
    }
    return jf
  }, mf = function (a, b, c) {
    "" != b && (c ? a.j.hasOwnProperty(c) && (a.j[c] = b) : a.l[b] = !0)
  }, nf = function (a, b) {
    return a.j.hasOwnProperty(b) ? a.j[b] : ""
  }, pf = function () {
    var a = of, b = [];
    A(a.l, function (a, d) {
      b.push(d)
    });
    A(a.j, function (a) {
      "" != a && b.push(a)
    });
    return b
  };
  var qf = function () {
    var a = m.performance;
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
  }, rf = function (a) {
    a = void 0 === a ? m : a;
    return (a = a.performance) && a.now ? a.now() : null
  };
  var sf = function (a, b, c, d, e) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
    this.slotId = e
  };
  var tf = m.performance, uf = !!(tf && tf.mark && tf.measure && tf.clearMarks), Cf = z.ta(function () {
    var a;
    if (a = uf) a = lf(), a = !!a.indexOf && 0 <= a.indexOf("1337");
    return a
  }), Df = function (a, b) {
    this.events = [];
    this.l = b || m;
    var c = null;
    b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
    this.j = Cf() || (null != c ? c : Math.random() < a)
  }, Ef = function (a) {
    a && tf && Cf() && (tf.clearMarks("goog_" + a.uniqueId + "_start"), tf.clearMarks("goog_" + a.uniqueId + "_end"))
  }, Ff = function (a, b, c, d, e, f) {
    a.j && (b = new sf(b, c, d, void 0 === e ? 0 : e, f), a.j && a.events.push(b))
  };
  Df.prototype.start = function (a, b) {
    if (!this.j)return null;
    var c = rf() || qf();
    a = new sf(a, b, c);
    b = "goog_" + a.uniqueId + "_start";
    tf && Cf() && tf.mark(b);
    return a
  };
  var Gf = function (a, b) {
    if (a.j && t(b.value)) {
      var c = rf() || qf();
      b.duration = c - b.value;
      c = "goog_" + b.uniqueId + "_end";
      tf && Cf() && tf.mark(c);
      a.j && a.events.push(b)
    }
  }, Hf = function (a, b, c) {
    var d = rf();
    d && Ff(a, b, 9, d, 0, c)
  };
  var Kf = function () {
    var a = If;
    this.m = Jf;
    this.o = this.l;
    this.j = void 0 === a ? null : a
  }, Nf = function (a, b) {
    try {
      if (a.j && a.j.j) {
        var c = a.j.start((192).toString(), 3);
        var d = b();
        Gf(a.j, c)
      } else d = b()
    } catch (e) {
      b = !0;
      try {
        Ef(c), b = a.o.call(a, 192, new Lf(Mf(e), e.fileName, e.lineNumber), void 0, void 0)
      } catch (f) {
        a.l(217, f)
      }
      if (!b)throw e;
    }
    return d
  }, Pf = function (a) {
    var b = Of;
    return function (c) {
      for (var d = [], e = 0; e < arguments.length; ++e)d[e] = arguments[e];
      return Nf(b, function () {
        return a.apply(void 0, d)
      })
    }
  };
  Kf.prototype.l = function (a, b, c, d, e) {
    e = e || "jserror";
    try {
      var f = new af;
      f.u = !0;
      ef(f, 1, "context", a);
      b.error && b.meta && b.id || (b = new Lf(Mf(b), b.fileName, b.lineNumber));
      b.msg && ef(f, 2, "msg", b.msg.substring(0, 512));
      b.file && ef(f, 3, "file", b.file);
      0 < b.line && ef(f, 4, "line", b.line);
      var g = b.meta || {};
      if (d)try {
        d(g)
      } catch (L) {
      }
      b = [g];
      f.j.push(5);
      f.l[5] = b;
      var k = Ye(), l = new Xe(m.location.href, m, !1);
      b = null;
      var n = k.length - 1;
      for (d = n; 0 <= d; --d) {
        var q = k[d];
        !b && Ve.test(q.url) && (b = q);
        if (q.url && !q.Lb) {
          l = q;
          break
        }
      }
      q = null;
      var B = k.length && k[n].url;
      0 != l.depth && B && (q = k[n]);
      var J = new We(l, q);
      J.l && ef(f, 6, "top", J.l.url || "");
      ef(f, 7, "url", J.j.url || "");
      hf(this.m, e, f, !1, c)
    } catch (L) {
      try {
        hf(this.m, e, {context: "ecmserr", rctx: a, msg: Mf(L), url: J && J.j.url}, !1, c)
      } catch (na) {
      }
    }
    return !0
  };
  var Mf = function (a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    a.stack && (b = Qf(a.stack, b));
    return b
  }, Qf = function (a, b) {
    try {
      -1 == a.indexOf(b) && (a = b + "\n" + a);
      for (var c; a != c;)c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
      return a.replace(/\n */g, "\n")
    } catch (d) {
      return b
    }
  }, Lf = function (a, b, c) {
    Ue.call(this, Error(a), {message: a, file: void 0 === b ? "" : b, line: void 0 === c ? -1 : c})
  };
  ha(Lf, Ue);
  var Rf = function (a) {
    return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
  }, Sf = function (a) {
    try {
      var b = Rf(a.document);
      return new Fd(b.clientWidth, b.clientHeight)
    } catch (c) {
      return new Fd(-12245933, -12245933)
    }
  }, Tf = function (a, b) {
    b = void 0 === b ? m : b;
    a = a.scrollingElement || Rf(a);
    return new Ed(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
  }, Uf = function (a) {
    try {
      return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
    } catch (b) {
      return !1
    }
  };
  var Vf = function (a) {
    return {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
  }, Wf = function (a) {
    var b;
    a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b
  }, Xf = function (a) {
    return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
  };
  var Yf = function (a) {
    kf.call(this, a);
    this.dfltBktExt = this.l;
    this.lrsExt = this.j
  };
  Da(Yf, kf);
  var Zf = !1, $f = 0, ag = function (a, b, c) {
    if (!Zf) {
      Zf = !0;
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
      if (Ad(d)) {
        var e, f, g, k, l = a.requestIdleCallback;
        l && (k = function (a) {
          f = a.timeRemaining();
          g = 0
        });
        var n = function (a) {
          Zf && (b.push(a - e), e = a, l && (c.push(f || 0), g || (f = 0, g = l(k))), d(n))
        };
        d(function (a) {
          e = a;
          l && (g = l(k));
          d(n)
        })
      }
    }
  }, bg = function () {
    Zf = !1
  }, cg = function () {
    $f && m.clearTimeout($f);
    $f = Zf ? m.setTimeout(bg, 1E4) : 0
  };
  var dg = function (a) {
    return a.google_lt_queue = a.google_lt_queue || []
  }, fg = function () {
    var a = eg;
    if (!a.google_ltobserver) {
      var b = new a.PerformanceObserver(function (b) {
        var c = dg(a);
        x(b.getEntries(), function (a) {
          return c.push(a)
        })
      });
      b.observe({entryTypes: ["longtask"]});
      a.google_ltobserver = b
    }
  }, gg = function () {
    var a = window, b = a.google_ltobserver;
    b && (b.disconnect(), delete a.google_ltobserver);
    a.google_lt_queue && delete a.google_lt_queue
  };
  var hg = function (a) {
    return a._google_rum_ns_ = a._google_rum_ns_ || {}
  }, ig = function (a, b) {
    var c = rf(b);
    c && (a = {
      label: a,
      type: 9,
      value: c
    }, b = b.google_js_reporting_queue = b.google_js_reporting_queue || [], 1024 > b.length && b.push(a))
  };
  var jg = function (a, b) {
    b = void 0 === b ? [] : b;
    this.l = a;
    this.j = b
  };
  jg.prototype.getMessageId = function () {
    return this.l
  };
  jg.prototype.getMessageArgs = function () {
    return this.j
  };
  var kg = function (a, b, c, d, e) {
    this.l = new Date;
    this.A = d;
    this.u = c;
    this.m = a;
    this.o = b;
    this.j = e
  };
  h = kg.prototype;
  h.getSlot = function () {
    return this.A
  };
  h.getService = function () {
    return this.u
  };
  h.getLevel = function () {
    return this.m
  };
  h.getTimestamp = function () {
    return this.l
  };
  h.getMessage = function () {
    return this.o
  };
  h.getReference = function () {
    return this.j
  };
  var lg = ["Debug", "Info", "Warning", "Error", "Fatal"];
  kg.prototype.toString = function () {
    var a = this.l.toTimeString() + ": " + lg[this.m] + ": " + this.o;
    this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
    return a
  };
  var mg = function () {
    return m.googletag || (m.googletag = {})
  }, ng = function (a, b) {
    var c = mg();
    c.hasOwnProperty(a) || (c[a] = b)
  }, og = function (a, b) {
    a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
  }, pg = function (a, b) {
    a.addEventListener ? a.addEventListener("beforeunload", b, !1) : a.attachEvent && a.attachEvent("onbeforeunload", b)
  };
  var qg = function () {
    this.j = []
  };
  h = qg.prototype;
  h.getAllEvents = function () {
    return this.j
  };
  h.getEventsByService = function (a) {
    return Ka(this.j, function (b) {
      return b.getService() === a
    })
  };
  h.getEventsBySlot = function (a) {
    return Ka(this.j, function (b) {
      return b.getSlot() === a
    })
  };
  h.getEventsByLevel = function (a) {
    return Ka(this.j, function (b) {
      return b.getLevel() >= a
    })
  };
  h.log = function (a, b, c, d, e) {
    a = new kg(a, b, void 0 === c ? null : c, void 0 === d ? null : d, void 0 === e ? null : e);
    this.j.push(a);
    return a
  };
  h.info = function (a, b, c, d) {
    return this.log(1, a, b, c, d)
  };
  h.G = function (a, b, c, d) {
    return this.log(2, a, b, c, d)
  };
  h.error = function (a, b, c, d) {
    return this.log(3, a, b, c, d)
  };
  var rg = function () {
    var a = mg();
    return a.debug_log || (a.debug_log = new qg)
  };
  ng("getEventLog", rg);
  var C = function (a) {
      return function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
        return new jg(a, [].concat(qa(c)))
      }
    }, sg = function (a) {
      return "[" + La(a, function (a) {
          return r(a) ? "'" + a + "'" : u(a) ? sg(a) : String(a)
        }).join(", ") + "]"
    }, D = function (a, b) {
      b = sg(b);
      b = b.substring(1, b.length - 1);
      return new jg(96, [a, b])
    }, tg = C(1), ug = C(2), vg = C(3), wg = C(4), xg = C(5), yg = C(6), zg = C(8), Ag = C(9), Bg = C(10), Cg = C(12),
    Dg = C(13), Eg = C(14), Fg = C(16), Gg = C(17), Hg = C(19), Ig = C(20), Jg = C(21), Kg = C(22), Lg = C(23),
    Mg = C(26), Ng = C(27), Og = C(28), Pg = C(30), Qg = C(31), Rg = C(34), Sg = C(35), Tg = C(36), Ug = C(37),
    Vg = C(38), Wg = C(39), Xg = C(40), Yg = C(42), Zg = C(43), $g = C(44), ah = C(45), bh = C(46), ch = C(47),
    dh = C(48), eh = C(49), fh = C(50), gh = C(52), hh = C(57), ih = C(58), jh = C(59), kh = C(60), lh = C(61),
    mh = C(62), nh = C(63), oh = C(64), ph = C(65), qh = C(66), rh = C(67), sh = C(68), th = C(69), uh = C(70),
    vh = C(71), wh = C(72), xh = C(74), yh = C(75), zh = C(77), Ah = C(78), Bh = C(79), Ch = C(80), Dh = C(82),
    Eh = C(84), Fh = C(85), Gh = C(87), Hh = C(88), Ih = C(90), Jh = C(92), Kh = C(93), Lh = C(94), Mh = C(95),
    Nh = C(97), Oh = C(98), Ph = C(99), Qh = C(100), Rh = C(101), Sh = C(102), Th = C(103), Uh = C(104);
  var Vh = {
    Zd: "loader_loaded_instant",
    $d: "loader_loaded_instant_nw",
    he: "impl_loaded_instant",
    ee: "page_load_time",
    fe: "page_load_time_nw",
    ge: "page_unload_time",
    Xd: "fpt"
  };
  var Wh = {
    1: "pagead2.googlesyndication.com",
    2: "pubads.g.doubleclick.net",
    3: "securepubads.g.doubleclick.net",
    173: "pubads.g.doubleclick.net",
    174: "securepubads.g.doubleclick.net",
    7: .02,
    10: 0,
    13: 1500,
    16: 0,
    17: 0,
    20: 0,
    23: .001,
    24: 200,
    27: .01,
    28: 0,
    29: .01,
    33: "pagead2.googlesyndication.com",
    34: !0,
    37: .01,
    38: .001,
    47: 1E-4,
    53: "",
    54: 0,
    58: 1,
    60: 0,
    63: 0,
    65: .01,
    66: 1E-5,
    67: 0,
    68: 0,
    69: .99,
    71: 0,
    73: 0,
    162: 0,
    163: "",
    76: "",
    77: .001,
    78: 0,
    81: .001,
    83: 1E-4,
    85: 0,
    89: 1,
    90: 0,
    91: 0,
    96: 1,
    97: 0,
    99: .01,
    101: 0,
    103: .01,
    104: "/pagead/js/rum.js",
    105: .01,
    106: "1-0-15",
    107: "1-0-14",
    110: 0,
    113: 1,
    114: 0,
    115: .01,
    116: .001,
    117: 1,
    118: .95,
    123: 0,
    120: .95,
    124: .95,
    121: 0,
    169: 0,
    122: 0,
    125: .01,
    127: .001,
    129: .01,
    131: "21061443",
    156: .01,
    133: 0,
    134: .01,
    135: .001,
    137: .001,
    167: 1,
    138: "",
    143: .001,
    168: 1E-4,
    144: .001,
    187: 0,
    141: 1,
    157: .01,
    158: .001,
    150: ".google.com.hk",
    153: .001,
    179: .01,
    193: .05,
    170: !1,
    184: 1,
    183: .01,
    196: .001,
    197: 0,
    152: [],
    171: .01,
    172: null,
    175: "21061441,21061442,21061443,21061444,21061445,21061446,21061447,21061461,21061452,21061453,21061454,21061455",
    178: .01,
    182: 1E3,
    188: 0,
    189: .01,
    191: 1512514930353,
    192: 21510956201635,
    190: 0xa781a7496a3,
    194: .001,
    180: null,
    186: .01,
    195: .001,
    198: 0
  };
  Wh[6] = wd(window);
  Wh[49] = (new Date).getTime();
  Wh[36] = /^true$/.test("false");
  Wh[46] = /^true$/.test("false");
  Wh[148] = /^true$/.test("false");
  var E = function () {
    this.j = Pb(Wh)
  };
  E.prototype.get = function (a) {
    return this.j[a]
  };
  E.prototype.set = function (a, b) {
    this.j[a] = b
  };
  ta(E);
  var Xh = ["21060621", "21060622", "21060833", "21060713"], Yh = E.w().j, Zh = mg(), $h = Zh._vars_, ai;
  for (ai in $h)Yh[ai] = $h[ai];
  Zh._vars_ = Yh;
  var bi;
  var ci = E.w().get(180), di = !1;
  di = void 0 === di ? !0 : di;
  if (ci && ci.dfltBktExt && ci.lrsExt) {
    var ei = new Yf;
    ei.l = ci.dfltBktExt;
    ei.dfltBktExt = ei.l;
    ei.j = ci.lrsExt;
    ei.lrsExt = ei.j;
    di && (ei.m = !0);
    bi = ei
  } else bi = null;
  var of = bi || new Yf, fi = [], gi = !1, F = E.w(), hi = F.get(170), ii = z.ma(Ke()),
    ji = !(!m.JSON || !m.JSON.parse) && (!hc || Ac(10)) && (!gc || Ac(12)), ki = {}, G = function (a, b, c) {
      c = void 0 === c ? {} : c;
      var d = new li(a);
      c.R && mi(d, c.R);
      c.T || ni(d, b, c.ga, c.Ua);
      c.md && x(ud(a), function (a) {
        ki[a] = !0
      });
      fi.push(d);
      return d
    }, oi = function () {
      return Ka(pf(), function (a) {
        return ki[a]
      })
    }, pi = function (a, b) {
      return b ? a / b : 0
    }, li = function (a) {
      var b = of;
      this.j = a;
      this.o = b;
      this.m = "exp" + (this[xa] || (this[xa] = ++ya));
      this.A = 0;
      this.l = this.o.j[this.m] = "";
      this.u = !1
    }, ni = function (a, b, c, d) {
      c = void 0 === c ? [] : c;
      d = void 0 === d ? !1 : d;
      if (!a.u && z.and.apply(z, [].concat(qa(c))).call()) {
        var e = ud(a.j), f = b;
        if (.5 < b && 1 >= b && a.l) f = .5 < b && 1 >= b ? 1 - b : 0; else if (hi) {
          a.A = 0;
          a.u = !0;
          return
        }
        c = a.o;
        var g = f * e.length;
        f = a.m;
        var k;
        if (k = !c.m) k = f ? c.j.hasOwnProperty(f) && "" == c.j[f] : !0;
        k && (k = (k = lf()) ? (k = k.match(new RegExp("\\b(" + e.join("|") + ")\\b"))) ? k[0] : null : null, (e = k ? k : qd(e, g)) && mf(c, e, f));
        a.A = b;
        d && b && (!qi(a) || .5 < b && 1 >= b) && !gi && !a.is(ri.B) && (d = sd(a.j), gi = a.is(ri.v) || Math.random() * b * d < F.get(37));
        a.u = !0
      }
    }, mi = function (a, b) {
      Nb(a.j, b) && (a.l = b)
    };
  li.prototype.is = function (a) {
    return Nb(this.j, a) && a == si(this)
  };
  var H = function (a, b) {
      !hi && Nb(a.j, b) && mf(a.o, b, a.m)
    }, qi = function (a) {
      return !nf(a.o, a.m)
    }, si = function (a) {
      var b = nf(a.o, a.m);
      if (b) a = b; else {
        if (b = a.l == a.l) b = a.A, b = .5 < b && 1 >= b;
        a = b ? a.l : ""
      }
      return a
    }, ti = {}, ui = {}, vi = {}, wi = {}, xi = {}, yi = {}, zi = {}, Ai = {B: "108809097", v: "108809098"},
    Bi = {B: "108809124", v: "108809125"}, Ci = {B: "108809132", v: "108809133"}, $i = {B: "108809141", v: "108809140"},
    ri = {B: "21061505", v: "21061506"}, aj = {B: "108809147", v: "108809148"}, bj = {B: "108809159", v: "108809160"},
    cj = {B: "21060015", v: "21060016"}, dj = {B: "21060017", v: "21060018"}, ej = {B: "21060019", v: "21060020"},
    fj = {B: "21060013", v: "21060014"}, gj = {B: "21060064", v: "21060065"}, hj = {B: "21060092", v: "21060093"},
    ij = {B: "21060096", v: "21060097"}, jj = {B: "21060668", Za: "21060669", $a: "21060670"},
    kj = {B: "21060674", Za: "21060675", $a: "21060676"},
    lj = {Jc: "21060671", Kc: "21060672", Lc: "21060673", pc: "21060677", qc: "21060678", rc: "21060679"},
    mj = {B: "21060088", v: "21060089", oc: "21060094", xb: "21060095"}, nj = {B: "21060132", v: "21060133"},
    oj = {B: "21060116", xc: "21060117", zc: "21060118"}, pj = {Hc: "21060155", Va: "21060157"},
    qj = {B: "21060167", v: "21060168"}, rj = {wc: "1337"}, sj = {B: "21061507", $: "21061508"},
    tj = {B: "21060610", $: "21060611"}, uj = {B: "21061497", $: "21061498"}, vj = {B: "21060334", v: "21060335"},
    wj = {B: "21060340", Mc: "21060341", Nc: "21060342", Oc: "21060343", Pc: "21060344"},
    xj = {B: "21060327", v: "21060328"}, yj = {B: "21060331", v: "21060332"}, zj = {B: "21060329", v: "21060330"},
    Aj = {B: "21060325", v: "21060326"}, Bj = {B: "21060301", v: "21060302"}, Cj = {B: "21060361", v: "21060362"},
    Dj = {B: "21060377", v: "21060378"}, Ej = {B: "21060380", v: "21060381"}, Fj = {B: "21060363", v: "21060364"},
    Gj = {B: "21060213", $: "21060214", za: "21060215", Xa: "21060216"},
    Hj = {B: "21060217", $: "21060218", za: "21060219", Xa: "21060220"},
    Ij = {B: "21061161", nc: "21061259", za: "21061162", Ya: "21061260"}, Jj = {B: "21060494", v: "21060495"},
    Kj = {B: "21060355", v: "21060356"}, Lj = {B: "21060511", sc: "21060514", Dc: "21060515"},
    Mj = {B: "21060544", uc: "21060545", tc: "21060617"},
    Nj = {B: "21060552", Wa: "21060553", cb: "21060554", bb: "21060555"},
    Oj = {B: "21060556", Wa: "21060557", cb: "21060558", bb: "21060559"},
    Pj = {B: "21060722", Pa: "21060723", Qa: "21060724"}, Qj = {B: "21060740", Pa: "21060741", Qa: "21060742"},
    Rj = {B: "21060903", v: "21060904"}, Sj = {B: "21060905", v: "21060906"}, Tj = {B: "21061383", v: "21061384"},
    Uj = {B: "21061108", v: "21061109"}, Vj = {B: "21060697", v: "21060698"},
    Wj = {B: "21060636", mc: "21060637", ne: "21060638", kc: "21060639"}, Xj = {B: "21061070", v: "21061071"},
    Yj = {B: "21060961", v: "21060962"}, Zj = (ti["1"] = "21061261", ti["2"] = "21061262", ti),
    ak = (ui["1"] = "21061263", ui["2"] = "21061264", ui), bk = (vi["1"] = "21061265", vi["2"] = "21061266", vi),
    ck = (wi["1"] = "21061267", wi["2"] = "21061268", wi), dk = (xi["1"] = "21061269", xi["2"] = "21061270", xi),
    ek = (yi["1"] = "21061271", yi["2"] = "21061272", yi), fk = (zi["1"] = "21061273", zi["2"] = "21061274", zi),
    gk = {B: "21060621", Cb: "21060622", Db: "21060833", Bb: "21060713", me: "21061149"},
    hk = {B: "108809055", ab: "108809056", yc: "108809057"}, ik = {B: "21061241", v: "21061242"},
    jk = {B: "21061300", v: "21061301"}, kk = {B: "21061354", v: "21061355"}, lk = {B: "21061545", v: "21061546"},
    mk = {B: "21061456", v: "21061457"}, nk = {B: "21061458", Va: "21061459"},
    ok = {B: "21061479", Ab: "21061480", Cc: "21061503"}, pk = {B: "21061499", v: "21061500"},
    qk = {B: "21061483", v: "21061484"}, rk = {B: "21061501", v: "21061502"}, sk = {B: "21061521", v: "21061522"},
    tk = {B: "21061525", v: "21061526"}, uk = {B: "21061547", v: "21061548"}, vk = {},
    wk = (vk[Lj.sc] = 800, vk[Lj.Dc] = 1E4, vk), xk = function (a, b, c) {
      b = void 0 === b ? !1 : b;
      if (!hi || (void 0 === c ? 0 : c)) {
        for (c = 0; c < fi.length; ++c) {
          var d = fi[c];
          if (null != Qb(d.j)[a]) {
            b && !qi(d) || H(d, a);
            return
          }
        }
        mf(of, a)
      }
    }, yk = z.ma(!!m.IntersectionObserver), zk = z.ma(!!m.Uint8Array),
    Ak = z.ma(-1 != (window.navigator && window.navigator.userAgent || "").indexOf("Opera Mini"));
  G({ie: "21060596", je: "21060597", ke: "21061128", le: "21061129"}, F.get(27));
  var Bk = G(Ai, F.get(54), {ga: [z.ma(F.get(46))]}), Ck = G(Bi, F.get(63)), Dk = G(Ci, F.get(65)),
    Ek = G(Wj, F.get(144));
  G({B: "953563515", ce: "953563516", be: "953563517"}, F.get(187));
  var Fk = G($i, F.get(69), {ga: [z.ma(!!mg().fifWin)], R: $i.v});
  G(ri, F.get(37), {Ua: !0, R: ri.v});
  var Gk = G(aj, F.get(71), {R: aj.v}), Hk = G(dj, F.get(77), {T: !0}), Ik = G(ej, F.get(77), {T: !0}),
    Jk = G(bj, F.get(78));
  G({$: "21060375", Ud: "21060374"}, 0, {T: !0, md: !0});
  var Kk = G(cj, 0, {T: !0, R: cj.v}), Lk = G(fj, F.get(85), {R: fj.v}),
    Mk = G(gj, F.get(89), {ga: [z.qb(Ak), z.qb(z.and(Ub, Ke))], Ua: !0, R: gj.v}),
    Nk = G(hj, F.get(96), {ga: [Ub, Ke], Ua: !0, R: hj.v}), Ok = G(ij, F.get(97), {ga: [Ak], Ua: !0, R: ij.v}),
    Pk = G(jj, F.get(90), {ga: [z.qb(z.ma(!md(m.top)))]}), Qk = G(kj, F.get(91), {ga: [z.ma(!md(m.top))]}),
    Rk = G(lj, 0, {T: !0}), Sk;
  if (Sk = tc) Sk = 0 <= Eb(Re, 9);
  if (Sk || Ec && Ac(601)) Pk.is(jj.B) ? H(Rk, lj.Jc) : Pk.is(jj.Za) ? H(Rk, lj.Kc) : Pk.is(jj.$a) ? H(Rk, lj.Lc) : Qk.is(kj.B) ? H(Rk, lj.pc) : Qk.is(kj.Za) ? H(Rk, lj.qc) : Qk.is(kj.$a) && H(Rk, lj.rc);
  var Tk = G(mj, F.get(81));
  Tk.is(mj.xb) && (gi = !0);
  var Uk = G(nj, F.get(99)), Vk = G(oj, F.get(101)), Wk = G(pj, F.get(105)), Xk = G(qj, F.get(103)),
    Yk = G(sj, F.get(134), {R: sj.$}), Zk = G(tj, pi(F.get(135), F.get(134)), {
      ga: [function () {
        return Yk.is(sj.$)
      }]
    }), $k = G(uj, pi(F.get(196), F.get(134)), {
      ga: [function () {
        return Yk.is(sj.$)
      }, function () {
        return Ad(m.requestAnimationFrame)
      }]
    }), al = G(vj, F.get(113), {
      ga: [function () {
        return !!mg().enableSampledInstrumentation
      }]
    });
  al.is(vj.v) && (gi = !0);
  G(rj, 0).is(rj.wc) && (F.set(104, "/pagead/js/rum_debug.js"), gi = !0);
  var bl = G(wj, 0, {T: !0}), cl = G(xj, F.get(114), {R: xj.v}), dl = G(yj, F.get(114), {T: !0});
  if (hb(window.location.href))switch (si(cl)) {
    case xj.B:
      H(dl, yj.B);
      break;
    case xj.v:
      H(dl, yj.v)
  }
  var el = G(zj, F.get(115), {T: !0, R: zj.v}), fl = G(Bj, F.get(117), {R: Bj.v}), gl = G(Aj, F.get(116)),
    hl = G(Cj, F.get(118)), il = G(Dj, F.get(123), {R: Dj.v}), jl = G(Ej, 0, {T: !0}),
    kl = G(Fj, F.get(120), {R: Fj.v}), ll = G(Gj, 0, {T: !0, R: Gj.$}), ml = G(Hj, 0, {T: !0, R: Hj.$}),
    nl = G(Ij, F.get(169), {T: !0, R: Ij.za}), ol = G(Jj, F.get(124), {T: !0, R: Jj.v}),
    pl = G(Kj, F.get(125), {R: Kj.v}), ql = G(Lj, F.get(127), {ga: [yk]}), rl = G(Mj, 0, {T: !0}),
    sl = G(Nj, F.get(129)), tl = G(Oj, 0, {T: !0}), ul = G(Pj, F.get(133)), vl = G(Qj, 0), wl = G(Rj, F.get(156)),
    xl = G(Sj, 0), yl = G(Tj, F.get(183), {R: Tj.v});
  G({B: "21060923", se: "21060924", ue: "21060925", Yd: "21060926", Vd: "21060927", oe: "21060928"}, 0, {T: !0});
  var zl = G(Uj, 0, {T: !0}), Al = G(Vj, pi(F.get(143), F.get(134)), {
    ga: [function () {
      return Yk.is(sj.$)
    }, yk, zk, function () {
      return 0 != Vf(document)
    }], R: Vj.v
  });
  G({B: "21061175", v: "21061176"}, pi(F.get(168), F.get(143)), {
    ga: [function () {
      return Al.is(Vj.v)
    }]
  });
  var Bl = F.get(157);
  if (si(ul) || si(wl) || si(ql)) Bl = 0;
  var Cl = G(Xj, Bl, {R: Xj.v}), Dl = G(Yj, F.get(158)), El = G(Zj, F.get(153), {R: Zj["2"]}), Fl = G(ak, 0, {T: !0}),
    Gl = G(bk, 0, {T: !0}), Hl = G(ck, 0, {T: !0}), Il = G(dk, 0, {T: !0}), Jl = G(ek, 0, {T: !0}),
    Kl = G(fk, 0, {T: !0}), Ll = G(gk, 0, {T: !0}), Ml = G(hk, 0, {T: !0}), Nl = G(ik, F.get(171));
  G(jk, F.get(179), {R: jk.v});
  var Ol = G(kk, 0, {T: !0}), Pl = G(lk, pi(F.get(197), F.get(134)), {
      ga: [function () {
        return Yk.is(sj.$)
      }, function () {
        return !!window.google_ltobserver
      }]
    }), Ql = G(mk, F.get(188), {R: mk.v}), Rl = G(nk, F.get(189)), Sl = G(ok, 0, {T: !0}),
    Tl = G(qk, F.get(193), {R: qk.v}), Ul = G(tk, 0, {T: !0}), Vl = G(pk, F.get(186), {R: pk.v}),
    Wl = G(rk, F.get(194), {R: rk.v}), Xl = G(sk, F.get(195), {T: !0}), Yl = G(uk, F.get(198), {
      ga: [function () {
        return !(!m.navigator || !m.navigator.deviceMemory)
      }], R: uk.v
    });
  var $l = function () {
    var a = Zl || Yk.is(sj.$);
    m.google_measure_js_timing = a || m.google_measure_js_timing;
    Df.call(this, a ? 1 : 0, m)
  };
  ha($l, Df);
  var Zl = Zk.is(tj.$) || Tk.is(mj.v) || Tk.is(mj.xb) || Tk.is(mj.oc);
  ta($l);
  var bm = function (a, b) {
    var c = a.getPassbackPageUrl();
    if ("" != c)return c;
    a = b[I(a)];
    return null != a ? am(a) : null
  }, dm = function () {
    return cm().replace(/[\W_]/g, function (a) {
      return "&#" + a.charCodeAt() + ";"
    })
  }, em = function (a) {
    var b = a;
    "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
    return b
  }, fm = /\+/g, gm = function (a) {
    a = void 0 === a ? !1 : a;
    var b = E.w().get(6);
    return a || b ? "https://" + E.w().get(3) : "http://" + E.w().get(2)
  }, im = function () {
    var a = hl.is(Cj.v);
    return (hm(window, a) ? "http" : "https") + "://" + E.w().get(33)
  }, jm = function () {
    var a = void 0 === a ? navigator.userAgent : a;
    var b = a.indexOf("MSIE ");
    return -1 == b ? 0 : parseFloat(a.substring(b + 5, a.indexOf(";", b)))
  }, km = function () {
    var a = void 0 === a ? Fb : a;
    return null != a && -1 != a.indexOf("MSIE ") && -1 == a.indexOf("IEMobile")
  }, lm = z.ta(function () {
    return -1 != Fb.indexOf("Opera Mini")
  }), nm = function (a, b) {
    var c = 0, d = [];
    a && (d.push(a.getAdUnitPath()), d.push(mm(a)), d.push(a.getSlotElementId()));
    if (b) {
      a = [];
      for (var e = 0; b && 25 > e; b = b.parentNode, ++e)a.push(9 !== b.nodeType && b.id || "");
      (b = a.join()) && d.push(b)
    }
    0 < d.length && (c = vd(d.join(":")));
    return c.toString()
  }, om = function (a, b) {
    if (null == b)return a;
    b = a.indexOf("google_preview=", a.lastIndexOf("?"));
    var c = a.indexOf("&", b);
    -1 == c && (c = a.length - 1, --b);
    return a.substring(0, b) + a.substring(c + 1, a.length)
  }, pm = z.ta(function () {
    return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
  }), qm = z.ta(function () {
    return Ad(m.XMLHttpRequest) && Ad(XMLHttpRequest.prototype.open) && Ad(XMLHttpRequest.prototype.send)
  }), rm = z.ta(function () {
    return Dc && Ad(m.fetch) && Ad(m.TextDecoder) && !!m.Promise
  }), hm = function (a, b) {
    var c = !1;
    E.w().get(46) ? c = !0 : null != b && (c = !b);
    return c && !wd(a, b)
  }, sm = z.ta(function () {
    return !!xd(m.location.href)
  }), tm = Math.floor(Math.random() * Math.pow(2, 53)), um = function () {
    return Yk.is(sj.$) || Xk.is(qj.v) || al.is(vj.v) || $l.w().j
  }, vm = function (a) {
    return 0 === a || t(a) && isFinite(a) && 0 == a % 1 && 0 < a
  }, wm = function () {
    return E.w().get(6) ? "https:" : "http:"
  }, xm = function (a) {
    var b = a.split("/");
    return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
  }, ym = function (a) {
    var b = [];
    b = La(a, function (a) {
      return xm(a.getAdUnitPath())
    });
    bb(b);
    return b
  }, zm = function (a) {
    return "complete" == a.readyState
  }, Am = Me(function (a) {
    return a && a.src ? /^https?:\/\/www\.googletagservices\.com\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
  }, function (a, b) {
    return a + "\x0B" + (b[0] && b[0].src)
  });
  ng("getVersion", function () {
    return "175"
  });
  var K = function (a, b, c) {
    b = void 0 === b ? Bm : b;
    c = void 0 === c ? -1 : c;
    if (0 > c || 1 < c) c = E.w().get(23);
    this.o = Math.random();
    this.m = this.o < c;
    this.l = a;
    this.j = b + "/pagead/gen_204?id=" + encodeURIComponent(a)
  }, Cm = [], Dm = void 0;
  Dm = void 0 === Dm ? !1 : Dm;
  var Em = E.w().get(6), Bm = Dm || Em ? "https://" + E.w().get(33) : "http://" + E.w().get(33),
    M = function (a, b, c) {
      b && b.match(/^\w+$/) && c && (a.j += "&" + b + "=" + encodeURIComponent(c))
    }, N = function (a, b) {
      b = void 0 === b ? null : b;
      var c = a.m;
      b && 0 <= b && (c = Math.random() < b);
      (c || sm()) && a.l && a.j && ve(window, a.j, void 0)
    }, Fm = function (a, b) {
      0 < b.length && (3 >= b.length ? M(a, "nw_id", b.join(",")) : (b = ab(b, 0, 3), b.push("__extra__"), M(a, "nw_id", b.join(","))))
    }, O = function (a, b) {
      b = void 0 === b ? null : b;
      var c = void 0 === c ? document : c;
      M(a, "vrg", "175");
      b ? (Fm(a, Gm(b)), M(a, "nslots", Hm(b).toString())) : (Fm(a, ym(Cm)), M(a, "nslots", Cm.length.toString()));
      b = pf();
      0 < b.length && M(a, "eid", b.join());
      M(a, "pub_url", c.URL)
    }, Im = function (a) {
      var b = 1;
      b = void 0 === b ? Infinity : b;
      var c = La(Cm, function (a) {
        return a.getEscapedQemQueryId()
      });
      Ya(c, function (a) {
        return !a
      });
      bb(c);
      c.length = Math.min(b, c.length);
      M(a, "qqids", c.join(","))
    };
  var Jm = E.w().get(38), Km = function (a, b) {
    a = {methodId: a};
    b.name && (a.name = b.name);
    b.message && (a.message = b.message.substring(0, 512));
    b.fileName && (a.fileName = b.fileName);
    b.lineNumber && (a.lineNumber = b.lineNumber);
    b.stack && (a.stack = Qf(b.stack, ""));
    return a
  }, Mm = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    Lm(a, b);
    if (!c)throw b;
  }, Nm = function (a, b) {
    Lm(a, b);
    window.console && window.console.error && window.console.error(b)
  }, Lm = function (a, b, c) {
    c = void 0 === c ? Jm : c;
    if (!b.isReported)try {
      b.isReported = !0;
      var d = Km(a, b), e = new K("gpt_exception");
      try {
        O(e)
      } catch (f) {
      }
      A(d, function (a, b) {
        return M(e, b, a)
      });
      N(e, c)
    } catch (f) {
    }
  }, P = function (a, b, c) {
    return function () {
      var d = !1, e = null, f = c || Mm, g = $l.w();
      try {
        var k = g && Zl;
        k && (e = g.start(a.toString(), 3));
        var l = b.apply(this, arguments);
        d = !0;
        k && Gf(g, e)
      } catch (n) {
        d ? Lm(110, n) : l = f.call(this, a, n), Ef(e)
      }
      return l
    }
  }, Om = function () {
    cg()
  }, Pm = function (a, b) {
    var c = !b || Zk.is(tj.$);
    var d = Pl.is(lk.v);
    var e = new $c;
    b = new bd;
    Wc(e, 1, tm, 0);
    var f = pf().join();
    Wc(e, 5, f, "");
    Wc(e, 2, 1, 0);
    Yc(b, 1, e);
    e = new ad;
    Wc(e, 7, c, !1);
    Wc(e, 8, c, !1);
    Wc(e, 9, c, !1);
    Wc(e, 11, d, !1);
    Wc(e, 10, !0, !1);
    Yc(b, 2, e);
    if (c = $k.is(uj.$)) a._google_rum_ns_ ? (c = hg(a), c = !(!c.raf || !c.ric)) : c = !1, c = !c;
    c && (d = hg(a), d.raf = d.raf || [], d.ric = d.ric || [], c = d.raf, d = d.ric, ag(a, c, d), og(a, Om), a.setTimeout(bg, 6E4));
    a.google_rum_config = Xc(b)
  }, Qm = {
    self: 1,
    "same-origin-ancestor": 2,
    "same-origin-descendant": 3,
    "same-origin": 4,
    "cross-origin-ancestor": 5,
    "cross-origin-descendant": 6,
    "cross-origin-unreachable": 7,
    "multiple-contexts": 8
  }, Rm = function (a) {
    a = a.containerId;
    return !!a && 0 == a.lastIndexOf("google_ads_iframe_", 0)
  }, Sm = function () {
    var a = 0, b = dg(window), c = La(b, function (b) {
      var c = Na(b.attribution, Rm) ? 1 : 0;
      a += c;
      return Math.round(b.startTime) + "." + Math.round(b.duration) + "." + c + "." + (Qm[b.name] || 0)
    }).join("~"), d = new K("gpt_long_task");
    M(d, "c", "" + tm);
    M(d, "t", "" + Math.round(rf()));
    M(d, "gc", "" + a);
    M(d, "oc", "" + (b.length - a));
    M(d, "se", c);
    O(d);
    Im(d);
    N(d, 1)
  }, Tm = function () {
    if (Ol.is(kk.v)) {
      var a = 0, b = function () {
        return Sm()
      }, c = window.setInterval(function () {
        12 <= ++a && (window.clearInterval(c), me(window, "beforeunload", b), gg());
        Sm();
        dg(window).length = 0
      }, 5E3);
      le(window, "beforeunload", b)
    }
  }, Um = function (a) {
    var b = E.w().get(1), c = E.w().get(104);
    b = wm() + "//" + b + c;
    nd(a.document, b)
  }, Vm = function () {
    var a = window, b = Yk.is(sj.$);
    Pm(a, b);
    b || zm(a.document) ? Um(a) : og(a, function () {
      return Um(a)
    })
  };
  var Wm = function () {
    this.l = this.j = 0
  };
  Wm.prototype.push = function (a) {
    for (var b = rg(), c = 0; c < arguments.length; ++c)try {
      wa(arguments[c]) && (arguments[c](), this.j++)
    } catch (d) {
      this.l++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Pg(String(d.message)))
    }
    b.info(Qg(String(this.j), String(this.l)));
    return this.j
  };
  Wm.prototype.push = P(76, Wm.prototype.push);
  var Xm = function () {
    var a = mg().cmd;
    if (!a || u(a)) {
      var b = mg().cmd = new Wm;
      a && 0 < a.length && b.push.apply(b, a)
    }
  };
  Xm = P(77, Xm);
  (function () {
    function a(a) {
      this.t = {};
      this.tick = function (a, b, c) {
        this.t[a] = [void 0 != c ? c : (new Date).getTime(), b];
        if (void 0 == c)try {
          window.console.timeStamp("CSI/" + a)
        } catch (l) {
        }
      };
      this.tick("start", null, a)
    }

    var b;
    if (window.performance)var c = (b = window.performance.timing) && b.responseStart;
    var d = 0 < c ? new a(c) : new a;
    window.GPT_jstiming = {Timer: a, load: d};
    b && (b = b.navigationStart, 0 < b && c >= b && (window.GPT_jstiming.srt = c - b));
    try {
      c = null, window.chrome && window.chrome.csi && (c = Math.floor(window.chrome.csi().pageT)), null == c && window.gtbExternal && (c = window.gtbExternal.pageT()), null == c && window.external && (c = window.external.pageT), c && (window.GPT_jstiming.pt = c)
    } catch (e) {
    }
  })();
  if (window.GPT_jstiming) {
    window.GPT_jstiming.Eb = {};
    window.GPT_jstiming.Dd = 1;
    var Ym = function (a, b, c) {
      var d = a.t[b], e = a.t.start;
      if (d && (e || c))return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
    };
    window.GPT_jstiming.getTick = Ym;
    var Zm = function (a, b, c) {
      var d = "";
      window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt);
      window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt);
      try {
        window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
      } catch (B) {
      }
      var e = window.chrome;
      if (e && (e = e.loadTimes)) {
        e().wasFetchedViaSpdy && (d += "&p=s");
        if (e().wasNpnNegotiated) {
          d += "&npn=1";
          var f = e().npnNegotiatedProtocol;
          f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
        }
        e().wasAlternateProtocolAvailable && (d += "&apa=1")
      }
      var g = a.t, k = g.start;
      e = [];
      f = [];
      for (var l in g)if ("start" != l && 0 != l.indexOf("_")) {
        var n = g[l][1];
        n ? g[n] && f.push(l + "." + Ym(a, l, g[n][0])) : k && e.push(l + "." + Ym(a, l))
      }
      if (b)for (var q in b)d += "&" + q + "=" + b[q];
      (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
      return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
    };
    window.GPT_jstiming.getReportUri = Zm;
    var $m = function (a, b, c) {
      a = Zm(a, b, c);
      if (!a)return "";
      b = new Image;
      var d = window.GPT_jstiming.Dd++;
      window.GPT_jstiming.Eb[d] = b;
      b.onload = b.onerror = function () {
        window.GPT_jstiming && delete window.GPT_jstiming.Eb[d]
      };
      b.src = a;
      b = null;
      return a
    };
    window.GPT_jstiming.report = function (a, b, c) {
      var d = document.visibilityState, e = "visibilitychange";
      d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
      if ("prerender" == d) {
        var f = !1, g = function () {
          if (!f) {
            b ? b.prerender = "1" : b = {prerender: "1"};
            if ("prerender" == (document.visibilityState || document.webkitVisibilityState))var d = !1; else $m(a, b, c), d = !0;
            d && (f = !0, document.removeEventListener(e, g, !1))
          }
        };
        document.addEventListener(e, g, !1);
        return ""
      }
      return $m(a, b, c)
    }
  }
  ;
  var an = function (a, b, c) {
    a && null !== b && b != b.top && (b = b.top);
    try {
      return (void 0 === c ? 0 : c) ? (new Fd(b.innerWidth, b.innerHeight)).round() : Qd(b || window).round()
    } catch (d) {
      return new Fd(-12245933, -12245933)
    }
  };
  var bn = function () {
    this.l = this.l;
    this.m = this.m
  };
  bn.prototype.l = !1;
  bn.prototype.u = function () {
    if (this.m)for (; this.m.length;)this.m.shift()()
  };
  var en = function (a) {
    var b = [];
    cn(new dn, a, b);
    return b.join("")
  }, dn = function () {
  }, cn = function (a, b, c) {
    if (null == b) c.push("null"); else {
      if ("object" == typeof b) {
        if (u(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++)c.push(e), cn(a, d[f], c), e = ",";
          c.push("]");
          return
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf(); else {
          c.push("{");
          e = "";
          for (d in b)Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), fn(d, c), c.push(":"), cn(a, f, c), e = ","));
          c.push("}");
          return
        }
      }
      switch (typeof b) {
        case "string":
          fn(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  }, gn = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  }, hn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g, fn = function (a, b) {
    b.push('"', a.replace(hn, function (a) {
      var b = gn[a];
      b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), gn[a] = b);
      return b
    }), '"')
  };
  var jn = function (a, b) {
    this.l = a;
    this.j = b
  };
  var kn = !1, ln = "", mn = function (a) {
    a = a.match(/[\d]+/g);
    if (!a)return "";
    a.length = 3;
    return a.join(".")
  };
  (function () {
    if (navigator.plugins && navigator.plugins.length) {
      var a = navigator.plugins["Shockwave Flash"];
      if (a && (kn = !0, a.description)) {
        ln = mn(a.description);
        return
      }
      if (navigator.plugins["Shockwave Flash 2.0"]) {
        kn = !0;
        ln = "2.0.0.11";
        return
      }
    }
    if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], kn = !(!a || !a.enabledPlugin))) {
      ln = mn(a.enabledPlugin.description);
      return
    }
    try {
      var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
      kn = !0;
      ln = mn(b.GetVariable("$version"));
      return
    } catch (c) {
    }
    try {
      b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
      kn = !0;
      ln = "6.0.21";
      return
    } catch (c) {
    }
    try {
      b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), kn = !0, ln = mn(b.GetVariable("$version"))
    } catch (c) {
    }
  })();
  var nn = kn, on = ln;
  var pn = {},
    qn = (pn[1] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/backdrop/resources/content_binder.js", pn);
  var rn = function (a) {
    this.j = a;
    this.l = Bb()
  }, sn = function (a) {
    var b = {};
    x(a, function (a) {
      b[a.j] = a.l
    });
    return b
  };
  var tn = function (a, b, c, d, e, f) {
    bn.call(this);
    this.C = a;
    this.status = 1;
    this.o = b;
    this.D = c;
    this.L = d;
    this.Ja = !!e;
    this.A = Math.random();
    this.F = {};
    this.j = null;
    this.H = w(this.K, this);
    this.I = f
  };
  Da(tn, bn);
  tn.prototype.K = function (a) {
    if (a.origin === this.D && (this.Ja || a.source == this.o)) {
      var b = null;
      try {
        b = JSON.parse(a.data)
      } catch (c) {
      }
      if (v(b) && (a = b.i, b.c === this.C && a != this.A && (2 !== this.status && (this.status = 2, un(this), this.j && (this.j(), this.j = null)), a = b.s, b = b.p, r(a) && (r(b) || v(b)) && this.F.hasOwnProperty(a)))) this.F[a](b)
    }
  };
  var un = function (a) {
    var b = {};
    b.c = a.C;
    b.i = a.A;
    a.I && (b.e = a.I);
    a.o.postMessage(en(b), a.D)
  };
  tn.prototype.J = function () {
    if (1 === this.status) {
      try {
        this.o.postMessage && un(this)
      } catch (a) {
      }
      window.setTimeout(w(this.J, this), 50)
    }
  };
  tn.prototype.connect = function (a) {
    a && (this.j = a);
    le(window, "message", this.H);
    this.L && this.J()
  };
  var vn = function (a, b, c) {
    a.F[b] = c
  }, wn = function (a, b, c) {
    var d = {};
    d.c = a.C;
    d.i = a.A;
    d.s = b;
    d.p = c;
    a.o.postMessage(en(d), a.D)
  };
  tn.prototype.u = function () {
    this.status = 3;
    me(window, "message", this.H);
    tn.$b.u.call(this)
  };
  var xn = function (a, b, c, d, e, f) {
    this.m = Zd(a);
    this.l = Zd(b);
    this.o = c;
    this.j = Zd(d);
    this.u = e;
    this.A = f
  }, zn = function (a, b, c) {
    var d = window, e = d.screenX || d.screenLeft || 0, f = d.screenY || d.screenTop || 0;
    d = new Yd(f, e + (d.outerWidth || document.documentElement.clientWidth || 0), f + (d.outerHeight || document.documentElement.clientHeight || 0), e);
    var g = ge(a);
    e = ie(je, a);
    var k = new $d(g.W, g.y, e.width, e.height);
    e = ae(k);
    f = String(de(a, "zIndex"));
    if (b) {
      g = new $d(0, 0, Infinity, Infinity);
      c = new $d(0, 0, Infinity, Infinity);
      b = Nd(a);
      var l = b.j.body, n = b.j.documentElement, q = !0;
      a = fe(a);
      for (var B = 0; a; a = fe(a), B++) {
        var J = ce(a, "overflow") || (a.currentStyle ? a.currentStyle.overflow : null) || a.style && a.style.overflow;
        if (hc && 0 == a.clientWidth || lc && 0 == a.clientHeight && a == l || a == l || a == n) q = !1; else {
          var L = ge(a);
          L.W += a.clientLeft;
          L.y += a.clientTop;
          L = new $d(L.W, L.y, a.clientWidth, a.clientHeight);
          "visible" != J && c && (c = be(c, L));
          "hidden" == J ? q && g && 100 > B && (g = be(g, L)) : q = !1
        }
      }
      g && (l = window, a = l.document, l = Sf(l), a = new Fd(Math.max(l.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), Math.max(l.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight))), g = yn(g, new $d(0, 0, a.width, a.height)));
      c && (a = Rd(b.j), b = Qd(Sd(b.j) || window), c = yn(new $d(c.left, c.top, c.width, c.height), new $d(a.scrollLeft, a.scrollTop, b.width, b.height)));
      a = g;
      b = c
    } else {
      b = new Yd(0, Infinity, Infinity, 0);
      l = Nd(a);
      q = l.j.body;
      B = l.j.documentElement;
      for (n = Rd(l.j); a = fe(a);)hc && 0 == a.clientWidth || lc && 0 == a.clientHeight && a == q || a == q || a == B || "visible" == de(a, "overflow") || (J = ge(a), L = new Ed(a.clientLeft, a.clientTop), J.W += L.W, J.y += L.y, b.top = Math.max(b.top, J.y), b.right = Math.min(b.right, J.W + a.clientWidth), b.bottom = Math.min(b.bottom, J.y + a.clientHeight), b.left = Math.max(b.left, J.W));
      a = n.scrollLeft;
      n = n.scrollTop;
      b.left = Math.max(b.left, a);
      b.top = Math.max(b.top, n);
      l = Qd(Sd(l.j) || window);
      b.right = Math.min(b.right, a + l.width);
      b.bottom = Math.min(b.bottom, n + l.height);
      b = (a = 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null) ? new $d(a.left, a.top, a.right - a.left, a.bottom - a.top) : null;
      c ? (a = c.boundingClientRect, a = new $d(g.W - a.left, g.y - a.top, c.rootBounds.width, c.rootBounds.height)) : a = b
    }
    b = b ? be(k, b) : null;
    g = c = 0;
    b && (new Fd(b.width, b.height)).Qc() && (c = b.width / k.width, g = b.height / k.height);
    b = new Yd(0, 0, 0, 0);
    if (l = a) (k = be(k, a)) ? (n = ae(a), q = ae(k), l = q.right != n.left && n.right != q.left, n = q.bottom != n.top && n.bottom != q.top, l = (0 != k.width || l) && (0 != k.height || n)) : l = !1;
    l && (b = new Yd(Math.max(e.top - a.top, 0), Math.max(a.left + a.width - e.right, 0), Math.max(a.top + a.height - e.bottom, 0), Math.max(e.left - a.left, 0)));
    return new xn(d, e, f, b, c, g)
  }, yn = function (a, b) {
    return (a = be(a, b)) && 0 < a.width && 0 < a.height ? a : null
  }, An = function (a) {
    return en({
      windowCoords_t: a.m.top,
      windowCoords_r: a.m.right,
      windowCoords_b: a.m.bottom,
      windowCoords_l: a.m.left,
      frameCoords_t: a.l.top,
      frameCoords_r: a.l.right,
      frameCoords_b: a.l.bottom,
      frameCoords_l: a.l.left,
      styleZIndex: a.o,
      allowedExpansion_t: a.j.top,
      allowedExpansion_r: a.j.right,
      allowedExpansion_b: a.j.bottom,
      allowedExpansion_l: a.j.left,
      xInView: a.u,
      yInView: a.A
    })
  };
  var Bn = function (a) {
    this.m = a;
    this.u = null;
    this.J = this.status = 0;
    this.l = null;
    this.oa = "sfchannel" + a
  };
  var Cn = function (a) {
    this.j = a
  };
  var Dn = function (a, b) {
    this.Ra = a;
    this.Sa = b;
    this.l = this.j = !1
  };
  var En = function (a, b, c, d, e, f, g, k) {
    k = void 0 === k ? [] : k;
    this.u = a;
    this.l = b;
    this.m = c;
    this.permissions = d;
    this.o = e;
    this.A = f;
    this.Ja = g;
    this.hostpageLibraryTokens = k;
    this.j = ""
  };
  var Fn = function (a) {
    this.j = a
  }, Gn = function (a, b) {
    this.j = a;
    this.version = b
  };
  Da(Gn, Fn);
  Gn.prototype.m = function () {
    return en({uid: this.j, version: this.version})
  };
  var Hn = function (a, b, c) {
    this.j = a;
    this.o = b;
    this.l = c
  };
  Da(Hn, Fn);
  Hn.prototype.m = function () {
    return en({uid: this.j, initialWidth: this.o, initialHeight: this.l})
  };
  var In = function (a, b) {
    this.j = a;
    this.l = b
  };
  Da(In, Fn);
  In.prototype.m = function () {
    return en({uid: this.j, description: this.l})
  };
  var Jn = function (a, b, c) {
    this.j = a;
    this.l = b;
    this.push = c
  };
  Da(Jn, Fn);
  Jn.prototype.m = function () {
    return en({
      uid: this.j,
      expand_t: this.l.top,
      expand_r: this.l.right,
      expand_b: this.l.bottom,
      expand_l: this.l.left,
      push: this.push
    })
  };
  var Kn = function (a) {
    this.j = a
  };
  Da(Kn, Fn);
  Kn.prototype.m = function () {
    return en({uid: this.j})
  };
  var Ln = function (a, b) {
    this.j = a;
    this.o = b
  };
  Da(Ln, Fn);
  Ln.prototype.m = function () {
    var a = {uid: this.j, newGeometry: An(this.o)};
    return en(a)
  };
  var Mn = function (a, b, c, d, e) {
    Ln.call(this, a, c);
    this.u = b;
    this.l = d;
    this.push = e
  };
  Da(Mn, Ln);
  Mn.prototype.m = function () {
    var a = {
      uid: this.j,
      success: this.u,
      newGeometry: An(this.o),
      expand_t: this.l.top,
      expand_r: this.l.right,
      expand_b: this.l.bottom,
      expand_l: this.l.left,
      push: this.push
    };
    return en(a)
  };
  var Nn = function (a, b, c, d) {
    this.j = a;
    this.width = b;
    this.height = c;
    this.l = void 0 === d ? "" : d
  };
  Da(Nn, Fn);
  Nn.prototype.m = function () {
    var a = {uid: this.j, width: this.width, height: this.height};
    this.l && (a.sentinel = this.l);
    return en(a)
  };
  var On = function (a, b, c, d) {
    var e = c;
    e && (e = "?" + e);
    b = "//tpc.googlesyndication.com/safeframe/" + b + "/html/container.html" + e;
    e = a;
    for (var f = 0; e != e.parent;)f++, e = e.parent;
    (e = f) && (b += (c ? "&" : "?") + "n=" + e);
    return (d || wd(a) ? "https:" : "http:") + b
  };
  var Pn = function () {
    this.j = []
  }, Rn = function (a, b, c, d, e) {
    a.j.push(new Qn(b, c, d, e))
  }, Sn = function (a, b, c, d) {
    Rn(a, b, c, d + "px", void 0)
  }, Qn = function (a, b, c, d) {
    this.m = a;
    this.j = (this.l = !!(p(d) && a.style && a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
    this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
    this.u = this.l ? a.style.getPropertyPriority(this.j) : void 0;
    this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
  };
  var Tn = 1, Un = !1, Xn = function (a) {
    Bn.call(this, Tn++);
    this.D = a.nd;
    this.H = 1 == a.size;
    this.V = new Dn(a.permissions.Ra && !this.H, a.permissions.Sa && !this.H);
    this.A = a.rb;
    this.aa = a.Fd || [];
    this.ja = a.hostpageLibraryTokens || [];
    var b = window.location;
    this.ha = "file:" == b.protocol ? "*" : b.protocol + "//" + b.host;
    this.ia = !!a.Ja;
    this.fa = (!1 === a.dc ? "https:" : window.location.protocol) + "//tpc.googlesyndication.com";
    this.X = !!a.Wc;
    this.na = !!a.Sd;
    this.pa = a.sandbox || !1;
    this.o = new Pn;
    Vn(this, a.rb, a.size);
    this.I = a.Yc || !1;
    this.u = this.ba = zn(a.rb, this.I);
    this.N = a.Gd || "1-0-15";
    this.ca = a.Sc || "";
    Wn(this, a);
    this.U = null;
    this.K = w(this.O, this);
    this.L = -1;
    this.C = 0;
    this.F = null;
    !a.kd || "function" !== typeof IntersectionObserver || pc || mc || (this.F = new IntersectionObserver(w(function (a) {
      this.U = a[a.length - 1];
      this.O()
    }, this)));
    this.l = new tn(this.oa, this.j.contentWindow, this.fa, !1);
    vn(this.l, "init_done", w(this.ld, this));
    vn(this.l, "register_done", w(this.Cd, this));
    vn(this.l, "report_error", w(this.Ed, this));
    vn(this.l, "expand_request", w(this.Xc, this));
    vn(this.l, "collapse_request", w(this.Tc, this));
    vn(this.l, "creative_geometry_update", w(this.da, this));
    this.l.connect(w(this.zd, this));
    var c = w(function () {
      this.j && (this.j.name = "", a.Rb && a.Rb(), me(this.j, "load", c))
    }, this);
    le(this.j, "load", c)
  };
  Da(Xn, Bn);
  var Vn = function (a, b, c) {
    a.H ? (b.style.width = he("100%"), b.style.height = he("auto")) : (b.style.width = he(c.width), b.style.height = he(c.height))
  }, Wn = function (a, b) {
    var c = Nd(a.A);
    var d = b.content;
    d = a.N + ";" + d.length + ";" + d;
    var e = new En(a.m, a.ha, a.ba, a.V, new Cn({
      shared: {
        sf_ver: a.N,
        ck_on: navigator.cookieEnabled ? 1 : 0,
        flash_ver: nn ? on : "0"
      }
    }), a.H, a.ia, a.ja);
    var f = {};
    f.uid = e.u;
    f.hostPeerName = e.l;
    f.initialGeometry = An(e.m);
    var g = e.permissions;
    g = en({expandByOverlay: g.Ra, expandByPush: g.Sa, readCookie: g.j, writeCookie: g.l});
    f = (f.permissions = g, f.metadata = en(e.o.j), f.reportCreativeGeometry = e.A, f.isDifferentSourceWindow = e.Ja, f.goog_safeframe_hlt = sn(e.hostpageLibraryTokens), f);
    e.j && (f.sentinel = e.j);
    e = en(f);
    d += e;
    e = !1 === b.dc;
    if (a.X && b.size instanceof Fd) {
      f = b.Kb;
      g = b.size;
      var k = Nd(a.A);
      Un || (nd(k.j, (a.na ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"), Un = !0);
      k = Sd(k.j);
      k.google_eas_queue = k.google_eas_queue || [];
      k.google_eas_queue.push({
        a: f,
        b: k.location.protocol + "//tpc.googlesyndication.com",
        c: g.width,
        d: g.height,
        e: "sf-gdn-exp-" + a.m,
        f: void 0,
        g: void 0,
        h: void 0,
        i: void 0
      })
    }
    g = b.size;
    a.H ? (g = f = 0, k = "min-width:100%") : (f = g.width, g = g.height, k = "");
    var l = b.Kb;
    b = b.gd || "";
    var n = Sd(c.j);
    e = On(n, a.N, a.ca, e);
    var q = [];
    a.X && (n = xd(n.location.href), q.push([0 < n.length ? "google_debug" + (n ? "=" + n : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.m, "&p=", encodeURIComponent(m.document.location.protocol), "//", encodeURIComponent(m.document.location.host)].join("")));
    a.aa.length && q.push("eid=" + a.aa.join());
    q.length && (e += "#" + q.join("&"));
    b = {
      id: l,
      title: b,
      name: d,
      src: e,
      scrolling: "no",
      marginWidth: "0",
      marginHeight: "0",
      width: String(f),
      height: String(g),
      "data-is-safeframe": "true"
    };
    d = {
      frameborder: 0,
      style: "border:0;vertical-align:bottom;" + (k || ""),
      allowTransparency: "true",
      src: hc && !Ac(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank"
    };
    b && Sb(d, b);
    c = c.l("IFRAME", d);
    a.pa && (c.sandbox = yd());
    a.A.appendChild(c);
    a.j = c
  };
  h = Xn.prototype;
  h.zd = function () {
    this.F && this.j ? this.F.observe(this.j) : (le(window, "resize", this.K), le(window, "scroll", this.K))
  };
  h.ld = function (a) {
    try {
      if (0 != this.status)throw Error("Container already initialized");
      if (!r(a))throw Error("Could not parse serialized message");
      var b = JSON.parse(a);
      if (!(v(b) && t(b.uid) && r(b.version)))throw Error("Cannot parse JSON message");
      var c = new Gn(b.uid, b.version);
      if (this.m != c.j || this.N != c.version)throw Error("Wrong source container");
      this.status = 1
    } catch (d) {
      this.D.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
    }
  };
  h.Cd = function (a) {
    try {
      if (1 != this.status)throw Error("Container not initialized");
      if (!r(a))throw Error("Could not parse serialized message");
      var b = JSON.parse(a);
      if (!(v(b) && t(b.uid) && t(b.initialWidth) && t(b.initialHeight)))throw Error("Cannot parse JSON message");
      if (this.m != (new Hn(b.uid, b.initialWidth, b.initialHeight)).j)throw Error("Wrong source container");
      this.status = 2
    } catch (c) {
      this.D.error("Invalid REGISTER_DONE message. Reason: " + c.message)
    }
  };
  h.Ed = function (a) {
    try {
      if (!r(a))throw Error("Could not parse serialized message");
      var b = JSON.parse(a);
      if (!(v(b) && t(b.uid) && r(b.description)))throw Error("Cannot parse JSON message");
      var c = new In(b.uid, b.description);
      if (this.m != c.j)throw Error("Wrong source container");
      this.D.info("Ext reported an error. Description: " + c.l)
    } catch (d) {
      this.D.error("Invalid REPORT_ERROR message. Reason: " + d.message)
    }
  };
  h.Xc = function (a) {
    try {
      if (2 != this.status)throw Error("Container is not registered");
      if (0 != this.J)throw Error("Container is not collapsed");
      if (!r(a))throw Error("Could not parse serialized message");
      var b = JSON.parse(a);
      if (!(v(b) && t(b.uid) && t(b.expand_t) && t(b.expand_r) && t(b.expand_b) && t(b.expand_l) && ra(b.push)))throw Error("Cannot parse JSON message");
      var c = new Jn(b.uid, new Yd(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push);
      if (this.m != c.j)throw Error("Wrong source container");
      if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right))throw Error("Invalid expansion amounts");
      var d;
      if (d = c.push && this.V.Sa || !c.push && this.V.Ra) {
        var e = c.l, f = c.push, g = this.u = zn(this.j, this.I);
        if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
          if (!f)for (var k = this.j.parentNode; k && k.style; k = k.parentNode)Rn(this.o, k, "overflowX", "visible", "important"), Rn(this.o, k, "overflowY", "visible", "important");
          var l = this.u.l, n = this.u.l, q = ae(new $d(0, 0, l.right - l.left, n.bottom - n.top));
          v(e) ? (q.top -= e.top, q.right += e.right, q.bottom += e.bottom, q.left -= e.left) : (q.top -= e, q.right += Number(void 0), q.bottom += Number(void 0), q.left -= Number(void 0));
          Rn(this.o, this.A, "position", "relative");
          Rn(this.o, this.j, "position", "absolute");
          f ? (Sn(this.o, this.A, "width", q.right - q.left), Sn(this.o, this.A, "height", q.bottom - q.top)) : Rn(this.o, this.j, "zIndex", "10000");
          Sn(this.o, this.j, "width", q.right - q.left);
          Sn(this.o, this.j, "height", q.bottom - q.top);
          Sn(this.o, this.j, "left", q.left);
          Sn(this.o, this.j, "top", q.top);
          this.J = 2;
          this.u = zn(this.j, this.I);
          d = !0
        } else d = !1
      }
      a = d;
      wn(this.l, "expand_response", (new Mn(this.m, a, this.u, c.l, c.push)).m());
      if (!a)throw Error("Viewport or document body not large enough to expand into.");
    } catch (B) {
      this.D.error("Invalid EXPAND_REQUEST message. Reason: " + B.message)
    }
  };
  h.Tc = function (a) {
    try {
      if (2 != this.status)throw Error("Container is not registered");
      if (2 != this.J)throw Error("Container is not expanded");
      if (!r(a))throw Error("Could not parse serialized message");
      var b = JSON.parse(a);
      if (!v(b) || !t(b.uid))throw Error("Cannot parse JSON message");
      if (this.m != (new Kn(b.uid)).j)throw Error("Wrong source container");
      Yn(this);
      wn(this.l, "collapse_response", (new Ln(this.m, this.u)).m())
    } catch (c) {
      this.D.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
    }
  };
  var Yn = function (a) {
    for (var b = a.o, c = b.j.length - 1; 0 <= c; c--) {
      var d = b.j[c];
      d.l ? (d.m.style.removeProperty(d.j), d.m.style.setProperty(d.j, String(d.o), d.u)) : d.m.style[d.j] = d.o
    }
    b.j.length = 0;
    a.J = 0;
    a.j && (a.u = zn(a.j, a.I))
  };
  Xn.prototype.O = function () {
    if (1 == this.status || 2 == this.status)switch (this.C) {
      case 0:
        Zn(this);
        this.L = window.setTimeout(w(this.Z, this), 1E3);
        this.C = 1;
        break;
      case 1:
        this.C = 2;
        break;
      case 2:
        this.C = 2
    }
  };
  Xn.prototype.da = function (a) {
    try {
      if (!r(a))throw Error("Could not parse serialized message");
      var b = JSON.parse(a);
      if (!(v(b) && t(b.uid) && t(b.width) && t(b.height)) || b.sentinel && !r(b.sentinel))throw Error("Cannot parse JSON message");
      var c = new Nn(b.uid, b.width, b.height, b.sentinel);
      if (this.m != c.j)throw Error("Wrong source container");
      var d = String(c.height);
      this.H ? d != this.j.height && (this.j.height = d, this.O()) : this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
    } catch (e) {
      this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + e.message)
    }
  };
  Xn.prototype.Z = function () {
    if (1 == this.status || 2 == this.status)switch (this.C) {
      case 1:
        this.C = 0;
        break;
      case 2:
        Zn(this), this.L = window.setTimeout(w(this.Z, this), 1E3), this.C = 1
    }
  };
  var Zn = function (a) {
    a.u = zn(a.j, a.I, a.U);
    a.U = null;
    wn(a.l, "geometry_update", (new Ln(a.m, a.u)).m())
  }, $n = function (a) {
    if (100 != a.status) {
      2 == a.J && Yn(a);
      window.clearTimeout(a.L);
      a.L = -1;
      a.C = 3;
      if (a.l) {
        var b = a.l;
        b.l || (b.l = !0, b.u());
        a.l = null
      }
      a.F && a.j ? a.F.unobserve(a.j) : (me(window, "resize", a.K), me(window, "scroll", a.K));
      if (b = a.j) {
        a:{
          b = a.j;
          var c;
          if (Dd && !(hc && Ac("9") && !Ac("10") && m.SVGElement && b instanceof m.SVGElement) && (c = b.parentElement)) {
            b = c;
            break a
          }
          c = b.parentNode;
          b = v(c) && 1 == c.nodeType ? c : null
        }
        b = a.A == b
      }
      b && a.A.removeChild(a.j);
      a.j = null;
      a.A = null;
      a.F && (a.F.disconnect(), a.F = null);
      a.status = 100
    }
  };
  var ao = function (a) {
    Sc(this, a)
  };
  Da(ao, Qc);
  var bo = function (a) {
    if (!a.performance || !a.performance.getEntriesByType)return null;
    var b = a.performance.getEntriesByType("resource");
    a = b.length;
    b = Ma(b, function (a, b) {
      return a + (b.transferSize || 0)
    });
    return {yd: a, Rd: b}
  };
  var co = function (a, b, c, d, e, f, g, k) {
    this.advertiserId = a;
    this.campaignId = b;
    this.creativeId = c;
    this.labelIds = d;
    this.lineItemId = e;
    this.sourceAgnosticCreativeId = f;
    this.sourceAgnosticLineItemId = g;
    this.isBackfill = k
  };
  var eo = "", fo = void 0, go = function () {
    return eo ? eo : eo = (Wk.is(pj.Va) ? E.w().get(106) : E.w().get(107)) || "1-0-15"
  }, ho = function (a) {
    if (null == fo) {
      var b = [], c = Wk.is(pj.Hc), d = gl.is(Aj.v), e = E.w().get(106);
      c && b.push("v=" + e);
      d && b.push("host=" + a);
      fo = b.join("&")
    }
    return fo
  }, io = function (a) {
    var b = rg(), c = {};
    if (!a || !v(a))return null;
    var d = !1;
    A(a, function (e, f) {
      switch (f) {
        case "allowOverlayExpansion":
          ra(e) ? c.allowOverlayExpansion = a.allowOverlayExpansion : (b.error(Rh("allowOverlayExpansion", a.allowOverlayExpansion)), d = !0);
          break;
        case "allowPushExpansion":
          ra(e) ? c.allowPushExpansion = a.allowPushExpansion : (b.error(Rh("allowPushExpansion", a.allowPushExpansion)), d = !0);
          break;
        case "sandbox":
          !0 === e ? c.sandbox = a.sandbox : (b.error(Rh("sandbox", a.sandbox)), d = !0);
          break;
        default:
          b.G(Qh(f))
      }
    });
    return d ? null : c
  }, jo = function (a) {
    for (var b = {}, c = 0; c < a.length; ++c)A(a[c], function (a, c) {
      b[c] = a
    });
    return b
  };
  var ko = {qe: "slotRenderEnded", ae: "impressionViewable", re: "slotVisibilityChanged", pe: "slotOnload"},
    lo = function (a, b, c) {
      this.slot = a;
      this.isEmpty = b;
      this.serviceName = c;
      this.slotContentChanged = !0;
      this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
      this.isBackfill = !1
    }, mo = function (a) {
      this.slot = a;
      this.serviceName = "publisher_ads"
    }, no = function (a, b) {
      this.slot = a;
      this.serviceName = "publisher_ads";
      this.inViewPercentage = b
    }, oo = function (a) {
      this.slot = a;
      this.serviceName = "publisher_ads"
    };
  var po = function () {
    this.pa = [];
    this.aa = {};
    this.l = !1;
    this.C = {};
    this.log = rg();
    this.log.info(Sg(this.Y()), this)
  };
  h = po.prototype;
  h.Y = function () {
    return "unknown"
  };
  h.getVersion = function () {
    return "unversioned"
  };
  h.getSlots = function () {
    return this.pa
  };
  h.bd = function () {
    return this.aa
  };
  h.enable = function () {
    this.l ? this.log.info(Vg(), this) : (this.kb(), this.l = !0)
  };
  h.tb = function (a) {
    this.pa.push(a);
    this.aa[I(a)] = a;
    this.log.info(Xg(this.Y(), a.getAdUnitPath()), this, a)
  };
  h.destroySlots = function (a) {
    var b = this.getSlots(), c = Ka(b, function (b) {
      return Ra(a, b)
    });
    x(c, function (a) {
      Wa(b, a)
    });
    return c
  };
  h.addEventListener = function (a, b) {
    if (!wa(b) || !r(a))return a = D("Service.addEventListener", [a, b]), this.log.G(a, this), this;
    if (!Nb(ko, a))return this.log.G(Kh(a), this), this;
    u(this.C[a]) || (this.C[a] = []);
    this.C[a].push(b);
    b = new K("gpt_callback_usage");
    M(b, "type", a);
    O(b);
    N(b);
    return this
  };
  var qo = function (a, b, c) {
    b = a.C[b];
    u(b) && x(b, function (b) {
      try {
        b(c)
      } catch (g) {
        b = g && r(g.name) ? g.name : null;
        var d = g && r(g.message) ? g.message : null, f = "";
        b && d ? f = b + ": " + d : b ? f = b : d && (f = d);
        a.log.G(Jh(f), a)
      }
    })
  };
  po.prototype.ya = function (a, b) {
    Lm(a, b);
    this.log.error(Wg(String(b)), this)
  };
  var ro = po.prototype;
  ro.addEventListener = P(86, ro.addEventListener);
  ro.enable = P(87, ro.enable, ro.ya);
  ro.getSlotIdMap = ro.bd;
  ro.getName = ro.Y;
  var so = {start_ad_fetch_period: !0, start_ad_render_period: !0},
    to = {ad_fetch_period: "start_ad_fetch_period", ad_render_period: "start_ad_render_period"}, $o = function () {
      this.l = !1;
      m.GPT_jstiming && m.GPT_jstiming.load && ("http:" == m.location.protocol || "https:" == m.location.protocol) && gi && (this.l = !0);
      this.C = this.u = this.ha = null;
      this.U = this.N = this.L = !1;
      this.I = window.GPT_jstiming.getTick(window.GPT_jstiming.load, "start", 0);
      this.o = window.GPT_jstiming.load;
      this.o.name = "global";
      if (!window.performance || !window.performance.timing) {
        var a = E.w().get(49);
        this.I = a;
        this.o.tick("start", void 0, a)
      }
      this.A = {};
      this.J = 500;
      this.da = [];
      this.K = {};
      this.O = !1;
      this.ja = this.fa = 0;
      this.F = !1;
      this.D = {};
      this.H = {};
      this.ia = this.X = this.ba = this.aa = this.Z = this.V = this.ca = 0
    }, ap = null, cp = function () {
      return ap || bp()
    }, bp = function () {
      var a = window, b = new $o;
      ap = b;
      if (!b.l)return b;
      dp(b);
      ep(b);
      mg().fifWin && zm(document) ? a.performance && a.performance.timing && fp(b, a.performance.timing.loadEventStart) : og(a, function () {
        fp(b)
      });
      pg(a, function () {
        b.m("page_unload_time");
        gp(b, !0)
      });
      hp(b, "v175");
      return b
    }, ep = function (a) {
      A(Vh, function (a) {
        this.A[a] = !1
      }, a)
    }, ip = function (a, b, c, d) {
      a.o || (a.o = new m.GPT_jstiming.Timer(a.I), a.o.name = "global");
      var e = "_" == b[0];
      if (c || e || window.performance && window.performance.timing) a.o.tick(b, c, d), e || (a.N = !0);
      a.O || gp(a)
    }, jp = function (a, b, c, d, e) {
      c ? a.C || (a.C = new m.GPT_jstiming.Timer(a.I), a.C.name = "ad_events_psbk") : a.u || (a.u = new m.GPT_jstiming.Timer(a.I), a.u.name = "ad_events");
      var f = "_" == b.charAt(0);
      c ? (a.C.tick(b, d, e), f || (a.U = !0)) : (a.u.tick(b, d, e), f || (a.L = !0))
    };
  $o.prototype.m = function (a, b) {
    this.l && (ip(this, a, void 0, b), this.A[a] = !0)
  };
  $o.prototype.m = P(104, $o.prototype.m);
  $o.prototype.j = function (a, b, c) {
    a = a + "." + b;
    if (b = "_" + a) ip(this, b, void 0, 0), ip(this, a, b, c)
  };
  $o.prototype.j = P(104, $o.prototype.j);
  var kp = function (a, b, c, d, e) {
    b = b + "." + c;
    c = "_" + b;
    jp(a, c, d, void 0, 0);
    jp(a, b, d, c, e)
  }, lp = function (a, b, c, d) {
    if (a.l && !(1E3 < c)) {
      var e = to[b], f = e;
      e && (f += "." + c);
      c = b + ("." + c);
      f && a.K.hasOwnProperty("_" + f) && (f = "_" + f, jp(a, f, d || !1, void 0, a.K[f] + a.I), delete a.K[f]);
      jp(a, c, d || !1, f);
      d = d ? a.C : a.u;
      so.hasOwnProperty(b) && (b = window.GPT_jstiming.getTick(d, c), a.K["_" + c] = b)
    }
  }, mp = function (a) {
    a.l && (a.A.loader_loaded_instant && !a.A.loader_loaded_instant_nw && a.m("loader_loaded_instant_nw", a.fa), a.A.page_load_time && !a.A.page_load_time_nw && a.m("page_load_time_nw", a.ja))
  }, dp = function (a) {
    window.setTimeout(P(105, w(function () {
      var a = gp(this);
      if (this.l) {
        var c = !1;
        this.u && this.L && (np(this, this.D), op(this.u, this.D), this.u = null, this.L = !1, this.D = {}, c = !0);
        this.C && this.U && (np(this, this.H), op(this.C, this.H), this.C = null, this.U = !1, this.H = {}, c = !0)
      } else c = !1;
      if (a || c) this.J = 32E3 < 2 * this.J ? 32E3 : 2 * this.J;
      dp(this)
    }, a)), a.J)
  }, gp = function (a, b) {
    if (!a.l)return !1;
    var c = !1;
    if (a.o && (b || null != a.o && a.N && (a.A.page_load_time || zm(document)) && a.A.loader_loaded_instant)) {
      b ? hp(a, "page_unload") : hp(a, "page_load");
      c = {};
      if (!a.O || b) c.count_of_slots = a.ca, c.count_of_requested_slots = a.Z, c.count_of_rendered_slots = a.aa, c.count_of_requests = a.ba, c.count_of_refreshes_called = a.X, c.count_of_passback = a.V;
      np(a, c);
      op(a.o, c);
      a.O = !0;
      a.N = !1;
      a.o = null;
      c = !0
    }
    return c
  }, op = function (a, b) {
    m.GPT_jstiming.report(a, b, "https:" == m.location.protocol ? "https://www.google.com/csi" : "http://csi.gstatic.com/csi")
  }, np = function (a, b) {
    b.vrg = "175";
    b.pl_id = tm;
    a = a.da.join();
    var c = pf().join();
    b.e = a.length && c.length ? a + "," + c : a + c
  }, hp = function (a, b) {
    0 < b.length && Ua(a.da, b)
  }, pp = function (a, b) {
    null === a.ha && ((a.ha = b) ? hp(a, "sra") : hp(a, "non-sra"))
  }, qp = function (a, b, c, d) {
    a.l && (d ? (a.H[b] = a.H[b] || [], a.H[b].push(c)) : (a.D[b] = a.D[b] || [], a.D[b].push(c)))
  }, rp = function (a, b) {
    if (a.l)switch (b) {
      case "count_of_slots":
        ++a.ca;
        break;
      case "count_of_requested_slots":
        ++a.Z;
        break;
      case "count_of_rendered_slots":
        ++a.aa;
        break;
      case "count_of_requests":
        ++a.ba;
        break;
      case "count_of_refreshes_called":
        ++a.X;
        break;
      case "count_of_passback":
        ++a.V
    }
  }, fp = function (a, b) {
    if (a.l) {
      a.m("page_load_time", b);
      var c = sp();
      c && ip(a, "fpt", void 0, c);
      a.F ? a.m("page_load_time_nw", b) : a.ja = b || (new Date).getTime()
    }
  }, tp = function (a, b, c, d) {
    lp(a, "start_ad_fetch_period", b, c);
    Hf($l.w(), (3).toString(), b);
    d && A(d, function (d, f) {
      qp(a, f, b + "_" + d, c)
    });
    rp(a, "count_of_requests")
  }, vp = function (a, b, c, d) {
    lp(a, "ad_fetch_period", b, d);
    Hf($l.w(), (4).toString(), b);
    up(a, c, "ad." + b)
  }, wp = function (a, b, c, d) {
    if (a.l)try {
      var e = c && c.contentWindow;
      if (e) {
        var f = bo(e);
        f && (kp(a, "nres", b, d, f.yd), kp(a, "tts", b, d, f.Rd))
      }
    } catch (g) {
    }
  }, up = function (a, b, c) {
    if (a.l) {
      var d = mg().fifWin || window;
      d.performance && d.performance.getEntriesByName && (b = d.performance.getEntriesByName(b)[0]) && (a.j("rt_st", c, b.startTime), a.j("rt_fs", c, b.fetchStart), 0 < b.responseStart && (a.j("rt_dns", c, b.domainLookupEnd - b.domainLookupStart), a.j("rt_tcp", c, b.connectEnd - b.connectStart), b.secureConnectionStart && a.j("rt_ssl", c, b.connectEnd - b.secureConnectionStart), a.j("rt_rtt", c, b.responseStart - b.fetchStart), a.j("rt_tft", c, b.responseEnd - b.responseStart), void 0 !== b.transferSize && (a.j("rt_ts", c, b.transferSize), a.j("rt_eb", c, b.encodedBodySize), a.j("rt_db", c, b.decodedBodySize))), a.j("rt_duration", c, b.duration))
    }
  }, sp = function () {
    var a = window.performance && window.performance.timing;
    if (!a)return 0;
    if (window.chrome && window.chrome.loadTimes) {
      var b = window.chrome.loadTimes(), c = 1E3 * b.firstPaintTime;
      a && a.navigationStart && b.startLoadTime && (c -= 1E3 * b.startLoadTime - a.navigationStart);
      return c
    }
    return a && a.msFirstPaint ? a.msFirstPaint : 0
  };
  var xp = function () {
    this.j = {};
    this.o = !1;
    this.m = rg();
    this.u = this.m.info(zg());
    og(window, w(xp.prototype.l, this))
  };
  xp.prototype.add = function (a) {
    this.j[a.Y()] = a
  };
  var yp = function (a, b) {
    var c = null;
    b in a.j && (c = a.j[b]);
    return c
  }, Ap = function () {
    var a = zp();
    A(a.j, function (a, c) {
      a.enable();
      hp(cp(), c)
    })
  };
  xp.prototype.destroySlots = function (a) {
    A(this.j, function (b) {
      return b.destroySlots(a)
    })
  };
  xp.prototype.l = function () {
    this.o = !0;
    this.m.info(tg(), null, null, this.u)
  };
  xp.prototype.l = P(92, xp.prototype.l);
  var zp = function () {
    var a = mg();
    return a.service_manager_instance || (a.service_manager_instance = new xp)
  }, Bp = function () {
    Ap()
  };
  Bp = P(91, Bp);
  ng("enableServices", Bp);
  var Cp = function (a, b) {
    this.l = a;
    this.j = b
  };
  Cp.prototype.getWidth = function () {
    return this.l
  };
  Cp.prototype.getHeight = function () {
    return this.j
  };
  var Dp = function (a) {
    var b = u(a) && 2 == a.length && vm(a[0]) && vm(a[1]);
    a = r(a) && "fluid" == a;
    return b || a
  }, Ep = function (a) {
    return u(a) ? new Cp(a[0], a[1]) : a
  }, Gp = function (a) {
    var b = [];
    if (Fp(a)) b.push(Ep(a)); else if (u(a))for (var c = 0; c < a.length; ++c) {
      var d = a[c];
      Fp(d) && b.push(Ep(d));
      a:{
        var e = ["fluid"];
        if (va(d) && va(e) && d.length == e.length) {
          for (var f = d.length, g = fb, k = 0; k < f; k++)if (!g(d[k], e[k])) {
            d = !1;
            break a
          }
          d = !0
        } else d = !1
      }
      d && (ni(el, E.w().get(115), []), d = el.is(zj.v), e = fl.is(Bj.v), (d || e) && b.push("fluid"))
    }
    return b
  }, Fp = function (a) {
    var b = u(a) && 1 < a.length && t(a[0]) && t(a[1]);
    a = r(a) && "fluid" == a;
    return b || a
  };
  var Hp = function (a) {
    this.j = a
  }, Ip = function (a, b) {
    a = Qa(a.j, function (a) {
      a = a.l;
      return a.width <= b.width && a.height <= b.height
    });
    return null == a ? null : a.j
  }, Jp = function (a) {
    if (!u(a) || 2 != a.length)throw Error("Each mapping entry has to be an array of size 2");
    var b = a[0];
    if (!Dp(b) || "fluid" == b)throw Error("Size has to be an array of two non-negative integers");
    b = new Fd(b[0], b[1]);
    if (u(a[1]) && 0 == a[1].length) a = []; else if (a = Gp(a[1]), 0 == a.length)throw Error("At least one slot size must be present");
    return new jn(b, a)
  };
  var Kp = function (a, b, c) {
    this.j = a;
    this.Da = t(b) ? b : 0;
    this.l = this.j + "_" + this.Da;
    this.m = c || "gpt_unit_" + this.l
  };
  Kp.prototype.getId = function () {
    return this.l
  };
  Kp.prototype.getAdUnitPath = function () {
    return this.j
  };
  Kp.prototype.getName = function () {
    var a = new K("slot_id_get_name");
    O(a);
    N(a);
    return this.j
  };
  Kp.prototype.w = function () {
    return this.Da
  };
  Kp.prototype.getInstance = Kp.prototype.w;
  Kp.prototype.toString = Kp.prototype.getId;
  Kp.prototype.getDomId = function () {
    return this.m
  };
  var Q = function (a, b, c, d) {
    this.Ma = a;
    this.Ka = Gp(c);
    this.ca = null;
    this.la = new Kp(a, b, d);
    this.wa = [];
    this.I = {};
    this.X = null;
    this.P = rg();
    this.P.info(ug(this.la.toString()), null, this);
    this.Ca = this.A = this.na = this.o = null;
    this.ha = this.eb = this.ja = "";
    this.pb = !0;
    this.l = {};
    this.K = [];
    this.U = !1;
    this.pa = this.ia = null;
    this.fa = 0;
    this.sa = -1;
    this.qa = 0;
    this.ka = !1;
    this.Z = {};
    this.ua = "";
    this.O = !1;
    this.aa = null;
    this.N = !1;
    this.C = null;
    this.La = z.Ld(function () {
      null !== this.C && this.visibilityChanged(this.C)
    }, this);
    this.u = xm(this.Ma);
    this.da = "";
    this.J = this.m = null;
    this.gc = !1;
    this.M = null;
    this.ra = this.D = 0;
    this.j = this.L = !1;
    this.ya = this.F = this.H = this.Ba = null;
    this.V = !1;
    this.ba = null;
    this.oa = ++cp().ia
  };
  h = Q.prototype;
  h.getPassbackPageUrl = function () {
    return this.ua
  };
  h.set = function (a, b) {
    if (!r(a) || !b)return this.P.G(D("Slot.set", [a, b]), null, this), this;
    var c = this.getAdUnitPath();
    this.I[a] = b;
    this.o || this.A ? this.P.G(Bg(a, String(b), c), null, this) : this.P.info(Ag(a, String(b), c), null, this);
    return this
  };
  h.get = function (a) {
    return r(a) ? this.I.hasOwnProperty(a) ? this.I[a] : null : (this.P.G(D("Slot.get", [a]), null, this), null)
  };
  h.getAttributeKeys = function () {
    return td(this.I)
  };
  h.addService = function (a) {
    var b = zp();
    if (!Nb(b.j, a))return this.P.G(Lh(this.la.toString()), null, this), this;
    for (b = 0; b < this.wa.length; ++b)if (a == this.wa[b])return this.P.G(Cg(a.Y(), this.la.toString()), a, this), this;
    this.wa.push(a);
    a.tb(this);
    return this
  };
  h.getName = function () {
    var a = new K("slot_get_name");
    O(a);
    N(a);
    return this.Ma
  };
  h.getAdUnitPath = function () {
    return this.Ma
  };
  h.w = function () {
    return this.getSlotId().w()
  };
  h.getSlotElementId = function () {
    return this.la.getDomId()
  };
  var R = function (a, b) {
    b = void 0 === b ? document : b;
    return a.Ba || b.getElementById(a.la.getDomId())
  };
  Q.prototype.getSlotId = function () {
    return this.la
  };
  Q.prototype.getServices = function () {
    return this.wa
  };
  Q.prototype.getSizes = function (a, b) {
    return t(a) && t(b) && this.ca ? Ip(this.ca, new Fd(a, b)) : this.Ka
  };
  var I = function (a) {
    return a.Ma + "_" + a.la.w()
  };
  Q.prototype.defineSizeMapping = function (a) {
    if (!u(a))throw Error("Size mapping has to be an array");
    a = La(a, Jp);
    this.ca = new Hp(a);
    return this
  };
  var Lp = function (a) {
    var b = void 0 === b ? window : b;
    var c = null;
    b.top == b && (b = an(!1, b), c = a.getSizes(b.width, b.height));
    null == c && (c = a.getSizes());
    return La(c, function (a) {
      return r(a) ? a : [a.getWidth(), a.getHeight()]
    })
  }, mm = function (a) {
    var b = [], c = !1;
    x(Lp(a), function (a) {
      u(a) ? b.push(a.join("x")) : "fluid" == a ? c = !0 : b.push(a)
    });
    c && b.unshift("320x50");
    return b.join("|")
  };
  h = Q.prototype;
  h.hasWrapperDiv = function () {
    return !!R(this)
  };
  h.setClickUrl = function (a) {
    if (!r(a))return this.P.G(D("Slot.setClickUrl", [a]), null, this), this;
    this.ha = a;
    return this
  };
  h.getClickUrl = function () {
    return this.ha
  };
  h.setForceSafeFrame = function (a) {
    if (!ra(a))return this.P.G(D("Slot.setForceSafeFrame", [a]), null, this), this;
    this.aa = a;
    return this
  };
  h.setCategoryExclusion = function (a) {
    r(a) && !ib(Ab(a)) ? (Ua(this.K, a), this.P.info(Eg(a), null, this)) : this.P.G(D("Slot.setCategoryExclusion", [a]), null, this);
    return this
  };
  h.clearCategoryExclusions = function () {
    this.P.info(Fg(), null, this);
    this.K = [];
    return this
  };
  h.getCategoryExclusions = function () {
    return $a(this.K)
  };
  h.setTargeting = function (a, b) {
    var c = [];
    u(b) ? c = b : b && c.push(b.toString());
    r(a) ? (this.P.info(Gg(a, c.join(), this.getAdUnitPath()), null, this), this.l[a] = c) : this.P.G(D("Slot.setTargeting", [a, b]), null, this);
    return this
  };
  h.clearTargeting = function (a) {
    if ("undefined" != typeof a) {
      if (!r(a) || ib(Ab(a)))return this.P.G(D("Slot.clearTargeting", [a]), null, this), this;
      if (!this.l[a])return this.P.G(Sh(a, this.getAdUnitPath()), null, this), this;
      delete this.l[a];
      this.P.info(Th(a, this.getAdUnitPath()), null, this)
    } else this.P.info(Hg(), null, this), this.l = {};
    return this
  };
  h.getTargetingMap = function () {
    return Pb(this.l)
  };
  h.getTargeting = function (a) {
    return r(a) ? this.l.hasOwnProperty(a) ? $a(this.l[a]) : [] : (this.P.G(D("Slot.getTargeting", [a]), null, this), [])
  };
  h.getTargetingKeys = function () {
    return td(this.l)
  };
  h.getOutOfPage = function () {
    return this.U
  };
  h.getAudExtId = function () {
    return this.fa
  };
  h.gtfcd = function () {
    return this.sa
  };
  h.setCollapseEmptyDiv = function (a, b) {
    if (!ra(a) || b && !ra(b))return this.P.G(D("Slot.setCollapseEmptyDiv", Ka([a, b], p)), null, this), this;
    this.pa = (this.ia = a) && !!b;
    b && !a && this.P.G(Ig(this.la.toString()), null, this);
    return this
  };
  h.getCollapseEmptyDiv = function () {
    return this.ia
  };
  h.getDivStartsCollapsed = function () {
    return this.pa
  };
  var Mp = function (a, b) {
    if (!a.hasWrapperDiv())return a.P.error(Jg(a.la.toString()), null, a), !1;
    var c = m.document, d = a.la.getDomId();
    c = R(a, c);
    if (!c)return a.P.error(Kg(d, a.la.toString()), null, a), !1;
    d = a.X;
    return r(d) && 0 < d.length ? (a.renderStarted(), c.innerHTML = d, a.renderEnded(b), !0) : !1
  }, Np = function (a, b) {
    a = new lo(a, !0, "publisher_ads");
    if (v(b)) {
      var c = b._empty_;
      a.isEmpty = c;
      c || (a.size = [b._width_, b._height_], b._creative_ids_ && b._adgroup2_ids_ && (a.sourceAgnosticCreativeId = b._creative_ids_[0], a.sourceAgnosticLineItemId = b._adgroup2_ids_[0], c = !!b._is_afc_, a.isBackfill = c, c || (a.creativeId = b._creative_ids_[0], a.lineItemId = b._adgroup2_ids_[0])), b._advertiser_ids_ && (a.advertiserId = b._advertiser_ids_[0]), b._campaign_ids_ && (a.campaignId = b._campaign_ids_[0]), b._label_ids_ && b._label_ids_[0] && (a.labelIds = r(b._label_ids_[0]) ? b._label_ids_[0].split("|") : [b._label_ids_[0]]))
    }
    return a
  }, Op = function (a) {
    return new lo(a, !0, "publisher_ads")
  };
  h = Q.prototype;
  h.fetchStarted = function (a) {
    this.o || rp(cp(), "count_of_requested_slots");
    this.o = this.P.info(vg(this.getAdUnitPath()), null, this);
    this.ja = a;
    this.D++;
    a = this.getCsiId();
    var b = this.D;
    Ff($l.w(), (7).toString(), 9, b, 0, a)
  };
  h.getContentUrl = function () {
    return this.ja
  };
  h.fetchEnded = function () {
    this.na = this.P.info(wg(this.getAdUnitPath()), null, this, this.o)
  };
  h.renderStarted = function () {
    this.A = this.P.info(xg(this.getAdUnitPath()), null, this)
  };
  h.getResponseInformation = function () {
    return this.J
  };
  h.renderEnded = function (a) {
    a.isEmpty ? this.J = null : this.J = new co(a.advertiserId, a.campaignId, a.creativeId, a.labelIds, a.lineItemId, a.sourceAgnosticCreativeId, a.sourceAgnosticLineItemId, a.isBackfill);
    this.Ca || rp(cp(), "count_of_rendered_slots");
    this.Ca = this.P.info(yg(this.getAdUnitPath()), null, this, this.A);
    x(this.wa, function (b) {
      if (b.Y() == a.serviceName) {
        var c;
        if (c = !a.slotContentChanged) c = b.C.slotRenderEnded, c = !!c && 0 < c.length;
        c && (c = new K("slot_render_ended_false_positive"), O(c), N(c));
        qo(b, "slotRenderEnded", a)
      }
    })
  };
  h.loaded = function () {
    Pp(this, "slotOnload", new oo(this));
    var a = cp(), b = this.getCsiId(), c = this.ka;
    lp(a, "ad_render_period", b, c);
    Hf($l.w(), (6).toString(), b);
    if (!this.m) {
      var d = Qp(this, document);
      wp(a, b, d, c);
      window.setTimeout(function () {
        wp(a, b, d, c)
      }, 1E3)
    }
    $k.is(uj.$) && this.M && this.M._html_ && cg()
  };
  h.impressionViewable = function () {
    Pp(this, "impressionViewable", new mo(this))
  };
  var Rp = function (a) {
    a.N = !1;
    a.C = null;
    a.J = null;
    a.L = !1;
    a.M = null
  };
  Q.prototype.Ia = function (a, b) {
    a && !this.N && (this.impressionViewable(), this.N = !0);
    a = this.C;
    this.C = Math.floor(b);
    a !== this.C && this.La()
  };
  Q.prototype.visibilityChanged = function (a) {
    Pp(this, "slotVisibilityChanged", new no(this, a))
  };
  Q.prototype.setFirstLook = function (a) {
    if (!ra(a))return this.P.G(D("Slot.setFirstLook", [a]), null, this), this;
    this.qa = a ? 1 : 2;
    return this
  };
  Q.prototype.getFirstLook = function () {
    return this.qa
  };
  var Sp = function (a) {
    var b = [], c = a.getTargetingMap();
    A(c, function (a, c) {
      for (var d = [], e = 0; e < a.length; ++e)d.push(encodeURIComponent(a[e]));
      b.push(encodeURIComponent(c) + "=" + d.join(","))
    });
    a = a.getCategoryExclusions();
    if (0 < a.length && !("excl_cat" in c)) {
      c = [];
      for (var d = 0; d < a.length; ++d)c.push(encodeURIComponent(a[d]));
      b.push(encodeURIComponent("excl_cat") + "=" + c.join(","))
    }
    return b.join("&")
  };
  Q.prototype.Ha = function () {
    return this.D
  };
  Q.prototype.getEscapedQemQueryId = function () {
    return this.M && this.M._qqid_ || ""
  };
  var Tp = function (a) {
    return a.M ? !!a.M._is_afc_ : null
  }, Up = function (a) {
    return a.M ? !!a.M._afc_expandable_ : !0
  }, Pp = function (a, b, c) {
    x(a.wa, function (a) {
      a.Y() == c.serviceName && qo(a, b, c)
    })
  };
  Q.prototype.setSafeFrameConfig = function (a) {
    if (a && v(a)) {
      if (a = io(a)) this.Z = a
    } else this.P.error(D("Slot.setSafeFrameConfig", [a]), null, this);
    return this
  };
  var Vp = function (a) {
    return "google_ads_iframe_" + I(a)
  };
  Q.prototype.getCsiId = function () {
    return this.oa
  };
  var Qp = function (a, b) {
    return a.H ? a.H : b.getElementById(Vp(a))
  }, Wp = function (a, b) {
    if (a.F)return a.F;
    a = Vp(a) + "__container__";
    return b.getElementById(a)
  }, Xp = function (a) {
    if (!a.ba) {
      var b;
      (b = (b = R(a)) && b.parentElement) ? (b.getBoundingClientRect ? (b = ie(ee, b), b = new Fd(b.right - b.left, b.bottom - b.top)) : b = null, b = [b.width, b.height]) : b = null;
      a.ba = b
    }
    return a.ba
  }, Yp = function (a) {
    var b = Xp(a);
    return b ? Na(Lp(a), function (a) {
      if (r(a))return !0;
      var c = a[1] == b[1];
      return a[0] != b[0] || !c
    }) : !1
  };
  h = Q.prototype;
  h.set = P(40, Q.prototype.set);
  h.get = P(41, Q.prototype.get);
  h.getAttributeKeys = P(42, Q.prototype.getAttributeKeys);
  h.addService = P(43, Q.prototype.addService);
  h.getName = P(170, Q.prototype.getName);
  h.getAdUnitPath = P(54, Q.prototype.getAdUnitPath);
  h.defineSizeMapping = P(44, Q.prototype.defineSizeMapping, function (a, b) {
    Lm(a, b);
    this.P.G(Dg(b.message), null, this);
    m.console && m.console.warn && m.console.warn("Incorrect usage of googletag.Slot defineSizeMapping: " + b.message);
    return this
  });
  h.setClickUrl = P(45, Q.prototype.setClickUrl);
  h.setForceSafeFrame = P(55, Q.prototype.setForceSafeFrame);
  h.setCategoryExclusion = P(46, Q.prototype.setCategoryExclusion);
  h.clearCategoryExclusions = P(47, Q.prototype.clearCategoryExclusions);
  h.getCategoryExclusions = P(48, Q.prototype.getCategoryExclusions);
  h.setTargeting = P(49, Q.prototype.setTargeting);
  h.clearTargeting = P(50, Q.prototype.clearTargeting);
  h.getTargeting = P(51, Q.prototype.getTargeting);
  h.getTargetingKeys = P(52, Q.prototype.getTargetingKeys);
  h.setCollapseEmptyDiv = P(53, Q.prototype.setCollapseEmptyDiv);
  h.setSafeFrameConfig = P(56, Q.prototype.setSafeFrameConfig);
  h.getResponseInformation = P(355, Q.prototype.getResponseInformation);
  var Zp = function () {
    this.l = [];
    this.m = [];
    this.j = {}
  }, $p = function (a, b) {
    return a.j[b] || []
  };
  ta(Zp);
  var aq = function () {
    this.j = {};
    this.m = {};
    this.l = {};
    this.o = rg()
  };
  aq.prototype.add = function (a, b, c) {
    if (!r(a) || 0 >= a.length || !b)return null;
    a in this.j || (this.j[a] = [], this.m[a] = 0);
    b = new Q(a, this.m[a], b, c);
    this.m[a]++;
    c = b.getSlotId().getDomId();
    if (this.l[c])return this.o.error(Og(c)), null;
    this.j[a].push(b);
    this.l[b.getSlotId().getDomId()] = b;
    Cm.push(b);
    a = ym([b])[0];
    c = cp();
    rp(c, "count_of_slots");
    c.F || (c.F = !0, hp(c, "n" + a));
    mp(c);
    return b
  };
  var bq = function (a) {
    var b = [];
    Jb(a.j, function (a) {
      x(a, function (a) {
        b.push(a)
      })
    });
    return b
  };
  aq.prototype.u = function (a) {
    var b = [];
    a = $p(Zp.w(), a);
    x(a, function (a) {
      (a = Qp(a, document)) && b.push(a.contentWindow)
    });
    return b
  };
  var cq = function (a, b) {
    x(b, function (a) {
      a.O = !0;
      a.P.info(Ph(a.la.toString()), null, a);
      var b = a.getAdUnitPath();
      Wa(this.j[b], a);
      if (0 == this.j[b].length) {
        var c = this.j;
        b in c && delete c[b]
      }
      b = this.l;
      c = a.getSlotId().getDomId();
      c in b && delete b[c];
      Wa(Cm, a)
    }, a)
  }, dq = function (a, b) {
    if (b && !u(b))return a.o.G(D("googletag.destroySlots", [b])), !1;
    b ? (bb(b), b = Ka(b, function (a) {
      return a instanceof Q && !a.O
    })) : b = bq(a);
    if (!b || 0 == b.length)return !1;
    zp().destroySlots(b);
    cq(a, b);
    return !0
  }, eq = function (a, b) {
    return Lb(a.j, function (a) {
      return Ra(a, b)
    })
  }, fq = function () {
    var a = mg();
    return a.slot_manager_instance || (a.slot_manager_instance = new aq)
  }, gq = function (a, b, c) {
    if (r(a) && (!p(c) || r(c))) {
      var d = fq();
      return d && d.add(a, b, c)
    }
    return null
  };
  gq = P(74, gq);
  var hq = function (a) {
    var b = fq();
    return !(!b || !dq(b, a))
  };
  hq = P(75, hq);
  var iq = function (a, b) {
    var c = null;
    if (r(a) && (!p(b) || r(b))) {
      c = fq();
      if (!c)return null;
      c = c.add(a, [1, 1], b)
    }
    c && (c.U = !0);
    return c
  };
  iq = P(73, iq);
  ng("defineOutOfPageSlot", iq);
  ng("defineSlot", gq);
  ng("defineUnit", gq);
  ng("destroySlots", hq);
  ng("getWindowsThatCanCommunicateWithHostpageLibrary", aq.prototype.u);
  aq.getInstance = fq;
  var jq = P(95, function (a) {
    var b = rg(), c = null;
    if (r(a))var d = a; else if (v(a) && 1 == a.nodeType) c = a, d = c.id; else {
      b.error(Mg(String(a)));
      return
    }
    a = fq();
    if (a = a.l[d] ? a.l[d] : null)if (b = c, a.gc = !0, a.Ba = void 0 === b ? null : b, a.pb && !a.hasWrapperDiv()) a.P.G(Lg(a.Ma, a.la.getDomId()), null, a); else for (b = 0; b < a.wa.length; ++b)a.wa[b].l && a.wa[b].ob(a); else b.error(Ng(String(d)))
  });
  ng("display", jq);
  var Jf, Of, kq = ze(), If = new Df(1, kq), lq = function () {
    if (!kq.google_measure_js_timing) {
      var a = If;
      a.j = !1;
      a.events != a.l.google_js_reporting_queue && (Cf() && x(a.events, Ef), a.events.length = 0)
    }
  };
  Jf = new function () {
    var a = void 0 === a ? Fa : a;
    this.o = "http:" === a.location.protocol ? "http:" : "https:";
    this.l = "pagead2.googlesyndication.com";
    this.m = "/pagead/gen_204?id=";
    this.j = .01;
    this.u = Math.random()
  };
  Of = new Kf;
  "complete" == kq.document.readyState ? lq() : If.j && le(kq, "load", function () {
      lq()
    });
  var mq = navigator, nq = function () {
      try {
        return mq.javaEnabled()
      } catch (a) {
        return !1
      }
    }, oq = function (a) {
      var b = 1, c;
      if (void 0 != a && "" != a)for (b = 0, c = a.length - 1; 0 <= c; c--) {
        var d = a.charCodeAt(c);
        b = (b << 6 & 268435455) + d + (d << 14);
        d = b & 266338304;
        b = 0 != d ? b ^ d >> 21 : b
      }
      return b
    }, pq = function (a, b) {
      if (!a || "none" == a)return 1;
      a = String(a);
      "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
      return oq(a.toLowerCase())
    }, qq = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, rq = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
    sq = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
  var tq = function (a, b) {
    if (!(window && Math.random && navigator))return -1;
    if (window.__google_ad_urls) {
      var c = window.__google_ad_urls;
      try {
        if (c && c.getOseId())return c.getOseId()
      } catch (e) {
      }
    }
    if (!window.__google_ad_urls_id) {
      c = window.google_enable_ose;
      if (!0 === c)var d = 2; else!1 !== c && (d = qd([0], a), null == d && ((d = qd([2], b)) || (d = 3)));
      if (!d)return 0;
      window.__google_ad_urls_id = d
    }
    return window.__google_ad_urls_id
  }, uq = function () {
    var a = 0;
    !p(m.postMessage) && (a |= 1);
    return a
  };
  var vq = function () {
  };
  h = vq.prototype;
  h.getNewBlocks = function () {
  };
  h.setupOse = function () {
  };
  h.getOseId = function () {
    return -1
  };
  h.getCorrelator = function () {
    return ""
  };
  h.numBlocks = function () {
    return 0
  };
  h.registerAdBlock = function () {
  };
  h.unloadAdBlock = function () {
  };
  h.setLoadOsdJsOnPubWindow = function () {
  };
  var wq = /Trident|MSIE/, xq = /rv:11|Trident\/[78]/, zq = function (a, b) {
    yq() ? le(a, "readystatechange", function (c) {
      a && "complete" == a.readyState && b(c)
    }) : le(a, "load", b)
  }, Aq = function () {
    var a = (ze() || m).google_osd_amcb;
    return wa(a) ? a : null
  }, yq = function () {
    var a = m.navigator;
    return (a = a && a.userAgent) ? wq.test(a) && !xq.test(a) : !1
  };
  var Bq = function (a, b) {
    this.o = a;
    this.l = b && b.l ? b.l : [];
    this.m = b && b.m ? b.m : 0;
    this.u = b ? b.u : "";
    this.j = b && b.j ? b.j : [];
    this.A = !1;
    if (b) {
      for (a = 0; a < this.l.length; ++a)this.l[a].push("true");
      for (a = 0; a < this.j.length; ++a)this.j[a].o = !0
    }
  }, Cq = function (a, b) {
    var c = a.l, d = a.o.google_ad_request_done;
    d && (d = d.orig_callback || d, a.o.google_ad_request_done = function (a) {
      if (a && 0 < a.length) {
        var e = 1 < a.length ? a[1].url : null, g = a[0].log_info || null, k = a[0].activeview_url || null,
          l = a[0].activeview_js_enabled || null, n = a[0].activeview_js_immediate_enabled || null,
          q = a[0].activeview_js_tos_enabled || null, B = a[0].activeview_cid || null,
          J = a[0].activeview_metadata || null, L = a[0].image_url || "", na = a[0].type || null;
        c.push([b, vb(a[0].url), e, g, null, k, l, n, q, B, J, vb(L), na])
      }
      d(a)
    }, a.o.google_ad_request_done.orig_callback = d)
  }, Eq = function (a) {
    var b = a.A ? ze() : m;
    b && b.document || hf(Jf, "osdgnd", {
      win: !(!window || !window.document),
      global: !(!m || !m.document)
    }, !0, void 0, void 0);
    a = Dq;
    b = b || m;
    b.google_osd_loaded ? a = !1 : (nd(b.document, a), a = b.google_osd_loaded = !0);
    a && Ae()
  }, Gq = function (a, b, c, d) {
    var e = a.l, f = d || 0, g = b.document;
    if (0 < e.length)for (var k = g.getElementsByTagName("a"), l = 0; l < k.length; l++)for (var n = 0; n < e.length; n++)if (0 <= k[l].href.indexOf(e[n][1])) {
      var q = k[l].parentNode;
      if (e[n][2])for (var B = q, J = 0; 4 > J; J++) {
        if (0 <= B.innerHTML.indexOf(e[n][2])) {
          q = B;
          break
        }
        B = B.parentNode
      }
      Fq(e[n], q, f, c);
      e.splice(n, 1);
      break
    }
    if (0 < e.length)for (k = g.getElementsByTagName("embed"), l = 0; l < k.length; l++)for (n = 0; n < e.length; n++)if (q = e[n][11], "flash" == e[n][12] && q && (B = k[l], B.src == q)) {
      q = B;
      0 == q.getBoundingClientRect().height && q.parentElement && "OBJECT" == q.parentElement.tagName && (q = q.parentElement);
      Fq(e[n], q, f, c);
      e.splice(n, 1);
      break
    }
    if (0 < e.length)for (g = g.getElementsByTagName("param"), k = 0; k < g.length; k++)for (l = 0; l < e.length; l++)if (q = e[l][11], "flash" == e[l][12] && q && (n = g[k], "movie" == n.name && n.value == q)) {
      q = void 0;
      n.parentNode && "OBJECT" == n.parentNode.tagName && (q = n.parentNode);
      if (!q)break;
      Fq(e[l], q, f, c);
      e.splice(l, 1);
      break
    }
    if (f = 0 < e.length) Ee || (Ee = Fe(m, !0).ub), f = b != Ee;
    if (f)try {
      Gq(a, b.parent, c, d)
    } catch (L) {
    }
    for (a = 0; a < e.length; ++a)b = e[a], "true" == b[6] && Hq("osd2", b[3]), "true" == b[7] && Hq("osdim", b[3])
  }, Fq = function (a, b, c, d) {
    d(b, a[0], c, !0, a[3], void 0, a[5], "true" == a[6], "true" == a[7], "true" == a[13], "true" == a[8], a[9], a[10])
  }, Hq = function (a, b) {
    a && b && ve(m, "//pagead2.googlesyndication.com/activeview?id=" + a + "&r=j" + ("&avi=" + b), void 0)
  };
  h = Bq.prototype;
  h.getNewBlocks = function (a, b) {
    b && Gq(this, this.o, a, 1);
    for (var c = this.j.length, d = 0; d < c; d++) {
      var e = this.j[d];
      !e.m && e.j && (a(e.j, e.u, e.C, e.l, "", void 0, "", !1, !1, e.o, !1, "", "", e.A), e.m = !0)
    }
    b && ((ze() || m).google_osd_amcb = a)
  };
  h.setupOse = function (a) {
    if (this.getOseId())return this.getOseId();
    var b = tq(Iq, Jq);
    if (!b)return 0;
    this.m = b;
    this.u = String(a || 0);
    return this.getOseId()
  };
  h.getOseId = function () {
    return window && Math.random && navigator ? this.m : -1
  };
  h.getCorrelator = function () {
    return this.u
  };
  h.numBlocks = function () {
    return this.l.length + this.j.length
  };
  h.registerAdBlock = function (a, b, c, d, e, f, g) {
    g = void 0 === g ? function () {
      return null
    } : g;
    if ((e = Aq()) && d) e(d, a, b, !0, "", void 0, "", !1, !1, !1, !1, "", "", g); else {
      if ("js" == c) Cq(this, a); else {
        var k = new Kq(a, b, d, g);
        this.j.push(k);
        d && zq(d, Pf(function () {
          k.l = !0
        }))
      }
      Dq || (ve(m, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a), void 0), Dq = gf(new af, "https:", "pagead2.googlesyndication.com", "/pagead/osd.js"));
      Eq(this)
    }
  };
  h.unloadAdBlock = function (a, b) {
    p(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, void 0 === b ? !1 : b)
  };
  h.setLoadOsdJsOnPubWindow = function (a) {
    this.A = a
  };
  var Lq = function () {
    var a = ze(), b = a.__google_ad_urls;
    if (!b)return a.__google_ad_urls = new Bq(a);
    try {
      if (0 <= b.getOseId())return b
    } catch (c) {
    }
    try {
      return a.__google_ad_urls = new Bq(a, b)
    } catch (c) {
      return a.__google_ad_urls = new Bq(a)
    }
  }, Dq = "", Jq = 0, Iq = 0, Kq = function (a, b, c, d) {
    d = void 0 === d ? sa : d;
    this.u = a;
    this.C = b;
    this.j = c;
    this.o = this.m = this.l = !1;
    this.A = d
  };
  Ca("Goog_AdSense_getAdAdapterInstance", Lq);
  Ca("Goog_AdSense_OsdAdapter", Bq);
  var Mq = function (a, b) {
    this.m = a;
    this.o = b;
    this.l = 0;
    this.j = null
  };
  Mq.prototype.get = function () {
    if (0 < this.l) {
      this.l--;
      var a = this.j;
      this.j = a.next;
      a.next = null
    } else a = this.m();
    return a
  };
  var Nq = function (a, b) {
    a.o(b);
    100 > a.l && (a.l++, b.next = a.j, a.j = b)
  };
  var Oq = function (a) {
    m.setTimeout(function () {
      throw a;
    }, 0)
  }, Pq, Qq = function () {
    var a = m.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function () {
      var a = document.createElement("IFRAME");
      a.style.display = "none";
      a.src = "";
      document.documentElement.appendChild(a);
      var b = a.contentWindow;
      a = b.document;
      a.open();
      a.write("");
      a.close();
      var c = "callImmediate" + Math.random(),
        d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
      a = w(function (a) {
        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
      }, this);
      b.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          b.postMessage(c, d)
        }
      }
    });
    if ("undefined" !== typeof a && !Tb()) {
      var b = new a, c = {}, d = c;
      b.port1.onmessage = function () {
        if (p(c.next)) {
          c = c.next;
          var a = c.Fb;
          c.Fb = null;
          a()
        }
      };
      return function (a) {
        d.next = {Fb: a};
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
      var b = document.createElement("SCRIPT");
      b.onreadystatechange = function () {
        b.onreadystatechange = null;
        b.parentNode.removeChild(b);
        b = null;
        a();
        a = null
      };
      document.documentElement.appendChild(b)
    } : function (a) {
      m.setTimeout(a, 0)
    }
  }, Rq = z.fd;
  var Sq = function () {
    this.l = this.j = null
  }, Uq = new Mq(function () {
    return new Tq
  }, function (a) {
    a.reset()
  });
  Sq.prototype.add = function (a, b) {
    var c = Uq.get();
    c.set(a, b);
    this.l ? this.l.next = c : this.j = c;
    this.l = c
  };
  var Wq = function () {
    var a = Vq, b = null;
    a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
    return b
  }, Tq = function () {
    this.next = this.l = this.j = null
  };
  Tq.prototype.set = function (a, b) {
    this.j = a;
    this.l = b;
    this.next = null
  };
  Tq.prototype.reset = function () {
    this.next = this.l = this.j = null
  };
  var $q = function (a, b) {
    Xq || Yq();
    Zq || (Xq(), Zq = !0);
    Vq.add(a, b)
  }, Xq, Yq = function () {
    if (-1 != String(m.Promise).indexOf("[native code]")) {
      var a = m.Promise.resolve(void 0);
      Xq = function () {
        a.then(ar)
      }
    } else Xq = function () {
      var a = ar;
      a = Rq(a);
      !wa(m.setImmediate) || m.Window && m.Window.prototype && !y("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (Pq || (Pq = Qq()), Pq(a)) : m.setImmediate(a)
    }
  }, Zq = !1, Vq = new Sq, ar = function () {
    for (var a; a = Wq();) {
      try {
        a.j.call(a.l)
      } catch (b) {
        Oq(b)
      }
      Nq(Uq, a)
    }
    Zq = !1
  };
  var br = function () {
  };
  var cr, dr = function () {
  };
  Da(dr, br);
  dr.prototype.j = function () {
    a:{
      if (!this.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
          var c = a[b];
          try {
            new ActiveXObject(c);
            var d = this.l = c;
            break a
          } catch (e) {
          }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      d = this.l
    }
    return d ? new ActiveXObject(d) : new XMLHttpRequest
  };
  cr = new dr;
  var fr = function (a) {
    this.j = 0;
    this.C = void 0;
    this.o = this.l = this.m = null;
    this.u = this.A = !1;
    if (a != sa)try {
      var b = this;
      a.call(void 0, function (a) {
        er(b, 2, a)
      }, function (a) {
        er(b, 3, a)
      })
    } catch (c) {
      er(this, 3, c)
    }
  }, gr = function () {
    this.next = this.context = this.l = this.m = this.j = null;
    this.o = !1
  };
  gr.prototype.reset = function () {
    this.context = this.l = this.m = this.j = null;
    this.o = !1
  };
  var hr = new Mq(function () {
    return new gr
  }, function (a) {
    a.reset()
  }), ir = function (a, b, c) {
    var d = hr.get();
    d.m = a;
    d.l = b;
    d.context = c;
    return d
  };
  fr.prototype.then = function (a, b, c) {
    return jr(this, wa(a) ? a : null, wa(b) ? b : null, c)
  };
  fr.prototype.then = fr.prototype.then;
  fr.prototype.$goog_Thenable = !0;
  var kr = function (a, b) {
    return jr(a, null, b, void 0)
  };
  fr.prototype.cancel = function (a) {
    0 == this.j && $q(function () {
      var b = new lr(a);
      mr(this, b)
    }, this)
  };
  var mr = function (a, b) {
    if (0 == a.j)if (a.m) {
      var c = a.m;
      if (c.l) {
        for (var d = 0, e = null, f = null, g = c.l; g && (g.o || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next)e || (f = g);
        e && (0 == c.j && 1 == d ? mr(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : nr(c), or(c, e, 3, b)))
      }
      a.m = null
    } else er(a, 3, b)
  }, qr = function (a, b) {
    a.l || 2 != a.j && 3 != a.j || pr(a);
    a.o ? a.o.next = b : a.l = b;
    a.o = b
  }, jr = function (a, b, c, d) {
    var e = ir(null, null, null);
    e.j = new fr(function (a, g) {
      e.m = b ? function (c) {
        try {
          var e = b.call(d, c);
          a(e)
        } catch (n) {
          g(n)
        }
      } : a;
      e.l = c ? function (b) {
        try {
          var e = c.call(d, b);
          !p(e) && b instanceof lr ? g(b) : a(e)
        } catch (n) {
          g(n)
        }
      } : g
    });
    e.j.m = a;
    qr(a, e);
    return e.j
  };
  fr.prototype.F = function (a) {
    this.j = 0;
    er(this, 2, a)
  };
  fr.prototype.H = function (a) {
    this.j = 0;
    er(this, 3, a)
  };
  var er = function (a, b, c) {
    if (0 == a.j) {
      a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
      a.j = 1;
      a:{
        var d = c, e = a.F, f = a.H;
        if (d instanceof fr) {
          qr(d, ir(e || sa, f || null, a));
          var g = !0
        } else {
          if (d)try {
            var k = !!d.$goog_Thenable
          } catch (n) {
            k = !1
          } else k = !1;
          if (k) d.then(e, f, a), g = !0; else {
            if (v(d))try {
              var l = d.then;
              if (wa(l)) {
                rr(d, l, e, f, a);
                g = !0;
                break a
              }
            } catch (n) {
              f.call(a, n);
              g = !0;
              break a
            }
            g = !1
          }
        }
      }
      g || (a.C = c, a.j = b, a.m = null, pr(a), 3 != b || c instanceof lr || sr(a, c))
    }
  }, rr = function (a, b, c, d, e) {
    var f = !1, g = function (a) {
      f || (f = !0, c.call(e, a))
    }, k = function (a) {
      f || (f = !0, d.call(e, a))
    };
    try {
      b.call(a, g, k)
    } catch (l) {
      k(l)
    }
  }, pr = function (a) {
    a.A || (a.A = !0, $q(a.D, a))
  }, nr = function (a) {
    var b = null;
    a.l && (b = a.l, a.l = b.next, b.next = null);
    a.l || (a.o = null);
    return b
  };
  fr.prototype.D = function () {
    for (var a; a = nr(this);)or(this, a, this.j, this.C);
    this.A = !1
  };
  var or = function (a, b, c, d) {
    if (3 == c && b.l && !b.o)for (; a && a.u; a = a.m)a.u = !1;
    if (b.j) b.j.m = null, tr(b, c, d); else try {
      b.o ? b.m.call(b.context) : tr(b, c, d)
    } catch (e) {
      ur.call(null, e)
    }
    Nq(hr, b)
  }, tr = function (a, b, c) {
    2 == b ? a.m.call(a.context, c) : a.l && a.l.call(a.context, c)
  }, sr = function (a, b) {
    a.u = !0;
    $q(function () {
      a.u && ur.call(null, b)
    })
  }, ur = Oq, lr = function (a) {
    Ga.call(this, a)
  };
  Da(lr, Ga);
  lr.prototype.name = "cancel";
  var yr = function (a, b, c, d) {
    var e = d || {}, f = e.Td ? e.Td.j() : cr.j();
    return kr(new fr(function (d, k) {
      var g;
      try {
        f.open(a, b, !0)
      } catch (B) {
        k(new vr("Error opening XHR: " + B.message, b, f))
      }
      f.onreadystatechange = function () {
        if (4 == f.readyState) {
          m.clearTimeout(g);
          a:switch (f.status) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var a = !0;
              break a;
            default:
              a = !1
          }
          !a && (a = 0 === f.status) && (a = b.match(Ne)[1] || null, !a && m.self && m.self.location && (a = m.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a));
          a ? d(f) : k(new wr(f.status, b, f))
        }
      };
      f.onerror = function () {
        k(new vr("Network error", b, f))
      };
      if (e.headers) {
        for (var n in e.headers) {
          var q = e.headers[n];
          null != q && f.setRequestHeader(n, q)
        }
        q = e.headers["Content-Type"]
      }
      n = m.FormData && c instanceof m.FormData;
      "POST" != a || void 0 !== q || n || f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      e.withCredentials && (f.withCredentials = e.withCredentials);
      e.responseType && (f.responseType = e.responseType);
      e.mimeType && f.overrideMimeType(e.mimeType);
      0 < e.Od && (g = m.setTimeout(function () {
        f.onreadystatechange = sa;
        f.abort();
        k(new xr(b, f))
      }, e.Od));
      try {
        f.send(c)
      } catch (B) {
        f.onreadystatechange = sa, m.clearTimeout(g), k(new vr("Error sending XHR: " + B.message, b, f))
      }
    }), function (a) {
      a instanceof lr && f.abort();
      throw a;
    })
  }, vr = function (a, b) {
    Ga.call(this, a + ", url=" + b);
    this.url = b
  };
  Da(vr, Ga);
  vr.prototype.name = "XhrError";
  var wr = function (a, b, c) {
    vr.call(this, "Request Failed, status=" + a, b, c);
    this.status = a
  };
  Da(wr, vr);
  wr.prototype.name = "XhrHttpError";
  var xr = function (a, b) {
    vr.call(this, "Request timed out", a, b)
  };
  Da(xr, vr);
  xr.prototype.name = "XhrTimeoutError";
  var zr = function () {
  };
  Da(zr, br);
  zr.prototype.j = function () {
    var a = new XMLHttpRequest;
    if ("withCredentials" in a)return a;
    if ("undefined" != typeof XDomainRequest)return new Ar;
    throw Error("Unsupported browser");
  };
  var Ar = function () {
    this.j = new XDomainRequest;
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseText = "";
    this.status = -1;
    this.statusText = "";
    this.j.onload = w(this.cd, this);
    this.j.onerror = w(this.Jb, this);
    this.j.onprogress = w(this.dd, this);
    this.j.ontimeout = w(this.ed, this)
  };
  h = Ar.prototype;
  h.open = function (a, b, c) {
    if (null != c && !c)throw Error("Only async requests are supported.");
    this.j.open(a, b)
  };
  h.send = function (a) {
    if (a)if ("string" == typeof a) this.j.send(a); else throw Error("Only string data is supported"); else this.j.send()
  };
  h.abort = function () {
    this.j.abort()
  };
  h.setRequestHeader = function () {
  };
  h.cd = function () {
    this.status = 200;
    this.responseText = this.j.responseText;
    Br(this, 4)
  };
  h.Jb = function () {
    this.status = 500;
    this.responseText = "";
    Br(this, 4)
  };
  h.ed = function () {
    this.Jb()
  };
  h.dd = function () {
    this.status = 200;
    Br(this, 1)
  };
  var Br = function (a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange()
  };
  var Er = function () {
    var a = m;
    this.l = a = void 0 === a ? m : a;
    this.u = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
    this.j = 2;
    this.m = [];
    this.o = !1;
    a:{
      var b = [m.top];
      a = [];
      for (var c = 0, d; d = b[c++];) {
        a.push(d);
        try {
          if (d.frames)for (var e = d.frames.length, f = 0; f < e && 50 > b.length; ++f)b.push(d.frames[f])
        } catch (B) {
        }
      }
      b:{
        try {
          var g = m.parent;
          if (g && g != m) {
            var k = g;
            break b
          }
        } catch (B) {
        }
        k = null
      }
      (e = k) && a.unshift(e);
      a.unshift(m);
      var l;
      for (e = 0; e < a.length; ++e)try {
        var n = a[e], q = Cr(n);
        if (q) {
          this.j = Dr(q);
          if (2 != this.j)break a;
          !l && md(n) && (l = n)
        }
      } catch (B) {
      }
      this.l = l || this.l
    }
  }, Gr = function (a) {
    if (2 != Fr(a)) {
      for (var b = 1 == Fr(a), c = 0; c < a.m.length; c++)try {
        a.m[c](b)
      } catch (d) {
      }
      a.m = []
    }
  }, Hr = function (a) {
    var b = Cr(a.l);
    b && 2 == a.j && (a.j = Dr(b))
  }, Fr = function (a) {
    Hr(a);
    return a.j
  }, Jr = function (a) {
    var b = Ir;
    b.m.push(a);
    if (2 != b.j) Gr(b); else if (b.o || (le(b.l, "message", function (a) {
        var c = Cr(b.l);
        if (c && a.source == c && 2 == b.j) {
          switch (a.data) {
            case "3p_cookie_yes":
              b.j = 1;
              break;
            case "3p_cookie_no":
              b.j = 0
          }
          Gr(b)
        }
      }), b.o = !0), Cr(b.l)) Gr(b); else {
      a = Xd(new Gd(b.l.document), "IFRAME");
      a.src = b.u;
      a.name = "detect_3p_cookie";
      a.style.visibility = "hidden";
      a.style.display = "none";
      a.onload = function () {
        Hr(b);
        Gr(b)
      };
      try {
        b.l.document.body.appendChild(a)
      } catch (c) {
      }
    }
  }, Kr = function (a, b) {
    try {
      return !(!a.frames || !a.frames[b])
    } catch (c) {
      return !1
    }
  }, Cr = function (a) {
    return a.frames && a.frames[cc("detect_3p_cookie")] || null
  }, Dr = function (a) {
    return Kr(a, "3p_cookie_yes") ? 1 : Kr(a, "3p_cookie_no") ? 0 : 2
  };
  var Lr = z.ta(function () {
    return !(rc || sc || qc) && (Dc || kc || jc && Ac(11))
  }), Mr = z.ta(function () {
    return Dc && Ac(56)
  }), Nr = function (a, b, c, d, e) {
    d = void 0 === d ? "" : d;
    var f = a.createElement("link");
    f.rel = c;
    -1 != c.toLowerCase().indexOf("stylesheet") ? b = ed(b) : b instanceof dd ? b = ed(b) : b instanceof gd ? b instanceof gd && b.constructor === gd && b.Ic === fd ? b = b.ib : (ua(b), b = "type_error:SafeUrl") : (b instanceof gd || (b = b.jb ? b.Ta() : String(b), hd.test(b) || (b = "about:invalid#zClosurez"), b = id(b)), b = b.Ta());
    f.href = b;
    d && "preload" == c && (f.as = d);
    e && (f.nonce = e);
    a = a.getElementsByTagName("head")[0];
    if (!a)return null;
    try {
      a.appendChild(f)
    } catch (g) {
    }
    return f
  };
  var Or = /^\.google\.(com?\.)?[a-z]{2,3}$/, Pr = /\.(cn|com\.bi|do|sl)$/, Qr = function (a) {
    return Or.test(a) && !Pr.test(a)
  }, Rr = function (a) {
    return a.replace(/[\W]/g, function (a) {
      return "&#" + a.charCodeAt() + ";"
    })
  }, Sr = m, Ir, Ur = function (a, b) {
    a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
    b = ["domain=" + encodeURIComponent(m.location.hostname)];
    Tr[3] >= +new Date && b.push("adsid=" + encodeURIComponent(Tr[1]));
    return a + "?" + b.join("&")
  }, Tr, S, Vr = function () {
    Sr = m;
    Tr = Sr.googleToken = Sr.googleToken || {};
    var a = +new Date;
    Tr[1] && Tr[3] > a && 0 < Tr[2] || (Tr[1] = "", Tr[2] = -1, Tr[3] = -1, Tr[4] = "", Tr[6] = "");
    S = Sr.googleIMState = Sr.googleIMState || {};
    Qr(S[1]) || (S[1] = ".google.com");
    u(S[5]) || (S[5] = []);
    ra(S[6]) || (S[6] = !1);
    u(S[7]) || (S[7] = []);
    t(S[8]) || (S[8] = 0)
  }, Wr = function (a) {
    try {
      a()
    } catch (b) {
      m.setTimeout(function () {
        throw b;
      }, 0)
    }
  }, Yr = function (a) {
    "complete" == m.document.readyState || "loaded" == m.document.readyState || m.currentScript && m.currentScript.async ? Xr(3) : a()
  }, Zr = 0, $r = {
    Ga: function () {
      return 0 < S[8]
    }, sb: function () {
      S[8]++
    }, Wb: function () {
      0 < S[8] && S[8]--
    }, Xb: function () {
      S[8] = 0
    }, Ea: function () {
    }, Zb: function () {
      return !1
    }, hb: function () {
      return S[5]
    }, fb: Wr
  }, as = {
    Ga: function () {
      return S[6]
    }, sb: function () {
      S[6] = !0
    }, Wb: function () {
      S[6] = !1
    }, Xb: function () {
      S[6] = !1
    }, Ea: function () {
    }, Zb: function () {
      return ".google.com" != S[1] && 2 < ++Zr
    }, hb: function () {
      return S[7]
    }, fb: function (a) {
      Yr(function () {
        Wr(a)
      })
    }
  }, Xr = function (a) {
    1E-5 > Math.random() && ve(m, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + a, void 0)
  };
  $r.Ea = function () {
    if (!$r.Ga()) {
      var a = m.document, b = function (b) {
        var c = Ur("js", b), d = zd();
        Nr(a, c, "preload", "script", d);
        b = a.createElement("script");
        b.type = "text/javascript";
        d && (b.nonce = d);
        b.onerror = function () {
          return m.processGoogleToken({}, 2)
        };
        c = kd(c);
        b.src = ed(c);
        try {
          (a.head || a.body || a.documentElement).appendChild(b), $r.sb()
        } catch (k) {
        }
      }, c = S[1];
      b(c);
      ".google.com" != c && b(".google.com");
      b = {};
      var d = (b.newToken = "FBT", b);
      m.setTimeout(function () {
        return m.processGoogleToken(d, 1)
      }, 1E3)
    }
  };
  as.Ea = function () {
    if (!as.Ga()) {
      var a = m.document, b = Ur("sync.js", S[1]);
      Nr(a, b, "preload", "script");
      b = Rr(b);
      var c = cc("script"), d = "", e = zd();
      e && (d = 'nonce="' + Rr(e) + '"');
      var f = "<" + c + ' src="' + b + '" ' + d + "></" + c + ">" + ("<" + c + " " + d + '>processGoogleTokenSync({"newToken":"FBS"},5);</' + c + ">");
      Yr(function () {
        a.write(f);
        as.sb()
      })
    }
  };
  var bs = function (a, b) {
    Vr();
    var c = Sr.googleToken[5] || 0;
    a && (0 != c || Tr[3] >= +new Date ? b.fb(a) : (b.hb().push(a), b.Ea()));
    Tr[3] >= +new Date && Tr[2] >= +new Date || b.Ea()
  }, ds = function (a) {
    m.processGoogleToken = m.processGoogleToken || function (a, c) {
        return cs($r, a, c)
      };
    bs(a, $r)
  }, es = function (a) {
    m.processGoogleTokenSync = m.processGoogleTokenSync || function (a, c) {
        return cs(as, a, c)
      };
    bs(a, as)
  }, fs = function (a) {
    Ir = Ir || new Er;
    Jr(function (b) {
      b && a()
    })
  }, gs = function (a) {
    a = z.once(a || sa);
    fs(a);
    ds(a)
  }, hs = function (a) {
    a = z.once(a || sa);
    fs(a);
    es(a)
  }, cs = function (a, b, c) {
    b = void 0 === b ? {} : b;
    c = void 0 === c ? 0 : c;
    var d = b.newToken || "", e = "NT" == d, f = parseInt(b.freshLifetimeSecs || "", 10),
      g = parseInt(b.validLifetimeSecs || "", 10);
    e && !g && (g = 3600);
    var k = b["1p_jar"] || "";
    b = b.pucrd || "";
    Vr();
    1 == c ? a.Xb() : a.Wb();
    if (!d && a.Zb()) Qr(".google.com") && (S[1] = ".google.com"), a.Ea(); else {
      var l = Sr.googleToken = Sr.googleToken || {},
        n = 0 == c && d && r(d) && !e && t(f) && 0 < f && t(g) && 0 < g && r(k);
      e = e && !a.Ga() && (!(Tr[3] >= +new Date) || "NT" == Tr[1]);
      var q = !(Tr[3] >= +new Date) && 0 != c;
      if (n || e || q) e = +new Date, f = e + 1E3 * f, g = e + 1E3 * g, Xr(c), l[5] = c, l[1] = d, l[2] = f, l[3] = g, l[4] = k, l[6] = b, Vr();
      if (n || !a.Ga()) {
        c = a.hb();
        for (d = 0; d < c.length; d++)a.fb(c[d]);
        c.length = 0
      }
    }
  };
  var is = [.05, .1, .2, .5], js = [0, .5, 1], ks = function (a) {
    a = md(a.top) ? a.top : null;
    if (!a)return -1;
    a = Sf(a);
    return -12245933 == a.width || -12245933 == a.height ? -1 : a.width * a.height
  }, ls = function (a, b) {
    return 0 > a ? [] : La(is, function (c) {
      return Math.min(a / b * c, 1)
    })
  }, ns = function (a, b, c) {
    this.u = m;
    this.m = b;
    this.A = a;
    this.l = null;
    this.j = c;
    this.o = ms(this)
  }, ps = function (a, b) {
    if (a.o) {
      if (null != a.l)try {
        os(a, Math.round(performance.now()), 0, 0, 0)
      } catch (c) {
        a.j && a.j(c)
      }
      a.l = b;
      a.o.observe(a.m)
    }
  }, ms = function (a) {
    if (!m.IntersectionObserver)return null;
    var b = a.m.offsetWidth * a.m.offsetHeight, c = ks(a.u);
    b = [].concat(qa(js), qa(ls(c, b)));
    bb(b);
    return new m.IntersectionObserver(function (b) {
      return qs(a, b)
    }, {threshold: b})
  }, qs = function (a, b) {
    try {
      var c = ks(a.u);
      x(b, function (b) {
        os(a, Math.round(b.time), b.boundingClientRect.width * b.boundingClientRect.height, b.intersectionRect.width * b.intersectionRect.height, c)
      })
    } catch (d) {
      a.j && a.j(d)
    }
  }, os = function (a, b, c, d, e) {
    if (null == a.l)throw Error("Not Attached.");
    var f = new ao;
    Vc(f, 1, c);
    Vc(f, 2, d);
    Vc(f, 3, e);
    Vc(f, 4, b);
    b = new Oc;
    c = Uc(f, 4);
    null != c && null != c && Pc(b, 4, c);
    c = Uc(f, 2);
    null != c && null != c && Pc(b, 2, c);
    c = Uc(f, 1);
    null != c && null != c && Pc(b, 1, c);
    c = Uc(f, 3);
    null != c && null != c && Pc(b, 3, c);
    f = new Uint8Array(b.m + b.j.length());
    d = b.l;
    e = d.length;
    for (var g = c = 0; g < e; g++) {
      var k = d[g];
      f.set(k, c);
      c += k.length
    }
    d = Mc(b.j);
    f.set(d, c);
    b.l = [f];
    b = Ic(f, !0).replace(/\.+$/, "");
    Ff(a.A, "1", 10, b, void 0, a.l)
  };
  var rs = function (a) {
    this.m = Ek.is(Wj.mc) || Ek.is(Wj.kc);
    this.j = null;
    this.l = 0;
    this.o = a
  }, ss = function (a) {
    if (!a.j) {
      var b = E.w().get(6), c = E.w().get(1), d = E.w().get(7), e = E.w().get(20);
      Dq = gf(new af, b ? "https:" : "http:", c, "/pagead/osd.js");
      Jq = d;
      Iq = e;
      a.m ? !Tb() || 0 <= Eb(ac(), 10) ? b = Lq() : (b = ze(), b = (c = b.__google_ad_urls) ? c : b.__google_ad_urls = new vq) : b = Lq();
      a.j = b;
      a.l = a.j.setupOse(a.o)
    }
    return a.j
  };
  rs.prototype.getOseId = function () {
    this.l || (this.l = tq(E.w().get(20), E.w().get(7)));
    return this.l
  };
  var ts = function (a) {
    a = void 0 === a ? {} : a;
    this.j = {};
    this.l = a
  }, us = function (a, b, c, d) {
    if (!(b && b in a.l))return !1;
    if (void 0 === d || d || !a.j[b]) a.j[b] = c || "";
    return !0
  }, vs = function (a, b) {
    A(b.j, function (a, b) {
      this.j[b] || (this.j[b] = a)
    }, a)
  }, ws = function (a) {
    var b = new ts(a.l);
    b.j = Pb(a.j);
    delete b.j.page_url;
    return b
  }, am = function (a) {
    return a.j.page_url
  };
  ts.prototype.Aa = function () {
    var a = this, b = [];
    A(this.j, function (c, d) {
      (d = a.l[d]) && c && b.push(d + "=" + encodeURIComponent(c))
    });
    return b.join("&")
  };
  var ys = function (a, b, c, d) {
    var e = xs(a, ws(b), c, d);
    a = xs(a, b, c, d);
    b = [];
    e[0] && 0 < e[0].length && b.push(e[0].join("&"));
    a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
    return b.join("&")
  }, xs = function (a, b, c, d) {
    var e = [], f = [], g = b.j;
    A(d, function (b, d) {
      if (b) {
        var k = "";
        null != g[d] && (k = encodeURIComponent(g[d]));
        for (var l = [], B = -1, J = -1, L = 0; L < a.length; ++L) {
          var na = I(a[L]);
          ++B;
          null == c[na] ? l.push("") : (na = c[na].j, null != na[d] ? (l.push(encodeURIComponent(encodeURIComponent(na[d]))), J = B) : l.push(""))
        }
        if (0 <= J) {
          L = encodeURIComponent(k);
          d = [];
          d.push(L);
          for (L = 0; L <= J; ++L)d.push(l[L]);
          f.push(b + "," + d.join(","))
        } else k && e.push(b + "=" + k)
      }
    });
    b = [];
    b.push(e);
    b.push(f);
    return b
  }, zs = function (a, b) {
    a:{
      var c = a.navigator, d = c.userAgent, e = c.platform, f = /WebKit\/(\d+)/, g = /rv:(\d+\.\d+)/,
        k = /rv:1\.8([^.]|\.0)/;
      if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(d) && (f = (f.exec(d) || [0, 0])[1], g = (g.exec(d) || [0, 0])[1], /Win/.test(e) && /Trident/.test(d) && 11 <= b.documentMode || !f && "Gecko" === c.product && 27 <= g && !k.test(d) || 536 <= f)) {
        b = !0;
        break a
      }
      b = !1
    }
    a = He(a, a.document, 500, 300);
    c = {};
    if (!b || a) c.ea = "0";
    return c
  };
  var Bs = function () {
    var a = As();
    this.j = {};
    this.l = {};
    this.H = [];
    this.X = a;
    this.A = new ts(a);
    this.C = {};
    this.I = {};
    this.m = {};
    this.N = {};
    this.L = {};
    this.V = this.F = "";
    this.o = !1;
    this.O = -1;
    this.U = 0;
    this.D = this.u = !1;
    this.K = {};
    this.J = !1
  }, Cs = function (a, b) {
    var c = I(b);
    return a.j[c] ? a.j[c] : a.j[c] = b
  }, Es = function (a) {
    return Ka(Ds(a), function (a) {
      return !a.o
    })
  }, Fs = function (a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      I(d) in a.j && Rp(d)
    }
  }, Gs = function (a) {
    a = Ka(Ds(a), function (a) {
      return !!a.o && !a.na
    });
    return La(a, function (a) {
      return [a.getAdUnitPath(), a.getSlotId().w()]
    })
  }, Hs = function (a, b) {
    return !(I(b) in a.L)
  }, Is = function (a, b) {
    a.renderEnded(b)
  }, Hm = function (a) {
    var b = 0;
    A(a.j, function () {
      b++
    });
    return b
  };
  Bs.prototype.toString = function () {
    var a = "[AdData:", b = [];
    A(this.j, function (a) {
      b.push(a.toString())
    });
    A(this.l, function (a, d) {
      b.push("[" + d + "," + a + "]")
    });
    a += b.join();
    return a + "]"
  };
  var Ds = function (a) {
    var b = [];
    A(a.j, function (a) {
      b.push(a)
    });
    return b
  }, Gm = function (a, b) {
    a = b || Ds(a);
    a = La(a, function (a) {
      return a.u
    });
    bb(a);
    return a
  }, Js = function (a) {
    var b = [];
    A(a.l, function (a, d) {
      b.push(encodeURIComponent(d) + "=" + encodeURIComponent(a))
    });
    0 < a.H.length && !("excl_cat" in a.l) && (a = a.H.join(","), b.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a)));
    return b.join("&")
  }, Ks = function (a, b) {
    var c = a.m[I(b)];
    if (!c)return null;
    try {
      var d = window.top, e = new Ed(0, 0), f = Hd(c);
      var g = f ? Sd(f) : window;
      if (dc(g, "parent")) {
        f = c;
        do {
          if (g == d)var k = ge(f); else {
            var l = ee(f);
            k = new Ed(l.left, l.top)
          }
          var n = k;
          e.W += n.W;
          e.y += n.y
        } while (g && g != d && g != g.parent && (f = g.frameElement) && (g = g.parent))
      }
      var q = e
    } catch (B) {
      q = new Ed(-12245933, -12245933)
    }
    q && Uf(c) && (0 <= q.W || 0 <= q.y) && (a.N[I(b)] = q);
    return q
  }, Ls = function (a, b) {
    return a.N[I(b)] || Ks(a, b)
  }, Ms = function (a) {
    for (var b = [], c = 0; c < a.length; ++c)b.push(mm(a[c]));
    return b.join()
  }, Ns = function (a) {
    for (var b = [], c = !1, d = 0; d < a.length; ++d) {
      var e = a[d].getFirstLook();
      0 != e && (c = !0);
      b.push(e)
    }
    return c ? b.join() : void 0
  };
  var Os = function () {
    this.j = [];
    this.O = !1;
    this.D = "";
    this.L = "json_html";
    this.o = "fif";
    this.A = 1;
    this.F = !1;
    this.l = "";
    this.m = [];
    this.persistentRoadblocksOnly = !1;
    this.videoPodNumber = this.videoPodPosition = NaN;
    this.J = this.K = "";
    this.I = !1;
    this.videoStreamCorrelator = NaN;
    this.u = 0;
    this.N = this.H = this.C = ""
  };
  var As = function () {
    var a = {};
    return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_content_section = "region", a.adsense_cpm = "cpm", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_font_size = "fs", a.adsense_hints = "hints", a.adsense_host = "host", a.adsense_host_channel = "h_ch", a.adsense_host_tier_id = "ht_id", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_relevant_content = "contents", a.adsense_targeting = "targeting", a.adsense_targeting_types = "targeting", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_ch = "cust_ch", a.demographic_gender = "cust_gender", a.demographic_interests = "cust_interests", a.demographic_job = "cust_job", a.demographic_l = "cust_l", a.demographic_lh = "cust_lh", a.demographic_u_url = "cust_u_url", a.demographic_unique_id = "cust_id", a.document_language = "hl", a.geography_override_city = "gcs", a.geography_override_country = "gl", a.google_content_recommendation_ad_positions = "ad_pos", a.matched_content_columns_num = "cr_col", a.matched_content_rows_num = "cr_row", a.matched_content_ui_type = "crui", a
  };
  var Rs = function (a) {
    var b;
    this.o = b = void 0 === b ? document : b;
    this.va = void 0 === a ? 0 : a;
    this.j = Ps(this, "__gads=");
    this.m = !1;
    this.l = null;
    this.u = !1;
    Qs(this)
  }, Ss = function (a, b) {
    b._cookies_ && b._cookies_.length && (a.l = b._cookies_[0], null != a.l && (a.j = a.l._value_, null != a.l && a.j && (b = new Date, b.setTime(1E3 * a.l._expires_), a.o.cookie = "__gads=" + a.j + "; expires=" + b.toGMTString() + "; path=" + a.l._path_ + "; domain=." + a.l._domain_)))
  }, Qs = function (a) {
    if (!a.j && !a.u && 1 != a.va) {
      a.o.cookie = "GoogleAdServingTest=Good";
      var b = "Good" == Ps(a, "GoogleAdServingTest=");
      if (b) {
        var c = new Date;
        c.setTime((new Date).valueOf() + -1);
        a.o.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
      }
      a.m = b;
      a.u = !0
    }
  }, Ps = function (a, b) {
    a = a.o.cookie;
    var c = a.indexOf(b), d = "";
    -1 != c && (b = c + b.length, c = a.indexOf(";", b), -1 == c && (c = a.length), d = a.substring(b, c));
    return d
  }, Ts = null, Us = function (a) {
    null == Ts && (Ts = new Rs(void 0 === a ? 0 : a));
    return Ts
  };
  var Ws = function () {
    this.j = {};
    var a = Ea.URL;
    null == Vs(this, "target_platform") && (this.j.target_platform = "DESKTOP");
    var b = this.j;
    a = a.split("?");
    a = a[a.length - 1].split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].split("=");
      if (d[0]) {
        var e = d[0].toLowerCase();
        if ("google_domain_reset_url" != e)try {
          if (1 < d.length) {
            var f = d[1];
            var g = window.decodeURIComponent ? decodeURIComponent(f.replace(fm, " ")) : unescape(f)
          } else g = "";
          b[e] = g
        } catch (k) {
        }
      }
    }
  }, Vs = function (a, b) {
    return null == b ? null : a.j[b]
  };
  var Xs = function (a, b, c, d, e) {
    this.j = b;
    this.u = c;
    this.m = d;
    this.mode = a;
    this.l = e;
    this.o = "";
    this.I = As();
    this.A = [];
    this.H = []
  };
  Xs.prototype.Aa = function (a) {
    var b = void 0 === b ? window : b;
    if (!u(a))return "";
    if ("sra" == this.mode) 0 == a.length && (a = Ds(this.j)); else {
      if (0 == a.length)return "";
      1 < a.length && (a = [a[0]])
    }
    this.D();
    this.F(a, b);
    return this.o
  };
  Xs.prototype.F = function (a, b) {
    b = void 0 === b ? window : b;
    var c = b.document;
    Ys(this);
    this.m && 0 !== this.m.va && T(this, "co", this.m.va);
    var d = this.j.O;
    -1 !== d && T(this, "tfcd", d);
    1 === this.j.U && T(this, "kfa", 1);
    T(this, "sc", E.w().get(6) ? 1 : 0);
    window.postMessage && T(this, "sfv", go());
    if ("sra" == this.mode) {
      Zs(this, a);
      $s(this);
      for (var e, f = [], g = 0; g < a.length; ++g)f.push(Sp(a[g]));
      e = f.join("|");
      e.length == f.length - 1 && (e = null);
      T(this, "prev_scp", e)
    } else {
      var k = a[0].gtfcd();
      -1 !== k && T(this, "tfcd", k);
      var l = a[0];
      T(this, "iu", l.getAdUnitPath());
      T(this, "sz", mm(l));
      Ra(Lp(l), "fluid") && T(this, "fluid", "height");
      var n = l.getFirstLook();
      n && T(this, "fl", n);
      var q = at(l.aa, this.j.D);
      "1" == q && T(this, "fsf", q);
      var B = l.D;
      0 < B && T(this, "rc", B);
      l.getClickUrl() && T(this, "click", l.getClickUrl());
      l.getOutOfPage() && T(this, "ists", "1");
      Hs(this.j, l) || T(this, "logonly", "1");
      $s(this);
      var J = a[0], L = Sp(J);
      T(this, "scp", L);
      var na = J.getAudExtId();
      0 < na && T(this, "audextid", na)
    }
    var Id = 1 != this.l.A, Jd = a[0].ka;
    var vf = this.j.C;
    if (null != am(this.j.A))var Sa = !0; else {
      for (var Db = !1, Xb = 0; Xb < a.length && !Db; Xb++)Db = null != bm(a[Xb], vf);
      Sa = Db
    }
    var Kv = Sa, Lv = this.l.F, Mv = 3 == this.l.A, Nv = E.w().get(46), Yb = 0;
    Id && (Yb |= 1);
    Jd && (Yb |= 2);
    Kv && (Yb |= 4);
    Lv && (Yb |= 8);
    Mv && (Yb |= 16);
    Nv && (Yb |= 32);
    var uo = Yb;
    0 < uo && T(this, "eri", uo);
    3 == Vf(c) && T(this, "d_imp", 1);
    var Ov = b;
    T(this, "cust_params", Js(this.j));
    this.m && 1 != this.m.va && (T(this, "cookie", this.m.j), this.m.m && T(this, "cookie_enabled", "1"));
    var vo = this.j.F;
    vo && T(this, "uule", vo);
    if (this.m && 1 != this.m.va) {
      var wo = (am(this.j.A) || (Ge(Ov) ? c.URL : c.referrer)) != c.URL ? c.domain : "";
      wo && T(this, "cdm", wo)
    }
    null != Vs(this.u, "google_preview") && T(this, "gct", Vs(this.u, "google_preview"));
    if (this.j.u) {
      T(this, "is_amp", "1");
      var Di = oe();
      T(this, "amp_v", Di && Di.mode ? +Di.mode.version || null : null);
      var Ei = oe();
      if (Ei && Ei.container) {
        for (var xo = Ei.container.split(","), yo = [], Fi = 0; Fi < xo.length; Fi++)yo.push(ne[xo[Fi]] || "x");
        var zo = yo.join()
      } else zo = null;
      T(this, "act", zo);
      ue && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(b.location.href) && T(this, "ati", 1)
    } else if (Ql.is(mk.v)) {
      var Gi = 190;
      Rl.is(nk.B) ? Gi = 192 : Rl.is(nk.Va) && (Gi = 191);
      var Pv = E.w().get(Gi);
      T(this, "amp_v", Pv)
    }
    b == b.top && T(this, "abxe", 1);
    this.C(new Date, a, b);
    var Ta = {};
    Ta.u_tz = -(new Date).getTimezoneOffset();
    var Hi = void 0 === Hi ? Fa : Hi;
    try {
      var Ao = Hi.history.length
    } catch (Bo) {
      Ao = 0
    }
    Ta.u_his = Ao;
    Ta.u_java = !!Fa.navigator && "unknown" !== typeof Fa.navigator.javaEnabled && !!Fa.navigator.javaEnabled && Fa.navigator.javaEnabled();
    Fa.screen && (Ta.u_h = Fa.screen.height, Ta.u_w = Fa.screen.width, Ta.u_ah = Fa.screen.availHeight, Ta.u_aw = Fa.screen.availWidth, Ta.u_cd = Fa.screen.colorDepth);
    Fa.navigator && Fa.navigator.plugins && (Ta.u_nplug = Fa.navigator.plugins.length);
    Fa.navigator && Fa.navigator.mimeTypes && (Ta.u_nmime = Fa.navigator.mimeTypes.length);
    bt(this, Ta);
    var Co, Do = m.devicePixelRatio;
    (Co = t(Do) ? +Do.toFixed(3) : null) && U(this, "u_sd", Co);
    try {
      var Eo = De()
    } catch (Bo) {
      Eo = "0"
    }
    U(this, "flash", Eo);
    var Zb = b;
    Zb = void 0 === Zb ? window : Zb;
    var Fo = Zb.document;
    var Kd = "sra" == this.mode ? am(this.j.A) : bm(a[0], this.j.C) || am(this.j.A);
    var Go = om(Fo.URL, Vs(this.u, "google_preview")), wf = om(Fo.referrer, Vs(this.u, "google_preview")), Ho = !1;
    if (null != Kd) {
      var Ii = Go;
      Ge(Zb) || (wf = "", Ho = !0)
    } else Kd = Go;
    if (this.j.u) {
      var Io = oe();
      wf = Io ? Io.referrer : null
    }
    if (Uk.is(nj.v)) T(this, "url", Kd), T(this, "ref", wf); else {
      var jb = new Ze(Zb), Jo = jb.j[0].depth, Ko = 0 < Jo;
      if (Ko && (T(this, "nhd", Jo), Zb.location.ancestorOrigins)) {
        for (var Lo, Mo = [], Rv = Math.min(jb.j.length, 27), Nc = 1; Nc < Rv; Nc++)jb.j[Nc] && jb.j[Nc].url && (Mo[Nc - 1] = jb.j[Nc].url);
        Lo = $e(jb, Mo.reverse());
        T(this, "iag", Lo);
        for (var Ji, No = jb.j, Oo = [], Ki = No.length - 1; 0 < Ki; Ki--) {
          var Li = No[Ki];
          Li && null != Li.url && Oo.push(Oe(Li.url.match(Ne)[3] || null))
        }
        Ji = Te(Oo);
        0 < Ji && T(this, "mdo", Ji)
      }
      T(this, "url", Kd);
      null != Ii && Ii != Kd && T(this, "loc", Ii);
      T(this, "ref", wf);
      if (Ko) {
        var Mi = jb.j[Math.max(jb.j.length - 1, 0)].url;
        Mi && T(this, "top", Ho ? Oe(Mi.match(Ne)[3] || null) : Mi)
      }
    }
    if (!Uk.is(nj.v)) {
      var Ld = b;
      Ld = void 0 === Ld ? window : Ld;
      var xf = Ld.document, Po = xf.scripts;
      Po && T(this, "dssz", Po.length);
      var $b = new Ze(Ld);
      var yf = $b.l.document && $b.l.document.scripts ? $b.l.document.scripts : [];
      if (yf) {
        for (var Ni = [], zf = yf.length - 1; 0 <= zf && 26 > Ni.length;)yf[zf].src && Ni.unshift(yf[zf].src), zf--;
        var Qo = $e($b, Ni)
      } else Qo = 0;
      T(this, "icsg", Qo);
      var Oi = $b.l.document && $b.l.document.scripts ? $b.l.document.scripts : [];
      if (Oi) {
        for (var Ro = [], Pi = Oi.length - 1; 0 <= Pi; Pi--) {
          var Qi = Oi[Pi];
          Qi && null != Qi.src && Ro.push(Oe(Qi.src.match(Ne)[3] || null))
        }
        var So = Te(Ro)
      } else So = 0;
      var To = So;
      0 < To && T(this, "mso", To);
      var Ri = Error();
      if (Ri.stack) {
        var Uo = Ri.stack, Vo = Uo.split(/\r\n|\r|\n/).length;
        "Error" == Uo.slice(0, 5) && Vo--;
        var Si = Vo - 10;
        if (0 > Si) {
          Si = 0;
          var Ti = new K("gpt_negative_stack_trace", im(), E.w().get(23));
          O(Ti, this.j);
          M(Ti, "stackTrace", Ri.stack);
          N(Ti)
        }
        T(this, "std", Si)
      }
      xf.currentScript && xf.currentScript.text && T(this, "csl", xf.currentScript.text.length)
    }
    if (Math.random() < E.w().get(73)) {
      var Ui = b;
      if (Ge(Ui)) {
        var Vi = 0, Sv = mg();
        Vi |= !!Sv._syncTagged_ << 0;
        var Wo = Ui || m, Wi = Wo.navigator && Wo.navigator.connection;
        Vi |= (!!Wi && "cellular" == Wi.type && .5 > Wi.downlinkMax) << 1;
        a:{
          for (var Xi = Ui.document.scripts, Af = 1; Af < Xi.length; Af++)if (-1 < Xi[Af].src.indexOf("/tag/js/gpt.js") && -1 < Xi[Af - 1].innerHTML.indexOf("/tag/js/gpt.js")) {
            var Xo = !0;
            break a
          }
          Xo = !1
        }
        T(this, "cdw", Vi | Xo << 2)
      }
    }
    T(this, "vrg", "175");
    (gi || um()) && U(this, "rumc", tm);
    Yk.is(sj.$) && U(this, "rume", 1);
    U(this, "vis", Vf(c));
    Nl.is(ik.v) && (0 === Am(E.w().get(172)) || U(this, "stss", Am(E.w().get(172))));
    var Yi;
    if (Yi = !this.j.u) {
      var Md = b;
      Md = md(Md.top) ? Md.top : Md;
      Yi = Tl.is(qk.v) ? !!Md.AMP : !1
    }
    Yi && U(this, "arp", 1);
    Yl.is(uk.v) && m.navigator && m.navigator.deviceMemory && U(this, "dmc", m.navigator.deviceMemory);
    try {
      var Yo = b.top;
      var Zi = Tf(Yo.document, Yo)
    } catch (Bo) {
      Zi = new Ed(-12245933, -12245933)
    }
    T(this, "scr_x", Math.round(Zi.W));
    T(this, "scr_y", Math.round(Zi.y));
    if (Wl.is(rk.v)) {
      for (var Zo = [], Bf = 0; Bf < a.length; Bf++)Yp(a[Bf]) && Zo.push(Xp(a[Bf]).join("x"));
      T(this, "psz", Zo.join("|"))
    }
  };
  var dt = function (a, b) {
    for (var c = b.length, d = [], e = [], f = 0; f < c; f++) {
      var g = Ks(a.j, b[f]) || ct;
      d.push(Math.round(g.W));
      e.push(Math.round(g.y))
    }
    T(a, "adxs", d.join(","));
    T(a, "adys", e.join(","))
  }, et = function (a, b) {
    for (var c = b.length, d = [], e = 0; e < c; e++) {
      var f = nm(b[e]);
      b[e].da = f;
      d.push(f)
    }
    T(a, "adks", d.join(","))
  }, bt = function (a, b) {
    A(b, function (b, d) {
      U(a, d, b)
    })
  }, $s = function (a) {
    a.m && 1 == a.m.va || T(a, "ppid", a.j.V)
  };
  Xs.prototype.C = function (a, b, c) {
    var d = c.document;
    T(this, "lmt", (Date.parse(d.lastModified) / 1E3).toString());
    U(this, "dt", a.getTime());
    a = Vs(this.u, "deb");
    null != a && T(this, "deb", a);
    a = Vs(this.u, "haonly");
    null != a && T(this, "haonly", a);
    a = zs(c, d);
    ye(a, w(function (a, b) {
      T(this, b, a)
    }, this));
    d = Ie(c, d).hd || null;
    null != d && T(this, "frm", d);
    if (d = this.j.u ? qe() : an(!0, c)) T(this, "biw", d.width), T(this, "bih", d.height);
    !Ge(c) && (c = an(!1, c)) && (T(this, "isw", c.width), T(this, "ish", c.height));
    this.l.u && T(this, "oid", this.l.u);
    if ("sra" == this.mode) dt(this, b), et(this, b); else {
      if (c = (this.j.u ? re() : null) || Ks(this.j, b[0])) T(this, "adx", Math.round(c.W)), T(this, "ady", Math.round(c.y));
      c = b[0].da;
      c = Kk.is(cj.v) ? c || nm(b[0]) : c || nm(b[0], this.j.I[I(b[0])]);
      T(this, "adk", c)
    }
    c = uq();
    0 < c && T(this, "osd", c);
    b[0].ka || U(this, "gut", "v2");
    c = this.j.A;
    d = "";
    "sra" == this.mode ? d = ys(b, c, this.j.C, this.I) : (b = this.j.C[I(b[0])], null == b ? b = c : vs(b, c), b = ws(b), d = b.Aa());
    d && (this.o += "&" + d)
  };
  Xs.prototype.D = function () {
    var a = this.j.F, b = !1, c = E.w().get(46);
    !a && c && (b = !Bk.is(Ai.v));
    this.o = gm(!b) + "/gampad/ads?";
    U(this, "gdfp_req", 1);
    T(this, "correlator", this.l.D);
    U(this, "output", this.l.L);
    U(this, "callback", this.l.l);
    U(this, "impl", this.l.o);
    this.m && 1 == this.m.va || (T(this, "adsid", this.l.C), T(this, "pucrd", this.l.N));
    T(this, "jar", this.l.H);
    this.l.persistentRoadblocksOnly && T(this, "per_only", 1);
    "sra" == this.mode && T(this, "json_a", 1)
  };
  var Ys = function (a) {
    try {
      var b = ft(), c = b ? Za(a.l.m, b) : a.l.m;
      b = c;
      if (0 !== Am(E.w().get(172))) {
        var d = E.w().get(175);
        if (0 < d.length) {
          var e = d.split(",");
          b = Ka(c, function (a) {
            return !Ra(e, a)
          })
        }
      }
      T(a, "eid", b.join());
      var f = lf();
      f && T(a, "debug_experiment_id", f)
    } catch (g) {
    }
  }, ft = function () {
    if (3 == Vf(document)) {
      var a = "108809008";
      var b = E.w().get(17)
    } else a = "108809007", b = E.w().get(16);
    return qd([a], b)
  }, Zs = function (a, b) {
    for (var c = b.length, d = 0; d < c; d++)gt(a, b[d].getAdUnitPath());
    T(a, "iu_parts", a.A.join());
    T(a, "enc_prev_ius", a.H.join());
    T(a, "prev_iu_szs", Ms(b));
    Na(b, function (a) {
      return Ra(Lp(a), "fluid")
    }) && (c = La(b, function (a) {
      return Ra(Lp(a), "fluid") ? "height" : "0"
    }).join(), T(a, "fluid", c));
    (c = Ns(b)) && T(a, "fla", c);
    c = La(b, function (b) {
      return at(b.aa, a.j.D)
    }).join();
    0 <= c.indexOf("1") && T(a, "fsfs", c);
    c = La(b, Function.prototype.call, Q.prototype.Ha);
    0 < Na(c, function (a) {
      return 0 < a
    }) && T(a, "rcs", c.join());
    (c = ht(b)) && T(a, "ists", c);
    var e = {};
    x(b, function (a) {
      (a = a.getClickUrl()) && (e[a] = (e[a] || 0) + 1)
    });
    if (!rd(e)) {
      b = new K("gpt_sra_setclickurl");
      var f = [];
      A(e, function (a, b) {
        f.push(b.length + ":" + a)
      });
      M(b, "lenfreqs", f.join());
      O(b);
      N(b, E.w().get(58))
    }
  }, at = function (a, b) {
    return (null === a ? b : a) ? "1" : "0"
  }, T = function (a, b, c) {
    null != c && U(a, b, encodeURIComponent("" + c))
  }, U = function (a, b, c) {
    null != c && "" != c && (a.o = "?" != a.o.charAt(a.o.length - 1) ? a.o + ("&" + b + "=" + c) : a.o + (b + "=" + c))
  }, gt = function (a, b) {
    var c = "";
    if ("" != b) {
      b = b.split("/");
      for (c = 0; c < b.length; c++)if ("" != b[c]) {
        for (var d = !1, e = 0; e < a.A.length; e++)if (b[c] == a.A[e]) {
          d = !0;
          break
        }
        d || a.A.push(b[c])
      }
      c = "";
      for (d = 0; d < b.length; d++) {
        if (0 < d) c += "/"; else if ("" == b[0])continue;
        for (e = 0; e < a.A.length; e++)if (b[d] == a.A[e]) {
          c += e;
          break
        }
      }
    }
    a.H.push(c)
  }, ht = function (a) {
    if (!a.length)return 0;
    for (var b = "", c = 0; c < a.length; ++c)b += a[c].getOutOfPage() ? "1" : "0";
    return parseInt(b, 2)
  }, ct = new Ed(-9, -9);
  var it = function (a, b, c, d, e) {
    Xs.call(this, a, b, c, d, e)
  };
  ha(it, Xs);
  it.prototype.C = function (a, b, c) {
    0 < navigator.userAgent.indexOf("MSIE ") && us(this.j.A, "adsense_encoding", document.charset, !1);
    Xs.prototype.C.call(this, a, b, c);
    T(this, "ifi", b[0].ra);
    null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = an(!1, c, !1), a.push(c.width.toString()), a.push(c.height.toString()), c = vd(a.join(""))) : c = 0;
    0 != c && T(this, "ifk", c.toString())
  };
  it.prototype.F = function (a) {
    var b = a[0], c = window;
    c = se(oe(c)) || c;
    c.google_unique_id ? ++c.google_unique_id : c.google_unique_id = 1;
    b.ra = c.google_unique_id;
    this.l.I ? (U(this, "hxva", 1), T(this, "cmsid", this.l.J), T(this, "vid", this.l.K)) : window.google_test_extended_pageview && U(this, "hxva", 1);
    isNaN(this.l.videoPodNumber) || U(this, "pod", this.l.videoPodNumber);
    isNaN(this.l.videoPodPosition) || U(this, "ppos", this.l.videoPodPosition);
    isNaN(this.l.videoStreamCorrelator) || U(this, "scor", this.l.videoStreamCorrelator);
    Xs.prototype.F.call(this, a);
    a = window;
    b = a.document.domain;
    var d = a.document.cookie, e = a.history.length, f = a.screen, g = a.document.referrer;
    if (oe())var k = ze().gaGlobal || {}; else {
      var l = Math.round((new Date).getTime() / 1E3), n = a.google_analytics_domain_name;
      b = "undefined" == typeof n ? pq("auto", b) : pq(n, b);
      var q = -1 < d.indexOf("__utma=" + b + "."), B = -1 < d.indexOf("__utmb=" + b);
      (c = (se() || ze()).gaGlobal) || (c = {}, (se() || ze()).gaGlobal = c);
      var J = !1;
      if (q) g = d.split("__utma=" + b + ".")[1].split(";")[0].split("."), B ? c.sid = g[3] : c.sid || (c.sid = l + ""), c.vid = g[0] + "." + g[1], c.from_cookie = !0; else {
        c.sid || (c.sid = l + "");
        if (!c.vid) {
          J = !0;
          B = Math.round(2147483647 * Math.random());
          q = [mq.appName, mq.version, mq.language ? mq.language : mq.browserLanguage, mq.platform, mq.userAgent, nq() ? 1 : 0].join("");
          f ? q += f.width + "x" + f.height + f.colorDepth : m.java && m.java.awt && (f = m.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), q += f.screen.width + "x" + f.screen.height);
          q = q + d + (g || "");
          for (g = q.length; 0 < e;)q += e-- ^ g++;
          c.vid = (B ^ oq(q) & 2147483647) + "." + l
        }
        c.from_cookie = !1
      }
      if (!c.cid) {
        b:for (l = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, l = n.split(".").length), n = 999, d = d.split(";"), g = 0; g < d.length; g++)if (f = qq.exec(d[g]) || rq.exec(d[g]) || sq.exec(d[g])) {
          e = f[1] || 0;
          if (e == l) {
            k = f[2];
            break b
          }
          e < n && (n = e, k = f[2])
        }
        J && k && -1 != k.search(/^\d+\.\d+$/) ? c.vid = k : k != c.vid && (c.cid = k)
      }
      c.dh = b;
      c.hid || (c.hid = Math.round(2147483647 * Math.random()));
      k = c
    }
    U(this, "ga_vid", k.vid);
    U(this, "ga_sid", k.sid);
    U(this, "ga_hid", k.hid);
    U(this, "ga_fc", k.from_cookie);
    U(this, "ga_cid", k.cid);
    T(this, "ga_wpids", a.google_analytics_uacct)
  };
  var jt = function (a, b) {
    var c = void 0 === c ? document : c;
    c.write('<script type="text/javascript" src="' + a + '" id="' + b + '">\x3c/script>')
  }, kt = function (a, b, c, d, e, f) {
    f = void 0 === f ? document : f;
    f = Xd(new Gd(f), "IFRAME");
    f.id = b;
    f.title = c;
    f.name = b;
    u(e) ? null != e[0] && null != e[1] && (f.width = String(e[0]), f.height = String(e[1])) : (f.width = "100%", f.height = "0");
    f.vspace = "0";
    f.hspace = "0";
    f.allowTransparency = "true";
    f.scrolling = "no";
    f.marginWidth = "0";
    f.marginHeight = "0";
    f.frameBorder = "0";
    f.style.border = "0";
    f.style.verticalAlign = "bottom";
    d && (f.style.visibility = "hidden", f.style.display = "none");
    -1 == Fb.indexOf("iPhone") && (f.srcdoc = "");
    a.appendChild(f);
    return f
  }, lt = function (a) {
    if (!a || 0 == jm() || "hidden" != a.style.visibility || "none" != a.style.display)return !1;
    a.parentNode.removeChild(a);
    return !0
  }, ot = function (a, b, c, d, e, f, g, k, l, n) {
    var q = mt, B;
    u(e) ? B = new Fd(e[0], e[1]) : B = 1;
    e = Jk.is(bj.v);
    var J = pl.is(Kj.v);
    return new Xn({
      rb: b,
      Kb: c,
      gd: q,
      content: nt(d),
      size: B,
      nd: {
        info: function () {
        }, G: function () {
        }, error: function () {
        }
      },
      Wc: l,
      Rb: f,
      sandbox: p(g.sandbox) ? g.sandbox : !1,
      permissions: {
        Ra: p(g.allowOverlayExpansion) ? g.allowOverlayExpansion : !k,
        Sa: p(g.allowPushExpansion) ? g.allowPushExpansion : !1
      },
      Yc: Dk.is(Ci.v),
      Ja: !!mg().fifWin,
      kd: e,
      Fd: oi(),
      Gd: go(),
      Sc: ho(a.location.host),
      Sd: hm(a, !0),
      dc: hm(a, J),
      hostpageLibraryTokens: n
    })
  }, st = function (a, b, c, d, e) {
    (void 0 === c ? 0 : c) && (b = nt(b, "<script>var inDapIF=true;\x3c/script>\n"));
    if (pt) {
      var f = b, g = void 0 === d ? !0 : d, k = void 0 === e ? !0 : e;
      k = void 0 === k ? !0 : k;
      try {
        var l = a.contentWindow ? a.contentWindow.document : a.contentDocument, n;
        if (n = void 0 === g || g) {
          var q = void 0 === q ? navigator.userAgent : q;
          n = -1 != q.indexOf("Firefox") || Gk.is(aj.v)
        }
        n && l.open("text/html", "replace");
        l.write(f);
        cl.is(xj.v) && a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && hb(a.contentWindow.location.href) && a.contentWindow.history.replaceState(null, "", "#" + Math.random());
        k && l.close()
      } catch (Xb) {
      }
    } else {
      try {
        var B = !!a.contentWindow.document
      } catch (Xb) {
        B = !1
      }
      if (B) {
        l = b;
        n = qt();
        try {
          f = window.frames[a.name];
          a = l;
          var J = "http://" + E.w().get(1) + "/pagead/inject_object_div.js";
          if (6 < parseInt(jm(), 10) || 0 > a.indexOf(J)) {
            b:{
              var L = void 0 === L ? document : L;
              var na = jm(), Id;
              if (!(Id = 0 == na || isNaN(na) || 7 > na || 9 < na || L.documentMode && 10 <= L.documentMode)) {
                var Jd = void 0 === Jd ? navigator.userAgent : Jd;
                var vf = Jd.match(/Trident\/([0-9]+.[0-9]+)/);
                Id = 6 <= (vf ? parseFloat(vf[1]) : 0)
              }
              if (!Id)for (a = 0; a < l.length; ++a)if (127 < l.charCodeAt(a)) {
                var Sa = !0;
                break b
              }
              Sa = !1
            }
            if (Sa) {
              g = unescape(encodeURIComponent(l));
              k = Math.floor(g.length / 2);
              a = [];
              for (Sa = 0; Sa < k; ++Sa)a[Sa] = String.fromCharCode(256 * g.charCodeAt(2 * Sa + 1) + g.charCodeAt(2 * Sa));
              1 == g.length % 2 && (a[k] = g.charAt(g.length - 1));
              l = a.join("")
            }
            f.contents = l;
            f.location.replace("javascript:window.contents")
          } else f.contents = l, f.location.replace("javascript:document.write(window.contents);document.close();")
        } catch (Xb) {
        } finally {
          rt(n)
        }
      } else {
        g = b;
        f = qt();
        try {
          var Db = "google-ad-content-" + Bb();
          window[Db] = g;
          g = 'var adContent = window.parent["' + Db + '"];window.parent["' + Db + '"] = null;document.write(adContent);';
          g = 6 == jm() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + document.domain + '";' + g + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + g + "document.close();";
          a.src = 'javascript:\'<script type="text/javascript">' + g + "\x3c/script>'"
        } catch (Xb) {
          window[Db] = null
        } finally {
          rt(f)
        }
      }
    }
  }, nt = function (a, b) {
    if (!a)return a;
    var c = a.toLowerCase();
    return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<html>\n<head>\n" + (void 0 === b ? "" : b) + "</head><body>" + a + "</body></html>\n"
  }, qt = function () {
    var a = [], b = document.getElementsByTagName("base");
    if (b)for (var c = 0, d = b.length; c < d; ++c) {
      var e = b[c], f = e.getAttribute("target");
      f && (a.push({Rc: e, Ad: f}), e.removeAttribute("target"))
    }
    return a
  }, rt = function (a) {
    if (a)for (var b = 0, c = a.length; b < c; ++b) {
      var d = a[b];
      d.Rc.setAttribute("target", d.Ad)
    }
  }, pt = !jm();
  var tt = function () {
    this.l = !1;
    this.j = {}
  }, vt = function () {
    var a = tt.w(), b = window;
    if (!a.l) {
      a.l = !0;
      var c = pl.is(Kj.v);
      c = !hm(b, c);
      c = On(b, go(), ho(b.location.host), c);
      a.j[c] = 1;
      Lr() ? ut(a, c, "prefetch") : Fk.is($i.v) || (a = b.document, b = (b = mg().fifWin) && b.document || a, a = Xd(new Gd(b), "IFRAME"), a.src = c, a.style.visibility = "hidden", a.style.display = "none", c = b.getElementsByTagName("script"), 0 < c.length && (c = c[c.length - 1], c.parentNode && c.parentNode.insertBefore(a, c.nextSibling)))
    }
  }, wt = function (a, b) {
    var c = we(b, P(290, function () {
      a.j[b] = 3;
      Wa(window.google_image_requests, c)
    }))
  }, ut = function (a, b, c, d) {
    var e = Nr(document, b, c, void 0 === d ? "" : d);
    e && le(e, "load", function () {
      a.j[b] = 3;
      e && Vd(e)
    })
  };
  ta(tt);
  var xt = function (a, b, c, d) {
    var e = Vs(c, "api_experiment");
    ib(Ab(e)) || x(La(e.split(","), kb), function (a) {
      xk(a)
    });
    this.j = b;
    this.o = c;
    this.X = d;
    this.na = Zp.w();
    this.K = Math.floor(4503599627370496 * Math.random());
    this.Ub = !1;
    this.l = a;
    (this.m = (a = si(El)) ? Qb(El.j)[a] : "") && (hc ? Ac(10) ? H(Il, dk[this.m]) : H(Hl, ck[this.m]) : Dc ? Ke() ? H(Fl, ak[this.m]) : H(Gl, bk[this.m]) : lm() ? H(Jl, ek[this.m]) : H(Kl, fk[this.m]));
    this.m && "1" != this.m || hc && Ac(9) && (cr = new zr);
    this.lb = cp();
    this.H = {};
    this.U = Me(this.U);
    this.ha = P(291, this.ha);
    this.qa = P(331, this.qa);
    this.fa = P(337, this.fa);
    this.Pb = !1
  };
  xt.prototype.pa = function () {
    return "json_html"
  };
  xt.prototype.V = function () {
    return "lean"
  };
  var yt = function (a, b) {
    b = void 0 === b ? 0 : b;
    var c = void 0 === c ? window : c;
    !b || Ge(c) ? b = Math.floor(4503599627370496 * Math.random()) : a.Ub = !0;
    a.K = Math.floor(b)
  };
  xt.prototype.ac = function () {
    return null
  };
  xt.prototype.Ca = function () {
    return !1
  };
  xt.prototype.cc = function () {
  };
  xt.prototype.loaded = function (a) {
    a.loaded();
    this.qa(document, a)
  };
  var zt = function (a, b, c, d) {
    var e = new Os;
    e.L = a.pa();
    e.o = a.da(a.l);
    e.A = c;
    e.l = d;
    e.j = b;
    si(Ll) != gk.B && (Vr(), e.C = Tr[1], Vr(), e.H = Tr[4], Vr(), e.N = Tr[6]);
    return e
  };
  xt.prototype.N = function (a) {
    a.D = this.K + "";
    a.m = pf();
    a.F = this.Ub
  };
  xt.prototype.Aa = function (a) {
    this.N(a);
    return At(this, this.l ? "sra" : "single", a).Aa(a.j)
  };
  xt.prototype.Sb = function (a) {
    return "2" == this.m ? pm() ? 2 : 3 : ji && a.length > this.oa(a) ? 1 : 3
  };
  var Bt = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    a = a.oa(b);
    if (c)switch (si(il)) {
      case Dj.v:
        H(jl, Ej.v);
        a = 16384;
        break;
      case Dj.B:
        H(jl, Ej.B);
      default:
        a = 8192
    }
    if (b.length <= a)return b;
    c = b;
    var d = a - 8;
    c.length > a && (a = c.lastIndexOf("&", d), -1 !== a ? c = c.substring(0, a) : (c = c.substring(0, d), c = c.replace(/%\w?$/, "")), c += "&trunc=1");
    a = c;
    Ff($l.w(), (9).toString(), 9, b.length - a.length + 8);
    return a
  }, Ft = function (a, b, c, d, e, f) {
    if (El.is(Zj["2"]))try {
      var g = new window.XMLHttpRequest;
      g.open("GET", b);
      g.withCredentials = !0;
      g.onload = function () {
        if (200 == g.status) {
          var a = Ct(g.responseText);
          a && c(a)
        }
      };
      g.onerror = d;
      g.send()
    } catch (n) {
      d()
    } else {
      d = {timeoutMs: 0, withCredentials: !0};
      var k = function (b) {
        var c = new K(f ? "gpt_post_error" : "gpt_get_error", im());
        b.name && M(c, "name", b.name);
        b.status && M(c, "status", b.status);
        b.message && M(c, "message", b.message);
        O(c, a.j);
        N(c)
      }, l = function (a) {
        if (a = Ct(a.responseText)) f && Dt(a), c(a)
      };
      f ? (b = Et(b, e), yr("POST", b.url, b.body, d).then(l, k, a)) : yr("GET", b, null, d).then(l, k, a)
    }
  }, Ht = function (a, b, c, d, e, f) {
    e ? Gt(a, c, d, void 0 === f ? !1 : f) : c[0].fetchStarted(b);
    a = Hm(a.j) - c.length;
    Ff($l.w(), (8).toString(), 9, a, 0)
  }, Gt = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    x(b, function (b) {
      var e = zt(a, [b], 1, c);
      a.N(e);
      e.o = a.da(!1);
      e = Bt(a, At(a, "single", e).Aa([b]), d);
      b.fetchStarted(e)
    })
  }, It = function (a, b, c, d) {
    Hs(a.j, c) && (d && a.Ca([c]), d = c.getCollapseEmptyDiv(), null == d && (d = "true" === Vs(a.o, "google_collapse_empty_div")), d && (a = R(c, b)) && ke(a, !1))
  }, Jt = function (a) {
    var b = /!\s*important/i;
    a = a.split(";");
    for (var c = "", d = 0; d < a.length; d++) {
      var e = a[d];
      ib(e) || (b.test(e) || (e += " !important"), c += e + ";")
    }
    return c
  };
  xt.prototype.qa = function (a, b) {
    var c = R(b, a), d = b.M && b.M._os_ || "";
    if (c && d) {
      var e = a.createElement("span");
      e.setAttribute("style", Jt("all:initial;" + d + ";display:inline"));
      e.style && "none" == e.style["pointer-events"] && ((a = Wp(b, a)) || (a = c), a.insertBefore(e, a.childNodes[0] || null))
    }
  };
  xt.prototype.fa = function (a, b) {
    Dl.is(Yj.v) && (b = R(b, a)) && (a = a.createElement("div"), 0 < b.childNodes.length ? b.insertBefore(a, b.childNodes[0]) : b.appendChild(a))
  };
  var Mt = function (a, b, c) {
    var d = void 0 === d ? window : d;
    if (a.l && !u(b))return a = new K("sra_legacy_ad_response"), O(a), N(a), [];
    if (c.length) {
      var e = c[0];
      vp(a.lb, e.getCsiId(), e.eb, e.ka)
    }
    u(b) || (b = [b]);
    e = [];
    for (var f = 0; f < c.length; ++f) {
      var g = c[f], k = b[f][g.getAdUnitPath()];
      k && (Kt(a, g, k), e.push(g))
    }
    switch (si(rl)) {
      case Mj.uc:
        Lt(a, d, "https://www.googletagservices.com/cb/ace_frame.html");
        break;
      case Mj.tc:
        Lt(a, d, "https://www.googletagservices.com/cb/ace_frame.html#cbu=https%3A%2F%2Fwww.googletagservices.com%2Ftag%2Fjs%2Fgpt.js")
    }
    return e
  }, Kt = function (a, b, c) {
    b.M = c;
    b.fetchEnded();
    null != c._host_page_libraries_ && x(c._host_page_libraries_, function (c) {
      var d = a.na;
      if (!Ra(d.l, c))switch (c) {
        case 1:
          var e = c + "_hostpage_library", f = nd(document, qn[c]);
          f && (f.id = e);
          d.l.push(c);
          e = new rn(c);
          d.m.push(e);
          d = mg();
          d.hostpageLibraryTokens || (d.hostpageLibraryTokens = {});
          d.hostpageLibraryTokens[e.j] = e.l
      }
      d = a.na;
      d.j[c] || (d.j[c] = []);
      d.j[c].push(b)
    });
    null != c._cookies_ && Ss(a.X, c);
    c._persistent_for_stream_ && (a.j.L[I(b)] = null);
    if (c = c._a_exps_)for (var d = 0, e = c.length; d < e; d++)xk(c[d].toString(), !0)
  }, Nt = function (a) {
    (a = (a = a.M) && a._resources_) && x(a, function (a) {
      if (a) {
        var b = a.url;
        a = a.as;
        if (b && a) {
          var d = tt.w();
          2 !== d.j[b] && 3 !== d.j[b] && (d.j[b] = 2, "image" == a ? wt(d, b) : Mr() && ut(d, b, "preload", a))
        }
      }
    })
  }, Pt = function (a, b) {
    if (!b.M)return null;
    b = Ot(b);
    var c = -1 === b;
    return null == b || 0 > b && !c ? null : a.U(Math.max(b, 0) + "%", c)
  };
  xt.prototype.U = function (a, b) {
    var c = this;
    b = void 0 === b ? !1 : b;
    return m.IntersectionObserver ? new m.IntersectionObserver(function (a, e) {
      return c.ha(a, e, b)
    }, {rootMargin: a}) : null
  };
  xt.prototype.ha = function (a, b, c) {
    var d = this;
    c = void 0 === c ? !1 : c;
    x(a, function (a) {
      if (c || !(0 >= a.intersectionRatio)) {
        b.unobserve(a.target);
        a = a.target.id;
        var e = d.H[a];
        e && (e.call(d), delete d.H[a])
      }
    })
  };
  var Qt = function () {
    m.googletag._getcook_ = 1
  }, Rt = function (a, b, c) {
    if (b.length) {
      var d = La(b, function (a) {
        return a.getCsiId()
      });
      d = {req_len: c.length, req_s: d.join("-")};
      b = b[0];
      b.eb = c;
      tp(a.lb, b.getCsiId(), b.ka, d)
    }
  }, St = function (a, b, c) {
    a = a.lb;
    var d = b.getCsiId(), e = b.ka, f = Up(b);
    b = !!Tp(b);
    lp(a, "start_ad_render_period", d, e);
    kp(a, "exr", d, e, f ? 1 : 0);
    Hf($l.w(), (5).toString(), d);
    m.google_timing_params = m.google_timing_params || {};
    m.google_timing_params["qqid." + d] = c;
    qp(a, "is_backfill_at_render", "" + d + "_" + b, e);
    qp(a, "qqid", "" + d + "_" + c, e)
  };
  xt.prototype.oa = function (a) {
    var b = this;
    ni(Xl, E.w().get(195), [function () {
      var a = Gm(b.j);
      return Ra(a, "7646")
    }]);
    if (Xl.is(sk.v))return 16384;
    if ("2" == this.m && pm())return 8192;
    a = a && 4096 < a.length;
    switch (si(sl)) {
      case Nj.Wa:
        a && H(tl, Oj.Wa);
        a = 8192;
        break;
      case Nj.cb:
        a && H(tl, Oj.cb);
        a = 12288;
        break;
      case Nj.bb:
        a && H(tl, Oj.bb);
        a = 16384;
        break;
      case Nj.B:
        a && H(tl, Oj.B);
      default:
        a = 4096
    }
    return a
  };
  var Lt = function (a, b, c) {
    a.Pb || (a.Pb = !0, a = function () {
      try {
        var a = b.document.createElement("iframe");
        a.id = "ace-frame";
        a.src = c;
        a.style.visibility = "hidden";
        a.style.display = "none";
        b.document.body.appendChild(a)
      } catch (e) {
      }
    }, b.requestIdleCallback ? b.requestIdleCallback(a) : b.setTimeout(a, 0))
  }, Et = function (a, b) {
    a = a.match(Ne);
    var c = a[1], d = a[2], e = a[3], f = a[4], g = a[5];
    b = "nwids=" + encodeURIComponent(b);
    var k = "";
    c && (k += c + ":");
    e && (k += "//", d && (k += d + "@"), k += e, f && (k += ":" + f));
    g && (k += g);
    b && (k += "?" + b);
    return {url: k, body: a[6] || null}
  }, Dt = function (a) {
    u(a) ? x(a, Dt) : A(a, function (a) {
      a._cookies_ && delete a._cookies_
    })
  }, Ct = function (a) {
    a = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).replace(/\\x/g, "\\u00");
    var b = m.JSON.parse;
    try {
      return b(a)
    } catch (c) {
      return null
    }
  }, Ot = function (a) {
    a = (a = a.M) && a._margin_render_;
    return t(a) ? a : null
  };
  var Tt = function (a, b, c, d, e) {
    Xs.call(this, a, b, c, d, e)
  };
  ha(Tt, Xs);
  Tt.prototype.D = function () {
    Xs.prototype.D.call(this);
    U(this, "m_ast", "js");
    U(this, "markup", "html");
    U(this, "js", "afmc")
  };
  var Ut = function () {
    var a = hm(window), b = a ? "http:" : "https:";
    a = E.w().get(a ? 173 : 174);
    var c = E.w().get(163) || "", d = "";
    c && (d = "?cb=" + c);
    return b + "//" + a + "/gpt/pubads_impl_rendering_175.js" + d
  }, Vt = function (a) {
    window.googletag._ = P(340, function (a) {
      a(_);
      window.googletag._({});
      delete window.googletag._
    });
    var b = Ut();
    a ? jt(b, "gpt_rendering") : nd(document, b)
  };
  z.once(function () {
    return Vt(!1)
  });
  z.once(function () {
    return Vt(!0)
  });
  var Wt = function (a, b, c, d) {
    xt.call(this, a, b, c, d);
    this.Yb = this.L = this.ra = this.aa = !1;
    this.sa = this.ua = "";
    this.videoStreamCorrelator = NaN;
    this.J = 0;
    this.ba = new rs(this.K);
    this.Gc = Math.random() < E.w().get(66);
    this.vc = Vk.is(oj.xc);
    this.Ac = Vk.is(oj.zc)
  };
  ha(Wt, xt);
  Wt.prototype.V = function () {
    return "unknown"
  };
  var bu = function (a) {
    a.aa = null != Vs(a.o, "google_nofetch") || !!window.google_noFetch || a.aa;
    a.ra = null != Vs(a.o, "google_disable_initial_load") || !!window.google_DisableInitialLoad || a.ra;
    a.L = null != Vs(a.o, "google_norender") || a.L;
    Xt(function () {
      Yt(a)
    });
    Zt(function () {
      var b = new K("gpt_req_disp_mismatch", im(), E.w().get(23));
      M(b, "dslots", $t(a).toString());
      M(b, "impl", a.da(a.l));
      M(b, "sra", a.l ? "1" : "0");
      M(b, "correlator", a.K.toString());
      O(b, a.j);
      N(b)
    });
    au(a)
  };
  Wt.prototype.N = function (a) {
    xt.prototype.N.call(this, a);
    a.I = this.Yb;
    a.J = this.sa;
    a.K = this.ua;
    a.u = this.J
  };
  var Xt = function (a) {
    var b = window;
    b.attachEvent ? b.attachEvent("onload", a) : b.addEventListener && b.addEventListener("load", a, !1)
  }, Zt = function (a) {
    var b = window;
    b.attachEvent ? b.attachEvent("onunload", a) : b.addEventListener && b.addEventListener("unload", a, !1)
  }, Yt = function (a) {
    var b = Gs(a.j);
    if (0 < b.length) {
      for (var c = {}, d = [], e = 0; e < b.length; ++e)c[b[e][0]] = !0;
      A(c, function (a, b) {
        d.push(b)
      });
      b = new K("gpt_missing_cb", im(), E.w().get(10));
      M(b, "pending", d.join());
      M(b, "correlator", a.K.toString());
      M(b, "impl", a.V());
      O(b, a.j);
      N(b)
    }
  }, $t = function (a) {
    return Ma(Ds(a.j), function (a, c) {
      return c.gc ? a + 1 : a
    })
  }, cu = function (a, b) {
    if (a.Gc) {
      var c = b.M;
      c && !c._empty_ && (c = b.M && b.M._html_ || "") && -1 == c.indexOf("adpnt") && (b = b.getEscapedQemQueryId(), c = new K("gpt_qse_missing", im(), 1), M(c, "qemQueryId", b), O(c, a.j), N(c))
    }
  }, du = function (a) {
    var b = new K("gpt_fluid_not_sf", im(), E.w().get(23));
    M(b, "impl", a.V());
    O(b, a.j);
    N(b)
  }, At = function (a, b, c) {
    switch (Vs(a.o, "target_platform")) {
      case "MOBILE":
        return new Tt(b, a.j, a.o, a.X, c);
      default:
        return new it(b, a.j, a.o, a.X, c)
    }
  }, eu = function (a, b, c, d, e) {
    var f = void 0, g = void 0;
    f = void 0 === f ? 0 : f;
    g = void 0 === g ? 0 : g;
    e = void 0 === e ? function () {
      return null
    } : e;
    ss(a.ba).registerAdBlock(b, 3, c, d, f, g, e)
  }, fu = function (a, b, c) {
    if (a.J && b && !zl.is(Uj.v)) {
      c = a.j.j[c];
      var d = "";
      c && (d = c.getContentUrl());
      eu(a, d, a.pa(), b, w(c.Ia, c))
    }
  }, au = function (a) {
    Ck.is(Bi.v) || (ss(a.ba), a.J = a.ba.getOseId())
  };
  Wt.prototype.C = function (a) {
    var b = !!a._use_safe_frame_;
    return a._afc_expandable_ || "height" == a._fluid_ ? b : !this.vc && (this.Ac || b)
  };
  var gu = function (a, b, c) {
    te(a);
    m.setTimeout(P(214, function () {
      var d = Qp(c, b);
      d ? te(a, d) : (d = new K("amp_inabox_failed"), O(d), N(d))
    }), 0)
  };
  var mt = "3rd party ad content";
  ng("setAdIframeTitle", function (a) {
    mt = a
  });
  var V = function (a, b, c, d) {
    Wt.call(this, a, b, c, d);
    a ? (ni(Ik, E.w().get(77), [], !0), ni(ol, E.w().get(124), [])) : ni(Hk, E.w().get(77), [], !0);
    this.D = [];
    this.ca = {};
    this.ya = 0;
    this.wb = {};
    this.zb = this.yb = NaN;
    this.ia = !1;
    this.Ia = NaN;
    this.fc = !1;
    this.Ka = Hk.is(dj.v) || Ik.is(ej.v);
    this.ic = Lk.is(fj.v);
    this.F = {};
    this.ec = Kk.is(cj.v);
    this.Ec = 0;
    this.Ha = Mk.is(gj.v) || Nk.is(hj.v) || Ok.is(ij.v) || El.is(Zj["2"]);
    this.O = {};
    this.u = {};
    this.Z = {};
    this.I = !1;
    this.vb = 0;
    this.La = Cl.is(Xj.v);
    this.ja = P(109, this.ja);
    this.Fa = P(203, this.Fa);
    if (Xf(document)) {
      a = Pj;
      b = Qj;
      c = vl;
      switch (si(ul)) {
        case a.B:
          H(c, b.B);
          break;
        case a.Pa:
          H(c, b.Pa);
          break;
        case a.Qa:
          H(c, b.Qa)
      }
      a = Rj;
      b = Sj;
      c = xl;
      switch (si(wl)) {
        case a.B:
          H(c, b.B);
          break;
        case a.v:
          H(c, b.v)
      }
    }
  };
  ha(V, Wt);
  V.prototype.V = function () {
    return this.l ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
  };
  V.prototype.da = function (a) {
    return a ? "fifs" : "fif"
  };
  V.prototype.N = function (a) {
    Wt.prototype.N.call(this, a);
    a.persistentRoadblocksOnly = this.fc;
    a.videoPodNumber = this.yb;
    a.videoPodPosition = this.zb;
    a.videoStreamCorrelator = this.videoStreamCorrelator
  };
  var ju = function (a, b, c, d) {
    b = {xa: b, bc: c, Zc: void 0 === d ? null : d};
    hu(a, b) || iu(a, b)
  }, hu = function (a, b) {
    if (!(ul.is(Pj.Pa) || wl.is(Rj.v) || yl.is(Tj.v) && !ii()) || !Xf(document))return ku(a, b);
    var c = b.xa.j;
    if (!Oa(c, function (b) {
        return !lu(a, window, 0, b)
      }))return !1;
    mu(a);
    if (!a.I)return !1;
    x(c, function (c) {
      var d = c.getSlotElementId();
      a.Z[d] = b;
      a.u[d] = function () {
        var b = a.Z[d];
        b && (ku(a, b) || iu(a, b))
      }
    });
    return !0
  }, ku = function (a, b) {
    var c = si(ql), d = wk[c];
    if (null == d)return !1;
    var e = Math.max(d / 100, 1);
    c = b.xa.j;
    if (!Oa(c, function (b) {
        var c = R(b);
        return Uf(c) && !lu(a, window, e, b)
      }))return !1;
    var f = a.U(d + "%");
    if (!f)return !1;
    var g = function () {
      return iu(a, b, d)
    };
    x(c, function (b) {
      var c = b.getSlotElementId();
      if (b = R(b)) a.H[c] = g, f.observe(b)
    });
    return !0
  }, mu = function (a) {
    var b = Wf(document);
    if (!a.I && b) {
      var c = P(324, function () {
        Xf(document) || (me(document, b, c), A(a.u, function (b) {
          return b.call(a)
        }), a.u = {})
      });
      a.I = le(document, b, c)
    }
  }, iu = function (a, b, c) {
    c = void 0 === c ? null : c;
    var d = b.xa.j;
    null != c && x(d, function (b) {
      var d = b.getSlotElementId(), e = R(b);
      nu(a, e, d, b, c + "%")
    });
    a.I && !rd(a.u) && x(d, function (b) {
      b = b.getSlotElementId();
      delete a.u[b];
      delete a.Z[b]
    });
    ou(a, b)
  }, ou = function (a, b) {
    var c = b.xa.j, d = a.Aa(b.xa), e = a.Sb(d), f = b.xa.l;
    if (3 == e) pu(a, d, c, b.bc, f, b.Zc); else if (e = 1 == e, a.Vb(d, c, e, f), e && a.X && 1 != m.googletag._getcook_) {
      d = c[b.bc].u;
      var g = window;
      f = document.domain;
      var k = kl.is(Fj.v);
      e = !!a.j.F;
      k = k && !hm(g, k);
      g = a.X;
      1 == g.va || !g.j && !g.m ? d = null : (e = gm(e || k) + "/gampad/cookie.js?", e += "domain=" + encodeURIComponent(f), e = e + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" + ("&iu=" + d), g.j && (e += "&cookie=" + encodeURIComponent(g.j)), g.m && (e += "&cookie_enabled=1"), d = e);
      d && nd(document, em(d))
    }
    b.xa.O = !0;
    Qt();
    a.l || (a.wb[I(c[0])] = window.setTimeout(w(a.Bc, a), E.w().get(13)));
    E.w().get(34) || vt();
    Sl.is(ok.Ab) && qu(c)
  }, qu = function (a) {
    var b = qf();
    x(a, function (a) {
      a.ya = b
    })
  }, ru = function (a, b, c, d) {
    var e = "";
    d && (e = e + '<script type="text/javascript">' + ("function " + c + "(adContents) { ") + ("window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + a + ");}") + "\x3c/script>");
    return e += '<script src = "' + b + '">\x3c/script>'
  }, su = function (a, b, c, d, e) {
    for (var f = d.split("."), g = window, k = 0; k < f.length && g; k++)g = g[f[k]];
    g && (f = new K("gpt_callbackexists"), O(f), M(f, "callback", d), N(f));
    e ? Ca(d, function (c) {
      a.Fa(window, c, b)
    }) : g || Ca(d, sa);
    nd(document, c)
  }, tu = function (a) {
    var b = new K("gpt_ignore_resp");
    O(b);
    M(b, "req_id", String(a));
    N(b)
  }, pu = function (a, b, c, d, e, f) {
    f = void 0 === f ? null : f;
    b = Bt(a, b);
    var g = em(b);
    Ht(a, g, c, e, a.l);
    uu(a, c, d);
    var k = ++a.ya;
    a.ca[k] = c;
    var l = a.l || Hs(a.j, c[0]);
    l || tu(k);
    b = "";
    a.Ha || (b = ru(k, g, e, l));
    Rt(a, c, g);
    if (a.Ha) su(a, k, g, e, l); else {
      if (null == R(c[d]))if (e = Pa(c, function (a) {
          return null != R(a)
        }), -1 != e) d = e; else {
        f && vu(a, c[d], b, f);
        return
      }
      vu(a, c[d], b, c[d])
    }
  };
  V.prototype.Vb = function (a, b, c, d) {
    var e = this;
    a = Bt(this, a, c);
    var f = em(a);
    Ht(this, f, b, d, this.l, c);
    var g = ++this.ya;
    this.ca[g] = b;
    var k = this.l || Hs(this.j, b[0]);
    Ft(this, a, function (a) {
      k ? e.Fa(window, a, g) : tu(g)
    }, function () {
      su(e, g, f, d, k)
    }, Gm(this.j, b).join(","), c);
    Rt(this, b, a)
  };
  var vu = function (a, b, c, d) {
    var e = document, f = b.getSlotElementId(), g = a.O[f];
    if (!g) {
      d = R(d, e);
      if (null == d)return;
      b = Vp(b) + "__hidden__";
      g = kt(d, b, "", !0, [0, 0], e);
      a.O[f] = g
    }
    st(g, c, !1)
  }, wu = function (a) {
    return Vp(a) + "__container__"
  }, Au = function (a, b) {
    var c = document;
    if (Hs(a.j, b)) {
      var d = b.getSlotElementId(), e = R(b, c);
      if (e)if (nu(a, e, d, b), 0 < b.D) {
        var f = R(b, c);
        if (f) {
          d = wu(b);
          e = Vp(b) + "__hidden__";
          f = f.childNodes;
          for (var g = !1, k = 0; k < f.length; ++k)if (1 == f[k].nodeType) {
            var l = f[k];
            if (l.id != d && l.id != e && !xu.test(l.id)) {
              g = !0;
              break
            }
          }
          (g = g || yu(c, b)) && zu(a, b)
        }
      } else e && (e.innerHTML = "")
    }
  }, yu = function (a, b) {
    a = Wp(b, a);
    return !!a && Na(Wd(a), function (a) {
        return a.id != Vp(b)
      })
  };
  V.prototype.cc = function (a, b) {
    var c = this, d = document, e = !1;
    switch (si(Sl)) {
      case ok.Cc:
        e = Xf(d);
        break;
      case ok.Ab:
        e = !0
    }
    e ? (Bu(d), a = Ka(a, function (a) {
      return !a.V
    }), a.length && (x(a, function (a) {
      a.V = !0
    }), Cu(d, function () {
      return Du(c, a, b)
    }))) : Eu(this, a, b)
  };
  var Du = function (a, b, c) {
    var d = qf();
    b = gb(b, function (a) {
      a = a.ya;
      if (null == a) a = 0; else {
        if (Fu.length) {
          for (var b = 0, c = Fu.length - 1; 0 <= c; c--) {
            var e = Fu[c], f = e.Nd;
            if (a <= e.Md) b += f; else break
          }
          a = d - a - b
        } else a = d - a;
        a = Math.max(0, Math.round((3E4 - a) / 1E3))
      }
      return a
    });
    var e = b[0] || [];
    A(b, function (b, d) {
      d = parseInt(d, 10);
      !d || 0 > d || Gu(document, 1E3 * d, P(375, function () {
        Eu(a, b, c)
      }))
    });
    e.length && Cu(document, function () {
      return Eu(a, e, c)
    })
  }, Eu = function (a, b, c) {
    Hu(P(347, function () {
      return Iu(a, b, c)
    }))
  }, Iu = function (a, b, c) {
    x(b, function (a) {
      a.V = !1
    });
    if (!a.I || !Oa(b, function (b) {
        return !!a.u[b.getSlotElementId()]
      }))if (b = gb(b, function (a) {
        return 0 != Lp(a).length
      }), b[!1] && x(b[!1], function (b) {
        It(a, document, b, !0)
      }), b = b[!0]) {
      var d = c.isVideoRefresh ? 3 : 2, e = cp();
      x(b, function (a) {
        a.oa = ++cp().ia;
        var b = a.getCsiId();
        qp(e, "request_refresh_type", b + "_" + d, a.ka)
      });
      if (p(c.videoStreamCorrelator)) a.videoStreamCorrelator = c.videoStreamCorrelator; else {
        var f = !Vl.is(pk.v);
        p(c.changeCorrelator) && (f = c.changeCorrelator);
        f && yt(a)
      }
      a.yb = c.videoPodNumber || NaN;
      a.zb = c.videoPodPosition || NaN;
      a.fc = c.persistentRoadblocksOnly || !1;
      a.ia = c.clearUnfilledSlots || !1;
      Fs(a.j, b);
      a.Ia = b.length;
      if (!Ul.is(tk.v))for (c = 0; c < b.length; ++c)Au(a, b[c]);
      if (!a.aa) {
        var g = w(function (a) {
          var b = Ju(this);
          return zt(this, a, d, b)
        }, a);
        if (a.l) b = gb(b, function (a) {
          return a.u
        }), A(b, function (a) {
          Ku(this, g(a), 0)
        }, a); else for (c = 0; c < b.length; ++c)Ku(a, g([b[c]]), 0)
      }
    }
  };
  V.prototype.Ca = function (a) {
    for (var b = 0; b < a.length; ++b)zu(this, a[b]), Lu(this, a[b]), Rp(a[b]);
    return !0
  };
  var nu = function (a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    b && a.H[c] && ((d = e ? a.U(e) : Pt(a, d)) && d.unobserve(b), delete a.H[c])
  }, Mu = function (a, b) {
    delete a.Z[b];
    delete a.u[b];
    A(a.Z, function (a) {
      Xa(a.xa.j, function (a) {
        return a.getSlotElementId() === b
      })
    })
  }, zu = function (a, b) {
    var c = R(b), d = b.getSlotElementId();
    nu(a, c, d, b);
    Mu(a, d);
    0 < b.D ? Nu(a, b) : c && (c.innerHTML = "")
  }, Nu = function (a, b) {
    var c = R(b), d = !!b.m;
    Ou(a, b);
    if (d) {
      if (!c)return;
      var e = wu(b) + "__to_be_removed__";
      d = $a(c.childNodes);
      x(d, function (a) {
        1 == a.nodeType && a.id == e || c.removeChild(a)
      })
    } else c && (c.innerHTML = "");
    delete a.O[b.getSlotElementId()]
  }, Pu = function (a, b, c, d, e) {
    var f = wu(c);
    b = b.createElement("div");
    b.id = f;
    b.name = f;
    f = b.style;
    f.border = "0pt none";
    a.j.o && (f.margin = "auto", f.textAlign = "center");
    e && (a = u(e), f.width = a ? e[0] + "px" : "100%", f.height = a ? e[1] + "px" : "0%");
    d.appendChild(b);
    c.Ba && (c.F = b);
    return b
  }, Qu = function (a, b, c, d, e) {
    var f = Vp(c);
    b = kt(d, f, mt, !1, e, b);
    le(b, "load", function () {
      c.A && a.loaded(c)
    });
    c.j = !0;
    c.Ba && (c.H = b);
    return b
  };
  V.prototype.ja = function (a) {
    A(this.F, function (b) {
      Qp(b.slot, a) || Qu(this, a, b.slot, b.Uc, b.size)
    }, this);
    this.F = {}
  };
  var Ru = function (a, b, c, d) {
    var e = Lp(c);
    if (0 == e.length)var f = null; else if (f = e[0], 1 < e.length) {
      b:if ((e = R(c, b)) && e.style.height && e.style.width) {
        e = [e.style.width, e.style.height];
        for (var g = 0; g < e.length; ++g)if (2 < e[g].length && "px" == e[g].substring(e[g].length - 2)) e[g] = parseInt(e[g], 10); else {
          e = null;
          break b
        }
      } else e = null;
      f = e || f
    }
    f && (e = Qp(c, b), null != e ? a.j.m[I(c)] = e : (e = R(c, b), null != e && (a.Ka && d ? (d = Wp(c, b) || Pu(a, b, c, e, f), e = Vp(c), a.F[e] || (g = rd(a.F), a.j.m[I(c)] = d, a.F[e] = {
      slot: c,
      Uc: d,
      size: f
    }, g && window.setTimeout(w(a.ja, a, b), 0))) : (d = Pu(a, b, c, e), b = Qu(a, b, c, d, f), a.j.m[I(c)] = b))))
  }, Su = function (a, b, c) {
    var d = {};
    d = (d[wj.Mc] = 1.5, d[wj.Nc] = 2, d[wj.Oc] = 2.5, d[wj.Pc] = 3, d)[si(bl)];
    var e = b.pageYOffset;
    b = b.innerHeight;
    if (d && t(e) && t(b)) {
      var f = e + b * d, g = function (a, b) {
        a = (a = a.M) && a._height_ || 0;
        return !!b && b.y + a >= e && b.y < f
      };
      eb(c, function (b, c) {
        var d = Ls(a.j, b), e = Ls(a.j, c);
        b = g(b, d);
        return b != g(c, e) ? b ? -1 : 1 : b ? d.y - e.y : 0
      })
    }
  };
  V.prototype.Na = function () {
  };
  V.prototype.Qb = function () {
  };
  V.prototype.jc = function () {
  };
  V.prototype.Fa = function (a, b, c) {
    Tu(this, a, b, c)
  };
  var Tu = function (a, b, c, d) {
    var e = a.ca[d];
    e ? (c = Mt(a, c, e), delete a.ca[d], Su(a, b, c), x(c, function (b) {
      return Uu(a, b)
    }), a.l || d != a.ya || (window.clearTimeout(a.wb[I(e[0])]), Vu(a))) : (b = new K("gpt_req_undef"), O(b), M(b, "req_id", String(d)), N(b))
  };
  V.prototype.Bc = function () {
    var a = new K("gpt_request_timeout", im(), E.w().get(23));
    O(a, this.j);
    N(a);
    Vu(this)
  };
  var Vu = function (a) {
    0 < a.D.length && (a.D.shift(), 0 < a.D.length && ju(a, a.D[0], 0))
  };
  V.prototype.mb = function (a, b) {
    if (!ol.is(Jj.v) || !Qp(a, b) || a.j) {
      var c = a.M;
      Ru(this, b, a, !c);
      null != c && Uu(this, a, b)
    }
  };
  var Ku = function (a, b, c, d, e) {
    d = void 0 === d ? document : d;
    e = void 0 === e ? null : e;
    for (var f = 0, g = b.j.length; f < g; f++)Ru(a, d, b.j[f], !0);
    a.l || !a.j.J ? ju(a, b, c, e) : (a.D.push(b), 1 == a.D.length ? ju(a, b, c) : (b = Ka(a.D, function (a) {
      return !a.O
    }), 1 < b.length && (c = new K("gpt_request_queue_length", im()), M(c, "len", "" + b.length), O(c, a.j), N(c))))
  };
  V.prototype.Hb = function (a) {
    if (!this.l) {
      var b = R(a);
      b && (this.j.I[I(a)] = b)
    }
  };
  V.prototype.Tb = function () {
  };
  V.prototype.Gb = function () {
  };
  V.prototype.nb = function (a) {
    var b = this;
    var c = void 0 === c ? document : c;
    Hu(P(348, function () {
      return Wu(b, a, c)
    }))
  };
  var Wu = function (a, b, c) {
    a.La || Lu(a, b);
    var d = [], e = [], f = -1, g = null;
    if (a.l || a.ec) {
      a.mb(b, c);
      d = Es(a.j);
      if (0 == d.length)return;
      d = gb(d, function (a) {
        return 0 != Lp(a).length
      });
      d[!1] && Xu(a, d[!1]);
      d = d[!0];
      if (!d)return
    }
    if (a.l) {
      var k = gb(d, function (a) {
        return a.u
      });
      g = Qa(d, function (a) {
        return null != R(a)
      });
      A(k, function (a, c) {
        c == b.u ? e.unshift(a) : e.push(a)
      });
      d = e[0];
      f = b.o || !Ra(d, b) ? 0 : Pa(d, function (a) {
        return I(b) == I(a)
      })
    } else {
      if (a.ec) g = Qa(d, function (a) {
        return null != R(a)
      }), e = La(d, function (a) {
        return [a]
      }); else {
        if (0 == Lp(b).length) {
          It(a, document, b, !0);
          return
        }
        d = [b];
        e = [d]
      }
      f = 0
    }
    a.aa || a.ra ? a.La && Lu(a, b) : (x(e, function (b) {
      var d = Ju(a);
      b = zt(a, b, 1, d);
      Ku(a, b, f, c, g);
      f = 0
    }), a.La && b.j && Lu(a, b))
  }, Ju = function (a) {
    var b = "callbackProxy";
    a.Ha && (a = ++a.Ec, b = "googletag.impl.pubads." + b + a);
    return b
  }, Xu = function (a, b) {
    x(b, function (b) {
      0 == Lp(b).length && It(a, document, b, !0)
    })
  }, Lu = function (a, b) {
    var c = b.getDivStartsCollapsed();
    null == c && (c = "true" === Vs(a.o, "google_divs_start_collapsed"));
    c && (a = R(b)) && ke(a, !1)
  }, $u = function (a, b, c) {
    var d = c.M;
    d = d && d._timeout_render_;
    var e = t(d) && -1 < d ? d : null;
    var f = Ot(c);
    if (null == f && null == e || lu(a, m, (f || 0) / 100, c))return !1;
    d = null;
    null != e && (d = Yu(a, b, c, e));
    a = null != f && Zu(a, b, c, d);
    return null != d || a
  }, bv = function (a, b, c) {
    if (nl.is(Ij.nc))return !1;
    if (!(ul.is(Pj.Qa) || wl.is(Rj.v) || yl.is(Tj.v) && !ii()) || !Xf(document) || lu(a, m, 0, c))return $u(a, b, c);
    mu(a);
    if (!a.I)return !1;
    a.u[c.getSlotElementId()] = function () {
      $u(a, b, c) || av(a, b, c)
    };
    return !0
  }, lu = function (a, b, c, d) {
    a = Ls(a.j, d);
    if (!a || -12245933 == a.y)return !0;
    try {
      var e = Tf(b.top.document, b.top).y
    } catch (f) {
      return !0
    }
    b = an(!0, b);
    c = e + b.height * (c + 1);
    return a.y >= e && a.y <= c
  }, Yu = function (a, b, c, d) {
    var e = R(c, b), f = c.getSlotElementId(), g = function () {
      var k = qf() - a.vb, l = E.w().get(182);
      k >= l || !m.requestIdleCallback ? (nu(a, e, f, c), av(a, b, c)) : m.requestIdleCallback(g, {timeout: d})
    };
    return m.requestIdleCallback ? m.requestIdleCallback(g, {timeout: d}) : m.setTimeout(g, d)
  }, Zu = function (a, b, c, d) {
    var e = c.getSlotElementId(), f = R(c, b);
    if (!Uf(f))return !1;
    var g = Pt(a, c);
    if (!g)return !1;
    var k = !!a.H[e];
    a.H[e] = function () {
      d && (m.cancelIdleCallback ? m.cancelIdleCallback(d) : m.clearTimeout(d));
      av(a, b, c)
    };
    k || g.observe(f);
    return !0
  }, Uu = function (a, b, c) {
    c = void 0 === c ? document : c;
    try {
      var d = b.M;
      if (null != d && !d._empty_ && !a.L) {
        var e = R(b, c);
        e && ke(e, !0)
      }
      bv(a, c, b) ? Nt(b) : av(a, c, b)
    } catch (f) {
    }
  }, cv = function (a, b, c) {
    It(a, b, c, a.ia);
    b = Op(c);
    b.slotContentChanged = a.ia;
    c.renderEnded(b)
  }, av = function (a, b, c) {
    var d = c.M, e = c.getEscapedQemQueryId(), f = R(c, b);
    f && f.setAttribute("data-google-query-id", e);
    St(a, c, e);
    a.vb = qf();
    c.renderStarted();
    if (null == d || d._empty_) cv(a, b, c); else if (a.L) c.renderEnded(Op(c)); else {
      e = d._html_;
      if (!r(e)) {
        Ou(a, c);
        return
      }
      dv(a, c);
      var g;
      "height" == d._fluid_ ? g = "fluid" : g = [d._width_, d._height_];
      gu(m, b, c);
      a.C(d) ? ev(a, m, b, c, g, e, function () {
        a.loaded(c)
      }, {sandbox: d._use_sandbox_ || !1}) : fv(a, b, c, g, e);
      Is(c, Np(c, d))
    }
    d = c.getSlotElementId();
    lt(a.O[d]) && delete a.O[d];
    a.fa(b, c);
    cu(a, c)
  }, gv = function (a, b, c) {
    ss(a.ba).unloadAdBlock(b, !!c.m)
  }, Ou = function (a, b) {
    var c = Wp(b, document), d = b.m;
    if (c) {
      var e = Qp(b, document);
      a.J && gv(a, e, b);
      var f = m.ampInaboxIframes;
      f && Wa(f, e);
      b.m ? a.J ? (c.style.display = "none", c.id += "__to_be_removed__", e.id = e.id + "__to_be_removed__", a = E.w().get(24), window.setTimeout(function () {
        d && $n(d);
        Vd(c)
      }, a)) : (d && $n(d), Vd(c)) : c.parentNode.removeChild(c)
    } else d && $n(d);
    b.Ba && (b.F = null);
    b.Ba && (b.H = null);
    b.m = null
  }, dv = function (a, b) {
    var c = void 0 === c ? document : c;
    var d = !!b.m, e = a.C(b.M), f = Vp(b);
    f = a.F[f];
    e = !b.j && !e && !f;
    d || !a.ic && e ? (Ou(a, b), Ru(a, c, b)) : (c = Qp(b, c), a.ic && e && (d = c.parentNode, d.removeChild(c), d.appendChild(c)), a.J && gv(a, c, b))
  }, fv = function (a, b, c, d, e) {
    var f = Vp(c), g = Qp(c, b);
    if (null == g)if (a.Ka) g = Wp(c, b), g = Qu(a, b, c, g, d), delete a.F[f]; else return;
    r(d) ? du(a) : (g.width = String(d[0]), g.height = String(d[1]), a.Ka && (b = Wp(c, b), b.style.width = "", b.style.height = ""));
    st(g, e, !0);
    c.j = !1;
    fu(a, g, I(c))
  }, ev = function (a, b, c, d, e, f, g, k) {
    var l = Wp(d, c);
    if (null != l) {
      for (var n; n = l.firstChild;)l.removeChild(n);
      a.j.o || (l.style.display = "inline-block");
      k = jo([k, a.j.K, d.Z]);
      b = ot(b, l, Vp(d), f, e, g, k, !!Tp(d), Up(d), a.na.m);
      d.m = b;
      d.j = !1;
      fu(a, Qp(d, c), I(d))
    }
  };
  V.prototype.ac = function () {
    return isNaN(this.Ia) || this.l ? 0 == Es(this.j).length : Es(this.j).length == Hm(this.j) - this.Ia
  };
  var uu = function (a, b, c) {
    null == R(b[c]) && hv(a);
    a.l && (Na(b, function (a) {
      return null != R(a)
    }) || iv(a))
  }, hv = function (a) {
    var b = new K("gpt_target_slot_has_no_div", im(), E.w().get(29));
    M(b, "sra", a.l ? "1" : "0");
    O(b, a.j);
    N(b)
  }, iv = function (a) {
    var b = new K("gpt_request_slots_have_no_divs", im(), E.w().get(29));
    O(b, a.j);
    N(b)
  }, Hu = function (a) {
    switch (si(Ll)) {
      case gk.Cb:
        ds(a);
        break;
      case gk.Db:
        gs(a);
        break;
      case gk.B:
      case gk.Bb:
        a();
        break;
      default:
        Vb() && 0 <= Eb(ac(), 11) ? ds(a) : a()
    }
  }, Fu = [], jv = null, Bu = function (a) {
    var b = Wf(a);
    if (b && !jv) {
      var c = Xf(a) ? qf() : 0;
      jv = function () {
        var b = Xf(a), e = qf();
        b ? c = e : Fu.push({Md: c, Nd: e - c})
      };
      le(a, b, jv)
    }
  }, Gu = function (a, b, c) {
    var d = Wf(a), e = Xf(a);
    if (!d || !e && 0 >= b) c(); else {
      var f = 0;
      if (!e) {
        f = qf();
        var g = window.setTimeout(function () {
          me(a, d, k);
          Gu(a, 0, c)
        }, b)
      }
      var k = function () {
        var l = Xf(a);
        e != l && (me(a, d, k), e && !l ? Gu(a, b, c) : (l = qf() - f, window.clearTimeout(g), Gu(a, b - l, c)))
      };
      le(a, d, k)
    }
  }, Cu = function (a, b) {
    Gu(a, 0, b)
  }, xu = /google_ads_iframe_\S+__hidden__/;
  var kv = function (a, b, c, d, e) {
    this.F = b;
    this.D = c;
    this.H = d;
    this.o = a;
    this.m = -1;
    this.j = 1;
    this.l = "";
    this.C = e;
    this.A = this.u = 0
  }, ov = function (a, b) {
    if (b)if (1 != a.j && 2 != a.j) Lm(321, Error("state err: " + lv(a))); else {
      a.A++;
      a.l && (b = a.l + b);
      var c = 0, d;
      do {
        var e = b.indexOf("\n", c), f = (d = -1 != e) ? e : b.length;
        if (!d)if (1 == a.j || a.C)break; else {
          for (var g = f - 1, k = 0; 0 <= g && "\\" == b[g--];)k++;
          k & 1 && f--
        }
        c = b.substr(c, f - c);
        var l = a;
        k = d && 2 == a.j;
        var n = 1 == l.j;
        n && ++l.m;
        if (g = l.o[l.m])if (n) {
          k = l;
          try {
            k.F(g, mv(c))
          } catch (q) {
          }
          k.j = 2
        } else {
          try {
            l.D(g, nv(c), k)
          } catch (q) {
          }
          k && (l.j = 1)
        } else Lm(321, Error("missing slot: " + lv(l)));
        a.u += c.length;
        c = d ? e + 1 : f
      } while (d && c < b.length);
      a.l = b.substr(c)
    }
  }, pv = function (a, b) {
    a.j = 4;
    try {
      a.H(b)
    } catch (c) {
    }
  }, qv = function (a) {
    1 != a.j || a.l ? pv(a, Error("state err" + lv(a))) : 0 < a.o.length - (a.m + 1) ? pv(a, Error("unhandled slots: " + lv(a))) : a.j = 3
  }, lv = function (a) {
    return "(" + [a.j, a.o.length, a.m, a.u, a.l.length, a.A].join() + ")"
  }, mv = function (a) {
    try {
      var b = m.JSON.parse(a);
      return v(b) ? b : null
    } catch (c) {
      return Lm(321, c), null
    }
  }, nv = function (a) {
    return a.replace(/\\(n|r|\\)/g, function (a, c) {
      return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
    })
  };
  var sv = function (a, b, c, d) {
    this.u = null == b ? "GET" : "POST";
    this.l = b;
    this.A = a;
    this.j = c;
    this.C = !1;
    this.D = rv && (d || !rm());
    this.F = 0;
    this.H = this.D ? null : new m.TextDecoder;
    this.m = P(323, this.m);
    this.o = P(323, this.o)
  }, vv = function (a) {
    a.C || (a.C = !0, a.D ? tv(a) : uv(a))
  }, uv = function (a) {
    var b = {method: a.u, credentials: "include"};
    a.l && (b.body = a.l);
    m.fetch(a.A, b).then(P(323, function (b) {
      return a.m(b)
    }))["catch"](function (b) {
      return pv(a.j, b)
    })
  };
  sv.prototype.m = function (a) {
    var b = this;
    if (300 <= a.status)throw Error("fetch err: " + a.status);
    if (!a.body)return a.text().then(P(323, function (a) {
      ov(b.j, a);
      qv(b.j)
    }));
    a = a.body.getReader();
    return wv(this, a)
  };
  sv.prototype.o = function (a, b) {
    if (a.value) {
      var c = this.H.decode(a.value, {stream: !0});
      ov(this.j, c)
    }
    if (a.done) qv(this.j); else return wv(this, b)
  };
  var wv = function (a, b) {
    return b.read().then(function (c) {
      return a.o(c, b)
    })
  }, tv = function (a) {
    var b = new m.XMLHttpRequest;
    b.open(a.u, a.A);
    b.withCredentials = !0;
    b.onreadystatechange = P(322, function () {
      if (3 == b.readyState || 4 == b.readyState)if (300 <= b.status) pv(a.j, Error("xhr_err-" + b.status)); else {
        var c = b.responseText.substr(a.F);
        c && ov(a.j, c);
        a.F = b.responseText.length;
        4 == b.readyState && qv(a.j)
      }
    });
    b.onerror = function (b) {
      return pv(a.j, b)
    };
    b.send(a.l)
  }, rv = pm() && qm(), xv = rv || rm();
  var yv = function (a, b, c, d) {
    E.w().set(77, 0);
    V.call(this, a, b, c, d);
    this.Fc = 1;
    this.A = {};
    this.hc = {}
  };
  ha(yv, V);
  yv.prototype.pa = function () {
    return "ldjh"
  };
  yv.prototype.Sb = function () {
    return 2
  };
  yv.prototype.oa = function () {
    return 8192
  };
  var zv = function (a, b, c, d) {
    b = em(Bt(a, b, d));
    return d ? Et(b, Gm(a.j, c).join()) : {url: b, body: null}
  };
  yv.prototype.Vb = function (a, b, c) {
    var d = this;
    var e = void 0 === e ? document : e;
    var f = this.Fc++, g = P(287, function (a, b) {
      var c = e;
      c = void 0 === c ? document : c;
      d.hc[f] || (d.hc[f] = !0, vp(cp(), a.getCsiId(), a.eb, a.ka));
      var g = I(a);
      (b = b[a.getAdUnitPath()]) && Hs(d.j, a) && !d.A[g] && (Kt(d, a, b), d.A[g] = f, Av(d, a, c))
    }), k = P(288, function (a, b, c) {
      Bv(d, f, a, b, c, e)
    }), l = P(289, function (a) {
      return Cv(d, a, f)
    });
    c = zv(this, a, b, c);
    a = c.url;
    c = c.body;
    var n = !pt || (this.l ? ml.is(Hj.Xa) : ll.is(Gj.Xa));
    g = new kv(b, g, k, l, n);
    k = this.l ? nl.is(Ij.za) || nl.is(Ij.Ya) || ml.is(Hj.za) : ll.is(Gj.za);
    Rt(this, b, a);
    vv(new sv(a, c, g, k));
    Ht(this, a, b, "", this.l)
  };
  var Cv = function (a, b, c) {
    var d = Ob(a.A, function (a) {
      return a == c
    });
    d && delete a.A[d];
    Mm(289, Error(b && b.message || "strm_err"), !0)
  }, Av = function (a, b, c) {
    var d = b.M;
    if (d && !d._empty_) {
      var e = R(b, c);
      e && ke(e, !0);
      dv(a, b);
      !a.C(d) && (b.j = !0, a = Qp(b, c)) && (d._width_ && (a.width = String(d._width_)), d._height_ && (a.height = String(d._height_)))
    }
  }, Dv = function (a, b, c, d, e) {
    if (d)try {
      b.contentWindow.inDapIF = !0
    } catch (f) {
    }
    st(b, c, !1, d, e);
    a.j = !1
  }, Bv = function (a, b, c, d, e, f) {
    f = void 0 === f ? document : f;
    var g = I(c);
    if (a.A[g] == b)if (b = c.M, b._html_ || St(a, c, c.getEscapedQemQueryId()), a.L) delete a.A[g], c.renderStarted(), c.renderEnded(Op(c)); else if (e && delete a.A[g], b._empty_) c.renderStarted(), cv(a, f, c); else {
      b._html_ = (b._html_ || "") + d;
      var k = nl.is(Ij.Ya);
      if (!k || e && !bv(a, f, c))if (a.C(b)) e && (c.renderStarted(), ev(a, window, f, c, "height" == b._fluid_ ? "fluid" : [b._width_, b._height_], b._html_, function () {
        return a.loaded(c)
      }, {sandbox: !!b._use_sandbox_}), Is(c, Np(c, c.M)), gu(m, f, c)); else {
        var l = Qp(c, f);
        if (l) {
          var n = c.j;
          n && c.renderStarted();
          Dv(c, l, k ? b._html_ : d, n, e);
          e && (fu(a, l, g), Is(c, Np(c, c.M)), gu(m, f, c))
        }
      }
    }
  };
  yv.prototype.mb = function (a, b) {
    if (this.A[I(a)]) {
      var c = Qp(a, b), d = a.M;
      c || !d || this.C(d) || (Ru(this, b, a), Av(this, a, b), (b = Qp(a, b)) && Dv(a, b, d._html_, !0, !1))
    } else V.prototype.mb.call(this, a, b)
  };
  var Ev = function (a) {
    return xv ? a ? nl.is(Ij.za) || nl.is(Ij.Ya) || !qi(ml) && !ml.is(Hj.B) : !qi(ll) && !ll.is(Gj.B) : !1
  };
  var Fv = function (a) {
    switch (si(Ll)) {
      case gk.Cb:
        es(a);
        break;
      case gk.Db:
        hs(a);
        break;
      case gk.B:
      case gk.Bb:
        a();
        break;
      default:
        Vb() && 0 <= Eb(ac(), 11) ? es(a) : a()
    }
  }, Gv = function (a, b, c, d) {
    Wt.call(this, a, b, c, d);
    this.Z = 0;
    this.D = this.F = null;
    this.u = [];
    this.O = Math.random() < E.w().get(23);
    this.A = !1;
    this.I = 0;
    this.Na = P(204, this.Na)
  };
  ha(Gv, Wt);
  Gv.prototype.V = function () {
    return this.l ? "gut_sync_sra" : "gut_sync"
  };
  Gv.prototype.da = function (a) {
    return a ? "ss" : "s"
  };
  var Hv = function (a, b) {
    if (!a.aa) {
      a.F = b.j;
      var c = a.Aa(b);
      c = em(Bt(a, c, !1));
      var d = ++a.Z;
      Ht(a, c, b.j, "googletag.impl.pubads.setAdContentsBySlotForSync", a.l);
      Qt();
      Rt(a, b.j, c);
      var e = "sae-script-" + d;
      jt(c, e);
      a.O && (a.I = window.setTimeout(function () {
        var a = void 0 === a ? document : a;
        a.getElementById(e) || (a = new K("gpt_write_script_failed"), O(a), N(a, 1))
      }, 0));
      E.w().get(34) || vt()
    }
  };
  h = Gv.prototype;
  h.Fa = function () {
  };
  h.Na = function (a) {
    window.clearTimeout(this.I);
    Mt(this, a, this.F);
    this.F = null;
    this.A || (this.A = !0, Iv(this, this.D));
    this.u.length && Hv(this, this.u.shift())
  };
  h.Hb = function (a) {
    if (!this.l) {
      var b = null;
      var c = Ea.getElementsByTagName("script");
      c && c.length && (b = c[c.length - 1]);
      (b = b && b.parentElement) && (this.j.I[I(a)] = b)
    }
  };
  h.Tb = function (a) {
    var b = "google_temp_div_" + I(a), c = '<div id="' + sb(b) + '"></div>';
    document.write(c);
    c = document;
    (b = r(b) ? c.getElementById(b) : b) && (this.j.m[I(a)] = b)
  };
  h.Gb = function (a) {
    var b = this.j;
    a = I(a);
    var c = b.m[a];
    c && (Vd(c), delete b.m[a])
  };
  h.nb = function (a) {
    var b = this;
    Fv(P(346, function () {
      return Jv(b, a)
    }))
  };
  var Jv = function (a, b) {
    var c = null == a.D;
    a.D = b;
    a.A = !1;
    if (a.l)if (c) {
      if (c = Ka(Ds(a.j), function (a) {
          return 0 != Lp(a).length
        }), Ra(c, b) || It(a, document, b, !1), c.length) {
        c = gb(c, function (a) {
          return a.u
        });
        for (var d in c)if (c.hasOwnProperty(d)) {
          var e = zt(a, c[d], 1, "googletag.impl.pubads.setAdContentsBySlotForSync");
          d == b.u ? a.u.unshift(e) : a.u.push(e)
        }
        a.u.length && Hv(a, a.u.shift())
      }
    } else Iv(a, b); else 0 == Lp(b).length ? It(a, document, b, !1) : Hv(a, zt(a, [b], 1, b.ka ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"))
  }, Iv = function (a, b) {
    var c = window, d = document, e = b.M, f = b.getEscapedQemQueryId(), g = R(b, d);
    g && g.setAttribute("data-google-query-id", f);
    St(a, b, f);
    if (null == e || e._empty_) It(a, d, b, !1), b.renderEnded(Op(b)); else if (a.L) b.renderEnded(Op(b)); else if (a.C(e))if (f = function () {
        a.loaded(b)
      }, g = e._html_) {
      var k;
      "height" == e._fluid_ ? k = "fluid" : k = [e._width_, e._height_];
      gu(c, d, b);
      Qv(a, c, d, b, k, g, f, {sandbox: e._use_sandbox_ || !1});
      Is(b, Np(b, e))
    } else b.renderEnded(Op(b)); else if (e._snippet_ && !e._is_afc_) Tv(a, b, d); else if (km()) {
      k = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + I(b) + "'," + b.ka + ");";
      f = "about:blank";
      if (g = Vs(a.o, "google_domain_reset_url")) {
        var l = Oe(g.match(Ne)[3] || null);
        if (null === l || 0 <= l.indexOf(document.domain)) f = g
      }
      gu(c, d, b);
      if ("height" == e._fluid_) {
        du(a);
        return
      }
      Uv(a, b, f, k, [e._width_, e._height_], a.j.o, d)
    } else gu(c, d, b), c = Vv(a, b, d), d.write("<script>googletag.impl.pubads.createDomIframe(" + zb(c) + " ," + zb(I(b)) + "," + a.j.o + "," + b.ka + ");\x3c/script>");
    a.fa(d, b);
    cu(a, b);
    b.renderStarted()
  }, Qv = function (a, b, c, d, e, f, g, k) {
    Wv(d, c);
    var l = Vp(d) + "__container__";
    l = '<div id="' + sb(l) + '"></div>';
    c.write(l);
    l = Wp(d, c);
    null != l && (a.j.o ? l.style.margin = "auto" : l.style.display = "inline-block", k = jo([k, a.j.K, d.Z]), b = ot(b, l, Vp(d), f, e, g, k, Tp(d) || !1, Up(d)), d.m = b, fu(a, Qp(d, c), I(d)))
  }, Xv = function (a, b, c) {
    var d = c.M, e = b.parentNode, f = d && d._html_;
    f ? (!d._expandable_ || d._is_afc_ && d._is_3pas_ ? (le(b, "load", function () {
      c.A && a.loaded(c)
    }), st(b, f, !0)) : e.innerHTML = f, Is(c, Np(c, d))) : (e.removeChild(b), c.renderEnded(Op(c)))
  };
  Gv.prototype.jc = function (a, b) {
    b && (b = this.j.j[b]) && !b.L && (b.L = !0, Xv(this, a, b))
  };
  var Yv = function (a, b, c, d) {
    d = void 0 === d ? null : d;
    b = b.getSlotElementId() + "_ad_container";
    var e = '<div id="' + sb(b) + '"';
    d && "height" == d._fluid_ ? e += ' style="width:100%;">' : a.j.o && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
    d && (e += d._html_);
    c.write(e + "\n</div>\n");
    return b
  }, Wv = function (a, b) {
    (a = R(a, b)) && a.parentNode && "" === a.innerHTML && a.parentNode.removeChild(a)
  }, Tv = function (a, b, c) {
    Wv(b, c);
    var d = b.M;
    if (null != d) {
      var e = Yv(a, b, c, d);
      d = Np(b, d);
      b.renderEnded(d);
      (c = c.getElementById(e)) && fu(a, c, I(b))
    }
  }, Uv = function (a, b, c, d, e, f, g) {
    g = void 0 === g ? document : g;
    Wv(b, g);
    var k = Vp(b), l = [], n = 0, q = 0;
    u(e) ? (n = e[0], q = e[1]) : du(a);
    c = em(c);
    l.push('<iframe id="', sb(k), '" title="', mt, '" name="', sb(k), '" width="', n, '" height="', q, '" vspace="0" hspace="0" allowtransparency="true" ', 'scrolling="no"', ' marginwidth="0" marginheight="0" frameborder="0" style=', '"border:0px;left:0;position:absolute;top:0;"', ' src="', c, '"');
    null != d && l.push(' onload="', d, '"');
    l.push("></iframe>");
    d = [];
    c = b.getSlotElementId() + "_ad_container";
    d.push('<div id="', sb(c), '"');
    f && d.push(' style="text-align:center" ');
    d.push(">");
    d.push('<ins style="position:relative;width:' + n + "px;height:" + q + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + n + "px;height:" + q + 'px;border:none;display:block;">' + l.join("") + "</ins>") + "</ins>");
    d.push("</div>");
    g.write(d.join(""));
    (f = g.getElementById(k)) && fu(a, f, I(b))
  }, Vv = function (a, b, c) {
    c = void 0 === c ? document : c;
    Wv(b, c);
    return Yv(a, b, c)
  }, Zv = function (a, b, c, d, e, f, g) {
    g = void 0 === g ? "" : g;
    a = Xd(new Gd(a), b);
    a.style.width = d + "px";
    e && (a.style.height = e + "px");
    a.style.display = f;
    a.style.position = "relative";
    g && (a.style.margin = g);
    a.style.border = 0;
    c && a.appendChild(c);
    return a
  }, $v = function (a, b, c, d, e, f) {
    f = void 0 === f ? !1 : f;
    e = Zv(a, "INS", e, c, d, "block");
    d = Zv(a, "INS", e, c, d, "inline-table");
    d.style.verticalAlign = "bottom";
    b = a.getElementById(b);
    f ? (a = Zv(a, "DIV", d, c, null, "block", "auto"), b.appendChild(a)) : b.appendChild(d)
  };
  Gv.prototype.Qb = function (a, b, c, d) {
    var e = this;
    d = void 0 === d ? !1 : d;
    var f = c.M, g = f._width_, k = f._height_, l = f._html_, n = Xd(new Gd(a), "IFRAME"), q = Vp(c);
    n.id = q;
    n.title = mt;
    n.name = q;
    n.width = g;
    n.height = k;
    n.vspace = 0;
    n.hspace = 0;
    n.allowTransparency = "true";
    n.scrolling = "no";
    n.marginWidth = "0";
    n.marginHeight = "0";
    n.frameBorder = "0";
    n.style.border = 0;
    n.style.position = "absolute";
    n.style.top = "0";
    n.style.left = "0";
    le(n, "load", function () {
      c.A && e.loaded(c)
    });
    $v(a, b, g, k, n, d);
    n.contentWindow.document.write(l);
    n.contentWindow.document.write("<script>document.close();\x3c/script>");
    Is(c, Np(c, f))
  };
  Gv.prototype.C = function (a) {
    return a._snippet_ && !a._is_afc_ ? !!a._use_safe_frame_ : Wt.prototype.C.call(this, a)
  };
  var aw = function () {
    this.m = this.j = this.l = null
  }, W = function (a) {
    null == a.l && (a.l = new Bs);
    return a.l
  }, dw = function (a) {
    if (a.j)return a.j;
    var b = Vs(bw(a), "google_ad_impl"), c = cp();
    switch (b) {
      case "gut_sync_sra":
        pp(c, !0);
        a.j = new Gv(!0, W(a), bw(a), Us(void 0));
        hp(c, "sync");
        break;
      case "gut_friendly_iframe":
        pp(c, !1);
        cw(!1);
        Ev(!1) ? a.j = new yv(!1, W(a), bw(a), Us(void 0)) : a.j = new V(!1, W(a), bw(a), Us(void 0));
        hp(c, "fif");
        break;
      case "gut_friendly_iframe_sra":
        pp(c, !0);
        cw(!0);
        Ev(!0) ? a.j = new yv(!0, W(a), bw(a), Us(void 0)) : a.j = new V(!0, W(a), bw(a), Us(void 0));
        hp(c, "fif");
        break;
      default:
        pp(c, !1), a.j = new Gv(!1, W(a), bw(a), Us(void 0)), hp(c, "sync")
    }
    bu(a.j);
    return a.j
  }, bw = function (a) {
    null == a.m && (a.m = new Ws);
    return a.m
  }, ew = null, X = function () {
    ew || (ew = new aw);
    return ew
  }, fw = null, gw = function () {
    fw || (fw = new aw);
    return fw
  }, cw = function (a) {
    var b = [rm, pm];
    a ? (ni(nl, E.w().get(169), [], !1), qi(nl) && ni(ml, E.w().get(121), b, !1)) : ni(ll, E.w().get(122), b, !1)
  };
  var hw = function () {
  };
  h = hw.prototype;
  h.addSlot = function (a) {
    if (!a)return null;
    var b = a.getAdUnitPath();
    return b && b.length ? Cs(W(X()), a) : null
  };
  h.fillSlot = function (a) {
    var b = X(), c = dw(b);
    b = W(b);
    a && b.j[I(a)] && (null == a.M || c.l) && (c.Hb(a), c.Tb(a), c.nb(a), c.Gb(a))
  };
  h.setCookieOptions = function (a) {
    X();
    var b = Us(a);
    b.va = a;
    Qs(b)
  };
  h.setTagForChildDirectedTreatment = function (a) {
    W(X()).O = a
  };
  h.setKidsFriendlyAds = function (a) {
    W(X()).U = a
  };
  h.passback = function (a) {
    if (a) {
      var b = a.getAdUnitPath();
      b && b.length && (b = gw(), Cs(W(b), a), dw(b).nb(a))
    }
  };
  h.disableInitialLoad = function () {
    window.google_DisableInitialLoad = !0
  };
  h.addAttribute = function (a, b) {
    var c = W(X());
    if (!ib(Ab(a))) {
      ib(Ab(b)) && (b = "");
      var d = c.l[a];
      c.l[a] = d ? d + "," + b : b
    }
  };
  h.clearAttribute = function (a) {
    var b = W(X());
    void 0 != a ? ib(Ab(a)) || b.l[a] && delete b.l[a] : b.l = {}
  };
  h.addPageCategoryExclusion = function (a) {
    var b = W(X());
    ib(Ab(a)) || Ua(b.H, a)
  };
  h.clearPageCategoryExclusions = function () {
    W(X()).H = []
  };
  h.addAdSensePageAttribute = function (a, b) {
    var c = W(X());
    return us(c.A, a, b)
  };
  h.addAdSenseSlotAttribute = function (a, b, c) {
    var d = W(X());
    a && d.j[I(a)] ? (a = I(a), null == d.C[a] && (d.C[a] = new ts(d.X)), b = us(d.C[a], b, c)) : b = !1;
    return b
  };
  h.enableSingleRequest = function () {
    var a = bw(X());
    null == Vs(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_sync_sra")
  };
  h.collapseEmptyDivs = function (a) {
    var b = bw(X());
    b.j.google_collapse_empty_div = "true";
    a && (b.j.google_divs_start_collapsed = "true")
  };
  h.enableAsyncRendering = function () {
    var a = bw(X());
    null == Vs(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe")
  };
  h.enableAsyncSingleRequest = function () {
    var a = bw(X());
    null == Vs(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe_sra")
  };
  h.setVideoContentInformation = function (a, b) {
    var c = dw(X());
    c.Yb = !0;
    c.ua = a;
    c.sa = b;
    c.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random())
  };
  h.getVideoContentInformation = function () {
    var a = dw(X());
    return {cmsid: a.sa, vid: a.ua}
  };
  h.getVideoStreamCorrelator = function () {
    return dw(X()).videoStreamCorrelator
  };
  h.refresh = function (a, b) {
    var c = X(), d = dw(c);
    c = W(c);
    a = null != a ? iw(a) : Ds(c);
    if (0 == a.length)return null;
    d.cc(a, b);
    return a
  };
  h.destroySlots = function (a) {
    var b = W(X());
    this.clearSlotContents(a);
    for (var c = 0; c < a.length; ++c)if (b.j[I(a[c])]) {
      var d = b.j, e = I(a[c]);
      e in d && delete d[e]
    }
  };
  h.getCorrelator = function () {
    return dw(X()).K + ""
  };
  h.setCorrelator = function (a) {
    yt(dw(X()), a)
  };
  h.setMobilePlatform = function () {
    bw(X()).j.target_platform = "MOBILE"
  };
  h.isAdRequestFinished = function () {
    return dw(X()).ac()
  };
  h.isSlotAPersistentRoadblock = function (a) {
    return a ? !Hs(W(X()), a) : !1
  };
  h.clearNoRefreshState = function () {
    W(X()).L = {}
  };
  h.clearSlotContents = function (a) {
    var b = X(), c = dw(b);
    b = W(b);
    a = a ? iw(a) : Ds(b);
    return c.Ca(a)
  };
  h.setLocation = function (a) {
    W(X()).F = a
  };
  h.setPublisherProvidedId = function (a) {
    W(X()).V = a
  };
  h.getVersion = function () {
    return "175"
  };
  h.setCenterAds = function (a) {
    W(X()).o = a
  };
  var iw = function (a) {
    var b = W(X());
    return Ka(a, function (a) {
      return !!b.j[I(a)]
    })
  }, jw = null, kw = function (a, b) {
    var c = m.googletag || (m.googletag = {});
    c = c.impl || (c.impl = {});
    c = c.pubads || (c.pubads = {});
    c[a] || (c[a] = b)
  };
  kw("createDomIframe", P(96, function (a, b, c, d) {
    c = void 0 === c ? !1 : c;
    var e = (void 0 === d ? 0 : d) ? gw() : X();
    d = dw(e);
    if (e = W(e).j[b]) d.Qb(document, a, e, c), (a = Qp(e, document)) && fu(d, a, b)
  }));
  kw("setAdContentsBySlotForSync", P(98, function (a) {
    dw(X()).Na(a)
  }));
  kw("setPassbackAdContents", P(99, function (a) {
    dw(gw()).Na(a)
  }));
  kw("setAdContentsBySlotForAsync", P(100, function (a, b) {
    dw(X()).Fa(window, a, b)
  }));
  kw("syncAdSlotLoaded", P(102, function (a, b, c) {
    dw((void 0 === c ? 0 : c) ? gw() : X()).jc(a, b)
  }));
  kw("setCookieInfo", P(103, function (a) {
    X();
    var b = Us(void 0);
    Ss(b, a)
  }));
  var lw = null, ow = function () {
    var a = this;
    this.j = {};
    this.l = {};
    this.m = $l.w();
    le(m, "DOMContentLoaded", P(334, function () {
      return mw(a)
    }));
    le(m, "beforeunload", P(335, function () {
      nw(a, "gpt_br_bu", !0)
    }))
  }, pw = function () {
    return lw ? lw : m.IntersectionObserver ? lw = new ow : null
  }, rw = function (a, b) {
    var c = b.getSlotId().getDomId();
    qw(a, b) ? delete a.j[c] : a.j[c] = b
  }, sw = function (a, b) {
    var c = b.getSlotId().getDomId();
    c && (c in a.l ? ps(a.l[c], b.getCsiId()) : rw(a, b))
  }, qw = function (a, b) {
    var c = R(b, m.document);
    return c && "DIV" == c.nodeName && (c = new ns(a.m, c, function (a) {
      Lm(336, a, 1)
    }), c.o) ? (ps(c, b.getCsiId()), b = b.getSlotId().getDomId(), a.l[b] = c, !0) : !1
  }, mw = function (a) {
    rd(a.j) || (a.j = Kb(a.j, function (b) {
      return !qw(a, b)
    }), nw(a, "gpt_br_dcl", !1))
  }, nw = function (a, b, c) {
    b = new K(b);
    O(b);
    M(b, "unobslots", String(sd(a.j)));
    if (c) {
      var d = 0;
      A(a.j, function (a) {
        R(a, m.document) && d++
      });
      M(b, "unobdivs", String(d))
    }
    N(b, 1)
  };
  var uw = function (a, b, c) {
    var d = tw++;
    this.j = new Q(a, d, b);
    this.j.ka = !0;
    this.j.addService(c);
    this.l = c
  };
  h = uw.prototype;
  h.setClickUrl = function (a) {
    this.j.setClickUrl(a);
    return this
  };
  h.setTargeting = function (a, b) {
    this.j.setTargeting(a, b);
    return this
  };
  h.updateTargetingFromMap = function (a) {
    var b = this.j.getTargetingMap();
    if (!a || r(a) || "number" == typeof a)return rg().error(D("PassbackSlot.updateTargetingFromMap", [a])), this;
    try {
      return A(a, function (a, b) {
        this.setTargeting(b, a)
      }, this), this
    } catch (c) {
      return this.j.l = Pb(b), rg().error(D("PassbackSlot.updateTargetingFromMap", [a])), this
    }
  };
  h.setAudExtId = function (a) {
    vm(a) && (this.j.fa = a);
    return this
  };
  h.setTagForChildDirectedTreatment = function (a) {
    if (0 === a || 1 === a) this.j.sa = a;
    return this
  };
  h.display = function () {
    var a = this.l, b = this.j;
    a.Oa();
    a.j.passback(b)
  };
  h.setForceSafeFrame = function (a) {
    this.j.setForceSafeFrame(a);
    return this
  };
  h.set = function (a, b) {
    if (!r(a) || !b || "page_url" != a)return this;
    a = this.j;
    a.ka && (a.ua = b);
    return this
  };
  h.get = function (a) {
    return r(a) && "page_url" == a ? this.j.getPassbackPageUrl() : null
  };
  var tw = 1, vw = uw.prototype;
  vw.setClickUrl = P(79, vw.setClickUrl);
  vw.setTargeting = P(81, vw.setTargeting);
  vw.updateTargetingFromMap = P(85, vw.updateTargetingFromMap);
  vw.setAudExtId = P(82, vw.setAudExtId);
  vw.setTagForChildDirectedTreatment = P(80, vw.setTagForChildDirectedTreatment);
  vw.display = P(78, vw.display);
  vw.set = P(83, vw.set);
  vw.get = P(84, vw.get);
  var ww = function (a, b) {
    b = void 0 === b ? {changeCorrelator: !0} : b;
    this.j = a;
    this.l = b
  }, xw = function () {
    po.call(this);
    this.j = null;
    this.da = 0;
    this.L = -1;
    this.ia = 0;
    this.K = {};
    this.u = {};
    this.V = [];
    this.ja = this.U = "";
    this.o = this.fa = this.qa = this.na = !1;
    this.m = !E.w().get(36);
    this.ca = E.w().get(36);
    this.I = this.F = !1;
    this.D = [];
    this.ra = {};
    this.X = this.J = !1;
    this.H = -1;
    this.Z = this.ba = this.sa = this.ua = "";
    this.O = this.N = this.ha = !1;
    this.oa = {};
    this.A = Al.is(Vj.v) ? pw() : null;
    null !== Qe(window.location.href, "google_force_sra") && xk(hk.ab, !1);
    var a = E.w().get(53);
    a && this.gb(a, !0);
    ni(Ml, E.w().get(47));
    (a = E.w().get(131)) && this.gb(a);
    Ml.is(hk.ab) && (this.o = !0)
  };
  ha(xw, po);
  h = xw.prototype;
  h.set = function (a, b) {
    if (!(r(a) && 0 < a.length))return this.log.G(D("PubAdsService.set", [a, b]), this, null), this;
    this.K[a] = b;
    this.log.info(Tg(a, String(b), this.Y()), this, null);
    return this
  };
  h.get = function (a) {
    return this.K[a]
  };
  h.getAttributeKeys = function () {
    return td(this.K)
  };
  h.display = function (a, b, c, d) {
    c = void 0 === c ? "" : c;
    d = void 0 === d ? "" : d;
    if (c)if (v(c) && 1 == c.nodeType) {
      var e = c;
      var f = e.id
    } else f = c;
    this.enable();
    a = f ? gq(a, b, f) : gq(a, b);
    e && !f && (e.id = a.getSlotId().getDomId());
    a.addService(this);
    d && a.setClickUrl(d);
    jq(e || a.getSlotId().getDomId())
  };
  h.kb = function () {
    var a = this;
    window.setTimeout(function () {
      return a.Oa()
    }, 0)
  };
  h.Y = function () {
    return "publisher_ads"
  };
  h.Oa = function () {
    if (!this.j) {
      var a = cp();
      a.m("impl_loaded_instant");
      var b = E.w().get(76);
      up(a, b, "impl");
      window.google_noFetch = !1;
      window.google_DisableInitialLoad = !1;
      this.j = jw || (jw = new hw);
      this.log.info(dh("GPT"), this);
      this.j.setCookieOptions(this.da);
      this.j.setTagForChildDirectedTreatment(this.L);
      this.j.setKidsFriendlyAds(this.ia);
      this.j.setCenterAds(this.ca);
      E.w().get(36) && (this.o = !1, this.j.setMobilePlatform());
      this.F && this.j.collapseEmptyDivs(this.I);
      this.m && this.o && (ni(Kk, E.w().get(83), []), Kk.is(cj.v) && (this.o = !1));
      a = this.N;
      W(X()).J = a;
      !this.qa && this.j && (this.qa = !0, this.o ? (this.m ? this.j.enableAsyncSingleRequest() : this.j.enableSingleRequest(), yw(this), zw(this)) : this.m && (this.j.enableAsyncRendering(), Kk.is(cj.v) && (yw(this), zw(this))), this.fa && this.j.disableInitialLoad(), Aw(this), Bw(this));
      this.ha && (W(X()).u = !0);
      a = this.O;
      W(X()).D = a;
      a = this.oa;
      W(X()).K = a;
      ng("pubadsReady", !0)
    }
  };
  h.tb = function (a) {
    this.m || (a.pb = !1);
    a.ka || Cw(this, a);
    this.A && rw(this.A, a);
    po.prototype.tb.call(this, a)
  };
  h.ob = function (a) {
    if (zp().o && !this.m) this.log.error(gh(), this); else if (this.Oa(), yw(this), Cw(this, a))if (this.log.info(fh()), this.j.fillSlot(a), this.ra[a.getAdUnitPath()] = !0, this.j)for (a = 0; a < this.D.length; ++a) {
      var b = this.D[a];
      b.j[0].getAdUnitPath() in this.ra && (this.refresh(b.j, b.l), Va(this.D, a--))
    } else this.log.error(eh(), this)
  };
  var Cw = function (a, b) {
    if (a.j && null == a.j.addSlot(b))return a.log.error(Oh(b.getAdUnitPath()), a, b), !1;
    if (a.j)for (var c = b.getAttributeKeys(), d = 0; d < c.length; ++d)a.j.addAdSenseSlotAttribute(b, c[d], String(b.get(c[d]))) || a.log.G(ih(String(c[d]), String(b.get(c[d])), b.getAdUnitPath()), a, b);
    return !0
  }, zw = function (a) {
    for (var b = a.getSlots(), c = 0; c < b.length; ++c)Cw(a, b[c])
  }, yw = function (a) {
    if (!a.na && a.j) {
      a.na = !0;
      for (var b = a.getAttributeKeys(), c = 0; c < b.length; ++c)a.j.addAdSensePageAttribute(b[c], String(a.get(b[c]))) || a.log.G(hh(String(b[c]), String(a.get(b[c]))), a);
      A(a.u, function (a, b) {
        if (u(a)) {
          this.j.clearAttribute(b);
          for (var c = 0; c < a.length; ++c)this.j.addAttribute(b, a[c])
        }
      }, a);
      x(a.V, function (a) {
        this.j.addPageCategoryExclusion(a)
      }, a);
      a.j.setPublisherProvidedId(a.ja);
      a.U && a.j.setLocation(a.U)
    }
  };
  h = xw.prototype;
  h.setCookieOptions = function (a) {
    if (!vm(a))return this.log.G(jh(String(a)), this), this;
    this.da = a;
    this.j && this.j.setCookieOptions(a);
    return this
  };
  h.setTagForChildDirectedTreatment = function (a) {
    if (0 !== a && 1 !== a)return this.log.G(Ih(String(a)), this), this;
    this.L = a;
    this.j && this.j.setTagForChildDirectedTreatment(a);
    return this
  };
  h.clearTagForChildDirectedTreatment = function () {
    this.L = -1;
    this.j && this.j.setTagForChildDirectedTreatment(-1);
    return this
  };
  h.wd = function (a) {
    if (0 !== a && 1 !== a)return this.log.G(Nh(String(a)), this), this;
    this.ia = a;
    this.j && this.j.setKidsFriendlyAds(a);
    return this
  };
  h.setTargeting = function (a, b) {
    var c = null;
    r(b) ? c = [b] : u(b) ? c = b : va(b) && (c = $a(b));
    var d = c ? c.join() : String(b);
    if (!r(a) || ib(Ab(a)) || !c)return this.log.G(D("PubAdsService.setTargeting", [a, b]), this), this;
    this.u[a] = c;
    this.log.info(Hh(a, d, this.Y()), this);
    if (this.j)for (this.j.clearAttribute(a), b = 0; b < c.length; ++b)this.j.addAttribute(a, c[b]);
    return this
  };
  h.clearTargeting = function (a) {
    if ("undefined" != typeof a) {
      if (!r(a) || ib(Ab(a)))return this.log.G(D("PubAdsService.clearTargeting", [a]), this), this;
      if (!this.u[a])return this.log.G(Eh(a, this.Y()), this), this;
      delete this.u[a];
      this.log.info(Dh(a, this.Y()), this)
    } else this.u = {}, this.log.info(Uh(this.Y()), this);
    this.j && this.j.clearAttribute(a);
    return this
  };
  h.getTargeting = function (a) {
    return r(a) ? Object.prototype.hasOwnProperty.call(this.u, a) ? $a(this.u[a]) : [] : (this.log.G(D("PubAdsService.getTargeting", [a]), this), [])
  };
  h.getTargetingKeys = function () {
    return td(this.u)
  };
  h.setCategoryExclusion = function (a) {
    if (!r(a) || ib(Ab(a)))return this.log.G(D("PubAdsService.setCategoryExclusion", [a]), this), this;
    Ua(this.V, a);
    this.log.info(Fh(a), this);
    this.j && this.j.addPageCategoryExclusion(a);
    return this
  };
  h.clearCategoryExclusions = function () {
    this.V = [];
    this.log.info(Gh(), this);
    this.j && this.j.clearPageCategoryExclusions();
    return this
  };
  h.disableInitialLoad = function () {
    this.j ? this.log.G(lh("disableInitialLoad", "pubads"), this) : this.fa = !0
  };
  h.enableSingleRequest = function () {
    this.l && !this.o ? this.log.G(kh("enableSingleRequest"), this) : Ml.is(hk.ab) || Ml.is(hk.yc) || (this.log.info(nh("single request"), this), this.o = !0);
    return this.o
  };
  h.enableAsyncRendering = function () {
    this.l && !this.m ? this.log.G(kh("enableAsyncRendering"), this) : (this.log.info(nh("asynchronous rendering"), this), this.m = !0);
    return this.m
  };
  h.enableSyncRendering = function () {
    if (this.l && this.m) this.log.G(kh("enableSyncRendering"), this); else {
      this.log.info(nh("synchronous rendering"), this);
      this.m = !1;
      for (var a = this.getSlots(), b = 0; b < a.length; ++b)a[b].pb = !1
    }
    return !this.m
  };
  h.setCentering = function (a) {
    this.log.info(oh("centering", String(a)), this);
    this.ca = a
  };
  h.setPublisherProvidedId = function (a) {
    this.l ? this.log.G(mh("setPublisherProvidedId", a), this) : (this.log.info(oh("PPID", a), this), this.ja = a);
    return this
  };
  h.definePassback = function (a, b) {
    if (!r(a) || 0 >= a.length || !b)return this.log.error(D("PubAdsService.definePassback", [a, b])), null;
    var c = xm(a), d = cp();
    rp(d, "count_of_passback");
    d.F || (d.F = !0, hp(d, "n" + c));
    mp(d);
    return new uw(a, b, this)
  };
  h.refresh = function (a, b) {
    var c = this;
    if (a && !u(a) || b && (!v(b) || b.changeCorrelator && !ra(b.changeCorrelator))) this.log.G(D("PubAdsService.refresh", Ka([a, b], p)), this); else {
      var d = null;
      if (a && (d = Dw(this, a), !d.length)) {
        this.log.G(D("PubAdsService.refresh", Ka([a, b], p)), this);
        return
      }
      this.j ? (this.log.info(uh(), this), a = {}, p(b) && p(b.changeCorrelator) && (a.changeCorrelator = b.changeCorrelator), rp(cp(), "count_of_refreshes_called"), (b = this.j.refresh(d, a)) && this.A && x(b, function (a) {
        return sw(c.A, a)
      })) : this.o ? (this.log.info(th(), this), d ? Ua(this.D, new ww(d, b)) : Ua(this.D, new ww(this.getSlots(), b))) : this.log.G(qh(), this)
    }
  };
  var Ew = function (a, b, c) {
    if (b && !u(b) || c.videoStreamCorrelator && !t(c.videoStreamCorrelator) || c.videoPodNumber && !t(c.videoPodNumber) || c.videoPodPosition && !t(c.videoPodPosition) || c.persistentRoadblocksOnly && !ra(c.persistentRoadblocksOnly) || c.clearUnfilledSlots && !ra(c.clearUnfilledSlots)) a.log.G(D("PubAdsService.videoRefresh", Ka([b, c], p)), a); else if (a.j) {
      var d = null;
      if (b && (d = Dw(a, b), !d.length)) {
        a.log.error(ph("videoRefresh"), a);
        return
      }
      a.log.info(uh(), a);
      (b = a.j.refresh(d, c)) && a.A && x(b, function (b) {
        return sw(a.A, b)
      })
    } else a.log.G(qh(), a)
  };
  h = xw.prototype;
  h.enableVideoAds = function () {
    this.J = !0;
    Aw(this)
  };
  h.setVideoContent = function (a, b) {
    this.J = !0;
    this.ua = a;
    this.sa = b;
    Aw(this);
    this.X = !0
  };
  h.Ib = function () {
    return this.j ? this.j.getVideoContentInformation() : null
  };
  h.Jd = function (a, b) {
    this.X ? this.setVideoContent(a, b) : (this.enableVideoAds(), r(a) && (this.ba = a), r(b) && (this.Z = b))
  };
  h.ad = function () {
    return this.X ? this.Ib() : this.j ? {vid: this.ba, cmsid: this.Z} : null
  };
  var Aw = function (a) {
    a.J && a.j && a.j.setVideoContentInformation(a.ua, a.sa)
  }, Bw = function (a) {
    a.j && a.j.setCorrelator(-1 == a.H ? void 0 : a.H)
  };
  h = xw.prototype;
  h.Ob = function () {
    return 0 == this.getSlots().length ? "not_available" : this.j ? this.j.getCorrelator() : "not_loaded"
  };
  h.ud = function (a) {
    if (Ge(window))return this;
    if (!(t(a) && isFinite(a) && 0 == a % 1 && 0 < a))return this.log.G(Mh(String(a)), this), this;
    this.H = a;
    Bw(this);
    return this
  };
  h.updateCorrelator = function () {
    this.H = -1;
    Bw(this);
    return this
  };
  h.rd = function () {
    return this.j ? this.j.isAdRequestFinished() : !1
  };
  h.collapseEmptyDivs = function (a) {
    this.F ? this.log.G(Bh(), this) : this.l ? this.log.G(kh("collapseEmptyDivs"), this) : (this.I = !!a, this.log.info(Ah(String(this.I)), this), this.F = !0);
    return this.F
  };
  h.clear = function (a) {
    if (!this.j)return this.log.G(sh(), this), !1;
    var b = null;
    if (a && (b = Dw(this, a), 0 == b.length))return this.log.G(D("PubAdsService.clear", Ka([a], p)), this), !1;
    this.log.info(vh(), this);
    return this.j.clearSlotContents(b)
  };
  h.setLocation = function (a, b, c) {
    var d = "role:1 producer:12";
    if (p(b)) {
      if (!t(a))return this.log.G(yh("Latitude")), this;
      if (!t(b))return this.log.G(yh("Longitude")), this;
      d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
      if (p(c)) {
        if (isNaN(c))return this.log.G(yh("Radius")), this;
        d += " radius:" + Math.round(c)
      }
    } else 50 < a.length && (b = a.substring(0, 50), this.log.G(zh(String(a), "50", b)), a = b), d += ' loc:"' + a + '"';
    if (Hc) d = m.btoa(d); else {
      a = [];
      for (c = b = 0; c < d.length; c++) {
        var e = d.charCodeAt(c);
        255 < e && (a[b++] = e & 255, e >>= 8);
        a[b++] = e
      }
      d = Ic(a, void 0)
    }
    this.U = "a " + d;
    return this
  };
  h.getVersion = function () {
    if (this.j)return this.j.getVersion()
  };
  h.gb = function (a, b) {
    xk(a, !1, void 0 === b ? !1 : b)
  };
  var Dw = function (a, b) {
    for (var c = [], d = 0; d < b.length; ++d) {
      var e = b[d];
      e instanceof Q ? e.O || c.push(e) : a.log.G(Ch(String(d)), a)
    }
    return c
  };
  h = xw.prototype;
  h.td = function () {
    this.ha = !0;
    this.j && (W(X()).u = !0)
  };
  h.setSafeFrameConfig = function (a) {
    if (a && v(a)) {
      if (a = io(a)) this.oa = a
    } else this.log.error(D("PubAdsService.setSafeFrameConfig", [a]), this);
    return this
  };
  h.destroySlots = function (a) {
    a = po.prototype.destroySlots.call(this, a);
    if (0 == a.length)return a;
    this.j && this.j.destroySlots(a);
    return a
  };
  h.sd = function () {
    return this.o
  };
  h.setForceSafeFrame = function (a) {
    if (!ra(a))return this.log.G(xh(String(a)), this), this;
    this.O = a;
    this.j && (a = this.O, W(X()).D = a);
    return this
  };
  h.Vc = function () {
    E.w().set(73, 1)
  };
  h.vd = function (a) {
    if (!ra(a))return this.log.G(xh(String(a)), this), this;
    this.N = a;
    this.j && (a = this.N, W(X()).J = a);
    return this
  };
  h.defineOutOfPagePassback = function (a) {
    a = this.definePassback(a, [1, 1]);
    a.j.U = !0;
    return a
  };
  var Y = xw.prototype;
  Y.Oa = P(107, Y.Oa, function (a, b) {
    Lm(a, b)
  });
  Y.set = P(21, Y.set);
  Y.get = P(22, Y.get);
  Y.getAttributeKeys = P(23, Y.getAttributeKeys);
  Y.display = P(24, Y.display);
  Y.setCookieOptions = P(17, Y.setCookieOptions);
  Y.setTagForChildDirectedTreatment = P(18, Y.setTagForChildDirectedTreatment);
  Y.clearTagForChildDirectedTreatment = P(19, Y.clearTagForChildDirectedTreatment);
  Y.setTargeting = P(1, Y.setTargeting);
  Y.clearTargeting = P(2, Y.clearTargeting);
  Y.getTargeting = P(38, Y.getTargeting);
  Y.getTargetingKeys = P(39, Y.getTargetingKeys);
  Y.setCategoryExclusion = P(3, Y.setCategoryExclusion);
  Y.clearCategoryExclusions = P(4, Y.clearCategoryExclusions);
  Y.disableInitialLoad = P(5, Y.disableInitialLoad);
  Y.enableSingleRequest = P(6, Y.enableSingleRequest);
  Y.enableAsyncRendering = P(7, Y.enableAsyncRendering);
  Y.enableSyncRendering = P(8, Y.enableSyncRendering);
  Y.setCentering = P(9, Y.setCentering);
  Y.setPublisherProvidedId = P(20, Y.setPublisherProvidedId);
  Y.definePassback = P(10, Y.definePassback);
  Y.defineOutOfPagePassback = P(35, Y.defineOutOfPagePassback);
  Y.refresh = P(11, Y.refresh);
  Y.enableVideoAds = P(12, Y.enableVideoAds);
  Y.setVideoContent = P(13, Y.setVideoContent);
  Y.updateCorrelator = P(25, Y.updateCorrelator);
  Y.collapseEmptyDivs = P(14, Y.collapseEmptyDivs);
  Y.clear = P(15, Y.clear);
  Y.setLocation = P(16, Y.setLocation);
  Y.setSafeFrameConfig = P(37, Y.setSafeFrameConfig);
  Y.setForceSafeFrame = P(36, Y.setForceSafeFrame);
  Y.isAdRequestFinished = P(29, Y.rd);
  Y.getCorrelator = P(27, Y.Ob);
  Y.getVideoContent = P(30, Y.Ib);
  Y.setCorrelator = P(28, Y.ud);
  Y.setKidsFriendlyAds = P(18, Y.wd);
  Y.setFetchAdsSerially = P(275, Y.vd);
  Y.setImaContent = P(328, Y.Jd);
  Y.getImaContent = P(329, Y.ad);
  Y.getVersion = Y.getVersion;
  Y.forceExperiment = Y.gb;
  Y.markAsAmp = Y.td;
  Y.enableChromeInterventionSignals = Y.Vc;
  Y.isSRA = Y.sd;
  Y.markAsGladeControl = function () {
  };
  Y.markAsGladeOptOut = function () {
  };
  var Fw = P(26, function () {
    var a = zp(), b = yp(a, "publisher_ads");
    b || (b = new xw, a.add(b));
    return b
  });
  ng("pubads", Fw);
  var Gw = function () {
    po.call(this);
    this.L = !0;
    this.m = this.H = !1;
    this.K = 0;
    this.J = this.I = void 0;
    this.N = this.A = !1;
    this.u = {};
    this.j = {};
    this.o = !1;
    this.F = {}
  };
  ha(Gw, po);
  h = Gw.prototype;
  h.set = function (a, b) {
    r(a) && 0 < a.length ? (this.F[a] = b, this.log.info(Tg(a, String(b), this.Y()), this, null)) : this.log.G(Ug(String(a), String(b), this.Y()), this, null);
    return this
  };
  h.get = function (a) {
    return this.F[a]
  };
  h.od = function () {
    return td(this.F)
  };
  h.display = function (a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? null : d;
    this.enable();
    a = c ? gq(a, b, c) : gq(a, b);
    a.addService(this);
    d && a.setClickUrl(d);
    jq(a.getSlotId().getDomId())
  };
  h.kb = function () {
    this.L ? this.D() : this.A || (m.document.write('<script type="text/javascript" src="' + dm() + '">\x3c/script>'), this.A = !0)
  };
  h.enableSyncLoading = function () {
    this.L = !1
  };
  h.setRefreshUnfilledSlots = function (a) {
    ra(a) && (this.H = a)
  };
  h.Id = function (a) {
    ra(a) && (this.m = a)
  };
  h.xd = function (a) {
    if (this.H) Hw(this, Iw(this, a)); else if (this.m) {
      a = Iw(this, a);
      var b = Fw();
      if (b.l) {
        b.clear(a);
        for (var c = 0; c < a.length; ++c)qo(b, "slotRenderEnded", new lo(a[c], !0, b.Y()))
      } else this.log.error(Zg("PubAds", "clear"))
    }
  };
  h.Mb = function () {
    var a = Fw();
    if (!a.l)return !1;
    a = a.getSlots();
    var b = this.getSlots();
    if (a.length != b.length)return !1;
    for (var c = 0; c < b.length; ++c) {
      for (var d = !1, e = 0; e < a.length; ++e)if (b[c] === a[e]) {
        d = !0;
        break
      }
      if (!d)return !1
    }
    return !0
  };
  h.Bd = function () {
    this.H && Hw(this, null)
  };
  h.Kd = function (a, b, c, d) {
    this.K = a;
    this.I = b;
    this.J = c;
    this.o = d
  };
  h.$c = function () {
    return Fw().Ob()
  };
  h.pd = function () {
    var a = Fw();
    a.j ? (a = a.j.getVideoStreamCorrelator(), a = isNaN(a) ? 0 : a) : a = 0;
    return a
  };
  var Hw = function (a, b) {
    var c = Fw();
    if (c.l) {
      if (a.o) {
        if (!a.Mb()) {
          a.log.G(Yg());
          return
        }
        c.j ? (c.log.info(wh(), c), c.j.clearNoRefreshState()) : c.log.G(rh(), c);
        c.clear()
      }
      var d = {isVideoRefresh: !0};
      p(a.K) && (d.videoStreamCorrelator = a.K);
      a.I && (d.videoPodNumber = a.I);
      a.J && (d.videoPodPosition = a.J);
      a.o && (d.persistentRoadblocksOnly = a.o);
      a.m && (d.clearUnfilledSlots = a.m);
      Ew(c, b, d)
    } else a.log.error(Zg("PubAds", "refresh"))
  };
  Gw.prototype.O = function (a) {
    var b = Fw();
    if (b.l && eq(fq(), a))return b.j ? b.j.isSlotAPersistentRoadblock(a) : !1;
    this.log.error($g());
    return !1
  };
  var Iw = function (a, b) {
    for (var c = a.aa, d = [], e = 0; e < b.length; ++e) {
      var f = b[e];
      Mb(c, f) ? d.push(c[f]) : a.log.G(ah(), a)
    }
    return d
  };
  Gw.prototype.Y = function () {
    return "companion_ads"
  };
  var cm = function () {
    return wm() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
  };
  Gw.prototype.D = function () {
    if (!this.N) {
      var a = document, b = cm();
      this.log.info(bh("GPT CompanionAds"), this);
      nd(a, b);
      this.N = !0
    }
  };
  Gw.prototype.U = function (a, b) {
    Lm(a, b);
    this.log.error(ch("GPT CompanionAds"), this)
  };
  var Jw = function (a, b) {
    var c = b && b.getSlotId().getId();
    if (c && c in a.u && b.hasWrapperDiv() && a.l && !a.O(b)) {
      b.X = a.u[c];
      var d = new lo(b, !1, a.Y());
      if (a.j.hasOwnProperty(c)) {
        var e = a.j[c];
        delete a.j[c];
        d.size = e
      }
      return Mp(b, d)
    }
    return !1
  };
  Gw.prototype.ob = function (a) {
    Jw(this, a)
  };
  Gw.prototype.V = function (a, b, c, d) {
    return eq(fq(), a) && r(b) && 0 < b.length ? (this.u[a.getSlotId().getId()] = b, null != c && null != d && (this.j[a.getSlotId().getId()] = [c, d]), Jw(this, a)) : !1
  };
  Gw.prototype.Z = function (a, b, c) {
    a = new lo(a, !1, this.Y());
    null != b && null != c && (a.size = [b, c]);
    qo(this, "slotRenderEnded", a)
  };
  Gw.prototype.X = function () {
    this.log.info(dh("GPT CompanionAds"), this);
    this.A = !0
  };
  var Z = Gw.prototype;
  Z.D = P(70, Z.D, Z.U);
  Z.enableSyncLoading = P(58, Z.enableSyncLoading);
  Z.setRefreshUnfilledSlots = P(59, Z.setRefreshUnfilledSlots);
  Z.setClearUnfilledSlots = P(68, Z.Id);
  Z.notifyUnfilledSlots = P(69, Z.xd);
  Z.isRoadblockingSupported = P(111, Z.Mb);
  Z.refreshAllSlots = P(60, Z.Bd);
  Z.setVideoSession = P(61, Z.Kd);
  Z.getDisplayAdsCorrelator = P(62, Z.$c);
  Z.getVideoStreamCorrelator = P(63, Z.pd);
  Z.isSlotAPersistentRoadblock = P(64, Z.O);
  Z.onImplementationLoaded = P(65, Z.X);
  Z.fillSlot = P(66, Z.V);
  Z.slotRenderEnded = P(67, Z.Z);
  Z.set = Z.set;
  Z.get = Z.get;
  Z.getAttributeKeys = Z.od;
  Z.display = Z.display;
  ng("companionAds", P(57, function () {
    var a = zp(), b = yp(a, "companion_ads");
    b || (b = new Gw, a.add(b));
    return b
  }));
  var Kw = function () {
    po.call(this);
    this.j = {};
    this.m = {}
  };
  ha(Kw, po);
  h = Kw.prototype;
  h.Y = function () {
    return "content"
  };
  h.set = function (a, b) {
    r(a) && 0 < a.length ? (this.j[a] = b, this.log.info(Tg(a, String(b), this.Y()), this, null)) : this.log.G(Ug(String(a), String(b), this.Y()), this, null);
    return this
  };
  h.get = function (a) {
    return this.j[a]
  };
  h.qd = function () {
    return td(this.j)
  };
  h.display = function (a, b, c, d) {
    c = void 0 === c ? "" : c;
    d = void 0 === d ? "" : d;
    this.enable();
    a = c ? gq(a, b, c) : gq(a, b);
    a.addService(this);
    d && a.setClickUrl(d);
    jq(a.getSlotId().getDomId())
  };
  var Lw = function (a, b) {
    var c = b && b.getSlotId().getId();
    c in a.m && a.l && b.hasWrapperDiv() && !b.A && (b.X = a.m[c], Mp(b, new lo(b, !1, a.Y())))
  };
  Kw.prototype.kb = function () {
    for (var a = this.getSlots(), b = 0; b < a.length; ++b)Lw(this, a[b])
  };
  Kw.prototype.ob = function (a) {
    Lw(this, a)
  };
  Kw.prototype.setContent = function (a, b) {
    eq(fq(), a) && r(b) && 0 < b.length && (this.m[a.getSlotId().getId()] = b, Lw(this, a))
  };
  var Mw = Kw.prototype;
  Mw.setContent = P(72, Mw.setContent);
  Mw.set = Mw.set;
  Mw.get = Mw.get;
  Mw.getAttributeKeys = Mw.qd;
  Mw.display = Mw.display;
  ng("content", P(71, function () {
    var a = zp(), b = yp(a, "content");
    b || (b = new Kw, a.add(b));
    return b
  }));
  var Nw = null, Ow = !1, Pw = !1, Qw = function () {
    if (!Pw) {
      var a = new K("pubconsole_loaded");
      O(a);
      N(a);
      a = wm() + "//publisherconsole.appspot.com/js/loader.js";
      nd(m.document, a);
      Pw = !0
    }
  }, Rw = function () {
    var a = m.document;
    if (mg()._pubconsole_disable_)return !1;
    var b = m.document.cookie.split("google_pubconsole=");
    if (b = 2 == b.length ? b[1].split(";")[0] : "")if (b = b.split("|"), 0 < b.length && ("1" == b[0] || "0" == b[0]))return !0;
    zp();
    b = !1;
    try {
      b = m.top.document.URL === a.URL
    } catch (c) {
    }
    a = b ? a.URL : a.referrer;
    return null !== Qe(a, "google_debug") || null !== Qe(a, "dfpdeb") || null !== Qe(a, "google_console") || null !== Qe(a, "google_force_console") || null !== Qe(a, "googfc")
  }, Tw = function () {
    Rw() && Qw();
    Sw()
  };
  Tw = P(94, Tw);
  var Uw = function () {
    mg()._pubconsole_disable_ = !0
  };
  Uw = P(93, Uw);
  var Sw = function () {
    le(m, "message", function (a) {
      a.source == m && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && Vw(a)
    })
  }, Vw = function (a) {
    mg && mg().console ? mg().console.openConsole(a) : (a && (Nw = a), Ow = !0, Qw())
  };
  "complete" === m.document.readyState ? Tw() : og(m, Tw);
  ng("disablePublisherConsole", Uw);
  ng("onPubConsoleJsLoad", function () {
    Ow && (mg().console.openConsole(Nw), Nw = null, Ow = !1)
  });
  ng("openConsole", Vw);
  var Ww = function () {
    this.j = [];
    this.m = !1;
    this.l = rg()
  };
  Ww.prototype.addSize = function (a, b) {
    var c;
    (c = !Dp(a) || "fluid" == a) || ((c = Dp(b)) || (c = u(b) && Oa(b, Dp)), c = !c);
    if (c)return this.m = !0, this.l.G(D("SizeMappingBuilder.addSize", [a, b])), this;
    this.j.push([a, b]);
    return this
  };
  Ww.prototype.addSize = P(88, Ww.prototype.addSize);
  Ww.prototype.build = function () {
    if (this.m)return this.l.G(Rg()), null;
    eb(this.j, Xw);
    return this.j
  };
  Ww.prototype.build = P(89, Ww.prototype.build);
  var Xw = function (a, b) {
    a:{
      b = b[0];
      a = a[0];
      for (var c = cb, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
        var f = c(b[e], a[e]);
        if (0 != f) {
          b = f;
          break a
        }
      }
      b = cb(b.length, a.length)
    }
    return b
  }, Yw = function () {
    return new Ww
  };
  Yw = P(90, Yw);
  ng("sizeMapping", Yw);
  var Zw = function () {
    x(document.getElementsByTagName("script"), function (a) {
      var b = a.src;
      !b || -1 == b.indexOf("/tag/js/gpt.js") && -1 == b.indexOf("/tag/js/gpt_mobile.js") || !a.innerHTML || a.googletag_executed || (a.googletag_executed = !0, eval(a.innerHTML))
    })
  }, $w = function () {
    try {
      sm() && (gi = !0);
      var a = E.w().get(152);
      a && a.length && x(a, function (a) {
        return xk(a, !1)
      });
      Pl.is(lk.v) || gg();
      Tm();
      var b = E.w().get(138);
      b && xk(b);
      var c = cp();
      ng("apiReady", !0);
      !Fk.is($i.v) || zm(document) ? Xm() : og(window, function () {
        window.setTimeout(function () {
          Xm()
        }, 0)
      });
      P(297, function () {
        return Zw()
      }, Nm).call();
      E.w().get(34) && vt();
      c.m("loader_loaded_instant");
      c.F ? c.m("loader_loaded_instant_nw") : c.fa = (new Date).getTime();
      var d = wm() + "//www.googletagservices.com";
      up(c, d + "/tag/js/gpt.js", "gpt");
      up(c, d + "/tag/js/gpt_mobile.js", "gpt");
      um() && Vm()
    } catch (e) {
      Mm(106, e)
    }
  };
  cc("partner.googleadservices.com");
  var ax = cc("www.googletagservices.com"), bx = E.w().get(46) && !E.w().get(6);
  E.w().get(bx ? 2 : 3);
  var dx = function () {
    var a = cx.scripts;
    if (a)for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (-1 < c.src.indexOf(ax + "/tag/js/gpt"))return c
    }
    return null
  }, ex = function (a, b) {
    var c = lf();
    return (c = c && c.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? c[0] : b ? qd(a, a.length * b) : null
  };
  if (window.googletag.evalScripts) window.googletag.evalScripts(); else if (!mg()._loadStarted_) {
    var cx, fx = mg(), eg = fx.fifWin || window;
    cx = cx || eg.document;
    var gx = E.w().get(138) || ex(Xh, E.w().get(137)) || ex(["21061149"], E.w().get(167)),
      hx = ex(["21061316", "21061317"], 0);
    hx && ("21061317" == hx ? (E.w().set(173, ax), E.w().set(174, ax)) : E.w().set(163, hx), E.w().get(152).push(hx));
    if (gx)try {
      var ix = E.w().get(150);
      ix && (Vr(), Qr(ix) && (S[1] = ix));
      E.w().set(138, gx)
    } catch (a) {
    }
    E.w().set(172, cx.currentScript || dx());
    var jx = eg.PerformanceObserver && eg.PerformanceLongTaskTiming && ex(["21061354", "21061355"], .001);
    jx && E.w().get(152).push(jx);
    "21061355" == jx && fg();
    ig("1", eg);
    var kx = cx.currentScript;
    if (!("complete" == cx.readyState || "loaded" == cx.readyState || kx && kx.async)) {
      try {
        fx._syncTagged_ = !0, fx._loadStarted_ = !0
      } catch (a) {
      }
      if (fx._loadStarted_)switch (gx) {
        case "21060833":
          hs(null);
          break;
        case "21060622":
        case "21060713":
        case "21061149":
          es(null)
      }
    }
    if (!fx._loadStarted_) {
      switch (gx) {
        case "21060833":
          gs(null);
          break;
        case "21060622":
        case "21060713":
        case "21061149":
          ds(null)
      }
      fx._loadStarted_ = !0
    }
    ig("2", window);
    ng("evalScripts", function () {
      Zw()
    });
    $w()
  }
  ;
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this)
