import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
} satisfies StorybookConfig;
