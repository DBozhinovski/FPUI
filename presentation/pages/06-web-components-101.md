---
title: "Future-proof your UI: Building with web components"
---

# Web Components 101

<div grid="~ cols-2 gap-4">
<div class="half">

## Conceptually

<ul>
  <li v-click>DIY custom tags</li>
  <li v-click>You can distribute them</li>
  <li v-click>They work across frameworks</li>
</ul>

</div>

<div class="half">

## Under the hood

<ol>
  <li v-click>The Custom Elements API</li>
  <li v-click>Shadow DOM</li>
  <li v-click>HTML Templates</li>
</ol>

<span v-click>

_Check out MDN for the theory_

</span>
</div>

</div>

<style>
  h1 {
    font-weight: 900 !important;
    text-shadow: 0 0 12px #fff;
    font-size: 3.3em !important;
    text-align: center;
    margin: 32px 0;
  }


  .half {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    li {
      font-size: 1.2em;
    }

    h2 {
      font-size: 1.8em;
      background: linear-gradient(to right,rgb(138, 83, 28), rgb(138, 83, 28));
      padding: 5px;
      font-weight: 900;
      margin-bottom: 20px;
    }
  }
</style>

<!--
- DIY custom tags
- custom my-label
- work everywhere

- custom element = creation, naming, registration
- shadow dom - isolation
- html templates / slots - templates and children
-->
