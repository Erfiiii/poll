/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const common = {
    plugins: [react()],
    test: {
      environment: "jsdom",
    },
  };

  if (command === "build") {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, "./src/main.tsx"),
          name: "MyLib",
          fileName: "my-lib",
        },
      },
      define: { "process.env.NODE_ENV": '"production"' },
    };
  } else {
    return common;
  }
});
