import { customElement } from "solid-element";

// We have to name this component "c-basic" because the custom element name must have a hyphen in it.
// The biggest reason for this is to differentiate between custom elements and built-in elements, due to how the DOM works.
customElement("c-basic", {}, () => {
  return <h1>Hello world!</h1>;
});
