import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "frank-pn",
    project: "jsm_iphone15"
  }), sentryVitePlugin({
    org: "frank-pn",
    project: "jsm_iphone15"
  }), sentryVitePlugin({
    org: "frank-pn",
    project: "jsm_iphone15"
  })],

  build: {
    sourcemap: true
  }
})