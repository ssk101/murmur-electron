!(function(e) {
  function t(o) {
    return
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.i = function(e) {
      return e;
    }),
    (t.d = function(e, n, o) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: o
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "/"),
    t((t.s = 36));
})([
  function(e, t, n) {
    "use strict";
    function o(e, t) {
      var n,
        o,
        i,
        r,
        s = A;
      for (r = arguments.length; r-- > 2; ) j.push(arguments[r]);
      for (
        t &&
        null != t.children &&
        (j.length || j.push(t.children), delete t.children);
        j.length;

      )
        if ((o = j.pop()) && void 0 !== o.pop)
          for (r = o.length; r--; ) j.push(o[r]);
        else
          "boolean" == typeof o && (o = null),
            (i = "function" != typeof e) &&
              (null == o
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : "string" != typeof o && (i = !1)),
            i && n ? (s[s.length - 1] += o) : s === A ? (s = [o]) : s.push(o),
            (n = i);
      var a = new k();
      return (
        (a.nodeName = e),
        (a.children = s),
        (a.attributes = null == t ? void 0 : t),
        (a.key = null == t ? void 0 : t.key),
        void 0 !== T.vnode && T.vnode(a),
        a
      );
    }
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function r(e, t) {
      return o(
        e.nodeName,
        i(i({}, e.attributes), t),
        arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
      );
    }
    function s(e) {
      !e._dirty &&
        (e._dirty = !0) &&
        1 == U.push(e) &&
        (T.debounceRendering || E)(a);
    }
    function a() {
      var e,
        t = U;
      for (U = []; (e = t.pop()); ) e._dirty && x(e);
    }
    function u(e, t, n) {
      return "string" == typeof t || "number" == typeof t
        ? void 0 !== e.splitText
        : "string" == typeof t.nodeName
        ? !e._componentConstructor && l(e, t.nodeName)
        : n || e._componentConstructor === t.nodeName;
    }
    function l(e, t) {
      return (
        e.normalizedNodeName === t ||
        e.nodeName.toLowerCase() === t.toLowerCase()
      );
    }
    function c(e) {
      var t = i({}, e.attributes);
      t.children = e.children;
      var n = e.nodeName.defaultProps;
      if (void 0 !== n) for (var o in n) void 0 === t[o] && (t[o] = n[o]);
      return t;
    }
    function d(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function p(e, t, n, o, i) {
      if (("className" === t && (t = "class"), "key" === t));
      else if ("ref" === t) n && n(null), o && o(e);
      else if ("class" !== t || i)
        if ("style" === t) {
          if (
            ((o && "string" != typeof o && "string" != typeof n) ||
              (e.style.cssText = o || ""),
            o && "object" == typeof o)
          ) {
            if ("string" != typeof n)
              for (var r in n) r in o || (e.style[r] = "");
            for (var r in o)
              e.style[r] =
                "number" == typeof o[r] && !1 === L.test(r)
                  ? o[r] + "px"
                  : o[r];
          }
        } else if ("dangerouslySetInnerHTML" === t)
          o && (e.innerHTML = o.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
          var s = t !== (t = t.replace(/Capture$/, ""));
          (t = t.toLowerCase().substring(2)),
            o
              ? n || e.addEventListener(t, h, s)
              : e.removeEventListener(t, h, s),
            ((e._listeners || (e._listeners = {}))[t] = o);
        } else if ("list" !== t && "type" !== t && !i && t in e) {
          try {
            e[t] = null == o ? "" : o;
          } catch (e) {}
          (null != o && !1 !== o) || "spellcheck" == t || e.removeAttribute(t);
        } else {
          var a = i && t !== (t = t.replace(/^xlink:?/, ""));
          null == o || !1 === o
            ? a
              ? e.removeAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  t.toLowerCase()
                )
              : e.removeAttribute(t)
            : "function" != typeof o &&
              (a
                ? e.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    t.toLowerCase(),
                    o
                  )
                : e.setAttribute(t, o));
        }
      else e.className = o || "";
    }
    function h(e) {
      return this._listeners[e.type]((T.event && T.event(e)) || e);
    }
    function f() {
      for (var e; (e = I.pop()); )
        T.afterMount && T.afterMount(e),
          e.componentDidMount && e.componentDidMount();
    }
    function m(e, t, n, o, i, r) {
      D++ ||
        ((V = null != i && void 0 !== i.ownerSVGElement),
        (R = null != e && !("__preactattr_" in e)));
      var s = v(e, t, n, o, r);
      return (
        i && s.parentNode !== i && i.appendChild(s),
        --D || ((R = !1), r || f()),
        s
      );
    }
    function v(e, t, n, o, i) {
      var r = e,
        s = V;
      if (
        ((null != t && "boolean" != typeof t) || (t = ""),
        "string" == typeof t || "number" == typeof t)
      )
        return (
          e && void 0 !== e.splitText && e.parentNode && (!e._component || i)
            ? e.nodeValue != t && (e.nodeValue = t)
            : ((r = document.createTextNode(t)),
              e && (e.parentNode && e.parentNode.replaceChild(r, e), g(e, !0))),
          (r.__preactattr_ = !0),
          r
        );
      var a = t.nodeName;
      if ("function" == typeof a) return M(e, t, n, o);
      if (
        ((V = "svg" === a || ("foreignObject" !== a && V)),
        (a += ""),
        (!e || !l(e, a)) &&
          ((r = (function(e, t) {
            var n = t
              ? document.createElementNS("http://www.w3.org/2000/svg", e)
              : document.createElement(e);
            return (n.normalizedNodeName = e), n;
          })(a, V)),
          e))
      ) {
        for (; e.firstChild; ) r.appendChild(e.firstChild);
        e.parentNode && e.parentNode.replaceChild(r, e), g(e, !0);
      }
      var u = r.firstChild,
        c = r.__preactattr_,
        d = t.children;
      if (null == c) {
        c = r.__preactattr_ = {};
        for (var p = r.attributes, h = p.length; h--; )
          c[p[h].name] = p[h].value;
      }
      return (
        !R &&
        d &&
        1 === d.length &&
        "string" == typeof d[0] &&
        null != u &&
        void 0 !== u.splitText &&
        null == u.nextSibling
          ? u.nodeValue != d[0] && (u.nodeValue = d[0])
          : ((d && d.length) || null != u) &&
            y(r, d, n, o, R || null != c.dangerouslySetInnerHTML),
        S(r, t.attributes, c),
        (V = s),
        r
      );
    }
    function y(e, t, n, o, i) {
      var r,
        s,
        a,
        l,
        c,
        p = e.childNodes,
        h = [],
        f = {},
        m = 0,
        y = 0,
        b = p.length,
        S = 0,
        w = t ? t.length : 0;
      if (0 !== b)
        for (var _ = 0; b > _; _++) {
          var C = p[_],
            x = C.__preactattr_;
          null !=
          (M = w && x ? (C._component ? C._component.__key : x.key) : null)
            ? (m++, (f[M] = C))
            : (x || (void 0 !== C.splitText ? !i || C.nodeValue.trim() : i)) &&
              (h[S++] = C);
        }
      if (0 !== w)
        for (_ = 0; w > _; _++) {
          var M;
          if (((c = null), null != (M = (l = t[_]).key)))
            m && void 0 !== f[M] && ((c = f[M]), (f[M] = void 0), m--);
          else if (S > y)
            for (r = y; S > r; r++)
              if (void 0 !== h[r] && u((s = h[r]), l, i)) {
                (c = s), (h[r] = void 0), r === S - 1 && S--, r === y && y++;
                break;
              }
          (c = v(c, l, n, o)),
            (a = p[_]),
            c &&
              c !== e &&
              c !== a &&
              (null == a
                ? e.appendChild(c)
                : c === a.nextSibling
                ? d(a)
                : e.insertBefore(c, a));
        }
      if (m) for (var _ in f) void 0 !== f[_] && g(f[_], !1);
      for (; S >= y; ) void 0 !== (c = h[S--]) && g(c, !1);
    }
    function g(e, t) {
      var n = e._component;
      n
        ? P(n)
        : (null != e.__preactattr_ &&
            e.__preactattr_.ref &&
            e.__preactattr_.ref(null),
          (!1 !== t && null != e.__preactattr_) || d(e),
          b(e));
    }
    function b(e) {
      for (e = e.lastChild; e; ) {
        var t = e.previousSibling;
        g(e, !0), (e = t);
      }
    }
    function S(e, t, n) {
      var o;
      for (o in n)
        (t && null != t[o]) ||
          null == n[o] ||
          p(e, o, n[o], (n[o] = void 0), V);
      for (o in t)
        "children" === o ||
          "innerHTML" === o ||
          (o in n &&
            t[o] === ("value" === o || "checked" === o ? e[o] : n[o])) ||
          p(e, o, n[o], (n[o] = t[o]), V);
    }
    function w(e, t, n) {
      var o,
        i = B.length;
      for (
        e.prototype && e.prototype.render
          ? ((o = new e(t, n)), O.call(o, t, n))
          : (((o = new O(t, n)).constructor = e), (o.render = _));
        i--;

      )
        if (B[i].constructor === e)
          return (o.nextBase = B[i].nextBase), B.splice(i, 1), o;
      return o;
    }
    function _(e, t, n) {
      return this.constructor(e, n);
    }
    function C(e, t, n, o, i) {
      e._disable ||
        ((e._disable = !0),
        (e.__ref = t.ref),
        (e.__key = t.key),
        delete t.ref,
        delete t.key,
        void 0 === e.constructor.getDerivedStateFromProps &&
          (!e.base || i
            ? e.componentWillMount && e.componentWillMount()
            : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o)),
        o &&
          o !== e.context &&
          (e.prevContext || (e.prevContext = e.context), (e.context = o)),
        e.prevProps || (e.prevProps = e.props),
        (e.props = t),
        (e._disable = !1),
        0 !== n &&
          (1 !== n && !1 === T.syncComponentUpdates && e.base
            ? s(e)
            : x(e, 1, i)),
        e.__ref && e.__ref(e));
    }
    function x(e, t, n, o) {
      if (!e._disable) {
        var r,
          s,
          a,
          u = e.props,
          l = e.state,
          d = e.context,
          p = e.prevProps || u,
          h = e.prevState || l,
          v = e.prevContext || d,
          y = e.base,
          b = e.nextBase,
          S = y || b,
          _ = e._component,
          M = !1,
          O = v;
        if (
          (e.constructor.getDerivedStateFromProps &&
            ((l = i(i({}, l), e.constructor.getDerivedStateFromProps(u, l))),
            (e.state = l)),
          y &&
            ((e.props = p),
            (e.state = h),
            (e.context = v),
            2 !== t &&
            e.shouldComponentUpdate &&
            !1 === e.shouldComponentUpdate(u, l, d)
              ? (M = !0)
              : e.componentWillUpdate && e.componentWillUpdate(u, l, d),
            (e.props = u),
            (e.state = l),
            (e.context = d)),
          (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
          (e._dirty = !1),
          !M)
        ) {
          (r = e.render(u, l, d)),
            e.getChildContext && (d = i(i({}, d), e.getChildContext())),
            y &&
              e.getSnapshotBeforeUpdate &&
              (O = e.getSnapshotBeforeUpdate(p, h));
          var N,
            k,
            j = r && r.nodeName;
          if ("function" == typeof j) {
            var A = c(r);
            (s = _) && s.constructor === j && A.key == s.__key
              ? C(s, A, 1, d, !1)
              : ((N = s),
                (e._component = s = w(j, A, d)),
                (s.nextBase = s.nextBase || b),
                (s._parentComponent = e),
                C(s, A, 0, d, !1),
                x(s, 1, n, !0)),
              (k = s.base);
          } else
            (a = S),
              (N = _) && (a = e._component = null),
              (S || 1 === t) &&
                (a && (a._component = null),
                (k = m(a, r, d, n || !y, S && S.parentNode, !0)));
          if (S && k !== S && s !== _) {
            var E = S.parentNode;
            E &&
              k !== E &&
              (E.replaceChild(k, S), N || ((S._component = null), g(S, !1)));
          }
          if ((N && P(N), (e.base = k), k && !o)) {
            for (var L = e, U = e; (U = U._parentComponent); ) (L = U).base = k;
            (k._component = L), (k._componentConstructor = L.constructor);
          }
        }
        for (
          !y || n
            ? I.unshift(e)
            : M ||
              (e.componentDidUpdate && e.componentDidUpdate(p, h, O),
              T.afterUpdate && T.afterUpdate(e));
          e._renderCallbacks.length;

        )
          e._renderCallbacks.pop().call(e);
        D || o || f();
      }
    }
    function M(e, t, n, o) {
      for (
        var i = e && e._component,
          r = i,
          s = e,
          a = i && e._componentConstructor === t.nodeName,
          u = a,
          l = c(t);
        i && !u && (i = i._parentComponent);

      )
        u = i.constructor === t.nodeName;
      return (
        i && u && (!o || i._component)
          ? (C(i, l, 3, n, o), (e = i.base))
          : (r && !a && (P(r), (e = s = null)),
            (i = w(t.nodeName, l, n)),
            e && !i.nextBase && ((i.nextBase = e), (s = null)),
            C(i, l, 1, n, o),
            (e = i.base),
            s && e !== s && ((s._component = null), g(s, !1))),
        e
      );
    }
    function P(e) {
      T.beforeUnmount && T.beforeUnmount(e);
      var t = e.base;
      (e._disable = !0),
        e.componentWillUnmount && e.componentWillUnmount(),
        (e.base = null);
      var n = e._component;
      n
        ? P(n)
        : t &&
          (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null),
          (e.nextBase = t),
          d(t),
          B.push(e),
          b(t)),
        e.__ref && e.__ref(null);
    }
    function O(e, t) {
      (this._dirty = !0),
        (this.context = t),
        (this.props = e),
        (this.state = this.state || {}),
        (this._renderCallbacks = []);
    }
    function N(e, t, n) {
      return m(n, e, {}, !1, t, !1);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n.d(t, "h", function() {
        return o;
      }),
      n.d(t, "createElement", function() {
        return o;
      }),
      n.d(t, "cloneElement", function() {
        return r;
      }),
      n.d(t, "Component", function() {
        return O;
      }),
      n.d(t, "render", function() {
        return N;
      }),
      n.d(t, "rerender", function() {
        return a;
      }),
      n.d(t, "options", function() {
        return T;
      });
    var k = function() {},
      T = {},
      j = [],
      A = [],
      E =
        "function" == typeof Promise
          ? Promise.resolve().then.bind(Promise.resolve())
          : setTimeout,
      L = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      U = [],
      I = [],
      D = 0,
      V = !1,
      R = !1,
      B = [];
    i(O.prototype, {
      setState: function(e, t) {
        this.prevState || (this.prevState = this.state),
          (this.state = i(
            i({}, this.state),
            "function" == typeof e ? e(this.state, this.props) : e
          )),
          t && this._renderCallbacks.push(t),
          s(this);
      },
      forceUpdate: function(e) {
        e && this._renderCallbacks.push(e), x(this, 2);
      },
      render: function() {}
    }),
      (t.default = {
        h: o,
        createElement: o,
        cloneElement: r,
        Component: O,
        render: N,
        rerender: a,
        options: T
      });
  },
  function(e, t, n) {
    "use strict";
    var o = n(6),
      i = {};
    Object.keys(o.soundList).forEach(function(e) {
      var t = o.soundList[e];
      t.pro || (i[e] = t);
    }),
      (e.exports = i);
  },
  function(e, t, n) {
    "use strict";
    var o = n(6),
      i = {};
    Object.keys(o.soundList).forEach(function(e) {
      var t = o.soundList[e];
      t.pro && (i[e] = t);
    }),
      (e.exports = i);
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
      return t && decodeURIComponent(t[1].replace(/\+/g, " "));
    }
    t.__esModule = !0;
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(1)),
      s = function(e) {
        var t = o("v");
        if (!t) return e;
        if ("00000000000000000000" === t) return e;
        var n = i({}, e),
          r = t.match(/.{1,2}/g).map(function(e) {
            return (function(e) {
              return parseInt(e, 16) / 100;
            })(e);
          });
        return (
          Object.keys(n).forEach(function(t) {
            var o = i({}, e[t]);
            if (null != o.volumeStringOrder) {
              var s = r[o.volumeStringOrder];
              0 > s || s > 1 || ((o.volume = s), (n[t] = o));
            }
          }),
          n
        );
      },
      a = function(e, t) {
        var n = o("m"),
          a = o("v");
        if (!n) return a ? s(e) : e;
        try {
          for (var u = [], l = 0; n.length > l; l += 5)
            u.push(n.substring(l, l + 5));
          var c = !0,
            d = {};
          if (
            (u.forEach(function(e) {
              var n = e.substring(0, 3),
                o = +e.substring(3, 5) / 100,
                r = Object.keys(t).filter(function(e) {
                  return t[e].shortcode === n;
                }),
                s = t[r];
              s.pro && (c = !1), (d[s.key] = i({}, s, { volume: o }));
            }),
            c)
          ) {
            var p = i({}, r.default);
            (p.rain = i({}, p.rain, { volume: 0 })),
              (p.thunder = i({}, p.thunder, { volume: 0 })),
              (d = i({}, p, d));
          }
          return d;
        } catch (t) {
          return e;
        }
      };
    t.default = function(e) {
      var t = {},
        n = o("autoplay");
      (n = n ? parseInt(n, 10) : 0), (t.isPlaying = !!n);
      var i = a(e.sounds, e.library);
      i && (t.sounds = i), (t.token = o("token"));
      var r = o("utm_source"),
        s = o("utm_campaign"),
        u = void 0;
      return (
        r && s
          ? (u = "&utm_source=" + r + "&utm_campaign=" + s)
          : r
          ? (u = "&utm_source=" + r)
          : s && (u = "&utm_campaign=" + s),
        u && ((t.utmCampaign = s), (t.utmSubstring = u)),
        t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = n(0),
      i = function(e) {
        var t = "" + e;
        return 1 === t.length && (t = "0" + t), t;
      };
    t.default = function(e) {
      var t,
        n,
        r,
        s = void 0;
      return (
        (s = (e -= t = e % 60) / 60),
        (r = (s -= n = s % 60) / 60),
        (0, o.h)(
          "span",
          null,
          (0, o.h)("span", { className: "time hours" }, i(r).substring(0, 1)),
          (0, o.h)("span", { className: "time hours" }, i(r).substring(1, 2)),
          (0, o.h)("span", { className: "colon" }, ":"),
          (0, o.h)("span", { className: "time minutes" }, i(n).substring(0, 1)),
          (0, o.h)("span", { className: "time minutes" }, i(n).substring(1, 2)),
          (0, o.h)("span", { className: "colon" }, ":"),
          (0, o.h)("span", { className: "time seconds" }, i(t).substring(0, 1)),
          (0, o.h)("span", { className: "time seconds" }, i(t).substring(1, 2))
        )
      );
    };
  },
  function(e) {
    "use strict";
    var t = [
        "rain",
        "thunder",
        "waves",
        "wind",
        "fire",
        "birds",
        "crickets",
        "people",
        "sbowl",
        "whitenoise",
        "aircon",
        "fanhigh",
        "fanlow",
        "city",
        "chimesmetal",
        "stream",
        "raintinroof",
        "raintrees",
        "raincabin",
        "waterfall",
        "cicadas",
        "brownnoise",
        "pinknoise"
      ],
      n = {
        rain: "Rain",
        thunder: "Thunder",
        waves: "Waves",
        wind: "Wind",
        fire: "Fire",
        birds: "Birds",
        crickets: "Crickets",
        people: "Coffee shop",
        sbowl: "Singing Bowl",
        whitenoise: "White noise",
        aircon: "Air conditioning",
        fanhigh: "Fan on high",
        fanlow: "Fan on low",
        city: "City",
        chimesmetal: "Metal chimes",
        stream: "Stream",
        raintinroof: "Rain on tin roof",
        raintrees: "Rain on trees",
        raincabin: "Rain on cabin",
        waterfall: "Waterfall",
        cicadas: "Cicadas",
        brownnoise: "Brown noise",
        pinknoise: "Pink noise"
      },
      o = {
        rain: "rno",
        thunder: "thn",
        waves: "wve",
        wind: "wnd",
        fire: "fre",
        birds: "brd",
        crickets: "crk",
        people: "pep",
        sbowl: "sbo",
        whitenoise: "wno",
        aircon: "arc",
        fanhigh: "fnh",
        fanlow: "fnl",
        city: "cit",
        chimesmetal: "chm",
        stream: "str",
        raintinroof: "rnr",
        raintrees: "rnt",
        raincabin: "rnc",
        waterfall: "wtr",
        cicadas: "cic",
        brownnoise: "brn",
        pinknoise: "pnk"
      },
      i = {
        rain: !0,
        thunder: !0,
        waves: !0,
        wind: !0,
        fire: !0,
        birds: !0,
        crickets: !0,
        people: !0,
        sbowl: !0,
        whitenoise: !0,
        aircon: !1,
        fanhigh: !1,
        fanlow: !1,
        city: !1,
        chimesmetal: !1,
        stream: !1,
        raintinroof: !1,
        raintrees: !1,
        raincabin: !1,
        waterfall: !1,
        cicadas: !1,
        brownnoise: !1,
        pinknoise: !1
      },
      r = {
        rain: 0,
        thunder: 1,
        waves: 3,
        wind: 9,
        fire: 2,
        birds: 4,
        crickets: 6,
        people: 5,
        sbowl: 7,
        whitenoise: 8,
        aircon: 100,
        fanhigh: 100,
        fanlow: 100,
        city: 100,
        chimesmetal: 100,
        stream: 100,
        raintinroof: 100,
        raintrees: 100,
        raincabin: 100,
        waterfall: 100,
        cicadas: 100,
        brownnoise: 100,
        pinknoise: 100
      },
      s = {
        rain: 1,
        thunder: 2,
        waves: 3,
        wind: 4,
        fire: 5,
        birds: 6,
        crickets: 7,
        people: 8,
        sbowl: 9,
        whitenoise: 10,
        aircon: 21,
        fanhigh: 20,
        fanlow: 19,
        city: 18,
        chimesmetal: 17,
        stream: 14,
        raintinroof: 12,
        raintrees: 11,
        raincabin: 13,
        waterfall: 15,
        cicadas: 16,
        brownnoise: 99,
        pinknoise: 100
      },
      a = {
        rain: ["downpour", "shower", "drizzle"],
        thunder: ["lightning", "storm", "rumble"],
        waves: ["waves", "swimming", "high tide"],
        wind: ["breeze", "gale", "strong gusts"],
        fire: ["fire"],
        birds: ["birdsong", "songbirds"],
        crickets: ["crickets", "chirping"],
        people: ["murmur", "conversation"],
        sbowl: ["meditation"],
        whitenoise: ["white noise", "static", "untuned radio"],
        aircon: ["air conditioning", "hum"],
        fanhigh: ["fan"],
        fanlow: ["fan"],
        city: ["murmur", "rumble,"],
        chimesmetal: ["wind chimes", "tinkling,"],
        stream: ["burble"],
        raintinroof: ["downpour", "shower", "drizzle"],
        raintrees: ["downpour", "shower", "drizzle"],
        raincabin: ["downpour", "shower", "drizzle"],
        waterfall: ["waterfall"],
        cicadas: ["drone", "buzzing", "cicadas"],
        brownnoise: ["white noise", "static", "untuned radio"],
        pinknoise: ["white noise", "static", "untuned radio"]
      },
      u = {
        rain: ["wet", "damp", "rainy"],
        thunder: ["stormy", "turbulent"],
        waves: ["surging", "stormy", "choppy"],
        wind: ["windswept", "wild", "airy"],
        fire: ["cozy", "snug"],
        birds: ["early", "lively"],
        crickets: ["early", "solitary", "chirping"],
        people: ["ambient"],
        sbowl: ["peaceful", "mellow", "relaxing"],
        whitenoise: ["humming"],
        aircon: ["humid", "warm", "hot", "sunny"],
        fanhigh: ["humid", "warm", "hot", "sunny"],
        fanlow: ["humid", "warm", "hot", "sunny"],
        city: ["busy"],
        chimesmetal: ["breezy", "gusty", "windswept"],
        stream: ["bubbling", "streaming", "flowing"],
        raintinroof: ["wet", "damp", "rainy"],
        raintrees: ["wet", "damp", "rainy"],
        raincabin: ["wet", "damp", "rainy"],
        waterfall: ["bubbling", "streaming", "flowing"],
        cicadas: ["hot", "peaceful", "buzzing"],
        brownnoise: ["humming"],
        pinknoise: ["humming"]
      },
      l = {
        rain: [
          "the valley",
          "the hillside",
          "the plains",
          "the forest",
          "Glen Shiel"
        ],
        thunder: ["the cabin"],
        waves: [
          "the beach",
          "the lake",
          "the seaside",
          "the ocean",
          "the river",
          "the rock pool",
          "Balnahard"
        ],
        wind: ["my tent", "the mountain top", "Cairn Toul"],
        fire: ["the inn", "the campfire", "the bonfire"],
        birds: ["the woods", "the park"],
        crickets: [
          "the meadow",
          "the prairie",
          "the wild grass",
          "the pasture"
        ],
        people: ["the coffee shop", "the café", "the tearoom"],
        sbowl: ["the temple", "the mountains", "Kyoto"],
        whitenoise: ["the power lines"],
        aircon: ["the hotel", "home", "my house"],
        fanhigh: ["the hotel", "home", "my house"],
        fanlow: ["the hotel", "home", "my house"],
        city: ["the city", , "Ginza", "the thirty-sixth floor"],
        chimesmetal: ["the garden", "the front porch"],
        stream: ["the stream", "the river", "the brook", "the burn"],
        raintinroof: ["the boathouse", "the shed"],
        raintrees: ["the wet forest", "the dripping branches"],
        raincabin: ["the cabin", "the cottage"],
        waterfall: ["the waterfall", "Five Fingers"],
        cicadas: ["the pines", "the meadow", "the trees", "the tall grass"],
        brownnoise: ["the dunes"],
        pinknoise: ["the river bend"]
      };
    e.exports = {
      soundList: (function() {
        if (
          !(function(e) {
            var t = {},
              n = !0;
            return (
              Object.keys(e).forEach(function(o) {
                t[e[o]] && (n = !1), (t[e[o]] = !0);
              }),
              n
            );
          })(o)
        )
          throw Error("non-unique shortcodes detected");
        var e = {};
        return (
          t.forEach(function(t) {
            (e[t] = { id: t }),
              (e[t].key = t),
              (e[t].shortcode = o[t]),
              (e[t].pro = !i[t]),
              (e[t].label = n[t]),
              (e[t].sortKey = s[t]),
              (e[t].nouns = a[t]),
              (e[t].adjectives = u[t]),
              (e[t].places = l[t]),
              (e[t].volumeStringOrder = r[t]),
              (e[t].volume = "rain" === t ? 0.6 : "thunder" === t ? 0.3 : 0);
          }),
          e
        );
      })()
    };
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = void 0);
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      r = n(0),
      s = o(n(11)),
      a = o(n(33)),
      u = o(n(14)),
      l = (o(n(16)), n(18)),
      c = o(l),
      d = o(n(24)),
      p = o(n(31)),
      h = o(n(12)),
      f = o(n(10)),
      m = o(n(34)),
      v = o(n(35)),
      y = o(n(17)),
      g = o(n(19)),
      b = o(n(3)),
      S = o(n(1)),
      w = o(n(41)),
      _ = o(n(44)),
      C = o(n(4)),
      x = o(n(42)),
      M = o(n(38)),
      P = o(n(43));
    (window.ENV = "PROD"),
      (window.IOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
      (window.SOUND_VERSION = "1.01"),
      n(69);
    var O = function(e) {
      if (("PROD" === window.ENV && (0, x.default)("token"), !e.token))
        return !1;
      var t = !!e.pro,
        n = !!e.proLastChecked,
        o = (function(e) {
          if (!e) return !1;
          var t = Date.now() - e;
          try {
            return !(0 >= t || t >= 2592e6);
          } catch (e) {
            return !1;
          }
        })(e.proLastChecked);
      return !(t && n && o);
    };
    t.default = (function(e) {
      function t() {
        var t = (function(e, t) {
          if (e)
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
        })(this, e.call(this));
        return (
          (t.state = {}),
          (t._setState = t._setState.bind(t)),
          (t.changeGlobalVolume = t.changeGlobalVolume.bind(t)),
          (t.togglePlay = t.togglePlay.bind(t)),
          (t.hideAppLinks = t.hideAppLinks.bind(t)),
          (t.updateSoundVolume = t.updateSoundVolume.bind(t)),
          (t.onTapSoundImage = t.onTapSoundImage.bind(t)),
          (t.handleTimerStart = t.handleTimerStart.bind(t)),
          (t.handleTimerCancel = t.handleTimerCancel.bind(t)),
          (t.handleAddMix = t.handleAddMix.bind(t)),
          (t.handleLoadMix = t.handleLoadMix.bind(t)),
          (t.handleDeleteMix = t.handleDeleteMix.bind(t)),
          (t.toggleMeander = t.toggleMeander.bind(t)),
          (t.toggleReset = t.toggleReset.bind(t)),
          (t.onTouchStart = t.onTouchStart.bind(t)),
          (t.onTouchEnd = t.onTouchEnd.bind(t)),
          (t.handleToggleSoundActive = t.handleToggleSoundActive.bind(t)),
          (t.handleStopActivity = t.handleStopActivity.bind(t)),
          (t.handleClearAllSounds = t.handleClearAllSounds.bind(t)),
          (t.activatePro = t.activatePro.bind(t)),
          (t.showProHelp = t.showProHelp.bind(t)),
          t
        );
      }
      return (
        (function(e, t) {
          ("function" != typeof t && null !== t) ||
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        })(t, e),
        (t.prototype.componentWillUpdate = function(e, t) {
          var n = this,
            o = !(!this.state.timer.isActive && !this.state.meander.isActive),
            r = !(!t.timer.isActive || this.state.timer.isActive),
            s = !(!t.meander.isActive || this.state.meander.isActive);
          (!r && !s) ||
            o ||
            ((this.lastScheduled = Date.now()),
            (this.timer = function() {
              var e = (0, _.default)(i({}, n.state));
              if (e.timer.isActive || e.meander.isActive) {
                var t = 1e3 + (1e3 - (Date.now() - n.lastScheduled));
                (n.lastScheduled = Date.now()), setTimeout(n.timer, t);
              }
              n._setState(e, !0);
            }),
            setTimeout(this.timer, 1e3));
          var a = !(!t.timer.isActive && !t.meander.isActive);
          o && !a && clearTimeout(this.timer),
            !this.state.proFirstLoad && t.proFirstLoad && this.showProHelp();
        }),
        (t.prototype._setState = function(e, t) {
          this.state.stateToReset && !t && (e.stateToReset = null),
            this.setState(e);
        }),
        (t.prototype.activatePro = function(e, t) {
          this._setState({
            library: i({}, this.state.availableSounds),
            pro: !0,
            proExpires: e,
            proLastChecked: Date.now(),
            proFirstLoad: t
          });
        }),
        (t.prototype.showProHelp = function() {
          var e = this;
          setTimeout(function() {
            e.state.proFirstLoad && e._setState({ proFirstLoad: !1 });
          }, 5e3);
        }),
        (t.prototype.changeGlobalVolume = function(e) {
          this._setState({ globalVolume: e });
        }),
        (t.prototype.togglePlay = function() {
          this.state.isPlaying
            ? this._setState({
                isPlaying: !1,
                meander: { isActive: !1, sounds: null }
              })
            : this._setState({ isPlaying: !0 });
        }),
        (t.prototype.hideAppLinks = function() {
          this._setState({ appLinksHidden: !0 });
        }),
        (t.prototype.handleClearAllSounds = function() {
          this._setState({
            sounds:
              0 === Object.keys(this.state.sounds).length
                ? i({}, S.default)
                : {},
            forceUpdateIndex: this.state.forceUpdateIndex + 1 || 1
          }),
            this.handleStopActivity();
        }),
        (t.prototype.handleToggleSoundActive = function(e) {
          var t = i({}, this.state.sounds);
          this.state.sounds[e]
            ? delete t[e]
            : (t[e] = i({}, this.state.library[e])),
            this._setState({
              sounds: t,
              forceUpdateIndex: this.state.forceUpdateIndex + 1 || 1
            }),
            this.handleStopActivity();
        }),
        (t.prototype.handleStopActivity = function() {
          this.state.isPlaying && this.togglePlay(),
            this.state.timer.isActive && this.handleTimerCancel(),
            this.state.meander.isActive &&
              this._setState({ meander: { isActive: !1, sounds: null } });
        }),
        (t.prototype.handleTimerStart = function(e) {
          var t = this,
            n = {},
            o = e.mode,
            r = { isActive: !0, secondsLeft: e.secondsLeft, mode: o };
          if ("fade" === o) {
            if ("current" === e.origin);
            else if ("silence" === e.origin) {
              var s = {};
              Object.keys(this.state.sounds)
                .map(function(e) {
                  return i({}, t.state.sounds[e]);
                })
                .map(function(e) {
                  return (e.volume = 0), e;
                })
                .forEach(function(e) {
                  s[e.key] = e;
                }),
                (n.sounds = s),
                (n.forceUpdateIndex = this.state.forceUpdateIndex + 1 || 1);
            } else if (e.origin.indexOf("mix:") > -1) {
              var a = e.origin.replace("mix:", "");
              n.sounds = i({}, this.state.savedMixes[a].sounds);
            }
            var u = {};
            if (
              (Object.keys(this.state.sounds).forEach(function(n) {
                if (
                  ((u[n] = i({}, t.state.sounds[n])),
                  delete u[n].volume,
                  "current" === e.destination)
                )
                  u[n].volume = t.state.sounds[n]
                    ? t.state.sounds[n].volume
                    : 0;
                else if ("silence" === e.destination) u[n].volume = 0;
                else if (e.destination.indexOf("mix:") > -1) {
                  var o = e.destination.replace("mix:", ""),
                    r = t.state.savedMixes[o];
                  u[n].volume = r.sounds[n] ? r.sounds[n].volume : 0;
                }
              }),
              "current" === e.destination)
            )
              r.destinationMessage = "Fade in will finish in";
            else if ("silence" === e.destination)
              r.destinationMessage = "Fade out will finish in";
            else if (e.destination.indexOf("mix:") > -1) {
              var l = e.destination.replace("mix:", ""),
                c = this.state.savedMixes[l].name;
              r.destinationMessage = 'Fade to "' + c + '" will finish in';
            }
            r.destination = u;
          }
          var d = this.state.isPlaying;
          ("stop" !== o && "fade" !== o) || (d = !0),
            "start" === o && (d = !1),
            (n.timer = r),
            (n.isPlaying = d),
            (n.forceUpdateIndex = this.state.forceUpdateIndex + 1 || 1),
            this._setState(n);
        }),
        (t.prototype.handleTimerCancel = function() {
          this._setState({ timer: { isActive: !1 } });
        }),
        (t.prototype.updateSoundVolume = function(e, t, n) {
          var o = i({}, this.state.sounds[e]);
          o.volume = (function(e) {
            return e > 0.02 ? e : 0;
          })(t);
          var r = {};
          r[o.key] = o;
          var s = {
            sounds: i({}, this.state.sounds, r),
            forceUpdateIndex: n
              ? this.state.forceUpdateIndex + 1
              : this.state.forceUpdateIndex
          };
          if (this.state.meander.isActive) {
            var a = i({}, this.state.meander);
            (a.sounds = i({}, a.sounds)),
              (a.sounds[e].baseVolume = t),
              (a.sounds[e].tickOffset = this.state.meander.tickCount),
              (s.meander = a);
          }
          this._setState(s);
        }),
        (t.prototype.onTapSoundImage = function(e) {
          var t,
            n = this.state.sounds[e].volume;
          (t =
            window && window.IOS
              ? n > 0.02
                ? 0
                : 1
              : 0.3 > n
              ? 0.34
              : 0.6 > n
              ? 0.64
              : 0.98 > n
              ? 1
              : 0),
            this.updateSoundVolume(e, t, !0);
        }),
        (t.prototype.handleAddMix = function(e) {
          var t = (0, M.default)(),
            n = i({}, this.state.savedMixes);
          (n[t] = { name: e, id: t, sounds: i({}, this.state.sounds) }),
            this._setState({ savedMixes: n });
        }),
        (t.prototype.handleDeleteMix = function(e) {
          var t = i({}, this.state.savedMixes);
          delete t[e], this._setState({ savedMixes: t });
        }),
        (t.prototype.handleLoadMix = function(e, t) {
          this._setState({
            sounds: t ? i({}, t) : this.state.savedMixes[e].sounds,
            isPlaying: !0,
            forceUpdateIndex: this.state.forceUpdateIndex + 1 || 1,
            meander: i({}, this.state.meander, { sounds: null })
          });
        }),
        (t.prototype.toggleMeander = function() {
          var e = this;
          if (this.state.meander.isActive)
            this._setState({ meander: { isActive: !1, sounds: null } });
          else {
            var t = { meander: { isActive: !0, sounds: null } };
            this.state.usedMeanderBefore ||
              ((t.showMeanderHelpText = !0),
              (t.usedMeanderBefore = !0),
              setTimeout(function() {
                e.setState({ showMeanderHelpText: !1 });
              }, 5e3)),
              this._setState(t);
          }
        }),
        (t.prototype.toggleReset = function() {
          var e = this;
          if (this.state.stateToReset) {
            var t = i({}, this.state.stateToReset);
            (t.stateToReset = null),
              (t.forceUpdateIndex = this.state.forceUpdateIndex + 1 || 1),
              this._setState(t);
          } else {
            var n = {};
            Object.keys(this.state.sounds).forEach(function(t) {
              var o = i({}, e.state.sounds[t]);
              (o.volume = 0), (n[t] = o);
            });
            var o = i({}, this.state),
              r = i(
                {},
                this.state,
                { sounds: n },
                { timer: i({}, w.default.timer) },
                { meander: i({}, w.default.meander) },
                { globalVolume: w.default.globalVolume }
              );
            Object.keys(r.sounds).forEach(function(e) {
              return (r.sounds[e].volume = 0);
            }),
              (r.stateToReset = o),
              (r.forceUpdateIndex = this.state.forceUpdateIndex + 1 || 1),
              this._setState(r);
          }
        }),
        (t.prototype.onTouchStart = function() {
          this.setState({ touchInProgress: !0 });
        }),
        (t.prototype.onTouchEnd = function() {
          this.setState({ touchInProgress: !1 });
        }),
        (t.prototype.render = function() {
          var e = this;
          return (
            P.default.set(this.state),
            (0, r.h)(
              "div",
              { id: "App", className: window.IOS ? "ios" : "" },
              (0, r.h)(s.default, null),
              (0, r.h)(u.default, {
                volume: this.state.globalVolume,
                onChangeVolume: this.changeGlobalVolume
              }),
              (0, r.h)(a.default, null),
              (0, r.h)(c.default, {
                isPlaying: this.state.isPlaying,
                togglePlay: this.togglePlay,
                toggleMeander: this.toggleMeander,
                toggleReset: this.toggleReset,
                canRestore: !!this.state.stateToReset,
                meanderActive: this.state.meander.isActive,
                showMeanderHelpText: this.state.showMeanderHelpText
              }),
              (0, r.h)(d.default, {
                pro: this.state.pro,
                sounds: this.state.sounds,
                library: this.state.library,
                timer: i({}, this.state.timer),
                timerStart: this.handleTimerStart,
                timerCancel: this.handleTimerCancel,
                savedTimer: this.state.savedTimer,
                mixes: this.state.savedMixes,
                onAddMix: this.handleAddMix,
                onLoadMix: this.handleLoadMix,
                onDeleteMix: this.handleDeleteMix,
                onToggleSoundActive: this.handleToggleSoundActive,
                handleClearAllSounds: this.handleClearAllSounds,
                handleStopActivity: this.handleStopActivity,
                usedSoundManagerBefore: this.state.usedSoundManagerBefore,
                onOpenSoundManager: function() {
                  return e._setState({ usedSoundManagerBefore: !0 });
                }
              }),
              (0, r.h)(p.default, {
                globalVolume: this.state.globalVolume,
                isPlaying: this.state.isPlaying,
                sounds: this.state.sounds,
                updateSoundVolume: this.updateSoundVolume,
                onTapSoundImage: this.onTapSoundImage,
                forceUpdateIndex: this.state.forceUpdateIndex,
                onTouchStart: this.onTouchStart,
                onTouchEnd: this.onTouchEnd,
                meanderActive: this.state.meander.isActive
              })
            )
          )
        }),
        t
      )
    })(r.Component);
  },
  function() {},
  function() {},
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(45),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(46),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.render = function() {
            return (0, o.h)("div", { className: "Background" });
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(47),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(48),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = { lastVolume: null, touchInProgress: !1 }),
            (t.handleInput = t.handleInput.bind(t)),
            (t.handleChangeVolume = t.handleChangeVolume.bind(t)),
            (t.toggleMute = t.toggleMute.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.shouldComponentUpdate = function(e) {
            return this.props.volume !== e.volume;
          }),
          (t.prototype.handleInput = function(e) {
            this.handleChangeVolume(parseFloat(e.target.value));
          }),
          (t.prototype.handleChangeVolume = function(e) {
            this.props.onChangeVolume(e);
          }),
          (t.prototype.toggleMute = function() {
            this.props.volume > 0
              ? (this.setState({ lastVolume: this.props.volume }),
                this.handleChangeVolume(0))
              : this.state.lastVolume
              ? (this.handleChangeVolume(this.state.lastVolume),
                this.setState({ lastVolume: null }))
              : this.handleChangeVolume(1);
          }),
          (t.prototype.render = function() {
            return (0, o.h)(
              "div",
              { className: "GlobalVolume" },
              (0, o.h)(
                "span",
                { className: "sliderContainer" },
                (0, o.h)("input", {
                  min: 0,
                  max: 1,
                  step: 0.01,
                  className: "slider",
                  type: "range",
                  value: this.props.volume,
                  onInput: this.handleInput,
                  onChange: this.handleChange
                })
              ),
              (0, o.h)(
                "button",
                { className: "mute interactive", onClick: this.toggleMute },
                0 === this.props.volume ? "Unmute" : "Mute"
              )
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = void 0);
    var i = n(0),
      r = o(n(13)),
      s = o(n(15));
    n(49),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = { subscribeVisible: !1 }),
            (t.toggleSubscribe = t.toggleSubscribe.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.toggleSubscribe = function() {
            this.setState({ subscribeVisible: !this.state.subscribeVisible });
          }),
          (t.prototype.render = function() {
            return (0, i.h)(
              "header",
              {
                className:
                  "Header " + (this.state.subscribeVisible ? "subscribe" : "")
              },
              (0, i.h)(
                "div",
                { className: "container" },
                (0, i.h)(r.default, {
                  volume: this.props.volume,
                  onChangeVolume: this.props.onChangeVolume
                }),
                (0, i.h)(
                  "nav",
                  null,
                  (0, i.h)(
                    "a",
                    { href: "/blog", title: "A Soft Murmur Blog" },
                    "Blog"
                  ),
                  (0, i.h)(
                    "button",
                    {
                      className:
                        "updateButton " +
                        (this.state.subscribeVisible ? "active" : ""),
                      title: "Get updates about A Soft Murmur",
                      onClick: this.toggleSubscribe
                    },
                    "Get Updates"
                  ),
                  (0, i.h)(
                    "a",
                    { href: "/about", title: "About A Soft Murmur" },
                    "About"
                  )
                )
              ),
              this.state.subscribeVisible &&
                (0, i.h)(s.default, { onClose: this.toggleSubscribe })
            );
          }),
          t
        );
      })(i.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(50),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.render = function() {
            return (0, o.h)(
              "div",
              { className: "Subscribe" },
              (0, o.h)(
                "div",
                { id: "dialog-content", class: "email" },
                (0, o.h)(
                  "div",
                  { id: "mc_embed_signup" },
                  (0, o.h)(
                    "form",
                    {
                      action:
                        "//asoftmurmur.us7.list-manage.com/subscribe/post?u=a3f273bf0a1ee8e5678293af1&id=981104d315",
                      method: "post",
                      id: "mc-embedded-subscribe-form",
                      name: "mc-embedded-subscribe-form",
                      className: "validate",
                      target: "_blank",
                      novalidate: ""
                    },
                    (0, o.h)("input", {
                      className: "emailInput",
                      type: "email",
                      id: "mce-EMAIL",
                      name: "EMAIL",
                      placeholder: "your.email@address.org"
                    }),
                    (0, o.h)(
                      "div",
                      { id: "mce-responses", class: "clear" },
                      (0, o.h)("div", {
                        class: "response",
                        id: "mce-error-response",
                        style: "display:none"
                      }),
                      (0, o.h)("div", {
                        class: "response",
                        id: "mce-success-response",
                        style: "display:none"
                      })
                    ),
                    (0, o.h)(
                      "div",
                      { style: "position: absolute; left: -5000px;" },
                      (0, o.h)("input", {
                        type: "text",
                        name: "b_a3f273bf0a1ee8e5678293af1_981104d315",
                        value: ""
                      })
                    ),
                    (0, o.h)("input", {
                      type: "submit",
                      value: "Get updates",
                      name: "subscribe",
                      id: "mc-embedded-subscribe",
                      className: "button clickable"
                    })
                  )
                ),
                (0, o.h)(
                  "div",
                  { className: "text" },
                  (0, o.h)(
                    "p",
                    { id: "email-caption" },
                    "Get an email every now and then about new features and sounds coming to A Soft Murmur. No spam ever and one-click unsubscribe."
                  )
                )
              )
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(51),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.render = function() {
            return (0, o.h)(
              "div",
              { className: "home" },
              (0, o.h)("h1", null, "Home"),
              (0, o.h)("p", null, "This is the Home component.")
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(52);
    t.default = (function(e) {
      function t() {
        var t = (function(e, t) {
          if (e)
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
        })(this, e.call(this));
        return (
          (t.state = { emailText: "", showErrorState: !1, submitted: !1 }), t
        );
      }
      return (
        (function(e, t) {
          ("function" != typeof t && null !== t) ||
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        })(t, e),
        (t.prototype.render = function() {
          var e = this;
          return this.state.submitted
            ? (0, o.h)(
                "div",
                { className: "LoginModal" },
                (0, o.h)(
                  "div",
                  { className: "inner submitted" },
                  (0, o.h)("h2", null, "Email submitted"),
                  (0, o.h)(
                    "p",
                    null,
                    "If your email address is associated with a valid license, you will receive a message with your login link in the next few minutes."
                  ),
                  (0, o.h)(
                    "p",
                    null,
                    "If you have any issues accessing your account, please email gabriel@asoftmurmur.com"
                  ),
                  (0, o.h)(
                    "div",
                    { className: "buttonContainer" },
                    (0, o.h)(
                      "button",
                      {
                        className: "button interactive cancel",
                        onClick: function() {
                          return e.props.onDismiss();
                        }
                      },
                      "Close"
                    )
                  )
                )
              )
            : (0, o.h)(
                "div",
                { className: "LoginModal" },
                (0, o.h)(
                  "div",
                  { className: "inner" },
                  (0, o.h)("h2", null, "Access your account"),
                  (0, o.h)(
                    "p",
                    null,
                    "You can access your A Soft Murmur Pro account with the magic link from your welcome email."
                  ),
                  (0, o.h)(
                    "div",
                    { className: "inputGroup email" },
                    (0, o.h)("label", null, "Email address"),
                    (0, o.h)("input", {
                      type: "email",
                      placeholder: "you@example.org",
                      className: this.state.showErrorState ? "error" : "",
                      onInput: function(t) {
                        e.state.showErrorState &&
                          e.setState({ showErrorState: !1 });
                        try {
                          e.setState({ emailText: "" + t.target.value });
                        } catch (t) {}
                      }
                    })
                  ),
                  (0, o.h)(
                    "div",
                    { className: "buttonContainer" },
                    (0, o.h)(
                      "button",
                      {
                        className: "button interactive submit",
                        onClick: function() {
                          !(function(e) {
                            return (
                              !!e &&
                              -1 !== ("" + e).indexOf("@") &&
                              ("" + e).indexOf("@") !== ("" + e).length - 1 &&
                              -1 !== ("" + e).indexOf(".")
                            );
                          })(e.state.emailText)
                            ? e.setState({ showErrorState: !0 })
                            : (e.setState({ submitted: !0 }),
                              e.props.onSubmit(e.state.emailText));
                        }
                      },
                      "Get your link"
                    ),
                    (0, o.h)(
                      "button",
                      {
                        className: "button interactive cancel",
                        onClick: function() {
                          return e.props.onDismiss();
                        }
                      },
                      "Cancel"
                    )
                  )
                )
              );
        }),
        t
      );
    })(o.Component);
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(53),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.render = function() {
            return (0, o.h)(
              "div",
              { className: "PlayControls" },
              (0, o.h)(
                "button",
                {
                  className:
                    "secondary interactive meander " +
                    (this.props.meanderActive ? "active" : "inactive"),
                  onClick: this.props.toggleMeander,
                  title:
                    "When meander is active, the volume of each active sound wanders up and down at random."
                },
                (0, o.h)(
                  "span",
                  { className: "buttonContents" },
                  (0, o.h)("span", { className: "image" }),
                  this.props.showMeanderHelpText &&
                    (0, o.h)(
                      "div",
                      { className: "meanderHelpText" },
                      "When meander is active, the volume of each active sound wanders up and down at random."
                    )
                )
              ),
              (0, o.h)(
                "button",
                { onClick: this.props.togglePlay },
                (0, o.h)(
                  "div",
                  {
                    className: "pb " + (this.props.isPlaying ? "stop" : "play")
                  },
                  (0, o.h)("div", { className: "first" }),
                  (0, o.h)("div", { className: "second" })
                )
              ),
              (0, o.h)(
                "button",
                {
                  className:
                    "secondary interactive reset " +
                    (this.props.canRestore ? "canRestore" : ""),
                  onClick: this.props.toggleReset
                },
                (0, o.h)(
                  "span",
                  { className: "buttonContents" },
                  (0, o.h)("span", { className: "image" })
                )
              )
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(54),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.render = function() {
            var e = this;
            return (0, o.h)(
              "div",
              { className: "ProHelpModal" },
              (0, o.h)(
                "div",
                { className: "inner" },
                (0, o.h)("h2", null, "Thank you for upgrading to Pro"),
                (0, o.h)(
                  "p",
                  null,
                  'Open the "sounds" manager to access your new sounds'
                ),
                (0, o.h)(
                  "div",
                  { className: "buttonContainer" },
                  (0, o.h)(
                    "button",
                    {
                      className: "button interactive ok",
                      onClick: function() {
                        return e.props.onDismiss();
                      }
                    },
                    "OK"
                  )
                )
              )
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    function o(e, t) {
      if (e)
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      ("function" != typeof t && null !== t) ||
        ((e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t)));
    }
    (t.__esModule = !0), (t.default = void 0);
    var r = n(0),
      s = n(2),
      a = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(21));
    n(55),
      (t.default = (function(e) {
        function t() {
          var t = o(this, e.call(this));
          return (
            (t.state = { soundPreviewing: null }),
            (t.togglePreview = t.togglePreview.bind(t)),
            (t.handleCancelledToggleAttempt = t.handleCancelledToggleAttempt.bind(
              t
            )),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.togglePreview = function(e) {
            this.props.handleStopActivity(),
              this.setState({
                soundPreviewing: this.state.soundPreviewing === e ? null : e
              });
          }),
          (t.prototype.handleCancelledToggleAttempt = function() {
            var e = this;
            clearTimeout(this.timeout), this.setState({ showSlotMessage: !0 });
            this.timeout = setTimeout(function() {
              return e.setState({ showSlotMessage: !1 });
            }, 2e3);
          }),
          (t.prototype.render = function() {
            for (
              var e = this,
                t = Object.keys(this.props.sounds)
                  .map(function(t) {
                    return e.props.sounds[t];
                  })
                  .sort(function(e, t) {
                    return e.sortKey - t.sortKey;
                  }),
                n = Object.keys(this.props.library)
                  .filter(function(t) {
                    return !e.props.sounds[t];
                  })
                  .map(function(t) {
                    return e.props.library[t];
                  })
                  .sort(function(e, t) {
                    return t.sortKey - e.sortKey;
                  }),
                o = [],
                i = !(
                  !this.state.soundPreviewing ||
                  -1 !==
                    t.findIndex(function(t) {
                      return t.key === e.state.soundPreviewing;
                    })
                ),
                s = t.length;
              10 > s;
              s++
            )
              o.push({});
            return (0, r.h)(
              "div",
              { className: "ManageSoundsInput" },
              (0, r.h)(
                "div",
                { className: "content" },
                (0, r.h)(
                  "div",
                  { className: "pane1" },
                  (0, r.h)(
                    "div",
                    { className: "slots" },
                    (0, r.h)("p", null, "Active sounds")
                  ),
                  (0, r.h)(
                    "div",
                    { className: "activeList" },
                    (0, r.h)(
                      "ol",
                      null,
                      t.map(function(t) {
                        return (0,
                        r.h)(a.default, { sound: t, isActive: !0, toggleSound: e.props.onToggleSoundActive, isPreviewing: e.state.soundPreviewing === t.key, onTogglePreview: e.togglePreview.bind(e, t.key), canToggle: !0 });
                      }),
                      o.map(function(e, t) {
                        return (0,
                        r.h)("div", { className: "emptySlot", key: t }, (0, r.h)("p", null, "- empty -"));
                      })
                    )
                  ),
                  (0, r.h)(
                    "div",
                    { className: "clearAllContainer" },
                    (0, r.h)(
                      "button",
                      {
                        className: "interactive",
                        onClick: this.props.handleClearAllSounds
                      },
                      0 === t.length
                        ? "Reset default sounds"
                        : "Clear all active sounds",
                      " ",
                      (0, r.h)("span", { className: "bar" })
                    )
                  )
                ),
                (0, r.h)(
                  "div",
                  { className: "pane2" },
                  (0, r.h)(
                    "div",
                    { className: "slots" },
                    (0, r.h)("p", null, "Available sounds")
                  ),
                  (0, r.h)(
                    "div",
                    { className: "inactiveList" },
                    (0, r.h)(
                      "ol",
                      null,
                      n.map(function(n) {
                        return (0,
                        r.h)(a.default, { sound: n, isActive: !1, toggleSound: e.props.onToggleSoundActive, isPreviewing: e.state.soundPreviewing === n.key, onTogglePreview: e.togglePreview.bind(e, n.key), canToggle: 10 > t.length, onCancelledToggleAttempt: e.handleCancelledToggleAttempt });
                      })
                    )
                  )
                )
              ),
              this.state.showSlotMessage
                ? (0, r.h)(
                    "div",
                    { className: "slotMessage noSelect" },
                    "Please remove an active sound first"
                  )
                : null,
              (0, r.h)(
                "div",
                { className: "controls" },
                (0, r.h)(
                  "button",
                  {
                    className: "close interactive",
                    onClick: this.props.onClose
                  },
                  "Close"
                )
              ),
              i
                ? (0, r.h)(u, {
                    key: this.state.soundPreviewing,
                    sound: this.props.library[this.state.soundPreviewing],
                    onEnd: function() {
                      return e.setState({ soundPreviewing: null });
                    }
                  })
                : null
            );
          }),
          t
        );
      })(r.Component));
    var u = (function(e) {
      function t() {
        return o(this, e.call(this));
      }
      return (
        i(t, e),
        (t.prototype.componentWillUnmount = function() {
          var e = this;
          Promise.resolve(this).then(function() {
            return (e.nextBase = e.__b = null);
          });
        }),
        (t.prototype.componentDidMount = function() {
          var e = this;
          setTimeout(function() {
            if (e.player)
              try {
                e.player.play();
              } catch (e) {}
          }, 100);
        }),
        (t.prototype.render = function() {
          var e = this;
          return (0, r.h)(
            "audio",
            {
              ref: function(t) {
                return (e.player = t);
              },
              className: "PreviewSound",
              autoplay: !0,
              preload: "auto",
              onEnded: this.props.onEnd
            },
            (0, r.h)("source", {
              className: "mp4 " + this.props.sound.key,
              src:
                (0, s.getPrefix)(this.props.sound) +
                "glue-" +
                this.props.sound.key +
                ".mp4",
              type: "audio/mp4"
            }),
            (0, r.h)("source", {
              className: "ogg " + this.props.sound.key,
              src:
                (0, s.getPrefix)(this.props.sound) +
                "glue-" +
                this.props.sound.key +
                ".ogg",
              type: "audio/ogg"
            })
          );
        }),
        t
      );
    })(r.Component);
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(56),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = { active: null }),
            (t.handleToggle = t.handleToggle.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.componentWillMount = function() {
            this.setState({ active: this.props.isActive });
          }),
          (t.prototype.componentWillReceiveProps = function(e) {
            this.setState({ active: e.isActive });
          }),
          (t.prototype.handleToggle = function() {
            var e = this;
            if (!this.props.canToggle)
              return this.props.onCancelledToggleAttempt();
            clearTimeout(this.timeout),
              this.setState({ active: !this.state.active }),
              (this.timeout = setTimeout(function() {
                return e.props.toggleSound(e.props.sound.key);
              }, 100));
          }),
          (t.prototype.render = function() {
            var e = this.props.sound;
            return (0, o.h)(
              "li",
              {
                className:
                  "SoundItem " + (this.state.active ? "active" : "inactive")
              },
              (0, o.h)("div", {
                className: "biggerTarget",
                onClick: this.handleToggle
              }),
              (0, o.h)("p", { className: "label" }, e.label),
              this.props.isActive
                ? null
                : (0, o.h)(
                    "div",
                    {
                      className:
                        "previewButton " +
                        (this.props.isPreviewing ? "previewing" : "")
                    },
                    (0, o.h)(
                      "button",
                      {
                        className: "button interactive",
                        onClick: this.props.onTogglePreview
                      },
                      (0, o.h)("div", { className: "touchTarget" }),
                      (0, o.h)(
                        "div",
                        { className: "previewInnerContainer" },
                        (0, o.h)("div", { className: "previewInner" })
                      )
                    )
                  ),
              (0, o.h)(
                "div",
                {
                  className:
                    "buttonContainer " +
                    (this.props.isActive ? "right" : "left")
                },
                (0, o.h)(
                  "button",
                  { className: "interactive", onClick: this.handleToggle },
                  (0, o.h)(
                    "div",
                    { className: "buttonInner" },
                    (0, o.h)("div", { className: "buttonInnerContent" })
                  )
                )
              )
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = void 0);
    var i = n(0),
      r = o(n(23)),
      s = (o(n(4)), n(39)),
      a = o(s);
    n(57);
    var u = function(e) {
      return Object.keys(e)
        .sort(function(t, n) {
          return "" + e[t].name > "" + e[n].name;
        })
        .map(function(t) {
          return e[t];
        });
    };
    t.default = (function(e) {
      function t() {
        var t = (function(e, t) {
          if (e)
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
        })(this, e.call(this));
        return (
          (t.state = { name: "" }),
          (t.saveMix = t.saveMix.bind(t)),
          (t.loadMix = t.loadMix.bind(t)),
          (t.loadRandomMix = t.loadRandomMix.bind(t)),
          (t.deleteMix = t.deleteMix.bind(t)),
          (t.adjustSizeForNumMixes = t.adjustSizeForNumMixes.bind(t)),
          t
        );
      }
      return (
        (function(e, t) {
          ("function" != typeof t && null !== t) ||
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        })(t, e),
        (t.prototype.componentWillMount = function() {
          this.adjustSizeForNumMixes(this.props);
        }),
        (t.prototype.componentWillReceiveProps = function(e) {
          var t = this,
            n = Object.keys(e.mixes).length,
            o = Object.keys(this.props.mixes).length;
          if (n !== o && (this.adjustSizeForNumMixes(e), n > o && n > 6)) {
            var i = Object.keys(e.mixes).filter(function(e) {
                return !Object.keys(t.props.mixes).some(function(t) {
                  return t === e;
                });
              })[0],
              r =
                60 *
                u(e.mixes).findIndex(function(e) {
                  return e.id === i;
                });
            this.mixList && (this.mixList.scrollTop = r);
          }
        }),
        (t.prototype.adjustSizeForNumMixes = function(e) {
          var t = Object.keys(e.mixes).length;
          e.handleContentClass(t > 6 ? "mixesLots" : t > 3 ? "mixes" + t : "");
        }),
        (t.prototype.saveMix = function() {
          this.props.onAddMix(this.state.name), this.setState({ name: "" });
        }),
        (t.prototype.loadMix = function(e) {
          this.props.onLoadMix(e);
        }),
        (t.prototype.loadRandomMix = function() {
          var e = (0, a.default)(this.props.sounds, this.props.library);
          this.props.onLoadMix(null, e.sounds), this.setState({ name: e.name });
        }),
        (t.prototype.deleteMix = function(e) {
          this.props.onDeleteMix(e);
        }),
        (t.prototype.render = function() {
          var e = this,
            t = u(this.props.mixes);
          return (0, i.h)(
            "div",
            { className: "MixInput" },
            (0, i.h)(
              "div",
              { className: "save" },
              (0, i.h)("input", {
                ref: function(t) {
                  return (e.input = t);
                },
                type: "text",
                placeholder: "New mix name",
                value: this.state.name,
                onInput: function(t) {
                  return e.setState({ name: t.target.value });
                },
                onKeyDown: function(t) {
                  13 === t.keyCode && (e.saveMix(), e.input && e.input.blur());
                },
                autofocus: 0 === t.length
              }),
              (0, i.h)(
                "button",
                {
                  className: "interactive saveMix",
                  onClick: this.saveMix,
                  disabled: "" === this.state.name
                },
                "Save"
              )
            ),
            (0, i.h)(
              "div",
              {
                className: "mixList",
                ref: function(t) {
                  return (e.mixList = t);
                }
              },
              0 === t.length
                ? (0, i.h)(
                    "span",
                    { className: "noMixMessage" },
                    "No mixes yet"
                  )
                : (0, i.h)(
                    "ol",
                    null,
                    t.map(function(t) {
                      return (0,
                      i.h)(r.default, { key: t.id, mix: t, loadMix: e.loadMix, deleteMix: e.deleteMix, shareMix: e.props.onShareMix });
                    })
                  )
            ),
            (0, i.h)(
              "div",
              { className: "controls" },
              (0, i.h)(
                "button",
                { className: "close interactive", onClick: this.props.onClose },
                "Close"
              ),
              (0, i.h)(
                "button",
                {
                  className: "interactive saveMix",
                  onClick: this.loadRandomMix
                },
                "Random mix"
              )
            )
          );
        }),
        t
      );
    })(i.Component);
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(58),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = { deletePending: !1 }),
            (t.handleDeleteClick = t.handleDeleteClick.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.handleDeleteClick = function(e) {
            "cancel" === e
              ? this.setState({ deletePending: !1 })
              : "confirm" === e
              ? this.props.deleteMix(this.props.mix.id)
              : this.setState({ deletePending: !0 });
          }),
          (t.prototype.render = function() {
            var e = this,
              t = this.props.mix;
            return (0, o.h)(
              "li",
              { className: "MixInputItem" },
              (0, o.h)(
                "span",
                { className: "wrap" },
                this.state.deletePending &&
                  (0, o.h)(
                    "span",
                    { className: "deletePending" },
                    (0, o.h)(
                      "button",
                      {
                        className: "deleteCancel interactive",
                        onClick: function() {
                          return e.handleDeleteClick("cancel");
                        }
                      },
                      "Cancel"
                    ),
                    (0, o.h)(
                      "button",
                      {
                        className: "deleteConfirm interactive",
                        onClick: function() {
                          return e.handleDeleteClick("confirm");
                        }
                      },
                      "Delete Mix"
                    )
                  ),
                (0, o.h)(
                  "button",
                  {
                    className: "main interactive",
                    onClick: function() {
                      return e.props.loadMix(t.id);
                    }
                  },
                  t.name
                ),
                (0, o.h)(
                  "button",
                  {
                    className: "share interactive",
                    onClick: function() {
                      return e.props.shareMix(t.id);
                    }
                  },
                  "Share"
                ),
                (0, o.h)(
                  "button",
                  {
                    className: "delete interactive",
                    onClick: this.handleDeleteClick
                  },
                  "✕"
                )
              )
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = void 0);
    var i = n(0),
      r = o(n(27)),
      s = o(n(22)),
      a = o(n(20)),
      u = o(n(25)),
      l = o(n(5));
    n(59),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = {
              expandedControl: null,
              selectedMix: null,
              contentClass: ""
            }),
            (t.handleCloseTabs = t.handleCloseTabs.bind(t)),
            (t.handleTabClick = t.handleTabClick.bind(t)),
            (t.handleShareMix = t.handleShareMix.bind(t)),
            (t.handleContentClass = t.handleContentClass.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.handleCloseTabs = function() {
            this.setState({ expandedControl: null, contentClass: "" });
          }),
          (t.prototype.handleTabClick = function(e) {
            if (this.state.expandedControl === e)
              this.setState({
                expandedControl: null,
                selectedMix: null,
                contentClass: ""
              });
            else {
              var t = {
                expandedControl: e,
                selectedMix: null,
                contentClass: ""
              };
              "manage" !== e ||
                this.props.usedSoundManagerBefore ||
                (t.showManagerHelpText = !0),
                this.setState(t);
            }
          }),
          (t.prototype.handleShareMix = function(e) {
            this.setState({ expandedControl: "share", selectedMix: e });
          }),
          (t.prototype.handleContentClass = function(e) {
            this.state.contentClass !== e && this.setState({ contentClass: e });
          }),
          (t.prototype.render = function() {
            var e = this;
            return (0, i.h)(
              "div",
              { className: "RowControls " + this.state.expandedControl },
              (0, i.h)(
                "div",
                { className: "container" },
                (0, i.h)(
                  "button",
                  {
                    onClick: function() {
                      return e.handleTabClick("timers");
                    },
                    className:
                      "rowControl interactive timers\n              " +
                      ("timers" === this.state.expandedControl
                        ? "expanded"
                        : "initial") +
                      "\n              " +
                      (this.props.timer.isActive &&
                      "timers" !== this.state.expandedControl
                        ? "timeDisplay"
                        : "") +
                      "\n            "
                  },
                  this.props.timer.isActive &&
                    "timers" !== this.state.expandedControl
                    ? (0, l.default)(this.props.timer.secondsLeft)
                    : "Timers"
                ),
                (0, i.h)(
                  "button",
                  {
                    onClick: function() {
                      return e.handleTabClick("mixes");
                    },
                    className:
                      "rowControl interactive mixes " +
                      ("mixes" === this.state.expandedControl
                        ? "expanded"
                        : "initial")
                  },
                  "Mixes"
                ),
                this.props.pro
                  ? (0, i.h)(
                      "button",
                      {
                        onClick: function() {
                          return e.handleTabClick("manage");
                        },
                        className:
                          "rowControl interactive sounds " +
                          ("manage" === this.state.expandedControl
                            ? "expanded"
                            : "initial")
                      },
                      "Sounds"
                    )
                  : null,
                (0, i.h)(
                  "button",
                  {
                    onClick: function() {
                      return e.handleTabClick("share");
                    },
                    className:
                      "rowControl interactive share " +
                      ("share" === this.state.expandedControl
                        ? "expanded"
                        : "initial")
                  },
                  "Share"
                )
              ),
              (0, i.h)(
                "div",
                {
                  className:
                    "controlContent " +
                    (this.state.expandedControl
                      ? "expanded " + this.state.expandedControl
                      : "initial") +
                    " " +
                    this.state.contentClass
                },
                (0, i.h)(
                  "div",
                  { className: "inner" },
                  "timers" === this.state.expandedControl
                    ? (0, i.h)(r.default, {
                        timer: this.props.timer,
                        timerStart: this.props.timerStart,
                        timerCancel: this.props.timerCancel,
                        savedTimer: this.props.savedTimer,
                        mixes: this.props.mixes,
                        onClose: this.handleCloseTabs,
                        handleContentClass: this.handleContentClass
                      })
                    : null,
                  "mixes" === this.state.expandedControl
                    ? (0, i.h)(s.default, {
                        mixes: this.props.mixes,
                        sounds: this.props.sounds,
                        library: this.props.library,
                        onAddMix: this.props.onAddMix,
                        onLoadMix: this.props.onLoadMix,
                        onDeleteMix: this.props.onDeleteMix,
                        onShareMix: this.handleShareMix,
                        onClose: this.handleCloseTabs,
                        handleContentClass: this.handleContentClass
                      })
                    : null,
                  "manage" === this.state.expandedControl
                    ? (0, i.h)(a.default, {
                        sounds: this.props.sounds,
                        library: this.props.library,
                        onClose: this.handleCloseTabs,
                        handleContentClass: this.handleContentClass,
                        onToggleSoundActive: this.props.onToggleSoundActive,
                        handleStopActivity: this.props.handleStopActivity,
                        handleClearAllSounds: this.props.handleClearAllSounds
                      })
                    : null,
                  "share" === this.state.expandedControl
                    ? (0, i.h)(u.default, {
                        sounds: this.props.sounds,
                        mixes: this.props.mixes,
                        selectedMix: this.state.selectedMix,
                        onClose: this.handleCloseTabs
                      })
                    : null,
                  this.state.showManagerHelpText
                    ? (0, i.h)(
                        "div",
                        { className: "managerHelpText" },
                        (0, i.h)(
                          "div",
                          { className: "content" },
                          (0, i.h)("p", null, "Welcome to the sound manager!"),
                          (0, i.h)(
                            "p",
                            null,
                            "Up to 10 sounds can be active at one time."
                          ),
                          (0, i.h)(
                            "p",
                            null,
                            "First, create some empty slots by removing sounds from the ",
                            (0, i.h)(
                              "span",
                              { className: "it" },
                              "Active sounds"
                            ),
                            " list."
                          ),
                          (0, i.h)(
                            "p",
                            null,
                            "Then, activate some new sounds from the ",
                            (0, i.h)(
                              "span",
                              { className: "it" },
                              "Available sounds"
                            ),
                            " list."
                          ),
                          (0, i.h)(
                            "button",
                            {
                              className: "interactive noSelect",
                              onClick: function() {
                                e.props.onOpenSoundManager(),
                                  e.setState({ showManagerHelpText: !1 });
                              }
                            },
                            "OK"
                          )
                        )
                      )
                    : null
                )
              )
            );
          }),
          t
        );
      })(i.Component));
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = void 0);
    var i = n(0),
      r = o(n(40)),
      s = o(n(37));
    n(60);
    var a = window.encodeURIComponent(
      "Check out this ambient noise mix I made! "
    );
    t.default = (function(e) {
      function t() {
        var t = (function(e, t) {
          if (e)
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
        })(this, e.call(this));
        return (
          (t.state = {
            autoplay: !1,
            copyStatus: null,
            mixListOption: "current",
            highlightMixOption: !1
          }),
          (t.handleClipboard = t.handleClipboard.bind(t)),
          t
        );
      }
      return (
        (function(e, t) {
          ("function" != typeof t && null !== t) ||
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        })(t, e),
        (t.prototype.componentWillMount = function() {
          var e = this;
          if (this.props.selectedMix) {
            this.setState({
              mixListOption: this.props.selectedMix,
              highlightMixOption: !0
            });
            this.timeout = setTimeout(function() {
              return e.setState({ highlightMixOption: !1 });
            }, 500);
          }
        }),
        (t.prototype.componentWillUnmount = function() {
          this.timeout && clearTimeout(this.timeout);
        }),
        (t.prototype.componentWillReceiveProps = function() {
          this.setState({ copyStatus: null });
        }),
        (t.prototype.handleClipboard = function() {
          var e = this;
          (0, s.default)("#shareUrlContent", function(t) {
            e.setState(t ? { copyStatus: "success" } : { copyStatus: "error" });
          });
        }),
        t
      );
    })(i.Component);
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0),
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
    n(61);
    t.default = (function(e) {
      function t() {
        return (function(e, t) {
          if (e)
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
        })(this, e.apply(this, arguments));
      }
      return (
        (function(e, t) {
          ("function" != typeof t && null !== t) ||
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        })(t, e),
        (t.prototype.render = function() {
          var e = (function(e) {
            var t = "";
            return (
              "start" === e.mode
                ? (t = "Sounds will start in")
                : "stop" === e.mode
                ? (t = "Sounds will stop in")
                : "fade" === e.mode && (t = e.destinationMessage),
              t
            );
          })(this.props.timer);
          return (0, o.h)(
            "div",
            { className: "ActiveTimerDisplay" },
            (0, o.h)(
              "div",
              { className: "wrap" },
              (0, o.h)("div", { className: "msg" }, e),
              (0, o.h)(
                "div",
                { className: "timeLeft" },
                (0, i.default)(this.props.timer.secondsLeft)
              )
            ),
            (0, o.h)(
              "div",
              { className: "controls" },
              (0, o.h)(
                "button",
                { className: "close interactive", onClick: this.props.onClose },
                "Close"
              ),
              (0, o.h)(
                "button",
                {
                  className: "cancelTimer interactive",
                  onClick: this.props.onCancel
                },
                "Stop timer"
              )
            )
          );
        }),
        t
      );
    })(o.Component);
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0),
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(26));
    n(62);
    var r = function(e, t) {
      return 60 * (60 * e + t);
    };
    t.default = (function(e) {
      function t() {
        var t = (function(e, t) {
          if (e)
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
        })(this, e.call(this));
        return (
          (t.state = {
            mode: null,
            hours: null,
            minutes: null,
            fadeOrigin: "current",
            fadeDestination: "silence"
          }),
          (t.handleChangeMode = t.handleChangeMode.bind(t)),
          (t.handleStartTimer = t.handleStartTimer.bind(t)),
          (t.handleSetFadeOrigin = t.handleSetFadeOrigin.bind(t)),
          (t.handleSetFadeDestination = t.handleSetFadeDestination.bind(t)),
          t
        );
      }
      return (
        (function(e, t) {
          ("function" != typeof t && null !== t) ||
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        })(t, e),
        (t.prototype.componentWillMount = function() {
          var e = this.props.savedTimer.lastUsedMode,
            t = this.props.savedTimer[e].seconds,
            n = Math.floor(t / 60),
            o = 0;
          n > 59 && (n -= 60 * (o = Math.floor(n / 60))),
            this.setState({ mode: e, hours: o, minutes: n }),
            "fade" === e && this.props.handleContentClass("fade");
        }),
        (t.prototype.shouldComponentUpdate = function(e, t) {
          var n = this,
            o = this.props,
            i = !1;
          return (
            Object.keys(t).forEach(function(e) {
              t[e] !== n.state[e] && (i = !0);
            }),
            Object.keys(e.savedTimer).forEach(function(t) {
              e.savedTimer[t] !== o.savedTimer[t] && (i = !0);
            }),
            Object.keys(e.timer).forEach(function(t) {
              e.timer[t] !== o.timer[t] && (i = !0);
            }),
            Object.keys(e.mixes).length !== Object.keys(o.mixes).length &&
              (i = !0),
            i
          );
        }),
        (t.prototype.handleChangeMode = function(e) {
          "fade" === e
            ? (this.props.handleContentClass("fade"),
              this.setState({ mode: "fade" }))
            : (this.props.handleContentClass(""), this.setState({ mode: e }));
        }),
        (t.prototype.handleStartTimer = function() {
          var e = {
            isActive: !0,
            mode: this.state.mode,
            secondsLeft: r(this.state.hours, this.state.minutes)
          };
          if ("fade" === this.state.mode) {
            var t = this.state.fadeOrigin,
              n = this.state.fadeDestination;
            (e.origin = t), (e.destination = n);
          }
          this.props.timerStart(e);
        }),
        (t.prototype.handleSetFadeOrigin = function(e) {
          var t = { fadeOrigin: e.target.value };
          this.state.fadeDestination === e.target.value &&
            (t.fadeDestination =
              "silence" !== e.target.value ? "silence" : "current"),
            this.setState(t);
        }),
        (t.prototype.handleSetFadeDestination = function(e) {
          var t = { fadeDestination: e.target.value };
          this.state.fadeOrigin === e.target.value &&
            (t.fadeOrigin =
              "current" !== e.target.value ? "current" : "silence"),
            this.setState(t);
        }),
        (t.prototype.render = function() {
          var e = this,
            t = this.props.timer,
            n = Object.keys(this.props.mixes)
              .sort(function(t, n) {
                return "" + e.props.mixes[t].name > "" + e.props.mixes[n].name;
              })
              .map(function(t) {
                return e.props.mixes[t];
              });
          return (0, o.h)(
            "div",
            {
              className:
                "TimerInput " +
                ("fade" === this.state.mode ? "extraHeight" : "")
            },
            t.isActive
              ? (0, o.h)(i.default, {
                  timer: t,
                  onCancel: this.props.timerCancel,
                  onClose: this.props.onClose
                })
              : (0, o.h)(
                  "div",
                  { className: "input" },
                  (0, o.h)(
                    "div",
                    {
                      className:
                        "step1 " +
                        (null === this.state.mode
                          ? "noSelection"
                          : "haveSelection")
                    },
                    (0, o.h)(
                      "button",
                      {
                        className:
                          "interactive " +
                          ("stop" === this.state.mode
                            ? "selected"
                            : "deselected"),
                        onClick: function() {
                          return e.handleChangeMode("stop");
                        }
                      },
                      "Stop playing after"
                    ),
                    (0, o.h)(
                      "button",
                      {
                        className:
                          "interactive " +
                          ("start" === this.state.mode
                            ? "selected"
                            : "deselected"),
                        onClick: function() {
                          return e.handleChangeMode("start");
                        }
                      },
                      "Start playing after"
                    ),
                    (0, o.h)(
                      "button",
                      {
                        className:
                          "interactive " +
                          ("fade" === this.state.mode
                            ? "selected"
                            : "deselected"),
                        onClick: function() {
                          return e.handleChangeMode("fade");
                        }
                      },
                      "Fade"
                    )
                  ),
                  (0, o.h)(
                    "div",
                    {
                      className:
                        "step2 " + ("fade" === this.state.mode ? "" : "empty")
                    },
                    "fade" === this.state.mode &&
                      (0, o.h)(
                        "div",
                        { className: "wrap" },
                        (0, o.h)(
                          "div",
                          { className: "origin" },
                          (0, o.h)("label", null, "Start point:"),
                          (0, o.h)(
                            "select",
                            {
                              onChange: this.handleSetFadeOrigin,
                              value: this.state.fadeOrigin
                            },
                            (0, o.h)("option", {
                              value: "current",
                              label: "Current volume"
                            }),
                            (0, o.h)("option", {
                              value: "silence",
                              label: "Silence"
                            }),
                            n.map(function(e) {
                              return (0,
                              o.h)("option", { value: "mix:" + e.id, label: e.name.substring(0, 32) });
                            })
                          )
                        ),
                        (0, o.h)(
                          "div",
                          { className: "to" },
                          (0, o.h)("span", null, "fade to"),
                          (0, o.h)("span", null, "➝")
                        ),
                        (0, o.h)(
                          "div",
                          { className: "destination" },
                          (0, o.h)("label", null, "End point:"),
                          (0, o.h)(
                            "select",
                            {
                              onChange: this.handleSetFadeDestination,
                              value: this.state.fadeDestination
                            },
                            (0, o.h)("option", {
                              value: "silence",
                              label: "Silence"
                            }),
                            (0, o.h)("option", {
                              value: "current",
                              label: "Current volume"
                            }),
                            n.map(function(e) {
                              return (0,
                              o.h)("option", { value: "mix:" + e.id, label: e.name.substring(0, 32) });
                            })
                          )
                        )
                      )
                  ),
                  (0, o.h)(
                    "div",
                    { className: "step3" },
                    (0, o.h)(
                      "div",
                      { className: "wrap" },
                      (0, o.h)("input", {
                        type: "number",
                        value: this.state.hours,
                        onChange: function(t) {
                          return e.setState({ hours: t.target.value });
                        },
                        min: 0,
                        max: 24
                      }),
                      "hours and",
                      (0, o.h)("input", {
                        type: "number",
                        value: this.state.minutes,
                        onChange: function(t) {
                          return e.setState({ minutes: t.target.value });
                        },
                        min: 0,
                        max: 59
                      }),
                      "minutes"
                    )
                  ),
                  (0, o.h)(
                    "div",
                    { className: "step4" },
                    (0, o.h)(
                      "button",
                      { className: "interactive", onClick: this.props.onClose },
                      "Cancel"
                    ),
                    (0, o.h)(
                      "button",
                      {
                        className: "interactive",
                        onClick: this.handleStartTimer
                      },
                      "Start timer"
                    )
                  )
                )
          );
        }),
        t
      );
    })(o.Component);
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = void 0);
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      r = n(0),
      s = o(n(29)),
      a = o(n(30));
    n(63),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = { loadingGlue: !1, loadingMain: !1 }),
            (t.updateLoading = t.updateLoading.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.updateLoading = function(e, t) {
            this.setState(i({}, this.state, e)),
              t && this.props.onSoundLoaded(this.props.sound.key);
          }),
          (t.prototype.render = function(e) {
            var t = this,
              n = e.sound,
              o = e.onTapSoundImage,
              i = e.isPlaying,
              u = e.meanderActive,
              l = window && window.IOS,
              c = "loadingIndicator";
            return (
              this.props.alreadyLoaded ||
                (c =
                  c +
                  "\n        " +
                  (this.state.loadingGlue ? "loadingGlue" : "") +
                  "\n        " +
                  (this.state.loadingMain ? "loadingMain" : "") +
                  "\n      "),
              (0, r.h)(
                "div",
                { className: "SoundContainer" },
                (0, r.h)(
                  "div",
                  { className: "inner" },
                  (0, r.h)(
                    "button",
                    {
                      onClick: function() {
                        return o(t.props.sound.key);
                      },
                      className:
                        "imageContainer interactive " +
                        this.props.sound.key +
                        " " +
                        (this.props.sound.pro ? "pro" : "")
                    },
                    (0, r.h)(
                      "div",
                      { className: c },
                      (0, r.h)("img", {
                        src: "/assets/img/spinner.gif",
                        height: "32",
                        width: "30",
                        alt: "Loading icon"
                      })
                    ),
                    (0, r.h)("div", {
                      className: "image outline " + this.props.sound.key
                    }),
                    (0, r.h)("div", {
                      className: "image fill " + this.props.sound.key,
                      style: { opacity: n.volume }
                    })
                  ),
                  (0, r.h)(
                    "h3",
                    null,
                    n.label,
                    i &&
                      n.volume > 0.02 &&
                      u &&
                      (0, r.h)("span", { className: "meanderIndicator" })
                  ),
                  this.props.children
                ),
                l
                  ? (0, r.h)(a.default, { isPlaying: i, sound: n })
                  : (0, r.h)(s.default, {
                      key: n.key,
                      isPlaying: i,
                      sound: n,
                      globalVolume: this.props.globalVolume,
                      onUpdateLoading: this.updateLoading
                    })
              )
            );
          }),
          t
        );
      })(r.Component));
  },
  function(e, t, n) {
    "use strict";
    function o(e, t) {
      if (e)
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      ("function" != typeof t && null !== t) ||
        ((e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t)));
    }
    (t.__esModule = !0), (t.default = void 0);
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      s = n(0),
      a = n(2);
    t.default = (function(e) {
      function t() {
        var t = o(this, e.call(this));
        return (
          (t.state = {
            loading: !1,
            loadAudio: !1,
            canBeginPlay: !1,
            glueDuration: 10
          }),
          (t.handleCanBeginPlay = t.handleCanBeginPlay.bind(t)),
          (t.handleGlueTimeUpdate = t.handleGlueTimeUpdate.bind(t)),
          (t.handleMainTimeUpdate = t.handleMainTimeUpdate.bind(t)),
          (t.playMain = t.playMain.bind(t)),
          (t.playGlue = t.playGlue.bind(t)),
          (t.stop = t.stop.bind(t)),
          (t.handleError = t.handleError.bind(t)),
          t
        );
      }
      return (
        i(t, e),
        (t.prototype.componentWillMount = function() {
          this.props.sound.volume > 0.02 && this.setState({ loadAudio: !0 });
        }),
        (t.prototype.componentWillReceiveProps = function(e) {
          var t = this.props;
          if (!this.state.loadAudio && e.sound.volume > 0.02)
            return (
              this.setState({ loadAudio: !0, loading: !0 }),
              void this.props.onUpdateLoading({
                loadingGlue: !0,
                loadingMain: !0
              })
            );
          e.isPlaying && !this.props.isPlaying
            ? this.playMain(e)
            : !e.isPlaying && this.props.isPlaying && this.stop(e),
            (e.globalVolume === t.globalVolume &&
              e.sound.volume === t.sound.volume) ||
              this.setVolume(e, this.props);
        }),
        (t.prototype.setVolume = function(e, t) {
          if ("Object" === !(void 0 === e || r(e))) throw Error();
          var n = e.globalVolume,
            o = e.isPlaying,
            i = e.sound,
            s = i.volume * n;
          if (
            (this.audioPlayerMain && (this.audioPlayerMain.volume = s),
            this.audioPlayerGlue && (this.audioPlayerGlue.volume = s),
            o && t)
          ) {
            var a = i.volume,
              u = t.sound.volume;
            0.02 >= a && u > 0.02
              ? this.stop()
              : a > 0.02 && 0.02 >= u && this.playMain(e);
          }
        }),
        (t.prototype.playMain = function(e) {
          if ("Object" === !(void 0 === e || r(e))) throw Error("ERROR");
          if (
            this.glueShouldPlay &&
            this.audioPlayerMain &&
            this.audioPlayerMain.paused &&
            ((this.glueShouldPlay = !1), this.audioPlayerGlue)
          ) {
            this.audioPlayerGlue.currentTime = 0;
            try {
              this.audioPlayerMain.currentTime = 5;
            } catch (e) {}
          }
          e.sound.volume > 0.02 &&
            e.isPlaying &&
            this.state.loadAudio &&
            this.audioPlayerMain &&
            ((this.audioPlayerMain.volume = e.sound.volume * e.globalVolume),
            3 > this.audioPlayerMain.networkState
              ? this.audioPlayerMain.play().catch(function() {})
              : this.handleError());
        }),
        (t.prototype.playGlue = function(e) {
          if ("Object" === !(void 0 === e || r(e))) throw Error("ERROR");
          e.sound.volume > 0.02 &&
            e.isPlaying &&
            this.state.loadAudio &&
            this.audioPlayerGlue &&
            ((this.audioPlayerGlue.volume = e.sound.volume * e.globalVolume),
            3 > this.audioPlayerGlue.networkState
              ? this.glueShouldPlay &&
                this.audioPlayerGlue.play().catch(function() {})
              : this.handleError());
        }),
        (t.prototype.stop = function() {
          this.audioPlayerMain && this.audioPlayerMain.pause(),
            this.audioPlayerGlue && this.audioPlayerGlue.pause();
        }),
        (t.prototype.handleCanBeginPlay = function(e) {
          var t = this,
            n = this.props,
            o = n.sound;
          if (
            !this.haveDoneHandleCanBeginPlay &&
            ((this.haveDoneHandleCanBeginPlay = !0),
            this.setState({ canBeginPlay: !0 }),
            this.props.onUpdateLoading({ loadingGlue: !1 }, !0),
            !this.state.glueDuration &&
              e &&
              e.target &&
              e.target.duration &&
              this.setState({ glueDuration: e.target.duration }),
            n.isPlaying && o.volume > 0.02)
          )
            try {
              (this.audioPlayerGlue.volume = o.volume * n.globalVolume),
                this.audioPlayerGlue.play().catch(function() {
                  t.handleError();
                });
            } catch (e) {}
        }),
        (t.prototype.handleError = function() {
          var e = this;
          (this.haveDoneHandleCanBeginPlay = !1),
            (this.audioPlayerMain = null),
            (this.audioPlayerGlue = null),
            this.setState({ loading: !1, loadAudio: !1, canBeginPlay: !1 }),
            (this.timeout = setTimeout(function() {
              return e.setState({ loadAudio: !0 });
            }, 5e3));
        }),
        (t.prototype.handleGlueTimeUpdate = function(e) {
          e.target.currentTime > e.target.duration / 2 &&
            (this.playMain(this.props), (this.glueShouldPlay = !1));
        }),
        (t.prototype.handleMainTimeUpdate = function(e) {
          var t = e.target.duration,
            n = e.target.currentTime,
            o = this.state.glueDuration;
          !this.glueShouldPlay &&
            n > t - o / 2 &&
            (this.audioPlayerGlue && (this.audioPlayerGlue.currentTime = 0),
            (this.glueShouldPlay = !0),
            this.playGlue(this.props));
        }),
        (t.prototype.componentWillUnmount = function() {
          (this.audioPlayerMain = null),
            (this.audioPlayerGlue = null),
            (this.haveDoneHandleCanBeginPlay = !1),
            clearTimeout(this.timeout);
        }),
        (t.prototype.render = function(e) {
          var t = this,
            n = e.sound;
          return (0, s.h)(
            "div",
            { className: "SoundPlayer", key: n.key },
            this.state.loadAudio &&
              (0, s.h)(
                "div",
                null,
                (0, s.h)(u, {
                  sound: n,
                  handleMainTimeUpdate: this.handleMainTimeUpdate,
                  handleError: this.handleError,
                  onReceiveRef: function(e) {
                    return (t.audioPlayerMain = e);
                  },
                  playerType: "main"
                }),
                (0, s.h)(l, {
                  sound: n,
                  onReceiveRef: function(e) {
                    t.audioPlayerGlue = e;
                  },
                  handleCanBeginPlay: this.handleCanBeginPlay,
                  handleGlueTimeUpdate: this.handleGlueTimeUpdate,
                  onError: this.handleError,
                  onAbort: this.handleError,
                  playerType: "glue"
                })
              )
          );
        }),
        t
      );
    })(s.Component);
    var u = (function(e) {
        function t() {
          return o(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.componentDidMount = function() {
            try {
              var e = this.player.play();
              e &&
                e.catch(function() {
                  return null;
                }),
                this.player.pause();
            } catch (e) {}
          }),
          (t.prototype.componentWillUnmount = function() {
            var e = this;
            Promise.resolve(this)
              .then(function() {
                return (e.nextBase = e.__b = null);
              })
              .catch(function() {});
          }),
          (t.prototype.render = function() {
            var e = this,
              t = this.props;
            return (0, s.h)(
              "audio",
              {
                ref: function(t) {
                  e.props.onReceiveRef(t), (e.player = t);
                },
                preload: "auto",
                loop: !0,
                controls: !!a.DEBUG,
                onTimeUpdate: t.handleMainTimeUpdate,
                onError: function(e) {
                  return t.handleError(e, "error");
                },
                onAbort: function(n) {
                  return e.ignoreErrors ? null : t.handleError(n, "abort");
                }
              },
              (0, s.h)("source", {
                ref: function(t) {
                  return (e.source1 = t);
                },
                className: "mp4 " + t.sound.key,
                src:
                  "" +
                  (0, a.getPrefix)(t.sound) +
                  t.playerType +
                  "-" +
                  t.sound.key +
                  ".mp4" +
                  (0, a.getSuffix)(),
                type: "audio/mp4"
              }),
              (0, s.h)("source", {
                ref: function(t) {
                  return (e.source2 = t);
                },
                className: "ogg " + t.sound.key,
                src:
                  "" +
                  (0, a.getPrefix)(t.sound) +
                  t.playerType +
                  "-" +
                  t.sound.key +
                  ".ogg" +
                  (0, a.getSuffix)(),
                type: "audio/ogg"
              })
            );
          }),
          t
        );
      })(s.Component),
      l = (function(e) {
        function t() {
          return o(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.componentDidMount = function() {}),
          (t.prototype.componentWillUnmount = function() {
            var e = this;
            Promise.resolve(this).then(function() {
              return (e.nextBase = e.__b = null);
            });
          }),
          (t.prototype.render = function() {
            var e = this,
              t = this.props;
            return (0, s.h)(
              "audio",
              {
                ref: function(n) {
                  t.onReceiveRef(n), (e.player = n);
                },
                preload: "auto",
                onLoadStart: function() {
                  return (e.haveLoadStart = !0);
                },
                onCanPlayThrough: function(n) {
                  (e.firedCanPlayThrough = !0), t.handleCanBeginPlay(n);
                },
                onTimeUpdate: t.handleGlueTimeUpdate,
                onError: function(n) {
                  return e.ignoreErrors ? null : t.onError(n);
                },
                onAbort: function(n) {
                  return e.ignoreErrors ? null : t.onError(n);
                },
                controls: !!a.DEBUG,
                style: { marginTop: "-40px" }
              },
              (0, s.h)("source", {
                ref: function(t) {
                  return (e.source1 = t);
                },
                class: "gluemp4",
                src:
                  "" +
                  (0, a.getPrefix)(t.sound, t.playerType) +
                  t.playerType +
                  "-" +
                  t.sound.key +
                  ".mp4" +
                  (0, a.getSuffix)(),
                type: "audio/mp4"
              }),
              (0, s.h)("source", {
                ref: function(t) {
                  return (e.source2 = t);
                },
                class: "glueogg",
                src:
                  "" +
                  (0, a.getPrefix)(t.sound, t.playerType) +
                  t.playerType +
                  "-" +
                  t.sound.key +
                  ".ogg" +
                  (0, a.getSuffix)(),
                type: "audio/ogg"
              })
            );
          }),
          t
        );
      })(s.Component);
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0),
      i = n(2);
    t.default = (function(e) {
      function t() {
        var t = (function(e, t) {
          if (e)
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
        })(this, e.call(this));
        return (t.playMain = t.playMain.bind(t)), t;
      }
      return (
        (function(e, t) {
          ("function" != typeof t && null !== t) ||
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        })(t, e),
        (t.prototype.componentWillReceiveProps = function(e) {
          var t = this.props,
            n = e.isPlaying,
            o = t.isPlaying,
            i = e.sound.volume > 0.02,
            r = t.sound.volume > 0.02;
          n && !o && i
            ? this.playMain()
            : n && o
            ? i && !r
              ? this.playMain()
              : !i && r && this.stop()
            : !n && o && r && this.stop();
        }),
        (t.prototype.playMain = function() {
          this.player && this.player.play();
        }),
        (t.prototype.stop = function() {
          this.player && this.player.pause();
        }),
        (t.prototype.render = function() {
          var e = this,
            t = this.props;
          return (0, o.h)(
            "div",
            { className: "SoundPlayerIos" },
            (0, o.h)(
              "audio",
              {
                ref: function(t) {
                  e.player = t;
                },
                preload: "auto",
                loop: !0,
                controls: !!i.DEBUG,
                onError: function(e) {
                  return t.handleError(e, "error");
                },
                onAbort: function(e) {
                  return t.handleError(e, "abort");
                }
              },
              (0, o.h)("source", {
                class: "mp4",
                src:
                  (0, i.getPrefix)(t.sound, !1, !1) +
                  "ios-web-" +
                  t.sound.key +
                  ".mp4" +
                  (0, i.getSuffix)(),
                type: "audio/mp4"
              })
            )
          );
        }),
        t
      );
    })(o.Component);
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.default = void 0);
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      r = n(0),
      s = o(n(28)),
      a = o(n(32));
    n(64),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = { soundsLoaded: {} }),
            (t.handleSoundLoaded = t.handleSoundLoaded.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.handleSoundLoaded = function(e) {
            if (!this.state.soundsLoaded[e]) {
              var t = i({}, this.state.soundsLoaded);
              (t[e] = !0), this.setState({ soundsLoaded: t });
            }
          }),
          (t.prototype.render = function() {
            var e = this,
              t = this.props.sounds,
              n = Object.keys(t)
                .map(function(e) {
                  return t[e];
                })
                .sort(function(e, t) {
                  return e.sortKey - t.sortKey;
                });
            return (0, r.h)(
              "div",
              { className: "SoundList" },
              n.map(function(t) {
                return (0,
                r.h)(s.default, { key: t.key, globalVolume: e.props.globalVolume, isPlaying: e.props.isPlaying, sound: i({}, t), onTapSoundImage: e.props.onTapSoundImage, meanderActive: e.props.meanderActive, onSoundLoaded: e.handleSoundLoaded, alreadyLoaded: !!e.state.soundsLoaded[t.key] }, (0, r.h)(a.default, { key: t.key, soundKey: t.key, volume: t.volume, updateSoundVolume: e.props.updateSoundVolume, forceUpdateIndex: e.props.forceUpdateIndex, onTouchStart: e.props.onTouchStart, onTouchEnd: e.props.onTouchEnd }));
              })
            );
          }),
          t
        );
      })(r.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      i = n(0);
    n(65),
      (t.default = (function(e) {
        function t() {
          var t = (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.call(this));
          return (
            (t.state = { forceSlider: !1, forceSliderValue: 0 }),
            (t.updateSoundVolume = t.updateSoundVolume.bind(t)),
            (t.handleTouchStart = t.handleTouchStart.bind(t)),
            (t.handleTouchEnd = t.handleTouchEnd.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.componentWillReceiveProps = function(e) {
            this.setState(
              e.forceUpdateIndex !== this.props.forceUpdateIndex
                ? { forceSlider: !0, forceSliderValue: e.volume }
                : { forceSlider: !1 }
            );
          }),
          (t.prototype.shouldComponentUpdate = function(e) {
            return (
              !this.touchInProgress &&
              e.forceUpdateIndex !== this.props.forceUpdateIndex
            );
          }),
          (t.prototype.updateSoundVolume = function(e) {
            this.props.updateSoundVolume(
              this.props.soundKey,
              parseFloat(e.target.value)
            );
          }),
          (t.prototype.handleTouchStart = function() {
            (this.touchInProgress = !0), this.props.onTouchStart();
          }),
          (t.prototype.handleTouchEnd = function() {
            (this.touchInProgress = !1), this.props.onTouchEnd();
          }),
          (t.prototype.componentWillUnmount = function() {
            var e = this;
            (this.state.forceSliderValue = 0),
              (this.state.forceSlider = !1),
              Promise.resolve(this).then(function() {
                return (e.nextBase = e.__b = null);
              });
          }),
          (t.prototype.render = function() {
            var e = this;
            return (0, i.h)(
              "div",
              { className: "SoundSlider" },
              (0, i.h)(
                "span",
                null,
                (0, i.h)(
                  "input",
                  o(
                    {
                      key:
                        "" + this.props.soundKey + this.props.forceUpdateIndex,
                      type: "range",
                      min: "0",
                      max: "1",
                      step: "0.02"
                    },
                    this.state.forceSlider
                      ? {
                          value:
                            this.state.forceSliderValue + 0.001 * Math.random()
                        }
                      : {},
                    {
                      defaultValue: this.props.volume,
                      onInput: this.updateSoundVolume,
                      onChange: function() {
                        return e.setState({ touchInProgress: !1 });
                      },
                      onMouseDown: this.handleTouchStart,
                      onTouchStart: this.handleTouchStart,
                      onMouseUp: this.handleTouchEnd,
                      onTouchEnd: this.handleTouchEnd
                    }
                  )
                )
              )
            );
          }),
          t
        );
      })(i.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(66),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.render = function() {
            return (0, o.h)(
              "div",
              { className: "Title" },
              (0, o.h)("h1", null, "A Soft Murmur"),
              (0, o.h)("p", null, "Ambient sounds to wash away distraction.")
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.default = void 0);
    var o = n(0);
    n(67),
      (t.default = (function(e) {
        function t() {
          return (function(e, t) {
            if (e)
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
          })(this, e.apply(this, arguments));
        }
        return (
          (function(e, t) {
            ("function" != typeof t && null !== t) ||
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t)));
          })(t, e),
          (t.prototype.render = function() {
            return (0, o.h)(
              "div",
              { className: "UpgradeDialog" },
              (0, o.h)(
                "button",
                {
                  className: "button interactive",
                  onClick: this.props.onStart
                },
                "More sounds"
              ),
              (0, o.h)("div", { className: "footest" })
            );
          }),
          t
        );
      })(o.Component));
  },
  function(e, t, n) {
    "use strict";
    function o(e, t) {
      if (e)
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      ("function" != typeof t && null !== t) ||
        ((e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t)));
    }
    (t.__esModule = !0), (t.default = void 0);
    var r = n(0),
      s = n(2);
    n(68),
      (t.default = (function(e) {
        function t() {
          var t = o(this, e.call(this));
          return (
            (t.state = { autorenew: !0, externalScriptLoaded: !1 }),
            (t.toggleAutorenew = t.toggleAutorenew.bind(t)),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.toggleAutorenew = function() {
            this.setState({ autorenew: !this.state.autorenew });
          }),
          (t.prototype.componentDidMount = function() {
            var e = this;
            try {
              if (!document.getElementById("paddleScript")) {
                var t = document.createElement("script");
                (t.src = "https://cdn.paddle.com/paddle/paddle.js"),
                  (t.onload = function() {
                    e.setState({ externalScriptLoaded: !0 });
                  }),
                  (t.id = "paddleScript"),
                  document.body.appendChild(t);
              }
            } catch (e) {}
          }),
          (t.prototype.render = function() {
            return (0, r.h)(
              "div",
              { className: "UpgradeModal" },
              (0, r.h)(a, { onSetLogin: this.props.onSetLogin }),
              (0, r.h)(
                "div",
                { className: "container" },
                1 === this.props.stage
                  ? (0, r.h)(l, {
                      extraSounds: this.props.extraSounds,
                      onSetStage: this.props.onSetStage
                    })
                  : null,
                2 === this.props.stage
                  ? (0, r.h)(d, {
                      autorenew: this.state.autorenew,
                      onToggleAutorenew: this.toggleAutorenew,
                      onSetStage: this.props.onSetStage
                    })
                  : null
              )
            );
          }),
          t
        );
      })(r.Component));
    var a = (function(e) {
        function t() {
          return o(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            return (0, r.h)(
              "div",
              { className: "UpgradeHeader" },
              (0, r.h)(
                "div",
                { className: "content" },
                (0, r.h)("img", {
                  className: "icon",
                  src: "/assets/favicon.png"
                }),
                (0, r.h)(
                  "h2",
                  { className: "title" },
                  (0, r.h)(
                    "a",
                    { className: "interactive", href: "/" },
                    "A Soft Murmur"
                  )
                ),
                (0, r.h)(
                  "div",
                  { className: "signIn" },
                  (0, r.h)(
                    "button",
                    {
                      className: "interactive",
                      onClick: this.props.onSetLogin
                    },
                    "Sign in"
                  )
                )
              )
            );
          }),
          t
        );
      })(r.Component),
      u = (function(e) {
        function t() {
          return o(this, e.call(this));
        }
        return (
          i(t, e),
          (t.prototype.componentWillUnmount = function() {
            var e = this;
            Promise.resolve(this).then(function() {
              return (e.nextBase = e.__b = null);
            });
          }),
          (t.prototype.componentDidMount = function() {
            var e = this;
            setTimeout(function() {
              if (e.player)
                try {
                  e.player.play();
                } catch (e) {}
            }, 100);
          }),
          (t.prototype.render = function() {
            var e = this;
            return (0, r.h)(
              "audio",
              {
                ref: function(t) {
                  return (e.player = t);
                },
                className: "PreviewSound",
                autoplay: !0,
                preload: "auto",
                onEnded: this.props.onEnd
              },
              (0, r.h)("source", {
                className: "mp4 " + this.props.sound.key,
                src:
                  (0, s.getPrefix)(this.props.sound) +
                  "glue-" +
                  this.props.sound.key +
                  ".mp4",
                type: "audio/mp4"
              }),
              (0, r.h)("source", {
                className: "ogg " + this.props.sound.key,
                src:
                  (0, s.getPrefix)(this.props.sound) +
                  "glue-" +
                  this.props.sound.key +
                  ".ogg",
                type: "audio/ogg"
              })
            );
          }),
          t
        );
      })(r.Component),
      l = (function(e) {
        function t() {
          var t = o(this, e.call(this));
          return (
            (t.state = { soundPreviewing: null }),
            (t.togglePreview = t.togglePreview.bind(t)),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.togglePreview = function(e) {
            this.setState({
              soundPreviewing: this.state.soundPreviewing === e ? null : e
            });
          }),
          (t.prototype.render = function() {
            var e = this,
              t = Object.keys(this.props.extraSounds)
                .map(function(t) {
                  return e.props.extraSounds[t];
                })
                .sort(function(e, t) {
                  return e.sortKey - t.sortKey;
                });
            return (0, r.h)(
              "div",
              { className: "Stage1" },
              (0, r.h)(
                "p",
                null,
                "Upgrade for access to",
                (0, r.h)(
                  "span",
                  { className: "numSounds" },
                  " " + t.length + " "
                ),
                "extra web sounds."
              ),
              (0, r.h)(
                "p",
                null,
                "You'll also get access to any new web sounds released in the future."
              ),
              (0, r.h)(
                "div",
                { className: "previewSounds" },
                (0, r.h)(
                  "ul",
                  null,
                  t.map(function(t) {
                    return (0, r.h)(c, {
                      sound: t,
                      isActive: !0,
                      toggleSound: function() {
                        return null;
                      },
                      isPreviewing: e.state.soundPreviewing === t.key,
                      onTogglePreview: e.togglePreview.bind(e, t.key)
                    });
                  })
                ),
                this.state.soundPreviewing
                  ? (0, r.h)(u, {
                      key: this.state.soundPreviewing,
                      sound: this.props.extraSounds[this.state.soundPreviewing],
                      onEnd: function() {
                        return e.setState({ soundPreviewing: null });
                      }
                    })
                  : null
              ),
              (0, r.h)(
                "div",
                { className: "continueContainer" },
                (0, r.h)(
                  "button",
                  {
                    className: "interactive continue button",
                    onClick: function() {
                      return e.props.onSetStage(2);
                    }
                  },
                  "Continue"
                )
              )
            );
          }),
          t
        );
      })(r.Component),
      c = (function(e) {
        function t() {
          return o(this, e.call(this));
        }
        return (
          i(t, e),
          (t.prototype.render = function() {
            var e = this.props.sound;
            return (0, r.h)(
              "li",
              {
                className:
                  "SoundItem " +
                  (this.props.isPreviewing ? "active" : "inactive") +
                  " interactive noSelect",
                onClick: this.props.onTogglePreview
              },
              (0, r.h)("p", { className: "label" }, e.label),
              (0, r.h)(
                "div",
                {
                  className:
                    "previewButton " +
                    (this.props.isPreviewing ? "previewing" : "")
                },
                (0, r.h)(
                  "button",
                  { className: "button interactive" },
                  (0, r.h)(
                    "div",
                    { className: "previewInnerContainer" },
                    (0, r.h)("div", { className: "previewInner" })
                  )
                )
              )
            );
          }),
          t
        );
      })(r.Component),
      d = (function(e) {
        function t() {
          return o(this, e.call(this));
        }
        return (
          i(t, e),
          (t.prototype.componentDidMount = function() {
            try {
              Paddle.Setup({ vendor: 32551 });
            } catch (e) {}
          }),
          (t.prototype.render = function() {
            var e = this;
            return (0, r.h)(
              "div",
              { className: "Stage2" },
              (0, r.h)("p", null, "A Soft Murmur Pro costs"),
              (0, r.h)("p", { className: "price" }, "$9.00"),
              (0, r.h)(
                "p",
                { className: "currencyMessage" },
                "(or local currency equivalent)"
              ),
              (0, r.h)("p", null, "per year"),
              (0, r.h)(
                "p",
                { className: "webOnlyMessage" },
                "ⓘ Extra sounds can be accessed in the web version only"
              ),
              (0, r.h)(
                "div",
                {
                  className: "renewInput noSelect interactive",
                  onClick: this.props.onToggleAutorenew
                },
                (0, r.h)(
                  "div",
                  {
                    className: "toggle " + (this.props.autorenew ? "on" : "off")
                  },
                  (0, r.h)("div", { className: "inner" })
                ),
                (0, r.h)(
                  "label",
                  {
                    className:
                      " renewLabel " +
                      (this.props.autorenew ? "active" : "inactive")
                  },
                  "Renew automatically after each year"
                )
              ),
              (0, r.h)(
                "div",
                { className: "continueContainer" },
                (0, r.h)(
                  "button",
                  {
                    className: "interactive continue button",
                    onClick: function() {
                      e.props.autorenew
                        ? Paddle.Checkout.open({
                            product: 555858,
                            success: "/thankyou"
                          })
                        : Paddle.Checkout.open({
                            product: 549697,
                            success: "/thankyou"
                          });
                    }
                  },
                  "Continue"
                )
              )
            );
          }),
          t
        );
      })(r.Component);
  },
  function(e, t, n) {
    "use strict";
    var o = n(0);
    n(9), n(8);
    !(function() {
      var e = n(7).default;
      (0, o.render)(
        (0, o.h)(e, null),
        document.getElementById("root"),
        document.getElementById("root").firstElementChild
      );
    })();
  },
  function(e, t) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function(e, t) {
        var n = document.querySelector(e),
          o = document.createRange();
        o.selectNode(n), window.getSelection().addRange(o);
        try {
          t(document.execCommand("copy"));
        } catch (e) {
          t(!1);
        }
        try {
          window.getSelection().removeAllRanges();
        } catch (e) {}
      });
  },
  function(e, t) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function() {
        return "" + Date.now() + Math.round(Math.random() * Math.pow(10, 16));
      });
  },
  function(e, t) {
    "use strict";
    t.__esModule = !0;
    var n =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      o = function(e) {
        return e[Math.floor(Math.random() * e.length)];
      },
      i = function(e) {
        return e.adjectives[Math.floor(Math.random() * e.adjectives.length)];
      },
      r = function(e) {
        return e.nouns[Math.floor(Math.random() * e.nouns.length)];
      },
      s = function(e) {
        return e.places[Math.floor(Math.random() * e.places.length)];
      },
      a = function() {
        return o([
          "day",
          "night",
          "morning",
          "afternoon",
          "evening",
          "sunset",
          "sunrise"
        ]);
      },
      u = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "" + e.substring(0, 1).toUpperCase() + e.substring(1, e.length);
      },
      l = [
        {
          sounds: 1,
          template: function(e) {
            return "A " + i(e[0]) + " " + a();
          }
        },
        {
          sounds: 1,
          template: function(e) {
            return u(i(e[0])) + " " + r(e[0]);
          }
        },
        {
          sounds: 2,
          template: function(e) {
            return u(i(e[0])) + " " + r(e[1]);
          }
        },
        {
          sounds: 2,
          template: function(e) {
            return "A " + i(e[0]) + ", " + i(e[1]) + " " + a();
          }
        },
        {
          sounds: 2,
          template: function(e) {
            return u(i(e[0])) + " " + a() + " at " + s(e[1]);
          }
        },
        {
          sounds: 2,
          template: function(e) {
            return u(r(e[0])) + " at " + s(e[1]);
          }
        },
        {
          sounds: 2,
          template: function(e) {
            return u(i(e[0])) + " at " + s(e[1]);
          }
        },
        {
          sounds: 2,
          template: function(e) {
            return u(r(e[0])) + " at " + s(e[1]);
          }
        },
        {
          sounds: 3,
          template: function(e) {
            return "A " + i(e[0]) + ", " + i(e[1]) + ", " + i(e[2]) + " " + a();
          }
        },
        {
          sounds: 3,
          template: function(e) {
            return (
              "A " + i(e[0]) + ", " + i(e[1]) + " " + a() + " at " + s(e[2])
            );
          }
        },
        {
          sounds: 3,
          template: function(e) {
            return u(i(e[0])) + " " + r(e[1]) + " at " + s(e[2]);
          }
        }
      ],
      c = function(e) {
        var t = e
            .filter(function(e) {
              return e.volume >= 0.02;
            })
            .sort(function(e, t) {
              return t.volume - e.volume;
            }),
          n = l.filter(function(e) {
            return e.sounds === t.length;
          });
        if (0 === t.length) return "Silence";
        var i = o(n).template;
        return d(i(t));
      },
      d = function(e) {
        for (
          var t = ["a", "e", "i", "o", "u"], n = e.split(" "), o = 0;
          n.length > o;
          o++
        ) {
          var i = n[o];
          ("a" !== i && "A" !== i) ||
            (t.indexOf(((n[o + 1] || "").substring(0, 1) || "").toLowerCase()) >
              -1 &&
              ("a" === i && (n[o] = "an"), "A" === i && (n[o] = "An")));
        }
        return n.join(" ");
      };
    t.default = function(e, t) {
      for (
        var o = Object.keys(t).map(function(e) {
            return t[e];
          }),
          i = [2, 3][Math.floor(2 * Math.random())],
          r = [],
          s = 100,
          a = ["whitenoise", "pinknoise"],
          u = 0;
        i > u;
        u++
      ) {
        var l = Math.floor(Math.random() * o.length);
        a.indexOf(o[l].key) > -1 && (l = Math.floor(Math.random() * o.length));
        var d = void 0;
        u + 1 === i ? (d = s) : (s -= d = Math.floor(Math.random() * s));
        var p = o[l];
        (p.volume = d / 100), r.push(p), o.splice(l, 1);
      }
      var h = {};
      r.forEach(function(e) {
        return (h[e.key] = e);
      });
      for (
        var f = Object.keys(e)
            .filter(function(e) {
              return !h[e];
            })
            .map(function(t) {
              return e[t];
            })
            .sort(function(e, t) {
              return e.sortKey - t.sortKey;
            }),
          m = Math.min(10 - Object.keys(h).length, f.length),
          v = 0;
        m > v;
        v++
      )
        h[f[v].key] = n({}, f[v], { volume: 0 });
      return { name: c(r), sounds: h };
    };
  },
  function(e, t) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function(e) {
        var t = "";
        return (
          Object.keys(e)
            .sort(function(t, n) {
              return e[t].sortKey - e[n].sortKey;
            })
            .forEach(function(n) {
              var o = "" + Math.round(100 * e[n].volume);
              "0" !== o &&
                (1 === o.length && (o = "0" + o),
                "100" === o && (o = "99"),
                (o = "" + e[n].shortcode + o),
                (t += o));
            }),
          t
        );
      });
  },
  function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      r = o(n(1));
    t.default = {
      globalVolume: 1,
      isPlaying: !1,
      timesLaunched: 0,
      checkedUrl: !1,
      checkedStorage: !1,
      availableSounds: i({}, r.default, o(n(3)).default),
      library: i({}, r.default),
      sounds: i({}, r.default),
      timer: { isActive: !1, secondsLeft: null, mode: null },
      savedTimer: { lastUsedMode: "stop", stop: { seconds: 300 } },
      meander: { isActive: !1, sounds: null },
      savedMixes: {},
      usedMeanderBefore: !1,
      usedSoundManagerBefore: !1,
      appLinkshidden: !1,
      forceUpdateIndex: 0,
      stateToReset: null,
      utmSubstring: null,
      utmCampaign: null,
      pro: !1,
      proExpires: null,
      proLastChecked: null
    };
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0),
      n(1),
      (t.default = function(e) {
        try {
          if (
            URLSearchParams &&
            window.location &&
            history &&
            history.replaceState
          ) {
            var t = new URL(window.location),
              n = new URLSearchParams(t.search);
            if (!n.get(e)) return;
            n.delete(e);
            var o = ("" + n).length ? "?" : "";
            history.replaceState("", "", "" + window.location.pathname + o + n);
          }
        } catch (e) {
          return;
        }
      });
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(1));
    t.default = {
      get: function() {
        if (window.localStorage) {
          var e = window.localStorage.getItem("asm-stored-state"),
            t = e ? JSON.parse(e) : null;
          if (t && t.sounds) {
            Object.keys(t.sounds).every(function(e) {
              return 0 === parseFloat(t.sounds[e].volume);
            }),
              t.upgradeDialog && (t.upgradeDialog = null);
            var n = !1;
            try {
              var r = +t.proExpires;
              r > Date.now() && 22090104e5 > r && (n = !0);
            } catch (e) {}
            return (
              t.pro && n
                ? (t.library = o({}, t.availableSounds))
                : ((t.pro = !1),
                  (t.proExpires = null),
                  (t.library = o({}, i.default)),
                  Object.keys(t.sounds).some(function(e) {
                    return !Object.keys(t.library).find(function(t) {
                      return t === e;
                    });
                  }) && (t.sounds = o({}, i.default))),
              t
            );
          }
          return {};
        }
        return {};
      },
      set: function(e) {
        if (window.localStorage) {
          var t = o({}, e);
          (t.storeDate = Date.now()),
            (t.isPlaying = !1),
            (t.stateToReset = null),
            (t.meander = { isActive: !1, sounds: null }),
            (t.timer = { isActive: !1 }),
            (t.forceUpdateIndex = 0);
          var n = JSON.stringify(t);
          window.localStorage.setItem("asm-stored-state", n);
        }
      }
    };
  },
  function(e, t) {
    "use strict";
    t.__esModule = !0;
    var n =
      Object.assign ||
      function(e) {
        for (var t = 1; arguments.length > t; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      };
    t.default = function(e) {
      var t = e.timer,
        o = t.secondsLeft,
        i = n({}, e),
        r = e.meander.isActive,
        s =
          e.touchInProgress ||
          !e.isPlaying ||
          (t.isActive && "fade" === t.mode && t.secondsLeft > 180);
      if (
        (t.isActive && 1 >= o
          ? ((i.timer = { isActive: !1, secondsLeft: 0, mode: null }),
            ("stop" !== t.mode && "fadeOut" !== t.mode) || (i.isPlaying = !1),
            "start" === t.mode && (i.isPlaying = !0),
            (i.meander.isActive = !1))
          : t.isActive &&
            o > 1 &&
            (i.timer.secondsLeft = i.timer.secondsLeft - 1),
        r && !e.meander.sounds)
      ) {
        var a = {};
        Object.keys(e.sounds).forEach(function(t) {
          var n = e.sounds[t],
            o = {};
          (o.baseVolume = n.volume),
            (o.tickOffset = 0),
            (o.direction = Math.random() > 0.5 ? "right" : "left"),
            (a[t] = o);
        });
        var u = n({}, e.meander, { sounds: a, tickCount: 0 });
        i.meander = u;
      }
      if (r && !s) {
        var l = n({}, i.meander);
        (l.sounds = n({}, i.meander.sounds)),
          Object.keys(l.sounds).forEach(function(e) {
            l.sounds[e] = n({}, l.sounds[e]);
          });
        var c = l.tickCount;
        l.tickCount = c + 1;
        var d = n({}, i.sounds);
        Object.keys(l.sounds).forEach(function(e) {
          var t = l.sounds[e],
            o = t.baseVolume;
          if (o > 0.02) {
            var i = t.tickOffset,
              r = (c - i) % 60;
            0 === r && (t.direction = Math.random() > 0.5 ? "right" : "left");
            var s,
              a = t.direction;
            s = "right" === a ? o + (1 - o) / 3 : o / 1.5;
            var u,
              p = (r > 30 ? 30 - (r - 30) : r) * (Math.abs(o - s) / 30);
            (u = "right" === a ? o + p : o - p),
              (d[e] = n({}, d[e], { volume: u }));
          }
        }),
          (i.meander = l),
          (i.sounds = d),
          (i.forceUpdateIndex = i.forceUpdateIndex + 1 || 1);
      }
      return (
        t.isActive &&
          o > 0 &&
          "fade" === t.mode &&
          (Object.keys(i.sounds).forEach(function(e) {
            var r = i.sounds[e],
              s = r.volume - t.destination[e].volume;
            Math.abs(s) > 0 &&
              (r.volume =
                s > 0 ? r.volume - r.volume / o : r.volume + Math.abs(s) / o),
              (r = n({}, r)),
              (i.sounds[e] = r);
          }),
          (i.sounds = n({}, i.sounds)),
          (i.forceUpdateIndex = i.forceUpdateIndex + 1)),
        i
      );
    };
  }
]);
