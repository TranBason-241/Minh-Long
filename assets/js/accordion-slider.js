(() => {
  var e = {
      9662: (e, t, i) => {
        var s = i(614),
          n = i(6330),
          a = TypeError;
        e.exports = function (e) {
          if (s(e)) return e;
          throw a(n(e) + " is not a function");
        };
      },
      9670: (e, t, i) => {
        var s = i(111),
          n = String,
          a = TypeError;
        e.exports = function (e) {
          if (s(e)) return e;
          throw a(n(e) + " is not an object");
        };
      },
      1318: (e, t, i) => {
        var s = i(5656),
          n = i(1400),
          a = i(6244),
          r = function (e) {
            return function (t, i, r) {
              var o,
                l = s(t),
                h = a(l),
                d = n(r, h);
              if (e && i != i) {
                for (; h > d; ) if ((o = l[d++]) != o) return !0;
              } else for (; h > d; d++) if ((e || d in l) && l[d] === i) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: r(!0), indexOf: r(!1) };
      },
      3658: (e, t, i) => {
        "use strict";
        var s = i(9781),
          n = i(3157),
          a = TypeError,
          r = Object.getOwnPropertyDescriptor,
          o =
            s &&
            !(function () {
              if (void 0 !== this) return !0;
              try {
                Object.defineProperty([], "length", { writable: !1 }).length = 1;
              } catch (e) {
                return e instanceof TypeError;
              }
            })();
        e.exports = o
          ? function (e, t) {
              if (n(e) && !r(e, "length").writable) throw a("Cannot set read only .length");
              return (e.length = t);
            }
          : function (e, t) {
              return (e.length = t);
            };
      },
      4326: (e, t, i) => {
        var s = i(1702),
          n = s({}.toString),
          a = s("".slice);
        e.exports = function (e) {
          return a(n(e), 8, -1);
        };
      },
      9920: (e, t, i) => {
        var s = i(2597),
          n = i(3887),
          a = i(1236),
          r = i(3070);
        e.exports = function (e, t, i) {
          for (var o = n(t), l = r.f, h = a.f, d = 0; d < o.length; d++) {
            var c = o[d];
            s(e, c) || (i && s(i, c)) || l(e, c, h(t, c));
          }
        };
      },
      8880: (e, t, i) => {
        var s = i(9781),
          n = i(3070),
          a = i(9114);
        e.exports = s
          ? function (e, t, i) {
              return n.f(e, t, a(1, i));
            }
          : function (e, t, i) {
              return (e[t] = i), e;
            };
      },
      9114: (e) => {
        e.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      8052: (e, t, i) => {
        var s = i(614),
          n = i(3070),
          a = i(6339),
          r = i(3072);
        e.exports = function (e, t, i, o) {
          o || (o = {});
          var l = o.enumerable,
            h = void 0 !== o.name ? o.name : t;
          if ((s(i) && a(i, h, o), o.global)) l ? (e[t] = i) : r(t, i);
          else {
            try {
              o.unsafe ? e[t] && (l = !0) : delete e[t];
            } catch (e) {}
            l ? (e[t] = i) : n.f(e, t, { value: i, enumerable: !1, configurable: !o.nonConfigurable, writable: !o.nonWritable });
          }
          return e;
        };
      },
      3072: (e, t, i) => {
        var s = i(7854),
          n = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            n(s, e, { value: t, configurable: !0, writable: !0 });
          } catch (i) {
            s[e] = t;
          }
          return t;
        };
      },
      5117: (e, t, i) => {
        "use strict";
        var s = i(6330),
          n = TypeError;
        e.exports = function (e, t) {
          if (!delete e[t]) throw n("Cannot delete property " + s(t) + " of " + s(e));
        };
      },
      9781: (e, t, i) => {
        var s = i(7293);
        e.exports = !s(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      4154: (e) => {
        var t = "object" == typeof document && document.all,
          i = void 0 === t && void 0 !== t;
        e.exports = { all: t, IS_HTMLDDA: i };
      },
      317: (e, t, i) => {
        var s = i(7854),
          n = i(111),
          a = s.document,
          r = n(a) && n(a.createElement);
        e.exports = function (e) {
          return r ? a.createElement(e) : {};
        };
      },
      7207: (e) => {
        var t = TypeError;
        e.exports = function (e) {
          if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
          return e;
        };
      },
      8113: (e, t, i) => {
        var s = i(5005);
        e.exports = s("navigator", "userAgent") || "";
      },
      7392: (e, t, i) => {
        var s,
          n,
          a = i(7854),
          r = i(8113),
          o = a.process,
          l = a.Deno,
          h = (o && o.versions) || (l && l.version),
          d = h && h.v8;
        d && (n = (s = d.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])),
          !n && r && (!(s = r.match(/Edge\/(\d+)/)) || s[1] >= 74) && (s = r.match(/Chrome\/(\d+)/)) && (n = +s[1]),
          (e.exports = n);
      },
      748: (e) => {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      },
      2109: (e, t, i) => {
        var s = i(7854),
          n = i(1236).f,
          a = i(8880),
          r = i(8052),
          o = i(3072),
          l = i(9920),
          h = i(4705);
        e.exports = function (e, t) {
          var i,
            d,
            c,
            p,
            u,
            v = e.target,
            g = e.global,
            m = e.stat;
          if ((i = g ? s : m ? s[v] || o(v, {}) : (s[v] || {}).prototype))
            for (d in t) {
              if (((p = t[d]), (c = e.dontCallGetSet ? (u = n(i, d)) && u.value : i[d]), !h(g ? d : v + (m ? "." : "#") + d, e.forced) && void 0 !== c)) {
                if (typeof p == typeof c) continue;
                l(p, c);
              }
              (e.sham || (c && c.sham)) && a(p, "sham", !0), r(i, d, p, e);
            }
        };
      },
      7293: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      4374: (e, t, i) => {
        var s = i(7293);
        e.exports = !s(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      6916: (e, t, i) => {
        var s = i(4374),
          n = Function.prototype.call;
        e.exports = s
          ? n.bind(n)
          : function () {
              return n.apply(n, arguments);
            };
      },
      6530: (e, t, i) => {
        var s = i(9781),
          n = i(2597),
          a = Function.prototype,
          r = s && Object.getOwnPropertyDescriptor,
          o = n(a, "name"),
          l = o && "something" === function () {}.name,
          h = o && (!s || (s && r(a, "name").configurable));
        e.exports = { EXISTS: o, PROPER: l, CONFIGURABLE: h };
      },
      1702: (e, t, i) => {
        var s = i(4374),
          n = Function.prototype,
          a = n.call,
          r = s && n.bind.bind(a, a);
        e.exports = s
          ? r
          : function (e) {
              return function () {
                return a.apply(e, arguments);
              };
            };
      },
      5005: (e, t, i) => {
        var s = i(7854),
          n = i(614),
          a = function (e) {
            return n(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? a(s[e]) : s[e] && s[e][t];
        };
      },
      8173: (e, t, i) => {
        var s = i(9662),
          n = i(8554);
        e.exports = function (e, t) {
          var i = e[t];
          return n(i) ? void 0 : s(i);
        };
      },
      7854: (e, t, i) => {
        var s = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          s("object" == typeof globalThis && globalThis) ||
          s("object" == typeof window && window) ||
          s("object" == typeof self && self) ||
          s("object" == typeof i.g && i.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      2597: (e, t, i) => {
        var s = i(1702),
          n = i(7908),
          a = s({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return a(n(e), t);
          };
      },
      3501: (e) => {
        e.exports = {};
      },
      4664: (e, t, i) => {
        var s = i(9781),
          n = i(7293),
          a = i(317);
        e.exports =
          !s &&
          !n(function () {
            return (
              7 !=
              Object.defineProperty(a("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      8361: (e, t, i) => {
        var s = i(1702),
          n = i(7293),
          a = i(4326),
          r = Object,
          o = s("".split);
        e.exports = n(function () {
          return !r("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == a(e) ? o(e, "") : r(e);
            }
          : r;
      },
      2788: (e, t, i) => {
        var s = i(1702),
          n = i(614),
          a = i(5465),
          r = s(Function.toString);
        n(a.inspectSource) ||
          (a.inspectSource = function (e) {
            return r(e);
          }),
          (e.exports = a.inspectSource);
      },
      9909: (e, t, i) => {
        var s,
          n,
          a,
          r = i(4811),
          o = i(7854),
          l = i(111),
          h = i(8880),
          d = i(2597),
          c = i(5465),
          p = i(6200),
          u = i(3501),
          v = "Object already initialized",
          g = o.TypeError,
          m = o.WeakMap;
        if (r || c.state) {
          var y = c.state || (c.state = new m());
          (y.get = y.get),
            (y.has = y.has),
            (y.set = y.set),
            (s = function (e, t) {
              if (y.has(e)) throw g(v);
              return (t.facade = e), y.set(e, t), t;
            }),
            (n = function (e) {
              return y.get(e) || {};
            }),
            (a = function (e) {
              return y.has(e);
            });
        } else {
          var E = p("state");
          (u[E] = !0),
            (s = function (e, t) {
              if (d(e, E)) throw g(v);
              return (t.facade = e), h(e, E, t), t;
            }),
            (n = function (e) {
              return d(e, E) ? e[E] : {};
            }),
            (a = function (e) {
              return d(e, E);
            });
        }
        e.exports = {
          set: s,
          get: n,
          has: a,
          enforce: function (e) {
            return a(e) ? n(e) : s(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var i;
              if (!l(t) || (i = n(t)).type !== e) throw g("Incompatible receiver, " + e + " required");
              return i;
            };
          },
        };
      },
      3157: (e, t, i) => {
        var s = i(4326);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == s(e);
          };
      },
      614: (e, t, i) => {
        var s = i(4154),
          n = s.all;
        e.exports = s.IS_HTMLDDA
          ? function (e) {
              return "function" == typeof e || e === n;
            }
          : function (e) {
              return "function" == typeof e;
            };
      },
      4705: (e, t, i) => {
        var s = i(7293),
          n = i(614),
          a = /#|\.prototype\./,
          r = function (e, t) {
            var i = l[o(e)];
            return i == d || (i != h && (n(t) ? s(t) : !!t));
          },
          o = (r.normalize = function (e) {
            return String(e).replace(a, ".").toLowerCase();
          }),
          l = (r.data = {}),
          h = (r.NATIVE = "N"),
          d = (r.POLYFILL = "P");
        e.exports = r;
      },
      8554: (e) => {
        e.exports = function (e) {
          return null == e;
        };
      },
      111: (e, t, i) => {
        var s = i(614),
          n = i(4154),
          a = n.all;
        e.exports = n.IS_HTMLDDA
          ? function (e) {
              return "object" == typeof e ? null !== e : s(e) || e === a;
            }
          : function (e) {
              return "object" == typeof e ? null !== e : s(e);
            };
      },
      1913: (e) => {
        e.exports = !1;
      },
      2190: (e, t, i) => {
        var s = i(5005),
          n = i(614),
          a = i(7976),
          r = i(3307),
          o = Object;
        e.exports = r
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = s("Symbol");
              return n(t) && a(t.prototype, o(e));
            };
      },
      6244: (e, t, i) => {
        var s = i(7466);
        e.exports = function (e) {
          return s(e.length);
        };
      },
      6339: (e, t, i) => {
        var s = i(7293),
          n = i(614),
          a = i(2597),
          r = i(9781),
          o = i(6530).CONFIGURABLE,
          l = i(2788),
          h = i(9909),
          d = h.enforce,
          c = h.get,
          p = Object.defineProperty,
          u =
            r &&
            !s(function () {
              return 8 !== p(function () {}, "length", { value: 8 }).length;
            }),
          v = String(String).split("String"),
          g = (e.exports = function (e, t, i) {
            "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              i && i.getter && (t = "get " + t),
              i && i.setter && (t = "set " + t),
              (!a(e, "name") || (o && e.name !== t)) && (r ? p(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
              u && i && a(i, "arity") && e.length !== i.arity && p(e, "length", { value: i.arity });
            try {
              i && a(i, "constructor") && i.constructor ? r && p(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var s = d(e);
            return a(s, "source") || (s.source = v.join("string" == typeof t ? t : "")), e;
          });
        Function.prototype.toString = g(function () {
          return (n(this) && c(this).source) || l(this);
        }, "toString");
      },
      4758: (e) => {
        var t = Math.ceil,
          i = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var s = +e;
            return (s > 0 ? i : t)(s);
          };
      },
      3070: (e, t, i) => {
        var s = i(9781),
          n = i(4664),
          a = i(3353),
          r = i(9670),
          o = i(4948),
          l = TypeError,
          h = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor;
        t.f = s
          ? a
            ? function (e, t, i) {
                if ((r(e), (t = o(t)), r(i), "function" == typeof e && "prototype" === t && "value" in i && "writable" in i && !i.writable)) {
                  var s = d(e, t);
                  s &&
                    s.writable &&
                    ((e[t] = i.value), (i = { configurable: "configurable" in i ? i.configurable : s.configurable, enumerable: "enumerable" in i ? i.enumerable : s.enumerable, writable: !1 }));
                }
                return h(e, t, i);
              }
            : h
          : function (e, t, i) {
              if ((r(e), (t = o(t)), r(i), n))
                try {
                  return h(e, t, i);
                } catch (e) {}
              if ("get" in i || "set" in i) throw l("Accessors not supported");
              return "value" in i && (e[t] = i.value), e;
            };
      },
      1236: (e, t, i) => {
        var s = i(9781),
          n = i(6916),
          a = i(5296),
          r = i(9114),
          o = i(5656),
          l = i(4948),
          h = i(2597),
          d = i(4664),
          c = Object.getOwnPropertyDescriptor;
        t.f = s
          ? c
          : function (e, t) {
              if (((e = o(e)), (t = l(t)), d))
                try {
                  return c(e, t);
                } catch (e) {}
              if (h(e, t)) return r(!n(a.f, e, t), e[t]);
            };
      },
      8006: (e, t, i) => {
        var s = i(6324),
          n = i(748).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return s(e, n);
          };
      },
      5181: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      7976: (e, t, i) => {
        var s = i(1702);
        e.exports = s({}.isPrototypeOf);
      },
      6324: (e, t, i) => {
        var s = i(1702),
          n = i(2597),
          a = i(5656),
          r = i(1318).indexOf,
          o = i(3501),
          l = s([].push);
        e.exports = function (e, t) {
          var i,
            s = a(e),
            h = 0,
            d = [];
          for (i in s) !n(o, i) && n(s, i) && l(d, i);
          for (; t.length > h; ) n(s, (i = t[h++])) && (~r(d, i) || l(d, i));
          return d;
        };
      },
      5296: (e, t) => {
        "use strict";
        var i = {}.propertyIsEnumerable,
          s = Object.getOwnPropertyDescriptor,
          n = s && !i.call({ 1: 2 }, 1);
        t.f = n
          ? function (e) {
              var t = s(this, e);
              return !!t && t.enumerable;
            }
          : i;
      },
      2140: (e, t, i) => {
        var s = i(6916),
          n = i(614),
          a = i(111),
          r = TypeError;
        e.exports = function (e, t) {
          var i, o;
          if ("string" === t && n((i = e.toString)) && !a((o = s(i, e)))) return o;
          if (n((i = e.valueOf)) && !a((o = s(i, e)))) return o;
          if ("string" !== t && n((i = e.toString)) && !a((o = s(i, e)))) return o;
          throw r("Can't convert object to primitive value");
        };
      },
      3887: (e, t, i) => {
        var s = i(5005),
          n = i(1702),
          a = i(8006),
          r = i(5181),
          o = i(9670),
          l = n([].concat);
        e.exports =
          s("Reflect", "ownKeys") ||
          function (e) {
            var t = a.f(o(e)),
              i = r.f;
            return i ? l(t, i(e)) : t;
          };
      },
      4488: (e, t, i) => {
        var s = i(8554),
          n = TypeError;
        e.exports = function (e) {
          if (s(e)) throw n("Can't call method on " + e);
          return e;
        };
      },
      6200: (e, t, i) => {
        var s = i(2309),
          n = i(9711),
          a = s("keys");
        e.exports = function (e) {
          return a[e] || (a[e] = n(e));
        };
      },
      5465: (e, t, i) => {
        var s = i(7854),
          n = i(3072),
          a = "__core-js_shared__",
          r = s[a] || n(a, {});
        e.exports = r;
      },
      2309: (e, t, i) => {
        var s = i(1913),
          n = i(5465);
        (e.exports = function (e, t) {
          return n[e] || (n[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.26.1",
          mode: s ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      6293: (e, t, i) => {
        var s = i(7392),
          n = i(7293);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && s && s < 41);
          });
      },
      1400: (e, t, i) => {
        var s = i(9303),
          n = Math.max,
          a = Math.min;
        e.exports = function (e, t) {
          var i = s(e);
          return i < 0 ? n(i + t, 0) : a(i, t);
        };
      },
      5656: (e, t, i) => {
        var s = i(8361),
          n = i(4488);
        e.exports = function (e) {
          return s(n(e));
        };
      },
      9303: (e, t, i) => {
        var s = i(4758);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : s(t);
        };
      },
      7466: (e, t, i) => {
        var s = i(9303),
          n = Math.min;
        e.exports = function (e) {
          return e > 0 ? n(s(e), 9007199254740991) : 0;
        };
      },
      7908: (e, t, i) => {
        var s = i(4488),
          n = Object;
        e.exports = function (e) {
          return n(s(e));
        };
      },
      7593: (e, t, i) => {
        var s = i(6916),
          n = i(111),
          a = i(2190),
          r = i(8173),
          o = i(2140),
          l = i(5112),
          h = TypeError,
          d = l("toPrimitive");
        e.exports = function (e, t) {
          if (!n(e) || a(e)) return e;
          var i,
            l = r(e, d);
          if (l) {
            if ((void 0 === t && (t = "default"), (i = s(l, e, t)), !n(i) || a(i))) return i;
            throw h("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), o(e, t);
        };
      },
      4948: (e, t, i) => {
        var s = i(7593),
          n = i(2190);
        e.exports = function (e) {
          var t = s(e, "string");
          return n(t) ? t : t + "";
        };
      },
      6330: (e) => {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9711: (e, t, i) => {
        var s = i(1702),
          n = 0,
          a = Math.random(),
          r = s((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + r(++n + a, 36);
        };
      },
      3307: (e, t, i) => {
        var s = i(6293);
        e.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      3353: (e, t, i) => {
        var s = i(9781),
          n = i(7293);
        e.exports =
          s &&
          n(function () {
            return 42 != Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype;
          });
      },
      4811: (e, t, i) => {
        var s = i(7854),
          n = i(614),
          a = s.WeakMap;
        e.exports = n(a) && /native code/.test(String(a));
      },
      5112: (e, t, i) => {
        var s = i(7854),
          n = i(2309),
          a = i(2597),
          r = i(9711),
          o = i(6293),
          l = i(3307),
          h = n("wks"),
          d = s.Symbol,
          c = d && d.for,
          p = l ? d : (d && d.withoutSetter) || r;
        e.exports = function (e) {
          if (!a(h, e) || (!o && "string" != typeof h[e])) {
            var t = "Symbol." + e;
            o && a(d, e) ? (h[e] = d[e]) : (h[e] = l && c ? c(t) : p(t));
          }
          return h[e];
        };
      },
      7658: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(7908),
          a = i(6244),
          r = i(3658),
          o = i(7207),
          l = i(7293)(function () {
            return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
          }),
          h = !(function () {
            try {
              Object.defineProperty([], "length", { writable: !1 }).push();
            } catch (e) {
              return e instanceof TypeError;
            }
          })();
        s(
          { target: "Array", proto: !0, arity: 1, forced: l || h },
          {
            push: function (e) {
              var t = n(this),
                i = a(t),
                s = arguments.length;
              o(i + s);
              for (var l = 0; l < s; l++) (t[i] = arguments[l]), i++;
              return r(t, i), i;
            },
          }
        );
      },
      541: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(7908),
          a = i(6244),
          r = i(3658),
          o = i(5117),
          l = i(7207),
          h = 1 !== [].unshift(0),
          d = !(function () {
            try {
              Object.defineProperty([], "length", { writable: !1 }).unshift();
            } catch (e) {
              return e instanceof TypeError;
            }
          })();
        s(
          { target: "Array", proto: !0, arity: 1, forced: h || d },
          {
            unshift: function (e) {
              var t = n(this),
                i = a(t),
                s = arguments.length;
              if (s) {
                l(i + s);
                for (var h = i; h--; ) {
                  var d = h + s;
                  h in t ? (t[d] = t[h]) : o(t, d);
                }
                for (var c = 0; c < s; c++) t[c] = arguments[c];
              }
              return r(t, i + s);
            },
          }
        );
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var a = (t[s] = { exports: {} });
    return e[s](a, a.exports, i), a.exports;
  }
  (i.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      "use strict";
      i(7658);
      const e = {
        width: 800,
        height: 400,
        responsive: !0,
        responsiveMode: "auto",
        aspectRatio: -1,
        orientation: "horizontal",
        startPanel: -1,
        openedPanelSize: "max",
        maxOpenedPanelSize: "80%",
        openPanelOn: "hover",
        closePanelsOnMouseOut: !0,
        mouseDelay: 200,
        panelDistance: 0,
        openPanelDuration: 700,
        closePanelDuration: 700,
        pageScrollDuration: 500,
        pageScrollEasing: "swing",
        breakpoints: null,
        visiblePanels: -1,
        startPage: 0,
        shadow: !0,
        shuffle: !1,
        panelOverlap: !0,
        addOns: [],
      };
      function t(e) {
        let t = "complete";
        return (
          "IMG" === e.tagName && !1 === e.complete
            ? (t = "loading")
            : Array.from(e.getElementsByTagName("img")).forEach((e) => {
                !1 === e.complete && (t = "loading");
              }),
          t
        );
      }
      function s(e) {
        return isNaN(e) || "auto" === e ? e : e + "px";
      }
      class n extends EventTarget {
        handlerReferences = {};
        uid = null;
        static idCounter = 0;
        constructor() {
          super();
        }
        addEventListener(e, t) {
          const i = t;
          let s = e;
          null === this.uid && (this.uid = n.idCounter++), -1 !== e.indexOf(".") && (s = e.split(".")[0]), (this.handlerReferences[e + "." + this.uid] = i), super.addEventListener(s, i);
        }
        removeEventListener(e) {
          let t = e;
          const i = this.handlerReferences[e + "." + this.uid];
          -1 !== e.indexOf(".") && (t = e.split(".")[0]), super.removeEventListener(t, i), delete this.handlerReferences[e + "." + this.uid];
        }
        dispatchEvent(e) {
          const t = new CustomEvent(e, {
            ...((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null) || {}),
            detail: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || {},
          });
          super.dispatchEvent(t);
        }
        on(e, t) {
          this.addEventListener(e, t);
        }
        off(e) {
          this.removeEventListener(e);
        }
        trigger(e) {
          const { type: t, detail: i } = e;
          this.dispatchEvent(t, i);
        }
      }
      const a = n,
        r = class extends a {
          #e;
          panelEl;
          settings;
          isLoading = !1;
          isLoaded = !1;
          eventHandlerReferences = {};
          constructor(e, t) {
            super(), (this.panelEl = e), (this.settings = t), this.init();
          }
          init() {
            this.panelEl.setAttribute("data-init", !0),
              this.panelEl.addEventListener(
                "mouseenter",
                (this.eventHandlerReferences["mouseenter.panel"] = () => {
                  this.dispatchEvent("panelMouseOver", { index: this.index });
                })
              ),
              this.panelEl.addEventListener(
                "mouseleave",
                (this.eventHandlerReferences["mouseleave.panel"] = () => {
                  this.dispatchEvent("panelMouseOut", { index: this.index });
                })
              ),
              this.panelEl.addEventListener(
                "click",
                (this.eventHandlerReferences["click.panel"] = () => {
                  this.dispatchEvent("panelClick", { index: this.index });
                })
              ),
              this.panelEl.addEventListener(
                "mousedown",
                (this.eventHandlerReferences["mousedown.panel"] = () => {
                  this.dispatchEvent("panelMouseDown", { index: this.index });
                })
              );
          }
          getPosition() {
            const e = "horizontal" === this.settings.orientation ? "left" : "top";
            return parseInt(this.panelEl.style[e], 10);
          }
          setPosition(e) {
            const t = "horizontal" === this.settings.orientation ? "left" : "top";
            this.panelEl.style[t] = s(e);
          }
          getSize() {
            const e = "horizontal" === this.settings.orientation ? "width" : "height";
            return parseInt(this.panelEl.style[e], 10);
          }
          setSize(e) {
            const t = "horizontal" === this.settings.orientation ? "width" : "height";
            this.panelEl.style[t] = s(e);
          }
          getContentSize() {
            if (("complete" === t(this.panelEl) && (this.isLoaded = !0), !1 === this.isLoaded))
              return (
                ((e = this.panelEl),
                new Promise((i) => {
                  let s = t(e);
                  if ("loading" === s) {
                    const n = setInterval(() => {
                      (s = t(e)), "complete" === s && (clearInterval(n), i("complete"));
                    }, 100);
                  } else i("complete");
                })).then(() => {
                  (this.isLoaded = !0), this.dispatchEvent("imagesComplete", { index: this.index, contentSize: this.getContentSize() });
                }),
                "loading"
              );
            var e;
            const { width: i, height: s } = this.calculateSize();
            return "horizontal" === this.settings.orientation ? i : s;
          }
          calculateSize() {
            let e = this.panelEl.clientWidth,
              t = this.panelEl.clientHeight;
            return (
              Array.from(this.panelEl.children).forEach((i) => {
                if ("hidden" === i.style.visibility || "none" === i.style.display) return;
                const { left: s, right: n, top: a, bottom: r } = i.getBoundingClientRect(),
                  o = i.offsetTop + (r - a),
                  l = i.offsetLeft + (n - s);
                o > t && (t = o), l > e && (e = l);
              }),
              { width: e, height: t }
            );
          }
          destroy() {
            this.panelEl.removeAttribute("style"),
              this.panelEl.removeAttribute("data-init"),
              this.panelEl.removeAttribute("data-index"),
              this.panelEl.removeEventListener("mouseenter", this.eventHandlerReferences["mouseenter.panel"]),
              this.panelEl.removeEventListener("mouseleave", this.eventHandlerReferences["mouseleave.panel"]),
              this.panelEl.removeEventListener("click", this.eventHandlerReferences["click.panel"]),
              this.panelEl.removeEventListener("mousedown", this.eventHandlerReferences["mousedown.panel"]);
          }
          get index() {
            return this.#e;
          }
          set index(e) {
            (this.#e = e), this.panelEl.setAttribute("data-index", this.#e);
          }
        },
        o = class extends a {
          previousWidth = 0;
          previousHeight = 0;
          allowResize = !0;
          delay = 200;
          handlerReference;
          timeoutReference;
          constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            super(), null !== e && (this.delay = e);
          }
          addEventListener(e, t) {
            super.addEventListener(e, t), (this.handlerReference = this.handler.bind(this)), window.addEventListener("resize", this.handlerReference);
          }
          removeEventListener(e) {
            super.removeEventListener(e), window.removeEventListener("resize", this.handlerReference);
          }
          handler() {
            !1 === this.allowResize ||
              (this.previousWidth === window.innerWidth && this.previousHeight === window.innerHeight) ||
              ((this.previousWidth = window.innerWidth),
              (this.previousHeight = window.innerHeight),
              (this.allowResize = !1),
              (this.timeoutReference = setTimeout(() => {
                this.dispatchEvent("resize"), (this.allowResize = !0);
              }, this.delay)));
          }
          destroy() {
            clearTimeout(this.timeoutReference);
          }
        };
      class l {
        accordion;
        static addOns = [];
        addOnsInstances = [];
        activeAddOns = null;
        constructor(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          (this.accordion = e), (this.activeAddOns = t);
        }
        init() {
          (this.accordion.addOns = this.accordion.addOns || {}),
            (0 === this.activeAddOns.length ? l.addOns : this.activeAddOns).forEach((e) => {
              let t = new e(this.accordion);
              this.addOnsInstances.push(t), (this.accordion.addOns[e.name] = t);
            });
        }
        static add(e) {
          "object" == typeof e ? (l.addOns = [...l.addOns, ...e]) : "function" == typeof e && l.addOns.push(e);
        }
        destroyAll() {
          this.addOnsInstances.forEach((e) => {
            e.destroy();
          });
        }
      }
      const h = l;
      i(541);
      const d = class extends a {
        videoEl = null;
        ready = !1;
        started = !1;
        state = "";
        constructor(e) {
          super(), (this.videoEl = e), this.init();
        }
        init() {}
        play() {}
        pause() {}
        stop() {}
        replay() {}
        isType() {}
        isReady() {
          return this.ready;
        }
        isStarted() {
          return this.started;
        }
        getState() {
          return this.state;
        }
      };
      class c extends d {
        static vimeoAPIAdded = !1;
        static vimeoVideos = [];
        constructor(e) {
          super(e);
        }
        static isType(e) {
          return "IFRAME" === e.tagName && -1 !== e.getAttribute("src").indexOf("vimeo.com");
        }
        init() {
          if (((this.isInit = !1), void 0 !== window.Vimeo)) this.setup();
          else if ((c.vimeoVideos.push(this), !1 === c.vimeoAPIAdded)) {
            c.vimeoAPIAdded = !0;
            const e = document.createElement("script");
            e.src = "//player.vimeo.com/api/player.js";
            const t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
            let i = setInterval(() => {
              void 0 !== window.Vimeo &&
                (clearInterval(i),
                c.vimeoVideos.forEach((e) => {
                  e.setup();
                }));
            }, 100);
          }
        }
        setup() {
          (this.isInit = !0),
            (this.player = new window.Vimeo.Player(this.videoEl)),
            (this.ready = !0),
            this.dispatchEvent("ready"),
            this.player.on("play", () => {
              !1 === this.started && ((this.started = !0), this.dispatchEvent("start")), (this.state = "playing"), this.dispatchEvent("play");
            }),
            this.player.on("pause", () => {
              (this.state = "paused"), this.dispatchEvent("pause");
            }),
            this.player.on("ended", () => {
              (this.state = "ended"), this.dispatchEvent("ended");
            });
        }
        play() {
          if (!0 === this.ready) this.player.play();
          else {
            const e = setInterval(() => {
              !0 === this.ready && (clearInterval(e), this.player.play());
            }, 100);
          }
        }
        pause() {
          this.player.pause();
        }
        stop() {
          this.player.setCurrentTime(0).then(() => {
            this.player.pause(), (this.state = "stopped");
          });
        }
        replay() {
          this.player.setCurrentTime(0).then(() => {
            this.player.play();
          });
        }
        addEventListener(e, t) {
          if (!0 === this.isInit) super.addEventListener(e, t);
          else {
            const i = setInterval(() => {
              !0 === this.isInit && (clearInterval(i), super.addEventListener(e, t));
            }, 100);
          }
        }
      }
      const p = c;
      class u extends d {
        static youtubeAPIAdded = !1;
        static youtubeVideos = [];
        constructor(e) {
          super(e);
        }
        static isType(e) {
          if ("IFRAME" === e.tagName) {
            const t = e.getAttribute("src");
            if (-1 !== t.indexOf("youtube.com") || -1 !== t.indexOf("youtu.be")) return !0;
          }
          return !1;
        }
        init() {
          if (((this.isInit = !1), void 0 !== (window.YT && window.YT.Player))) this.setup();
          else if ((u.youtubeVideos.push(this), !1 === u.youtubeAPIAdded)) {
            u.youtubeAPIAdded = !0;
            const e = document.createElement("script");
            e.src = "//www.youtube.com/player_api";
            const t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t),
              (window.onYouTubePlayerAPIReady = () => {
                u.youtubeVideos.forEach((e) => {
                  e.setup();
                });
              });
          }
        }
        setup() {
          (this.isInit = !0),
            (this.player = new window.YT.Player(this.videoEl, {
              events: {
                onReady: () => {
                  this.dispatchEvent("ready"), (this.ready = !0);
                },
                onStateChange: (e) => {
                  switch (e.data) {
                    case window.YT.PlayerState.PLAYING:
                      !1 === this.started && ((this.started = !0), this.dispatchEvent("start")), (this.state = "playing"), this.dispatchEvent("play");
                      break;
                    case window.YT.PlayerState.PAUSED:
                      (this.state = "paused"), this.dispatchEvent("pause");
                      break;
                    case window.YT.PlayerState.ENDED:
                      (this.state = "ended"), this.dispatchEvent("ended");
                  }
                },
              },
            }));
        }
        play() {
          if (!0 === this.ready) this.player.playVideo();
          else {
            const e = setInterval(() => {
              !0 === this.ready && (clearInterval(e), this.player.playVideo());
            }, 100);
          }
        }
        pause() {
          !0 == !!window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? this.stop() : this.player.pauseVideo();
        }
        stop() {
          this.player.seekTo(1), this.player.stopVideo(), (this.state = "stopped");
        }
        replay() {
          this.player.seekTo(1), this.player.playVideo();
        }
        addEventListener(e, t) {
          if (!0 === this.isInit) super.addEventListener(e, t);
          else {
            const i = setInterval(() => {
              !0 === this.isInit && (clearInterval(i), super.addEventListener(e, t));
            }, 100);
          }
        }
      }
      const v = u;
      class g extends a {
        static players = [];
        player = null;
        videoEl;
        isIOS = !!window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
        constructor(e) {
          super(), (this.videoEl = e), this.init();
        }
        static addPlayer(e) {
          -1 === g.players.indexOf(e) && g.players.unshift(e);
        }
        init() {
          const e = this.videoEl.getAttribute("id"),
            t = g.players.find((e) => e.isType(this.videoEl));
          (this.player = new t(this.videoEl)),
            null !== this.player &&
              ["ready", "start", "play", "pause", "ended"].forEach((t) => {
                const i = "video" + t.charAt(0).toUpperCase() + t.slice(1);
                this.player.addEventListener(t, () => {
                  this.dispatchEvent(i, { video: e });
                });
              });
        }
        play() {
          (!0 === this.isIOS && !1 === this.player.isStarted()) || "playing" === this.player.getState() || this.player.play();
        }
        stop() {
          (!0 === this.isIOS && !1 === this.player.isStarted()) || "stopped" === this.player.getState() || this.player.stop();
        }
        pause() {
          (!0 === this.isIOS && !1 === this.player.isStarted()) || "paused" === this.player.getState() || this.player.pause();
        }
        replay() {
          (!0 === this.isIOS && !1 === this.player.isStarted()) || this.player.replay();
        }
        destroy() {
          !0 === this.player.isStarted() && this.stop(),
            this.player.removeEventListener("ready"),
            this.player.removeEventListener("start"),
            this.player.removeEventListener("play"),
            this.player.removeEventListener("pause"),
            this.player.removeEventListener("ended");
        }
      }
      g.addPlayer(
        class extends d {
          constructor(e) {
            super(e);
          }
          static isType(e) {
            return "VIDEO" === e.tagName;
          }
          init() {
            (this.player = this.videoEl),
              (this.ready = !0),
              this.dispatchEvent("ready"),
              this.player.addEventListener("play", () => {
                !1 === this.started && ((this.started = !0), this.dispatchEvent("start")), (this.state = "playing"), this.dispatchEvent("play");
              }),
              this.player.addEventListener("pause", () => {
                (this.state = "paused"), this.dispatchEvent("pause");
              }),
              this.player.addEventListener("ended", () => {
                (this.state = "ended"), this.dispatchEvent("ended");
              });
          }
          play() {
            if (!0 === this.ready) this.player.play();
            else {
              const e = setInterval(() => {
                !0 === this.ready && (clearInterval(e), this.player.play());
              }, 100);
            }
          }
          pause() {
            this.player.pause();
          }
          stop() {
            (this.player.currentTime = 0), this.player.pause(), (this.state = "stopped");
          }
          replay() {
            (this.player.currentTime = 0), this.player.play();
          }
        }
      ),
        g.addPlayer(
          class extends d {
            constructor(e) {
              super(e);
            }
            static isType(e) {
              return !((null === e.getAttribute("data-videojs-id") && !e.classList.contains("video-js")) || void 0 === window.videojs);
            }
            init() {
              const e = this.videoEl.classList.contains("video-js") ? this.videoEl.getAttribute("id") : this.videoEl.getAttribute("data-videojs-id");
              (this.player = window.videojs(e)),
                this.player.ready(() => {
                  (this.ready = !0),
                    this.dispatchEvent("ready"),
                    this.player.on("play", () => {
                      !1 === this.started && ((this.started = !0), this.dispatchEvent("start")), (this.state = "playing"), this.dispatchEvent("play");
                    }),
                    this.player.on("pause", () => {
                      (this.state = "paused"), this.dispatchEvent("pause");
                    }),
                    this.player.on("ended", () => {
                      (this.state = "ended"), this.dispatchEvent("ended");
                    });
                });
            }
            play() {
              this.player.play();
            }
            pause() {
              this.player.pause();
            }
            stop() {
              this.player.currentTime(0), this.player.pause(), (this.state = "stopped");
            }
            replay() {
              this.player.currentTime(0), this.player.play();
            }
          }
        ),
        g.addPlayer(v),
        g.addPlayer(p);
      const m = g;
      h.add([
        class {
          namespace = "autoplay";
          accordion;
          settings;
          autoplayTimer;
          autoplayState = "stopped";
          autoplayIndex = -1;
          isHover = !1;
          eventHandlerReferences = {};
          defaults = { autoplay: !0, autoplayDelay: 5e3, autoplayDirection: "normal", autoplayOnHover: "pause" };
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this));
          }
          updateHandler() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              !0 === this.settings.autoplay && "stopped" === this.autoplayState
                ? (this.accordion.addEventListener("panelOpen." + this.namespace, () => {
                    this.panelOpenHandler();
                  }),
                  this.accordion.addEventListener("panelOpenComplete." + this.namespace, () => {
                    this.panelOpenCompleteHandler();
                  }),
                  this.accordion.addEventListener("panelsClose." + this.namespace, (e) => {
                    -1 !== e.detail.previousIndex && (this.autoplayIndex = e.detail.previousIndex);
                  }),
                  this.accordion.addEventListener("pageScroll." + this.namespace, () => {
                    this.autoplayIndex = this.accordion.getFirstPanelFromPage() - 1;
                  }),
                  this.accordion.accordionEl.addEventListener(
                    "mouseenter",
                    (this.eventHandlerReferences.mouseenter = () => {
                      this.mouseEnterHandler();
                    })
                  ),
                  this.accordion.accordionEl.addEventListener(
                    "mouseleave",
                    (this.eventHandlerReferences.mouseleave = () => {
                      this.mouseLeaveHandler();
                    })
                  ),
                  (this.autoplayState = "running"),
                  this.start())
                : !0 === this.settings.autoplay &&
                  "running" === this.autoplayState &&
                  (this.accordion.removeEventListener("panelOpen." + this.namespace),
                  this.accordion.removeEventListener("panelOpenComplete." + this.namespace),
                  this.accordion.removeEventListener("mouseenter." + this.namespace),
                  this.accordion.removeEventListener("mouseleave." + this.namespace),
                  (this.autoplayState = "stopped"),
                  this.stop());
          }
          panelOpenHandler() {
            "running" === this.autoplayState && (this.stop(), (this.autoplayState = "paused"));
          }
          panelOpenCompleteHandler() {
            (!0 !== this.isHover || ("pause" !== this.settings.autoplayOnHover && "stop" !== this.settings.autoplayOnHover)) &&
              "paused" === this.autoplayState &&
              (this.start(), (this.autoplayState = "running"));
          }
          mouseEnterHandler() {
            (this.isHover = !0),
              "running" !== this.autoplayState || ("pause" !== this.settings.autoplayOnHover && "stop" !== this.settings.autoplayOnHover) || (this.stop(), (this.autoplayState = "paused"));
          }
          mouseLeaveHandler() {
            (this.isHover = !1), !0 === this.settings.autoplay && "paused" === this.autoplayState && "stop" !== this.settings.autoplayOnHover && (this.start(), (this.autoplayState = "running"));
          }
          start() {
            this.autoplayTimer = setTimeout(() => {
              -1 !== this.autoplayIndex && ((this.accordion.currentIndex = this.autoplayIndex), (this.autoplayIndex = -1)),
                "normal" === this.settings.autoplayDirection ? this.accordion.nextPanel() : "backwards" === this.settings.autoplayDirection && this.accordion.previousPanel();
            }, this.settings.autoplayDelay);
          }
          stop() {
            clearTimeout(this.autoplayTimer);
          }
          destroy() {
            clearTimeout(this.autoplayTimer),
              this.accordion.removeEventListener("update." + this.namespace),
              this.accordion.removeEventListener("panelOpen." + this.namespace),
              this.accordion.removeEventListener("panelOpenComplete." + this.namespace),
              this.accordion.removeEventListener("panelsClose." + this.namespace),
              this.accordion.removeEventListener("pageScroll." + this.namespace),
              this.accordion.accordionEl.removeEventListener("mouseenter", this.eventHandlerReferences.mouseenter),
              this.accordion.accordionEl.removeEventListener("mouseleave", this.eventHandlerReferences.mouseleave);
          }
        },
        class {
          namespace = "breakpoints";
          accordion;
          breakpoints;
          originalSettings = {};
          orderedBreakpoints = [];
          currentBreakpoint = -1;
          constructor(e) {
            (this.accordion = e),
              null !== this.accordion.settings.breakpoints &&
                this.accordion.addEventListener("beforeInit." + this.namespace, () => {
                  this.init();
                });
          }
          init() {
            (this.breakpoints = { ...this.accordion.settings.breakpoints }), (this.originalSettings = { ...this.accordion.settings });
            for (let e in this.breakpoints) this.orderedBreakpoints.push({ size: parseInt(e, 10), properties: this.breakpoints[e] });
            (this.orderedBreakpoints = this.orderedBreakpoints.sort((e, t) => (e.size >= t.size ? 1 : -1))),
              this.accordion.addEventListener("beforeResize." + this.namespace, () => {
                const e = this.getCurrentSettings();
                !1 !== e && ((this.accordion.settings = { ...e }), this.accordion.update());
              });
          }
          getCurrentSettings() {
            if (null !== this.breakpoints && this.orderedBreakpoints.length > 0) {
              if (window.innerWidth > this.orderedBreakpoints[this.orderedBreakpoints.length - 1].size && -1 !== this.currentBreakpoint) return (this.currentBreakpoint = -1), this.originalSettings;
              for (let e = 0, t = this.orderedBreakpoints.length; e < t; e++)
                if (window.innerWidth <= this.orderedBreakpoints[e].size) {
                  if (this.currentBreakpoint !== this.orderedBreakpoints[e].size) {
                    const t = { ...this.originalSettings, ...this.orderedBreakpoints[e].properties };
                    return (this.currentBreakpoint = this.orderedBreakpoints[e].size), t;
                  }
                  break;
                }
            }
            return !1;
          }
          destroy() {
            this.accordion.removeEventListener("beforeInit." + this.namespace), this.accordion.removeEventListener("beforeResize." + this.namespace);
          }
        },
        class {
          namespace = "buttons";
          accordion;
          settings;
          buttonsEl = null;
          eventHandlerReferences = {};
          defaults = { buttons: !0 };
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this)),
              this.accordion.addEventListener("pageScroll." + this.namespace, (e) => {
                void 0 !== this.buttonsEl &&
                  (this.buttonsEl.getElementsByClassName("as-selected")[0].classList.remove("as-selected"),
                  this.buttonsEl.getElementsByClassName("as-pagination-button")[e.detail.index].classList.add("as-selected"));
              });
          }
          updateHandler() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }), (this.buttonsEl = this.accordion.accordionEl.getElementsByClassName("as-pagination-buttons")[0]);
            const e = this.accordion.getTotalPages();
            !0 === this.settings.buttons && e > 1 && void 0 === this.buttonsEl
              ? this.createButtons()
              : !0 === this.settings.buttons && void 0 !== this.buttonsEl && e !== this.buttonsEl.getElementsByClassName("as-pagination-button").length
              ? this.adjustButtons()
              : ((!1 === this.settings.buttons && void 0 !== this.buttonsEl) || (e <= 1 && void 0 !== this.buttonsEl)) && this.removeButtons();
          }
          createButtons() {
            (this.buttonsEl = document.createElement("div")), this.buttonsEl.classList.add("as-pagination-buttons"), this.accordion.accordionEl.appendChild(this.buttonsEl);
            for (let e = 0; e < this.accordion.getTotalPages(); e++) {
              const t = document.createElement("div");
              t.classList.add("as-pagination-button"), this.buttonsEl.appendChild(t), e === this.accordion.getCurrentPage() && t.classList.add("as-selected");
              const i = () => {
                this.accordion.gotoPage(e);
              };
              (this.eventHandlerReferences["click.button" + e] = i), t.addEventListener("click", i);
            }
            this.accordion.accordionEl.classList.add("as-has-buttons");
          }
          adjustButtons() {
            this.removeButtons(), this.createButtons();
          }
          removeButtons() {
            Array.from(this.buttonsEl.getElementsByClassName("as-pagination-button")).forEach((e, t) => {
              const i = this.eventHandlerReferences["click.button" + t];
              e.removeEventListener("click", i);
            }),
              this.buttonsEl.remove(),
              this.accordion.accordionEl.classList.remove("as-has-buttons");
          }
          destroy() {
            this.accordion.removeEventListener("pageScroll." + this.namespace), this.accordion.removeEventListener("update." + this.namespace), this.removeButtons();
          }
        },
        class {
          namespace = "deeplinking";
          accordion;
          settings;
          defaults = { updateHash: !1 };
          eventHandlerReferences = {};
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              this.accordion.addEventListener("init." + this.namespace, () => {
                this.gotoHash(window.location.hash);
              }),
              this.accordion.addEventListener("panelOpen." + this.namespace, (e) => {
                if (!0 === this.settings.updateHash) {
                  let t = this.accordion.accordionEl.getElementsByClassName("as-panel")[e.detail.index].getAttribute("id");
                  null === t && (t = e.detail.index), (window.location.hash = this.accordion.accordionEl.getAttribute("id") + "/" + t);
                }
              }),
              window.addEventListener(
                "hashchange",
                (this.eventHandlerReferences.hashchange = () => {
                  this.gotoHash(window.location.hash);
                })
              );
          }
          parseHash(e) {
            if ("" !== e) {
              const t = (e = e.substring(1)).split("/").pop(),
                i = e.slice(0, -t.toString().length - 1);
              if (this.accordion.accordionEl.getAttribute("id") === i) return { accordionId: i, panelId: t };
            }
            return !1;
          }
          gotoHash(e) {
            const t = this.parseHash(e);
            if (!1 === t) return;
            const { panelId: i } = t,
              s = parseInt(i, 10);
            if (isNaN(s)) {
              const e = document.getElementById(i),
                t = Array.from(this.accordion.accordionEl.getElementsByClassName("as-panel")).indexOf(e);
              -1 !== t && t !== this.accordion.getCurrentIndex() && this.accordion.openPanel(t);
            } else s !== this.accordion.getCurrentIndex() && this.accordion.openPanel(s);
          }
          destroy() {
            this.accordion.removeEventListener("init." + this.namespace),
              this.accordion.removeEventListener("panelOpen." + this.namespace),
              window.removeEventListener("hashchange", this.eventHandlerReferences.hashchange);
          }
        },
        class {
          namespace = "keyboards";
          accordion;
          settings;
          isEnabled = !1;
          eventHandlerReferences = {};
          defaults = { keyboard: !0, keyboardOnlyOnFocus: !1, keyboardTarget: "panel" };
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this));
          }
          updateHandler() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              !0 === this.settings.keyboard && !1 === this.isEnabled && ((this.isEnabled = !0), this.enable()),
              !1 === this.settings.keyboard && !0 === this.isEnabled && ((this.isEnabled = !1), this.disable());
          }
          enable() {
            let e = !1;
            this.accordion.accordionEl.addEventListener(
              "focus",
              (this.eventHandlerReferences.focus = () => {
                e = !0;
              })
            ),
              this.accordion.accordionEl.addEventListener(
                "blur",
                (this.eventHandlerReferences.blur = () => {
                  e = !1;
                })
              );
            const t = (t) => {
              if (!0 !== this.settings.keyboardOnlyOnFocus || !1 !== e)
                if (37 === t.which) "panel" === this.settings.keyboardTarget ? this.accordion.previousPanel() : this.accordion.previousPage();
                else if (39 === t.which) "panel" === this.settings.keyboardTarget ? this.accordion.nextPanel() : this.accordion.nextPage();
                else if (13 === t.which) {
                  const e = this.accordion.accordionEl.getElementsByClassName("as-panel")[this.accordion.getCurrentIndex()].querySelector(".as-panel > a");
                  null !== e && e.click();
                }
            };
            (this.eventHandlerReferences.keydown = t), document.addEventListener("keydown", t);
          }
          disable() {
            this.accordion.accordionEl.removeEventListener("focus", this.eventHandlerReferences.focus),
              this.accordion.accordionEl.removeEventListener("blur", this.eventHandlerReferences.blur),
              document.removeEventListener("keydown", this.eventHandlerReferences.keydown);
          }
          destroy() {
            this.accordion.removeEventListener("update." + this.namespace), this.disable();
          }
        },
        class {
          namespace = "layers";
          accordion;
          settings;
          layers = [];
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this)),
              this.accordion.addEventListener("panelOpen." + this.namespace, this.panelOpenHandler.bind(this)),
              this.accordion.addEventListener("panelsClose." + this.namespace, (e) => {
                this.handleLayersInClosedState(e.detail.previousIndex);
              });
          }
          updateHandler() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              this.accordion.panels.forEach((e, t) => {
                let i = e.panelEl;
                Array.from(i.querySelectorAll(".as-layer:not([data-layer-init])")).forEach((e) => {
                  let i = new (class {
                    layerEl;
                    visible = !1;
                    visibleOn = "as-always";
                    styled = !1;
                    data = null;
                    position = null;
                    horizontalProperty = null;
                    verticalProperty = null;
                    horizontalPosition = null;
                    verticalPosition = null;
                    delayTimer = null;
                    stayTimer = null;
                    constructor(e) {
                      (this.layerEl = e), this.init();
                    }
                    init() {
                      this.layerEl.setAttribute("data-layer-init", !0),
                        this.layerEl.classList.contains("as-closed")
                          ? ((this.visibleOn = "closed"), (this.layerEl.style.visibility = "hidden"))
                          : this.layerEl.classList.contains("as-opened")
                          ? ((this.visibleOn = "opened"), (this.layerEl.style.visibility = "hidden"))
                          : this.setStyle();
                    }
                    setStyle() {
                      (this.styled = !0),
                        (this.data = this.layerEl.dataset),
                        void 0 !== this.data.width && (this.layerEl.style.width = s(this.data.width)),
                        void 0 !== this.data.height && (this.layerEl.style.height = s(this.data.height)),
                        void 0 !== this.data.depth && (this.layerEl.style.zIndex = this.data.depth),
                        (this.position = this.data.position ? this.data.position.toLowerCase() : "topleft"),
                        -1 !== this.position.indexOf("right")
                          ? (this.horizontalProperty = "right")
                          : -1 !== this.position.indexOf("left")
                          ? (this.horizontalProperty = "left")
                          : (this.horizontalProperty = "center"),
                        -1 !== this.position.indexOf("bottom")
                          ? (this.verticalProperty = "bottom")
                          : -1 !== this.position.indexOf("top")
                          ? (this.verticalProperty = "top")
                          : (this.verticalProperty = "center"),
                        this.setPosition();
                    }
                    setPosition() {
                      let e = this.layerEl.getAttribute("style");
                      (this.horizontalPosition = void 0 !== this.data.horizontal ? this.data.horizontal : 0),
                        (this.verticalPosition = void 0 !== this.data.vertical ? this.data.vertical : 0),
                        "center" === this.horizontalProperty || "center" === this.horizontalPosition
                          ? ("IMG" !== this.layerEl.tagName &&
                              (null === e || (null !== e && -1 === e.indexOf("width"))) &&
                              ((this.layerEl.style.whiteSpace = "nowrap"), (this.layerEl.style.width = s(this.layerEl.clientWidth))),
                            (this.layerEl.style.marginLeft = "auto"),
                            (this.layerEl.style.marginRight = "auto"),
                            (this.layerEl.style.left = 0),
                            (this.layerEl.style.right = 0))
                          : (this.layerEl.style[this.horizontalProperty] = s(this.horizontalPosition)),
                        "center" === this.verticalProperty || "center" === this.verticalPosition
                          ? ("IMG" !== this.layerEl.tagName &&
                              (null === e || (null !== e && -1 === e.indexOf("height"))) &&
                              ((this.layerEl.style.whiteSpace = "nowrap"), (this.layerEl.style.height = s(this.layerEl.clientHeight))),
                            (this.layerEl.style.marginTop = "auto"),
                            (this.layerEl.style.marginBottom = "auto"),
                            (this.layerEl.style.top = 0),
                            (this.layerEl.style.bottom = 0))
                          : (this.layerEl.style[this.verticalProperty] = s(this.verticalPosition));
                    }
                    show(e) {
                      if (!0 === this.visible) return;
                      (this.visible = !0), !1 === this.styled && this.setStyle();
                      let t = void 0 !== this.data.showOffset ? this.data.showOffset : 50,
                        i = void 0 !== this.data.showDuration ? this.data.showDuration / 1e3 : 0.4,
                        s = void 0 !== this.data.showDelay ? this.data.showDelay : 10,
                        n = void 0 !== this.data.stayDuration ? parseInt(this.data.stayDuration, 10) : -1,
                        a = { opacity: 0, visibility: "visible" },
                        r = { opacity: 1 },
                        o = "";
                      (r.transition = "opacity " + i + "s"),
                        void 0 !== this.data.showTransition &&
                          ("left" === this.data.showTransition
                            ? (o = t + "px, 0")
                            : "right" === this.data.showTransition
                            ? (o = "-" + t + "px, 0")
                            : "up" === this.data.showTransition
                            ? (o = "0, " + t + "px")
                            : "down" === this.data.showTransition && (o = "0, -" + t + "px"),
                          (a.transform = "translate3d(" + o + ", 0)"),
                          (r.transform = "translate3d(0, 0, 0)"),
                          (r.transition += ", transform " + i + "s"));
                      const l = (t) => {
                        t.target === t.currentTarget &&
                          (this.layerEl.removeEventListener("transitionend", l),
                          (this.layerEl.style.transition = ""),
                          -1 !== n &&
                            (this.stayTimer = setTimeout(function () {
                              this.hide(), (this.stayTimer = null);
                            }, n)),
                          void 0 !== e && e());
                      };
                      this.layerEl.addEventListener("transitionend", l);
                      for (let e in a) this.layerEl.style[e] = a[e];
                      this.delayTimer = setTimeout(() => {
                        for (let e in r) this.layerEl.style[e] = r[e];
                      }, s);
                    }
                    hide(e) {
                      if (!1 === this.visible) return;
                      let t = void 0 !== this.data.hideOffset ? this.data.hideOffset : 50,
                        i = void 0 !== this.data.hideDuration ? this.data.hideDuration / 1e3 : 0.4,
                        s = void 0 !== this.data.hideDelay ? this.data.hideDelay : 10;
                      (this.visible = !1), null !== this.stayTimer && clearTimeout(this.stayTimer);
                      let n = "",
                        a = { opacity: 0 };
                      (a.transition = "opacity " + i + "s"),
                        void 0 !== this.data.hideTransition &&
                          ("left" === this.data.hideTransition
                            ? (n = "-" + t + "px, 0")
                            : "right" === this.data.hideTransition
                            ? (n = t + "px, 0")
                            : "up" === this.data.hideTransition
                            ? (n = "0, -" + t + "px")
                            : "down" === this.data.hideTransition && (n = "0, " + t + "px"),
                          (a.transform = " translate3d(" + n + ", 0)"),
                          (a.transition += ", transform " + i + "s"));
                      const r = (t) => {
                        t.target === t.currentTarget &&
                          (this.layerEl.removeEventListener("transitionend", r),
                          this.layerEl.style.removeProperty("transition"),
                          !1 === this.visible && (this.layerEl.style.visibility = "hidden"),
                          void 0 !== e && e());
                      };
                      this.layerEl.addEventListener("transitionend", r),
                        (this.delayTimer = setTimeout(() => {
                          for (let e in a) this.layerEl.style[e] = a[e];
                        }, s));
                    }
                    isVisible() {
                      return !1 !== this.visible && null !== this.layerEl.offsetParent;
                    }
                    destroy() {
                      this.layerEl.removeAttribute("style"),
                        this.layerEl.removeAttribute("data-layer-init"),
                        clearTimeout(this.delayTimer),
                        clearTimeout(this.stayTimer),
                        (this.delayTimer = null),
                        (this.stayTimer = null);
                    }
                  })(e);
                  this.layers.push({ layer: i, panelIndex: t });
                }),
                  this.accordion.currentIndex === t ? this.handleLayersInOpenedState(t) : this.handleLayersInClosedState(t);
              });
          }
          panelOpenHandler(e) {
            this.handleLayersInClosedState(e.detail.previousIndex), this.handleLayersInOpenedState(e.detail.index);
          }
          handleLayersInOpenedState(e) {
            this.layers
              .filter((t) => t.panelIndex === e)
              .forEach((e) => {
                const t = e.layer;
                "opened" === t.visibleOn ? t.show() : "closed" === t.visibleOn && t.hide();
              });
          }
          handleLayersInClosedState(e) {
            this.layers
              .filter((t) => t.panelIndex === e)
              .forEach((e) => {
                const t = e.layer;
                "opened" === t.visibleOn ? t.hide() : "closed" === t.visibleOn && t.show();
              });
          }
          destroy() {
            this.accordion.removeEventListener("update." + this.namespace),
              this.accordion.removeEventListener("panelOpen." + this.namespace),
              this.layers.forEach((e) => {
                e.destroy();
              });
          }
        },
        class {
          namespace = "lazyloading";
          accordion;
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            this.accordion.addEventListener("update." + this.namespace, this.checkAndLoadVisibleImages.bind(this)),
              this.accordion.addEventListener("pageScroll." + this.namespace, this.checkAndLoadVisibleImages.bind(this));
          }
          checkAndLoadVisibleImages() {
            const e = this.accordion.getFirstPanelFromPage(),
              t = this.accordion.getLastPanelFromPage();
            (t !== this.accordion.getTotalPanels() - 1 ? this.accordion.panels.slice(e, t + 1) : this.accordion.panels.slice(e)).forEach((e) => {
              const t = e.panelEl;
              null === t.getAttribute("data-loaded") &&
                (t.setAttribute("data-loaded", !0),
                Array.from(t.getElementsByTagName("img")).forEach((e) => {
                  this.loadImage(e);
                }));
            });
          }
          loadImage(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const i = new Image();
            i.setAttribute("class", e.getAttribute("class")), i.setAttribute("style", e.getAttribute("style"));
            for (let t in e.dataset) i.setAttribute("data-" + t, e.dataset[t]);
            null !== e.getAttribute("width") && i.setAttribute("width", e.getAttribute("width")),
              null !== e.getAttribute("height") && i.setAttribute("height", e.getAttribute("height")),
              null !== e.getAttribute("alt") && i.setAttribute("alt", e.getAttribute("alt")),
              null !== e.getAttribute("title") && i.setAttribute("title", e.getAttribute("title")),
              null !== e.getAttribute("data-src") ? (i.setAttribute("src", e.getAttribute("data-src")), i.removeAttribute("data-src")) : i.setAttribute("src", e.getAttribute("src")),
              null !== e.getAttribute("data-srcset") && (i.setAttribute("srcset", e.getAttribute("data-srcset")), i.removeAttribute("data-srcset")),
              e.after(i),
              e.remove(),
              (e = null),
              "function" == typeof t && t(i);
          }
          destroy() {
            this.slider.removeEventListener("update." + this.namespace), this.slider.removeEventListener("gotoSlide." + this.namespace);
          }
        },
        class {
          namespace = "retina";
          accordion;
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            window.devicePixelRatio < 2 || this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this));
          }
          updateHandler() {
            this.accordion.panels.forEach((e) => {
              const t = e.panelEl;
              null === t.getAttribute("data-retina-loaded") &&
                (t.setAttribute("data-retina-loaded", !0),
                Array.from(t.querySelectorAll("img[data-retina]")).forEach((e) => {
                  null !== e.getAttribute("data-src") ? (e.setAttribute("data-src", e.getAttribute("data-retina")), e.removeAttribute("data-retina")) : this.loadImage(e);
                }));
            });
          }
          loadImage(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              i = !1,
              s = "";
            if (
              (null !== e.getAttribute("data-retina") && ((i = !0), (s = e.getAttribute("data-retina"))),
              null !== e.getAttribute("data-src") && (!1 === i && (s = e.getAttribute("data-src")), e.removeAttribute("data-src")),
              "" === s)
            )
              return;
            const n = new Image();
            n.setAttribute("class", e.getAttribute("class")), n.setAttribute("style", e.getAttribute("style"));
            for (let t in e.dataset) n.setAttribute("data-" + t, e.dataset[t]);
            null !== e.getAttribute("width") && n.setAttribute("width", e.getAttribute("width")),
              null !== e.getAttribute("height") && n.setAttribute("height", e.getAttribute("height")),
              null !== e.getAttribute("alt") && n.setAttribute("alt", e.getAttribute("alt")),
              null !== e.getAttribute("title") && n.setAttribute("title", e.getAttribute("title")),
              null !== e.getAttribute("data-srcset") && (n.setAttribute("srcset", e.getAttribute("data-srcset")), n.removeAttribute("data-srcset")),
              e.after(n),
              e.remove(),
              (e = null),
              n.setAttribute("src", s),
              "function" == typeof t && t(n);
          }
          destroy() {
            this.accordion.removeEventListener("update." + this.namespace);
          }
        },
        class {
          namespace = "touchswipe";
          accordion;
          settings;
          isTouchSwipeEnabled = !1;
          touchStartPoint = { x: 0, y: 0 };
          touchEndPoint = { x: 0, y: 0 };
          touchDistance = { x: 0, y: 0 };
          touchStartPosition = 0;
          isTouchMoving = !1;
          touchSwipeEvents = { startEvent: ["touchstart", "mousedown"], moveEvent: ["touchmove", "mousemove"], endEvent: ["touchend", "mouseup"] };
          previousStartEvent = "";
          eventHandlerReferences = {};
          defaults = { touchSwipe: !0, touchSwipeThreshold: 50 };
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this));
          }
          updateHandler() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              !0 === this.settings.touchSwipe && !1 === this.isTouchSwipeEnabled ? this.add() : !1 === this.settings.touchSwipe && !0 === this.isTouchSwipeEnabled && this.destroy(),
              this.accordion.getTotalPages() > 1 ? this.accordion.panelsContainerEl.classList.add("as-grab") : this.accordion.panelsContainerEl.classList.remove("as-grab");
          }
          add() {
            (this.isTouchSwipeEnabled = !0),
              Array.from(this.touchSwipeEvents.startEvent).forEach((e) => {
                this.accordion.panelsContainerEl.addEventListener(
                  e,
                  (this.eventHandlerReferences[e] = (e) => {
                    this.touchStartHandler(e);
                  })
                );
              }),
              this.accordion.panelsContainerEl.addEventListener(
                "dragstart",
                (this.eventHandlerReferences.dragstart = (e) => {
                  e.preventDefault();
                })
              ),
              Array.from(this.accordion.panelsContainerEl.getElementsByTagName("a")).forEach((e) => {
                e.addEventListener(
                  "click",
                  (this.eventHandlerReferences["click.link"] = (e) => {
                    this.accordion.accordionEl.classList.contains("as-swiping") && e.preventDefault();
                  })
                );
              }),
              this.accordion.panelsContainerEl.addEventListener(
                "touchstart",
                (this.eventHandlerReferences["touchstart.link"] = () => {
                  const e = this.accordion.panelsContainerEl.querySelectorAll("[data-disabledlink]");
                  Array.from(e).forEach((e) => {
                    e.style.removeProperty("pointer-events"), e.removeAttribute("data-disabledlink");
                  });
                })
              ),
              Array.from(this.accordion.panelsContainerEl.getElementsByTagName("a")).forEach((e) => {
                e.addEventListener(
                  "touchend",
                  (this.eventHandlerReferences["touchend.link"] = () => {
                    const t = (function (e, t) {
                      if (null == e || void 0 === e.tagName) return null;
                      for (; !e.classList.contains(t) && e.tagName !== t.toUpperCase(); ) {
                        if ("HTML" === e.tagName) return null;
                        e = e.parentElement;
                      }
                      return e;
                    })(e, "as-panel");
                    null !== t && !1 === t.classList.contains("as-opened") && ((e.style["pointer-events"] = "none"), e.setAttribute("data-disabledlink", !0));
                  })
                );
              });
          }
          touchStartHandler(e) {
            if ("mousedown" === e.type && "touchstart" === this.previousStartEvent) return void (this.previousStartEvent = e.type);
            if (((this.previousStartEvent = e.type), e.target.classList.contains("as-selectable"))) return;
            const t = void 0 !== e.touches ? e.touches[0] : e,
              i = "horizontal" === this.settings.orientation ? "left" : "top";
            (this.touchStartPoint.x = t.pageX || t.clientX),
              (this.touchStartPoint.y = t.pageY || t.clientY),
              (this.touchStartPosition = parseInt(this.accordion.panelsContainerEl.style[i], 10)),
              (this.touchDistance.x = this.touchDistance.y = 0),
              Array.from(this.touchSwipeEvents.moveEvent).forEach((e) => {
                this.accordion.panelsContainerEl.addEventListener(
                  e,
                  (this.eventHandlerReferences[e] = (e) => {
                    this.touchMoveHandler(e);
                  })
                );
              }),
              Array.from(this.touchSwipeEvents.endEvent).forEach((e) => {
                document.addEventListener(
                  e,
                  (this.eventHandlerReferences[e] = (e) => {
                    this.touchEndHandler(e);
                  })
                );
              }),
              this.accordion.panelsContainerEl.classList.replace("as-grab", "as-grabbing");
          }
          touchMoveHandler(e) {
            const t = void 0 !== e.touches ? e.touches[0] : e,
              i = "horizontal" === this.settings.orientation ? "left" : "top";
            (this.isTouchMoving = !0),
              !1 === this.accordion.accordionEl.classList.contains("as-swiping") && this.accordion.accordionEl.classList.add("as-swiping"),
              (this.touchEndPoint.x = t.pageX || t.clientX),
              (this.touchEndPoint.y = t.pageY || t.clientY),
              (this.touchDistance.x = this.touchEndPoint.x - this.touchStartPoint.x),
              (this.touchDistance.y = this.touchEndPoint.y - this.touchStartPoint.y);
            let n = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y;
            if (!0 === this.allowOppositeScrolling) return;
            e.preventDefault();
            const a = parseInt(this.accordion.panelsContainerEl.style[i], 10);
            ((a >= 0 && 0 === this.accordion.currentPage) || (a <= -this.accordion.totalPanelsSize + this.accordion.totalSize && this.accordion.currentPage === this.accordion.getTotalPages() - 1)) &&
              (n *= 0.2),
              (this.accordion.panelsContainerEl.style[i] = s(this.touchStartPosition + n));
          }
          touchEndHandler() {
            let e = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y;
            const t = "horizontal" === this.settings.orientation ? "left" : "top";
            Array.from(this.touchSwipeEvents.moveEvent).forEach((e) => {
              this.accordion.panelsContainerEl.removeEventListener(e, this.eventHandlerReferences[e]);
            }),
              Array.from(this.touchSwipeEvents.endEvent).forEach((e) => {
                document.removeEventListener(e, this.eventHandlerReferences[e]);
              }),
              this.accordion.panelsContainerEl.classList.replace("as-grabbing", "as-grab"),
              this.accordion.accordionEl.classList.contains("as-swiping") &&
                setTimeout(() => {
                  this.accordion.accordionEl.classList.remove("as-swiping");
                }, 100),
              !1 !== this.isTouchMoving &&
                ((this.isTouchMoving = !1),
                e > this.settings.touchSwipeThreshold
                  ? this.accordion.currentPage > 0
                    ? this.accordion.previousPage()
                    : (this.accordion.panelsContainerEl.style[t] = this.touchStartPosition)
                  : -e > this.settings.touchSwipeThreshold
                  ? this.accordion.currentPage < this.accordion.getTotalPages() - 1
                    ? this.accordion.nextPage()
                    : this.accordion.gotoPage(this.accordion.currentPage)
                  : Math.abs(e) < this.settings.touchSwipeThreshold && (this.accordion.panelsContainerEl.style[t] = s(this.touchStartPosition)));
          }
          destroy() {
            (this.isTouchSwipeEnabled = !1),
              this.accordion.removeEventListener("update." + this.namespace),
              this.accordion.panelsContainerEl.removeEventListener("dragstart", this.eventHandlerReferences.dragstart),
              this.accordion.panelsContainerEl.removeEventListener("touchstart", this.eventHandlerReferences["touchstart.link"]),
              Array.from(this.accordion.panelsContainerEl.getElementsByTagName("a")).forEach((e) => {
                e.removeEventListener("click", this.eventHandlerReferences["click.link"]), e.removeEventListener("touchend", this.eventHandlerReferences["touchend.link"]);
              }),
              Array.from([...this.touchSwipeEvents.startEvent, ...this.touchSwipeEvents.moveEvent]).forEach((e) => {
                this.accordion.panelsContainerEl.removeEventListener(e, this.eventHandlerReferences[e]);
              }),
              Array.from(this.touchSwipeEvents.endEvent).forEach((e) => {
                document.removeEventListener(e, this.eventHandlerReferences[e]);
              }),
              this.accordion.panelsContainerEl.classList.remove("as-grab");
          }
        },
        class {
          namespace = "swapbackground";
          accordion;
          settings;
          eventHandlerReferences = {};
          defaults = { swapBackgroundDuration: 700, fadeOutBackground: !1 };
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              this.accordion.addEventListener("panelOpen." + this.namespace, (e) => {
                const t = this.accordion.getPanelAt(e.detail.index),
                  i = t.panelEl.getElementsByClassName("as-background")[0],
                  s = t.panelEl.getElementsByClassName("as-background-opened")[0];
                if (
                  (void 0 !== s && ((s.style.visibility = "visible"), (s.style.opacity = 0), this.fadeIn(s), void 0 !== i && !0 === this.settings.fadeOutBackground && this.fadeOut(i)),
                  -1 !== e.detail.previousIndex && e.detail.index !== e.detail.previousIndex)
                ) {
                  const t = this.accordion.getPanelAt(e.detail.previousIndex),
                    i = t.panelEl.getElementsByClassName("as-background")[0],
                    s = t.panelEl.getElementsByClassName("as-background-opened")[0];
                  void 0 !== s && (this.fadeOut(s), void 0 !== i && !0 === this.settings.fadeOutBackground && this.fadeIn(i));
                }
              }),
              this.accordion.addEventListener("panelsClose." + this.namespace, (e) => {
                if (-1 === e.detail.previousIndex) return;
                const t = this.accordion.getPanelAt(e.detail.previousIndex),
                  i = t.panelEl.getElementsByClassName("as-background")[0],
                  s = t.panelEl.getElementsByClassName("as-background-opened")[0];
                void 0 !== s && (this.fadeOut(s), void 0 !== i && !0 === this.settings.fadeOutBackground && this.fadeIn(i));
              });
          }
          fadeIn(e) {
            (e.style.visibility = "visible"),
              e.removeEventListener("transitionend", this.eventHandlerReferences["transitionend.fadein"]),
              e.addEventListener(
                "transitionend",
                (this.eventHandlerReferences["transitionend.fadein"] = (t) => {
                  t.target === t.currentTarget && (e.removeEventListener("transitionend", this.eventHandlerReferences["transitionend.fadein"]), e.style.removeProperty("transition"));
                })
              ),
              setTimeout(() => {
                (e.style.opacity = 1), (e.style.transition = "all " + this.settings.swapBackgroundDuration / 1e3 + "s");
              }, 100);
          }
          fadeOut(e) {
            e.removeEventListener("transitionend", this.eventHandlerReferences["transitionend.fadeout"]),
              e.addEventListener(
                "transitionend",
                (this.eventHandlerReferences["transitionend.fadeout"] = (t) => {
                  t.target === t.currentTarget &&
                    (e.removeEventListener("transitionend", this.eventHandlerReferences["transitionend.fadeout"]), e.style.removeProperty("transition"), (e.style.visibility = "hidden"));
                })
              ),
              setTimeout(() => {
                (e.style.opacity = 0), (e.style.transition = "all " + this.settings.swapBackgroundDuration / 1e3 + "s");
              }, 100);
          }
          destroy() {
            this.removeEventListener("panelOpen." + this.namespace), this.removeEventListener("panelsClose." + this.namespace);
          }
        },
        class {
          namespace = "mousewheel";
          accordion;
          settings;
          isEnabled = !1;
          allowMouseWheelScroll = !0;
          eventHandlerReferences = {};
          defaults = { mouseWheel: !0, mouseWheelDirection: "normal", mouseWheelSensitivity: 10, mouseWheelTarget: "panel" };
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this));
          }
          updateHandler() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              !0 === this.settings.mouseWheel && !1 === this.isEnabled && ((this.isEnabled = !0), this.enable()),
              !1 === this.settings.mouseWheel && !0 === this.isEnabled && ((this.isEnabled = !1), this.disable());
          }
          enable() {
            this.accordion.accordionEl.addEventListener(
              "wheel",
              (this.eventHandlerReferences.wheel = (e) => {
                e.preventDefault();
                let t = e.deltaY * ("normal" === this.settings.mouseWheelDirection ? 1 : -1);
                !0 === this.allowMouseWheelScroll &&
                  Math.abs(t) >= this.settings.mouseWheelSensitivity &&
                  ((this.allowMouseWheelScroll = !1),
                  setTimeout(() => {
                    this.allowMouseWheelScroll = !0;
                  }, 500),
                  t >= this.settings.mouseWheelSensitivity
                    ? "page" === this.settings.mouseWheelTarget
                      ? this.accordion.nextPage()
                      : this.accordion.nextPanel()
                    : t <= -this.settings.mouseWheelSensitivity && ("page" === this.settings.mouseWheelTarget ? this.accordion.previousPage() : this.accordion.previousPanel()));
              })
            );
          }
          disable() {
            this.accordion.accordionEl.removeEventListener("wheel", this.eventHandlerReferences.wheel);
          }
          destroy() {
            this.accordion.removeEventListener("update." + this.namespace), this.disable();
          }
        },
        class {
          namespace = "video";
          accordion = null;
          settings = null;
          videoReferences = {};
          preinitVideoClickHandler = null;
          defaults = { openPanelVideoAction: "none", closePanelVideoAction: "pauseVideo", playVideoAction: "stopAutoplay", pauseVideoAction: "none", endVideoAction: "none" };
          constructor(e) {
            (this.accordion = e), this.init();
          }
          init() {
            this.accordion.addEventListener("update." + this.namespace, this.updateHandler.bind(this)),
              this.accordion.addEventListener("panelOpen." + this.namespace, this.panelOpenHandler.bind(this)),
              this.accordion.addEventListener("panelOpenComplete." + this.namespace, this.panelOpenCompleteHandler.bind(this));
          }
          updateHandler() {
            (this.settings = { ...this.defaults, ...this.accordion.settings }),
              Array.from(this.accordion.accordionEl.querySelectorAll(".as-video:not(a):not([data-video-init])")).forEach((e) => {
                this.initVideo(e);
              }),
              Array.from(this.accordion.accordionEl.querySelectorAll("a.as-video:not([data-video-preinit])")).forEach((e) => {
                this.preinitVideo(e);
              });
          }
          initVideo(e) {
            e.setAttribute("data-video-init", !0);
            const t = new m(e),
              i = (parseInt(new Date().valueOf(), 10) * Math.floor(1e3 * Math.random())).toString();
            e.setAttribute("data-video-ref", i),
              (this.videoReferences[i] = t),
              t.addEventListener("videoPlay", () => {
                "stopAutoplay" === this.settings.playVideoAction &&
                  void 0 !== this.accordion.addOns.Autoplay &&
                  (this.accordion.addOns.Autoplay.stop(), (this.settings.autoplay = !1), (this.accordion.addOns.Autoplay.settings.autoplay = !1));
              }),
              t.addEventListener("videoPause", () => {
                "startAutoplay" === this.settings.pauseVideoAction &&
                  void 0 !== this.accordion.addOns.Autoplay &&
                  ((this.settings.autoplay = !0), (this.accordion.addOns.Autoplay.settings.autoplay = !0), this.accordion.addOns.Autoplay.stop(), this.accordion.addOns.Autoplay.start());
              }),
              t.addEventListener("videoEnded", () => {
                "startAutoplay" === this.settings.endVideoAction && void 0 !== this.accordion.addOns.Autoplay
                  ? ((this.settings.autoplay = !0), (this.accordion.addOns.Autoplay.settings.autoplay = !0), this.accordion.addOns.Autoplay.stop(), this.accordion.addOns.Autoplay.start())
                  : "nextPanel" === this.settings.endVideoAction
                  ? this.accordion.nextPanel()
                  : "replayVideo" === this.settings.endVideoAction && t.replay();
              });
          }
          preinitVideo(e) {
            e.setAttribute("data-video-preinit", !0),
              (this.preinitVideoClickHandler = (e) => {
                let t = e.target;
                if (this.accordion.accordionEl.classList.contains("as-swiping") || null !== t.parentElement.querySelector(".as-video[data-video-init]")) return;
                e.preventDefault();
                let i,
                  s,
                  n,
                  a,
                  r,
                  o,
                  l,
                  h = t.getAttribute("href"),
                  d = t.getElementsByTagName("img")[0],
                  c = d.getAttribute("width") || d.clientWidth,
                  p = d.getAttribute("height") || d.clientHeight;
                -1 !== h.indexOf("youtube") || -1 !== h.indexOf("youtu.be") ? (s = "youtube") : -1 !== h.indexOf("vimeo") && (s = "vimeo"),
                  (n = "youtube" === s ? /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/ : /(www\.)?vimeo.com\/(\d+)/),
                  (a = h.match(n)),
                  (r = a[2]),
                  (o = "youtube" === s ? "//www.youtube.com/embed/" + r + "?enablejsapi=1&wmode=opaque" : "//player.vimeo.com/video/" + r),
                  (l = h.split("?")[1]),
                  void 0 !== l &&
                    ((l = l.split("&")),
                    l.forEach((e) => {
                      -1 === e.indexOf(r) && (o += "&" + e);
                    })),
                  (i = document.createElement("iframe")),
                  i.setAttribute("src", o),
                  i.setAttribute("width", c),
                  i.setAttribute("height", p),
                  i.setAttribute("class", t.getAttribute("class")),
                  i.setAttribute("frameborder", 0),
                  i.setAttribute("allowfullscreen", "allowfullscreen"),
                  t.parentElement.insertBefore(i, t),
                  this.initVideo(i),
                  this.videoReferences[i.getAttribute("data-video-ref")].play(),
                  (t.style.display = "none");
              }),
              e.addEventListener("click", this.preinitVideoClickHandler);
          }
          panelOpenHandler(e) {
            if (-1 === e.detail.previousIndex) return;
            const t = this.accordion.panelsContainerEl.getElementsByClassName("as-panel")[e.detail.previousIndex].querySelector(".as-video[data-video-init]");
            if (null === t) return;
            const i = this.videoReferences[t.getAttribute("data-video-ref")];
            null !== i &&
              ("stopVideo" === this.settings.closePanelVideoAction
                ? i.stop()
                : "pauseVideo" === this.settings.closePanelVideoAction
                ? i.pause()
                : "removeVideo" === this.settings.closePanelVideoAction &&
                  (null !== t.parentElement.querySelector("a.as-video") ? (t.parentElement.querySelector("a.as-video").style.removeProperty("display"), i.destroy(), t.remove()) : i.stop()));
          }
          panelOpenCompleteHandler(e) {
            if ("playVideo" === this.settings.openPanelVideoAction && e.detail.index === this.accordion.getCurrentIndex()) {
              const t = this.accordion.panelsContainerEl.getElementsByClassName("as-panel")[e.detail.index].querySelector(".as-video[data-video-init]"),
                i = this.accordion.panelsContainerEl.getElementsByClassName("as-panel")[e.detail.index].querySelector(".as-video[data-video-preinit]");
              if (null !== t) {
                const e = this.videoReferences[e.getAttribute("data-video-ref")];
                e.play();
              } else null !== i && i.dispatchEvent("click");
              "stopAutoplay" === this.settings.playVideoAction &&
                void 0 !== this.accordion.addOns.Autoplay &&
                (this.accordion.addOns.Autoplay.stop(), (this.settings.autoplay = !1), (this.accordion.addOns.Autoplay.settings.autoplay = !1));
            }
          }
          destroy() {
            Array.from(this.accordion.accordionEl.querySelectorAll(".as-video[ data-video-preinit ]")).forEach((e) => {
              e.removeAttribute("data-video-preinit"), e.removeEventListener("click", this.preinitVideoClickHandler);
            }),
              Array.from(this.accordion.accordionEl.querySelectorAll(".as-video[ data-video-init ]")).forEach((e) => {
                e.removeAttribute("data-video-init");
                const t = this.videoReferences[e.getAttribute("data-video-ref")];
                t.removeEventListener("videoPlay"),
                  t.removeEventListener("videoPause"),
                  t.removeEventListener("videoEnded"),
                  t.destroy(),
                  e.removeAttribute("data-video-ref"),
                  null !== e.parentElement.querySelector(".as-video[ data-video-preinit ]") && e.remove();
              }),
              (this.videoReferences.length = 0),
              this.accordion.removeEventListener("update." + this.namespace),
              this.accordion.removeEventListener("panelOpen." + this.namespace),
              this.accordion.removeEventListener("panelOpenComplete." + this.namespace);
          }
        },
      ]),
        (window.AccordionSlider = class extends a {
          namespace = "accordionslider";
          settings = {};
          selector;
          accordionEl = null;
          panelsEl = null;
          panelsMaskEl = null;
          currentIndex = -1;
          currentPage = 0;
          totalSize = 0;
          totalPanelsSize = 0;
          computedOpenedPanelSize = 0;
          maxComputedOpenedPanelSize = 0;
          collapsedPanelSize = 0;
          closedPanelSize = 0;
          computedPanelDistance = 0;
          panels = [];
          mouseDelayTimer = 0;
          openPanelAnimation = {};
          closePanelsAnimation = {};
          previousVisiblePanels = -1;
          isPageScrolling = !1;
          autoResponsiveRatio = 1;
          isOverlapping = !1;
          eventHandlerReferences = {};
          windowResizeHandler;
          addOnsManager;
          constructor(t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            super(), (this.selector = t), (this.settings = null !== i ? { ...e, ...i } : { ...e }), (this.addOnsManager = new h(this, this.settings.addOns)), this.addOnsManager.init(), this.init();
          }
          init() {
            if (
              (this.dispatchEvent("beforeInit"),
              (this.accordionEl = document.querySelector(this.selector)),
              this.accordionEl.classList.remove("as-no-js"),
              (this.panelsMaskEl = document.createElement("div")),
              this.panelsMaskEl.classList.add("as-mask"),
              this.accordionEl.appendChild(this.panelsMaskEl),
              (this.panelsContainerEl = this.accordionEl.getElementsByClassName("as-panels")[0]),
              0 === this.accordionEl.getElementsByClassName("as-panels").length && ((this.panelsContainerEl = document.createElement("div")), this.panelsContainerEl.classList.add("as-panels")),
              this.panelsMaskEl.appendChild(this.panelsContainerEl),
              !0 === this.settings.shuffle)
            ) {
              const e = [...Array.from(this.panelsContainerEl.getElementsByClassName("as-panel"))];
              for (let t = e.length - 1; t > 0; t--) {
                let i = Math.floor(Math.random() * (t + 1)),
                  s = e[t];
                (e[t] = e[i]), (e[i] = s);
              }
              this.panelsContainerEl.replaceChildren(...e);
            }
            (this.currentIndex = this.settings.startPanel),
              -1 === this.currentIndex ? this.accordionEl.classList.add("as-closed") : this.accordionEl.classList.add("as-opened"),
              -1 !== this.settings.startPage && (this.currentPage = this.settings.startPage),
              (this.windowResizeHandler = new o()),
              this.windowResizeHandler.addEventListener("resize", () => {
                this.resize();
              }),
              this.update(),
              -1 !== this.currentIndex &&
                (this.accordionEl.getElementsByClassName("as-panel")[this.currentIndex].classList.add("as-opened"), this.dispatchEvent("panelOpen", { index: this.currentIndex, previousIndex: -1 })),
              this.accordionEl.addEventListener(
                "mouseenter",
                (this.eventHandlerReferences["mouseenter.accordion"] = () => {
                  this.dispatchEvent("accordionMouseOver");
                })
              ),
              this.accordionEl.addEventListener(
                "mouseleave",
                (this.eventHandlerReferences["mouseleave.accordion"] = () => {
                  clearTimeout(this.mouseDelayTimer), !0 === this.settings.closePanelsOnMouseOut && this.closePanels(), this.dispatchEvent("accordionMouseOut");
                })
              ),
              this.dispatchEvent("init");
          }
          update() {
            if (
              (this.dispatchEvent("beforeUpdate"),
              "horizontal" === this.settings.orientation
                ? (this.accordionEl.classList.remove("as-vertical"), this.accordionEl.classList.add("as-horizontal"))
                : "vertical" === this.settings.orientation && (this.accordionEl.classList.remove("as-horizontal"), this.accordionEl.classList.add("as-vertical")),
              -1 === this.settings.visiblePanels)
            )
              this.currentPage = 0;
            else if (-1 !== this.currentIndex) this.currentPage = Math.floor(this.currentIndex / this.settings.visiblePanels);
            else if (this.settings.visiblePanels !== this.previousVisiblePanels && -1 !== this.previousVisiblePanels) {
              const e = Math.round((this.currentPage * this.previousVisiblePanels) / this.settings.visiblePanels);
              this.currentPage !== e && (this.currentPage = e), (this.previousVisiblePanels = this.settings.visiblePanels);
            }
            this.settings.panelDistance > 0 || !1 === this.settings.panelOverlap
              ? ((this.isOverlapping = !1), this.accordionEl.classList.remove("as-overlap"))
              : !0 === this.settings.panelOverlap && ((this.isOverlapping = !0), this.accordionEl.classList.add("as-overlap")),
              [...Array.from(this.accordionEl.getElementsByClassName("as-background")), ...Array.from(this.accordionEl.getElementsByClassName("as-background-opened"))].forEach((e) => {
                e.style.removeProperty("width"), e.style.removeProperty("height");
              }),
              this.updatePanels(),
              !0 === this.settings.shadow
                ? Array.from(this.accordionEl.getElementsByClassName("as-panel")).forEach((e) => {
                    e.classList.add("as-shadow");
                  })
                : !1 === this.settings.shadow &&
                  Array.from(this.accordionEl.getElementsByClassName("as-shadow")).forEach((e) => {
                    e.classList.remove("as-shadow");
                  }),
              this.panelsContainerEl.removeAttribute("style"),
              this.resize(),
              this.dispatchEvent("update");
          }
          resize() {
            this.dispatchEvent("beforeResize");
            const e = "horizontal" === this.settings.orientation ? "left" : "top",
              t = "horizontal" === this.settings.orientation ? "width" : "height";
            if (
              (this.panelsMaskEl.removeAttribute("style"),
              !0 === this.settings.responsive
                ? ((this.accordionEl.style.width = "100%"),
                  (this.accordionEl.style.height = s(this.settings.height)),
                  (this.accordionEl.style.maxWidth = s(this.settings.width)),
                  (this.accordionEl.style.maxHeight = s(this.settings.height)),
                  -1 === this.settings.aspectRatio && (this.settings.aspectRatio = this.settings.width / this.settings.height),
                  (this.accordionEl.style.height = s(this.accordionEl.clientWidth / this.settings.aspectRatio)),
                  "auto" === this.settings.responsiveMode &&
                    ((this.autoResponsiveRatio = this.accordionEl.clientWidth / this.settings.width),
                    (this.panelsMaskEl.style.width = s(this.settings.width)),
                    isNaN(this.settings.height)
                      ? (this.panelsMaskEl.style.height = s(Math.min(this.settings.width / this.settings.aspectRatio, (parseInt(this.settings.height, 10) / 100) * window.innerHeight)))
                      : (this.panelsMaskEl.style.height = s(Math.min(this.settings.width / this.settings.aspectRatio, this.settings.height))),
                    this.autoResponsiveRatio < 1
                      ? ((this.panelsMaskEl.style.transform = `scaleX(${this.autoResponsiveRatio}) scaleY(${this.autoResponsiveRatio})`), (this.panelsMaskEl.style.transformOrigin = "top left"))
                      : (this.panelsMaskEl.style.removeProperty("transform"), this.panelsMaskEl.style.removeProperty("transform-origin"))),
                  (this.totalSize = "horizontal" === this.settings.orientation ? this.panelsMaskEl.clientWidth : this.panelsMaskEl.clientHeight))
                : ((this.accordionEl.style.width = s(this.settings.width)),
                  (this.accordionEl.style.height = s(this.settings.height)),
                  this.accordionEl.style.removeProperty("max-width"),
                  this.accordionEl.style.removeProperty("max-height"),
                  (this.totalSize = "horizontal" === this.settings.orientation ? this.accordionEl.clientWidth : this.accordionEl.clientHeight)),
              [...Array.from(this.accordionEl.getElementsByClassName("as-background")), ...Array.from(this.accordionEl.getElementsByClassName("as-background-opened"))].forEach((e) => {
                "horizontal" === this.settings.orientation ? (e.style.height = s(this.panelsContainerEl.clientHeight)) : (e.style.width = s(this.panelsContainerEl.clientWidth));
              }),
              (this.computedPanelDistance = this.settings.panelDistance),
              "string" == typeof this.computedPanelDistance &&
                (-1 !== this.computedPanelDistance.indexOf("%")
                  ? (this.computedPanelDistance = this.totalSize * (parseInt(this.computedPanelDistance, 10) / 100))
                  : -1 !== this.computedPanelDistance.indexOf("px") && (this.computedPanelDistance = parseInt(this.computedPanelDistance, 10))),
              (this.closedPanelSize = (this.totalSize - (this.getVisiblePanels() - 1) * this.computedPanelDistance) / this.getVisiblePanels()),
              (this.closedPanelSize = Math.floor(this.closedPanelSize)),
              (this.computedOpenedPanelSize = this.settings.openedPanelSize),
              "max" === this.settings.openedPanelSize &&
                ((this.maxComputedOpenedPanelSize = this.settings.maxOpenedPanelSize),
                "string" == typeof this.maxComputedOpenedPanelSize &&
                  (-1 !== this.maxComputedOpenedPanelSize.indexOf("%")
                    ? (this.maxComputedOpenedPanelSize = this.totalSize * (parseInt(this.maxComputedOpenedPanelSize, 10) / 100))
                    : -1 !== this.maxComputedOpenedPanelSize.indexOf("px") && (this.maxComputedOpenedPanelSize = parseInt(this.maxComputedOpenedPanelSize, 10)))),
              "string" == typeof this.computedOpenedPanelSize)
            )
              if (-1 !== this.computedOpenedPanelSize.indexOf("%")) this.computedOpenedPanelSize = this.totalSize * (parseInt(this.computedOpenedPanelSize, 10) / 100);
              else if (-1 !== this.computedOpenedPanelSize.indexOf("px")) this.computedOpenedPanelSize = parseInt(this.computedOpenedPanelSize, 10);
              else if ("max" === this.computedOpenedPanelSize && -1 !== this.currentIndex) {
                const e = this.getPanelAt(this.currentIndex).getContentSize();
                this.computedOpenedPanelSize = "loading" === e ? this.closedPanelSize : Math.min(e, this.maxComputedOpenedPanelSize);
              }
            if (
              ((this.collapsedPanelSize = (this.totalSize - this.computedOpenedPanelSize - (this.getVisiblePanels() - 1) * this.computedPanelDistance) / (this.getVisiblePanels() - 1)),
              (this.computedOpenedPanelSize = Math.floor(this.computedOpenedPanelSize)),
              (this.collapsedPanelSize = Math.floor(this.collapsedPanelSize)),
              (this.totalPanelsSize = this.closedPanelSize * this.getTotalPanels() + this.computedPanelDistance * (this.getTotalPanels() - 1)),
              (this.panelsContainerEl.style[t] = s(this.totalPanelsSize)),
              (this.totalSize = this.closedPanelSize * this.getVisiblePanels() + this.computedPanelDistance * (this.getVisiblePanels() - 1)),
              "custom" === this.settings.responsiveMode || !1 === this.settings.responsive
                ? (this.accordionEl.style[t] = s(this.totalSize))
                : ((this.accordionEl.style[t] = s(this.totalSize * this.autoResponsiveRatio)), (this.panelsMaskEl.style[t] = s(this.totalSize))),
              -1 !== this.settings.visiblePanels)
            ) {
              let t = -(this.totalSize + this.computedPanelDistance) * this.currentPage;
              this.currentPage === this.getTotalPages() - 1 && (t = -(this.closedPanelSize * this.getTotalPanels() + this.computedPanelDistance * (this.getTotalPanels() - 1) - this.totalSize)),
                (this.panelsContainerEl.style[e] = s(t));
            }
            const i =
              this.currentPage === this.getTotalPages() - 1 && this.getTotalPanels() % this.settings.visiblePanels != 0
                ? this.settings.visiblePanels - (this.getTotalPanels() % this.settings.visiblePanels)
                : 0;
            this.panels.forEach((e, t) => {
              let s;
              if (
                (-1 === this.currentIndex
                  ? (s = t * (this.closedPanelSize + this.computedPanelDistance))
                  : -1 === this.settings.visiblePanels
                  ? (s = t * (this.collapsedPanelSize + this.computedPanelDistance) + (t > this.currentIndex ? this.computedOpenedPanelSize - this.collapsedPanelSize : 0))
                  : this.getPageOfPanel(t) === this.currentPage
                  ? ((s =
                      this.currentPage * (this.totalSize + this.computedPanelDistance) +
                      (t + i - this.currentPage * this.settings.visiblePanels) * (this.collapsedPanelSize + this.computedPanelDistance) +
                      (t > this.currentIndex ? this.computedOpenedPanelSize - this.collapsedPanelSize : 0)),
                    this.currentPage === this.getTotalPages() - 1 &&
                      0 !== i &&
                      (s -= (this.getTotalPages() - this.getTotalPanels() / this.settings.visiblePanels) * (this.totalSize + this.computedPanelDistance)))
                  : (s = t * (this.closedPanelSize + this.computedPanelDistance)),
                e.setPosition(s),
                !1 === this.isOverlapping)
              ) {
                const i =
                  -1 === this.currentIndex || (-1 !== this.settings.visiblePanels && this.getPageOfPanel(t) !== this.currentPage)
                    ? this.closedPanelSize
                    : t === this.currentIndex
                    ? this.computedOpenedPanelSize
                    : this.collapsedPanelSize;
                e.setSize(i);
              }
            }),
              this.dispatchEvent("resize");
          }
          updatePanels() {
            [...this.panels].forEach((e, t) => {
              if (null === this.accordionEl.querySelector(`.as-panel[data-index="${t}"]`)) {
                e.removeEventListener("panelMouseOver"), e.removeEventListener("panelMouseOut"), e.removeEventListener("panelClick"), e.removeEventListener("imagesComplete"), e.destroy();
                const i = this.panels.findIndex((e) => e.index === t);
                this.panels.splice(i, 1);
              }
            }),
              Array.from(this.accordionEl.getElementsByClassName("as-panel")).forEach((e, t) => {
                if (!1 === e.hasAttribute("data-init")) {
                  const i = this.createPanel(e);
                  this.panels.splice(t, 0, i);
                }
                (this.panels[t].settings = this.settings),
                  (this.panels[t].index = t),
                  e.style.removeProperty("top"),
                  e.style.removeProperty("left"),
                  e.style.removeProperty("width"),
                  e.style.removeProperty("height");
              });
          }
          createPanel(e) {
            const t = new r(e, this.settings);
            return (
              t.addEventListener("panelMouseOver", (e) => {
                !0 !== this.isPageScrolling &&
                  ("hover" === this.settings.openPanelOn &&
                    (clearTimeout(this.mouseDelayTimer),
                    (this.mouseDelayTimer = setTimeout(() => {
                      this.openPanel(e.detail.index);
                    }, this.settings.mouseDelay))),
                  this.dispatchEvent("panelMouseOver", { index: e.detail.index }));
              }),
              t.addEventListener("panelMouseOut", (e) => {
                !0 !== this.isPageScrolling && this.dispatchEvent("panelMouseOut", { index: e.detail.index });
              }),
              t.addEventListener("panelClick", (e) => {
                this.accordionEl.classList.contains("as-swiping") ||
                  ("click" === this.settings.openPanelOn && (e.detail.index !== this.currentIndex ? this.openPanel(e.detail.index) : this.closePanels()),
                  this.dispatchEvent("panelClick", { index: e.detail.index }));
              }),
              t.addEventListener("panelMouseDown", (t) => {
                const i = e.getElementsByTagName("a");
                i.length < 1 ||
                  (Array.from(i).forEach((e) => {
                    e.removeEventListener("click", this.eventHandlerReferences["click.link.panel"]);
                  }),
                  t.detail.index !== this.currentIndex &&
                    "click" === this.settings.openPanelOn &&
                    Array.from(i).forEach((e) => {
                      e.addEventListener(
                        "click",
                        (this.eventHandlerReferences["click.link.panel"] = (e) => {
                          e.preventDefault();
                        })
                      );
                    }));
              }),
              t.addEventListener("imagesComplete", (e) => {
                e.detail.index === this.currentIndex && e.detail.contentSize !== this.computedOpenedPanelSize && this.openPanel(e.detail.index, !0);
              }),
              t
            );
          }
          getPanelAt(e) {
            return this.panels[e];
          }
          getCurrentIndex() {
            return this.currentIndex;
          }
          getTotalPanels() {
            return this.panels.length;
          }
          nextPanel() {
            const e = this.currentIndex >= this.getTotalPanels() - 1 ? 0 : this.currentIndex + 1;
            this.openPanel(e);
          }
          previousPanel() {
            const e = this.currentIndex <= 0 ? this.getTotalPanels() - 1 : this.currentIndex - 1;
            this.openPanel(e);
          }
          destroy() {
            this.addOnsManager.destroyAll(),
              this.accordionEl.removeAttribute("style"),
              this.panelsContainerEl.removeAttribute("style"),
              this.accordionEl.setAttribute("class", "accordion-slider as-no-js"),
              this.accordionEl.removeEventListener("mouseenter", this.eventHandlerReferences["mouseenter.accordion"]),
              this.accordionEl.removeEventListener("mouseleave", this.eventHandlerReferences["mouseleave.accordion"]),
              this.windowResizeHandler.removeEventListener("resize"),
              this.windowResizeHandler.destroy(),
              this.stopPanelsAnimation(this.openPanelAnimation),
              this.stopPanelsAnimation(this.closePanelsAnimation),
              this.panels.forEach((e) => {
                e.removeEventListener("panelMouseOver"), e.removeEventListener("panelMouseOut"), e.removeEventListener("panelClick"), e.removeEventListener("imagesComplete"), e.destroy();
              }),
              (this.panels.length = 0),
              this.accordionEl.insertBefore(this.panelsContainerEl, this.accordionEl.firstChild),
              this.panelsMaskEl.remove();
          }
          animatePanels(e, t) {
            const i = new Date().valueOf();
            let s = 0;
            (e.isRunning = !0),
              (e.timer = window.requestAnimationFrame(function n() {
                s < 1
                  ? ((s = (new Date().valueOf() - i) / t.duration), s > 1 && (s = 1), (s = 0.5 - Math.cos(s * Math.PI) / 2), t.step(s), (e.timer = window.requestAnimationFrame(n)))
                  : (t.complete(), (e.isRunning = !1), window.cancelAnimationFrame(e.timer));
              }));
          }
          stopPanelsAnimation(e) {
            void 0 !== e.isRunning && !0 === e.isRunning && ((e.isRunning = !1), window.cancelAnimationFrame(e.timer));
          }
          openPanel(e, t) {
            if (e === this.currentIndex && !0 !== t) return;
            !0 === this.accordionEl.classList.contains("as-closed") && this.accordionEl.classList.replace("as-closed", "as-opened");
            const i = this.currentIndex;
            if (((this.currentIndex = e), -1 !== this.settings.visiblePanels && !(this.currentPage === this.getTotalPages() - 1 && e >= this.getTotalPanels() - this.settings.visiblePanels))) {
              const t = Math.floor(this.currentIndex / this.settings.visiblePanels);
              t !== this.currentPage && this.gotoPage(t), (this.currentIndex = e);
            }
            const s = [],
              n = [],
              a = [],
              r = [],
              o = [],
              l = this.getFirstPanelFromPage(),
              h = this.getLastPanelFromPage();
            let d = 0;
            if (
              (null !== this.accordionEl.querySelector(".as-panel.as-opened") && this.accordionEl.querySelector(".as-panel.as-opened").classList.remove("as-opened"),
              this.accordionEl.getElementsByClassName("as-panel")[this.currentIndex].classList.add("as-opened"),
              "max" === this.settings.openedPanelSize)
            ) {
              const e = this.getPanelAt(this.currentIndex).getContentSize();
              (this.computedOpenedPanelSize = "loading" === e ? this.closedPanelSize : Math.min(e, this.maxComputedOpenedPanelSize)),
                (this.collapsedPanelSize = (this.totalSize - this.computedOpenedPanelSize - (this.getVisiblePanels() - 1) * this.computedPanelDistance) / (this.getVisiblePanels() - 1));
            }
            for (let e = l; e <= h; e++) {
              let t = this.getPanelAt(e);
              (r[e] = t.getPosition()),
                (n[e] =
                  this.currentPage * (this.totalSize + this.computedPanelDistance) +
                  d * (this.collapsedPanelSize + this.computedPanelDistance) +
                  (e > this.currentIndex ? this.computedOpenedPanelSize - this.collapsedPanelSize : 0)),
                -1 !== this.settings.visiblePanels &&
                  this.currentPage === this.getTotalPages() - 1 &&
                  (n[e] -= (this.getTotalPages() - this.getTotalPanels() / this.settings.visiblePanels) * (this.totalSize + this.computedPanelDistance)),
                n[e] !== r[e] && o.push(e),
                !1 === this.isOverlapping &&
                  ((a[e] = t.getSize()), (s[e] = e === this.currentIndex ? this.computedOpenedPanelSize : this.collapsedPanelSize), s[e] !== a[e] && -1 === o.indexOf(e) && o.push(e)),
                d++;
            }
            const c = o.length;
            this.closePanelsAnimation.page === this.currentPage && this.stopPanelsAnimation(this.closePanelsAnimation),
              this.stopPanelsAnimation(this.openPanelAnimation),
              (this.openPanelAnimation.page = this.currentPage),
              this.animatePanels(this.openPanelAnimation, {
                duration: this.settings.openPanelDuration,
                step: (e) => {
                  for (let t = 0; t < c; t++) {
                    const i = o[t],
                      l = this.getPanelAt(i);
                    l.setPosition(e * (n[i] - r[i]) + r[i]), !1 === this.isOverlapping && l.setSize(e * (s[i] - a[i]) + a[i]);
                  }
                },
                complete: () => {
                  this.dispatchEvent("panelOpenComplete", { index: this.currentIndex });
                },
              }),
              this.dispatchEvent("panelOpen", { index: this.currentIndex, previousIndex: i });
          }
          closePanels() {
            const e = this.currentIndex;
            (this.currentIndex = -1),
              !0 === this.accordionEl.classList.contains("as-opened") && this.accordionEl.classList.replace("as-opened", "as-closed"),
              null !== this.accordionEl.querySelector(".as-panel.as-opened") && this.accordionEl.querySelector(".as-panel.as-opened").classList.remove("as-opened"),
              clearTimeout(this.mouseDelayTimer);
            const t = [],
              i = [],
              s = [],
              n = [],
              a = this.getFirstPanelFromPage(),
              r = this.getLastPanelFromPage();
            let o = 0;
            for (let e = a; e <= r; e++) {
              const a = this.getPanelAt(e);
              (n[e] = a.getPosition()),
                (i[e] = this.currentPage * (this.totalSize + this.computedPanelDistance) + o * (this.closedPanelSize + this.computedPanelDistance)),
                -1 !== this.settings.visiblePanels &&
                  this.currentPage === this.getTotalPages() - 1 &&
                  (i[e] -= (this.getTotalPages() - this.getTotalPanels() / this.settings.visiblePanels) * (this.totalSize + this.computedPanelDistance)),
                !1 === this.isOverlapping && ((s[e] = a.getSize()), (t[e] = this.closedPanelSize)),
                o++;
            }
            this.openPanelAnimation.page === this.currentPage && this.stopPanelsAnimation(this.openPanelAnimation),
              this.stopPanelsAnimation(this.closePanelsAnimation),
              (this.closePanelsAnimation.page = this.currentPage),
              this.animatePanels(this.closePanelsAnimation, {
                duration: this.settings.closePanelDuration,
                step: (e) => {
                  for (let o = a; o <= r; o++) {
                    const a = this.getPanelAt(o);
                    a.setPosition(e * (i[o] - n[o]) + n[o]), !1 === this.isOverlapping && a.setSize(e * (t[o] - s[o]) + s[o]);
                  }
                },
                complete: () => {
                  this.dispatchEvent("panelsCloseComplete", { previousIndex: e });
                },
              }),
              this.dispatchEvent("panelsClose", { previousIndex: e });
          }
          getVisiblePanels() {
            return -1 === this.settings.visiblePanels ? this.getTotalPanels() : this.settings.visiblePanels;
          }
          getTotalPages() {
            return -1 === this.settings.visiblePanels ? 1 : Math.ceil(this.getTotalPanels() / this.settings.visiblePanels);
          }
          getCurrentPage() {
            return -1 === this.settings.visiblePanels ? 0 : this.currentPage;
          }
          gotoPage(e) {
            -1 !== this.currentIndex && this.closePanels(), (this.currentPage = e), (this.isPageScrolling = !0);
            const t = "horizontal" === this.settings.orientation ? "left" : "top";
            let i = -(e * this.totalSize + this.currentPage * this.computedPanelDistance);
            this.currentPage === this.getTotalPages() - 1 && (i = -(this.totalPanelsSize - this.totalSize)),
              this.dispatchEvent("pageScroll", { index: this.currentPage }),
              this.panelsContainerEl.addEventListener("transitionend", () => {
                (this.isPageScrolling = !1), this.dispatchEvent("pageScrollComplete", { index: this.currentPage });
              }),
              (this.panelsContainerEl.style.transition = `${t} ${this.settings.pageScrollDuration / 1e3}s`),
              (this.panelsContainerEl.style[t] = s(i));
          }
          nextPage() {
            const e = this.currentPage >= this.getTotalPages() - 1 ? 0 : this.currentPage + 1;
            this.gotoPage(e);
          }
          previousPage() {
            const e = this.currentPage <= 0 ? this.getTotalPages() - 1 : this.currentPage - 1;
            this.gotoPage(e);
          }
          getFirstPanelFromPage() {
            return -1 === this.settings.visiblePanels
              ? 0
              : this.currentPage === this.getTotalPages() - 1 && 0 !== this.currentPage
              ? this.getTotalPanels() - this.settings.visiblePanels
              : this.currentPage * this.settings.visiblePanels;
          }
          getLastPanelFromPage() {
            return -1 === this.settings.visiblePanels || this.currentPage === this.getTotalPages() - 1 ? this.getTotalPanels() - 1 : (this.currentPage + 1) * this.settings.visiblePanels - 1;
          }
          getPageOfPanel(e) {
            return this.currentPage === this.getTotalPages() - 1 && e >= this.getTotalPanels() - this.settings.visiblePanels ? this.getTotalPages() - 1 : Math.floor(e / this.settings.visiblePanels);
          }
        });
    })();
})();
