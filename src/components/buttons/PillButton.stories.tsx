import type { Meta, StoryObj } from "storybook-solidjs";

import { PillButton } from "./PillButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
    title: "Buttons/PillButton",
    component: PillButton,
    argTypes: {
        buttonColor: {
            options: ["primary", "secondary", "tertiary", ""],
            control: { type: "radio" },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof PillButton>;

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
