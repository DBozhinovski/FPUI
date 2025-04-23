---
layout: center
title: "Future-proof your UI: Building with web components"
---

# Event Handling (Property Method)

```tsx {1|2|3-11|all}
// This approach exposes a handler function **as a property** on the custom element.
customElement("c-event-handler", {}, (props, { element }) => {
  const onClick = () => {
    console.log("Internal click detected");
    // Check if the consumer provided a handler property
    if (element.handleClick) {
      element.handleClick(); // Call the externally provided handler
    } else {
      alert("I'm a fallback alert"); // Default behavior
    }
  };

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});
```

---

# How to use it

```html
<c-event-handler id="my-handler"></c-event-handler>

<script>
  const handler = document.getElementById("my-handler");
  // Assign the function to the element's property
  handler.handleClick = () => {
    alert("External handler called!");
  };
</script>
```

**Caveats ⚠️**

- `onclick` also works!
- `CustomEvent` does too, which is generally preferred.

---

# State

```tsx {1|2|8|11-15|all}
// We can use `createSignal` (and other Solid primitives) directly inside the component
import { createSignal } from "solid-js";
import { customElement, noShadowDOM } from "solid-element";

customElement("c-counter", {}, () => {
  noShadowDOM();
  // Use createSignal just like in a normal Solid component
  const [count, setCount] = createSignal(0);

  return (
    <div id="counter">
      <button onClick={() => setCount(count() - 1)}>-</button>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
});
```

---

# Exposing state to the outside world

```ts
onMount(() => {
  // 1. Expose properties
  element.count = count;
  element.setCount = setCount;
  // 2. Listen for incoming event
  element.addEventListener("set-count", (e: CustomEvent) => {
    setCount(parseInt(e.detail.count));
  });
});

// 3. Dispatch outgoing event on change
createEffect(() => {
  element.dispatchEvent(
    new CustomEvent("count-set", { detail: { count: count() } }),
  );
}, [count]);
```

---

# Using exposed state

```html
<c-signals id="sig" initial-count="10"></c-signals>
<input type="number" id="in" value="10" />
<button onclick="sig.setCount(parseInt(in.value))">Set via Prop</button>
<button
  onclick="sig.dispatchEvent(new CustomEvent('set-count', { detail: { count: in.value } }))"
>
  Set via Event
</button>
<p>External Listener: <span id="out">?</span></p>
<script>
  sig.addEventListener("count-set", (e) => (out.textContent = e.detail.count));
</script>
```

<style>
  h1 {
    font-weight: 900 !important;
    text-shadow: 0 0 12px #fff;
    font-size: 2em !important;
    text-align: center;
    margin-bottom: 16px;
  }
  .slidev-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  code {
    font-size: 0.8em;
  }
  strong {
      color: #ff9933;
  }
</style>
