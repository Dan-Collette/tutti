import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        util: "util/"
      },
    },
    define: {
      'process.env.VITE_SPOTIFY_CLIENT_ID': `'${env.VITE_SPOTIFY_CLIENT_ID}'`,
      'process.env.VITE_SPOTIFY_CLIENT_SECRET': `'${env.VITE_SPOTIFY_CLIENT_SECRET}'`
    }
  }
});
