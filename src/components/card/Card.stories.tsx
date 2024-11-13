import type { Meta, StoryObj } from "storybook-solidjs";

import { Card } from "./Card";

export const TallCard: Story = {
    args: {
        children: "This is a tall card",
        cardStyle: "primary",
        width: "w-64", // Tailwind width class for medium width
        height: "h-96", // Tailwind height class for taller height
    },
};

const meta = {
    title: "Cards/Card",
    component: Card,
    argTypes: {
        cardStyle: {
            options: ["primary", "secondary", "tertiary", ""],
            control: { type: "radio" },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This is a default card",
        cardStyle: "",
    },
};
export const Primary: Story = {
    args: {
        children: "This is a primary card",
        cardStyle: "primary",
    },
};
export const Secondary: Story = {
    args: {
        children: "This is a secondary card",
        cardStyle: "secondary",
    },
};
export const Tertiary: Story = {
    args: {
        children: "This is a tertiary card",
        cardStyle: "tertiary",
    },
};