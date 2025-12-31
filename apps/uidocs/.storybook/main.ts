import type { StorybookConfig } from "@storybook/react-vite";

export default {
    stories: [
        "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: ["@storybook/addon-essentials"],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    core: {
        disableTelemetry: true
    }
} satisfies StorybookConfig;
