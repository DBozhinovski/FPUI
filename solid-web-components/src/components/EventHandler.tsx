import { customElement, noShadowDOM } from "solid-element";
import "./Counter.css";

customElement("c-event-handler", {}, (props, { element }) => {
  noShadowDOM();

  const onClick = () => {
    console.log("onclick");

    if (element.handleClick) {
      element.handleClick();
    } else {
      alert("I'm a fallback alert");
    }
  };

  return (
    <div>
      <button onClick={onClick}>Click thingie</button>
    </div>
  );
});
