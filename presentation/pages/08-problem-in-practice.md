---
layout: center
title: "Future-proof your UI: Building with web components"
---

# The issue in practice (and a solution!) 😎

````md magic-move
```ts
class MyGreeting extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.textContent = "Hello, World!";
    shadow.appendChild(wrapper);
  }
}

customElements.define("my-greeting", MyGreeting);
```

```tsx
import { customElement } from "[REDACTED]";

customElement("my-greeting", {}, () => {
  return <div>Hello, World!</div>;
});
```

```tsx
import { customElement } from "solid-element";

customElement("my-greeting", {}, () => {
  return <div>Hello, World!</div>;
});
```
````

<div class="solid" v-click="2">
  <img src="../logo.png" />
  <p>PSA: This is now a <br /> SolidJS presentation.</p>
</div>

<style>
  h1 {
    font-weight: 900 !important;
    text-shadow: 0 0 12px #fff;
    font-size: 3em !important;
    text-align: center;
    line-height: 1.3em;
    margin-bottom: 32px;
  }

  .solid {
    position: absolute;
    right: 60px;
    bottom: 40px;
    transform: rotate(-25deg);
    color: #0af;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  img {
    width: 130px;
    transform: rotate(-25deg);
  }
</style>

<!--
During my research, I discovered solid element. While it compromises on some things due to the nature of web components, it's a solution that's a perfect fit for out needs.
-->
