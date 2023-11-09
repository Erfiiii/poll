import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import style from "./index.css";
import { Config } from "./types.ts";

let appConfigs: Config[] = [];
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
      if (option.getAttribute("option")) {
        // eslint-disable-next-line
        // @ts-ignore
        texts.push(option.getAttribute("option"));
      }
    });

    const poll = {
      question: question,
      options: texts,
    };

    if (appConfigs) {
      if (appConfigs.find((item) => item.question === question)) {
        return;
      }
      appConfigs.push(poll);
    } else {
      appConfigs = [poll];
    }

    ReactDOM.createRoot(mountPoint).render(
      <React.StrictMode>
        <App config={poll} />
      </React.StrictMode>
    );
  }
}

window.customElements.define("x-poll", XPoll);
