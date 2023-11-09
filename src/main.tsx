import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import style from "./index.css";

class XPoll extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const styleTag = document.createElement("style");
    styleTag.innerHTML = style;
    this.shadowRoot?.appendChild(styleTag);

    const question = this.getAttribute("question") ?? "";

    const options = this.querySelectorAll("x-option");

    const texts: string[] = [];
    options.forEach((option) => {
      if (option.textContent) {
        texts.push(option.textContent);
      }
    });

    const poll = {
      question: question,
      options: texts,
    };

    ReactDOM.createRoot(mountPoint).render(
      <React.StrictMode>
        <App config={poll} />
      </React.StrictMode>
    );
  }
}

class XOption extends HTMLElement {
  constructor() {
    super();
  }
}

window.customElements.define("x-poll", XPoll);
window.customElements.define("x-option", XOption);
