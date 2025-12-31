import type { Preview } from "@storybook/react-vite";
import "./preview.css";

export default {
    tags: ["autodocs"],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
} satisfies Preview;
