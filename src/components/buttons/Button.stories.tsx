import type { Meta, StoryObj } from "storybook-solidjs";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
    title: "Buttons/Button",
    component: Button,
    argTypes: {
        buttonColor: {
            options: ["primary", "secondary", "tertiary", ""],
            control: { type: "radio" },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Default: Story = {
    args: {
        children: "Click Me!",
        buttonColor: "",
    },
};
export const Primary: Story = {
    args: {
        children: "Click Me!",
        buttonColor: "primary",
    },
};
export const Secondary: Story = {
    args: {
        children: "Click Me!",
        buttonColor: "secondary",
    },
};
export const Tertiary: Story = {
    args: {
        children: "Click Me!",
        buttonColor: "tertiary",
    },
};
