---
layout: center
title: "Future-proof your UI: Building with web components"
---

# Slots (AKA. Children)

```tsx {1-2|3-19}
// Use standard HTML `<slot>` elements inside your
// Solid component for content projection.
import { customElement } from "solid-element";

customElement("c-slots", {}, () => {
  return (
    <div>
      <header>
        <slot name="header">{/* Named slot */}</slot>
      </header>
      <div>
        <slot>{/* Default slot */}</slot>
      </div>
      <footer>
        <slot name="footer">{/* Named slot */}</slot>
      </footer>
    </div>
  );
});
```

---

# Usage in HTML

```html
<c-slots>
  <h1 slot="header">Header</h1>
  <div>Content</div>
  <h3 slot="footer">Footer</h3>
</c-slots>
```

## Caveats ⚠️

- Slots natively work ONLY in the Shadow DOM
- But we can polyfill them easily

<style>
  h1 {
    font-weight: 900 !important; text-shadow: 0 0 12px #fff; font-size: 2em !important;
    text-align: center; margin-bottom: 16px;
  }

  h2 {
    margin-top: 20px;
  }

  .slidev-layout { display: flex; flex-direction: column; align-items: center; justify-content: center; }
  code { font-size: 0.8em; }
  strong { color: #ff9933; }
</style>
