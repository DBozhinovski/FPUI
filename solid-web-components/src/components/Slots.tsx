import { customElement } from "solid-element";

customElement("c-slots", {}, () => {
  return (
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <div>
        <slot></slot>
      </div>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  );
});
