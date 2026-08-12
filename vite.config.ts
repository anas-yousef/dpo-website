import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const base =
    command === "build" && repositoryName ? `/${repositoryName}/` : "/";

  return {
    base,
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
  };
});
