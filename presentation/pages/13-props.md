---
layout: center
title: "Future-proof your UI: Building with web components"
---

# Props (Attributes)

```tsx {1-2|4-5|7-16}
// Define props and their default values as the
// second argument to `customElement`.

// `solid-element` automatically maps
// these **camelCase** props to **kebab-case** HTML attributes.

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

## Caveats ⚠️

- We're limited by the data type:
  - String
  - Booleans (kinda)
- For anything fancier:
  - Serialize/deserialize
  - Pass via DOM node

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
