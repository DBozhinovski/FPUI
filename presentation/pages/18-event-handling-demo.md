---
layout: iframe-left
url: ../demos/03-event-handling.html
---

# The Demo: Event Handling (Property)

- An external script selects `c-event-handler` and assigns a function to its `handleClick` property.
- When you click the button _inside_ the web component:
  1.  The internal `onClick` runs.
  2.  It checks for and calls the external `element.handleClick()`.
  3.  The external function updates the text below the button.
