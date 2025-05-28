---
layout: iframe-left
url: ../demos/03-event-handling.html
---

# Demo: Event Handling

<div>

👈 Live output of the `c-props` web component.

</div>

<ol>
  <li v-click="1">

`c-event-handler` is assigned a function to its `handleClick` property.

  </li>
  <li v-click="2">

When you click the button _inside_ the web component:

<ol>

  <li v-click="3">

It calls the external `element.handleClick`.

  </li>

  <li v-click="4">

The external function updates the text below the button.

  </li>

  </ol>

  </li>

</ol>
