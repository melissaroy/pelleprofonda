/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  root: "components-library",
  plugins: [vue()],
  publicDir: "components-library/public",
});
