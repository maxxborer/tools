import "dotenv/config";
import { defineConfig } from "vite";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import react from "@vitejs/plugin-react-swc";
import linaria from "@linaria/vite";
import svgr from "vite-plugin-svgr";
import i18nextLoader from "vite-plugin-i18next-loader";
import missingLocales from "@boergrp/vite-plugin-missing-locales";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import type { UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const env = process?.env;
  const devPlugins = [
    eslint({
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: ["node_modules", "dist"],
    }),
    missingLocales(),
    tsconfigPaths(),
  ];

  return {
    define: {
      $env: {
        ...env,
        isDev: env?.NODE_ENV === "development",
        isProd: env?.NODE_ENV === "production",
      },
    },
    plugins: [
      // jsxRuntime: 'classic',
      react(),
      nodeResolve({
        extensions: [".jsx", ".js", ".ts", ".tsx"],
      }),
      linaria({
        // include: ["**/*.{js,jsx,ts,tsx}"],
        // babelOptions: {
        //   presets: [
        //     [
        //       "@babel/preset-env",
        //       {
        //         targets: {
        //           node: "current",
        //         },
        //       },
        //     ],
        //     "@babel/preset-typescript",
        //     "@babel/preset-react",
        //   ],
        // },
      }),
      svgr(),
      i18nextLoader({
        paths: ["./src/locales"],
        namespaceResolution: "basename",
      }),
      ...(command === "serve" ? devPlugins : []),
    ],
    build: {
      target: command === "serve" ? "modules" : "es2015",
    },
    test: {
      environment: "jsdom",
    },
  } as UserConfig;
});
