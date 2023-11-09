import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const poll = {
  question: "test",
  options: [
    "tes1",
    "tes2",
    "test3"
  ]
}

class XPoll extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["config"];
  }

  connectedCallback() {
    ReactDOM.createRoot(document.getElementById("root")!).render(
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
window.customElements.define("x-option", XOption)


