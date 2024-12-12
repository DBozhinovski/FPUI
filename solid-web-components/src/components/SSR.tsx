import { customElement, noShadowDOM } from "solid-element";
// import { renderToString } from "solid-js/web";

const Component = () => <div>Hello world (client-side)!</div>;

customElement("c-ssr", {}, (props, { element }) => {
  noShadowDOM();

  element.innerHTML = "";

  return <Component />;
});

// export const getString = () => renderToString(Component); --> This goes on the server
