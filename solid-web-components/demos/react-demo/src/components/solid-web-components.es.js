(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html,body{margin:0;padding:0;box-sizing:border-box}div#counter{display:flex;width:100vw;height:100vh;align-items:center;justify-content:center;font-family:Inter;gap:24px}div#counter button{width:60px;height:60px;background-color:#000;color:#fff;border:none;font-size:50px;cursor:pointer;display:flex;align-items:center;justify-content:center}div#counter p{display:flex;align-items:center;justify-content:center;font-size:60px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const X = (e, s) => e === s, B = {
  equals: X
};
let Z = G;
const y = 1, S = 2, U = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var a = null;
let m = null, Y = null, c = null, h = null, g = null, E = 0;
function ee(e, s) {
  const t = c, l = a, n = e.length === 0, r = s === void 0 ? l : s, i = n ? U : {
    owned: null,
    cleanups: null,
    context: r ? r.context : null,
    owner: r
  }, o = n ? e : () => e(() => V(() => x(i)));
  a = i, c = null;
  try {
    return w(o, !0);
  } finally {
    c = t, a = l;
  }
}
function F(e, s) {
  s = s ? Object.assign({}, B, s) : B;
  const t = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: s.equals || void 0
  }, l = (n) => (typeof n == "function" && (n = n(t.value)), q(t, n));
  return [te.bind(t), l];
}
function T(e, s, t) {
  const l = ne(e, s, !1, y);
  N(l);
}
function V(e) {
  if (c === null)
    return e();
  const s = c;
  c = null;
  try {
    return e();
  } finally {
    c = s;
  }
}
function P() {
  return a;
}
function te() {
  if (this.sources && this.state)
    if (this.state === y)
      N(this);
    else {
      const e = h;
      h = null, w(() => $(this), !1), h = e;
    }
  if (c) {
    const e = this.observers ? this.observers.length : 0;
    c.sources ? (c.sources.push(this), c.sourceSlots.push(e)) : (c.sources = [this], c.sourceSlots = [e]), this.observers ? (this.observers.push(c), this.observerSlots.push(c.sources.length - 1)) : (this.observers = [c], this.observerSlots = [c.sources.length - 1]);
  }
  return this.value;
}
function q(e, s, t) {
  let l = e.value;
  return (!e.comparator || !e.comparator(l, s)) && (e.value = s, e.observers && e.observers.length && w(() => {
    for (let n = 0; n < e.observers.length; n += 1) {
      const r = e.observers[n], i = m && m.running;
      i && m.disposed.has(r), (i ? !r.tState : !r.state) && (r.pure ? h.push(r) : g.push(r), r.observers && z(r)), i || (r.state = y);
    }
    if (h.length > 1e6)
      throw h = [], new Error();
  }, !1)), s;
}
function N(e) {
  if (!e.fn)
    return;
  x(e);
  const s = E;
  se(
    e,
    e.value,
    s
  );
}
function se(e, s, t) {
  let l;
  const n = a, r = c;
  c = a = e;
  try {
    l = e.fn(s);
  } catch (i) {
    return e.pure && (e.state = y, e.owned && e.owned.forEach(x), e.owned = null), e.updatedAt = t + 1, I(i);
  } finally {
    c = r, a = n;
  }
  (!e.updatedAt || e.updatedAt <= t) && (e.updatedAt != null && "observers" in e ? q(e, l) : e.value = l, e.updatedAt = t);
}
function ne(e, s, t, l = y, n) {
  const r = {
    fn: e,
    state: l,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: s,
    owner: a,
    context: a ? a.context : null,
    pure: t
  };
  return a === null || a !== U && (a.owned ? a.owned.push(r) : a.owned = [r]), r;
}
function H(e) {
  if (e.state === 0)
    return;
  if (e.state === S)
    return $(e);
  if (e.suspense && V(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const s = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < E); )
    e.state && s.push(e);
  for (let t = s.length - 1; t >= 0; t--)
    if (e = s[t], e.state === y)
      N(e);
    else if (e.state === S) {
      const l = h;
      h = null, w(() => $(e, s[0]), !1), h = l;
    }
}
function w(e, s) {
  if (h)
    return e();
  let t = !1;
  s || (h = []), g ? t = !0 : g = [], E++;
  try {
    const l = e();
    return le(t), l;
  } catch (l) {
    t || (g = null), h = null, I(l);
  }
}
function le(e) {
  if (h && (G(h), h = null), e)
    return;
  const s = g;
  g = null, s.length && w(() => Z(s), !1);
}
function G(e) {
  for (let s = 0; s < e.length; s++)
    H(e[s]);
}
function $(e, s) {
  e.state = 0;
  for (let t = 0; t < e.sources.length; t += 1) {
    const l = e.sources[t];
    if (l.sources) {
      const n = l.state;
      n === y ? l !== s && (!l.updatedAt || l.updatedAt < E) && H(l) : n === S && $(l, s);
    }
  }
}
function z(e) {
  for (let s = 0; s < e.observers.length; s += 1) {
    const t = e.observers[s];
    t.state || (t.state = S, t.pure ? h.push(t) : g.push(t), t.observers && z(t));
  }
}
function x(e) {
  let s;
  if (e.sources)
    for (; e.sources.length; ) {
      const t = e.sources.pop(), l = e.sourceSlots.pop(), n = t.observers;
      if (n && n.length) {
        const r = n.pop(), i = t.observerSlots.pop();
        l < n.length && (r.sourceSlots[i] = l, n[l] = r, t.observerSlots[l] = i);
      }
    }
  if (e.owned) {
    for (s = e.owned.length - 1; s >= 0; s--)
      x(e.owned[s]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (s = e.cleanups.length - 1; s >= 0; s--)
      e.cleanups[s]();
    e.cleanups = null;
  }
  e.state = 0;
}
function re(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function I(e, s = a) {
  throw re(e);
}
function ie(e, s, t) {
  let l = t.length, n = s.length, r = l, i = 0, o = 0, u = s[n - 1].nextSibling, p = null;
  for (; i < n || o < r; ) {
    if (s[i] === t[o]) {
      i++, o++;
      continue;
    }
    for (; s[n - 1] === t[r - 1]; )
      n--, r--;
    if (n === i) {
      const f = r < l ? o ? t[o - 1].nextSibling : t[r - o] : u;
      for (; o < r; )
        e.insertBefore(t[o++], f);
    } else if (r === o)
      for (; i < n; )
        (!p || !p.has(s[i])) && s[i].remove(), i++;
    else if (s[i] === t[r - 1] && t[o] === s[n - 1]) {
      const f = s[--n].nextSibling;
      e.insertBefore(t[o++], s[i++].nextSibling), e.insertBefore(t[--r], f), s[n] = t[r];
    } else {
      if (!p) {
        p = /* @__PURE__ */ new Map();
        let d = o;
        for (; d < r; )
          p.set(t[d], d++);
      }
      const f = p.get(s[i]);
      if (f != null)
        if (o < f && f < r) {
          let d = i, O = 1, R;
          for (; ++d < n && d < r && !((R = p.get(s[d])) == null || R !== f + O); )
            O++;
          if (O > f - o) {
            const W = s[i];
            for (; o < f; )
              e.insertBefore(t[o++], W);
          } else
            e.replaceChild(t[o++], s[i++]);
        } else
          i++;
      else
        s[i++].remove();
    }
  }
}
const K = "_$DX_DELEGATE";
function C(e, s, t) {
  let l;
  const n = () => {
    const i = document.createElement("template");
    return i.innerHTML = e, i.content.firstChild;
  }, r = () => (l || (l = n())).cloneNode(!0);
  return r.cloneNode = r, r;
}
function oe(e, s = window.document) {
  const t = s[K] || (s[K] = /* @__PURE__ */ new Set());
  for (let l = 0, n = e.length; l < n; l++) {
    const r = e[l];
    t.has(r) || (t.add(r), s.addEventListener(r, ue));
  }
}
function k(e, s, t, l) {
  if (t !== void 0 && !l && (l = []), typeof s != "function")
    return A(e, s, l, t);
  T((n) => A(e, s(), n, t), l);
}
function ue(e) {
  const s = `$$${e.type}`;
  let t = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== t && Object.defineProperty(e, "target", {
    configurable: !0,
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }); t; ) {
    const l = t[s];
    if (l && !t.disabled) {
      const n = t[`${s}Data`];
      if (n !== void 0 ? l.call(t, n, e) : l.call(t, e), e.cancelBubble)
        return;
    }
    t = t._$host || t.parentNode || t.host;
  }
}
function A(e, s, t, l, n) {
  for (; typeof t == "function"; )
    t = t();
  if (s === t)
    return t;
  const r = typeof s, i = l !== void 0;
  if (e = i && t[0] && t[0].parentNode || e, r === "string" || r === "number")
    if (r === "number" && (s = s.toString()), i) {
      let o = t[0];
      o && o.nodeType === 3 ? o.data !== s && (o.data = s) : o = document.createTextNode(s), t = b(e, t, l, o);
    } else
      t !== "" && typeof t == "string" ? t = e.firstChild.data = s : t = e.textContent = s;
  else if (s == null || r === "boolean")
    t = b(e, t, l);
  else {
    if (r === "function")
      return T(() => {
        let o = s();
        for (; typeof o == "function"; )
          o = o();
        t = A(e, o, t, l);
      }), () => t;
    if (Array.isArray(s)) {
      const o = [], u = t && Array.isArray(t);
      if (j(o, s, t, n))
        return T(() => t = A(e, o, t, l, !0)), () => t;
      if (o.length === 0) {
        if (t = b(e, t, l), i)
          return t;
      } else
        u ? t.length === 0 ? L(e, o, l) : ie(e, t, o) : (t && b(e), L(e, o));
      t = o;
    } else if (s.nodeType) {
      if (Array.isArray(t)) {
        if (i)
          return t = b(e, t, l, s);
        b(e, t, null, s);
      } else
        t == null || t === "" || !e.firstChild ? e.appendChild(s) : e.replaceChild(s, e.firstChild);
      t = s;
    }
  }
  return t;
}
function j(e, s, t, l) {
  let n = !1;
  for (let r = 0, i = s.length; r < i; r++) {
    let o = s[r], u = t && t[e.length], p;
    if (!(o == null || o === !0 || o === !1))
      if ((p = typeof o) == "object" && o.nodeType)
        e.push(o);
      else if (Array.isArray(o))
        n = j(e, o, u) || n;
      else if (p === "function")
        if (l) {
          for (; typeof o == "function"; )
            o = o();
          n = j(
            e,
            Array.isArray(o) ? o : [o],
            Array.isArray(u) ? u : [u]
          ) || n;
        } else
          e.push(o), n = !0;
      else {
        const f = String(o);
        u && u.nodeType === 3 && u.data === f ? e.push(u) : e.push(document.createTextNode(f));
      }
  }
  return n;
}
function L(e, s, t = null) {
  for (let l = 0, n = s.length; l < n; l++)
    e.insertBefore(s[l], t);
}
function b(e, s, t, l) {
  if (t === void 0)
    return e.textContent = "";
  const n = l || document.createTextNode("");
  if (s.length) {
    let r = !1;
    for (let i = s.length - 1; i >= 0; i--) {
      const o = s[i];
      if (n !== o) {
        const u = o.parentNode === e;
        !r && !i ? u ? e.replaceChild(n, o) : e.insertBefore(n, t) : u && o.remove();
      } else
        r = !0;
    }
  } else
    e.insertBefore(n, t);
  return [n];
}
function ce(e) {
  return Object.keys(e).reduce((t, l) => {
    const n = e[l];
    return t[l] = Object.assign({}, n), D(n.value) && !de(n.value) && !Array.isArray(n.value) && (t[l].value = Object.assign({}, n.value)), Array.isArray(n.value) && (t[l].value = n.value.slice(0)), t;
  }, {});
}
function fe(e) {
  return e ? Object.keys(e).reduce((t, l) => {
    const n = e[l];
    return t[l] = D(n) && "value" in n ? n : {
      value: n
    }, t[l].attribute || (t[l].attribute = pe(l)), t[l].parse = "parse" in t[l] ? t[l].parse : typeof t[l].value != "string", t;
  }, {}) : {};
}
function ae(e) {
  return Object.keys(e).reduce((t, l) => (t[l] = e[l].value, t), {});
}
function he(e, s) {
  const t = ce(s);
  return Object.keys(s).forEach((n) => {
    const r = t[n], i = e.getAttribute(r.attribute), o = e[n];
    i && (r.value = r.parse ? J(i) : i), o != null && (r.value = Array.isArray(o) ? o.slice(0) : o), r.reflect && M(e, r.attribute, r.value), Object.defineProperty(e, n, {
      get() {
        return r.value;
      },
      set(u) {
        const p = r.value;
        r.value = u, r.reflect && M(this, r.attribute, r.value);
        for (let f = 0, d = this.__propertyChangedCallbacks.length; f < d; f++)
          this.__propertyChangedCallbacks[f](n, u, p);
      },
      enumerable: !0,
      configurable: !0
    });
  }), t;
}
function J(e) {
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
}
function M(e, s, t) {
  if (t == null || t === !1)
    return e.removeAttribute(s);
  let l = JSON.stringify(t);
  e.__updating[s] = !0, l === "true" && (l = ""), e.setAttribute(s, l), Promise.resolve().then(() => delete e.__updating[s]);
}
function pe(e) {
  return e.replace(/\.?([A-Z]+)/g, (s, t) => "-" + t.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function D(e) {
  return e != null && (typeof e == "object" || typeof e == "function");
}
function de(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function ge(e) {
  return typeof e == "function" && e.toString().indexOf("class") === 0;
}
let _;
function Q() {
  Object.defineProperty(_, "renderRoot", {
    value: _
  });
}
function ye(e, s) {
  const t = Object.keys(s);
  return class extends e {
    static get observedAttributes() {
      return t.map((n) => s[n].attribute);
    }
    constructor() {
      super(), this.__initialized = !1, this.__released = !1, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized)
        return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = he(this, s);
      const n = ae(this.props), r = this.Component, i = _;
      try {
        _ = this, this.__initialized = !0, ge(r) ? new r(n, {
          element: this
        }) : r(n, {
          element: this
        });
      } finally {
        _ = i;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected)
        return;
      this.__propertyChangedCallbacks.length = 0;
      let n = null;
      for (; n = this.__releaseCallbacks.pop(); )
        n(this);
      delete this.__initialized, this.__released = !0;
    }
    attributeChangedCallback(n, r, i) {
      if (this.__initialized && !this.__updating[n] && (n = this.lookupProp(n), n in s)) {
        if (i == null && !this[n])
          return;
        this[n] = s[n].parse ? J(i) : i;
      }
    }
    lookupProp(n) {
      if (s)
        return t.find((r) => n === r || n === s[r].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({
        mode: "open"
      });
    }
    addReleaseCallback(n) {
      this.__releaseCallbacks.push(n);
    }
    addPropertyChangedCallback(n) {
      this.__propertyChangedCallbacks.push(n);
    }
  };
}
function be(e, s = {}, t = {}) {
  const {
    BaseElement: l = HTMLElement,
    extension: n
  } = t;
  return (r) => {
    if (!e)
      throw new Error("tag is required to register a Component");
    let i = customElements.get(e);
    return i ? (i.prototype.Component = r, i) : (i = ye(l, fe(s)), i.prototype.Component = r, i.prototype.registeredTag = e, customElements.define(e, i, n), i);
  };
}
function _e(e) {
  const s = Object.keys(e), t = {};
  for (let l = 0; l < s.length; l++) {
    const [n, r] = F(e[s[l]]);
    Object.defineProperty(t, s[l], {
      get: n,
      set(i) {
        r(() => i);
      }
    });
  }
  return t;
}
function we(e) {
  if (e.assignedSlot && e.assignedSlot._$owner)
    return e.assignedSlot._$owner;
  let s = e.parentNode;
  for (; s && !s._$owner && !(s.assignedSlot && s.assignedSlot._$owner); )
    s = s.parentNode;
  return s && s.assignedSlot ? s.assignedSlot._$owner : e._$owner;
}
function Ce(e) {
  return (s, t) => {
    const { element: l } = t;
    return ee((n) => {
      const r = _e(s);
      l.addPropertyChangedCallback((o, u) => r[o] = u), l.addReleaseCallback(() => {
        l.renderRoot.textContent = "", n();
      });
      const i = e(r, t);
      return k(l.renderRoot, i);
    }, we(l));
  };
}
function v(e, s, t) {
  return arguments.length === 2 && (t = s, s = {}), be(e, s)(Ce(t));
}
var ve = /* @__PURE__ */ C("<h1>Hello world!");
v("c-dummy", {}, () => ve());
var Se = /* @__PURE__ */ C("<h1>");
v("c-props", {
  myMessage: "hello world!"
}, (e) => (() => {
  var s = Se();
  return k(s, () => e.myMessage), s;
})());
var $e = /* @__PURE__ */ C("<div><header><slot name=header></slot></header><div><slot></slot></div><footer><slot name=footer>");
v("c-slots", {}, () => (() => {
  var e = $e(), s = e.firstChild, t = s.firstChild, l = s.nextSibling, n = l.firstChild, r = l.nextSibling, i = r.firstChild;
  return t._$owner = P(), n._$owner = P(), i._$owner = P(), e;
})());
var Ae = /* @__PURE__ */ C("<div><button>Click thingie");
v("c-event-handler", {}, (e, {
  element: s
}) => (Q(), Ae()));
var Ee = /* @__PURE__ */ C("<div id=counter><button>-</button><p>Count: </p><button>+");
v("c-counter", {}, () => {
  Q();
  const [e, s] = F(0);
  return (() => {
    var t = Ee(), l = t.firstChild, n = l.nextSibling;
    n.firstChild;
    var r = n.nextSibling;
    return l.$$click = () => s(e() - 1), k(n, e, null), r.$$click = () => s(e() + 1), t;
  })();
});
oe(["click"]);
