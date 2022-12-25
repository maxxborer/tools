import fg from 'fast-glob';
import path from 'path';
import { mergeConfig, UserConfig } from "vite";

const getStories = async () => {
  const paths = await fg.sync([path.resolve(`../**/*.stories.tsx`), '!**/node_modules']);
  return paths;
};

export default {
  // stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
  stories: async () => {
    const paths = [...await getStories()];
    return paths;
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-console",
    "storybook-addon-pseudo-states",
    "storybook-dark-mode"
  ],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import("../vite.config.js"))?.default?.resolve,
      // Add dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ["storybook-dark-mode"]
      // }
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
