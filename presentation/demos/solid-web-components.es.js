(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html,body{margin:0;padding:0;box-sizing:border-box}div#counter{display:flex;width:100vw;height:100vh;align-items:center;justify-content:center;font-family:Inter;gap:24px}div#counter button{width:60px;height:60px;background-color:#000;color:#fff;border:none;font-size:50px;cursor:pointer;display:flex;align-items:center;justify-content:center}div#counter p{display:flex;align-items:center;justify-content:center;font-size:60px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const te = (e, t) => e === t, U = {
  equals: te
};
let D = Q;
const b = 1, S = 2, G = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var h = null;
let N = null, ne = null, c = null, p = null, g = null, O = 0;
function se(e, t) {
  const n = c, s = h, r = e.length === 0, l = t === void 0 ? s : t, o = r ? G : {
    owned: null,
    cleanups: null,
    context: l ? l.context : null,
    owner: l
  }, i = r ? e : () => e(() => k(() => $(o)));
  h = o, c = null;
  try {
    return v(i, !0);
  } finally {
    c = n, h = s;
  }
}
function B(e, t) {
  t = t ? Object.assign({}, U, t) : U;
  const n = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, s = (r) => (typeof r == "function" && (r = r(n.value)), J(n, r));
  return [le.bind(n), s];
}
function M(e, t, n) {
  const s = q(e, t, !1, b);
  m(s);
}
function z(e, t, n) {
  D = ue;
  const s = q(e, t, !1, b);
  s.user = !0, g ? g.push(s) : m(s);
}
function k(e) {
  if (c === null) return e();
  const t = c;
  c = null;
  try {
    return e();
  } finally {
    c = t;
  }
}
function re(e) {
  z(() => k(e));
}
function L() {
  return h;
}
function le() {
  if (this.sources && this.state)
    if (this.state === b) m(this);
    else {
      const e = p;
      p = null, v(() => A(this), !1), p = e;
    }
  if (c) {
    const e = this.observers ? this.observers.length : 0;
    c.sources ? (c.sources.push(this), c.sourceSlots.push(e)) : (c.sources = [this], c.sourceSlots = [e]), this.observers ? (this.observers.push(c), this.observerSlots.push(c.sources.length - 1)) : (this.observers = [c], this.observerSlots = [c.sources.length - 1]);
  }
  return this.value;
}
function J(e, t, n) {
  let s = e.value;
  return (!e.comparator || !e.comparator(s, t)) && (e.value = t, e.observers && e.observers.length && v(() => {
    for (let r = 0; r < e.observers.length; r += 1) {
      const l = e.observers[r], o = N && N.running;
      o && N.disposed.has(l), (o ? !l.tState : !l.state) && (l.pure ? p.push(l) : g.push(l), l.observers && W(l)), o || (l.state = b);
    }
    if (p.length > 1e6)
      throw p = [], new Error();
  }, !1)), t;
}
function m(e) {
  if (!e.fn) return;
  $(e);
  const t = O;
  ie(
    e,
    e.value,
    t
  );
}
function ie(e, t, n) {
  let s;
  const r = h, l = c;
  c = h = e;
  try {
    s = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = b, e.owned && e.owned.forEach($), e.owned = null), e.updatedAt = n + 1, X(o);
  } finally {
    c = l, h = r;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? J(e, s) : e.value = s, e.updatedAt = n);
}
function q(e, t, n, s = b, r) {
  const l = {
    fn: e,
    state: s,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: h,
    context: h ? h.context : null,
    pure: n
  };
  return h === null || h !== G && (h.owned ? h.owned.push(l) : h.owned = [l]), l;
}
function E(e) {
  if (e.state === 0) return;
  if (e.state === S) return A(e);
  if (e.suspense && k(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < O); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === b)
      m(e);
    else if (e.state === S) {
      const s = p;
      p = null, v(() => A(e, t[0]), !1), p = s;
    }
}
function v(e, t) {
  if (p) return e();
  let n = !1;
  t || (p = []), g ? n = !0 : g = [], O++;
  try {
    const s = e();
    return oe(n), s;
  } catch (s) {
    n || (g = null), p = null, X(s);
  }
}
function oe(e) {
  if (p && (Q(p), p = null), e) return;
  const t = g;
  g = null, t.length && v(() => D(t), !1);
}
function Q(e) {
  for (let t = 0; t < e.length; t++) E(e[t]);
}
function ue(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const s = e[t];
    s.user ? e[n++] = s : E(s);
  }
  for (t = 0; t < n; t++) E(e[t]);
}
function A(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const s = e.sources[n];
    if (s.sources) {
      const r = s.state;
      r === b ? s !== t && (!s.updatedAt || s.updatedAt < O) && E(s) : r === S && A(s, t);
    }
  }
}
function W(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = S, n.pure ? p.push(n) : g.push(n), n.observers && W(n));
  }
}
function $(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), s = e.sourceSlots.pop(), r = n.observers;
      if (r && r.length) {
        const l = r.pop(), o = n.observerSlots.pop();
        s < r.length && (l.sourceSlots[o] = s, r[s] = l, n.observerSlots[s] = o);
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) $(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) $(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function ce(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function X(e, t = h) {
  throw ce(e);
}
function ae(e, t) {
  return k(() => e(t || {}));
}
function fe(e, t, n) {
  let s = n.length, r = t.length, l = s, o = 0, i = 0, u = t[r - 1].nextSibling, a = null;
  for (; o < r || i < l; ) {
    if (t[o] === n[i]) {
      o++, i++;
      continue;
    }
    for (; t[r - 1] === n[l - 1]; )
      r--, l--;
    if (r === o) {
      const f = l < s ? i ? n[i - 1].nextSibling : n[l - i] : u;
      for (; i < l; ) e.insertBefore(n[i++], f);
    } else if (l === i)
      for (; o < r; )
        (!a || !a.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === n[l - 1] && n[i] === t[r - 1]) {
      const f = t[--r].nextSibling;
      e.insertBefore(n[i++], t[o++].nextSibling), e.insertBefore(n[--l], f), t[r] = n[l];
    } else {
      if (!a) {
        a = /* @__PURE__ */ new Map();
        let d = i;
        for (; d < l; ) a.set(n[d], d++);
      }
      const f = a.get(t[o]);
      if (f != null)
        if (i < f && f < l) {
          let d = o, j = 1, K;
          for (; ++d < r && d < l && !((K = a.get(t[d])) == null || K !== f + j); )
            j++;
          if (j > f - i) {
            const ee = t[o];
            for (; i < f; ) e.insertBefore(n[i++], ee);
          } else e.replaceChild(n[i++], t[o++]);
        } else o++;
      else t[o++].remove();
    }
  }
}
const V = "_$DX_DELEGATE";
function _(e, t, n, s) {
  let r;
  const l = () => {
    const i = document.createElement("template");
    return i.innerHTML = e, i.content.firstChild;
  }, o = () => (r || (r = l())).cloneNode(!0);
  return o.cloneNode = o, o;
}
function I(e, t = window.document) {
  const n = t[V] || (t[V] = /* @__PURE__ */ new Set());
  for (let s = 0, r = e.length; s < r; s++) {
    const l = e[s];
    n.has(l) || (n.add(l), t.addEventListener(l, he));
  }
}
function T(e, t, n, s) {
  if (n !== void 0 && !s && (s = []), typeof t != "function") return x(e, t, s, n);
  M((r) => x(e, t(), r, n), s);
}
function he(e) {
  let t = e.target;
  const n = `$$${e.type}`, s = e.target, r = e.currentTarget, l = (u) => Object.defineProperty(e, "target", {
    configurable: !0,
    value: u
  }), o = () => {
    const u = t[n];
    if (u && !t.disabled) {
      const a = t[`${n}Data`];
      if (a !== void 0 ? u.call(t, a, e) : u.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && l(t.host), !0;
  }, i = () => {
    for (; o() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), e.composedPath) {
    const u = e.composedPath();
    l(u[0]);
    for (let a = 0; a < u.length - 2 && (t = u[a], !!o()); a++) {
      if (t._$host) {
        t = t._$host, i();
        break;
      }
      if (t.parentNode === r)
        break;
    }
  } else i();
  l(s);
}
function x(e, t, n, s, r) {
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const l = typeof t, o = s !== void 0;
  if (e = o && n[0] && n[0].parentNode || e, l === "string" || l === "number") {
    if (l === "number" && (t = t.toString(), t === n))
      return n;
    if (o) {
      let i = n[0];
      i && i.nodeType === 3 ? i.data !== t && (i.data = t) : i = document.createTextNode(t), n = C(e, n, s, i);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || l === "boolean")
    n = C(e, n, s);
  else {
    if (l === "function")
      return M(() => {
        let i = t();
        for (; typeof i == "function"; ) i = i();
        n = x(e, i, n, s);
      }), () => n;
    if (Array.isArray(t)) {
      const i = [], u = n && Array.isArray(n);
      if (R(i, t, n, r))
        return M(() => n = x(e, i, n, s, !0)), () => n;
      if (i.length === 0) {
        if (n = C(e, n, s), o) return n;
      } else u ? n.length === 0 ? H(e, i, s) : fe(e, n, i) : (n && C(e), H(e, i));
      n = i;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (o) return n = C(e, n, s, t);
        C(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function R(e, t, n, s) {
  let r = !1;
  for (let l = 0, o = t.length; l < o; l++) {
    let i = t[l], u = n && n[e.length], a;
    if (!(i == null || i === !0 || i === !1)) if ((a = typeof i) == "object" && i.nodeType)
      e.push(i);
    else if (Array.isArray(i))
      r = R(e, i, u) || r;
    else if (a === "function")
      if (s) {
        for (; typeof i == "function"; ) i = i();
        r = R(
          e,
          Array.isArray(i) ? i : [i],
          Array.isArray(u) ? u : [u]
        ) || r;
      } else
        e.push(i), r = !0;
    else {
      const f = String(i);
      u && u.nodeType === 3 && u.data === f ? e.push(u) : e.push(document.createTextNode(f));
    }
  }
  return r;
}
function H(e, t, n = null) {
  for (let s = 0, r = t.length; s < r; s++) e.insertBefore(t[s], n);
}
function C(e, t, n, s) {
  if (n === void 0) return e.textContent = "";
  const r = s || document.createTextNode("");
  if (t.length) {
    let l = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = t[o];
      if (r !== i) {
        const u = i.parentNode === e;
        !l && !o ? u ? e.replaceChild(r, i) : e.insertBefore(r, n) : u && i.remove();
      } else l = !0;
    }
  } else e.insertBefore(r, n);
  return [r];
}
function pe(e) {
  return Object.keys(e).reduce((n, s) => {
    const r = e[s];
    return n[s] = Object.assign({}, r), Y(r.value) && !ye(r.value) && !Array.isArray(r.value) && (n[s].value = Object.assign({}, r.value)), Array.isArray(r.value) && (n[s].value = r.value.slice(0)), n;
  }, {});
}
function de(e) {
  return e ? Object.keys(e).reduce((n, s) => {
    const r = e[s];
    return n[s] = Y(r) && "value" in r ? r : {
      value: r
    }, n[s].attribute || (n[s].attribute = _e(s)), n[s].parse = "parse" in n[s] ? n[s].parse : typeof n[s].value != "string", n;
  }, {}) : {};
}
function ge(e) {
  return Object.keys(e).reduce((n, s) => (n[s] = e[s].value, n), {});
}
function be(e, t) {
  const n = pe(t);
  return Object.keys(t).forEach((r) => {
    const l = n[r], o = e.getAttribute(l.attribute), i = e[r];
    o != null && (l.value = l.parse ? Z(o) : o), i != null && (l.value = Array.isArray(i) ? i.slice(0) : i), l.reflect && F(e, l.attribute, l.value, !!l.parse), Object.defineProperty(e, r, {
      get() {
        return l.value;
      },
      set(u) {
        const a = l.value;
        l.value = u, l.reflect && F(this, l.attribute, l.value, !!l.parse);
        for (let f = 0, d = this.__propertyChangedCallbacks.length; f < d; f++)
          this.__propertyChangedCallbacks[f](r, u, a);
      },
      enumerable: !0,
      configurable: !0
    });
  }), n;
}
function Z(e) {
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
}
function F(e, t, n, s) {
  if (n == null || n === !1) return e.removeAttribute(t);
  let r = s ? JSON.stringify(n) : n;
  e.__updating[t] = !0, r === "true" && (r = ""), e.setAttribute(t, r), Promise.resolve().then(() => delete e.__updating[t]);
}
function _e(e) {
  return e.replace(/\.?([A-Z]+)/g, (t, n) => "-" + n.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function Y(e) {
  return e != null && (typeof e == "object" || typeof e == "function");
}
function ye(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function Ce(e) {
  return typeof e == "function" && e.toString().indexOf("class") === 0;
}
let w;
function P() {
  Object.defineProperty(w, "renderRoot", {
    value: w
  });
}
function we(e, t) {
  const n = Object.keys(t);
  return class extends e {
    static get observedAttributes() {
      return n.map((r) => t[r].attribute);
    }
    constructor() {
      super(), this.__initialized = !1, this.__released = !1, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized) return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = be(this, t);
      const r = ge(this.props), l = this.Component, o = w;
      try {
        w = this, this.__initialized = !0, Ce(l) ? new l(r, {
          element: this
        }) : l(r, {
          element: this
        });
      } finally {
        w = o;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected) return;
      this.__propertyChangedCallbacks.length = 0;
      let r = null;
      for (; r = this.__releaseCallbacks.pop(); ) r(this);
      delete this.__initialized, this.__released = !0;
    }
    attributeChangedCallback(r, l, o) {
      if (this.__initialized && !this.__updating[r] && (r = this.lookupProp(r), r in t)) {
        if (o == null && !this[r]) return;
        this[r] = t[r].parse ? Z(o) : o;
      }
    }
    lookupProp(r) {
      if (t)
        return n.find((l) => r === l || r === t[l].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({
        mode: "open"
      });
    }
    addReleaseCallback(r) {
      this.__releaseCallbacks.push(r);
    }
    addPropertyChangedCallback(r) {
      this.__propertyChangedCallbacks.push(r);
    }
  };
}
function $e(e, t = {}, n = {}) {
  const {
    BaseElement: s = HTMLElement,
    extension: r,
    customElements: l = window.customElements
  } = n;
  return (o) => {
    if (!e) throw new Error("tag is required to register a Component");
    let i = l.get(e);
    return i ? (i.prototype.Component = o, i) : (i = we(s, de(t)), i.prototype.Component = o, i.prototype.registeredTag = e, l.define(e, i, r), i);
  };
}
function ve(e) {
  const t = Object.keys(e), n = {};
  for (let s = 0; s < t.length; s++) {
    const [r, l] = B(e[t[s]]);
    Object.defineProperty(n, t[s], {
      get: r,
      set(o) {
        l(() => o);
      }
    });
  }
  return n;
}
function Se(e) {
  if (e.assignedSlot && e.assignedSlot._$owner) return e.assignedSlot._$owner;
  let t = e.parentNode;
  for (; t && !t._$owner && !(t.assignedSlot && t.assignedSlot._$owner); )
    t = t.parentNode;
  return t && t.assignedSlot ? t.assignedSlot._$owner : e._$owner;
}
function Ee(e) {
  return (t, n) => {
    const { element: s } = n;
    return se((r) => {
      const l = ve(t);
      s.addPropertyChangedCallback((i, u) => l[i] = u), s.addReleaseCallback(() => {
        s.renderRoot.textContent = "", r();
      });
      const o = e(l, n);
      return T(s.renderRoot, o);
    }, Se(s));
  };
}
function y(e, t, n) {
  return arguments.length === 2 && (n = t, t = {}), $e(e, t)(Ee(n));
}
var Ae = /* @__PURE__ */ _("<h1>Hello world!");
y("c-basic", {}, () => Ae());
var xe = /* @__PURE__ */ _("<h1>");
y("c-props", {
  myMessage: "hello world!"
}, (e, {}) => (() => {
  var t = xe();
  return T(t, () => e.myMessage), t;
})());
var Oe = /* @__PURE__ */ _("<div><header><slot name=header></slot></header><div><slot></slot></div><footer><slot name=footer>");
y("c-slots", {}, () => (() => {
  var e = Oe(), t = e.firstChild, n = t.firstChild, s = t.nextSibling, r = s.firstChild, l = s.nextSibling, o = l.firstChild;
  return n._$owner = L(), r._$owner = L(), o._$owner = L(), e;
})());
var ke = /* @__PURE__ */ _("<div><button>Click thingie");
y("c-event-handler", {}, (e, {
  element: t
}) => {
  P();
  const n = () => {
    console.log("onclick"), t.handleClick ? t.handleClick() : alert("I'm a fallback alert");
  };
  return (() => {
    var s = ke(), r = s.firstChild;
    return r.$$click = n, s;
  })();
});
I(["click"]);
var me = /* @__PURE__ */ _("<div id=counter><button>-</button><p>Count: </p><button>+");
y("c-counter", {}, () => {
  P();
  const [e, t] = B(0);
  return (() => {
    var n = me(), s = n.firstChild, r = s.nextSibling;
    r.firstChild;
    var l = r.nextSibling;
    return s.$$click = () => t(e() - 1), T(r, e, null), l.$$click = () => t(e() + 1), n;
  })();
});
I(["click"]);
var Te = /* @__PURE__ */ _("<div><button>Increment</button><p>Count: </p><button>Decrement");
y("c-signals", {
  initialCount: "0"
}, (e, {
  element: t
}) => {
  P();
  const n = parseInt(e.initialCount), [s, r] = B(n);
  return re(() => {
    t.count = s, t.setCount = r, t.addEventListener("set-count", (l) => {
      r(parseInt(l.detail.count));
    });
  }), z(() => {
    t.dispatchEvent(new CustomEvent("count-set", {
      detail: {
        count: s()
      }
    }));
  }, [s]), (() => {
    var l = Te(), o = l.firstChild, i = o.nextSibling;
    i.firstChild;
    var u = i.nextSibling;
    return o.$$click = () => r(s() + 1), T(i, s, null), u.$$click = () => r(s() - 1), l;
  })();
});
I(["click"]);
var Pe = /* @__PURE__ */ _("<div>Hello world (client-side)!");
const je = () => Pe();
y("c-ssr", {}, (e, {
  element: t
}) => (P(), t.innerHTML = "", ae(je, {})));
