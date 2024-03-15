import { defineComponent as g, computed as l, openBlock as c, createElementBlock as p, normalizeClass as b, normalizeStyle as y, toDisplayString as x, ref as C, watch as v, createBlock as T, resolveDynamicComponent as N, renderSlot as L, onMounted as j, nextTick as F, createElementVNode as D, mergeProps as H, createCommentVNode as P } from "vue";
const z = /* @__PURE__ */ g({
  __name: "CuButton",
  props: {
    label: {},
    primary: { type: Boolean, default: !1 },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = t, n = e, i = l(() => ({
      "cu-button": !0,
      "cu-button--primary": o.primary,
      "cu-button--secondary": !o.primary,
      [`cu-button--${o.size || "medium"}`]: !0
    })), r = l(() => ({
      backgroundColor: o.backgroundColor
    })), u = () => {
      n("click", 1);
    };
    return (m, s) => (c(), p("button", {
      type: "button",
      class: b(i.value),
      onClick: u,
      style: y(r.value)
    }, x(m.label), 7));
  }
});
z.install = (t) => (t.component("CuButton", z), t);
const O = ["src", "srcset", "alt"], W = {
  key: 1,
  class: "avatar-icon"
}, k = /* @__PURE__ */ g({
  __name: "CuAvatar",
  props: {
    src: { default: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" },
    srcSet: {},
    alt: { default: "" },
    icon: {},
    size: { default: "default" },
    shape: { default: "circle" },
    fit: { default: "cover" }
  },
  setup(t) {
    const e = t, o = C(!1), n = l(() => {
      const s = {
        "cu-avatar": !0,
        [`cu-avatar--${e.size}`]: typeof e.size == "string",
        [`cu-avatar--${e.shape}`]: !0,
        "cu-avatar--icon": !!e.icon
      };
      return console.log(s), s;
    }), i = l(() => {
      let s;
      const f = parseInt(e.size);
      return isNaN(f) ? typeof e.size == "string" ? s = r(e.size) : s = "50px" : s = `${f}px`, {
        width: s,
        height: s,
        objectFit: e.fit
      };
    }), r = (s) => {
      switch (s) {
        case "small":
          return "30px";
        case "default":
          return "50px";
        case "large":
          return "70px";
        default:
          return "50px";
      }
    }, u = l(() => ({
      objectFit: e.fit
    }));
    v(() => e.src, () => o.value = !1);
    const m = () => {
      o.value = !0;
    };
    return (s, f) => (c(), p("div", {
      class: b(["cu-avatar", n.value]),
      style: y(i.value)
    }, [
      s.src && !o.value ? (c(), p("img", {
        key: 0,
        src: s.src,
        srcset: s.srcSet,
        alt: s.alt,
        style: y(u.value),
        onError: m
      }, null, 44, O)) : s.icon ? (c(), p("div", W, [
        (c(), T(N(s.icon)))
      ])) : L(s.$slots, "default", { key: 2 })
    ], 6));
  }
});
k.install = (t) => (t.component("CuAvatar", k), t);
const _ = /* @__PURE__ */ g({
  __name: "CuMessage",
  props: {
    type: { default: "sent" },
    content: { default: "" },
    textAlign: { default: "start" },
    sentBorderRadius: { default: "26px 6px 26px 26px" },
    receivedBorderRadius: { default: "6px 26px 26px 26px" }
  },
  setup(t) {
    const e = t, o = l(() => ({
      "cu-message--sent": e.type === "sent",
      "cu-message--received": e.type === "received"
    })), n = l(() => ({
      textAlign: e.textAlign,
      borderRadius: e.type === "sent" ? e.sentBorderRadius : e.receivedBorderRadius
    }));
    return (i, r) => (c(), p("div", {
      class: b(["cu-message", o.value]),
      style: y(n.value)
    }, [
      L(i.$slots, "default")
    ], 6));
  }
});
_.install = (t) => (t.component("CuMessage", _), t);
const q = ["disabled", "readonly", "placeholder", "maxlength"], G = {
  key: 0,
  class: "word-limit"
}, $ = 20, B = /* @__PURE__ */ g({
  __name: "CuInput",
  props: {
    placeholder: { default: "Please input" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    maxLength: { default: 0 },
    customStyle: { default: () => ({}) },
    autosize: { default: void 0 }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "change"],
  setup(t, { emit: e }) {
    const o = {
      borderRadius: "10px",
      padding: "10px"
      // 您可以在这里添加更多默认样式
    }, n = t, i = l(() => ({ ...o, ...n.customStyle })), r = e, u = C(null), m = l(() => [
      "cu-input-container",
      { "is-disabled": n.disabled, "is-readonly": n.readonly }
    ]), s = l(() => ["cu-textarea"]), f = l(() => n.maxLength > 0), S = C(0), h = () => {
      const a = u.value;
      if (!a || !n.autosize)
        return;
      const d = n.autosize, I = d.minRows || 1, M = d.maxRows || 1 / 0;
      a.style.height = "auto";
      const V = Math.min(Math.max(a.scrollHeight, I * $), M * $);
      a.style.height = `${V}px`;
    };
    v(() => n.placeholder, h), v(() => n.autosize, h);
    const R = (a) => {
      if (!u.value)
        return;
      const d = u.value.value;
      S.value = d.length, h(), r("input", d), r("update:modelValue", d);
    }, w = (a) => {
      r("focus", a);
    }, E = (a) => {
      r("blur", a);
    }, A = (a) => {
      r("change", a);
    };
    return j(() => {
      F(() => h());
    }), v(() => n.placeholder, h), (a, d) => (c(), p("div", {
      class: b(["cu-input-container", m.value])
    }, [
      D("textarea", H({
        ref_key: "textarea",
        ref: u,
        class: s.value
      }, a.$attrs, {
        disabled: a.disabled,
        readonly: a.readonly,
        placeholder: a.placeholder,
        style: i.value,
        onInput: R,
        onFocus: w,
        onBlur: E,
        onChange: A,
        maxlength: a.maxLength
      }), null, 16, q),
      f.value ? (c(), p("span", G, x(S.value) + " / " + x(a.maxLength), 1)) : P("", !0)
    ], 2));
  }
});
B.install = (t) => (t.component("CuInput", B), t);
const J = [
  z,
  k,
  _,
  B
];
function K(t) {
  const e = document.documentElement;
  t === "dark" ? (e.classList.add("theme-dark"), e.classList.remove("theme-light")) : (e.classList.add("theme-light"), e.classList.remove("theme-dark"));
}
const Q = (t, e = {}) => {
  const o = e.defaultTheme || "light";
  K(o), J.forEach((n) => {
    t.use(n);
  });
}, X = {
  install: Q
};
export {
  k as CuAvatar,
  z as CuButton,
  B as CuInput,
  _ as CuMessage,
  X as default
};
