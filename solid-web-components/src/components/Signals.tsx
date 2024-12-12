import { customElement, noShadowDOM } from "solid-element";
import { createSignal, createEffect, onMount } from "solid-js";

customElement("c-signals", { initialCount: "0" }, (props, { element }) => {
  noShadowDOM();

  const initialCount = parseInt(props.initialCount);

  const [count, setCount] = createSignal(initialCount);

  onMount(() => {
    element.count = count;
    element.setCount = setCount;

    element.addEventListener("set-count", (event: CustomEvent) => {
      setCount(parseInt(event.detail.count));
    });
  });

  createEffect(() => {
    element.dispatchEvent(
      new CustomEvent("count-set", { detail: { count: count() } })
    );
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() - 1)}>Decrement</button>
    </div>
  );
});
