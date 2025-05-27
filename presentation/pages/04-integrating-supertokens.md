---
layout: center
title: "Future-proof your UI: Building with web components"
---

# How SuperTokens integrates <br /> with web apps

### (from the perspective of a user)

<div class="container">
  <div class="panel"> 
    <h2 class="text-center" v-click="1"><span>👱</span> <br/> (likes functions)</h2>
      <ol>  
        <li v-click="2">Installs our JS SDK</li> 
        <li v-click="3">Writes some functions</li>
        <li v-click="4">✅</li>
      </ol>
  </div>
  <div class="panel"> 
    <h2 class="text-center" v-click="1"><span>🧑‍🦱</span> <br/> (needs it yesterday)</h2>
    <ol>
      <li v-click="2">Goes for our pre-built UI</li>
      <li v-click="3">React? - Installs our ⚛️ SDK - ✅</li>
      <li v-click="4" v-mark="{ at: 5, color: '#ff9933', type: 'box' }">!React? - DIY UI - ❌</li>
    </ol>
  </div>
</div>

<style>
  h1 {
    font-weight: 900 !important;
    text-shadow: 0 0 12px #fff;
    font-size: 2.3em !important;
    text-align: center;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  li {
    font-size: 1.2em;
  }

  h3 {
    text-align: center;
    font-size: 1em;
    margin-bottom: 24px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    min-width: 100wv;
    grid-gap: 30px;

    h2 {
      font-size: 0.9em;
      padding-bottom: 8px;
      color: #ff9933;
    
      span {
        font-size: 2em;
      }
    }
  }

  .panel {
    /* font-size: 1.2em; */
  }
</style>

<!--
- Two types of users
- Need it yesterday
- have react - use prebuilt
- don't have react - use a workaround
 -->
