/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
