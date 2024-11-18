import type { Meta, StoryObj } from "storybook-solidjs";

import Card from "./Card";

const meta = {
    title: "Cards/Card",
    component: Card,
    tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This is a default card",
    },
};