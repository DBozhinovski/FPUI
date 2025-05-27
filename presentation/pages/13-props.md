---
layout: center
title: "Future-proof your UI: Building with web components"
---

# Props (Attributes)

```tsx {3-10}
import { customElement } from "solid-element";

customElement(
  "c-props",
  { myMessage: "Default message!" }, // Define prop & default
  (props) => {
    // Access props here
    return <h1>{props.myMessage}</h1>;
  },
);
```

---

# Usage in HTML

```html
<c-props my-message="Hello from WebExpo!"></c-props>
```

## ⚠️ Caveats ⚠️

<ul>
  <li v-click>We're limited by the data type: String and Booleans only!</li>
  <li v-click>For anything fancier: Serialize/deserialize pass via the DOM node</li>
</ul>

<style>
  h1 {
    font-weight: 900 !important; text-shadow: 0 0 12px #fff; font-size: 2em !important;
    text-align: center; margin-bottom: 16px;
  }

  h2 {
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .slidev-layout { display: flex; flex-direction: column; align-items: center; justify-content: center; }
  code { font-size: 1.2em; }
  strong { color: #ff9933; }
</style>
