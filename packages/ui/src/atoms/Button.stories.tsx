import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    component: Button,
    args: {
        children: "Click me",
        variant: "primary",
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["primary", "secondary"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
};
