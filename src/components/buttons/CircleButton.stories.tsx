import { Icon } from "solid-heroicons";
import { clipboard, cloudArrowUp, plus } from "solid-heroicons/outline";
import type { Meta, StoryObj } from "storybook-solidjs";
import { CircleButton } from "./CircleButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
    title: "Buttons/CircleButton",
    component: CircleButton,
    argTypes: {
        buttonColor: {
            options: ["primary", "secondary", "tertiary", ""],
            control: { type: "radio" },
        },
        children: {
            options: ["plus", "clipboard", "upload"],
            mapping: {
                plus: <Icon path={plus} class="size-4" />,
                clipboard: <Icon path={clipboard} class="size-4" />,
                upload: <Icon path={cloudArrowUp} class="size-4" />,
            },
            control: { type: "radio" },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Default: Story = {
    args: {
        children: "plus",
        buttonColor: "",
    },
};
export const Primary: Story = {
    args: {
        children: "plus",
        buttonColor: "primary",
    },
};
export const Secondary: Story = {
    args: {
        children: "plus",
        buttonColor: "secondary",
    },
};
export const Tertiary: Story = {
    args: {
        children: "plus",
        buttonColor: "tertiary",
    },
};
