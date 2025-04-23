---
layout: center
title: "Future-proof your UI: Building with web components"
---

# Basics: Solid turned web component

```tsx {1|3-7}
import { customElement } from "solid-element";

// We have to name this component "c-basic" because the
// custom element name must have a hyphen in it.
customElement("c-basic", {}, () => {
  return <h1>Hello world!</h1>;
});
```

<style>
  h1 {
    font-weight: 900 !important;
    text-shadow: 0 0 12px #fff;
    font-size: 2em !important;
    text-align: center;
    margin-bottom: 32px;
  }
  .slidev-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  code {
    font-size: 0.9em;
  }
  strong {
      color: #ff9933;
  }
</style>
