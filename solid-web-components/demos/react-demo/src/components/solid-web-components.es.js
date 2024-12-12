(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html,body{margin:0;padding:0;box-sizing:border-box}div#counter{display:flex;width:100vw;height:100vh;align-items:center;justify-content:center;font-family:Inter;gap:24px}div#counter button{width:60px;height:60px;background-color:#000;color:#fff;border:none;font-size:50px;cursor:pointer;display:flex;align-items:center;justify-content:center}div#counter p{display:flex;align-items:center;justify-content:center;font-size:60px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const ne = (e, t) => e === t, H = {
  equals: ne
};
let z = W;
const b = 1, $ = 2, D = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var f = null;
let N = null, se = null, c = null, h = null, g = null, x = 0;
function le(e, t) {
  const n = c, s = f, l = e.length === 0, r = t === void 0 ? s : t, o = l ? D : {
    owned: null,
    cleanups: null,
    context: r ? r.context : null,
    owner: r
  }, i = l ? e : () => e(() => m(() => k(o)));
  f = o, c = null;
  try {
    return v(i, !0);
  } finally {
    c = n, f = s;
  }
}
function K(e, t) {
  t = t ? Object.assign({}, H, t) : H;
  const n = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, s = (l) => (typeof l == "function" && (l = l(n.value)), q(n, l));
  return [oe.bind(n), s];
}
function R(e, t, n) {
  const s = Q(e, t, !1, b);
  O(s);
}
function J(e, t, n) {
  z = fe;
  const s = Q(e, t, !1, b), l = I && ie(I);
  l && (s.suspense = l), s.user = !0, g ? g.push(s) : O(s);
}
function m(e) {
  if (c === null)
    return e();
  const t = c;
  c = null;
  try {
    return e();
  } finally {
    c = t;
  }
}
function re(e) {
  J(() => m(e));
}
function L() {
  return f;
}
function ie(e) {
  return f && f.context && f.context[e.id] !== void 0 ? f.context[e.id] : e.defaultValue;
}
let I;
function oe() {
  if (this.sources && this.state)
    if (this.state === b)
      O(this);
    else {
      const e = h;
      h = null, v(() => E(this), !1), h = e;
    }
  if (c) {
    const e = this.observers ? this.observers.length : 0;
    c.sources ? (c.sources.push(this), c.sourceSlots.push(e)) : (c.sources = [this], c.sourceSlots = [e]), this.observers ? (this.observers.push(c), this.observerSlots.push(c.sources.length - 1)) : (this.observers = [c], this.observerSlots = [c.sources.length - 1]);
  }
  return this.value;
}
function q(e, t, n) {
  let s = e.value;
  return (!e.comparator || !e.comparator(s, t)) && (e.value = t, e.observers && e.observers.length && v(() => {
    for (let l = 0; l < e.observers.length; l += 1) {
      const r = e.observers[l], o = N && N.running;
      o && N.disposed.has(r), (o ? !r.tState : !r.state) && (r.pure ? h.push(r) : g.push(r), r.observers && X(r)), o || (r.state = b);
    }
    if (h.length > 1e6)
      throw h = [], new Error();
  }, !1)), t;
}
function O(e) {
  if (!e.fn)
    return;
  k(e);
  const t = x;
  ue(
    e,
    e.value,
    t
  );
}
function ue(e, t, n) {
  let s;
  const l = f, r = c;
  c = f = e;
  try {
    s = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = b, e.owned && e.owned.forEach(k), e.owned = null), e.updatedAt = n + 1, Z(o);
  } finally {
    c = r, f = l;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? q(e, s) : e.value = s, e.updatedAt = n);
}
function Q(e, t, n, s = b, l) {
  const r = {
    fn: e,
    state: s,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: f,
    context: f ? f.context : null,
    pure: n
  };
  return f === null || f !== D && (f.owned ? f.owned.push(r) : f.owned = [r]), r;
}
function S(e) {
  if (e.state === 0)
    return;
  if (e.state === $)
    return E(e);
  if (e.suspense && m(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < x); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === b)
      O(e);
    else if (e.state === $) {
      const s = h;
      h = null, v(() => E(e, t[0]), !1), h = s;
    }
}
function v(e, t) {
  if (h)
    return e();
  let n = !1;
  t || (h = []), g ? n = !0 : g = [], x++;
  try {
    const s = e();
    return ce(n), s;
  } catch (s) {
    n || (g = null), h = null, Z(s);
  }
}
function ce(e) {
  if (h && (W(h), h = null), e)
    return;
  const t = g;
  g = null, t.length && v(() => z(t), !1);
}
function W(e) {
  for (let t = 0; t < e.length; t++)
    S(e[t]);
}
function fe(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const s = e[t];
    s.user ? e[n++] = s : S(s);
  }
  for (t = 0; t < n; t++)
    S(e[t]);
}
function E(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const s = e.sources[n];
    if (s.sources) {
      const l = s.state;
      l === b ? s !== t && (!s.updatedAt || s.updatedAt < x) && S(s) : l === $ && E(s, t);
    }
  }
}
function X(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = $, n.pure ? h.push(n) : g.push(n), n.observers && X(n));
  }
}
function k(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), s = e.sourceSlots.pop(), l = n.observers;
      if (l && l.length) {
        const r = l.pop(), o = n.observerSlots.pop();
        s < l.length && (r.sourceSlots[o] = s, l[s] = r, n.observerSlots[s] = o);
      }
    }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--)
      k(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--)
      e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function ae(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function Z(e, t = f) {
  throw ae(e);
}
function he(e, t) {
  return m(() => e(t || {}));
}
function pe(e, t, n) {
  let s = n.length, l = t.length, r = s, o = 0, i = 0, u = t[l - 1].nextSibling, p = null;
  for (; o < l || i < r; ) {
    if (t[o] === n[i]) {
      o++, i++;
      continue;
    }
    for (; t[l - 1] === n[r - 1]; )
      l--, r--;
    if (l === o) {
      const a = r < s ? i ? n[i - 1].nextSibling : n[r - i] : u;
      for (; i < r; )
        e.insertBefore(n[i++], a);
    } else if (r === i)
      for (; o < l; )
        (!p || !p.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === n[r - 1] && n[i] === t[l - 1]) {
      const a = t[--l].nextSibling;
      e.insertBefore(n[i++], t[o++].nextSibling), e.insertBefore(n[--r], a), t[l] = n[r];
    } else {
      if (!p) {
        p = /* @__PURE__ */ new Map();
        let d = i;
        for (; d < r; )
          p.set(n[d], d++);
      }
      const a = p.get(t[o]);
      if (a != null)
        if (i < a && a < r) {
          let d = o, j = 1, U;
          for (; ++d < l && d < r && !((U = p.get(t[d])) == null || U !== a + j); )
            j++;
          if (j > a - i) {
            const te = t[o];
            for (; i < a; )
              e.insertBefore(n[i++], te);
          } else
            e.replaceChild(n[i++], t[o++]);
        } else
          o++;
      else
        t[o++].remove();
    }
  }
}
const V = "_$DX_DELEGATE";
function y(e, t, n) {
  let s;
  const l = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, o.content.firstChild;
  }, r = () => (s || (s = l())).cloneNode(!0);
  return r.cloneNode = r, r;
}
function M(e, t = window.document) {
  const n = t[V] || (t[V] = /* @__PURE__ */ new Set());
  for (let s = 0, l = e.length; s < l; s++) {
    const r = e[s];
    n.has(r) || (n.add(r), t.addEventListener(r, de));
  }
}
function P(e, t, n, s) {
  if (n !== void 0 && !s && (s = []), typeof t != "function")
    return A(e, t, s, n);
  R((l) => A(e, t(), l, n), s);
}
function de(e) {
  const t = `$$${e.type}`;
  let n = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== n && Object.defineProperty(e, "target", {
    configurable: !0,
    value: n
  }), Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return n || document;
    }
  }); n; ) {
    const s = n[t];
    if (s && !n.disabled) {
      const l = n[`${t}Data`];
      if (l !== void 0 ? s.call(n, l, e) : s.call(n, e), e.cancelBubble)
        return;
    }
    n = n._$host || n.parentNode || n.host;
  }
}
function A(e, t, n, s, l) {
  for (; typeof n == "function"; )
    n = n();
  if (t === n)
    return n;
  const r = typeof t, o = s !== void 0;
  if (e = o && n[0] && n[0].parentNode || e, r === "string" || r === "number")
    if (r === "number" && (t = t.toString()), o) {
      let i = n[0];
      i && i.nodeType === 3 ? i.data !== t && (i.data = t) : i = document.createTextNode(t), n = C(e, n, s, i);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  else if (t == null || r === "boolean")
    n = C(e, n, s);
  else {
    if (r === "function")
      return R(() => {
        let i = t();
        for (; typeof i == "function"; )
          i = i();
        n = A(e, i, n, s);
      }), () => n;
    if (Array.isArray(t)) {
      const i = [], u = n && Array.isArray(n);
      if (B(i, t, n, l))
        return R(() => n = A(e, i, n, s, !0)), () => n;
      if (i.length === 0) {
        if (n = C(e, n, s), o)
          return n;
      } else
        u ? n.length === 0 ? F(e, i, s) : pe(e, n, i) : (n && C(e), F(e, i));
      n = i;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (o)
          return n = C(e, n, s, t);
        C(e, n, null, t);
      } else
        n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function B(e, t, n, s) {
  let l = !1;
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r], u = n && n[e.length], p;
    if (!(i == null || i === !0 || i === !1))
      if ((p = typeof i) == "object" && i.nodeType)
        e.push(i);
      else if (Array.isArray(i))
        l = B(e, i, u) || l;
      else if (p === "function")
        if (s) {
          for (; typeof i == "function"; )
            i = i();
          l = B(
            e,
            Array.isArray(i) ? i : [i],
            Array.isArray(u) ? u : [u]
          ) || l;
        } else
          e.push(i), l = !0;
      else {
        const a = String(i);
        u && u.nodeType === 3 && u.data === a ? e.push(u) : e.push(document.createTextNode(a));
      }
  }
  return l;
}
function F(e, t, n = null) {
  for (let s = 0, l = t.length; s < l; s++)
    e.insertBefore(t[s], n);
}
function C(e, t, n, s) {
  if (n === void 0)
    return e.textContent = "";
  const l = s || document.createTextNode("");
  if (t.length) {
    let r = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = t[o];
      if (l !== i) {
        const u = i.parentNode === e;
        !r && !o ? u ? e.replaceChild(l, i) : e.insertBefore(l, n) : u && i.remove();
      } else
        r = !0;
    }
  } else
    e.insertBefore(l, n);
  return [l];
}
function ge(e) {
  return Object.keys(e).reduce((n, s) => {
    const l = e[s];
    return n[s] = Object.assign({}, l), ee(l.value) && !we(l.value) && !Array.isArray(l.value) && (n[s].value = Object.assign({}, l.value)), Array.isArray(l.value) && (n[s].value = l.value.slice(0)), n;
  }, {});
}
function be(e) {
  return e ? Object.keys(e).reduce((n, s) => {
    const l = e[s];
    return n[s] = ee(l) && "value" in l ? l : {
      value: l
    }, n[s].attribute || (n[s].attribute = Ce(s)), n[s].parse = "parse" in n[s] ? n[s].parse : typeof n[s].value != "string", n;
  }, {}) : {};
}
function ye(e) {
  return Object.keys(e).reduce((n, s) => (n[s] = e[s].value, n), {});
}
function _e(e, t) {
  const n = ge(t);
  return Object.keys(t).forEach((l) => {
    const r = n[l], o = e.getAttribute(r.attribute), i = e[l];
    o && (r.value = r.parse ? Y(o) : o), i != null && (r.value = Array.isArray(i) ? i.slice(0) : i), r.reflect && G(e, r.attribute, r.value), Object.defineProperty(e, l, {
      get() {
        return r.value;
      },
      set(u) {
        const p = r.value;
        r.value = u, r.reflect && G(this, r.attribute, r.value);
        for (let a = 0, d = this.__propertyChangedCallbacks.length; a < d; a++)
          this.__propertyChangedCallbacks[a](l, u, p);
      },
      enumerable: !0,
      configurable: !0
    });
  }), n;
}
function Y(e) {
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
}
function G(e, t, n) {
  if (n == null || n === !1)
    return e.removeAttribute(t);
  let s = JSON.stringify(n);
  e.__updating[t] = !0, s === "true" && (s = ""), e.setAttribute(t, s), Promise.resolve().then(() => delete e.__updating[t]);
}
function Ce(e) {
  return e.replace(/\.?([A-Z]+)/g, (t, n) => "-" + n.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function ee(e) {
  return e != null && (typeof e == "object" || typeof e == "function");
}
function we(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function ve(e) {
  return typeof e == "function" && e.toString().indexOf("class") === 0;
}
let w;
function T() {
  Object.defineProperty(w, "renderRoot", {
    value: w
  });
}
function $e(e, t) {
  const n = Object.keys(t);
  return class extends e {
    static get observedAttributes() {
      return n.map((l) => t[l].attribute);
    }
    constructor() {
      super(), this.__initialized = !1, this.__released = !1, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized)
        return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = _e(this, t);
      const l = ye(this.props), r = this.Component, o = w;
      try {
        w = this, this.__initialized = !0, ve(r) ? new r(l, {
          element: this
        }) : r(l, {
          element: this
        });
      } finally {
        w = o;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected)
        return;
      this.__propertyChangedCallbacks.length = 0;
      let l = null;
      for (; l = this.__releaseCallbacks.pop(); )
        l(this);
      delete this.__initialized, this.__released = !0;
    }
    attributeChangedCallback(l, r, o) {
      if (this.__initialized && !this.__updating[l] && (l = this.lookupProp(l), l in t)) {
        if (o == null && !this[l])
          return;
        this[l] = t[l].parse ? Y(o) : o;
      }
    }
    lookupProp(l) {
      if (t)
        return n.find((r) => l === r || l === t[r].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({
        mode: "open"
      });
    }
    addReleaseCallback(l) {
      this.__releaseCallbacks.push(l);
    }
    addPropertyChangedCallback(l) {
      this.__propertyChangedCallbacks.push(l);
    }
  };
}
function Se(e, t = {}, n = {}) {
  const {
    BaseElement: s = HTMLElement,
    extension: l
  } = n;
  return (r) => {
    if (!e)
      throw new Error("tag is required to register a Component");
    let o = customElements.get(e);
    return o ? (o.prototype.Component = r, o) : (o = $e(s, be(t)), o.prototype.Component = r, o.prototype.registeredTag = e, customElements.define(e, o, l), o);
  };
}
function Ee(e) {
  const t = Object.keys(e), n = {};
  for (let s = 0; s < t.length; s++) {
    const [l, r] = K(e[t[s]]);
    Object.defineProperty(n, t[s], {
      get: l,
      set(o) {
        r(() => o);
      }
    });
  }
  return n;
}
function Ae(e) {
  if (e.assignedSlot && e.assignedSlot._$owner)
    return e.assignedSlot._$owner;
  let t = e.parentNode;
  for (; t && !t._$owner && !(t.assignedSlot && t.assignedSlot._$owner); )
    t = t.parentNode;
  return t && t.assignedSlot ? t.assignedSlot._$owner : e._$owner;
}
function xe(e) {
  return (t, n) => {
    const { element: s } = n;
    return le((l) => {
      const r = Ee(t);
      s.addPropertyChangedCallback((i, u) => r[i] = u), s.addReleaseCallback(() => {
        s.renderRoot.textContent = "", l();
      });
      const o = e(r, n);
      return P(s.renderRoot, o);
    }, Ae(s));
  };
}
function _(e, t, n) {
  return arguments.length === 2 && (n = t, t = {}), Se(e, t)(xe(n));
}
var me = /* @__PURE__ */ y("<h1>Hello world!");
_("c-basic", {}, () => me());
var Oe = /* @__PURE__ */ y("<h1>");
_("c-props", {
  myMessage: "hello world!"
}, (e, {}) => (() => {
  var t = Oe();
  return P(t, () => e.myMessage), t;
})());
var ke = /* @__PURE__ */ y("<div><header><slot name=header></slot></header><div><slot></slot></div><footer><slot name=footer>");
_("c-slots", {}, () => (() => {
  var e = ke(), t = e.firstChild, n = t.firstChild, s = t.nextSibling, l = s.firstChild, r = s.nextSibling, o = r.firstChild;
  return n._$owner = L(), l._$owner = L(), o._$owner = L(), e;
})());
var Pe = /* @__PURE__ */ y("<div><button>Click thingie");
_("c-event-handler", {}, (e, {
  element: t
}) => {
  T();
  const n = () => {
    console.log("onclick"), t.handleClick ? t.handleClick() : alert("I'm a fallback alert");
  };
  return (() => {
    var s = Pe(), l = s.firstChild;
    return l.$$click = n, s;
  })();
});
M(["click"]);
var Te = /* @__PURE__ */ y("<div id=counter><button>-</button><p>Count: </p><button>+");
_("c-counter", {}, () => {
  T();
  const [e, t] = K(0);
  return (() => {
    var n = Te(), s = n.firstChild, l = s.nextSibling;
    l.firstChild;
    var r = l.nextSibling;
    return s.$$click = () => t(e() - 1), P(l, e, null), r.$$click = () => t(e() + 1), n;
  })();
});
M(["click"]);
var je = /* @__PURE__ */ y("<div><button>Increment</button><p>Count: </p><button>Decrement");
_("c-signals", {
  initialCount: "0"
}, (e, {
  element: t
}) => {
  T();
  const n = parseInt(e.initialCount), [s, l] = K(n);
  return re(() => {
    t.count = s, t.setCount = l, t.addEventListener("set-count", (r) => {
      l(parseInt(r.detail.count));
    });
  }), J(() => {
    t.dispatchEvent(new CustomEvent("count-set", {
      detail: {
        count: s()
      }
    }));
  }, [s]), (() => {
    var r = je(), o = r.firstChild, i = o.nextSibling;
    i.firstChild;
    var u = i.nextSibling;
    return o.$$click = () => l(s() + 1), P(i, s, null), u.$$click = () => l(s() - 1), r;
  })();
});
M(["click"]);
var Ne = /* @__PURE__ */ y("<div>Hello world (client-side)!");
const Le = () => Ne();
_("c-ssr", {}, (e, {
  element: t
}) => (T(), t.innerHTML = "", he(Le, {})));
