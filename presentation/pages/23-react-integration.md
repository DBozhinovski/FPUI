---
layout: center
title: "Future-proof your UI: Building with web components"
---

# React Integration

1.  **Import the bundle:** Import the generated JS bundle (`solid-web-components.es.js`) once in your React app.

```tsx {1-3|4}
// Typescript is gonna scream -
// We don't care, this is an R&D prototype.
// We're throwing it away anyway 🤷‍♂️
import "./components/solid-web-components.es"; // Import the bundle

function App() {
  /* ... */
}
```

---

2.  **Use the custom elements:** Use the tags directly in React JSX, passing attributes as needed.

```tsx {5|6-9|10|11}
// ... inside the App component's return
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<c-basic />} />
      <Route
        path="/props"
        element={<c-props my-message="hello from react!" />}
      />
      <Route path="/events" element={<c-event-handler />} />
      <Route path="/counter" element={<c-counter />} />
    </Routes>
  </BrowserRouter>
);
```

---

**Key Points:**

- Import the component bundle script (similar to a script tag).
- React treats them like regular HTML elements.
- You can still use everything React offers (use*, on* ...)

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

<!--
- Each page is a full web component
- Works against a test auth server
- Link to demo at the end of presentation-->
