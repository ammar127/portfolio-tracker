import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "src": path.resolve(__dirname, "./src/"),
        "components": `${path.resolve(__dirname, "./src/components/")}`,
        "assets": `${path.resolve(__dirname, "./src/assets/")}`,
        "hooks": `${path.resolve(__dirname, "./src/hooks/")}`,
        "routes": `${path.resolve(__dirname, "./src/routes/")}`,
        "services": `${path.resolve(__dirname, "./src/services/")}`,
        "utils": `${path.resolve(__dirname, "./src/utils/")}`,
        "views": `${path.resolve(__dirname, "./src/views/")}`,
      },
    },
  })
}
