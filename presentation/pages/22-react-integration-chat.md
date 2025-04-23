---
layout: center
title: "Future-proof your UI: Building with web components"
---

## 🗓️ Week 5

### = The Big Test: Can it react? =

<div class="chatbox">

  <div class="message-container-left" v-click>
    <span class="emoji">👨‍💻</span>
    <div class='sb-right'> Okay, cool. That covers most of what we need. How would that look like if used directly in react? </div>
  </div>

  <div class="message-container-right" v-click>
    <div class='sb-left'> Let's find out! </div>
    <span class="emoji">🧔‍♂️</span>
  </div>

</div>

> Cast: 👨‍💻 - Engineering 🧔‍♂️ - Yours truly

<style>
  h1 { font-weight: 900 !important; text-shadow: 0 0 12px #fff; font-size: 2em !important; text-align: center; margin-bottom: 12px; }
  h2 { text-align: center; font-size: 1em !important; }
  h3 { text-align: center; font-size: 1.2em !important; color: #ff9933; margin-bottom: 24px; }
  .slidev-layout { display: flex; flex-direction: column; align-items: center; justify-content: center; }
  blockquote { position: absolute; bottom: 20px; right: 20px; font-weight: 500; }
  .chatbox { display: flex; flex-direction: column; padding: 20px 0; width: fit-content; margin: 0 auto; gap: 10px; }
  .message-container-left, .message-container-right { display: flex; align-items: flex-end; gap: 8px; max-width: 80%; }
  .message-container-left { align-self: flex-start; align-items: flex-start; }
  .message-container-right { align-self: flex-end; }
  .sb-left, .sb-right { padding: 10px 15px; border-radius: 15px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); flex-grow: 1; }
  .emoji { font-size: 1.6em; line-height: 1; }
  .sb-left { text-align: right; background-color: #ff9933; border-bottom-right-radius: 0px; }
  .sb-right { text-align: left; background-color: #400D5F; border-top-left-radius: 0px; }
  strong { color: #f0f0f0; } /* Adjust contrast if needed */
</style>
