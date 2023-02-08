/*! For license information please see app.bundle.c137be97924c3d35d7e1.js.LICENSE.txt */
(function() {
    var __webpack_modules__ = {
        4431: function(A, e, t) {
            var n;
            !function(r) {
                "use strict";
                var i, o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, a = Math.ceil, s = Math.floor, l = "[BigNumber Error] ", c = l + "Number primitive has more than 15 significant digits: ", u = 1e14, d = 14, B = 9007199254740991, g = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], f = 1e7, h = 1e9;
                function p(A) {
                    var e = 0 | A;
                    return A > 0 || A === e ? e : e - 1
                }
                function w(A) {
                    for (var e, t, n = 1, r = A.length, i = A[0] + ""; n < r; ) {
                        for (e = A[n++] + "",
                        t = d - e.length; t--; e = "0" + e)
                            ;
                        i += e
                    }
                    for (r = i.length; 48 === i.charCodeAt(--r); )
                        ;
                    return i.slice(0, r + 1 || 1)
                }
                function m(A, e) {
                    var t, n, r = A.c, i = e.c, o = A.s, a = e.s, s = A.e, l = e.e;
                    if (!o || !a)
                        return null;
                    if (t = r && !r[0],
                    n = i && !i[0],
                    t || n)
                        return t ? n ? 0 : -a : o;
                    if (o != a)
                        return o;
                    if (t = o < 0,
                    n = s == l,
                    !r || !i)
                        return n ? 0 : !r ^ t ? 1 : -1;
                    if (!n)
                        return s > l ^ t ? 1 : -1;
                    for (a = (s = r.length) < (l = i.length) ? s : l,
                    o = 0; o < a; o++)
                        if (r[o] != i[o])
                            return r[o] > i[o] ^ t ? 1 : -1;
                    return s == l ? 0 : s > l ^ t ? 1 : -1
                }
                function b(A, e, t, n) {
                    if (A < e || A > t || A !== s(A))
                        throw Error(l + (n || "Argument") + ("number" == typeof A ? A < e || A > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(A))
                }
                function Q(A) {
                    var e = A.c.length - 1;
                    return p(A.e / d) == e && A.c[e] % 2 != 0
                }
                function C(A, e) {
                    return (A.length > 1 ? A.charAt(0) + "." + A.slice(1) : A) + (e < 0 ? "e" : "e+") + e
                }
                function F(A, e, t) {
                    var n, r;
                    if (e < 0) {
                        for (r = t + "."; ++e; r += t)
                            ;
                        A = r + A
                    } else if (++e > (n = A.length)) {
                        for (r = t,
                        e -= n; --e; r += t)
                            ;
                        A += r
                    } else
                        e < n && (A = A.slice(0, e) + "." + A.slice(e));
                    return A
                }
                i = function A(e) {
                    var t, n, r, i, U, E, y, H, I, x, v = _.prototype = {
                        constructor: _,
                        toString: null,
                        valueOf: null
                    }, k = new _(1), L = 20, K = 4, D = -7, S = 21, T = -1e7, R = 1e7, M = !1, O = 1, N = 0, P = {
                        prefix: "",
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        groupSeparator: ",",
                        decimalSeparator: ".",
                        fractionGroupSize: 0,
                        fractionGroupSeparator: " ",
                        suffix: ""
                    }, G = "0123456789abcdefghijklmnopqrstuvwxyz";
                    function _(A, e) {
                        var t, i, a, l, u, g, f, h, p = this;
                        if (!(p instanceof _))
                            return new _(A,e);
                        if (null == e) {
                            if (A && !0 === A._isBigNumber)
                                return p.s = A.s,
                                void (!A.c || A.e > R ? p.c = p.e = null : A.e < T ? p.c = [p.e = 0] : (p.e = A.e,
                                p.c = A.c.slice()));
                            if ((g = "number" == typeof A) && 0 * A == 0) {
                                if (p.s = 1 / A < 0 ? (A = -A,
                                -1) : 1,
                                A === ~~A) {
                                    for (l = 0,
                                    u = A; u >= 10; u /= 10,
                                    l++)
                                        ;
                                    return void (l > R ? p.c = p.e = null : (p.e = l,
                                    p.c = [A]))
                                }
                                h = String(A)
                            } else {
                                if (!o.test(h = String(A)))
                                    return r(p, h, g);
                                p.s = 45 == h.charCodeAt(0) ? (h = h.slice(1),
                                -1) : 1
                            }
                            (l = h.indexOf(".")) > -1 && (h = h.replace(".", "")),
                            (u = h.search(/e/i)) > 0 ? (l < 0 && (l = u),
                            l += +h.slice(u + 1),
                            h = h.substring(0, u)) : l < 0 && (l = h.length)
                        } else {
                            if (b(e, 2, G.length, "Base"),
                            10 == e)
                                return Y(p = new _(A), L + p.e + 1, K);
                            if (h = String(A),
                            g = "number" == typeof A) {
                                if (0 * A != 0)
                                    return r(p, h, g, e);
                                if (p.s = 1 / A < 0 ? (h = h.slice(1),
                                -1) : 1,
                                _.DEBUG && h.replace(/^0\.0*|\./, "").length > 15)
                                    throw Error(c + A)
                            } else
                                p.s = 45 === h.charCodeAt(0) ? (h = h.slice(1),
                                -1) : 1;
                            for (t = G.slice(0, e),
                            l = u = 0,
                            f = h.length; u < f; u++)
                                if (t.indexOf(i = h.charAt(u)) < 0) {
                                    if ("." == i) {
                                        if (u > l) {
                                            l = f;
                                            continue
                                        }
                                    } else if (!a && (h == h.toUpperCase() && (h = h.toLowerCase()) || h == h.toLowerCase() && (h = h.toUpperCase()))) {
                                        a = !0,
                                        u = -1,
                                        l = 0;
                                        continue
                                    }
                                    return r(p, String(A), g, e)
                                }
                            g = !1,
                            (l = (h = n(h, e, 10, p.s)).indexOf(".")) > -1 ? h = h.replace(".", "") : l = h.length
                        }
                        for (u = 0; 48 === h.charCodeAt(u); u++)
                            ;
                        for (f = h.length; 48 === h.charCodeAt(--f); )
                            ;
                        if (h = h.slice(u, ++f)) {
                            if (f -= u,
                            g && _.DEBUG && f > 15 && (A > B || A !== s(A)))
                                throw Error(c + p.s * A);
                            if ((l = l - u - 1) > R)
                                p.c = p.e = null;
                            else if (l < T)
                                p.c = [p.e = 0];
                            else {
                                if (p.e = l,
                                p.c = [],
                                u = (l + 1) % d,
                                l < 0 && (u += d),
                                u < f) {
                                    for (u && p.c.push(+h.slice(0, u)),
                                    f -= d; u < f; )
                                        p.c.push(+h.slice(u, u += d));
                                    u = d - (h = h.slice(u)).length
                                } else
                                    u -= f;
                                for (; u--; h += "0")
                                    ;
                                p.c.push(+h)
                            }
                        } else
                            p.c = [p.e = 0]
                    }
                    function V(A, e, t, n) {
                        var r, i, o, a, s;
                        if (null == t ? t = K : b(t, 0, 8),
                        !A.c)
                            return A.toString();
                        if (r = A.c[0],
                        o = A.e,
                        null == e)
                            s = w(A.c),
                            s = 1 == n || 2 == n && (o <= D || o >= S) ? C(s, o) : F(s, o, "0");
                        else if (i = (A = Y(new _(A), e, t)).e,
                        a = (s = w(A.c)).length,
                        1 == n || 2 == n && (e <= i || i <= D)) {
                            for (; a < e; s += "0",
                            a++)
                                ;
                            s = C(s, i)
                        } else if (e -= o,
                        s = F(s, i, "0"),
                        i + 1 > a) {
                            if (--e > 0)
                                for (s += "."; e--; s += "0")
                                    ;
                        } else if ((e += i - a) > 0)
                            for (i + 1 == a && (s += "."); e--; s += "0")
                                ;
                        return A.s < 0 && r ? "-" + s : s
                    }
                    function J(A, e) {
                        for (var t, n = 1, r = new _(A[0]); n < A.length; n++) {
                            if (!(t = new _(A[n])).s) {
                                r = t;
                                break
                            }
                            e.call(r, t) && (r = t)
                        }
                        return r
                    }
                    function X(A, e, t) {
                        for (var n = 1, r = e.length; !e[--r]; e.pop())
                            ;
                        for (r = e[0]; r >= 10; r /= 10,
                        n++)
                            ;
                        return (t = n + t * d - 1) > R ? A.c = A.e = null : t < T ? A.c = [A.e = 0] : (A.e = t,
                        A.c = e),
                        A
                    }
                    function Y(A, e, t, n) {
                        var r, i, o, l, c, B, f, h = A.c, p = g;
                        if (h) {
                            A: {
                                for (r = 1,
                                l = h[0]; l >= 10; l /= 10,
                                r++)
                                    ;
                                if ((i = e - r) < 0)
                                    i += d,
                                    o = e,
                                    f = (c = h[B = 0]) / p[r - o - 1] % 10 | 0;
                                else if ((B = a((i + 1) / d)) >= h.length) {
                                    if (!n)
                                        break A;
                                    for (; h.length <= B; h.push(0))
                                        ;
                                    c = f = 0,
                                    r = 1,
                                    o = (i %= d) - d + 1
                                } else {
                                    for (c = l = h[B],
                                    r = 1; l >= 10; l /= 10,
                                    r++)
                                        ;
                                    f = (o = (i %= d) - d + r) < 0 ? 0 : c / p[r - o - 1] % 10 | 0
                                }
                                if (n = n || e < 0 || null != h[B + 1] || (o < 0 ? c : c % p[r - o - 1]),
                                n = t < 4 ? (f || n) && (0 == t || t == (A.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == t || n || 6 == t && (i > 0 ? o > 0 ? c / p[r - o] : 0 : h[B - 1]) % 10 & 1 || t == (A.s < 0 ? 8 : 7)),
                                e < 1 || !h[0])
                                    return h.length = 0,
                                    n ? (e -= A.e + 1,
                                    h[0] = p[(d - e % d) % d],
                                    A.e = -e || 0) : h[0] = A.e = 0,
                                    A;
                                if (0 == i ? (h.length = B,
                                l = 1,
                                B--) : (h.length = B + 1,
                                l = p[d - i],
                                h[B] = o > 0 ? s(c / p[r - o] % p[o]) * l : 0),
                                n)
                                    for (; ; ) {
                                        if (0 == B) {
                                            for (i = 1,
                                            o = h[0]; o >= 10; o /= 10,
                                            i++)
                                                ;
                                            for (o = h[0] += l,
                                            l = 1; o >= 10; o /= 10,
                                            l++)
                                                ;
                                            i != l && (A.e++,
                                            h[0] == u && (h[0] = 1));
                                            break
                                        }
                                        if (h[B] += l,
                                        h[B] != u)
                                            break;
                                        h[B--] = 0,
                                        l = 1
                                    }
                                for (i = h.length; 0 === h[--i]; h.pop())
                                    ;
                            }
                            A.e > R ? A.c = A.e = null : A.e < T && (A.c = [A.e = 0])
                        }
                        return A
                    }
                    function W(A) {
                        var e, t = A.e;
                        return null === t ? A.toString() : (e = w(A.c),
                        e = t <= D || t >= S ? C(e, t) : F(e, t, "0"),
                        A.s < 0 ? "-" + e : e)
                    }
                    return _.clone = A,
                    _.ROUND_UP = 0,
                    _.ROUND_DOWN = 1,
                    _.ROUND_CEIL = 2,
                    _.ROUND_FLOOR = 3,
                    _.ROUND_HALF_UP = 4,
                    _.ROUND_HALF_DOWN = 5,
                    _.ROUND_HALF_EVEN = 6,
                    _.ROUND_HALF_CEIL = 7,
                    _.ROUND_HALF_FLOOR = 8,
                    _.EUCLID = 9,
                    _.config = _.set = function(A) {
                        var e, t;
                        if (null != A) {
                            if ("object" != typeof A)
                                throw Error(l + "Object expected: " + A);
                            if (A.hasOwnProperty(e = "DECIMAL_PLACES") && (b(t = A[e], 0, h, e),
                            L = t),
                            A.hasOwnProperty(e = "ROUNDING_MODE") && (b(t = A[e], 0, 8, e),
                            K = t),
                            A.hasOwnProperty(e = "EXPONENTIAL_AT") && ((t = A[e]) && t.pop ? (b(t[0], -h, 0, e),
                            b(t[1], 0, h, e),
                            D = t[0],
                            S = t[1]) : (b(t, -h, h, e),
                            D = -(S = t < 0 ? -t : t))),
                            A.hasOwnProperty(e = "RANGE"))
                                if ((t = A[e]) && t.pop)
                                    b(t[0], -h, -1, e),
                                    b(t[1], 1, h, e),
                                    T = t[0],
                                    R = t[1];
                                else {
                                    if (b(t, -h, h, e),
                                    !t)
                                        throw Error(l + e + " cannot be zero: " + t);
                                    T = -(R = t < 0 ? -t : t)
                                }
                            if (A.hasOwnProperty(e = "CRYPTO")) {
                                if ((t = A[e]) !== !!t)
                                    throw Error(l + e + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes)
                                        throw M = !t,
                                        Error(l + "crypto unavailable");
                                    M = t
                                } else
                                    M = t
                            }
                            if (A.hasOwnProperty(e = "MODULO_MODE") && (b(t = A[e], 0, 9, e),
                            O = t),
                            A.hasOwnProperty(e = "POW_PRECISION") && (b(t = A[e], 0, h, e),
                            N = t),
                            A.hasOwnProperty(e = "FORMAT")) {
                                if ("object" != typeof (t = A[e]))
                                    throw Error(l + e + " not an object: " + t);
                                P = t
                            }
                            if (A.hasOwnProperty(e = "ALPHABET")) {
                                if ("string" != typeof (t = A[e]) || /^.?$|[+\-.\s]|(.).*\1/.test(t))
                                    throw Error(l + e + " invalid: " + t);
                                G = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: L,
                            ROUNDING_MODE: K,
                            EXPONENTIAL_AT: [D, S],
                            RANGE: [T, R],
                            CRYPTO: M,
                            MODULO_MODE: O,
                            POW_PRECISION: N,
                            FORMAT: P,
                            ALPHABET: G
                        }
                    }
                    ,
                    _.isBigNumber = function(A) {
                        if (!A || !0 !== A._isBigNumber)
                            return !1;
                        if (!_.DEBUG)
                            return !0;
                        var e, t, n = A.c, r = A.e, i = A.s;
                        A: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === i || -1 === i) && r >= -h && r <= h && r === s(r)) {
                                if (0 === n[0]) {
                                    if (0 === r && 1 === n.length)
                                        return !0;
                                    break A
                                }
                                if ((e = (r + 1) % d) < 1 && (e += d),
                                String(n[0]).length == e) {
                                    for (e = 0; e < n.length; e++)
                                        if ((t = n[e]) < 0 || t >= u || t !== s(t))
                                            break A;
                                    if (0 !== t)
                                        return !0
                                }
                            }
                        } else if (null === n && null === r && (null === i || 1 === i || -1 === i))
                            return !0;
                        throw Error(l + "Invalid BigNumber: " + A)
                    }
                    ,
                    _.maximum = _.max = function() {
                        return J(arguments, v.lt)
                    }
                    ,
                    _.minimum = _.min = function() {
                        return J(arguments, v.gt)
                    }
                    ,
                    _.random = (i = 9007199254740992,
                    U = Math.random() * i & 2097151 ? function() {
                        return s(Math.random() * i)
                    }
                    : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }
                    ,
                    function(A) {
                        var e, t, n, r, i, o = 0, c = [], u = new _(k);
                        if (null == A ? A = L : b(A, 0, h),
                        r = a(A / d),
                        M)
                            if (crypto.getRandomValues) {
                                for (e = crypto.getRandomValues(new Uint32Array(r *= 2)); o < r; )
                                    (i = 131072 * e[o] + (e[o + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)),
                                    e[o] = t[0],
                                    e[o + 1] = t[1]) : (c.push(i % 1e14),
                                    o += 2);
                                o = r / 2
                            } else {
                                if (!crypto.randomBytes)
                                    throw M = !1,
                                    Error(l + "crypto unavailable");
                                for (e = crypto.randomBytes(r *= 7); o < r; )
                                    (i = 281474976710656 * (31 & e[o]) + 1099511627776 * e[o + 1] + 4294967296 * e[o + 2] + 16777216 * e[o + 3] + (e[o + 4] << 16) + (e[o + 5] << 8) + e[o + 6]) >= 9e15 ? crypto.randomBytes(7).copy(e, o) : (c.push(i % 1e14),
                                    o += 7);
                                o = r / 7
                            }
                        if (!M)
                            for (; o < r; )
                                (i = U()) < 9e15 && (c[o++] = i % 1e14);
                        for (r = c[--o],
                        A %= d,
                        r && A && (i = g[d - A],
                        c[o] = s(r / i) * i); 0 === c[o]; c.pop(),
                        o--)
                            ;
                        if (o < 0)
                            c = [n = 0];
                        else {
                            for (n = -1; 0 === c[0]; c.splice(0, 1),
                            n -= d)
                                ;
                            for (o = 1,
                            i = c[0]; i >= 10; i /= 10,
                            o++)
                                ;
                            o < d && (n -= d - o)
                        }
                        return u.e = n,
                        u.c = c,
                        u
                    }
                    ),
                    _.sum = function() {
                        for (var A = 1, e = arguments, t = new _(e[0]); A < e.length; )
                            t = t.plus(e[A++]);
                        return t
                    }
                    ,
                    n = function() {
                        var A = "0123456789";
                        function e(A, e, t, n) {
                            for (var r, i, o = [0], a = 0, s = A.length; a < s; ) {
                                for (i = o.length; i--; o[i] *= e)
                                    ;
                                for (o[0] += n.indexOf(A.charAt(a++)),
                                r = 0; r < o.length; r++)
                                    o[r] > t - 1 && (null == o[r + 1] && (o[r + 1] = 0),
                                    o[r + 1] += o[r] / t | 0,
                                    o[r] %= t)
                            }
                            return o.reverse()
                        }
                        return function(n, r, i, o, a) {
                            var s, l, c, u, d, B, g, f, h = n.indexOf("."), p = L, m = K;
                            for (h >= 0 && (u = N,
                            N = 0,
                            n = n.replace(".", ""),
                            B = (f = new _(r)).pow(n.length - h),
                            N = u,
                            f.c = e(F(w(B.c), B.e, "0"), 10, i, A),
                            f.e = f.c.length),
                            c = u = (g = e(n, r, i, a ? (s = G,
                            A) : (s = A,
                            G))).length; 0 == g[--u]; g.pop())
                                ;
                            if (!g[0])
                                return s.charAt(0);
                            if (h < 0 ? --c : (B.c = g,
                            B.e = c,
                            B.s = o,
                            g = (B = t(B, f, p, m, i)).c,
                            d = B.r,
                            c = B.e),
                            h = g[l = c + p + 1],
                            u = i / 2,
                            d = d || l < 0 || null != g[l + 1],
                            d = m < 4 ? (null != h || d) && (0 == m || m == (B.s < 0 ? 3 : 2)) : h > u || h == u && (4 == m || d || 6 == m && 1 & g[l - 1] || m == (B.s < 0 ? 8 : 7)),
                            l < 1 || !g[0])
                                n = d ? F(s.charAt(1), -p, s.charAt(0)) : s.charAt(0);
                            else {
                                if (g.length = l,
                                d)
                                    for (--i; ++g[--l] > i; )
                                        g[l] = 0,
                                        l || (++c,
                                        g = [1].concat(g));
                                for (u = g.length; !g[--u]; )
                                    ;
                                for (h = 0,
                                n = ""; h <= u; n += s.charAt(g[h++]))
                                    ;
                                n = F(n, c, s.charAt(0))
                            }
                            return n
                        }
                    }(),
                    t = function() {
                        function A(A, e, t) {
                            var n, r, i, o, a = 0, s = A.length, l = e % f, c = e / f | 0;
                            for (A = A.slice(); s--; )
                                a = ((r = l * (i = A[s] % f) + (n = c * i + (o = A[s] / f | 0) * l) % f * f + a) / t | 0) + (n / f | 0) + c * o,
                                A[s] = r % t;
                            return a && (A = [a].concat(A)),
                            A
                        }
                        function e(A, e, t, n) {
                            var r, i;
                            if (t != n)
                                i = t > n ? 1 : -1;
                            else
                                for (r = i = 0; r < t; r++)
                                    if (A[r] != e[r]) {
                                        i = A[r] > e[r] ? 1 : -1;
                                        break
                                    }
                            return i
                        }
                        function t(A, e, t, n) {
                            for (var r = 0; t--; )
                                A[t] -= r,
                                r = A[t] < e[t] ? 1 : 0,
                                A[t] = r * n + A[t] - e[t];
                            for (; !A[0] && A.length > 1; A.splice(0, 1))
                                ;
                        }
                        return function(n, r, i, o, a) {
                            var l, c, B, g, f, h, w, m, b, Q, C, F, U, E, y, H, I, x = n.s == r.s ? 1 : -1, v = n.c, k = r.c;
                            if (!(v && v[0] && k && k[0]))
                                return new _(n.s && r.s && (v ? !k || v[0] != k[0] : k) ? v && 0 == v[0] || !k ? 0 * x : x / 0 : NaN);
                            for (b = (m = new _(x)).c = [],
                            x = i + (c = n.e - r.e) + 1,
                            a || (a = u,
                            c = p(n.e / d) - p(r.e / d),
                            x = x / d | 0),
                            B = 0; k[B] == (v[B] || 0); B++)
                                ;
                            if (k[B] > (v[B] || 0) && c--,
                            x < 0)
                                b.push(1),
                                g = !0;
                            else {
                                for (E = v.length,
                                H = k.length,
                                B = 0,
                                x += 2,
                                (f = s(a / (k[0] + 1))) > 1 && (k = A(k, f, a),
                                v = A(v, f, a),
                                H = k.length,
                                E = v.length),
                                U = H,
                                C = (Q = v.slice(0, H)).length; C < H; Q[C++] = 0)
                                    ;
                                I = k.slice(),
                                I = [0].concat(I),
                                y = k[0],
                                k[1] >= a / 2 && y++;
                                do {
                                    if (f = 0,
                                    (l = e(k, Q, H, C)) < 0) {
                                        if (F = Q[0],
                                        H != C && (F = F * a + (Q[1] || 0)),
                                        (f = s(F / y)) > 1)
                                            for (f >= a && (f = a - 1),
                                            w = (h = A(k, f, a)).length,
                                            C = Q.length; 1 == e(h, Q, w, C); )
                                                f--,
                                                t(h, H < w ? I : k, w, a),
                                                w = h.length,
                                                l = 1;
                                        else
                                            0 == f && (l = f = 1),
                                            w = (h = k.slice()).length;
                                        if (w < C && (h = [0].concat(h)),
                                        t(Q, h, C, a),
                                        C = Q.length,
                                        -1 == l)
                                            for (; e(k, Q, H, C) < 1; )
                                                f++,
                                                t(Q, H < C ? I : k, C, a),
                                                C = Q.length
                                    } else
                                        0 === l && (f++,
                                        Q = [0]);
                                    b[B++] = f,
                                    Q[0] ? Q[C++] = v[U] || 0 : (Q = [v[U]],
                                    C = 1)
                                } while ((U++ < E || null != Q[0]) && x--);
                                g = null != Q[0],
                                b[0] || b.splice(0, 1)
                            }
                            if (a == u) {
                                for (B = 1,
                                x = b[0]; x >= 10; x /= 10,
                                B++)
                                    ;
                                Y(m, i + (m.e = B + c * d - 1) + 1, o, g)
                            } else
                                m.e = c,
                                m.r = +g;
                            return m
                        }
                    }(),
                    E = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                    y = /^([^.]+)\.$/,
                    H = /^\.([^.]+)$/,
                    I = /^-?(Infinity|NaN)$/,
                    x = /^\s*\+(?=[\w.])|^\s+|\s+$/g,
                    r = function(A, e, t, n) {
                        var r, i = t ? e : e.replace(x, "");
                        if (I.test(i))
                            A.s = isNaN(i) ? null : i < 0 ? -1 : 1;
                        else {
                            if (!t && (i = i.replace(E, (function(A, e, t) {
                                return r = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8,
                                n && n != r ? A : e
                            }
                            )),
                            n && (r = n,
                            i = i.replace(y, "$1").replace(H, "0.$1")),
                            e != i))
                                return new _(i,r);
                            if (_.DEBUG)
                                throw Error(l + "Not a" + (n ? " base " + n : "") + " number: " + e);
                            A.s = null
                        }
                        A.c = A.e = null
                    }
                    ,
                    v.absoluteValue = v.abs = function() {
                        var A = new _(this);
                        return A.s < 0 && (A.s = 1),
                        A
                    }
                    ,
                    v.comparedTo = function(A, e) {
                        return m(this, new _(A,e))
                    }
                    ,
                    v.decimalPlaces = v.dp = function(A, e) {
                        var t, n, r, i = this;
                        if (null != A)
                            return b(A, 0, h),
                            null == e ? e = K : b(e, 0, 8),
                            Y(new _(i), A + i.e + 1, e);
                        if (!(t = i.c))
                            return null;
                        if (n = ((r = t.length - 1) - p(this.e / d)) * d,
                        r = t[r])
                            for (; r % 10 == 0; r /= 10,
                            n--)
                                ;
                        return n < 0 && (n = 0),
                        n
                    }
                    ,
                    v.dividedBy = v.div = function(A, e) {
                        return t(this, new _(A,e), L, K)
                    }
                    ,
                    v.dividedToIntegerBy = v.idiv = function(A, e) {
                        return t(this, new _(A,e), 0, 1)
                    }
                    ,
                    v.exponentiatedBy = v.pow = function(A, e) {
                        var t, n, r, i, o, c, u, B, g = this;
                        if ((A = new _(A)).c && !A.isInteger())
                            throw Error(l + "Exponent not an integer: " + W(A));
                        if (null != e && (e = new _(e)),
                        o = A.e > 14,
                        !g.c || !g.c[0] || 1 == g.c[0] && !g.e && 1 == g.c.length || !A.c || !A.c[0])
                            return B = new _(Math.pow(+W(g), o ? 2 - Q(A) : +W(A))),
                            e ? B.mod(e) : B;
                        if (c = A.s < 0,
                        e) {
                            if (e.c ? !e.c[0] : !e.s)
                                return new _(NaN);
                            (n = !c && g.isInteger() && e.isInteger()) && (g = g.mod(e))
                        } else {
                            if (A.e > 9 && (g.e > 0 || g.e < -1 || (0 == g.e ? g.c[0] > 1 || o && g.c[1] >= 24e7 : g.c[0] < 8e13 || o && g.c[0] <= 9999975e7)))
                                return i = g.s < 0 && Q(A) ? -0 : 0,
                                g.e > -1 && (i = 1 / i),
                                new _(c ? 1 / i : i);
                            N && (i = a(N / d + 2))
                        }
                        for (o ? (t = new _(.5),
                        c && (A.s = 1),
                        u = Q(A)) : u = (r = Math.abs(+W(A))) % 2,
                        B = new _(k); ; ) {
                            if (u) {
                                if (!(B = B.times(g)).c)
                                    break;
                                i ? B.c.length > i && (B.c.length = i) : n && (B = B.mod(e))
                            }
                            if (r) {
                                if (0 === (r = s(r / 2)))
                                    break;
                                u = r % 2
                            } else if (Y(A = A.times(t), A.e + 1, 1),
                            A.e > 14)
                                u = Q(A);
                            else {
                                if (0 == (r = +W(A)))
                                    break;
                                u = r % 2
                            }
                            g = g.times(g),
                            i ? g.c && g.c.length > i && (g.c.length = i) : n && (g = g.mod(e))
                        }
                        return n ? B : (c && (B = k.div(B)),
                        e ? B.mod(e) : i ? Y(B, N, K, void 0) : B)
                    }
                    ,
                    v.integerValue = function(A) {
                        var e = new _(this);
                        return null == A ? A = K : b(A, 0, 8),
                        Y(e, e.e + 1, A)
                    }
                    ,
                    v.isEqualTo = v.eq = function(A, e) {
                        return 0 === m(this, new _(A,e))
                    }
                    ,
                    v.isFinite = function() {
                        return !!this.c
                    }
                    ,
                    v.isGreaterThan = v.gt = function(A, e) {
                        return m(this, new _(A,e)) > 0
                    }
                    ,
                    v.isGreaterThanOrEqualTo = v.gte = function(A, e) {
                        return 1 === (e = m(this, new _(A,e))) || 0 === e
                    }
                    ,
                    v.isInteger = function() {
                        return !!this.c && p(this.e / d) > this.c.length - 2
                    }
                    ,
                    v.isLessThan = v.lt = function(A, e) {
                        return m(this, new _(A,e)) < 0
                    }
                    ,
                    v.isLessThanOrEqualTo = v.lte = function(A, e) {
                        return -1 === (e = m(this, new _(A,e))) || 0 === e
                    }
                    ,
                    v.isNaN = function() {
                        return !this.s
                    }
                    ,
                    v.isNegative = function() {
                        return this.s < 0
                    }
                    ,
                    v.isPositive = function() {
                        return this.s > 0
                    }
                    ,
                    v.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }
                    ,
                    v.minus = function(A, e) {
                        var t, n, r, i, o = this, a = o.s;
                        if (e = (A = new _(A,e)).s,
                        !a || !e)
                            return new _(NaN);
                        if (a != e)
                            return A.s = -e,
                            o.plus(A);
                        var s = o.e / d
                          , l = A.e / d
                          , c = o.c
                          , B = A.c;
                        if (!s || !l) {
                            if (!c || !B)
                                return c ? (A.s = -e,
                                A) : new _(B ? o : NaN);
                            if (!c[0] || !B[0])
                                return B[0] ? (A.s = -e,
                                A) : new _(c[0] ? o : 3 == K ? -0 : 0)
                        }
                        if (s = p(s),
                        l = p(l),
                        c = c.slice(),
                        a = s - l) {
                            for ((i = a < 0) ? (a = -a,
                            r = c) : (l = s,
                            r = B),
                            r.reverse(),
                            e = a; e--; r.push(0))
                                ;
                            r.reverse()
                        } else
                            for (n = (i = (a = c.length) < (e = B.length)) ? a : e,
                            a = e = 0; e < n; e++)
                                if (c[e] != B[e]) {
                                    i = c[e] < B[e];
                                    break
                                }
                        if (i && (r = c,
                        c = B,
                        B = r,
                        A.s = -A.s),
                        (e = (n = B.length) - (t = c.length)) > 0)
                            for (; e--; c[t++] = 0)
                                ;
                        for (e = u - 1; n > a; ) {
                            if (c[--n] < B[n]) {
                                for (t = n; t && !c[--t]; c[t] = e)
                                    ;
                                --c[t],
                                c[n] += u
                            }
                            c[n] -= B[n]
                        }
                        for (; 0 == c[0]; c.splice(0, 1),
                        --l)
                            ;
                        return c[0] ? X(A, c, l) : (A.s = 3 == K ? -1 : 1,
                        A.c = [A.e = 0],
                        A)
                    }
                    ,
                    v.modulo = v.mod = function(A, e) {
                        var n, r, i = this;
                        return A = new _(A,e),
                        !i.c || !A.s || A.c && !A.c[0] ? new _(NaN) : !A.c || i.c && !i.c[0] ? new _(i) : (9 == O ? (r = A.s,
                        A.s = 1,
                        n = t(i, A, 0, 3),
                        A.s = r,
                        n.s *= r) : n = t(i, A, 0, O),
                        (A = i.minus(n.times(A))).c[0] || 1 != O || (A.s = i.s),
                        A)
                    }
                    ,
                    v.multipliedBy = v.times = function(A, e) {
                        var t, n, r, i, o, a, s, l, c, B, g, h, w, m, b, Q = this, C = Q.c, F = (A = new _(A,e)).c;
                        if (!(C && F && C[0] && F[0]))
                            return !Q.s || !A.s || C && !C[0] && !F || F && !F[0] && !C ? A.c = A.e = A.s = null : (A.s *= Q.s,
                            C && F ? (A.c = [0],
                            A.e = 0) : A.c = A.e = null),
                            A;
                        for (n = p(Q.e / d) + p(A.e / d),
                        A.s *= Q.s,
                        (s = C.length) < (B = F.length) && (w = C,
                        C = F,
                        F = w,
                        r = s,
                        s = B,
                        B = r),
                        r = s + B,
                        w = []; r--; w.push(0))
                            ;
                        for (m = u,
                        b = f,
                        r = B; --r >= 0; ) {
                            for (t = 0,
                            g = F[r] % b,
                            h = F[r] / b | 0,
                            i = r + (o = s); i > r; )
                                t = ((l = g * (l = C[--o] % b) + (a = h * l + (c = C[o] / b | 0) * g) % b * b + w[i] + t) / m | 0) + (a / b | 0) + h * c,
                                w[i--] = l % m;
                            w[i] = t
                        }
                        return t ? ++n : w.splice(0, 1),
                        X(A, w, n)
                    }
                    ,
                    v.negated = function() {
                        var A = new _(this);
                        return A.s = -A.s || null,
                        A
                    }
                    ,
                    v.plus = function(A, e) {
                        var t, n = this, r = n.s;
                        if (e = (A = new _(A,e)).s,
                        !r || !e)
                            return new _(NaN);
                        if (r != e)
                            return A.s = -e,
                            n.minus(A);
                        var i = n.e / d
                          , o = A.e / d
                          , a = n.c
                          , s = A.c;
                        if (!i || !o) {
                            if (!a || !s)
                                return new _(r / 0);
                            if (!a[0] || !s[0])
                                return s[0] ? A : new _(a[0] ? n : 0 * r)
                        }
                        if (i = p(i),
                        o = p(o),
                        a = a.slice(),
                        r = i - o) {
                            for (r > 0 ? (o = i,
                            t = s) : (r = -r,
                            t = a),
                            t.reverse(); r--; t.push(0))
                                ;
                            t.reverse()
                        }
                        for ((r = a.length) - (e = s.length) < 0 && (t = s,
                        s = a,
                        a = t,
                        e = r),
                        r = 0; e; )
                            r = (a[--e] = a[e] + s[e] + r) / u | 0,
                            a[e] = u === a[e] ? 0 : a[e] % u;
                        return r && (a = [r].concat(a),
                        ++o),
                        X(A, a, o)
                    }
                    ,
                    v.precision = v.sd = function(A, e) {
                        var t, n, r, i = this;
                        if (null != A && A !== !!A)
                            return b(A, 1, h),
                            null == e ? e = K : b(e, 0, 8),
                            Y(new _(i), A, e);
                        if (!(t = i.c))
                            return null;
                        if (n = (r = t.length - 1) * d + 1,
                        r = t[r]) {
                            for (; r % 10 == 0; r /= 10,
                            n--)
                                ;
                            for (r = t[0]; r >= 10; r /= 10,
                            n++)
                                ;
                        }
                        return A && i.e + 1 > n && (n = i.e + 1),
                        n
                    }
                    ,
                    v.shiftedBy = function(A) {
                        return b(A, -9007199254740991, B),
                        this.times("1e" + A)
                    }
                    ,
                    v.squareRoot = v.sqrt = function() {
                        var A, e, n, r, i, o = this, a = o.c, s = o.s, l = o.e, c = L + 4, u = new _("0.5");
                        if (1 !== s || !a || !a[0])
                            return new _(!s || s < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
                        if (0 == (s = Math.sqrt(+W(o))) || s == 1 / 0 ? (((e = w(a)).length + l) % 2 == 0 && (e += "0"),
                        s = Math.sqrt(+e),
                        l = p((l + 1) / 2) - (l < 0 || l % 2),
                        n = new _(e = s == 1 / 0 ? "5e" + l : (e = s.toExponential()).slice(0, e.indexOf("e") + 1) + l)) : n = new _(s + ""),
                        n.c[0])
                            for ((s = (l = n.e) + c) < 3 && (s = 0); ; )
                                if (i = n,
                                n = u.times(i.plus(t(o, i, c, 1))),
                                w(i.c).slice(0, s) === (e = w(n.c)).slice(0, s)) {
                                    if (n.e < l && --s,
                                    "9999" != (e = e.slice(s - 3, s + 1)) && (r || "4999" != e)) {
                                        +e && (+e.slice(1) || "5" != e.charAt(0)) || (Y(n, n.e + L + 2, 1),
                                        A = !n.times(n).eq(o));
                                        break
                                    }
                                    if (!r && (Y(i, i.e + L + 2, 0),
                                    i.times(i).eq(o))) {
                                        n = i;
                                        break
                                    }
                                    c += 4,
                                    s += 4,
                                    r = 1
                                }
                        return Y(n, n.e + L + 1, K, A)
                    }
                    ,
                    v.toExponential = function(A, e) {
                        return null != A && (b(A, 0, h),
                        A++),
                        V(this, A, e, 1)
                    }
                    ,
                    v.toFixed = function(A, e) {
                        return null != A && (b(A, 0, h),
                        A = A + this.e + 1),
                        V(this, A, e)
                    }
                    ,
                    v.toFormat = function(A, e, t) {
                        var n, r = this;
                        if (null == t)
                            null != A && e && "object" == typeof e ? (t = e,
                            e = null) : A && "object" == typeof A ? (t = A,
                            A = e = null) : t = P;
                        else if ("object" != typeof t)
                            throw Error(l + "Argument not an object: " + t);
                        if (n = r.toFixed(A, e),
                        r.c) {
                            var i, o = n.split("."), a = +t.groupSize, s = +t.secondaryGroupSize, c = t.groupSeparator || "", u = o[0], d = o[1], B = r.s < 0, g = B ? u.slice(1) : u, f = g.length;
                            if (s && (i = a,
                            a = s,
                            s = i,
                            f -= i),
                            a > 0 && f > 0) {
                                for (i = f % a || a,
                                u = g.substr(0, i); i < f; i += a)
                                    u += c + g.substr(i, a);
                                s > 0 && (u += c + g.slice(i)),
                                B && (u = "-" + u)
                            }
                            n = d ? u + (t.decimalSeparator || "") + ((s = +t.fractionGroupSize) ? d.replace(new RegExp("\\d{" + s + "}\\B","g"), "$&" + (t.fractionGroupSeparator || "")) : d) : u
                        }
                        return (t.prefix || "") + n + (t.suffix || "")
                    }
                    ,
                    v.toFraction = function(A) {
                        var e, n, r, i, o, a, s, c, u, B, f, h, p = this, m = p.c;
                        if (null != A && (!(s = new _(A)).isInteger() && (s.c || 1 !== s.s) || s.lt(k)))
                            throw Error(l + "Argument " + (s.isInteger() ? "out of range: " : "not an integer: ") + W(s));
                        if (!m)
                            return new _(p);
                        for (e = new _(k),
                        u = n = new _(k),
                        r = c = new _(k),
                        h = w(m),
                        o = e.e = h.length - p.e - 1,
                        e.c[0] = g[(a = o % d) < 0 ? d + a : a],
                        A = !A || s.comparedTo(e) > 0 ? o > 0 ? e : u : s,
                        a = R,
                        R = 1 / 0,
                        s = new _(h),
                        c.c[0] = 0; B = t(s, e, 0, 1),
                        1 != (i = n.plus(B.times(r))).comparedTo(A); )
                            n = r,
                            r = i,
                            u = c.plus(B.times(i = u)),
                            c = i,
                            e = s.minus(B.times(i = e)),
                            s = i;
                        return i = t(A.minus(n), r, 0, 1),
                        c = c.plus(i.times(u)),
                        n = n.plus(i.times(r)),
                        c.s = u.s = p.s,
                        f = t(u, r, o *= 2, K).minus(p).abs().comparedTo(t(c, n, o, K).minus(p).abs()) < 1 ? [u, r] : [c, n],
                        R = a,
                        f
                    }
                    ,
                    v.toNumber = function() {
                        return +W(this)
                    }
                    ,
                    v.toPrecision = function(A, e) {
                        return null != A && b(A, 1, h),
                        V(this, A, e, 2)
                    }
                    ,
                    v.toString = function(A) {
                        var e, t = this, r = t.s, i = t.e;
                        return null === i ? r ? (e = "Infinity",
                        r < 0 && (e = "-" + e)) : e = "NaN" : (null == A ? e = i <= D || i >= S ? C(w(t.c), i) : F(w(t.c), i, "0") : 10 === A ? e = F(w((t = Y(new _(t), L + i + 1, K)).c), t.e, "0") : (b(A, 2, G.length, "Base"),
                        e = n(F(w(t.c), i, "0"), 10, A, r, !0)),
                        r < 0 && t.c[0] && (e = "-" + e)),
                        e
                    }
                    ,
                    v.valueOf = v.toJSON = function() {
                        return W(this)
                    }
                    ,
                    v._isBigNumber = !0,
                    null != e && _.set(e),
                    _
                }(),
                i.default = i.BigNumber = i,
                void 0 === (n = function() {
                    return i
                }
                .call(e, t, e, A)) || (A.exports = n)
            }()
        },
        8729: function(A, e, t) {
            "use strict";
            var n = t(3645)
              , r = t.n(n)
              , i = t(441)
              , o = r()((function(A) {
                return A[1]
            }
            ));
            o.i(i.Z),
            o.push([A.id, '/*******************************\n    为了保证 app 的结构清晰，你必须参照 semantic 的目录结构\n*******************************/\n/*--------------------\n   Site Variables\n---------------------*/\n/* Default site.variables */\n/* Site theme site.variables */\n/*-------------------\n Component Variables\n---------------------*/\n/* Default */\n/* Site Theme */\n@media only screen and (max-width: 300px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 310px) and (min-width: 300px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 320px) and (min-width: 310px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 350px) and (min-width: 320px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 360px) and (min-width: 350px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 400px) and (min-width: 360px) {\n  html,\n  body {\n    font-size: 13px;\n  }\n}\n@media only screen and (max-width: 470px) and (min-width: 400px) {\n  html,\n  body {\n    font-size: 15.46665px;\n  }\n}\n@media only screen and (max-width: 480px) and (min-width: 470px) {\n  html,\n  body {\n    font-size: 18.08334px;\n  }\n}\n@media only screen and (max-width: 540px) and (min-width: 480px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 560px) and (min-width: 540px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 570px) and (min-width: 560px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 630px) and (min-width: 570px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 640px) and (min-width: 630px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 710px) and (min-width: 640px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 720px) and (min-width: 710px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (min-width: 720px) and (max-width: 1024px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  html,\n  body {\n    font-size: 15px;\n  }\n}\n.viewport {\n  height: 100%;\n  margin: 0 auto;\n  max-width: 680px;\n}\n.viewport hr {\n  border-width: 0px;\n  border-bottom: 1px solid #DFDFDF;\n  margin: 0;\n}\nhr {\n  color: #DFDFDF;\n}\n.noselect {\n  touch-callout: none;\n  user-select: none;\n}\n.needsclick {\n  cursor: pointer;\n}\nimg.lazyload {\n  cursor: pointer;\n}\n#debug_flag {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  height: 1.5em;\n  width: 1.5em;\n  z-index: 99999;\n}\n.xamargin {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n.a0margin {\n  margin: 0 0 !important;\n}\n.t0margin {\n  margin-top: 0 !important;\n}\n.r0margin {\n  margin-right: 0 !important;\n}\n.b0margin {\n  margin-bottom: 0 !important;\n}\n.l0margin {\n  margin-left: 0 !important;\n}\n.x0margin {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n.y0margin {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.y5margin {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.margin-top-auto {\n  margin-top: auto;\n}\n.margin-auto {\n  margin: 0 auto;\n}\n.x0padding {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.a0padding {\n  padding: 0 0 !important;\n}\n.t0padding {\n  padding-top: 0 !important;\n}\n.b125padding {\n  padding-bottom: 1.25em !important;\n}\n.y125padding {\n  padding-top: 1.25em !important;\n  padding-bottom: 1.25em !important;\n}\n.r0padding {\n  padding-right: 0 !important;\n}\n.b0padding {\n  padding-bottom: 0 !important;\n}\n.l0padding {\n  padding-left: 0 !important;\n}\n.x0padding {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.y0padding {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.a0radius {\n  border-radius: 0 !important;\n}\n.a1radius {\n  border-radius: 0.1em !important;\n}\n.a2radius {\n  border-radius: 0.2em !important;\n}\n.a3radius {\n  border-radius: 0.3em !important;\n}\n.b0border {\n  border-bottom: none !important;\n}\n.rs-line-height {\n  line-height: 1rem !important;\n}\n.relative {\n  position: relative !important;\n}\n.static {\n  position: static !important;\n}\n.flex {\n  display: flex !important;\n}\n.row-direction.flex {\n  flex-direction: row;\n}\n.column-direction.flex {\n  flex-direction: column;\n}\n.flex-row {\n  flex-direction: row;\n}\n.center-justified {\n  justify-content: center;\n}\n.start-justified {\n  justify-content: flex-start;\n}\n.end-justified {\n  justify-content: flex-end;\n}\n.between-justified {\n  justify-content: space-between;\n}\n.center-aligned {\n  align-items: center;\n}\n.flex-column {\n  flex-direction: column;\n}\n.flex-between {\n  justify-content: space-between;\n}\n.flex-around {\n  justify-content: space-around;\n}\n.flex-end {\n  justify-content: flex-end;\n}\n.flex-center {\n  justify-content: center;\n}\n.display-none {\n  display: none;\n}\n.display-none-not-important {\n  display: none;\n}\n.display-none-important {\n  display: none !important;\n}\n.display-block {\n  display: block;\n}\n.flex.justify.between {\n  justify-content: space-between;\n}\n.ajax-hide-content {\n  display: none;\n}\n.move-up {\n  position: relative;\n  top: -0.666em;\n}\n.overflow.scroll {\n  overflow-y: scroll;\n  /* this fixes the overflow:hidden in Chrome */\n  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);\n}\n.overflow.hidden {\n  overflow: hidden !important;\n}\n.pointer.cursor {\n  cursor: pointer;\n}\n.word-break-all {\n  word-break: break-all;\n}\n.width-50 {\n  width: 50%;\n}\n.width-100 {\n  width: 100%;\n}\n.float-right {\n  float: right;\n}\n.float-left {\n  float: left;\n}\n.img-circle {\n  border-radius: 500em;\n}\n.img-rounded {\n  border-radius: 1em;\n}\n.min-height {\n  min-height: 9.833em !important;\n}\n.word-break-all {\n  word-break: break-all;\n}\n.transition {\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-timing-function: ease;\n  animation-timing-function: ease;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.loading.transition {\n  position: absolute;\n  top: -99999px;\n  left: -99999px;\n}\n.hidden.transition {\n  display: none;\n  visibility: hidden;\n}\n.visible.transition {\n  display: block !important;\n  visibility: visible !important;\n}\n.disabled.transition {\n  animation-play-state: paused;\n}\n.shake.transition {\n  animation-duration: 750ms;\n  animation-name: shake;\n}\n.animating.transition {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  visibility: visible !important;\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-10px);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(10px);\n  }\n}\n.grey.text {\n  color: #909090;\n}\n.light.grey.text {\n  color: #c1c1c1;\n}\n.lighter.grey.text {\n  color: #dfdfdf;\n}\n.dark.grey.text {\n  color: #686868;\n}\n.darker.grey.text {\n  color: #323232;\n}\n.white.text {\n  color: #FFFFFF;\n}\n.green.text {\n  color: #22AF9F;\n}\n.small.text {\n  font-size: 0.8em;\n}\n.error.text {\n  color: #e74731;\n}\n.primary.text {\n  color: #f8b61c;\n}\n.secondary.text {\n  color: #4f86c5;\n}\n.error.text {\n  color: #e74731;\n}\n.center.aligned.text {\n  text-align: center;\n}\n.right.aligned.text {\n  text-align: right;\n}\n.left.floated.text {\n  float: left;\n}\n.right.floated.text {\n  float: right;\n}\n.left.flex.floated.text {\n  justify-content: flex-start;\n}\n.center.flex.floated.text {\n  justify-content: center;\n}\n.right.flex.floated.text {\n  margin-left: auto;\n}\n.bold {\n  font-weight: bold;\n}\n.bold i {\n  font-weight: bold;\n}\n.normal.text {\n  font-weight: normal !important;\n}\n.omit.text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.underlined.text {\n  text-decoration: underline;\n}\n.tip.text {\n  font-size: 0.8333rem !important;\n}\n.h1.text {\n  font-size: 1.3333rem !important;\n}\n.h2.text {\n  font-size: 1.15rem !important;\n}\n.h3.text {\n  font-size: 0.9375rem !important;\n}\n.h4.text {\n  font-size: 1.071rem !important;\n}\n.quote.text {\n  position: relative;\n}\n.quote.text .cf-quotation {\n  color: #f8b61c;\n  margin: 0;\n  font-size: 90%;\n  position: relative;\n  left: -1em;\n  top: -0.2em;\n}\n/*******************************\n            Button\n*******************************/\n/*--------------------\n   Site Variables\n---------------------*/\n/* Default site.variables */\n/* Site theme site.variables */\n/*-------------------\n Component Variables\n---------------------*/\n/* Default */\n/* Site Theme */\n.ui.button {\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  outline: none;\n  border: none;\n  vertical-align: baseline;\n  background: #E0E1E2 none;\n  color: rgba(0, 0, 0, 0.6);\n  font-family: "Helvetica Neue", "Helvetica", "Tahoma", "Arial", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif, \'Helvetica Neue\', Arial, Helvetica, sans-serif;\n  margin: 0em 0.25em 0 0em;\n  padding: 0.78571429em 1.5em 0.78571429em;\n  text-transform: none;\n  text-shadow: none;\n  font-weight: 300;\n  line-height: 1em;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 0;\n  box-shadow: 0;\n  user-select: none;\n  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;\n  will-change: auto;\n  -webkit-tap-highlight-color: transparent;\n}\n.ui.full.radius.button {\n  border-radius: 500em !important;\n}\n.ui.spacing.button {\n  letter-spacing: 0.4em;\n}\n.ui.spacing.button .text {\n  margin-right: -0.4em;\n}\n.ui.rounded.button {\n  border-radius: 500em;\n}\n.ui.huge.button {\n  height: 2.12502813em;\n  font-size: 1.3333rem;\n  padding: 0.56251406em 0.5em !important;\n  font-family: \'Roboto\', Arial, sans-serif;\n  width: 50%;\n}\n.ui.huge.button.special {\n  height: 2.24608696em;\n  font-size: 1.15rem;\n  padding: 0.62304348em 0.5em !important;\n  font-family: \'Roboto\', Arial, sans-serif;\n  width: 38%;\n}\n.ui.periodic.button {\n  height: 2.24608696em;\n  font-size: 1.15rem;\n  padding: 0.62304348em 0.5em !important;\n  font-family: \'Roboto\', Arial, sans-serif;\n  letter-spacing: 0.1333em;\n  padding-left: 0.833em !important;\n  padding-right: 0.833em !important;\n  min-width: 50%;\n}\n.ui.periodic.button .text {\n  margin-right: -0.1333em;\n}\n.ui.large.button {\n  height: 2.24608696em;\n  font-size: 1.15rem;\n  padding: 0.62304348em 0.5em !important;\n  font-family: \'Roboto\', Arial, sans-serif;\n  width: 50%;\n}\n.ui.small.button {\n  height: 1.667em;\n  font-size: 1em;\n  padding: 0.3335em 0.5em !important;\n  font-family: \'Roboto\', Arial, sans-serif;\n}\n/*--------------\n    Loading\n---------------*/\n/* Specificity hack */\n.ui.loading.loading.loading.loading.loading.loading.button {\n  position: relative;\n  cursor: default;\n  text-shadow: none !important;\n  color: transparent !important;\n  opacity: 1;\n  pointer-events: auto;\n  transition: none;\n}\n.ui.loading.loading.loading.loading.loading.loading.button .text {\n  color: transparent !important;\n}\n.ui.loading.button:before {\n  position: absolute;\n  content: \'\';\n  top: 50%;\n  left: 50%;\n  margin: -0.64285714em 0 0 -0.64285714em;\n  width: 1.28571429em;\n  height: 1.28571429em;\n  border-radius: 500rem;\n  border: 0.2em solid rgba(0, 0, 0, 0.15);\n}\n.ui.loading.button:after {\n  position: absolute;\n  content: \'\';\n  top: 50%;\n  left: 50%;\n  margin: -0.64285714em 0 0 -0.64285714em;\n  width: 1.28571429em;\n  height: 1.28571429em;\n  animation: button-spin 0.6s linear;\n  animation-iteration-count: infinite;\n  border-radius: 500rem;\n  border-color: #FFFFFF transparent transparent;\n  border-style: solid;\n  border-width: 0.2em;\n  box-shadow: 0px 0px 0px 1px transparent;\n}\n.ui.labeled.icon.loading.button .icon {\n  background-color: transparent;\n  box-shadow: none;\n}\n@keyframes button-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ui.basic.loading.button:not(.inverted):before {\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.ui.basic.loading.button:not(.inverted):after {\n  border-top-color: #909090;\n}\n/*-------------------\n       Primary\n--------------------*/\n.ui.primary.buttons .button,\n.ui.primary.button {\n  background-color: #f8b61c;\n  color: #FFFFFF;\n  text-shadow: none;\n  background-image: none;\n}\n.ui.primary.button {\n  box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;\n}\n.ui.primary.buttons .button:hover,\n.ui.primary.button:hover {\n  background: #f8b61c;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n.ui.primary.buttons .button:focus,\n.ui.primary.button:focus {\n  background-color: #f8b61c;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n.ui.primary.buttons .button:active,\n.ui.primary.button:active {\n  background-color: #f8b61c;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n.ui.primary.buttons .active.button,\n.ui.primary.active.button {\n  background-color: #f8b61c;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n/*-------------------\n      Secondary\n--------------------*/\n.ui.secondary.buttons .button,\n.ui.secondary.button {\n  background-color: #4f86c5;\n  color: #FFFFFF;\n  text-shadow: none;\n  background-image: none;\n}\n.ui.secondary.button {\n  box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;\n}\n.ui.secondary.buttons .button:hover,\n.ui.secondary.button:hover {\n  background-color: #5d93d1;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n.ui.secondary.buttons .button:focus,\n.ui.secondary.button:focus {\n  background-color: #649ad9;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n.ui.secondary.buttons .button:active,\n.ui.secondary.button:active {\n  background-color: #75a0d2;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n.ui.secondary.buttons .active.button,\n.ui.secondary.active.button {\n  background-color: #5a93d3;\n  color: #FFFFFF;\n  text-shadow: none;\n}\n/*-------------------\n       Primary\n--------------------*/\n.ui.primary.basic.buttons .button,\n.ui.primary.basic.button {\n  background-color: #FFFFFF;\n  color: #f8b61c !important;\n  text-shadow: none;\n  background-image: none;\n  border: 1px solid #f8b61c;\n}\n.ui.primary.basic.button {\n  box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;\n}\n.ui.primary.basic.buttons .button:hover,\n.ui.primary.basic.button:hover {\n  background-color: #FFFFFF;\n  color: #f8b61c !important;\n  text-shadow: none;\n}\n.ui.primary.basic.buttons .button:focus,\n.ui.primary.basic.button:focus {\n  background-color: #FFFFFF;\n  color: #f8b61c !important;\n  text-shadow: none;\n}\n.ui.primary.basic.buttons .button:active,\n.ui.primary.basic.button:active {\n  background-color: #FFFFFF;\n  color: #f8b61c !important;\n  text-shadow: none;\n}\n.ui.primary.basic.buttons .active.button,\n.ui.primary.basic.active.button {\n  background-color: #FFFFFF;\n  color: #f8b61c !important;\n  text-shadow: none;\n}\n/*-------------------\n      Secondary\n--------------------*/\n.ui.secondary.basic.buttons .button,\n.ui.secondary.basic.button {\n  background-color: #FFFFFF;\n  color: #4f86c5 !important;\n  text-shadow: none;\n  background-image: none;\n  border: 1px solid #4f86c5;\n}\n.ui.secondary.basic.button {\n  box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;\n}\n.ui.secondary.basic.buttons .button:hover,\n.ui.secondary.basic.button:hover {\n  background-color: #FFFFFF;\n  color: #4f86c5 !important;\n  text-shadow: none;\n}\n.ui.secondary.basic.buttons .button:focus,\n.ui.secondary.basic.button:focus {\n  background-color: #FFFFFF;\n  color: #4f86c5 !important;\n  text-shadow: none;\n}\n.ui.secondary.basic.buttons .button:active,\n.ui.secondary.basic.button:active {\n  background-color: #FFFFFF;\n  color: #4f86c5 !important;\n  text-shadow: none;\n}\n.ui.secondary.basic.buttons .active.button,\n.ui.secondary.basic.active.button {\n  background-color: #FFFFFF;\n  color: #4f86c5 !important;\n  text-shadow: none;\n}\n/*-------------------\n      Disabled\n--------------------*/\n.ui.buttons .disabled.button,\n.ui.disabled.button,\n.ui.button:disabled,\n.ui.disabled.button:hover,\n.ui.disabled.active.button {\n  cursor: default;\n  opacity: 0.45 !important;\n  background-image: none !important;\n  box-shadow: none !important;\n  pointer-events: none !important;\n}\n/* Basic Group With Disabled */\n.ui.basic.buttons .ui.disabled.button {\n  border-color: rgba(34, 36, 38, 0.5);\n}\n/*-------------------\n        Fluid\n--------------------*/\n.ui.fluid.buttons,\n.ui.fluid.button {\n  width: 100%;\n}\n.ui.fluid.button {\n  display: block;\n}\n.ui.one.buttons {\n  width: 100%;\n}\n.ui.two.buttons {\n  width: 100%;\n}\n.ui.two.buttons > .button {\n  width: 50%;\n}\n.ui.three.buttons {\n  width: 100%;\n}\n.ui.three.buttons > .button {\n  width: 33.333%;\n}\n.ui.four.buttons {\n  width: 100%;\n}\n.ui.four.buttons > .button {\n  width: 25%;\n}\n.ui.five.buttons {\n  width: 100%;\n}\n.ui.five.buttons > .button {\n  width: 20%;\n}\n.ui.six.buttons {\n  width: 100%;\n}\n.ui.six.buttons > .button {\n  width: 16.666%;\n}\n.ui.seven.buttons {\n  width: 100%;\n}\n.ui.seven.buttons > .button {\n  width: 14.285%;\n}\n.ui.eight.buttons {\n  width: 100%;\n}\n.ui.eight.buttons > .button {\n  width: 12.5%;\n}\n.ui.nine.buttons {\n  width: 100%;\n}\n.ui.nine.buttons > .button {\n  width: 11.11%;\n}\n.ui.ten.buttons {\n  width: 100%;\n}\n.ui.ten.buttons > .button {\n  width: 10%;\n}\n.ui.eleven.buttons {\n  width: 100%;\n}\n.ui.eleven.buttons > .button {\n  width: 9.09%;\n}\n.ui.twelve.buttons {\n  width: 100%;\n}\n.ui.twelve.buttons > .button {\n  width: 8.3333%;\n}\n.ui.button.radius {\n  border-radius: 0.3333em;\n}\n.ui.button.active {\n  background: #f8b61c;\n  color: #FFFFFF;\n}\n.ui.xs.button {\n  padding-top: 0.2em;\n  padding-right: 0.5em;\n  padding-bottom: 0.2em;\n  padding-left: 0.5em;\n}\n.ui.xs.button.green {\n  background: -webkit-linear-gradient(left, #22AF9F, #1DB06F);\n  color: #FFFFFF;\n}\n.ui.xs.button.green * {\n  color: #FFFFFF !important;\n}\n.ui.sm.button {\n  height: 2.1600864em;\n  font-size: 0.8333rem;\n  padding: 0.5800432em 0.5em !important;\n  font-family: \'Roboto\', Arial, sans-serif;\n  min-width: 5rem;\n  margin-right: 0.8333rem;\n  color: #FFFFFF;\n  background: transparent;\n  border: 1px solid #FFFFFF;\n}\n.ui.sm.button:last-child {\n  margin-right: 0;\n}\n.ui.sm.button.active {\n  background: #f8b61c !important;\n  border-color: #f8b61c;\n}\n.two-sm-button {\n  display: flex;\n  flex-direction: raw;\n}\n.page-background.background {\n  background-color: #F8F8F8;\n}\n.primary.background {\n  background-color: #f8b61c;\n}\n.grey.background {\n  background-color: #909090;\n}\n.light.grey.background {\n  background-color: #c1c1c1;\n}\n.lighter.grey.background {\n  background-color: #dfdfdf;\n}\n.dark.grey.background {\n  background-color: #686868;\n}\n.darker.grey.background {\n  background-color: #323232;\n}\n.white.background {\n  background-color: #FFFFFF;\n}\n.primary.background {\n  background-color: #f8b61c;\n}\n.secondary.background {\n  background-color: #4f86c5;\n}\n.light.primary.background {\n  background-color: #FF851B;\n}\n.light.secondary.background {\n  background-color: #2ECC40;\n}\n.auto-height-textarea {\n  resize: none !important;\n}\n.beauti-radio > i.icon {\n  border: 1px solid #c1c1c1;\n  margin: 0;\n  color: #FFFFFF;\n  height: 1.6667rem;\n  width: 1.6667rem;\n  border-radius: 50%;\n}\n.beauti-radio.active > i.icon {\n  border: none;\n  font-size: 120%;\n  background: #4f86c5;\n  border-color: #4f86c5;\n}\n#datePlugin,\n.datePlugin {\n  background: rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  max-width: 680px;\n  right: 0;\n  margin: 0 auto;\n  z-index: 1111111;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n#datePlugin *,\n.datePlugin * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  background-clip: padding-box;\n}\n#datePlugin .d-date-box,\n.datePlugin .d-date-box {\n  position: absolute;\n  bottom: 0;\n  background-color: #FFFFFF;\n  width: 100%;\n}\n#datePlugin .d-date-title,\n.datePlugin .d-date-title {\n  text-align: left;\n  font-weight: 700;\n  font-size: 1em;\n  padding: 10px;\n  color: #323232;\n}\n#datePlugin p.d-date-info,\n.datePlugin p.d-date-info {\n  color: #333;\n  text-align: center;\n  font-size: 14px;\n  padding: 0.833em 0;\n  margin: 0;\n}\n#datePlugin p.d-date-info .d-return-info,\n.datePlugin p.d-date-info .d-return-info,\n#datePlugin p.d-date-info .d-day-info,\n.datePlugin p.d-date-info .d-day-info {\n  font-weight: 700;\n}\n#datePlugin .d-date-wrap,\n.datePlugin .d-date-wrap {\n  margin-bottom: 0.8333em;\n  width: 100%;\n  height: 120px;\n  position: relative;\n}\n#datePlugin .d-time-wrap,\n.datePlugin .d-time-wrap {\n  border-top: 1px solid #F8F8F8;\n}\n#datePlugin .d-time-wrap .d-date-cell,\n.datePlugin .d-time-wrap .d-date-cell {\n  width: 50%;\n}\n#datePlugin .d-date-mark,\n.datePlugin .d-date-mark {\n  background-color: #eee;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  position: absolute;\n  top: 40px;\n  left: 0;\n  width: 100%;\n  height: 40px;\n}\n#datePlugin .d-date-cell,\n.datePlugin .d-date-cell {\n  float: left;\n  width: 33.33333%;\n  height: 100%;\n  overflow: hidden;\n}\n#datePlugin .d-date-cell li,\n.datePlugin .d-date-cell li {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  list-style: none;\n}\n#datePlugin .d-date-btns .d-btn,\n.datePlugin .d-date-btns .d-btn {\n  display: inline-block;\n  width: 50%;\n  background-color: #F8F8F8;\n  border: none;\n  border-top: 1px solid #ddd;\n  color: #FFFFFF;\n  font-size: 16px;\n  padding: 10px 0;\n}\n#datePlugin .d-date-btns .d-btn:focus,\n.datePlugin .d-date-btns .d-btn:focus {\n  outline: none;\n}\n#datePlugin .d-date-btns #d-cancleBtn,\n.datePlugin .d-date-btns #d-cancleBtn,\n#datePlugin .d-date-btns .d-cancleBtn,\n.datePlugin .d-date-btns .d-cancleBtn {\n  text-align: left;\n  padding-left: 0.8333em;\n  color: #c1c1c1;\n}\n#datePlugin .d-date-btns #d-okBtn,\n.datePlugin .d-date-btns #d-okBtn,\n#datePlugin .d-date-btns .d-okBtn,\n.datePlugin .d-date-btns .d-okBtn {\n  text-align: right;\n  padding-right: 0.8333em;\n  color: #f8b61c;\n}\n/*********** PC 上时间选择器 **************/\n.jedatebox {\n  width: 298px;\n  height: auto;\n  border: 1px #c1c1c1 solid;\n  background-color: #FFFFFF;\n  font-size: 14px;\n  cursor: default;\n  margin: 0;\n  padding: 0;\n}\n.jedatebox div,\n.jedatebox ol,\n.jedatebox ul,\n.jedatebox li,\n.jedatebox p,\n.jedatebox span {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.jedatebox em,\n.jedatebox i {\n  margin: 0;\n  padding: 0;\n  font-style: normal;\n}\n.jedatebox.dateshow {\n  display: block;\n}\n.jedatebox .jedatetop {\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n}\n.jedatebox .jedateym {\n  float: left;\n  height: 40px;\n  line-height: 40px;\n}\n.jedatebox .jedateym span {\n  width: 70%;\n  padding: 0;\n  float: left;\n  text-align: center;\n  text-overflow: ellipsis;\n  display: block;\n  font-weight: 700;\n  color: #323232;\n}\n.jedatebox .jedateym span input {\n  width: 100%;\n  float: left;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  text-align: center;\n}\n.jedatebox .jedateym .prev,\n.jedatebox .jedateym .next {\n  width: 15%;\n  height: 40px;\n  line-height: 45px;\n  float: left;\n  display: block;\n  text-align: center;\n}\n.jedatebox .jedateym .prev:before,\n.jedatebox .jedateym .next:before {\n  width: 0;\n  height: 0;\n  display: inline-block;\n  border-width: 7px;\n  border-style: dashed;\n  border-color: #FFFFFF;\n  overflow: hidden;\n}\n.jedatebox .jedateym .prev:before {\n  border-right-style: solid;\n  border-right-color: #f8b61c;\n  content: "";\n  margin: 0 9px 0 0;\n}\n.jedatebox .jedateym .next:before {\n  border-left-style: solid;\n  border-left-color: #f8b61c;\n  content: "";\n  margin: 0 0 0 6px;\n}\n.jedatebox .jedateym .pndrop {\n  width: 14px;\n  height: 14px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.jedatebox .jedateym .pndrop:before {\n  width: 0;\n  height: 0;\n  display: inline-block;\n  border-width: 5px;\n  border-style: dashed;\n  border-color: transparent;\n  overflow: hidden;\n  border-top-style: solid;\n  border-top-color: #f8b61c;\n  content: "";\n  position: absolute;\n  top: 4px;\n  left: 2px;\n}\n.jedatebox .jedatesety,\n.jedatebox .jedatesetm {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 40px;\n  bottom: 0;\n  background-color: #FFFFFF;\n  z-index: 50;\n}\n.jedatebox .jedatesety .ymdropul,\n.jedatebox .jedatesetm .ymdropul {\n  width: 100%;\n  height: 210px;\n  overflow: auto;\n}\n.jedatebox .jedatesety .ymdropul li,\n.jedatebox .jedatesetm .ymdropul li {\n  width: 33.3%;\n  float: left;\n  text-align: center;\n}\n.jedatebox .jedatesety .ymdropul li:hover,\n.jedatebox .jedatesetm .ymdropul li:hover {\n  background: #F8F8F8;\n}\n.jedatebox .jedatesety .ymdropul li.action,\n.jedatebox .jedatesetm .ymdropul li.action,\n.jedatebox .jedatesety .ymdropul li.action:hover,\n.jedatebox .jedatesetm .ymdropul li.action:hover {\n  background: #f8b61c;\n  color: #FFFFFF;\n}\n.jedatebox .jedatesety .ymdropul li {\n  height: 40px;\n  line-height: 40px;\n}\n.jedatebox .jedatesetm .ymdropul li {\n  height: 50px;\n  line-height: 50px;\n}\n.jedatebox .jedatetopym p {\n  overflow: auto;\n  padding-top: 4px;\n}\n.jedatebox .jedatetopym p span {\n  width: 31%;\n  margin: 0 1.1%;\n  background-color: #f8b61c;\n  color: #FFFFFF;\n  display: block;\n  height: 28px;\n  line-height: 28px;\n  border-radius: 5px;\n  text-align: center;\n}\n.jedatebox .jedatetopym p span.jedateymchri,\n.jedatebox .jedatetopym p span.jedateymchle {\n  background-color: #F8F8F8;\n  color: #323232;\n  float: left;\n  font-size: 16px;\n}\n.jedatebox .jedatetopym p span.jedateymchok {\n  background-color: #f8b61c;\n  color: #FFFFFF;\n  float: right;\n  font-size: 12px;\n}\n.jedatebox .jedayy,\n.jedatebox .jedaym {\n  height: 202px;\n  overflow: auto;\n  padding: 5px;\n}\n.jedatebox .jedayy li {\n  width: 33.3%;\n  float: left;\n  text-align: center;\n  height: 38px;\n  line-height: 38px;\n}\n.jedatebox .jedayy li.action,\n.jedatebox .jedayy li.action:hover {\n  background: #f8b61c;\n  color: #FFFFFF;\n}\n.jedatebox .jedayy li:hover {\n  background: #ECF4FB;\n}\n.jedatebox .jedayy li.disabled {\n  color: #bbb;\n}\n.jedatebox .jedaym li {\n  width: 50%;\n  float: left;\n  text-align: center;\n  height: 32px;\n  line-height: 32px;\n}\n.jedatebox .jedaym li.action,\n.jedatebox .jedaym li.action:hover {\n  background: #f8b61c;\n  color: #FFFFFF;\n}\n.jedatebox .jedaym li:hover {\n  background: #ECF4FB;\n}\n.jedatebox .jedaym li.disabled {\n  color: #bbb;\n}\n.jedatebox .jedaol {\n  width: 100%;\n  overflow: auto;\n}\n.jedatebox .jedaul {\n  padding: 4px;\n  overflow: auto;\n}\n.jedatebox .jedaol li,\n.jedatebox .jedaul li {\n  width: 14.28%;\n  float: left;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.jedatebox .jedaol li.weeks {\n  background: #F8F8F8;\n  border-bottom: 1px solid #909090;\n}\n.jedatebox .jedaul li.action,\n.jedatebox .jedaul li.action:hover {\n  background: #f8b61c;\n  color: #FFFFFF;\n}\n.jedatebox .jedaul li.other {\n  color: #909090;\n}\n.jedatebox .jedaul li.disabled {\n  color: #bbb;\n}\n.jedatebox .jedaul li.disabled:hover {\n  background: #FFFFFF;\n}\n.jedatebox .jedaul li:nth-child(7n) {\n  border-right: none;\n}\n.jedatebox .jedaul li:hover {\n  background: #F8F8F8;\n}\n.jedatebox .jedaul li.red {\n  color: #ff0000;\n}\n.jedatebox .jedaul li .marks {\n  width: 5px;\n  height: 5px;\n  background: #ff0000;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  position: absolute;\n  right: 2px;\n  top: 4px;\n}\n.jedatebox .jedaul li.action .marks {\n  width: 5px;\n  height: 5px;\n  background: #FFFFFF;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  position: absolute;\n  right: 2px;\n  top: 4px;\n}\n.jedatebox .jedatebot {\n  height: 34px;\n  line-height: 34px;\n  padding: 0 3px 0 5px;\n  overflow: hidden;\n  background: #f5f5f5;\n}\n.jedatebox .jedatebot .jedatehms {\n  border: 1px #ddd solid;\n  background-color: #FFFFFF;\n  margin: 0px 5% 3px 0;\n  padding-left: 1px;\n  display: block;\n  overflow: hidden;\n}\n.jedatebox .jedatebot .jedatebtn {\n  text-align: center;\n  font-size: 12px;\n  width: 100%;\n}\n.jedatebox .jedatebot .jedatebtn span {\n  width: 31%;\n  float: right;\n  margin: 0 1.1%;\n  color: #FFFFFF;\n  display: block;\n  height: 28px;\n  line-height: 28px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #f8b61c;\n}\n.jedatebox .jedatebot .botflex {\n  width: 50%;\n  float: left;\n  display: inline-block;\n  margin: 0;\n  padding-top: 3px;\n  overflow: hidden;\n}\n.jedatebox .jedatebot .botflex li {\n  width: 36px;\n  float: left;\n  text-align: center;\n}\n.jedatebox .jedatebot .botflex li input {\n  width: 100%;\n  float: left;\n  padding: 0;\n  border: none;\n  text-align: center;\n  display: block;\n  height: 26px;\n  line-height: 26px;\n  text-decoration: none;\n  outline: none;\n  -moz-outline: none;\n  font-size: 14px;\n}\n.jedatebox .jedatebot .botflex i {\n  width: 12px;\n  float: left;\n  height: 26px;\n  line-height: 24px;\n  font-style: normal;\n  display: block;\n  text-align: center;\n  background: #f2f2f2;\n  font-weight: 900;\n}\n.jedatebox .jedateprophms {\n  width: 100%;\n}\n.jedatebox .jedateproppos {\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding-top: 40px;\n  display: none;\n}\n.jedatebox .jedatepropfix {\n  display: block;\n}\n.jedatebox .jedatepropcon {\n  padding: 30px 5px 17px 5px;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  position: relative;\n}\n.jedatebox .jedatehmstitle {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: #f5f5f5;\n  color: #000;\n  border-bottom: 1px solid #ddd;\n  overflow: hidden;\n  text-align: center;\n  font-size: 15px;\n}\n.jedatebox .jedateproptext {\n  width: 83px;\n  float: left;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  margin-left: 10px;\n}\n.jedatebox .jedatehmscon {\n  width: 81px;\n  height: 140px;\n  float: left;\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  margin: 0 0 0 10px;\n}\n.jedatebox .jedatehmscon p {\n  width: 100%;\n  float: left;\n  text-align: center;\n  height: 28px;\n  line-height: 28px;\n}\n.jedatebox .jedatehmscon p:hover {\n  background: #ECF4FB;\n}\n.jedatebox .jedatehmscon p.action,\n.jedatebox .jedatehmscon p.action:hover {\n  background: #f8b61c;\n  color: #FFFFFF;\n}\n.jedatebox .jedatehmscon p.disabled {\n  color: #c1c1c1;\n}\n.jedatebox .jedatems p {\n  width: 10%;\n  float: left;\n  text-align: center;\n  height: 32px;\n  line-height: 32px;\n}\n.jedatebox .jedatems p.action {\n  background: #f8b61c;\n  color: #FFFFFF;\n}\n.jedatebox .jedatehmsclose {\n  width: 30px;\n  height: 30px;\n  line-height: 26px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  right: 4px;\n  margin-top: -15px;\n  z-index: 150;\n  font-size: 24px;\n}\n.jedatebox .jedatehmscon::-webkit-scrollbar {\n  height: 6px;\n  width: 6px;\n  margin-right: 5px;\n  background: #f5f5f5;\n  transition: all 0.3s ease-in-out;\n  border-radius: 0;\n}\n.jedatebox .jedatehmscon::-webkit-scrollbar-thumb {\n  -webkit-border-radius: 0;\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.jedatebox .jedatehmscon::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.6);\n}\n.jedatebox .jedatehmscon::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.8);\n}\n.jedatebox .jedatehmscon::-webkit-scrollbar-thumb:window-inactive {\n  background: rgba(0, 0, 0, 0.4);\n}\n#locator_btn {\n  background: #dfdfdf;\n  height: 2.4285em;\n  line-height: 2.4285em;\n  text-align: center;\n  margin-top: 0.5em;\n  border-radius: 0.3em;\n  cursor: pointer;\n}\n#lng_and_lnt {\n  margin: 0.5em 0;\n}\n#lng_and_lnt .item {\n  width: 50%;\n  display: inline-block;\n}\n.tangram-suggestion-main {\n  z-index: 10000 !important;\n}\n.web-uploader-container {\n  border: 1px solid #c1c1c1;\n  height: 3em;\n  margin-bottom: 0;\n  border-radius: 0.4em;\n}\n.web-uploader-container .uploader-list {\n  height: 3em;\n  display: none;\n}\n.web-uploader-container .webuploader-container {\n  width: 100%;\n  z-index: 11;\n  height: 3em;\n  position: relative;\n}\n.web-uploader-container .webuploader-element-invisible {\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n}\n.web-uploader-container .webuploader-pick {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n  overflow: hidden;\n  width: 100%;\n  background: inherit !important;\n  color: #909090 !important;\n  padding: 0;\n  height: 3em;\n  text-align: left;\n}\n.web-uploader-container .webuploader-pick .pick-info {\n  height: 3em;\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 1em;\n  padding-left: 0.5em;\n}\n.web-uploader-container .webuploader-pick-hover {\n  background: none;\n}\n.web-uploader-container .webuploader-pick-disable {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.web-uploader-container .remove-file {\n  position: absolute;\n  margin-right: 0.6em;\n  right: 2.0833em;\n  height: 3em;\n  line-height: 3em;\n  cursor: pointer;\n  top: 2.6em;\n  color: #909090;\n  display: none;\n}\n.web-uploader-container .progress {\n  width: 100%;\n  height: 3em;\n}\n.web-uploader-container .progress .bar {\n  background: rgba(91, 192, 222, 0.6);\n  height: 96%;\n  border-radius: 0.4em;\n  text-align: right;\n  padding-right: 7px;\n}\n.web-uploader-container .file-item {\n  float: left;\n  padding: 3px 4px 0;\n  z-index: 10;\n  height: 2.67em;\n}\n.web-uploader-container .file-item img {\n  height: 100%;\n}\n.web-uploader-container .info {\n  float: left;\n  margin-left: 0.5em;\n  font-size: 1em;\n  height: 3em;\n  line-height: 3em;\n}\n.web-uploader-container .info .file-name {\n  max-width: 300px;\n  overflow: hidden;\n  padding: 0 0.5em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  bottom: 0.18em;\n}\n.web-uploader-container .error {\n  color: #e74731;\n}\n.web-uploader-container .webuploader-pick-hover {\n  background: inherit !important;\n}\n@media (max-width: 767px) {\n  .web-uploader-container .info .file-name {\n    max-width: 230px;\n  }\n}\n@media (max-width: 520px) {\n  .web-uploader-container .info .file-name {\n    max-width: 120px;\n  }\n  .web-uploader-container .picker2 .webuploader-container {\n    z-index: -1;\n  }\n}\n@media only screen and (max-width: 480px) {\n  #formContainer form .pay_amount_desc {\n    position: relative;\n    padding: 1.538em 0.769em;\n    border-radius: 20px 20px 10px 10px;\n    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  #formContainer form .pay_amount_desc:before {\n    position: absolute;\n    content: \' \';\n    height: 1px;\n    border-top: 1px dashed #dfdfdf;\n    width: 90%;\n    top: 0;\n    left: 5%;\n  }\n}\n.pay_account_list {\n  padding: 0 2.0833em 0;\n}\n.pay_account_list > div.ui.vertical.segment {\n  display: flex;\n  padding: 1.25em 0;\n  align-items: center;\n  border-bottom-color: #dfdfdf;\n}\n.pay_account_list > div.ui.vertical.segment:last-child {\n  border-bottom-color: transparent;\n}\n.pay_account_list > div.ui.vertical.segment i.pay-icon {\n  margin-right: 1.2rem;\n  font-size: 1.4663em;\n  line-height: 1;\n}\n.pay_account_list > div.ui.vertical.segment i.cf-wxpay {\n  color: #1FBA2B;\n}\n.pay_account_list > div.ui.vertical.segment i.cf-alipaypay {\n  color: #00AAEF;\n}\n.pay_account_list > div.ui.vertical.segment i.cf-bankcardpay {\n  color: #F88166;\n}\n.pay_account_list > div.ui.vertical.segment i.cf-paypal {\n  color: #243B80;\n}\n.pay_account_list > div.ui.vertical.segment .list-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.pay_account_list > div.ui.vertical.segment .list-content .title {\n  font-size: 1.15rem;\n}\n.pay_account_list .list-content {\n  line-height: 1;\n}\n.pay_account_list .beauti-radio {\n  margin-left: 0.5em;\n}\n.flash-container {\n  position: fixed;\n  z-index: 999999;\n  pointer-events: none;\n}\n.flash-container {\n  top: 0;\n  width: 100%;\n  height: 2.6667em;\n}\n.flash-container .flash {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.flash-container .flash.flash-success {\n  background: #D8D8D8;\n}\n.flash-container .flash.flash-failed {\n  background: #FFDDD9;\n}\n.flash-container .flash .flash-icon {\n  margin-right: 0.9em;\n}\n.flash-container .flash .flash-icon i {\n  margin-right: 0;\n}\n.flash-container .flash.flash-success .flash-icon {\n  color: #17C67B;\n}\n.flash-container .flash.flash-failed .flash-icon {\n  color: #FF513E;\n}\n.flash-container .flash-message {\n  color: #686868;\n}\n', ""]),
            e.Z = o
        },
        441: function(A, e, t) {
            "use strict";
            var n = t(3645)
              , r = t.n(n)()((function(A) {
                return A[1]
            }
            ));
            r.push([A.id, '/*!\n * # Semantic UI - Reset\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */*,:after,:before{box-sizing:inherit}html{box-sizing:border-box}input[type=email],input[type=password],input[type=search],input[type=text]{-webkit-appearance:none;-moz-appearance:none}/*! normalize.css v3.0.1 | MIT License | git.io/normalize *//*! normalize.css v3.0.1 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}/*!\n * # Semantic UI - Site\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */body,html{height:100%}html{font-size:8px}body{margin:0;overflow-x:hidden;min-width:320px;background:#f8f8f8;font-size:12px;line-height:1.5em;color:rgba(0,0,0,.87);font-smoothing:antialiased}body,h1,h2,h3,h4,h5{padding:0;font-family:Helvetica Neue,Helvetica,Tahoma,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}h1,h2,h3,h4,h5{line-height:1.2857em;margin:calc(2rem - .14285em) 0 1rem;font-weight:400}h1{min-height:1rem;font-size:1.3333rem}h2{font-size:1.15rem}h3{font-size:.9375rem}h4{font-size:1.071rem}h5{font-size:1rem}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child{margin-top:0}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child{margin-bottom:0}p{margin:0 0 1em;line-height:1.5em}p:first-child{margin-top:0}p:last-child{margin-bottom:0}a{color:#4183c4}a,a:hover{text-decoration:none}a:hover{color:#1e70bf}::-webkit-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}::-moz-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}::selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}input::-webkit-selection,textarea::-webkit-selection{background-color:hsla(0,0%,39%,.4);color:rgba(0,0,0,.87)}input::-moz-selection,textarea::-moz-selection{background-color:hsla(0,0%,39%,.4);color:rgba(0,0,0,.87)}input::selection,textarea::selection{background-color:hsla(0,0%,39%,.4);color:rgba(0,0,0,.87)}body,html{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-overflow-scrolling:touch}/*!\n * # Semantic UI - Image\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */.ui.image{position:relative;display:inline-block;vertical-align:middle;max-width:100%;background-color:transparent}img.ui.image{display:block}.ui.image img,.ui.image svg{display:block;max-width:100%;height:auto}.ui.hidden.image,.ui.hidden.images{display:none}.ui.hidden.transition.image,.ui.hidden.transition.images{display:block;visibility:hidden}.ui.disabled.image,.ui.disabled.images{cursor:default;opacity:.45}.ui.inline.image,.ui.inline.image img,.ui.inline.image svg{display:inline-block}.ui.top.aligned.image,.ui.top.aligned.image img,.ui.top.aligned.images .image,.ui.top.aligned.image svg{display:inline-block;vertical-align:top}.ui.middle.aligned.image,.ui.middle.aligned.image img,.ui.middle.aligned.images .image,.ui.middle.aligned.image svg{display:inline-block;vertical-align:middle}.ui.bottom.aligned.image,.ui.bottom.aligned.image img,.ui.bottom.aligned.images .image,.ui.bottom.aligned.image svg{display:inline-block;vertical-align:bottom}.ui.rounded.image,.ui.rounded.image>*,.ui.rounded.images .image,.ui.rounded.images .image>*{border-radius:.3125em}.ui.bordered.image img,.ui.bordered.images .image,.ui.bordered.images img,.ui.bordered.images svg,.ui.bordered.image svg,img.ui.bordered.image{border:1px solid rgba(0,0,0,.1)}.ui.circular.image,.ui.circular.images{overflow:hidden}.ui.circular.image,.ui.circular.image>*,.ui.circular.images .image,.ui.circular.images .image>*{border-radius:500rem}.ui.fluid.image,.ui.fluid.image img,.ui.fluid.images,.ui.fluid.images img,.ui.fluid.images svg,.ui.fluid.image svg{display:block;width:100%;height:auto}.ui.avatar.image,.ui.avatar.image img,.ui.avatar.images .image,.ui.avatar.images img,.ui.avatar.images svg,.ui.avatar.image svg{margin-right:.25em;display:inline-block;width:2em;height:2em;border-radius:500rem}.ui.spaced.image{display:inline-block!important;margin-left:.5em;margin-right:.5em}.ui[class*="left spaced"].image{margin-left:.5em;margin-right:0}.ui[class*="right spaced"].image{margin-left:0;margin-right:.5em}.ui.floated.image,.ui.floated.images{float:left;margin-right:1em;margin-bottom:1em}.ui.right.floated.image,.ui.right.floated.images{float:right;margin-right:0;margin-bottom:1em;margin-left:1em}.ui.floated.image:last-child,.ui.floated.images:last-child{margin-bottom:0}.ui.centered.image,.ui.centered.images{margin-left:auto;margin-right:auto}.ui.mini.image,.ui.mini.images .image,.ui.mini.images img,.ui.mini.images svg{width:35px;height:auto;font-size:.75rem}.ui.tiny.image,.ui.tiny.images .image,.ui.tiny.images img,.ui.tiny.images svg{width:80px;height:auto;font-size:.875rem}.ui.small.image,.ui.small.images .image,.ui.small.images img,.ui.small.images svg{width:150px;height:auto;font-size:.8em}.ui.medium.image,.ui.medium.images .image,.ui.medium.images img,.ui.medium.images svg{width:300px;height:auto;font-size:1rem}.ui.large.image,.ui.large.images .image,.ui.large.images img,.ui.large.images svg{width:450px;height:auto;font-size:1.125rem}.ui.big.image,.ui.big.images .image,.ui.big.images img,.ui.big.images svg{width:600px;height:auto;font-size:1.25rem}.ui.huge.image,.ui.huge.images .image,.ui.huge.images img,.ui.huge.images svg{width:800px;height:auto;font-size:1.375rem}.ui.massive.image,.ui.massive.images .image,.ui.massive.images img,.ui.massive.images svg{width:960px;height:auto;font-size:1.75rem}.ui.images{font-size:0;margin:0 -.25rem}.ui.images .image,.ui.images img,.ui.images svg{display:inline-block;margin:0 .25rem .5rem}.ui.blured.image{filter:blur(3px)}/*!\n * # Semantic UI - Input\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */.ui.input{position:relative;font-weight:400;font-style:normal;display:-ms-inline-flexbox;display:inline-flex;color:#686868}.ui.input input{margin:0;max-width:100%;-ms-flex:1 0 auto;flex:1 0 auto;outline:none;-webkit-tap-highlight-color:rgba(255,255,255,0);text-align:left;line-height:1.21428571em;font-family:Helvetica Neue,Helvetica,Tahoma,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;padding:.55285714em 1.75em;background:#fff;border:1px solid rgba(34,36,38,.15);color:#686868;border-radius:4%;transition:box-shadow .1s ease,border-color .1s ease;box-shadow:none}.ui.input input::-webkit-input-placeholder{color:#fff}.ui.input input::-moz-placeholder{color:#fff}.ui.input input:-ms-input-placeholder{color:#fff}.ui.disabled.input,.ui.input input[disabled]{opacity:.45}.ui.disabled.input input,.ui.input input[disabled]{pointer-events:none}.ui.input.down input,.ui.input input:active{border-color:rgba(0,0,0,.3);background:#fafafa;color:rgba(0,0,0,.87);box-shadow:none}.ui.loading.loading.input>i.icon:before{border-radius:500rem;border:.2em solid rgba(0,0,0,.1)}.ui.loading.loading.input>i.icon:after,.ui.loading.loading.input>i.icon:before{position:absolute;content:"";top:50%;left:50%;margin:-.625em 0 0 -.625em;width:1.25em;height:1.25em}.ui.loading.loading.input>i.icon:after{animation:button-spin .6s linear;animation-iteration-count:infinite;border-radius:500rem;border-color:#909090 transparent transparent;border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent}.ui.input.focus input,.ui.input input:focus{border-color:#85b7d9;background:#fff;color:rgba(0,0,0,.8);box-shadow:none}.ui.input.focus input::-webkit-input-placeholder,.ui.input input:focus::-webkit-input-placeholder{color:#dbdbdb}.ui.input.focus input::-moz-placeholder,.ui.input input:focus::-moz-placeholder{color:#dbdbdb}.ui.input.focus input:-ms-input-placeholder,.ui.input input:focus:-ms-input-placeholder{color:#dbdbdb}.ui.input.error input{background-color:#fff6f6;border-color:#e0b4b4;color:#9f3a38;box-shadow:none}.ui.input.error input::-webkit-input-placeholder{color:#e7bdbc}.ui.input.error input::-moz-placeholder{color:#e7bdbc}.ui.input.error input:-ms-input-placeholder{color:#e7bdbc!important}.ui.input.error input:focus::-webkit-input-placeholder{color:#da9796}.ui.input.error input:focus::-moz-placeholder{color:#da9796}.ui.input.error input:focus:-ms-input-placeholder{color:#da9796!important}.ui.transparent.input input{border-color:transparent!important;background-color:transparent!important;padding:0!important;box-shadow:none!important}.ui.transparent.icon.input>i.icon{width:1.1em}.ui.transparent.icon.input>input{padding-left:0!important;padding-right:2em!important}.ui.transparent[class*="left icon"].input>input{padding-left:2em!important;padding-right:0!important}.ui.transparent.inverted.input{color:#fff}.ui.transparent.inverted.input input{color:inherit}.ui.transparent.inverted.input input::-webkit-input-placeholder{color:hsla(0,0%,100%,.5)}.ui.transparent.inverted.input input::-moz-placeholder{color:hsla(0,0%,100%,.5)}.ui.transparent.inverted.input input:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.ui.icon.input>i.icon{cursor:default;position:absolute;line-height:1;text-align:center;top:0;right:0;margin:0;height:100%;width:2.42em;opacity:.5;border-radius:0 4% 4% 0;transition:opacity .3s ease}.ui.icon.input>i.icon:not(.link){pointer-events:none}.ui.icon.input input{padding-right:2.42em!important}.ui.icon.input>i.icon:after,.ui.icon.input>i.icon:before{left:0;position:absolute;text-align:center;top:50%;width:100%;margin-top:-.5em}.ui.icon.input>i.link.icon{cursor:pointer}.ui.icon.input>i.circular.icon{top:.35em;right:.5em}.ui[class*="left icon"].input>i.icon{right:auto;left:1px;border-radius:4% 0 0 4%}.ui[class*="left icon"].input>i.circular.icon{right:auto;left:.5em}.ui[class*="left icon"].input>input{padding-left:2.42em!important;padding-right:1.75em!important}.ui.icon.input>input:focus~i.icon{opacity:1}.ui.labeled.input>.label{-ms-flex:0 0 auto;flex:0 0 auto;margin:0;font-size:1em}.ui.labeled.input>.label:not(.corner){padding-top:.66em;padding-bottom:.66em}.ui.labeled.input:not([class*="corner labeled"]) .label:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ui.labeled.input:not([class*="corner labeled"]) .label:first-child+input{border-top-left-radius:0;border-bottom-left-radius:0;border-left-color:transparent}.ui.labeled.input:not([class*="corner labeled"]) .label:first-child+input:focus{border-left-color:#85b7d9}.ui[class*="right labeled"].input input{border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right-color:transparent!important}.ui[class*="right labeled"].input input:focus{border-right-color:#85b7d9!important}.ui.labeled.input .corner.label{top:1px;right:1px;font-size:1.125em;border-radius:0 4% 0 0}.ui[class*="corner labeled"]:not([class*="left corner labeled"]).labeled.input input{padding-right:2.5em!important}.ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"])>input{padding-right:3.25em!important}.ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"])>.icon{margin-right:1.25em}.ui[class*="left corner labeled"].labeled.input input{padding-left:2.5em!important}.ui[class*="left corner labeled"].icon.input>input{padding-left:3.25em!important}.ui[class*="left corner labeled"].icon.input>.icon{margin-left:1.25em}.ui.input>.ui.corner.label{top:1px;right:1px}.ui.input>.ui.left.corner.label{right:auto;left:1px}.ui.action.input>.button,.ui.action.input>.buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:0 0 auto;flex:0 0 auto}.ui.action.input>.button,.ui.action.input>.buttons>.button{padding-top:.66em;padding-bottom:.66em;margin:0}.ui.action.input:not([class*="left action"])>input{border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right-color:transparent!important}.ui.action.input:not([class*="left action"])>.button:not(:first-child),.ui.action.input:not([class*="left action"])>.buttons:not(:first-child)>.button,.ui.action.input:not([class*="left action"])>.dropdown:not(:first-child){border-radius:0}.ui.action.input:not([class*="left action"])>.button:last-child,.ui.action.input:not([class*="left action"])>.buttons:last-child>.button,.ui.action.input:not([class*="left action"])>.dropdown:last-child{border-radius:0 4% 4% 0}.ui.action.input:not([class*="left action"]) input:focus{border-right-color:#85b7d9!important}.ui[class*="left action"].input>input{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-left-color:transparent!important}.ui[class*="left action"].input>.button,.ui[class*="left action"].input>.buttons>.button,.ui[class*="left action"].input>.dropdown{border-radius:0}.ui[class*="left action"].input>.button:first-child,.ui[class*="left action"].input>.buttons:first-child>.button,.ui[class*="left action"].input>.dropdown:first-child{border-radius:4% 0 0 4%}.ui[class*="left action"].input>input:focus{border-left-color:#85b7d9!important}.ui.inverted.input input{border:none}.ui.fluid.input{display:-ms-flexbox;display:flex}.ui.fluid.input>input{width:0!important}.ui.mini.input{font-size:.75em}.ui.small.input{font-size:.875em}.ui.input{font-size:1em}.ui.large.input{font-size:1.125em}.ui.big.input{font-size:1.25em}.ui.huge.input{font-size:1.375em}.ui.massive.input{font-size:1.75em}.ui[class*="right labeled"].input input+.label{border-top-right-radius:.3em;border-bottom-right-radius:.3em;border-top-left-radius:0;border-bottom-left-radius:0}/*!\n * # Semantic UI - Label\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */.ui.label{display:inline-block;line-height:1;vertical-align:baseline;margin:0 .25em;background-color:#e8e8e8;background-image:none;padding:.5833em .833em;color:#dfdfdf;text-transform:none;font-weight:400;border:0 solid transparent;border-radius:0;transition:background .1s ease}.ui.label:first-child{margin-left:0}.ui.label:last-child{margin-right:0}.ui.label>a,a.ui.label{cursor:pointer}.ui.label>a{color:inherit;opacity:.5;transition:opacity .1s ease}.ui.label>a:hover{opacity:1}.ui.label>img{width:auto!important;vertical-align:middle;height:2.1666em!important}.ui.label>.icon{width:auto;margin:0 .75em 0 0}.ui.label>.detail{display:inline-block;vertical-align:top;font-weight:700;margin-left:1em;opacity:.8}.ui.label>.detail .icon{margin:0 .25em 0 0}.ui.label>.close.icon,.ui.label>.delete.icon{cursor:pointer;margin-right:0;margin-left:.5em;font-size:.875em;opacity:.5;transition:background .1s ease}.ui.label>.delete.icon:hover{opacity:1}.ui.labels>.label{margin:0 .5em .5em 0}.ui.header>.ui.label{margin-top:-.29165em}.ui.attached.segment>.ui.top.left.attached.label,.ui.bottom.attached.segment>.ui.top.left.attached.label{border-top-left-radius:0}.ui.attached.segment>.ui.top.right.attached.label,.ui.bottom.attached.segment>.ui.top.right.attached.label{border-top-right-radius:0}.ui.top.attached.segment>.ui.bottom.left.attached.label{border-bottom-left-radius:0}.ui.top.attached.segment>.ui.bottom.right.attached.label{border-bottom-right-radius:0}.ui.top.attached.label+[class*="right floated"]+*,.ui.top.attached.label:first-child+:not(.attached){margin-top:2rem!important}.ui.bottom.attached.label:first-child~:last-child:not(.attached){margin-top:0;margin-bottom:2rem!important}.ui.image.label{width:auto!important;margin-top:0;margin-bottom:0;max-width:9999px;vertical-align:baseline;text-transform:none;background:#e8e8e8;padding:.5833em .833em .5833em .5em;border-radius:0;box-shadow:none}.ui.image.label img{display:inline-block;vertical-align:top;height:2.1666em;margin:-.5833em .5em -.5833em -.5em;border-radius:0 0 0 0}.ui.image.label .detail{background:#dfdfdf;margin:-.5833em -.833em -.5833em .5em;padding:.5833em .833em;border-radius:0 0 0 0}.ui.tag.label,.ui.tag.labels .label{margin-left:1em;position:relative;padding-left:1.5em;padding-right:1.5em;border-radius:0 0 0 0;transition:none}.ui.tag.label:before,.ui.tag.labels .label:before{position:absolute;-ms-transform:translateY(-50%) translateX(50%) rotate(-45deg);transform:translateY(-50%) translateX(50%) rotate(-45deg);top:50%;right:100%;content:"";background-color:inherit;background-image:none;width:1.56em;height:1.56em;transition:none}.ui.tag.label:after,.ui.tag.labels .label:after{position:absolute;content:"";top:50%;left:-.25em;margin-top:-.25em;background-color:#fff!important;width:.5em;height:.5em;box-shadow:0 -1px 1px 0 rgba(0,0,0,.3);border-radius:500rem}.ui.corner.label{margin:0;padding:0;text-align:center;border-color:#e8e8e8;width:4em;height:4em;z-index:1}.ui.corner.label,.ui.corner.label:after{position:absolute;top:0;right:0;transition:border-color .1s ease;background-color:transparent!important}.ui.corner.label:after{content:"";z-index:-1;width:0;height:0;border-top:0 solid transparent;border-right:4em solid transparent;border-bottom:4em solid transparent;border-left:0 solid transparent;border-right-color:inherit}.ui.corner.label .icon{cursor:default;position:relative;top:1.125em;left:1.375em;font-size:1.125em;margin:0}.ui.left.corner.label,.ui.left.corner.label:after{right:auto;left:0}.ui.left.corner.label:after{border-top:4em solid transparent;border-right:4em solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;border-top-color:inherit}.ui.left.corner.label .icon{left:-1.375em}.ui.segment>.ui.corner.label{top:-1px;right:-1px}.ui.segment>.ui.left.corner.label{right:auto;left:-1px}.ui.ribbon.label{position:relative;margin:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;border-radius:0 0 0 0;border-color:rgba(0,0,0,.15)}.ui.ribbon.label:after{position:absolute;content:"";top:100%;left:0;background-color:transparent!important;border-style:solid;border-width:0 1.2em 1.2em 0;border-color:transparent;border-right-color:inherit;width:0;height:0}.ui.ribbon.label{left:calc(-1rem - 1.2em);margin-right:-1.2em;padding-left:calc(1rem + 1.2em);padding-right:1.2em}.ui[class*="right ribbon"].label{left:calc(100% + 1rem + 1.2em);padding-left:1.2em;padding-right:calc(1rem + 1.2em);text-align:left;-ms-transform:translateX(-100%);transform:translateX(-100%);border-radius:0 0 0 0}.ui[class*="right ribbon"].label:after{left:auto;right:0;border-style:solid;border-width:1.2em 1.2em 0 0;border-color:transparent;border-top-color:inherit}.ui.card .image>.ribbon.label,.ui.image>.ribbon.label{position:absolute;top:1rem}.ui.card .image>.ui.ribbon.label,.ui.image>.ui.ribbon.label{left:calc(.05rem - 1.2em)}.ui.card .image>.ui[class*="right ribbon"].label,.ui.image>.ui[class*="right ribbon"].label{left:calc(100% + -.05rem + 1.2em);padding-left:.833em}.ui.table td>.ui.ribbon.label{left:-1.95em}.ui.table td>.ui[class*="right ribbon"].label{left:calc(100% + .75em + 1.2em);padding-left:.833em}.ui.attached.label,.ui[class*="top attached"].label{width:100%;position:absolute;margin:0;top:0;left:0;padding:.75em 1em;border-radius:.375rem .375rem 0 0}.ui[class*="bottom attached"].label{top:auto;bottom:0;border-radius:0 0 .375rem .375rem}.ui[class*="top left attached"].label{width:auto;margin-top:0!important;border-radius:.375rem 0 0 0}.ui[class*="top right attached"].label{width:auto;left:auto;right:0;border-radius:0 .375rem 0 0}.ui[class*="bottom left attached"].label{width:auto;top:auto;bottom:0;border-radius:0 0 0 .375rem}.ui[class*="bottom right attached"].label{top:auto;bottom:0;left:auto;right:0;width:auto;border-radius:0 0 .375rem 0}.ui.label.disabled{opacity:.5}a.ui.label:hover,a.ui.labels .label:hover{background-color:#e0e0e0;border-color:#e0e0e0;background-image:none;color:rgba(0,0,0,.8)}.ui.labels a.label:hover:before,a.ui.label:hover:before{color:rgba(0,0,0,.8)}.ui.active.label{border-color:#d0d0d0}.ui.active.label,.ui.active.label:before{background-color:#d0d0d0;background-image:none;color:rgba(0,0,0,.95)}a.ui.active.label:hover,a.ui.labels .active.label:hover{border-color:#c8c8c8}.ui.labels a.active.label:ActiveHover:before,a.ui.active.label:ActiveHover:before,a.ui.active.label:hover,a.ui.labels .active.label:hover{background-color:#c8c8c8;background-image:none;color:rgba(0,0,0,.95)}.ui.label.visible:not(.dropdown),.ui.labels.visible .label{display:inline-block!important}.ui.label.hidden,.ui.labels.hidden .label{display:none!important}.ui.red.label,.ui.red.labels .label{background-color:#e74731!important;border-color:#e74731!important;color:#fff!important}.ui.red.labels .label:hover,a.ui.red.label:hover{background-color:#ee2b10!important;border-color:#ee2b10!important;color:#fff!important}.ui.red.corner.label,.ui.red.corner.label:hover{background-color:transparent!important}.ui.red.ribbon.label{border-color:#cd2e18!important}.ui.basic.red.label{background-color:#fff!important;color:#e74731!important;border-color:#e74731!important}.ui.basic.red.labels a.label:hover,a.ui.basic.red.label:hover{background-color:#fff!important;color:#ee2b10!important;border-color:#ee2b10!important}.ui.orange.label,.ui.orange.labels .label{background-color:#fe6150!important;border-color:#fe6150!important;color:#fff!important}.ui.orange.labels .label:hover,a.ui.orange.label:hover{background-color:#ff4935!important;border-color:#ff4935!important;color:#fff!important}.ui.orange.corner.label,.ui.orange.corner.label:hover{background-color:transparent!important}.ui.orange.ribbon.label{border-color:#fe331d!important}.ui.basic.orange.label{background-color:#fff!important;color:#fe6150!important;border-color:#fe6150!important}.ui.basic.orange.labels a.label:hover,a.ui.basic.orange.label:hover{background-color:#fff!important;color:#ff4935!important;border-color:#ff4935!important}.ui.yellow.label,.ui.yellow.labels .label{background-color:#f8b61c!important;border-color:#f8b61c!important;color:#fff!important}.ui.yellow.labels .label:hover,a.ui.yellow.label:hover{background-color:#ffca48!important;border-color:#ffca48!important;color:#fff!important}.ui.yellow.corner.label,.ui.yellow.corner.label:hover{background-color:transparent!important}.ui.yellow.ribbon.label{border-color:#da9b07!important}.ui.basic.yellow.label{background-color:#fff!important;color:#f8b61c!important;border-color:#f8b61c!important}.ui.basic.yellow.labels a.label:hover,a.ui.basic.yellow.label:hover{background-color:#fff!important;color:#ffca48!important;border-color:#ffca48!important}.ui.olive.label,.ui.olive.labels .label{background-color:#b5cc18!important;border-color:#b5cc18!important;color:#fff!important}.ui.olive.labels .label:hover,a.ui.olive.label:hover{background-color:#a7bd0d!important;border-color:#a7bd0d!important;color:#fff!important}.ui.olive.corner.label,.ui.olive.corner.label:hover{background-color:transparent!important}.ui.olive.ribbon.label{border-color:#1a8478!important}.ui.basic.olive.label{background-color:#fff!important;color:#b5cc18!important;border-color:#b5cc18!important}.ui.basic.olive.labels a.label:hover,a.ui.basic.olive.label:hover{background-color:#fff!important;color:#a7bd0d!important;border-color:#a7bd0d!important}.ui.green.label,.ui.green.labels .label{background-color:#22af9f!important;border-color:#22af9f!important;color:#fff!important}.ui.green.labels .label:hover,a.ui.green.label:hover{background-color:#18a090!important;border-color:#18a090!important;color:#fff!important}.ui.green.corner.label,.ui.green.corner.label:hover{background-color:transparent!important}.ui.green.ribbon.label{border-color:#1a8478!important}.ui.basic.green.label{background-color:#fff!important;color:#22af9f!important;border-color:#22af9f!important}.ui.basic.green.labels a.label:hover,a.ui.basic.green.label:hover{background-color:#fff!important;color:#18a090!important;border-color:#18a090!important}.ui.teal.label,.ui.teal.labels .label{background-color:#00b5ad!important;border-color:#00b5ad!important;color:#fff!important}.ui.teal.labels .label:hover,a.ui.teal.label:hover{background-color:#009c95!important;border-color:#009c95!important;color:#fff!important}.ui.teal.corner.label,.ui.teal.corner.label:hover{background-color:transparent!important}.ui.teal.ribbon.label{border-color:#00827c!important}.ui.basic.teal.label{background-color:#fff!important;color:#00b5ad!important;border-color:#00b5ad!important}.ui.basic.teal.labels a.label:hover,a.ui.basic.teal.label:hover{background-color:#fff!important;color:#009c95!important;border-color:#009c95!important}.ui.blue.label,.ui.blue.labels .label{background-color:#4f86c5!important;border-color:#4f86c5!important;color:#fff!important}.ui.blue.labels .label:hover,a.ui.blue.label:hover{background-color:#83aad6!important;border-color:#83aad6!important;color:#fff!important}.ui.blue.corner.label,.ui.blue.corner.label:hover{background-color:transparent!important}.ui.blue.ribbon.label{border-color:#386da9!important}.ui.basic.blue.label{background-color:#fff!important;color:#4f86c5!important;border-color:#4f86c5!important}.ui.basic.blue.labels a.label:hover,a.ui.basic.blue.label:hover{background-color:#fff!important;color:#83aad6!important;border-color:#83aad6!important}.ui.violet.label,.ui.violet.labels .label{background-color:#6435c9!important;border-color:#6435c9!important;color:#fff!important}.ui.violet.labels .label:hover,a.ui.violet.label:hover{background-color:#5829bb!important;border-color:#5829bb!important;color:#fff!important}.ui.violet.corner.label,.ui.violet.corner.label:hover{background-color:transparent!important}.ui.violet.ribbon.label{border-color:#502aa1!important}.ui.basic.violet.label{background-color:#fff!important;color:#6435c9!important;border-color:#6435c9!important}.ui.basic.violet.labels a.label:hover,a.ui.basic.violet.label:hover{background-color:#fff!important;color:#5829bb!important;border-color:#5829bb!important}.ui.purple.label,.ui.purple.labels .label{background-color:#a333c8!important;border-color:#a333c8!important;color:#fff!important}.ui.purple.labels .label:hover,a.ui.purple.label:hover{background-color:#9627ba!important;border-color:#9627ba!important;color:#fff!important}.ui.purple.corner.label,.ui.purple.corner.label:hover{background-color:transparent!important}.ui.purple.ribbon.label{border-color:#82299f!important}.ui.basic.purple.label{background-color:#fff!important;color:#a333c8!important;border-color:#a333c8!important}.ui.basic.purple.labels a.label:hover,a.ui.basic.purple.label:hover{background-color:#fff!important;color:#9627ba!important;border-color:#9627ba!important}.ui.pink.label,.ui.pink.labels .label{background-color:#e03997!important;border-color:#e03997!important;color:#fff!important}.ui.pink.labels .label:hover,a.ui.pink.label:hover{background-color:#e61a8d!important;border-color:#e61a8d!important;color:#fff!important}.ui.pink.corner.label,.ui.pink.corner.label:hover{background-color:transparent!important}.ui.pink.ribbon.label{border-color:#c71f7e!important}.ui.basic.pink.label{background-color:#fff!important;color:#e03997!important;border-color:#e03997!important}.ui.basic.pink.labels a.label:hover,a.ui.basic.pink.label:hover{background-color:#fff!important;color:#e61a8d!important;border-color:#e61a8d!important}.ui.brown.label,.ui.brown.labels .label{background-color:#a5673f!important;border-color:#a5673f!important;color:#fff!important}.ui.brown.labels .label:hover,a.ui.brown.label:hover{background-color:#975b33!important;border-color:#975b33!important;color:#fff!important}.ui.brown.corner.label,.ui.brown.corner.label:hover{background-color:transparent!important}.ui.brown.ribbon.label{border-color:#805031!important}.ui.basic.brown.label{background-color:#fff!important;color:#a5673f!important;border-color:#a5673f!important}.ui.basic.brown.labels a.label:hover,a.ui.basic.brown.label:hover{background-color:#fff!important;color:#975b33!important;border-color:#975b33!important}.ui.grey.label,.ui.grey.labels .label{background-color:#909090!important;border-color:#909090!important;color:#fff!important}.ui.grey.labels .label:hover,a.ui.grey.label:hover{background-color:#9d9d9d!important;border-color:#9d9d9d!important;color:#fff!important}.ui.grey.corner.label,.ui.grey.corner.label:hover{background-color:transparent!important}.ui.grey.ribbon.label{border-color:#805031!important}.ui.basic.grey.label{background-color:#fff!important;color:#909090!important;border-color:#909090!important}.ui.basic.grey.labels a.label:hover,a.ui.basic.grey.label:hover{background-color:#fff!important;color:#9d9d9d!important;border-color:#9d9d9d!important}.ui.black.label,.ui.black.labels .label{background-color:#1b1c1d!important;border-color:#1b1c1d!important;color:#fff!important}.ui.black.labels .label:hover,a.ui.black.label:hover{background-color:#27292a!important;border-color:#27292a!important;color:#fff!important}.ui.black.corner.label,.ui.black.corner.label:hover{background-color:transparent!important}.ui.black.ribbon.label{border-color:#805031!important}.ui.basic.black.label{background-color:#fff!important;color:#1b1c1d!important;border-color:#1b1c1d!important}.ui.basic.black.labels a.label:hover,a.ui.basic.black.label:hover{background-color:#fff!important;color:#27292a!important;border-color:#27292a!important}.ui.basic.label{background:none #fff;border:.1em solid #c1c1c1;color:rgba(0,0,0,.87);box-shadow:none}a.ui.basic.label:hover{text-decoration:none;background:none #fff;color:#1e70bf;box-shadow:.1em solid #c1c1c1;box-shadow:none}.ui.basic.pointing.label:before{border-color:inherit}.ui.fluid.labels>.label,.ui.label.fluid{width:100%;box-sizing:border-box}.ui.inverted.label,.ui.inverted.labels .label{color:hsla(0,0%,100%,.9)!important}.ui.horizontal.label,.ui.horizontal.labels .label{margin:0 .5em 0 0;padding:.4em .833em;min-width:3em;text-align:center}.ui.circular.label,.ui.circular.labels .label{min-width:2em;min-height:2em;padding:.5em!important;line-height:1em;text-align:center;border-radius:500rem}.ui.empty.circular.label,.ui.empty.circular.labels .label{min-width:0;min-height:0;overflow:hidden;width:.5em;height:.5em;vertical-align:baseline}.ui.pointing.label{position:relative}.ui.attached.pointing.label{position:absolute}.ui.pointing.label:before{background-color:inherit;background-image:inherit;border-width:none;border-style:solid;border-color:inherit;position:absolute;content:"";-ms-transform:rotate(45deg);transform:rotate(45deg);background-image:none;z-index:2;width:.6666em;height:.6666em;transition:background .1s ease}.ui.pointing.label,.ui[class*="pointing above"].label{margin-top:1em}.ui.pointing.label:before,.ui[class*="pointing above"].label:before{border-width:1px 0 0 1px;-ms-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);top:0;left:50%}.ui[class*="bottom pointing"].label,.ui[class*="pointing below"].label{margin-top:0;margin-bottom:1em}.ui[class*="bottom pointing"].label:before,.ui[class*="pointing below"].label:before{border-width:0 1px 1px 0;top:auto;right:auto;-ms-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);top:100%;left:50%}.ui[class*="left pointing"].label{margin-top:0;margin-left:.6666em}.ui[class*="left pointing"].label:before{border-width:0 0 1px 1px;-ms-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);bottom:auto;right:auto;top:50%;left:0}.ui[class*="right pointing"].label{margin-top:0;margin-right:.6666em}.ui[class*="right pointing"].label:before{border-width:1px 1px 0 0;-ms-transform:translateX(50%) translateY(-50%) rotate(45deg);transform:translateX(50%) translateY(-50%) rotate(45deg);top:50%;right:0;bottom:auto;left:auto}.ui.basic.pointing.label:before,.ui.basic[class*="pointing above"].label:before{margin-top:-1px}.ui.basic[class*="bottom pointing"].label:before,.ui.basic[class*="pointing below"].label:before{bottom:auto;top:100%;margin-top:1px}.ui.basic[class*="left pointing"].label:before{top:50%;left:-1px}.ui.basic[class*="right pointing"].label:before{top:50%;right:-1px}.ui.floating.label{position:absolute;z-index:100;top:-1em;left:100%;margin:0 0 0 -1.5em!important}.ui.mini.label,.ui.mini.labels .label{font-size:1.125rem}.ui.tiny.label,.ui.tiny.labels .label{font-size:1.25rem}.ui.small.label,.ui.small.labels .label{font-size:1.375rem}.ui.label,.ui.labels .label{font-size:1.5rem}.ui.large.label,.ui.large.labels .label{font-size:1rem}.ui.big.label,.ui.big.labels .label{font-size:1.25rem}.ui.huge.label,.ui.huge.labels .label{font-size:1.375rem}.ui.massive.label,.ui.massive.labels .label{font-size:1.75rem}/*!\n * # Semantic UI - Form\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */.ui.form{position:relative;max-width:100%}.ui.form>p{margin:1em 0}.ui.form .field{clear:both;margin:0 0 1em}.ui.form .field:last-child,.ui.form .fields:last-child .field{margin-bottom:0}.ui.form .fields .field{clear:both;margin:0}.ui.form .field>label{display:block;margin:0 0 .5rem;color:#686868;font-size:1em;font-weight:700;text-transform:none}.ui.form input:not([type]),.ui.form input[type=date],.ui.form input[type=datetime-local],.ui.form input[type=email],.ui.form input[type=file],.ui.form input[type=number],.ui.form input[type=password],.ui.form input[type=search],.ui.form input[type=tel],.ui.form input[type=text],.ui.form input[type=time],.ui.form input[type=url],.ui.form textarea{width:100%;vertical-align:top}.ui.form ::-webkit-datetime-edit,.ui.form ::-webkit-inner-spin-button{height:1.21428571em}.ui.form input:not([type]),.ui.form input[type=date],.ui.form input[type=datetime-local],.ui.form input[type=email],.ui.form input[type=file],.ui.form input[type=number],.ui.form input[type=password],.ui.form input[type=search],.ui.form input[type=tel],.ui.form input[type=text],.ui.form input[type=time],.ui.form input[type=url]{font-family:Helvetica Neue,Helvetica,Tahoma,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;margin:0;outline:none;-webkit-appearance:none;tap-highlight-color:hsla(0,0%,100%,0);line-height:1.21428571em;padding:.5em;font-size:1em;background:#fff;border:1px solid #c1c1c1;color:rgba(0,0,0,.87);border-radius:.3em;box-shadow:inset 0 0 0 0 transparent;transition:color .1s ease,border-color .1s ease}.ui.form textarea{margin:0;-webkit-appearance:none;tap-highlight-color:hsla(0,0%,100%,0);padding:.5em;background:#fff;border:1px solid #c1c1c1;outline:none;color:rgba(0,0,0,.87);border-radius:.3em;box-shadow:inset 0 0 0 0 transparent;transition:color .1s ease,border-color .1s ease;font-size:1em;line-height:1.5em;resize:vertical}.ui.form textarea:not([rows]){height:12em;min-height:8em;max-height:24em}.ui.form input[type=checkbox],.ui.form textarea{vertical-align:top}.ui.form input.attached{width:auto}.ui.form select{display:block;height:auto;width:100%;border:1px solid #c1c1c1;border-radius:.3em;box-shadow:inset 0 0 0 0 transparent;padding:.5em;color:#686868;transition:color .1s ease,border-color .1s ease}.ui.form .field>.selection.dropdown{width:100%}.ui.form .field>.selection.dropdown>.dropdown.icon{float:right}.ui.form .inline.field>.selection.dropdown,.ui.form .inline.fields .field>.selection.dropdown{width:auto}.ui.form .inline.field>.selection.dropdown>.dropdown.icon,.ui.form .inline.fields .field>.selection.dropdown>.dropdown.icon{float:none}.ui.form .field .ui.input,.ui.form .fields .field .ui.input,.ui.form .wide.field .ui.input{width:100%}.ui.form .inline.field:not(.wide) .ui.input,.ui.form .inline.fields .field:not(.wide) .ui.input{width:auto;vertical-align:middle}.ui.form .field .ui.input input,.ui.form .fields .field .ui.input input{width:auto}.ui.form .eight.fields .ui.input input,.ui.form .five.fields .ui.input input,.ui.form .four.fields .ui.input input,.ui.form .nine.fields .ui.input input,.ui.form .seven.fields .ui.input input,.ui.form .six.fields .ui.input input,.ui.form .ten.fields .ui.input input,.ui.form .three.fields .ui.input input,.ui.form .two.fields .ui.input input,.ui.form .wide.field .ui.input input{-ms-flex:1 0 auto;flex:1 0 auto;width:0}.ui.form .error.message,.ui.form .success.message,.ui.form .warning.message{display:none}.ui.form .message:first-child{margin-top:0}.ui.form .field .prompt.label{white-space:normal;background:#fff!important;border:1px solid #e74731!important;color:#686868!important}.ui.form .inline.field .prompt,.ui.form .inline.fields .field .prompt{vertical-align:top;margin:-.25em 0 -.5em .5em}.ui.form .inline.field .prompt:before,.ui.form .inline.fields .field .prompt:before{border-width:0 0 1px 1px;bottom:auto;right:auto;top:50%;left:0}.ui.form .field.field input:-webkit-autofill{box-shadow:inset 0 0 0 100px ivory!important;border-color:#e5dfa1!important}.ui.form .field.field input:-webkit-autofill:focus{box-shadow:inset 0 0 0 100px ivory!important;border-color:#d5c315!important}.ui.form .error.error input:-webkit-autofill{box-shadow:inset 0 0 0 100px #fffaf0!important;border-color:#f8b61c!important}.ui.form ::-webkit-input-placeholder{color:hsla(0,0%,75%,.87)}.ui.form :-ms-input-placeholder{color:hsla(0,0%,75%,.87)}.ui.form ::-moz-placeholder{color:hsla(0,0%,75%,.87)}.ui.form :focus::-webkit-input-placeholder{color:hsla(0,0%,45%,.87)}.ui.form :focus:-ms-input-placeholder{color:hsla(0,0%,45%,.87)}.ui.form :focus::-moz-placeholder{color:hsla(0,0%,45%,.87)}.ui.form .error ::-webkit-input-placeholder{color:#cecece}.ui.form .error :-ms-input-placeholder{color:#cecece!important}.ui.form .error ::-moz-placeholder{color:#cecece}.ui.form .error :focus::-webkit-input-placeholder{color:#b4b4b4}.ui.form .error :focus:-ms-input-placeholder{color:#b4b4b4!important}.ui.form .error :focus::-moz-placeholder{color:#b4b4b4}.ui.form input:not([type]):focus,.ui.form input[type=date]:focus,.ui.form input[type=datetime-local]:focus,.ui.form input[type=email]:focus,.ui.form input[type=file]:focus,.ui.form input[type=number]:focus,.ui.form input[type=password]:focus,.ui.form input[type=search]:focus,.ui.form input[type=tel]:focus,.ui.form input[type=text]:focus,.ui.form input[type=time]:focus,.ui.form input[type=url]:focus,.ui.form textarea:focus{color:rgba(0,0,0,.95);border-color:#686868;border-radius:.3em;background:#fff;box-shadow:inset 0 0 0 0 rgba(34,36,38,.35)}.ui.form textarea:focus{-webkit-appearance:none}.ui.form.success .success.message:not(:empty){display:block}.ui.form.success .compact.success.message:not(:empty){display:inline-block}.ui.form.success .icon.success.message:not(:empty){display:-ms-flexbox;display:flex}.ui.form.warning .warning.message:not(:empty){display:block}.ui.form.warning .compact.warning.message:not(:empty){display:inline-block}.ui.form.warning .icon.warning.message:not(:empty){display:-ms-flexbox;display:flex}.ui.form.error .error.message:not(:empty){display:block}.ui.form.error .compact.error.message:not(:empty){display:inline-block}.ui.form.error .icon.error.message:not(:empty){display:-ms-flexbox;display:flex}.ui.form .field.error .input,.ui.form .field.error label,.ui.form .fields.error .field .input,.ui.form .fields.error .field label{color:#686868}.ui.form .field.error .corner.label,.ui.form .fields.error .field .corner.label{border-color:#686868;color:#fff}.ui.form .field.error input:not([type]),.ui.form .field.error input[type=date],.ui.form .field.error input[type=datetime-local],.ui.form .field.error input[type=email],.ui.form .field.error input[type=file],.ui.form .field.error input[type=number],.ui.form .field.error input[type=password],.ui.form .field.error input[type=search],.ui.form .field.error input[type=tel],.ui.form .field.error input[type=text],.ui.form .field.error input[type=time],.ui.form .field.error input[type=url],.ui.form .field.error select,.ui.form .field.error textarea,.ui.form .fields.error .field input:not([type]),.ui.form .fields.error .field input[type=date],.ui.form .fields.error .field input[type=datetime-local],.ui.form .fields.error .field input[type=email],.ui.form .fields.error .field input[type=file],.ui.form .fields.error .field input[type=number],.ui.form .fields.error .field input[type=password],.ui.form .fields.error .field input[type=search],.ui.form .fields.error .field input[type=tel],.ui.form .fields.error .field input[type=text],.ui.form .fields.error .field input[type=time],.ui.form .fields.error .field input[type=url],.ui.form .fields.error .field select,.ui.form .fields.error .field textarea{background:#fff;border-color:#e74731;color:#686868;border-radius:"";box-shadow:none}.ui.form .field.error input:not([type]):focus,.ui.form .field.error input[type=date]:focus,.ui.form .field.error input[type=datetime-local]:focus,.ui.form .field.error input[type=email]:focus,.ui.form .field.error input[type=file]:focus,.ui.form .field.error input[type=number]:focus,.ui.form .field.error input[type=password]:focus,.ui.form .field.error input[type=search]:focus,.ui.form .field.error input[type=tel]:focus,.ui.form .field.error input[type=text]:focus,.ui.form .field.error input[type=time]:focus,.ui.form .field.error input[type=url]:focus,.ui.form .field.error select:focus,.ui.form .field.error textarea:focus{background:#fff;border-color:#e74731;color:#686868;-webkit-appearance:none;box-shadow:none}.ui.form .field.error select{-webkit-appearance:menulist-button}.ui.form .field.error .ui.dropdown,.ui.form .field.error .ui.dropdown .item,.ui.form .field.error .ui.dropdown .text,.ui.form .fields.error .field .ui.dropdown,.ui.form .fields.error .field .ui.dropdown .item{background:#fff;color:#686868}.ui.form .field.error .ui.dropdown,.ui.form .field.error .ui.dropdown:hover,.ui.form .fields.error .field .ui.dropdown,.ui.form .fields.error .field .ui.dropdown:hover{border-color:#e74731!important}.ui.form .field.error .ui.dropdown:hover .menu,.ui.form .fields.error .field .ui.dropdown:hover .menu{border-color:#e74731}.ui.form .field.error .ui.multiple.selection.dropdown>.label,.ui.form .fields.error .field .ui.multiple.selection.dropdown>.label{background-color:#eacbcb;color:#e74731}.ui.form .field.error .ui.dropdown .menu .item:hover,.ui.form .field.error .ui.dropdown .menu .selected.item,.ui.form .fields.error .field .ui.dropdown .menu .item:hover,.ui.form .fields.error .field .ui.dropdown .menu .selected.item{background-color:#fbe7e7}.ui.form .field.error .ui.dropdown .menu .active.item,.ui.form .fields.error .field .ui.dropdown .menu .active.item{background-color:#fdcfcf!important}.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box:before,.ui.form .field.error .checkbox:not(.toggle):not(.slider) label:before,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box:before,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label:before{background:#fff;border-color:#e74731}.ui.form .field.error .checkbox .box:after,.ui.form .field.error .checkbox label:after,.ui.form .fields.error .field .checkbox .box:after,.ui.form .fields.error .field .checkbox label:after{color:#686868}.ui.form .disabled.field,.ui.form .disabled.fields .field,.ui.form .field :disabled{pointer-events:none;opacity:.45}.ui.form .field.disabled>label,.ui.form .fields.disabled>label{opacity:.45}.ui.form .field.disabled :disabled{opacity:1}.ui.loading.form{position:relative;cursor:default;pointer-events:none}.ui.loading.form:before{position:absolute;content:"";top:0;left:0;background:hsla(0,0%,100%,.8);width:100%;height:100%;z-index:100}.ui.loading.form:after{position:absolute;content:"";top:50%;left:50%;margin:-1.5em 0 0 -1.5em;width:3em;height:3em;animation:form-spin .6s linear;animation-iteration-count:infinite;border-radius:500rem;border-color:#909090 rgba(0,0,0,.1) rgba(0,0,0,.1);border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent;visibility:visible;z-index:101}@keyframes form-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ui.form .required.field>.checkbox:after,.ui.form .required.field>label:after,.ui.form .required.fields.grouped>label:after,.ui.form .required.fields:not(.grouped)>.field>.checkbox:after,.ui.form .required.fields:not(.grouped)>.field>label:after{margin:-.2em 0 0 .2em;content:"*";color:#e74731}.ui.form .required.field>label:after,.ui.form .required.fields.grouped>label:after,.ui.form .required.fields:not(.grouped)>.field>label:after{display:inline-block;vertical-align:top}.ui.form .required.field>.checkbox:after,.ui.form .required.fields:not(.grouped)>.field>.checkbox:after{position:absolute;top:0;left:100%}.ui.form .inverted.segment .ui.checkbox .box,.ui.form .inverted.segment .ui.checkbox label,.ui.form .inverted.segment label,.ui.inverted.form .inline.field>label,.ui.inverted.form .inline.field>p,.ui.inverted.form .inline.fields .field>label,.ui.inverted.form .inline.fields .field>p,.ui.inverted.form .inline.fields>label,.ui.inverted.form .ui.checkbox .box,.ui.inverted.form .ui.checkbox label,.ui.inverted.form label{color:#686868}.ui.inverted.form input:not([type]),.ui.inverted.form input[type=date],.ui.inverted.form input[type=datetime-local],.ui.inverted.form input[type=email],.ui.inverted.form input[type=file],.ui.inverted.form input[type=number],.ui.inverted.form input[type=password],.ui.inverted.form input[type=search],.ui.inverted.form input[type=tel],.ui.inverted.form input[type=text],.ui.inverted.form input[type=time],.ui.inverted.form input[type=url]{background:#fff;border-color:hsla(0,0%,100%,.1);color:rgba(0,0,0,.87);box-shadow:none}.ui.form .grouped.fields{display:block;margin:0 0 1em}.ui.form .grouped.fields:last-child{margin-bottom:0}.ui.form .grouped.fields>label{margin:0 0 .5rem;color:#686868;font-size:1em;font-weight:700;text-transform:none}.ui.form .grouped.fields .field,.ui.form .grouped.inline.fields .field{display:block;margin:.5em 0;padding:0}.ui.form .fields{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0 -.5em 1em}.ui.form .fields>.field{-ms-flex:0 1 auto;flex:0 1 auto;padding-left:.5em;padding-right:.5em}.ui.form .fields>.field:first-child{border-left:none;box-shadow:none}.ui.form .two.fields>.field,.ui.form .two.fields>.fields{width:50%}.ui.form .three.fields>.field,.ui.form .three.fields>.fields{width:33.33333333%}.ui.form .four.fields>.field,.ui.form .four.fields>.fields{width:25%}.ui.form .five.fields>.field,.ui.form .five.fields>.fields{width:20%}.ui.form .six.fields>.field,.ui.form .six.fields>.fields{width:16.66666667%}.ui.form .seven.fields>.field,.ui.form .seven.fields>.fields{width:14.28571429%}.ui.form .eight.fields>.field,.ui.form .eight.fields>.fields{width:12.5%}.ui.form .nine.fields>.field,.ui.form .nine.fields>.fields{width:11.11111111%}.ui.form .ten.fields>.field,.ui.form .ten.fields>.fields{width:10%}@media only screen and (max-width:319px){.ui.form .fields{-ms-flex-wrap:wrap;flex-wrap:wrap}.ui.form .eight.fields>.field,.ui.form .eight.fields>.fields,.ui.form .five.fields>.field,.ui.form .five.fields>.fields,.ui.form .four.fields>.field,.ui.form .four.fields>.fields,.ui.form .nine.fields>.field,.ui.form .nine.fields>.fields,.ui.form .seven.fields>.field,.ui.form .seven.fields>.fields,.ui.form .six.fields>.field,.ui.form .six.fields>.fields,.ui.form .ten.fields>.field,.ui.form .ten.fields>.fields,.ui.form .three.fields>.field,.ui.form .three.fields>.fields,.ui.form .two.fields>.field,.ui.form .two.fields>.fields,.ui.form [class*="equal width"].fields>.field,.ui[class*="equal width"].form .fields>.field{width:100%!important;margin:0 0 1em}}.ui.form .fields .wide.field{width:6.25%;padding-left:.5em;padding-right:.5em}.ui.form .one.wide.field{width:6.25%!important}.ui.form .two.wide.field{width:12.5%!important}.ui.form .three.wide.field{width:18.75%!important}.ui.form .four.wide.field{width:25%!important}.ui.form .five.wide.field{width:31.25%!important}.ui.form .six.wide.field{width:37.5%!important}.ui.form .seven.wide.field{width:43.75%!important}.ui.form .eight.wide.field{width:50%!important}.ui.form .nine.wide.field{width:56.25%!important}.ui.form .ten.wide.field{width:62.5%!important}.ui.form .eleven.wide.field{width:68.75%!important}.ui.form .twelve.wide.field{width:75%!important}.ui.form .thirteen.wide.field{width:81.25%!important}.ui.form .fourteen.wide.field{width:87.5%!important}.ui.form .fifteen.wide.field{width:93.75%!important}.ui.form .sixteen.wide.field{width:100%!important}@media only screen and (max-width:319px){.ui.form .fields>.eight.wide.field,.ui.form .fields>.eleven.wide.field,.ui.form .fields>.fifteen.wide.field,.ui.form .fields>.five.wide.field,.ui.form .fields>.four.wide.field,.ui.form .fields>.fourteen.wide.field,.ui.form .fields>.nine.wide.field,.ui.form .fields>.seven.wide.field,.ui.form .fields>.six.wide.field,.ui.form .fields>.sixteen.wide.field,.ui.form .fields>.ten.wide.field,.ui.form .fields>.thirteen.wide.field,.ui.form .fields>.three.wide.field,.ui.form .fields>.twelve.wide.field,.ui.form .fields>.two.wide.field,.ui.form .five.fields>.field,.ui.form .five.fields>.fields,.ui.form .four.fields>.field,.ui.form .four.fields>.fields,.ui.form .three.fields>.field,.ui.form .three.fields>.fields,.ui.form .two.fields>.field,.ui.form .two.fields>.fields{width:100%!important}.ui.form .fields{margin-bottom:0}}.ui.form [class*="equal width"].fields>.field,.ui[class*="equal width"].form .fields>.field{width:100%;-ms-flex:1 1 auto;flex:1 1 auto}.ui.form .inline.fields{margin:0 0 1em;-ms-flex-align:center;align-items:center}.ui.form .inline.fields .field{margin:0;padding:0 1em 0 0}.ui.form .inline.field>label,.ui.form .inline.field>p,.ui.form .inline.fields .field>label,.ui.form .inline.fields .field>p,.ui.form .inline.fields>label{display:inline-block;width:auto;margin-top:0;margin-bottom:0;vertical-align:baseline;font-size:1em;font-weight:700;color:#686868;text-transform:none}.ui.form .inline.fields>label{margin:.035714em 1em 0 0}.ui.form .inline.field>input,.ui.form .inline.field>select,.ui.form .inline.fields .field>input,.ui.form .inline.fields .field>select{display:inline-block;width:auto;margin-top:0;margin-bottom:0;vertical-align:middle;font-size:1em}.ui.form .inline.field>:first-child,.ui.form .inline.fields .field>:first-child{margin:0 .875em 0 0}.ui.form .inline.field>:only-child,.ui.form .inline.fields .field>:only-child{margin:0}.ui.form .inline.fields .wide.field{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ui.form .inline.fields .wide.field>input,.ui.form .inline.fields .wide.field>select{width:100%}.ui.mini.form{font-size:.75rem}.ui.tiny.form{font-size:.875rem}.ui.small.form{font-size:.8em}.ui.form{font-size:1rem}.ui.large.form{font-size:1.125rem}.ui.big.form{font-size:1.25rem}.ui.huge.form{font-size:1.375rem}.ui.massive.form{font-size:1.75rem}.ui.form.dashed>.field,.ui.form.dashed>.fields{position:relative;border-bottom:1px dashed #f8f8f8;padding:1em 2.0833em;margin:0}.ui.form .field:last-child,.ui.form .fields:last-child,.ui.form .little-title:last-child{padding-bottom:0}.ui.form .field p.error-box,.ui.form .field p.help-block,.ui.form .fields p.error-box,.ui.form .fields p.help-block,.ui.form .little-title p.error-box,.ui.form .little-title p.help-block{color:#909090;padding-top:.5em;line-height:1.5;font-size:.8333em;margin:0}.ui.form .field p.error-box.float,.ui.form .fields p.error-box.float,.ui.form .little-title p.error-box.float{position:absolute;right:2.3833em;padding-top:1.1em!important;top:0;margin-top:0!important}.ui.form .field .other-option,.ui.form .fields .other-option,.ui.form .little-title .other-option{margin-top:.5em}.ui.form .field input:-webkit-autofill,.ui.form .field select:-webkit-autofill,.ui.form .fields input:-webkit-autofill,.ui.form .fields select:-webkit-autofill,.ui.form .fields textarea:-webkit-autofill,.ui.form .field textarea:-webkit-autofill,.ui.form .little-title input:-webkit-autofill,.ui.form .little-title select:-webkit-autofill,.ui.form .little-title textarea:-webkit-autofill{background-color:#fff!important;color:#686868!important;border-color:#c1c1c1!important}.ui.form .fields.grouped>p.error-box,.ui.form .fields.grouped>p.help-block{padding-top:0}.ui.form .field.error label{color:#686868}.ui.form .field>p.help-block.center{text-align:center;font-size:.93em}.ui.form .field>label{line-height:1em}.ui.form .field.error p.error-box,.ui.form .fields.error p.error-box{color:#e74731}.ui.form .field.error input.other-option,.ui.form .fields.error input.other-option{border-color:#e74731}.ui.form .fields.inline{display:block}.ui.form .fields.inline.three>.field:nth-child(5n),.ui.form .fields.inline.two>.field:nth-child(2n){padding-right:0}.ui.form .fields.inline .field{display:inline-block;line-height:2em}.ui.form .fields.inline .field>label{font-weight:400}.ui.form .fields.inline>label{line-height:1em;display:block;margin:0 0 .5rem;width:100%}.ui.form .field.padding{padding:.5em}.ui.form .field.padding .contact{margin-bottom:.333em}.ui.form .field.padding .progress span{position:relative}.ui.form .field.padding .progress span:after,.ui.form .field.padding .progress span:before{content:"";position:absolute;bottom:1.5em;height:1px;width:6.5em;border:1px dashed #c1c1c1}.ui.form .field.padding .progress span:after{right:-6.5em}.ui.form .field.padding .progress span:before{left:-6.5em}.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box,.ui.form .field.error .checkbox:not(.toggle):not(.slider) label,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label{color:#686868}.ui.form .field.error .checkbox .box:after,.ui.form .field.error .checkbox label:after,.ui.form .fields.error .field .checkbox .box:after,.ui.form .fields.error .field .checkbox label:after{color:#f8b61c}.ui.form select{line-height:2.4em;height:2.4em;background:#fff;width:100%!important}.ui.form select option{padding-top:.6em;padding-bottom:.6em}.ui.form select:focus{outline:none}.ui.form label.label-comment span.normal{float:right}.ui.form label.label-comment i.cf-qa{margin-left:.33em;font-size:90%;position:relative}.ui.form .label-comment-tip{border-radius:.5rem;background:#dfdfdf;margin:.5rem 0;padding:.5rem .8333rem;display:none;font-size:.8333rem;color:#909090;position:relative}.ui.form label{cursor:default}input::-webkit-input-placeholder{line-height:normal}.ui.form ::-webkit-input-placeholder{color:hsla(0,0%,75%,.87)!important}/*!\n * # Semantic UI - Checkbox\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */.ui.checkbox{position:relative;display:inline-block;-webkit-backface-visibility:hidden;backface-visibility:hidden;outline:none;vertical-align:baseline;font-style:normal;min-height:1em;font-size:1rem;line-height:1em;min-width:1em}.ui.checkbox input[type=checkbox],.ui.checkbox input[type=radio]{cursor:pointer;position:absolute;top:0;left:0;opacity:0!important;outline:none;z-index:3;width:1em;height:1em}.ui.checkbox .box,.ui.checkbox label{cursor:auto;position:relative;display:block;padding-left:1.85714em;outline:none;font-size:1em}.ui.checkbox .box:before,.ui.checkbox label:before{content:"";background:#fff;border-radius:0;border:1px solid #c1c1c1}.ui.checkbox .box:after,.ui.checkbox .box:before,.ui.checkbox label:after,.ui.checkbox label:before{position:absolute;top:0;left:0;width:1em;height:1em;transition:border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease}.ui.checkbox .box:after,.ui.checkbox label:after{font-size:1em;text-align:center;opacity:0;color:#f8b61c}.ui.checkbox+label,.ui.checkbox label{color:#686868;transition:color .1s ease}.ui.checkbox+label{vertical-align:middle}.ui.checkbox .box:hover:before,.ui.checkbox label:hover:before{background:#fff;border-color:#f8b61c}.ui.checkbox+label:hover,.ui.checkbox label:hover{color:#686868}.ui.checkbox .box:active:before,.ui.checkbox label:active:before{background:#f9fafb;border-color:rgba(34,36,38,.35)}.ui.checkbox .box:active:after,.ui.checkbox input:active~label,.ui.checkbox label:active:after{color:rgba(0,0,0,.95)}.ui.checkbox input:focus~.box:before,.ui.checkbox input:focus~label:before{background:#fff;border-color:#c1c1c1}.ui.checkbox input:focus~.box:after,.ui.checkbox input:focus~label:after{color:#f8b61c}.ui.checkbox input:focus~label{color:#686868}.ui.checkbox input:checked~.box:before,.ui.checkbox input:checked~label:before{background:#fff;border-color:#f8b61c}.ui.checkbox input:checked~.box:after,.ui.checkbox input:checked~label:after{opacity:1}.ui.checkbox input:not([type=radio]):indeterminate~.box:before,.ui.checkbox input:not([type=radio]):indeterminate~label:before{background:#fff;border-color:#f8b61c}.ui.checkbox input:not([type=radio]):indeterminate~.box:after,.ui.checkbox input:not([type=radio]):indeterminate~label:after{opacity:1;color:#f8b61c}.ui.checkbox input:checked:focus~.box:before,.ui.checkbox input:checked:focus~label:before,.ui.checkbox input:not([type=radio]):indeterminate:focus~.box:before,.ui.checkbox input:not([type=radio]):indeterminate:focus~label:before{background:#fff;border-color:#f8b61c}.ui.checkbox input:checked:focus~.box:after,.ui.checkbox input:checked:focus~label:after,.ui.checkbox input:not([type=radio]):indeterminate:focus~.box:after,.ui.checkbox input:not([type=radio]):indeterminate:focus~label:after{color:#f8b61c}.ui.read-only.checkbox,.ui.read-only.checkbox label{cursor:default}.ui.checkbox input[disabled]~.box:after,.ui.checkbox input[disabled]~label,.ui.disabled.checkbox .box:after,.ui.disabled.checkbox label{cursor:default!important;opacity:.5;color:#000}.ui.checkbox input.hidden{z-index:-1}.ui.checkbox input.hidden+label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui.radio.checkbox{min-height:1em}.ui.radio.checkbox .box,.ui.radio.checkbox label{padding-left:1.85714em}.ui.radio.checkbox .box:before,.ui.radio.checkbox label:before{content:"";-ms-transform:none;transform:none;width:1em;height:1em;border-radius:500rem;top:1px;left:0}.ui.radio.checkbox .box:after,.ui.radio.checkbox label:after{border:none;content:""!important;line-height:1em;top:1px;left:0;width:1em;height:1em;border-radius:500rem;-ms-transform:scale(.46666667);transform:scale(.46666667);background-color:none}.ui.radio.checkbox input:focus~.box:after,.ui.radio.checkbox input:focus~.box:before,.ui.radio.checkbox input:focus~label:after,.ui.radio.checkbox input:focus~label:before{background-color:#f8b61c}.ui.radio.checkbox input:indeterminate~.box:after,.ui.radio.checkbox input:indeterminate~label:after{opacity:0}.ui.radio.checkbox input:checked~.box:after,.ui.radio.checkbox input:checked~.box:before,.ui.radio.checkbox input:checked~label:after,.ui.radio.checkbox input:checked~label:before,.ui.radio.checkbox input:focus:checked~.box:after,.ui.radio.checkbox input:focus:checked~.box:before,.ui.radio.checkbox input:focus:checked~label:after,.ui.radio.checkbox input:focus:checked~label:before{background-color:#f8b61c}.ui.slider.checkbox{min-height:1.25rem}.ui.slider.checkbox input{width:3.5rem;height:1.25rem}.ui.slider.checkbox .box,.ui.slider.checkbox label{padding-left:4.5rem;line-height:1rem;color:rgba(0,0,0,.4)}.ui.slider.checkbox .box:before,.ui.slider.checkbox label:before{display:block;position:absolute;content:"";border:none!important;left:0;z-index:1;top:.4rem;background-color:rgba(0,0,0,.05);width:3.5rem;height:.375rem;-ms-transform:none;transform:none;border-radius:500rem;transition:background .3s ease}.ui.slider.checkbox .box:after,.ui.slider.checkbox label:after{background:#fff linear-gradient(transparent,rgba(0,0,0,.05));position:absolute;content:""!important;opacity:1;z-index:2;border:none;box-shadow:0,inset 0 0 0 1px rgba(34,36,38,.15);width:1.5rem;height:1.5rem;top:-.25rem;left:0;-ms-transform:none;transform:none;border-radius:500rem;transition:left .3s ease}.ui.slider.checkbox input:focus~.box:before,.ui.slider.checkbox input:focus~label:before{background-color:rgba(0,0,0,.15);border:none}.ui.slider.checkbox .box:hover,.ui.slider.checkbox label:hover{color:rgba(0,0,0,.8)}.ui.slider.checkbox .box:hover:before,.ui.slider.checkbox label:hover:before{background:rgba(0,0,0,.15)}.ui.slider.checkbox input:checked~.box,.ui.slider.checkbox input:checked~label{color:rgba(0,0,0,.95)!important}.ui.slider.checkbox input:checked~.box:before,.ui.slider.checkbox input:checked~label:before{background-color:#545454!important}.ui.slider.checkbox input:checked~.box:after,.ui.slider.checkbox input:checked~label:after{left:2rem}.ui.slider.checkbox input:focus:checked~.box,.ui.slider.checkbox input:focus:checked~label{color:rgba(0,0,0,.95)!important}.ui.slider.checkbox input:focus:checked~.box:before,.ui.slider.checkbox input:focus:checked~label:before{background-color:#000!important}.ui.toggle.checkbox{min-height:1.5rem}.ui.toggle.checkbox input{width:3.5rem;height:1.5rem}.ui.toggle.checkbox .box,.ui.toggle.checkbox label{min-height:1.5rem;padding-left:4.5rem;color:#f8b61c}.ui.toggle.checkbox label{padding-top:.15em}.ui.toggle.checkbox .box:before,.ui.toggle.checkbox label:before{display:block;position:absolute;content:"";z-index:1;-ms-transform:none;transform:none;border:none;top:0;background:rgba(0,0,0,.05);box-shadow:none;width:3.5rem;height:1.5rem;border-radius:500rem}.ui.toggle.checkbox .box:after,.ui.toggle.checkbox label:after{background:#fff linear-gradient(transparent,rgba(0,0,0,.05));position:absolute;content:""!important;opacity:1;z-index:2;border:none;box-shadow:0,inset 0 0 0 1px rgba(34,36,38,.15);width:1.5rem;height:1.5rem;top:0;left:0;border-radius:500rem;transition:background .3s ease,left .3s ease}.ui.toggle.checkbox input~.box:after,.ui.toggle.checkbox input~label:after{left:-.05rem;box-shadow:none}.ui.toggle.checkbox .box:hover:before,.ui.toggle.checkbox input:focus~.box:before,.ui.toggle.checkbox input:focus~label:before,.ui.toggle.checkbox label:hover:before{background-color:rgba(0,0,0,.15);border:none}.ui.toggle.checkbox input:checked~.box,.ui.toggle.checkbox input:checked~label{color:rgba(0,0,0,.95)!important}.ui.toggle.checkbox input:checked~.box:before,.ui.toggle.checkbox input:checked~label:before{background-color:#f8b61c!important}.ui.toggle.checkbox input:checked~.box:after,.ui.toggle.checkbox input:checked~label:after{left:2.15rem;box-shadow:none}.ui.toggle.checkbox input:focus:checked~.box,.ui.toggle.checkbox input:focus:checked~label{color:rgba(0,0,0,.95)!important}.ui.toggle.checkbox input:focus:checked~.box:before,.ui.toggle.checkbox input:focus:checked~label:before{background-color:#eba500!important}.ui.fitted.checkbox .box,.ui.fitted.checkbox label{padding-left:0!important}.ui.fitted.slider.checkbox,.ui.fitted.toggle.checkbox{width:3.5rem}@font-face{font-family:Checkbox;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBD8AAAC8AAAAYGNtYXAYVtCJAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zn4huwUAAAF4AAABYGhlYWQGPe1ZAAAC2AAAADZoaGVhB30DyAAAAxAAAAAkaG10eBBKAEUAAAM0AAAAHGxvY2EAmgESAAADUAAAABBtYXhwAAkALwAAA2AAAAAgbmFtZSC8IugAAAOAAAABknBvc3QAAwAAAAAFFAAAACAAAwMTAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADoAgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6AL//f//AAAAAAAg6AD//f//AAH/4xgEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAEUAUQO7AvgAGgAAARQHAQYjIicBJjU0PwE2MzIfAQE2MzIfARYVA7sQ/hQQFhcQ/uMQEE4QFxcQqAF2EBcXEE4QAnMWEP4UEBABHRAXFhBOEBCoAXcQEE4QFwAAAAABAAABbgMlAkkAFAAAARUUBwYjISInJj0BNDc2MyEyFxYVAyUQEBf9SRcQEBAQFwK3FxAQAhJtFxAQEBAXbRcQEBAQFwAAAAABAAAASQMlA24ALAAAARUUBwYrARUUBwYrASInJj0BIyInJj0BNDc2OwE1NDc2OwEyFxYdATMyFxYVAyUQEBfuEBAXbhYQEO4XEBAQEBfuEBAWbhcQEO4XEBACEm0XEBDuFxAQEBAX7hAQF20XEBDuFxAQEBAX7hAQFwAAAQAAAAIAAHRSzT9fDzz1AAsEAAAAAADRsdR3AAAAANGx1HcAAAAAA7sDbgAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADuwABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABFAyUAAAMlAAAAAAAAAAoAFAAeAE4AcgCwAAEAAAAHAC0AAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHAGkAAQAAAAAAAwAIADkAAQAAAAAABAAIAH4AAQAAAAAABQALABgAAQAAAAAABgAIAFEAAQAAAAAACgAaAJYAAwABBAkAAQAQAAgAAwABBAkAAgAOAHAAAwABBAkAAwAQAEEAAwABBAkABAAQAIYAAwABBAkABQAWACMAAwABBAkABgAQAFkAAwABBAkACgA0ALBDaGVja2JveABDAGgAZQBjAGsAYgBvAHhWZXJzaW9uIDIuMABWAGUAcgBzAGkAbwBuACAAMgAuADBDaGVja2JveABDAGgAZQBjAGsAYgBvAHhDaGVja2JveABDAGgAZQBjAGsAYgBvAHhSZWd1bGFyAFIAZQBnAHUAbABhAHJDaGVja2JveABDAGgAZQBjAGsAYgBvAHhGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format("truetype")}.ui.checkbox .box:after,.ui.checkbox label:after{font-family:Checkbox}.ui.checkbox input:checked~.box:after,.ui.checkbox input:checked~label:after{content:"\\E800"}.ui.checkbox input:indeterminate~.box:after,.ui.checkbox input:indeterminate~label:after{font-size:12px;content:"\\E801"}.ui.checkbox input:checked~.box:after,.ui.checkbox input:checked~label:after{color:#f8b61c}.ui.checkbox .box,.ui.checkbox label{line-height:1.2em}.ui.checkbox .box:before,.ui.checkbox label:before{top:1px}\n', ""]),
            e.Z = r
        },
        3645: function(A) {
            "use strict";
            A.exports = function(A) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var t = A(e);
                        return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
                    }
                    )).join("")
                }
                ,
                e.i = function(A, t, n) {
                    "string" == typeof A && (A = [[null, A, ""]]);
                    var r = {};
                    if (n)
                        for (var i = 0; i < this.length; i++) {
                            var o = this[i][0];
                            null != o && (r[o] = !0)
                        }
                    for (var a = 0; a < A.length; a++) {
                        var s = [].concat(A[a]);
                        n && r[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t),
                        e.push(s))
                    }
                }
                ,
                e
            }
        },
        5987: function(A) {
            "use strict";
            var e = {
                single_source_shortest_paths: function(A, t, n) {
                    var r = {}
                      , i = {};
                    i[t] = 0;
                    var o, a, s, l, c, u, d, B = e.PriorityQueue.make();
                    for (B.push(t, 0); !B.empty(); )
                        for (s in a = (o = B.pop()).value,
                        l = o.cost,
                        c = A[a] || {})
                            c.hasOwnProperty(s) && (u = l + c[s],
                            d = i[s],
                            (void 0 === i[s] || d > u) && (i[s] = u,
                            B.push(s, u),
                            r[s] = a));
                    if (void 0 !== n && void 0 === i[n]) {
                        var g = ["Could not find a path from ", t, " to ", n, "."].join("");
                        throw new Error(g)
                    }
                    return r
                },
                extract_shortest_path_from_predecessor_list: function(A, e) {
                    for (var t = [], n = e; n; )
                        t.push(n),
                        A[n],
                        n = A[n];
                    return t.reverse(),
                    t
                },
                find_path: function(A, t, n) {
                    var r = e.single_source_shortest_paths(A, t, n);
                    return e.extract_shortest_path_from_predecessor_list(r, n)
                },
                PriorityQueue: {
                    make: function(A) {
                        var t, n = e.PriorityQueue, r = {};
                        for (t in A = A || {},
                        n)
                            n.hasOwnProperty(t) && (r[t] = n[t]);
                        return r.queue = [],
                        r.sorter = A.sorter || n.default_sorter,
                        r
                    },
                    default_sorter: function(A, e) {
                        return A.cost - e.cost
                    },
                    push: function(A, e) {
                        var t = {
                            value: A,
                            cost: e
                        };
                        this.queue.push(t),
                        this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            A.exports = e
        },
        2378: function(A) {
            "use strict";
            A.exports = function(A) {
                for (var e = [], t = A.length, n = 0; n < t; n++) {
                    var r = A.charCodeAt(n);
                    if (r >= 55296 && r <= 56319 && t > n + 1) {
                        var i = A.charCodeAt(n + 1);
                        i >= 56320 && i <= 57343 && (r = 1024 * (r - 55296) + i - 56320 + 65536,
                        n += 1)
                    }
                    r < 128 ? e.push(r) : r < 2048 ? (e.push(r >> 6 | 192),
                    e.push(63 & r | 128)) : r < 55296 || r >= 57344 && r < 65536 ? (e.push(r >> 12 | 224),
                    e.push(r >> 6 & 63 | 128),
                    e.push(63 & r | 128)) : r >= 65536 && r <= 1114111 ? (e.push(r >> 18 | 240),
                    e.push(r >> 12 & 63 | 128),
                    e.push(r >> 6 & 63 | 128),
                    e.push(63 & r | 128)) : e.push(239, 191, 189)
                }
                return new Uint8Array(e).buffer
            }
        },
        1120: function(A) {
            A.exports = function() {
                "use strict";
                var A = function(e, t) {
                    return A = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(A, e) {
                        A.__proto__ = e
                    }
                    || function(A, e) {
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t])
                    }
                    ,
                    A(e, t)
                };
                function e(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    A(e, t),
                    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                    new n)
                }
                var t = function() {
                    return t = Object.assign || function(A) {
                        for (var e, t = 1, n = arguments.length; t < n; t++)
                            for (var r in e = arguments[t])
                                Object.prototype.hasOwnProperty.call(e, r) && (A[r] = e[r]);
                        return A
                    }
                    ,
                    t.apply(this, arguments)
                };
                function n(A, e, t, n) {
                    return new (t || (t = Promise))((function(r, i) {
                        function o(A) {
                            try {
                                s(n.next(A))
                            } catch (A) {
                                i(A)
                            }
                        }
                        function a(A) {
                            try {
                                s(n.throw(A))
                            } catch (A) {
                                i(A)
                            }
                        }
                        function s(A) {
                            var e;
                            A.done ? r(A.value) : (e = A.value,
                            e instanceof t ? e : new t((function(A) {
                                A(e)
                            }
                            ))).then(o, a)
                        }
                        s((n = n.apply(A, e || [])).next())
                    }
                    ))
                }
                function r(A, e) {
                    var t, n, r, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    i;
                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (t)
                                    throw new TypeError("Generator is already executing.");
                                for (; o; )
                                    try {
                                        if (t = 1,
                                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                                        0) : n.next) && !(r = r.call(n, i[1])).done)
                                            return r;
                                        switch (n = 0,
                                        r && (i = [2 & i[0], r.value]),
                                        i[0]) {
                                        case 0:
                                        case 1:
                                            r = i;
                                            break;
                                        case 4:
                                            return o.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++,
                                            n = i[1],
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = o.ops.pop(),
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!((r = (r = o.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                o.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && o.label < r[1]) {
                                                o.label = r[1],
                                                r = i;
                                                break
                                            }
                                            if (r && o.label < r[2]) {
                                                o.label = r[2],
                                                o.ops.push(i);
                                                break
                                            }
                                            r[2] && o.ops.pop(),
                                            o.trys.pop();
                                            continue
                                        }
                                        i = e.call(A, o)
                                    } catch (A) {
                                        i = [6, A],
                                        n = 0
                                    } finally {
                                        t = r = 0
                                    }
                                if (5 & i[0])
                                    throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                }
                function i(A, e, t) {
                    if (t || 2 === arguments.length)
                        for (var n, r = 0, i = e.length; r < i; r++)
                            !n && r in e || (n || (n = Array.prototype.slice.call(e, 0, r)),
                            n[r] = e[r]);
                    return A.concat(n || e)
                }
                for (var o = function() {
                    function A(A, e, t, n) {
                        this.left = A,
                        this.top = e,
                        this.width = t,
                        this.height = n
                    }
                    return A.prototype.add = function(e, t, n, r) {
                        return new A(this.left + e,this.top + t,this.width + n,this.height + r)
                    }
                    ,
                    A.fromClientRect = function(e, t) {
                        return new A(t.left + e.windowBounds.left,t.top + e.windowBounds.top,t.width,t.height)
                    }
                    ,
                    A.fromDOMRectList = function(e, t) {
                        var n = t[0];
                        return n ? new A(n.x + e.windowBounds.left,n.y + e.windowBounds.top,n.width,n.height) : A.EMPTY
                    }
                    ,
                    A.EMPTY = new A(0,0,0,0),
                    A
                }(), a = function(A, e) {
                    return o.fromClientRect(A, e.getBoundingClientRect())
                }, s = function(A) {
                    for (var e = [], t = 0, n = A.length; t < n; ) {
                        var r = A.charCodeAt(t++);
                        if (r >= 55296 && r <= 56319 && t < n) {
                            var i = A.charCodeAt(t++);
                            56320 == (64512 & i) ? e.push(((1023 & r) << 10) + (1023 & i) + 65536) : (e.push(r),
                            t--)
                        } else
                            e.push(r)
                    }
                    return e
                }, l = function() {
                    for (var A = [], e = 0; e < arguments.length; e++)
                        A[e] = arguments[e];
                    if (String.fromCodePoint)
                        return String.fromCodePoint.apply(String, A);
                    var t = A.length;
                    if (!t)
                        return "";
                    for (var n = [], r = -1, i = ""; ++r < t; ) {
                        var o = A[r];
                        o <= 65535 ? n.push(o) : (o -= 65536,
                        n.push(55296 + (o >> 10), o % 1024 + 56320)),
                        (r + 1 === t || n.length > 16384) && (i += String.fromCharCode.apply(String, n),
                        n.length = 0)
                    }
                    return i
                }, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), d = 0; d < c.length; d++)
                    u[c.charCodeAt(d)] = d;
                var B = function(A, e, t) {
                    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
                }
                  , g = function() {
                    function A(A, e, t, n, r, i) {
                        this.initialValue = A,
                        this.errorValue = e,
                        this.highStart = t,
                        this.highValueIndex = n,
                        this.index = r,
                        this.data = i
                    }
                    return A.prototype.get = function(A) {
                        var e;
                        if (A >= 0) {
                            if (A < 55296 || A > 56319 && A <= 65535)
                                return e = ((e = this.index[A >> 5]) << 2) + (31 & A),
                                this.data[e];
                            if (A <= 65535)
                                return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A),
                                this.data[e];
                            if (A < this.highStart)
                                return e = 2080 + (A >> 11),
                                e = this.index[e],
                                e += A >> 5 & 63,
                                e = ((e = this.index[e]) << 2) + (31 & A),
                                this.data[e];
                            if (A <= 1114111)
                                return this.data[this.highValueIndex]
                        }
                        return this.errorValue
                    }
                    ,
                    A
                }()
                  , f = 10
                  , h = 13
                  , p = 15
                  , w = 17
                  , m = 18
                  , b = 19
                  , Q = 20
                  , C = 21
                  , F = 22
                  , U = 24
                  , E = 25
                  , y = 26
                  , H = 27
                  , I = 28
                  , x = 30
                  , v = 32
                  , k = 33
                  , L = 34
                  , K = 35
                  , D = 37
                  , S = 38
                  , T = 39
                  , R = 40
                  , M = 42
                  , O = [9001, 65288]
                  , N = "×"
                  , P = "÷"
                  , G = function(A) {
                    var e, t, n, r = function(A) {
                        var e, t, n, r, i, o = .75 * A.length, a = A.length, s = 0;
                        "=" === A[A.length - 1] && (o--,
                        "=" === A[A.length - 2] && o--);
                        var l = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o)
                          , c = Array.isArray(l) ? l : new Uint8Array(l);
                        for (e = 0; e < a; e += 4)
                            t = u[A.charCodeAt(e)],
                            n = u[A.charCodeAt(e + 1)],
                            r = u[A.charCodeAt(e + 2)],
                            i = u[A.charCodeAt(e + 3)],
                            c[s++] = t << 2 | n >> 4,
                            c[s++] = (15 & n) << 4 | r >> 2,
                            c[s++] = (3 & r) << 6 | 63 & i;
                        return l
                    }(A), i = Array.isArray(r) ? function(A) {
                        for (var e = A.length, t = [], n = 0; n < e; n += 4)
                            t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
                        return t
                    }(r) : new Uint32Array(r), o = Array.isArray(r) ? function(A) {
                        for (var e = A.length, t = [], n = 0; n < e; n += 2)
                            t.push(A[n + 1] << 8 | A[n]);
                        return t
                    }(r) : new Uint16Array(r), a = B(o, 12, i[4] / 2), s = 2 === i[5] ? B(o, (24 + i[4]) / 2) : (e = i,
                    t = Math.ceil((24 + i[4]) / 4),
                    e.slice ? e.slice(t, n) : new Uint32Array(Array.prototype.slice.call(e, t, n)));
                    return new g(i[0],i[1],i[2],i[3],a,s)
                }("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==")
                  , _ = [x, 36]
                  , V = [1, 2, 3, 5]
                  , J = [f, 8]
                  , X = [H, y]
                  , Y = V.concat(J)
                  , W = [S, T, R, L, K]
                  , j = [p, h]
                  , Z = function(A, e, t, n) {
                    var r = n[t];
                    if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
                        for (var i = t; i <= n.length; ) {
                            if ((s = n[++i]) === e)
                                return !0;
                            if (s !== f)
                                break
                        }
                    if (r === f)
                        for (i = t; i > 0; ) {
                            var o = n[--i];
                            if (Array.isArray(A) ? -1 !== A.indexOf(o) : A === o)
                                for (var a = t; a <= n.length; ) {
                                    var s;
                                    if ((s = n[++a]) === e)
                                        return !0;
                                    if (s !== f)
                                        break
                                }
                            if (o !== f)
                                break
                        }
                    return !1
                }
                  , z = function(A, e) {
                    for (var t = A; t >= 0; ) {
                        var n = e[t];
                        if (n !== f)
                            return n;
                        t--
                    }
                    return 0
                }
                  , $ = function(A, e, t, n, r) {
                    if (0 === t[n])
                        return N;
                    var i = n - 1;
                    if (Array.isArray(r) && !0 === r[i])
                        return N;
                    var o = i - 1
                      , a = i + 1
                      , s = e[i]
                      , l = o >= 0 ? e[o] : 0
                      , c = e[a];
                    if (2 === s && 3 === c)
                        return N;
                    if (-1 !== V.indexOf(s))
                        return "!";
                    if (-1 !== V.indexOf(c))
                        return N;
                    if (-1 !== J.indexOf(c))
                        return N;
                    if (8 === z(i, e))
                        return P;
                    if (11 === G.get(A[i]))
                        return N;
                    if ((s === v || s === k) && 11 === G.get(A[a]))
                        return N;
                    if (7 === s || 7 === c)
                        return N;
                    if (9 === s)
                        return N;
                    if (-1 === [f, h, p].indexOf(s) && 9 === c)
                        return N;
                    if (-1 !== [w, m, b, U, I].indexOf(c))
                        return N;
                    if (z(i, e) === F)
                        return N;
                    if (Z(23, F, i, e))
                        return N;
                    if (Z([w, m], C, i, e))
                        return N;
                    if (Z(12, 12, i, e))
                        return N;
                    if (s === f)
                        return P;
                    if (23 === s || 23 === c)
                        return N;
                    if (16 === c || 16 === s)
                        return P;
                    if (-1 !== [h, p, C].indexOf(c) || 14 === s)
                        return N;
                    if (36 === l && -1 !== j.indexOf(s))
                        return N;
                    if (s === I && 36 === c)
                        return N;
                    if (c === Q)
                        return N;
                    if (-1 !== _.indexOf(c) && s === E || -1 !== _.indexOf(s) && c === E)
                        return N;
                    if (s === H && -1 !== [D, v, k].indexOf(c) || -1 !== [D, v, k].indexOf(s) && c === y)
                        return N;
                    if (-1 !== _.indexOf(s) && -1 !== X.indexOf(c) || -1 !== X.indexOf(s) && -1 !== _.indexOf(c))
                        return N;
                    if (-1 !== [H, y].indexOf(s) && (c === E || -1 !== [F, p].indexOf(c) && e[a + 1] === E) || -1 !== [F, p].indexOf(s) && c === E || s === E && -1 !== [E, I, U].indexOf(c))
                        return N;
                    if (-1 !== [E, I, U, w, m].indexOf(c))
                        for (var u = i; u >= 0; ) {
                            if ((d = e[u]) === E)
                                return N;
                            if (-1 === [I, U].indexOf(d))
                                break;
                            u--
                        }
                    if (-1 !== [H, y].indexOf(c))
                        for (u = -1 !== [w, m].indexOf(s) ? o : i; u >= 0; ) {
                            var d;
                            if ((d = e[u]) === E)
                                return N;
                            if (-1 === [I, U].indexOf(d))
                                break;
                            u--
                        }
                    if (S === s && -1 !== [S, T, L, K].indexOf(c) || -1 !== [T, L].indexOf(s) && -1 !== [T, R].indexOf(c) || -1 !== [R, K].indexOf(s) && c === R)
                        return N;
                    if (-1 !== W.indexOf(s) && -1 !== [Q, y].indexOf(c) || -1 !== W.indexOf(c) && s === H)
                        return N;
                    if (-1 !== _.indexOf(s) && -1 !== _.indexOf(c))
                        return N;
                    if (s === U && -1 !== _.indexOf(c))
                        return N;
                    if (-1 !== _.concat(E).indexOf(s) && c === F && -1 === O.indexOf(A[a]) || -1 !== _.concat(E).indexOf(c) && s === m)
                        return N;
                    if (41 === s && 41 === c) {
                        for (var B = t[i], g = 1; B > 0 && 41 === e[--B]; )
                            g++;
                        if (g % 2 != 0)
                            return N
                    }
                    return s === v && c === k ? N : P
                }
                  , q = function(A, e) {
                    e || (e = {
                        lineBreak: "normal",
                        wordBreak: "normal"
                    });
                    var t = function(A, e) {
                        void 0 === e && (e = "strict");
                        var t = []
                          , n = []
                          , r = [];
                        return A.forEach((function(A, i) {
                            var o = G.get(A);
                            if (o > 50 ? (r.push(!0),
                            o -= 50) : r.push(!1),
                            -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A))
                                return n.push(i),
                                t.push(16);
                            if (4 === o || 11 === o) {
                                if (0 === i)
                                    return n.push(i),
                                    t.push(x);
                                var a = t[i - 1];
                                return -1 === Y.indexOf(a) ? (n.push(n[i - 1]),
                                t.push(a)) : (n.push(i),
                                t.push(x))
                            }
                            return n.push(i),
                            31 === o ? t.push("strict" === e ? C : D) : o === M || 29 === o ? t.push(x) : 43 === o ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? t.push(D) : t.push(x) : void t.push(o)
                        }
                        )),
                        [n, t, r]
                    }(A, e.lineBreak)
                      , n = t[0]
                      , r = t[1]
                      , i = t[2];
                    "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (r = r.map((function(A) {
                        return -1 !== [E, x, M].indexOf(A) ? D : A
                    }
                    )));
                    var o = "keep-all" === e.wordBreak ? i.map((function(e, t) {
                        return e && A[t] >= 19968 && A[t] <= 40959
                    }
                    )) : void 0;
                    return [n, r, o]
                }
                  , AA = function() {
                    function A(A, e, t, n) {
                        this.codePoints = A,
                        this.required = "!" === e,
                        this.start = t,
                        this.end = n
                    }
                    return A.prototype.slice = function() {
                        return l.apply(void 0, this.codePoints.slice(this.start, this.end))
                    }
                    ,
                    A
                }()
                  , eA = 45
                  , tA = 43
                  , nA = -1
                  , rA = function(A) {
                    return A >= 48 && A <= 57
                }
                  , iA = function(A) {
                    return rA(A) || A >= 65 && A <= 70 || A >= 97 && A <= 102
                }
                  , oA = function(A) {
                    return 10 === A || 9 === A || 32 === A
                }
                  , aA = function(A) {
                    return function(A) {
                        return function(A) {
                            return A >= 97 && A <= 122
                        }(A) || function(A) {
                            return A >= 65 && A <= 90
                        }(A)
                    }(A) || function(A) {
                        return A >= 128
                    }(A) || 95 === A
                }
                  , sA = function(A) {
                    return aA(A) || rA(A) || A === eA
                }
                  , lA = function(A) {
                    return A >= 0 && A <= 8 || 11 === A || A >= 14 && A <= 31 || 127 === A
                }
                  , cA = function(A, e) {
                    return 92 === A && 10 !== e
                }
                  , uA = function(A, e, t) {
                    return A === eA ? aA(e) || cA(e, t) : !!aA(A) || !(92 !== A || !cA(A, e))
                }
                  , dA = function(A, e, t) {
                    return A === tA || A === eA ? !!rA(e) || 46 === e && rA(t) : rA(46 === A ? e : A)
                }
                  , BA = function(A) {
                    var e = 0
                      , t = 1;
                    A[e] !== tA && A[e] !== eA || (A[e] === eA && (t = -1),
                    e++);
                    for (var n = []; rA(A[e]); )
                        n.push(A[e++]);
                    var r = n.length ? parseInt(l.apply(void 0, n), 10) : 0;
                    46 === A[e] && e++;
                    for (var i = []; rA(A[e]); )
                        i.push(A[e++]);
                    var o = i.length
                      , a = o ? parseInt(l.apply(void 0, i), 10) : 0;
                    69 !== A[e] && 101 !== A[e] || e++;
                    var s = 1;
                    A[e] !== tA && A[e] !== eA || (A[e] === eA && (s = -1),
                    e++);
                    for (var c = []; rA(A[e]); )
                        c.push(A[e++]);
                    var u = c.length ? parseInt(l.apply(void 0, c), 10) : 0;
                    return t * (r + a * Math.pow(10, -o)) * Math.pow(10, s * u)
                }
                  , gA = {
                    type: 2
                }
                  , fA = {
                    type: 3
                }
                  , hA = {
                    type: 4
                }
                  , pA = {
                    type: 13
                }
                  , wA = {
                    type: 8
                }
                  , mA = {
                    type: 21
                }
                  , bA = {
                    type: 9
                }
                  , QA = {
                    type: 10
                }
                  , CA = {
                    type: 11
                }
                  , FA = {
                    type: 12
                }
                  , UA = {
                    type: 14
                }
                  , EA = {
                    type: 23
                }
                  , yA = {
                    type: 1
                }
                  , HA = {
                    type: 25
                }
                  , IA = {
                    type: 24
                }
                  , xA = {
                    type: 26
                }
                  , vA = {
                    type: 27
                }
                  , kA = {
                    type: 28
                }
                  , LA = {
                    type: 29
                }
                  , KA = {
                    type: 31
                }
                  , DA = {
                    type: 32
                }
                  , SA = function() {
                    function A() {
                        this._value = []
                    }
                    return A.prototype.write = function(A) {
                        this._value = this._value.concat(s(A))
                    }
                    ,
                    A.prototype.read = function() {
                        for (var A = [], e = this.consumeToken(); e !== DA; )
                            A.push(e),
                            e = this.consumeToken();
                        return A
                    }
                    ,
                    A.prototype.consumeToken = function() {
                        var A = this.consumeCodePoint();
                        switch (A) {
                        case 34:
                            return this.consumeStringToken(34);
                        case 35:
                            var e = this.peekCodePoint(0)
                              , t = this.peekCodePoint(1)
                              , n = this.peekCodePoint(2);
                            if (sA(e) || cA(t, n)) {
                                var r = uA(e, t, n) ? 2 : 1;
                                return {
                                    type: 5,
                                    value: this.consumeName(),
                                    flags: r
                                }
                            }
                            break;
                        case 36:
                            if (61 === this.peekCodePoint(0))
                                return this.consumeCodePoint(),
                                pA;
                            break;
                        case 39:
                            return this.consumeStringToken(39);
                        case 40:
                            return gA;
                        case 41:
                            return fA;
                        case 42:
                            if (61 === this.peekCodePoint(0))
                                return this.consumeCodePoint(),
                                UA;
                            break;
                        case tA:
                        case 46:
                            if (dA(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                                return this.reconsumeCodePoint(A),
                                this.consumeNumericToken();
                            break;
                        case 44:
                            return hA;
                        case eA:
                            var i = A
                              , o = this.peekCodePoint(0)
                              , a = this.peekCodePoint(1);
                            if (dA(i, o, a))
                                return this.reconsumeCodePoint(A),
                                this.consumeNumericToken();
                            if (uA(i, o, a))
                                return this.reconsumeCodePoint(A),
                                this.consumeIdentLikeToken();
                            if (o === eA && 62 === a)
                                return this.consumeCodePoint(),
                                this.consumeCodePoint(),
                                IA;
                            break;
                        case 47:
                            if (42 === this.peekCodePoint(0))
                                for (this.consumeCodePoint(); ; ) {
                                    var s = this.consumeCodePoint();
                                    if (42 === s && 47 === (s = this.consumeCodePoint()))
                                        return this.consumeToken();
                                    if (s === nA)
                                        return this.consumeToken()
                                }
                            break;
                        case 58:
                            return xA;
                        case 59:
                            return vA;
                        case 60:
                            if (33 === this.peekCodePoint(0) && this.peekCodePoint(1) === eA && this.peekCodePoint(2) === eA)
                                return this.consumeCodePoint(),
                                this.consumeCodePoint(),
                                HA;
                            break;
                        case 64:
                            var c = this.peekCodePoint(0)
                              , u = this.peekCodePoint(1)
                              , d = this.peekCodePoint(2);
                            if (uA(c, u, d))
                                return {
                                    type: 7,
                                    value: this.consumeName()
                                };
                            break;
                        case 91:
                            return kA;
                        case 92:
                            if (cA(A, this.peekCodePoint(0)))
                                return this.reconsumeCodePoint(A),
                                this.consumeIdentLikeToken();
                            break;
                        case 93:
                            return LA;
                        case 61:
                            if (61 === this.peekCodePoint(0))
                                return this.consumeCodePoint(),
                                wA;
                            break;
                        case 123:
                            return CA;
                        case 125:
                            return FA;
                        case 117:
                        case 85:
                            var B = this.peekCodePoint(0)
                              , g = this.peekCodePoint(1);
                            return B !== tA || !iA(g) && 63 !== g || (this.consumeCodePoint(),
                            this.consumeUnicodeRangeToken()),
                            this.reconsumeCodePoint(A),
                            this.consumeIdentLikeToken();
                        case 124:
                            if (61 === this.peekCodePoint(0))
                                return this.consumeCodePoint(),
                                bA;
                            if (124 === this.peekCodePoint(0))
                                return this.consumeCodePoint(),
                                mA;
                            break;
                        case 126:
                            if (61 === this.peekCodePoint(0))
                                return this.consumeCodePoint(),
                                QA;
                            break;
                        case nA:
                            return DA
                        }
                        return oA(A) ? (this.consumeWhiteSpace(),
                        KA) : rA(A) ? (this.reconsumeCodePoint(A),
                        this.consumeNumericToken()) : aA(A) ? (this.reconsumeCodePoint(A),
                        this.consumeIdentLikeToken()) : {
                            type: 6,
                            value: l(A)
                        }
                    }
                    ,
                    A.prototype.consumeCodePoint = function() {
                        var A = this._value.shift();
                        return void 0 === A ? -1 : A
                    }
                    ,
                    A.prototype.reconsumeCodePoint = function(A) {
                        this._value.unshift(A)
                    }
                    ,
                    A.prototype.peekCodePoint = function(A) {
                        return A >= this._value.length ? -1 : this._value[A]
                    }
                    ,
                    A.prototype.consumeUnicodeRangeToken = function() {
                        for (var A = [], e = this.consumeCodePoint(); iA(e) && A.length < 6; )
                            A.push(e),
                            e = this.consumeCodePoint();
                        for (var t = !1; 63 === e && A.length < 6; )
                            A.push(e),
                            e = this.consumeCodePoint(),
                            t = !0;
                        if (t)
                            return {
                                type: 30,
                                start: parseInt(l.apply(void 0, A.map((function(A) {
                                    return 63 === A ? 48 : A
                                }
                                ))), 16),
                                end: parseInt(l.apply(void 0, A.map((function(A) {
                                    return 63 === A ? 70 : A
                                }
                                ))), 16)
                            };
                        var n = parseInt(l.apply(void 0, A), 16);
                        if (this.peekCodePoint(0) === eA && iA(this.peekCodePoint(1))) {
                            this.consumeCodePoint(),
                            e = this.consumeCodePoint();
                            for (var r = []; iA(e) && r.length < 6; )
                                r.push(e),
                                e = this.consumeCodePoint();
                            return {
                                type: 30,
                                start: n,
                                end: parseInt(l.apply(void 0, r), 16)
                            }
                        }
                        return {
                            type: 30,
                            start: n,
                            end: n
                        }
                    }
                    ,
                    A.prototype.consumeIdentLikeToken = function() {
                        var A = this.consumeName();
                        return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                        this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                        {
                            type: 19,
                            value: A
                        }) : {
                            type: 20,
                            value: A
                        }
                    }
                    ,
                    A.prototype.consumeUrlToken = function() {
                        var A = [];
                        if (this.consumeWhiteSpace(),
                        this.peekCodePoint(0) === nA)
                            return {
                                type: 22,
                                value: ""
                            };
                        var e = this.peekCodePoint(0);
                        if (39 === e || 34 === e) {
                            var t = this.consumeStringToken(this.consumeCodePoint());
                            return 0 === t.type && (this.consumeWhiteSpace(),
                            this.peekCodePoint(0) === nA || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(),
                            {
                                type: 22,
                                value: t.value
                            }) : (this.consumeBadUrlRemnants(),
                            EA)
                        }
                        for (; ; ) {
                            var n = this.consumeCodePoint();
                            if (n === nA || 41 === n)
                                return {
                                    type: 22,
                                    value: l.apply(void 0, A)
                                };
                            if (oA(n))
                                return this.consumeWhiteSpace(),
                                this.peekCodePoint(0) === nA || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                                {
                                    type: 22,
                                    value: l.apply(void 0, A)
                                }) : (this.consumeBadUrlRemnants(),
                                EA);
                            if (34 === n || 39 === n || 40 === n || lA(n))
                                return this.consumeBadUrlRemnants(),
                                EA;
                            if (92 === n) {
                                if (!cA(n, this.peekCodePoint(0)))
                                    return this.consumeBadUrlRemnants(),
                                    EA;
                                A.push(this.consumeEscapedCodePoint())
                            } else
                                A.push(n)
                        }
                    }
                    ,
                    A.prototype.consumeWhiteSpace = function() {
                        for (; oA(this.peekCodePoint(0)); )
                            this.consumeCodePoint()
                    }
                    ,
                    A.prototype.consumeBadUrlRemnants = function() {
                        for (; ; ) {
                            var A = this.consumeCodePoint();
                            if (41 === A || A === nA)
                                return;
                            cA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                        }
                    }
                    ,
                    A.prototype.consumeStringSlice = function(A) {
                        for (var e = ""; A > 0; ) {
                            var t = Math.min(6e4, A);
                            e += l.apply(void 0, this._value.splice(0, t)),
                            A -= t
                        }
                        return this._value.shift(),
                        e
                    }
                    ,
                    A.prototype.consumeStringToken = function(A) {
                        for (var e = "", t = 0; ; ) {
                            var n = this._value[t];
                            if (n === nA || void 0 === n || n === A)
                                return {
                                    type: 0,
                                    value: e += this.consumeStringSlice(t)
                                };
                            if (10 === n)
                                return this._value.splice(0, t),
                                yA;
                            if (92 === n) {
                                var r = this._value[t + 1];
                                r !== nA && void 0 !== r && (10 === r ? (e += this.consumeStringSlice(t),
                                t = -1,
                                this._value.shift()) : cA(n, r) && (e += this.consumeStringSlice(t),
                                e += l(this.consumeEscapedCodePoint()),
                                t = -1))
                            }
                            t++
                        }
                    }
                    ,
                    A.prototype.consumeNumber = function() {
                        var A = []
                          , e = 4
                          , t = this.peekCodePoint(0);
                        for (t !== tA && t !== eA || A.push(this.consumeCodePoint()); rA(this.peekCodePoint(0)); )
                            A.push(this.consumeCodePoint());
                        t = this.peekCodePoint(0);
                        var n = this.peekCodePoint(1);
                        if (46 === t && rA(n))
                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                            e = 8; rA(this.peekCodePoint(0)); )
                                A.push(this.consumeCodePoint());
                        t = this.peekCodePoint(0),
                        n = this.peekCodePoint(1);
                        var r = this.peekCodePoint(2);
                        if ((69 === t || 101 === t) && ((n === tA || n === eA) && rA(r) || rA(n)))
                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                            e = 8; rA(this.peekCodePoint(0)); )
                                A.push(this.consumeCodePoint());
                        return [BA(A), e]
                    }
                    ,
                    A.prototype.consumeNumericToken = function() {
                        var A = this.consumeNumber()
                          , e = A[0]
                          , t = A[1]
                          , n = this.peekCodePoint(0)
                          , r = this.peekCodePoint(1)
                          , i = this.peekCodePoint(2);
                        return uA(n, r, i) ? {
                            type: 15,
                            number: e,
                            flags: t,
                            unit: this.consumeName()
                        } : 37 === n ? (this.consumeCodePoint(),
                        {
                            type: 16,
                            number: e,
                            flags: t
                        }) : {
                            type: 17,
                            number: e,
                            flags: t
                        }
                    }
                    ,
                    A.prototype.consumeEscapedCodePoint = function() {
                        var A = this.consumeCodePoint();
                        if (iA(A)) {
                            for (var e = l(A); iA(this.peekCodePoint(0)) && e.length < 6; )
                                e += l(this.consumeCodePoint());
                            oA(this.peekCodePoint(0)) && this.consumeCodePoint();
                            var t = parseInt(e, 16);
                            return 0 === t || function(A) {
                                return A >= 55296 && A <= 57343
                            }(t) || t > 1114111 ? 65533 : t
                        }
                        return A === nA ? 65533 : A
                    }
                    ,
                    A.prototype.consumeName = function() {
                        for (var A = ""; ; ) {
                            var e = this.consumeCodePoint();
                            if (sA(e))
                                A += l(e);
                            else {
                                if (!cA(e, this.peekCodePoint(0)))
                                    return this.reconsumeCodePoint(e),
                                    A;
                                A += l(this.consumeEscapedCodePoint())
                            }
                        }
                    }
                    ,
                    A
                }()
                  , TA = function() {
                    function A(A) {
                        this._tokens = A
                    }
                    return A.create = function(e) {
                        var t = new SA;
                        return t.write(e),
                        new A(t.read())
                    }
                    ,
                    A.parseValue = function(e) {
                        return A.create(e).parseComponentValue()
                    }
                    ,
                    A.parseValues = function(e) {
                        return A.create(e).parseComponentValues()
                    }
                    ,
                    A.prototype.parseComponentValue = function() {
                        for (var A = this.consumeToken(); 31 === A.type; )
                            A = this.consumeToken();
                        if (32 === A.type)
                            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                        this.reconsumeToken(A);
                        var e = this.consumeComponentValue();
                        do {
                            A = this.consumeToken()
                        } while (31 === A.type);
                        if (32 === A.type)
                            return e;
                        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                    }
                    ,
                    A.prototype.parseComponentValues = function() {
                        for (var A = []; ; ) {
                            var e = this.consumeComponentValue();
                            if (32 === e.type)
                                return A;
                            A.push(e),
                            A.push()
                        }
                    }
                    ,
                    A.prototype.consumeComponentValue = function() {
                        var A = this.consumeToken();
                        switch (A.type) {
                        case 11:
                        case 28:
                        case 2:
                            return this.consumeSimpleBlock(A.type);
                        case 19:
                            return this.consumeFunction(A)
                        }
                        return A
                    }
                    ,
                    A.prototype.consumeSimpleBlock = function(A) {
                        for (var e = {
                            type: A,
                            values: []
                        }, t = this.consumeToken(); ; ) {
                            if (32 === t.type || JA(t, A))
                                return e;
                            this.reconsumeToken(t),
                            e.values.push(this.consumeComponentValue()),
                            t = this.consumeToken()
                        }
                    }
                    ,
                    A.prototype.consumeFunction = function(A) {
                        for (var e = {
                            name: A.value,
                            values: [],
                            type: 18
                        }; ; ) {
                            var t = this.consumeToken();
                            if (32 === t.type || 3 === t.type)
                                return e;
                            this.reconsumeToken(t),
                            e.values.push(this.consumeComponentValue())
                        }
                    }
                    ,
                    A.prototype.consumeToken = function() {
                        var A = this._tokens.shift();
                        return void 0 === A ? DA : A
                    }
                    ,
                    A.prototype.reconsumeToken = function(A) {
                        this._tokens.unshift(A)
                    }
                    ,
                    A
                }()
                  , RA = function(A) {
                    return 15 === A.type
                }
                  , MA = function(A) {
                    return 17 === A.type
                }
                  , OA = function(A) {
                    return 20 === A.type
                }
                  , NA = function(A) {
                    return 0 === A.type
                }
                  , PA = function(A, e) {
                    return OA(A) && A.value === e
                }
                  , GA = function(A) {
                    return 31 !== A.type
                }
                  , _A = function(A) {
                    return 31 !== A.type && 4 !== A.type
                }
                  , VA = function(A) {
                    var e = []
                      , t = [];
                    return A.forEach((function(A) {
                        if (4 === A.type) {
                            if (0 === t.length)
                                throw new Error("Error parsing function args, zero tokens for arg");
                            return e.push(t),
                            void (t = [])
                        }
                        31 !== A.type && t.push(A)
                    }
                    )),
                    t.length && e.push(t),
                    e
                }
                  , JA = function(A, e) {
                    return 11 === e && 12 === A.type || 28 === e && 29 === A.type || 2 === e && 3 === A.type
                }
                  , XA = function(A) {
                    return 17 === A.type || 15 === A.type
                }
                  , YA = function(A) {
                    return 16 === A.type || XA(A)
                }
                  , WA = function(A) {
                    return A.length > 1 ? [A[0], A[1]] : [A[0]]
                }
                  , jA = {
                    type: 17,
                    number: 0,
                    flags: 4
                }
                  , ZA = {
                    type: 16,
                    number: 50,
                    flags: 4
                }
                  , zA = {
                    type: 16,
                    number: 100,
                    flags: 4
                }
                  , $A = function(A, e, t) {
                    var n = A[0]
                      , r = A[1];
                    return [qA(n, e), qA(void 0 !== r ? r : n, t)]
                }
                  , qA = function(A, e) {
                    if (16 === A.type)
                        return A.number / 100 * e;
                    if (RA(A))
                        switch (A.unit) {
                        case "rem":
                        case "em":
                            return 16 * A.number;
                        default:
                            return A.number
                        }
                    return A.number
                }
                  , Ae = "grad"
                  , ee = "turn"
                  , te = function(A, e) {
                    if (15 === e.type)
                        switch (e.unit) {
                        case "deg":
                            return Math.PI * e.number / 180;
                        case Ae:
                            return Math.PI / 200 * e.number;
                        case "rad":
                            return e.number;
                        case ee:
                            return 2 * Math.PI * e.number
                        }
                    throw new Error("Unsupported angle type")
                }
                  , ne = function(A) {
                    return 15 === A.type && ("deg" === A.unit || A.unit === Ae || "rad" === A.unit || A.unit === ee)
                }
                  , re = function(A) {
                    switch (A.filter(OA).map((function(A) {
                        return A.value
                    }
                    )).join(" ")) {
                    case "to bottom right":
                    case "to right bottom":
                    case "left top":
                    case "top left":
                        return [jA, jA];
                    case "to top":
                    case "bottom":
                        return ie(0);
                    case "to bottom left":
                    case "to left bottom":
                    case "right top":
                    case "top right":
                        return [jA, zA];
                    case "to right":
                    case "left":
                        return ie(90);
                    case "to top left":
                    case "to left top":
                    case "right bottom":
                    case "bottom right":
                        return [zA, zA];
                    case "to bottom":
                    case "top":
                        return ie(180);
                    case "to top right":
                    case "to right top":
                    case "left bottom":
                    case "bottom left":
                        return [zA, jA];
                    case "to left":
                    case "right":
                        return ie(270)
                    }
                    return 0
                }
                  , ie = function(A) {
                    return Math.PI * A / 180
                }
                  , oe = function(A, e) {
                    if (18 === e.type) {
                        var t = fe[e.name];
                        if (void 0 === t)
                            throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
                        return t(A, e.values)
                    }
                    if (5 === e.type) {
                        if (3 === e.value.length) {
                            var n = e.value.substring(0, 1)
                              , r = e.value.substring(1, 2)
                              , i = e.value.substring(2, 3);
                            return le(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(i + i, 16), 1)
                        }
                        if (4 === e.value.length) {
                            n = e.value.substring(0, 1),
                            r = e.value.substring(1, 2),
                            i = e.value.substring(2, 3);
                            var o = e.value.substring(3, 4);
                            return le(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(i + i, 16), parseInt(o + o, 16) / 255)
                        }
                        if (6 === e.value.length)
                            return n = e.value.substring(0, 2),
                            r = e.value.substring(2, 4),
                            i = e.value.substring(4, 6),
                            le(parseInt(n, 16), parseInt(r, 16), parseInt(i, 16), 1);
                        if (8 === e.value.length)
                            return n = e.value.substring(0, 2),
                            r = e.value.substring(2, 4),
                            i = e.value.substring(4, 6),
                            o = e.value.substring(6, 8),
                            le(parseInt(n, 16), parseInt(r, 16), parseInt(i, 16), parseInt(o, 16) / 255)
                    }
                    if (20 === e.type) {
                        var a = pe[e.value.toUpperCase()];
                        if (void 0 !== a)
                            return a
                    }
                    return pe.TRANSPARENT
                }
                  , ae = function(A) {
                    return 0 == (255 & A)
                }
                  , se = function(A) {
                    var e = 255 & A
                      , t = 255 & A >> 8
                      , n = 255 & A >> 16
                      , r = 255 & A >> 24;
                    return e < 255 ? "rgba(" + r + "," + n + "," + t + "," + e / 255 + ")" : "rgb(" + r + "," + n + "," + t + ")"
                }
                  , le = function(A, e, t, n) {
                    return (A << 24 | e << 16 | t << 8 | Math.round(255 * n) << 0) >>> 0
                }
                  , ce = function(A, e) {
                    if (17 === A.type)
                        return A.number;
                    if (16 === A.type) {
                        var t = 3 === e ? 1 : 255;
                        return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
                    }
                    return 0
                }
                  , ue = function(A, e) {
                    var t = e.filter(_A);
                    if (3 === t.length) {
                        var n = t.map(ce)
                          , r = n[0]
                          , i = n[1]
                          , o = n[2];
                        return le(r, i, o, 1)
                    }
                    if (4 === t.length) {
                        var a = t.map(ce)
                          , s = (r = a[0],
                        i = a[1],
                        o = a[2],
                        a[3]);
                        return le(r, i, o, s)
                    }
                    return 0
                };
                function de(A, e, t) {
                    return t < 0 && (t += 1),
                    t >= 1 && (t -= 1),
                    t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
                }
                var Be, ge = function(A, e) {
                    var t = e.filter(_A)
                      , n = t[0]
                      , r = t[1]
                      , i = t[2]
                      , o = t[3]
                      , a = (17 === n.type ? ie(n.number) : te(A, n)) / (2 * Math.PI)
                      , s = YA(r) ? r.number / 100 : 0
                      , l = YA(i) ? i.number / 100 : 0
                      , c = void 0 !== o && YA(o) ? qA(o, 1) : 1;
                    if (0 === s)
                        return le(255 * l, 255 * l, 255 * l, 1);
                    var u = l <= .5 ? l * (s + 1) : l + s - l * s
                      , d = 2 * l - u
                      , B = de(d, u, a + 1 / 3)
                      , g = de(d, u, a)
                      , f = de(d, u, a - 1 / 3);
                    return le(255 * B, 255 * g, 255 * f, c)
                }, fe = {
                    hsl: ge,
                    hsla: ge,
                    rgb: ue,
                    rgba: ue
                }, he = function(A, e) {
                    return oe(A, TA.create(e).parseComponentValue())
                }, pe = {
                    ALICEBLUE: 4042850303,
                    ANTIQUEWHITE: 4209760255,
                    AQUA: 16777215,
                    AQUAMARINE: 2147472639,
                    AZURE: 4043309055,
                    BEIGE: 4126530815,
                    BISQUE: 4293182719,
                    BLACK: 255,
                    BLANCHEDALMOND: 4293643775,
                    BLUE: 65535,
                    BLUEVIOLET: 2318131967,
                    BROWN: 2771004159,
                    BURLYWOOD: 3736635391,
                    CADETBLUE: 1604231423,
                    CHARTREUSE: 2147418367,
                    CHOCOLATE: 3530104575,
                    CORAL: 4286533887,
                    CORNFLOWERBLUE: 1687547391,
                    CORNSILK: 4294499583,
                    CRIMSON: 3692313855,
                    CYAN: 16777215,
                    DARKBLUE: 35839,
                    DARKCYAN: 9145343,
                    DARKGOLDENROD: 3095837695,
                    DARKGRAY: 2846468607,
                    DARKGREEN: 6553855,
                    DARKGREY: 2846468607,
                    DARKKHAKI: 3182914559,
                    DARKMAGENTA: 2332068863,
                    DARKOLIVEGREEN: 1433087999,
                    DARKORANGE: 4287365375,
                    DARKORCHID: 2570243327,
                    DARKRED: 2332033279,
                    DARKSALMON: 3918953215,
                    DARKSEAGREEN: 2411499519,
                    DARKSLATEBLUE: 1211993087,
                    DARKSLATEGRAY: 793726975,
                    DARKSLATEGREY: 793726975,
                    DARKTURQUOISE: 13554175,
                    DARKVIOLET: 2483082239,
                    DEEPPINK: 4279538687,
                    DEEPSKYBLUE: 12582911,
                    DIMGRAY: 1768516095,
                    DIMGREY: 1768516095,
                    DODGERBLUE: 512819199,
                    FIREBRICK: 2988581631,
                    FLORALWHITE: 4294635775,
                    FORESTGREEN: 579543807,
                    FUCHSIA: 4278255615,
                    GAINSBORO: 3705462015,
                    GHOSTWHITE: 4177068031,
                    GOLD: 4292280575,
                    GOLDENROD: 3668254975,
                    GRAY: 2155905279,
                    GREEN: 8388863,
                    GREENYELLOW: 2919182335,
                    GREY: 2155905279,
                    HONEYDEW: 4043305215,
                    HOTPINK: 4285117695,
                    INDIANRED: 3445382399,
                    INDIGO: 1258324735,
                    IVORY: 4294963455,
                    KHAKI: 4041641215,
                    LAVENDER: 3873897215,
                    LAVENDERBLUSH: 4293981695,
                    LAWNGREEN: 2096890111,
                    LEMONCHIFFON: 4294626815,
                    LIGHTBLUE: 2916673279,
                    LIGHTCORAL: 4034953471,
                    LIGHTCYAN: 3774873599,
                    LIGHTGOLDENRODYELLOW: 4210742015,
                    LIGHTGRAY: 3553874943,
                    LIGHTGREEN: 2431553791,
                    LIGHTGREY: 3553874943,
                    LIGHTPINK: 4290167295,
                    LIGHTSALMON: 4288707327,
                    LIGHTSEAGREEN: 548580095,
                    LIGHTSKYBLUE: 2278488831,
                    LIGHTSLATEGRAY: 2005441023,
                    LIGHTSLATEGREY: 2005441023,
                    LIGHTSTEELBLUE: 2965692159,
                    LIGHTYELLOW: 4294959359,
                    LIME: 16711935,
                    LIMEGREEN: 852308735,
                    LINEN: 4210091775,
                    MAGENTA: 4278255615,
                    MAROON: 2147483903,
                    MEDIUMAQUAMARINE: 1724754687,
                    MEDIUMBLUE: 52735,
                    MEDIUMORCHID: 3126187007,
                    MEDIUMPURPLE: 2473647103,
                    MEDIUMSEAGREEN: 1018393087,
                    MEDIUMSLATEBLUE: 2070474495,
                    MEDIUMSPRINGGREEN: 16423679,
                    MEDIUMTURQUOISE: 1221709055,
                    MEDIUMVIOLETRED: 3340076543,
                    MIDNIGHTBLUE: 421097727,
                    MINTCREAM: 4127193855,
                    MISTYROSE: 4293190143,
                    MOCCASIN: 4293178879,
                    NAVAJOWHITE: 4292783615,
                    NAVY: 33023,
                    OLDLACE: 4260751103,
                    OLIVE: 2155872511,
                    OLIVEDRAB: 1804477439,
                    ORANGE: 4289003775,
                    ORANGERED: 4282712319,
                    ORCHID: 3664828159,
                    PALEGOLDENROD: 4008225535,
                    PALEGREEN: 2566625535,
                    PALETURQUOISE: 2951671551,
                    PALEVIOLETRED: 3681588223,
                    PAPAYAWHIP: 4293907967,
                    PEACHPUFF: 4292524543,
                    PERU: 3448061951,
                    PINK: 4290825215,
                    PLUM: 3718307327,
                    POWDERBLUE: 2967529215,
                    PURPLE: 2147516671,
                    REBECCAPURPLE: 1714657791,
                    RED: 4278190335,
                    ROSYBROWN: 3163525119,
                    ROYALBLUE: 1097458175,
                    SADDLEBROWN: 2336560127,
                    SALMON: 4202722047,
                    SANDYBROWN: 4104413439,
                    SEAGREEN: 780883967,
                    SEASHELL: 4294307583,
                    SIENNA: 2689740287,
                    SILVER: 3233857791,
                    SKYBLUE: 2278484991,
                    SLATEBLUE: 1784335871,
                    SLATEGRAY: 1887473919,
                    SLATEGREY: 1887473919,
                    SNOW: 4294638335,
                    SPRINGGREEN: 16744447,
                    STEELBLUE: 1182971135,
                    TAN: 3535047935,
                    TEAL: 8421631,
                    THISTLE: 3636451583,
                    TOMATO: 4284696575,
                    TRANSPARENT: 0,
                    TURQUOISE: 1088475391,
                    VIOLET: 4001558271,
                    WHEAT: 4125012991,
                    WHITE: 4294967295,
                    WHITESMOKE: 4126537215,
                    YELLOW: 4294902015,
                    YELLOWGREEN: 2597139199
                };
                !function(A) {
                    A[A.BORDER_BOX = 0] = "BORDER_BOX",
                    A[A.PADDING_BOX = 1] = "PADDING_BOX",
                    A[A.CONTENT_BOX = 2] = "CONTENT_BOX"
                }(Be || (Be = {}));
                var we, me = {
                    name: "background-clip",
                    initialValue: "border-box",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return e.map((function(A) {
                            if (OA(A))
                                switch (A.value) {
                                case "padding-box":
                                    return Be.PADDING_BOX;
                                case "content-box":
                                    return Be.CONTENT_BOX
                                }
                            return Be.BORDER_BOX
                        }
                        ))
                    }
                }, be = {
                    name: "background-color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: 3,
                    format: "color"
                }, Qe = function(A, e) {
                    var t = oe(A, e[0])
                      , n = e[1];
                    return n && YA(n) ? {
                        color: t,
                        stop: n
                    } : {
                        color: t,
                        stop: null
                    }
                }, Ce = function(A, e) {
                    var t = A[0]
                      , n = A[A.length - 1];
                    null === t.stop && (t.stop = jA),
                    null === n.stop && (n.stop = zA);
                    for (var r = [], i = 0, o = 0; o < A.length; o++) {
                        var a = A[o].stop;
                        if (null !== a) {
                            var s = qA(a, e);
                            s > i ? r.push(s) : r.push(i),
                            i = s
                        } else
                            r.push(null)
                    }
                    var l = null;
                    for (o = 0; o < r.length; o++) {
                        var c = r[o];
                        if (null === c)
                            null === l && (l = o);
                        else if (null !== l) {
                            for (var u = o - l, d = (c - r[l - 1]) / (u + 1), B = 1; B <= u; B++)
                                r[l + B - 1] = d * B;
                            l = null
                        }
                    }
                    return A.map((function(A, t) {
                        return {
                            color: A.color,
                            stop: Math.max(Math.min(1, r[t] / e), 0)
                        }
                    }
                    ))
                }, Fe = function(A, e, t) {
                    var n = "number" == typeof A ? A : function(A, e, t) {
                        var n = e / 2
                          , r = t / 2
                          , i = qA(A[0], e) - n
                          , o = r - qA(A[1], t);
                        return (Math.atan2(o, i) + 2 * Math.PI) % (2 * Math.PI)
                    }(A, e, t)
                      , r = Math.abs(e * Math.sin(n)) + Math.abs(t * Math.cos(n))
                      , i = e / 2
                      , o = t / 2
                      , a = r / 2
                      , s = Math.sin(n - Math.PI / 2) * a
                      , l = Math.cos(n - Math.PI / 2) * a;
                    return [r, i - l, i + l, o - s, o + s]
                }, Ue = function(A, e) {
                    return Math.sqrt(A * A + e * e)
                }, Ee = function(A, e, t, n, r) {
                    return [[0, 0], [0, e], [A, 0], [A, e]].reduce((function(A, e) {
                        var i = e[0]
                          , o = e[1]
                          , a = Ue(t - i, n - o);
                        return (r ? a < A.optimumDistance : a > A.optimumDistance) ? {
                            optimumCorner: e,
                            optimumDistance: a
                        } : A
                    }
                    ), {
                        optimumDistance: r ? 1 / 0 : -1 / 0,
                        optimumCorner: null
                    }).optimumCorner
                }, ye = function(A, e) {
                    var t = ie(180)
                      , n = [];
                    return VA(e).forEach((function(e, r) {
                        if (0 === r) {
                            var i = e[0];
                            if (20 === i.type && -1 !== ["top", "left", "right", "bottom"].indexOf(i.value))
                                return void (t = re(e));
                            if (ne(i))
                                return void (t = (te(A, i) + ie(270)) % ie(360))
                        }
                        var o = Qe(A, e);
                        n.push(o)
                    }
                    )),
                    {
                        angle: t,
                        stops: n,
                        type: we.LINEAR_GRADIENT
                    }
                }, He = "closest-side", Ie = "farthest-side", xe = "closest-corner", ve = "farthest-corner", ke = "circle", Le = "ellipse", Ke = "cover", De = "contain", Se = function(A, e) {
                    var t = Te.CIRCLE
                      , n = Re.FARTHEST_CORNER
                      , r = []
                      , i = [];
                    return VA(e).forEach((function(e, o) {
                        var a = !0;
                        if (0 === o ? a = e.reduce((function(A, e) {
                            if (OA(e))
                                switch (e.value) {
                                case "center":
                                    return i.push(ZA),
                                    !1;
                                case "top":
                                case "left":
                                    return i.push(jA),
                                    !1;
                                case "right":
                                case "bottom":
                                    return i.push(zA),
                                    !1
                                }
                            else if (YA(e) || XA(e))
                                return i.push(e),
                                !1;
                            return A
                        }
                        ), a) : 1 === o && (a = e.reduce((function(A, e) {
                            if (OA(e))
                                switch (e.value) {
                                case ke:
                                    return t = Te.CIRCLE,
                                    !1;
                                case Le:
                                    return t = Te.ELLIPSE,
                                    !1;
                                case De:
                                case He:
                                    return n = Re.CLOSEST_SIDE,
                                    !1;
                                case Ie:
                                    return n = Re.FARTHEST_SIDE,
                                    !1;
                                case xe:
                                    return n = Re.CLOSEST_CORNER,
                                    !1;
                                case Ke:
                                case ve:
                                    return n = Re.FARTHEST_CORNER,
                                    !1
                                }
                            else if (XA(e) || YA(e))
                                return Array.isArray(n) || (n = []),
                                n.push(e),
                                !1;
                            return A
                        }
                        ), a)),
                        a) {
                            var s = Qe(A, e);
                            r.push(s)
                        }
                    }
                    )),
                    {
                        size: n,
                        shape: t,
                        stops: r,
                        position: i,
                        type: we.RADIAL_GRADIENT
                    }
                };
                !function(A) {
                    A[A.URL = 0] = "URL",
                    A[A.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT",
                    A[A.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT"
                }(we || (we = {}));
                var Te, Re;
                (function(A) {
                    A[A.CIRCLE = 0] = "CIRCLE",
                    A[A.ELLIPSE = 1] = "ELLIPSE"
                }
                )(Te || (Te = {})),
                function(A) {
                    A[A.CLOSEST_SIDE = 0] = "CLOSEST_SIDE",
                    A[A.FARTHEST_SIDE = 1] = "FARTHEST_SIDE",
                    A[A.CLOSEST_CORNER = 2] = "CLOSEST_CORNER",
                    A[A.FARTHEST_CORNER = 3] = "FARTHEST_CORNER"
                }(Re || (Re = {}));
                var Me = function(A, e) {
                    if (22 === e.type) {
                        var t = {
                            url: e.value,
                            type: we.URL
                        };
                        return A.cache.addImage(e.value),
                        t
                    }
                    if (18 === e.type) {
                        var n = Ne[e.name];
                        if (void 0 === n)
                            throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
                        return n(A, e.values)
                    }
                    throw new Error("Unsupported image type " + e.type)
                };
                var Oe, Ne = {
                    "linear-gradient": function(A, e) {
                        var t = ie(180)
                          , n = [];
                        return VA(e).forEach((function(e, r) {
                            if (0 === r) {
                                var i = e[0];
                                if (20 === i.type && "to" === i.value)
                                    return void (t = re(e));
                                if (ne(i))
                                    return void (t = te(A, i))
                            }
                            var o = Qe(A, e);
                            n.push(o)
                        }
                        )),
                        {
                            angle: t,
                            stops: n,
                            type: we.LINEAR_GRADIENT
                        }
                    },
                    "-moz-linear-gradient": ye,
                    "-ms-linear-gradient": ye,
                    "-o-linear-gradient": ye,
                    "-webkit-linear-gradient": ye,
                    "radial-gradient": function(A, e) {
                        var t = Te.CIRCLE
                          , n = Re.FARTHEST_CORNER
                          , r = []
                          , i = [];
                        return VA(e).forEach((function(e, o) {
                            var a = !0;
                            if (0 === o) {
                                var s = !1;
                                a = e.reduce((function(A, e) {
                                    if (s)
                                        if (OA(e))
                                            switch (e.value) {
                                            case "center":
                                                return i.push(ZA),
                                                A;
                                            case "top":
                                            case "left":
                                                return i.push(jA),
                                                A;
                                            case "right":
                                            case "bottom":
                                                return i.push(zA),
                                                A
                                            }
                                        else
                                            (YA(e) || XA(e)) && i.push(e);
                                    else if (OA(e))
                                        switch (e.value) {
                                        case ke:
                                            return t = Te.CIRCLE,
                                            !1;
                                        case Le:
                                            return t = Te.ELLIPSE,
                                            !1;
                                        case "at":
                                            return s = !0,
                                            !1;
                                        case He:
                                            return n = Re.CLOSEST_SIDE,
                                            !1;
                                        case Ke:
                                        case Ie:
                                            return n = Re.FARTHEST_SIDE,
                                            !1;
                                        case De:
                                        case xe:
                                            return n = Re.CLOSEST_CORNER,
                                            !1;
                                        case ve:
                                            return n = Re.FARTHEST_CORNER,
                                            !1
                                        }
                                    else if (XA(e) || YA(e))
                                        return Array.isArray(n) || (n = []),
                                        n.push(e),
                                        !1;
                                    return A
                                }
                                ), a)
                            }
                            if (a) {
                                var l = Qe(A, e);
                                r.push(l)
                            }
                        }
                        )),
                        {
                            size: n,
                            shape: t,
                            stops: r,
                            position: i,
                            type: we.RADIAL_GRADIENT
                        }
                    },
                    "-moz-radial-gradient": Se,
                    "-ms-radial-gradient": Se,
                    "-o-radial-gradient": Se,
                    "-webkit-radial-gradient": Se,
                    "-webkit-gradient": function(A, e) {
                        var t = ie(180)
                          , n = []
                          , r = we.LINEAR_GRADIENT
                          , i = Te.CIRCLE
                          , o = Re.FARTHEST_CORNER;
                        return VA(e).forEach((function(e, t) {
                            var i = e[0];
                            if (0 === t) {
                                if (OA(i) && "linear" === i.value)
                                    return void (r = we.LINEAR_GRADIENT);
                                if (OA(i) && "radial" === i.value)
                                    return void (r = we.RADIAL_GRADIENT)
                            }
                            if (18 === i.type)
                                if ("from" === i.name) {
                                    var o = oe(A, i.values[0]);
                                    n.push({
                                        stop: jA,
                                        color: o
                                    })
                                } else if ("to" === i.name)
                                    o = oe(A, i.values[0]),
                                    n.push({
                                        stop: zA,
                                        color: o
                                    });
                                else if ("color-stop" === i.name) {
                                    var a = i.values.filter(_A);
                                    if (2 === a.length) {
                                        o = oe(A, a[1]);
                                        var s = a[0];
                                        MA(s) && n.push({
                                            stop: {
                                                type: 16,
                                                number: 100 * s.number,
                                                flags: s.flags
                                            },
                                            color: o
                                        })
                                    }
                                }
                        }
                        )),
                        r === we.LINEAR_GRADIENT ? {
                            angle: (t + ie(180)) % ie(360),
                            stops: n,
                            type: r
                        } : {
                            size: o,
                            shape: i,
                            stops: n,
                            position: [],
                            type: r
                        }
                    }
                }, Pe = {
                    name: "background-image",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, e) {
                        if (0 === e.length)
                            return [];
                        var t = e[0];
                        return 20 === t.type && "none" === t.value ? [] : e.filter((function(A) {
                            return _A(A) && function(A) {
                                return !(20 === A.type && "none" === A.value || 18 === A.type && !Ne[A.name])
                            }(A)
                        }
                        )).map((function(e) {
                            return Me(A, e)
                        }
                        ))
                    }
                }, Ge = {
                    name: "background-origin",
                    initialValue: "border-box",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return e.map((function(A) {
                            if (OA(A))
                                switch (A.value) {
                                case "padding-box":
                                    return 1;
                                case "content-box":
                                    return 2
                                }
                            return 0
                        }
                        ))
                    }
                }, _e = {
                    name: "background-position",
                    initialValue: "0% 0%",
                    type: 1,
                    prefix: !1,
                    parse: function(A, e) {
                        return VA(e).map((function(A) {
                            return A.filter(YA)
                        }
                        )).map(WA)
                    }
                };
                !function(A) {
                    A[A.REPEAT = 0] = "REPEAT",
                    A[A.NO_REPEAT = 1] = "NO_REPEAT",
                    A[A.REPEAT_X = 2] = "REPEAT_X",
                    A[A.REPEAT_Y = 3] = "REPEAT_Y"
                }(Oe || (Oe = {}));
                var Ve, Je = {
                    name: "background-repeat",
                    initialValue: "repeat",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return VA(e).map((function(A) {
                            return A.filter(OA).map((function(A) {
                                return A.value
                            }
                            )).join(" ")
                        }
                        )).map(Xe)
                    }
                }, Xe = function(A) {
                    switch (A) {
                    case "no-repeat":
                        return Oe.NO_REPEAT;
                    case "repeat-x":
                    case "repeat no-repeat":
                        return Oe.REPEAT_X;
                    case "repeat-y":
                    case "no-repeat repeat":
                        return Oe.REPEAT_Y;
                    default:
                        return Oe.REPEAT
                    }
                };
                !function(A) {
                    A.AUTO = "auto",
                    A.CONTAIN = "contain",
                    A.COVER = "cover"
                }(Ve || (Ve = {}));
                var Ye, We = {
                    name: "background-size",
                    initialValue: "0",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return VA(e).map((function(A) {
                            return A.filter(je)
                        }
                        ))
                    }
                }, je = function(A) {
                    return OA(A) || YA(A)
                }, Ze = function(A) {
                    return {
                        name: "border-" + A + "-color",
                        initialValue: "transparent",
                        prefix: !1,
                        type: 3,
                        format: "color"
                    }
                }, ze = Ze("top"), $e = Ze("right"), qe = Ze("bottom"), At = Ze("left"), et = function(A) {
                    return {
                        name: "border-radius-" + A,
                        initialValue: "0 0",
                        prefix: !1,
                        type: 1,
                        parse: function(A, e) {
                            return WA(e.filter(YA))
                        }
                    }
                }, tt = et("top-left"), nt = et("top-right"), rt = et("bottom-right"), it = et("bottom-left");
                !function(A) {
                    A[A.NONE = 0] = "NONE",
                    A[A.SOLID = 1] = "SOLID",
                    A[A.DASHED = 2] = "DASHED",
                    A[A.DOTTED = 3] = "DOTTED",
                    A[A.DOUBLE = 4] = "DOUBLE"
                }(Ye || (Ye = {}));
                var ot, at = function(A) {
                    return {
                        name: "border-" + A + "-style",
                        initialValue: "solid",
                        prefix: !1,
                        type: 2,
                        parse: function(A, e) {
                            switch (e) {
                            case "none":
                                return Ye.NONE;
                            case "dashed":
                                return Ye.DASHED;
                            case "dotted":
                                return Ye.DOTTED;
                            case "double":
                                return Ye.DOUBLE
                            }
                            return Ye.SOLID
                        }
                    }
                }, st = at("top"), lt = at("right"), ct = at("bottom"), ut = at("left"), dt = function(A) {
                    return {
                        name: "border-" + A + "-width",
                        initialValue: "0",
                        type: 0,
                        prefix: !1,
                        parse: function(A, e) {
                            return RA(e) ? e.number : 0
                        }
                    }
                }, Bt = dt("top"), gt = dt("right"), ft = dt("bottom"), ht = dt("left"), pt = {
                    name: "color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: 3,
                    format: "color"
                }, wt = {
                    name: "direction",
                    initialValue: "ltr",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        return "rtl" === e ? 1 : 0
                    }
                }, mt = {
                    name: "display",
                    initialValue: "inline-block",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return e.filter(OA).reduce((function(A, e) {
                            return A | bt(e.value)
                        }
                        ), 0)
                    }
                }, bt = function(A) {
                    switch (A) {
                    case "block":
                    case "-webkit-box":
                        return 2;
                    case "inline":
                        return 4;
                    case "run-in":
                        return 8;
                    case "flow":
                        return 16;
                    case "flow-root":
                        return 32;
                    case "table":
                        return 64;
                    case "flex":
                    case "-webkit-flex":
                        return 128;
                    case "grid":
                    case "-ms-grid":
                        return 256;
                    case "ruby":
                        return 512;
                    case "subgrid":
                        return 1024;
                    case "list-item":
                        return 2048;
                    case "table-row-group":
                        return 4096;
                    case "table-header-group":
                        return 8192;
                    case "table-footer-group":
                        return 16384;
                    case "table-row":
                        return 32768;
                    case "table-cell":
                        return 65536;
                    case "table-column-group":
                        return 131072;
                    case "table-column":
                        return 262144;
                    case "table-caption":
                        return 524288;
                    case "ruby-base":
                        return 1048576;
                    case "ruby-text":
                        return 2097152;
                    case "ruby-base-container":
                        return 4194304;
                    case "ruby-text-container":
                        return 8388608;
                    case "contents":
                        return 16777216;
                    case "inline-block":
                        return 33554432;
                    case "inline-list-item":
                        return 67108864;
                    case "inline-table":
                        return 134217728;
                    case "inline-flex":
                        return 268435456;
                    case "inline-grid":
                        return 536870912
                    }
                    return 0
                };
                !function(A) {
                    A[A.NONE = 0] = "NONE",
                    A[A.LEFT = 1] = "LEFT",
                    A[A.RIGHT = 2] = "RIGHT",
                    A[A.INLINE_START = 3] = "INLINE_START",
                    A[A.INLINE_END = 4] = "INLINE_END"
                }(ot || (ot = {}));
                var Qt, Ct = {
                    name: "float",
                    initialValue: "none",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "left":
                            return ot.LEFT;
                        case "right":
                            return ot.RIGHT;
                        case "inline-start":
                            return ot.INLINE_START;
                        case "inline-end":
                            return ot.INLINE_END
                        }
                        return ot.NONE
                    }
                }, Ft = {
                    name: "letter-spacing",
                    initialValue: "0",
                    prefix: !1,
                    type: 0,
                    parse: function(A, e) {
                        return 20 === e.type && "normal" === e.value ? 0 : 17 === e.type || 15 === e.type ? e.number : 0
                    }
                };
                !function(A) {
                    A.NORMAL = "normal",
                    A.STRICT = "strict"
                }(Qt || (Qt = {}));
                var Ut, Et = {
                    name: "line-break",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        return "strict" === e ? Qt.STRICT : Qt.NORMAL
                    }
                }, yt = {
                    name: "line-height",
                    initialValue: "normal",
                    prefix: !1,
                    type: 4
                }, Ht = function(A, e) {
                    return OA(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : YA(A) ? qA(A, e) : e
                }, It = {
                    name: "list-style-image",
                    initialValue: "none",
                    type: 0,
                    prefix: !1,
                    parse: function(A, e) {
                        return 20 === e.type && "none" === e.value ? null : Me(A, e)
                    }
                };
                !function(A) {
                    A[A.INSIDE = 0] = "INSIDE",
                    A[A.OUTSIDE = 1] = "OUTSIDE"
                }(Ut || (Ut = {}));
                var xt, vt = {
                    name: "list-style-position",
                    initialValue: "outside",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        return "inside" === e ? Ut.INSIDE : Ut.OUTSIDE
                    }
                };
                !function(A) {
                    A[A.NONE = -1] = "NONE",
                    A[A.DISC = 0] = "DISC",
                    A[A.CIRCLE = 1] = "CIRCLE",
                    A[A.SQUARE = 2] = "SQUARE",
                    A[A.DECIMAL = 3] = "DECIMAL",
                    A[A.CJK_DECIMAL = 4] = "CJK_DECIMAL",
                    A[A.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO",
                    A[A.LOWER_ROMAN = 6] = "LOWER_ROMAN",
                    A[A.UPPER_ROMAN = 7] = "UPPER_ROMAN",
                    A[A.LOWER_GREEK = 8] = "LOWER_GREEK",
                    A[A.LOWER_ALPHA = 9] = "LOWER_ALPHA",
                    A[A.UPPER_ALPHA = 10] = "UPPER_ALPHA",
                    A[A.ARABIC_INDIC = 11] = "ARABIC_INDIC",
                    A[A.ARMENIAN = 12] = "ARMENIAN",
                    A[A.BENGALI = 13] = "BENGALI",
                    A[A.CAMBODIAN = 14] = "CAMBODIAN",
                    A[A.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH",
                    A[A.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM",
                    A[A.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC",
                    A[A.DEVANAGARI = 18] = "DEVANAGARI",
                    A[A.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC",
                    A[A.GEORGIAN = 20] = "GEORGIAN",
                    A[A.GUJARATI = 21] = "GUJARATI",
                    A[A.GURMUKHI = 22] = "GURMUKHI",
                    A[A.HEBREW = 22] = "HEBREW",
                    A[A.HIRAGANA = 23] = "HIRAGANA",
                    A[A.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA",
                    A[A.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL",
                    A[A.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL",
                    A[A.KANNADA = 27] = "KANNADA",
                    A[A.KATAKANA = 28] = "KATAKANA",
                    A[A.KATAKANA_IROHA = 29] = "KATAKANA_IROHA",
                    A[A.KHMER = 30] = "KHMER",
                    A[A.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL",
                    A[A.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL",
                    A[A.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL",
                    A[A.LAO = 34] = "LAO",
                    A[A.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN",
                    A[A.MALAYALAM = 36] = "MALAYALAM",
                    A[A.MONGOLIAN = 37] = "MONGOLIAN",
                    A[A.MYANMAR = 38] = "MYANMAR",
                    A[A.ORIYA = 39] = "ORIYA",
                    A[A.PERSIAN = 40] = "PERSIAN",
                    A[A.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL",
                    A[A.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL",
                    A[A.TAMIL = 43] = "TAMIL",
                    A[A.TELUGU = 44] = "TELUGU",
                    A[A.THAI = 45] = "THAI",
                    A[A.TIBETAN = 46] = "TIBETAN",
                    A[A.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL",
                    A[A.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL",
                    A[A.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN",
                    A[A.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN",
                    A[A.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"
                }(xt || (xt = {}));
                var kt, Lt = {
                    name: "list-style-type",
                    initialValue: "none",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "disc":
                            return xt.DISC;
                        case "circle":
                            return xt.CIRCLE;
                        case "square":
                            return xt.SQUARE;
                        case "decimal":
                            return xt.DECIMAL;
                        case "cjk-decimal":
                            return xt.CJK_DECIMAL;
                        case "decimal-leading-zero":
                            return xt.DECIMAL_LEADING_ZERO;
                        case "lower-roman":
                            return xt.LOWER_ROMAN;
                        case "upper-roman":
                            return xt.UPPER_ROMAN;
                        case "lower-greek":
                            return xt.LOWER_GREEK;
                        case "lower-alpha":
                            return xt.LOWER_ALPHA;
                        case "upper-alpha":
                            return xt.UPPER_ALPHA;
                        case "arabic-indic":
                            return xt.ARABIC_INDIC;
                        case "armenian":
                            return xt.ARMENIAN;
                        case "bengali":
                            return xt.BENGALI;
                        case "cambodian":
                            return xt.CAMBODIAN;
                        case "cjk-earthly-branch":
                            return xt.CJK_EARTHLY_BRANCH;
                        case "cjk-heavenly-stem":
                            return xt.CJK_HEAVENLY_STEM;
                        case "cjk-ideographic":
                            return xt.CJK_IDEOGRAPHIC;
                        case "devanagari":
                            return xt.DEVANAGARI;
                        case "ethiopic-numeric":
                            return xt.ETHIOPIC_NUMERIC;
                        case "georgian":
                            return xt.GEORGIAN;
                        case "gujarati":
                            return xt.GUJARATI;
                        case "gurmukhi":
                            return xt.GURMUKHI;
                        case "hebrew":
                            return xt.HEBREW;
                        case "hiragana":
                            return xt.HIRAGANA;
                        case "hiragana-iroha":
                            return xt.HIRAGANA_IROHA;
                        case "japanese-formal":
                            return xt.JAPANESE_FORMAL;
                        case "japanese-informal":
                            return xt.JAPANESE_INFORMAL;
                        case "kannada":
                            return xt.KANNADA;
                        case "katakana":
                            return xt.KATAKANA;
                        case "katakana-iroha":
                            return xt.KATAKANA_IROHA;
                        case "khmer":
                            return xt.KHMER;
                        case "korean-hangul-formal":
                            return xt.KOREAN_HANGUL_FORMAL;
                        case "korean-hanja-formal":
                            return xt.KOREAN_HANJA_FORMAL;
                        case "korean-hanja-informal":
                            return xt.KOREAN_HANJA_INFORMAL;
                        case "lao":
                            return xt.LAO;
                        case "lower-armenian":
                            return xt.LOWER_ARMENIAN;
                        case "malayalam":
                            return xt.MALAYALAM;
                        case "mongolian":
                            return xt.MONGOLIAN;
                        case "myanmar":
                            return xt.MYANMAR;
                        case "oriya":
                            return xt.ORIYA;
                        case "persian":
                            return xt.PERSIAN;
                        case "simp-chinese-formal":
                            return xt.SIMP_CHINESE_FORMAL;
                        case "simp-chinese-informal":
                            return xt.SIMP_CHINESE_INFORMAL;
                        case "tamil":
                            return xt.TAMIL;
                        case "telugu":
                            return xt.TELUGU;
                        case "thai":
                            return xt.THAI;
                        case "tibetan":
                            return xt.TIBETAN;
                        case "trad-chinese-formal":
                            return xt.TRAD_CHINESE_FORMAL;
                        case "trad-chinese-informal":
                            return xt.TRAD_CHINESE_INFORMAL;
                        case "upper-armenian":
                            return xt.UPPER_ARMENIAN;
                        case "disclosure-open":
                            return xt.DISCLOSURE_OPEN;
                        case "disclosure-closed":
                            return xt.DISCLOSURE_CLOSED;
                        default:
                            return xt.NONE
                        }
                    }
                }, Kt = function(A) {
                    return {
                        name: "margin-" + A,
                        initialValue: "0",
                        prefix: !1,
                        type: 4
                    }
                }, Dt = Kt("top"), St = Kt("right"), Tt = Kt("bottom"), Rt = Kt("left");
                !function(A) {
                    A[A.VISIBLE = 0] = "VISIBLE",
                    A[A.HIDDEN = 1] = "HIDDEN",
                    A[A.SCROLL = 2] = "SCROLL",
                    A[A.CLIP = 3] = "CLIP",
                    A[A.AUTO = 4] = "AUTO"
                }(kt || (kt = {}));
                var Mt, Ot = {
                    name: "overflow",
                    initialValue: "visible",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return e.filter(OA).map((function(A) {
                            switch (A.value) {
                            case "hidden":
                                return kt.HIDDEN;
                            case "scroll":
                                return kt.SCROLL;
                            case "clip":
                                return kt.CLIP;
                            case "auto":
                                return kt.AUTO;
                            default:
                                return kt.VISIBLE
                            }
                        }
                        ))
                    }
                }, Nt = {
                    name: "overflow-wrap",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        return "break-word" === e ? "break-word" : "normal"
                    }
                }, Pt = function(A) {
                    return {
                        name: "padding-" + A,
                        initialValue: "0",
                        prefix: !1,
                        type: 3,
                        format: "length-percentage"
                    }
                }, Gt = Pt("top"), _t = Pt("right"), Vt = Pt("bottom"), Jt = Pt("left");
                !function(A) {
                    A[A.LEFT = 0] = "LEFT",
                    A[A.CENTER = 1] = "CENTER",
                    A[A.RIGHT = 2] = "RIGHT"
                }(Mt || (Mt = {}));
                var Xt, Yt = {
                    name: "text-align",
                    initialValue: "left",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "right":
                            return Mt.RIGHT;
                        case "center":
                        case "justify":
                            return Mt.CENTER;
                        default:
                            return Mt.LEFT
                        }
                    }
                };
                !function(A) {
                    A[A.STATIC = 0] = "STATIC",
                    A[A.RELATIVE = 1] = "RELATIVE",
                    A[A.ABSOLUTE = 2] = "ABSOLUTE",
                    A[A.FIXED = 3] = "FIXED",
                    A[A.STICKY = 4] = "STICKY"
                }(Xt || (Xt = {}));
                var Wt, jt = {
                    name: "position",
                    initialValue: "static",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "relative":
                            return Xt.RELATIVE;
                        case "absolute":
                            return Xt.ABSOLUTE;
                        case "fixed":
                            return Xt.FIXED;
                        case "sticky":
                            return Xt.STICKY
                        }
                        return Xt.STATIC
                    }
                }, Zt = {
                    name: "text-shadow",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, e) {
                        return 1 === e.length && PA(e[0], "none") ? [] : VA(e).map((function(e) {
                            for (var t = {
                                color: pe.TRANSPARENT,
                                offsetX: jA,
                                offsetY: jA,
                                blur: jA
                            }, n = 0, r = 0; r < e.length; r++) {
                                var i = e[r];
                                XA(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : t.blur = i,
                                n++) : t.color = oe(A, i)
                            }
                            return t
                        }
                        ))
                    }
                };
                !function(A) {
                    A[A.NONE = 0] = "NONE",
                    A[A.LOWERCASE = 1] = "LOWERCASE",
                    A[A.UPPERCASE = 2] = "UPPERCASE",
                    A[A.CAPITALIZE = 3] = "CAPITALIZE"
                }(Wt || (Wt = {}));
                var zt, $t = {
                    name: "text-transform",
                    initialValue: "none",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "uppercase":
                            return Wt.UPPERCASE;
                        case "lowercase":
                            return Wt.LOWERCASE;
                        case "capitalize":
                            return Wt.CAPITALIZE
                        }
                        return Wt.NONE
                    }
                }, qt = {
                    name: "transform",
                    initialValue: "none",
                    prefix: !0,
                    type: 0,
                    parse: function(A, e) {
                        if (20 === e.type && "none" === e.value)
                            return null;
                        if (18 === e.type) {
                            var t = An[e.name];
                            if (void 0 === t)
                                throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
                            return t(e.values)
                        }
                        return null
                    }
                }, An = {
                    matrix: function(A) {
                        var e = A.filter((function(A) {
                            return 17 === A.type
                        }
                        )).map((function(A) {
                            return A.number
                        }
                        ));
                        return 6 === e.length ? e : null
                    },
                    matrix3d: function(A) {
                        var e = A.filter((function(A) {
                            return 17 === A.type
                        }
                        )).map((function(A) {
                            return A.number
                        }
                        ))
                          , t = e[0]
                          , n = e[1];
                        e[2],
                        e[3];
                        var r = e[4]
                          , i = e[5];
                        e[6],
                        e[7],
                        e[8],
                        e[9],
                        e[10],
                        e[11];
                        var o = e[12]
                          , a = e[13];
                        return e[14],
                        e[15],
                        16 === e.length ? [t, n, r, i, o, a] : null
                    }
                }, en = {
                    type: 16,
                    number: 50,
                    flags: 4
                }, tn = [en, en], nn = {
                    name: "transform-origin",
                    initialValue: "50% 50%",
                    prefix: !0,
                    type: 1,
                    parse: function(A, e) {
                        var t = e.filter(YA);
                        return 2 !== t.length ? tn : [t[0], t[1]]
                    }
                };
                !function(A) {
                    A[A.VISIBLE = 0] = "VISIBLE",
                    A[A.HIDDEN = 1] = "HIDDEN",
                    A[A.COLLAPSE = 2] = "COLLAPSE"
                }(zt || (zt = {}));
                var rn, on = {
                    name: "visible",
                    initialValue: "none",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "hidden":
                            return zt.HIDDEN;
                        case "collapse":
                            return zt.COLLAPSE;
                        default:
                            return zt.VISIBLE
                        }
                    }
                };
                !function(A) {
                    A.NORMAL = "normal",
                    A.BREAK_ALL = "break-all",
                    A.KEEP_ALL = "keep-all"
                }(rn || (rn = {}));
                var an, sn = {
                    name: "word-break",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "break-all":
                            return rn.BREAK_ALL;
                        case "keep-all":
                            return rn.KEEP_ALL;
                        default:
                            return rn.NORMAL
                        }
                    }
                }, ln = {
                    name: "z-index",
                    initialValue: "auto",
                    prefix: !1,
                    type: 0,
                    parse: function(A, e) {
                        if (20 === e.type)
                            return {
                                auto: !0,
                                order: 0
                            };
                        if (MA(e))
                            return {
                                auto: !1,
                                order: e.number
                            };
                        throw new Error("Invalid z-index number parsed")
                    }
                }, cn = function(A, e) {
                    if (15 === e.type)
                        switch (e.unit.toLowerCase()) {
                        case "s":
                            return 1e3 * e.number;
                        case "ms":
                            return e.number
                        }
                    throw new Error("Unsupported time type")
                }, un = {
                    name: "opacity",
                    initialValue: "1",
                    type: 0,
                    prefix: !1,
                    parse: function(A, e) {
                        return MA(e) ? e.number : 1
                    }
                }, dn = {
                    name: "text-decoration-color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: 3,
                    format: "color"
                }, Bn = {
                    name: "text-decoration-line",
                    initialValue: "none",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return e.filter(OA).map((function(A) {
                            switch (A.value) {
                            case "underline":
                                return 1;
                            case "overline":
                                return 2;
                            case "line-through":
                                return 3;
                            case "none":
                                return 4
                            }
                            return 0
                        }
                        )).filter((function(A) {
                            return 0 !== A
                        }
                        ))
                    }
                }, gn = {
                    name: "font-family",
                    initialValue: "",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        var t = []
                          , n = [];
                        return e.forEach((function(A) {
                            switch (A.type) {
                            case 20:
                            case 0:
                                t.push(A.value);
                                break;
                            case 17:
                                t.push(A.number.toString());
                                break;
                            case 4:
                                n.push(t.join(" ")),
                                t.length = 0
                            }
                        }
                        )),
                        t.length && n.push(t.join(" ")),
                        n.map((function(A) {
                            return -1 === A.indexOf(" ") ? A : "'" + A + "'"
                        }
                        ))
                    }
                }, fn = {
                    name: "font-size",
                    initialValue: "0",
                    prefix: !1,
                    type: 3,
                    format: "length"
                }, hn = {
                    name: "font-weight",
                    initialValue: "normal",
                    type: 0,
                    prefix: !1,
                    parse: function(A, e) {
                        return MA(e) ? e.number : OA(e) && "bold" === e.value ? 700 : 400
                    }
                }, pn = {
                    name: "font-variant",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, e) {
                        return e.filter(OA).map((function(A) {
                            return A.value
                        }
                        ))
                    }
                };
                !function(A) {
                    A.NORMAL = "normal",
                    A.ITALIC = "italic",
                    A.OBLIQUE = "oblique"
                }(an || (an = {}));
                var wn, mn = {
                    name: "font-style",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, e) {
                        switch (e) {
                        case "oblique":
                            return an.OBLIQUE;
                        case "italic":
                            return an.ITALIC;
                        default:
                            return an.NORMAL
                        }
                    }
                }, bn = function(A, e) {
                    return 0 != (A & e)
                }, Qn = {
                    name: "content",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, e) {
                        if (0 === e.length)
                            return [];
                        var t = e[0];
                        return 20 === t.type && "none" === t.value ? [] : e
                    }
                }, Cn = {
                    name: "counter-increment",
                    initialValue: "none",
                    prefix: !0,
                    type: 1,
                    parse: function(A, e) {
                        if (0 === e.length)
                            return null;
                        var t = e[0];
                        if (20 === t.type && "none" === t.value)
                            return null;
                        for (var n = [], r = e.filter(GA), i = 0; i < r.length; i++) {
                            var o = r[i]
                              , a = r[i + 1];
                            if (20 === o.type) {
                                var s = a && MA(a) ? a.number : 1;
                                n.push({
                                    counter: o.value,
                                    increment: s
                                })
                            }
                        }
                        return n
                    }
                }, Fn = {
                    name: "counter-reset",
                    initialValue: "none",
                    prefix: !0,
                    type: 1,
                    parse: function(A, e) {
                        if (0 === e.length)
                            return [];
                        for (var t = [], n = e.filter(GA), r = 0; r < n.length; r++) {
                            var i = n[r]
                              , o = n[r + 1];
                            if (OA(i) && "none" !== i.value) {
                                var a = o && MA(o) ? o.number : 0;
                                t.push({
                                    counter: i.value,
                                    reset: a
                                })
                            }
                        }
                        return t
                    }
                }, Un = {
                    name: "duration",
                    initialValue: "0s",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        return e.filter(RA).map((function(e) {
                            return cn(A, e)
                        }
                        ))
                    }
                }, En = {
                    name: "quotes",
                    initialValue: "none",
                    prefix: !0,
                    type: 1,
                    parse: function(A, e) {
                        if (0 === e.length)
                            return null;
                        var t = e[0];
                        if (20 === t.type && "none" === t.value)
                            return null;
                        var n = []
                          , r = e.filter(NA);
                        if (r.length % 2 != 0)
                            return null;
                        for (var i = 0; i < r.length; i += 2) {
                            var o = r[i].value
                              , a = r[i + 1].value;
                            n.push({
                                open: o,
                                close: a
                            })
                        }
                        return n
                    }
                }, yn = function(A, e, t) {
                    if (!A)
                        return "";
                    var n = A[Math.min(e, A.length - 1)];
                    return n ? t ? n.open : n.close : ""
                }, Hn = {
                    name: "box-shadow",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, e) {
                        return 1 === e.length && PA(e[0], "none") ? [] : VA(e).map((function(e) {
                            for (var t = {
                                color: 255,
                                offsetX: jA,
                                offsetY: jA,
                                blur: jA,
                                spread: jA,
                                inset: !1
                            }, n = 0, r = 0; r < e.length; r++) {
                                var i = e[r];
                                PA(i, "inset") ? t.inset = !0 : XA(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : 2 === n ? t.blur = i : t.spread = i,
                                n++) : t.color = oe(A, i)
                            }
                            return t
                        }
                        ))
                    }
                };
                !function(A) {
                    A[A.FILL = 0] = "FILL",
                    A[A.STROKE = 1] = "STROKE",
                    A[A.MARKERS = 2] = "MARKERS"
                }(wn || (wn = {}));
                for (var In = {
                    name: "paint-order",
                    initialValue: "normal",
                    prefix: !1,
                    type: 1,
                    parse: function(A, e) {
                        var t = [wn.FILL, wn.STROKE, wn.MARKERS]
                          , n = [];
                        return e.filter(OA).forEach((function(A) {
                            switch (A.value) {
                            case "stroke":
                                n.push(wn.STROKE);
                                break;
                            case "fill":
                                n.push(wn.FILL);
                                break;
                            case "markers":
                                n.push(wn.MARKERS)
                            }
                        }
                        )),
                        t.forEach((function(A) {
                            -1 === n.indexOf(A) && n.push(A)
                        }
                        )),
                        n
                    }
                }, xn = {
                    name: "-webkit-text-stroke-color",
                    initialValue: "currentcolor",
                    prefix: !1,
                    type: 3,
                    format: "color"
                }, vn = {
                    name: "-webkit-text-stroke-width",
                    initialValue: "0",
                    type: 0,
                    prefix: !1,
                    parse: function(A, e) {
                        return RA(e) ? e.number : 0
                    }
                }, kn = function() {
                    function A(A, e) {
                        var t, n;
                        this.animationDuration = Dn(A, Un, e.animationDuration),
                        this.backgroundClip = Dn(A, me, e.backgroundClip),
                        this.backgroundColor = Dn(A, be, e.backgroundColor),
                        this.backgroundImage = Dn(A, Pe, e.backgroundImage),
                        this.backgroundOrigin = Dn(A, Ge, e.backgroundOrigin),
                        this.backgroundPosition = Dn(A, _e, e.backgroundPosition),
                        this.backgroundRepeat = Dn(A, Je, e.backgroundRepeat),
                        this.backgroundSize = Dn(A, We, e.backgroundSize),
                        this.borderTopColor = Dn(A, ze, e.borderTopColor),
                        this.borderRightColor = Dn(A, $e, e.borderRightColor),
                        this.borderBottomColor = Dn(A, qe, e.borderBottomColor),
                        this.borderLeftColor = Dn(A, At, e.borderLeftColor),
                        this.borderTopLeftRadius = Dn(A, tt, e.borderTopLeftRadius),
                        this.borderTopRightRadius = Dn(A, nt, e.borderTopRightRadius),
                        this.borderBottomRightRadius = Dn(A, rt, e.borderBottomRightRadius),
                        this.borderBottomLeftRadius = Dn(A, it, e.borderBottomLeftRadius),
                        this.borderTopStyle = Dn(A, st, e.borderTopStyle),
                        this.borderRightStyle = Dn(A, lt, e.borderRightStyle),
                        this.borderBottomStyle = Dn(A, ct, e.borderBottomStyle),
                        this.borderLeftStyle = Dn(A, ut, e.borderLeftStyle),
                        this.borderTopWidth = Dn(A, Bt, e.borderTopWidth),
                        this.borderRightWidth = Dn(A, gt, e.borderRightWidth),
                        this.borderBottomWidth = Dn(A, ft, e.borderBottomWidth),
                        this.borderLeftWidth = Dn(A, ht, e.borderLeftWidth),
                        this.boxShadow = Dn(A, Hn, e.boxShadow),
                        this.color = Dn(A, pt, e.color),
                        this.direction = Dn(A, wt, e.direction),
                        this.display = Dn(A, mt, e.display),
                        this.float = Dn(A, Ct, e.cssFloat),
                        this.fontFamily = Dn(A, gn, e.fontFamily),
                        this.fontSize = Dn(A, fn, e.fontSize),
                        this.fontStyle = Dn(A, mn, e.fontStyle),
                        this.fontVariant = Dn(A, pn, e.fontVariant),
                        this.fontWeight = Dn(A, hn, e.fontWeight),
                        this.letterSpacing = Dn(A, Ft, e.letterSpacing),
                        this.lineBreak = Dn(A, Et, e.lineBreak),
                        this.lineHeight = Dn(A, yt, e.lineHeight),
                        this.listStyleImage = Dn(A, It, e.listStyleImage),
                        this.listStylePosition = Dn(A, vt, e.listStylePosition),
                        this.listStyleType = Dn(A, Lt, e.listStyleType),
                        this.marginTop = Dn(A, Dt, e.marginTop),
                        this.marginRight = Dn(A, St, e.marginRight),
                        this.marginBottom = Dn(A, Tt, e.marginBottom),
                        this.marginLeft = Dn(A, Rt, e.marginLeft),
                        this.opacity = Dn(A, un, e.opacity);
                        var r = Dn(A, Ot, e.overflow);
                        this.overflowX = r[0],
                        this.overflowY = r[r.length > 1 ? 1 : 0],
                        this.overflowWrap = Dn(A, Nt, e.overflowWrap),
                        this.paddingTop = Dn(A, Gt, e.paddingTop),
                        this.paddingRight = Dn(A, _t, e.paddingRight),
                        this.paddingBottom = Dn(A, Vt, e.paddingBottom),
                        this.paddingLeft = Dn(A, Jt, e.paddingLeft),
                        this.paintOrder = Dn(A, In, e.paintOrder),
                        this.position = Dn(A, jt, e.position),
                        this.textAlign = Dn(A, Yt, e.textAlign),
                        this.textDecorationColor = Dn(A, dn, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color),
                        this.textDecorationLine = Dn(A, Bn, null !== (n = e.textDecorationLine) && void 0 !== n ? n : e.textDecoration),
                        this.textShadow = Dn(A, Zt, e.textShadow),
                        this.textTransform = Dn(A, $t, e.textTransform),
                        this.transform = Dn(A, qt, e.transform),
                        this.transformOrigin = Dn(A, nn, e.transformOrigin),
                        this.visibility = Dn(A, on, e.visibility),
                        this.webkitTextStrokeColor = Dn(A, xn, e.webkitTextStrokeColor),
                        this.webkitTextStrokeWidth = Dn(A, vn, e.webkitTextStrokeWidth),
                        this.wordBreak = Dn(A, sn, e.wordBreak),
                        this.zIndex = Dn(A, ln, e.zIndex)
                    }
                    return A.prototype.isVisible = function() {
                        return this.display > 0 && this.opacity > 0 && this.visibility === zt.VISIBLE
                    }
                    ,
                    A.prototype.isTransparent = function() {
                        return ae(this.backgroundColor)
                    }
                    ,
                    A.prototype.isTransformed = function() {
                        return null !== this.transform
                    }
                    ,
                    A.prototype.isPositioned = function() {
                        return this.position !== Xt.STATIC
                    }
                    ,
                    A.prototype.isPositionedWithZIndex = function() {
                        return this.isPositioned() && !this.zIndex.auto
                    }
                    ,
                    A.prototype.isFloating = function() {
                        return this.float !== ot.NONE
                    }
                    ,
                    A.prototype.isInlineLevel = function() {
                        return bn(this.display, 4) || bn(this.display, 33554432) || bn(this.display, 268435456) || bn(this.display, 536870912) || bn(this.display, 67108864) || bn(this.display, 134217728)
                    }
                    ,
                    A
                }(), Ln = function(A, e) {
                    this.content = Dn(A, Qn, e.content),
                    this.quotes = Dn(A, En, e.quotes)
                }, Kn = function(A, e) {
                    this.counterIncrement = Dn(A, Cn, e.counterIncrement),
                    this.counterReset = Dn(A, Fn, e.counterReset)
                }, Dn = function(A, e, t) {
                    var n = new SA
                      , r = null != t ? t.toString() : e.initialValue;
                    n.write(r);
                    var i = new TA(n.read());
                    switch (e.type) {
                    case 2:
                        var o = i.parseComponentValue();
                        return e.parse(A, OA(o) ? o.value : e.initialValue);
                    case 0:
                        return e.parse(A, i.parseComponentValue());
                    case 1:
                        return e.parse(A, i.parseComponentValues());
                    case 4:
                        return i.parseComponentValue();
                    case 3:
                        switch (e.format) {
                        case "angle":
                            return te(A, i.parseComponentValue());
                        case "color":
                            return oe(A, i.parseComponentValue());
                        case "image":
                            return Me(A, i.parseComponentValue());
                        case "length":
                            var a = i.parseComponentValue();
                            return XA(a) ? a : jA;
                        case "length-percentage":
                            var s = i.parseComponentValue();
                            return YA(s) ? s : jA;
                        case "time":
                            return cn(A, i.parseComponentValue())
                        }
                    }
                }, Sn = function(A, e) {
                    var t = function(A) {
                        switch (A.getAttribute("data-html2canvas-debug")) {
                        case "all":
                            return 1;
                        case "clone":
                            return 2;
                        case "parse":
                            return 3;
                        case "render":
                            return 4;
                        default:
                            return 0
                        }
                    }(A);
                    return 1 === t || e === t
                }, Tn = function(A, e) {
                    this.context = A,
                    this.textNodes = [],
                    this.elements = [],
                    this.flags = 0,
                    Sn(e, 3),
                    this.styles = new kn(A,window.getComputedStyle(e, null)),
                    Pr(e) && (this.styles.animationDuration.some((function(A) {
                        return A > 0
                    }
                    )) && (e.style.animationDuration = "0s"),
                    null !== this.styles.transform && (e.style.transform = "none")),
                    this.bounds = a(this.context, e),
                    Sn(e, 4) && (this.flags |= 16)
                }, Rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Mn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), On = 0; On < Rn.length; On++)
                    Mn[Rn.charCodeAt(On)] = On;
                for (var Nn = function(A, e, t) {
                    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
                }, Pn = function() {
                    function A(A, e, t, n, r, i) {
                        this.initialValue = A,
                        this.errorValue = e,
                        this.highStart = t,
                        this.highValueIndex = n,
                        this.index = r,
                        this.data = i
                    }
                    return A.prototype.get = function(A) {
                        var e;
                        if (A >= 0) {
                            if (A < 55296 || A > 56319 && A <= 65535)
                                return e = ((e = this.index[A >> 5]) << 2) + (31 & A),
                                this.data[e];
                            if (A <= 65535)
                                return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A),
                                this.data[e];
                            if (A < this.highStart)
                                return e = 2080 + (A >> 11),
                                e = this.index[e],
                                e += A >> 5 & 63,
                                e = ((e = this.index[e]) << 2) + (31 & A),
                                this.data[e];
                            if (A <= 1114111)
                                return this.data[this.highValueIndex]
                        }
                        return this.errorValue
                    }
                    ,
                    A
                }(), Gn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Vn = 0; Vn < Gn.length; Vn++)
                    _n[Gn.charCodeAt(Vn)] = Vn;
                var Jn, Xn = 8, Yn = 9, Wn = 11, jn = 12, Zn = function() {
                    for (var A = [], e = 0; e < arguments.length; e++)
                        A[e] = arguments[e];
                    if (String.fromCodePoint)
                        return String.fromCodePoint.apply(String, A);
                    var t = A.length;
                    if (!t)
                        return "";
                    for (var n = [], r = -1, i = ""; ++r < t; ) {
                        var o = A[r];
                        o <= 65535 ? n.push(o) : (o -= 65536,
                        n.push(55296 + (o >> 10), o % 1024 + 56320)),
                        (r + 1 === t || n.length > 16384) && (i += String.fromCharCode.apply(String, n),
                        n.length = 0)
                    }
                    return i
                }, zn = function(A, e) {
                    var t, n, r, i = function(A) {
                        var e, t, n, r, i, o = .75 * A.length, a = A.length, s = 0;
                        "=" === A[A.length - 1] && (o--,
                        "=" === A[A.length - 2] && o--);
                        var l = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o)
                          , c = Array.isArray(l) ? l : new Uint8Array(l);
                        for (e = 0; e < a; e += 4)
                            t = Mn[A.charCodeAt(e)],
                            n = Mn[A.charCodeAt(e + 1)],
                            r = Mn[A.charCodeAt(e + 2)],
                            i = Mn[A.charCodeAt(e + 3)],
                            c[s++] = t << 2 | n >> 4,
                            c[s++] = (15 & n) << 4 | r >> 2,
                            c[s++] = (3 & r) << 6 | 63 & i;
                        return l
                    }(A), o = Array.isArray(i) ? function(A) {
                        for (var e = A.length, t = [], n = 0; n < e; n += 4)
                            t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
                        return t
                    }(i) : new Uint32Array(i), a = Array.isArray(i) ? function(A) {
                        for (var e = A.length, t = [], n = 0; n < e; n += 2)
                            t.push(A[n + 1] << 8 | A[n]);
                        return t
                    }(i) : new Uint16Array(i), s = Nn(a, 12, o[4] / 2), l = 2 === o[5] ? Nn(a, (24 + o[4]) / 2) : (t = o,
                    n = Math.ceil((24 + o[4]) / 4),
                    t.slice ? t.slice(n, r) : new Uint32Array(Array.prototype.slice.call(t, n, r)));
                    return new Pn(o[0],o[1],o[2],o[3],s,l)
                }("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), $n = "×", qn = function(A) {
                    return zn.get(A)
                }, Ar = function(A, e, t) {
                    var n = t - 2
                      , r = e[n]
                      , i = e[t - 1]
                      , o = e[t];
                    if (2 === i && 3 === o)
                        return $n;
                    if (2 === i || 3 === i || 4 === i)
                        return "÷";
                    if (2 === o || 3 === o || 4 === o)
                        return "÷";
                    if (i === Xn && -1 !== [Xn, Yn, Wn, jn].indexOf(o))
                        return $n;
                    if (!(i !== Wn && i !== Yn || o !== Yn && 10 !== o))
                        return $n;
                    if ((i === jn || 10 === i) && 10 === o)
                        return $n;
                    if (13 === o || 5 === o)
                        return $n;
                    if (7 === o)
                        return $n;
                    if (1 === i)
                        return $n;
                    if (13 === i && 14 === o) {
                        for (; 5 === r; )
                            r = e[--n];
                        if (14 === r)
                            return $n
                    }
                    if (15 === i && 15 === o) {
                        for (var a = 0; 15 === r; )
                            a++,
                            r = e[--n];
                        if (a % 2 == 0)
                            return $n
                    }
                    return "÷"
                }, er = function(A) {
                    var e = function(A) {
                        for (var e = [], t = 0, n = A.length; t < n; ) {
                            var r = A.charCodeAt(t++);
                            if (r >= 55296 && r <= 56319 && t < n) {
                                var i = A.charCodeAt(t++);
                                56320 == (64512 & i) ? e.push(((1023 & r) << 10) + (1023 & i) + 65536) : (e.push(r),
                                t--)
                            } else
                                e.push(r)
                        }
                        return e
                    }(A)
                      , t = e.length
                      , n = 0
                      , r = 0
                      , i = e.map(qn);
                    return {
                        next: function() {
                            if (n >= t)
                                return {
                                    done: !0,
                                    value: null
                                };
                            for (var A = $n; n < t && (A = Ar(0, i, ++n)) === $n; )
                                ;
                            if (A !== $n || n === t) {
                                var o = Zn.apply(null, e.slice(r, n));
                                return r = n,
                                {
                                    value: o,
                                    done: !1
                                }
                            }
                            return {
                                done: !0,
                                value: null
                            }
                        }
                    }
                }, tr = function(A) {
                    for (var e, t = er(A), n = []; !(e = t.next()).done; )
                        e.value && n.push(e.value.slice());
                    return n
                }, nr = function(A) {
                    return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
                }, rr = function(A, e, t, n, r) {
                    var i = "http://www.w3.org/2000/svg"
                      , o = document.createElementNS(i, "svg")
                      , a = document.createElementNS(i, "foreignObject");
                    return o.setAttributeNS(null, "width", A.toString()),
                    o.setAttributeNS(null, "height", e.toString()),
                    a.setAttributeNS(null, "width", "100%"),
                    a.setAttributeNS(null, "height", "100%"),
                    a.setAttributeNS(null, "x", t.toString()),
                    a.setAttributeNS(null, "y", n.toString()),
                    a.setAttributeNS(null, "externalResourcesRequired", "true"),
                    o.appendChild(a),
                    a.appendChild(r),
                    o
                }, ir = function(A) {
                    return new Promise((function(e, t) {
                        var n = new Image;
                        n.onload = function() {
                            return e(n)
                        }
                        ,
                        n.onerror = t,
                        n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
                    }
                    ))
                }, or = {
                    get SUPPORT_RANGE_BOUNDS() {
                        var A = function(A) {
                            if (A.createRange) {
                                var e = A.createRange();
                                if (e.getBoundingClientRect) {
                                    var t = A.createElement("boundtest");
                                    t.style.height = "123px",
                                    t.style.display = "block",
                                    A.body.appendChild(t),
                                    e.selectNode(t);
                                    var n = e.getBoundingClientRect()
                                      , r = Math.round(n.height);
                                    if (A.body.removeChild(t),
                                    123 === r)
                                        return !0
                                }
                            }
                            return !1
                        }(document);
                        return Object.defineProperty(or, "SUPPORT_RANGE_BOUNDS", {
                            value: A
                        }),
                        A
                    },
                    get SUPPORT_WORD_BREAKING() {
                        var A = or.SUPPORT_RANGE_BOUNDS && function(A) {
                            var e = A.createElement("boundtest");
                            e.style.width = "50px",
                            e.style.display = "block",
                            e.style.fontSize = "12px",
                            e.style.letterSpacing = "0px",
                            e.style.wordSpacing = "0px",
                            A.body.appendChild(e);
                            var t = A.createRange();
                            e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                            var n = e.firstChild
                              , r = s(n.data).map((function(A) {
                                return l(A)
                            }
                            ))
                              , i = 0
                              , o = {}
                              , a = r.every((function(A, e) {
                                t.setStart(n, i),
                                t.setEnd(n, i + A.length);
                                var r = t.getBoundingClientRect();
                                i += A.length;
                                var a = r.x > o.x || r.y > o.y;
                                return o = r,
                                0 === e || a
                            }
                            ));
                            return A.body.removeChild(e),
                            a
                        }(document);
                        return Object.defineProperty(or, "SUPPORT_WORD_BREAKING", {
                            value: A
                        }),
                        A
                    },
                    get SUPPORT_SVG_DRAWING() {
                        var A = function(A) {
                            var e = new Image
                              , t = A.createElement("canvas")
                              , n = t.getContext("2d");
                            if (!n)
                                return !1;
                            e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                            try {
                                n.drawImage(e, 0, 0),
                                t.toDataURL()
                            } catch (A) {
                                return !1
                            }
                            return !0
                        }(document);
                        return Object.defineProperty(or, "SUPPORT_SVG_DRAWING", {
                            value: A
                        }),
                        A
                    },
                    get SUPPORT_FOREIGNOBJECT_DRAWING() {
                        var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function(A) {
                            var e = A.createElement("canvas")
                              , t = 100;
                            e.width = t,
                            e.height = t;
                            var n = e.getContext("2d");
                            if (!n)
                                return Promise.reject(!1);
                            n.fillStyle = "rgb(0, 255, 0)",
                            n.fillRect(0, 0, t, t);
                            var r = new Image
                              , i = e.toDataURL();
                            r.src = i;
                            var o = rr(t, t, 0, 0, r);
                            return n.fillStyle = "red",
                            n.fillRect(0, 0, t, t),
                            ir(o).then((function(e) {
                                n.drawImage(e, 0, 0);
                                var r = n.getImageData(0, 0, t, t).data;
                                n.fillStyle = "red",
                                n.fillRect(0, 0, t, t);
                                var o = A.createElement("div");
                                return o.style.backgroundImage = "url(" + i + ")",
                                o.style.height = "100px",
                                nr(r) ? ir(rr(t, t, 0, 0, o)) : Promise.reject(!1)
                            }
                            )).then((function(A) {
                                return n.drawImage(A, 0, 0),
                                nr(n.getImageData(0, 0, t, t).data)
                            }
                            )).catch((function() {
                                return !1
                            }
                            ))
                        }(document) : Promise.resolve(!1);
                        return Object.defineProperty(or, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                            value: A
                        }),
                        A
                    },
                    get SUPPORT_CORS_IMAGES() {
                        var A = void 0 !== (new Image).crossOrigin;
                        return Object.defineProperty(or, "SUPPORT_CORS_IMAGES", {
                            value: A
                        }),
                        A
                    },
                    get SUPPORT_RESPONSE_TYPE() {
                        var A = "string" == typeof (new XMLHttpRequest).responseType;
                        return Object.defineProperty(or, "SUPPORT_RESPONSE_TYPE", {
                            value: A
                        }),
                        A
                    },
                    get SUPPORT_CORS_XHR() {
                        var A = "withCredentials"in new XMLHttpRequest;
                        return Object.defineProperty(or, "SUPPORT_CORS_XHR", {
                            value: A
                        }),
                        A
                    }
                }, ar = function(A, e) {
                    this.text = A,
                    this.bounds = e
                }, sr = function(A, e) {
                    var t = e.ownerDocument;
                    if (t) {
                        var n = t.createElement("html2canvaswrapper");
                        n.appendChild(e.cloneNode(!0));
                        var r = e.parentNode;
                        if (r) {
                            r.replaceChild(n, e);
                            var i = a(A, n);
                            return n.firstChild && r.replaceChild(n.firstChild, n),
                            i
                        }
                    }
                    return o.EMPTY
                }, lr = function(A, e, t) {
                    var n = A.ownerDocument;
                    if (!n)
                        throw new Error("Node has no owner document");
                    var r = n.createRange();
                    return r.setStart(A, e),
                    r.setEnd(A, e + t),
                    r
                }, cr = function(A, e, t, n) {
                    return o.fromClientRect(A, lr(e, t, n).getBoundingClientRect())
                }, ur = function(A, e) {
                    return 0 !== e.letterSpacing ? tr(A) : Br(A, e)
                }, dr = [32, 160, 4961, 65792, 65793, 4153, 4241], Br = function(A, e) {
                    for (var t, n = function(A, e) {
                        var t = s(A)
                          , n = q(t, e)
                          , r = n[0]
                          , i = n[1]
                          , o = n[2]
                          , a = t.length
                          , l = 0
                          , c = 0;
                        return {
                            next: function() {
                                if (c >= a)
                                    return {
                                        done: !0,
                                        value: null
                                    };
                                for (var A = N; c < a && (A = $(t, i, r, ++c, o)) === N; )
                                    ;
                                if (A !== N || c === a) {
                                    var e = new AA(t,A,l,c);
                                    return l = c,
                                    {
                                        value: e,
                                        done: !1
                                    }
                                }
                                return {
                                    done: !0,
                                    value: null
                                }
                            }
                        }
                    }(A, {
                        lineBreak: e.lineBreak,
                        wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak
                    }), r = [], i = function() {
                        if (t.value) {
                            var A = t.value.slice()
                              , e = s(A)
                              , n = "";
                            e.forEach((function(A) {
                                -1 === dr.indexOf(A) ? n += l(A) : (n.length && r.push(n),
                                r.push(l(A)),
                                n = "")
                            }
                            )),
                            n.length && r.push(n)
                        }
                    }; !(t = n.next()).done; )
                        i();
                    return r
                }, gr = function(A, e, t) {
                    this.text = fr(e.data, t.textTransform),
                    this.textBounds = function(A, e, t, n) {
                        var r = ur(e, t)
                          , i = []
                          , a = 0;
                        return r.forEach((function(e) {
                            if (t.textDecorationLine.length || e.trim().length > 0)
                                if (or.SUPPORT_RANGE_BOUNDS)
                                    or.SUPPORT_WORD_BREAKING ? i.push(new ar(e,cr(A, n, a, e.length))) : i.push(new ar(e,o.fromDOMRectList(A, lr(n, a, e.length).getClientRects())));
                                else {
                                    var r = n.splitText(e.length);
                                    i.push(new ar(e,sr(A, n))),
                                    n = r
                                }
                            else
                                or.SUPPORT_RANGE_BOUNDS || (n = n.splitText(e.length));
                            a += e.length
                        }
                        )),
                        i
                    }(A, this.text, t, e)
                }, fr = function(A, e) {
                    switch (e) {
                    case Wt.LOWERCASE:
                        return A.toLowerCase();
                    case Wt.CAPITALIZE:
                        return A.replace(hr, pr);
                    case Wt.UPPERCASE:
                        return A.toUpperCase();
                    default:
                        return A
                    }
                }, hr = /(^|\s|:|-|\(|\))([a-z])/g, pr = function(A, e, t) {
                    return A.length > 0 ? e + t.toUpperCase() : A
                }, wr = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        return n.src = t.currentSrc || t.src,
                        n.intrinsicWidth = t.naturalWidth,
                        n.intrinsicHeight = t.naturalHeight,
                        n.context.cache.addImage(n.src),
                        n
                    }
                    return e(t, A),
                    t
                }(Tn), mr = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        return n.canvas = t,
                        n.intrinsicWidth = t.width,
                        n.intrinsicHeight = t.height,
                        n
                    }
                    return e(t, A),
                    t
                }(Tn), br = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this
                          , r = new XMLSerializer
                          , i = a(e, t);
                        return t.setAttribute("width", i.width + "px"),
                        t.setAttribute("height", i.height + "px"),
                        n.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(t)),
                        n.intrinsicWidth = t.width.baseVal.value,
                        n.intrinsicHeight = t.height.baseVal.value,
                        n.context.cache.addImage(n.svg),
                        n
                    }
                    return e(t, A),
                    t
                }(Tn), Qr = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        return n.value = t.value,
                        n
                    }
                    return e(t, A),
                    t
                }(Tn), Cr = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        return n.start = t.start,
                        n.reversed = "boolean" == typeof t.reversed && !0 === t.reversed,
                        n
                    }
                    return e(t, A),
                    t
                }(Tn), Fr = [{
                    type: 15,
                    flags: 0,
                    unit: "px",
                    number: 3
                }], Ur = [{
                    type: 16,
                    flags: 0,
                    number: 50
                }], Er = "checkbox", yr = "radio", Hr = "password", Ir = 707406591, xr = function(A) {
                    function t(e, t) {
                        var n, r, i, a = A.call(this, e, t) || this;
                        switch (a.type = t.type.toLowerCase(),
                        a.checked = t.checked,
                        a.value = 0 === (i = (r = t).type === Hr ? new Array(r.value.length + 1).join("•") : r.value).length ? r.placeholder || "" : i,
                        a.type !== Er && a.type !== yr || (a.styles.backgroundColor = 3739148031,
                        a.styles.borderTopColor = a.styles.borderRightColor = a.styles.borderBottomColor = a.styles.borderLeftColor = 2779096575,
                        a.styles.borderTopWidth = a.styles.borderRightWidth = a.styles.borderBottomWidth = a.styles.borderLeftWidth = 1,
                        a.styles.borderTopStyle = a.styles.borderRightStyle = a.styles.borderBottomStyle = a.styles.borderLeftStyle = Ye.SOLID,
                        a.styles.backgroundClip = [Be.BORDER_BOX],
                        a.styles.backgroundOrigin = [0],
                        a.bounds = (n = a.bounds).width > n.height ? new o(n.left + (n.width - n.height) / 2,n.top,n.height,n.height) : n.width < n.height ? new o(n.left,n.top + (n.height - n.width) / 2,n.width,n.width) : n),
                        a.type) {
                        case Er:
                            a.styles.borderTopRightRadius = a.styles.borderTopLeftRadius = a.styles.borderBottomRightRadius = a.styles.borderBottomLeftRadius = Fr;
                            break;
                        case yr:
                            a.styles.borderTopRightRadius = a.styles.borderTopLeftRadius = a.styles.borderBottomRightRadius = a.styles.borderBottomLeftRadius = Ur
                        }
                        return a
                    }
                    return e(t, A),
                    t
                }(Tn), vr = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this
                          , r = t.options[t.selectedIndex || 0];
                        return n.value = r && r.text || "",
                        n
                    }
                    return e(t, A),
                    t
                }(Tn), kr = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        return n.value = t.value,
                        n
                    }
                    return e(t, A),
                    t
                }(Tn), Lr = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        n.src = t.src,
                        n.width = parseInt(t.width, 10) || 0,
                        n.height = parseInt(t.height, 10) || 0,
                        n.backgroundColor = n.styles.backgroundColor;
                        try {
                            if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
                                n.tree = Tr(e, t.contentWindow.document.documentElement);
                                var r = t.contentWindow.document.documentElement ? he(e, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : pe.TRANSPARENT
                                  , i = t.contentWindow.document.body ? he(e, getComputedStyle(t.contentWindow.document.body).backgroundColor) : pe.TRANSPARENT;
                                n.backgroundColor = ae(r) ? ae(i) ? n.styles.backgroundColor : i : r
                            }
                        } catch (A) {}
                        return n
                    }
                    return e(t, A),
                    t
                }(Tn), Kr = ["OL", "UL", "MENU"], Dr = function(A, e, t, n) {
                    for (var r = e.firstChild, i = void 0; r; r = i)
                        if (i = r.nextSibling,
                        Or(r) && r.data.trim().length > 0)
                            t.textNodes.push(new gr(A,r,t.styles));
                        else if (Nr(r))
                            if (ei(r) && r.assignedNodes)
                                r.assignedNodes().forEach((function(e) {
                                    return Dr(A, e, t, n)
                                }
                                ));
                            else {
                                var o = Sr(A, r);
                                o.styles.isVisible() && (Rr(r, o, n) ? o.flags |= 4 : Mr(o.styles) && (o.flags |= 2),
                                -1 !== Kr.indexOf(r.tagName) && (o.flags |= 8),
                                t.elements.push(o),
                                r.slot,
                                r.shadowRoot ? Dr(A, r.shadowRoot, o, n) : qr(r) || Xr(r) || Ai(r) || Dr(A, r, o, n))
                            }
                }, Sr = function(A, e) {
                    return jr(e) ? new wr(A,e) : Wr(e) ? new mr(A,e) : Xr(e) ? new br(A,e) : _r(e) ? new Qr(A,e) : Vr(e) ? new Cr(A,e) : Jr(e) ? new xr(A,e) : Ai(e) ? new vr(A,e) : qr(e) ? new kr(A,e) : Zr(e) ? new Lr(A,e) : new Tn(A,e)
                }, Tr = function(A, e) {
                    var t = Sr(A, e);
                    return t.flags |= 4,
                    Dr(A, e, t, t),
                    t
                }, Rr = function(A, e, t) {
                    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Yr(A) && t.styles.isTransparent()
                }, Mr = function(A) {
                    return A.isPositioned() || A.isFloating()
                }, Or = function(A) {
                    return A.nodeType === Node.TEXT_NODE
                }, Nr = function(A) {
                    return A.nodeType === Node.ELEMENT_NODE
                }, Pr = function(A) {
                    return Nr(A) && void 0 !== A.style && !Gr(A)
                }, Gr = function(A) {
                    return "object" == typeof A.className
                }, _r = function(A) {
                    return "LI" === A.tagName
                }, Vr = function(A) {
                    return "OL" === A.tagName
                }, Jr = function(A) {
                    return "INPUT" === A.tagName
                }, Xr = function(A) {
                    return "svg" === A.tagName
                }, Yr = function(A) {
                    return "BODY" === A.tagName
                }, Wr = function(A) {
                    return "CANVAS" === A.tagName
                }, jr = function(A) {
                    return "IMG" === A.tagName
                }, Zr = function(A) {
                    return "IFRAME" === A.tagName
                }, zr = function(A) {
                    return "STYLE" === A.tagName
                }, $r = function(A) {
                    return "SCRIPT" === A.tagName
                }, qr = function(A) {
                    return "TEXTAREA" === A.tagName
                }, Ai = function(A) {
                    return "SELECT" === A.tagName
                }, ei = function(A) {
                    return "SLOT" === A.tagName
                }, ti = function() {
                    function A() {
                        this.counters = {}
                    }
                    return A.prototype.getCounterValue = function(A) {
                        var e = this.counters[A];
                        return e && e.length ? e[e.length - 1] : 1
                    }
                    ,
                    A.prototype.getCounterValues = function(A) {
                        return this.counters[A] || []
                    }
                    ,
                    A.prototype.pop = function(A) {
                        var e = this;
                        A.forEach((function(A) {
                            return e.counters[A].pop()
                        }
                        ))
                    }
                    ,
                    A.prototype.parse = function(A) {
                        var e = this
                          , t = A.counterIncrement
                          , n = A.counterReset
                          , r = !0;
                        null !== t && t.forEach((function(A) {
                            var t = e.counters[A.counter];
                            t && 0 !== A.increment && (r = !1,
                            t.length || t.push(1),
                            t[Math.max(0, t.length - 1)] += A.increment)
                        }
                        ));
                        var i = [];
                        return r && n.forEach((function(A) {
                            var t = e.counters[A.counter];
                            i.push(A.counter),
                            t || (t = e.counters[A.counter] = []),
                            t.push(A.reset)
                        }
                        )),
                        i
                    }
                    ,
                    A
                }(), ni = {
                    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
                }, ri = {
                    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
                }, ii = {
                    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
                }, oi = {
                    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
                }, ai = function(A, e, t, n, r, i) {
                    return A < e || A > t ? hi(A, r, i.length > 0) : n.integers.reduce((function(e, t, r) {
                        for (; A >= t; )
                            A -= t,
                            e += n.values[r];
                        return e
                    }
                    ), "") + i
                }, si = function(A, e, t, n) {
                    var r = "";
                    do {
                        t || A--,
                        r = n(A) + r,
                        A /= e
                    } while (A * e >= e);
                    return r
                }, li = function(A, e, t, n, r) {
                    var i = t - e + 1;
                    return (A < 0 ? "-" : "") + (si(Math.abs(A), i, n, (function(A) {
                        return l(Math.floor(A % i) + e)
                    }
                    )) + r)
                }, ci = function(A, e, t) {
                    void 0 === t && (t = ". ");
                    var n = e.length;
                    return si(Math.abs(A), n, !1, (function(A) {
                        return e[Math.floor(A % n)]
                    }
                    )) + t
                }, ui = function(A, e, t, n, r, i) {
                    if (A < -9999 || A > 9999)
                        return hi(A, xt.CJK_DECIMAL, r.length > 0);
                    var o = Math.abs(A)
                      , a = r;
                    if (0 === o)
                        return e[0] + a;
                    for (var s = 0; o > 0 && s <= 4; s++) {
                        var l = o % 10;
                        0 === l && bn(i, 1) && "" !== a ? a = e[l] + a : l > 1 || 1 === l && 0 === s || 1 === l && 1 === s && bn(i, 2) || 1 === l && 1 === s && bn(i, 4) && A > 100 || 1 === l && s > 1 && bn(i, 8) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : 1 === l && s > 0 && (a = t[s - 1] + a),
                        o = Math.floor(o / 10)
                    }
                    return (A < 0 ? n : "") + a
                }, di = "十百千萬", Bi = "拾佰仟萬", gi = "マイナス", fi = "마이너스", hi = function(A, e, t) {
                    var n = t ? ". " : ""
                      , r = t ? "、" : ""
                      , i = t ? ", " : ""
                      , o = t ? " " : "";
                    switch (e) {
                    case xt.DISC:
                        return "•" + o;
                    case xt.CIRCLE:
                        return "◦" + o;
                    case xt.SQUARE:
                        return "◾" + o;
                    case xt.DECIMAL_LEADING_ZERO:
                        var a = li(A, 48, 57, !0, n);
                        return a.length < 4 ? "0" + a : a;
                    case xt.CJK_DECIMAL:
                        return ci(A, "〇一二三四五六七八九", r);
                    case xt.LOWER_ROMAN:
                        return ai(A, 1, 3999, ni, xt.DECIMAL, n).toLowerCase();
                    case xt.UPPER_ROMAN:
                        return ai(A, 1, 3999, ni, xt.DECIMAL, n);
                    case xt.LOWER_GREEK:
                        return li(A, 945, 969, !1, n);
                    case xt.LOWER_ALPHA:
                        return li(A, 97, 122, !1, n);
                    case xt.UPPER_ALPHA:
                        return li(A, 65, 90, !1, n);
                    case xt.ARABIC_INDIC:
                        return li(A, 1632, 1641, !0, n);
                    case xt.ARMENIAN:
                    case xt.UPPER_ARMENIAN:
                        return ai(A, 1, 9999, ri, xt.DECIMAL, n);
                    case xt.LOWER_ARMENIAN:
                        return ai(A, 1, 9999, ri, xt.DECIMAL, n).toLowerCase();
                    case xt.BENGALI:
                        return li(A, 2534, 2543, !0, n);
                    case xt.CAMBODIAN:
                    case xt.KHMER:
                        return li(A, 6112, 6121, !0, n);
                    case xt.CJK_EARTHLY_BRANCH:
                        return ci(A, "子丑寅卯辰巳午未申酉戌亥", r);
                    case xt.CJK_HEAVENLY_STEM:
                        return ci(A, "甲乙丙丁戊己庚辛壬癸", r);
                    case xt.CJK_IDEOGRAPHIC:
                    case xt.TRAD_CHINESE_INFORMAL:
                        return ui(A, "零一二三四五六七八九", di, "負", r, 14);
                    case xt.TRAD_CHINESE_FORMAL:
                        return ui(A, "零壹貳參肆伍陸柒捌玖", Bi, "負", r, 15);
                    case xt.SIMP_CHINESE_INFORMAL:
                        return ui(A, "零一二三四五六七八九", di, "负", r, 14);
                    case xt.SIMP_CHINESE_FORMAL:
                        return ui(A, "零壹贰叁肆伍陆柒捌玖", Bi, "负", r, 15);
                    case xt.JAPANESE_INFORMAL:
                        return ui(A, "〇一二三四五六七八九", "十百千万", gi, r, 0);
                    case xt.JAPANESE_FORMAL:
                        return ui(A, "零壱弐参四伍六七八九", "拾百千万", gi, r, 7);
                    case xt.KOREAN_HANGUL_FORMAL:
                        return ui(A, "영일이삼사오육칠팔구", "십백천만", fi, i, 7);
                    case xt.KOREAN_HANJA_INFORMAL:
                        return ui(A, "零一二三四五六七八九", "十百千萬", fi, i, 0);
                    case xt.KOREAN_HANJA_FORMAL:
                        return ui(A, "零壹貳參四五六七八九", "拾百千", fi, i, 7);
                    case xt.DEVANAGARI:
                        return li(A, 2406, 2415, !0, n);
                    case xt.GEORGIAN:
                        return ai(A, 1, 19999, oi, xt.DECIMAL, n);
                    case xt.GUJARATI:
                        return li(A, 2790, 2799, !0, n);
                    case xt.GURMUKHI:
                        return li(A, 2662, 2671, !0, n);
                    case xt.HEBREW:
                        return ai(A, 1, 10999, ii, xt.DECIMAL, n);
                    case xt.HIRAGANA:
                        return ci(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                    case xt.HIRAGANA_IROHA:
                        return ci(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                    case xt.KANNADA:
                        return li(A, 3302, 3311, !0, n);
                    case xt.KATAKANA:
                        return ci(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
                    case xt.KATAKANA_IROHA:
                        return ci(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
                    case xt.LAO:
                        return li(A, 3792, 3801, !0, n);
                    case xt.MONGOLIAN:
                        return li(A, 6160, 6169, !0, n);
                    case xt.MYANMAR:
                        return li(A, 4160, 4169, !0, n);
                    case xt.ORIYA:
                        return li(A, 2918, 2927, !0, n);
                    case xt.PERSIAN:
                        return li(A, 1776, 1785, !0, n);
                    case xt.TAMIL:
                        return li(A, 3046, 3055, !0, n);
                    case xt.TELUGU:
                        return li(A, 3174, 3183, !0, n);
                    case xt.THAI:
                        return li(A, 3664, 3673, !0, n);
                    case xt.TIBETAN:
                        return li(A, 3872, 3881, !0, n);
                    case xt.DECIMAL:
                    default:
                        return li(A, 48, 57, !0, n)
                    }
                }, pi = "data-html2canvas-ignore", wi = function() {
                    function A(A, e, t) {
                        if (this.context = A,
                        this.options = t,
                        this.scrolledElements = [],
                        this.referenceElement = e,
                        this.counters = new ti,
                        this.quoteDepth = 0,
                        !e.ownerDocument)
                            throw new Error("Cloned element does not have an owner document");
                        this.documentElement = this.cloneNode(e.ownerDocument.documentElement)
                    }
                    return A.prototype.toIFrame = function(A, e) {
                        var t = this
                          , i = bi(A, e);
                        if (!i.contentWindow)
                            return Promise.reject("Unable to find iframe window");
                        var o = A.defaultView.pageXOffset
                          , a = A.defaultView.pageYOffset
                          , s = i.contentWindow
                          , l = s.document
                          , c = Fi(i).then((function() {
                            return n(t, void 0, void 0, (function() {
                                var A, t;
                                return r(this, (function(n) {
                                    switch (n.label) {
                                    case 0:
                                        return this.scrolledElements.forEach(Ii),
                                        s && (s.scrollTo(e.left, e.top),
                                        !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === e.top && s.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                                        this.context.windowBounds = this.context.windowBounds.add(s.scrollX - e.left, s.scrollY - e.top, 0, 0))),
                                        A = this.options.onclone,
                                        void 0 === (t = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : l.fonts && l.fonts.ready ? [4, l.fonts.ready] : [3, 2];
                                    case 1:
                                        n.sent(),
                                        n.label = 2;
                                    case 2:
                                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Ci(l)] : [3, 4];
                                    case 3:
                                        n.sent(),
                                        n.label = 4;
                                    case 4:
                                        return "function" == typeof A ? [2, Promise.resolve().then((function() {
                                            return A(l, t)
                                        }
                                        )).then((function() {
                                            return i
                                        }
                                        ))] : [2, i]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ));
                        return l.open(),
                        l.write(yi(document.doctype) + "<html></html>"),
                        Hi(this.referenceElement.ownerDocument, o, a),
                        l.replaceChild(l.adoptNode(this.documentElement), l.documentElement),
                        l.close(),
                        c
                    }
                    ,
                    A.prototype.createElementClone = function(A) {
                        if (Sn(A, 2),
                        Wr(A))
                            return this.createCanvasClone(A);
                        if (zr(A))
                            return this.createStyleClone(A);
                        var e = A.cloneNode(!1);
                        return jr(e) && (jr(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc,
                        e.srcset = ""),
                        "lazy" === e.loading && (e.loading = "eager")),
                        e
                    }
                    ,
                    A.prototype.createStyleClone = function(A) {
                        try {
                            var e = A.sheet;
                            if (e && e.cssRules) {
                                var t = [].slice.call(e.cssRules, 0).reduce((function(A, e) {
                                    return e && "string" == typeof e.cssText ? A + e.cssText : A
                                }
                                ), "")
                                  , n = A.cloneNode(!1);
                                return n.textContent = t,
                                n
                            }
                        } catch (A) {
                            if (this.context.logger.error("Unable to access cssRules property", A),
                            "SecurityError" !== A.name)
                                throw A
                        }
                        return A.cloneNode(!1)
                    }
                    ,
                    A.prototype.createCanvasClone = function(A) {
                        var e;
                        if (this.options.inlineImages && A.ownerDocument) {
                            var t = A.ownerDocument.createElement("img");
                            try {
                                return t.src = A.toDataURL(),
                                t
                            } catch (e) {
                                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
                            }
                        }
                        var n = A.cloneNode(!1);
                        try {
                            n.width = A.width,
                            n.height = A.height;
                            var r = A.getContext("2d")
                              , i = n.getContext("2d");
                            if (i)
                                if (!this.options.allowTaint && r)
                                    i.putImageData(r.getImageData(0, 0, A.width, A.height), 0, 0);
                                else {
                                    var o = null !== (e = A.getContext("webgl2")) && void 0 !== e ? e : A.getContext("webgl");
                                    if (o) {
                                        var a = o.getContextAttributes();
                                        !1 === (null == a ? void 0 : a.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
                                    }
                                    i.drawImage(A, 0, 0)
                                }
                            return n
                        } catch (e) {
                            this.context.logger.info("Unable to clone canvas as it is tainted", A)
                        }
                        return n
                    }
                    ,
                    A.prototype.cloneNode = function(A) {
                        if (Or(A))
                            return document.createTextNode(A.data);
                        if (!A.ownerDocument)
                            return A.cloneNode(!1);
                        var e = A.ownerDocument.defaultView;
                        if (e && Nr(A) && (Pr(A) || Gr(A))) {
                            var t = this.createElementClone(A);
                            t.style.transitionProperty = "none";
                            var n = e.getComputedStyle(A)
                              , r = e.getComputedStyle(A, ":before")
                              , i = e.getComputedStyle(A, ":after");
                            this.referenceElement === A && Pr(t) && (this.clonedReferenceElement = t),
                            Yr(t) && Li(t);
                            for (var o = this.counters.parse(new Kn(this.context,n)), a = this.resolvePseudoContent(A, t, r, Jn.BEFORE), s = A.firstChild; s; s = s.nextSibling)
                                Nr(s) && ($r(s) || s.hasAttribute(pi) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(s)) || this.options.copyStyles && Nr(s) && zr(s) || t.appendChild(this.cloneNode(s));
                            a && t.insertBefore(a, t.firstChild);
                            var l = this.resolvePseudoContent(A, t, i, Jn.AFTER);
                            return l && t.appendChild(l),
                            this.counters.pop(o),
                            n && (this.options.copyStyles || Gr(A)) && !Zr(A) && Ei(n, t),
                            0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]),
                            (qr(A) || Ai(A)) && (qr(t) || Ai(t)) && (t.value = A.value),
                            t
                        }
                        return A.cloneNode(!1)
                    }
                    ,
                    A.prototype.resolvePseudoContent = function(A, e, t, n) {
                        var r = this;
                        if (t) {
                            var i = t.content
                              , o = e.ownerDocument;
                            if (o && i && "none" !== i && "-moz-alt-content" !== i && "none" !== t.display) {
                                this.counters.parse(new Kn(this.context,t));
                                var a = new Ln(this.context,t)
                                  , s = o.createElement("html2canvaspseudoelement");
                                Ei(t, s),
                                a.content.forEach((function(e) {
                                    if (0 === e.type)
                                        s.appendChild(o.createTextNode(e.value));
                                    else if (22 === e.type) {
                                        var t = o.createElement("img");
                                        t.src = e.value,
                                        t.style.opacity = "1",
                                        s.appendChild(t)
                                    } else if (18 === e.type) {
                                        if ("attr" === e.name) {
                                            var n = e.values.filter(OA);
                                            n.length && s.appendChild(o.createTextNode(A.getAttribute(n[0].value) || ""))
                                        } else if ("counter" === e.name) {
                                            var i = e.values.filter(_A)
                                              , l = i[0]
                                              , c = i[1];
                                            if (l && OA(l)) {
                                                var u = r.counters.getCounterValue(l.value)
                                                  , d = c && OA(c) ? Lt.parse(r.context, c.value) : xt.DECIMAL;
                                                s.appendChild(o.createTextNode(hi(u, d, !1)))
                                            }
                                        } else if ("counters" === e.name) {
                                            var B = e.values.filter(_A)
                                              , g = (l = B[0],
                                            B[1]);
                                            if (c = B[2],
                                            l && OA(l)) {
                                                var f = r.counters.getCounterValues(l.value)
                                                  , h = c && OA(c) ? Lt.parse(r.context, c.value) : xt.DECIMAL
                                                  , p = g && 0 === g.type ? g.value : ""
                                                  , w = f.map((function(A) {
                                                    return hi(A, h, !1)
                                                }
                                                )).join(p);
                                                s.appendChild(o.createTextNode(w))
                                            }
                                        }
                                    } else if (20 === e.type)
                                        switch (e.value) {
                                        case "open-quote":
                                            s.appendChild(o.createTextNode(yn(a.quotes, r.quoteDepth++, !0)));
                                            break;
                                        case "close-quote":
                                            s.appendChild(o.createTextNode(yn(a.quotes, --r.quoteDepth, !1)));
                                            break;
                                        default:
                                            s.appendChild(o.createTextNode(e.value))
                                        }
                                }
                                )),
                                s.className = xi + " " + vi;
                                var l = n === Jn.BEFORE ? " " + xi : " " + vi;
                                return Gr(e) ? e.className.baseValue += l : e.className += l,
                                s
                            }
                        }
                    }
                    ,
                    A.destroy = function(A) {
                        return !!A.parentNode && (A.parentNode.removeChild(A),
                        !0)
                    }
                    ,
                    A
                }();
                !function(A) {
                    A[A.BEFORE = 0] = "BEFORE",
                    A[A.AFTER = 1] = "AFTER"
                }(Jn || (Jn = {}));
                var mi, bi = function(A, e) {
                    var t = A.createElement("iframe");
                    return t.className = "html2canvas-container",
                    t.style.visibility = "hidden",
                    t.style.position = "fixed",
                    t.style.left = "-10000px",
                    t.style.top = "0px",
                    t.style.border = "0",
                    t.width = e.width.toString(),
                    t.height = e.height.toString(),
                    t.scrolling = "no",
                    t.setAttribute(pi, "true"),
                    A.body.appendChild(t),
                    t
                }, Qi = function(A) {
                    return new Promise((function(e) {
                        A.complete ? e() : A.src ? (A.onload = e,
                        A.onerror = e) : e()
                    }
                    ))
                }, Ci = function(A) {
                    return Promise.all([].slice.call(A.images, 0).map(Qi))
                }, Fi = function(A) {
                    return new Promise((function(e, t) {
                        var n = A.contentWindow;
                        if (!n)
                            return t("No window assigned for iframe");
                        var r = n.document;
                        n.onload = A.onload = function() {
                            n.onload = A.onload = null;
                            var t = setInterval((function() {
                                r.body.childNodes.length > 0 && "complete" === r.readyState && (clearInterval(t),
                                e(A))
                            }
                            ), 50)
                        }
                    }
                    ))
                }, Ui = ["all", "d", "content"], Ei = function(A, e) {
                    for (var t = A.length - 1; t >= 0; t--) {
                        var n = A.item(t);
                        -1 === Ui.indexOf(n) && e.style.setProperty(n, A.getPropertyValue(n))
                    }
                    return e
                }, yi = function(A) {
                    var e = "";
                    return A && (e += "<!DOCTYPE ",
                    A.name && (e += A.name),
                    A.internalSubset && (e += A.internalSubset),
                    A.publicId && (e += '"' + A.publicId + '"'),
                    A.systemId && (e += '"' + A.systemId + '"'),
                    e += ">"),
                    e
                }, Hi = function(A, e, t) {
                    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
                }, Ii = function(A) {
                    var e = A[0]
                      , t = A[1]
                      , n = A[2];
                    e.scrollLeft = t,
                    e.scrollTop = n
                }, xi = "___html2canvas___pseudoelement_before", vi = "___html2canvas___pseudoelement_after", ki = '{\n    content: "" !important;\n    display: none !important;\n}', Li = function(A) {
                    Ki(A, "." + xi + ":before" + ki + "\n         ." + vi + ":after" + ki)
                }, Ki = function(A, e) {
                    var t = A.ownerDocument;
                    if (t) {
                        var n = t.createElement("style");
                        n.textContent = e,
                        A.appendChild(n)
                    }
                }, Di = function() {
                    function A() {}
                    return A.getOrigin = function(e) {
                        var t = A._link;
                        return t ? (t.href = e,
                        t.href = t.href,
                        t.protocol + t.hostname + t.port) : "about:blank"
                    }
                    ,
                    A.isSameOrigin = function(e) {
                        return A.getOrigin(e) === A._origin
                    }
                    ,
                    A.setContext = function(e) {
                        A._link = e.document.createElement("a"),
                        A._origin = A.getOrigin(e.location.href)
                    }
                    ,
                    A._origin = "about:blank",
                    A
                }(), Si = function() {
                    function A(A, e) {
                        this.context = A,
                        this._options = e,
                        this._cache = {}
                    }
                    return A.prototype.addImage = function(A) {
                        var e = Promise.resolve();
                        return this.has(A) ? e : Gi(A) || Oi(A) ? ((this._cache[A] = this.loadImage(A)).catch((function() {}
                        )),
                        e) : e
                    }
                    ,
                    A.prototype.match = function(A) {
                        return this._cache[A]
                    }
                    ,
                    A.prototype.loadImage = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var e, t, n, i, o = this;
                            return r(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return e = Di.isSameOrigin(A),
                                    t = !Ni(A) && !0 === this._options.useCORS && or.SUPPORT_CORS_IMAGES && !e,
                                    n = !Ni(A) && !e && !Gi(A) && "string" == typeof this._options.proxy && or.SUPPORT_CORS_XHR && !t,
                                    e || !1 !== this._options.allowTaint || Ni(A) || Gi(A) || n || t ? (i = A,
                                    n ? [4, this.proxy(i)] : [3, 2]) : [2];
                                case 1:
                                    i = r.sent(),
                                    r.label = 2;
                                case 2:
                                    return this.context.logger.debug("Added image " + A.substring(0, 256)),
                                    [4, new Promise((function(A, e) {
                                        var n = new Image;
                                        n.onload = function() {
                                            return A(n)
                                        }
                                        ,
                                        n.onerror = e,
                                        (Pi(i) || t) && (n.crossOrigin = "anonymous"),
                                        n.src = i,
                                        !0 === n.complete && setTimeout((function() {
                                            return A(n)
                                        }
                                        ), 500),
                                        o._options.imageTimeout > 0 && setTimeout((function() {
                                            return e("Timed out (" + o._options.imageTimeout + "ms) loading image")
                                        }
                                        ), o._options.imageTimeout)
                                    }
                                    ))];
                                case 3:
                                    return [2, r.sent()]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    A.prototype.has = function(A) {
                        return void 0 !== this._cache[A]
                    }
                    ,
                    A.prototype.keys = function() {
                        return Promise.resolve(Object.keys(this._cache))
                    }
                    ,
                    A.prototype.proxy = function(A) {
                        var e = this
                          , t = this._options.proxy;
                        if (!t)
                            throw new Error("No proxy defined");
                        var n = A.substring(0, 256);
                        return new Promise((function(r, i) {
                            var o = or.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
                              , a = new XMLHttpRequest;
                            a.onload = function() {
                                if (200 === a.status)
                                    if ("text" === o)
                                        r(a.response);
                                    else {
                                        var A = new FileReader;
                                        A.addEventListener("load", (function() {
                                            return r(A.result)
                                        }
                                        ), !1),
                                        A.addEventListener("error", (function(A) {
                                            return i(A)
                                        }
                                        ), !1),
                                        A.readAsDataURL(a.response)
                                    }
                                else
                                    i("Failed to proxy resource " + n + " with status code " + a.status)
                            }
                            ,
                            a.onerror = i;
                            var s = t.indexOf("?") > -1 ? "&" : "?";
                            if (a.open("GET", "" + t + s + "url=" + encodeURIComponent(A) + "&responseType=" + o),
                            "text" !== o && a instanceof XMLHttpRequest && (a.responseType = o),
                            e._options.imageTimeout) {
                                var l = e._options.imageTimeout;
                                a.timeout = l,
                                a.ontimeout = function() {
                                    return i("Timed out (" + l + "ms) proxying " + n)
                                }
                            }
                            a.send()
                        }
                        ))
                    }
                    ,
                    A
                }(), Ti = /^data:image\/svg\+xml/i, Ri = /^data:image\/.*;base64,/i, Mi = /^data:image\/.*/i, Oi = function(A) {
                    return or.SUPPORT_SVG_DRAWING || !_i(A)
                }, Ni = function(A) {
                    return Mi.test(A)
                }, Pi = function(A) {
                    return Ri.test(A)
                }, Gi = function(A) {
                    return "blob" === A.substr(0, 4)
                }, _i = function(A) {
                    return "svg" === A.substr(-3).toLowerCase() || Ti.test(A)
                };
                !function(A) {
                    A[A.VECTOR = 0] = "VECTOR",
                    A[A.BEZIER_CURVE = 1] = "BEZIER_CURVE"
                }(mi || (mi = {}));
                var Vi, Ji = function(A, e) {
                    return A.length === e.length && A.some((function(A, t) {
                        return A === e[t]
                    }
                    ))
                }, Xi = function() {
                    function A(A, e) {
                        this.type = mi.VECTOR,
                        this.x = A,
                        this.y = e
                    }
                    return A.prototype.add = function(e, t) {
                        return new A(this.x + e,this.y + t)
                    }
                    ,
                    A
                }(), Yi = function(A, e, t) {
                    return new Xi(A.x + (e.x - A.x) * t,A.y + (e.y - A.y) * t)
                }, Wi = function() {
                    function A(A, e, t, n) {
                        this.type = mi.BEZIER_CURVE,
                        this.start = A,
                        this.startControl = e,
                        this.endControl = t,
                        this.end = n
                    }
                    return A.prototype.subdivide = function(e, t) {
                        var n = Yi(this.start, this.startControl, e)
                          , r = Yi(this.startControl, this.endControl, e)
                          , i = Yi(this.endControl, this.end, e)
                          , o = Yi(n, r, e)
                          , a = Yi(r, i, e)
                          , s = Yi(o, a, e);
                        return t ? new A(this.start,n,o,s) : new A(s,a,i,this.end)
                    }
                    ,
                    A.prototype.add = function(e, t) {
                        return new A(this.start.add(e, t),this.startControl.add(e, t),this.endControl.add(e, t),this.end.add(e, t))
                    }
                    ,
                    A.prototype.reverse = function() {
                        return new A(this.end,this.endControl,this.startControl,this.start)
                    }
                    ,
                    A
                }(), ji = function(A) {
                    return A.type === mi.BEZIER_CURVE
                }, Zi = function(A) {
                    var e = A.styles
                      , t = A.bounds
                      , n = $A(e.borderTopLeftRadius, t.width, t.height)
                      , r = n[0]
                      , i = n[1]
                      , o = $A(e.borderTopRightRadius, t.width, t.height)
                      , a = o[0]
                      , s = o[1]
                      , l = $A(e.borderBottomRightRadius, t.width, t.height)
                      , c = l[0]
                      , u = l[1]
                      , d = $A(e.borderBottomLeftRadius, t.width, t.height)
                      , B = d[0]
                      , g = d[1]
                      , f = [];
                    f.push((r + a) / t.width),
                    f.push((B + c) / t.width),
                    f.push((i + g) / t.height),
                    f.push((s + u) / t.height);
                    var h = Math.max.apply(Math, f);
                    h > 1 && (r /= h,
                    i /= h,
                    a /= h,
                    s /= h,
                    c /= h,
                    u /= h,
                    B /= h,
                    g /= h);
                    var p = t.width - a
                      , w = t.height - u
                      , m = t.width - c
                      , b = t.height - g
                      , Q = e.borderTopWidth
                      , C = e.borderRightWidth
                      , F = e.borderBottomWidth
                      , U = e.borderLeftWidth
                      , E = qA(e.paddingTop, A.bounds.width)
                      , y = qA(e.paddingRight, A.bounds.width)
                      , H = qA(e.paddingBottom, A.bounds.width)
                      , I = qA(e.paddingLeft, A.bounds.width);
                    this.topLeftBorderDoubleOuterBox = r > 0 || i > 0 ? zi(t.left + U / 3, t.top + Q / 3, r - U / 3, i - Q / 3, Vi.TOP_LEFT) : new Xi(t.left + U / 3,t.top + Q / 3),
                    this.topRightBorderDoubleOuterBox = r > 0 || i > 0 ? zi(t.left + p, t.top + Q / 3, a - C / 3, s - Q / 3, Vi.TOP_RIGHT) : new Xi(t.left + t.width - C / 3,t.top + Q / 3),
                    this.bottomRightBorderDoubleOuterBox = c > 0 || u > 0 ? zi(t.left + m, t.top + w, c - C / 3, u - F / 3, Vi.BOTTOM_RIGHT) : new Xi(t.left + t.width - C / 3,t.top + t.height - F / 3),
                    this.bottomLeftBorderDoubleOuterBox = B > 0 || g > 0 ? zi(t.left + U / 3, t.top + b, B - U / 3, g - F / 3, Vi.BOTTOM_LEFT) : new Xi(t.left + U / 3,t.top + t.height - F / 3),
                    this.topLeftBorderDoubleInnerBox = r > 0 || i > 0 ? zi(t.left + 2 * U / 3, t.top + 2 * Q / 3, r - 2 * U / 3, i - 2 * Q / 3, Vi.TOP_LEFT) : new Xi(t.left + 2 * U / 3,t.top + 2 * Q / 3),
                    this.topRightBorderDoubleInnerBox = r > 0 || i > 0 ? zi(t.left + p, t.top + 2 * Q / 3, a - 2 * C / 3, s - 2 * Q / 3, Vi.TOP_RIGHT) : new Xi(t.left + t.width - 2 * C / 3,t.top + 2 * Q / 3),
                    this.bottomRightBorderDoubleInnerBox = c > 0 || u > 0 ? zi(t.left + m, t.top + w, c - 2 * C / 3, u - 2 * F / 3, Vi.BOTTOM_RIGHT) : new Xi(t.left + t.width - 2 * C / 3,t.top + t.height - 2 * F / 3),
                    this.bottomLeftBorderDoubleInnerBox = B > 0 || g > 0 ? zi(t.left + 2 * U / 3, t.top + b, B - 2 * U / 3, g - 2 * F / 3, Vi.BOTTOM_LEFT) : new Xi(t.left + 2 * U / 3,t.top + t.height - 2 * F / 3),
                    this.topLeftBorderStroke = r > 0 || i > 0 ? zi(t.left + U / 2, t.top + Q / 2, r - U / 2, i - Q / 2, Vi.TOP_LEFT) : new Xi(t.left + U / 2,t.top + Q / 2),
                    this.topRightBorderStroke = r > 0 || i > 0 ? zi(t.left + p, t.top + Q / 2, a - C / 2, s - Q / 2, Vi.TOP_RIGHT) : new Xi(t.left + t.width - C / 2,t.top + Q / 2),
                    this.bottomRightBorderStroke = c > 0 || u > 0 ? zi(t.left + m, t.top + w, c - C / 2, u - F / 2, Vi.BOTTOM_RIGHT) : new Xi(t.left + t.width - C / 2,t.top + t.height - F / 2),
                    this.bottomLeftBorderStroke = B > 0 || g > 0 ? zi(t.left + U / 2, t.top + b, B - U / 2, g - F / 2, Vi.BOTTOM_LEFT) : new Xi(t.left + U / 2,t.top + t.height - F / 2),
                    this.topLeftBorderBox = r > 0 || i > 0 ? zi(t.left, t.top, r, i, Vi.TOP_LEFT) : new Xi(t.left,t.top),
                    this.topRightBorderBox = a > 0 || s > 0 ? zi(t.left + p, t.top, a, s, Vi.TOP_RIGHT) : new Xi(t.left + t.width,t.top),
                    this.bottomRightBorderBox = c > 0 || u > 0 ? zi(t.left + m, t.top + w, c, u, Vi.BOTTOM_RIGHT) : new Xi(t.left + t.width,t.top + t.height),
                    this.bottomLeftBorderBox = B > 0 || g > 0 ? zi(t.left, t.top + b, B, g, Vi.BOTTOM_LEFT) : new Xi(t.left,t.top + t.height),
                    this.topLeftPaddingBox = r > 0 || i > 0 ? zi(t.left + U, t.top + Q, Math.max(0, r - U), Math.max(0, i - Q), Vi.TOP_LEFT) : new Xi(t.left + U,t.top + Q),
                    this.topRightPaddingBox = a > 0 || s > 0 ? zi(t.left + Math.min(p, t.width - C), t.top + Q, p > t.width + C ? 0 : Math.max(0, a - C), Math.max(0, s - Q), Vi.TOP_RIGHT) : new Xi(t.left + t.width - C,t.top + Q),
                    this.bottomRightPaddingBox = c > 0 || u > 0 ? zi(t.left + Math.min(m, t.width - U), t.top + Math.min(w, t.height - F), Math.max(0, c - C), Math.max(0, u - F), Vi.BOTTOM_RIGHT) : new Xi(t.left + t.width - C,t.top + t.height - F),
                    this.bottomLeftPaddingBox = B > 0 || g > 0 ? zi(t.left + U, t.top + Math.min(b, t.height - F), Math.max(0, B - U), Math.max(0, g - F), Vi.BOTTOM_LEFT) : new Xi(t.left + U,t.top + t.height - F),
                    this.topLeftContentBox = r > 0 || i > 0 ? zi(t.left + U + I, t.top + Q + E, Math.max(0, r - (U + I)), Math.max(0, i - (Q + E)), Vi.TOP_LEFT) : new Xi(t.left + U + I,t.top + Q + E),
                    this.topRightContentBox = a > 0 || s > 0 ? zi(t.left + Math.min(p, t.width + U + I), t.top + Q + E, p > t.width + U + I ? 0 : a - U + I, s - (Q + E), Vi.TOP_RIGHT) : new Xi(t.left + t.width - (C + y),t.top + Q + E),
                    this.bottomRightContentBox = c > 0 || u > 0 ? zi(t.left + Math.min(m, t.width - (U + I)), t.top + Math.min(w, t.height + Q + E), Math.max(0, c - (C + y)), u - (F + H), Vi.BOTTOM_RIGHT) : new Xi(t.left + t.width - (C + y),t.top + t.height - (F + H)),
                    this.bottomLeftContentBox = B > 0 || g > 0 ? zi(t.left + U + I, t.top + b, Math.max(0, B - (U + I)), g - (F + H), Vi.BOTTOM_LEFT) : new Xi(t.left + U + I,t.top + t.height - (F + H))
                };
                !function(A) {
                    A[A.TOP_LEFT = 0] = "TOP_LEFT",
                    A[A.TOP_RIGHT = 1] = "TOP_RIGHT",
                    A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
                    A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
                }(Vi || (Vi = {}));
                var zi = function(A, e, t, n, r) {
                    var i = (Math.sqrt(2) - 1) / 3 * 4
                      , o = t * i
                      , a = n * i
                      , s = A + t
                      , l = e + n;
                    switch (r) {
                    case Vi.TOP_LEFT:
                        return new Wi(new Xi(A,l),new Xi(A,l - a),new Xi(s - o,e),new Xi(s,e));
                    case Vi.TOP_RIGHT:
                        return new Wi(new Xi(A,e),new Xi(A + o,e),new Xi(s,l - a),new Xi(s,l));
                    case Vi.BOTTOM_RIGHT:
                        return new Wi(new Xi(s,e),new Xi(s,e + a),new Xi(A + o,l),new Xi(A,l));
                    case Vi.BOTTOM_LEFT:
                    default:
                        return new Wi(new Xi(s,l),new Xi(s - o,l),new Xi(A,e + a),new Xi(A,e))
                    }
                }
                  , $i = function(A) {
                    return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
                }
                  , qi = function(A) {
                    return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
                }
                  , Ao = function(A, e, t) {
                    this.offsetX = A,
                    this.offsetY = e,
                    this.matrix = t,
                    this.type = 0,
                    this.target = 6
                }
                  , eo = function(A, e) {
                    this.path = A,
                    this.target = e,
                    this.type = 1
                }
                  , to = function(A) {
                    this.opacity = A,
                    this.type = 2,
                    this.target = 6
                }
                  , no = function(A) {
                    return 1 === A.type
                }
                  , ro = function(A) {
                    this.element = A,
                    this.inlineLevel = [],
                    this.nonInlineLevel = [],
                    this.negativeZIndex = [],
                    this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
                    this.positiveZIndex = [],
                    this.nonPositionedFloats = [],
                    this.nonPositionedInlineLevel = []
                }
                  , io = function() {
                    function A(A, e) {
                        if (this.container = A,
                        this.parent = e,
                        this.effects = [],
                        this.curves = new Zi(this.container),
                        this.container.styles.opacity < 1 && this.effects.push(new to(this.container.styles.opacity)),
                        null !== this.container.styles.transform) {
                            var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number
                              , n = this.container.bounds.top + this.container.styles.transformOrigin[1].number
                              , r = this.container.styles.transform;
                            this.effects.push(new Ao(t,n,r))
                        }
                        if (this.container.styles.overflowX !== kt.VISIBLE) {
                            var i = $i(this.curves)
                              , o = qi(this.curves);
                            Ji(i, o) ? this.effects.push(new eo(i,6)) : (this.effects.push(new eo(i,2)),
                            this.effects.push(new eo(o,4)))
                        }
                    }
                    return A.prototype.getEffects = function(A) {
                        for (var e = -1 === [Xt.ABSOLUTE, Xt.FIXED].indexOf(this.container.styles.position), t = this.parent, n = this.effects.slice(0); t; ) {
                            var r = t.effects.filter((function(A) {
                                return !no(A)
                            }
                            ));
                            if (e || t.container.styles.position !== Xt.STATIC || !t.parent) {
                                if (n.unshift.apply(n, r),
                                e = -1 === [Xt.ABSOLUTE, Xt.FIXED].indexOf(t.container.styles.position),
                                t.container.styles.overflowX !== kt.VISIBLE) {
                                    var i = $i(t.curves)
                                      , o = qi(t.curves);
                                    Ji(i, o) || n.unshift(new eo(o,6))
                                }
                            } else
                                n.unshift.apply(n, r);
                            t = t.parent
                        }
                        return n.filter((function(e) {
                            return bn(e.target, A)
                        }
                        ))
                    }
                    ,
                    A
                }()
                  , oo = function(A, e, t, n) {
                    A.container.elements.forEach((function(r) {
                        var i = bn(r.flags, 4)
                          , o = bn(r.flags, 2)
                          , a = new io(r,A);
                        bn(r.styles.display, 2048) && n.push(a);
                        var s = bn(r.flags, 8) ? [] : n;
                        if (i || o) {
                            var l = i || r.styles.isPositioned() ? t : e
                              , c = new ro(a);
                            if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
                                var u = r.styles.zIndex.order;
                                if (u < 0) {
                                    var d = 0;
                                    l.negativeZIndex.some((function(A, e) {
                                        return u > A.element.container.styles.zIndex.order ? (d = e,
                                        !1) : d > 0
                                    }
                                    )),
                                    l.negativeZIndex.splice(d, 0, c)
                                } else if (u > 0) {
                                    var B = 0;
                                    l.positiveZIndex.some((function(A, e) {
                                        return u >= A.element.container.styles.zIndex.order ? (B = e + 1,
                                        !1) : B > 0
                                    }
                                    )),
                                    l.positiveZIndex.splice(B, 0, c)
                                } else
                                    l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)
                            } else
                                r.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
                            oo(a, c, i ? c : t, s)
                        } else
                            r.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a),
                            oo(a, e, t, s);
                        bn(r.flags, 8) && ao(r, s)
                    }
                    ))
                }
                  , ao = function(A, e) {
                    for (var t = A instanceof Cr ? A.start : 1, n = A instanceof Cr && A.reversed, r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.container instanceof Qr && "number" == typeof i.container.value && 0 !== i.container.value && (t = i.container.value),
                        i.listValue = hi(t, i.container.styles.listStyleType, !0),
                        t += n ? -1 : 1
                    }
                }
                  , so = function(A, e) {
                    switch (e) {
                    case 0:
                        return co(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                    case 1:
                        return co(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                    case 2:
                        return co(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                    default:
                        return co(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
                    }
                }
                  , lo = function(A, e) {
                    var t = [];
                    return ji(A) ? t.push(A.subdivide(.5, !1)) : t.push(A),
                    ji(e) ? t.push(e.subdivide(.5, !0)) : t.push(e),
                    t
                }
                  , co = function(A, e, t, n) {
                    var r = [];
                    return ji(A) ? r.push(A.subdivide(.5, !1)) : r.push(A),
                    ji(t) ? r.push(t.subdivide(.5, !0)) : r.push(t),
                    ji(n) ? r.push(n.subdivide(.5, !0).reverse()) : r.push(n),
                    ji(e) ? r.push(e.subdivide(.5, !1).reverse()) : r.push(e),
                    r
                }
                  , uo = function(A) {
                    var e = A.bounds
                      , t = A.styles;
                    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
                }
                  , Bo = function(A) {
                    var e = A.styles
                      , t = A.bounds
                      , n = qA(e.paddingLeft, t.width)
                      , r = qA(e.paddingRight, t.width)
                      , i = qA(e.paddingTop, t.width)
                      , o = qA(e.paddingBottom, t.width);
                    return t.add(n + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + n + r), -(e.borderTopWidth + e.borderBottomWidth + i + o))
                }
                  , go = function(A, e, t) {
                    var n = function(A, e) {
                        return 0 === A ? e.bounds : 2 === A ? Bo(e) : uo(e)
                    }(wo(A.styles.backgroundOrigin, e), A)
                      , r = function(A, e) {
                        return A === Be.BORDER_BOX ? e.bounds : A === Be.CONTENT_BOX ? Bo(e) : uo(e)
                    }(wo(A.styles.backgroundClip, e), A)
                      , i = po(wo(A.styles.backgroundSize, e), t, n)
                      , o = i[0]
                      , a = i[1]
                      , s = $A(wo(A.styles.backgroundPosition, e), n.width - o, n.height - a);
                    return [mo(wo(A.styles.backgroundRepeat, e), s, i, n, r), Math.round(n.left + s[0]), Math.round(n.top + s[1]), o, a]
                }
                  , fo = function(A) {
                    return OA(A) && A.value === Ve.AUTO
                }
                  , ho = function(A) {
                    return "number" == typeof A
                }
                  , po = function(A, e, t) {
                    var n = e[0]
                      , r = e[1]
                      , i = e[2]
                      , o = A[0]
                      , a = A[1];
                    if (!o)
                        return [0, 0];
                    if (YA(o) && a && YA(a))
                        return [qA(o, t.width), qA(a, t.height)];
                    var s = ho(i);
                    if (OA(o) && (o.value === Ve.CONTAIN || o.value === Ve.COVER))
                        return ho(i) ? t.width / t.height < i != (o.value === Ve.COVER) ? [t.width, t.width / i] : [t.height * i, t.height] : [t.width, t.height];
                    var l = ho(n)
                      , c = ho(r)
                      , u = l || c;
                    if (fo(o) && (!a || fo(a)))
                        return l && c ? [n, r] : s || u ? u && s ? [l ? n : r * i, c ? r : n / i] : [l ? n : t.width, c ? r : t.height] : [t.width, t.height];
                    if (s) {
                        var d = 0
                          , B = 0;
                        return YA(o) ? d = qA(o, t.width) : YA(a) && (B = qA(a, t.height)),
                        fo(o) ? d = B * i : a && !fo(a) || (B = d / i),
                        [d, B]
                    }
                    var g = null
                      , f = null;
                    if (YA(o) ? g = qA(o, t.width) : a && YA(a) && (f = qA(a, t.height)),
                    null === g || a && !fo(a) || (f = l && c ? g / n * r : t.height),
                    null !== f && fo(o) && (g = l && c ? f / r * n : t.width),
                    null !== g && null !== f)
                        return [g, f];
                    throw new Error("Unable to calculate background-size for element")
                }
                  , wo = function(A, e) {
                    var t = A[e];
                    return void 0 === t ? A[0] : t
                }
                  , mo = function(A, e, t, n, r) {
                    var i = e[0]
                      , o = e[1]
                      , a = t[0]
                      , s = t[1];
                    switch (A) {
                    case Oe.REPEAT_X:
                        return [new Xi(Math.round(n.left),Math.round(n.top + o)), new Xi(Math.round(n.left + n.width),Math.round(n.top + o)), new Xi(Math.round(n.left + n.width),Math.round(s + n.top + o)), new Xi(Math.round(n.left),Math.round(s + n.top + o))];
                    case Oe.REPEAT_Y:
                        return [new Xi(Math.round(n.left + i),Math.round(n.top)), new Xi(Math.round(n.left + i + a),Math.round(n.top)), new Xi(Math.round(n.left + i + a),Math.round(n.height + n.top)), new Xi(Math.round(n.left + i),Math.round(n.height + n.top))];
                    case Oe.NO_REPEAT:
                        return [new Xi(Math.round(n.left + i),Math.round(n.top + o)), new Xi(Math.round(n.left + i + a),Math.round(n.top + o)), new Xi(Math.round(n.left + i + a),Math.round(n.top + o + s)), new Xi(Math.round(n.left + i),Math.round(n.top + o + s))];
                    default:
                        return [new Xi(Math.round(r.left),Math.round(r.top)), new Xi(Math.round(r.left + r.width),Math.round(r.top)), new Xi(Math.round(r.left + r.width),Math.round(r.height + r.top)), new Xi(Math.round(r.left),Math.round(r.height + r.top))]
                    }
                }
                  , bo = "Hidden Text"
                  , Qo = function() {
                    function A(A) {
                        this._data = {},
                        this._document = A
                    }
                    return A.prototype.parseMetrics = function(A, e) {
                        var t = this._document.createElement("div")
                          , n = this._document.createElement("img")
                          , r = this._document.createElement("span")
                          , i = this._document.body;
                        t.style.visibility = "hidden",
                        t.style.fontFamily = A,
                        t.style.fontSize = e,
                        t.style.margin = "0",
                        t.style.padding = "0",
                        i.appendChild(t),
                        n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                        n.width = 1,
                        n.height = 1,
                        n.style.margin = "0",
                        n.style.padding = "0",
                        n.style.verticalAlign = "baseline",
                        r.style.fontFamily = A,
                        r.style.fontSize = e,
                        r.style.margin = "0",
                        r.style.padding = "0",
                        r.appendChild(this._document.createTextNode(bo)),
                        t.appendChild(r),
                        t.appendChild(n);
                        var o = n.offsetTop - r.offsetTop + 2;
                        t.removeChild(r),
                        t.appendChild(this._document.createTextNode(bo)),
                        t.style.lineHeight = "normal",
                        n.style.verticalAlign = "super";
                        var a = n.offsetTop - t.offsetTop + 2;
                        return i.removeChild(t),
                        {
                            baseline: o,
                            middle: a
                        }
                    }
                    ,
                    A.prototype.getMetrics = function(A, e) {
                        var t = A + " " + e;
                        return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)),
                        this._data[t]
                    }
                    ,
                    A
                }()
                  , Co = function(A, e) {
                    this.context = A,
                    this.options = e
                }
                  , Fo = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        return n._activeEffects = [],
                        n.canvas = t.canvas ? t.canvas : document.createElement("canvas"),
                        n.ctx = n.canvas.getContext("2d"),
                        t.canvas || (n.canvas.width = Math.floor(t.width * t.scale),
                        n.canvas.height = Math.floor(t.height * t.scale),
                        n.canvas.style.width = t.width + "px",
                        n.canvas.style.height = t.height + "px"),
                        n.fontMetrics = new Qo(document),
                        n.ctx.scale(n.options.scale, n.options.scale),
                        n.ctx.translate(-t.x, -t.y),
                        n.ctx.textBaseline = "bottom",
                        n._activeEffects = [],
                        n.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale),
                        n
                    }
                    return e(t, A),
                    t.prototype.applyEffects = function(A) {
                        for (var e = this; this._activeEffects.length; )
                            this.popEffect();
                        A.forEach((function(A) {
                            return e.applyEffect(A)
                        }
                        ))
                    }
                    ,
                    t.prototype.applyEffect = function(A) {
                        this.ctx.save(),
                        function(A) {
                            return 2 === A.type
                        }(A) && (this.ctx.globalAlpha = A.opacity),
                        function(A) {
                            return 0 === A.type
                        }(A) && (this.ctx.translate(A.offsetX, A.offsetY),
                        this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]),
                        this.ctx.translate(-A.offsetX, -A.offsetY)),
                        no(A) && (this.path(A.path),
                        this.ctx.clip()),
                        this._activeEffects.push(A)
                    }
                    ,
                    t.prototype.popEffect = function() {
                        this._activeEffects.pop(),
                        this.ctx.restore()
                    }
                    ,
                    t.prototype.renderStack = function(A) {
                        return n(this, void 0, void 0, (function() {
                            return r(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return A.element.container.styles.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
                                case 1:
                                    e.sent(),
                                    e.label = 2;
                                case 2:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderNode = function(A) {
                        return n(this, void 0, void 0, (function() {
                            return r(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return bn(A.container.flags, 16),
                                    A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
                                case 1:
                                    return e.sent(),
                                    [4, this.renderNodeContent(A)];
                                case 2:
                                    e.sent(),
                                    e.label = 3;
                                case 3:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderTextWithLetterSpacing = function(A, e, t) {
                        var n = this;
                        0 === e ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t) : tr(A.text).reduce((function(e, r) {
                            return n.ctx.fillText(r, e, A.bounds.top + t),
                            e + n.ctx.measureText(r).width
                        }
                        ), A.bounds.left)
                    }
                    ,
                    t.prototype.createFontStyle = function(A) {
                        var e = A.fontVariant.filter((function(A) {
                            return "normal" === A || "small-caps" === A
                        }
                        )).join("")
                          , t = A.fontFamily.join(", ")
                          , n = RA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                        return [[A.fontStyle, e, A.fontWeight, n, t].join(" "), t, n]
                    }
                    ,
                    t.prototype.renderTextNode = function(A, e) {
                        return n(this, void 0, void 0, (function() {
                            var t, n, i, o, a, s, l, c, u = this;
                            return r(this, (function(r) {
                                return t = this.createFontStyle(e),
                                n = t[0],
                                i = t[1],
                                o = t[2],
                                this.ctx.font = n,
                                this.ctx.direction = 1 === e.direction ? "rtl" : "ltr",
                                this.ctx.textAlign = "left",
                                this.ctx.textBaseline = "alphabetic",
                                a = this.fontMetrics.getMetrics(i, o),
                                s = a.baseline,
                                l = a.middle,
                                c = e.paintOrder,
                                A.textBounds.forEach((function(A) {
                                    c.forEach((function(t) {
                                        switch (t) {
                                        case wn.FILL:
                                            u.ctx.fillStyle = se(e.color),
                                            u.renderTextWithLetterSpacing(A, e.letterSpacing, s);
                                            var n = e.textShadow;
                                            n.length && A.text.trim().length && (n.slice(0).reverse().forEach((function(t) {
                                                u.ctx.shadowColor = se(t.color),
                                                u.ctx.shadowOffsetX = t.offsetX.number * u.options.scale,
                                                u.ctx.shadowOffsetY = t.offsetY.number * u.options.scale,
                                                u.ctx.shadowBlur = t.blur.number,
                                                u.renderTextWithLetterSpacing(A, e.letterSpacing, s)
                                            }
                                            )),
                                            u.ctx.shadowColor = "",
                                            u.ctx.shadowOffsetX = 0,
                                            u.ctx.shadowOffsetY = 0,
                                            u.ctx.shadowBlur = 0),
                                            e.textDecorationLine.length && (u.ctx.fillStyle = se(e.textDecorationColor || e.color),
                                            e.textDecorationLine.forEach((function(e) {
                                                switch (e) {
                                                case 1:
                                                    u.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + s), A.bounds.width, 1);
                                                    break;
                                                case 2:
                                                    u.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                                                    break;
                                                case 3:
                                                    u.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + l), A.bounds.width, 1)
                                                }
                                            }
                                            )));
                                            break;
                                        case wn.STROKE:
                                            e.webkitTextStrokeWidth && A.text.trim().length && (u.ctx.strokeStyle = se(e.webkitTextStrokeColor),
                                            u.ctx.lineWidth = e.webkitTextStrokeWidth,
                                            u.ctx.lineJoin = window.chrome ? "miter" : "round",
                                            u.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + s)),
                                            u.ctx.strokeStyle = "",
                                            u.ctx.lineWidth = 0,
                                            u.ctx.lineJoin = "miter"
                                        }
                                    }
                                    ))
                                }
                                )),
                                [2]
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderReplacedElement = function(A, e, t) {
                        if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
                            var n = Bo(A)
                              , r = qi(e);
                            this.path(r),
                            this.ctx.save(),
                            this.ctx.clip(),
                            this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, n.left, n.top, n.width, n.height),
                            this.ctx.restore()
                        }
                    }
                    ,
                    t.prototype.renderNodeContent = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var e, n, i, a, s, l, c, u, d, B, g, f, h, p, w, m, b, Q;
                            return r(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    this.applyEffects(A.getEffects(4)),
                                    e = A.container,
                                    n = A.curves,
                                    i = e.styles,
                                    a = 0,
                                    s = e.textNodes,
                                    r.label = 1;
                                case 1:
                                    return a < s.length ? (l = s[a],
                                    [4, this.renderTextNode(l, i)]) : [3, 4];
                                case 2:
                                    r.sent(),
                                    r.label = 3;
                                case 3:
                                    return a++,
                                    [3, 1];
                                case 4:
                                    if (!(e instanceof wr))
                                        return [3, 8];
                                    r.label = 5;
                                case 5:
                                    return r.trys.push([5, 7, , 8]),
                                    [4, this.context.cache.match(e.src)];
                                case 6:
                                    return w = r.sent(),
                                    this.renderReplacedElement(e, n, w),
                                    [3, 8];
                                case 7:
                                    return r.sent(),
                                    this.context.logger.error("Error loading image " + e.src),
                                    [3, 8];
                                case 8:
                                    if (e instanceof mr && this.renderReplacedElement(e, n, e.canvas),
                                    !(e instanceof br))
                                        return [3, 12];
                                    r.label = 9;
                                case 9:
                                    return r.trys.push([9, 11, , 12]),
                                    [4, this.context.cache.match(e.svg)];
                                case 10:
                                    return w = r.sent(),
                                    this.renderReplacedElement(e, n, w),
                                    [3, 12];
                                case 11:
                                    return r.sent(),
                                    this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)),
                                    [3, 12];
                                case 12:
                                    return e instanceof Lr && e.tree ? [4, new t(this.context,{
                                        scale: this.options.scale,
                                        backgroundColor: e.backgroundColor,
                                        x: 0,
                                        y: 0,
                                        width: e.width,
                                        height: e.height
                                    }).render(e.tree)] : [3, 14];
                                case 13:
                                    c = r.sent(),
                                    e.width && e.height && this.ctx.drawImage(c, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height),
                                    r.label = 14;
                                case 14:
                                    if (e instanceof xr && (u = Math.min(e.bounds.width, e.bounds.height),
                                    e.type === Er ? e.checked && (this.ctx.save(),
                                    this.path([new Xi(e.bounds.left + .39363 * u,e.bounds.top + .79 * u), new Xi(e.bounds.left + .16 * u,e.bounds.top + .5549 * u), new Xi(e.bounds.left + .27347 * u,e.bounds.top + .44071 * u), new Xi(e.bounds.left + .39694 * u,e.bounds.top + .5649 * u), new Xi(e.bounds.left + .72983 * u,e.bounds.top + .23 * u), new Xi(e.bounds.left + .84 * u,e.bounds.top + .34085 * u), new Xi(e.bounds.left + .39363 * u,e.bounds.top + .79 * u)]),
                                    this.ctx.fillStyle = se(Ir),
                                    this.ctx.fill(),
                                    this.ctx.restore()) : e.type === yr && e.checked && (this.ctx.save(),
                                    this.ctx.beginPath(),
                                    this.ctx.arc(e.bounds.left + u / 2, e.bounds.top + u / 2, u / 4, 0, 2 * Math.PI, !0),
                                    this.ctx.fillStyle = se(Ir),
                                    this.ctx.fill(),
                                    this.ctx.restore())),
                                    Uo(e) && e.value.length) {
                                        switch (d = this.createFontStyle(i),
                                        b = d[0],
                                        B = d[1],
                                        g = this.fontMetrics.getMetrics(b, B).baseline,
                                        this.ctx.font = b,
                                        this.ctx.fillStyle = se(i.color),
                                        this.ctx.textBaseline = "alphabetic",
                                        this.ctx.textAlign = yo(e.styles.textAlign),
                                        Q = Bo(e),
                                        f = 0,
                                        e.styles.textAlign) {
                                        case Mt.CENTER:
                                            f += Q.width / 2;
                                            break;
                                        case Mt.RIGHT:
                                            f += Q.width
                                        }
                                        h = Q.add(f, 0, 0, -Q.height / 2 + 1),
                                        this.ctx.save(),
                                        this.path([new Xi(Q.left,Q.top), new Xi(Q.left + Q.width,Q.top), new Xi(Q.left + Q.width,Q.top + Q.height), new Xi(Q.left,Q.top + Q.height)]),
                                        this.ctx.clip(),
                                        this.renderTextWithLetterSpacing(new ar(e.value,h), i.letterSpacing, g),
                                        this.ctx.restore(),
                                        this.ctx.textBaseline = "alphabetic",
                                        this.ctx.textAlign = "left"
                                    }
                                    if (!bn(e.styles.display, 2048))
                                        return [3, 20];
                                    if (null === e.styles.listStyleImage)
                                        return [3, 19];
                                    if ((p = e.styles.listStyleImage).type !== we.URL)
                                        return [3, 18];
                                    w = void 0,
                                    m = p.url,
                                    r.label = 15;
                                case 15:
                                    return r.trys.push([15, 17, , 18]),
                                    [4, this.context.cache.match(m)];
                                case 16:
                                    return w = r.sent(),
                                    this.ctx.drawImage(w, e.bounds.left - (w.width + 10), e.bounds.top),
                                    [3, 18];
                                case 17:
                                    return r.sent(),
                                    this.context.logger.error("Error loading list-style-image " + m),
                                    [3, 18];
                                case 18:
                                    return [3, 20];
                                case 19:
                                    A.listValue && e.styles.listStyleType !== xt.NONE && (b = this.createFontStyle(i)[0],
                                    this.ctx.font = b,
                                    this.ctx.fillStyle = se(i.color),
                                    this.ctx.textBaseline = "middle",
                                    this.ctx.textAlign = "right",
                                    Q = new o(e.bounds.left,e.bounds.top + qA(e.styles.paddingTop, e.bounds.width),e.bounds.width,Ht(i.lineHeight, i.fontSize.number) / 2 + 1),
                                    this.renderTextWithLetterSpacing(new ar(A.listValue,Q), i.letterSpacing, Ht(i.lineHeight, i.fontSize.number) / 2 + 2),
                                    this.ctx.textBaseline = "bottom",
                                    this.ctx.textAlign = "left"),
                                    r.label = 20;
                                case 20:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderStackContent = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var e, t, n, i, o, a, s, l, c, u, d, B, g, f, h;
                            return r(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return bn(A.element.container.flags, 16),
                                    [4, this.renderNodeBackgroundAndBorders(A.element)];
                                case 1:
                                    r.sent(),
                                    e = 0,
                                    t = A.negativeZIndex,
                                    r.label = 2;
                                case 2:
                                    return e < t.length ? (h = t[e],
                                    [4, this.renderStack(h)]) : [3, 5];
                                case 3:
                                    r.sent(),
                                    r.label = 4;
                                case 4:
                                    return e++,
                                    [3, 2];
                                case 5:
                                    return [4, this.renderNodeContent(A.element)];
                                case 6:
                                    r.sent(),
                                    n = 0,
                                    i = A.nonInlineLevel,
                                    r.label = 7;
                                case 7:
                                    return n < i.length ? (h = i[n],
                                    [4, this.renderNode(h)]) : [3, 10];
                                case 8:
                                    r.sent(),
                                    r.label = 9;
                                case 9:
                                    return n++,
                                    [3, 7];
                                case 10:
                                    o = 0,
                                    a = A.nonPositionedFloats,
                                    r.label = 11;
                                case 11:
                                    return o < a.length ? (h = a[o],
                                    [4, this.renderStack(h)]) : [3, 14];
                                case 12:
                                    r.sent(),
                                    r.label = 13;
                                case 13:
                                    return o++,
                                    [3, 11];
                                case 14:
                                    s = 0,
                                    l = A.nonPositionedInlineLevel,
                                    r.label = 15;
                                case 15:
                                    return s < l.length ? (h = l[s],
                                    [4, this.renderStack(h)]) : [3, 18];
                                case 16:
                                    r.sent(),
                                    r.label = 17;
                                case 17:
                                    return s++,
                                    [3, 15];
                                case 18:
                                    c = 0,
                                    u = A.inlineLevel,
                                    r.label = 19;
                                case 19:
                                    return c < u.length ? (h = u[c],
                                    [4, this.renderNode(h)]) : [3, 22];
                                case 20:
                                    r.sent(),
                                    r.label = 21;
                                case 21:
                                    return c++,
                                    [3, 19];
                                case 22:
                                    d = 0,
                                    B = A.zeroOrAutoZIndexOrTransformedOrOpacity,
                                    r.label = 23;
                                case 23:
                                    return d < B.length ? (h = B[d],
                                    [4, this.renderStack(h)]) : [3, 26];
                                case 24:
                                    r.sent(),
                                    r.label = 25;
                                case 25:
                                    return d++,
                                    [3, 23];
                                case 26:
                                    g = 0,
                                    f = A.positiveZIndex,
                                    r.label = 27;
                                case 27:
                                    return g < f.length ? (h = f[g],
                                    [4, this.renderStack(h)]) : [3, 30];
                                case 28:
                                    r.sent(),
                                    r.label = 29;
                                case 29:
                                    return g++,
                                    [3, 27];
                                case 30:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.mask = function(A) {
                        this.ctx.beginPath(),
                        this.ctx.moveTo(0, 0),
                        this.ctx.lineTo(this.canvas.width, 0),
                        this.ctx.lineTo(this.canvas.width, this.canvas.height),
                        this.ctx.lineTo(0, this.canvas.height),
                        this.ctx.lineTo(0, 0),
                        this.formatPath(A.slice(0).reverse()),
                        this.ctx.closePath()
                    }
                    ,
                    t.prototype.path = function(A) {
                        this.ctx.beginPath(),
                        this.formatPath(A),
                        this.ctx.closePath()
                    }
                    ,
                    t.prototype.formatPath = function(A) {
                        var e = this;
                        A.forEach((function(A, t) {
                            var n = ji(A) ? A.start : A;
                            0 === t ? e.ctx.moveTo(n.x, n.y) : e.ctx.lineTo(n.x, n.y),
                            ji(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                        }
                        ))
                    }
                    ,
                    t.prototype.renderRepeat = function(A, e, t, n) {
                        this.path(A),
                        this.ctx.fillStyle = e,
                        this.ctx.translate(t, n),
                        this.ctx.fill(),
                        this.ctx.translate(-t, -n)
                    }
                    ,
                    t.prototype.resizeImage = function(A, e, t) {
                        var n;
                        if (A.width === e && A.height === t)
                            return A;
                        var r = (null !== (n = this.canvas.ownerDocument) && void 0 !== n ? n : document).createElement("canvas");
                        return r.width = Math.max(1, e),
                        r.height = Math.max(1, t),
                        r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
                        r
                    }
                    ,
                    t.prototype.renderBackgroundImage = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var e, t, n, i, o, a;
                            return r(this, (function(s) {
                                switch (s.label) {
                                case 0:
                                    e = A.styles.backgroundImage.length - 1,
                                    t = function(t) {
                                        var i, o, a, s, l, c, u, d, B, g, f, h, p, w, m, b, Q, C, F, U, E, y, H, I, x, v, k, L, K, D, S;
                                        return r(this, (function(r) {
                                            switch (r.label) {
                                            case 0:
                                                if (t.type !== we.URL)
                                                    return [3, 5];
                                                i = void 0,
                                                o = t.url,
                                                r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]),
                                                [4, n.context.cache.match(o)];
                                            case 2:
                                                return i = r.sent(),
                                                [3, 4];
                                            case 3:
                                                return r.sent(),
                                                n.context.logger.error("Error loading background-image " + o),
                                                [3, 4];
                                            case 4:
                                                return i && (a = go(A, e, [i.width, i.height, i.width / i.height]),
                                                b = a[0],
                                                y = a[1],
                                                H = a[2],
                                                F = a[3],
                                                U = a[4],
                                                w = n.ctx.createPattern(n.resizeImage(i, F, U), "repeat"),
                                                n.renderRepeat(b, w, y, H)),
                                                [3, 6];
                                            case 5:
                                                t.type === we.LINEAR_GRADIENT ? (s = go(A, e, [null, null, null]),
                                                b = s[0],
                                                y = s[1],
                                                H = s[2],
                                                F = s[3],
                                                U = s[4],
                                                l = Fe(t.angle, F, U),
                                                c = l[0],
                                                u = l[1],
                                                d = l[2],
                                                B = l[3],
                                                g = l[4],
                                                (f = document.createElement("canvas")).width = F,
                                                f.height = U,
                                                h = f.getContext("2d"),
                                                p = h.createLinearGradient(u, B, d, g),
                                                Ce(t.stops, c).forEach((function(A) {
                                                    return p.addColorStop(A.stop, se(A.color))
                                                }
                                                )),
                                                h.fillStyle = p,
                                                h.fillRect(0, 0, F, U),
                                                F > 0 && U > 0 && (w = n.ctx.createPattern(f, "repeat"),
                                                n.renderRepeat(b, w, y, H))) : function(A) {
                                                    return A.type === we.RADIAL_GRADIENT
                                                }(t) && (m = go(A, e, [null, null, null]),
                                                b = m[0],
                                                Q = m[1],
                                                C = m[2],
                                                F = m[3],
                                                U = m[4],
                                                E = 0 === t.position.length ? [ZA] : t.position,
                                                y = qA(E[0], F),
                                                H = qA(E[E.length - 1], U),
                                                I = function(A, e, t, n, r) {
                                                    var i = 0
                                                      , o = 0;
                                                    switch (A.size) {
                                                    case Re.CLOSEST_SIDE:
                                                        A.shape === Te.CIRCLE ? i = o = Math.min(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : A.shape === Te.ELLIPSE && (i = Math.min(Math.abs(e), Math.abs(e - n)),
                                                        o = Math.min(Math.abs(t), Math.abs(t - r)));
                                                        break;
                                                    case Re.CLOSEST_CORNER:
                                                        if (A.shape === Te.CIRCLE)
                                                            i = o = Math.min(Ue(e, t), Ue(e, t - r), Ue(e - n, t), Ue(e - n, t - r));
                                                        else if (A.shape === Te.ELLIPSE) {
                                                            var a = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(e), Math.abs(e - n))
                                                              , s = Ee(n, r, e, t, !0)
                                                              , l = s[0]
                                                              , c = s[1];
                                                            o = a * (i = Ue(l - e, (c - t) / a))
                                                        }
                                                        break;
                                                    case Re.FARTHEST_SIDE:
                                                        A.shape === Te.CIRCLE ? i = o = Math.max(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : A.shape === Te.ELLIPSE && (i = Math.max(Math.abs(e), Math.abs(e - n)),
                                                        o = Math.max(Math.abs(t), Math.abs(t - r)));
                                                        break;
                                                    case Re.FARTHEST_CORNER:
                                                        if (A.shape === Te.CIRCLE)
                                                            i = o = Math.max(Ue(e, t), Ue(e, t - r), Ue(e - n, t), Ue(e - n, t - r));
                                                        else if (A.shape === Te.ELLIPSE) {
                                                            a = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(e), Math.abs(e - n));
                                                            var u = Ee(n, r, e, t, !1);
                                                            l = u[0],
                                                            c = u[1],
                                                            o = a * (i = Ue(l - e, (c - t) / a))
                                                        }
                                                    }
                                                    return Array.isArray(A.size) && (i = qA(A.size[0], n),
                                                    o = 2 === A.size.length ? qA(A.size[1], r) : i),
                                                    [i, o]
                                                }(t, y, H, F, U),
                                                x = I[0],
                                                v = I[1],
                                                x > 0 && v > 0 && (k = n.ctx.createRadialGradient(Q + y, C + H, 0, Q + y, C + H, x),
                                                Ce(t.stops, 2 * x).forEach((function(A) {
                                                    return k.addColorStop(A.stop, se(A.color))
                                                }
                                                )),
                                                n.path(b),
                                                n.ctx.fillStyle = k,
                                                x !== v ? (L = A.bounds.left + .5 * A.bounds.width,
                                                K = A.bounds.top + .5 * A.bounds.height,
                                                S = 1 / (D = v / x),
                                                n.ctx.save(),
                                                n.ctx.translate(L, K),
                                                n.ctx.transform(1, 0, 0, D, 0, 0),
                                                n.ctx.translate(-L, -K),
                                                n.ctx.fillRect(Q, S * (C - K) + K, F, U * S),
                                                n.ctx.restore()) : n.ctx.fill())),
                                                r.label = 6;
                                            case 6:
                                                return e--,
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ,
                                    n = this,
                                    i = 0,
                                    o = A.styles.backgroundImage.slice(0).reverse(),
                                    s.label = 1;
                                case 1:
                                    return i < o.length ? (a = o[i],
                                    [5, t(a)]) : [3, 4];
                                case 2:
                                    s.sent(),
                                    s.label = 3;
                                case 3:
                                    return i++,
                                    [3, 1];
                                case 4:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderSolidBorder = function(A, e, t) {
                        return n(this, void 0, void 0, (function() {
                            return r(this, (function(n) {
                                return this.path(so(t, e)),
                                this.ctx.fillStyle = se(A),
                                this.ctx.fill(),
                                [2]
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderDoubleBorder = function(A, e, t, i) {
                        return n(this, void 0, void 0, (function() {
                            var n, o;
                            return r(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return e < 3 ? [4, this.renderSolidBorder(A, t, i)] : [3, 2];
                                case 1:
                                    return r.sent(),
                                    [2];
                                case 2:
                                    return n = function(A, e) {
                                        switch (e) {
                                        case 0:
                                            return co(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                                        case 1:
                                            return co(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                                        case 2:
                                            return co(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                                        default:
                                            return co(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
                                        }
                                    }(i, t),
                                    this.path(n),
                                    this.ctx.fillStyle = se(A),
                                    this.ctx.fill(),
                                    o = function(A, e) {
                                        switch (e) {
                                        case 0:
                                            return co(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                                        case 1:
                                            return co(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                                        case 2:
                                            return co(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                                        default:
                                            return co(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
                                        }
                                    }(i, t),
                                    this.path(o),
                                    this.ctx.fill(),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderNodeBackgroundAndBorders = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var e, t, n, i, o, a, s, l, c = this;
                            return r(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return this.applyEffects(A.getEffects(2)),
                                    e = A.container.styles,
                                    t = !ae(e.backgroundColor) || e.backgroundImage.length,
                                    n = [{
                                        style: e.borderTopStyle,
                                        color: e.borderTopColor,
                                        width: e.borderTopWidth
                                    }, {
                                        style: e.borderRightStyle,
                                        color: e.borderRightColor,
                                        width: e.borderRightWidth
                                    }, {
                                        style: e.borderBottomStyle,
                                        color: e.borderBottomColor,
                                        width: e.borderBottomWidth
                                    }, {
                                        style: e.borderLeftStyle,
                                        color: e.borderLeftColor,
                                        width: e.borderLeftWidth
                                    }],
                                    i = Eo(wo(e.backgroundClip, 0), A.curves),
                                    t || e.boxShadow.length ? (this.ctx.save(),
                                    this.path(i),
                                    this.ctx.clip(),
                                    ae(e.backgroundColor) || (this.ctx.fillStyle = se(e.backgroundColor),
                                    this.ctx.fill()),
                                    [4, this.renderBackgroundImage(A.container)]) : [3, 2];
                                case 1:
                                    r.sent(),
                                    this.ctx.restore(),
                                    e.boxShadow.slice(0).reverse().forEach((function(e) {
                                        c.ctx.save();
                                        var t, n, r, i, o, a = $i(A.curves), s = e.inset ? 0 : 1e4, l = (t = a,
                                        n = -s + (e.inset ? 1 : -1) * e.spread.number,
                                        r = (e.inset ? 1 : -1) * e.spread.number,
                                        i = e.spread.number * (e.inset ? -2 : 2),
                                        o = e.spread.number * (e.inset ? -2 : 2),
                                        t.map((function(A, e) {
                                            switch (e) {
                                            case 0:
                                                return A.add(n, r);
                                            case 1:
                                                return A.add(n + i, r);
                                            case 2:
                                                return A.add(n + i, r + o);
                                            case 3:
                                                return A.add(n, r + o)
                                            }
                                            return A
                                        }
                                        )));
                                        e.inset ? (c.path(a),
                                        c.ctx.clip(),
                                        c.mask(l)) : (c.mask(a),
                                        c.ctx.clip(),
                                        c.path(l)),
                                        c.ctx.shadowOffsetX = e.offsetX.number + s,
                                        c.ctx.shadowOffsetY = e.offsetY.number,
                                        c.ctx.shadowColor = se(e.color),
                                        c.ctx.shadowBlur = e.blur.number,
                                        c.ctx.fillStyle = e.inset ? se(e.color) : "rgba(0,0,0,1)",
                                        c.ctx.fill(),
                                        c.ctx.restore()
                                    }
                                    )),
                                    r.label = 2;
                                case 2:
                                    o = 0,
                                    a = 0,
                                    s = n,
                                    r.label = 3;
                                case 3:
                                    return a < s.length ? (l = s[a]).style !== Ye.NONE && !ae(l.color) && l.width > 0 ? l.style !== Ye.DASHED ? [3, 5] : [4, this.renderDashedDottedBorder(l.color, l.width, o, A.curves, Ye.DASHED)] : [3, 11] : [3, 13];
                                case 4:
                                    return r.sent(),
                                    [3, 11];
                                case 5:
                                    return l.style !== Ye.DOTTED ? [3, 7] : [4, this.renderDashedDottedBorder(l.color, l.width, o, A.curves, Ye.DOTTED)];
                                case 6:
                                    return r.sent(),
                                    [3, 11];
                                case 7:
                                    return l.style !== Ye.DOUBLE ? [3, 9] : [4, this.renderDoubleBorder(l.color, l.width, o, A.curves)];
                                case 8:
                                    return r.sent(),
                                    [3, 11];
                                case 9:
                                    return [4, this.renderSolidBorder(l.color, o, A.curves)];
                                case 10:
                                    r.sent(),
                                    r.label = 11;
                                case 11:
                                    o++,
                                    r.label = 12;
                                case 12:
                                    return a++,
                                    [3, 3];
                                case 13:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.renderDashedDottedBorder = function(A, e, t, i, o) {
                        return n(this, void 0, void 0, (function() {
                            var n, a, s, l, c, u, d, B, g, f, h, p, w, m, b, Q;
                            return r(this, (function(r) {
                                return this.ctx.save(),
                                n = function(A, e) {
                                    switch (e) {
                                    case 0:
                                        return lo(A.topLeftBorderStroke, A.topRightBorderStroke);
                                    case 1:
                                        return lo(A.topRightBorderStroke, A.bottomRightBorderStroke);
                                    case 2:
                                        return lo(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                                    default:
                                        return lo(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
                                    }
                                }(i, t),
                                a = so(i, t),
                                o === Ye.DASHED && (this.path(a),
                                this.ctx.clip()),
                                ji(a[0]) ? (s = a[0].start.x,
                                l = a[0].start.y) : (s = a[0].x,
                                l = a[0].y),
                                ji(a[1]) ? (c = a[1].end.x,
                                u = a[1].end.y) : (c = a[1].x,
                                u = a[1].y),
                                d = 0 === t || 2 === t ? Math.abs(s - c) : Math.abs(l - u),
                                this.ctx.beginPath(),
                                o === Ye.DOTTED ? this.formatPath(n) : this.formatPath(a.slice(0, 2)),
                                B = e < 3 ? 3 * e : 2 * e,
                                g = e < 3 ? 2 * e : e,
                                o === Ye.DOTTED && (B = e,
                                g = e),
                                f = !0,
                                d <= 2 * B ? f = !1 : d <= 2 * B + g ? (B *= h = d / (2 * B + g),
                                g *= h) : (p = Math.floor((d + g) / (B + g)),
                                w = (d - p * B) / (p - 1),
                                g = (m = (d - (p + 1) * B) / p) <= 0 || Math.abs(g - w) < Math.abs(g - m) ? w : m),
                                f && (o === Ye.DOTTED ? this.ctx.setLineDash([0, B + g]) : this.ctx.setLineDash([B, g])),
                                o === Ye.DOTTED ? (this.ctx.lineCap = "round",
                                this.ctx.lineWidth = e) : this.ctx.lineWidth = 2 * e + 1.1,
                                this.ctx.strokeStyle = se(A),
                                this.ctx.stroke(),
                                this.ctx.setLineDash([]),
                                o === Ye.DASHED && (ji(a[0]) && (b = a[3],
                                Q = a[0],
                                this.ctx.beginPath(),
                                this.formatPath([new Xi(b.end.x,b.end.y), new Xi(Q.start.x,Q.start.y)]),
                                this.ctx.stroke()),
                                ji(a[1]) && (b = a[1],
                                Q = a[2],
                                this.ctx.beginPath(),
                                this.formatPath([new Xi(b.end.x,b.end.y), new Xi(Q.start.x,Q.start.y)]),
                                this.ctx.stroke())),
                                this.ctx.restore(),
                                [2]
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t.prototype.render = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var e;
                            return r(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return this.options.backgroundColor && (this.ctx.fillStyle = se(this.options.backgroundColor),
                                    this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                                    n = new io(A,null),
                                    r = new ro(n),
                                    oo(n, r, r, i = []),
                                    ao(n.container, i),
                                    e = r,
                                    [4, this.renderStack(e)];
                                case 1:
                                    return t.sent(),
                                    this.applyEffects([]),
                                    [2, this.canvas]
                                }
                                var n, r, i
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t
                }(Co)
                  , Uo = function(A) {
                    return A instanceof kr || A instanceof vr || A instanceof xr && A.type !== yr && A.type !== Er
                }
                  , Eo = function(A, e) {
                    switch (A) {
                    case Be.BORDER_BOX:
                        return $i(e);
                    case Be.CONTENT_BOX:
                        return function(A) {
                            return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
                        }(e);
                    case Be.PADDING_BOX:
                    default:
                        return qi(e)
                    }
                }
                  , yo = function(A) {
                    switch (A) {
                    case Mt.CENTER:
                        return "center";
                    case Mt.RIGHT:
                        return "right";
                    case Mt.LEFT:
                    default:
                        return "left"
                    }
                }
                  , Ho = function(A) {
                    function t(e, t) {
                        var n = A.call(this, e, t) || this;
                        return n.canvas = t.canvas ? t.canvas : document.createElement("canvas"),
                        n.ctx = n.canvas.getContext("2d"),
                        n.options = t,
                        n.canvas.width = Math.floor(t.width * t.scale),
                        n.canvas.height = Math.floor(t.height * t.scale),
                        n.canvas.style.width = t.width + "px",
                        n.canvas.style.height = t.height + "px",
                        n.ctx.scale(n.options.scale, n.options.scale),
                        n.ctx.translate(-t.x, -t.y),
                        n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale),
                        n
                    }
                    return e(t, A),
                    t.prototype.render = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var e, t;
                            return r(this, (function(n) {
                                switch (n.label) {
                                case 0:
                                    return e = rr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A),
                                    [4, Io(e)];
                                case 1:
                                    return t = n.sent(),
                                    this.options.backgroundColor && (this.ctx.fillStyle = se(this.options.backgroundColor),
                                    this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                                    this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                                    [2, this.canvas]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t
                }(Co)
                  , Io = function(A) {
                    return new Promise((function(e, t) {
                        var n = new Image;
                        n.onload = function() {
                            e(n)
                        }
                        ,
                        n.onerror = t,
                        n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
                    }
                    ))
                }
                  , xo = function() {
                    function A(A) {
                        var e = A.id
                          , t = A.enabled;
                        this.id = e,
                        this.enabled = t,
                        this.start = Date.now()
                    }
                    return A.prototype.debug = function() {
                        for (var A = [], e = 0; e < arguments.length; e++)
                            A[e] = arguments[e];
                        this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, i([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                    }
                    ,
                    A.prototype.getTime = function() {
                        return Date.now() - this.start
                    }
                    ,
                    A.prototype.info = function() {
                        for (var A = [], e = 0; e < arguments.length; e++)
                            A[e] = arguments[e];
                        this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, i([this.id, this.getTime() + "ms"], A))
                    }
                    ,
                    A.prototype.warn = function() {
                        for (var A = [], e = 0; e < arguments.length; e++)
                            A[e] = arguments[e];
                        this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, i([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                    }
                    ,
                    A.prototype.error = function() {
                        for (var A = [], e = 0; e < arguments.length; e++)
                            A[e] = arguments[e];
                        this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, i([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                    }
                    ,
                    A.instances = {},
                    A
                }()
                  , vo = function() {
                    function A(e, t) {
                        var n;
                        this.windowBounds = t,
                        this.instanceName = "#" + A.instanceCount++,
                        this.logger = new xo({
                            id: this.instanceName,
                            enabled: e.logging
                        }),
                        this.cache = null !== (n = e.cache) && void 0 !== n ? n : new Si(this,e)
                    }
                    return A.instanceCount = 1,
                    A
                }();
                "undefined" != typeof window && Di.setContext(window);
                var ko = function(A, e) {
                    return n(void 0, void 0, void 0, (function() {
                        var n, i, s, l, c, u, d, B, g, f, h, p, w, m, b, Q, C, F, U, E, y, H, I, x, v, k, L, K, D, S, T, R, M, O, N, P, G, _;
                        return r(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                if (!A || "object" != typeof A)
                                    return [2, Promise.reject("Invalid element provided as first argument")];
                                if (!(n = A.ownerDocument))
                                    throw new Error("Element is not attached to a Document");
                                if (!(i = n.defaultView))
                                    throw new Error("Document is not attached to a Window");
                                return s = {
                                    allowTaint: null !== (H = e.allowTaint) && void 0 !== H && H,
                                    imageTimeout: null !== (I = e.imageTimeout) && void 0 !== I ? I : 15e3,
                                    proxy: e.proxy,
                                    useCORS: null !== (x = e.useCORS) && void 0 !== x && x
                                },
                                l = t({
                                    logging: null === (v = e.logging) || void 0 === v || v,
                                    cache: e.cache
                                }, s),
                                c = {
                                    windowWidth: null !== (k = e.windowWidth) && void 0 !== k ? k : i.innerWidth,
                                    windowHeight: null !== (L = e.windowHeight) && void 0 !== L ? L : i.innerHeight,
                                    scrollX: null !== (K = e.scrollX) && void 0 !== K ? K : i.pageXOffset,
                                    scrollY: null !== (D = e.scrollY) && void 0 !== D ? D : i.pageYOffset
                                },
                                u = new o(c.scrollX,c.scrollY,c.windowWidth,c.windowHeight),
                                d = new vo(l,u),
                                B = null !== (S = e.foreignObjectRendering) && void 0 !== S && S,
                                g = {
                                    allowTaint: null !== (T = e.allowTaint) && void 0 !== T && T,
                                    onclone: e.onclone,
                                    ignoreElements: e.ignoreElements,
                                    inlineImages: B,
                                    copyStyles: B
                                },
                                d.logger.debug("Starting document clone with size " + u.width + "x" + u.height + " scrolled to " + -u.left + "," + -u.top),
                                f = new wi(d,A,g),
                                (h = f.clonedReferenceElement) ? [4, f.toIFrame(n, u)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                            case 1:
                                return p = r.sent(),
                                w = Yr(h) || "HTML" === h.tagName ? function(A) {
                                    var e = A.body
                                      , t = A.documentElement;
                                    if (!e || !t)
                                        throw new Error("Unable to get document size");
                                    var n = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth))
                                      , r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                                    return new o(0,0,n,r)
                                }(h.ownerDocument) : a(d, h),
                                m = w.width,
                                b = w.height,
                                Q = w.left,
                                C = w.top,
                                F = Lo(d, h, e.backgroundColor),
                                U = {
                                    canvas: e.canvas,
                                    backgroundColor: F,
                                    scale: null !== (M = null !== (R = e.scale) && void 0 !== R ? R : i.devicePixelRatio) && void 0 !== M ? M : 1,
                                    x: (null !== (O = e.x) && void 0 !== O ? O : 0) + Q,
                                    y: (null !== (N = e.y) && void 0 !== N ? N : 0) + C,
                                    width: null !== (P = e.width) && void 0 !== P ? P : Math.ceil(m),
                                    height: null !== (G = e.height) && void 0 !== G ? G : Math.ceil(b)
                                },
                                B ? (d.logger.debug("Document cloned, using foreign object rendering"),
                                [4, new Ho(d,U).render(h)]) : [3, 3];
                            case 2:
                                return E = r.sent(),
                                [3, 5];
                            case 3:
                                return d.logger.debug("Document cloned, element located at " + Q + "," + C + " with size " + m + "x" + b + " using computed rendering"),
                                d.logger.debug("Starting DOM parsing"),
                                y = Tr(d, h),
                                F === y.styles.backgroundColor && (y.styles.backgroundColor = pe.TRANSPARENT),
                                d.logger.debug("Starting renderer for element at " + U.x + "," + U.y + " with size " + U.width + "x" + U.height),
                                [4, new Fo(d,U).render(y)];
                            case 4:
                                E = r.sent(),
                                r.label = 5;
                            case 5:
                                return (null === (_ = e.removeContainer) || void 0 === _ || _) && (wi.destroy(p) || d.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                                d.logger.debug("Finished rendering"),
                                [2, E]
                            }
                        }
                        ))
                    }
                    ))
                }
                  , Lo = function(A, e, t) {
                    var n = e.ownerDocument
                      , r = n.documentElement ? he(A, getComputedStyle(n.documentElement).backgroundColor) : pe.TRANSPARENT
                      , i = n.body ? he(A, getComputedStyle(n.body).backgroundColor) : pe.TRANSPARENT
                      , o = "string" == typeof t ? he(A, t) : null === t ? pe.TRANSPARENT : 4294967295;
                    return e === n.documentElement ? ae(r) ? ae(i) ? o : i : r : o
                };
                return function(A, e) {
                    return void 0 === e && (e = {}),
                    ko(A, e)
                }
            }()
        },
        2592: function(A, e, t) {
            const n = t(7138)
              , r = t(5115)
              , i = t(6907)
              , o = t(3776);
            function a(A, e, t, i, o) {
                const a = [].slice.call(arguments, 1)
                  , s = a.length
                  , l = "function" == typeof a[s - 1];
                if (!l && !n())
                    throw new Error("Callback required as last argument");
                if (!l) {
                    if (s < 1)
                        throw new Error("Too few arguments provided");
                    return 1 === s ? (t = e,
                    e = i = void 0) : 2 !== s || e.getContext || (i = t,
                    t = e,
                    e = void 0),
                    new Promise((function(n, o) {
                        try {
                            const o = r.create(t, i);
                            n(A(o, e, i))
                        } catch (A) {
                            o(A)
                        }
                    }
                    ))
                }
                if (s < 2)
                    throw new Error("Too few arguments provided");
                2 === s ? (o = t,
                t = e,
                e = i = void 0) : 3 === s && (e.getContext && void 0 === o ? (o = i,
                i = void 0) : (o = i,
                i = t,
                t = e,
                e = void 0));
                try {
                    const n = r.create(t, i);
                    o(null, A(n, e, i))
                } catch (A) {
                    o(A)
                }
            }
            e.create = r.create,
            e.toCanvas = a.bind(null, i.render),
            e.toDataURL = a.bind(null, i.renderToDataURL),
            e.toString = a.bind(null, (function(A, e, t) {
                return o.render(A, t)
            }
            ))
        },
        7138: function(A) {
            A.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        1845: function(A, e, t) {
            const n = t(242).getSymbolSize;
            e.getRowColCoords = function(A) {
                if (1 === A)
                    return [];
                const e = Math.floor(A / 7) + 2
                  , t = n(A)
                  , r = 145 === t ? 26 : 2 * Math.ceil((t - 13) / (2 * e - 2))
                  , i = [t - 7];
                for (let A = 1; A < e - 1; A++)
                    i[A] = i[A - 1] - r;
                return i.push(6),
                i.reverse()
            }
            ,
            e.getPositions = function(A) {
                const t = []
                  , n = e.getRowColCoords(A)
                  , r = n.length;
                for (let A = 0; A < r; A++)
                    for (let e = 0; e < r; e++)
                        0 === A && 0 === e || 0 === A && e === r - 1 || A === r - 1 && 0 === e || t.push([n[A], n[e]]);
                return t
            }
        },
        8260: function(A, e, t) {
            const n = t(6910)
              , r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
            function i(A) {
                this.mode = n.ALPHANUMERIC,
                this.data = A
            }
            i.getBitsLength = function(A) {
                return 11 * Math.floor(A / 2) + A % 2 * 6
            }
            ,
            i.prototype.getLength = function() {
                return this.data.length
            }
            ,
            i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }
            ,
            i.prototype.write = function(A) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let t = 45 * r.indexOf(this.data[e]);
                    t += r.indexOf(this.data[e + 1]),
                    A.put(t, 11)
                }
                this.data.length % 2 && A.put(r.indexOf(this.data[e]), 6)
            }
            ,
            A.exports = i
        },
        7245: function(A) {
            function e() {
                this.buffer = [],
                this.length = 0
            }
            e.prototype = {
                get: function(A) {
                    const e = Math.floor(A / 8);
                    return 1 == (this.buffer[e] >>> 7 - A % 8 & 1)
                },
                put: function(A, e) {
                    for (let t = 0; t < e; t++)
                        this.putBit(1 == (A >>> e - t - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(A) {
                    const e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0),
                    A && (this.buffer[e] |= 128 >>> this.length % 8),
                    this.length++
                }
            },
            A.exports = e
        },
        3280: function(A) {
            function e(A) {
                if (!A || A < 1)
                    throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = A,
                this.data = new Uint8Array(A * A),
                this.reservedBit = new Uint8Array(A * A)
            }
            e.prototype.set = function(A, e, t, n) {
                const r = A * this.size + e;
                this.data[r] = t,
                n && (this.reservedBit[r] = !0)
            }
            ,
            e.prototype.get = function(A, e) {
                return this.data[A * this.size + e]
            }
            ,
            e.prototype.xor = function(A, e, t) {
                this.data[A * this.size + e] ^= t
            }
            ,
            e.prototype.isReserved = function(A, e) {
                return this.reservedBit[A * this.size + e]
            }
            ,
            A.exports = e
        },
        3424: function(A, e, t) {
            const n = t(2378)
              , r = t(6910);
            function i(A) {
                this.mode = r.BYTE,
                "string" == typeof A && (A = n(A)),
                this.data = new Uint8Array(A)
            }
            i.getBitsLength = function(A) {
                return 8 * A
            }
            ,
            i.prototype.getLength = function() {
                return this.data.length
            }
            ,
            i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }
            ,
            i.prototype.write = function(A) {
                for (let e = 0, t = this.data.length; e < t; e++)
                    A.put(this.data[e], 8)
            }
            ,
            A.exports = i
        },
        5393: function(A, e, t) {
            const n = t(4908)
              , r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
              , i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(A, e) {
                switch (e) {
                case n.L:
                    return r[4 * (A - 1) + 0];
                case n.M:
                    return r[4 * (A - 1) + 1];
                case n.Q:
                    return r[4 * (A - 1) + 2];
                case n.H:
                    return r[4 * (A - 1) + 3];
                default:
                    return
                }
            }
            ,
            e.getTotalCodewordsCount = function(A, e) {
                switch (e) {
                case n.L:
                    return i[4 * (A - 1) + 0];
                case n.M:
                    return i[4 * (A - 1) + 1];
                case n.Q:
                    return i[4 * (A - 1) + 2];
                case n.H:
                    return i[4 * (A - 1) + 3];
                default:
                    return
                }
            }
        },
        4908: function(A, e) {
            e.L = {
                bit: 1
            },
            e.M = {
                bit: 0
            },
            e.Q = {
                bit: 3
            },
            e.H = {
                bit: 2
            },
            e.isValid = function(A) {
                return A && void 0 !== A.bit && A.bit >= 0 && A.bit < 4
            }
            ,
            e.from = function(A, t) {
                if (e.isValid(A))
                    return A;
                try {
                    return function(A) {
                        if ("string" != typeof A)
                            throw new Error("Param is not a string");
                        switch (A.toLowerCase()) {
                        case "l":
                        case "low":
                            return e.L;
                        case "m":
                        case "medium":
                            return e.M;
                        case "q":
                        case "quartile":
                            return e.Q;
                        case "h":
                        case "high":
                            return e.H;
                        default:
                            throw new Error("Unknown EC Level: " + A)
                        }
                    }(A)
                } catch (A) {
                    return t
                }
            }
        },
        6526: function(A, e, t) {
            const n = t(242).getSymbolSize;
            e.getPositions = function(A) {
                const e = n(A);
                return [[0, 0], [e - 7, 0], [0, e - 7]]
            }
        },
        1642: function(A, e, t) {
            const n = t(242)
              , r = n.getBCHDigit(1335);
            e.getEncodedBits = function(A, e) {
                const t = A.bit << 3 | e;
                let i = t << 10;
                for (; n.getBCHDigit(i) - r >= 0; )
                    i ^= 1335 << n.getBCHDigit(i) - r;
                return 21522 ^ (t << 10 | i)
            }
        },
        9729: function(A, e) {
            const t = new Uint8Array(512)
              , n = new Uint8Array(256);
            !function() {
                let A = 1;
                for (let e = 0; e < 255; e++)
                    t[e] = A,
                    n[A] = e,
                    A <<= 1,
                    256 & A && (A ^= 285);
                for (let A = 255; A < 512; A++)
                    t[A] = t[A - 255]
            }(),
            e.log = function(A) {
                if (A < 1)
                    throw new Error("log(" + A + ")");
                return n[A]
            }
            ,
            e.exp = function(A) {
                return t[A]
            }
            ,
            e.mul = function(A, e) {
                return 0 === A || 0 === e ? 0 : t[n[A] + n[e]]
            }
        },
        5442: function(A, e, t) {
            const n = t(6910)
              , r = t(242);
            function i(A) {
                this.mode = n.KANJI,
                this.data = A
            }
            i.getBitsLength = function(A) {
                return 13 * A
            }
            ,
            i.prototype.getLength = function() {
                return this.data.length
            }
            ,
            i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }
            ,
            i.prototype.write = function(A) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let t = r.toSJIS(this.data[e]);
                    if (t >= 33088 && t <= 40956)
                        t -= 33088;
                    else {
                        if (!(t >= 57408 && t <= 60351))
                            throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                        t -= 49472
                    }
                    t = 192 * (t >>> 8 & 255) + (255 & t),
                    A.put(t, 13)
                }
            }
            ,
            A.exports = i
        },
        7126: function(A, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            function t(A, t, n) {
                switch (A) {
                case e.Patterns.PATTERN000:
                    return (t + n) % 2 == 0;
                case e.Patterns.PATTERN001:
                    return t % 2 == 0;
                case e.Patterns.PATTERN010:
                    return n % 3 == 0;
                case e.Patterns.PATTERN011:
                    return (t + n) % 3 == 0;
                case e.Patterns.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                case e.Patterns.PATTERN101:
                    return t * n % 2 + t * n % 3 == 0;
                case e.Patterns.PATTERN110:
                    return (t * n % 2 + t * n % 3) % 2 == 0;
                case e.Patterns.PATTERN111:
                    return (t * n % 3 + (t + n) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + A)
                }
            }
            e.isValid = function(A) {
                return null != A && "" !== A && !isNaN(A) && A >= 0 && A <= 7
            }
            ,
            e.from = function(A) {
                return e.isValid(A) ? parseInt(A, 10) : void 0
            }
            ,
            e.getPenaltyN1 = function(A) {
                const e = A.size;
                let t = 0
                  , n = 0
                  , r = 0
                  , i = null
                  , o = null;
                for (let a = 0; a < e; a++) {
                    n = r = 0,
                    i = o = null;
                    for (let s = 0; s < e; s++) {
                        let e = A.get(a, s);
                        e === i ? n++ : (n >= 5 && (t += n - 5 + 3),
                        i = e,
                        n = 1),
                        e = A.get(s, a),
                        e === o ? r++ : (r >= 5 && (t += r - 5 + 3),
                        o = e,
                        r = 1)
                    }
                    n >= 5 && (t += n - 5 + 3),
                    r >= 5 && (t += r - 5 + 3)
                }
                return t
            }
            ,
            e.getPenaltyN2 = function(A) {
                const e = A.size;
                let t = 0;
                for (let n = 0; n < e - 1; n++)
                    for (let r = 0; r < e - 1; r++) {
                        const e = A.get(n, r) + A.get(n, r + 1) + A.get(n + 1, r) + A.get(n + 1, r + 1);
                        4 !== e && 0 !== e || t++
                    }
                return 3 * t
            }
            ,
            e.getPenaltyN3 = function(A) {
                const e = A.size;
                let t = 0
                  , n = 0
                  , r = 0;
                for (let i = 0; i < e; i++) {
                    n = r = 0;
                    for (let o = 0; o < e; o++)
                        n = n << 1 & 2047 | A.get(i, o),
                        o >= 10 && (1488 === n || 93 === n) && t++,
                        r = r << 1 & 2047 | A.get(o, i),
                        o >= 10 && (1488 === r || 93 === r) && t++
                }
                return 40 * t
            }
            ,
            e.getPenaltyN4 = function(A) {
                let e = 0;
                const t = A.data.length;
                for (let n = 0; n < t; n++)
                    e += A.data[n];
                return 10 * Math.abs(Math.ceil(100 * e / t / 5) - 10)
            }
            ,
            e.applyMask = function(A, e) {
                const n = e.size;
                for (let r = 0; r < n; r++)
                    for (let i = 0; i < n; i++)
                        e.isReserved(i, r) || e.xor(i, r, t(A, i, r))
            }
            ,
            e.getBestMask = function(A, t) {
                const n = Object.keys(e.Patterns).length;
                let r = 0
                  , i = 1 / 0;
                for (let o = 0; o < n; o++) {
                    t(o),
                    e.applyMask(o, A);
                    const n = e.getPenaltyN1(A) + e.getPenaltyN2(A) + e.getPenaltyN3(A) + e.getPenaltyN4(A);
                    e.applyMask(o, A),
                    n < i && (i = n,
                    r = o)
                }
                return r
            }
        },
        6910: function(A, e, t) {
            const n = t(3114)
              , r = t(7007);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            },
            e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            },
            e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            },
            e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            },
            e.MIXED = {
                bit: -1
            },
            e.getCharCountIndicator = function(A, e) {
                if (!A.ccBits)
                    throw new Error("Invalid mode: " + A);
                if (!n.isValid(e))
                    throw new Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? A.ccBits[0] : e < 27 ? A.ccBits[1] : A.ccBits[2]
            }
            ,
            e.getBestModeForData = function(A) {
                return r.testNumeric(A) ? e.NUMERIC : r.testAlphanumeric(A) ? e.ALPHANUMERIC : r.testKanji(A) ? e.KANJI : e.BYTE
            }
            ,
            e.toString = function(A) {
                if (A && A.id)
                    return A.id;
                throw new Error("Invalid mode")
            }
            ,
            e.isValid = function(A) {
                return A && A.bit && A.ccBits
            }
            ,
            e.from = function(A, t) {
                if (e.isValid(A))
                    return A;
                try {
                    return function(A) {
                        if ("string" != typeof A)
                            throw new Error("Param is not a string");
                        switch (A.toLowerCase()) {
                        case "numeric":
                            return e.NUMERIC;
                        case "alphanumeric":
                            return e.ALPHANUMERIC;
                        case "kanji":
                            return e.KANJI;
                        case "byte":
                            return e.BYTE;
                        default:
                            throw new Error("Unknown mode: " + A)
                        }
                    }(A)
                } catch (A) {
                    return t
                }
            }
        },
        1085: function(A, e, t) {
            const n = t(6910);
            function r(A) {
                this.mode = n.NUMERIC,
                this.data = A.toString()
            }
            r.getBitsLength = function(A) {
                return 10 * Math.floor(A / 3) + (A % 3 ? A % 3 * 3 + 1 : 0)
            }
            ,
            r.prototype.getLength = function() {
                return this.data.length
            }
            ,
            r.prototype.getBitsLength = function() {
                return r.getBitsLength(this.data.length)
            }
            ,
            r.prototype.write = function(A) {
                let e, t, n;
                for (e = 0; e + 3 <= this.data.length; e += 3)
                    t = this.data.substr(e, 3),
                    n = parseInt(t, 10),
                    A.put(n, 10);
                const r = this.data.length - e;
                r > 0 && (t = this.data.substr(e),
                n = parseInt(t, 10),
                A.put(n, 3 * r + 1))
            }
            ,
            A.exports = r
        },
        6143: function(A, e, t) {
            const n = t(9729);
            e.mul = function(A, e) {
                const t = new Uint8Array(A.length + e.length - 1);
                for (let r = 0; r < A.length; r++)
                    for (let i = 0; i < e.length; i++)
                        t[r + i] ^= n.mul(A[r], e[i]);
                return t
            }
            ,
            e.mod = function(A, e) {
                let t = new Uint8Array(A);
                for (; t.length - e.length >= 0; ) {
                    const A = t[0];
                    for (let r = 0; r < e.length; r++)
                        t[r] ^= n.mul(e[r], A);
                    let r = 0;
                    for (; r < t.length && 0 === t[r]; )
                        r++;
                    t = t.slice(r)
                }
                return t
            }
            ,
            e.generateECPolynomial = function(A) {
                let t = new Uint8Array([1]);
                for (let r = 0; r < A; r++)
                    t = e.mul(t, new Uint8Array([1, n.exp(r)]));
                return t
            }
        },
        5115: function(A, e, t) {
            const n = t(242)
              , r = t(4908)
              , i = t(7245)
              , o = t(3280)
              , a = t(1845)
              , s = t(6526)
              , l = t(7126)
              , c = t(5393)
              , u = t(2882)
              , d = t(3103)
              , B = t(1642)
              , g = t(6910)
              , f = t(6130);
            function h(A, e, t) {
                const n = A.size
                  , r = B.getEncodedBits(e, t);
                let i, o;
                for (i = 0; i < 15; i++)
                    o = 1 == (r >> i & 1),
                    i < 6 ? A.set(i, 8, o, !0) : i < 8 ? A.set(i + 1, 8, o, !0) : A.set(n - 15 + i, 8, o, !0),
                    i < 8 ? A.set(8, n - i - 1, o, !0) : i < 9 ? A.set(8, 15 - i - 1 + 1, o, !0) : A.set(8, 15 - i - 1, o, !0);
                A.set(n - 8, 8, 1, !0)
            }
            function p(A, e, t, r) {
                let B;
                if (Array.isArray(A))
                    B = f.fromArray(A);
                else {
                    if ("string" != typeof A)
                        throw new Error("Invalid data");
                    {
                        let n = e;
                        if (!n) {
                            const e = f.rawSplit(A);
                            n = d.getBestVersionForData(e, t)
                        }
                        B = f.fromString(A, n || 40)
                    }
                }
                const p = d.getBestVersionForData(B, t);
                if (!p)
                    throw new Error("The amount of data is too big to be stored in a QR Code");
                if (e) {
                    if (e < p)
                        throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + p + ".\n")
                } else
                    e = p;
                const w = function(A, e, t) {
                    const r = new i;
                    t.forEach((function(e) {
                        r.put(e.mode.bit, 4),
                        r.put(e.getLength(), g.getCharCountIndicator(e.mode, A)),
                        e.write(r)
                    }
                    ));
                    const o = 8 * (n.getSymbolTotalCodewords(A) - c.getTotalCodewordsCount(A, e));
                    for (r.getLengthInBits() + 4 <= o && r.put(0, 4); r.getLengthInBits() % 8 != 0; )
                        r.putBit(0);
                    const a = (o - r.getLengthInBits()) / 8;
                    for (let A = 0; A < a; A++)
                        r.put(A % 2 ? 17 : 236, 8);
                    return function(A, e, t) {
                        const r = n.getSymbolTotalCodewords(e)
                          , i = r - c.getTotalCodewordsCount(e, t)
                          , o = c.getBlocksCount(e, t)
                          , a = o - r % o
                          , s = Math.floor(r / o)
                          , l = Math.floor(i / o)
                          , d = l + 1
                          , B = s - l
                          , g = new u(B);
                        let f = 0;
                        const h = new Array(o)
                          , p = new Array(o);
                        let w = 0;
                        const m = new Uint8Array(A.buffer);
                        for (let A = 0; A < o; A++) {
                            const e = A < a ? l : d;
                            h[A] = m.slice(f, f + e),
                            p[A] = g.encode(h[A]),
                            f += e,
                            w = Math.max(w, e)
                        }
                        const b = new Uint8Array(r);
                        let Q, C, F = 0;
                        for (Q = 0; Q < w; Q++)
                            for (C = 0; C < o; C++)
                                Q < h[C].length && (b[F++] = h[C][Q]);
                        for (Q = 0; Q < B; Q++)
                            for (C = 0; C < o; C++)
                                b[F++] = p[C][Q];
                        return b
                    }(r, A, e)
                }(e, t, B)
                  , m = n.getSymbolSize(e)
                  , b = new o(m);
                return function(A, e) {
                    const t = A.size
                      , n = s.getPositions(e);
                    for (let e = 0; e < n.length; e++) {
                        const r = n[e][0]
                          , i = n[e][1];
                        for (let e = -1; e <= 7; e++)
                            if (!(r + e <= -1 || t <= r + e))
                                for (let n = -1; n <= 7; n++)
                                    i + n <= -1 || t <= i + n || (e >= 0 && e <= 6 && (0 === n || 6 === n) || n >= 0 && n <= 6 && (0 === e || 6 === e) || e >= 2 && e <= 4 && n >= 2 && n <= 4 ? A.set(r + e, i + n, !0, !0) : A.set(r + e, i + n, !1, !0))
                    }
                }(b, e),
                function(A) {
                    const e = A.size;
                    for (let t = 8; t < e - 8; t++) {
                        const e = t % 2 == 0;
                        A.set(t, 6, e, !0),
                        A.set(6, t, e, !0)
                    }
                }(b),
                function(A, e) {
                    const t = a.getPositions(e);
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e][0]
                          , r = t[e][1];
                        for (let e = -2; e <= 2; e++)
                            for (let t = -2; t <= 2; t++)
                                -2 === e || 2 === e || -2 === t || 2 === t || 0 === e && 0 === t ? A.set(n + e, r + t, !0, !0) : A.set(n + e, r + t, !1, !0)
                    }
                }(b, e),
                h(b, t, 0),
                e >= 7 && function(A, e) {
                    const t = A.size
                      , n = d.getEncodedBits(e);
                    let r, i, o;
                    for (let e = 0; e < 18; e++)
                        r = Math.floor(e / 3),
                        i = e % 3 + t - 8 - 3,
                        o = 1 == (n >> e & 1),
                        A.set(r, i, o, !0),
                        A.set(i, r, o, !0)
                }(b, e),
                function(A, e) {
                    const t = A.size;
                    let n = -1
                      , r = t - 1
                      , i = 7
                      , o = 0;
                    for (let a = t - 1; a > 0; a -= 2)
                        for (6 === a && a--; ; ) {
                            for (let t = 0; t < 2; t++)
                                if (!A.isReserved(r, a - t)) {
                                    let n = !1;
                                    o < e.length && (n = 1 == (e[o] >>> i & 1)),
                                    A.set(r, a - t, n),
                                    i--,
                                    -1 === i && (o++,
                                    i = 7)
                                }
                            if (r += n,
                            r < 0 || t <= r) {
                                r -= n,
                                n = -n;
                                break
                            }
                        }
                }(b, w),
                isNaN(r) && (r = l.getBestMask(b, h.bind(null, b, t))),
                l.applyMask(r, b),
                h(b, t, r),
                {
                    modules: b,
                    version: e,
                    errorCorrectionLevel: t,
                    maskPattern: r,
                    segments: B
                }
            }
            e.create = function(A, e) {
                if (void 0 === A || "" === A)
                    throw new Error("No input text");
                let t, i, o = r.M;
                return void 0 !== e && (o = r.from(e.errorCorrectionLevel, r.M),
                t = d.from(e.version),
                i = l.from(e.maskPattern),
                e.toSJISFunc && n.setToSJISFunction(e.toSJISFunc)),
                p(A, t, o, i)
            }
        },
        2882: function(A, e, t) {
            const n = t(6143);
            function r(A) {
                this.genPoly = void 0,
                this.degree = A,
                this.degree && this.initialize(this.degree)
            }
            r.prototype.initialize = function(A) {
                this.degree = A,
                this.genPoly = n.generateECPolynomial(this.degree)
            }
            ,
            r.prototype.encode = function(A) {
                if (!this.genPoly)
                    throw new Error("Encoder not initialized");
                const e = new Uint8Array(A.length + this.degree);
                e.set(A);
                const t = n.mod(e, this.genPoly)
                  , r = this.degree - t.length;
                if (r > 0) {
                    const A = new Uint8Array(this.degree);
                    return A.set(t, r),
                    A
                }
                return t
            }
            ,
            A.exports = r
        },
        7007: function(A, e) {
            let t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            t = t.replace(/u/g, "\\u");
            const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + t + ")(?:.|[\r\n]))+";
            e.KANJI = new RegExp(t,"g"),
            e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),
            e.BYTE = new RegExp(n,"g"),
            e.NUMERIC = new RegExp("[0-9]+","g"),
            e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+","g");
            const r = new RegExp("^" + t + "$")
              , i = new RegExp("^[0-9]+$")
              , o = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(A) {
                return r.test(A)
            }
            ,
            e.testNumeric = function(A) {
                return i.test(A)
            }
            ,
            e.testAlphanumeric = function(A) {
                return o.test(A)
            }
        },
        6130: function(A, e, t) {
            const n = t(6910)
              , r = t(1085)
              , i = t(8260)
              , o = t(3424)
              , a = t(5442)
              , s = t(7007)
              , l = t(242)
              , c = t(5987);
            function u(A) {
                return unescape(encodeURIComponent(A)).length
            }
            function d(A, e, t) {
                const n = [];
                let r;
                for (; null !== (r = A.exec(t)); )
                    n.push({
                        data: r[0],
                        index: r.index,
                        mode: e,
                        length: r[0].length
                    });
                return n
            }
            function B(A) {
                const e = d(s.NUMERIC, n.NUMERIC, A)
                  , t = d(s.ALPHANUMERIC, n.ALPHANUMERIC, A);
                let r, i;
                return l.isKanjiModeEnabled() ? (r = d(s.BYTE, n.BYTE, A),
                i = d(s.KANJI, n.KANJI, A)) : (r = d(s.BYTE_KANJI, n.BYTE, A),
                i = []),
                e.concat(t, r, i).sort((function(A, e) {
                    return A.index - e.index
                }
                )).map((function(A) {
                    return {
                        data: A.data,
                        mode: A.mode,
                        length: A.length
                    }
                }
                ))
            }
            function g(A, e) {
                switch (e) {
                case n.NUMERIC:
                    return r.getBitsLength(A);
                case n.ALPHANUMERIC:
                    return i.getBitsLength(A);
                case n.KANJI:
                    return a.getBitsLength(A);
                case n.BYTE:
                    return o.getBitsLength(A)
                }
            }
            function f(A, e) {
                let t;
                const s = n.getBestModeForData(A);
                if (t = n.from(e, s),
                t !== n.BYTE && t.bit < s.bit)
                    throw new Error('"' + A + '" cannot be encoded with mode ' + n.toString(t) + ".\n Suggested mode is: " + n.toString(s));
                switch (t !== n.KANJI || l.isKanjiModeEnabled() || (t = n.BYTE),
                t) {
                case n.NUMERIC:
                    return new r(A);
                case n.ALPHANUMERIC:
                    return new i(A);
                case n.KANJI:
                    return new a(A);
                case n.BYTE:
                    return new o(A)
                }
            }
            e.fromArray = function(A) {
                return A.reduce((function(A, e) {
                    return "string" == typeof e ? A.push(f(e, null)) : e.data && A.push(f(e.data, e.mode)),
                    A
                }
                ), [])
            }
            ,
            e.fromString = function(A, t) {
                const r = function(A) {
                    const e = [];
                    for (let t = 0; t < A.length; t++) {
                        const r = A[t];
                        switch (r.mode) {
                        case n.NUMERIC:
                            e.push([r, {
                                data: r.data,
                                mode: n.ALPHANUMERIC,
                                length: r.length
                            }, {
                                data: r.data,
                                mode: n.BYTE,
                                length: r.length
                            }]);
                            break;
                        case n.ALPHANUMERIC:
                            e.push([r, {
                                data: r.data,
                                mode: n.BYTE,
                                length: r.length
                            }]);
                            break;
                        case n.KANJI:
                            e.push([r, {
                                data: r.data,
                                mode: n.BYTE,
                                length: u(r.data)
                            }]);
                            break;
                        case n.BYTE:
                            e.push([{
                                data: r.data,
                                mode: n.BYTE,
                                length: u(r.data)
                            }])
                        }
                    }
                    return e
                }(B(A, l.isKanjiModeEnabled()))
                  , i = function(A, e) {
                    const t = {}
                      , r = {
                        start: {}
                    };
                    let i = ["start"];
                    for (let o = 0; o < A.length; o++) {
                        const a = A[o]
                          , s = [];
                        for (let A = 0; A < a.length; A++) {
                            const l = a[A]
                              , c = "" + o + A;
                            s.push(c),
                            t[c] = {
                                node: l,
                                lastCount: 0
                            },
                            r[c] = {};
                            for (let A = 0; A < i.length; A++) {
                                const o = i[A];
                                t[o] && t[o].node.mode === l.mode ? (r[o][c] = g(t[o].lastCount + l.length, l.mode) - g(t[o].lastCount, l.mode),
                                t[o].lastCount += l.length) : (t[o] && (t[o].lastCount = l.length),
                                r[o][c] = g(l.length, l.mode) + 4 + n.getCharCountIndicator(l.mode, e))
                            }
                        }
                        i = s
                    }
                    for (let A = 0; A < i.length; A++)
                        r[i[A]].end = 0;
                    return {
                        map: r,
                        table: t
                    }
                }(r, t)
                  , o = c.find_path(i.map, "start", "end")
                  , a = [];
                for (let A = 1; A < o.length - 1; A++)
                    a.push(i.table[o[A]].node);
                return e.fromArray(a.reduce((function(A, e) {
                    const t = A.length - 1 >= 0 ? A[A.length - 1] : null;
                    return t && t.mode === e.mode ? (A[A.length - 1].data += e.data,
                    A) : (A.push(e),
                    A)
                }
                ), []))
            }
            ,
            e.rawSplit = function(A) {
                return e.fromArray(B(A, l.isKanjiModeEnabled()))
            }
        },
        242: function(A, e) {
            let t;
            const n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(A) {
                if (!A)
                    throw new Error('"version" cannot be null or undefined');
                if (A < 1 || A > 40)
                    throw new Error('"version" should be in range from 1 to 40');
                return 4 * A + 17
            }
            ,
            e.getSymbolTotalCodewords = function(A) {
                return n[A]
            }
            ,
            e.getBCHDigit = function(A) {
                let e = 0;
                for (; 0 !== A; )
                    e++,
                    A >>>= 1;
                return e
            }
            ,
            e.setToSJISFunction = function(A) {
                if ("function" != typeof A)
                    throw new Error('"toSJISFunc" is not a valid function.');
                t = A
            }
            ,
            e.isKanjiModeEnabled = function() {
                return void 0 !== t
            }
            ,
            e.toSJIS = function(A) {
                return t(A)
            }
        },
        3114: function(A, e) {
            e.isValid = function(A) {
                return !isNaN(A) && A >= 1 && A <= 40
            }
        },
        3103: function(A, e, t) {
            const n = t(242)
              , r = t(5393)
              , i = t(4908)
              , o = t(6910)
              , a = t(3114)
              , s = n.getBCHDigit(7973);
            function l(A, e) {
                return o.getCharCountIndicator(A, e) + 4
            }
            function c(A, e) {
                let t = 0;
                return A.forEach((function(A) {
                    const n = l(A.mode, e);
                    t += n + A.getBitsLength()
                }
                )),
                t
            }
            e.from = function(A, e) {
                return a.isValid(A) ? parseInt(A, 10) : e
            }
            ,
            e.getCapacity = function(A, e, t) {
                if (!a.isValid(A))
                    throw new Error("Invalid QR Code version");
                void 0 === t && (t = o.BYTE);
                const i = 8 * (n.getSymbolTotalCodewords(A) - r.getTotalCodewordsCount(A, e));
                if (t === o.MIXED)
                    return i;
                const s = i - l(t, A);
                switch (t) {
                case o.NUMERIC:
                    return Math.floor(s / 10 * 3);
                case o.ALPHANUMERIC:
                    return Math.floor(s / 11 * 2);
                case o.KANJI:
                    return Math.floor(s / 13);
                case o.BYTE:
                default:
                    return Math.floor(s / 8)
                }
            }
            ,
            e.getBestVersionForData = function(A, t) {
                let n;
                const r = i.from(t, i.M);
                if (Array.isArray(A)) {
                    if (A.length > 1)
                        return function(A, t) {
                            for (let n = 1; n <= 40; n++)
                                if (c(A, n) <= e.getCapacity(n, t, o.MIXED))
                                    return n
                        }(A, r);
                    if (0 === A.length)
                        return 1;
                    n = A[0]
                } else
                    n = A;
                return function(A, t, n) {
                    for (let r = 1; r <= 40; r++)
                        if (t <= e.getCapacity(r, n, A))
                            return r
                }(n.mode, n.getLength(), r)
            }
            ,
            e.getEncodedBits = function(A) {
                if (!a.isValid(A) || A < 7)
                    throw new Error("Invalid QR Code version");
                let e = A << 12;
                for (; n.getBCHDigit(e) - s >= 0; )
                    e ^= 7973 << n.getBCHDigit(e) - s;
                return A << 12 | e
            }
        },
        6907: function(A, e, t) {
            const n = t(9653);
            e.render = function(A, e, t) {
                let r = t
                  , i = e;
                void 0 !== r || e && e.getContext || (r = e,
                e = void 0),
                e || (i = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (A) {
                        throw new Error("You need to specify a canvas element")
                    }
                }()),
                r = n.getOptions(r);
                const o = n.getImageWidth(A.modules.size, r)
                  , a = i.getContext("2d")
                  , s = a.createImageData(o, o);
                return n.qrToImageData(s.data, A, r),
                function(A, e, t) {
                    A.clearRect(0, 0, e.width, e.height),
                    e.style || (e.style = {}),
                    e.height = t,
                    e.width = t,
                    e.style.height = t + "px",
                    e.style.width = t + "px"
                }(a, i, o),
                a.putImageData(s, 0, 0),
                i
            }
            ,
            e.renderToDataURL = function(A, t, n) {
                let r = n;
                void 0 !== r || t && t.getContext || (r = t,
                t = void 0),
                r || (r = {});
                const i = e.render(A, t, r)
                  , o = r.type || "image/png"
                  , a = r.rendererOpts || {};
                return i.toDataURL(o, a.quality)
            }
        },
        3776: function(A, e, t) {
            const n = t(9653);
            function r(A, e) {
                const t = A.a / 255
                  , n = e + '="' + A.hex + '"';
                return t < 1 ? n + " " + e + '-opacity="' + t.toFixed(2).slice(1) + '"' : n
            }
            function i(A, e, t) {
                let n = A + e;
                return void 0 !== t && (n += " " + t),
                n
            }
            e.render = function(A, e, t) {
                const o = n.getOptions(e)
                  , a = A.modules.size
                  , s = A.modules.data
                  , l = a + 2 * o.margin
                  , c = o.color.light.a ? "<path " + r(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : ""
                  , u = "<path " + r(o.color.dark, "stroke") + ' d="' + function(A, e, t) {
                    let n = ""
                      , r = 0
                      , o = !1
                      , a = 0;
                    for (let s = 0; s < A.length; s++) {
                        const l = Math.floor(s % e)
                          , c = Math.floor(s / e);
                        l || o || (o = !0),
                        A[s] ? (a++,
                        s > 0 && l > 0 && A[s - 1] || (n += o ? i("M", l + t, .5 + c + t) : i("m", r, 0),
                        r = 0,
                        o = !1),
                        l + 1 < e && A[s + 1] || (n += i("h", a),
                        a = 0)) : r++
                    }
                    return n
                }(s, a, o.margin) + '"/>'
                  , d = 'viewBox="0 0 ' + l + " " + l + '"'
                  , B = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + c + u + "</svg>\n";
                return "function" == typeof t && t(null, B),
                B
            }
        },
        9653: function(A, e) {
            function t(A) {
                if ("number" == typeof A && (A = A.toString()),
                "string" != typeof A)
                    throw new Error("Color should be defined as hex string");
                let e = A.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8)
                    throw new Error("Invalid hex color: " + A);
                3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(A) {
                    return [A, A]
                }
                )))),
                6 === e.length && e.push("F", "F");
                const t = parseInt(e.join(""), 16);
                return {
                    r: t >> 24 & 255,
                    g: t >> 16 & 255,
                    b: t >> 8 & 255,
                    a: 255 & t,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(A) {
                A || (A = {}),
                A.color || (A.color = {});
                const e = void 0 === A.margin || null === A.margin || A.margin < 0 ? 4 : A.margin
                  , n = A.width && A.width >= 21 ? A.width : void 0
                  , r = A.scale || 4;
                return {
                    width: n,
                    scale: n ? 4 : r,
                    margin: e,
                    color: {
                        dark: t(A.color.dark || "#000000ff"),
                        light: t(A.color.light || "#ffffffff")
                    },
                    type: A.type,
                    rendererOpts: A.rendererOpts || {}
                }
            }
            ,
            e.getScale = function(A, e) {
                return e.width && e.width >= A + 2 * e.margin ? e.width / (A + 2 * e.margin) : e.scale
            }
            ,
            e.getImageWidth = function(A, t) {
                const n = e.getScale(A, t);
                return Math.floor((A + 2 * t.margin) * n)
            }
            ,
            e.qrToImageData = function(A, t, n) {
                const r = t.modules.size
                  , i = t.modules.data
                  , o = e.getScale(r, n)
                  , a = Math.floor((r + 2 * n.margin) * o)
                  , s = n.margin * o
                  , l = [n.color.light, n.color.dark];
                for (let e = 0; e < a; e++)
                    for (let t = 0; t < a; t++) {
                        let c = 4 * (e * a + t)
                          , u = n.color.light;
                        e >= s && t >= s && e < a - s && t < a - s && (u = l[i[Math.floor((e - s) / o) * r + Math.floor((t - s) / o)] ? 1 : 0]),
                        A[c++] = u.r,
                        A[c++] = u.g,
                        A[c++] = u.b,
                        A[c] = u.a
                    }
            }
        },
        3379: function(A, e, t) {
            "use strict";
            var n, r = function() {
                var A = {};
                return function(e) {
                    if (void 0 === A[e]) {
                        var t = document.querySelector(e);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                            try {
                                t = t.contentDocument.head
                            } catch (A) {
                                t = null
                            }
                        A[e] = t
                    }
                    return A[e]
                }
            }(), i = [];
            function o(A) {
                for (var e = -1, t = 0; t < i.length; t++)
                    if (i[t].identifier === A) {
                        e = t;
                        break
                    }
                return e
            }
            function a(A, e) {
                for (var t = {}, n = [], r = 0; r < A.length; r++) {
                    var a = A[r]
                      , s = e.base ? a[0] + e.base : a[0]
                      , l = t[s] || 0
                      , c = "".concat(s, " ").concat(l);
                    t[s] = l + 1;
                    var u = o(c)
                      , d = {
                        css: a[1],
                        media: a[2],
                        sourceMap: a[3]
                    };
                    -1 !== u ? (i[u].references++,
                    i[u].updater(d)) : i.push({
                        identifier: c,
                        updater: f(d, e),
                        references: 1
                    }),
                    n.push(c)
                }
                return n
            }
            function s(A) {
                var e = document.createElement("style")
                  , n = A.attributes || {};
                if (void 0 === n.nonce) {
                    var i = t.nc;
                    i && (n.nonce = i)
                }
                if (Object.keys(n).forEach((function(A) {
                    e.setAttribute(A, n[A])
                }
                )),
                "function" == typeof A.insert)
                    A.insert(e);
                else {
                    var o = r(A.insert || "head");
                    if (!o)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    o.appendChild(e)
                }
                return e
            }
            var l, c = (l = [],
            function(A, e) {
                return l[A] = e,
                l.filter(Boolean).join("\n")
            }
            );
            function u(A, e, t, n) {
                var r = t ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
                if (A.styleSheet)
                    A.styleSheet.cssText = c(e, r);
                else {
                    var i = document.createTextNode(r)
                      , o = A.childNodes;
                    o[e] && A.removeChild(o[e]),
                    o.length ? A.insertBefore(i, o[e]) : A.appendChild(i)
                }
            }
            function d(A, e, t) {
                var n = t.css
                  , r = t.media
                  , i = t.sourceMap;
                if (r ? A.setAttribute("media", r) : A.removeAttribute("media"),
                i && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                A.styleSheet)
                    A.styleSheet.cssText = n;
                else {
                    for (; A.firstChild; )
                        A.removeChild(A.firstChild);
                    A.appendChild(document.createTextNode(n))
                }
            }
            var B = null
              , g = 0;
            function f(A, e) {
                var t, n, r;
                if (e.singleton) {
                    var i = g++;
                    t = B || (B = s(e)),
                    n = u.bind(null, t, i, !1),
                    r = u.bind(null, t, i, !0)
                } else
                    t = s(e),
                    n = d.bind(null, t, e),
                    r = function() {
                        !function(A) {
                            if (null === A.parentNode)
                                return !1;
                            A.parentNode.removeChild(A)
                        }(t)
                    }
                    ;
                return n(A),
                function(e) {
                    if (e) {
                        if (e.css === A.css && e.media === A.media && e.sourceMap === A.sourceMap)
                            return;
                        n(A = e)
                    } else
                        r()
                }
            }
            A.exports = function(A, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === n && (n = Boolean(window && document && document.all && !window.atob)),
                n));
                var t = a(A = A || [], e);
                return function(A) {
                    if (A = A || [],
                    "[object Array]" === Object.prototype.toString.call(A)) {
                        for (var n = 0; n < t.length; n++) {
                            var r = o(t[n]);
                            i[r].references--
                        }
                        for (var s = a(A, e), l = 0; l < t.length; l++) {
                            var c = o(t[l]);
                            0 === i[c].references && (i[c].updater(),
                            i.splice(c, 1))
                        }
                        t = s
                    }
                }
            }
        },
        5933: function(A) {
            A.exports = {
                init: function() {
                    $.fn.api.settings.api = {
                        like_comment: "/api/activity/{activity_id}/comment/{comment_id}/like?cf=1",
                        delete_comment: "/api/activity/{activity_id}/comment/{comment_id}",
                        load_activity_comments: "/api/activity/{activity_id}/comment?page={page}&per_page=" + window.App.page.per + "&format=html"
                    }
                }
            }
        },
        7487: function(A, e, t) {
            var n = {};
            n.Show = t(9337).Z,
            A.exports = n
        },
        5731: function(A, e, t) {
            "use strict";
            var n = t(4431)
              , r = t.n(n);
            const i = $("#activity-pay-amount-container")
              , o = i.find(".pay-amount-options")
              , a = 400001
              , s = 400002
              , l = {
                $fieldBox: i.find(".fields-box"),
                $signUpButton: $("#readyForSignupButton"),
                $bracketData: $("#activity-pay-amount-container .fields-box .field .data"),
                $ticketInfo: $(".ticket-info"),
                $ticketBoxTemplate: $(".ticket-box.template"),
                $couponCode: $("#coupon_code"),
                $couponCodeTip: $("#coupon_code_tip"),
                $couponCodeTipClose: $("#coupon_code_tip_close"),
                $couponCodeTipCheck: $("#coupon_code_tip_check"),
                $couponCodeTipContainer: $("#coupon_code_tip_container"),
                $isBracketSelectedInput: $('#activity-pay-amount-container input[name="is-bracket-selected"]'),
                totalQuantity: 0,
                hasMultiBracketField: o.data("hasMultiBracket"),
                isMultiBracketEnabled: o.data("enableMultiBracket"),
                pageBracketData: new Map,
                bindBuyTicket() {
                    l.$couponCode.length && l.$couponCode.on("input", (function() {
                        g()
                    }
                    )),
                    this.$bracketData.each(((A,e)=>{
                        const t = function(A) {
                            const e = {
                                id: A.attr("id"),
                                bracket_id: A.data("bracket-id"),
                                disabled: A.hasClass("disabled"),
                                price: A.data("price"),
                                desc: A.data("desc"),
                                limit: Number(A.data("limit")),
                                stock: Number(A.data("stock")),
                                remark: A.data("remark"),
                                isFeatured: Boolean(A.data("isFeatured")),
                                singlePurchaseLimit: Number(A.data("singlePurchaseLimit")),
                                remainingTips: "数量充足",
                                remainingStock: 0,
                                purchaseQuantity: 0,
                                classes: "",
                                clicked: !1,
                                $ticketBox: null,
                                errCode: 0,
                                errMsg: "",
                                incrPurchaseQuantity() {
                                    return this.errCode = 0,
                                    this.errMsg = "",
                                    0 === this.stock ? (this.errCode = a,
                                    this) : 0 === this.limit ? this.singlePurchaseLimit > 0 && this.purchaseQuantity >= this.singlePurchaseLimit ? (this.errCode = s,
                                    this.errMsg = `该档位最多可以购买 ${this.singlePurchaseLimit} 张`,
                                    this) : (this.purchaseQuantity++,
                                    l.totalQuantity++,
                                    this) : this.purchaseQuantity >= this.stock ? (this.errCode = a,
                                    this) : this.singlePurchaseLimit > 0 && this.purchaseQuantity >= this.singlePurchaseLimit ? (this.errCode = s,
                                    this.errMsg = `该档位最多可以购买 ${this.singlePurchaseLimit} 张`,
                                    this) : (this.purchaseQuantity++,
                                    this.remainingStock = this.stock - this.purchaseQuantity,
                                    l.totalQuantity++,
                                    this)
                                },
                                decrPurchaseQuantity() {
                                    return this.purchaseQuantity <= 0 ? (this.errCode = 1,
                                    this.errMsg = "",
                                    this) : (this.errCode = 0,
                                    this.purchaseQuantity--,
                                    this.remainingStock = this.stock - this.purchaseQuantity,
                                    l.totalQuantity--,
                                    this)
                                }
                            };
                            return isNaN(e.stock) || (e.stock = Number(e.stock),
                            0 === e.stock ? (e.remainingTips = "已售罄",
                            e.classes += " stock-warning disabled") : e.stock > 0 && e.stock <= 10 && (e.remainingTips = `剩 ${e.stock} 张`,
                            e.classes += " stock-warning")),
                            e.isFeatured && (e.classes += " is-featured"),
                            e
                        }($(e));
                        this.pageBracketData.set(t.id, t);
                        const n = function(A) {
                            const e = l.$ticketBoxTemplate.clone(!0);
                            return e.data("id", A.id),
                            e.find(".ticket-box-detail").text(A.desc),
                            e.find(".ticket-box-remark").text(A.remark),
                            e.find(".right-price").text(A.price),
                            e.find(".left-tips").text(A.remainingTips),
                            e.find(".quantity").text(0),
                            e.find(".right-price").text(A.price),
                            e.addClass(A.classes),
                            e.removeClass("template").show(),
                            e
                        }(t);
                        t.$ticketBox = n,
                        function(A) {
                            A.on("click", ".minus", (A=>{
                                const e = $(A.target).parents(".ticket-box").data("id")
                                  , t = l.pageBracketData.get(e);
                                t.decrPurchaseQuantity(),
                                t.errCode || (l.totalQuantity < 1 && l.$isBracketSelectedInput.prop("checked", !1),
                                c(),
                                u(),
                                d())
                            }
                            )),
                            A.on("click", ".plus", (function() {
                                const A = $(this).parents(".ticket-box").data("id")
                                  , e = l.pageBracketData.get(A);
                                var t;
                                e.incrPurchaseQuantity(),
                                t = A,
                                l.hasMultiBracketField || (l.pageBracketData.forEach(((A,e)=>{
                                    e !== t && (A.purchaseQuantity = 0),
                                    A.remainingStock = A.stock - A.purchaseQuantity
                                }
                                )),
                                l.totalQuantity = 1),
                                l.hasMultiBracketField && !l.isMultiBracketEnabled && l.pageBracketData.forEach(((A,e)=>{
                                    e !== t && (A.purchaseQuantity = 0),
                                    A.remainingStock = A.stock - A.purchaseQuantity
                                }
                                )),
                                e.errCode ? e.errMsg && window.UI.flash().failed(e.errMsg) : (l.$isBracketSelectedInput.prop("checked", !0),
                                c(),
                                u(),
                                d())
                            }
                            ))
                        }(n),
                        this.$fieldBox.find(".ticket-box-wrapper").append(n)
                    }
                    ))
                }
            };
            function c() {
                var A;
                l.pageBracketData.forEach(((A,e)=>{
                    A.$ticketBox.find(".quantity").text(A.purchaseQuantity),
                    A.purchaseQuantity && !A.$ticketBox.hasClass("active") && A.$ticketBox.addClass("active"),
                    !A.purchaseQuantity && A.$ticketBox.hasClass("active") && A.$ticketBox.removeClass("active"),
                    A.limit > 0 && A.remainingStock > 0 && A.remainingStock <= 10 && (A.$ticketBox.addClass("stock-warning"),
                    A.$ticketBox.find(".left-tips").text(`剩 ${A.remainingStock} 张`)),
                    A.limit > 0 && A.purchaseQuantity && 0 === A.remainingStock && (A.$ticketBox.addClass("stock-warning"),
                    A.$ticketBox.find(".left-tips").text("已售罄")),
                    i.find("#" + e + " .quantity").val(A.purchaseQuantity)
                }
                )),
                l.$couponCode.length && (A = g,
                500,
                function(e) {
                    let t = this
                      , n = e;
                    clearTimeout(A.id),
                    A.id = setTimeout((function() {
                        A.call(t, n)
                    }
                    ), 500)
                }
                )()
            }
            function u(A) {
                let e = new (r())(0);
                A = A || 0,
                l.pageBracketData.forEach((A=>{
                    e = e.plus(r()(A.price).times(A.purchaseQuantity))
                }
                )),
                e -= A,
                $(".total-price-wrapper").find(".total-price").text(e.toFixed(2))
            }
            function d() {
                l.totalQuantity > 0 && !l.$ticketInfo.is(":visible") && l.$ticketInfo.show(),
                l.totalQuantity < 1 && l.$ticketInfo.is(":visible") && l.$ticketInfo.hide();
                let A = [];
                l.pageBracketData.forEach((e=>{
                    if (e.purchaseQuantity > 0) {
                        let t = l.$ticketInfo.find(".template").clone();
                        t.find(".price").text(e.price),
                        t.find(".quantity").text(e.purchaseQuantity),
                        t.find(".ticket-info-detail").text(e.desc),
                        t.removeClass().show(),
                        A.push(t)
                    }
                }
                )),
                l.$ticketInfo.find("ul").html(A)
            }
            const B = $(".discount-tips-wrapper")
              , g = function() {
                B.hide();
                const A = [];
                l.pageBracketData.forEach((function(e, t) {
                    e.purchaseQuantity && A.push({
                        bracket_id: e.bracket_id,
                        quantity: e.purchaseQuantity
                    })
                }
                ));
                const e = {
                    brackets: A
                }
                  , t = l.$couponCode.val()
                  , n = `/api/activity/${$("#activityId").val()}/coupon/${t}`;
                return t.length ? t.length > 8 ? (f("error", "请输入8位优惠码"),
                u(),
                !1) : ("NaN" === parseFloat(t).toString() && f("error", "请输入数字"),
                A.length ? (h(),
                void $.post(n, e).done((function(A) {
                    if ("success" === A.status) {
                        const e = `<span style="color: #999;">优惠金额  ¥ <span><span class="coupon-discount-amount" style="font-size: 1rem;"> ${A.data.discount_amount}`;
                        f(A.status, e),
                        u(A.data.discount_amount),
                        B.find(".discount-tips  .discount-amount").text(A.data.discount_amount),
                        B.find(".discount-tips .current-price").text(A.data.money),
                        B.find(".discount-tips .original-price").text(A.data.total_money),
                        B.show()
                    } else
                        f(A.status, A.message)
                }
                ))) : (f("error", "请选择票档"),
                u(),
                !1)) : (h(),
                u(),
                !1)
            };
            function f(A, e) {
                const t = "success" === A ? "#04BE02" : "#e74731";
                l.$couponCode.css("border-color", t),
                l.$couponCodeTip.css("color", t).html(e).show(),
                l.$couponCodeTipContainer.show()
            }
            function h() {
                l.$couponCode.css("border-color", ""),
                l.$couponCodeTipContainer.hide(),
                l.$couponCodeTipCheck.hide(),
                l.$couponCodeTipClose.hide()
            }
            e.Z = l
        },
        9337: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _payment_bracket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5731);
            let BigNumber = __webpack_require__(4431);
            var MAX_COUNT = 600
              , MAX_PARAGRAPH = 10
              , SCREEN_WIDTH = 520
              , DO_PAY = "do_pay";
            function detectmob() {
                return !iPad() && App.browser.isMobile
            }
            function iPad() {
                return !!navigator.userAgent.match(/iPad/i)
            }
            var SearchParams = new URLSearchParams(location.search);
            function isScrollEnd(A) {
                return A.scrollHeight - A.scrollTop >= A.offsetHeight
            }
            function debounce(A, e, t) {
                var n;
                return function() {
                    var r = this
                      , i = arguments
                      , o = function() {
                        n = null,
                        t || A.apply(r, i)
                    }
                      , a = t && !n;
                    clearTimeout(n),
                    n = setTimeout(o, e),
                    a && A.apply(r, i)
                }
            }
            function insertParam(A, e) {
                const t = new URLSearchParams(location.search);
                t.append(A, e),
                history.replaceState("", "", location.pathname + "?" + t.toString() + location.hash)
            }
            function removeParam(A) {
                const e = new URLSearchParams(location.search);
                e.delete(A),
                history.replaceState("", "", location.pathname + "?" + e.toString() + location.hash)
            }
            const Show = {
                init() {
                    if (this.$formContainer = $("#formContainer"),
                    this.$readyForSignupButton = $("#readyForSignupButton"),
                    this.$closeFormContainer = $("#closeFormContainer"),
                    this.$detailControlButton = $("#detailControlButton"),
                    this.$formBox = $("#formBox"),
                    this.$cover = $(".image-header-cover"),
                    this.$submit_button_container = $(".submit_button_container"),
                    this.$signupContainer = $("#signupContainer"),
                    this.$topButton = $("#topButton"),
                    this.$textWrap = $("#lingxiTextWrap"),
                    this.$detailControl = $("#detailControl"),
                    this.$wrapper = $("#wrapper"),
                    this.$previewWrap = $("#previewWrap"),
                    this.$signupLoader = $("#signupLoader"),
                    this.$footer = $(".footer"),
                    this.$logo = $(".lingxi-logo"),
                    this.$brace = $("#brace"),
                    this.$activityPayAmountContainer = $("#activity-pay-amount-container"),
                    this.$payAmountDesc = this.$activityPayAmountContainer.find(".pay_amount_desc"),
                    this.$payConfirmBox = $("#payConfirmBox"),
                    this.$closeProtocolButton = $("#closeProtocol"),
                    this.$openProtocolButton = $("#openProtocol"),
                    this.$protocolContent = $("#protocolContent"),
                    this.loading = !1,
                    this.isFormShow = !1,
                    this.signupResponse,
                    this.bind(),
                    this.autoPopup(),
                    detectmob() && window.innerWidth < SCREEN_WIDTH ? (App.browser.isIOS && (iPad() && (this.showForm(),
                    this.$closeFormContainer.addClass("lx-hidden"),
                    this.fixStyleOnIPad()),
                    this.moveButtonOutForm()),
                    window.innerWidth > SCREEN_WIDTH && this.changeSubmitButtonPositon("fixed"),
                    $("#button_submit_donate").addClass("mobile"),
                    this.$readyForSignupButton.removeClass("lx-hidden"),
                    this.disableBodyScroll(),
                    this.checkFootPosition()) : (this.showForm(),
                    this.$closeFormContainer.addClass("lx-hidden"),
                    this.$brace.addClass("lx-hidden"),
                    this.$wrapper.addClass("no-scroll"),
                    $("body").addClass("no-scroll")),
                    this.isEmbed()) {
                        var A = SearchParams.get("embedHeight");
                        A && $("body").height(A),
                        this.postSizeData(),
                        this.bindResizeToWrapper(),
                        this.setURLTargetBlank()
                    }
                    return this.shouldShowPayWindow() && this.showPayStatusWindow(),
                    this.fixUploaderTouchArea(),
                    this
                },
                postSizeData() {
                    var A = {
                        target: "lingxi_activity",
                        event: "size",
                        data: {
                            wrapperWidth: this.$wrapper.width(),
                            wrapperHeight: this.$wrapper[0].scrollHeight
                        }
                    };
                    window.parent.postMessage(A, "*")
                },
                bindResizeToWrapper() {
                    var A = this;
                    return setInterval((function() {
                        A.postSizeData()
                    }
                    ), 100),
                    this
                },
                setURLTargetBlank() {
                    setTimeout((function() {
                        $("#detailControl a").attr("target", "_blank")
                    }
                    ), 0)
                },
                checkFootPosition() {
                    var A = window.innerHeight - 45 - this.$logo.height()
                      , e = this.$logo.offset().top;
                    e > A || this.$footer.css("padding-top", A - e - 5)
                },
                checkoutPreText: (A,e)=>A.substring(0, MAX_COUNT - e).trim() + "...",
                fixStyleOnIPad() {
                    window.innerWidth > SCREEN_WIDTH && this.$readyForSignupButton.addClass("fixed")
                },
                isEmbed: ()=>"1" === SearchParams.get("embed"),
                checkExpend() {
                    for (var A = [], e = this.$textWrap.find("p"), t = 0; t < A.length; t += 1)
                        "" !== e[t].innerText.trim() && A.push(e[t]);
                    if (this.$textWrap[0] && this.$textWrap[0].innerText.length > MAX_COUNT || A.length > MAX_PARAGRAPH) {
                        var n = 0
                          , r = 0;
                        if (A.length < 1)
                            return void $("#previewWrap").text(this.checkoutPreText(this.$textWrap[0].innerText, 0));
                        for (var i = 0; i < A.length; i += 1) {
                            var o = $(A[i]).clone();
                            if (n + o[0].innerText.length > MAX_COUNT) {
                                o.text(o[0].innerText.substring(0, MAX_COUNT - n).trim() + "..."),
                                o.append($("#detailControlButton")),
                                $("#previewWrap").append(o),
                                $("#previewWrap").removeClass("lx-hidden");
                                break
                            }
                            if (r + 1 > MAX_PARAGRAPH) {
                                o.text(o[0].innerText.trim() + "..."),
                                o.append($("#detailControlButton")),
                                $("#previewWrap").append(o),
                                $("#previewWrap").removeClass("lx-hidden");
                                break
                            }
                            n += o[0].innerText.length,
                            r += 1,
                            $("#previewWrap").append(o)
                        }
                    } else
                        $("#lingxiTextWrap").removeClass("lx-hidden"),
                        $("#previewWrap").addClass("lx-hidden"),
                        $("#detailControlButton").addClass("lx-hidden")
                },
                autoPopup() {
                    ("1" === SearchParams.get("show_signup_form") || this.$formContainer.hasClass("auto-popup")) && this.showForm()
                },
                bind() {
                    return this.bindShowForm().bindHideForm().bindExpend().bindScroll().bindScrollTop().bindProtocol().bindPayEvent(),
                    Boolean(Number($("#nextPageSignups").attr("value"))) && this.bindScrollSignUpContainer(),
                    detectmob() && (App.browser.isAndroid && this.bindWindowResize(),
                    this.bindDocumentTouchMove()),
                    _payment_bracket__WEBPACK_IMPORTED_MODULE_0__.Z.bindBuyTicket(),
                    this
                },
                bindProtocol() {
                    var A = this;
                    return this.$openProtocolButton.bind("click", (function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        A.$protocolContent.removeClass("lx-hidden")
                    }
                    )),
                    this.$closeProtocolButton.bind("click", (function() {
                        A.$protocolContent.addClass("lx-hidden")
                    }
                    )),
                    this
                },
                bindScroll() {
                    var A, e = this;
                    return this.$wrapper.on("scroll", (function(t) {
                        e.$wrapper.removeClass("hide-scroll-bar"),
                        A && clearTimeout(A),
                        A = setTimeout((function() {
                            e.$wrapper.addClass("hide-scroll-bar")
                        }
                        ), 1e3),
                        t.target.scrollTop > 200 ? e.showToTopButton(!0) : e.showToTopButton(!1)
                    }
                    )),
                    this
                },
                bindDocumentTouchMove() {},
                bindScrollTop() {
                    var A = this;
                    return this.$topButton.on("click", (function() {
                        A.toTop()
                    }
                    )),
                    this
                },
                bindShowForm() {
                    var A = this;
                    return this.$readyForSignupButton.hasClass("submit-disabled") && A.isFormShow && this.$readyForSignupButton.addClass("disabled"),
                    this.$readyForSignupButton.on("click", (function() {
                        if (!A.$readyForSignupButton.hasClass("disabled")) {
                            if (A.urlParam(window.location.href, "show_signup_form"))
                                return A.isFormShow ? void A.doSubmitFromAction() : A.showForm();
                            window.location.href = A.UrlUpdateParams(window.location.href, "show_signup_form", "1")
                        }
                    }
                    )),
                    this
                },
                urlParam(A, e) {
                    var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(A);
                    return t && t[1] || 0
                },
                UrlUpdateParams(url, name, value) {
                    var r = url;
                    if (null != r && "undefined" != r && "" != r) {
                        value = encodeURIComponent(value);
                        var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)")
                          , tmp = name + "=" + value;
                        r = null != url.match(reg) ? url.replace(eval(reg), tmp) : url.match("[?]") ? url + "&" + tmp : url + "?" + tmp
                    }
                    return r
                },
                doSubmitFromAction() {
                    this.$readyForSignupButton.hasClass("disabled") || $("#button_submit_donate").click()
                },
                showSubmitButtonLoading() {
                    this.$readyForSignupButton.addClass("loading disabled")
                },
                clearSubmitButtonClass() {
                    $("#button_submit_donate").removeClass("disabled"),
                    this.$readyForSignupButton.removeClass("loading disabled")
                },
                bindHideForm() {
                    var A = this;
                    return this.$closeFormContainer.on("click", (function() {
                        A.hiddenForm()
                    }
                    )),
                    this.$cover.on("click", (function(e) {
                        e.preventDefault(),
                        A.hiddenForm()
                    }
                    )),
                    this
                },
                bindExpend() {
                    var A;
                    return $("#detailControlButton").on("click", (A = !1,
                    function() {
                        A ? ($(this).text("点击展开"),
                        $("#previewWrap").removeClass("lx-hidden"),
                        $("#lingxiTextWrap").addClass("lx-hidden"),
                        $("#previewWrap").append($(this))) : ($(this).text("点击收起"),
                        $("#previewWrap").addClass("lx-hidden"),
                        $("#lingxiTextWrap").removeClass("lx-hidden"),
                        $("#lingxiTextWrap").find("p").last().append($(this))),
                        A = !A
                    }
                    )),
                    this
                },
                showToTopButton(A) {
                    A ? this.$topButton.removeClass("lx-hidden") : this.$topButton.addClass("lx-hidden")
                },
                showForm() {
                    this.$formBox.css("width", "100%"),
                    this.$formBox.removeClass("lx-hidden"),
                    this.$formContainer.removeClass("lx-hidden"),
                    detectmob() || this.$readyForSignupButton.addClass("lx-hidden"),
                    this.disableWraperScroll(),
                    this.isFormShow = !0,
                    this.$readyForSignupButton.hasClass("submit-disabled") && this.$readyForSignupButton.addClass("disabled"),
                    this.setupTicketCardHeight(),
                    $("#zhibo_float_window_container").length && $("#zhibo_float_window_container").hide()
                },
                hiddenForm() {
                    this.$formBox.css("width", ""),
                    this.$formBox.addClass("lx-hidden"),
                    this.$formContainer.addClass("lx-hidden"),
                    this.$readyForSignupButton.removeClass("lx-hidden"),
                    this.$readyForSignupButton.hasClass("submit-disabled") && this.$readyForSignupButton.removeClass("disabled"),
                    this.enableWraperScroll(),
                    this.isFormShow = !1,
                    $("#zhibo_float_window_container").length && $("#zhibo_float_window_container").show()
                },
                disableWraperScroll(A) {
                    detectmob() && (window.innerWidth < SCREEN_WIDTH && $("#wrapper").css("overflow", "hidden"),
                    $("#wrapper").removeClass("scrollable"))
                },
                enableWraperScroll(A) {
                    $("#wrapper").css("overflow", "auto"),
                    $("#wrapper").addClass("scrollable")
                },
                disableBodyScroll() {
                    $("html").addClass("no-touch-scroll"),
                    $("body").addClass("no-touch-scroll"),
                    $(document).on("touchmove", (function(A) {
                        A.preventDefault()
                    }
                    ));
                    var A = !1;
                    $("body").on("touchstart", ".scrollable", (function(e) {
                        A || (A = !0,
                        0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1),
                        A = !1)
                    }
                    )),
                    $("body").on("touchmove", ".scrollable", (function(A) {
                        A.stopPropagation()
                    }
                    ))
                },
                changeSubmitButtonPositon(A) {
                    this.$readyForSignupButton.css("position", A)
                },
                moveButtonToForm() {
                    this.$formContainer.find("form").append(this.$readyForSignupButton)
                },
                moveButtonOutForm() {
                    $(document.body).after(this.$readyForSignupButton)
                },
                bindScrollSignUpContainer() {
                    var A = this;
                    return this.$signupContainer.on("scroll", debounce((function(e) {
                        e.target.scrollLeft + e.target.offsetWidth >= e.target.scrollWidth - 40 && A.loadSignups()
                    }
                    ), 500, !1)),
                    this
                },
                loadSignups() {
                    if (!this.loading && (!this.signupResponse || this.signupResponse.next_page_url)) {
                        var A = this;
                        this.$signupLoader.removeClass("lx-hidden"),
                        this.loading = !0,
                        A.$signupContainer[0].scrollLeft = A.$signupContainer[0].scrollWidth;
                        try {
                            $.get("/api/activity/" + $("#activityId").attr("value") + "/signups", {
                                page: A.signupResponse ? A.signupResponse.current_page + 1 : 2,
                                per_page: App.browser.isDesktop ? 20 : 10
                            }, (function(e) {
                                A.$signupLoader.addClass("lx-hidden"),
                                A.$signupContainer.append(A.genSignUpTemplate(e.data)),
                                A.$signupContainer.append(A.$signupLoader),
                                A.signupResponse = e,
                                setTimeout((function() {
                                    A.loading = !1
                                }
                                ), 50)
                            }
                            ))
                        } catch (e) {
                            A.loading = !1,
                            A.$signupLoader.addClass("lx-hidden"),
                            console.error(e)
                        }
                    }
                },
                genSignUpTemplate(A) {
                    for (var e = ['<div class="signups">', '<img src="{{headimgurl}}">', '<div class="signups-name">{{nickname}}</div>', "</div>"].join(""), t = ['<div class="signups">', '<div class="no-avator" style="background-color: {{color}};">', "<span>", "{{text}}", "</span>", "</div>", '<div class="signups-name">', "{{nickname}}", "</div>", "</div>"].join(""), n = [], r = 0; r < A.length; r += 1) {
                        var i;
                        i = "string" == typeof A[r].user.headimgurl ? (i = e.replace("{{headimgurl}}", A[r].user.headimgurl)).replace("{{nickname}}", A[r].user.nickname) : (i = (i = t.replace("{{text}}", A[r].user.headimgurl.text)).replace("{{color}}", A[r].user.headimgurl.color)).replace("{{nickname}}", A[r].user.nickname),
                        n.push(i)
                    }
                    return n.join("")
                },
                bindWindowResize() {
                    var A = this
                      , e = window.innerHeight;
                    $(window).on("resize", (function(t) {
                        A.isFormShow && (e < window.innerHeight ? (A.changeSubmitButtonPositon("fixed"),
                        A.moveButtonOutForm()) : (A.changeSubmitButtonPositon("relative"),
                        A.moveButtonToForm()),
                        e = window.innerHeight)
                    }
                    ))
                },
                toTop() {
                    this.$wrapper[0].scrollTop = 0
                },
                setupTicketCardHeight() {
                    setTimeout((function() {
                        $(".ticket-row").each((function() {
                            for (var A = 0, e = $(this).find(".ticket-box-top"), t = 0; t < e.length; t += 1)
                                A = Math.max(A, e[t].offsetHeight);
                            e.each((function() {
                                $(this).css({
                                    height: A
                                })
                            }
                            ))
                        }
                        ))
                    }
                    ), 0)
                },
                activePayAmount(A) {
                    var e = this;
                    return this.$payAmountDesc.children().each((function(t, n) {
                        t !== A ? $(n).addClass("lx-hidden") : ($(n).removeClass("lx-hidden"),
                        $(n).text().trim() ? e.$payAmountDesc.removeClass("lx-hidden") : e.$payAmountDesc.addClass("lx-hidden"))
                    }
                    )),
                    this
                },
                bindPayEvent() {
                    var A = this;
                    return A.$payConfirmBox.find("button.success").on("click", (function(e) {
                        A.paySuccess()
                    }
                    )),
                    A.$payConfirmBox.find("button.failed").on("click", (function(e) {
                        A.payFailed()
                    }
                    )),
                    this
                },
                isPayAction() {
                    return this.$readyForSignupButton.hasClass("not-free")
                },
                shouldShowPayWindow: ()=>"1" === SearchParams.get(DO_PAY),
                addPayParameters() {
                    insertParam(DO_PAY, 1)
                },
                removePayParameters() {
                    removeParam(DO_PAY)
                },
                showPayStatusWindow() {
                    alert(this.$payConfirmBox)
                    this.$payConfirmBox.removeClass("lx-hidden")
                },
                hidePayStatusWindow() {
                    this.$payConfirmBox.addClass("lx-hidden"),
                    this.removePayParameters()
                },
                paySuccess() {
                    this.hidePayStatusWindow(),
                    this.clearSubmitButtonClass()
                },
                payFailed() {
                    this.hidePayStatusWindow(),
                    this.clearSubmitButtonClass()
                },
                fixUploaderTouchArea() {
                    setTimeout((function() {
                        if (detectmob())
                            for (var A = $(".picker"), e = 0; e < A.length; e += 1)
                                $(A[e].children[1]).css({
                                    width: "220px"
                                })
                    }
                    ), 500)
                }
            };
            window.appShow = Show,
            __webpack_exports__.Z = Show
        },
        2889: function(A, e, t) {
            "use strict";
            t.r(e);
            var n = t(3379)
              , r = t.n(n)
              , i = t(8729);
            r()(i.Z, {
                insert: "head",
                singleton: !1
            }),
            e.default = i.Z.locals || {}
        }
    }
      , __webpack_module_cache__ = {};
    function __webpack_require__(A) {
        var e = __webpack_module_cache__[A];
        if (void 0 !== e)
            return e.exports;
        var t = __webpack_module_cache__[A] = {
            id: A,
            exports: {}
        };
        return __webpack_modules__[A].call(t.exports, t, t.exports, __webpack_require__),
        t.exports
    }
    __webpack_require__.n = function(A) {
        var e = A && A.__esModule ? function() {
            return A.default
        }
        : function() {
            return A
        }
        ;
        return __webpack_require__.d(e, {
            a: e
        }),
        e
    }
    ,
    __webpack_require__.d = function(A, e) {
        for (var t in e)
            __webpack_require__.o(e, t) && !__webpack_require__.o(A, t) && Object.defineProperty(A, t, {
                enumerable: !0,
                get: e[t]
            })
    }
    ,
    __webpack_require__.o = function(A, e) {
        return Object.prototype.hasOwnProperty.call(A, e)
    }
    ,
    __webpack_require__.r = function(A) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(A, "__esModule", {
            value: !0
        })
    }
    ;
    var __webpack_exports__ = {};
    !function() {
        "use strict";
        var A = __webpack_require__(5933)
          , e = __webpack_require__.n(A)
          , t = __webpack_require__(7487)
          , n = __webpack_require__.n(t)
          , r = __webpack_require__(1120)
          , i = __webpack_require__.n(r)
          , o = __webpack_require__(2592)
          , a = {
            show() {
                const A = document.getElementById("sign-up-qr-code-img");
                if (A) {
                    const e = A.dataset.signInCode;
                    this.generateQRCodeDataURI(e).then((e=>{
                        e.err ? console.error("generate qr code failed, ", err) : (A.src = e.url,
                        console.log("generatge qr code succeed/."))
                    }
                    )),
                    this.bindLongPressToSave(card, cardWrapper)
                }
            },
            bindLongPressToSave(A, e) {
                (App.browser.isWechat || App.browser.isMobile) && function(A) {
                    return document.createElement("canvas"),
                    i()(A, {})
                }(A).then((t=>{
                    const n = function(A) {
                        const e = A.getContext("2d", {
                            alpha: !1
                        });
                        e.mozImageSmoothingEnabled = !1,
                        e.webkitImageSmoothingEnabled = !1,
                        e.msImageSmoothingEnabled = !1,
                        e.imageSmoothingEnabled = !1;
                        const t = document.createElement("img");
                        return t.src = A.toDataURL("image/jpeg"),
                        t
                    }(t);
                    n.style.display = "block",
                    n.style.width = "100%";
                    const r = document.createElement("div");
                    r.className = "lingxi-card",
                    r.appendChild(n),
                    e.replaceChild(n, A)
                }
                ))
            },
            generateQRCodeDataURI: A=>new Promise((e=>{
                o.toDataURL(A, {
                    errorCorrectionLevel: "M",
                    type: "image/png",
                    rendererOpts: {
                        quality: 1
                    },
                    quality: 1,
                    margin: 1,
                    color: {
                        dark: "#000",
                        light: "#fff"
                    }
                }, ((A,t)=>{
                    e({
                        err: A,
                        url: t
                    })
                }
                ))
            }
            ))
        };
        __webpack_require__(2889),
        App.Page = {
            Activity: n(),
            SignUp: a
        },
        $((function() {
            e().init()
        }
        ))
    }()
}
)();
