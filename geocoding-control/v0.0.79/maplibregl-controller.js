function ci() {
}
function zs(n) {
  return n();
}
function rs() {
  return /* @__PURE__ */ Object.create(null);
}
function ro(n) {
  n.forEach(zs);
}
function Us(n) {
  return typeof n == "function";
}
function Ga(n, t) {
  return n != n ? t == t : n !== t || n && typeof n == "object" || typeof n == "function";
}
function Va(n) {
  return Object.keys(n).length === 0;
}
function ka(n, t) {
  n.appendChild(t);
}
function za(n, t, e) {
  n.insertBefore(t, e || null);
}
function qs(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ns(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function pr(n, t, e) {
  e == null ? n.removeAttribute(t) : n.getAttribute(t) !== e && n.setAttribute(t, e);
}
function Ua(n) {
  return Array.from(n.childNodes);
}
function Ai(n, t, e) {
  n.classList[e ? "add" : "remove"](t);
}
let Go;
function ui(n) {
  Go = n;
}
const Pn = [], is = [];
let Rn = [];
const os = [], qa = /* @__PURE__ */ Promise.resolve();
let Co = !1;
function Xa() {
  Co || (Co = !0, qa.then(Xs));
}
function No(n) {
  Rn.push(n);
}
const yo = /* @__PURE__ */ new Set();
let wn = 0;
function Xs() {
  if (wn !== 0)
    return;
  const n = Go;
  do {
    try {
      for (; wn < Pn.length; ) {
        const t = Pn[wn];
        wn++, ui(t), Ya(t.$$);
      }
    } catch (t) {
      throw Pn.length = 0, wn = 0, t;
    }
    for (ui(null), Pn.length = 0, wn = 0; is.length; )
      is.pop()();
    for (let t = 0; t < Rn.length; t += 1) {
      const e = Rn[t];
      yo.has(e) || (yo.add(e), e());
    }
    Rn.length = 0;
  } while (Pn.length);
  for (; os.length; )
    os.pop()();
  Co = !1, yo.clear(), ui(n);
}
function Ya(n) {
  if (n.fragment !== null) {
    n.update(), ro(n.before_update);
    const t = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, t), n.after_update.forEach(No);
  }
}
function Ha(n) {
  const t = [], e = [];
  Rn.forEach((r) => n.indexOf(r) === -1 ? t.push(r) : e.push(r)), e.forEach((r) => r()), Rn = t;
}
const Wa = /* @__PURE__ */ new Set();
function ja(n, t) {
  n && n.i && (Wa.delete(n), n.i(t));
}
function Ka(n, t, e, r) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(t, e), r || No(() => {
    const s = n.$$.on_mount.map(zs).filter(Us);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : ro(s), n.$$.on_mount = [];
  }), o.forEach(No);
}
function Qa(n, t) {
  const e = n.$$;
  e.fragment !== null && (Ha(e.after_update), ro(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Ja(n, t) {
  n.$$.dirty[0] === -1 && (Pn.push(n), Xa(), n.$$.dirty.fill(0)), n.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Za(n, t, e, r, i, o, s, a = [-1]) {
  const u = Go;
  ui(n);
  const l = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: ci,
    not_equal: i,
    bound: rs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: rs(),
    dirty: a,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  s && s(l.root);
  let c = !1;
  if (l.ctx = e ? e(n, t.props || {}, (f, h, ...p) => {
    const g = p.length ? p[0] : h;
    return l.ctx && i(l.ctx[f], l.ctx[f] = g) && (!l.skip_bound && l.bound[f] && l.bound[f](g), c && Ja(n, f)), h;
  }) : [], l.update(), c = !0, ro(l.before_update), l.fragment = r ? r(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Ua(t.target);
      l.fragment && l.fragment.l(f), f.forEach(qs);
    } else
      l.fragment && l.fragment.c();
    t.intro && ja(n.$$.fragment), Ka(n, t.target, t.anchor, t.customElement), Xs();
  }
  ui(u);
}
class $a {
  $destroy() {
    Qa(this, 1), this.$destroy = ci;
  }
  $on(t, e) {
    if (!Us(e))
      return ci;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(e), () => {
      const i = r.indexOf(e);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !Va(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function tu(n) {
  let t, e, r;
  return {
    c() {
      t = ns("svg"), e = ns("path"), pr(e, "stroke-width", "4"), pr(e, "fill-rule", "evenodd"), pr(e, "clip-rule", "evenodd"), pr(e, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), pr(e, "class", "svelte-1k1cmht"), pr(t, "width", r = /*displayIn*/
      n[0] !== "list" ? void 0 : "20"), pr(t, "viewBox", "0 0 70 85"), pr(t, "fill", "none"), pr(t, "class", "svelte-1k1cmht"), Ai(
        t,
        "in-map",
        /*displayIn*/
        n[0] !== "list"
      ), Ai(
        t,
        "list-icon",
        /*displayIn*/
        n[0] === "list"
      );
    },
    m(i, o) {
      za(i, t, o), ka(t, e);
    },
    p(i, [o]) {
      o & /*displayIn*/
      1 && r !== (r = /*displayIn*/
      i[0] !== "list" ? void 0 : "20") && pr(t, "width", r), o & /*displayIn*/
      1 && Ai(
        t,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), o & /*displayIn*/
      1 && Ai(
        t,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    i: ci,
    o: ci,
    d(i) {
      i && qs(t);
    }
  };
}
function eu(n, t, e) {
  let { displayIn: r } = t;
  return n.$$set = (i) => {
    "displayIn" in i && e(0, r = i.displayIn);
  }, [r];
}
class ru extends $a {
  constructor(t) {
    super(), Za(this, t, eu, tu, Ga, { displayIn: 0 });
  }
}
/**
 * splaytree v3.1.1
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function nu(n, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
          return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              e = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              e.label = l[1];
              break;
            }
            if (l[0] === 6 && e.label < o[1]) {
              e.label = o[1], o = l;
              break;
            }
            if (o && e.label < o[2]) {
              e.label = o[2], e.ops.push(l);
              break;
            }
            o[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        l = t.call(n, e);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        r = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Kr = (
  /** @class */
  function() {
    function n(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return n;
  }()
);
function iu(n, t) {
  return n > t ? 1 : n < t ? -1 : 0;
}
function Yr(n, t, e) {
  for (var r = new Kr(null, null), i = r, o = r; ; ) {
    var s = e(n, t.key);
    if (s < 0) {
      if (t.left === null)
        break;
      if (e(n, t.left.key) < 0) {
        var a = t.left;
        if (t.left = a.right, a.right = t, t = a, t.left === null)
          break;
      }
      o.left = t, o = t, t = t.left;
    } else if (s > 0) {
      if (t.right === null)
        break;
      if (e(n, t.right.key) > 0) {
        var a = t.right;
        if (t.right = a.left, a.left = t, t = a, t.right === null)
          break;
      }
      i.right = t, i = t, t = t.right;
    } else
      break;
  }
  return i.right = t.left, o.left = t.right, t.left = r.right, t.right = r.left, t;
}
function mo(n, t, e, r) {
  var i = new Kr(n, t);
  if (e === null)
    return i.left = i.right = null, i;
  e = Yr(n, e, r);
  var o = r(n, e.key);
  return o < 0 ? (i.left = e.left, i.right = e, e.left = null) : o >= 0 && (i.right = e.right, i.left = e, e.right = null), i;
}
function ss(n, t, e) {
  var r = null, i = null;
  if (t) {
    t = Yr(n, t, e);
    var o = e(t.key, n);
    o === 0 ? (r = t.left, i = t.right) : o < 0 ? (i = t.right, t.right = null, r = t) : (r = t.left, t.left = null, i = t);
  }
  return { left: r, right: i };
}
function ou(n, t, e) {
  return t === null ? n : (n === null || (t = Yr(n.key, t, e), t.left = n), t);
}
function xo(n, t, e, r, i) {
  if (n) {
    r("" + t + (e ? "└── " : "├── ") + i(n) + `
`);
    var o = t + (e ? "    " : "│   ");
    n.left && xo(n.left, o, !1, r, i), n.right && xo(n.right, o, !0, r, i);
  }
}
var Vo = (
  /** @class */
  function() {
    function n(t) {
      t === void 0 && (t = iu), this._root = null, this._size = 0, this._comparator = t;
    }
    return n.prototype.insert = function(t, e) {
      return this._size++, this._root = mo(t, e, this._root, this._comparator);
    }, n.prototype.add = function(t, e) {
      var r = new Kr(t, e);
      this._root === null && (r.left = r.right = null, this._size++, this._root = r);
      var i = this._comparator, o = Yr(t, this._root, i), s = i(t, o.key);
      return s === 0 ? this._root = o : (s < 0 ? (r.left = o.left, r.right = o, o.left = null) : s > 0 && (r.right = o.right, r.left = o, o.right = null), this._size++, this._root = r), this._root;
    }, n.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, n.prototype._remove = function(t, e, r) {
      var i;
      if (e === null)
        return null;
      e = Yr(t, e, r);
      var o = r(t, e.key);
      return o === 0 ? (e.left === null ? i = e.right : (i = Yr(t, e.left, r), i.right = e.right), this._size--, i) : e;
    }, n.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = Yr(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, n.prototype.findStatic = function(t) {
      for (var e = this._root, r = this._comparator; e; ) {
        var i = r(t, e.key);
        if (i === 0)
          return e;
        i < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, n.prototype.find = function(t) {
      return this._root && (this._root = Yr(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, n.prototype.contains = function(t) {
      for (var e = this._root, r = this._comparator; e; ) {
        var i = r(t, e.key);
        if (i === 0)
          return !0;
        i < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, n.prototype.forEach = function(t, e) {
      for (var r = this._root, i = [], o = !1; !o; )
        r !== null ? (i.push(r), r = r.left) : i.length !== 0 ? (r = i.pop(), t.call(e, r), r = r.right) : o = !0;
      return this;
    }, n.prototype.range = function(t, e, r, i) {
      for (var o = [], s = this._comparator, a = this._root, u; o.length !== 0 || a; )
        if (a)
          o.push(a), a = a.left;
        else {
          if (a = o.pop(), u = s(a.key, e), u > 0)
            break;
          if (s(a.key, t) >= 0 && r.call(i, a))
            return this;
          a = a.right;
        }
      return this;
    }, n.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var r = e.key;
        return t.push(r);
      }), t;
    }, n.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var r = e.data;
        return t.push(r);
      }), t;
    }, n.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, n.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, n.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, n.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, n.prototype.at = function(t) {
      for (var e = this._root, r = !1, i = 0, o = []; !r; )
        if (e)
          o.push(e), e = e.left;
        else if (o.length > 0) {
          if (e = o.pop(), i === t)
            return e;
          i++, e = e.right;
        } else
          r = !0;
      return null;
    }, n.prototype.next = function(t) {
      var e = this._root, r = null;
      if (t.right) {
        for (r = t.right; r.left; )
          r = r.left;
        return r;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? (r = e, e = e.left) : e = e.right;
      }
      return r;
    }, n.prototype.prev = function(t) {
      var e = this._root, r = null;
      if (t.left !== null) {
        for (r = t.left; r.right; )
          r = r.right;
        return r;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? e = e.left : (r = e, e = e.right);
      }
      return r;
    }, n.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, n.prototype.toList = function() {
      return au(this._root);
    }, n.prototype.load = function(t, e, r) {
      e === void 0 && (e = []), r === void 0 && (r = !1);
      var i = t.length, o = this._comparator;
      if (r && wo(t, e, 0, i - 1, o), this._root === null)
        this._root = So(t, e, 0, i), this._size = i;
      else {
        var s = uu(this.toList(), su(t, e), o);
        i = this._size + i, this._root = Lo({ head: s }, 0, i);
      }
      return this;
    }, n.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(n.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.toString = function(t) {
      t === void 0 && (t = function(r) {
        return String(r.key);
      });
      var e = [];
      return xo(this._root, "", !0, function(r) {
        return e.push(r);
      }, t), e.join("");
    }, n.prototype.update = function(t, e, r) {
      var i = this._comparator, o = ss(t, this._root, i), s = o.left, a = o.right;
      i(t, e) < 0 ? a = mo(e, r, a, i) : s = mo(e, r, s, i), this._root = ou(s, a, i);
    }, n.prototype.split = function(t) {
      return ss(t, this._root, this._comparator);
    }, n.prototype[Symbol.iterator] = function() {
      var t;
      return nu(this, function(e) {
        switch (e.label) {
          case 0:
            t = this.minNode(), e.label = 1;
          case 1:
            return t ? [4, t] : [3, 3];
          case 2:
            return e.sent(), t = this.next(t), [3, 1];
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    }, n;
  }()
);
function So(n, t, e, r) {
  var i = r - e;
  if (i > 0) {
    var o = e + Math.floor(i / 2), s = n[o], a = t[o], u = new Kr(s, a);
    return u.left = So(n, t, e, o), u.right = So(n, t, o + 1, r), u;
  }
  return null;
}
function su(n, t) {
  for (var e = new Kr(null, null), r = e, i = 0; i < n.length; i++)
    r = r.next = new Kr(n[i], t[i]);
  return r.next = null, e.next;
}
function au(n) {
  for (var t = n, e = [], r = !1, i = new Kr(null, null), o = i; !r; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = o = o.next = e.pop(), t = t.right) : r = !0;
  return o.next = null, i.next;
}
function Lo(n, t, e) {
  var r = e - t;
  if (r > 0) {
    var i = t + Math.floor(r / 2), o = Lo(n, t, i), s = n.head;
    return s.left = o, n.head = n.head.next, s.right = Lo(n, i + 1, e), s;
  }
  return null;
}
function uu(n, t, e) {
  for (var r = new Kr(null, null), i = r, o = n, s = t; o !== null && s !== null; )
    e(o.key, s.key) < 0 ? (i.next = o, o = o.next) : (i.next = s, s = s.next), i = i.next;
  return o !== null ? i.next = o : s !== null && (i.next = s), r.next;
}
function wo(n, t, e, r, i) {
  if (!(e >= r)) {
    for (var o = n[e + r >> 1], s = e - 1, a = r + 1; ; ) {
      do
        s++;
      while (i(n[s], o) < 0);
      do
        a--;
      while (i(n[a], o) > 0);
      if (s >= a)
        break;
      var u = n[s];
      n[s] = n[a], n[a] = u, u = t[s], t[s] = t[a], t[a] = u;
    }
    wo(n, t, e, a, i), wo(n, t, a + 1, r, i);
  }
}
function Qe(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function as(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function ae(n, t, e) {
  return t && as(n.prototype, t), e && as(n, e), n;
}
var ii = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Po = function(t, e) {
  if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y)
    return null;
  var r = t.ll.x < e.ll.x ? e.ll.x : t.ll.x, i = t.ur.x < e.ur.x ? t.ur.x : e.ur.x, o = t.ll.y < e.ll.y ? e.ll.y : t.ll.y, s = t.ur.y < e.ur.y ? t.ur.y : e.ur.y;
  return {
    ll: {
      x: r,
      y: o
    },
    ur: {
      x: i,
      y: s
    }
  };
}, Hr = Number.EPSILON;
Hr === void 0 && (Hr = Math.pow(2, -52));
var lu = Hr * Hr, bo = function(t, e) {
  if (-Hr < t && t < Hr && -Hr < e && e < Hr)
    return 0;
  var r = t - e;
  return r * r < lu * t * e ? 0 : t < e ? -1 : 1;
}, cu = /* @__PURE__ */ function() {
  function n() {
    Qe(this, n), this.reset();
  }
  return ae(n, [{
    key: "reset",
    value: function() {
      this.xRounder = new us(), this.yRounder = new us();
    }
  }, {
    key: "round",
    value: function(e, r) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(r)
      };
    }
  }]), n;
}(), us = /* @__PURE__ */ function() {
  function n() {
    Qe(this, n), this.tree = new Vo(), this.round(0);
  }
  return ae(n, [{
    key: "round",
    value: function(e) {
      var r = this.tree.add(e), i = this.tree.prev(r);
      if (i !== null && bo(r.key, i.key) === 0)
        return this.tree.remove(e), i.key;
      var o = this.tree.next(r);
      return o !== null && bo(r.key, o.key) === 0 ? (this.tree.remove(e), o.key) : e;
    }
  }]), n;
}(), fi = new cu(), li = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, Ys = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, ls = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  }, s = li(i, o);
  return bo(s, 0);
}, qi = function(t) {
  return Math.sqrt(Ys(t, t));
}, fu = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  };
  return li(o, i) / qi(o) / qi(i);
}, hu = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  };
  return Ys(o, i) / qi(o) / qi(i);
}, cs = function(t, e, r) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (r - t.y),
    y: r
  };
}, fs = function(t, e, r) {
  return e.x === 0 ? null : {
    x: r,
    y: t.y + e.y / e.x * (r - t.x)
  };
}, pu = function(t, e, r, i) {
  if (e.x === 0)
    return fs(r, i, t.x);
  if (i.x === 0)
    return fs(t, e, r.x);
  if (e.y === 0)
    return cs(r, i, t.y);
  if (i.y === 0)
    return cs(t, e, r.y);
  var o = li(e, i);
  if (o == 0)
    return null;
  var s = {
    x: r.x - t.x,
    y: r.y - t.y
  }, a = li(s, e) / o, u = li(s, i) / o, l = t.x + u * e.x, c = r.x + a * i.x, f = t.y + u * e.y, h = r.y + a * i.y, p = (l + c) / 2, g = (f + h) / 2;
  return {
    x: p,
    y: g
  };
}, yr = /* @__PURE__ */ function() {
  ae(n, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, r) {
      var i = n.comparePoints(e.point, r.point);
      return i !== 0 ? i : (e.point !== r.point && e.link(r), e.isLeft !== r.isLeft ? e.isLeft ? 1 : -1 : Xi.compare(e.segment, r.segment));
    }
    // for ordering points in sweep line order
  }, {
    key: "comparePoints",
    value: function(e, r) {
      return e.x < r.x ? -1 : e.x > r.x ? 1 : e.y < r.y ? -1 : e.y > r.y ? 1 : 0;
    }
    // Warning: 'point' input will be modified and re-used (for performance)
  }]);
  function n(t, e) {
    Qe(this, n), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return ae(n, [{
    key: "link",
    value: function(e) {
      if (e.point === this.point)
        throw new Error("Tried to link already linked events");
      for (var r = e.point.events, i = 0, o = r.length; i < o; i++) {
        var s = r[i];
        this.point.events.push(s), s.point = this.point;
      }
      this.checkForConsuming();
    }
    /* Do a pass over our linked events and check to see if any pair
     * of segments match, and should be consumed. */
  }, {
    key: "checkForConsuming",
    value: function() {
      for (var e = this.point.events.length, r = 0; r < e; r++) {
        var i = this.point.events[r];
        if (i.segment.consumedBy === void 0)
          for (var o = r + 1; o < e; o++) {
            var s = this.point.events[o];
            s.consumedBy === void 0 && i.otherSE.point.events === s.otherSE.point.events && i.segment.consume(s.segment);
          }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function() {
      for (var e = [], r = 0, i = this.point.events.length; r < i; r++) {
        var o = this.point.events[r];
        o !== this && !o.segment.ringOut && o.segment.isInResult() && e.push(o);
      }
      return e;
    }
    /**
     * Returns a comparator function for sorting linked events that will
     * favor the event that will give us the smallest left-side angle.
     * All ring construction starts as low as possible heading to the right,
     * so by always turning left as sharp as possible we'll get polygons
     * without uncessary loops & holes.
     *
     * The comparator function has a compute cache such that it avoids
     * re-computing already-computed values.
     */
  }, {
    key: "getLeftmostComparator",
    value: function(e) {
      var r = this, i = /* @__PURE__ */ new Map(), o = function(a) {
        var u = a.otherSE;
        i.set(a, {
          sine: fu(r.point, e.point, u.point),
          cosine: hu(r.point, e.point, u.point)
        });
      };
      return function(s, a) {
        i.has(s) || o(s), i.has(a) || o(a);
        var u = i.get(s), l = u.sine, c = u.cosine, f = i.get(a), h = f.sine, p = f.cosine;
        return l >= 0 && h >= 0 ? c < p ? 1 : c > p ? -1 : 0 : l < 0 && h < 0 ? c < p ? -1 : c > p ? 1 : 0 : h < l ? -1 : h > l ? 1 : 0;
      };
    }
  }]), n;
}(), gu = 0, Xi = /* @__PURE__ */ function() {
  ae(n, null, [{
    key: "compare",
    /* This compare() function is for ordering segments in the sweep
     * line tree, and does so according to the following criteria:
     *
     * Consider the vertical line that lies an infinestimal step to the
     * right of the right-more of the two left endpoints of the input
     * segments. Imagine slowly moving a point up from negative infinity
     * in the increasing y direction. Which of the two segments will that
     * point intersect first? That segment comes 'before' the other one.
     *
     * If neither segment would be intersected by such a line, (if one
     * or more of the segments are vertical) then the line to be considered
     * is directly on the right-more of the two left inputs.
     */
    value: function(e, r) {
      var i = e.leftSE.point.x, o = r.leftSE.point.x, s = e.rightSE.point.x, a = r.rightSE.point.x;
      if (a < i)
        return 1;
      if (s < o)
        return -1;
      var u = e.leftSE.point.y, l = r.leftSE.point.y, c = e.rightSE.point.y, f = r.rightSE.point.y;
      if (i < o) {
        if (l < u && l < c)
          return 1;
        if (l > u && l > c)
          return -1;
        var h = e.comparePoint(r.leftSE.point);
        if (h < 0)
          return 1;
        if (h > 0)
          return -1;
        var p = r.comparePoint(e.rightSE.point);
        return p !== 0 ? p : -1;
      }
      if (i > o) {
        if (u < l && u < f)
          return -1;
        if (u > l && u > f)
          return 1;
        var g = r.comparePoint(e.leftSE.point);
        if (g !== 0)
          return g;
        var y = e.comparePoint(r.rightSE.point);
        return y < 0 ? 1 : y > 0 ? -1 : 1;
      }
      if (u < l)
        return -1;
      if (u > l)
        return 1;
      if (s < a) {
        var m = r.comparePoint(e.rightSE.point);
        if (m !== 0)
          return m;
      }
      if (s > a) {
        var _ = e.comparePoint(r.rightSE.point);
        if (_ < 0)
          return 1;
        if (_ > 0)
          return -1;
      }
      if (s !== a) {
        var I = c - u, C = s - i, x = f - l, b = a - o;
        if (I > C && x < b)
          return 1;
        if (I < C && x > b)
          return -1;
      }
      return s > a ? 1 : s < a || c < f ? -1 : c > f ? 1 : e.id < r.id ? -1 : e.id > r.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function n(t, e, r, i) {
    Qe(this, n), this.id = ++gu, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = r, this.windings = i;
  }
  return ae(n, [{
    key: "replaceRightSE",
    /* When a segment is split, the rightSE is replaced with a new sweep event */
    value: function(e) {
      this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
  }, {
    key: "bbox",
    value: function() {
      var e = this.leftSE.point.y, r = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: e < r ? e : r
        },
        ur: {
          x: this.rightSE.point.x,
          y: e > r ? e : r
        }
      };
    }
    /* A vector from the left point to the right */
  }, {
    key: "vector",
    value: function() {
      return {
        x: this.rightSE.point.x - this.leftSE.point.x,
        y: this.rightSE.point.y - this.leftSE.point.y
      };
    }
  }, {
    key: "isAnEndpoint",
    value: function(e) {
      return e.x === this.leftSE.point.x && e.y === this.leftSE.point.y || e.x === this.rightSE.point.x && e.y === this.rightSE.point.y;
    }
    /* Compare this segment with a point.
     *
     * A point P is considered to be colinear to a segment if there
     * exists a distance D such that if we travel along the segment
     * from one * endpoint towards the other a distance D, we find
     * ourselves at point P.
     *
     * Return value indicates:
     *
     *   1: point lies above the segment (to the left of vertical)
     *   0: point is colinear to segment
     *  -1: point lies below the segment (to the right of vertical)
     */
  }, {
    key: "comparePoint",
    value: function(e) {
      if (this.isAnEndpoint(e))
        return 0;
      var r = this.leftSE.point, i = this.rightSE.point, o = this.vector();
      if (r.x === i.x)
        return e.x === r.x ? 0 : e.x < r.x ? 1 : -1;
      var s = (e.y - r.y) / o.y, a = r.x + s * o.x;
      if (e.x === a)
        return 0;
      var u = (e.x - r.x) / o.x, l = r.y + u * o.y;
      return e.y === l ? 0 : e.y < l ? -1 : 1;
    }
    /**
     * Given another segment, returns the first non-trivial intersection
     * between the two segments (in terms of sweep line ordering), if it exists.
     *
     * A 'non-trivial' intersection is one that will cause one or both of the
     * segments to be split(). As such, 'trivial' vs. 'non-trivial' intersection:
     *
     *   * endpoint of segA with endpoint of segB --> trivial
     *   * endpoint of segA with point along segB --> non-trivial
     *   * endpoint of segB with point along segA --> non-trivial
     *   * point along segA with point along segB --> non-trivial
     *
     * If no non-trivial intersection exists, return null
     * Else, return null.
     */
  }, {
    key: "getIntersection",
    value: function(e) {
      var r = this.bbox(), i = e.bbox(), o = Po(r, i);
      if (o === null)
        return null;
      var s = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = ii(r, u) && this.comparePoint(u) === 0, f = ii(i, s) && e.comparePoint(s) === 0, h = ii(r, l) && this.comparePoint(l) === 0, p = ii(i, a) && e.comparePoint(a) === 0;
      if (f && c)
        return p && !h ? a : !p && h ? l : null;
      if (f)
        return h && s.x === l.x && s.y === l.y ? null : s;
      if (c)
        return p && a.x === u.x && a.y === u.y ? null : u;
      if (p && h)
        return null;
      if (p)
        return a;
      if (h)
        return l;
      var g = pu(s, this.vector(), u, e.vector());
      return g === null || !ii(o, g) ? null : fi.round(g.x, g.y);
    }
    /**
     * Split the given segment into multiple segments on the given points.
     *  * Each existing segment will retain its leftSE and a new rightSE will be
     *    generated for it.
     *  * A new segment will be generated which will adopt the original segment's
     *    rightSE, and a new leftSE will be generated for it.
     *  * If there are more than two points given to split on, new segments
     *    in the middle will be generated with new leftSE and rightSE's.
     *  * An array of the newly generated SweepEvents will be returned.
     *
     * Warning: input array of points is modified
     */
  }, {
    key: "split",
    value: function(e) {
      var r = [], i = e.events !== void 0, o = new yr(e, !0), s = new yr(e, !1), a = this.rightSE;
      this.replaceRightSE(s), r.push(s), r.push(o);
      var u = new n(o, a, this.rings.slice(), this.windings.slice());
      return yr.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), yr.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (o.checkForConsuming(), s.checkForConsuming()), r;
    }
    /* Swap which event is left and right */
  }, {
    key: "swapEvents",
    value: function() {
      var e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (var r = 0, i = this.windings.length; r < i; r++)
        this.windings[r] *= -1;
    }
    /* Consume another segment. We take their rings under our wing
     * and mark them as consumed. Use for perfectly overlapping segments */
  }, {
    key: "consume",
    value: function(e) {
      for (var r = this, i = e; r.consumedBy; )
        r = r.consumedBy;
      for (; i.consumedBy; )
        i = i.consumedBy;
      var o = n.compare(r, i);
      if (o !== 0) {
        if (o > 0) {
          var s = r;
          r = i, i = s;
        }
        if (r.prev === i) {
          var a = r;
          r = i, i = a;
        }
        for (var u = 0, l = i.rings.length; u < l; u++) {
          var c = i.rings[u], f = i.windings[u], h = r.rings.indexOf(c);
          h === -1 ? (r.rings.push(c), r.windings.push(f)) : r.windings[h] += f;
        }
        i.rings = null, i.windings = null, i.consumedBy = r, i.leftSE.consumedBy = r.leftSE, i.rightSE.consumedBy = r.rightSE;
      }
    }
    /* The first segment previous segment chain that is in the result */
  }, {
    key: "prevInResult",
    value: function() {
      return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
    }
  }, {
    key: "beforeState",
    value: function() {
      if (this._beforeState !== void 0)
        return this._beforeState;
      if (!this.prev)
        this._beforeState = {
          rings: [],
          windings: [],
          multiPolys: []
        };
      else {
        var e = this.prev.consumedBy || this.prev;
        this._beforeState = e.afterState();
      }
      return this._beforeState;
    }
  }, {
    key: "afterState",
    value: function() {
      if (this._afterState !== void 0)
        return this._afterState;
      var e = this.beforeState();
      this._afterState = {
        rings: e.rings.slice(0),
        windings: e.windings.slice(0),
        multiPolys: []
      };
      for (var r = this._afterState.rings, i = this._afterState.windings, o = this._afterState.multiPolys, s = 0, a = this.rings.length; s < a; s++) {
        var u = this.rings[s], l = this.windings[s], c = r.indexOf(u);
        c === -1 ? (r.push(u), i.push(l)) : i[c] += l;
      }
      for (var f = [], h = [], p = 0, g = r.length; p < g; p++)
        if (i[p] !== 0) {
          var y = r[p], m = y.poly;
          if (h.indexOf(m) === -1)
            if (y.isExterior)
              f.push(m);
            else {
              h.indexOf(m) === -1 && h.push(m);
              var _ = f.indexOf(y.poly);
              _ !== -1 && f.splice(_, 1);
            }
        }
      for (var I = 0, C = f.length; I < C; I++) {
        var x = f[I].multiPoly;
        o.indexOf(x) === -1 && o.push(x);
      }
      return this._afterState;
    }
    /* Is this segment part of the final result? */
  }, {
    key: "isInResult",
    value: function() {
      if (this.consumedBy)
        return !1;
      if (this._isInResult !== void 0)
        return this._isInResult;
      var e = this.beforeState().multiPolys, r = this.afterState().multiPolys;
      switch (tr.type) {
        case "union": {
          var i = e.length === 0, o = r.length === 0;
          this._isInResult = i !== o;
          break;
        }
        case "intersection": {
          var s, a;
          e.length < r.length ? (s = e.length, a = r.length) : (s = r.length, a = e.length), this._isInResult = a === tr.numMultiPolys && s < a;
          break;
        }
        case "xor": {
          var u = Math.abs(e.length - r.length);
          this._isInResult = u % 2 === 1;
          break;
        }
        case "difference": {
          var l = function(f) {
            return f.length === 1 && f[0].isSubject;
          };
          this._isInResult = l(e) !== l(r);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(tr.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, r, i) {
      var o, s, a, u = yr.comparePoints(e, r);
      if (u < 0)
        o = e, s = r, a = 1;
      else if (u > 0)
        o = r, s = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new yr(o, !0), c = new yr(s, !1);
      return new n(l, c, [i], [a]);
    }
  }]), n;
}(), hs = /* @__PURE__ */ function() {
  function n(t, e, r) {
    if (Qe(this, n), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = r, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var i = fi.round(t[0][0], t[0][1]);
    this.bbox = {
      ll: {
        x: i.x,
        y: i.y
      },
      ur: {
        x: i.x,
        y: i.y
      }
    };
    for (var o = i, s = 1, a = t.length; s < a; s++) {
      if (typeof t[s][0] != "number" || typeof t[s][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      var u = fi.round(t[s][0], t[s][1]);
      u.x === o.x && u.y === o.y || (this.segments.push(Xi.fromRing(o, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), o = u);
    }
    (i.x !== o.x || i.y !== o.y) && this.segments.push(Xi.fromRing(o, i, this));
  }
  return ae(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], r = 0, i = this.segments.length; r < i; r++) {
        var o = this.segments[r];
        e.push(o.leftSE), e.push(o.rightSE);
      }
      return e;
    }
  }]), n;
}(), du = /* @__PURE__ */ function() {
  function n(t, e) {
    if (Qe(this, n), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new hs(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (var r = 1, i = t.length; r < i; r++) {
      var o = new hs(t[r], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = e;
  }
  return ae(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), r = 0, i = this.interiorRings.length; r < i; r++)
        for (var o = this.interiorRings[r].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), n;
}(), ps = /* @__PURE__ */ function() {
  function n(t, e) {
    if (Qe(this, n), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof t[0][0][0] == "number" && (t = [t]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: {
        x: Number.POSITIVE_INFINITY,
        y: Number.POSITIVE_INFINITY
      },
      ur: {
        x: Number.NEGATIVE_INFINITY,
        y: Number.NEGATIVE_INFINITY
      }
    };
    for (var r = 0, i = t.length; r < i; r++) {
      var o = new du(t[r], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = e;
  }
  return ae(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], r = 0, i = this.polys.length; r < i; r++)
        for (var o = this.polys[r].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), n;
}(), vu = /* @__PURE__ */ function() {
  ae(n, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var r = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!(!s.isInResult() || s.ringOut)) {
          for (var a = null, u = s.leftSE, l = s.rightSE, c = [u], f = u.point, h = []; a = u, u = l, c.push(u), u.point !== f; )
            for (; ; ) {
              var p = u.getAvailableLinkedEvents();
              if (p.length === 0) {
                var g = c[0].point, y = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(g.x, ",") + " ".concat(g.y, "]. Last matching segment found ends at") + " [".concat(y.x, ", ").concat(y.y, "]."));
              }
              if (p.length === 1) {
                l = p[0].otherSE;
                break;
              }
              for (var m = null, _ = 0, I = h.length; _ < I; _++)
                if (h[_].point === u.point) {
                  m = _;
                  break;
                }
              if (m !== null) {
                var C = h.splice(m)[0], x = c.splice(C.index);
                x.unshift(x[0].otherSE), r.push(new n(x.reverse()));
                continue;
              }
              h.push({
                index: c.length,
                point: u.point
              });
              var b = u.getLeftmostComparator(a);
              l = p.sort(b)[0].otherSE;
              break;
            }
          r.push(new n(c));
        }
      }
      return r;
    }
  }]);
  function n(t) {
    Qe(this, n), this.events = t;
    for (var e = 0, r = t.length; e < r; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return ae(n, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, r = [e], i = 1, o = this.events.length - 1; i < o; i++) {
        var s = this.events[i].point, a = this.events[i + 1].point;
        ls(s, e, a) !== 0 && (r.push(s), e = s);
      }
      if (r.length === 1)
        return null;
      var u = r[0], l = r[1];
      ls(u, e, l) === 0 && r.shift(), r.push(r[0]);
      for (var c = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : r.length - 1, h = this.isExteriorRing() ? r.length : -1, p = [], g = f; g != h; g += c)
        p.push([r[g].x, r[g].y]);
      return p;
    }
  }, {
    key: "isExteriorRing",
    value: function() {
      if (this._isExteriorRing === void 0) {
        var e = this.enclosingRing();
        this._isExteriorRing = e ? !e.isExteriorRing() : !0;
      }
      return this._isExteriorRing;
    }
  }, {
    key: "enclosingRing",
    value: function() {
      return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
    }
    /* Returns the ring that encloses this one, if any */
  }, {
    key: "_calcEnclosingRing",
    value: function() {
      for (var e = this.events[0], r = 1, i = this.events.length; r < i; r++) {
        var o = this.events[r];
        yr.compare(e, o) > 0 && (e = o);
      }
      for (var s = e.segment.prevInResult(), a = s ? s.prevInResult() : null; ; ) {
        if (!s)
          return null;
        if (!a)
          return s.ringOut;
        if (a.ringOut !== s.ringOut)
          return a.ringOut.enclosingRing() !== s.ringOut ? s.ringOut : s.ringOut.enclosingRing();
        s = a.prevInResult(), a = s ? s.prevInResult() : null;
      }
    }
  }]), n;
}(), gs = /* @__PURE__ */ function() {
  function n(t) {
    Qe(this, n), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return ae(n, [{
    key: "addInterior",
    value: function(e) {
      this.interiorRings.push(e), e.poly = this;
    }
  }, {
    key: "getGeom",
    value: function() {
      var e = [this.exteriorRing.getGeom()];
      if (e[0] === null)
        return null;
      for (var r = 0, i = this.interiorRings.length; r < i; r++) {
        var o = this.interiorRings[r].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }]), n;
}(), yu = /* @__PURE__ */ function() {
  function n(t) {
    Qe(this, n), this.rings = t, this.polys = this._composePolys(t);
  }
  return ae(n, [{
    key: "getGeom",
    value: function() {
      for (var e = [], r = 0, i = this.polys.length; r < i; r++) {
        var o = this.polys[r].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }, {
    key: "_composePolys",
    value: function(e) {
      for (var r = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!s.poly)
          if (s.isExteriorRing())
            r.push(new gs(s));
          else {
            var a = s.enclosingRing();
            a.poly || r.push(new gs(a)), a.poly.addInterior(s);
          }
      }
      return r;
    }
  }]), n;
}(), mu = /* @__PURE__ */ function() {
  function n(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xi.compare;
    Qe(this, n), this.queue = t, this.tree = new Vo(e), this.segments = [];
  }
  return ae(n, [{
    key: "process",
    value: function(e) {
      var r = e.segment, i = [];
      if (e.consumedBy)
        return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(r), i;
      var o = e.isLeft ? this.tree.insert(r) : this.tree.find(r);
      if (!o)
        throw new Error("Unable to find segment #".concat(r.id, " ") + "[".concat(r.leftSE.point.x, ", ").concat(r.leftSE.point.y, "] -> ") + "[".concat(r.rightSE.point.x, ", ").concat(r.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
      for (var s = o, a = o, u = void 0, l = void 0; u === void 0; )
        s = this.tree.prev(s), s === null ? u = null : s.key.consumedBy === void 0 && (u = s.key);
      for (; l === void 0; )
        a = this.tree.next(a), a === null ? l = null : a.key.consumedBy === void 0 && (l = a.key);
      if (e.isLeft) {
        var c = null;
        if (u) {
          var f = u.getIntersection(r);
          if (f !== null && (r.isAnEndpoint(f) || (c = f), !u.isAnEndpoint(f)))
            for (var h = this._splitSafely(u, f), p = 0, g = h.length; p < g; p++)
              i.push(h[p]);
        }
        var y = null;
        if (l) {
          var m = l.getIntersection(r);
          if (m !== null && (r.isAnEndpoint(m) || (y = m), !l.isAnEndpoint(m)))
            for (var _ = this._splitSafely(l, m), I = 0, C = _.length; I < C; I++)
              i.push(_[I]);
        }
        if (c !== null || y !== null) {
          var x = null;
          if (c === null)
            x = y;
          else if (y === null)
            x = c;
          else {
            var b = yr.comparePoints(c, y);
            x = b <= 0 ? c : y;
          }
          this.queue.remove(r.rightSE), i.push(r.rightSE);
          for (var P = r.split(x), D = 0, G = P.length; D < G; D++)
            i.push(P[D]);
        }
        i.length > 0 ? (this.tree.remove(r), i.push(e)) : (this.segments.push(r), r.prev = u);
      } else {
        if (u && l) {
          var A = u.getIntersection(l);
          if (A !== null) {
            if (!u.isAnEndpoint(A))
              for (var et = this._splitSafely(u, A), K = 0, nt = et.length; K < nt; K++)
                i.push(et[K]);
            if (!l.isAnEndpoint(A))
              for (var ct = this._splitSafely(l, A), w = 0, X = ct.length; w < X; w++)
                i.push(ct[w]);
          }
        }
        this.tree.remove(r);
      }
      return i;
    }
    /* Safely split a segment that is currently in the datastructures
     * IE - a segment other than the one that is currently being processed. */
  }, {
    key: "_splitSafely",
    value: function(e, r) {
      this.tree.remove(e);
      var i = e.rightSE;
      this.queue.remove(i);
      var o = e.split(r);
      return o.push(i), e.consumedBy === void 0 && this.tree.insert(e), o;
    }
  }]), n;
}(), ds = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, _u = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, Eu = /* @__PURE__ */ function() {
  function n() {
    Qe(this, n);
  }
  return ae(n, [{
    key: "run",
    value: function(e, r, i) {
      tr.type = e, fi.reset();
      for (var o = [new ps(r, !0)], s = 0, a = i.length; s < a; s++)
        o.push(new ps(i[s], !1));
      if (tr.numMultiPolys = o.length, tr.type === "difference")
        for (var u = o[0], l = 1; l < o.length; )
          Po(o[l].bbox, u.bbox) !== null ? l++ : o.splice(l, 1);
      if (tr.type === "intersection") {
        for (var c = 0, f = o.length; c < f; c++)
          for (var h = o[c], p = c + 1, g = o.length; p < g; p++)
            if (Po(h.bbox, o[p].bbox) === null)
              return [];
      }
      for (var y = new Vo(yr.compare), m = 0, _ = o.length; m < _; m++)
        for (var I = o[m].getSweepEvents(), C = 0, x = I.length; C < x; C++)
          if (y.insert(I[C]), y.size > ds)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var b = new mu(y), P = y.size, D = y.pop(); D; ) {
        var G = D.key;
        if (y.size === P) {
          var A = G.segment;
          throw new Error("Unable to pop() ".concat(G.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(G.point.x, ", ").concat(G.point.y, "] from segment #").concat(A.id, " ") + "[".concat(A.leftSE.point.x, ", ").concat(A.leftSE.point.y, "] -> ") + "[".concat(A.rightSE.point.x, ", ").concat(A.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (y.size > ds)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (b.segments.length > _u)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var et = b.process(G), K = 0, nt = et.length; K < nt; K++) {
          var ct = et[K];
          ct.consumedBy === void 0 && y.insert(ct);
        }
        P = y.size, D = y.pop();
      }
      fi.reset();
      var w = vu.factory(b.segments), X = new yu(w);
      return X.getGeom();
    }
  }]), n;
}(), tr = new Eu(), Iu = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return tr.run("union", t, r);
}, Cu = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return tr.run("intersection", t, r);
}, Nu = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return tr.run("xor", t, r);
}, xu = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return tr.run("difference", t, r);
}, Hs = {
  union: Iu,
  intersection: Cu,
  xor: Nu,
  difference: xu
}, ie = 63710088e-1, Ws = {
  centimeters: ie * 100,
  centimetres: ie * 100,
  degrees: ie / 111325,
  feet: ie * 3.28084,
  inches: ie * 39.37,
  kilometers: ie / 1e3,
  kilometres: ie / 1e3,
  meters: ie,
  metres: ie,
  miles: ie / 1609.344,
  millimeters: ie * 1e3,
  millimetres: ie * 1e3,
  nauticalmiles: ie / 1852,
  radians: 1,
  yards: ie * 1.0936
};
function no(n, t, e) {
  e === void 0 && (e = {});
  var r = { type: "Feature" };
  return (e.id === 0 || e.id) && (r.id = e.id), e.bbox && (r.bbox = e.bbox), r.properties = t || {}, r.geometry = n, r;
}
function Su(n, t, e) {
  if (e === void 0 && (e = {}), !n)
    throw new Error("coordinates is required");
  if (!Array.isArray(n))
    throw new Error("coordinates must be an Array");
  if (n.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!vs(n[0]) || !vs(n[1]))
    throw new Error("coordinates must contain numbers");
  var r = {
    type: "Point",
    coordinates: n
  };
  return no(r, t, e);
}
function js(n, t, e) {
  e === void 0 && (e = {});
  for (var r = 0, i = n; r < i.length; r++) {
    var o = i[r];
    if (o.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var s = 0; s < o[o.length - 1].length; s++)
      if (o[o.length - 1][s] !== o[0][s])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: n
  };
  return no(a, t, e);
}
function Ro(n, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = n, e;
}
function Ks(n, t, e) {
  e === void 0 && (e = {});
  var r = {
    type: "MultiPolygon",
    coordinates: n
  };
  return no(r, t, e);
}
function Lu(n, t) {
  t === void 0 && (t = "kilometers");
  var e = Ws[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return n * e;
}
function wu(n, t) {
  t === void 0 && (t = "kilometers");
  var e = Ws[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return n / e;
}
function vs(n) {
  return !isNaN(n) && n !== null && !Array.isArray(n);
}
function Yi(n) {
  return n.type === "Feature" ? n.geometry : n;
}
function Pu(n, t, e) {
  e === void 0 && (e = {});
  var r = Yi(n), i = Yi(t), o = Hs.union(r.coordinates, i.coordinates);
  return o.length === 0 ? null : o.length === 1 ? js(o[0], e.properties) : Ks(o, e.properties);
}
function bu(n, t) {
  var e = Yi(n), r = Yi(t), i = n.properties || {}, o = Hs.difference(
    e.coordinates,
    r.coordinates
  );
  return o.length === 0 ? null : o.length === 1 ? js(o[0], i) : Ks(o, i);
}
function Qs(n, t, e) {
  if (n !== null)
    for (var r, i, o, s, a, u, l, c = 0, f = 0, h, p = n.type, g = p === "FeatureCollection", y = p === "Feature", m = g ? n.features.length : 1, _ = 0; _ < m; _++) {
      l = g ? n.features[_].geometry : y ? n.geometry : n, h = l ? l.type === "GeometryCollection" : !1, a = h ? l.geometries.length : 1;
      for (var I = 0; I < a; I++) {
        var C = 0, x = 0;
        if (s = h ? l.geometries[I] : l, s !== null) {
          u = s.coordinates;
          var b = s.type;
          switch (c = e && (b === "Polygon" || b === "MultiPolygon") ? 1 : 0, b) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                f,
                _,
                C,
                x
              ) === !1)
                return !1;
              f++, C++;
              break;
            case "LineString":
            case "MultiPoint":
              for (r = 0; r < u.length; r++) {
                if (t(
                  u[r],
                  f,
                  _,
                  C,
                  x
                ) === !1)
                  return !1;
                f++, b === "MultiPoint" && C++;
              }
              b === "LineString" && C++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (r = 0; r < u.length; r++) {
                for (i = 0; i < u[r].length - c; i++) {
                  if (t(
                    u[r][i],
                    f,
                    _,
                    C,
                    x
                  ) === !1)
                    return !1;
                  f++;
                }
                b === "MultiLineString" && C++, b === "Polygon" && x++;
              }
              b === "Polygon" && C++;
              break;
            case "MultiPolygon":
              for (r = 0; r < u.length; r++) {
                for (x = 0, i = 0; i < u[r].length; i++) {
                  for (o = 0; o < u[r][i].length - c; o++) {
                    if (t(
                      u[r][i][o],
                      f,
                      _,
                      C,
                      x
                    ) === !1)
                      return !1;
                    f++;
                  }
                  x++;
                }
                C++;
              }
              break;
            case "GeometryCollection":
              for (r = 0; r < s.geometries.length; r++)
                if (Qs(s.geometries[r], t, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function ys(n, t) {
  if (n.type === "Feature")
    t(n, 0);
  else if (n.type === "FeatureCollection")
    for (var e = 0; e < n.features.length && t(n.features[e], e) !== !1; e++)
      ;
}
function Js(n, t) {
  var e, r, i, o, s, a, u, l, c, f, h = 0, p = n.type === "FeatureCollection", g = n.type === "Feature", y = p ? n.features.length : 1;
  for (e = 0; e < y; e++) {
    for (a = p ? n.features[e].geometry : g ? n.geometry : n, l = p ? n.features[e].properties : g ? n.properties : {}, c = p ? n.features[e].bbox : g ? n.bbox : void 0, f = p ? n.features[e].id : g ? n.id : void 0, u = a ? a.type === "GeometryCollection" : !1, s = u ? a.geometries.length : 1, i = 0; i < s; i++) {
      if (o = u ? a.geometries[i] : a, o === null) {
        if (t(
          null,
          h,
          l,
          c,
          f
        ) === !1)
          return !1;
        continue;
      }
      switch (o.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            o,
            h,
            l,
            c,
            f
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (r = 0; r < o.geometries.length; r++)
            if (t(
              o.geometries[r],
              h,
              l,
              c,
              f
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    h++;
  }
}
function Oo(n) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Qs(n, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
Oo.default = Oo;
function Ru(n, t) {
  t === void 0 && (t = {});
  var e = Oo(n), r = (e[0] + e[2]) / 2, i = (e[1] + e[3]) / 2;
  return Su([r, i], t.properties, t);
}
"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
  configurable: !0,
  value: function(t) {
    if (this === void 0 || this === null)
      throw new TypeError(this + " is not an object");
    var e = Object(this), r = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, i = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
    i = i < 0 ? Math.max(r + i, 0) : Math.min(i, r);
    var o = 2 in arguments && arguments[2] !== void 0 ? parseInt(Number(arguments[2]), 10) || 0 : r;
    for (o = o < 0 ? Math.max(r + arguments[2], 0) : Math.min(o, r); i < o; )
      e[i] = t, ++i;
    return e;
  },
  writable: !0
});
Number.isFinite = Number.isFinite || function(n) {
  return typeof n == "number" && isFinite(n);
};
Number.isInteger = Number.isInteger || function(n) {
  return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
};
Number.parseFloat = Number.parseFloat || parseFloat;
Number.isNaN = Number.isNaN || function(n) {
  return n !== n;
};
Math.trunc = Math.trunc || function(n) {
  return n < 0 ? Math.ceil(n) : Math.floor(n);
};
var ln = function() {
};
ln.prototype.interfaces_ = function() {
  return [];
};
ln.prototype.getClass = function() {
  return ln;
};
ln.prototype.equalsWithTolerance = function(t, e, r) {
  return Math.abs(t - e) <= r;
};
var it = function(n) {
  function t(e) {
    n.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new n().stack;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(Error), F = function() {
}, Zs = { MAX_VALUE: { configurable: !0 } };
F.isNaN = function(t) {
  return Number.isNaN(t);
};
F.doubleToLongBits = function(t) {
  return t;
};
F.longBitsToDouble = function(t) {
  return t;
};
F.isInfinite = function(t) {
  return !Number.isFinite(t);
};
Zs.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(F, Zs);
var Ee = function() {
}, io = function() {
}, On = function() {
};
function Ie() {
}
var d = function n() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = n.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = n.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, In = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
d.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case d.X:
      this.x = e;
      break;
    case d.Y:
      this.y = e;
      break;
    case d.Z:
      this.z = e;
      break;
    default:
      throw new it("Invalid ordinate index: " + t);
  }
};
d.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return !(!ln.equalsWithTolerance(this.x, e.x, r) || !ln.equalsWithTolerance(this.y, e.y, r));
  }
};
d.prototype.getOrdinate = function(t) {
  switch (t) {
    case d.X:
      return this.x;
    case d.Y:
      return this.y;
    case d.Z:
      return this.z;
  }
  throw new it("Invalid ordinate index: " + t);
};
d.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || F.isNaN(this.z)) && F.isNaN(t.z);
};
d.prototype.equals = function(t) {
  return t instanceof d ? this.equals2D(t) : !1;
};
d.prototype.equalInZ = function(t, e) {
  return ln.equalsWithTolerance(this.z, t.z, e);
};
d.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
d.prototype.clone = function() {
};
d.prototype.copy = function() {
  return new d(this);
};
d.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
d.prototype.distance3D = function(t) {
  var e = this.x - t.x, r = this.y - t.y, i = this.z - t.z;
  return Math.sqrt(e * e + r * r + i * i);
};
d.prototype.distance = function(t) {
  var e = this.x - t.x, r = this.y - t.y;
  return Math.sqrt(e * e + r * r);
};
d.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + d.hashCode(this.x), t = 37 * t + d.hashCode(this.y), t;
};
d.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
d.prototype.interfaces_ = function() {
  return [Ee, io, Ie];
};
d.prototype.getClass = function() {
  return d;
};
d.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = F.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
In.DimensionalComparator.get = function() {
  return Or;
};
In.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
In.NULL_ORDINATE.get = function() {
  return F.NaN;
};
In.X.get = function() {
  return 0;
};
In.Y.get = function() {
  return 1;
};
In.Z.get = function() {
  return 2;
};
Object.defineProperties(d, In);
var Or = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new it("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
Or.prototype.compare = function(t, e) {
  var r = t, i = e, o = Or.compare(r.x, i.x);
  if (o !== 0)
    return o;
  var s = Or.compare(r.y, i.y);
  if (s !== 0)
    return s;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = Or.compare(r.z, i.z);
  return a;
};
Or.prototype.interfaces_ = function() {
  return [On];
};
Or.prototype.getClass = function() {
  return Or;
};
Or.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : F.isNaN(t) ? F.isNaN(e) ? 0 : -1 : F.isNaN(e) ? 1 : 0;
};
var Dn = function() {
};
Dn.prototype.create = function() {
};
Dn.prototype.interfaces_ = function() {
  return [];
};
Dn.prototype.getClass = function() {
  return Dn;
};
var v = function() {
}, Li = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
v.prototype.interfaces_ = function() {
  return [];
};
v.prototype.getClass = function() {
  return v;
};
v.toLocationSymbol = function(t) {
  switch (t) {
    case v.EXTERIOR:
      return "e";
    case v.BOUNDARY:
      return "b";
    case v.INTERIOR:
      return "i";
    case v.NONE:
      return "-";
  }
  throw new it("Unknown location value: " + t);
};
Li.INTERIOR.get = function() {
  return 0;
};
Li.BOUNDARY.get = function() {
  return 1;
};
Li.EXTERIOR.get = function() {
  return 2;
};
Li.NONE.get = function() {
  return -1;
};
Object.defineProperties(v, Li);
var M = function(n, t) {
  return n.interfaces_ && n.interfaces_().indexOf(t) > -1;
}, ue = function() {
}, $s = { LOG_10: { configurable: !0 } };
ue.prototype.interfaces_ = function() {
  return [];
};
ue.prototype.getClass = function() {
  return ue;
};
ue.log10 = function(t) {
  var e = Math.log(t);
  return F.isInfinite(e) || F.isNaN(e) ? e : e / ue.LOG_10;
};
ue.min = function(t, e, r, i) {
  var o = t;
  return e < o && (o = e), r < o && (o = r), i < o && (o = i), o;
};
ue.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], r = arguments[2];
    return t < e ? e : t > r ? r : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    return i < o ? o : i > s ? s : i;
  }
};
ue.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
ue.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], r = arguments[2], i = t;
    return e > i && (i = e), r > i && (i = r), i;
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = o;
    return s > l && (l = s), a > l && (l = a), u > l && (l = u), l;
  }
};
ue.average = function(t, e) {
  return (t + e) / 2;
};
$s.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(ue, $s);
var Je = function(t) {
  this.str = t;
};
Je.prototype.append = function(t) {
  this.str += t;
};
Je.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
Je.prototype.toString = function(t) {
  return this.str;
};
var ke = function(t) {
  this.value = t;
};
ke.prototype.intValue = function() {
  return this.value;
};
ke.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
ke.isNaN = function(t) {
  return Number.isNaN(t);
};
var hi = function() {
};
hi.isWhitespace = function(t) {
  return t <= 32 && t >= 0 || t === 127;
};
hi.toUpperCase = function(t) {
  return t.toUpperCase();
};
var E = function n() {
  if (this._hi = 0, this._lo = 0, arguments.length === 0)
    this.init(0);
  else if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this.init(t);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.init(e);
    } else if (typeof arguments[0] == "string") {
      var r = arguments[0];
      n.call(this, n.parse(r));
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    this.init(i, o);
  }
}, Oe = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
E.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
E.prototype.extractSignificantDigits = function(t, e) {
  var r = this.abs(), i = E.magnitude(r._hi), o = E.TEN.pow(i);
  r = r.divide(o), r.gt(E.TEN) ? (r = r.divide(E.TEN), i += 1) : r.lt(E.ONE) && (r = r.multiply(E.TEN), i -= 1);
  for (var s = i + 1, a = new Je(), u = E.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === s && a.append(".");
    var c = Math.trunc(r._hi);
    if (c < 0)
      break;
    var f = !1, h = 0;
    c > 9 ? (f = !0, h = "9") : h = "0" + c, a.append(h), r = r.subtract(E.valueOf(c)).multiply(E.TEN), f && r.selfAdd(E.TEN);
    var p = !0, g = E.magnitude(r._hi);
    if (g < 0 && Math.abs(g) >= u - l && (p = !1), !p)
      break;
  }
  return e[0] = i, a.toString();
};
E.prototype.sqr = function() {
  return this.multiply(this);
};
E.prototype.doubleValue = function() {
  return this._hi + this._lo;
};
E.prototype.subtract = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.add(t.negate());
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.add(-e);
  }
};
E.prototype.equals = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._hi === t._hi && this._lo === t._lo;
  }
};
E.prototype.isZero = function() {
  return this._hi === 0 && this._lo === 0;
};
E.prototype.selfSubtract = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-e, 0);
  }
};
E.prototype.getSpecialNumberString = function() {
  return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
};
E.prototype.min = function(t) {
  return this.le(t) ? this : t;
};
E.prototype.selfDivide = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfDivide(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfDivide(e, 0);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null, f = null, h = null;
    return l = this._hi / r, c = E.SPLIT * l, o = c - l, h = E.SPLIT * r, o = c - o, s = l - o, a = h - r, f = l * r, a = h - a, u = r - a, h = o * a - f + o * u + s * a + s * u, c = (this._hi - f - h + this._lo - l * i) / r, h = l + c, this._hi = h, this._lo = l - h + c, this;
  }
};
E.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
E.prototype.divide = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0], e = null, r = null, i = null, o = null, s = null, a = null, u = null, l = null;
    s = this._hi / t._hi, a = E.SPLIT * s, e = a - s, l = E.SPLIT * t._hi, e = a - e, r = s - e, i = l - t._hi, u = s * t._hi, i = l - i, o = t._hi - i, l = e * i - u + e * o + r * i + r * o, a = (this._hi - u - l + this._lo - s * t._lo) / t._hi, l = s + a;
    var c = l, f = s - l + a;
    return new E(c, f);
  } else if (typeof arguments[0] == "number") {
    var h = arguments[0];
    return F.isNaN(h) ? E.createNaN() : E.copy(this).selfDivide(h, 0);
  }
};
E.prototype.ge = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo;
};
E.prototype.pow = function(t) {
  if (t === 0)
    return E.valueOf(1);
  var e = new E(this), r = E.valueOf(1), i = Math.abs(t);
  if (i > 1)
    for (; i > 0; )
      i % 2 === 1 && r.selfMultiply(e), i /= 2, i > 0 && (e = e.sqr());
  else
    r = e;
  return t < 0 ? r.reciprocal() : r;
};
E.prototype.ceil = function() {
  if (this.isNaN())
    return E.NaN;
  var t = Math.ceil(this._hi), e = 0;
  return t === this._hi && (e = Math.ceil(this._lo)), new E(t, e);
};
E.prototype.compareTo = function(t) {
  var e = t;
  return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
};
E.prototype.rint = function() {
  if (this.isNaN())
    return this;
  var t = this.add(0.5);
  return t.floor();
};
E.prototype.setValue = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.init(t), this;
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.init(e), this;
  }
};
E.prototype.max = function(t) {
  return this.ge(t) ? this : t;
};
E.prototype.sqrt = function() {
  if (this.isZero())
    return E.valueOf(0);
  if (this.isNegative())
    return E.NaN;
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, r = E.valueOf(e), i = this.subtract(r.sqr()), o = i._hi * (t * 0.5);
  return r.add(o);
};
E.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], r = null, i = null, o = null, s = null, a = null, u = null;
      return o = this._hi + e, a = o - this._hi, s = o - a, s = e - a + (this._hi - s), u = s + this._lo, r = o + u, i = u + (o - r), this._hi = r + i, this._lo = i + (r - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], f = null, h = null, p = null, g = null, y = null, m = null, _ = null, I = null;
    y = this._hi + l, p = this._lo + c, _ = y - this._hi, I = p - this._lo, m = y - _, g = p - I, m = l - _ + (this._hi - m), g = c - I + (this._lo - g), _ = m + p, f = y + _, h = _ + (y - f), _ = g + h;
    var C = f + _, x = _ + (f - C);
    return this._hi = C, this._lo = x, this;
  }
};
E.prototype.selfMultiply = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfMultiply(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfMultiply(e, 0);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null;
    l = E.SPLIT * this._hi, o = l - this._hi, c = E.SPLIT * r, o = l - o, s = this._hi - o, a = c - r, l = this._hi * r, a = c - a, u = r - a, c = o * a - l + o * u + s * a + s * u + (this._hi * i + this._lo * r);
    var f = l + c;
    o = l - f;
    var h = c + o;
    return this._hi = f, this._lo = h, this;
  }
};
E.prototype.selfSqr = function() {
  return this.selfMultiply(this);
};
E.prototype.floor = function() {
  if (this.isNaN())
    return E.NaN;
  var t = Math.floor(this._hi), e = 0;
  return t === this._hi && (e = Math.floor(this._lo)), new E(t, e);
};
E.prototype.negate = function() {
  return this.isNaN() ? this : new E(-this._hi, -this._lo);
};
E.prototype.clone = function() {
};
E.prototype.multiply = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return t.isNaN() ? E.createNaN() : E.copy(this).selfMultiply(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return F.isNaN(e) ? E.createNaN() : E.copy(this).selfMultiply(e, 0);
  }
};
E.prototype.isNaN = function() {
  return F.isNaN(this._hi);
};
E.prototype.intValue = function() {
  return Math.trunc(this._hi);
};
E.prototype.toString = function() {
  var t = E.magnitude(this._hi);
  return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
};
E.prototype.toStandardNotation = function() {
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), r = this.extractSignificantDigits(!0, e), i = e[0] + 1, o = r;
  if (r.charAt(0) === ".")
    o = "0" + r;
  else if (i < 0)
    o = "0." + E.stringOfChar("0", -i) + r;
  else if (r.indexOf(".") === -1) {
    var s = i - r.length, a = E.stringOfChar("0", s);
    o = r + a + ".0";
  }
  return this.isNegative() ? "-" + o : o;
};
E.prototype.reciprocal = function() {
  var t = null, e = null, r = null, i = null, o = null, s = null, a = null, u = null;
  o = 1 / this._hi, s = E.SPLIT * o, t = s - o, u = E.SPLIT * this._hi, t = s - t, e = o - t, r = u - this._hi, a = o * this._hi, r = u - r, i = this._hi - r, u = t * r - a + t * i + e * r + e * i, s = (1 - a - u - o * this._lo) / this._hi;
  var l = o + s, c = o - l + s;
  return new E(l, c);
};
E.prototype.toSciNotation = function() {
  if (this.isZero())
    return E.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), r = this.extractSignificantDigits(!1, e), i = E.SCI_NOT_EXPONENT_CHAR + e[0];
  if (r.charAt(0) === "0")
    throw new Error("Found leading zero: " + r);
  var o = "";
  r.length > 1 && (o = r.substring(1));
  var s = r.charAt(0) + "." + o;
  return this.isNegative() ? "-" + s + i : s + i;
};
E.prototype.abs = function() {
  return this.isNaN() ? E.NaN : this.isNegative() ? this.negate() : new E(this);
};
E.prototype.isPositive = function() {
  return (this._hi > 0 || this._hi === 0) && this._lo > 0;
};
E.prototype.lt = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo;
};
E.prototype.add = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return E.copy(this).selfAdd(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return E.copy(this).selfAdd(e);
  }
};
E.prototype.init = function() {
  if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this._hi = t, this._lo = 0;
    } else if (arguments[0] instanceof E) {
      var e = arguments[0];
      this._hi = e._hi, this._lo = e._lo;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this._hi = r, this._lo = i;
  }
};
E.prototype.gt = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo;
};
E.prototype.isNegative = function() {
  return (this._hi < 0 || this._hi === 0) && this._lo < 0;
};
E.prototype.trunc = function() {
  return this.isNaN() ? E.NaN : this.isPositive() ? this.floor() : this.ceil();
};
E.prototype.signum = function() {
  return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
};
E.prototype.interfaces_ = function() {
  return [Ie, Ee, io];
};
E.prototype.getClass = function() {
  return E;
};
E.sqr = function(t) {
  return E.valueOf(t).selfMultiply(t);
};
E.valueOf = function() {
  if (typeof arguments[0] == "string") {
    var t = arguments[0];
    return E.parse(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return new E(e);
  }
};
E.sqrt = function(t) {
  return E.valueOf(t).sqrt();
};
E.parse = function(t) {
  for (var e = 0, r = t.length; hi.isWhitespace(t.charAt(e)); )
    e++;
  var i = !1;
  if (e < r) {
    var o = t.charAt(e);
    (o === "-" || o === "+") && (e++, o === "-" && (i = !0));
  }
  for (var s = new E(), a = 0, u = 0, l = 0; !(e >= r); ) {
    var c = t.charAt(e);
    if (e++, hi.isDigit(c)) {
      var f = c - "0";
      s.selfMultiply(E.TEN), s.selfAdd(f), a++;
      continue;
    }
    if (c === ".") {
      u = a;
      continue;
    }
    if (c === "e" || c === "E") {
      var h = t.substring(e);
      try {
        l = ke.parseInt(h);
      } catch (_) {
        throw _ instanceof Error ? new Error("Invalid exponent " + h + " in string " + t) : _;
      } finally {
      }
      break;
    }
    throw new Error("Unexpected character '" + c + "' at position " + e + " in string " + t);
  }
  var p = s, g = a - u - l;
  if (g === 0)
    p = s;
  else if (g > 0) {
    var y = E.TEN.pow(g);
    p = s.divide(y);
  } else if (g < 0) {
    var m = E.TEN.pow(-g);
    p = s.multiply(m);
  }
  return i ? p.negate() : p;
};
E.createNaN = function() {
  return new E(F.NaN, F.NaN);
};
E.copy = function(t) {
  return new E(t);
};
E.magnitude = function(t) {
  var e = Math.abs(t), r = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(r)), o = Math.pow(10, i);
  return o * 10 <= e && (i += 1), i;
};
E.stringOfChar = function(t, e) {
  for (var r = new Je(), i = 0; i < e; i++)
    r.append(t);
  return r.toString();
};
Oe.PI.get = function() {
  return new E(3.141592653589793, 12246467991473532e-32);
};
Oe.TWO_PI.get = function() {
  return new E(6.283185307179586, 24492935982947064e-32);
};
Oe.PI_2.get = function() {
  return new E(1.5707963267948966, 6123233995736766e-32);
};
Oe.E.get = function() {
  return new E(2.718281828459045, 14456468917292502e-32);
};
Oe.NaN.get = function() {
  return new E(F.NaN, F.NaN);
};
Oe.EPS.get = function() {
  return 123259516440783e-46;
};
Oe.SPLIT.get = function() {
  return 134217729;
};
Oe.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
Oe.TEN.get = function() {
  return E.valueOf(10);
};
Oe.ONE.get = function() {
  return E.valueOf(1);
};
Oe.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
Oe.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(E, Oe);
var Kt = function() {
}, ta = { DP_SAFE_EPSILON: { configurable: !0 } };
Kt.prototype.interfaces_ = function() {
  return [];
};
Kt.prototype.getClass = function() {
  return Kt;
};
Kt.orientationIndex = function(t, e, r) {
  var i = Kt.orientationIndexFilter(t, e, r);
  if (i <= 1)
    return i;
  var o = E.valueOf(e.x).selfAdd(-t.x), s = E.valueOf(e.y).selfAdd(-t.y), a = E.valueOf(r.x).selfAdd(-e.x), u = E.valueOf(r.y).selfAdd(-e.y);
  return o.selfMultiply(u).selfSubtract(s.selfMultiply(a)).signum();
};
Kt.signOfDet2x2 = function(t, e, r, i) {
  var o = t.multiply(i).selfSubtract(e.multiply(r));
  return o.signum();
};
Kt.intersection = function(t, e, r, i) {
  var o = E.valueOf(i.y).selfSubtract(r.y).selfMultiply(E.valueOf(e.x).selfSubtract(t.x)), s = E.valueOf(i.x).selfSubtract(r.x).selfMultiply(E.valueOf(e.y).selfSubtract(t.y)), a = o.subtract(s), u = E.valueOf(i.x).selfSubtract(r.x).selfMultiply(E.valueOf(t.y).selfSubtract(r.y)), l = E.valueOf(i.y).selfSubtract(r.y).selfMultiply(E.valueOf(t.x).selfSubtract(r.x)), c = u.subtract(l), f = c.selfDivide(a).doubleValue(), h = E.valueOf(t.x).selfAdd(E.valueOf(e.x).selfSubtract(t.x).selfMultiply(f)).doubleValue(), p = E.valueOf(e.x).selfSubtract(t.x).selfMultiply(E.valueOf(t.y).selfSubtract(r.y)), g = E.valueOf(e.y).selfSubtract(t.y).selfMultiply(E.valueOf(t.x).selfSubtract(r.x)), y = p.subtract(g), m = y.selfDivide(a).doubleValue(), _ = E.valueOf(r.y).selfAdd(E.valueOf(i.y).selfSubtract(r.y).selfMultiply(m)).doubleValue();
  return new d(h, _);
};
Kt.orientationIndexFilter = function(t, e, r) {
  var i = null, o = (t.x - r.x) * (e.y - r.y), s = (t.y - r.y) * (e.x - r.x), a = o - s;
  if (o > 0) {
    if (s <= 0)
      return Kt.signum(a);
    i = o + s;
  } else if (o < 0) {
    if (s >= 0)
      return Kt.signum(a);
    i = -o - s;
  } else
    return Kt.signum(a);
  var u = Kt.DP_SAFE_EPSILON * i;
  return a >= u || -a >= u ? Kt.signum(a) : 2;
};
Kt.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
ta.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(Kt, ta);
var q = function() {
}, wi = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
wi.X.get = function() {
  return 0;
};
wi.Y.get = function() {
  return 1;
};
wi.Z.get = function() {
  return 2;
};
wi.M.get = function() {
  return 3;
};
q.prototype.setOrdinate = function(t, e, r) {
};
q.prototype.size = function() {
};
q.prototype.getOrdinate = function(t, e) {
};
q.prototype.getCoordinate = function() {
};
q.prototype.getCoordinateCopy = function(t) {
};
q.prototype.getDimension = function() {
};
q.prototype.getX = function(t) {
};
q.prototype.clone = function() {
};
q.prototype.expandEnvelope = function(t) {
};
q.prototype.copy = function() {
};
q.prototype.getY = function(t) {
};
q.prototype.toCoordinateArray = function() {
};
q.prototype.interfaces_ = function() {
  return [io];
};
q.prototype.getClass = function() {
  return q;
};
Object.defineProperties(q, wi);
var ea = function() {
}, $n = function(n) {
  function t() {
    n.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ea), Rt = function() {
};
Rt.arraycopy = function(t, e, r, i, o) {
  for (var s = 0, a = e; a < e + o; a++)
    r[i + s] = t[a], s++;
};
Rt.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var Ce = function n() {
  if (this.x = null, this.y = null, this.w = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.w = 1;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.w = 1;
  } else if (arguments.length === 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      var e = arguments[0], r = arguments[1];
      this.x = e, this.y = r, this.w = 1;
    } else if (arguments[0] instanceof n && arguments[1] instanceof n) {
      var i = arguments[0], o = arguments[1];
      this.x = i.y * o.w - o.y * i.w, this.y = o.x * i.w - i.x * o.w, this.w = i.x * o.y - o.x * i.y;
    } else if (arguments[0] instanceof d && arguments[1] instanceof d) {
      var s = arguments[0], a = arguments[1];
      this.x = s.y - a.y, this.y = a.x - s.x, this.w = s.x * a.y - a.x * s.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var f = arguments[0], h = arguments[1], p = arguments[2], g = arguments[3], y = f.y - h.y, m = h.x - f.x, _ = f.x * h.y - h.x * f.y, I = p.y - g.y, C = g.x - p.x, x = p.x * g.y - g.x * p.y;
    this.x = m * x - C * _, this.y = I * _ - y * x, this.w = y * C - I * m;
  }
};
Ce.prototype.getY = function() {
  var t = this.y / this.w;
  if (F.isNaN(t) || F.isInfinite(t))
    throw new $n();
  return t;
};
Ce.prototype.getX = function() {
  var t = this.x / this.w;
  if (F.isNaN(t) || F.isInfinite(t))
    throw new $n();
  return t;
};
Ce.prototype.getCoordinate = function() {
  var t = new d();
  return t.x = this.getX(), t.y = this.getY(), t;
};
Ce.prototype.interfaces_ = function() {
  return [];
};
Ce.prototype.getClass = function() {
  return Ce;
};
Ce.intersection = function(t, e, r, i) {
  var o = t.y - e.y, s = e.x - t.x, a = t.x * e.y - e.x * t.y, u = r.y - i.y, l = i.x - r.x, c = r.x * i.y - i.x * r.y, f = s * c - l * a, h = u * a - o * c, p = o * l - u * s, g = f / p, y = h / p;
  if (F.isNaN(g) || F.isInfinite(g) || F.isNaN(y) || F.isInfinite(y))
    throw new $n();
  return new d(g, y);
};
var R = function n() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof d) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.init(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.init(r.x, i.x, r.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    this.init(o, s, a, u);
  }
}, ra = { serialVersionUID: { configurable: !0 } };
R.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
R.prototype.equals = function(t) {
  if (!(t instanceof R))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
R.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new R();
  var e = this._minx > t._minx ? this._minx : t._minx, r = this._miny > t._miny ? this._miny : t._miny, i = this._maxx < t._maxx ? this._maxx : t._maxx, o = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new R(e, i, r, o);
};
R.prototype.isNull = function() {
  return this._maxx < this._minx;
};
R.prototype.getMaxX = function() {
  return this._maxx;
};
R.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof d) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof R) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : r >= this._minx && r <= this._maxx && i >= this._miny && i <= this._maxy;
  }
};
R.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof R) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof d) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : !(r > this._maxx || r < this._minx || i > this._maxy || i < this._miny);
  }
};
R.prototype.getMinY = function() {
  return this._miny;
};
R.prototype.getMinX = function() {
  return this._minx;
};
R.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof d) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof R) {
      var e = arguments[0];
      if (e.isNull())
        return null;
      this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.isNull() ? (this._minx = r, this._maxx = r, this._miny = i, this._maxy = i) : (r < this._minx && (this._minx = r), r > this._maxx && (this._maxx = r), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
  }
};
R.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
R.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
R.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
R.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
R.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
R.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
R.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
R.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
R.prototype.expandBy = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.expandBy(t, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this.isNull())
      return null;
    this._minx -= e, this._maxx += e, this._miny -= r, this._maxy += r, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
  }
};
R.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof R) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof d) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.covers(r, i);
  }
};
R.prototype.centre = function() {
  return this.isNull() ? null : new d((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
R.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof d) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof R) {
      var e = arguments[0];
      this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.init(r.x, i.x, r.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    o < s ? (this._minx = o, this._maxx = s) : (this._minx = s, this._maxx = o), a < u ? (this._miny = a, this._maxy = u) : (this._miny = u, this._maxy = a);
  }
};
R.prototype.getMaxY = function() {
  return this._maxy;
};
R.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var r = 0;
  return this._maxy < t._miny ? r = t._miny - this._maxy : this._miny > t._maxy && (r = this._miny - t._maxy), e === 0 ? r : r === 0 ? e : Math.sqrt(e * e + r * r);
};
R.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + d.hashCode(this._minx), t = 37 * t + d.hashCode(this._maxx), t = 37 * t + d.hashCode(this._miny), t = 37 * t + d.hashCode(this._maxy), t;
};
R.prototype.interfaces_ = function() {
  return [Ee, Ie];
};
R.prototype.getClass = function() {
  return R;
};
R.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], r = arguments[2];
    return r.x >= (t.x < e.x ? t.x : e.x) && r.x <= (t.x > e.x ? t.x : e.x) && r.y >= (t.y < e.y ? t.y : e.y) && r.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = Math.min(s.x, a.x), l = Math.max(s.x, a.x), c = Math.min(i.x, o.x), f = Math.max(i.x, o.x);
    return !(c > l || f < u || (u = Math.min(s.y, a.y), l = Math.max(s.y, a.y), c = Math.min(i.y, o.y), f = Math.max(i.y, o.y), c > l) || f < u);
  }
};
ra.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(R, ra);
var Me = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, oo = function(t) {
  this.geometryFactory = t || new k();
};
oo.prototype.read = function(t) {
  var e, r, i;
  t = t.replace(/[\n\r]/g, " ");
  var o = Me.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (o = Me.emptyTypeStr.exec(t), o[2] = void 0), o && (r = o[1].toLowerCase(), i = o[2], bn[r] && (e = bn[r].apply(this, [i]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
oo.prototype.write = function(t) {
  return this.extractGeometry(t);
};
oo.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!dr[e])
    return null;
  var r = e.toUpperCase(), i;
  return t.isEmpty() ? i = r + " EMPTY" : i = r + "(" + dr[e].apply(this, [t]) + ")", i;
};
var dr = {
  coordinate: function(t) {
    return t.x + " " + t.y;
  },
  /**
   * Return a space delimited string of point coordinates.
   *
   * @param {Point}
   *          point
   * @return {String} A string of coordinates representing the point.
   */
  point: function(t) {
    return dr.coordinate.call(this, t._coordinates._coordinates[0]);
  },
  /**
   * Return a comma delimited string of point coordinates from a multipoint.
   *
   * @param {MultiPoint}
   *          multipoint
   * @return {String} A string of point coordinate strings representing the
   *         multipoint.
   */
  multipoint: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + dr.point.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return a comma delimited string of point coordinates from a line.
   *
   * @param {LineString} linestring
   * @return {String} A string of point coordinate strings representing the linestring.
   */
  linestring: function(t) {
    for (var e = this, r = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      r.push(dr.coordinate.apply(e, [t._points._coordinates[i]]));
    return r.join(",");
  },
  linearring: function(t) {
    for (var e = this, r = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      r.push(dr.coordinate.apply(e, [t._points._coordinates[i]]));
    return r.join(",");
  },
  /**
   * Return a comma delimited string of linestring strings from a
   * multilinestring.
   *
   * @param {MultiLineString} multilinestring
   * @return {String} A string of of linestring strings representing the multilinestring.
   */
  multilinestring: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + dr.linestring.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return a comma delimited string of linear ring arrays from a polygon.
   *
   * @param {Polygon} polygon
   * @return {String} An array of linear ring arrays representing the polygon.
   */
  polygon: function(t) {
    var e = this, r = [];
    r.push("(" + dr.linestring.apply(this, [t._shell]) + ")");
    for (var i = 0, o = t._holes.length; i < o; ++i)
      r.push("(" + dr.linestring.apply(e, [t._holes[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return an array of polygon arrays from a multipolygon.
   *
   * @param {MultiPolygon} multipolygon
   * @return {String} An array of polygon arrays representing the multipolygon.
   */
  multipolygon: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + dr.polygon.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an
   * geometrycollection.
   *
   * @param {GeometryCollection} collection
   * @return {String} internal WKT representation of the collection.
   */
  geometrycollection: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push(e.extractGeometry(t._geometries[i]));
    return r.join(",");
  }
}, bn = {
  /**
   * Return point geometry given a point WKT fragment.
   *
   * @param {String} str A WKT fragment representing the point.
   * @return {Point} A point geometry.
   * @private
   */
  point: function(t) {
    if (t === void 0)
      return this.geometryFactory.createPoint();
    var e = t.trim().split(Me.spaces);
    return this.geometryFactory.createPoint(new d(
      Number.parseFloat(e[0]),
      Number.parseFloat(e[1])
    ));
  },
  /**
   * Return a multipoint geometry given a multipoint WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipoint.
   * @return {Point} A multipoint feature.
   * @private
   */
  multipoint: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPoint();
    for (var r, i = t.trim().split(","), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(Me.trimParens, "$1"), o.push(bn.point.apply(e, [r]));
    return this.geometryFactory.createMultiPoint(o);
  },
  /**
   * Return a linestring geometry given a linestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linestring.
   * @return {LineString} A linestring geometry.
   * @private
   */
  linestring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLineString();
    for (var e = t.trim().split(","), r = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(Me.spaces), r.push(new d(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLineString(r);
  },
  /**
   * Return a linearring geometry given a linearring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linearring.
   * @return {LinearRing} A linearring geometry.
   * @private
   */
  linearring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLinearRing();
    for (var e = t.trim().split(","), r = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(Me.spaces), r.push(new d(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLinearRing(r);
  },
  /**
   * Return a multilinestring geometry given a multilinestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multilinestring.
   * @return {MultiLineString} A multilinestring geometry.
   * @private
   */
  multilinestring: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiLineString();
    for (var r, i = t.trim().split(Me.parenComma), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(Me.trimParens, "$1"), o.push(bn.linestring.apply(e, [r]));
    return this.geometryFactory.createMultiLineString(o);
  },
  /**
   * Return a polygon geometry given a polygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the polygon.
   * @return {Polygon} A polygon geometry.
   * @private
   */
  polygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createPolygon();
    for (var r, i, o, s = t.trim().split(Me.parenComma), a, u = [], l = 0, c = s.length; l < c; ++l)
      r = s[l].replace(Me.trimParens, "$1"), i = bn.linestring.apply(e, [r]), o = e.geometryFactory.createLinearRing(i._points), l === 0 ? a = o : u.push(o);
    return this.geometryFactory.createPolygon(a, u);
  },
  /**
   * Return a multipolygon geometry given a multipolygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipolygon.
   * @return {MultiPolygon} A multipolygon geometry.
   * @private
   */
  multipolygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPolygon();
    for (var r, i = t.trim().split(Me.doubleParenComma), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(Me.trimParens, "$1"), o.push(bn.polygon.apply(e, [r]));
    return this.geometryFactory.createMultiPolygon(o);
  },
  /**
   * Return a geometrycollection given a geometrycollection WKT fragment.
   *
   * @param {String} str A WKT fragment representing the geometrycollection.
   * @return {GeometryCollection}
   * @private
   */
  geometrycollection: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createGeometryCollection();
    t = t.replace(/,\s*([A-Za-z])/g, "|$1");
    for (var r = t.trim().split("|"), i = [], o = 0, s = r.length; o < s; ++o)
      i.push(e.read(r[o]));
    return this.geometryFactory.createGeometryCollection(i);
  }
}, xe = function(t) {
  this.parser = new oo(t);
};
xe.prototype.write = function(t) {
  return this.parser.write(t);
};
xe.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var Ir = function(n) {
  function t(e) {
    n.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new n().stack;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(Error), Hi = function(n) {
  function t() {
    if (n.call(this), arguments.length === 0)
      n.call(this);
    else if (arguments.length === 1) {
      var e = arguments[0];
      n.call(this, e);
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ir), V = function() {
};
V.prototype.interfaces_ = function() {
  return [];
};
V.prototype.getClass = function() {
  return V;
};
V.shouldNeverReachHere = function() {
  if (arguments.length === 0)
    V.shouldNeverReachHere(null);
  else if (arguments.length === 1) {
    var t = arguments[0];
    throw new Hi("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
V.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], V.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new Hi() : new Hi(e);
};
V.equals = function() {
  var t, e, r;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], V.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], r = arguments[2], !e.equals(t)))
    throw new Hi("Expected " + t + " but encountered " + e + (r !== null ? ": " + r : ""));
};
var ot = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new d(), this._intPt[1] = new d(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, Cn = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
ot.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
ot.prototype.getTopologySummary = function() {
  var t = new Je();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
ot.prototype.computeIntersection = function(t, e, r, i) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = r, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, r, i);
};
ot.prototype.getIntersectionNum = function() {
  return this._result;
};
ot.prototype.computeIntLineIndex = function() {
  if (arguments.length === 0)
    this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
      return Array(2);
    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
  else if (arguments.length === 1) {
    var t = arguments[0], e = this.getEdgeDistance(t, 0), r = this.getEdgeDistance(t, 1);
    e > r ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
  }
};
ot.prototype.isProper = function() {
  return this.hasIntersection() && this._isProper;
};
ot.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
ot.prototype.isInteriorIntersection = function() {
  var t = this;
  if (arguments.length === 0)
    return !!(this.isInteriorIntersection(0) || this.isInteriorIntersection(1));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0; r < this._result; r++)
      if (!(t._intPt[r].equals2D(t._inputLines[e][0]) || t._intPt[r].equals2D(t._inputLines[e][1])))
        return !0;
    return !1;
  }
};
ot.prototype.getIntersection = function(t) {
  return this._intPt[t];
};
ot.prototype.isEndPoint = function() {
  return this.hasIntersection() && !this._isProper;
};
ot.prototype.hasIntersection = function() {
  return this._result !== ot.NO_INTERSECTION;
};
ot.prototype.getEdgeDistance = function(t, e) {
  var r = ot.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return r;
};
ot.prototype.isCollinear = function() {
  return this._result === ot.COLLINEAR_INTERSECTION;
};
ot.prototype.toString = function() {
  return xe.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + xe.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
ot.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
ot.prototype.isIntersection = function(t) {
  for (var e = this, r = 0; r < this._result; r++)
    if (e._intPt[r].equals2D(t))
      return !0;
  return !1;
};
ot.prototype.getIntersectionAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
};
ot.prototype.interfaces_ = function() {
  return [];
};
ot.prototype.getClass = function() {
  return ot;
};
ot.computeEdgeDistance = function(t, e, r) {
  var i = Math.abs(r.x - e.x), o = Math.abs(r.y - e.y), s = -1;
  if (t.equals(e))
    s = 0;
  else if (t.equals(r))
    i > o ? s = i : s = o;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    i > o ? s = a : s = u, s === 0 && !t.equals(e) && (s = Math.max(a, u));
  }
  return V.isTrue(!(s === 0 && !t.equals(e)), "Bad distance calculation"), s;
};
ot.nonRobustComputeEdgeDistance = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = Math.sqrt(i * i + o * o);
  return V.isTrue(!(s === 0 && !t.equals(e)), "Invalid distance calculation"), s;
};
Cn.DONT_INTERSECT.get = function() {
  return 0;
};
Cn.DO_INTERSECT.get = function() {
  return 1;
};
Cn.COLLINEAR.get = function() {
  return 2;
};
Cn.NO_INTERSECTION.get = function() {
  return 0;
};
Cn.POINT_INTERSECTION.get = function() {
  return 1;
};
Cn.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(ot, Cn);
var sn = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(r) {
    var i = new R(this._inputLines[0][0], this._inputLines[0][1]), o = new R(this._inputLines[1][0], this._inputLines[1][1]);
    return i.contains(r) && o.contains(r);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var r = arguments[0], i = arguments[1], o = arguments[2];
      if (this._isProper = !1, R.intersects(i, o, r) && L.orientationIndex(i, o, r) === 0 && L.orientationIndex(o, i, r) === 0)
        return this._isProper = !0, (r.equals(i) || r.equals(o)) && (this._isProper = !1), this._result = n.POINT_INTERSECTION, null;
      this._result = n.NO_INTERSECTION;
    } else
      return n.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(r, i, o, s, a) {
    a.x = this.smallestInAbsValue(r.x, i.x, o.x, s.x), a.y = this.smallestInAbsValue(r.y, i.y, o.y, s.y), r.x -= a.x, r.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(r, i, o, s) {
    var a = null;
    try {
      a = Ce.intersection(r, i, o, s);
    } catch (u) {
      if (u instanceof $n)
        a = t.nearestEndpoint(r, i, o, s);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(r, i, o, s) {
    var a = this.intersectionWithNormalization(r, i, o, s);
    return this.isInSegmentEnvelopes(a) || (a = new d(t.nearestEndpoint(r, i, o, s))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(r, i, o, s) {
    var a = r, u = Math.abs(a);
    return Math.abs(i) < u && (a = i, u = Math.abs(i)), Math.abs(o) < u && (a = o, u = Math.abs(o)), Math.abs(s) < u && (a = s), a;
  }, t.prototype.checkDD = function(r, i, o, s, a) {
    var u = Kt.intersection(r, i, o, s), l = this.isInSegmentEnvelopes(u);
    Rt.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && Rt.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(r, i, o, s) {
    var a = new d(r), u = new d(i), l = new d(o), c = new d(s), f = new d();
    this.normalizeToEnvCentre(a, u, l, c, f);
    var h = this.safeHCoordinateIntersection(a, u, l, c);
    return h.x += f.x, h.y += f.y, h;
  }, t.prototype.computeCollinearIntersection = function(r, i, o, s) {
    var a = R.intersects(r, i, o), u = R.intersects(r, i, s), l = R.intersects(o, s, r), c = R.intersects(o, s, i);
    return a && u ? (this._intPt[0] = o, this._intPt[1] = s, n.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = r, this._intPt[1] = i, n.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = o, this._intPt[1] = r, o.equals(r) && !u && !c ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = o, this._intPt[1] = i, o.equals(i) && !u && !l ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = s, this._intPt[1] = r, s.equals(r) && !a && !c ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = s, this._intPt[1] = i, s.equals(i) && !a && !l ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : n.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(r, i, o, s, a) {
    var u = r.x < i.x ? r.x : i.x, l = r.y < i.y ? r.y : i.y, c = r.x > i.x ? r.x : i.x, f = r.y > i.y ? r.y : i.y, h = o.x < s.x ? o.x : s.x, p = o.y < s.y ? o.y : s.y, g = o.x > s.x ? o.x : s.x, y = o.y > s.y ? o.y : s.y, m = u > h ? u : h, _ = c < g ? c : g, I = l > p ? l : p, C = f < y ? f : y, x = (m + _) / 2, b = (I + C) / 2;
    a.x = x, a.y = b, r.x -= a.x, r.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.computeIntersect = function(r, i, o, s) {
    if (this._isProper = !1, !R.intersects(r, i, o, s))
      return n.NO_INTERSECTION;
    var a = L.orientationIndex(r, i, o), u = L.orientationIndex(r, i, s);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return n.NO_INTERSECTION;
    var l = L.orientationIndex(o, s, r), c = L.orientationIndex(o, s, i);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return n.NO_INTERSECTION;
    var f = a === 0 && u === 0 && l === 0 && c === 0;
    return f ? this.computeCollinearIntersection(r, i, o, s) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, r.equals2D(o) || r.equals2D(s) ? this._intPt[0] = r : i.equals2D(o) || i.equals2D(s) ? this._intPt[0] = i : a === 0 ? this._intPt[0] = new d(o) : u === 0 ? this._intPt[0] = new d(s) : l === 0 ? this._intPt[0] = new d(r) : c === 0 && (this._intPt[0] = new d(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(r, i, o, s)), n.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(r, i, o, s) {
    var a = r, u = L.distancePointLine(r, o, s), l = L.distancePointLine(i, o, s);
    return l < u && (u = l, a = i), l = L.distancePointLine(o, r, i), l < u && (u = l, a = o), l = L.distancePointLine(s, r, i), l < u && (u = l, a = s), a;
  }, t;
}(ot), cn = function() {
};
cn.prototype.interfaces_ = function() {
  return [];
};
cn.prototype.getClass = function() {
  return cn;
};
cn.orientationIndex = function(t, e, r) {
  var i = e.x - t.x, o = e.y - t.y, s = r.x - e.x, a = r.y - e.y;
  return cn.signOfDet2x2(i, o, s, a);
};
cn.signOfDet2x2 = function(t, e, r, i) {
  var o = null, s = null, a = null;
  if (o = 1, t === 0 || i === 0)
    return e === 0 || r === 0 ? 0 : e > 0 ? r > 0 ? -o : o : r > 0 ? o : -o;
  if (e === 0 || r === 0)
    return i > 0 ? t > 0 ? o : -o : t > 0 ? -o : o;
  if (e > 0 ? i > 0 ? e <= i || (o = -o, s = t, t = r, r = s, s = e, e = i, i = s) : e <= -i ? (o = -o, r = -r, i = -i) : (s = t, t = -r, r = s, s = e, e = -i, i = s) : i > 0 ? -e <= i ? (o = -o, t = -t, e = -e) : (s = -t, t = r, r = s, s = -e, e = i, i = s) : e >= i ? (t = -t, e = -e, r = -r, i = -i) : (o = -o, s = -t, t = -r, r = s, s = -e, e = -i, i = s), t > 0)
    if (r > 0) {
      if (!(t <= r))
        return o;
    } else
      return o;
  else {
    if (r > 0)
      return -o;
    if (t >= r)
      o = -o, t = -t, r = -r;
    else
      return -o;
  }
  for (; ; ) {
    if (a = Math.floor(r / t), r = r - a * t, i = i - a * e, i < 0)
      return -o;
    if (i > e)
      return o;
    if (t > r + r) {
      if (e < i + i)
        return o;
    } else {
      if (e > i + i)
        return -o;
      r = t - r, i = e - i, o = -o;
    }
    if (i === 0)
      return r === 0 ? 0 : -o;
    if (r === 0 || (a = Math.floor(t / r), t = t - a * r, e = e - a * i, e < 0))
      return o;
    if (e > i)
      return -o;
    if (r > t + t) {
      if (i < e + e)
        return -o;
    } else {
      if (i > e + e)
        return o;
      t = r - t, e = i - e, o = -o;
    }
    if (e === 0)
      return t === 0 ? 0 : o;
    if (t === 0)
      return -o;
  }
};
var Ge = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
Ge.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var r = t.x, i = e.x;
    return r > i && (r = e.x, i = t.x), this._p.x >= r && this._p.x <= i && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var o = t.x - this._p.x, s = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = cn.signOfDet2x2(o, s, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < s && (l = -l), l > 0 && this._crossingCount++;
  }
};
Ge.prototype.isPointInPolygon = function() {
  return this.getLocation() !== v.EXTERIOR;
};
Ge.prototype.getLocation = function() {
  return this._isPointOnSegment ? v.BOUNDARY : this._crossingCount % 2 === 1 ? v.INTERIOR : v.EXTERIOR;
};
Ge.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
Ge.prototype.interfaces_ = function() {
  return [];
};
Ge.prototype.getClass = function() {
  return Ge;
};
Ge.locatePointInRing = function() {
  if (arguments[0] instanceof d && M(arguments[1], q)) {
    for (var t = arguments[0], e = arguments[1], r = new Ge(t), i = new d(), o = new d(), s = 1; s < e.size(); s++)
      if (e.getCoordinate(s, i), e.getCoordinate(s - 1, o), r.countSegment(i, o), r.isOnSegment())
        return r.getLocation();
    return r.getLocation();
  } else if (arguments[0] instanceof d && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new Ge(a), c = 1; c < u.length; c++) {
      var f = u[c], h = u[c - 1];
      if (l.countSegment(f, h), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var L = function() {
}, Nn = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
L.prototype.interfaces_ = function() {
  return [];
};
L.prototype.getClass = function() {
  return L;
};
L.orientationIndex = function(t, e, r) {
  return Kt.orientationIndex(t, e, r);
};
L.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, r = t[0].x, i = 1; i < t.length - 1; i++) {
      var o = t[i].x - r, s = t[i + 1].y, a = t[i - 1].y;
      e += o * (a - s);
    }
    return e / 2;
  } else if (M(arguments[0], q)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new d(), f = new d(), h = new d();
    u.getCoordinate(0, f), u.getCoordinate(1, h);
    var p = f.x;
    h.x -= p;
    for (var g = 0, y = 1; y < l - 1; y++)
      c.y = f.y, f.x = h.x, f.y = h.y, u.getCoordinate(y + 1, h), h.x -= p, g += f.x * (c.y - h.y);
    return g / 2;
  }
};
L.distanceLineLine = function(t, e, r, i) {
  if (t.equals(e))
    return L.distancePointLine(t, r, i);
  if (r.equals(i))
    return L.distancePointLine(i, t, e);
  var o = !1;
  if (!R.intersects(t, e, r, i))
    o = !0;
  else {
    var s = (e.x - t.x) * (i.y - r.y) - (e.y - t.y) * (i.x - r.x);
    if (s === 0)
      o = !0;
    else {
      var a = (t.y - r.y) * (i.x - r.x) - (t.x - r.x) * (i.y - r.y), u = (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y), l = u / s, c = a / s;
      (c < 0 || c > 1 || l < 0 || l > 1) && (o = !0);
    }
  }
  return o ? ue.min(L.distancePointLine(t, r, i), L.distancePointLine(e, r, i), L.distancePointLine(r, t, e), L.distancePointLine(i, t, e)) : 0;
};
L.isPointInRing = function(t, e) {
  return L.locatePointInRing(t, e) !== v.EXTERIOR;
};
L.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var r = 0, i = new d();
  t.getCoordinate(0, i);
  for (var o = i.x, s = i.y, a = 1; a < e; a++) {
    t.getCoordinate(a, i);
    var u = i.x, l = i.y, c = u - o, f = l - s;
    r += Math.sqrt(c * c + f * f), o = u, s = l;
  }
  return r;
};
L.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new it("Ring has fewer than 4 points, so orientation cannot be determined");
  for (var r = t[0], i = 0, o = 1; o <= e; o++) {
    var s = t[o];
    s.y > r.y && (r = s, i = o);
  }
  var a = i;
  do
    a = a - 1, a < 0 && (a = e);
  while (t[a].equals2D(r) && a !== i);
  var u = i;
  do
    u = (u + 1) % e;
  while (t[u].equals2D(r) && u !== i);
  var l = t[a], c = t[u];
  if (l.equals2D(r) || c.equals2D(r) || l.equals2D(c))
    return !1;
  var f = L.computeOrientation(l, r, c), h = !1;
  return f === 0 ? h = l.x > c.x : h = f > 0, h;
};
L.locatePointInRing = function(t, e) {
  return Ge.locatePointInRing(t, e);
};
L.distancePointLinePerpendicular = function(t, e, r) {
  var i = (r.x - e.x) * (r.x - e.x) + (r.y - e.y) * (r.y - e.y), o = ((e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)) / i;
  return Math.abs(o) * Math.sqrt(i);
};
L.computeOrientation = function(t, e, r) {
  return L.orientationIndex(t, e, r);
};
L.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new it("Line array must contain at least one vertex");
    for (var r = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
      var o = L.distancePointLine(t, e[i], e[i + 1]);
      o < r && (r = o);
    }
    return r;
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    if (a.x === u.x && a.y === u.y)
      return s.distance(a);
    var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y), c = ((s.x - a.x) * (u.x - a.x) + (s.y - a.y) * (u.y - a.y)) / l;
    if (c <= 0)
      return s.distance(a);
    if (c >= 1)
      return s.distance(u);
    var f = ((a.y - s.y) * (u.x - a.x) - (a.x - s.x) * (u.y - a.y)) / l;
    return Math.abs(f) * Math.sqrt(l);
  }
};
L.isOnLine = function(t, e) {
  for (var r = new sn(), i = 1; i < e.length; i++) {
    var o = e[i - 1], s = e[i];
    if (r.computeIntersection(t, o, s), r.hasIntersection())
      return !0;
  }
  return !1;
};
Nn.CLOCKWISE.get = function() {
  return -1;
};
Nn.RIGHT.get = function() {
  return L.CLOCKWISE;
};
Nn.COUNTERCLOCKWISE.get = function() {
  return 1;
};
Nn.LEFT.get = function() {
  return L.COUNTERCLOCKWISE;
};
Nn.COLLINEAR.get = function() {
  return 0;
};
Nn.STRAIGHT.get = function() {
  return L.COLLINEAR;
};
Object.defineProperties(L, Nn);
var Cr = function() {
};
Cr.prototype.filter = function(t) {
};
Cr.prototype.interfaces_ = function() {
  return [];
};
Cr.prototype.getClass = function() {
  return Cr;
};
var T = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, hr = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
T.prototype.isGeometryCollection = function() {
  return this.getSortIndex() === T.SORTINDEX_GEOMETRYCOLLECTION;
};
T.prototype.getFactory = function() {
  return this._factory;
};
T.prototype.getGeometryN = function(t) {
  return this;
};
T.prototype.getArea = function() {
  return 0;
};
T.prototype.isRectangle = function() {
  return !1;
};
T.prototype.equals = function() {
  if (arguments[0] instanceof T) {
    var t = arguments[0];
    return t === null ? !1 : this.equalsTopo(t);
  } else if (arguments[0] instanceof Object) {
    var e = arguments[0];
    if (!(e instanceof T))
      return !1;
    var r = e;
    return this.equalsExact(r);
  }
};
T.prototype.equalsExact = function(t) {
  return this === t || this.equalsExact(t, 0);
};
T.prototype.geometryChanged = function() {
  this.apply(T.geometryChangedFilter);
};
T.prototype.geometryChangedAction = function() {
  this._envelope = null;
};
T.prototype.equalsNorm = function(t) {
  return t === null ? !1 : this.norm().equalsExact(t.norm());
};
T.prototype.getLength = function() {
  return 0;
};
T.prototype.getNumGeometries = function() {
  return 1;
};
T.prototype.compareTo = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t;
    return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.getSortIndex() !== r.getSortIndex() ? this.getSortIndex() - r.getSortIndex() : this.isEmpty() && r.isEmpty() ? 0 : this.isEmpty() ? -1 : r.isEmpty() ? 1 : this.compareToSameClass(r, i);
  }
};
T.prototype.getUserData = function() {
  return this._userData;
};
T.prototype.getSRID = function() {
  return this._SRID;
};
T.prototype.getEnvelope = function() {
  return this.getFactory().toGeometry(this.getEnvelopeInternal());
};
T.prototype.checkNotGeometryCollection = function(t) {
  if (t.getSortIndex() === T.SORTINDEX_GEOMETRYCOLLECTION)
    throw new it("This method does not support GeometryCollection arguments");
};
T.prototype.equal = function(t, e, r) {
  return r === 0 ? t.equals(e) : t.distance(e) <= r;
};
T.prototype.norm = function() {
  var t = this.copy();
  return t.normalize(), t;
};
T.prototype.getPrecisionModel = function() {
  return this._factory.getPrecisionModel();
};
T.prototype.getEnvelopeInternal = function() {
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new R(this._envelope);
};
T.prototype.setSRID = function(t) {
  this._SRID = t;
};
T.prototype.setUserData = function(t) {
  this._userData = t;
};
T.prototype.compare = function(t, e) {
  for (var r = t.iterator(), i = e.iterator(); r.hasNext() && i.hasNext(); ) {
    var o = r.next(), s = i.next(), a = o.compareTo(s);
    if (a !== 0)
      return a;
  }
  return r.hasNext() ? 1 : i.hasNext() ? -1 : 0;
};
T.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
T.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === T.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === T.SORTINDEX_MULTIPOINT || this.getSortIndex() === T.SORTINDEX_MULTILINESTRING || this.getSortIndex() === T.SORTINDEX_MULTIPOLYGON;
};
T.prototype.interfaces_ = function() {
  return [io, Ee, Ie];
};
T.prototype.getClass = function() {
  return T;
};
T.hasNonEmptyElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (!t[e].isEmpty())
      return !0;
  return !1;
};
T.hasNullElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e] === null)
      return !0;
  return !1;
};
hr.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
hr.SORTINDEX_POINT.get = function() {
  return 0;
};
hr.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
hr.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
hr.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
hr.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
hr.SORTINDEX_POLYGON.get = function() {
  return 5;
};
hr.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
hr.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
hr.geometryChangedFilter.get = function() {
  return ko;
};
Object.defineProperties(T, hr);
var ko = function() {
};
ko.interfaces_ = function() {
  return [Cr];
};
ko.filter = function(t) {
  t.geometryChangedAction();
};
var nr = function() {
};
nr.prototype.filter = function(t) {
};
nr.prototype.interfaces_ = function() {
  return [];
};
nr.prototype.getClass = function() {
  return nr;
};
var ye = function() {
}, wr = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
ye.prototype.isInBoundary = function(t) {
};
ye.prototype.interfaces_ = function() {
  return [];
};
ye.prototype.getClass = function() {
  return ye;
};
wr.Mod2BoundaryNodeRule.get = function() {
  return Tn;
};
wr.EndPointBoundaryNodeRule.get = function() {
  return Mn;
};
wr.MultiValentEndPointBoundaryNodeRule.get = function() {
  return An;
};
wr.MonoValentEndPointBoundaryNodeRule.get = function() {
  return Fn;
};
wr.MOD2_BOUNDARY_RULE.get = function() {
  return new Tn();
};
wr.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Mn();
};
wr.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new An();
};
wr.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Fn();
};
wr.OGC_SFS_BOUNDARY_RULE.get = function() {
  return ye.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(ye, wr);
var Tn = function() {
};
Tn.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
Tn.prototype.interfaces_ = function() {
  return [ye];
};
Tn.prototype.getClass = function() {
  return Tn;
};
var Mn = function() {
};
Mn.prototype.isInBoundary = function(t) {
  return t > 0;
};
Mn.prototype.interfaces_ = function() {
  return [ye];
};
Mn.prototype.getClass = function() {
  return Mn;
};
var An = function() {
};
An.prototype.isInBoundary = function(t) {
  return t > 1;
};
An.prototype.interfaces_ = function() {
  return [ye];
};
An.prototype.getClass = function() {
  return An;
};
var Fn = function() {
};
Fn.prototype.isInBoundary = function(t) {
  return t === 1;
};
Fn.prototype.interfaces_ = function() {
  return [ye];
};
Fn.prototype.getClass = function() {
  return Fn;
};
var _t = function() {
};
_t.prototype.add = function() {
};
_t.prototype.addAll = function() {
};
_t.prototype.isEmpty = function() {
};
_t.prototype.iterator = function() {
};
_t.prototype.size = function() {
};
_t.prototype.toArray = function() {
};
_t.prototype.remove = function() {
};
function zo(n) {
  this.message = n || "";
}
zo.prototype = new Error();
zo.prototype.name = "IndexOutOfBoundsException";
var ti = function() {
};
ti.prototype.hasNext = function() {
};
ti.prototype.next = function() {
};
ti.prototype.remove = function() {
};
var Ne = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(_t);
function ei(n) {
  this.message = n || "";
}
ei.prototype = new Error();
ei.prototype.name = "NoSuchElementException";
var S = function(n) {
  function t() {
    n.call(this), this.array_ = [], arguments[0] instanceof _t && this.addAll(arguments[0]);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [n, _t];
  }, t.prototype.add = function(r) {
    return arguments.length === 1 ? this.array_.push(r) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, t.prototype.clear = function() {
    this.array_ = [];
  }, t.prototype.addAll = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.set = function(r, i) {
    var o = this.array_[r];
    return this.array_[r] = i, o;
  }, t.prototype.iterator = function() {
    return new Ou(this);
  }, t.prototype.get = function(r) {
    if (r < 0 || r >= this.size())
      throw new zo();
    return this.array_[r];
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.toArray = function() {
    for (var r = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(r.array_[o]);
    return i;
  }, t.prototype.remove = function(r) {
    for (var i = this, o = !1, s = 0, a = this.array_.length; s < a; s++)
      if (i.array_[s] === r) {
        i.array_.splice(s, 1), o = !0;
        break;
      }
    return o;
  }, t;
}(Ne), Ou = function(n) {
  function t(e) {
    n.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new ei();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(r) {
    return this.arrayList_.set(this.position_ - 1, r);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(ti), Pi = function(n) {
  function t() {
    if (n.call(this), arguments.length !== 0) {
      if (arguments.length === 1) {
        var r = arguments[0];
        this.ensureCapacity(r.length), this.add(r, !0);
      } else if (arguments.length === 2) {
        var i = arguments[0], o = arguments[1];
        this.ensureCapacity(i.length), this.add(i, o);
      }
    }
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { coordArrayType: { configurable: !0 } };
  return e.coordArrayType.get = function() {
    return new Array(0).fill(null);
  }, t.prototype.getCoordinate = function(i) {
    return this.get(i);
  }, t.prototype.addAll = function() {
    var i = this;
    if (arguments.length === 2) {
      for (var o = arguments[0], s = arguments[1], a = !1, u = o.iterator(); u.hasNext(); )
        i.add(u.next(), s), a = !0;
      return a;
    } else
      return n.prototype.addAll.apply(this, arguments);
  }, t.prototype.clone = function() {
    for (var i = this, o = n.prototype.clone.call(this), s = 0; s < this.size(); s++)
      o.add(s, i.get(s).copy());
    return o;
  }, t.prototype.toCoordinateArray = function() {
    return this.toArray(t.coordArrayType);
  }, t.prototype.add = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0];
      n.prototype.add.call(this, o);
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var s = arguments[0], a = arguments[1];
        return this.add(s, a, !0), !0;
      } else if (arguments[0] instanceof d && typeof arguments[1] == "boolean") {
        var u = arguments[0], l = arguments[1];
        if (!l && this.size() >= 1) {
          var c = this.get(this.size() - 1);
          if (c.equals2D(u))
            return null;
        }
        n.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var f = arguments[0], h = arguments[1];
        return this.add(f, h), !0;
      }
    } else if (arguments.length === 3) {
      if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var p = arguments[0], g = arguments[1], y = arguments[2];
        if (y)
          for (var m = 0; m < p.length; m++)
            i.add(p[m], g);
        else
          for (var _ = p.length - 1; _ >= 0; _--)
            i.add(p[_], g);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof d) {
        var I = arguments[0], C = arguments[1], x = arguments[2];
        if (!x) {
          var b = this.size();
          if (b > 0) {
            if (I > 0) {
              var P = this.get(I - 1);
              if (P.equals2D(C))
                return null;
            }
            if (I < b) {
              var D = this.get(I);
              if (D.equals2D(C))
                return null;
            }
          }
        }
        n.prototype.add.call(this, I, C);
      }
    } else if (arguments.length === 4) {
      var G = arguments[0], A = arguments[1], et = arguments[2], K = arguments[3], nt = 1;
      et > K && (nt = -1);
      for (var ct = et; ct !== K; ct += nt)
        i.add(G[ct], A);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new d(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(S), z = function() {
}, so = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
so.ForwardComparator.get = function() {
  return pi;
};
so.BidirectionalComparator.get = function() {
  return Bn;
};
so.coordArrayType.get = function() {
  return new Array(0).fill(null);
};
z.prototype.interfaces_ = function() {
  return [];
};
z.prototype.getClass = function() {
  return z;
};
z.isRing = function(t) {
  return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]));
};
z.ptNotInList = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (z.indexOf(i, e) < 0)
      return i;
  }
  return null;
};
z.scroll = function(t, e) {
  var r = z.indexOf(e, t);
  if (r < 0)
    return null;
  var i = new Array(t.length).fill(null);
  Rt.arraycopy(t, r, i, 0, t.length - r), Rt.arraycopy(t, 0, i, t.length - r, r), Rt.arraycopy(i, 0, t, 0, t.length);
};
z.equals = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (t === e)
      return !0;
    if (t === null || e === null || t.length !== e.length)
      return !1;
    for (var r = 0; r < t.length; r++)
      if (!t[r].equals(e[r]))
        return !1;
    return !0;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (i === o)
      return !0;
    if (i === null || o === null || i.length !== o.length)
      return !1;
    for (var a = 0; a < i.length; a++)
      if (s.compare(i[a], o[a]) !== 0)
        return !1;
    return !0;
  }
};
z.intersection = function(t, e) {
  for (var r = new Pi(), i = 0; i < t.length; i++)
    e.intersects(t[i]) && r.add(t[i], !0);
  return r.toCoordinateArray();
};
z.hasRepeatedPoints = function(t) {
  for (var e = 1; e < t.length; e++)
    if (t[e - 1].equals(t[e]))
      return !0;
  return !1;
};
z.removeRepeatedPoints = function(t) {
  if (!z.hasRepeatedPoints(t))
    return t;
  var e = new Pi(t, !1);
  return e.toCoordinateArray();
};
z.reverse = function(t) {
  for (var e = t.length - 1, r = Math.trunc(e / 2), i = 0; i <= r; i++) {
    var o = t[i];
    t[i] = t[e - i], t[e - i] = o;
  }
};
z.removeNull = function(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    t[r] !== null && e++;
  var i = new Array(e).fill(null);
  if (e === 0)
    return i;
  for (var o = 0, s = 0; s < t.length; s++)
    t[s] !== null && (i[o++] = t[s]);
  return i;
};
z.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), r = 0; r < t.length; r++)
      e[r] = new d(t[r]);
    return e;
  } else if (arguments.length === 5)
    for (var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      s[a + l] = new d(i[o + l]);
};
z.isEqualReversed = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r], o = e[t.length - r - 1];
    if (i.compareTo(o) !== 0)
      return !1;
  }
  return !0;
};
z.envelope = function(t) {
  for (var e = new R(), r = 0; r < t.length; r++)
    e.expandToInclude(t[r]);
  return e;
};
z.toCoordinateArray = function(t) {
  return t.toArray(z.coordArrayType);
};
z.atLeastNCoordinatesOrNothing = function(t, e) {
  return e.length >= t ? e : [];
};
z.indexOf = function(t, e) {
  for (var r = 0; r < e.length; r++)
    if (t.equals(e[r]))
      return r;
  return -1;
};
z.increasingDirection = function(t) {
  for (var e = 0; e < Math.trunc(t.length / 2); e++) {
    var r = t.length - 1 - e, i = t[e].compareTo(t[r]);
    if (i !== 0)
      return i;
  }
  return 1;
};
z.compare = function(t, e) {
  for (var r = 0; r < t.length && r < e.length; ) {
    var i = t[r].compareTo(e[r]);
    if (i !== 0)
      return i;
    r++;
  }
  return r < e.length ? -1 : r < t.length ? 1 : 0;
};
z.minCoordinate = function(t) {
  for (var e = null, r = 0; r < t.length; r++)
    (e === null || e.compareTo(t[r]) > 0) && (e = t[r]);
  return e;
};
z.extract = function(t, e, r) {
  e = ue.clamp(e, 0, t.length), r = ue.clamp(r, -1, t.length);
  var i = r - e + 1;
  r < 0 && (i = 0), e >= t.length && (i = 0), r < e && (i = 0);
  var o = new Array(i).fill(null);
  if (i === 0)
    return o;
  for (var s = 0, a = e; a <= r; a++)
    o[s++] = t[a];
  return o;
};
Object.defineProperties(z, so);
var pi = function() {
};
pi.prototype.compare = function(t, e) {
  var r = t, i = e;
  return z.compare(r, i);
};
pi.prototype.interfaces_ = function() {
  return [On];
};
pi.prototype.getClass = function() {
  return pi;
};
var Bn = function() {
};
Bn.prototype.compare = function(t, e) {
  var r = t, i = e;
  if (r.length < i.length)
    return -1;
  if (r.length > i.length)
    return 1;
  if (r.length === 0)
    return 0;
  var o = z.compare(r, i), s = z.isEqualReversed(r, i);
  return s ? 0 : o;
};
Bn.prototype.OLDcompare = function(t, e) {
  var r = t, i = e;
  if (r.length < i.length)
    return -1;
  if (r.length > i.length)
    return 1;
  if (r.length === 0)
    return 0;
  for (var o = z.increasingDirection(r), s = z.increasingDirection(i), a = o > 0 ? 0 : r.length - 1, u = s > 0 ? 0 : r.length - 1, l = 0; l < r.length; l++) {
    var c = r[a].compareTo(i[u]);
    if (c !== 0)
      return c;
    a += o, u += s;
  }
  return 0;
};
Bn.prototype.interfaces_ = function() {
  return [On];
};
Bn.prototype.getClass = function() {
  return Bn;
};
var xn = function() {
};
xn.prototype.get = function() {
};
xn.prototype.put = function() {
};
xn.prototype.size = function() {
};
xn.prototype.values = function() {
};
xn.prototype.entrySet = function() {
};
var Du = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(xn);
function bi(n) {
  this.message = n || "";
}
bi.prototype = new Error();
bi.prototype.name = "OperationNotSupported";
function ao() {
}
ao.prototype = new _t();
ao.prototype.contains = function() {
};
var Uo = function(n) {
  function t() {
    n.call(this), this.array_ = [], arguments[0] instanceof _t && this.addAll(arguments[0]);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.contains = function(r) {
    for (var i = this, o = 0, s = this.array_.length; o < s; o++) {
      var a = i.array_[o];
      if (a === r)
        return !0;
    }
    return !1;
  }, t.prototype.add = function(r) {
    return this.contains(r) ? !1 : (this.array_.push(r), !0);
  }, t.prototype.addAll = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.remove = function(r) {
    throw new Error();
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.toArray = function() {
    for (var r = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(r.array_[o]);
    return i;
  }, t.prototype.iterator = function() {
    return new Tu(this);
  }, t;
}(ao), Tu = function(n) {
  function t(e) {
    n.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new ei();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new bi();
  }, t;
}(ti), mr = 0, qr = 1;
function ms(n) {
  return n === null ? mr : n.color;
}
function $(n) {
  return n === null ? null : n.parent;
}
function gr(n, t) {
  n !== null && (n.color = t);
}
function _o(n) {
  return n === null ? null : n.left;
}
function _s(n) {
  return n === null ? null : n.right;
}
function At() {
  this.root_ = null, this.size_ = 0;
}
At.prototype = new Du();
At.prototype.get = function(n) {
  for (var t = this.root_; t !== null; ) {
    var e = n.compareTo(t.key);
    if (e < 0)
      t = t.left;
    else if (e > 0)
      t = t.right;
    else
      return t.value;
  }
  return null;
};
At.prototype.put = function(n, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: n,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: mr,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    }, this.size_ = 1, null;
  var e = this.root_, r, i;
  do
    if (r = e, i = n.compareTo(e.key), i < 0)
      e = e.left;
    else if (i > 0)
      e = e.right;
    else {
      var o = e.value;
      return e.value = t, o;
    }
  while (e !== null);
  var s = {
    key: n,
    left: null,
    right: null,
    value: t,
    parent: r,
    color: mr,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return i < 0 ? r.left = s : r.right = s, this.fixAfterInsertion(s), this.size_++, null;
};
At.prototype.fixAfterInsertion = function(n) {
  var t = this;
  for (n.color = qr; n != null && n !== this.root_ && n.parent.color === qr; )
    if ($(n) === _o($($(n)))) {
      var e = _s($($(n)));
      ms(e) === qr ? (gr($(n), mr), gr(e, mr), gr($($(n)), qr), n = $($(n))) : (n === _s($(n)) && (n = $(n), t.rotateLeft(n)), gr($(n), mr), gr($($(n)), qr), t.rotateRight($($(n))));
    } else {
      var r = _o($($(n)));
      ms(r) === qr ? (gr($(n), mr), gr(r, mr), gr($($(n)), qr), n = $($(n))) : (n === _o($(n)) && (n = $(n), t.rotateRight(n)), gr($(n), mr), gr($($(n)), qr), t.rotateLeft($($(n))));
    }
  this.root_.color = mr;
};
At.prototype.values = function() {
  var n = new S(), t = this.getFirstEntry();
  if (t !== null)
    for (n.add(t.value); (t = At.successor(t)) !== null; )
      n.add(t.value);
  return n;
};
At.prototype.entrySet = function() {
  var n = new Uo(), t = this.getFirstEntry();
  if (t !== null)
    for (n.add(t); (t = At.successor(t)) !== null; )
      n.add(t);
  return n;
};
At.prototype.rotateLeft = function(n) {
  if (n != null) {
    var t = n.right;
    n.right = t.left, t.left != null && (t.left.parent = n), t.parent = n.parent, n.parent === null ? this.root_ = t : n.parent.left === n ? n.parent.left = t : n.parent.right = t, t.left = n, n.parent = t;
  }
};
At.prototype.rotateRight = function(n) {
  if (n != null) {
    var t = n.left;
    n.left = t.right, t.right != null && (t.right.parent = n), t.parent = n.parent, n.parent === null ? this.root_ = t : n.parent.right === n ? n.parent.right = t : n.parent.left = t, t.right = n, n.parent = t;
  }
};
At.prototype.getFirstEntry = function() {
  var n = this.root_;
  if (n != null)
    for (; n.left != null; )
      n = n.left;
  return n;
};
At.successor = function(n) {
  if (n === null)
    return null;
  if (n.right !== null) {
    for (var t = n.right; t.left !== null; )
      t = t.left;
    return t;
  } else {
    for (var e = n.parent, r = n; e !== null && r === e.right; )
      r = e, e = e.parent;
    return e;
  }
};
At.prototype.size = function() {
  return this.size_;
};
var gi = function() {
};
gi.prototype.interfaces_ = function() {
  return [];
};
gi.prototype.getClass = function() {
  return gi;
};
function na() {
}
na.prototype = new ao();
function ze() {
  this.array_ = [], arguments[0] instanceof _t && this.addAll(arguments[0]);
}
ze.prototype = new na();
ze.prototype.contains = function(n) {
  for (var t = this, e = 0, r = this.array_.length; e < r; e++) {
    var i = t.array_[e];
    if (i.compareTo(n) === 0)
      return !0;
  }
  return !1;
};
ze.prototype.add = function(n) {
  var t = this;
  if (this.contains(n))
    return !1;
  for (var e = 0, r = this.array_.length; e < r; e++) {
    var i = t.array_[e];
    if (i.compareTo(n) === 1)
      return t.array_.splice(e, 0, n), !0;
  }
  return this.array_.push(n), !0;
};
ze.prototype.addAll = function(n) {
  for (var t = this, e = n.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
ze.prototype.remove = function(n) {
  throw new bi();
};
ze.prototype.size = function() {
  return this.array_.length;
};
ze.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
ze.prototype.toArray = function() {
  for (var n = this, t = [], e = 0, r = this.array_.length; e < r; e++)
    t.push(n.array_[e]);
  return t;
};
ze.prototype.iterator = function() {
  return new uo(this);
};
var uo = function(n) {
  this.treeSet_ = n, this.position_ = 0;
};
uo.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new ei();
  return this.treeSet_.array_[this.position_++];
};
uo.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
uo.prototype.remove = function() {
  throw new bi();
};
var Wr = function() {
};
Wr.sort = function() {
  var t = arguments[0], e, r, i, o;
  if (arguments.length === 1)
    o = function(a, u) {
      return a.compareTo(u);
    }, t.sort(o);
  else if (arguments.length === 2)
    i = arguments[1], o = function(a, u) {
      return i.compare(a, u);
    }, t.sort(o);
  else if (arguments.length === 3) {
    r = t.slice(arguments[1], arguments[2]), r.sort();
    var s = t.slice(0, arguments[1]).concat(r, t.slice(arguments[2], t.length));
    for (t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
  } else if (arguments.length === 4)
    for (r = t.slice(arguments[1], arguments[2]), i = arguments[3], o = function(a, u) {
      return i.compare(a, u);
    }, r.sort(o), s = t.slice(0, arguments[1]).concat(r, t.slice(arguments[2], t.length)), t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
};
Wr.asList = function(t) {
  for (var e = new S(), r = 0, i = t.length; r < i; r++)
    e.add(t[r]);
  return e;
};
var Y = function() {
}, De = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
De.P.get = function() {
  return 0;
};
De.L.get = function() {
  return 1;
};
De.A.get = function() {
  return 2;
};
De.FALSE.get = function() {
  return -1;
};
De.TRUE.get = function() {
  return -2;
};
De.DONTCARE.get = function() {
  return -3;
};
De.SYM_FALSE.get = function() {
  return "F";
};
De.SYM_TRUE.get = function() {
  return "T";
};
De.SYM_DONTCARE.get = function() {
  return "*";
};
De.SYM_P.get = function() {
  return "0";
};
De.SYM_L.get = function() {
  return "1";
};
De.SYM_A.get = function() {
  return "2";
};
Y.prototype.interfaces_ = function() {
  return [];
};
Y.prototype.getClass = function() {
  return Y;
};
Y.toDimensionSymbol = function(t) {
  switch (t) {
    case Y.FALSE:
      return Y.SYM_FALSE;
    case Y.TRUE:
      return Y.SYM_TRUE;
    case Y.DONTCARE:
      return Y.SYM_DONTCARE;
    case Y.P:
      return Y.SYM_P;
    case Y.L:
      return Y.SYM_L;
    case Y.A:
      return Y.SYM_A;
  }
  throw new it("Unknown dimension value: " + t);
};
Y.toDimensionValue = function(t) {
  switch (hi.toUpperCase(t)) {
    case Y.SYM_FALSE:
      return Y.FALSE;
    case Y.SYM_TRUE:
      return Y.TRUE;
    case Y.SYM_DONTCARE:
      return Y.DONTCARE;
    case Y.SYM_P:
      return Y.P;
    case Y.SYM_L:
      return Y.L;
    case Y.SYM_A:
      return Y.A;
  }
  throw new it("Unknown dimension symbol: " + t);
};
Object.defineProperties(Y, De);
var Ue = function() {
};
Ue.prototype.filter = function(t) {
};
Ue.prototype.interfaces_ = function() {
  return [];
};
Ue.prototype.getClass = function() {
  return Ue;
};
var Se = function() {
};
Se.prototype.filter = function(t, e) {
};
Se.prototype.isDone = function() {
};
Se.prototype.isGeometryChanged = function() {
};
Se.prototype.interfaces_ = function() {
  return [];
};
Se.prototype.getClass = function() {
  return Se;
};
var Xt = function(n) {
  function t(r, i) {
    if (n.call(this, i), this._geometries = r || [], n.hasNullElements(this._geometries))
      throw new it("geometries must not contain null elements");
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var i = this, o = new R(), s = 0; s < this._geometries.length; s++)
      o.expandToInclude(i._geometries[s].getEnvelopeInternal());
    return o;
  }, t.prototype.getGeometryN = function(i) {
    return this._geometries[i];
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_GEOMETRYCOLLECTION;
  }, t.prototype.getCoordinates = function() {
    for (var i = this, o = new Array(this.getNumPoints()).fill(null), s = -1, a = 0; a < this._geometries.length; a++)
      for (var u = i._geometries[a].getCoordinates(), l = 0; l < u.length; l++)
        s++, o[s] = u[l];
    return o;
  }, t.prototype.getArea = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getArea();
    return o;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._geometries.length !== a._geometries.length)
        return !1;
      for (var u = 0; u < this._geometries.length; u++)
        if (!i._geometries[u].equalsExact(a._geometries[u], s))
          return !1;
      return !0;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      i._geometries[o].normalize();
    Wr.sort(this._geometries);
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
  }, t.prototype.getBoundaryDimension = function() {
    for (var i = this, o = Y.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getBoundaryDimension());
    return o;
  }, t.prototype.getDimension = function() {
    for (var i = this, o = Y.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getDimension());
    return o;
  }, t.prototype.getLength = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getNumPoints();
    return o;
  }, t.prototype.getNumGeometries = function() {
    return this._geometries.length;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createGeometryCollection(s);
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = new ze(Wr.asList(this._geometries)), a = new ze(Wr.asList(o._geometries));
      return this.compare(s, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, f = this.getNumGeometries(), h = c.getNumGeometries(), p = 0; p < f && p < h; ) {
        var g = i.getGeometryN(p), y = c.getGeometryN(p), m = g.compareToSameClass(y, l);
        if (m !== 0)
          return m;
        p++;
      }
      return p < f ? 1 : p < h ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (M(arguments[0], nr))
      for (var o = arguments[0], s = 0; s < this._geometries.length; s++)
        i._geometries[s].apply(o);
    else if (M(arguments[0], Se)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (i._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (M(arguments[0], Ue)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        i._geometries[c].apply(l);
    } else if (M(arguments[0], Cr)) {
      var f = arguments[0];
      f.filter(this);
      for (var h = 0; h < this._geometries.length; h++)
        i._geometries[h].apply(f);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), V.shouldNeverReachHere(), null;
  }, t.prototype.clone = function() {
    var i = this, o = n.prototype.clone.call(this);
    o._geometries = new Array(this._geometries.length).fill(null);
    for (var s = 0; s < this._geometries.length; s++)
      o._geometries[s] = i._geometries[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "GeometryCollection";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.isEmpty = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isEmpty())
        return !1;
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -5694727726395021e3;
  }, Object.defineProperties(t, e), t;
}(T), Qr = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return T.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? Y.FALSE : 0;
  }, t.prototype.isClosed = function() {
    var i = this;
    if (this.isEmpty())
      return !1;
    for (var o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isClosed())
        return !1;
    return !0;
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[o - 1 - a] = i._geometries[a].reverse();
    return this.getFactory().createMultiLineString(s);
  }, t.prototype.getBoundary = function() {
    return new ge(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [gi];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(Xt), ge = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = ye.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this._geom = r, this._geomFact = r.getFactory(), this._bnRule = i;
  }
};
ge.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
ge.prototype.getBoundary = function() {
  return this._geom instanceof ut ? this.boundaryLineString(this._geom) : this._geom instanceof Qr ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
ge.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
ge.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
ge.prototype.computeBoundaryCoordinates = function(t) {
  var e = this, r = new S();
  this._endpointMap = new At();
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    o.getNumPoints() !== 0 && (e.addEndpoint(o.getCoordinateN(0)), e.addEndpoint(o.getCoordinateN(o.getNumPoints() - 1)));
  }
  for (var s = this._endpointMap.entrySet().iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && r.add(a.getKey());
  }
  return z.toCoordinateArray(r);
};
ge.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new Wi(), this._endpointMap.put(t, e)), e.count++;
};
ge.prototype.interfaces_ = function() {
  return [];
};
ge.prototype.getClass = function() {
  return ge;
};
ge.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new ge(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = new ge(r, i);
    return o.getBoundary();
  }
};
var Wi = function() {
  this.count = null;
};
Wi.prototype.interfaces_ = function() {
  return [];
};
Wi.prototype.getClass = function() {
  return Wi;
};
function Mu() {
}
function Au() {
}
var Fu = function() {
};
function Bu() {
}
function Gu() {
}
function Vu() {
}
var de = function() {
}, qo = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
de.prototype.interfaces_ = function() {
  return [];
};
de.prototype.getClass = function() {
  return de;
};
de.chars = function(t, e) {
  for (var r = new Array(e).fill(null), i = 0; i < e; i++)
    r[i] = t;
  return String(r);
};
de.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Bu(), r = new Mu();
    return t.printStackTrace(r), e.toString();
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1], s = "";
    new Au(de.getStackTrace(i));
    for (var a = new Vu(), u = 0; u < o; u++)
      try {
        s += a.readLine() + de.NEWLINE;
      } catch (l) {
        if (l instanceof Gu)
          V.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return s;
  }
};
de.split = function(t, e) {
  for (var r = e.length, i = new S(), o = "" + t, s = o.indexOf(e); s >= 0; ) {
    var a = o.substring(0, s);
    i.add(a), o = o.substring(s + r), s = o.indexOf(e);
  }
  o.length > 0 && i.add(o);
  for (var u = new Array(i.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = i.get(l);
  return u;
};
de.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return de.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
de.spaces = function(t) {
  return de.chars(" ", t);
};
qo.NEWLINE.get = function() {
  return Rt.getProperty("line.separator");
};
qo.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new Fu();
};
Object.defineProperties(de, qo);
var gt = function() {
};
gt.prototype.interfaces_ = function() {
  return [];
};
gt.prototype.getClass = function() {
  return gt;
};
gt.copyCoord = function(t, e, r, i) {
  for (var o = Math.min(t.getDimension(), r.getDimension()), s = 0; s < o; s++)
    r.setOrdinate(i, s, t.getOrdinate(e, s));
};
gt.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, q.X) === t.getOrdinate(e - 1, q.X) && t.getOrdinate(0, q.Y) === t.getOrdinate(e - 1, q.Y);
};
gt.isEqual = function(t, e) {
  var r = t.size(), i = e.size();
  if (r !== i)
    return !1;
  for (var o = Math.min(t.getDimension(), e.getDimension()), s = 0; s < r; s++)
    for (var a = 0; a < o; a++) {
      var u = t.getOrdinate(s, a), l = e.getOrdinate(s, a);
      if (t.getOrdinate(s, a) !== e.getOrdinate(s, a) && !(F.isNaN(u) && F.isNaN(l)))
        return !1;
    }
  return !0;
};
gt.extend = function(t, e, r) {
  var i = t.create(r, e.getDimension()), o = e.size();
  if (gt.copy(e, 0, i, 0, o), o > 0)
    for (var s = o; s < r; s++)
      gt.copy(e, o - 1, i, s, 1);
  return i;
};
gt.reverse = function(t) {
  for (var e = t.size() - 1, r = Math.trunc(e / 2), i = 0; i <= r; i++)
    gt.swap(t, i, e - i);
};
gt.swap = function(t, e, r) {
  if (e === r)
    return null;
  for (var i = 0; i < t.getDimension(); i++) {
    var o = t.getOrdinate(e, i);
    t.setOrdinate(e, i, t.getOrdinate(r, i)), t.setOrdinate(r, i, o);
  }
};
gt.copy = function(t, e, r, i, o) {
  for (var s = 0; s < o; s++)
    gt.copyCoord(t, e + s, r, i + s);
};
gt.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var r = t.getDimension(), i = new Je();
    i.append("(");
    for (var o = 0; o < e; o++) {
      o > 0 && i.append(" ");
      for (var s = 0; s < r; s++)
        s > 0 && i.append(","), i.append(de.toString(t.getOrdinate(o, s)));
    }
    return i.append(")"), i.toString();
  }
};
gt.ensureValidRing = function(t, e) {
  var r = e.size();
  if (r === 0)
    return e;
  if (r <= 3)
    return gt.createClosedRing(t, e, 4);
  var i = e.getOrdinate(0, q.X) === e.getOrdinate(r - 1, q.X) && e.getOrdinate(0, q.Y) === e.getOrdinate(r - 1, q.Y);
  return i ? e : gt.createClosedRing(t, e, r + 1);
};
gt.createClosedRing = function(t, e, r) {
  var i = t.create(r, e.getDimension()), o = e.size();
  gt.copy(e, 0, i, 0, o);
  for (var s = o; s < r; s++)
    gt.copy(e, 0, i, s, 1);
  return i;
};
var ut = function(n) {
  function t(r, i) {
    n.call(this, i), this._points = null, this.init(r);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new R() : this._points.expandEnvelope(new R());
  }, t.prototype.isRing = function() {
    return this.isClosed() && this.isSimple();
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_LINESTRING;
  }, t.prototype.getCoordinates = function() {
    return this._points.toCoordinateArray();
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._points.size() !== a._points.size())
        return !1;
      for (var u = 0; u < this._points.size(); u++)
        if (!i.equal(i._points.getCoordinate(u), a._points.getCoordinate(u), s))
          return !1;
      return !0;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < Math.trunc(this._points.size() / 2); o++) {
      var s = i._points.size() - 1 - o;
      if (!i._points.getCoordinate(o).equals(i._points.getCoordinate(s)))
        return i._points.getCoordinate(o).compareTo(i._points.getCoordinate(s)) > 0 && gt.reverse(i._points), null;
    }
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._points.getCoordinate(0);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? Y.FALSE : 0;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
  }, t.prototype.getEndPoint = function() {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.getLength = function() {
    return L.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    gt.reverse(i);
    var o = this.getFactory().createLineString(i);
    return o;
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      for (var o = arguments[0], s = o, a = 0, u = 0; a < this._points.size() && u < s._points.size(); ) {
        var l = i._points.getCoordinate(a).compareTo(s._points.getCoordinate(u));
        if (l !== 0)
          return l;
        a++, u++;
      }
      return a < this._points.size() ? 1 : u < s._points.size() ? -1 : 0;
    } else if (arguments.length === 2) {
      var c = arguments[0], f = arguments[1], h = c;
      return f.compare(this._points, h._points);
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (M(arguments[0], nr))
      for (var o = arguments[0], s = 0; s < this._points.size(); s++)
        o.filter(i._points.getCoordinate(s));
    else if (M(arguments[0], Se)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(i._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (M(arguments[0], Ue)) {
      var l = arguments[0];
      l.filter(this);
    } else if (M(arguments[0], Cr)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new ge(this).getBoundary();
  }, t.prototype.isEquivalentClass = function(i) {
    return i instanceof t;
  }, t.prototype.clone = function() {
    var i = n.prototype.clone.call(this);
    return i._points = this._points.clone(), i;
  }, t.prototype.getCoordinateN = function(i) {
    return this._points.getCoordinate(i);
  }, t.prototype.getGeometryType = function() {
    return "LineString";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._points;
  }, t.prototype.isEmpty = function() {
    return this._points.size() === 0;
  }, t.prototype.init = function(i) {
    if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1)
      throw new it("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
    this._points = i;
  }, t.prototype.isCoordinate = function(i) {
    for (var o = this, s = 0; s < this._points.size(); s++)
      if (o._points.getCoordinate(s).equals(i))
        return !0;
    return !1;
  }, t.prototype.getStartPoint = function() {
    return this.isEmpty() ? null : this.getPointN(0);
  }, t.prototype.getPointN = function(i) {
    return this.getFactory().createPoint(this._points.getCoordinate(i));
  }, t.prototype.interfaces_ = function() {
    return [gi];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(T), di = function() {
};
di.prototype.interfaces_ = function() {
  return [];
};
di.prototype.getClass = function() {
  return di;
};
var te = function(n) {
  function t(r, i) {
    n.call(this, i), this._coordinates = r || null, this.init(this._coordinates);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new R();
    var i = new R();
    return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_POINT;
  }, t.prototype.getCoordinates = function() {
    return this.isEmpty() ? [] : [this.getCoordinate()];
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? this.isEmpty() && i.isEmpty() ? !0 : this.isEmpty() !== i.isEmpty() ? !1 : this.equal(i.getCoordinate(), this.getCoordinate(), o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
  }, t.prototype.getCoordinate = function() {
    return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
  }, t.prototype.getBoundaryDimension = function() {
    return Y.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getNumPoints = function() {
    return this.isEmpty() ? 0 : 1;
  }, t.prototype.reverse = function() {
    return this.copy();
  }, t.prototype.getX = function() {
    if (this.getCoordinate() === null)
      throw new Error("getX called on empty Point");
    return this.getCoordinate().x;
  }, t.prototype.compareToSameClass = function() {
    if (arguments.length === 1) {
      var i = arguments[0], o = i;
      return this.getCoordinate().compareTo(o.getCoordinate());
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1], u = s;
      return a.compare(this._coordinates, u._coordinates);
    }
  }, t.prototype.apply = function() {
    if (M(arguments[0], nr)) {
      var i = arguments[0];
      if (this.isEmpty())
        return null;
      i.filter(this.getCoordinate());
    } else if (M(arguments[0], Se)) {
      var o = arguments[0];
      if (this.isEmpty())
        return null;
      o.filter(this._coordinates, 0), o.isGeometryChanged() && this.geometryChanged();
    } else if (M(arguments[0], Ue)) {
      var s = arguments[0];
      s.filter(this);
    } else if (M(arguments[0], Cr)) {
      var a = arguments[0];
      a.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.clone = function() {
    var i = n.prototype.clone.call(this);
    return i._coordinates = this._coordinates.clone(), i;
  }, t.prototype.getGeometryType = function() {
    return "Point";
  }, t.prototype.copy = function() {
    return new t(this._coordinates.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._coordinates;
  }, t.prototype.getY = function() {
    if (this.getCoordinate() === null)
      throw new Error("getY called on empty Point");
    return this.getCoordinate().y;
  }, t.prototype.isEmpty = function() {
    return this._coordinates.size() === 0;
  }, t.prototype.init = function(i) {
    i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), V.isTrue(i.size() <= 1), this._coordinates = i;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [di];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(T), Mr = function() {
};
Mr.prototype.interfaces_ = function() {
  return [];
};
Mr.prototype.getClass = function() {
  return Mr;
};
var Nt = function(n) {
  function t(r, i, o) {
    if (n.call(this, o), this._shell = null, this._holes = null, r === null && (r = this.getFactory().createLinearRing()), i === null && (i = []), n.hasNullElements(i))
      throw new it("holes must not contain null elements");
    if (r.isEmpty() && n.hasNonEmptyElements(i))
      throw new it("shell is empty but holes are not");
    this._shell = r, this._holes = i;
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this._shell.getEnvelopeInternal();
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_POLYGON;
  }, t.prototype.getCoordinates = function() {
    var i = this;
    if (this.isEmpty())
      return [];
    for (var o = new Array(this.getNumPoints()).fill(null), s = -1, a = this._shell.getCoordinates(), u = 0; u < a.length; u++)
      s++, o[s] = a[u];
    for (var l = 0; l < this._holes.length; l++)
      for (var c = i._holes[l].getCoordinates(), f = 0; f < c.length; f++)
        s++, o[s] = c[f];
    return o;
  }, t.prototype.getArea = function() {
    var i = this, o = 0;
    o += Math.abs(L.signedArea(this._shell.getCoordinateSequence()));
    for (var s = 0; s < this._holes.length; s++)
      o -= Math.abs(L.signedArea(i._holes[s].getCoordinateSequence()));
    return o;
  }, t.prototype.isRectangle = function() {
    if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5)
      return !1;
    for (var i = this._shell.getCoordinateSequence(), o = this.getEnvelopeInternal(), s = 0; s < 5; s++) {
      var a = i.getX(s);
      if (!(a === o.getMinX() || a === o.getMaxX()))
        return !1;
      var u = i.getY(s);
      if (!(u === o.getMinY() || u === o.getMaxY()))
        return !1;
    }
    for (var l = i.getX(0), c = i.getY(0), f = 1; f <= 4; f++) {
      var h = i.getX(f), p = i.getY(f), g = h !== l, y = p !== c;
      if (g === y)
        return !1;
      l = h, c = p;
    }
    return !0;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o, u = this._shell, l = a._shell;
      if (!u.equalsExact(l, s) || this._holes.length !== a._holes.length)
        return !1;
      for (var c = 0; c < this._holes.length; c++)
        if (!i._holes[c].equalsExact(a._holes[c], s))
          return !1;
      return !0;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    var i = this;
    if (arguments.length === 0) {
      this.normalize(this._shell, !0);
      for (var o = 0; o < this._holes.length; o++)
        i.normalize(i._holes[o], !1);
      Wr.sort(this._holes);
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1];
      if (s.isEmpty())
        return null;
      var u = new Array(s.getCoordinates().length - 1).fill(null);
      Rt.arraycopy(s.getCoordinates(), 0, u, 0, u.length);
      var l = z.minCoordinate(s.getCoordinates());
      z.scroll(u, l), Rt.arraycopy(u, 0, s.getCoordinates(), 0, u.length), s.getCoordinates()[u.length] = u[0], L.isCCW(s.getCoordinates()) === a && z.reverse(s.getCoordinates());
    }
  }, t.prototype.getCoordinate = function() {
    return this._shell.getCoordinate();
  }, t.prototype.getNumInteriorRing = function() {
    return this._holes.length;
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.getLength = function() {
    var i = this, o = 0;
    o += this._shell.getLength();
    for (var s = 0; s < this._holes.length; s++)
      o += i._holes[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = this._shell.getNumPoints(), s = 0; s < this._holes.length; s++)
      o += i._holes[s].getNumPoints();
    return o;
  }, t.prototype.reverse = function() {
    var i = this, o = this.copy();
    o._shell = this._shell.copy().reverse(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].copy().reverse();
    return o;
  }, t.prototype.convexHull = function() {
    return this.getExteriorRing().convexHull();
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = this._shell, a = o._shell;
      return s.compareToSameClass(a);
    } else if (arguments.length === 2) {
      var u = arguments[0], l = arguments[1], c = u, f = this._shell, h = c._shell, p = f.compareToSameClass(h, l);
      if (p !== 0)
        return p;
      for (var g = this.getNumInteriorRing(), y = c.getNumInteriorRing(), m = 0; m < g && m < y; ) {
        var _ = i.getInteriorRingN(m), I = c.getInteriorRingN(m), C = _.compareToSameClass(I, l);
        if (C !== 0)
          return C;
        m++;
      }
      return m < g ? 1 : m < y ? -1 : 0;
    }
  }, t.prototype.apply = function(i) {
    var o = this;
    if (M(i, nr)) {
      this._shell.apply(i);
      for (var s = 0; s < this._holes.length; s++)
        o._holes[s].apply(i);
    } else if (M(i, Se)) {
      if (this._shell.apply(i), !i.isDone())
        for (var a = 0; a < this._holes.length && (o._holes[a].apply(i), !i.isDone()); a++)
          ;
      i.isGeometryChanged() && this.geometryChanged();
    } else if (M(i, Ue))
      i.filter(this);
    else if (M(i, Cr)) {
      i.filter(this), this._shell.apply(i);
      for (var u = 0; u < this._holes.length; u++)
        o._holes[u].apply(i);
    }
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    var o = new Array(this._holes.length + 1).fill(null);
    o[0] = this._shell;
    for (var s = 0; s < this._holes.length; s++)
      o[s + 1] = i._holes[s];
    return o.length <= 1 ? this.getFactory().createLinearRing(o[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(o);
  }, t.prototype.clone = function() {
    var i = this, o = n.prototype.clone.call(this);
    o._shell = this._shell.clone(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "Polygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = this._shell.copy(), s = new Array(this._holes.length).fill(null), a = 0; a < s.length; a++)
      s[a] = i._holes[a].copy();
    return new t(o, s, this._factory);
  }, t.prototype.getExteriorRing = function() {
    return this._shell;
  }, t.prototype.isEmpty = function() {
    return this._shell.isEmpty();
  }, t.prototype.getInteriorRingN = function(i) {
    return this._holes[i];
  }, t.prototype.interfaces_ = function() {
    return [Mr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(T), Gn = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return T.SORTINDEX_MULTIPOINT;
  }, t.prototype.isValid = function() {
    return !0;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return this._geometries[i].getCoordinate();
    } else
      return n.prototype.getCoordinate.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return Y.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.getGeometryType = function() {
    return "MultiPoint";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [di];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(Xt), ir = function(n) {
  function t(r, i) {
    r instanceof d && i instanceof k && (r = i.getCoordinateSequenceFactory().create(r)), n.call(this, r, i), this.validateConstruction();
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return T.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return Y.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : n.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    gt.reverse(i);
    var o = this.getFactory().createLinearRing(i);
    return o;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !n.prototype.isClosed.call(this))
      throw new it("Points of LinearRing do not form a closed linestring");
    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
      throw new it("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
  }, t.prototype.getGeometryType = function() {
    return "LinearRing";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.MINIMUM_VALID_SIZE.get = function() {
    return 4;
  }, e.serialVersionUID.get = function() {
    return -4261142084085851600;
  }, Object.defineProperties(t, e), t;
}(ut), er = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return T.SORTINDEX_MULTIPOLYGON;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createMultiPolygon(s);
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    for (var o = new S(), s = 0; s < this._geometries.length; s++)
      for (var a = i._geometries[s], u = a.getBoundary(), l = 0; l < u.getNumGeometries(); l++)
        o.add(u.getGeometryN(l));
    var c = new Array(o.size()).fill(null);
    return this.getFactory().createMultiLineString(o.toArray(c));
  }, t.prototype.getGeometryType = function() {
    return "MultiPolygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [Mr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(Xt), me = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, lo = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
me.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
me.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var r = this.editInternal(t, e);
  return this._isUserDataCopied && r.setUserData(t.getUserData()), r;
};
me.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof Xt ? this.editGeometryCollection(t, e) : t instanceof Nt ? this.editPolygon(t, e) : t instanceof te ? e.edit(t, this._factory) : t instanceof ut ? e.edit(t, this._factory) : (V.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
me.prototype.editGeometryCollection = function(t, e) {
  for (var r = this, i = e.edit(t, this._factory), o = new S(), s = 0; s < i.getNumGeometries(); s++) {
    var a = r.edit(i.getGeometryN(s), e);
    a === null || a.isEmpty() || o.add(a);
  }
  return i.getClass() === Gn ? this._factory.createMultiPoint(o.toArray([])) : i.getClass() === Qr ? this._factory.createMultiLineString(o.toArray([])) : i.getClass() === er ? this._factory.createMultiPolygon(o.toArray([])) : this._factory.createGeometryCollection(o.toArray([]));
};
me.prototype.editPolygon = function(t, e) {
  var r = this, i = e.edit(t, this._factory);
  if (i === null && (i = this._factory.createPolygon(null)), i.isEmpty())
    return i;
  var o = this.edit(i.getExteriorRing(), e);
  if (o === null || o.isEmpty())
    return this._factory.createPolygon();
  for (var s = new S(), a = 0; a < i.getNumInteriorRing(); a++) {
    var u = r.edit(i.getInteriorRingN(a), e);
    u === null || u.isEmpty() || s.add(u);
  }
  return this._factory.createPolygon(o, s.toArray([]));
};
me.prototype.interfaces_ = function() {
  return [];
};
me.prototype.getClass = function() {
  return me;
};
me.GeometryEditorOperation = function() {
};
lo.NoOpGeometryOperation.get = function() {
  return vi;
};
lo.CoordinateOperation.get = function() {
  return yi;
};
lo.CoordinateSequenceOperation.get = function() {
  return mi;
};
Object.defineProperties(me, lo);
var vi = function() {
};
vi.prototype.edit = function(t, e) {
  return t;
};
vi.prototype.interfaces_ = function() {
  return [me.GeometryEditorOperation];
};
vi.prototype.getClass = function() {
  return vi;
};
var yi = function() {
};
yi.prototype.edit = function(t, e) {
  var r = this.editCoordinates(t.getCoordinates(), t);
  return r === null ? t : t instanceof ir ? e.createLinearRing(r) : t instanceof ut ? e.createLineString(r) : t instanceof te ? r.length > 0 ? e.createPoint(r[0]) : e.createPoint() : t;
};
yi.prototype.interfaces_ = function() {
  return [me.GeometryEditorOperation];
};
yi.prototype.getClass = function() {
  return yi;
};
var mi = function() {
};
mi.prototype.edit = function(t, e) {
  return t instanceof ir ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof ut ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof te ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
mi.prototype.interfaces_ = function() {
  return [me.GeometryEditorOperation];
};
mi.prototype.getClass = function() {
  return mi;
};
var ht = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var r = 0; r < e; r++)
        t._coordinates[r] = new d();
    } else if (M(arguments[0], q)) {
      var i = arguments[0];
      if (i === null)
        return this._coordinates = new Array(0).fill(null), null;
      this._dimension = i.getDimension(), this._coordinates = new Array(i.size()).fill(null);
      for (var o = 0; o < this._coordinates.length; o++)
        t._coordinates[o] = i.getCoordinateCopy(o);
    }
  } else if (arguments.length === 2) {
    if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var s = arguments[0], a = arguments[1];
      this._coordinates = s, this._dimension = a, s === null && (this._coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var u = arguments[0], l = arguments[1];
      this._coordinates = new Array(u).fill(null), this._dimension = l;
      for (var c = 0; c < u; c++)
        t._coordinates[c] = new d();
    }
  }
}, ia = { serialVersionUID: { configurable: !0 } };
ht.prototype.setOrdinate = function(t, e, r) {
  switch (e) {
    case q.X:
      this._coordinates[t].x = r;
      break;
    case q.Y:
      this._coordinates[t].y = r;
      break;
    case q.Z:
      this._coordinates[t].z = r;
      break;
    default:
      throw new it("invalid ordinateIndex");
  }
};
ht.prototype.size = function() {
  return this._coordinates.length;
};
ht.prototype.getOrdinate = function(t, e) {
  switch (e) {
    case q.X:
      return this._coordinates[t].x;
    case q.Y:
      return this._coordinates[t].y;
    case q.Z:
      return this._coordinates[t].z;
  }
  return F.NaN;
};
ht.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    r.x = this._coordinates[e].x, r.y = this._coordinates[e].y, r.z = this._coordinates[e].z;
  }
};
ht.prototype.getCoordinateCopy = function(t) {
  return new d(this._coordinates[t]);
};
ht.prototype.getDimension = function() {
  return this._dimension;
};
ht.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
ht.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), r = 0; r < this._coordinates.length; r++)
    e[r] = t._coordinates[r].clone();
  return new ht(e, this._dimension);
};
ht.prototype.expandEnvelope = function(t) {
  for (var e = this, r = 0; r < this._coordinates.length; r++)
    t.expandToInclude(e._coordinates[r]);
  return t;
};
ht.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), r = 0; r < this._coordinates.length; r++)
    e[r] = t._coordinates[r].copy();
  return new ht(e, this._dimension);
};
ht.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new Je(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var r = 1; r < this._coordinates.length; r++)
      e.append(", "), e.append(t._coordinates[r]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
ht.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
ht.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
ht.prototype.interfaces_ = function() {
  return [q, Ie];
};
ht.prototype.getClass = function() {
  return ht;
};
ia.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(ht, ia);
var or = function() {
}, Xo = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
or.prototype.readResolve = function() {
  return or.instance();
};
or.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new ht(t);
    } else if (M(arguments[0], q)) {
      var e = arguments[0];
      return new ht(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return i > 3 && (i = 3), i < 2 ? new ht(r) : new ht(r, i);
  }
};
or.prototype.interfaces_ = function() {
  return [Dn, Ie];
};
or.prototype.getClass = function() {
  return or;
};
or.instance = function() {
  return or.instanceObject;
};
Xo.serialVersionUID.get = function() {
  return -4099577099607551500;
};
Xo.instanceObject.get = function() {
  return new or();
};
Object.defineProperties(or, Xo);
var oa = function(n) {
  function t() {
    n.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.get = function(r) {
    return this.map_.get(r) || null;
  }, t.prototype.put = function(r, i) {
    return this.map_.set(r, i), i;
  }, t.prototype.values = function() {
    for (var r = new S(), i = this.map_.values(), o = i.next(); !o.done; )
      r.add(o.value), o = i.next();
    return r;
  }, t.prototype.entrySet = function() {
    var r = new Uo();
    return this.map_.entries().forEach(function(i) {
      return r.add(i);
    }), r;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(xn), W = function n() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = n.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof qe) {
      var t = arguments[0];
      this._modelType = t, t === n.FIXED && this.setScale(1);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      this._modelType = n.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof n) {
      var r = arguments[0];
      this._modelType = r._modelType, this._scale = r._scale;
    }
  }
}, Yo = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
W.prototype.equals = function(t) {
  if (!(t instanceof W))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
W.prototype.compareTo = function(t) {
  var e = t, r = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
  return new ke(r).compareTo(new ke(i));
};
W.prototype.getScale = function() {
  return this._scale;
};
W.prototype.isFloating = function() {
  return this._modelType === W.FLOATING || this._modelType === W.FLOATING_SINGLE;
};
W.prototype.getType = function() {
  return this._modelType;
};
W.prototype.toString = function() {
  var t = "UNKNOWN";
  return this._modelType === W.FLOATING ? t = "Floating" : this._modelType === W.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === W.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
};
W.prototype.makePrecise = function() {
  if (typeof arguments[0] == "number") {
    var t = arguments[0];
    if (F.isNaN(t))
      return t;
    if (this._modelType === W.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === W.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof d) {
    var r = arguments[0];
    if (this._modelType === W.FLOATING)
      return null;
    r.x = this.makePrecise(r.x), r.y = this.makePrecise(r.y);
  }
};
W.prototype.getMaximumSignificantDigits = function() {
  var t = 16;
  return this._modelType === W.FLOATING ? t = 16 : this._modelType === W.FLOATING_SINGLE ? t = 6 : this._modelType === W.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
};
W.prototype.setScale = function(t) {
  this._scale = Math.abs(t);
};
W.prototype.interfaces_ = function() {
  return [Ie, Ee];
};
W.prototype.getClass = function() {
  return W;
};
W.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
Yo.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
Yo.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties(W, Yo);
var qe = function n(t) {
  this._name = t || null, n.nameToTypeMap.put(t, this);
}, Ho = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
qe.prototype.readResolve = function() {
  return qe.nameToTypeMap.get(this._name);
};
qe.prototype.toString = function() {
  return this._name;
};
qe.prototype.interfaces_ = function() {
  return [Ie];
};
qe.prototype.getClass = function() {
  return qe;
};
Ho.serialVersionUID.get = function() {
  return -552860263173159e4;
};
Ho.nameToTypeMap.get = function() {
  return new oa();
};
Object.defineProperties(qe, Ho);
W.Type = qe;
W.FIXED = new qe("FIXED");
W.FLOATING = new qe("FLOATING");
W.FLOATING_SINGLE = new qe("FLOATING SINGLE");
var k = function n() {
  this._precisionModel = new W(), this._SRID = 0, this._coordinateSequenceFactory = n.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? M(arguments[0], Dn) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof W && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, sa = { serialVersionUID: { configurable: !0 } };
k.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new d(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new d(t.getMinX(), t.getMinY()), new d(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new d(t.getMinX(), t.getMinY()), new d(t.getMinX(), t.getMaxY()), new d(t.getMaxX(), t.getMaxY()), new d(t.getMaxX(), t.getMinY()), new d(t.getMinX(), t.getMinY())]), null);
};
k.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new ut(this.getCoordinateSequenceFactory().create(t), this);
    if (M(t, q))
      return new ut(t, this);
  } else
    return new ut(this.getCoordinateSequenceFactory().create([]), this);
};
k.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new Qr(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Qr(t, this);
  }
};
k.prototype.buildGeometry = function(t) {
  for (var e = null, r = !1, i = !1, o = t.iterator(); o.hasNext(); ) {
    var s = o.next(), a = s.getClass();
    e === null && (e = a), a !== e && (r = !0), s.isGeometryCollectionOrDerived() && (i = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (r || i)
    return this.createGeometryCollection(k.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof Nt)
      return this.createMultiPolygon(k.toPolygonArray(t));
    if (u instanceof ut)
      return this.createMultiLineString(k.toLineStringArray(t));
    if (u instanceof te)
      return this.createMultiPoint(k.toPointArray(t));
    V.shouldNeverReachHere("Unhandled class: " + u.getClass().getName());
  }
  return u;
};
k.prototype.createMultiPointFromCoords = function(t) {
  return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
};
k.prototype.createPoint = function() {
  if (arguments.length === 0)
    return this.createPoint(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof d) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (M(arguments[0], q)) {
      var e = arguments[0];
      return new te(e, this);
    }
  }
};
k.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
k.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new Nt(null, null, this);
  if (arguments.length === 1) {
    if (M(arguments[0], q)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof ir) {
      var r = arguments[0];
      return this.createPolygon(r, null);
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    return new Nt(i, o, this);
  }
};
k.prototype.getSRID = function() {
  return this._SRID;
};
k.prototype.createGeometryCollection = function() {
  if (arguments.length === 0)
    return new Xt(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Xt(t, this);
  }
};
k.prototype.createGeometry = function(t) {
  var e = new me(this);
  return e.edit(t, {
    edit: function() {
      if (arguments.length === 2) {
        var r = arguments[0];
        return this._coordinateSequenceFactory.create(r);
      }
    }
  });
};
k.prototype.getPrecisionModel = function() {
  return this._precisionModel;
};
k.prototype.createLinearRing = function() {
  if (arguments.length === 0)
    return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
    } else if (M(arguments[0], q)) {
      var e = arguments[0];
      return new ir(e, this);
    }
  }
};
k.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new er(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new er(t, this);
  }
};
k.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new Gn(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new Gn(e, this);
    } else if (arguments[0] instanceof Array) {
      var r = arguments[0];
      return this.createMultiPoint(r !== null ? this.getCoordinateSequenceFactory().create(r) : null);
    } else if (M(arguments[0], q)) {
      var i = arguments[0];
      if (i === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var o = new Array(i.size()).fill(null), s = 0; s < i.size(); s++) {
        var a = t.getCoordinateSequenceFactory().create(1, i.getDimension());
        gt.copy(i, s, a, 0, 1), o[s] = t.createPoint(a);
      }
      return this.createMultiPoint(o);
    }
  }
};
k.prototype.interfaces_ = function() {
  return [Ie];
};
k.prototype.getClass = function() {
  return k;
};
k.toMultiPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.toGeometryArray = function(t) {
  if (t === null)
    return null;
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.getDefaultCoordinateSequenceFactory = function() {
  return or.instance();
};
k.toMultiLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.toLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.toMultiPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.toLinearRingArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.toPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.toPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
k.createPointFromInternalCoord = function(t, e) {
  return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
};
sa.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(k, sa);
var ku = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], co = function(t) {
  this.geometryFactory = t || new k();
};
co.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var r = e.type;
  if (!Fe[r])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return ku.indexOf(r) !== -1 ? Fe[r].apply(this, [e.coordinates]) : r === "GeometryCollection" ? Fe[r].apply(this, [e.geometries]) : Fe[r].apply(this, [e]);
};
co.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!vr[e])
    throw new Error("Geometry is not supported");
  return vr[e].apply(this, [t]);
};
var Fe = {
  /**
   * Parse a GeoJSON Feature object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} Feature with geometry/bbox converted to JSTS Geometries.
   */
  Feature: function(n) {
    var t = {};
    for (var e in n)
      t[e] = n[e];
    if (n.geometry) {
      var r = n.geometry.type;
      if (!Fe[r])
        throw new Error("Unknown GeoJSON type: " + n.type);
      t.geometry = this.read(n.geometry);
    }
    return n.bbox && (t.bbox = Fe.bbox.apply(this, [n.bbox])), t;
  },
  /**
   * Parse a GeoJSON FeatureCollection object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} FeatureCollection with geometry/bbox converted to JSTS Geometries.
   */
  FeatureCollection: function(n) {
    var t = this, e = {};
    if (n.features) {
      e.features = [];
      for (var r = 0; r < n.features.length; ++r)
        e.features.push(t.read(n.features[r]));
    }
    return n.bbox && (e.bbox = this.parse.bbox.apply(this, [n.bbox])), e;
  },
  /**
   * Convert the ordinates in an array to an array of Coordinates
   *
   * @param {Array}
   *          array Array with {Number}s.
   *
   * @return {Array} Array with Coordinates.
   */
  coordinates: function(n) {
    for (var t = [], e = 0; e < n.length; ++e) {
      var r = n[e];
      t.push(new d(r[0], r[1]));
    }
    return t;
  },
  /**
   * Convert the bbox to a LinearRing
   *
   * @param {Array}
   *          array Array with [xMin, yMin, xMax, yMax].
   *
   * @return {Array} Array with Coordinates.
   */
  bbox: function(n) {
    return this.geometryFactory.createLinearRing([
      new d(n[0], n[1]),
      new d(n[2], n[1]),
      new d(n[2], n[3]),
      new d(n[0], n[3]),
      new d(n[0], n[1])
    ]);
  },
  /**
   * Convert an Array with ordinates to a Point
   *
   * @param {Array}
   *          array Array with ordinates.
   *
   * @return {Point} Point.
   */
  Point: function(n) {
    var t = new d(n[0], n[1]);
    return this.geometryFactory.createPoint(t);
  },
  /**
   * Convert an Array with coordinates to a MultiPoint
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiPoint} MultiPoint.
   */
  MultiPoint: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r)
      e.push(Fe.Point.apply(t, [n[r]]));
    return this.geometryFactory.createMultiPoint(e);
  },
  /**
   * Convert an Array with coordinates to a LineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {LineString} LineString.
   */
  LineString: function(n) {
    var t = Fe.coordinates.apply(this, [n]);
    return this.geometryFactory.createLineString(t);
  },
  /**
   * Convert an Array with coordinates to a MultiLineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiLineString} MultiLineString.
   */
  MultiLineString: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r)
      e.push(Fe.LineString.apply(t, [n[r]]));
    return this.geometryFactory.createMultiLineString(e);
  },
  /**
   * Convert an Array to a Polygon
   *
   * @param {Array}
   *          array Array with shell and holes.
   *
   * @return {Polygon} Polygon.
   */
  Polygon: function(n) {
    for (var t = this, e = Fe.coordinates.apply(this, [n[0]]), r = this.geometryFactory.createLinearRing(e), i = [], o = 1; o < n.length; ++o) {
      var s = n[o], a = Fe.coordinates.apply(t, [s]), u = t.geometryFactory.createLinearRing(a);
      i.push(u);
    }
    return this.geometryFactory.createPolygon(r, i);
  },
  /**
   * Convert an Array to a MultiPolygon
   *
   * @param {Array}
   *          array Array of arrays with shell and rings.
   *
   * @return {MultiPolygon} MultiPolygon.
   */
  MultiPolygon: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r) {
      var i = n[r];
      e.push(Fe.Polygon.apply(t, [i]));
    }
    return this.geometryFactory.createMultiPolygon(e);
  },
  /**
   * Convert an Array to a GeometryCollection
   *
   * @param {Array}
   *          array Array of GeoJSON geometries.
   *
   * @return {GeometryCollection} GeometryCollection.
   */
  GeometryCollection: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r) {
      var i = n[r];
      e.push(t.read(i));
    }
    return this.geometryFactory.createGeometryCollection(e);
  }
}, vr = {
  /**
   * Convert a Coordinate to an Array
   *
   * @param {Coordinate}
   *          coordinate Coordinate to convert.
   *
   * @return {Array} Array of ordinates.
   */
  coordinate: function(n) {
    return [n.x, n.y];
  },
  /**
   * Convert a Point to a GeoJSON object
   *
   * @param {Point}
   *          point Point to convert.
   *
   * @return {Array} Array of 2 ordinates (paired to a coordinate).
   */
  Point: function(n) {
    var t = vr.coordinate.apply(this, [n.getCoordinate()]);
    return {
      type: "Point",
      coordinates: t
    };
  },
  /**
   * Convert a MultiPoint to a GeoJSON object
   *
   * @param {MultiPoint}
   *          multipoint MultiPoint to convert.
   *
   * @return {Array} Array of coordinates.
   */
  MultiPoint: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = vr.Point.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPoint",
      coordinates: e
    };
  },
  /**
   * Convert a LineString to a GeoJSON object
   *
   * @param {LineString}
   *          linestring LineString to convert.
   *
   * @return {Array} Array of coordinates.
   */
  LineString: function(n) {
    for (var t = this, e = [], r = n.getCoordinates(), i = 0; i < r.length; ++i) {
      var o = r[i];
      e.push(vr.coordinate.apply(t, [o]));
    }
    return {
      type: "LineString",
      coordinates: e
    };
  },
  /**
   * Convert a MultiLineString to a GeoJSON object
   *
   * @param {MultiLineString}
   *          multilinestring MultiLineString to convert.
   *
   * @return {Array} Array of Array of coordinates.
   */
  MultiLineString: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = vr.LineString.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiLineString",
      coordinates: e
    };
  },
  /**
   * Convert a Polygon to a GeoJSON object
   *
   * @param {Polygon}
   *          polygon Polygon to convert.
   *
   * @return {Array} Array with shell, holes.
   */
  Polygon: function(n) {
    var t = this, e = [], r = vr.LineString.apply(this, [n._shell]);
    e.push(r.coordinates);
    for (var i = 0; i < n._holes.length; ++i) {
      var o = n._holes[i], s = vr.LineString.apply(t, [o]);
      e.push(s.coordinates);
    }
    return {
      type: "Polygon",
      coordinates: e
    };
  },
  /**
   * Convert a MultiPolygon to a GeoJSON object
   *
   * @param {MultiPolygon}
   *          multipolygon MultiPolygon to convert.
   *
   * @return {Array} Array of polygons.
   */
  MultiPolygon: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = vr.Polygon.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPolygon",
      coordinates: e
    };
  },
  /**
   * Convert a GeometryCollection to a GeoJSON object
   *
   * @param {GeometryCollection}
   *          collection GeometryCollection to convert.
   *
   * @return {Array} Array of geometries.
   */
  GeometryCollection: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = i.getGeometryType();
      e.push(vr[o].apply(t, [i]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, Wo = function(t) {
  this.geometryFactory = t || new k(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new co(this.geometryFactory);
};
Wo.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === W.FIXED && this.reducePrecision(e), e;
};
Wo.prototype.reducePrecision = function(t) {
  var e = this, r, i;
  if (t.coordinate)
    this.precisionModel.makePrecise(t.coordinate);
  else if (t.points)
    for (r = 0, i = t.points.length; r < i; r++)
      e.precisionModel.makePrecise(t.points[r]);
  else if (t.geometries)
    for (r = 0, i = t.geometries.length; r < i; r++)
      e.reducePrecision(t.geometries[r]);
};
var aa = function() {
  this.parser = new co(this.geometryFactory);
};
aa.prototype.write = function(t) {
  return this.parser.write(t);
};
var N = function() {
}, fo = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
N.prototype.interfaces_ = function() {
  return [];
};
N.prototype.getClass = function() {
  return N;
};
N.opposite = function(t) {
  return t === N.LEFT ? N.RIGHT : t === N.RIGHT ? N.LEFT : t;
};
fo.ON.get = function() {
  return 0;
};
fo.LEFT.get = function() {
  return 1;
};
fo.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(N, fo);
function ho(n) {
  this.message = n || "";
}
ho.prototype = new Error();
ho.prototype.name = "EmptyStackException";
function Ze() {
  this.array_ = [];
}
Ze.prototype = new Ne();
Ze.prototype.add = function(n) {
  return this.array_.push(n), !0;
};
Ze.prototype.get = function(n) {
  if (n < 0 || n >= this.size())
    throw new Error();
  return this.array_[n];
};
Ze.prototype.push = function(n) {
  return this.array_.push(n), n;
};
Ze.prototype.pop = function(n) {
  if (this.array_.length === 0)
    throw new ho();
  return this.array_.pop();
};
Ze.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new ho();
  return this.array_[this.array_.length - 1];
};
Ze.prototype.empty = function() {
  return this.array_.length === 0;
};
Ze.prototype.isEmpty = function() {
  return this.empty();
};
Ze.prototype.search = function(n) {
  return this.array_.indexOf(n);
};
Ze.prototype.size = function() {
  return this.array_.length;
};
Ze.prototype.toArray = function() {
  for (var n = this, t = [], e = 0, r = this.array_.length; e < r; e++)
    t.push(n.array_[e]);
  return t;
};
var Xe = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
Xe.prototype.getCoordinate = function() {
  return this._minCoord;
};
Xe.prototype.getRightmostSide = function(t, e) {
  var r = this.getRightmostSideOfSegment(t, e);
  return r < 0 && (r = this.getRightmostSideOfSegment(t, e - 1)), r < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), r;
};
Xe.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  V.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], r = t[this._minIndex + 1], i = L.computeOrientation(this._minCoord, r, e), o = !1;
  (e.y < this._minCoord.y && r.y < this._minCoord.y && i === L.COUNTERCLOCKWISE || e.y > this._minCoord.y && r.y > this._minCoord.y && i === L.CLOCKWISE) && (o = !0), o && (this._minIndex = this._minIndex - 1);
};
Xe.prototype.getRightmostSideOfSegment = function(t, e) {
  var r = t.getEdge(), i = r.getCoordinates();
  if (e < 0 || e + 1 >= i.length || i[e].y === i[e + 1].y)
    return -1;
  var o = N.LEFT;
  return i[e].y < i[e + 1].y && (o = N.RIGHT), o;
};
Xe.prototype.getEdge = function() {
  return this._orientedDe;
};
Xe.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, r = t.getEdge().getCoordinates(), i = 0; i < r.length - 1; i++)
    (e._minCoord === null || r[i].x > e._minCoord.x) && (e._minDe = t, e._minIndex = i, e._minCoord = r[i]);
};
Xe.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
Xe.prototype.findEdge = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.isForward() && e.checkForRightmostCoordinate(i);
  }
  V.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var o = this.getRightmostSide(this._minDe, this._minIndex);
  o === N.LEFT && (this._orientedDe = this._minDe.getSym());
};
Xe.prototype.interfaces_ = function() {
  return [];
};
Xe.prototype.getClass = function() {
  return Xe;
};
var Nr = function(n) {
  function t(e, r) {
    n.call(this, t.msgWithCoord(e, r)), this.pt = r ? new d(r) : null, this.name = "TopologyException";
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getCoordinate = function() {
    return this.pt;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.msgWithCoord = function(r, i) {
    return i ? r : r + " [ " + i + " ]";
  }, t;
}(Ir), po = function() {
  this.array_ = [];
};
po.prototype.addLast = function(t) {
  this.array_.push(t);
};
po.prototype.removeFirst = function() {
  return this.array_.shift();
};
po.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var Yt = function() {
  this._finder = null, this._dirEdgeList = new S(), this._nodes = new S(), this._rightMostCoord = null, this._env = null, this._finder = new Xe();
};
Yt.prototype.clearVisitedEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.setVisited(!1);
  }
};
Yt.prototype.getRightmostCoordinate = function() {
  return this._rightMostCoord;
};
Yt.prototype.computeNodeDepth = function(t) {
  for (var e = this, r = null, i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isVisited() || o.getSym().isVisited()) {
      r = o;
      break;
    }
  }
  if (r === null)
    throw new Nr("unable to find edge to compute depths at " + t.getCoordinate());
  t.getEdges().computeDepths(r);
  for (var s = t.getEdges().iterator(); s.hasNext(); ) {
    var a = s.next();
    a.setVisited(!0), e.copySymDepths(a);
  }
};
Yt.prototype.computeDepth = function(t) {
  this.clearVisitedEdges();
  var e = this._finder.getEdge();
  e.setEdgeDepths(N.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
};
Yt.prototype.create = function(t) {
  this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
};
Yt.prototype.findResultEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getDepth(N.RIGHT) >= 1 && e.getDepth(N.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
  }
};
Yt.prototype.computeDepths = function(t) {
  var e = this, r = new Uo(), i = new po(), o = t.getNode();
  for (i.addLast(o), r.add(o), t.setVisited(!0); !i.isEmpty(); ) {
    var s = i.removeFirst();
    r.add(s), e.computeNodeDepth(s);
    for (var a = s.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var c = l.getNode();
        r.contains(c) || (i.addLast(c), r.add(c));
      }
    }
  }
};
Yt.prototype.compareTo = function(t) {
  var e = t;
  return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
};
Yt.prototype.getEnvelope = function() {
  if (this._env === null) {
    for (var t = new R(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var r = e.next(), i = r.getEdge().getCoordinates(), o = 0; o < i.length - 1; o++)
        t.expandToInclude(i[o]);
    this._env = t;
  }
  return this._env;
};
Yt.prototype.addReachable = function(t) {
  var e = this, r = new Ze();
  for (r.add(t); !r.empty(); ) {
    var i = r.pop();
    e.add(i, r);
  }
};
Yt.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(N.LEFT, t.getDepth(N.RIGHT)), e.setDepth(N.RIGHT, t.getDepth(N.LEFT));
};
Yt.prototype.add = function(t, e) {
  var r = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    r._dirEdgeList.add(o);
    var s = o.getSym(), a = s.getNode();
    a.isVisited() || e.push(a);
  }
};
Yt.prototype.getNodes = function() {
  return this._nodes;
};
Yt.prototype.getDirectedEdges = function() {
  return this._dirEdgeList;
};
Yt.prototype.interfaces_ = function() {
  return [Ee];
};
Yt.prototype.getClass = function() {
  return Yt;
};
var tt = function n() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var r = arguments[0];
      this.init(1), this.location[N.ON] = r;
    } else if (arguments[0] instanceof n) {
      var i = arguments[0];
      if (this.init(i.location.length), i !== null)
        for (var o = 0; o < this.location.length; o++)
          t.location[o] = i.location[o];
    }
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    this.init(3), this.location[N.ON] = s, this.location[N.LEFT] = a, this.location[N.RIGHT] = u;
  }
};
tt.prototype.setAllLocations = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    e.location[r] = t;
};
tt.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== v.NONE)
      return !1;
  return !0;
};
tt.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    e.location[r] === v.NONE && (e.location[r] = t);
};
tt.prototype.isLine = function() {
  return this.location.length === 1;
};
tt.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var r = new Array(3).fill(null);
    r[N.ON] = this.location[N.ON], r[N.LEFT] = v.NONE, r[N.RIGHT] = v.NONE, this.location = r;
  }
  for (var i = 0; i < this.location.length; i++)
    e.location[i] === v.NONE && i < t.location.length && (e.location[i] = t.location[i]);
};
tt.prototype.getLocations = function() {
  return this.location;
};
tt.prototype.flip = function() {
  if (this.location.length <= 1)
    return null;
  var t = this.location[N.LEFT];
  this.location[N.LEFT] = this.location[N.RIGHT], this.location[N.RIGHT] = t;
};
tt.prototype.toString = function() {
  var t = new Je();
  return this.location.length > 1 && t.append(v.toLocationSymbol(this.location[N.LEFT])), t.append(v.toLocationSymbol(this.location[N.ON])), this.location.length > 1 && t.append(v.toLocationSymbol(this.location[N.RIGHT])), t.toString();
};
tt.prototype.setLocations = function(t, e, r) {
  this.location[N.ON] = t, this.location[N.LEFT] = e, this.location[N.RIGHT] = r;
};
tt.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : v.NONE;
};
tt.prototype.isArea = function() {
  return this.location.length > 1;
};
tt.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === v.NONE)
      return !0;
  return !1;
};
tt.prototype.setLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setLocation(N.ON, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this.location[e] = r;
  }
};
tt.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(v.NONE);
};
tt.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
tt.prototype.allPositionsEqual = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    if (e.location[r] !== t)
      return !1;
  return !0;
};
tt.prototype.interfaces_ = function() {
  return [];
};
tt.prototype.getClass = function() {
  return tt;
};
var Q = function n() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new tt(t), this.elt[1] = new tt(t);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.elt[0] = new tt(e.elt[0]), this.elt[1] = new tt(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.elt[0] = new tt(v.NONE), this.elt[1] = new tt(v.NONE), this.elt[r].setLocation(i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    this.elt[0] = new tt(o, s, a), this.elt[1] = new tt(o, s, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], c = arguments[2], f = arguments[3];
    this.elt[0] = new tt(v.NONE, v.NONE, v.NONE), this.elt[1] = new tt(v.NONE, v.NONE, v.NONE), this.elt[u].setLocations(l, c, f);
  }
};
Q.prototype.getGeometryCount = function() {
  var t = 0;
  return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
};
Q.prototype.setAllLocations = function(t, e) {
  this.elt[t].setAllLocations(e);
};
Q.prototype.isNull = function(t) {
  return this.elt[t].isNull();
};
Q.prototype.setAllLocationsIfNull = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this.elt[e].setAllLocationsIfNull(r);
  }
};
Q.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
Q.prototype.merge = function(t) {
  for (var e = this, r = 0; r < 2; r++)
    e.elt[r] === null && t.elt[r] !== null ? e.elt[r] = new tt(t.elt[r]) : e.elt[r].merge(t.elt[r]);
};
Q.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
Q.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(N.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return this.elt[e].get(r);
  }
};
Q.prototype.toString = function() {
  var t = new Je();
  return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
};
Q.prototype.isArea = function() {
  if (arguments.length === 0)
    return this.elt[0].isArea() || this.elt[1].isArea();
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].isArea();
  }
};
Q.prototype.isAnyNull = function(t) {
  return this.elt[t].isAnyNull();
};
Q.prototype.setLocation = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.elt[t].setLocation(N.ON, e);
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this.elt[r].setLocation(i, o);
  }
};
Q.prototype.isEqualOnSide = function(t, e) {
  return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
};
Q.prototype.allPositionsEqual = function(t, e) {
  return this.elt[t].allPositionsEqual(e);
};
Q.prototype.toLine = function(t) {
  this.elt[t].isArea() && (this.elt[t] = new tt(this.elt[t].location[0]));
};
Q.prototype.interfaces_ = function() {
  return [];
};
Q.prototype.getClass = function() {
  return Q;
};
Q.toLineLabel = function(t) {
  for (var e = new Q(v.NONE), r = 0; r < 2; r++)
    e.setLocation(r, t.getLocation(r));
  return e;
};
var mt = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new S(), this._pts = new S(), this._label = new Q(v.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new S(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
mt.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), r = 0; r < this._pts.size(); r++)
    e[r] = t._pts.get(r);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = L.isCCW(this._ring.getCoordinates());
};
mt.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
mt.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var r = t, i = !0;
  do {
    if (r === null)
      throw new Nr("Found null DirectedEdge");
    if (r.getEdgeRing() === e)
      throw new Nr("Directed Edge visited twice during ring-building at " + r.getCoordinate());
    e._edges.add(r);
    var o = r.getLabel();
    V.isTrue(o.isArea()), e.mergeLabel(o), e.addPoints(r.getEdge(), r.isForward(), i), i = !1, e.setEdgeRing(r, e), r = e.getNext(r);
  } while (r !== this._startDe);
};
mt.prototype.getLinearRing = function() {
  return this._ring;
};
mt.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
mt.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var r = e.getNode(), i = r.getEdges().getOutgoingDegree(t);
    i > t._maxNodeDegree && (t._maxNodeDegree = i), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
mt.prototype.addPoints = function(t, e, r) {
  var i = this, o = t.getCoordinates();
  if (e) {
    var s = 1;
    r && (s = 0);
    for (var a = s; a < o.length; a++)
      i._pts.add(o[a]);
  } else {
    var u = o.length - 2;
    r && (u = o.length - 1);
    for (var l = u; l >= 0; l--)
      i._pts.add(o[l]);
  }
};
mt.prototype.isHole = function() {
  return this._isHole;
};
mt.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
mt.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), r = e.getEnvelopeInternal();
  if (!r.contains(t) || !L.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var i = this._holes.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.containsPoint(t))
      return !1;
  }
  return !0;
};
mt.prototype.addHole = function(t) {
  this._holes.add(t);
};
mt.prototype.isShell = function() {
  return this._shell === null;
};
mt.prototype.getLabel = function() {
  return this._label;
};
mt.prototype.getEdges = function() {
  return this._edges;
};
mt.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
mt.prototype.getShell = function() {
  return this._shell;
};
mt.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = e.getLocation(r, N.RIGHT);
    if (i === v.NONE)
      return null;
    if (this._label.getLocation(r) === v.NONE)
      return this._label.setLocation(r, i), null;
  }
};
mt.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
mt.prototype.toPolygon = function(t) {
  for (var e = this, r = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++)
    r[i] = e._holes.get(i).getLinearRing();
  var o = t.createPolygon(this.getLinearRing(), r);
  return o;
};
mt.prototype.interfaces_ = function() {
  return [];
};
mt.prototype.getClass = function() {
  return mt;
};
var zu = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.setEdgeRing = function(r, i) {
    r.setMinEdgeRing(i);
  }, t.prototype.getNext = function(r) {
    return r.getNextMin();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(mt), Uu = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var r = this, i = new S(), o = this._startDe;
    do {
      if (o.getMinEdgeRing() === null) {
        var s = new zu(o, r._geometryFactory);
        i.add(s);
      }
      o = o.getNext();
    } while (o !== this._startDe);
    return i;
  }, t.prototype.setEdgeRing = function(r, i) {
    r.setEdgeRing(i);
  }, t.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
    var r = this, i = this._startDe;
    do {
      var o = i.getNode();
      o.getEdges().linkMinimalDirectedEdges(r), i = i.getNext();
    } while (i !== this._startDe);
  }, t.prototype.getNext = function(r) {
    return r.getNext();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(mt), le = function() {
  if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._label = t;
    }
  }
};
le.prototype.setVisited = function(t) {
  this._isVisited = t;
};
le.prototype.setInResult = function(t) {
  this._isInResult = t;
};
le.prototype.isCovered = function() {
  return this._isCovered;
};
le.prototype.isCoveredSet = function() {
  return this._isCoveredSet;
};
le.prototype.setLabel = function(t) {
  this._label = t;
};
le.prototype.getLabel = function() {
  return this._label;
};
le.prototype.setCovered = function(t) {
  this._isCovered = t, this._isCoveredSet = !0;
};
le.prototype.updateIM = function(t) {
  V.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
};
le.prototype.isInResult = function() {
  return this._isInResult;
};
le.prototype.isVisited = function() {
  return this._isVisited;
};
le.prototype.interfaces_ = function() {
  return [];
};
le.prototype.getClass = function() {
  return le;
};
var go = function(n) {
  function t() {
    n.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], r = arguments[1];
    this._coord = e, this._edges = r, this._label = new Q(0, v.NONE);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isIncidentEdgeInResult = function() {
    for (var r = this.getEdges().getEdges().iterator(); r.hasNext(); ) {
      var i = r.next();
      if (i.getEdge().isInResult())
        return !0;
    }
    return !1;
  }, t.prototype.isIsolated = function() {
    return this._label.getGeometryCount() === 1;
  }, t.prototype.getCoordinate = function() {
    return this._coord;
  }, t.prototype.print = function(r) {
    r.println("node " + this._coord + " lbl: " + this._label);
  }, t.prototype.computeIM = function(r) {
  }, t.prototype.computeMergedLocation = function(r, i) {
    var o = v.NONE;
    if (o = this._label.getLocation(i), !r.isNull(i)) {
      var s = r.getLocation(i);
      o !== v.BOUNDARY && (o = s);
    }
    return o;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      this._label === null ? this._label = new Q(r, i) : this._label.setLocation(r, i);
    } else
      return n.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var r = this;
    if (arguments[0] instanceof t) {
      var i = arguments[0];
      this.mergeLabel(i._label);
    } else if (arguments[0] instanceof Q)
      for (var o = arguments[0], s = 0; s < 2; s++) {
        var a = r.computeMergedLocation(o, s), u = r._label.getLocation(s);
        u === v.NONE && r._label.setLocation(s, a);
      }
  }, t.prototype.add = function(r) {
    this._edges.insert(r), r.setNode(this);
  }, t.prototype.setLabelBoundary = function(r) {
    if (this._label === null)
      return null;
    var i = v.NONE;
    this._label !== null && (i = this._label.getLocation(r));
    var o = null;
    switch (i) {
      case v.BOUNDARY:
        o = v.INTERIOR;
        break;
      case v.INTERIOR:
        o = v.BOUNDARY;
        break;
      default:
        o = v.BOUNDARY;
        break;
    }
    this._label.setLocation(r, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(le), Ye = function() {
  this.nodeMap = new At(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
Ye.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
Ye.prototype.addNode = function() {
  if (arguments[0] instanceof d) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof go) {
    var r = arguments[0], i = this.nodeMap.get(r.getCoordinate());
    return i === null ? (this.nodeMap.put(r.getCoordinate(), r), r) : (i.mergeLabel(r), i);
  }
};
Ye.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
Ye.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
Ye.prototype.values = function() {
  return this.nodeMap.values();
};
Ye.prototype.getBoundaryNodes = function(t) {
  for (var e = new S(), r = this.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.getLabel().getLocation(t) === v.BOUNDARY && e.add(i);
  }
  return e;
};
Ye.prototype.add = function(t) {
  var e = t.getCoordinate(), r = this.addNode(e);
  r.add(t);
};
Ye.prototype.interfaces_ = function() {
  return [];
};
Ye.prototype.getClass = function() {
  return Ye;
};
var J = function() {
}, Ri = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
J.prototype.interfaces_ = function() {
  return [];
};
J.prototype.getClass = function() {
  return J;
};
J.isNorthern = function(t) {
  return t === J.NE || t === J.NW;
};
J.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var r = (t - e + 4) % 4;
  return r === 2;
};
J.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var r = (t - e + 4) % 4;
  if (r === 2)
    return -1;
  var i = t < e ? t : e, o = t > e ? t : e;
  return i === 0 && o === 3 ? 3 : i;
};
J.isInHalfPlane = function(t, e) {
  return e === J.SE ? t === J.SE || t === J.SW : t === e || t === e + 1;
};
J.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new it("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? J.NE : J.SE : e >= 0 ? J.NW : J.SW;
  } else if (arguments[0] instanceof d && arguments[1] instanceof d) {
    var r = arguments[0], i = arguments[1];
    if (i.x === r.x && i.y === r.y)
      throw new it("Cannot compute the quadrant for two identical points " + r);
    return i.x >= r.x ? i.y >= r.y ? J.NE : J.SE : i.y >= r.y ? J.NW : J.SW;
  }
};
Ri.NE.get = function() {
  return 0;
};
Ri.NW.get = function() {
  return 1;
};
Ri.SW.get = function() {
  return 2;
};
Ri.SE.get = function() {
  return 3;
};
Object.defineProperties(J, Ri);
var Ft = function() {
  if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
    var t = arguments[0];
    this._edge = t;
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = null;
    this._edge = e, this.init(r, i), this._label = o;
  } else if (arguments.length === 4) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = arguments[3];
    this._edge = s, this.init(a, u), this._label = l;
  }
};
Ft.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : L.computeOrientation(t._p0, t._p1, this._p1);
};
Ft.prototype.getDy = function() {
  return this._dy;
};
Ft.prototype.getCoordinate = function() {
  return this._p0;
};
Ft.prototype.setNode = function(t) {
  this._node = t;
};
Ft.prototype.print = function(t) {
  var e = Math.atan2(this._dy, this._dx), r = this.getClass().getName(), i = r.lastIndexOf("."), o = r.substring(i + 1);
  t.print("  " + o + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
};
Ft.prototype.compareTo = function(t) {
  var e = t;
  return this.compareDirection(e);
};
Ft.prototype.getDirectedCoordinate = function() {
  return this._p1;
};
Ft.prototype.getDx = function() {
  return this._dx;
};
Ft.prototype.getLabel = function() {
  return this._label;
};
Ft.prototype.getEdge = function() {
  return this._edge;
};
Ft.prototype.getQuadrant = function() {
  return this._quadrant;
};
Ft.prototype.getNode = function() {
  return this._node;
};
Ft.prototype.toString = function() {
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), r = e.lastIndexOf("."), i = e.substring(r + 1);
  return "  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
Ft.prototype.computeLabel = function(t) {
};
Ft.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = J.quadrant(this._dx, this._dy), V.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
Ft.prototype.interfaces_ = function() {
  return [Ee];
};
Ft.prototype.getClass = function() {
  return Ft;
};
var Do = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    if (n.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = r, r)
      this.init(e.getCoordinate(0), e.getCoordinate(1));
    else {
      var i = e.getNumPoints() - 1;
      this.init(e.getCoordinate(i), e.getCoordinate(i - 1));
    }
    this.computeDirectedLabel();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getNextMin = function() {
    return this._nextMin;
  }, t.prototype.getDepth = function(r) {
    return this._depth[r];
  }, t.prototype.setVisited = function(r) {
    this._isVisited = r;
  }, t.prototype.computeDirectedLabel = function() {
    this._label = new Q(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(r, i) {
    if (this._depth[r] !== -999 && this._depth[r] !== i)
      throw new Nr("assigned depths do not match", this.getCoordinate());
    this._depth[r] = i;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var r = this, i = !0, o = 0; o < 2; o++)
      r._label.isArea(o) && r._label.getLocation(o, N.LEFT) === v.INTERIOR && r._label.getLocation(o, N.RIGHT) === v.INTERIOR || (i = !1);
    return i;
  }, t.prototype.setNextMin = function(r) {
    this._nextMin = r;
  }, t.prototype.print = function(r) {
    n.prototype.print.call(this, r), r.print(" " + this._depth[N.LEFT] + "/" + this._depth[N.RIGHT]), r.print(" (" + this.getDepthDelta() + ")"), this._isInResult && r.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(r) {
    this._minEdgeRing = r;
  }, t.prototype.isLineEdge = function() {
    var r = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, v.EXTERIOR), o = !this._label.isArea(1) || this._label.allPositionsEqual(1, v.EXTERIOR);
    return r && i && o;
  }, t.prototype.setEdgeRing = function(r) {
    this._edgeRing = r;
  }, t.prototype.getMinEdgeRing = function() {
    return this._minEdgeRing;
  }, t.prototype.getDepthDelta = function() {
    var r = this._edge.getDepthDelta();
    return this._isForward || (r = -r), r;
  }, t.prototype.setInResult = function(r) {
    this._isInResult = r;
  }, t.prototype.getSym = function() {
    return this._sym;
  }, t.prototype.isForward = function() {
    return this._isForward;
  }, t.prototype.getEdge = function() {
    return this._edge;
  }, t.prototype.printEdge = function(r) {
    this.print(r), r.print(" "), this._isForward ? this._edge.print(r) : this._edge.printReverse(r);
  }, t.prototype.setSym = function(r) {
    this._sym = r;
  }, t.prototype.setVisitedEdge = function(r) {
    this.setVisited(r), this._sym.setVisited(r);
  }, t.prototype.setEdgeDepths = function(r, i) {
    var o = this.getEdge().getDepthDelta();
    this._isForward || (o = -o);
    var s = 1;
    r === N.LEFT && (s = -1);
    var a = N.opposite(r), u = o * s, l = i + u;
    this.setDepth(r, i), this.setDepth(a, l);
  }, t.prototype.getEdgeRing = function() {
    return this._edgeRing;
  }, t.prototype.isInResult = function() {
    return this._isInResult;
  }, t.prototype.setNext = function(r) {
    this._next = r;
  }, t.prototype.isVisited = function() {
    return this._isVisited;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.depthFactor = function(r, i) {
    return r === v.EXTERIOR && i === v.INTERIOR ? 1 : r === v.INTERIOR && i === v.EXTERIOR ? -1 : 0;
  }, t;
}(Ft), Vn = function() {
};
Vn.prototype.createNode = function(t) {
  return new go(t, null);
};
Vn.prototype.interfaces_ = function() {
  return [];
};
Vn.prototype.getClass = function() {
  return Vn;
};
var st = function() {
  if (this._edges = new S(), this._nodes = null, this._edgeEndList = new S(), arguments.length === 0)
    this._nodes = new Ye(new Vn());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new Ye(t);
  }
};
st.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var r = 0; r < this._edges.size(); r++) {
    t.println("edge " + r + ":");
    var i = e._edges.get(r);
    i.print(t), i.eiList.print(t);
  }
};
st.prototype.find = function(t) {
  return this._nodes.find(t);
};
st.prototype.addNode = function() {
  if (arguments[0] instanceof go) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof d) {
    var e = arguments[0];
    return this._nodes.addNode(e);
  }
};
st.prototype.getNodeIterator = function() {
  return this._nodes.iterator();
};
st.prototype.linkResultDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkResultDirectedEdges();
  }
};
st.prototype.debugPrintln = function(t) {
  Rt.out.println(t);
};
st.prototype.isBoundaryNode = function(t, e) {
  var r = this._nodes.find(e);
  if (r === null)
    return !1;
  var i = r.getLabel();
  return i !== null && i.getLocation(t) === v.BOUNDARY;
};
st.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
st.prototype.matchInSameDirection = function(t, e, r, i) {
  return t.equals(r) ? L.computeOrientation(t, e, i) === L.COLLINEAR && J.quadrant(t, e) === J.quadrant(r, i) : !1;
};
st.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
st.prototype.debugPrint = function(t) {
  Rt.out.print(t);
};
st.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
st.prototype.findEdgeInSameDirection = function(t, e) {
  for (var r = this, i = 0; i < this._edges.size(); i++) {
    var o = r._edges.get(i), s = o.getCoordinates();
    if (r.matchInSameDirection(t, e, s[0], s[1]) || r.matchInSameDirection(t, e, s[s.length - 1], s[s.length - 2]))
      return o;
  }
  return null;
};
st.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
st.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.getEdge() === t)
      return r;
  }
  return null;
};
st.prototype.addEdges = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e._edges.add(i);
    var o = new Do(i, !0), s = new Do(i, !1);
    o.setSym(s), s.setSym(o), e.add(o), e.add(s);
  }
};
st.prototype.add = function(t) {
  this._nodes.add(t), this._edgeEndList.add(t);
};
st.prototype.getNodes = function() {
  return this._nodes.values();
};
st.prototype.findEdge = function(t, e) {
  for (var r = this, i = 0; i < this._edges.size(); i++) {
    var o = r._edges.get(i), s = o.getCoordinates();
    if (t.equals(s[0]) && e.equals(s[1]))
      return o;
  }
  return null;
};
st.prototype.interfaces_ = function() {
  return [];
};
st.prototype.getClass = function() {
  return st;
};
st.linkResultDirectedEdges = function(t) {
  for (var e = t.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.getEdges().linkResultDirectedEdges();
  }
};
var ee = function() {
  this._geometryFactory = null, this._shellList = new S();
  var t = arguments[0];
  this._geometryFactory = t;
};
ee.prototype.sortShellsAndHoles = function(t, e, r) {
  for (var i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() ? r.add(o) : e.add(o);
  }
};
ee.prototype.computePolygons = function(t) {
  for (var e = this, r = new S(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.toPolygon(e._geometryFactory);
    r.add(s);
  }
  return r;
};
ee.prototype.placeFreeHoles = function(t, e) {
  for (var r = this, i = e.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.getShell() === null) {
      var s = r.findEdgeRingContaining(o, t);
      if (s === null)
        throw new Nr("unable to assign hole to a shell", o.getCoordinate(0));
      o.setShell(s);
    }
  }
};
ee.prototype.buildMinimalEdgeRings = function(t, e, r) {
  for (var i = this, o = new S(), s = t.iterator(); s.hasNext(); ) {
    var a = s.next();
    if (a.getMaxNodeDegree() > 2) {
      a.linkDirectedEdgesForMinimalEdgeRings();
      var u = a.buildMinimalRings(), l = i.findShell(u);
      l !== null ? (i.placePolygonHoles(l, u), e.add(l)) : r.addAll(u);
    } else
      o.add(a);
  }
  return o;
};
ee.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.containsPoint(t))
      return !0;
  }
  return !1;
};
ee.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, r = new S(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isInResult() && o.getLabel().isArea() && o.getEdgeRing() === null) {
      var s = new Uu(o, e._geometryFactory);
      r.add(s), s.setInResult();
    }
  }
  return r;
};
ee.prototype.placePolygonHoles = function(t, e) {
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.isHole() && i.setShell(t);
  }
};
ee.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
ee.prototype.findEdgeRingContaining = function(t, e) {
  for (var r = t.getLinearRing(), i = r.getEnvelopeInternal(), o = r.getCoordinateN(0), s = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), f = c.getEnvelopeInternal();
    s !== null && (a = s.getLinearRing().getEnvelopeInternal());
    var h = !1;
    f.contains(i) && L.isPointInRing(o, c.getCoordinates()) && (h = !0), h && (s === null || a.contains(f)) && (s = l);
  }
  return s;
};
ee.prototype.findShell = function(t) {
  for (var e = 0, r = null, i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() || (r = o, e++);
  }
  return V.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), r;
};
ee.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    st.linkResultDirectedEdges(r);
    var i = this.buildMaximalEdgeRings(e), o = new S(), s = this.buildMinimalEdgeRings(i, this._shellList, o);
    this.sortShellsAndHoles(s, this._shellList, o), this.placeFreeHoles(this._shellList, o);
  }
};
ee.prototype.interfaces_ = function() {
  return [];
};
ee.prototype.getClass = function() {
  return ee;
};
var kn = function() {
};
kn.prototype.getBounds = function() {
};
kn.prototype.interfaces_ = function() {
  return [];
};
kn.prototype.getClass = function() {
  return kn;
};
var Le = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
Le.prototype.getItem = function() {
  return this._item;
};
Le.prototype.getBounds = function() {
  return this._bounds;
};
Le.prototype.interfaces_ = function() {
  return [kn, Ie];
};
Le.prototype.getClass = function() {
  return Le;
};
var xr = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new S(), this._items.add(null);
};
xr.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
xr.prototype.size = function() {
  return this._size;
};
xr.prototype.reorder = function(t) {
  for (var e = this, r = null, i = this._items.get(t); t * 2 <= this._size && (r = t * 2, r !== e._size && e._items.get(r + 1).compareTo(e._items.get(r)) < 0 && r++, e._items.get(r).compareTo(i) < 0); t = r)
    e._items.set(t, e._items.get(r));
  this._items.set(t, i);
};
xr.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
xr.prototype.isEmpty = function() {
  return this._size === 0;
};
xr.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var r = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(r / 2))) < 0; r /= 2)
    e._items.set(r, e._items.get(Math.trunc(r / 2)));
  this._items.set(r, t);
};
xr.prototype.interfaces_ = function() {
  return [];
};
xr.prototype.getClass = function() {
  return xr;
};
var Ar = function() {
};
Ar.prototype.visitItem = function(t) {
};
Ar.prototype.interfaces_ = function() {
  return [];
};
Ar.prototype.getClass = function() {
  return Ar;
};
var fn = function() {
};
fn.prototype.insert = function(t, e) {
};
fn.prototype.remove = function(t, e) {
};
fn.prototype.query = function() {
};
fn.prototype.interfaces_ = function() {
  return [];
};
fn.prototype.getClass = function() {
  return fn;
};
var Ct = function() {
  if (this._childBoundables = new S(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, ua = { serialVersionUID: { configurable: !0 } };
Ct.prototype.getLevel = function() {
  return this._level;
};
Ct.prototype.size = function() {
  return this._childBoundables.size();
};
Ct.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Ct.prototype.addChildBoundable = function(t) {
  V.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Ct.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Ct.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Ct.prototype.interfaces_ = function() {
  return [kn, Ie];
};
Ct.prototype.getClass = function() {
  return Ct;
};
ua.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Ct, ua);
var we = function() {
};
we.reverseOrder = function() {
  return {
    compare: function(e, r) {
      return r.compareTo(e);
    }
  };
};
we.min = function(t) {
  return we.sort(t), t.get(0);
};
we.sort = function(t, e) {
  var r = t.toArray();
  e ? Wr.sort(r, e) : Wr.sort(r);
  for (var i = t.iterator(), o = 0, s = r.length; o < s; o++)
    i.next(), i.set(r[o]);
};
we.singletonList = function(t) {
  var e = new S();
  return e.add(t), e;
};
var vt = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = r, this._distance = this.distance();
};
vt.prototype.expandToQueue = function(t, e) {
  var r = vt.isComposite(this._boundable1), i = vt.isComposite(this._boundable2);
  if (r && i)
    return vt.area(this._boundable1) > vt.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (r)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (i)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new it("neither boundable is composite");
};
vt.prototype.isLeaves = function() {
  return !(vt.isComposite(this._boundable1) || vt.isComposite(this._boundable2));
};
vt.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
vt.prototype.expand = function(t, e, r, i) {
  for (var o = this, s = t.getChildBoundables(), a = s.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new vt(u, e, o._itemDistance);
    l.getDistance() < i && r.add(l);
  }
};
vt.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
vt.prototype.getDistance = function() {
  return this._distance;
};
vt.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
vt.prototype.interfaces_ = function() {
  return [Ee];
};
vt.prototype.getClass = function() {
  return vt;
};
vt.area = function(t) {
  return t.getBounds().getArea();
};
vt.isComposite = function(t) {
  return t instanceof Ct;
};
var xt = function n() {
  if (this._root = null, this._built = !1, this._itemBoundables = new S(), this._nodeCapacity = null, arguments.length === 0) {
    var t = n.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    V.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, vo = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
xt.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
xt.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
xt.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      o instanceof Ct ? r += t.size(o) : o instanceof Le && (r += 1);
    }
    return r;
  }
};
xt.prototype.removeItem = function(t, e) {
  for (var r = null, i = t.getChildBoundables().iterator(); i.hasNext(); ) {
    var o = i.next();
    o instanceof Le && o.getItem() === e && (r = o);
  }
  return r !== null ? (t.getChildBoundables().remove(r), !0) : !1;
};
xt.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new S() : e;
  } else if (arguments.length === 1) {
    for (var r = arguments[0], i = new S(), o = r.getChildBoundables().iterator(); o.hasNext(); ) {
      var s = o.next();
      if (s instanceof Ct) {
        var a = t.itemsTree(s);
        a !== null && i.add(a);
      } else
        s instanceof Le ? i.add(s.getItem()) : V.shouldNeverReachHere();
    }
    return i.size() <= 0 ? null : i;
  }
};
xt.prototype.insert = function(t, e) {
  V.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Le(t, e));
};
xt.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], r = new S();
    return this.boundablesAtLevel(e, this._root, r), r;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (V.isTrue(i > -2), o.getLevel() === i)
      return s.add(o), null;
    for (var a = o.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Ct ? t.boundablesAtLevel(i, u, s) : (V.isTrue(u instanceof Le), i === -1 && s.add(u));
    }
    return null;
  }
};
xt.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var r = new S();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, r), r;
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), i) && this.query(i, this._root, o);
  } else if (arguments.length === 3) {
    if (M(arguments[2], Ar) && arguments[0] instanceof Object && arguments[1] instanceof Ct)
      for (var s = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var f = l.get(c);
        t.getIntersectsOp().intersects(f.getBounds(), s) && (f instanceof Ct ? t.query(s, f, u) : f instanceof Le ? u.visitItem(f.getItem()) : V.shouldNeverReachHere());
      }
    else if (M(arguments[2], Ne) && arguments[0] instanceof Object && arguments[1] instanceof Ct)
      for (var h = arguments[0], p = arguments[1], g = arguments[2], y = p.getChildBoundables(), m = 0; m < y.size(); m++) {
        var _ = y.get(m);
        t.getIntersectsOp().intersects(_.getBounds(), h) && (_ instanceof Ct ? t.query(h, _, g) : _ instanceof Le ? g.add(_.getItem()) : V.shouldNeverReachHere());
      }
  }
};
xt.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
xt.prototype.getRoot = function() {
  return this.build(), this._root;
};
xt.prototype.remove = function() {
  var t = this;
  if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return this.build(), this.getIntersectsOp().intersects(this._root.getBounds(), e) ? this.remove(e, this._root, r) : !1;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = this.removeItem(o, s);
    if (a)
      return !0;
    for (var u = null, l = o.getChildBoundables().iterator(); l.hasNext(); ) {
      var c = l.next();
      if (t.getIntersectsOp().intersects(c.getBounds(), i) && c instanceof Ct && (a = t.remove(i, c, s), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && o.getChildBoundables().remove(u), a;
  }
};
xt.prototype.createHigherLevels = function(t, e) {
  V.isTrue(!t.isEmpty());
  var r = this.createParentBoundables(t, e + 1);
  return r.size() === 1 ? r.get(0) : this.createHigherLevels(r, e + 1);
};
xt.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      if (o instanceof Ct) {
        var s = t.depth(o);
        s > r && (r = s);
      }
    }
    return r + 1;
  }
};
xt.prototype.createParentBoundables = function(t, e) {
  var r = this;
  V.isTrue(!t.isEmpty());
  var i = new S();
  i.add(this.createNode(e));
  var o = new S(t);
  we.sort(o, this.getComparator());
  for (var s = o.iterator(); s.hasNext(); ) {
    var a = s.next();
    r.lastNode(i).getChildBoundables().size() === r.getNodeCapacity() && i.add(r.createNode(e)), r.lastNode(i).addChildBoundable(a);
  }
  return i;
};
xt.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
xt.prototype.interfaces_ = function() {
  return [Ie];
};
xt.prototype.getClass = function() {
  return xt;
};
xt.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
vo.IntersectsOp.get = function() {
  return qu;
};
vo.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
vo.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(xt, vo);
var qu = function() {
}, zn = function() {
};
zn.prototype.distance = function(t, e) {
};
zn.prototype.interfaces_ = function() {
  return [];
};
zn.prototype.getClass = function() {
  return zn;
};
var la = function(n) {
  function t(r) {
    r = r || t.DEFAULT_NODE_CAPACITY, n.call(this, r);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(i, o) {
    var s = this;
    V.isTrue(i.length > 0);
    for (var a = new S(), u = 0; u < i.length; u++)
      a.addAll(s.createParentBoundablesFromVerticalSlice(i[u], o));
    return a;
  }, t.prototype.createNode = function(i) {
    return new Es(i);
  }, t.prototype.size = function() {
    return arguments.length === 0 ? n.prototype.size.call(this) : n.prototype.size.apply(this, arguments);
  }, t.prototype.insert = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      if (i.isNull())
        return null;
      n.prototype.insert.call(this, i, o);
    } else
      return n.prototype.insert.apply(this, arguments);
  }, t.prototype.getIntersectsOp = function() {
    return t.intersectsOp;
  }, t.prototype.verticalSlices = function(i, o) {
    for (var s = Math.trunc(Math.ceil(i.size() / o)), a = new Array(o).fill(null), u = i.iterator(), l = 0; l < o; l++) {
      a[l] = new S();
      for (var c = 0; u.hasNext() && c < s; ) {
        var f = u.next();
        a[l].add(f), c++;
      }
    }
    return a;
  }, t.prototype.query = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return n.prototype.query.call(this, i);
    } else if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      n.prototype.query.call(this, o, s);
    } else if (arguments.length === 3) {
      if (M(arguments[2], Ar) && arguments[0] instanceof Object && arguments[1] instanceof Ct) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        n.prototype.query.call(this, a, u, l);
      } else if (M(arguments[2], Ne) && arguments[0] instanceof Object && arguments[1] instanceof Ct) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        n.prototype.query.call(this, c, f, h);
      }
    }
  }, t.prototype.getComparator = function() {
    return t.yComparator;
  }, t.prototype.createParentBoundablesFromVerticalSlice = function(i, o) {
    return n.prototype.createParentBoundables.call(this, i, o);
  }, t.prototype.remove = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return n.prototype.remove.call(this, i, o);
    } else
      return n.prototype.remove.apply(this, arguments);
  }, t.prototype.depth = function() {
    return arguments.length === 0 ? n.prototype.depth.call(this) : n.prototype.depth.apply(this, arguments);
  }, t.prototype.createParentBoundables = function(i, o) {
    V.isTrue(!i.isEmpty());
    var s = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), a = new S(i);
    we.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(s))));
    return this.createParentBoundablesFromVerticalSlices(u, o);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (M(arguments[0], zn)) {
        var i = arguments[0], o = new vt(this.getRoot(), this.getRoot(), i);
        return this.nearestNeighbour(o);
      } else if (arguments[0] instanceof vt) {
        var s = arguments[0];
        return this.nearestNeighbour(s, F.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && M(arguments[1], zn)) {
        var a = arguments[0], u = arguments[1], l = new vt(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof vt && typeof arguments[1] == "number") {
        var c = arguments[0], f = arguments[1], h = f, p = null, g = new xr();
        for (g.add(c); !g.isEmpty() && h > 0; ) {
          var y = g.poll(), m = y.getDistance();
          if (m >= h)
            break;
          y.isLeaves() ? (h = m, p = y) : y.expandToQueue(g, h);
        }
        return [p.getBoundable(0).getItem(), p.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var _ = arguments[0], I = arguments[1], C = arguments[2], x = new Le(_, I), b = new vt(this.getRoot(), x, C);
      return this.nearestNeighbour(b)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [fn, Ie];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(i) {
    return t.avg(i.getMinX(), i.getMaxX());
  }, t.avg = function(i, o) {
    return (i + o) / 2;
  }, t.centreY = function(i) {
    return t.avg(i.getMinY(), i.getMaxY());
  }, e.STRtreeNode.get = function() {
    return Es;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [On];
      },
      compare: function(r, i) {
        return n.compareDoubles(t.centreX(r.getBounds()), t.centreX(i.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [On];
      },
      compare: function(r, i) {
        return n.compareDoubles(t.centreY(r.getBounds()), t.centreY(i.getBounds()));
      }
    };
  }, e.intersectsOp.get = function() {
    return {
      interfaces_: function() {
        return [n.IntersectsOp];
      },
      intersects: function(r, i) {
        return r.intersects(i);
      }
    };
  }, e.DEFAULT_NODE_CAPACITY.get = function() {
    return 10;
  }, Object.defineProperties(t, e), t;
}(xt), Es = function(n) {
  function t() {
    var e = arguments[0];
    n.call(this, e);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var r = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      r === null ? r = new R(o.getBounds()) : r.expandToInclude(o.getBounds());
    }
    return r;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ct), jt = function() {
};
jt.prototype.interfaces_ = function() {
  return [];
};
jt.prototype.getClass = function() {
  return jt;
};
jt.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
jt.compare = function(t, e, r) {
  if (e.equals2D(r))
    return 0;
  var i = jt.relativeSign(e.x, r.x), o = jt.relativeSign(e.y, r.y);
  switch (t) {
    case 0:
      return jt.compareValue(i, o);
    case 1:
      return jt.compareValue(o, i);
    case 2:
      return jt.compareValue(o, -i);
    case 3:
      return jt.compareValue(-i, o);
    case 4:
      return jt.compareValue(-i, -o);
    case 5:
      return jt.compareValue(-o, -i);
    case 6:
      return jt.compareValue(-o, i);
    case 7:
      return jt.compareValue(i, -o);
  }
  return V.shouldNeverReachHere("invalid octant value"), 0;
};
jt.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var Fr = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
  this._segString = t, this.coord = new d(e), this.segmentIndex = r, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(r));
};
Fr.prototype.getCoordinate = function() {
  return this.coord;
};
Fr.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
Fr.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : jt.compare(this._segmentOctant, this.coord, e.coord);
};
Fr.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
Fr.prototype.isInterior = function() {
  return this._isInterior;
};
Fr.prototype.interfaces_ = function() {
  return [Ee];
};
Fr.prototype.getClass = function() {
  return Fr;
};
var Ht = function() {
  this._nodeMap = new At(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
Ht.prototype.getSplitCoordinates = function() {
  var t = this, e = new Pi();
  this.addEndpoints();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next();
    t.addEdgeCoordinates(i, o, e), i = o;
  }
  return e.toCoordinateArray();
};
Ht.prototype.addCollapsedNodes = function() {
  var t = this, e = new S();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next().intValue();
    t.add(t._edge.getCoordinate(i), i);
  }
};
Ht.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
Ht.prototype.findCollapsesFromExistingVertices = function(t) {
  for (var e = this, r = 0; r < this._edge.size() - 2; r++) {
    var i = e._edge.getCoordinate(r), o = e._edge.getCoordinate(r + 2);
    i.equals2D(o) && t.add(new ke(r + 1));
  }
};
Ht.prototype.addEdgeCoordinates = function(t, e, r) {
  var i = this, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  r.add(new d(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    r.add(i._edge.getCoordinate(a));
  s && r.add(new d(e.coord));
};
Ht.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
Ht.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
Ht.prototype.findCollapseIndex = function(t, e, r) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var i = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || i--, i === 1 ? (r[0] = t.segmentIndex + 1, !0) : !1;
};
Ht.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, r = new Array(1).fill(null), i = this.iterator(), o = i.next(); i.hasNext(); ) {
    var s = i.next(), a = e.findCollapseIndex(o, s, r);
    a && t.add(new ke(r[0])), o = s;
  }
};
Ht.prototype.getEdge = function() {
  return this._edge;
};
Ht.prototype.addEndpoints = function() {
  var t = this._edge.size() - 1;
  this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
};
Ht.prototype.createSplitEdge = function(t, e) {
  var r = this, i = e.segmentIndex - t.segmentIndex + 2, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new d(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = r._edge.getCoordinate(l);
  return s && (a[u] = new d(e.coord)), new dt(a, this._edge.getData());
};
Ht.prototype.add = function(t, e) {
  var r = new Fr(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(r);
  return i !== null ? (V.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(r, r), r);
};
Ht.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), r = t.get(0), i = r.getCoordinate(0);
  if (!i.equals2D(e[0]))
    throw new Ir("bad split edge start point at " + i);
  var o = t.get(t.size() - 1), s = o.getCoordinates(), a = s[s.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new Ir("bad split edge end point at " + a);
};
Ht.prototype.interfaces_ = function() {
  return [];
};
Ht.prototype.getClass = function() {
  return Ht;
};
var hn = function() {
};
hn.prototype.interfaces_ = function() {
  return [];
};
hn.prototype.getClass = function() {
  return hn;
};
hn.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new it("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var r = Math.abs(t), i = Math.abs(e);
    return t >= 0 ? e >= 0 ? r >= i ? 0 : 1 : r >= i ? 7 : 6 : e >= 0 ? r >= i ? 3 : 2 : r >= i ? 4 : 5;
  } else if (arguments[0] instanceof d && arguments[1] instanceof d) {
    var o = arguments[0], s = arguments[1], a = s.x - o.x, u = s.y - o.y;
    if (a === 0 && u === 0)
      throw new it("Cannot compute the octant for two identical points " + o);
    return hn.octant(a, u);
  }
};
var sr = function() {
};
sr.prototype.getCoordinates = function() {
};
sr.prototype.size = function() {
};
sr.prototype.getCoordinate = function(t) {
};
sr.prototype.isClosed = function() {
};
sr.prototype.setData = function(t) {
};
sr.prototype.getData = function() {
};
sr.prototype.interfaces_ = function() {
  return [];
};
sr.prototype.getClass = function() {
  return sr;
};
var _i = function() {
};
_i.prototype.addIntersection = function(t, e) {
};
_i.prototype.interfaces_ = function() {
  return [sr];
};
_i.prototype.getClass = function() {
  return _i;
};
var dt = function() {
  this._nodeList = new Ht(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
dt.prototype.getCoordinates = function() {
  return this._pts;
};
dt.prototype.size = function() {
  return this._pts.length;
};
dt.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
dt.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
dt.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
dt.prototype.setData = function(t) {
  this._data = t;
};
dt.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : hn.octant(t, e);
};
dt.prototype.getData = function() {
  return this._data;
};
dt.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var r = arguments[0], i = arguments[1], o = arguments[3], s = new d(r.getIntersection(o));
    this.addIntersection(s, i);
  }
};
dt.prototype.toString = function() {
  return xe.toLineString(new ht(this._pts));
};
dt.prototype.getNodeList = function() {
  return this._nodeList;
};
dt.prototype.addIntersectionNode = function(t, e) {
  var r = e, i = r + 1;
  if (i < this._pts.length) {
    var o = this._pts[i];
    t.equals2D(o) && (r = i);
  }
  var s = this._nodeList.add(t, r);
  return s;
};
dt.prototype.addIntersections = function(t, e, r) {
  for (var i = this, o = 0; o < t.getIntersectionNum(); o++)
    i.addIntersection(t, e, r, o);
};
dt.prototype.interfaces_ = function() {
  return [_i];
};
dt.prototype.getClass = function() {
  return dt;
};
dt.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new S();
    return dt.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var r = arguments[0], i = arguments[1], o = r.iterator(); o.hasNext(); ) {
      var s = o.next();
      s.getNodeList().addSplitEdges(i);
    }
};
var O = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new d(), this.p1 = new d();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new d(t.p0), this.p1 = new d(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = arguments[3];
    this.p0 = new d(e, r), this.p1 = new d(i, o);
  }
}, ca = { serialVersionUID: { configurable: !0 } };
O.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
O.prototype.orientationIndex = function() {
  if (arguments[0] instanceof O) {
    var t = arguments[0], e = L.orientationIndex(this.p0, this.p1, t.p0), r = L.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && r >= 0 || e <= 0 && r <= 0 ? Math.max(e, r) : 0;
  } else if (arguments[0] instanceof d) {
    var i = arguments[0];
    return L.orientationIndex(this.p0, this.p1, i);
  }
};
O.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
O.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
O.prototype.equals = function(t) {
  if (!(t instanceof O))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
O.prototype.intersection = function(t) {
  var e = new sn();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
O.prototype.project = function() {
  if (arguments[0] instanceof d) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new d(t);
    var e = this.projectionFactor(t), r = new d();
    return r.x = this.p0.x + e * (this.p1.x - this.p0.x), r.y = this.p0.y + e * (this.p1.y - this.p0.y), r;
  } else if (arguments[0] instanceof O) {
    var i = arguments[0], o = this.projectionFactor(i.p0), s = this.projectionFactor(i.p1);
    if (o >= 1 && s >= 1 || o <= 0 && s <= 0)
      return null;
    var a = this.project(i.p0);
    o < 0 && (a = this.p0), o > 1 && (a = this.p1);
    var u = this.project(i.p1);
    return s < 0 && (u = this.p0), s > 1 && (u = this.p1), new O(a, u);
  }
};
O.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
O.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
O.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
O.prototype.distancePerpendicular = function(t) {
  return L.distancePointLinePerpendicular(t, this.p0, this.p1);
};
O.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
O.prototype.midPoint = function() {
  return O.midPoint(this.p0, this.p1);
};
O.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, r = this.p1.y - this.p0.y, i = e * e + r * r;
  if (i <= 0)
    return F.NaN;
  var o = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * r) / i;
  return o;
};
O.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var r = new Array(2).fill(null), i = F.MAX_VALUE, o = null, s = this.closestPoint(t.p0);
  i = s.distance(t.p0), r[0] = s, r[1] = t.p0;
  var a = this.closestPoint(t.p1);
  o = a.distance(t.p1), o < i && (i = o, r[0] = a, r[1] = t.p1);
  var u = t.closestPoint(this.p0);
  o = u.distance(this.p0), o < i && (i = o, r[0] = this.p0, r[1] = u);
  var l = t.closestPoint(this.p1);
  return o = l.distance(this.p1), o < i && (i = o, r[0] = this.p1, r[1] = l), r;
};
O.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var r = this.p0.distance(t), i = this.p1.distance(t);
  return r < i ? this.p0 : this.p1;
};
O.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
O.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
O.prototype.compareTo = function(t) {
  var e = t, r = this.p0.compareTo(e.p0);
  return r !== 0 ? r : this.p1.compareTo(e.p1);
};
O.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
O.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
O.prototype.lineIntersection = function(t) {
  try {
    var e = Ce.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (r) {
    if (!(r instanceof $n))
      throw r;
  } finally {
  }
  return null;
};
O.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
O.prototype.pointAlongOffset = function(t, e) {
  var r = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), o = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y, a = Math.sqrt(o * o + s * s), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * o / a, l = e * s / a;
  }
  var c = r - l, f = i + u, h = new d(c, f);
  return h;
};
O.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = r.x, this.p1.y = r.y;
  }
};
O.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || F.isNaN(e)) && (e = 1), e;
};
O.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
O.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
O.prototype.distance = function() {
  if (arguments[0] instanceof O) {
    var t = arguments[0];
    return L.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof d) {
    var e = arguments[0];
    return L.distancePointLine(e, this.p0, this.p1);
  }
};
O.prototype.pointAlong = function(t) {
  var e = new d();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
O.prototype.hashCode = function() {
  var t = F.doubleToLongBits(this.p0.x);
  t ^= F.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), r = F.doubleToLongBits(this.p1.x);
  r ^= F.doubleToLongBits(this.p1.y) * 31;
  var i = Math.trunc(r) ^ Math.trunc(r >> 32);
  return e ^ i;
};
O.prototype.interfaces_ = function() {
  return [Ee, Ie];
};
O.prototype.getClass = function() {
  return O;
};
O.midPoint = function(t, e) {
  return new d((t.x + e.x) / 2, (t.y + e.y) / 2);
};
ca.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(O, ca);
var Ei = function() {
  this.tempEnv1 = new R(), this.tempEnv2 = new R(), this._overlapSeg1 = new O(), this._overlapSeg2 = new O();
};
Ei.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), r.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
Ei.prototype.interfaces_ = function() {
  return [];
};
Ei.prototype.getClass = function() {
  return Ei;
};
var re = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
  this._pts = t, this._start = e, this._end = r, this._context = i;
};
re.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
re.prototype.computeSelect = function(t, e, r, i) {
  var o = this._pts[e], s = this._pts[r];
  if (i.tempEnv1.init(o, s), r - e === 1)
    return i.select(this, e), null;
  if (!t.intersects(i.tempEnv1))
    return null;
  var a = Math.trunc((e + r) / 2);
  e < a && this.computeSelect(t, e, a, i), a < r && this.computeSelect(t, a, r, i);
};
re.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), r = 0, i = this._start; i <= this._end; i++)
    e[r++] = t._pts[i];
  return e;
};
re.prototype.computeOverlaps = function(t, e) {
  this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e);
};
re.prototype.setId = function(t) {
  this._id = t;
};
re.prototype.select = function(t, e) {
  this.computeSelect(t, this._start, this._end, e);
};
re.prototype.getEnvelope = function() {
  if (this._env === null) {
    var t = this._pts[this._start], e = this._pts[this._end];
    this._env = new R(t, e);
  }
  return this._env;
};
re.prototype.getEndIndex = function() {
  return this._end;
};
re.prototype.getStartIndex = function() {
  return this._start;
};
re.prototype.getContext = function() {
  return this._context;
};
re.prototype.getId = function() {
  return this._id;
};
re.prototype.computeOverlapsInternal = function(t, e, r, i, o, s) {
  var a = this._pts[t], u = this._pts[e], l = r._pts[i], c = r._pts[o];
  if (e - t === 1 && o - i === 1)
    return s.overlap(this, t, r, i), null;
  if (s.tempEnv1.init(a, u), s.tempEnv2.init(l, c), !s.tempEnv1.intersects(s.tempEnv2))
    return null;
  var f = Math.trunc((t + e) / 2), h = Math.trunc((i + o) / 2);
  t < f && (i < h && this.computeOverlapsInternal(t, f, r, i, h, s), h < o && this.computeOverlapsInternal(t, f, r, h, o, s)), f < e && (i < h && this.computeOverlapsInternal(f, e, r, i, h, s), h < o && this.computeOverlapsInternal(f, e, r, h, o, s));
};
re.prototype.interfaces_ = function() {
  return [];
};
re.prototype.getClass = function() {
  return re;
};
var Ve = function() {
};
Ve.prototype.interfaces_ = function() {
  return [];
};
Ve.prototype.getClass = function() {
  return Ve;
};
Ve.getChainStartIndices = function(t) {
  var e = 0, r = new S();
  r.add(new ke(e));
  do {
    var i = Ve.findChainEnd(t, e);
    r.add(new ke(i)), e = i;
  } while (e < t.length - 1);
  var o = Ve.toIntArray(r);
  return o;
};
Ve.findChainEnd = function(t, e) {
  for (var r = e; r < t.length - 1 && t[r].equals2D(t[r + 1]); )
    r++;
  if (r >= t.length - 1)
    return t.length - 1;
  for (var i = J.quadrant(t[r], t[r + 1]), o = e + 1; o < t.length; ) {
    if (!t[o - 1].equals2D(t[o])) {
      var s = J.quadrant(t[o - 1], t[o]);
      if (s !== i)
        break;
    }
    o++;
  }
  return o - 1;
};
Ve.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Ve.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], r = arguments[1], i = new S(), o = Ve.getChainStartIndices(e), s = 0; s < o.length - 1; s++) {
      var a = new re(e, o[s], o[s + 1], r);
      i.add(a);
    }
    return i;
  }
};
Ve.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), r = 0; r < e.length; r++)
    e[r] = t.get(r).intValue();
  return e;
};
var Jr = function() {
};
Jr.prototype.computeNodes = function(t) {
};
Jr.prototype.getNodedSubstrings = function() {
};
Jr.prototype.interfaces_ = function() {
  return [];
};
Jr.prototype.getClass = function() {
  return Jr;
};
var Ii = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
Ii.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
Ii.prototype.interfaces_ = function() {
  return [Jr];
};
Ii.prototype.getClass = function() {
  return Ii;
};
var jo = function(n) {
  function t(r) {
    r ? n.call(this, r) : n.call(this), this._monoChains = new S(), this._index = new la(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return dt.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(i) {
    for (var o = this, s = Ve.getChains(i.getCoordinates(), i), a = s.iterator(); a.hasNext(); ) {
      var u = a.next();
      u.setId(o._idCounter++), o._index.insert(u.getEnvelope(), u), o._monoChains.add(u);
    }
  }, t.prototype.computeNodes = function(i) {
    var o = this;
    this._nodedSegStrings = i;
    for (var s = i.iterator(); s.hasNext(); )
      o.add(s.next());
    this.intersectChains();
  }, t.prototype.intersectChains = function() {
    for (var i = this, o = new Is(this._segInt), s = this._monoChains.iterator(); s.hasNext(); )
      for (var a = s.next(), u = i._index.query(a.getEnvelope()), l = u.iterator(); l.hasNext(); ) {
        var c = l.next();
        if (c.getId() > a.getId() && (a.computeOverlaps(c, o), i._nOverlaps++), i._segInt.isDone())
          return null;
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.SegmentOverlapAction.get = function() {
    return Is;
  }, Object.defineProperties(t, e), t;
}(Ii), Is = function(n) {
  function t() {
    n.call(this), this._si = null;
    var e = arguments[0];
    this._si = e;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.overlap = function() {
    if (arguments.length === 4) {
      var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = r.getContext(), u = o.getContext();
      this._si.processIntersections(a, i, u, s);
    } else
      return n.prototype.overlap.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ei), H = function n() {
  if (this._quadrantSegments = n.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = n.CAP_ROUND, this._joinStyle = n.JOIN_ROUND, this._mitreLimit = n.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = n.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (arguments.length === 2) {
      var e = arguments[0], r = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(r);
    } else if (arguments.length === 4) {
      var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3];
      this.setQuadrantSegments(i), this.setEndCapStyle(o), this.setJoinStyle(s), this.setMitreLimit(a);
    }
  }
}, Pr = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
H.prototype.getEndCapStyle = function() {
  return this._endCapStyle;
};
H.prototype.isSingleSided = function() {
  return this._isSingleSided;
};
H.prototype.setQuadrantSegments = function(t) {
  this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = H.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = H.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== H.JOIN_ROUND && (this._quadrantSegments = H.DEFAULT_QUADRANT_SEGMENTS);
};
H.prototype.getJoinStyle = function() {
  return this._joinStyle;
};
H.prototype.setJoinStyle = function(t) {
  this._joinStyle = t;
};
H.prototype.setSimplifyFactor = function(t) {
  this._simplifyFactor = t < 0 ? 0 : t;
};
H.prototype.getSimplifyFactor = function() {
  return this._simplifyFactor;
};
H.prototype.getQuadrantSegments = function() {
  return this._quadrantSegments;
};
H.prototype.setEndCapStyle = function(t) {
  this._endCapStyle = t;
};
H.prototype.getMitreLimit = function() {
  return this._mitreLimit;
};
H.prototype.setMitreLimit = function(t) {
  this._mitreLimit = t;
};
H.prototype.setSingleSided = function(t) {
  this._isSingleSided = t;
};
H.prototype.interfaces_ = function() {
  return [];
};
H.prototype.getClass = function() {
  return H;
};
H.bufferDistanceError = function(t) {
  var e = Math.PI / 2 / t;
  return 1 - Math.cos(e / 2);
};
Pr.CAP_ROUND.get = function() {
  return 1;
};
Pr.CAP_FLAT.get = function() {
  return 2;
};
Pr.CAP_SQUARE.get = function() {
  return 3;
};
Pr.JOIN_ROUND.get = function() {
  return 1;
};
Pr.JOIN_MITRE.get = function() {
  return 2;
};
Pr.JOIN_BEVEL.get = function() {
  return 3;
};
Pr.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
Pr.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
Pr.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(H, Pr);
var lt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = L.COUNTERCLOCKWISE, this._inputLine = t || null;
}, Oi = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
lt.prototype.isDeletable = function(t, e, r, i) {
  var o = this._inputLine[t], s = this._inputLine[e], a = this._inputLine[r];
  return !this.isConcave(o, s, a) || !this.isShallow(o, s, a, i) ? !1 : this.isShallowSampled(o, s, t, r, i);
};
lt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, r = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(r), o = !1; i < this._inputLine.length; ) {
    var s = !1;
    t.isDeletable(e, r, i, t._distanceTol) && (t._isDeleted[r] = lt.DELETE, s = !0, o = !0), s ? e = i : e = r, r = t.findNextNonDeletedIndex(e), i = t.findNextNonDeletedIndex(r);
  }
  return o;
};
lt.prototype.isShallowConcavity = function(t, e, r, i) {
  var o = L.computeOrientation(t, e, r), s = o === this._angleOrientation;
  if (!s)
    return !1;
  var a = L.distancePointLine(e, t, r);
  return a < i;
};
lt.prototype.isShallowSampled = function(t, e, r, i, o) {
  var s = this, a = Math.trunc((i - r) / lt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = r; u < i; u += a)
    if (!s.isShallow(t, e, s._inputLine[u], o))
      return !1;
  return !0;
};
lt.prototype.isConcave = function(t, e, r) {
  var i = L.computeOrientation(t, e, r), o = i === this._angleOrientation;
  return o;
};
lt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = L.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var r = !1;
  do
    r = e.deleteShallowConcavities();
  while (r);
  return this.collapseLine();
};
lt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === lt.DELETE; )
    e++;
  return e;
};
lt.prototype.isShallow = function(t, e, r, i) {
  var o = L.distancePointLine(e, t, r);
  return o < i;
};
lt.prototype.collapseLine = function() {
  for (var t = this, e = new Pi(), r = 0; r < this._inputLine.length; r++)
    t._isDeleted[r] !== lt.DELETE && e.add(t._inputLine[r]);
  return e.toCoordinateArray();
};
lt.prototype.interfaces_ = function() {
  return [];
};
lt.prototype.getClass = function() {
  return lt;
};
lt.simplify = function(t, e) {
  var r = new lt(t);
  return r.simplify(e);
};
Oi.INIT.get = function() {
  return 0;
};
Oi.DELETE.get = function() {
  return 1;
};
Oi.KEEP.get = function() {
  return 1;
};
Oi.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(lt, Oi);
var ce = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new S();
}, fa = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
ce.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(ce.COORDINATE_ARRAY_TYPE);
  return t;
};
ce.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
ce.prototype.addPt = function(t) {
  var e = new d(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
ce.prototype.revere = function() {
};
ce.prototype.addPts = function(t, e) {
  var r = this;
  if (e)
    for (var i = 0; i < t.length; i++)
      r.addPt(t[i]);
  else
    for (var o = t.length - 1; o >= 0; o--)
      r.addPt(t[o]);
};
ce.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), r = t.distance(e);
  return r < this._minimimVertexDistance;
};
ce.prototype.toString = function() {
  var t = new k(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
ce.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new d(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
  if (t.equals(e))
    return null;
  this._ptList.add(t);
};
ce.prototype.setMinimumVertexDistance = function(t) {
  this._minimimVertexDistance = t;
};
ce.prototype.interfaces_ = function() {
  return [];
};
ce.prototype.getClass = function() {
  return ce;
};
fa.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(ce, fa);
var U = function() {
}, Sn = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
U.prototype.interfaces_ = function() {
  return [];
};
U.prototype.getClass = function() {
  return U;
};
U.toDegrees = function(t) {
  return t * 180 / Math.PI;
};
U.normalize = function(t) {
  for (; t > Math.PI; )
    t -= U.PI_TIMES_2;
  for (; t <= -Math.PI; )
    t += U.PI_TIMES_2;
  return t;
};
U.angle = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Math.atan2(t.y, t.x);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = r.x - e.x, o = r.y - e.y;
    return Math.atan2(o, i);
  }
};
U.isAcute = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = r.x - e.x, a = r.y - e.y, u = i * s + o * a;
  return u > 0;
};
U.isObtuse = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = r.x - e.x, a = r.y - e.y, u = i * s + o * a;
  return u < 0;
};
U.interiorAngle = function(t, e, r) {
  var i = U.angle(e, t), o = U.angle(e, r);
  return Math.abs(o - i);
};
U.normalizePositive = function(t) {
  if (t < 0) {
    for (; t < 0; )
      t += U.PI_TIMES_2;
    t >= U.PI_TIMES_2 && (t = 0);
  } else {
    for (; t >= U.PI_TIMES_2; )
      t -= U.PI_TIMES_2;
    t < 0 && (t = 0);
  }
  return t;
};
U.angleBetween = function(t, e, r) {
  var i = U.angle(e, t), o = U.angle(e, r);
  return U.diff(i, o);
};
U.diff = function(t, e) {
  var r = null;
  return t < e ? r = e - t : r = t - e, r > Math.PI && (r = 2 * Math.PI - r), r;
};
U.toRadians = function(t) {
  return t * Math.PI / 180;
};
U.getTurn = function(t, e) {
  var r = Math.sin(e - t);
  return r > 0 ? U.COUNTERCLOCKWISE : r < 0 ? U.CLOCKWISE : U.NONE;
};
U.angleBetweenOriented = function(t, e, r) {
  var i = U.angle(e, t), o = U.angle(e, r), s = o - i;
  return s <= -Math.PI ? s + U.PI_TIMES_2 : s > Math.PI ? s - U.PI_TIMES_2 : s;
};
Sn.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
Sn.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
Sn.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
Sn.COUNTERCLOCKWISE.get = function() {
  return L.COUNTERCLOCKWISE;
};
Sn.CLOCKWISE.get = function() {
  return L.CLOCKWISE;
};
Sn.NONE.get = function() {
  return L.COLLINEAR;
};
Object.defineProperties(U, Sn);
var rt = function n() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new O(), this._seg1 = new O(), this._offset0 = new O(), this._offset1 = new O(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new sn(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === H.JOIN_ROUND && (this._closingSegLengthFactor = n.MAX_CLOSING_SEG_LEN_FACTOR), this.init(r);
}, Di = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
rt.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var r = L.computeOrientation(this._s0, this._s1, this._s2), i = r === L.CLOCKWISE && this._side === N.LEFT || r === L.COUNTERCLOCKWISE && this._side === N.RIGHT;
  r === 0 ? this.addCollinear(e) : i ? this.addOutsideTurn(r, e) : this.addInsideTurn(r, e);
};
rt.prototype.addLineEndCap = function(t, e) {
  var r = new O(t, e), i = new O();
  this.computeOffsetSegment(r, N.LEFT, this._distance, i);
  var o = new O();
  this.computeOffsetSegment(r, N.RIGHT, this._distance, o);
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s);
  switch (this._bufParams.getEndCapStyle()) {
    case H.CAP_ROUND:
      this._segList.addPt(i.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, L.CLOCKWISE, this._distance), this._segList.addPt(o.p1);
      break;
    case H.CAP_FLAT:
      this._segList.addPt(i.p1), this._segList.addPt(o.p1);
      break;
    case H.CAP_SQUARE:
      var l = new d();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new d(i.p1.x + l.x, i.p1.y + l.y), f = new d(o.p1.x + l.x, o.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(f);
      break;
  }
};
rt.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
rt.prototype.addMitreJoin = function(t, e, r, i) {
  var o = !0, s = null;
  try {
    s = Ce.intersection(e.p0, e.p1, r.p0, r.p1);
    var a = i <= 0 ? 1 : s.distance(t) / Math.abs(i);
    a > this._bufParams.getMitreLimit() && (o = !1);
  } catch (u) {
    if (u instanceof $n)
      s = new d(0, 0), o = !1;
    else
      throw u;
  } finally {
  }
  o ? this._segList.addPt(s) : this.addLimitedMitreJoin(e, r, i, this._bufParams.getMitreLimit());
};
rt.prototype.addFilletCorner = function(t, e, r, i, o) {
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s), l = r.x - t.x, c = r.y - t.y, f = Math.atan2(c, l);
  i === L.CLOCKWISE ? u <= f && (u += 2 * Math.PI) : u >= f && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, f, i, o), this._segList.addPt(r);
};
rt.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * rt.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === H.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === H.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
rt.prototype.createSquare = function(t) {
  this._segList.addPt(new d(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new d(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new d(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new d(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
rt.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
rt.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
rt.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
rt.prototype.initSideSegments = function(t, e, r) {
  this._s1 = t, this._s2 = e, this._side = r, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, r, this._distance, this._offset1);
};
rt.prototype.addLimitedMitreJoin = function(t, e, r, i) {
  var o = this._seg0.p1, s = U.angle(o, this._seg0.p0), a = U.angleBetweenOriented(this._seg0.p0, o, this._seg1.p1), u = a / 2, l = U.normalize(s + u), c = U.normalize(l + Math.PI), f = i * r, h = f * Math.abs(Math.sin(u)), p = r - h, g = o.x + f * Math.cos(c), y = o.y + f * Math.sin(c), m = new d(g, y), _ = new O(o, m), I = _.pointAlongOffset(1, p), C = _.pointAlongOffset(1, -p);
  this._side === N.LEFT ? (this._segList.addPt(I), this._segList.addPt(C)) : (this._segList.addPt(C), this._segList.addPt(I));
};
rt.prototype.computeOffsetSegment = function(t, e, r, i) {
  var o = e === N.LEFT ? 1 : -1, s = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(s * s + a * a), l = o * r * s / u, c = o * r * a / u;
  i.p0.x = t.p0.x - c, i.p0.y = t.p0.y + l, i.p1.x = t.p1.x - c, i.p1.y = t.p1.y + l;
};
rt.prototype.addFilletArc = function(t, e, r, i, o) {
  var s = this, a = i === L.CLOCKWISE ? -1 : 1, u = Math.abs(e - r), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, f = u / l, h = c, p = new d(); h < u; ) {
    var g = e + a * h;
    p.x = t.x + o * Math.cos(g), p.y = t.y + o * Math.sin(g), s._segList.addPt(p), h += f;
  }
};
rt.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * rt.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
    this._segList.addPt(this._offset0.p1);
  else {
    if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
      var r = new d((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(r);
      var i = new d((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(i);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
rt.prototype.createCircle = function(t) {
  var e = new d(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
rt.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
rt.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new ce(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * rt.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
rt.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === H.JOIN_BEVEL || this._bufParams.getJoinStyle() === H.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, L.CLOCKWISE, this._distance));
};
rt.prototype.closeRing = function() {
  this._segList.closeRing();
};
rt.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
rt.prototype.interfaces_ = function() {
  return [];
};
rt.prototype.getClass = function() {
  return rt;
};
Di.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
Di.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
Di.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
Di.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(rt, Di);
var Qt = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
Qt.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var r = e < 0, i = Math.abs(e), o = this.getSegGen(i);
  t.length <= 1 ? this.computePointCurve(t[0], o) : this.computeOffsetCurve(t, r, o);
  var s = o.getCoordinates();
  return r && z.reverse(s), s;
};
Qt.prototype.computeSingleSidedBufferCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    r.addSegments(t, !0);
    var o = lt.simplify(t, -i), s = o.length - 1;
    r.initSideSegments(o[s], o[s - 1], N.LEFT), r.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      r.addNextSegment(o[a], !0);
  } else {
    r.addSegments(t, !1);
    var u = lt.simplify(t, i), l = u.length - 1;
    r.initSideSegments(u[0], u[1], N.LEFT), r.addFirstSegment();
    for (var c = 2; c <= l; c++)
      r.addNextSegment(u[c], !0);
  }
  r.addLastSegment(), r.closeRing();
};
Qt.prototype.computeRingBufferCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  e === N.RIGHT && (i = -i);
  var o = lt.simplify(t, i), s = o.length - 1;
  r.initSideSegments(o[s - 1], o[0], e);
  for (var a = 1; a <= s; a++) {
    var u = a !== 1;
    r.addNextSegment(o[a], u);
  }
  r.closeRing();
};
Qt.prototype.computeLineBufferCurve = function(t, e) {
  var r = this.simplifyTolerance(this._distance), i = lt.simplify(t, r), o = i.length - 1;
  e.initSideSegments(i[0], i[1], N.LEFT);
  for (var s = 2; s <= o; s++)
    e.addNextSegment(i[s], !0);
  e.addLastSegment(), e.addLineEndCap(i[o - 1], i[o]);
  var a = lt.simplify(t, -r), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], N.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
Qt.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case H.CAP_ROUND:
      e.createCircle(t);
      break;
    case H.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
Qt.prototype.getLineCurve = function(t, e) {
  if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || e === 0)
    return null;
  var r = Math.abs(e), i = this.getSegGen(r);
  if (t.length <= 1)
    this.computePointCurve(t[0], i);
  else if (this._bufParams.isSingleSided()) {
    var o = e < 0;
    this.computeSingleSidedBufferCurve(t, o, i);
  } else
    this.computeLineBufferCurve(t, i);
  var s = i.getCoordinates();
  return s;
};
Qt.prototype.getBufferParameters = function() {
  return this._bufParams;
};
Qt.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
Qt.prototype.getRingCurve = function(t, e, r) {
  if (this._distance = r, t.length <= 2)
    return this.getLineCurve(t, r);
  if (r === 0)
    return Qt.copyCoordinates(t);
  var i = this.getSegGen(r);
  return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
};
Qt.prototype.computeOffsetCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    var o = lt.simplify(t, -i), s = o.length - 1;
    r.initSideSegments(o[s], o[s - 1], N.LEFT), r.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      r.addNextSegment(o[a], !0);
  } else {
    var u = lt.simplify(t, i), l = u.length - 1;
    r.initSideSegments(u[0], u[1], N.LEFT), r.addFirstSegment();
    for (var c = 2; c <= l; c++)
      r.addNextSegment(u[c], !0);
  }
  r.addLastSegment();
};
Qt.prototype.getSegGen = function(t) {
  return new rt(this._precisionModel, this._bufParams, t);
};
Qt.prototype.interfaces_ = function() {
  return [];
};
Qt.prototype.getClass = function() {
  return Qt;
};
Qt.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), r = 0; r < e.length; r++)
    e[r] = new d(t[r]);
  return e;
};
var pn = function() {
  this._subgraphs = null, this._seg = new O(), this._cga = new L();
  var t = arguments[0];
  this._subgraphs = t;
}, ha = { DepthSegment: { configurable: !0 } };
pn.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], r = new S(), i = this._subgraphs.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getEnvelope();
      e.y < s.getMinY() || e.y > s.getMaxY() || t.findStabbedSegments(e, o.getDirectedEdges(), r);
    }
    return r;
  } else if (arguments.length === 3) {
    if (M(arguments[2], Ne) && arguments[0] instanceof d && arguments[1] instanceof Do)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), f = 0; f < c.length - 1; f++) {
        t._seg.p0 = c[f], t._seg.p1 = c[f + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var h = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(h < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && L.computeOrientation(t._seg.p0, t._seg.p1, a) !== L.RIGHT) {
          var p = u.getDepth(N.LEFT);
          t._seg.p0.equals(c[f]) || (p = u.getDepth(N.RIGHT));
          var g = new Zr(t._seg, p);
          l.add(g);
        }
      }
    else if (M(arguments[2], Ne) && arguments[0] instanceof d && M(arguments[1], Ne))
      for (var y = arguments[0], m = arguments[1], _ = arguments[2], I = m.iterator(); I.hasNext(); ) {
        var C = I.next();
        C.isForward() && t.findStabbedSegments(y, C, _);
      }
  }
};
pn.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var r = we.min(e);
  return r._leftDepth;
};
pn.prototype.interfaces_ = function() {
  return [];
};
pn.prototype.getClass = function() {
  return pn;
};
ha.DepthSegment.get = function() {
  return Zr;
};
Object.defineProperties(pn, ha);
var Zr = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new O(t), this._leftDepth = e;
};
Zr.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var r = this._upwardSeg.orientationIndex(e._upwardSeg);
  return r !== 0 || (r = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), r !== 0) ? r : this._upwardSeg.compareTo(e._upwardSeg);
};
Zr.prototype.compareX = function(t, e) {
  var r = t.p0.compareTo(e.p0);
  return r !== 0 ? r : t.p1.compareTo(e.p1);
};
Zr.prototype.toString = function() {
  return this._upwardSeg.toString();
};
Zr.prototype.interfaces_ = function() {
  return [Ee];
};
Zr.prototype.getClass = function() {
  return Zr;
};
var j = function(t, e, r) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = r || null;
};
j.prototype.area = function() {
  return j.area(this.p0, this.p1, this.p2);
};
j.prototype.signedArea = function() {
  return j.signedArea(this.p0, this.p1, this.p2);
};
j.prototype.interpolateZ = function(t) {
  if (t === null)
    throw new it("Supplied point is null.");
  return j.interpolateZ(t, this.p0, this.p1, this.p2);
};
j.prototype.longestSideLength = function() {
  return j.longestSideLength(this.p0, this.p1, this.p2);
};
j.prototype.isAcute = function() {
  return j.isAcute(this.p0, this.p1, this.p2);
};
j.prototype.circumcentre = function() {
  return j.circumcentre(this.p0, this.p1, this.p2);
};
j.prototype.area3D = function() {
  return j.area3D(this.p0, this.p1, this.p2);
};
j.prototype.centroid = function() {
  return j.centroid(this.p0, this.p1, this.p2);
};
j.prototype.inCentre = function() {
  return j.inCentre(this.p0, this.p1, this.p2);
};
j.prototype.interfaces_ = function() {
  return [];
};
j.prototype.getClass = function() {
  return j;
};
j.area = function(t, e, r) {
  return Math.abs(((r.x - t.x) * (e.y - t.y) - (e.x - t.x) * (r.y - t.y)) / 2);
};
j.signedArea = function(t, e, r) {
  return ((r.x - t.x) * (e.y - t.y) - (e.x - t.x) * (r.y - t.y)) / 2;
};
j.det = function(t, e, r, i) {
  return t * i - e * r;
};
j.interpolateZ = function(t, e, r, i) {
  var o = e.x, s = e.y, a = r.x - o, u = i.x - o, l = r.y - s, c = i.y - s, f = a * c - u * l, h = t.x - o, p = t.y - s, g = (c * h - u * p) / f, y = (-l * h + a * p) / f, m = e.z + g * (r.z - e.z) + y * (i.z - e.z);
  return m;
};
j.longestSideLength = function(t, e, r) {
  var i = t.distance(e), o = e.distance(r), s = r.distance(t), a = i;
  return o > a && (a = o), s > a && (a = s), a;
};
j.isAcute = function(t, e, r) {
  return !(!U.isAcute(t, e, r) || !U.isAcute(e, r, t) || !U.isAcute(r, t, e));
};
j.circumcentre = function(t, e, r) {
  var i = r.x, o = r.y, s = t.x - i, a = t.y - o, u = e.x - i, l = e.y - o, c = 2 * j.det(s, a, u, l), f = j.det(a, s * s + a * a, l, u * u + l * l), h = j.det(s, s * s + a * a, u, u * u + l * l), p = i - f / c, g = o + h / c;
  return new d(p, g);
};
j.perpendicularBisector = function(t, e) {
  var r = e.x - t.x, i = e.y - t.y, o = new Ce(t.x + r / 2, t.y + i / 2, 1), s = new Ce(t.x - i + r / 2, t.y + r + i / 2, 1);
  return new Ce(o, s);
};
j.angleBisector = function(t, e, r) {
  var i = e.distance(t), o = e.distance(r), s = i / (i + o), a = r.x - t.x, u = r.y - t.y, l = new d(t.x + s * a, t.y + s * u);
  return l;
};
j.area3D = function(t, e, r) {
  var i = e.x - t.x, o = e.y - t.y, s = e.z - t.z, a = r.x - t.x, u = r.y - t.y, l = r.z - t.z, c = o * l - s * u, f = s * a - i * l, h = i * u - o * a, p = c * c + f * f + h * h, g = Math.sqrt(p) / 2;
  return g;
};
j.centroid = function(t, e, r) {
  var i = (t.x + e.x + r.x) / 3, o = (t.y + e.y + r.y) / 3;
  return new d(i, o);
};
j.inCentre = function(t, e, r) {
  var i = e.distance(r), o = t.distance(r), s = t.distance(e), a = i + o + s, u = (i * t.x + o * e.x + s * r.x) / a, l = (i * t.y + o * e.y + s * r.y) / a;
  return new d(u, l);
};
var _e = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new S();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = r;
};
_e.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), r = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(r, v.EXTERIOR, v.INTERIOR);
};
_e.prototype.addPolygon = function(t) {
  var e = this, r = this._distance, i = N.LEFT;
  this._distance < 0 && (r = -this._distance, i = N.RIGHT);
  var o = t.getExteriorRing(), s = z.removeRepeatedPoints(o.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(o, this._distance) || this._distance <= 0 && s.length < 3)
    return null;
  this.addPolygonRing(s, r, i, v.EXTERIOR, v.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = z.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, r, N.opposite(i), v.INTERIOR, v.EXTERIOR);
  }
};
_e.prototype.isTriangleErodedCompletely = function(t, e) {
  var r = new j(t[0], t[1], t[2]), i = r.inCentre(), o = L.distancePointLine(i, r.p0, r.p1);
  return o < Math.abs(e);
};
_e.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = z.removeRepeatedPoints(t.getCoordinates()), r = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(r, v.EXTERIOR, v.INTERIOR);
};
_e.prototype.addCurve = function(t, e, r) {
  if (t === null || t.length < 2)
    return null;
  var i = new dt(t, new Q(0, v.BOUNDARY, e, r));
  this._curveList.add(i);
};
_e.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
_e.prototype.addPolygonRing = function(t, e, r, i, o) {
  if (e === 0 && t.length < ir.MINIMUM_VALID_SIZE)
    return null;
  var s = i, a = o;
  t.length >= ir.MINIMUM_VALID_SIZE && L.isCCW(t) && (s = o, a = i, r = N.opposite(r));
  var u = this._curveBuilder.getRingCurve(t, r, e);
  this.addCurve(u, s, a);
};
_e.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof Nt ? this.addPolygon(t) : t instanceof ut ? this.addLineString(t) : t instanceof te ? this.addPoint(t) : t instanceof Gn ? this.addCollection(t) : t instanceof Qr ? this.addCollection(t) : t instanceof er ? this.addCollection(t) : t instanceof Xt && this.addCollection(t);
};
_e.prototype.isErodedCompletely = function(t, e) {
  var r = t.getCoordinates();
  if (r.length < 4)
    return e < 0;
  if (r.length === 4)
    return this.isTriangleErodedCompletely(r, e);
  var i = t.getEnvelopeInternal(), o = Math.min(i.getHeight(), i.getWidth());
  return e < 0 && 2 * Math.abs(e) > o;
};
_e.prototype.addCollection = function(t) {
  for (var e = this, r = 0; r < t.getNumGeometries(); r++) {
    var i = t.getGeometryN(r);
    e.add(i);
  }
};
_e.prototype.interfaces_ = function() {
  return [];
};
_e.prototype.getClass = function() {
  return _e;
};
var Un = function() {
};
Un.prototype.locate = function(t) {
};
Un.prototype.interfaces_ = function() {
  return [];
};
Un.prototype.getClass = function() {
  return Un;
};
var rr = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
rr.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, rr.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new ei();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof Xt ? (this._subcollectionIterator = new rr(t), this._subcollectionIterator.next()) : t;
};
rr.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
rr.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
rr.prototype.interfaces_ = function() {
  return [ti];
};
rr.prototype.getClass = function() {
  return rr;
};
rr.isAtomic = function(t) {
  return !(t instanceof Xt);
};
var se = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
se.prototype.locate = function(t) {
  return se.locate(t, this._geom);
};
se.prototype.interfaces_ = function() {
  return [Un];
};
se.prototype.getClass = function() {
  return se;
};
se.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? L.isPointInRing(t, e.getCoordinates()) : !1;
};
se.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var r = e.getExteriorRing();
  if (!se.isPointInRing(t, r))
    return !1;
  for (var i = 0; i < e.getNumInteriorRing(); i++) {
    var o = e.getInteriorRingN(i);
    if (se.isPointInRing(t, o))
      return !1;
  }
  return !0;
};
se.containsPoint = function(t, e) {
  if (e instanceof Nt)
    return se.containsPointInPolygon(t, e);
  if (e instanceof Xt)
    for (var r = new rr(e); r.hasNext(); ) {
      var i = r.next();
      if (i !== e && se.containsPoint(t, i))
        return !0;
    }
  return !1;
};
se.locate = function(t, e) {
  return e.isEmpty() ? v.EXTERIOR : se.containsPoint(t, e) ? v.INTERIOR : v.EXTERIOR;
};
var Bt = function() {
  this._edgeMap = new At(), this._edgeList = null, this._ptInAreaLocation = [v.NONE, v.NONE];
};
Bt.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), r = e - 1;
  return e === 0 && (r = this._edgeList.size() - 1), this._edgeList.get(r);
};
Bt.prototype.propagateSideLabels = function(t) {
  for (var e = v.NONE, r = this.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getLabel();
    o.isArea(t) && o.getLocation(t, N.LEFT) !== v.NONE && (e = o.getLocation(t, N.LEFT));
  }
  if (e === v.NONE)
    return null;
  for (var s = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, N.ON) === v.NONE && l.setLocation(t, N.ON, s), l.isArea(t)) {
      var c = l.getLocation(t, N.LEFT), f = l.getLocation(t, N.RIGHT);
      if (f !== v.NONE) {
        if (f !== s)
          throw new Nr("side location conflict", u.getCoordinate());
        c === v.NONE && V.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), s = c;
      } else
        V.isTrue(l.getLocation(t, N.LEFT) === v.NONE, "found single null side"), l.setLocation(t, N.RIGHT, s), l.setLocation(t, N.LEFT, s);
    }
  }
};
Bt.prototype.getCoordinate = function() {
  var t = this.iterator();
  if (!t.hasNext())
    return null;
  var e = t.next();
  return e.getCoordinate();
};
Bt.prototype.print = function(t) {
  Rt.out.println("EdgeEndStar:   " + this.getCoordinate());
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
Bt.prototype.isAreaLabelsConsistent = function(t) {
  return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
};
Bt.prototype.checkAreaLabelsConsistent = function(t) {
  var e = this.getEdges();
  if (e.size() <= 0)
    return !0;
  var r = e.size() - 1, i = e.get(r).getLabel(), o = i.getLocation(t, N.LEFT);
  V.isTrue(o !== v.NONE, "Found unlabelled area edge");
  for (var s = o, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    V.isTrue(l.isArea(t), "Found non-area edge");
    var c = l.getLocation(t, N.LEFT), f = l.getLocation(t, N.RIGHT);
    if (c === f || f !== s)
      return !1;
    s = c;
  }
  return !0;
};
Bt.prototype.findIndex = function(t) {
  var e = this;
  this.iterator();
  for (var r = 0; r < this._edgeList.size(); r++) {
    var i = e._edgeList.get(r);
    if (i === t)
      return r;
  }
  return -1;
};
Bt.prototype.iterator = function() {
  return this.getEdges().iterator();
};
Bt.prototype.getEdges = function() {
  return this._edgeList === null && (this._edgeList = new S(this._edgeMap.values())), this._edgeList;
};
Bt.prototype.getLocation = function(t, e, r) {
  return this._ptInAreaLocation[t] === v.NONE && (this._ptInAreaLocation[t] = se.locate(e, r[t].getGeometry())), this._ptInAreaLocation[t];
};
Bt.prototype.toString = function() {
  var t = new Je();
  t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    t.append(r), t.append(`
`);
  }
  return t.toString();
};
Bt.prototype.computeEdgeEndLabels = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.computeLabel(t);
  }
};
Bt.prototype.computeLabelling = function(t) {
  var e = this;
  this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
  for (var r = [!1, !1], i = this.iterator(); i.hasNext(); )
    for (var o = i.next(), s = o.getLabel(), a = 0; a < 2; a++)
      s.isLine(a) && s.getLocation(a) === v.BOUNDARY && (r[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), f = 0; f < 2; f++)
      if (c.isAnyNull(f)) {
        var h = v.NONE;
        if (r[f])
          h = v.EXTERIOR;
        else {
          var p = l.getCoordinate();
          h = e.getLocation(f, p, t);
        }
        c.setAllLocationsIfNull(f, h);
      }
};
Bt.prototype.getDegree = function() {
  return this._edgeMap.size();
};
Bt.prototype.insertEdgeEnd = function(t, e) {
  this._edgeMap.put(t, e), this._edgeList = null;
};
Bt.prototype.interfaces_ = function() {
  return [];
};
Bt.prototype.getClass = function() {
  return Bt;
};
var Xu = function(n) {
  function t() {
    n.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.linkResultDirectedEdges = function() {
    var r = this;
    this.getResultAreaEdges();
    for (var i = null, o = null, s = this._SCANNING_FOR_INCOMING, a = 0; a < this._resultAreaEdgeList.size(); a++) {
      var u = r._resultAreaEdgeList.get(a), l = u.getSym();
      if (u.getLabel().isArea())
        switch (i === null && u.isInResult() && (i = u), s) {
          case r._SCANNING_FOR_INCOMING:
            if (!l.isInResult())
              continue;
            o = l, s = r._LINKING_TO_OUTGOING;
            break;
          case r._LINKING_TO_OUTGOING:
            if (!u.isInResult())
              continue;
            o.setNext(u), s = r._SCANNING_FOR_INCOMING;
            break;
        }
    }
    if (s === this._LINKING_TO_OUTGOING) {
      if (i === null)
        throw new Nr("no outgoing dirEdge found", this.getCoordinate());
      V.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), o.setNext(i);
    }
  }, t.prototype.insert = function(r) {
    var i = r;
    this.insertEdgeEnd(i, i);
  }, t.prototype.getRightmostEdge = function() {
    var r = this.getEdges(), i = r.size();
    if (i < 1)
      return null;
    var o = r.get(0);
    if (i === 1)
      return o;
    var s = r.get(i - 1), a = o.getQuadrant(), u = s.getQuadrant();
    return J.isNorthern(a) && J.isNorthern(u) ? o : !J.isNorthern(a) && !J.isNorthern(u) ? s : o.getDy() !== 0 ? o : s.getDy() !== 0 ? s : (V.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(r) {
    Rt.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      r.print("out "), o.print(r), r.println(), r.print("in "), o.getSym().print(r), r.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var r = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new S();
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      (o.isInResult() || o.getSym().isInResult()) && r._resultAreaEdgeList.add(o);
    }
    return this._resultAreaEdgeList;
  }, t.prototype.updateLabelling = function(r) {
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.setAllLocationsIfNull(0, r.getLocation(0)), s.setAllLocationsIfNull(1, r.getLocation(1));
    }
  }, t.prototype.linkAllDirectedEdges = function() {
    var r = this;
    this.getEdges();
    for (var i = null, o = null, s = this._edgeList.size() - 1; s >= 0; s--) {
      var a = r._edgeList.get(s), u = a.getSym();
      o === null && (o = u), i !== null && u.setNext(i), i = a;
    }
    o.setNext(i);
  }, t.prototype.computeDepths = function() {
    var r = this;
    if (arguments.length === 1) {
      var i = arguments[0], o = this.findIndex(i), s = i.getDepth(N.LEFT), a = i.getDepth(N.RIGHT), u = this.computeDepths(o + 1, this._edgeList.size(), s), l = this.computeDepths(0, o, u);
      if (l !== a)
        throw new Nr("depth mismatch at " + i.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], f = arguments[1], h = arguments[2], p = h, g = c; g < f; g++) {
        var y = r._edgeList.get(g);
        y.setEdgeDepths(N.RIGHT, p), p = y.getDepth(N.LEFT);
      }
      return p;
    }
  }, t.prototype.mergeSymLabels = function() {
    for (var r = this.iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getLabel();
      o.merge(i.getSym().getLabel());
    }
  }, t.prototype.linkMinimalDirectedEdges = function(r) {
    for (var i = this, o = null, s = null, a = this._SCANNING_FOR_INCOMING, u = this._resultAreaEdgeList.size() - 1; u >= 0; u--) {
      var l = i._resultAreaEdgeList.get(u), c = l.getSym();
      switch (o === null && l.getEdgeRing() === r && (o = l), a) {
        case i._SCANNING_FOR_INCOMING:
          if (c.getEdgeRing() !== r)
            continue;
          s = c, a = i._LINKING_TO_OUTGOING;
          break;
        case i._LINKING_TO_OUTGOING:
          if (l.getEdgeRing() !== r)
            continue;
          s.setNextMin(l), a = i._SCANNING_FOR_INCOMING;
          break;
      }
    }
    a === this._LINKING_TO_OUTGOING && (V.isTrue(o !== null, "found null for first outgoing dirEdge"), V.isTrue(o.getEdgeRing() === r, "unable to link last incoming dirEdge"), s.setNextMin(o));
  }, t.prototype.getOutgoingDegree = function() {
    if (arguments.length === 0) {
      for (var r = 0, i = this.iterator(); i.hasNext(); ) {
        var o = i.next();
        o.isInResult() && r++;
      }
      return r;
    } else if (arguments.length === 1) {
      for (var s = arguments[0], a = 0, u = this.iterator(); u.hasNext(); ) {
        var l = u.next();
        l.getEdgeRing() === s && a++;
      }
      return a;
    }
  }, t.prototype.getLabel = function() {
    return this._label;
  }, t.prototype.findCoveredLineEdges = function() {
    for (var r = v.NONE, i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getSym();
      if (!o.isLineEdge()) {
        if (o.isInResult()) {
          r = v.INTERIOR;
          break;
        }
        if (s.isInResult()) {
          r = v.EXTERIOR;
          break;
        }
      }
    }
    if (r === v.NONE)
      return null;
    for (var a = r, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === v.INTERIOR) : (l.isInResult() && (a = v.EXTERIOR), c.isInResult() && (a = v.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(r) {
    var i = this;
    n.prototype.computeLabelling.call(this, r), this._label = new Q(v.NONE);
    for (var o = this.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var c = u.getLocation(l);
        (c === v.INTERIOR || c === v.BOUNDARY) && i._label.setLocation(l, v.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Bt), pa = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.createNode = function(r) {
    return new go(r, new Xu());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Vn), Br = function n() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = n.orientation(t);
};
Br.prototype.compareTo = function(t) {
  var e = t, r = Br.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return r;
};
Br.prototype.interfaces_ = function() {
  return [Ee];
};
Br.prototype.getClass = function() {
  return Br;
};
Br.orientation = function(t) {
  return z.increasingDirection(t) === 1;
};
Br.compareOriented = function(t, e, r, i) {
  for (var o = e ? 1 : -1, s = i ? 1 : -1, a = e ? t.length : -1, u = i ? r.length : -1, l = e ? 0 : t.length - 1, c = i ? 0 : r.length - 1; ; ) {
    var f = t[l].compareTo(r[c]);
    if (f !== 0)
      return f;
    l += o, c += s;
    var h = l === a, p = c === u;
    if (h && !p)
      return -1;
    if (!h && p)
      return 1;
    if (h && p)
      return 0;
  }
};
var Pe = function() {
  this._edges = new S(), this._ocaMap = new At();
};
Pe.prototype.print = function(t) {
  var e = this;
  t.print("MULTILINESTRING ( ");
  for (var r = 0; r < this._edges.size(); r++) {
    var i = e._edges.get(r);
    r > 0 && t.print(","), t.print("(");
    for (var o = i.getCoordinates(), s = 0; s < o.length; s++)
      s > 0 && t.print(","), t.print(o[s].x + " " + o[s].y);
    t.println(")");
  }
  t.print(")  ");
};
Pe.prototype.addAll = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); )
    e.add(r.next());
};
Pe.prototype.findEdgeIndex = function(t) {
  for (var e = this, r = 0; r < this._edges.size(); r++)
    if (e._edges.get(r).equals(t))
      return r;
  return -1;
};
Pe.prototype.iterator = function() {
  return this._edges.iterator();
};
Pe.prototype.getEdges = function() {
  return this._edges;
};
Pe.prototype.get = function(t) {
  return this._edges.get(t);
};
Pe.prototype.findEqualEdge = function(t) {
  var e = new Br(t.getCoordinates()), r = this._ocaMap.get(e);
  return r;
};
Pe.prototype.add = function(t) {
  this._edges.add(t);
  var e = new Br(t.getCoordinates());
  this._ocaMap.put(e, t);
};
Pe.prototype.interfaces_ = function() {
  return [];
};
Pe.prototype.getClass = function() {
  return Pe;
};
var $r = function() {
};
$r.prototype.processIntersections = function(t, e, r, i) {
};
$r.prototype.isDone = function() {
};
$r.prototype.interfaces_ = function() {
  return [];
};
$r.prototype.getClass = function() {
  return $r;
};
var fe = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
fe.prototype.isTrivialIntersection = function(t, e, r, i) {
  if (t === r && this._li.getIntersectionNum() === 1) {
    if (fe.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.size() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
fe.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
fe.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
fe.prototype.getLineIntersector = function() {
  return this._li;
};
fe.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
fe.prototype.processIntersections = function(t, e, r, i) {
  if (t === r && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = r.getCoordinates()[i], u = r.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, r, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
};
fe.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
fe.prototype.isDone = function() {
  return !1;
};
fe.prototype.hasInteriorIntersection = function() {
  return this._hasInterior;
};
fe.prototype.interfaces_ = function() {
  return [$r];
};
fe.prototype.getClass = function() {
  return fe;
};
fe.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var He = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this.coord = new d(t), this.segmentIndex = e, this.dist = r;
};
He.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
He.prototype.getCoordinate = function() {
  return this.coord;
};
He.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
He.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
He.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
He.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
He.prototype.getDistance = function() {
  return this.dist;
};
He.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
He.prototype.interfaces_ = function() {
  return [Ee];
};
He.prototype.getClass = function() {
  return He;
};
var ar = function() {
  this._nodeMap = new At(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
ar.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
ar.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
ar.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
ar.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
ar.prototype.createSplitEdge = function(t, e) {
  var r = this, i = e.segmentIndex - t.segmentIndex + 2, o = this.edge.pts[e.segmentIndex], s = e.dist > 0 || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new d(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = r.edge.pts[l];
  return s && (a[u] = e.coord), new ji(a, new Q(this.edge._label));
};
ar.prototype.add = function(t, e, r) {
  var i = new He(t, e, r), o = this._nodeMap.get(i);
  return o !== null ? o : (this._nodeMap.put(i, i), i);
};
ar.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.coord.equals(t))
      return !0;
  }
  return !1;
};
ar.prototype.interfaces_ = function() {
  return [];
};
ar.prototype.getClass = function() {
  return ar;
};
var tn = function() {
};
tn.prototype.getChainStartIndices = function(t) {
  var e = this, r = 0, i = new S();
  i.add(new ke(r));
  do {
    var o = e.findChainEnd(t, r);
    i.add(new ke(o)), r = o;
  } while (r < t.length - 1);
  var s = tn.toIntArray(i);
  return s;
};
tn.prototype.findChainEnd = function(t, e) {
  for (var r = J.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length; ) {
    var o = J.quadrant(t[i - 1], t[i]);
    if (o !== r)
      break;
    i++;
  }
  return i - 1;
};
tn.prototype.interfaces_ = function() {
  return [];
};
tn.prototype.getClass = function() {
  return tn;
};
tn.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), r = 0; r < e.length; r++)
    e[r] = t.get(r).intValue();
  return e;
};
var Sr = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new R(), this.env2 = new R();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new tn();
  this.startIndex = e.getChainStartIndices(this.pts);
};
Sr.prototype.getCoordinates = function() {
  return this.pts;
};
Sr.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, r = this.pts[this.startIndex[t + 1]].x;
  return e > r ? e : r;
};
Sr.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, r = this.pts[this.startIndex[t + 1]].x;
  return e < r ? e : r;
};
Sr.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[r], e.startIndex[r + 1], i);
  } else if (arguments.length === 6) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], f = this.pts[o], h = this.pts[s], p = a.pts[u], g = a.pts[l];
    if (s - o === 1 && l - u === 1)
      return c.addIntersections(this.e, o, a.e, u), null;
    if (this.env1.init(f, h), this.env2.init(p, g), !this.env1.intersects(this.env2))
      return null;
    var y = Math.trunc((o + s) / 2), m = Math.trunc((u + l) / 2);
    o < y && (u < m && this.computeIntersectsForChain(o, y, a, u, m, c), m < l && this.computeIntersectsForChain(o, y, a, m, l, c)), y < s && (u < m && this.computeIntersectsForChain(y, s, a, u, m, c), m < l && this.computeIntersectsForChain(y, s, a, m, l, c));
  }
};
Sr.prototype.getStartIndexes = function() {
  return this.startIndex;
};
Sr.prototype.computeIntersects = function(t, e) {
  for (var r = this, i = 0; i < this.startIndex.length - 1; i++)
    for (var o = 0; o < t.startIndex.length - 1; o++)
      r.computeIntersectsForChain(i, t, o, e);
};
Sr.prototype.interfaces_ = function() {
  return [];
};
Sr.prototype.getClass = function() {
  return Sr;
};
var bt = function n() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var r = 0; r < 3; r++)
      t._depth[e][r] = n.NULL_VALUE;
}, ga = { NULL_VALUE: { configurable: !0 } };
bt.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
bt.prototype.setDepth = function(t, e, r) {
  this._depth[t][e] = r;
};
bt.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var r = 0; r < 3; r++)
        if (t._depth[e][r] !== bt.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var i = arguments[0];
    return this._depth[i][1] === bt.NULL_VALUE;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._depth[o][s] === bt.NULL_VALUE;
  }
};
bt.prototype.normalize = function() {
  for (var t = this, e = 0; e < 2; e++)
    if (!t.isNull(e)) {
      var r = t._depth[e][1];
      t._depth[e][2] < r && (r = t._depth[e][2]), r < 0 && (r = 0);
      for (var i = 1; i < 3; i++) {
        var o = 0;
        t._depth[e][i] > r && (o = 1), t._depth[e][i] = o;
      }
    }
};
bt.prototype.getDelta = function(t) {
  return this._depth[t][N.RIGHT] - this._depth[t][N.LEFT];
};
bt.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? v.EXTERIOR : v.INTERIOR;
};
bt.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
bt.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], r = 0; r < 2; r++)
      for (var i = 1; i < 3; i++) {
        var o = e.getLocation(r, i);
        (o === v.EXTERIOR || o === v.INTERIOR) && (t.isNull(r, i) ? t._depth[r][i] = bt.depthAtLocation(o) : t._depth[r][i] += bt.depthAtLocation(o));
      }
  else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    u === v.INTERIOR && this._depth[s][a]++;
  }
};
bt.prototype.interfaces_ = function() {
  return [];
};
bt.prototype.getClass = function() {
  return bt;
};
bt.depthAtLocation = function(t) {
  return t === v.EXTERIOR ? 0 : t === v.INTERIOR ? 1 : bt.NULL_VALUE;
};
ga.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(bt, ga);
var ji = function(n) {
  function t() {
    if (n.call(this), this.pts = null, this._env = null, this.eiList = new ar(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new bt(), this._depthDelta = 0, arguments.length === 1) {
      var e = arguments[0];
      t.call(this, e, null);
    } else if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      this.pts = r, this._label = i;
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getDepth = function() {
    return this._depth;
  }, t.prototype.getCollapsedEdge = function() {
    var r = new Array(2).fill(null);
    r[0] = this.pts[0], r[1] = this.pts[1];
    var i = new t(r, Q.toLineLabel(this._label));
    return i;
  }, t.prototype.isIsolated = function() {
    return this._isIsolated;
  }, t.prototype.getCoordinates = function() {
    return this.pts;
  }, t.prototype.setIsolated = function(r) {
    this._isIsolated = r;
  }, t.prototype.setName = function(r) {
    this._name = r;
  }, t.prototype.equals = function(r) {
    var i = this;
    if (!(r instanceof t))
      return !1;
    var o = r;
    if (this.pts.length !== o.pts.length)
      return !1;
    for (var s = !0, a = !0, u = this.pts.length, l = 0; l < this.pts.length; l++)
      if (i.pts[l].equals2D(o.pts[l]) || (s = !1), i.pts[l].equals2D(o.pts[--u]) || (a = !1), !s && !a)
        return !1;
    return !0;
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 0)
      return this.pts.length > 0 ? this.pts[0] : null;
    if (arguments.length === 1) {
      var r = arguments[0];
      return this.pts[r];
    }
  }, t.prototype.print = function(r) {
    var i = this;
    r.print("edge " + this._name + ": "), r.print("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && r.print(","), r.print(i.pts[o].x + " " + i.pts[o].y);
    r.print(")  " + this._label + " " + this._depthDelta);
  }, t.prototype.computeIM = function(r) {
    t.updateIM(this._label, r);
  }, t.prototype.isCollapsed = function() {
    return !this._label.isArea() || this.pts.length !== 3 ? !1 : !!this.pts[0].equals(this.pts[2]);
  }, t.prototype.isClosed = function() {
    return this.pts[0].equals(this.pts[this.pts.length - 1]);
  }, t.prototype.getMaximumSegmentIndex = function() {
    return this.pts.length - 1;
  }, t.prototype.getDepthDelta = function() {
    return this._depthDelta;
  }, t.prototype.getNumPoints = function() {
    return this.pts.length;
  }, t.prototype.printReverse = function(r) {
    var i = this;
    r.print("edge " + this._name + ": ");
    for (var o = this.pts.length - 1; o >= 0; o--)
      r.print(i.pts[o] + " ");
    r.println("");
  }, t.prototype.getMonotoneChainEdge = function() {
    return this._mce === null && (this._mce = new Sr(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var r = this;
    if (this._env === null) {
      this._env = new R();
      for (var i = 0; i < this.pts.length; i++)
        r._env.expandToInclude(r.pts[i]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(r, i, o, s) {
    var a = new d(r.getIntersection(s)), u = i, l = r.getEdgeDistance(o, s), c = u + 1;
    if (c < this.pts.length) {
      var f = this.pts[c];
      a.equals2D(f) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var r = this, i = new Je();
    i.append("edge " + this._name + ": "), i.append("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && i.append(","), i.append(r.pts[o].x + " " + r.pts[o].y);
    return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
  }, t.prototype.isPointwiseEqual = function(r) {
    var i = this;
    if (this.pts.length !== r.pts.length)
      return !1;
    for (var o = 0; o < this.pts.length; o++)
      if (!i.pts[o].equals2D(r.pts[o]))
        return !1;
    return !0;
  }, t.prototype.setDepthDelta = function(r) {
    this._depthDelta = r;
  }, t.prototype.getEdgeIntersectionList = function() {
    return this.eiList;
  }, t.prototype.addIntersections = function(r, i, o) {
    for (var s = this, a = 0; a < r.getIntersectionNum(); a++)
      s.addIntersection(r, i, o, a);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.updateIM = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      i.setAtLeastIfValid(r.getLocation(0, N.ON), r.getLocation(1, N.ON), 1), r.isArea() && (i.setAtLeastIfValid(r.getLocation(0, N.LEFT), r.getLocation(1, N.LEFT), 2), i.setAtLeastIfValid(r.getLocation(0, N.RIGHT), r.getLocation(1, N.RIGHT), 2));
    } else
      return n.prototype.updateIM.apply(this, arguments);
  }, t;
}(le), qt = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new Pe(), this._bufParams = t || null;
};
qt.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
qt.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var r = e.getLabel(), i = t.getLabel();
    e.isPointwiseEqual(t) || (i = new Q(t.getLabel()), i.flip()), r.merge(i);
    var o = qt.depthDelta(i), s = e.getDepthDelta(), a = s + o;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(qt.depthDelta(t.getLabel()));
};
qt.prototype.buildSubgraphs = function(t, e) {
  for (var r = new S(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getRightmostCoordinate(), a = new pn(r), u = a.getDepth(s);
    o.computeDepth(u), o.findResultEdges(), r.add(o), e.add(o.getDirectedEdges(), o.getNodes());
  }
};
qt.prototype.createSubgraphs = function(t) {
  for (var e = new S(), r = t.getNodes().iterator(); r.hasNext(); ) {
    var i = r.next();
    if (!i.isVisited()) {
      var o = new Yt();
      o.create(i), e.add(o);
    }
  }
  return we.sort(e, we.reverseOrder()), e;
};
qt.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
qt.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new jo(), r = new sn();
  return r.setPrecisionModel(t), e.setSegmentIntersector(new fe(r)), e;
};
qt.prototype.buffer = function(t, e) {
  var r = this._workingPrecisionModel;
  r === null && (r = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var i = new Qt(r, this._bufParams), o = new _e(t, e, i), s = o.getCurves();
  if (s.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(s, r), this._graph = new st(new pa()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new ee(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
qt.prototype.computeNodedEdges = function(t, e) {
  var r = this, i = this.getNoder(e);
  i.computeNodes(t);
  for (var o = i.getNodedSubstrings(), s = o.iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new ji(a.getCoordinates(), new Q(l));
      r.insertUniqueEdge(c);
    }
  }
};
qt.prototype.setNoder = function(t) {
  this._workingNoder = t;
};
qt.prototype.interfaces_ = function() {
  return [];
};
qt.prototype.getClass = function() {
  return qt;
};
qt.depthDelta = function(t) {
  var e = t.getLocation(0, N.LEFT), r = t.getLocation(0, N.RIGHT);
  return e === v.INTERIOR && r === v.EXTERIOR ? 1 : e === v.EXTERIOR && r === v.INTERIOR ? -1 : 0;
};
qt.convertSegStrings = function(t) {
  for (var e = new k(), r = new S(); t.hasNext(); ) {
    var i = t.next(), o = e.createLineString(i.getCoordinates());
    r.add(o);
  }
  return e.buildGeometry(r);
};
var Gr = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3];
    this._noder = r, this._scaleFactor = i, this._offsetX = o, this._offsetY = s, this._isScaled = !this.isIntegerPrecision();
  }
};
Gr.prototype.rescale = function() {
  var t = this;
  if (M(arguments[0], _t))
    for (var e = arguments[0], r = e.iterator(); r.hasNext(); ) {
      var i = r.next();
      t.rescale(i.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], s = 0; s < o.length; s++)
      o[s].x = o[s].x / t._scaleFactor + t._offsetX, o[s].y = o[s].y / t._scaleFactor + t._offsetY;
    o.length === 2 && o[0].equals2D(o[1]) && Rt.out.println(o);
  }
};
Gr.prototype.scale = function() {
  var t = this;
  if (M(arguments[0], _t)) {
    for (var e = arguments[0], r = new S(), i = e.iterator(); i.hasNext(); ) {
      var o = i.next();
      r.add(new dt(t.scale(o.getCoordinates()), o.getData()));
    }
    return r;
  } else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], a = new Array(s.length).fill(null), u = 0; u < s.length; u++)
      a[u] = new d(Math.round((s[u].x - t._offsetX) * t._scaleFactor), Math.round((s[u].y - t._offsetY) * t._scaleFactor), s[u].z);
    var l = z.removeRepeatedPoints(a);
    return l;
  }
};
Gr.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
Gr.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
Gr.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
Gr.prototype.interfaces_ = function() {
  return [Jr];
};
Gr.prototype.getClass = function() {
  return Gr;
};
var We = function() {
  this._li = new sn(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, da = { fact: { configurable: !0 } };
We.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var r = e.next(), i = r.getCoordinates();
      t.checkEndPtVertexIntersections(i[0], t._segStrings), t.checkEndPtVertexIntersections(i[i.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var o = arguments[0], s = arguments[1], a = s.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), c = 1; c < l.length - 1; c++)
        if (l[c].equals(o))
          throw new Ir("found endpt/interior pt intersection at index " + c + " :pt " + o);
  }
};
We.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var r = e.next(), i = this._segStrings.iterator(); i.hasNext(); ) {
        var o = i.next();
        t.checkInteriorIntersections(r, o);
      }
  else if (arguments.length === 2)
    for (var s = arguments[0], a = arguments[1], u = s.getCoordinates(), l = a.getCoordinates(), c = 0; c < u.length - 1; c++)
      for (var f = 0; f < l.length - 1; f++)
        t.checkInteriorIntersections(s, c, a, f);
  else if (arguments.length === 4) {
    var h = arguments[0], p = arguments[1], g = arguments[2], y = arguments[3];
    if (h === g && p === y)
      return null;
    var m = h.getCoordinates()[p], _ = h.getCoordinates()[p + 1], I = g.getCoordinates()[y], C = g.getCoordinates()[y + 1];
    if (this._li.computeIntersection(m, _, I, C), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, m, _) || this.hasInteriorIntersection(this._li, I, C)))
      throw new Ir("found non-noded intersection at " + m + "-" + _ + " and " + I + "-" + C);
  }
};
We.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
We.prototype.checkCollapses = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var r = e.next();
      t.checkCollapses(r);
    }
  else if (arguments.length === 1)
    for (var i = arguments[0], o = i.getCoordinates(), s = 0; s < o.length - 2; s++)
      t.checkCollapse(o[s], o[s + 1], o[s + 2]);
};
We.prototype.hasInteriorIntersection = function(t, e, r) {
  for (var i = 0; i < t.getIntersectionNum(); i++) {
    var o = t.getIntersection(i);
    if (!(o.equals(e) || o.equals(r)))
      return !0;
  }
  return !1;
};
We.prototype.checkCollapse = function(t, e, r) {
  if (t.equals(r))
    throw new Ir("found non-noded collapse at " + We.fact.createLineString([t, e, r]));
};
We.prototype.interfaces_ = function() {
  return [];
};
We.prototype.getClass = function() {
  return We;
};
da.fact.get = function() {
  return new k();
};
Object.defineProperties(We, da);
var Jt = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = r, e <= 0)
    throw new it("Scale factor must be non-zero");
  e !== 1 && (this._pt = new d(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new d(), this._p1Scaled = new d()), this.initCorners(this._pt);
}, va = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
Jt.prototype.intersectsScaled = function(t, e) {
  var r = Math.min(t.x, e.x), i = Math.max(t.x, e.x), o = Math.min(t.y, e.y), s = Math.max(t.y, e.y), a = this._maxx < r || this._minx > i || this._maxy < o || this._miny > s;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return V.isTrue(!(a && u), "Found bad envelope test"), u;
};
Jt.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new d(this._maxx, this._maxy), this._corner[1] = new d(this._minx, this._maxy), this._corner[2] = new d(this._minx, this._miny), this._corner[3] = new d(this._maxx, this._miny);
};
Jt.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
Jt.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
Jt.prototype.getCoordinate = function() {
  return this._originalPt;
};
Jt.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
Jt.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = Jt.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new R(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
Jt.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
Jt.prototype.intersectsToleranceSquare = function(t, e) {
  var r = !1, i = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (r = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || r && i || t.equals(this._pt) || e.equals(this._pt));
};
Jt.prototype.addSnappedNode = function(t, e) {
  var r = t.getCoordinate(e), i = t.getCoordinate(e + 1);
  return this.intersects(r, i) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
Jt.prototype.interfaces_ = function() {
  return [];
};
Jt.prototype.getClass = function() {
  return Jt;
};
va.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(Jt, va);
var Ci = function() {
  this.tempEnv1 = new R(), this.selectedSegment = new O();
};
Ci.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
Ci.prototype.interfaces_ = function() {
  return [];
};
Ci.prototype.getClass = function() {
  return Ci;
};
var qn = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, ya = { HotPixelSnapAction: { configurable: !0 } };
qn.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = e.getSafeEnvelope(), s = new ma(e, r, i);
    return this._index.query(o, {
      interfaces_: function() {
        return [Ar];
      },
      visitItem: function(a) {
        var u = a;
        u.select(o, s);
      }
    }), s.isNodeAdded();
  }
};
qn.prototype.interfaces_ = function() {
  return [];
};
qn.prototype.getClass = function() {
  return qn;
};
ya.HotPixelSnapAction.get = function() {
  return ma;
};
Object.defineProperties(qn, ya);
var ma = function(n) {
  function t() {
    n.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var e = arguments[0], r = arguments[1], i = arguments[2];
    this._hotPixel = e, this._parentEdge = r, this._hotPixelVertexIndex = i;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isNodeAdded = function() {
    return this._isNodeAdded;
  }, t.prototype.select = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1], o = r.getContext();
      if (this._parentEdge !== null && o === this._parentEdge && i === this._hotPixelVertexIndex)
        return null;
      this._isNodeAdded = this._hotPixel.addSnappedNode(o, i);
    } else
      return n.prototype.select.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ci), gn = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new S();
};
gn.prototype.processIntersections = function(t, e, r, i) {
  var o = this;
  if (t === r && e === i)
    return null;
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = r.getCoordinates()[i], l = r.getCoordinates()[i + 1];
  if (this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var c = 0; c < this._li.getIntersectionNum(); c++)
      o._interiorIntersections.add(o._li.getIntersection(c));
    t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1);
  }
};
gn.prototype.isDone = function() {
  return !1;
};
gn.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
gn.prototype.interfaces_ = function() {
  return [$r];
};
gn.prototype.getClass = function() {
  return gn;
};
var ur = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new sn(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
ur.prototype.checkCorrectness = function(t) {
  var e = dt.getNodedSubstrings(t), r = new We(e);
  try {
    r.checkValid();
  } catch (i) {
    if (i instanceof ea)
      i.printStackTrace();
    else
      throw i;
  } finally {
  }
};
ur.prototype.getNodedSubstrings = function() {
  return dt.getNodedSubstrings(this._nodedSegStrings);
};
ur.prototype.snapRound = function(t, e) {
  var r = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(r), this.computeVertexSnaps(t);
};
ur.prototype.findInteriorIntersections = function(t, e) {
  var r = new gn(e);
  return this._noder.setSegmentIntersector(r), this._noder.computeNodes(t), r.getInteriorIntersections();
};
ur.prototype.computeVertexSnaps = function() {
  var t = this;
  if (M(arguments[0], _t))
    for (var e = arguments[0], r = e.iterator(); r.hasNext(); ) {
      var i = r.next();
      t.computeVertexSnaps(i);
    }
  else if (arguments[0] instanceof dt)
    for (var o = arguments[0], s = o.getCoordinates(), a = 0; a < s.length; a++) {
      var u = new Jt(s[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, o, a);
      l && o.addIntersection(s[a], a);
    }
};
ur.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new jo(), this._pointSnapper = new qn(this._noder.getIndex()), this.snapRound(t, this._li);
};
ur.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next(), o = new Jt(i, e._scaleFactor, e._li);
    e._pointSnapper.snap(o);
  }
};
ur.prototype.interfaces_ = function() {
  return [Jr];
};
ur.prototype.getClass = function() {
  return ur;
};
var Pt = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new H(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this._argGeom = e, this._bufParams = r;
  }
}, ri = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
Pt.prototype.bufferFixedPrecision = function(t) {
  var e = new Gr(new ur(new W(1)), t.getScale()), r = new qt(this._bufParams);
  r.setWorkingPrecisionModel(t), r.setNoder(e), this._resultGeometry = r.buffer(this._argGeom, this._distance);
};
Pt.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = Pt.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (s) {
        if (s instanceof Nr)
          t._saveException = s;
        else
          throw s;
      } finally {
      }
      if (t._resultGeometry !== null)
        return null;
    }
    throw this._saveException;
  } else if (arguments.length === 1) {
    var r = arguments[0], i = Pt.precisionScaleFactor(this._argGeom, this._distance, r), o = new W(i);
    this.bufferFixedPrecision(o);
  }
};
Pt.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === W.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
Pt.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
Pt.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new qt(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof Ir)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
Pt.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
Pt.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
Pt.prototype.interfaces_ = function() {
  return [];
};
Pt.prototype.getClass = function() {
  return Pt;
};
Pt.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new Pt(t), i = r.getResultGeometry(e);
    return i;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof T && typeof arguments[1] == "number") {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Pt(o);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(s);
      return l;
    } else if (arguments[2] instanceof H && arguments[0] instanceof T && typeof arguments[1] == "number") {
      var c = arguments[0], f = arguments[1], h = arguments[2], p = new Pt(c, h), g = p.getResultGeometry(f);
      return g;
    }
  } else if (arguments.length === 4) {
    var y = arguments[0], m = arguments[1], _ = arguments[2], I = arguments[3], C = new Pt(y);
    C.setQuadrantSegments(_), C.setEndCapStyle(I);
    var x = C.getResultGeometry(m);
    return x;
  }
};
Pt.precisionScaleFactor = function(t, e, r) {
  var i = t.getEnvelopeInternal(), o = ue.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())), s = e > 0 ? e : 0, a = o + 2 * s, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = r - u, c = Math.pow(10, l);
  return c;
};
ri.CAP_ROUND.get = function() {
  return H.CAP_ROUND;
};
ri.CAP_BUTT.get = function() {
  return H.CAP_FLAT;
};
ri.CAP_FLAT.get = function() {
  return H.CAP_FLAT;
};
ri.CAP_SQUARE.get = function() {
  return H.CAP_SQUARE;
};
ri.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(Pt, ri);
var kt = function() {
  this._pt = [new d(), new d()], this._distance = F.NaN, this._isNull = !0;
};
kt.prototype.getCoordinates = function() {
  return this._pt;
};
kt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
kt.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i < this._distance && this.initialize(e, r, i);
  }
};
kt.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(r), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
kt.prototype.getDistance = function() {
  return this._distance;
};
kt.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i > this._distance && this.initialize(e, r, i);
  }
};
kt.prototype.interfaces_ = function() {
  return [];
};
kt.prototype.getClass = function() {
  return kt;
};
var $e = function() {
};
$e.prototype.interfaces_ = function() {
  return [];
};
$e.prototype.getClass = function() {
  return $e;
};
$e.computeDistance = function() {
  if (arguments[2] instanceof kt && arguments[0] instanceof ut && arguments[1] instanceof d)
    for (var t = arguments[0], e = arguments[1], r = arguments[2], i = t.getCoordinates(), o = new O(), s = 0; s < i.length - 1; s++) {
      o.setCoordinates(i[s], i[s + 1]);
      var a = o.closestPoint(e);
      r.setMinimum(a, e);
    }
  else if (arguments[2] instanceof kt && arguments[0] instanceof Nt && arguments[1] instanceof d) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    $e.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      $e.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof kt && arguments[0] instanceof T && arguments[1] instanceof d) {
    var h = arguments[0], p = arguments[1], g = arguments[2];
    if (h instanceof ut)
      $e.computeDistance(h, p, g);
    else if (h instanceof Nt)
      $e.computeDistance(h, p, g);
    else if (h instanceof Xt)
      for (var y = h, m = 0; m < y.getNumGeometries(); m++) {
        var _ = y.getGeometryN(m);
        $e.computeDistance(_, p, g);
      }
    else
      g.setMinimum(h.getCoordinate(), p);
  } else if (arguments[2] instanceof kt && arguments[0] instanceof O && arguments[1] instanceof d) {
    var I = arguments[0], C = arguments[1], x = arguments[2], b = I.closestPoint(C);
    x.setMinimum(b, C);
  }
};
var en = function(t) {
  this._maxPtDist = new kt(), this._inputGeom = t || null;
}, Ko = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
en.prototype.computeMaxMidpointDistance = function(t) {
  var e = new Vr(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
en.prototype.computeMaxVertexDistance = function(t) {
  var e = new dn(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
en.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
en.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
en.prototype.interfaces_ = function() {
  return [];
};
en.prototype.getClass = function() {
  return en;
};
Ko.MaxPointDistanceFilter.get = function() {
  return dn;
};
Ko.MaxMidpointDistanceFilter.get = function() {
  return Vr;
};
Object.defineProperties(en, Ko);
var dn = function(t) {
  this._maxPtDist = new kt(), this._minPtDist = new kt(), this._geom = t || null;
};
dn.prototype.filter = function(t) {
  this._minPtDist.initialize(), $e.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
dn.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
dn.prototype.interfaces_ = function() {
  return [nr];
};
dn.prototype.getClass = function() {
  return dn;
};
var Vr = function(t) {
  this._maxPtDist = new kt(), this._minPtDist = new kt(), this._geom = t || null;
};
Vr.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var r = t.getCoordinate(e - 1), i = t.getCoordinate(e), o = new d((r.x + i.x) / 2, (r.y + i.y) / 2);
  this._minPtDist.initialize(), $e.computeDistance(this._geom, o, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
Vr.prototype.isDone = function() {
  return !1;
};
Vr.prototype.isGeometryChanged = function() {
  return !1;
};
Vr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
Vr.prototype.interfaces_ = function() {
  return [Se];
};
Vr.prototype.getClass = function() {
  return Vr;
};
var Er = function(t) {
  this._comps = t || null;
};
Er.prototype.filter = function(t) {
  t instanceof Nt && this._comps.add(t);
};
Er.prototype.interfaces_ = function() {
  return [Ue];
};
Er.prototype.getClass = function() {
  return Er;
};
Er.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Er.getPolygons(t, new S());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e instanceof Nt ? r.add(e) : e instanceof Xt && e.apply(new Er(r)), r;
  }
};
var wt = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this._lines = e, this._isForcedToLineString = r;
  }
};
wt.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof ir) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof ut && this._lines.add(t);
};
wt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
wt.prototype.interfaces_ = function() {
  return [Cr];
};
wt.prototype.getClass = function() {
  return wt;
};
wt.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry(wt.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e.getFactory().buildGeometry(wt.getLines(e, r));
  }
};
wt.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return wt.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (M(arguments[0], _t) && M(arguments[1], _t)) {
      for (var e = arguments[0], r = arguments[1], i = e.iterator(); i.hasNext(); ) {
        var o = i.next();
        wt.getLines(o, r);
      }
      return r;
    } else if (arguments[0] instanceof T && typeof arguments[1] == "boolean") {
      var s = arguments[0], a = arguments[1], u = new S();
      return s.apply(new wt(u, a)), u;
    } else if (arguments[0] instanceof T && M(arguments[1], _t)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof ut ? c.add(l) : l.apply(new wt(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && M(arguments[0], _t) && M(arguments[1], _t)) {
      for (var f = arguments[0], h = arguments[1], p = arguments[2], g = f.iterator(); g.hasNext(); ) {
        var y = g.next();
        wt.getLines(y, h, p);
      }
      return h;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof T && M(arguments[1], _t)) {
      var m = arguments[0], _ = arguments[1], I = arguments[2];
      return m.apply(new wt(_, I)), _;
    }
  }
};
var be = function() {
  if (this._boundaryRule = ye.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new it("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
be.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof d && arguments[1] instanceof Nt) {
    var e = arguments[0], r = arguments[1];
    if (r.isEmpty())
      return v.EXTERIOR;
    var i = r.getExteriorRing(), o = this.locateInPolygonRing(e, i);
    if (o === v.EXTERIOR)
      return v.EXTERIOR;
    if (o === v.BOUNDARY)
      return v.BOUNDARY;
    for (var s = 0; s < r.getNumInteriorRing(); s++) {
      var a = r.getInteriorRingN(s), u = t.locateInPolygonRing(e, a);
      if (u === v.INTERIOR)
        return v.EXTERIOR;
      if (u === v.BOUNDARY)
        return v.BOUNDARY;
    }
    return v.INTERIOR;
  } else if (arguments[0] instanceof d && arguments[1] instanceof ut) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return v.EXTERIOR;
    var f = c.getCoordinates();
    return !c.isClosed() && (l.equals(f[0]) || l.equals(f[f.length - 1])) ? v.BOUNDARY : L.isOnLine(l, f) ? v.INTERIOR : v.EXTERIOR;
  } else if (arguments[0] instanceof d && arguments[1] instanceof te) {
    var h = arguments[0], p = arguments[1], g = p.getCoordinate();
    return g.equals2D(h) ? v.INTERIOR : v.EXTERIOR;
  }
};
be.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? L.locatePointInRing(t, e.getCoordinates()) : v.EXTERIOR;
};
be.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== v.EXTERIOR;
};
be.prototype.updateLocationInfo = function(t) {
  t === v.INTERIOR && (this._isIn = !0), t === v.BOUNDARY && this._numBoundaries++;
};
be.prototype.computeLocation = function(t, e) {
  var r = this;
  if (e instanceof te && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof ut)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Nt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Qr)
    for (var i = e, o = 0; o < i.getNumGeometries(); o++) {
      var s = i.getGeometryN(o);
      r.updateLocationInfo(r.locateInternal(t, s));
    }
  else if (e instanceof er)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      r.updateLocationInfo(r.locateInternal(t, l));
    }
  else if (e instanceof Xt)
    for (var c = new rr(e); c.hasNext(); ) {
      var f = c.next();
      f !== e && r.computeLocation(t, f);
    }
};
be.prototype.locate = function(t, e) {
  return e.isEmpty() ? v.EXTERIOR : e instanceof ut ? this.locateInternal(t, e) : e instanceof Nt ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? v.BOUNDARY : this._numBoundaries > 0 || this._isIn ? v.INTERIOR : v.EXTERIOR);
};
be.prototype.interfaces_ = function() {
  return [];
};
be.prototype.getClass = function() {
  return be;
};
var zt = function n() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    n.call(this, t, n.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._component = r, this._segIndex = i, this._pt = o;
  }
}, _a = { INSIDE_AREA: { configurable: !0 } };
zt.prototype.isInsideArea = function() {
  return this._segIndex === zt.INSIDE_AREA;
};
zt.prototype.getCoordinate = function() {
  return this._pt;
};
zt.prototype.getGeometryComponent = function() {
  return this._component;
};
zt.prototype.getSegmentIndex = function() {
  return this._segIndex;
};
zt.prototype.interfaces_ = function() {
  return [];
};
zt.prototype.getClass = function() {
  return zt;
};
_a.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties(zt, _a);
var Dr = function(t) {
  this._pts = t || null;
};
Dr.prototype.filter = function(t) {
  t instanceof te && this._pts.add(t);
};
Dr.prototype.interfaces_ = function() {
  return [Ue];
};
Dr.prototype.getClass = function() {
  return Dr;
};
Dr.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof te ? we.singletonList(t) : Dr.getPoints(t, new S());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e instanceof te ? r.add(e) : e instanceof Xt && e.apply(new Dr(r)), r;
  }
};
var vn = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
vn.prototype.filter = function(t) {
  (t instanceof te || t instanceof ut || t instanceof Nt) && this._locations.add(new zt(t, 0, t.getCoordinate()));
};
vn.prototype.interfaces_ = function() {
  return [Ue];
};
vn.prototype.getClass = function() {
  return vn;
};
vn.getLocations = function(t) {
  var e = new S();
  return t.apply(new vn(e)), e;
};
var Ot = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new be(), this._minDistanceLocation = null, this._minDistance = F.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = r, this._geom[1] = i, this._terminateDistance = o;
  }
};
Ot.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = 1 - r, s = Er.getPolygons(this._geom[r]);
    if (s.size() > 0) {
      var a = vn.getLocations(this._geom[o]);
      if (this.computeContainmentDistance(a, s, i), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[o] = i[0], this._minDistanceLocation[r] = i[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && M(arguments[0], Ne) && M(arguments[1], Ne)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], f = 0; f < u.size(); f++)
        for (var h = u.get(f), p = 0; p < l.size(); p++)
          if (t.computeContainmentDistance(h, l.get(p), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof zt && arguments[1] instanceof Nt) {
      var g = arguments[0], y = arguments[1], m = arguments[2], _ = g.getCoordinate();
      if (v.EXTERIOR !== this._ptLocator.locate(_, y))
        return this._minDistance = 0, m[0] = g, m[1] = new zt(y, _), null;
    }
  }
};
Ot.prototype.computeMinDistanceLinesPoints = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, r), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Ot.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = wt.getLines(this._geom[0]), r = wt.getLines(this._geom[1]), i = Dr.getPoints(this._geom[0]), o = Dr.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, r, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, o, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(r, i, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(i, o, t), this.updateMinDistance(t, !1);
};
Ot.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
Ot.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
Ot.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
Ot.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof ut && arguments[1] instanceof te) {
      var e = arguments[0], r = arguments[1], i = arguments[2];
      if (e.getEnvelopeInternal().distance(r.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var o = e.getCoordinates(), s = r.getCoordinate(), a = 0; a < o.length - 1; a++) {
        var u = L.distancePointLine(s, o[a], o[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new O(o[a], o[a + 1]), c = l.closestPoint(s);
          i[0] = new zt(e, a, c), i[1] = new zt(r, 0, s);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof ut && arguments[1] instanceof ut) {
      var f = arguments[0], h = arguments[1], p = arguments[2];
      if (f.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var g = f.getCoordinates(), y = h.getCoordinates(), m = 0; m < g.length - 1; m++)
        for (var _ = 0; _ < y.length - 1; _++) {
          var I = L.distanceLineLine(g[m], g[m + 1], y[_], y[_ + 1]);
          if (I < t._minDistance) {
            t._minDistance = I;
            var C = new O(g[m], g[m + 1]), x = new O(y[_], y[_ + 1]), b = C.closestPoints(x);
            p[0] = new zt(f, m, b[0]), p[1] = new zt(h, _, b[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
Ot.prototype.computeMinDistancePoints = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = s.getCoordinate().distance(u.getCoordinate());
      if (l < i._minDistance && (i._minDistance = l, r[0] = new zt(s, 0, s.getCoordinate()), r[1] = new zt(u, 0, u.getCoordinate())), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Ot.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new it("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
Ot.prototype.computeMinDistanceLines = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, r), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Ot.prototype.interfaces_ = function() {
  return [];
};
Ot.prototype.getClass = function() {
  return Ot;
};
Ot.distance = function(t, e) {
  var r = new Ot(t, e);
  return r.distance();
};
Ot.isWithinDistance = function(t, e, r) {
  var i = new Ot(t, e, r);
  return i.distance() <= r;
};
Ot.nearestPoints = function(t, e) {
  var r = new Ot(t, e);
  return r.nearestPoints();
};
var Mt = function() {
  this._pt = [new d(), new d()], this._distance = F.NaN, this._isNull = !0;
};
Mt.prototype.getCoordinates = function() {
  return this._pt;
};
Mt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
Mt.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i < this._distance && this.initialize(e, r, i);
  }
};
Mt.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(r), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
Mt.prototype.toString = function() {
  return xe.toLineString(this._pt[0], this._pt[1]);
};
Mt.prototype.getDistance = function() {
  return this._distance;
};
Mt.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i > this._distance && this.initialize(e, r, i);
  }
};
Mt.prototype.interfaces_ = function() {
  return [];
};
Mt.prototype.getClass = function() {
  return Mt;
};
var Be = function() {
};
Be.prototype.interfaces_ = function() {
  return [];
};
Be.prototype.getClass = function() {
  return Be;
};
Be.computeDistance = function() {
  if (arguments[2] instanceof Mt && arguments[0] instanceof ut && arguments[1] instanceof d)
    for (var t = arguments[0], e = arguments[1], r = arguments[2], i = new O(), o = t.getCoordinates(), s = 0; s < o.length - 1; s++) {
      i.setCoordinates(o[s], o[s + 1]);
      var a = i.closestPoint(e);
      r.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Mt && arguments[0] instanceof Nt && arguments[1] instanceof d) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Be.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      Be.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof Mt && arguments[0] instanceof T && arguments[1] instanceof d) {
    var h = arguments[0], p = arguments[1], g = arguments[2];
    if (h instanceof ut)
      Be.computeDistance(h, p, g);
    else if (h instanceof Nt)
      Be.computeDistance(h, p, g);
    else if (h instanceof Xt)
      for (var y = h, m = 0; m < y.getNumGeometries(); m++) {
        var _ = y.getGeometryN(m);
        Be.computeDistance(_, p, g);
      }
    else
      g.setMinimum(h.getCoordinate(), p);
  } else if (arguments[2] instanceof Mt && arguments[0] instanceof O && arguments[1] instanceof d) {
    var I = arguments[0], C = arguments[1], x = arguments[2], b = I.closestPoint(C);
    x.setMinimum(b, C);
  }
};
var ve = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new Mt(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, Qo = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
ve.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
ve.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new it("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
ve.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
ve.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
ve.prototype.computeOrientedDistance = function(t, e, r) {
  var i = new yn(e);
  if (t.apply(i), r.setMaximum(i.getMaxPointDistance()), this._densifyFrac > 0) {
    var o = new kr(e, this._densifyFrac);
    t.apply(o), r.setMaximum(o.getMaxPointDistance());
  }
};
ve.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
ve.prototype.interfaces_ = function() {
  return [];
};
ve.prototype.getClass = function() {
  return ve;
};
ve.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new ve(t, e);
    return r.distance();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new ve(i, o);
    return a.setDensifyFraction(s), a.distance();
  }
};
Qo.MaxPointDistanceFilter.get = function() {
  return yn;
};
Qo.MaxDensifiedByFractionDistanceFilter.get = function() {
  return kr;
};
Object.defineProperties(ve, Qo);
var yn = function() {
  this._maxPtDist = new Mt(), this._minPtDist = new Mt(), this._euclideanDist = new Be(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
yn.prototype.filter = function(t) {
  this._minPtDist.initialize(), Be.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
yn.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
yn.prototype.interfaces_ = function() {
  return [nr];
};
yn.prototype.getClass = function() {
  return yn;
};
var kr = function() {
  this._maxPtDist = new Mt(), this._minPtDist = new Mt(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
kr.prototype.filter = function(t, e) {
  var r = this;
  if (e === 0)
    return null;
  for (var i = t.getCoordinate(e - 1), o = t.getCoordinate(e), s = (o.x - i.x) / this._numSubSegs, a = (o.y - i.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = i.x + u * s, c = i.y + u * a, f = new d(l, c);
    r._minPtDist.initialize(), Be.computeDistance(r._geom, f, r._minPtDist), r._maxPtDist.setMaximum(r._minPtDist);
  }
};
kr.prototype.isDone = function() {
  return !1;
};
kr.prototype.isGeometryChanged = function() {
  return !1;
};
kr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
kr.prototype.interfaces_ = function() {
  return [Se];
};
kr.prototype.getClass = function() {
  return kr;
};
var $t = function(t, e, r) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = r || null;
}, Jo = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
$t.prototype.checkMaximumDistance = function(t, e, r) {
  var i = new ve(e, t);
  if (i.setDensifyFraction(0.25), this._maxDistanceFound = i.orientedDistance(), this._maxDistanceFound > r) {
    this._isValid = !1;
    var o = i.getCoordinates();
    this._errorLocation = o[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + xe.toLineString(o[0], o[1]) + ")";
  }
};
$t.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = $t.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), $t.VERBOSE && Rt.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
$t.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof Nt || this._input instanceof er || this._input instanceof Xt))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
$t.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
$t.prototype.checkMinimumDistance = function(t, e, r) {
  var i = new Ot(t, e, r);
  if (this._minDistanceFound = i.distance(), this._minDistanceFound < r) {
    this._isValid = !1;
    var o = i.nearestPoints();
    this._errorLocation = i.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + xe.toLineString(o[0], o[1]) + " )";
  }
};
$t.prototype.checkPositiveValid = function() {
  var t = this._result.getBoundary();
  if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(this._input, t, this._maxValidDistance);
};
$t.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
$t.prototype.getPolygonLines = function(t) {
  for (var e = new S(), r = new wt(e), i = Er.getPolygons(t), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    s.apply(r);
  }
  return t.getFactory().buildGeometry(e);
};
$t.prototype.getErrorMessage = function() {
  return this._errMsg;
};
$t.prototype.interfaces_ = function() {
  return [];
};
$t.prototype.getClass = function() {
  return $t;
};
Jo.VERBOSE.get = function() {
  return !1;
};
Jo.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties($t, Jo);
var Dt = function(t, e, r) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = r || null;
}, Zo = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
Dt.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
Dt.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * Dt.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new R(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var r = new R(this._result.getEnvelopeInternal());
  r.expandBy(t), r.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(r)), this.report("Envelope");
};
Dt.prototype.checkDistance = function() {
  var t = new $t(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
Dt.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
Dt.prototype.checkPolygonal = function() {
  this._result instanceof Nt || this._result instanceof er || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
};
Dt.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
Dt.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
Dt.prototype.checkExpectedEmpty = function() {
  if (this._input.getDimension() >= 2 || this._distance > 0)
    return null;
  this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), this.report("ExpectedEmpty");
};
Dt.prototype.report = function(t) {
  if (!Dt.VERBOSE)
    return null;
  Rt.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
};
Dt.prototype.getErrorMessage = function() {
  return this._errorMsg;
};
Dt.prototype.interfaces_ = function() {
  return [];
};
Dt.prototype.getClass = function() {
  return Dt;
};
Dt.isValidMsg = function(t, e, r) {
  var i = new Dt(t, e, r);
  return i.isValid() ? null : i.getErrorMessage();
};
Dt.isValid = function(t, e, r) {
  var i = new Dt(t, e, r);
  return !!i.isValid();
};
Zo.VERBOSE.get = function() {
  return !1;
};
Zo.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Dt, Zo);
var je = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
je.prototype.getCoordinates = function() {
  return this._pts;
};
je.prototype.size = function() {
  return this._pts.length;
};
je.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
je.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
je.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : hn.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
je.prototype.setData = function(t) {
  this._data = t;
};
je.prototype.getData = function() {
  return this._data;
};
je.prototype.toString = function() {
  return xe.toLineString(new ht(this._pts));
};
je.prototype.interfaces_ = function() {
  return [sr];
};
je.prototype.getClass = function() {
  return je;
};
var St = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new S(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
St.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
St.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
St.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
St.prototype.count = function() {
  return this._intersectionCount;
};
St.prototype.getIntersections = function() {
  return this._intersections;
};
St.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
St.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
St.prototype.processIntersections = function(t, e, r, i) {
  if (!this._findAllIntersections && this.hasIntersection() || t === r && e === i)
    return null;
  if (this._isCheckEndSegmentsOnly) {
    var o = this.isEndSegment(t, e) || this.isEndSegment(r, i);
    if (!o)
      return null;
  }
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = r.getCoordinates()[i], l = r.getCoordinates()[i + 1];
  this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = s, this._intSegments[1] = a, this._intSegments[2] = u, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
};
St.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
St.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
St.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
St.prototype.interfaces_ = function() {
  return [$r];
};
St.prototype.getClass = function() {
  return St;
};
St.createAllIntersectionsFinder = function(t) {
  var e = new St(t);
  return e.setFindAllIntersections(!0), e;
};
St.createAnyIntersectionFinder = function(t) {
  return new St(t);
};
St.createIntersectionCounter = function(t) {
  var e = new St(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var Re = function() {
  this._li = new sn(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
Re.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
Re.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
Re.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
Re.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Re.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new St(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new jo();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
Re.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new Nr(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
Re.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + xe.toLineString(t[0], t[1]) + " and " + xe.toLineString(t[2], t[3]);
};
Re.prototype.interfaces_ = function() {
  return [];
};
Re.prototype.getClass = function() {
  return Re;
};
Re.computeIntersections = function(t) {
  var e = new Re(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var rn = function n() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new Re(n.toSegmentStrings(t));
};
rn.prototype.checkValid = function() {
  this._nv.checkValid();
};
rn.prototype.interfaces_ = function() {
  return [];
};
rn.prototype.getClass = function() {
  return rn;
};
rn.toSegmentStrings = function(t) {
  for (var e = new S(), r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e.add(new je(i.getCoordinates(), i));
  }
  return e;
};
rn.checkValid = function(t) {
  var e = new rn(t);
  e.checkValid();
};
var mn = function(t) {
  this._mapOp = t;
};
mn.prototype.map = function(t) {
  for (var e = this, r = new S(), i = 0; i < t.getNumGeometries(); i++) {
    var o = e._mapOp.map(t.getGeometryN(i));
    o.isEmpty() || r.add(o);
  }
  return t.getFactory().createGeometryCollection(k.toGeometryArray(r));
};
mn.prototype.interfaces_ = function() {
  return [];
};
mn.prototype.getClass = function() {
  return mn;
};
mn.map = function(t, e) {
  var r = new mn(e);
  return r.map(t);
};
var Ke = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new S(), this._resultLineList = new S();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = r;
};
Ke.prototype.collectLines = function(t) {
  for (var e = this, r = this._op.getGraph().getEdgeEnds().iterator(); r.hasNext(); ) {
    var i = r.next();
    e.collectLineEdge(i, t, e._lineEdgesList), e.collectBoundaryTouchEdge(i, t, e._lineEdgesList);
  }
};
Ke.prototype.labelIsolatedLine = function(t, e) {
  var r = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, r);
};
Ke.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
Ke.prototype.collectLineEdge = function(t, e, r) {
  var i = t.getLabel(), o = t.getEdge();
  t.isLineEdge() && !t.isVisited() && B.isResultOfOp(i, e) && !o.isCovered() && (r.add(o), t.setVisitedEdge(!0));
};
Ke.prototype.findCoveredLineEdges = function() {
  for (var t = this, e = this._op.getGraph().getNodes().iterator(); e.hasNext(); ) {
    var r = e.next();
    r.getEdges().findCoveredLineEdges();
  }
  for (var i = this._op.getGraph().getEdgeEnds().iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getEdge();
    if (o.isLineEdge() && !s.isCoveredSet()) {
      var a = t._op.isCoveredByA(o.getCoordinate());
      s.setCovered(a);
    }
  }
};
Ke.prototype.labelIsolatedLines = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getLabel();
    i.isIsolated() && (o.isNull(0) ? e.labelIsolatedLine(i, 0) : e.labelIsolatedLine(i, 1));
  }
};
Ke.prototype.buildLines = function(t) {
  for (var e = this, r = this._lineEdgesList.iterator(); r.hasNext(); ) {
    var i = r.next(), o = e._geometryFactory.createLineString(i.getCoordinates());
    e._resultLineList.add(o), i.setInResult(!0);
  }
};
Ke.prototype.collectBoundaryTouchEdge = function(t, e, r) {
  var i = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  V.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), B.isResultOfOp(i, e) && e === B.INTERSECTION && (r.add(t.getEdge()), t.setVisitedEdge(!0));
};
Ke.prototype.interfaces_ = function() {
  return [];
};
Ke.prototype.getClass = function() {
  return Ke;
};
var _n = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new S();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
_n.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var r = this._geometryFactory.createPoint(e);
    this._resultPointList.add(r);
  }
};
_n.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, r = this._op.getGraph().getNodes().iterator(); r.hasNext(); ) {
    var i = r.next();
    if (!i.isInResult() && !i.isIncidentEdgeInResult() && (i.getEdges().getDegree() === 0 || t === B.INTERSECTION)) {
      var o = i.getLabel();
      B.isResultOfOp(o, t) && e.filterCoveredNodeToPoint(i);
    }
  }
};
_n.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
_n.prototype.interfaces_ = function() {
  return [];
};
_n.prototype.getClass = function() {
  return _n;
};
var Zt = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
Zt.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
Zt.prototype.transformPolygon = function(t, e) {
  var r = this, i = !0, o = this.transformLinearRing(t.getExteriorRing(), t);
  (o === null || !(o instanceof ir) || o.isEmpty()) && (i = !1);
  for (var s = new S(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = r.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof ir || (i = !1), s.add(u));
  }
  if (i)
    return this._factory.createPolygon(o, s.toArray([]));
  var l = new S();
  return o !== null && l.add(o), l.addAll(s), this._factory.buildGeometry(l);
};
Zt.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
Zt.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
Zt.prototype.transformMultiLineString = function(t, e) {
  for (var r = this, i = new S(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformLineString(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
Zt.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
Zt.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
Zt.prototype.transformMultiPoint = function(t, e) {
  for (var r = this, i = new S(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformPoint(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
Zt.prototype.transformMultiPolygon = function(t, e) {
  for (var r = this, i = new S(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformPolygon(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
Zt.prototype.copy = function(t) {
  return t.copy();
};
Zt.prototype.transformGeometryCollection = function(t, e) {
  for (var r = this, i = new S(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transform(t.getGeometryN(o));
    s !== null && (r._pruneEmptyGeometry && s.isEmpty() || i.add(s));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(k.toGeometryArray(i)) : this._factory.buildGeometry(i);
};
Zt.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof te)
    return this.transformPoint(t, null);
  if (t instanceof Gn)
    return this.transformMultiPoint(t, null);
  if (t instanceof ir)
    return this.transformLinearRing(t, null);
  if (t instanceof ut)
    return this.transformLineString(t, null);
  if (t instanceof Qr)
    return this.transformMultiLineString(t, null);
  if (t instanceof Nt)
    return this.transformPolygon(t, null);
  if (t instanceof er)
    return this.transformMultiPolygon(t, null);
  if (t instanceof Xt)
    return this.transformGeometryCollection(t, null);
  throw new it("Unknown Geometry subtype: " + t.getClass().getName());
};
Zt.prototype.transformLinearRing = function(t, e) {
  var r = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (r === null)
    return this._factory.createLinearRing(null);
  var i = r.size();
  return i > 0 && i < 4 && !this._preserveType ? this._factory.createLineString(r) : this._factory.createLinearRing(r);
};
Zt.prototype.interfaces_ = function() {
  return [];
};
Zt.prototype.getClass = function() {
  return Zt;
};
var lr = function n() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new O(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof ut && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    n.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var r = arguments[0], i = arguments[1];
    this._srcPts = r, this._isClosed = n.isClosed(r), this._snapTolerance = i;
  }
};
lr.prototype.snapVertices = function(t, e) {
  for (var r = this, i = this._isClosed ? t.size() - 1 : t.size(), o = 0; o < i; o++) {
    var s = t.get(o), a = r.findSnapForVertex(s, e);
    a !== null && (t.set(o, new d(a)), o === 0 && r._isClosed && t.set(t.size() - 1, new d(a)));
  }
};
lr.prototype.findSnapForVertex = function(t, e) {
  for (var r = this, i = 0; i < e.length; i++) {
    if (t.equals2D(e[i]))
      return null;
    if (t.distance(e[i]) < r._snapTolerance)
      return e[i];
  }
  return null;
};
lr.prototype.snapTo = function(t) {
  var e = new Pi(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var r = e.toCoordinateArray();
  return r;
};
lr.prototype.snapSegments = function(t, e) {
  var r = this;
  if (e.length === 0)
    return null;
  var i = e.length;
  e[0].equals2D(e[e.length - 1]) && (i = e.length - 1);
  for (var o = 0; o < i; o++) {
    var s = e[o], a = r.findSegmentIndexToSnap(s, t);
    a >= 0 && t.add(a + 1, new d(s), !1);
  }
};
lr.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var r = this, i = F.MAX_VALUE, o = -1, s = 0; s < e.size() - 1; s++) {
    if (r._seg.p0 = e.get(s), r._seg.p1 = e.get(s + 1), r._seg.p0.equals2D(t) || r._seg.p1.equals2D(t)) {
      if (r._allowSnappingToSourceVertices)
        continue;
      return -1;
    }
    var a = r._seg.distance(t);
    a < r._snapTolerance && a < i && (i = a, o = s);
  }
  return o;
};
lr.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
lr.prototype.interfaces_ = function() {
  return [];
};
lr.prototype.getClass = function() {
  return lr;
};
lr.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var pt = function(t) {
  this._srcGeom = t || null;
}, Ea = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
pt.prototype.snapTo = function(t, e) {
  var r = this.extractTargetCoordinates(t), i = new Ia(e, r);
  return i.transform(this._srcGeom);
};
pt.prototype.snapToSelf = function(t, e) {
  var r = this.extractTargetCoordinates(this._srcGeom), i = new Ia(t, r, !0), o = i.transform(this._srcGeom), s = o;
  return e && M(s, Mr) && (s = o.buffer(0)), s;
};
pt.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), r = e / 10;
  return r;
};
pt.prototype.extractTargetCoordinates = function(t) {
  for (var e = new ze(), r = t.getCoordinates(), i = 0; i < r.length; i++)
    e.add(r[i]);
  return e.toArray(new Array(0).fill(null));
};
pt.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = F.MAX_VALUE, r = 0; r < t.length - 1; r++) {
    var i = t[r].distance(t[r + 1]);
    i < e && (e = i);
  }
  return e;
};
pt.prototype.interfaces_ = function() {
  return [];
};
pt.prototype.getClass = function() {
  return pt;
};
pt.snap = function(t, e, r) {
  var i = new Array(2).fill(null), o = new pt(t);
  i[0] = o.snapTo(e, r);
  var s = new pt(e);
  return i[1] = s.snapTo(i[0], r), i;
};
pt.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = pt.computeSizeBasedSnapTolerance(t), r = t.getPrecisionModel();
    if (r.getType() === W.FIXED) {
      var i = 1 / r.getScale() * 2 / 1.415;
      i > e && (e = i);
    }
    return e;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return Math.min(pt.computeOverlaySnapTolerance(o), pt.computeOverlaySnapTolerance(s));
  }
};
pt.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), r = Math.min(e.getHeight(), e.getWidth()), i = r * pt.SNAP_PRECISION_FACTOR;
  return i;
};
pt.snapToSelf = function(t, e, r) {
  var i = new pt(t);
  return i.snapToSelf(e, r);
};
Ea.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(pt, Ea);
var Ia = function(n) {
  function t(e, r, i) {
    n.call(this), this._snapTolerance = e || null, this._snapPts = r || null, this._isSelfSnap = i !== void 0 ? i : !1;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(r, i) {
    var o = new lr(r, this._snapTolerance);
    return o.setAllowSnappingToSourceVertices(this._isSelfSnap), o.snapTo(i);
  }, t.prototype.transformCoordinates = function(r, i) {
    var o = r.toCoordinateArray(), s = this.snapLine(o, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Zt), Vt = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
Vt.prototype.getCommon = function() {
  return F.longBitsToDouble(this._commonBits);
};
Vt.prototype.add = function(t) {
  var e = F.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = Vt.signExpBits(this._commonBits), this._isFirst = !1, null;
  var r = Vt.signExpBits(e);
  if (r !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = Vt.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = Vt.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
Vt.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = F.longBitsToDouble(t), r = F.toBinaryString(t), i = "0000000000000000000000000000000000000000000000000000000000000000" + r, o = i.substring(i.length - 64), s = o.substring(0, 1) + "  " + o.substring(1, 12) + "(exp) " + o.substring(12) + " [ " + e + " ]";
    return s;
  }
};
Vt.prototype.interfaces_ = function() {
  return [];
};
Vt.prototype.getClass = function() {
  return Vt;
};
Vt.getBit = function(t, e) {
  var r = 1 << e;
  return t & r ? 1 : 0;
};
Vt.signExpBits = function(t) {
  return t >> 52;
};
Vt.zeroLowerBits = function(t, e) {
  var r = (1 << e) - 1, i = ~r, o = t & i;
  return o;
};
Vt.numCommonMostSigMantissaBits = function(t, e) {
  for (var r = 0, i = 52; i >= 0; i--) {
    if (Vt.getBit(t, i) !== Vt.getBit(e, i))
      return r;
    r++;
  }
  return 52;
};
var zr = function() {
  this._commonCoord = null, this._ccFilter = new En();
}, $o = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
zr.prototype.addCommonBits = function(t) {
  var e = new Ur(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
zr.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new d(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var r = new Ur(e);
  return t.apply(r), t.geometryChanged(), t;
};
zr.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
zr.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
zr.prototype.interfaces_ = function() {
  return [];
};
zr.prototype.getClass = function() {
  return zr;
};
$o.CommonCoordinateFilter.get = function() {
  return En;
};
$o.Translater.get = function() {
  return Ur;
};
Object.defineProperties(zr, $o);
var En = function() {
  this._commonBitsX = new Vt(), this._commonBitsY = new Vt();
};
En.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
En.prototype.getCommonCoordinate = function() {
  return new d(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
En.prototype.interfaces_ = function() {
  return [nr];
};
En.prototype.getClass = function() {
  return En;
};
var Ur = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
Ur.prototype.filter = function(t, e) {
  var r = t.getOrdinate(e, 0) + this.trans.x, i = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, r), t.setOrdinate(e, 1, i);
};
Ur.prototype.isDone = function() {
  return !1;
};
Ur.prototype.isGeometryChanged = function() {
  return !0;
};
Ur.prototype.interfaces_ = function() {
  return [Se];
};
Ur.prototype.getClass = function() {
  return Ur;
};
var Lt = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
Lt.prototype.selfSnap = function(t) {
  var e = new pt(t), r = e.snapTo(t, this._snapTolerance);
  return r;
};
Lt.prototype.removeCommonBits = function(t) {
  this._cbr = new zr(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
Lt.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
Lt.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), r = B.overlayOp(e[0], e[1], t);
  return this.prepareResult(r);
};
Lt.prototype.checkValid = function(t) {
  t.isValid() || Rt.out.println("Snapped geometry is invalid");
};
Lt.prototype.computeSnapTolerance = function() {
  this._snapTolerance = pt.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
Lt.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), r = pt.snap(e[0], e[1], this._snapTolerance);
  return r;
};
Lt.prototype.interfaces_ = function() {
  return [];
};
Lt.prototype.getClass = function() {
  return Lt;
};
Lt.overlayOp = function(t, e, r) {
  var i = new Lt(t, e);
  return i.getResultGeometry(r);
};
Lt.union = function(t, e) {
  return Lt.overlayOp(t, e, B.UNION);
};
Lt.intersection = function(t, e) {
  return Lt.overlayOp(t, e, B.INTERSECTION);
};
Lt.symDifference = function(t, e) {
  return Lt.overlayOp(t, e, B.SYMDIFFERENCE);
};
Lt.difference = function(t, e) {
  return Lt.overlayOp(t, e, B.DIFFERENCE);
};
var Wt = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
Wt.prototype.getResultGeometry = function(t) {
  var e = null, r = !1, i = null;
  try {
    e = B.overlayOp(this._geom[0], this._geom[1], t);
    var o = !0;
    o && (r = !0);
  } catch (s) {
    if (s instanceof Ir)
      i = s;
    else
      throw s;
  } finally {
  }
  if (!r)
    try {
      e = Lt.overlayOp(this._geom[0], this._geom[1], t);
    } catch (s) {
      throw s instanceof Ir ? i : s;
    } finally {
    }
  return e;
};
Wt.prototype.interfaces_ = function() {
  return [];
};
Wt.prototype.getClass = function() {
  return Wt;
};
Wt.overlayOp = function(t, e, r) {
  var i = new Wt(t, e);
  return i.getResultGeometry(r);
};
Wt.union = function(t, e) {
  return Wt.overlayOp(t, e, B.UNION);
};
Wt.intersection = function(t, e) {
  return Wt.overlayOp(t, e, B.INTERSECTION);
};
Wt.symDifference = function(t, e) {
  return Wt.overlayOp(t, e, B.SYMDIFFERENCE);
};
Wt.difference = function(t, e) {
  return Wt.overlayOp(t, e, B.DIFFERENCE);
};
var Ni = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
Ni.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
Ni.prototype.interfaces_ = function() {
  return [];
};
Ni.prototype.getClass = function() {
  return Ni;
};
var ne = function n() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = n.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._eventType = n.INSERT, this._label = r, this._xValue = i, this._obj = o;
  }
}, ts = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
ne.prototype.isDelete = function() {
  return this._eventType === ne.DELETE;
};
ne.prototype.setDeleteEventIndex = function(t) {
  this._deleteEventIndex = t;
};
ne.prototype.getObject = function() {
  return this._obj;
};
ne.prototype.compareTo = function(t) {
  var e = t;
  return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
};
ne.prototype.getInsertEvent = function() {
  return this._insertEvent;
};
ne.prototype.isInsert = function() {
  return this._eventType === ne.INSERT;
};
ne.prototype.isSameLabel = function(t) {
  return this._label === null ? !1 : this._label === t._label;
};
ne.prototype.getDeleteEventIndex = function() {
  return this._deleteEventIndex;
};
ne.prototype.interfaces_ = function() {
  return [Ee];
};
ne.prototype.getClass = function() {
  return ne;
};
ts.INSERT.get = function() {
  return 1;
};
ts.DELETE.get = function() {
  return 2;
};
Object.defineProperties(ne, ts);
var Ki = function() {
};
Ki.prototype.interfaces_ = function() {
  return [];
};
Ki.prototype.getClass = function() {
  return Ki;
};
var Tt = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = r;
};
Tt.prototype.isTrivialIntersection = function(t, e, r, i) {
  if (t === r && this._li.getIntersectionNum() === 1) {
    if (Tt.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.getNumPoints() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Tt.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Tt.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
Tt.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Tt.prototype.isBoundaryPointInternal = function(t, e) {
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getCoordinate();
    if (t.isIntersection(o))
      return !0;
  }
  return !1;
};
Tt.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Tt.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Tt.prototype.isDone = function() {
  return this._isDone;
};
Tt.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
Tt.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
Tt.prototype.addIntersections = function(t, e, r, i) {
  if (t === r && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = r.getCoordinates()[i], u = r.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), r.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, r, i) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
Tt.prototype.interfaces_ = function() {
  return [];
};
Tt.prototype.getClass = function() {
  return Tt;
};
Tt.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var Yu = function(n) {
  function t() {
    n.call(this), this.events = new S(), this.nOverlaps = null;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var r = this;
    we.sort(this.events);
    for (var i = 0; i < this.events.size(); i++) {
      var o = r.events.get(i);
      o.isDelete() && o.getInsertEvent().setDeleteEventIndex(i);
    }
  }, t.prototype.computeIntersections = function() {
    var r = this;
    if (arguments.length === 1) {
      var i = arguments[0];
      this.nOverlaps = 0, this.prepareEvents();
      for (var o = 0; o < this.events.size(); o++) {
        var s = r.events.get(o);
        if (s.isInsert() && r.processOverlaps(o, s.getDeleteEventIndex(), s, i), i.isDone())
          break;
      }
    } else if (arguments.length === 3) {
      if (arguments[2] instanceof Tt && M(arguments[0], Ne) && M(arguments[1], Ne)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && M(arguments[0], Ne) && arguments[1] instanceof Tt) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        h ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(f);
      }
    }
  }, t.prototype.addEdge = function(r, i) {
    for (var o = this, s = r.getMonotoneChainEdge(), a = s.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new Ni(s, u), c = new ne(i, s.getMinX(u), l);
      o.events.add(c), o.events.add(new ne(s.getMaxX(u), c));
    }
  }, t.prototype.processOverlaps = function(r, i, o, s) {
    for (var a = this, u = o.getObject(), l = r; l < i; l++) {
      var c = a.events.get(l);
      if (c.isInsert()) {
        var f = c.getObject();
        o.isSameLabel(c) || (u.computeIntersections(f, s), a.nOverlaps++);
      }
    }
  }, t.prototype.addEdges = function() {
    var r = this;
    if (arguments.length === 1)
      for (var i = arguments[0], o = i.iterator(); o.hasNext(); ) {
        var s = o.next();
        r.addEdge(s, s);
      }
    else if (arguments.length === 2)
      for (var a = arguments[0], u = arguments[1], l = a.iterator(); l.hasNext(); ) {
        var c = l.next();
        r.addEdge(c, u);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ki), cr = function() {
  this._min = F.POSITIVE_INFINITY, this._max = F.NEGATIVE_INFINITY;
}, Ca = { NodeComparator: { configurable: !0 } };
cr.prototype.getMin = function() {
  return this._min;
};
cr.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
cr.prototype.getMax = function() {
  return this._max;
};
cr.prototype.toString = function() {
  return xe.toLineString(new d(this._min, 0), new d(this._max, 0));
};
cr.prototype.interfaces_ = function() {
  return [];
};
cr.prototype.getClass = function() {
  return cr;
};
Ca.NodeComparator.get = function() {
  return xi;
};
Object.defineProperties(cr, Ca);
var xi = function() {
};
xi.prototype.compare = function(t, e) {
  var r = t, i = e, o = (r._min + r._max) / 2, s = (i._min + i._max) / 2;
  return o < s ? -1 : o > s ? 1 : 0;
};
xi.prototype.interfaces_ = function() {
  return [On];
};
xi.prototype.getClass = function() {
  return xi;
};
var Hu = function(n) {
  function t() {
    n.call(this), this._item = null;
    var e = arguments[0], r = arguments[1], i = arguments[2];
    this._min = e, this._max = r, this._item = i;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.query = function(r, i, o) {
    if (!this.intersects(r, i))
      return null;
    o.visitItem(this._item);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(cr), Wu = function(n) {
  function t() {
    n.call(this), this._node1 = null, this._node2 = null;
    var e = arguments[0], r = arguments[1];
    this._node1 = e, this._node2 = r, this.buildExtent(this._node1, this._node2);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.buildExtent = function(r, i) {
    this._min = Math.min(r._min, i._min), this._max = Math.max(r._max, i._max);
  }, t.prototype.query = function(r, i, o) {
    if (!this.intersects(r, i))
      return null;
    this._node1 !== null && this._node1.query(r, i, o), this._node2 !== null && this._node2.query(r, i, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(cr), fr = function() {
  this._leaves = new S(), this._root = null, this._level = 0;
};
fr.prototype.buildTree = function() {
  var t = this;
  we.sort(this._leaves, new cr.NodeComparator());
  for (var e = this._leaves, r = null, i = new S(); ; ) {
    if (t.buildLevel(e, i), i.size() === 1)
      return i.get(0);
    r = e, e = i, i = r;
  }
};
fr.prototype.insert = function(t, e, r) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new Hu(t, e, r));
};
fr.prototype.query = function(t, e, r) {
  this.init(), this._root.query(t, e, r);
};
fr.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
fr.prototype.printNode = function(t) {
  Rt.out.println(xe.toLineString(new d(t._min, this._level), new d(t._max, this._level)));
};
fr.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
fr.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var r = 0; r < t.size(); r += 2) {
    var i = t.get(r), o = r + 1 < t.size() ? t.get(r) : null;
    if (o === null)
      e.add(i);
    else {
      var s = new Wu(t.get(r), t.get(r + 1));
      e.add(s);
    }
  }
};
fr.prototype.interfaces_ = function() {
  return [];
};
fr.prototype.getClass = function() {
  return fr;
};
var Xn = function() {
  this._items = new S();
};
Xn.prototype.visitItem = function(t) {
  this._items.add(t);
};
Xn.prototype.getItems = function() {
  return this._items;
};
Xn.prototype.interfaces_ = function() {
  return [Ar];
};
Xn.prototype.getClass = function() {
  return Xn;
};
var Yn = function() {
  this._index = null;
  var t = arguments[0];
  if (!M(t, Mr))
    throw new it("Argument must be Polygonal");
  this._index = new nn(t);
}, es = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
Yn.prototype.locate = function(t) {
  var e = new Ge(t), r = new Hn(e);
  return this._index.query(t.y, t.y, r), e.getLocation();
};
Yn.prototype.interfaces_ = function() {
  return [Un];
};
Yn.prototype.getClass = function() {
  return Yn;
};
es.SegmentVisitor.get = function() {
  return Hn;
};
es.IntervalIndexedGeometry.get = function() {
  return nn;
};
Object.defineProperties(Yn, es);
var Hn = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
Hn.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
Hn.prototype.interfaces_ = function() {
  return [Ar];
};
Hn.prototype.getClass = function() {
  return Hn;
};
var nn = function() {
  this._index = new fr();
  var t = arguments[0];
  this.init(t);
};
nn.prototype.init = function(t) {
  for (var e = this, r = wt.getLines(t), i = r.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getCoordinates();
    e.addLine(s);
  }
};
nn.prototype.addLine = function(t) {
  for (var e = this, r = 1; r < t.length; r++) {
    var i = new O(t[r - 1], t[r]), o = Math.min(i.p0.y, i.p1.y), s = Math.max(i.p0.y, i.p1.y);
    e._index.insert(o, s, i);
  }
};
nn.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new Xn();
    return this._index.query(t, e, r), r.getItems();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    this._index.query(i, o, s);
  }
};
nn.prototype.interfaces_ = function() {
  return [];
};
nn.prototype.getClass = function() {
  return nn;
};
var oi = function(n) {
  function t() {
    if (n.call(this), this._parentGeom = null, this._lineEdgeMap = new oa(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new be(), arguments.length === 2) {
      var e = arguments[0], r = arguments[1], i = ye.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = r, this._boundaryNodeRule = i, r !== null && this.add(r);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2];
      this._argIndex = o, this._parentGeom = s, this._boundaryNodeRule = a, s !== null && this.add(s);
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(r, i) {
    var o = this._nodes.addNode(i), s = o.getLabel(), a = 1, u = v.NONE;
    u = s.getLocation(r, N.ON), u === v.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    s.setLocation(r, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      return this.computeSelfNodes(r, i, !1);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Tt(o, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof ir || this._parentGeom instanceof Nt || this._parentGeom instanceof er, f = s || !c;
      return l.computeIntersections(this._edges, u, f), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(r) {
    for (var i = this._edges.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.eiList.addSplitEdges(r);
    }
  }, t.prototype.computeEdgeIntersections = function(r, i, o) {
    var s = new Tt(i, o, !0);
    s.setBoundaryNodes(this.getBoundaryNodes(), r.getBoundaryNodes());
    var a = this.createEdgeSetIntersector();
    return a.computeIntersections(this._edges, r._edges, s), s;
  }, t.prototype.getGeometry = function() {
    return this._parentGeom;
  }, t.prototype.getBoundaryNodeRule = function() {
    return this._boundaryNodeRule;
  }, t.prototype.hasTooFewPoints = function() {
    return this._hasTooFewPoints;
  }, t.prototype.addPoint = function() {
    if (arguments[0] instanceof te) {
      var r = arguments[0], i = r.getCoordinate();
      this.insertPoint(this._argIndex, i, v.INTERIOR);
    } else if (arguments[0] instanceof d) {
      var o = arguments[0];
      this.insertPoint(this._argIndex, o, v.INTERIOR);
    }
  }, t.prototype.addPolygon = function(r) {
    var i = this;
    this.addPolygonRing(r.getExteriorRing(), v.EXTERIOR, v.INTERIOR);
    for (var o = 0; o < r.getNumInteriorRing(); o++) {
      var s = r.getInteriorRingN(o);
      i.addPolygonRing(s, v.INTERIOR, v.EXTERIOR);
    }
  }, t.prototype.addEdge = function(r) {
    this.insertEdge(r);
    var i = r.getCoordinates();
    this.insertPoint(this._argIndex, i[0], v.BOUNDARY), this.insertPoint(this._argIndex, i[i.length - 1], v.BOUNDARY);
  }, t.prototype.addLineString = function(r) {
    var i = z.removeRepeatedPoints(r.getCoordinates());
    if (i.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = i[0], null;
    var o = new ji(i, new Q(this._argIndex, v.INTERIOR));
    this._lineEdgeMap.put(r, o), this.insertEdge(o), V.isTrue(i.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, i[0]), this.insertBoundaryPoint(this._argIndex, i[i.length - 1]);
  }, t.prototype.getInvalidPoint = function() {
    return this._invalidPoint;
  }, t.prototype.getBoundaryPoints = function() {
    for (var r = this.getBoundaryNodes(), i = new Array(r.size()).fill(null), o = 0, s = r.iterator(); s.hasNext(); ) {
      var a = s.next();
      i[o++] = a.getCoordinate().copy();
    }
    return i;
  }, t.prototype.getBoundaryNodes = function() {
    return this._boundaryNodes === null && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
  }, t.prototype.addSelfIntersectionNode = function(r, i, o) {
    if (this.isBoundaryNode(r, i))
      return null;
    o === v.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(r, i) : this.insertPoint(r, i, o);
  }, t.prototype.addPolygonRing = function(r, i, o) {
    if (r.isEmpty())
      return null;
    var s = z.removeRepeatedPoints(r.getCoordinates());
    if (s.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = s[0], null;
    var a = i, u = o;
    L.isCCW(s) && (a = o, u = i);
    var l = new ji(s, new Q(this._argIndex, v.BOUNDARY, a, u));
    this._lineEdgeMap.put(r, l), this.insertEdge(l), this.insertPoint(this._argIndex, s[0], v.BOUNDARY);
  }, t.prototype.insertPoint = function(r, i, o) {
    var s = this._nodes.addNode(i), a = s.getLabel();
    a === null ? s._label = new Q(r, o) : a.setLocation(r, o);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new Yu();
  }, t.prototype.addSelfIntersectionNodes = function(r) {
    for (var i = this, o = this._edges.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getLabel().getLocation(r), u = s.eiList.iterator(); u.hasNext(); ) {
        var l = u.next();
        i.addSelfIntersectionNode(r, l.coord, a);
      }
  }, t.prototype.add = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      if (r.isEmpty())
        return null;
      if (r instanceof er && (this._useBoundaryDeterminationRule = !1), r instanceof Nt)
        this.addPolygon(r);
      else if (r instanceof ut)
        this.addLineString(r);
      else if (r instanceof te)
        this.addPoint(r);
      else if (r instanceof Gn)
        this.addCollection(r);
      else if (r instanceof Qr)
        this.addCollection(r);
      else if (r instanceof er)
        this.addCollection(r);
      else if (r instanceof Xt)
        this.addCollection(r);
      else
        throw new Error(r.getClass().getName());
    } else
      return n.prototype.add.apply(this, arguments);
  }, t.prototype.addCollection = function(r) {
    for (var i = this, o = 0; o < r.getNumGeometries(); o++) {
      var s = r.getGeometryN(o);
      i.add(s);
    }
  }, t.prototype.locate = function(r) {
    return M(this._parentGeom, Mr) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new Yn(this._parentGeom)), this._areaPtLocator.locate(r)) : this._ptLocator.locate(r, this._parentGeom);
  }, t.prototype.findEdge = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      return this._lineEdgeMap.get(r);
    } else
      return n.prototype.findEdge.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.determineBoundary = function(r, i) {
    return r.isInBoundary(i) ? v.BOUNDARY : v.INTERIOR;
  }, t;
}(st), Wn = function() {
  if (this._li = new sn(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new oi(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = ye.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(r.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(r.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new oi(0, e, i), this._arg[1] = new oi(1, r, i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    o.getPrecisionModel().compareTo(s.getPrecisionModel()) >= 0 ? this.setComputationPrecision(o.getPrecisionModel()) : this.setComputationPrecision(s.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new oi(0, o, a), this._arg[1] = new oi(1, s, a);
  }
};
Wn.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
Wn.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
Wn.prototype.interfaces_ = function() {
  return [];
};
Wn.prototype.getClass = function() {
  return Wn;
};
var jr = function() {
};
jr.prototype.interfaces_ = function() {
  return [];
};
jr.prototype.getClass = function() {
  return jr;
};
jr.map = function() {
  if (arguments[0] instanceof T && M(arguments[1], jr.MapOp)) {
    for (var t = arguments[0], e = arguments[1], r = new S(), i = 0; i < t.getNumGeometries(); i++) {
      var o = e.map(t.getGeometryN(i));
      o !== null && r.add(o);
    }
    return t.getFactory().buildGeometry(r);
  } else if (M(arguments[0], _t) && M(arguments[1], jr.MapOp)) {
    for (var s = arguments[0], a = arguments[1], u = new S(), l = s.iterator(); l.hasNext(); ) {
      var c = l.next(), f = a.map(c);
      f !== null && u.add(f);
    }
    return u;
  }
};
jr.MapOp = function() {
};
var B = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r), this._ptLocator = new be(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new Pe(), this._resultPolyList = new S(), this._resultLineList = new S(), this._resultPointList = new S(), this._graph = new st(new pa()), this._geomFact = e.getFactory();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(r) {
    var i = this._edgeList.findEqualEdge(r);
    if (i !== null) {
      var o = i.getLabel(), s = r.getLabel();
      i.isPointwiseEqual(r) || (s = new Q(r.getLabel()), s.flip());
      var a = i.getDepth();
      a.isNull() && a.add(o), a.add(s), o.merge(s);
    } else
      this._edgeList.add(r);
  }, t.prototype.getGraph = function() {
    return this._graph;
  }, t.prototype.cancelDuplicateResultEdges = function() {
    for (var r = this._graph.getEdgeEnds().iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getSym();
      i.isInResult() && o.isInResult() && (i.setInResult(!1), o.setInResult(!1));
    }
  }, t.prototype.isCoveredByLA = function(r) {
    return !!(this.isCovered(r, this._resultLineList) || this.isCovered(r, this._resultPolyList));
  }, t.prototype.computeGeometry = function(r, i, o, s) {
    var a = new S();
    return a.addAll(r), a.addAll(i), a.addAll(o), a.isEmpty() ? t.createEmptyResult(s, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var i = r.next();
      i.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(r, i) {
    for (var o = this, s = i.iterator(); s.hasNext(); ) {
      var a = s.next(), u = o._ptLocator.locate(r, a);
      if (u !== v.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var r = new S(), i = this._edgeList.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.isCollapsed() && (i.remove(), r.add(o.getCollapsedEdge()));
    }
    this._edgeList.addAll(r);
  }, t.prototype.updateNodeLabelling = function() {
    for (var r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getEdges().getLabel();
      i.getLabel().merge(o);
    }
  }, t.prototype.getResultGeometry = function(r) {
    return this.computeOverlay(r), this._resultGeom;
  }, t.prototype.insertUniqueEdges = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); ) {
      var s = o.next();
      i.insertUniqueEdge(s);
    }
  }, t.prototype.computeOverlay = function(r) {
    this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
    var i = new S();
    this._arg[0].computeSplitEdges(i), this._arg[1].computeSplitEdges(i), this.insertUniqueEdges(i), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), rn.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(r), this.cancelDuplicateResultEdges();
    var o = new ee(this._geomFact);
    o.add(this._graph), this._resultPolyList = o.getPolygons();
    var s = new Ke(this, this._geomFact, this._ptLocator);
    this._resultLineList = s.build(r);
    var a = new _n(this, this._geomFact, this._ptLocator);
    this._resultPointList = a.build(r), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, r);
  }, t.prototype.labelIncompleteNode = function(r, i) {
    var o = this._ptLocator.locate(r.getCoordinate(), this._arg[i].getGeometry());
    r.getLabel().setLocation(i, o);
  }, t.prototype.copyPoints = function(r) {
    for (var i = this, o = this._arg[r].getNodeIterator(); o.hasNext(); ) {
      var s = o.next(), a = i._graph.addNode(s.getCoordinate());
      a.setLabel(r, s.getLabel().getLocation(r));
    }
  }, t.prototype.findResultAreaEdges = function(r) {
    for (var i = this._graph.getEdgeEnds().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.isArea() && !o.isInteriorAreaEdge() && t.isResultOfOp(s.getLocation(0, N.RIGHT), s.getLocation(1, N.RIGHT), r) && o.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var r = this._edgeList.iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getLabel(), s = i.getDepth();
      if (!s.isNull()) {
        s.normalize();
        for (var a = 0; a < 2; a++)
          !o.isNull(a) && o.isArea() && !s.isNull(a) && (s.getDelta(a) === 0 ? o.toLine(a) : (V.isTrue(!s.isNull(a, N.LEFT), "depth of LEFT side has not been initialized"), o.setLocation(a, N.LEFT, s.getLocation(a, N.LEFT)), V.isTrue(!s.isNull(a, N.RIGHT), "depth of RIGHT side has not been initialized"), o.setLocation(a, N.RIGHT, s.getLocation(a, N.RIGHT))));
      }
    }
  }, t.prototype.computeLabelling = function() {
    for (var r = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next();
      o.getEdges().computeLabelling(r._arg);
    }
    this.mergeSymLabels(), this.updateNodeLabelling();
  }, t.prototype.labelIncompleteNodes = function() {
    for (var r = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      o.isIsolated() && (s.isNull(0) ? r.labelIncompleteNode(o, 0) : r.labelIncompleteNode(o, 1)), o.getEdges().updateLabelling(s);
    }
  }, t.prototype.isCoveredByA = function(r) {
    return !!this.isCovered(r, this._resultPolyList);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Wn);
B.overlayOp = function(n, t, e) {
  var r = new B(n, t), i = r.getResultGeometry(e);
  return i;
};
B.intersection = function(n, t) {
  if (n.isEmpty() || t.isEmpty())
    return B.createEmptyResult(B.INTERSECTION, n, t, n.getFactory());
  if (n.isGeometryCollection()) {
    var e = t;
    return mn.map(n, {
      interfaces_: function() {
        return [jr.MapOp];
      },
      map: function(r) {
        return r.intersection(e);
      }
    });
  }
  return n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), Wt.overlayOp(n, t, B.INTERSECTION);
};
B.symDifference = function(n, t) {
  if (n.isEmpty() || t.isEmpty()) {
    if (n.isEmpty() && t.isEmpty())
      return B.createEmptyResult(B.SYMDIFFERENCE, n, t, n.getFactory());
    if (n.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return n.copy();
  }
  return n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), Wt.overlayOp(n, t, B.SYMDIFFERENCE);
};
B.resultDimension = function(n, t, e) {
  var r = t.getDimension(), i = e.getDimension(), o = -1;
  switch (n) {
    case B.INTERSECTION:
      o = Math.min(r, i);
      break;
    case B.UNION:
      o = Math.max(r, i);
      break;
    case B.DIFFERENCE:
      o = r;
      break;
    case B.SYMDIFFERENCE:
      o = Math.max(r, i);
      break;
  }
  return o;
};
B.createEmptyResult = function(n, t, e, r) {
  var i = null;
  switch (B.resultDimension(n, t, e)) {
    case -1:
      i = r.createGeometryCollection(new Array(0).fill(null));
      break;
    case 0:
      i = r.createPoint();
      break;
    case 1:
      i = r.createLineString();
      break;
    case 2:
      i = r.createPolygon();
      break;
  }
  return i;
};
B.difference = function(n, t) {
  return n.isEmpty() ? B.createEmptyResult(B.DIFFERENCE, n, t, n.getFactory()) : t.isEmpty() ? n.copy() : (n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), Wt.overlayOp(n, t, B.DIFFERENCE));
};
B.isResultOfOp = function() {
  if (arguments.length === 2) {
    var n = arguments[0], t = arguments[1], e = n.getLocation(0), r = n.getLocation(1);
    return B.isResultOfOp(e, r, t);
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    switch (i === v.BOUNDARY && (i = v.INTERIOR), o === v.BOUNDARY && (o = v.INTERIOR), s) {
      case B.INTERSECTION:
        return i === v.INTERIOR && o === v.INTERIOR;
      case B.UNION:
        return i === v.INTERIOR || o === v.INTERIOR;
      case B.DIFFERENCE:
        return i === v.INTERIOR && o !== v.INTERIOR;
      case B.SYMDIFFERENCE:
        return i === v.INTERIOR && o !== v.INTERIOR || i !== v.INTERIOR && o === v.INTERIOR;
    }
    return !1;
  }
};
B.INTERSECTION = 1;
B.UNION = 2;
B.DIFFERENCE = 3;
B.SYMDIFFERENCE = 4;
var Tr = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new be(), this._seg = new O();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
Tr.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, r = 0; r < this._linework.getNumGeometries(); r++)
    for (var i = e._linework.getGeometryN(r), o = i.getCoordinateSequence(), s = 0; s < o.size() - 1; s++) {
      o.getCoordinate(s, e._seg.p0), o.getCoordinate(s + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
Tr.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? v.BOUNDARY : this._ptLocator.locate(t, this._g);
};
Tr.prototype.extractLinework = function(t) {
  var e = new jn();
  t.apply(e);
  var r = e.getLinework(), i = k.toLineStringArray(r);
  return t.getFactory().createMultiLineString(i);
};
Tr.prototype.interfaces_ = function() {
  return [];
};
Tr.prototype.getClass = function() {
  return Tr;
};
var jn = function() {
  this._linework = null, this._linework = new S();
};
jn.prototype.getLinework = function() {
  return this._linework;
};
jn.prototype.filter = function(t) {
  var e = this;
  if (t instanceof Nt) {
    var r = t;
    this._linework.add(r.getExteriorRing());
    for (var i = 0; i < r.getNumInteriorRing(); i++)
      e._linework.add(r.getInteriorRingN(i));
  }
};
jn.prototype.interfaces_ = function() {
  return [Ue];
};
jn.prototype.getClass = function() {
  return jn;
};
var on = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
on.prototype.extractPoints = function(t, e, r) {
  for (var i = this, o = t.getCoordinates(), s = 0; s < o.length - 1; s++)
    i.computeOffsetPoints(o[s], o[s + 1], e, r);
};
on.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
on.prototype.getPoints = function(t) {
  for (var e = this, r = new S(), i = wt.getLines(this._g), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    e.extractPoints(s, t, r);
  }
  return r;
};
on.prototype.computeOffsetPoints = function(t, e, r, i) {
  var o = e.x - t.x, s = e.y - t.y, a = Math.sqrt(o * o + s * s), u = r * o / a, l = r * s / a, c = (e.x + t.x) / 2, f = (e.y + t.y) / 2;
  if (this._doLeft) {
    var h = new d(c - l, f + u);
    i.add(h);
  }
  if (this._doRight) {
    var p = new d(c + l, f - u);
    i.add(p);
  }
};
on.prototype.interfaces_ = function() {
  return [];
};
on.prototype.getClass = function() {
  return on;
};
var he = function n() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = n.TOLERANCE, this._testCoords = new S();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._boundaryDistanceTolerance = n.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, r], this._locFinder = [new Tr(this._geom[0], this._boundaryDistanceTolerance), new Tr(this._geom[1], this._boundaryDistanceTolerance), new Tr(this._geom[2], this._boundaryDistanceTolerance)];
}, Na = { TOLERANCE: { configurable: !0 } };
he.prototype.reportResult = function(t, e, r) {
  Rt.out.println("Overlay result invalid - A:" + v.toLocationSymbol(e[0]) + " B:" + v.toLocationSymbol(e[1]) + " expected:" + (r ? "i" : "e") + " actual:" + v.toLocationSymbol(e[2]));
};
he.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
he.prototype.checkValid = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0; r < this._testCoords.size(); r++) {
      var i = t._testCoords.get(r);
      if (!t.checkValid(e, i))
        return t._invalidLocation = i, !1;
    }
    return !0;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._location[0] = this._locFinder[0].getLocation(s), this._location[1] = this._locFinder[1].getLocation(s), this._location[2] = this._locFinder[2].getLocation(s), he.hasLocation(this._location, v.BOUNDARY) ? !0 : this.isValidResult(o, this._location);
  }
};
he.prototype.addTestPts = function(t) {
  var e = new on(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
he.prototype.isValidResult = function(t, e) {
  var r = B.isResultOfOp(e[0], e[1], t), i = e[2] === v.INTERIOR, o = !(r ^ i);
  return o || this.reportResult(t, e, r), o;
};
he.prototype.getInvalidLocation = function() {
  return this._invalidLocation;
};
he.prototype.interfaces_ = function() {
  return [];
};
he.prototype.getClass = function() {
  return he;
};
he.hasLocation = function(t, e) {
  for (var r = 0; r < 3; r++)
    if (t[r] === e)
      return !0;
  return !1;
};
he.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(pt.computeSizeBasedSnapTolerance(t), pt.computeSizeBasedSnapTolerance(e));
};
he.isValid = function(t, e, r, i) {
  var o = new he(t, e, i);
  return o.isValid(r);
};
Na.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(he, Na);
var oe = function n(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = n.extractFactory(t), this._inputGeoms = t;
};
oe.prototype.extractElements = function(t, e) {
  var r = this;
  if (t === null)
    return null;
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    r._skipEmpty && o.isEmpty() || e.add(o);
  }
};
oe.prototype.combine = function() {
  for (var t = this, e = new S(), r = this._inputGeoms.iterator(); r.hasNext(); ) {
    var i = r.next();
    t.extractElements(i, e);
  }
  return e.size() === 0 ? this._geomFactory !== null ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(e);
};
oe.prototype.interfaces_ = function() {
  return [];
};
oe.prototype.getClass = function() {
  return oe;
};
oe.combine = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new oe(t);
    return e.combine();
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = new oe(oe.createList(r, i));
    return o.combine();
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = new oe(oe.createList(s, a, u));
    return l.combine();
  }
};
oe.extractFactory = function(t) {
  return t.isEmpty() ? null : t.iterator().next().getFactory();
};
oe.createList = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new S();
    return r.add(t), r.add(e), r;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new S();
    return a.add(i), a.add(o), a.add(s), a;
  }
};
var yt = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new S());
}, xa = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
yt.prototype.reduceToGeometries = function(t) {
  for (var e = this, r = new S(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = null;
    M(o, Ne) ? s = e.unionTree(o) : o instanceof T && (s = o), r.add(s);
  }
  return r;
};
yt.prototype.extractByEnvelope = function(t, e, r) {
  for (var i = new S(), o = 0; o < e.getNumGeometries(); o++) {
    var s = e.getGeometryN(o);
    s.getEnvelopeInternal().intersects(t) ? i.add(s) : r.add(s);
  }
  return this._geomFactory.buildGeometry(i);
};
yt.prototype.unionOptimized = function(t, e) {
  var r = t.getEnvelopeInternal(), i = e.getEnvelopeInternal();
  if (!r.intersects(i)) {
    var o = oe.combine(t, e);
    return o;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var s = r.intersection(i);
  return this.unionUsingEnvelopeIntersection(t, e, s);
};
yt.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new la(yt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var r = e.next();
    t.insert(r.getEnvelopeInternal(), r);
  }
  this._inputPolys = null;
  var i = t.itemsTree(), o = this.unionTree(i);
  return o;
};
yt.prototype.binaryUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.binaryUnion(t, 0, t.size());
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2];
    if (i - r <= 1) {
      var o = yt.getGeometry(e, r);
      return this.unionSafe(o, null);
    } else {
      if (i - r === 2)
        return this.unionSafe(yt.getGeometry(e, r), yt.getGeometry(e, r + 1));
      var s = Math.trunc((i + r) / 2), a = this.binaryUnion(e, r, s), u = this.binaryUnion(e, s, i);
      return this.unionSafe(a, u);
    }
  }
};
yt.prototype.repeatedUnion = function(t) {
  for (var e = null, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e === null ? e = i.copy() : e = e.union(i);
  }
  return e;
};
yt.prototype.unionSafe = function(t, e) {
  return t === null && e === null ? null : t === null ? e.copy() : e === null ? t.copy() : this.unionOptimized(t, e);
};
yt.prototype.unionActual = function(t, e) {
  return yt.restrictToPolygons(t.union(e));
};
yt.prototype.unionTree = function(t) {
  var e = this.reduceToGeometries(t), r = this.binaryUnion(e);
  return r;
};
yt.prototype.unionUsingEnvelopeIntersection = function(t, e, r) {
  var i = new S(), o = this.extractByEnvelope(r, t, i), s = this.extractByEnvelope(r, e, i), a = this.unionActual(o, s);
  i.add(a);
  var u = oe.combine(i);
  return u;
};
yt.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), r = e.buildGeometry(t), i = r.buffer(0);
    return i;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1], a = o.getFactory(), u = a.createGeometryCollection([o, s]), l = u.buffer(0);
    return l;
  }
};
yt.prototype.interfaces_ = function() {
  return [];
};
yt.prototype.getClass = function() {
  return yt;
};
yt.restrictToPolygons = function(t) {
  if (M(t, Mr))
    return t;
  var e = Er.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(k.toPolygonArray(e));
};
yt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
yt.union = function(t) {
  var e = new yt(t);
  return e.union();
};
xa.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(yt, xa);
var Qi = function() {
};
Qi.prototype.interfaces_ = function() {
  return [];
};
Qi.prototype.getClass = function() {
  return Qi;
};
Qi.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return B.createEmptyResult(B.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), Wt.overlayOp(t, e, B.UNION);
};
function an() {
  return new Ji();
}
function Ji() {
  this.reset();
}
Ji.prototype = {
  constructor: Ji,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(n) {
    Cs(Fi, n, this.t), Cs(this, Fi.s, this.s), this.s ? this.t += Fi.t : this.s = Fi.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Fi = new Ji();
function Cs(n, t, e) {
  var r = n.s = t + e, i = r - t, o = r - i;
  n.t = t - o + (e - i);
}
var at = 1e-6, Z = Math.PI, _r = Z / 2, Ns = Z / 4, Lr = Z * 2, Xr = 180 / Z, Ae = Z / 180, Ut = Math.abs, ju = Math.atan, Kn = Math.atan2, Et = Math.cos, It = Math.sin, Ti = Math.sqrt;
function Sa(n) {
  return n > 1 ? 0 : n < -1 ? Z : Math.acos(n);
}
function Qn(n) {
  return n > 1 ? _r : n < -1 ? -_r : Math.asin(n);
}
function si() {
}
function Zi(n, t) {
  n && Ss.hasOwnProperty(n.type) && Ss[n.type](n, t);
}
var xs = {
  Feature: function(n, t) {
    Zi(n.geometry, t);
  },
  FeatureCollection: function(n, t) {
    for (var e = n.features, r = -1, i = e.length; ++r < i; )
      Zi(e[r].geometry, t);
  }
}, Ss = {
  Sphere: function(n, t) {
    t.sphere();
  },
  Point: function(n, t) {
    n = n.coordinates, t.point(n[0], n[1], n[2]);
  },
  MultiPoint: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      n = e[r], t.point(n[0], n[1], n[2]);
  },
  LineString: function(n, t) {
    To(n.coordinates, t, 0);
  },
  MultiLineString: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      To(e[r], t, 0);
  },
  Polygon: function(n, t) {
    Ls(n.coordinates, t);
  },
  MultiPolygon: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      Ls(e[r], t);
  },
  GeometryCollection: function(n, t) {
    for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
      Zi(e[r], t);
  }
};
function To(n, t, e) {
  var r = -1, i = n.length - e, o;
  for (t.lineStart(); ++r < i; )
    o = n[r], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function Ls(n, t) {
  var e = -1, r = n.length;
  for (t.polygonStart(); ++e < r; )
    To(n[e], t, 1);
  t.polygonEnd();
}
function Ku(n, t) {
  n && xs.hasOwnProperty(n.type) ? xs[n.type](n, t) : Zi(n, t);
}
an();
an();
function Mo(n) {
  return [Kn(n[1], n[0]), Qn(n[2])];
}
function Jn(n) {
  var t = n[0], e = n[1], r = Et(e);
  return [r * Et(t), r * It(t), It(e)];
}
function Bi(n, t) {
  return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
}
function $i(n, t) {
  return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
}
function Eo(n, t) {
  n[0] += t[0], n[1] += t[1], n[2] += t[2];
}
function Gi(n, t) {
  return [n[0] * t, n[1] * t, n[2] * t];
}
function Ao(n) {
  var t = Ti(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  n[0] /= t, n[1] /= t, n[2] /= t;
}
an();
function La(n, t) {
  function e(r, i) {
    return r = n(r, i), t(r[0], r[1]);
  }
  return n.invert && t.invert && (e.invert = function(r, i) {
    return r = t.invert(r, i), r && n.invert(r[0], r[1]);
  }), e;
}
function Fo(n, t) {
  return [n > Z ? n - Lr : n < -Z ? n + Lr : n, t];
}
Fo.invert = Fo;
function Qu(n, t, e) {
  return (n %= Lr) ? t || e ? La(Ps(n), bs(t, e)) : Ps(n) : t || e ? bs(t, e) : Fo;
}
function ws(n) {
  return function(t, e) {
    return t += n, [t > Z ? t - Lr : t < -Z ? t + Lr : t, e];
  };
}
function Ps(n) {
  var t = ws(n);
  return t.invert = ws(-n), t;
}
function bs(n, t) {
  var e = Et(n), r = It(n), i = Et(t), o = It(t);
  function s(a, u) {
    var l = Et(u), c = Et(a) * l, f = It(a) * l, h = It(u), p = h * e + c * r;
    return [
      Kn(f * i - p * o, c * e - h * r),
      Qn(p * i + f * o)
    ];
  }
  return s.invert = function(a, u) {
    var l = Et(u), c = Et(a) * l, f = It(a) * l, h = It(u), p = h * i - f * o;
    return [
      Kn(f * i + h * o, c * e + p * r),
      Qn(p * e - c * r)
    ];
  }, s;
}
function Ju(n, t, e, r, i, o) {
  if (e) {
    var s = Et(t), a = It(t), u = r * e;
    i == null ? (i = t + r * Lr, o = t - u / 2) : (i = Rs(s, i), o = Rs(s, o), (r > 0 ? i < o : i > o) && (i += r * Lr));
    for (var l, c = i; r > 0 ? c > o : c < o; c -= u)
      l = Mo([s, -a * Et(c), -a * It(c)]), n.point(l[0], l[1]);
  }
}
function Rs(n, t) {
  t = Jn(t), t[0] -= n, Ao(t);
  var e = Sa(-t[1]);
  return ((-t[2] < 0 ? -e : e) + Lr - at) % Lr;
}
function wa() {
  var n = [], t;
  return {
    point: function(e, r) {
      t.push([e, r]);
    },
    lineStart: function() {
      n.push(t = []);
    },
    lineEnd: si,
    rejoin: function() {
      n.length > 1 && n.push(n.pop().concat(n.shift()));
    },
    result: function() {
      var e = n;
      return n = [], t = null, e;
    }
  };
}
function Zu(n, t, e, r, i, o) {
  var s = n[0], a = n[1], u = t[0], l = t[1], c = 0, f = 1, h = u - s, p = l - a, g;
  if (g = e - s, !(!h && g > 0)) {
    if (g /= h, h < 0) {
      if (g < c)
        return;
      g < f && (f = g);
    } else if (h > 0) {
      if (g > f)
        return;
      g > c && (c = g);
    }
    if (g = i - s, !(!h && g < 0)) {
      if (g /= h, h < 0) {
        if (g > f)
          return;
        g > c && (c = g);
      } else if (h > 0) {
        if (g < c)
          return;
        g < f && (f = g);
      }
      if (g = r - a, !(!p && g > 0)) {
        if (g /= p, p < 0) {
          if (g < c)
            return;
          g < f && (f = g);
        } else if (p > 0) {
          if (g > f)
            return;
          g > c && (c = g);
        }
        if (g = o - a, !(!p && g < 0)) {
          if (g /= p, p < 0) {
            if (g > f)
              return;
            g > c && (c = g);
          } else if (p > 0) {
            if (g < c)
              return;
            g < f && (f = g);
          }
          return c > 0 && (n[0] = s + c * h, n[1] = a + c * p), f < 1 && (t[0] = s + f * h, t[1] = a + f * p), !0;
        }
      }
    }
  }
}
function zi(n, t) {
  return Ut(n[0] - t[0]) < at && Ut(n[1] - t[1]) < at;
}
function Vi(n, t, e, r) {
  this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function Pa(n, t, e, r, i) {
  var o = [], s = [], a, u;
  if (n.forEach(function(g) {
    if (!((y = g.length - 1) <= 0)) {
      var y, m = g[0], _ = g[y], I;
      if (zi(m, _)) {
        for (i.lineStart(), a = 0; a < y; ++a)
          i.point((m = g[a])[0], m[1]);
        i.lineEnd();
        return;
      }
      o.push(I = new Vi(m, g, null, !0)), s.push(I.o = new Vi(m, null, I, !1)), o.push(I = new Vi(_, g, null, !1)), s.push(I.o = new Vi(_, null, I, !0));
    }
  }), !!o.length) {
    for (s.sort(t), Os(o), Os(s), a = 0, u = s.length; a < u; ++a)
      s[a].e = e = !e;
    for (var l = o[0], c, f; ; ) {
      for (var h = l, p = !0; h.v; )
        if ((h = h.n) === l)
          return;
      c = h.z, i.lineStart();
      do {
        if (h.v = h.o.v = !0, h.e) {
          if (p)
            for (a = 0, u = c.length; a < u; ++a)
              i.point((f = c[a])[0], f[1]);
          else
            r(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (p)
            for (c = h.p.z, a = c.length - 1; a >= 0; --a)
              i.point((f = c[a])[0], f[1]);
          else
            r(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, c = h.z, p = !p;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function Os(n) {
  if (t = n.length) {
    for (var t, e = 0, r = n[0], i; ++e < t; )
      r.n = i = n[e], i.p = r, r = i;
    r.n = i = n[0], i.p = r;
  }
}
function ba(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function $u(n) {
  return n.length === 1 && (n = tl(n)), {
    left: function(t, e, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var o = r + i >>> 1;
        n(t[o], e) < 0 ? r = o + 1 : i = o;
      }
      return r;
    },
    right: function(t, e, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var o = r + i >>> 1;
        n(t[o], e) > 0 ? i = o : r = o + 1;
      }
      return r;
    }
  };
}
function tl(n) {
  return function(t, e) {
    return ba(n(t), e);
  };
}
$u(ba);
function Ra(n) {
  for (var t = n.length, e, r = -1, i = 0, o, s; ++r < t; )
    i += n[r].length;
  for (o = new Array(i); --t >= 0; )
    for (s = n[t], e = s.length; --e >= 0; )
      o[--i] = s[e];
  return o;
}
var ai = 1e9, ki = -ai;
function el(n, t, e, r) {
  function i(l, c) {
    return n <= l && l <= e && t <= c && c <= r;
  }
  function o(l, c, f, h) {
    var p = 0, g = 0;
    if (l == null || (p = s(l, f)) !== (g = s(c, f)) || u(l, c) < 0 ^ f > 0)
      do
        h.point(p === 0 || p === 3 ? n : e, p > 1 ? r : t);
      while ((p = (p + f + 4) % 4) !== g);
    else
      h.point(c[0], c[1]);
  }
  function s(l, c) {
    return Ut(l[0] - n) < at ? c > 0 ? 0 : 3 : Ut(l[0] - e) < at ? c > 0 ? 2 : 1 : Ut(l[1] - t) < at ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var f = s(l, 1), h = s(c, 1);
    return f !== h ? f - h : f === 0 ? c[1] - l[1] : f === 1 ? l[0] - c[0] : f === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, f = wa(), h, p, g, y, m, _, I, C, x, b, P, D = {
      point: G,
      lineStart: nt,
      lineEnd: ct,
      polygonStart: et,
      polygonEnd: K
    };
    function G(X, ft) {
      i(X, ft) && c.point(X, ft);
    }
    function A() {
      for (var X = 0, ft = 0, Gt = p.length; ft < Gt; ++ft)
        for (var pe = p[ft], Te = 1, ni = pe.length, br = pe[0], un, Rr, Mi = br[0], Ln = br[1]; Te < ni; ++Te)
          un = Mi, Rr = Ln, br = pe[Te], Mi = br[0], Ln = br[1], Rr <= r ? Ln > r && (Mi - un) * (r - Rr) > (Ln - Rr) * (n - un) && ++X : Ln <= r && (Mi - un) * (r - Rr) < (Ln - Rr) * (n - un) && --X;
      return X;
    }
    function et() {
      c = f, h = [], p = [], P = !0;
    }
    function K() {
      var X = A(), ft = P && X, Gt = (h = Ra(h)).length;
      (ft || Gt) && (l.polygonStart(), ft && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), Gt && Pa(h, a, X, o, l), l.polygonEnd()), c = l, h = p = g = null;
    }
    function nt() {
      D.point = w, p && p.push(g = []), b = !0, x = !1, I = C = NaN;
    }
    function ct() {
      h && (w(y, m), _ && x && f.rejoin(), h.push(f.result())), D.point = G, x && c.lineEnd();
    }
    function w(X, ft) {
      var Gt = i(X, ft);
      if (p && g.push([X, ft]), b)
        y = X, m = ft, _ = Gt, b = !1, Gt && (c.lineStart(), c.point(X, ft));
      else if (Gt && x)
        c.point(X, ft);
      else {
        var pe = [I = Math.max(ki, Math.min(ai, I)), C = Math.max(ki, Math.min(ai, C))], Te = [X = Math.max(ki, Math.min(ai, X)), ft = Math.max(ki, Math.min(ai, ft))];
        Zu(pe, Te, n, t, e, r) ? (x || (c.lineStart(), c.point(pe[0], pe[1])), c.point(Te[0], Te[1]), Gt || c.lineEnd(), P = !1) : Gt && (c.lineStart(), c.point(X, ft), P = !1);
      }
      I = X, C = ft, x = Gt;
    }
    return D;
  };
}
var Io = an();
function rl(n, t) {
  var e = t[0], r = t[1], i = [It(e), -Et(e), 0], o = 0, s = 0;
  Io.reset();
  for (var a = 0, u = n.length; a < u; ++a)
    if (c = (l = n[a]).length)
      for (var l, c, f = l[c - 1], h = f[0], p = f[1] / 2 + Ns, g = It(p), y = Et(p), m = 0; m < c; ++m, h = I, g = x, y = b, f = _) {
        var _ = l[m], I = _[0], C = _[1] / 2 + Ns, x = It(C), b = Et(C), P = I - h, D = P >= 0 ? 1 : -1, G = D * P, A = G > Z, et = g * x;
        if (Io.add(Kn(et * D * It(G), y * b + et * Et(G))), o += A ? P + D * Lr : P, A ^ h >= e ^ I >= e) {
          var K = $i(Jn(f), Jn(_));
          Ao(K);
          var nt = $i(i, K);
          Ao(nt);
          var ct = (A ^ P >= 0 ? -1 : 1) * Qn(nt[2]);
          (r > ct || r === ct && (K[0] || K[1])) && (s += A ^ P >= 0 ? 1 : -1);
        }
      }
  return (o < -at || o < at && Io < -at) ^ s & 1;
}
an();
function Ds(n) {
  return n;
}
an();
an();
var Zn = 1 / 0, to = Zn, Si = -Zn, eo = Si, Ts = {
  point: nl,
  lineStart: si,
  lineEnd: si,
  polygonStart: si,
  polygonEnd: si,
  result: function() {
    var n = [[Zn, to], [Si, eo]];
    return Si = eo = -(to = Zn = 1 / 0), n;
  }
};
function nl(n, t) {
  n < Zn && (Zn = n), n > Si && (Si = n), t < to && (to = t), t > eo && (eo = t);
}
an();
function Oa(n, t, e, r) {
  return function(i, o) {
    var s = t(o), a = i.invert(r[0], r[1]), u = wa(), l = t(u), c = !1, f, h, p, g = {
      point: y,
      lineStart: _,
      lineEnd: I,
      polygonStart: function() {
        g.point = C, g.lineStart = x, g.lineEnd = b, h = [], f = [];
      },
      polygonEnd: function() {
        g.point = y, g.lineStart = _, g.lineEnd = I, h = Ra(h);
        var P = rl(f, a);
        h.length ? (c || (o.polygonStart(), c = !0), Pa(h, ol, P, e, o)) : P && (c || (o.polygonStart(), c = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), c && (o.polygonEnd(), c = !1), h = f = null;
      },
      sphere: function() {
        o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd();
      }
    };
    function y(P, D) {
      var G = i(P, D);
      n(P = G[0], D = G[1]) && o.point(P, D);
    }
    function m(P, D) {
      var G = i(P, D);
      s.point(G[0], G[1]);
    }
    function _() {
      g.point = m, s.lineStart();
    }
    function I() {
      g.point = y, s.lineEnd();
    }
    function C(P, D) {
      p.push([P, D]);
      var G = i(P, D);
      l.point(G[0], G[1]);
    }
    function x() {
      l.lineStart(), p = [];
    }
    function b() {
      C(p[0][0], p[0][1]), l.lineEnd();
      var P = l.clean(), D = u.result(), G, A = D.length, et, K, nt;
      if (p.pop(), f.push(p), p = null, !!A) {
        if (P & 1) {
          if (K = D[0], (et = K.length - 1) > 0) {
            for (c || (o.polygonStart(), c = !0), o.lineStart(), G = 0; G < et; ++G)
              o.point((nt = K[G])[0], nt[1]);
            o.lineEnd();
          }
          return;
        }
        A > 1 && P & 2 && D.push(D.pop().concat(D.shift())), h.push(D.filter(il));
      }
    }
    return g;
  };
}
function il(n) {
  return n.length > 1;
}
function ol(n, t) {
  return ((n = n.x)[0] < 0 ? n[1] - _r - at : _r - n[1]) - ((t = t.x)[0] < 0 ? t[1] - _r - at : _r - t[1]);
}
const Ms = Oa(
  function() {
    return !0;
  },
  sl,
  ul,
  [-Z, -_r]
);
function sl(n) {
  var t = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      n.lineStart(), i = 1;
    },
    point: function(o, s) {
      var a = o > 0 ? Z : -Z, u = Ut(o - t);
      Ut(u - Z) < at ? (n.point(t, e = (e + s) / 2 > 0 ? _r : -_r), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(a, e), n.point(o, e), i = 0) : r !== a && u >= Z && (Ut(t - r) < at && (t -= r * at), Ut(o - a) < at && (o -= a * at), e = al(t, e, o, s), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(a, e), i = 0), n.point(t = o, e = s), r = a;
    },
    lineEnd: function() {
      n.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function al(n, t, e, r) {
  var i, o, s = It(n - e);
  return Ut(s) > at ? ju((It(t) * (o = Et(r)) * It(e) - It(r) * (i = Et(t)) * It(n)) / (i * o * s)) : (t + r) / 2;
}
function ul(n, t, e, r) {
  var i;
  if (n == null)
    i = e * _r, r.point(-Z, i), r.point(0, i), r.point(Z, i), r.point(Z, 0), r.point(Z, -i), r.point(0, -i), r.point(-Z, -i), r.point(-Z, 0), r.point(-Z, i);
  else if (Ut(n[0] - t[0]) > at) {
    var o = n[0] < t[0] ? Z : -Z;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(t[0], t[1]);
}
function ll(n, t) {
  var e = Et(n), r = e > 0, i = Ut(e) > at;
  function o(c, f, h, p) {
    Ju(p, n, t, h, c, f);
  }
  function s(c, f) {
    return Et(c) * Et(f) > e;
  }
  function a(c) {
    var f, h, p, g, y;
    return {
      lineStart: function() {
        g = p = !1, y = 1;
      },
      point: function(m, _) {
        var I = [m, _], C, x = s(m, _), b = r ? x ? 0 : l(m, _) : x ? l(m + (m < 0 ? Z : -Z), _) : 0;
        if (!f && (g = p = x) && c.lineStart(), x !== p && (C = u(f, I), (!C || zi(f, C) || zi(I, C)) && (I[0] += at, I[1] += at, x = s(I[0], I[1]))), x !== p)
          y = 0, x ? (c.lineStart(), C = u(I, f), c.point(C[0], C[1])) : (C = u(f, I), c.point(C[0], C[1]), c.lineEnd()), f = C;
        else if (i && f && r ^ x) {
          var P;
          !(b & h) && (P = u(I, f, !0)) && (y = 0, r ? (c.lineStart(), c.point(P[0][0], P[0][1]), c.point(P[1][0], P[1][1]), c.lineEnd()) : (c.point(P[1][0], P[1][1]), c.lineEnd(), c.lineStart(), c.point(P[0][0], P[0][1])));
        }
        x && (!f || !zi(f, I)) && c.point(I[0], I[1]), f = I, p = x, h = b;
      },
      lineEnd: function() {
        p && c.lineEnd(), f = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return y | (g && p) << 1;
      }
    };
  }
  function u(c, f, h) {
    var p = Jn(c), g = Jn(f), y = [1, 0, 0], m = $i(p, g), _ = Bi(m, m), I = m[0], C = _ - I * I;
    if (!C)
      return !h && c;
    var x = e * _ / C, b = -e * I / C, P = $i(y, m), D = Gi(y, x), G = Gi(m, b);
    Eo(D, G);
    var A = P, et = Bi(D, A), K = Bi(A, A), nt = et * et - K * (Bi(D, D) - 1);
    if (!(nt < 0)) {
      var ct = Ti(nt), w = Gi(A, (-et - ct) / K);
      if (Eo(w, D), w = Mo(w), !h)
        return w;
      var X = c[0], ft = f[0], Gt = c[1], pe = f[1], Te;
      ft < X && (Te = X, X = ft, ft = Te);
      var ni = ft - X, br = Ut(ni - Z) < at, un = br || ni < at;
      if (!br && pe < Gt && (Te = Gt, Gt = pe, pe = Te), un ? br ? Gt + pe > 0 ^ w[1] < (Ut(w[0] - X) < at ? Gt : pe) : Gt <= w[1] && w[1] <= pe : ni > Z ^ (X <= w[0] && w[0] <= ft)) {
        var Rr = Gi(A, (-et + ct) / K);
        return Eo(Rr, D), [w, Mo(Rr)];
      }
    }
  }
  function l(c, f) {
    var h = r ? n : Z - n, p = 0;
    return c < -h ? p |= 1 : c > h && (p |= 2), f < -h ? p |= 4 : f > h && (p |= 8), p;
  }
  return Oa(s, a, o, r ? [0, -n] : [-Z, n - Z]);
}
function Da(n) {
  return function(t) {
    var e = new Bo();
    for (var r in n)
      e[r] = n[r];
    return e.stream = t, e;
  };
}
function Bo() {
}
Bo.prototype = {
  constructor: Bo,
  point: function(n, t) {
    this.stream.point(n, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Ta(n, t, e) {
  var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1], o = n.clipExtent && n.clipExtent();
  n.scale(150).translate([0, 0]), o != null && n.clipExtent(null), Ku(e, n.stream(Ts));
  var s = Ts.result(), a = Math.min(r / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])), u = +t[0][0] + (r - a * (s[1][0] + s[0][0])) / 2, l = +t[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
  return o != null && n.clipExtent(o), n.scale(a * 150).translate([u, l]);
}
function cl(n, t, e) {
  return Ta(n, [[0, 0], t], e);
}
var As = 16, fl = Et(30 * Ae);
function Fs(n, t) {
  return +t ? pl(n, t) : hl(n);
}
function hl(n) {
  return Da({
    point: function(t, e) {
      t = n(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function pl(n, t) {
  function e(r, i, o, s, a, u, l, c, f, h, p, g, y, m) {
    var _ = l - r, I = c - i, C = _ * _ + I * I;
    if (C > 4 * t && y--) {
      var x = s + h, b = a + p, P = u + g, D = Ti(x * x + b * b + P * P), G = Qn(P /= D), A = Ut(Ut(P) - 1) < at || Ut(o - f) < at ? (o + f) / 2 : Kn(b, x), et = n(A, G), K = et[0], nt = et[1], ct = K - r, w = nt - i, X = I * ct - _ * w;
      (X * X / C > t || Ut((_ * ct + I * w) / C - 0.5) > 0.3 || s * h + a * p + u * g < fl) && (e(r, i, o, s, a, u, K, nt, A, x /= D, b /= D, P, y, m), m.point(K, nt), e(K, nt, A, x, b, P, l, c, f, h, p, g, y, m));
    }
  }
  return function(r) {
    var i, o, s, a, u, l, c, f, h, p, g, y, m = {
      point: _,
      lineStart: I,
      lineEnd: x,
      polygonStart: function() {
        r.polygonStart(), m.lineStart = b;
      },
      polygonEnd: function() {
        r.polygonEnd(), m.lineStart = I;
      }
    };
    function _(G, A) {
      G = n(G, A), r.point(G[0], G[1]);
    }
    function I() {
      f = NaN, m.point = C, r.lineStart();
    }
    function C(G, A) {
      var et = Jn([G, A]), K = n(G, A);
      e(f, h, c, p, g, y, f = K[0], h = K[1], c = G, p = et[0], g = et[1], y = et[2], As, r), r.point(f, h);
    }
    function x() {
      m.point = _, r.lineEnd();
    }
    function b() {
      I(), m.point = P, m.lineEnd = D;
    }
    function P(G, A) {
      C(i = G, A), o = f, s = h, a = p, u = g, l = y, m.point = C;
    }
    function D() {
      e(f, h, c, p, g, y, o, s, i, a, u, l, As, r), m.lineEnd = x, x();
    }
    return m;
  };
}
var gl = Da({
  point: function(n, t) {
    this.stream.point(n * Ae, t * Ae);
  }
});
function dl(n) {
  return vl(function() {
    return n;
  })();
}
function vl(n) {
  var t, e = 150, r = 480, i = 250, o, s, a = 0, u = 0, l = 0, c = 0, f = 0, h, p, g = null, y = Ms, m = null, _, I, C, x = Ds, b = 0.5, P = Fs(K, b), D, G;
  function A(w) {
    return w = p(w[0] * Ae, w[1] * Ae), [w[0] * e + o, s - w[1] * e];
  }
  function et(w) {
    return w = p.invert((w[0] - o) / e, (s - w[1]) / e), w && [w[0] * Xr, w[1] * Xr];
  }
  function K(w, X) {
    return w = t(w, X), [w[0] * e + o, s - w[1] * e];
  }
  A.stream = function(w) {
    return D && G === w ? D : D = gl(y(h, P(x(G = w))));
  }, A.clipAngle = function(w) {
    return arguments.length ? (y = +w ? ll(g = w * Ae, 6 * Ae) : (g = null, Ms), ct()) : g * Xr;
  }, A.clipExtent = function(w) {
    return arguments.length ? (x = w == null ? (m = _ = I = C = null, Ds) : el(m = +w[0][0], _ = +w[0][1], I = +w[1][0], C = +w[1][1]), ct()) : m == null ? null : [[m, _], [I, C]];
  }, A.scale = function(w) {
    return arguments.length ? (e = +w, nt()) : e;
  }, A.translate = function(w) {
    return arguments.length ? (r = +w[0], i = +w[1], nt()) : [r, i];
  }, A.center = function(w) {
    return arguments.length ? (a = w[0] % 360 * Ae, u = w[1] % 360 * Ae, nt()) : [a * Xr, u * Xr];
  }, A.rotate = function(w) {
    return arguments.length ? (l = w[0] % 360 * Ae, c = w[1] % 360 * Ae, f = w.length > 2 ? w[2] % 360 * Ae : 0, nt()) : [l * Xr, c * Xr, f * Xr];
  }, A.precision = function(w) {
    return arguments.length ? (P = Fs(K, b = w * w), ct()) : Ti(b);
  }, A.fitExtent = function(w, X) {
    return Ta(A, w, X);
  }, A.fitSize = function(w, X) {
    return cl(A, w, X);
  };
  function nt() {
    p = La(h = Qu(l, c, f), t);
    var w = t(a, u);
    return o = r - w[0] * e, s = i + w[1] * e, ct();
  }
  function ct() {
    return D = G = null, A;
  }
  return function() {
    return t = n.apply(this, arguments), A.invert = t.invert && et, nt();
  };
}
function yl(n) {
  return function(t, e) {
    var r = Et(t), i = Et(e), o = n(r * i);
    return [
      o * i * It(t),
      o * It(e)
    ];
  };
}
function ml(n) {
  return function(t, e) {
    var r = Ti(t * t + e * e), i = n(r), o = It(i), s = Et(i);
    return [
      Kn(t * o, r * s),
      Qn(r && e * o / r)
    ];
  };
}
var Ma = yl(function(n) {
  return (n = Sa(n)) && n / It(n);
});
Ma.invert = ml(function(n) {
  return n;
});
function _l() {
  return dl(Ma).scale(79.4188).clipAngle(180 - 1e-3);
}
function Bs(n, t) {
  return [n, t];
}
Bs.invert = Bs;
function El(n, t, e) {
  e = e || {};
  var r = e.units || "kilometers", i = e.steps || 8;
  if (!n)
    throw new Error("geojson is required");
  if (typeof e != "object")
    throw new Error("options must be an object");
  if (typeof i != "number")
    throw new Error("steps must be an number");
  if (t === void 0)
    throw new Error("radius is required");
  if (i <= 0)
    throw new Error("steps must be greater than 0");
  var o = [];
  switch (n.type) {
    case "GeometryCollection":
      return Js(n, function(s) {
        var a = Ui(s, t, r, i);
        a && o.push(a);
      }), Ro(o);
    case "FeatureCollection":
      return ys(n, function(s) {
        var a = Ui(s, t, r, i);
        a && ys(a, function(u) {
          u && o.push(u);
        });
      }), Ro(o);
  }
  return Ui(n, t, r, i);
}
function Ui(n, t, e, r) {
  var i = n.properties || {}, o = n.type === "Feature" ? n.geometry : n;
  if (o.type === "GeometryCollection") {
    var s = [];
    return Js(n, function(y) {
      var m = Ui(y, t, e, r);
      m && s.push(m);
    }), Ro(s);
  }
  var a = Il(o), u = {
    type: o.type,
    coordinates: Fa(o.coordinates, a)
  }, l = new Wo(), c = l.read(u), f = Lu(wu(t, e), "meters"), h = Pt.bufferOp(c, f, r), p = new aa();
  if (h = p.write(h), !Aa(h.coordinates)) {
    var g = {
      type: h.type,
      coordinates: Ba(h.coordinates, a)
    };
    return no(g, i);
  }
}
function Aa(n) {
  return Array.isArray(n[0]) ? Aa(n[0]) : isNaN(n[0]);
}
function Fa(n, t) {
  return typeof n[0] != "object" ? t(n) : n.map(function(e) {
    return Fa(e, t);
  });
}
function Ba(n, t) {
  return typeof n[0] != "object" ? t.invert(n) : n.map(function(e) {
    return Ba(e, t);
  });
}
function Il(n) {
  var t = Ru(n).geometry.coordinates, e = [-t[0], -t[1]];
  return _l().rotate(e).scale(ie);
}
function Gs(n) {
  let t;
  for (const e of n)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function Vs(n, t) {
  const e = bu(
    {
      type: "Polygon",
      coordinates: [
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]
    },
    n
  );
  if (!e)
    return;
  e.properties = { isMask: "y" };
  const r = El(n, 0);
  if (r.geometry.type === "Polygon")
    for (const i of r.geometry.coordinates)
      Gs(i);
  else
    for (const i of r.geometry.coordinates)
      for (const o of i)
        Gs(o);
  t({
    type: "FeatureCollection",
    features: [r, e]
  });
}
let ks = {
  type: "FeatureCollection",
  features: []
};
function Cl(n, t, e = !0, r = !0, i = {}, o = {}, s = {
  fill: {
    paint: {
      "fill-color": "#000",
      "fill-opacity": 0.1
    },
    filter: ["all", ["==", ["geometry-type"], "Polygon"], ["has", "isMask"]]
  },
  line: {
    layout: {
      "line-cap": "square"
    },
    paint: {
      "line-width": ["case", ["==", ["geometry-type"], "Polygon"], 2, 3],
      "line-dasharray": [1, 1],
      "line-color": "#3170fe"
    },
    filter: ["!", ["has", "isMask"]]
  }
}) {
  let a, u, l = [], c, f;
  function h() {
    (s != null && s.fill || s != null && s.line) && n.addSource("full-geom", {
      type: "geojson",
      data: ks
    }), s != null && s.fill && n.addLayer({
      ...s == null ? void 0 : s.fill,
      id: "full-geom-fill",
      type: "fill",
      source: "full-geom"
    }), s != null && s.line && n.addLayer({
      ...s == null ? void 0 : s.line,
      id: "full-geom-line",
      type: "line",
      source: "full-geom"
    });
  }
  n.loaded() ? h() : n.once("load", () => {
    h();
  });
  const p = (_) => {
    a == null || a({
      type: "mapClick",
      coordinates: [_.lngLat.lng, _.lngLat.lat]
    });
  }, g = () => {
    let _;
    const I = n.getZoom() > 9 ? [(_ = n.getCenter().wrap()).lng, _.lat] : void 0;
    u !== I && (u = I, a == null || a({ type: "proximityChange", proximity: I }));
  };
  function y(_ = !1) {
    if (!t)
      throw new Error();
    const I = document.createElement("div");
    return _ && I.classList.add("marker-interactive"), new ru({
      props: { displayIn: "maplibre" },
      target: I
    }), new t.Marker({ element: I, offset: [1, -13] });
  }
  return {
    setEventHandler(_) {
      _ ? (a = _, n.on("moveend", g), g(), n.on("click", p)) : (n.off("moveend", g), a == null || a({ type: "proximityChange", proximity: void 0 }), a = void 0, n.off("click", p));
    },
    flyTo(_, I) {
      n.flyTo({ center: _, zoom: I, ...i });
    },
    fitBounds(_, I) {
      n.fitBounds(
        [
          [_[0], _[1]],
          [_[2], _[3]]
        ],
        { padding: I, ...o }
      );
    },
    indicateReverse(_) {
      n.getCanvasContainer().style.cursor = _ ? "crosshair" : "";
    },
    setReverseMarker(_) {
      !t || !e || (f ? _ ? f.setLngLat(_) : (f.remove(), f = void 0) : _ && (f = (typeof e == "object" ? new t.Marker(e) : y()).setLngLat(_).addTo(n), f.getElement().classList.add("marker-reverse")));
    },
    setMarkers(_, I) {
      if (!e)
        return;
      function C(x) {
        var b;
        (b = n.getSource("full-geom")) == null || b.setData(x);
      }
      for (const x of l)
        x.remove();
      if (l.length = 0, C(ks), !!t) {
        if (I) {
          let x = !1;
          if (I.geometry.type === "GeometryCollection") {
            const b = I.geometry.geometries.filter(
              (P) => P.type === "Polygon" || P.type === "MultiPolygon"
            );
            if (b.length > 0) {
              let P = b.pop();
              for (const D of b)
                P = Pu(P, D);
              Vs({ ...I, geometry: P }, C), x = !0;
            } else {
              const P = I.geometry.geometries.filter(
                (D) => D.type === "LineString" || D.type === "MultiLineString"
              );
              P.length > 0 && (C({
                ...I,
                geometry: { type: "GeometryCollection", geometries: P }
              }), x = !0);
            }
          }
          if (!x) {
            if (I.geometry.type === "Polygon" || I.geometry.type === "MultiPolygon")
              Vs(I, C);
            else if (I.geometry.type === "LineString" || I.geometry.type === "MultiLineString") {
              C(I);
              return;
            }
          }
          e && l.push(
            (typeof e == "object" ? new t.Marker(e) : y()).setLngLat(I.center).addTo(n)
          );
        }
        if (r)
          for (const x of _ ?? []) {
            if (x === I)
              continue;
            const b = (typeof r == "object" ? new t.Marker(r) : y(!0)).setLngLat(x.center).setPopup(
              new t.Popup({
                offset: [1, -27],
                closeButton: !1,
                closeOnMove: !0,
                className: "maptiler-gc-popup"
              }).setText(x.place_name.replace(/,.*/, ""))
            ).addTo(n), P = b.getElement();
            P.addEventListener("click", (D) => {
              D.stopPropagation(), a == null || a({ type: "markerClick", id: x.id });
            }), P.addEventListener("mouseenter", () => {
              a == null || a({ type: "markerMouseEnter", id: x.id }), b.togglePopup();
            }), P.addEventListener("mouseleave", () => {
              a == null || a({ type: "markerMouseLeave", id: x.id }), b.togglePopup();
            }), P.classList.toggle("marker-fuzzy", !!x.matching_text), l.push(b);
          }
      }
    },
    setSelectedMarker(_) {
      c && c.getElement().classList.toggle("marker-selected", !1), c = _ > -1 ? l[_] : void 0, c == null || c.getElement().classList.toggle("marker-selected", !0);
    }
  };
}
export {
  Cl as createMaplibreglMapController
};
