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

<div class="warning">

warning: very biased takes

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

  .warning {
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    color: #ff9933;
  }
</style>

<!-- During my research, I discovered solid element. While it compromises on some things due to the nature of web components, it's a solution that's a perfect fit for out needs. -->
