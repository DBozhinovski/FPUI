---
layout: center
title: "Future-proof your UI: Building with web components"
---

# Event Handling (one way)

```tsx {all|1|2-6}
customElement("c-event-handler", {}, (props, { element }) => {
  return (
    <div>
      <button onClick={element.handleClick}>Click Me</button>
    </div>
  );
});
```

<!--
This approach exposes a handler function **as a property** on the custom element.
-->

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

## ⚠️ Caveats ⚠️

<ul>
  <li v-click>

`onclick` and `addEventListener` also work!

  </li>
   <li v-click>

`CustomEvent` does too (if you need to pass data between Solid and the DOM).

  </li>
</ul>

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
    font-size: 1.2em;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  strong {
      color: #ff9933;
  }
</style>

---

# State

```tsx {all|1|5|8-12}
import { createSignal } from "solid-js";
import { customElement } from "solid-element";

customElement("c-counter", {}, () => {
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

<!--
We can use `createSignal` (and other Solid primitives) directly inside the component
-->

---

# Exposing state to the outside world

```ts{2-6|10-12}
onMount(() => {
  element.count = count;
  element.setCount = setCount;
  element.addEventListener("set-count", (e: CustomEvent) => {
    setCount(parseInt(e.detail.count));
  });
});

createEffect(() => {
  element.dispatchEvent(
    new CustomEvent("count-set", { detail: { count: count() } }),
  );
}, [count]);
```

<!--
onMount: 
1. Expose properties
2. Listen for incoming event



createEffect:

3. Dispatch outgoing event on change
-->

---

# Using exposed state

```html{1|4}
<c-signals></c-signals>

<script>
  const signalsDOMElement = document.querySelector("c-signals");
</script>
```

<ul>
  <li v-click>
  
`signalsDOMElement` can access count, setCount

  </li>
  <li v-click>
  
...and it also responds to `count-set` AND fires `set-count`
  
  </li>
</ul>

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
    font-size: 1.2em;
  }
  strong {
      color: #ff9933;
  }
</style>
