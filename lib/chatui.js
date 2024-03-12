import { defineComponent as i, computed as l, openBlock as m, createElementBlock as d, normalizeClass as p, normalizeStyle as h, toDisplayString as y } from "vue";
const s = /* @__PURE__ */ i({
  __name: "CuButton",
  props: {
    label: {},
    primary: { type: Boolean, default: !1 },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = t, n = e, c = l(() => ({
      "cu-button": !0,
      "cu-button--primary": o.primary,
      "cu-button--secondary": !o.primary,
      [`cu-button--${o.size || "medium"}`]: !0
    })), a = l(() => ({
      backgroundColor: o.backgroundColor
    })), r = () => {
      n("click", 1);
    };
    return (u, C) => (m(), d("button", {
      type: "button",
      class: p(c.value),
      onClick: r,
      style: h(a.value)
    }, y(u.label), 7));
  }
});
s.install = (t) => (t.component("CuButton", s), t);
const b = [
  s
];
function f(t) {
  const e = document.documentElement;
  t === "dark" ? (e.classList.add("theme-dark"), e.classList.remove("theme-light")) : (e.classList.add("theme-light"), e.classList.remove("theme-dark"));
}
const k = (t, e = {}) => {
  const o = e.defaultTheme || "light";
  f(o), b.forEach((n) => {
    t.use(n);
  });
}, B = {
  install: k
};
export {
  s as CuButton,
  B as default
};
