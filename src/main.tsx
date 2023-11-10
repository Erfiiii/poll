import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import styles from "./index.css";
import { Config } from "./types.ts";

let appConfigs: Config[] = [];

const mountReactApp = (config: Config, mountPoint: HTMLDivElement) => {
  const root = ReactDOM.createRoot(mountPoint);
  root.render(
    <React.StrictMode>
      <App config={config} />
    </React.StrictMode>
  );
  return root;
};
class XPoll extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
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

    let root = mountReactApp(appConfigs[0], mountPoint);

    document.addEventListener("answer-selected", (e: CustomEventInit) => {
      appConfigs = appConfigs.filter((item) => item.question !== e.detail);

      setTimeout(() => {
        root.unmount();
        if (appConfigs.length) {
          root = mountReactApp(appConfigs[0], mountPoint);
        }
      }, 2000);
    });
  }
}

window.customElements.define("x-poll", XPoll);
