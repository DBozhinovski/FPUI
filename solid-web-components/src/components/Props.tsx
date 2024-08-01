import { customElement } from "solid-element";

customElement("c-props", { myMessage: "hello world!" }, (props) => {
  return <h1>{props.myMessage}</h1>;
});
