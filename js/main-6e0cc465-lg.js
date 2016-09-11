/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = t.length,
                n = re.type(t);
            return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (re.isFunction(e)) return re.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return re.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (he.test(e)) return re.filter(e, t, n);
                e = re.filter(e, t)
            }
            return re.grep(t, function(t) {
                return re.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = xe[t] = {};
            return re.each(t.match(we) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function a() {
            me.addEventListener ? (me.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (me.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
        }

        function s() {
            (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (a(), re.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Ee, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Se.test(n) ? re.parseJSON(n) : n
                    } catch (o) {}
                    re.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function u(t) {
            var e;
            for (e in t)
                if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function c(t, e, n, i) {
            if (re.acceptData(t)) {
                var o, r, a = re.expando,
                    s = t.nodeType,
                    l = s ? re.cache : t,
                    u = s ? t[a] : t[a] && a;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = s ? t[a] = X.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : {
                    toJSON: re.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[re.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[re.camelCase(e)])) : o = r, o
            }
        }

        function d(t, e, n) {
            if (re.acceptData(t)) {
                var i, o, r = t.nodeType,
                    a = r ? re.cache : t,
                    s = r ? t[re.expando] : re.expando;
                if (a[s]) {
                    if (e && (i = n ? a[s] : a[s].data)) {
                        re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !u(i) : !re.isEmptyObject(i)) return
                    }(n || (delete a[s].data, u(a[s]))) && (r ? re.cleanData([t], !0) : ie.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function h() {
            return !1
        }

        function f() {
            try {
                return me.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Le.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function g(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || re.nodeName(i, e) ? r.push(i) : re.merge(r, g(i, e));
            return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], r) : r
        }

        function v(t) {
            Me.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Xe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
        }

        function _(t, e) {
            if (1 === e.nodeType && re.hasData(t)) {
                var n, i, o, r = re._data(t),
                    a = re._data(e, r),
                    s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; o > i; i++) re.event.add(e, n, s[n][i])
                }
                a.data && (a.data = re.extend({}, a.data))
            }
        }

        function C(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                    o = re._data(e);
                    for (i in o.events) re.removeEvent(e, i, o.handle);
                    e.removeAttribute(re.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Me.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function k(e, n) {
            var i = re(n.createElement(e)).appendTo(n.body),
                o = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : re.css(i[0], "display");
            return i.detach(), o
        }

        function S(t) {
            var e = me,
                n = tn[t];
            return n || (n = k(t, e), "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), n = k(t, e), Ze.detach()), tn[t] = n), n
        }

        function E(t, e) {
            return {
                get: function() {
                    var n = t();
                    return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
                }
            }
        }

        function T(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = fn.length; o--;)
                if (e = fn[o] + n, e in t) return e;
            return i
        }

        function P(t, e) {
            for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (r[a] = re._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && je(i) && (r[a] = re._data(i, "olddisplay", S(i.nodeName)))) : r[a] || (o = je(i), (n && "none" !== n || !o) && re._data(i, "olddisplay", o ? n : re.css(i, "display"))));
            for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
            return t
        }

        function j(t, e, n) {
            var i = cn.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function N(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += re.css(t, n + Pe[r], !0, o)), i ? ("content" === n && (a -= re.css(t, "padding" + Pe[r], !0, o)), "margin" !== n && (a -= re.css(t, "border" + Pe[r] + "Width", !0, o))) : (a += re.css(t, "padding" + Pe[r], !0, o), "padding" !== n && (a += re.css(t, "border" + Pe[r] + "Width", !0, o)));
            return a
        }

        function M(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = en(t),
                a = ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = nn(t, e, r), (0 > o || null == o) && (o = t.style[e]), rn.test(o)) return o;
                i = a && (ie.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + N(t, e, n || (a ? "border" : "content"), i, r) + "px"
        }

        function D(t, e, n, i, o) {
            return new D.prototype.init(t, e, n, i, o)
        }

        function A() {
            return setTimeout(function() {
                mn = void 0
            }), mn = re.now()
        }

        function O(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Pe[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function I(t, e, n) {
            for (var i, o = (xn[e] || []).concat(xn["*"]), r = 0, a = o.length; a > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function R(t, e, n) {
            var i, o, r, a, s, l, u, c, d = this,
                p = {},
                h = t.style,
                f = t.nodeType && je(t),
                m = re._data(t, "fxshow");
            n.queue || (s = re._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, re.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = re.css(t, "display"), c = S(t.nodeName), "none" === u && (u = c), "inline" === u && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== c ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ie.shrinkWrapBlocks() || d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], vn.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    p[i] = m && m[i] || re.style(t, i)
                }
            if (!re.isEmptyObject(p)) {
                m ? "hidden" in m && (f = m.hidden) : m = re._data(t, "fxshow", {}), r && (m.hidden = !f), f ? re(t).show() : d.done(function() {
                    re(t).hide()
                }), d.done(function() {
                    var e;
                    re._removeData(t, "fxshow");
                    for (e in p) re.style(t, e, p[e])
                });
                for (i in p) a = I(f ? m[i] : 0, i, d), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function L(t, e) {
            var n, i, o, r, a;
            for (n in t)
                if (i = re.camelCase(n), o = e[i], r = t[n], re.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), a = re.cssHooks[i], a && "expand" in a) {
                    r = a.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function F(t, e, n) {
            var i, o, r = 0,
                a = wn.length,
                s = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = mn || A(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
                    return s.notifyWith(t, [u, r, n]), 1 > r && l ? n : (s.resolveWith(t, [u]), !1)
                },
                u = s.promise({
                    elem: t,
                    props: re.extend({}, e),
                    opts: re.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: mn || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = re.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (L(c, u.opts.specialEasing); a > r; r++)
                if (i = wn[r].call(u, t, c, u.opts)) return i;
            return re.map(c, I, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function H(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(we) || [];
                if (re.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function q(t, e, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, re.each(t[s] || [], function(t, s) {
                    var u = s(e, n, i);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                a = t === zn;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function B(t, e) {
            var n, i, o = re.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && re.extend(!0, t, n), t
        }

        function U(t, e, n) {
            for (var i, o, r, a, s = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (a in s)
                    if (s[a] && s[a].test(o)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (a in n) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function W(t, e, n, i) {
            var o, r, a, s, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = u[l + " " + r] || u["* " + r], !a)
                    for (o in u)
                        if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try {
                        e = a(e)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function V(t, e, n, i) {
            var o;
            if (re.isArray(e)) re.each(e, function(e, o) {
                n || Gn.test(t) ? i(t, o) : V(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== re.type(e)) i(t, e);
            else
                for (o in e) V(t + "[" + o + "]", e[o], n, i)
        }

        function z() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function $() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function Y(t) {
            return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var X = [],
            G = X.slice,
            K = X.concat,
            Q = X.push,
            J = X.indexOf,
            Z = {},
            te = Z.toString,
            ee = Z.hasOwnProperty,
            ne = "".trim,
            ie = {},
            oe = "1.11.0",
            re = function(t, e) {
                return new re.fn.init(t, e)
            },
            ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            le = /-([\da-z])/gi,
            ue = function(t, e) {
                return e.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: oe,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function(t) {
                var e = re.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return re.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(re.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Q,
            sort: X.sort,
            splice: X.splice
        }, re.extend = re.fn.extend = function() {
            var t, e, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (o = arguments[s]))
                    for (i in o) t = a[i], n = o[i], a !== n && (u && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, r = t && re.isArray(t) ? t : []) : r = t && re.isPlainObject(t) ? t : {}, a[i] = re.extend(u, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, re.extend({
            expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === re.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === re.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ie.ownLast)
                    for (e in t) return ee.call(t, e);
                for (e in t);
                return void 0 === e || ee.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && re.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(se, "ms-").replace(le, ue)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var o, r = 0,
                    a = t.length,
                    s = n(t);
                if (i) {
                    if (s)
                        for (; a > r && (o = e.apply(t[r], i), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], i), o === !1) break
                } else if (s)
                    for (; a > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break; return t
            },
            trim: ne && !ne.call("﻿ ") ? function(t) {
                return null == t ? "" : ne.call(t)
            } : function(t) {
                return null == t ? "" : (t + "").replace(ae, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : Q.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (J) return J.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], r = 0, a = t.length, s = !n; a > r; r++) i = !e(t[r], r), i !== s && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r = 0,
                    a = t.length,
                    s = n(t),
                    l = [];
                if (s)
                    for (; a > r; r++) o = e(t[r], r, i), null != o && l.push(o);
                else
                    for (r in t) o = e(t[r], r, i), null != o && l.push(o);
                return K.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), re.isFunction(t) ? (n = G.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(G.call(arguments)))
                }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ie
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
        var ce = function(t) {
            function e(t, e, n, i) {
                var o, r, a, s, l, u, d, f, m, g;
                if ((e ? e.ownerDocument || e : q) !== D && M(e), e = e || D, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (s = e.nodeType) && 9 !== s) return [];
                if (O && !i) {
                    if (o = ye.exec(t))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (r = e.getElementById(a), !r || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && F(e, r) && r.id === a) return n.push(r), n
                        } else {
                            if (o[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                            if ((a = o[3]) && C.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n
                        }
                    if (C.qsa && (!I || !I.test(t))) {
                        if (f = d = H, m = e, g = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (u = p(t), (d = e.getAttribute("id")) ? f = d.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + h(u[l]);
                            m = be.test(t) && c(e.parentNode) || e, g = u.join(",")
                        }
                        if (g) try {
                            return Z.apply(n, m.querySelectorAll(g)), n
                        } catch (v) {} finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return x(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[H] = !0, t
            }

            function o(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) k.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && typeof t.getElementsByTagName !== Y && t
            }

            function d() {}

            function p(t, n) {
                var i, o, r, a, s, l, u, c = V[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = t, l = [], u = k.preFilter; s;) {
                    (!i || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(le, " ")
                    }), s = s.slice(i.length));
                    for (a in k.filter) !(o = fe[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? e.error(t) : V(t, l).slice(0)
            }

            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = U++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, a) {
                    var s, l, u = [B, r];
                    if (a) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, a)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (l = e[H] || (e[H] = {}), (s = l[i]) && s[0] === B && s[1] === r) return u[2] = s[2];
                                if (l[i] = u, u[2] = t(e, n, a)) return !0
                            }
                }
            }

            function m(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, e, n, i, o) {
                for (var r, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(r = t[s]) && (!n || n(r, i, o)) && (a.push(r), u && e.push(s));
                return a
            }

            function v(t, e, n, o, r, a) {
                return o && !o[H] && (o = v(o)), r && !r[H] && (r = v(r, a)), i(function(i, a, s, l) {
                    var u, c, d, p = [],
                        h = [],
                        f = a.length,
                        m = i || w(e || "*", s.nodeType ? [s] : s, []),
                        v = !t || !i && e ? m : g(m, p, t, s, l),
                        y = n ? r || (i ? t : f || o) ? [] : a : v;
                    if (n && n(v, y, s, l), o)
                        for (u = g(y, h), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[h[c]] = !(v[h[c]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                r(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(d = y[c]) && (u = r ? ee.call(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
                        }
                    } else y = g(y === a ? y.splice(f, y.length) : y), r ? r(null, a, y, l) : Z.apply(a, y)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = k.relative[t[0].type], a = r || k.relative[" "], s = r ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, a, !0), u = f(function(t) {
                        return ee.call(e, t) > -1
                    }, a, !0), c = [function(t, n, i) {
                        return !r && (i || n !== P) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                    }]; o > s; s++)
                    if (n = k.relative[t[s].type]) c = [f(m(c), n)];
                    else {
                        if (n = k.filter[t[s].type].apply(null, t[s].matches), n[H]) {
                            for (i = ++s; o > i && !k.relative[t[i].type]; i++);
                            return v(s > 1 && m(c), s > 1 && h(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > s && y(t.slice(s, i)), o > i && y(t = t.slice(i)), o > i && h(t))
                        }
                        c.push(n)
                    }
                return m(c)
            }

            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    a = function(i, a, s, l, u) {
                        var c, d, p, h = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = P,
                            b = i || r && k.find.TAG("*", u),
                            w = B += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (u && (P = a !== D && a); f !== x && null != (c = b[f]); f++) {
                            if (r && c) {
                                for (d = 0; p = t[d++];)
                                    if (p(c, a, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (B = w)
                            }
                            o && ((c = !p && c) && h--, i && m.push(c))
                        }
                        if (h += f, o && f !== h) {
                            for (d = 0; p = n[d++];) p(m, v, a, s);
                            if (i) {
                                if (h > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = Q.call(l));
                                v = g(v)
                            }
                            Z.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (B = w, P = y), m
                    };
                return o ? i(a) : a
            }

            function w(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i
            }

            function x(t, e, n, i) {
                var o, r, a, s, l, u = p(t);
                if (!i && 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && C.getById && 9 === e.nodeType && O && k.relative[r[1].type]) {
                        if (e = (k.find.ID(a.matches[0].replace(xe, _e), e) || [])[0], !e) return n;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = fe.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (i = l(a.matches[0].replace(xe, _e), be.test(r[0].type) && c(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = i.length && h(r), !t) return Z.apply(n, i), n;
                            break
                        }
                }
                return T(t, u)(i, e, !O, n, be.test(t) && c(e.parentNode) || e), n
            }
            var _, C, k, S, E, T, P, j, N, M, D, A, O, I, R, L, F, H = "sizzle" + -new Date,
                q = t.document,
                B = 0,
                U = 0,
                W = n(),
                V = n(),
                z = n(),
                $ = function(t, e) {
                    return t === e && (N = !0), 0
                },
                Y = "undefined",
                X = 1 << 31,
                G = {}.hasOwnProperty,
                K = [],
                Q = K.pop,
                J = K.push,
                Z = K.push,
                te = K.slice,
                ee = K.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = oe.replace("w", "w#"),
                ae = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]",
                se = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                ue = new RegExp("^" + ie + "*," + ie + "*"),
                ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                pe = new RegExp(se),
                he = new RegExp("^" + re + "$"),
                fe = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                _e = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                Z.apply(K = te.call(q.childNodes), q.childNodes), K[q.childNodes.length].nodeType
            } catch (Ce) {
                Z = {
                    apply: K.length ? function(t, e) {
                        J.apply(t, te.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            C = e.support = {}, E = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, M = e.setDocument = function(t) {
                var e, n = t ? t.ownerDocument || t : q,
                    i = n.defaultView;
                return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, A = n.documentElement, O = !E(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    M()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    M()
                })), C.getById ? (k.find.ID = function(t, e) {
                    if (typeof e.getElementById !== Y && O) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function(t) {
                    var e = t.replace(xe, _e);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete k.find.ID, k.filter.ID = function(t) {
                    var e = t.replace(xe, _e);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), k.find.TAG = C.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, k.find.CLASS = C.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== Y && O ? e.getElementsByClassName(t) : void 0
                }, R = [], I = [], (C.qsa = ve.test(n.querySelectorAll)) && (o(function(t) {
                    t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || I.push(":checked")
                }), o(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                })), (C.matchesSelector = ve.test(L = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(t) {
                    C.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), R.push("!=", se)
                }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), e = ve.test(A.compareDocumentPosition), F = e || ve.test(A.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, $ = e ? function(t, e) {
                    if (t === e) return N = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !C.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === q && F(q, t) ? -1 : e === n || e.ownerDocument === q && F(q, e) ? 1 : j ? ee.call(j, t) - ee.call(j, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var i, o = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!r || !s) return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : j ? ee.call(j, t) - ee.call(j, e) : 0;
                    if (r === s) return a(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (; l[o] === u[o];) o++;
                    return o ? a(l[o], u[o]) : l[o] === q ? -1 : u[o] === q ? 1 : 0
                }, n) : D
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== D && M(t), n = n.replace(de, "='$1']"), !(!C.matchesSelector || !O || R && R.test(n) || I && I.test(n))) try {
                    var i = L.call(t, n);
                    if (i || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, D, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== D && M(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && M(t);
                var n = k.attrHandle[e.toLowerCase()],
                    i = n && G.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
                return void 0 !== i ? i : C.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (N = !C.detectDuplicates, j = !C.sortStable && t.slice(0), t.sort($), N) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return j = null, t
            }, S = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += S(e);
                return n
            }, k = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xe, _e), t[3] = (t[4] || t[5] || "").replace(xe, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[5] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && pe.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xe, _e).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, d, p, h, f, m = r !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (c = g[H] || (g[H] = {}), u = c[t] || [], h = u[0] === B && u[1], p = u[0] === B && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop();)
                                        if (1 === d.nodeType && ++p && d === e) {
                                            c[t] = [B, h, p];
                                            break
                                        }
                                } else if (y && (u = (e[H] || (e[H] = {}))[t]) && u[0] === B) p = u[1];
                                else
                                    for (;
                                        (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[t] = [B, p]), d !== e)););
                                return p -= o, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[H] ? r(n) : r.length > 1 ? (o = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), a = o.length; a--;) i = ee.call(t, o[a]), t[i] = !(e[i] = o[a])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = T(t.replace(le, "$1"));
                        return o[H] ? i(function(t, e, n, i) {
                            for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                    }),
                    lang: i(function(t) {
                        return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, _e).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === A
                    },
                    focus: function(t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !k.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ge.test(t.nodeName)
                    },
                    input: function(t) {
                        return me.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[_] = s(_);
            for (_ in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[_] = l(_);
            return d.prototype = k.filters = k.pseudos, k.setFilters = new d, T = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = z[t + " "];
                if (!r) {
                    for (e || (e = p(t)), n = e.length; n--;) r = y(e[n]), r[H] ? i.push(r) : o.push(r);
                    r = z(t, b(o, i))
                }
                return r
            }, C.sortStable = H.split("").sort($).join("") === H, C.detectDuplicates = !!N, M(), C.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(D.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), C.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(ne, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var de = re.expr.match.needsContext,
            pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            he = /^.[^:#\[\.,]*$/;
        re.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, re.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (re.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) re.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && de.test(t) ? re(t) : t || [], !1).length
            }
        });
        var fe, me = t.document,
            ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ve = re.fn.init = function(t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), pe.test(n[1]) && re.isPlainObject(e))
                            for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = me.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return fe.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = me, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
            };
        ve.prototype = re.fn, fe = re(me);
        var ye = /^(?:parents|prev(?:Until|All))/,
            be = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.extend({
            dir: function(t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !re(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), re.fn.extend({
            has: function(t) {
                var e, n = re(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (re.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], a = de.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? re.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), re.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return re.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return re.dir(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return re.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return re.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return re.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return re.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return re.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return re.sibling(t.firstChild)
            },
            contents: function(t) {
                return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
            }
        }, function(t, e) {
            re.fn[t] = function(n, i) {
                var o = re.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (be[t] || (o = re.unique(o)), ye.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var we = /\S+/g,
            xe = {};
        re.Callbacks = function(t) {
            t = "string" == typeof t ? xe[t] || r(t) : re.extend({}, t);
            var e, n, i, o, a, s, l = [],
                u = !t.once && [],
                c = function(r) {
                    for (n = t.memory && r, i = !0, a = s || 0, s = 0, o = l.length, e = !0; l && o > a; a++)
                        if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function r(e) {
                                re.each(e, function(e, n) {
                                    var i = re.type(n);
                                    "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), e ? o = l.length : n && (s = i, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && re.each(arguments, function(t, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (o >= i && o--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
                    },
                    disable: function() {
                        return l = u = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(t, n) {
                        return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, re.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return re.Deferred(function(n) {
                                re.each(e, function(e, r) {
                                    var a = re.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? re.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, re.each(e, function(t, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = G.call(arguments),
                    a = r.length,
                    s = 1 !== a || t && re.isFunction(t.promise) ? a : 0,
                    l = 1 === s ? t : re.Deferred(),
                    u = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var _e;
        re.fn.ready = function(t) {
            return re.ready.promise().done(t), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? re.readyWait++ : re.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--re.readyWait : !re.isReady) {
                    if (!me.body) return setTimeout(re.ready);
                    re.isReady = !0, t !== !0 && --re.readyWait > 0 || (_e.resolveWith(me, [re]), re.fn.trigger && re(me).trigger("ready").off("ready"))
                }
            }
        }), re.ready.promise = function(e) {
            if (!_e)
                if (_e = re.Deferred(), "complete" === me.readyState) setTimeout(re.ready);
                else if (me.addEventListener) me.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
            else {
                me.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && me.documentElement
                } catch (i) {}
                n && n.doScroll && ! function o() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
            return _e.promise(e)
        };
        var Ce, ke = "undefined";
        for (Ce in re(ie)) break;
        ie.ownLast = "0" !== Ce, ie.inlineBlockNeedsLayout = !1, re(function() {
                var t, e, n = me.getElementsByTagName("body")[0];
                n && (t = me.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = me.createElement("div"), n.appendChild(t).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), t = e = null)
            }),
            function() {
                var t = me.createElement("div");
                if (null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        ie.deleteExpando = !1
                    }
                }
                t = null
            }(), re.acceptData = function(t) {
                var e = re.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ee = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
            },
            data: function(t, e, n) {
                return c(t, e, n)
            },
            removeData: function(t, e) {
                return d(t, e)
            },
            _data: function(t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return d(t, e, !0)
            }
        }), re.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = re.data(r), 1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i]));
                        re._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    re.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, t, e)
                }) : r ? l(r, t, re.data(r, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    re.removeData(this, t)
                })
            }
        }), re.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = re.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = re._queueHooks(t, e),
                    a = function() {
                        re.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return re._data(t, n) || re._data(t, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        re._removeData(t, e + "queue"), re._removeData(t, n)
                    })
                })
            }
        }), re.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = re.queue(this, t, e);
                    re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    re.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = re.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = re._data(r[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pe = ["Top", "Right", "Bottom", "Left"],
            je = function(t, e) {
                return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
            },
            Ne = re.access = function(t, e, n, i, o, r, a) {
                var s = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === re.type(n)) {
                    o = !0;
                    for (s in n) re.access(t, e, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, re.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(re(t), n)
                    })), e))
                    for (; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            },
            Me = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = me.createDocumentFragment(),
                e = me.createElement("div"),
                n = me.createElement("input");
            if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ie.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    ie.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    ie.deleteExpando = !1
                }
            }
            t = e = n = null
        }(),
        function() {
            var e, n, i = me.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ie[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var De = /^(?:input|select|textarea)$/i,
            Ae = /^key/,
            Oe = /^(?:mouse|contextmenu)|click/,
            Ie = /^(?:focusinfocus|focusoutblur)$/,
            Re = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, a, s, l, u, c, d, p, h, f, m, g = re._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                            return typeof re === ke || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(we) || [""], s = e.length; s--;) r = Re.exec(e[s]) || [], h = m = r[1], f = (r[2] || "").split(".").sort(), h && (u = re.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = re.event.special[h] || {}, d = re.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && re.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, u.setup && u.setup.call(t, i, f, c) !== !1 || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), re.event.global[h] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, a, s, l, u, c, d, p, h, f, m, g = re.hasData(t) && re._data(t);
                if (g && (c = g.events)) {
                    for (e = (e || "").match(we) || [""], u = e.length; u--;)
                        if (s = Re.exec(e[u]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
                            for (d = re.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(t, a));
                            l && !p.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || re.removeEvent(t, h, g.handle), delete c[h])
                        } else
                            for (h in c) re.event.remove(t, h + e[u], n, i, !0);
                    re.isEmptyObject(c) && (delete g.handle, re._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var r, a, s, l, u, c, d, p = [i || me],
                    h = ee.call(e, "type") ? e.type : e,
                    f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = c = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[re.expando] ? e : new re.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), u = re.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !re.isWindow(i)) {
                        for (l = u.delegateType || h, Ie.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (i.ownerDocument || me) && p.push(c.defaultView || c.parentWindow || t)
                    }
                    for (d = 0;
                        (s = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : u.bindType || h, r = (re._data(s, "events") || {})[e.type] && re._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && re.acceptData(s) && (e.result = r.apply(s, n), e.result === !1 && e.preventDefault());
                    if (e.type = h, !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && re.acceptData(i) && a && i[h] && !re.isWindow(i)) {
                        c = i[a], c && (i[a] = null), re.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        re.event.triggered = void 0, c && (i[a] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = re.event.fix(t);
                var e, n, i, o, r, a = [],
                    s = G.call(arguments),
                    l = (re._data(this, "events") || {})[t.type] || [],
                    u = re.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (a = re.event.handlers.call(this, t, l), e = 0;
                        (o = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, a = [],
                    s = e.delegateCount,
                    l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], r = 0; s > r; r++) i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && a.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a
            },
            fix: function(t) {
                if (t[re.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Oe.test(o) ? this.mouseHooks : Ae.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new re.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button,
                        a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || me, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== f() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return re.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = re.extend(new re.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? re.event.trigger(o, null, e) : re.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = me.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === ke && (t[i] = null), t.detachEvent(i, n))
        }, re.Event = function(t, e) {
            return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? p : h) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
        }, re.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = p, this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            re.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || o !== i && !re.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ie.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
            }
        }), ie.changeBubbles || (re.event.special.change = {
            setup: function() {
                return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
                })), !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    De.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                    }), re._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return re.event.remove(this, "._change"), !De.test(this.nodeName)
            }
        }), ie.focusinBubbles || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                re.event.simulate(e, t.target, re.event.fix(t), !0)
            };
            re.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = re._data(i, e);
                    o || i.addEventListener(t, n, !0), re._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = re._data(i, e) - 1;
                    o ? re._data(i, e, o) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
                }
            }
        }), re.fn.extend({
            on: function(t, e, n, i, o) {
                var r, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (r in t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = h;
                else if (!i) return this;
                return 1 === o && (a = i, i = function(t) {
                    return re().off(t), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                    re.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function() {
                    re.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    re.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? re.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Fe = / jQuery\d+="(?:null|\d+)"/g,
            He = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
            qe = /^\s+/,
            Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ue = /<([\w:]+)/,
            We = /<tbody/i,
            Ve = /<|&#?\w+;/,
            ze = /<(?:script|style|link)/i,
            $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ye = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ke = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qe = m(me),
            Je = Qe.appendChild(me.createElement("div"));
        Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td, re.extend({
            clone: function(t, e, n) {
                var i, o, r, a, s, l = re.contains(t.ownerDocument, t);
                if (ie.html5Clone || re.isXMLDoc(t) || !He.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Je.innerHTML = t.outerHTML, Je.removeChild(r = Je.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                    for (i = g(r), s = g(t), a = 0; null != (o = s[a]); ++a) i[a] && C(o, i[a]);
                if (e)
                    if (n)
                        for (s = s || g(t), i = i || g(r), a = 0; null != (o = s[a]); a++) _(o, i[a]);
                    else _(t, r);
                return i = g(r, "script"), i.length > 0 && x(i, !l && g(t, "script")), i = s = o = null, r
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, a, s, l, u, c, d = t.length, p = m(e), h = [], f = 0; d > f; f++)
                    if (r = t[f], r || 0 === r)
                        if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                        else if (Ve.test(r)) {
                    for (s = s || p.appendChild(e.createElement("div")), l = (Ue.exec(r) || ["", ""])[1].toLowerCase(), c = Ke[l] || Ke._default, s.innerHTML = c[1] + r.replace(Be, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                    if (!ie.leadingWhitespace && qe.test(r) && h.push(e.createTextNode(qe.exec(r)[0])), !ie.tbody)
                        for (r = "table" !== l || We.test(r) ? "<table>" !== c[1] || We.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) re.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                    for (re.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else h.push(e.createTextNode(r));
                for (s && p.removeChild(s), ie.appendChecked || re.grep(g(h, "input"), v), f = 0; r = h[f++];)
                    if ((!i || -1 === re.inArray(r, i)) && (a = re.contains(r.ownerDocument, r), s = g(p.appendChild(r), "script"), a && x(s), n))
                        for (o = 0; r = s[o++];) Ye.test(r.type || "") && n.push(r);
                return s = null, p
            },
            cleanData: function(t, e) {
                for (var n, i, o, r, a = 0, s = re.expando, l = re.cache, u = ie.deleteExpando, c = re.event.special; null != (n = t[a]); a++)
                    if ((e || re.acceptData(n)) && (o = n[s], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== ke ? n.removeAttribute(s) : n[s] = null, X.push(o))
                    }
            }
        }), re.fn.extend({
            text: function(t) {
                return Ne(this, function(t) {
                    return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? re.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && re.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && re.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return re.clone(this, t, e)
                })
            },
            html: function(t) {
                return Ne(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Fe, "") : void 0;
                    if (!("string" != typeof t || ze.test(t) || !ie.htmlSerialize && He.test(t) || !ie.leadingWhitespace && qe.test(t) || Ke[(Ue.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Be, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, re.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = K.apply([], t);
                var n, i, o, r, a, s, l = 0,
                    u = this.length,
                    c = this,
                    d = u - 1,
                    p = t[0],
                    h = re.isFunction(p);
                if (h || u > 1 && "string" == typeof p && !ie.checkClone && $e.test(p)) return this.each(function(n) {
                    var i = c.eq(n);
                    h && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
                });
                if (u && (s = re.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = re.map(g(s, "script"), b), o = r.length; u > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), o && re.merge(r, g(i, "script"))), e.call(this[l], i, l);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, re.map(r, w), l = 0; o > l; l++) i = r[l], Ye.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ge, "")));
                    s = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            re.fn[t] = function(t) {
                for (var n, i = 0, o = [], r = re(t), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(r[i])[e](n), Q.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Ze, tn = {};
        ! function() {
            var t, e, n = me.createElement("div"),
                i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(t.style.opacity), ie.cssFloat = !!t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, ie.shrinkWrapBlocks = function() {
                var t, n, o, r;
                if (null == e) {
                    if (t = me.getElementsByTagName("body")[0], !t) return;
                    r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = me.createElement("div"), o = me.createElement("div"), t.appendChild(n).appendChild(o), e = !1, typeof o.style.zoom !== ke && (o.style.cssText = i + ";width:1px;padding:1px;zoom:1", o.innerHTML = "<div></div>", o.firstChild.style.width = "5px", e = 3 !== o.offsetWidth), t.removeChild(n), t = n = o = null
                }
                return e
            }
        }();
        var en, nn, on = /^margin/,
            rn = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
            an = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (en = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, nn = function(t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || en(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || re.contains(t.ownerDocument, t) || (a = re.style(t, e)), rn.test(a) && on.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : me.documentElement.currentStyle && (en = function(t) {
            return t.currentStyle
        }, nn = function(t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || en(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), rn.test(a) && !an.test(e) && (i = s.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }), ! function() {
            function e() {
                var e, n, i = me.getElementsByTagName("body")[0];
                i && (e = me.createElement("div"), n = me.createElement("div"), e.style.cssText = u, i.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", re.swap(i, null != i.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    o = 4 === n.offsetWidth
                }), r = !0, a = !1, s = !0, t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(n, null) || {}).top, r = "4px" === (t.getComputedStyle(n, null) || {
                    width: "4px"
                }).width), i.removeChild(e), n = i = null)
            }
            var n, i, o, r, a, s, l = me.createElement("div"),
                u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, re.extend(ie, {
                reliableHiddenOffsets: function() {
                    if (null != i) return i;
                    var t, e, n, o = me.createElement("div"),
                        r = me.getElementsByTagName("body")[0];
                    return r ? (o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = me.createElement("div"), t.style.cssText = u, r.appendChild(t).appendChild(o), o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = o.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", i = n && 0 === e[0].offsetHeight, r.removeChild(t), o = r = null, i) : void 0
                },
                boxSizing: function() {
                    return null == o && e(), o
                },
                boxSizingReliable: function() {
                    return null == r && e(), r
                },
                pixelPosition: function() {
                    return null == a && e(), a
                },
                reliableMarginRight: function() {
                    var e, n, i, o;
                    if (null == s && t.getComputedStyle) {
                        if (e = me.getElementsByTagName("body")[0], !e) return;
                        n = me.createElement("div"), i = me.createElement("div"), n.style.cssText = u, e.appendChild(n).appendChild(i), o = i.appendChild(me.createElement("div")), o.style.cssText = i.style.cssText = c, o.style.marginRight = o.style.width = "0", i.style.width = "1px", s = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(n)
                    }
                    return s
                }
            })
        }(), re.swap = function(t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = a[r];
            return o
        };
        var sn = /alpha\([^)]*\)/i,
            ln = /opacity\s*=\s*([^)]*)/,
            un = /^(none|table(?!-c[ea]).+)/,
            cn = new RegExp("^(" + Te + ")(.*)$", "i"),
            dn = new RegExp("^([+-])=(" + Te + ")", "i"),
            pn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            hn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            fn = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = nn(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ie.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, a, s = re.camelCase(e),
                        l = t.style;
                    if (e = re.cssProps[s] || (re.cssProps[s] = T(l, s)), a = re.cssHooks[e] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = dn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(re.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || re.cssNumber[s] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                        l[e] = "", l[e] = n
                    } catch (u) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, a, s = re.camelCase(e);
                return e = re.cssProps[s] || (re.cssProps[s] = T(t.style, s)), a = re.cssHooks[e] || re.cssHooks[s], a && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = nn(t, e, i)), "normal" === r && e in hn && (r = hn[e]), "" === n || n ? (o = parseFloat(r), n === !0 || re.isNumeric(o) ? o || 0 : r) : r
            }
        }), re.each(["height", "width"], function(t, e) {
            re.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? 0 === t.offsetWidth && un.test(re.css(t, "display")) ? re.swap(t, pn, function() {
                        return M(t, e, i)
                    }) : M(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && en(t);
                    return j(t, n, i ? N(t, e, i, ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ie.opacity || (re.cssHooks.opacity = {
            get: function(t, e) {
                return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(r.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = sn.test(r) ? r.replace(sn, o) : r + " " + o)
            }
        }), re.cssHooks.marginRight = E(ie.reliableMarginRight, function(t, e) {
            return e ? re.swap(t, {
                display: "inline-block"
            }, nn, [t, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            re.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Pe[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, on.test(t) || (re.cssHooks[t + e].set = j)
        }), re.fn.extend({
            css: function(t, e) {
                return Ne(this, function(t, e, n) {
                    var i, o, r = {},
                        a = 0;
                    if (re.isArray(e)) {
                        for (i = en(t), o = e.length; o > a; a++) r[e[a]] = re.css(t, e[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return P(this, !0)
            },
            hide: function() {
                return P(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    je(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = D, D.prototype = {
            constructor: D,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = D.propHooks[this.prop];
                return t && t.get ? t.get(this) : D.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = D.propHooks[this.prop];
                return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, re.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, re.fx = D.prototype.init, re.fx.step = {};
        var mn, gn, vn = /^(?:toggle|show|hide)$/,
            yn = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
            bn = /queueHooks$/,
            wn = [R],
            xn = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = yn.exec(e),
                        r = o && o[3] || (re.cssNumber[t] ? "" : "px"),
                        a = (re.cssNumber[t] || "px" !== r && +i) && yn.exec(re.css(n.elem, t)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do s = s || ".5", a /= s, re.style(n.elem, t, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        re.Animation = re.extend(F, {
                tweener: function(t, e) {
                    re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], xn[n] = xn[n] || [], xn[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? wn.unshift(t) : wn.push(t)
                }
            }), re.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? re.extend({}, t) : {
                    complete: n || !n && e || re.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !re.isFunction(e) && e
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(je).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = re.isEmptyObject(t),
                        r = re.speed(e, n, i),
                        a = function() {
                            var e = F(this, re.extend({}, t), r);
                            (o || re._data(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = re.timers,
                            a = re._data(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && bn.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && re.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = re._data(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = re.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(t, e) {
                var n = re.fn[e];
                re.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(O(e, !0), t, i, o)
                }
            }), re.each({
                slideDown: O("show"),
                slideUp: O("hide"),
                slideToggle: O("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                re.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var t, e = re.timers,
                    n = 0;
                for (mn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || re.fx.stop(), mn = void 0
            }, re.fx.timer = function(t) {
                re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                gn || (gn = setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                clearInterval(gn), gn = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(t, e) {
                return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t, e, n, i, o = me.createElement("div");
                o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = o.getElementsByTagName("a")[0], n = me.createElement("select"), i = n.appendChild(me.createElement("option")), e = o.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ie.getSetAttribute = "t" !== o.className, ie.style = /top/.test(t.getAttribute("style")), ie.hrefNormalized = "/a" === t.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = i.selected, ie.enctype = !!me.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, e = me.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value, t = e = n = i = o = null
            }();
        var _n = /\r/g;
        re.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = re.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, re(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(_n, "") : null == n ? "" : n)) : void 0
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = re.find.attr(t, "value");
                        return null != e ? e : re.text(t)
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                                if (e = re(n).val(), r) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = re.makeArray(e), a = o.length; a--;)
                            if (i = o[a], re.inArray(re.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(t, e) {
                    return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
                }
            }, ie.checkOn || (re.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Cn, kn, Sn = re.expr.attrHandle,
            En = /^(?:checked|selected)$/i,
            Tn = ie.getSetAttribute,
            Pn = ie.input;
        re.fn.extend({
            attr: function(t, e) {
                return Ne(this, re.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    re.removeAttr(this, t)
                })
            }
        }), re.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === ke ? re.prop(t, e, n) : (1 === r && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? kn : Cn)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = re.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e)) : void 0
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(we);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Pn && Tn || !En.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(Tn ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), kn = {
            set: function(t, e, n) {
                return e === !1 ? re.removeAttr(t, n) : Pn && Tn || !En.test(n) ? t.setAttribute(!Tn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Sn[e] || re.find.attr;
            Sn[e] = Pn && Tn || !En.test(e) ? function(t, e, i) {
                var o, r;
                return i || (r = Sn[e], Sn[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Sn[e] = r), o
            } : function(t, e, n) {
                return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Pn && Tn || (re.attrHooks.value = {
            set: function(t, e, n) {
                return re.nodeName(t, "input") ? void(t.defaultValue = e) : Cn && Cn.set(t, e, n)
            }
        }), Tn || (Cn = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Sn.id = Sn.name = Sn.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: Cn.set
        }, re.attrHooks.contenteditable = {
            set: function(t, e, n) {
                Cn.set(t, "" === e ? !1 : e, n)
            }
        }, re.each(["width", "height"], function(t, e) {
            re.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), ie.style || (re.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var jn = /^(?:input|select|textarea|button|object)$/i,
            Nn = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(t, e) {
                return Ne(this, re.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = re.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), re.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, o, r, a = t.nodeType;
                return t && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !re.isXMLDoc(t), r && (e = re.propFix[e] || e, o = re.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = re.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : jn.test(t.nodeName) || Nn.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), ie.hrefNormalized || re.each(["href", "src"], function(t, e) {
            re.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }), ie.enctype || (re.propFix.enctype = "encoding");
       
         var In, Rn, Ln = /#.*$/,
            Fn = /([?&])_=[^&]*/,
            Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Bn = /^(?:GET|HEAD)$/,
            Un = /^\/\//,
            Wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Vn = {},
            zn = {},
            $n = "*/".concat("*");
        try {
            Rn = location.href
        } catch (Yn) {
            Rn = me.createElement("a"), Rn.href = "", Rn = Rn.href
        }
        In = Wn.exec(Rn.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rn,
                type: "GET",
                isLocal: qn.test(In[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $n,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? B(B(t, re.ajaxSettings), e) : B(re.ajaxSettings, t)
            },
            ajaxPrefilter: H(Vn),
            ajaxTransport: H(zn),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var o, c, v, y, w, _ = e;
                    2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = U(d, x, n)), y = W(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (re.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (re.etag[r] = w)), 204 === t || "HEAD" === d.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, c = y.data, v = y.error, o = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || _) + "", o ? f.resolveWith(p, [c, _, x]) : f.rejectWith(p, [x, _, v]), x.statusCode(g), g = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : v]), m.fireWith(p, [x, _]), l && (h.trigger("ajaxComplete", [x, d]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, a, s, l, u, c, d = re.ajaxSetup({}, e),
                    p = d.context || d,
                    h = d.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                    f = re.Deferred(),
                    m = re.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; e = Hn.exec(a);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return u && u.abort(e), n(0, e), this
                        }
                    };
                if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Rn) + "").replace(Ln, "").replace(Un, In[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain && (i = Wn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === In[1] && i[2] === In[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (In[3] || ("http:" === In[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), q(Vn, d, e, x), 2 === b) return x;
                l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (An.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(r) ? r.replace(Fn, "$1_=" + Dn++) : r + (An.test(r) ? "&" : "?") + "_=" + Dn++)), d.ifModified && (re.lastModified[r] && x.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $n + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[o](d[o]);
                if (u = q(zn, d, e, x)) {
                    x.readyState = 1, l && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, u.send(v, n)
                    } catch (_) {
                        if (!(2 > b)) throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, n) {
                return re.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return re.get(t, void 0, e, "script")
            }
        }),   re.expr.filters.visible = function(t) {
            return !re.expr.filters.hidden(t)
        };
        var Xn = /%20/g,
            Gn = /\[\]$/,
            Kn = /\r?\n/g,
            Qn = /^(?:submit|button|image|reset|file)$/i,
            Jn = /^(?:input|select|textarea|keygen)/i;
        re.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) V(n, t[n], e, o);
            return i.join("&").replace(Xn, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = re.prop(this, "elements");
                    return t ? re.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !re(this).is(":disabled") && Jn.test(this.nodeName) && !Qn.test(t) && (this.checked || !Me.test(t))
                }).map(function(t, e) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Kn, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Kn, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || $()
        } : z;
        var Zn = 0,
            ti = {},
            ei = re.ajaxSettings.xhr();
        
        var ni = [],
            ii = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ni.pop() || re.expando + "_" + Dn++;
                return this[t] = !0, t
            }
        }), re.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, a, s = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ii, "$1" + o) : e.jsonp !== !1 && (e.url += (An.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return a || re.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                a = arguments
            }, i.always(function() {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, ni.push(o)), a && re.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), re.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || me;
            var i = pe.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
        };
        var oi = re.fn.load;
        re.fn.load = function(t, e, n) {
            if ("string" != typeof t && oi) return oi.apply(this, arguments);
            var i, o, r, a = this,
                s = t.indexOf(" ");
            return s >= 0 && (i = t.slice(s, t.length), t = t.slice(0, s)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && re.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                a.each(n, o || [t.responseText, e, t])
            }), this
        }, re.expr.filters.animated = function(t) {
            return re.grep(re.timers, function(e) {
                return t === e.elem
            }).length
        };
        var ri = t.document.documentElement;
        re.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, a, s, l, u, c = re.css(t, "position"),
                    d = re(t),
                    p = {};
                "static" === c && (t.style.position = "relative"), s = d.offset(), r = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [r, l]) > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + o), "using" in e ? e.using.call(t, p) : d.css(p)
            }
        }, re.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    re.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (e = r.documentElement, re.contains(e, o) ? (typeof o.getBoundingClientRect !== ke && (i = o.getBoundingClientRect()), n = Y(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - re.css(i, "marginTop", !0),
                        left: e.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                    return t || ri
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            re.fn[t] = function(i) {
                return Ne(this, function(t, i, o) {
                    var r = Y(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? re(r).scrollLeft() : o, n ? o : re(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function(t, e) {
            re.cssHooks[e] = E(ie.pixelPosition, function(t, n) {
                return n ? (n = nn(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            re.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                re.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Ne(this, function(e, n, i) {
                        var o;
                        return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? re.css(e, n, a) : re.style(e, n, i, a)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), re.fn.size = function() {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var ai = t.jQuery,
            si = t.$;
        return re.noConflict = function(e) {
            return t.$ === re && (t.$ = si), e && t.jQuery === re && (t.jQuery = ai), re
        }, typeof e === ke && (t.jQuery = t.$ = re), re
    }), /*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
	function() {
        function t() {}

        function e(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }

        function n(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var i = t.prototype,
            o = this,
            r = o.EventEmitter;
        i.getListeners = function(t) {
            var e, n, i = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
            } else e = i[t] || (i[t] = []);
            return e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this), function(t) {
        function e(e) {
            var n = t.event;
            return n.target = n.target || n.srcElement || e, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(t, e, n) {
            t.addEventListener(e, n, !1)
        } : n.attachEvent && (i = function(t, n, i) {
            t[n + i] = i.handleEvent ? function() {
                var n = e(t);
                i.handleEvent.call(i, n)
            } : function() {
                var n = e(t);
                i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var o = function() {};
        n.removeEventListener ? o = function(t, e, n) {
            t.removeEventListener(e, n, !1)
        } : n.detachEvent && (o = function(t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (i) {
                t[e + n] = void 0
            }
        });
        var r = {
            bind: i,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
    }(this), function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return e(t, n, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventEmitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(this, function(t, e, n) {
        function i(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function o(t) {
            return "[object Array]" === p.call(t)
        }

        function r(t) {
            var e = [];
            if (o(t)) e = t;
            else if ("number" == typeof t.length)
                for (var n = 0, i = t.length; i > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function a(t, e, n) {
            if (!(this instanceof a)) return new a(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var o = this;
            setTimeout(function() {
                o.check()
            })
        }

        function s(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, h[t] = this
        }
        var u = t.jQuery,
            c = t.console,
            d = void 0 !== c,
            p = Object.prototype.toString;
       
        var h = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, a
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one(t.support.transition.end, function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e()
    })
}(jQuery), 
    /*!
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     * 
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    // Copyright (c) 2010 "Cowboy" Ben Alman,
    function(t, e) {
        "$:nomunge";
        var n, i = t.jQuery || t.Cowboy || (t.Cowboy = {});
        i.throttle = n = function(t, n, o, r) {
            function a() {
                function i() {
                    l = +new Date, o.apply(u, d)
                }

                function a() {
                    s = e
                }
                var u = this,
                    c = +new Date - l,
                    d = arguments;
                r && !s && i(), s && clearTimeout(s), r === e && c > t ? i() : n !== !0 && (s = setTimeout(r ? a : i, r === e ? t - c : t))
            }
            var s, l = 0;
            return "boolean" != typeof n && (r = o, o = n, n = e), i.guid && (a.guid = o.guid = o.guid || i.guid++), a
        }, i.debounce = function(t, i, o) {
            return o === e ? n(t, i, !1) : n(t, o, i !== !1)
        }
    }(this),
    
    
    /*
     * Viewport - jQuery selectors for finding elements in viewport
     *
     * Copyright (c) 2008-2009 Mika Tuupola
     *
     * Licensed under the MIT license:
     *   http://www.opensource.org/licenses/mit-license.php
     *
     * Project home:
     *  http://www.appelsiini.net/projects/viewport
     *
     */
    function(t) {
        t.belowthefold = function(e, n) {
            var i = t(window).height() + t(window).scrollTop();
            return i <= t(e).offset().top - n.threshold
        }, t.abovethetop = function(e, n) {
            var i = t(window).scrollTop();
            return i >= t(e).offset().top + t(e).height() - n.threshold
        }, t.rightofscreen = function(e, n) {
            var i = t(window).width() + t(window).scrollLeft();
            return i <= t(e).offset().left - n.threshold
        }, t.leftofscreen = function(e, n) {
            var i = t(window).scrollLeft();
            return i >= t(e).offset().left + t(e).width() - n.threshold
        }, t.inviewport = function(e, n) {
            return !(t.rightofscreen(e, n) || t.leftofscreen(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
        }, t.extend(t.expr[":"], {
            "below-the-fold": function(e) {
                return t.belowthefold(e, {
                    threshold: 0
                })
            },
            "above-the-top": function(e) {
                return t.abovethetop(e, {
                    threshold: 0
                })
            },
            "left-of-screen": function(e) {
                return t.leftofscreen(e, {
                    threshold: 0
                })
            },
            "right-of-screen": function(e) {
                return t.rightofscreen(e, {
                    threshold: 0
                })
            },
            "in-viewport": function(e) {
                return t.inviewport(e, {
                    threshold: 0
                })
            }
        })
    }(jQuery);
/*!
 * Impress Core Support Utilities
 * 
 * Copyright 2012 digital-telepathy
 */
var Impress = {
    computedPrefixes: ["Moz", "ms", "O", "Webkit", "Khtml"],
    elements: {},
    namespace: "impress",
    prefixes: ["moz", "ms", "o", "webkit"],
    support: {}
};
! function(t, e, n) {
    Impress.supports = function(i) {
        var o = (this.elements.html = this.elements.html || t("html"), !1);
        if (!this.support[i]) {
            switch (i) {
                case "cssanimations":
                    var r = this.elements.body[0].style,
                        a = "transition";
                    "string" == typeof r[a] && (o = !0), a = a.charAt(0).toUpperCase() + a.substr(1);
                    for (var s = 0; s < this.computedPrefixes.length; s++) "string" == typeof r[this.computedPrefixes[s] + a] && (o = !0);
                    break;
                case "csstransforms3d":
                    var l, u = document.createElement("p"),
                        c = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    document.body.appendChild(u);
                    for (var d in c) u.style[d] !== n && (u.style[d] = "translate3d(1px,1px,1px)", l = l || e.getComputedStyle(u).getPropertyValue(c[d]));
                    document.body.removeChild(u), o = l !== n && l.length > 0 && "none" !== l
            }
            this.support[i] = o
        }
        return this.support[i]
    }, Impress.getElements = function(n, i, o) {
        var o = o || !1,
            r = {},
            a = this,
            s = t(i || "html");
        return t.each(n, function(n, i) {
            -1 != t.inArray(n, [e, "body", "html"]) && (r[n] = a.elements[n]), t.isPlainObject(i) ? (r[n] = r[n] || {}, t.each(i, function(e, i) {
                r[n][e] = o && a.elements[i] ? a.elements[i] : a.elements[i] = t(i, s)
            })) : r[n] = o && a.elements[i] ? a.elements[i] : a.elements[i] = t(i, s)
        }), r
    }, Impress.resize = function() {
        this.previousMode = this.currentMode, this.currentMode = Modernizr.mq("only screen and (max-width: 767px)") ? "mobile" : "desktop", this.previousMode != this.currentMode && this.elements.window.triggerHandler(this.namespace + ":changed-responsive-mode", [this.currentMode])
    }, t(function() {
        Impress.elements.window = t(e), Impress.elements.body = t("body"), Impress.elements.html = t("html"), Impress.elements.window.on("resize", t.throttle(50, function() {
            Impress.resize()
        }))
    })
}(jQuery, window, null),
function(t, e, n, i) {
    var o = function(t, e) {
        this._dropdownNavVisible = !1, this._eventTrigger = {}, this._interacting = !1, this._interactingOffset = {
            top: -1,
            left: -1
        }, this.elements = {}, this.disabled = !1, this.current = 0, this.previous = -1, this.namespace = "slider", this.sliderWidth = -1, this.sliderHeight = -1, this.navigationGutter = 0, this.autoPlay = !1, this.preventDefaultSwipeX = !1, this.preventDefaultSwipeY = !0, this.childNav = !1, this.options = {
            easing: "ease-in-out",
            loop: !0,
            method: "css",
            navigation: ">.slider-navigation",
            navigationWidth: "24%",
            next: ">.next",
            orientation: "horizontal",
            prev: ">.prev",
            slides: ">.slide",
            speed: 500,
            start: 0,
            touch: !1,
            autoPlay: !1,
            autoPlayDelay: 1e4,
            dropdownNav: !0,
            touchThreshold: 4,
            dynamicHeight: "none",
            disabledMediaQuery: !1
        }, this.initialize(t, e)
    };
    
}(jQuery, window, null, Impress);