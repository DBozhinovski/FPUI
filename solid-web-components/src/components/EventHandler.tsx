import { createSignal } from "solid-js";
import { customElement, noShadowDOM } from "solid-element";
import "./Counter.css";

customElement("c-event-handler", {}, (props, { element }) => {
  noShadowDOM();

  const onClick = () => {
    console.log("onclick");

    if (element.onclick) {
      element.onclick();
    } else {
      alert("I'm a fallback alert");
    }
  };

  return (
    <div>
      <button>Click thingie</button>
    </div>
  );
});
