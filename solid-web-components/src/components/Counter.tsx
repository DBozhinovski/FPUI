import { createSignal } from "solid-js";
import { customElement, noShadowDOM } from "solid-element";
import "./Counter.css";

customElement("c-counter", {}, () => {
  noShadowDOM();
  const [count, setCount] = createSignal(0);

  return (
    <div id="counter">
      <button onClick={() => setCount(count() - 1)}>-</button>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
});
