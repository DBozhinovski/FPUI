---
layout: center
title: "Future-proof your UI: Building with web components"
---

# How we got there

## 🗓️ Week 1

### = Let's try using Web Components =

<div class="chatbox">

  <div class="message-container-left" v-click>
    <span class="emoji">👨‍💻</span>
    <div class='sb-right'> Can we <strong>not</strong> use the native API? </div>
  </div>

  <div class="message-container-right" v-click>
    <div class='sb-left'> Yup, let's try <strong>solid</strong> and <strong>solid-element</strong>! </div>
    <span class="emoji">🧔‍♂️</span>
  </div>

</div>

> Cast: 👨‍💻 - Engineering 🧔‍♂️ - Yours truly

<style>
  h1 {
    font-weight: 900 !important;
    text-shadow: 0 0 12px #fff;
    font-size: 2em !important;
    text-align: center;
    margin-bottom: 12px;
  }

  h2 {
    text-align: center;
    font-size: 1em !important;
  }

  h3 {
    text-align: center;
    font-size: 1.2em !important;
    color: #ff9933;
    margin-bottom: 24px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    font-size: 1.2em;
    width: 500px;
  }

  .slidev-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  blockquote {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-weight: 500;
  }

  .chatbox {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    width: fit-content; 
    margin: 0 auto; 
    gap: 10px; 
  }

  .message-container-left,
  .message-container-right {
    display: flex;
    align-items: flex-end; /* Align emoji baseline with bubble bottom */
    gap: 8px; /* Space between emoji and bubble */
    max-width: 80%; /* Allow container to take space */
  }

  .message-container-left {
    align-self: flex-start; /* Align container to the left */
    align-items: flex-start; /* Vertically center emoji and bubble */

    strong {
      color: #ff9933;
    }
  }

  .message-container-right {
    align-self: flex-end; /* Align container to the right */

    strong {
      color: #666;
    }
  }

  .sb-left,
  .sb-right {
    padding: 10px 15px;
    border-radius: 15px;
    /* max-width: 70%; /* Max width now on container */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    /* font-weight: 700; */
    flex-grow: 1; /* Allow bubble to take available space */
  }

  .emoji {
    font-size: 1.6em; /* Make emoji slightly larger */
    line-height: 1; /* Adjust line height for alignment */
  }

 
  .sb-left {
    /* align-self: flex-end; /* Now handled by container */
    text-align: right;
    background-color: #ff9933;
    border-bottom-right-radius: 0px; /* Sharp corner */
  }

  .sb-right {
    /* align-self: flex-start; /* Now handled by container */
    text-align: left;
    background-color: #400D5F;
    border-top-left-radius: 0px; /* Sharp corner */
  }

</style>
