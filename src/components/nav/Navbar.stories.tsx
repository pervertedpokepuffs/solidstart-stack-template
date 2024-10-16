import type { Meta, StoryObj } from "storybook-solidjs";

import { Icon } from "solid-heroicons";
import { bars_3, xMark } from "solid-heroicons/outline";
import Navbar from "./Navbar";

const NavbarStory = () => (
    <Navbar.Root interactType="click">
        <Navbar.Bar>
            <Navbar.MenuTrigger>
                <Navbar.MenuTriggerOpenIcon>
                    <Icon class="size-10" path={bars_3} />
                </Navbar.MenuTriggerOpenIcon>
                <Navbar.MenuTriggerCloseIcon>
                    <Icon class="size-10" path={xMark} />
                </Navbar.MenuTriggerCloseIcon>
            </Navbar.MenuTrigger>
        </Navbar.Bar>
        <Navbar.Menu>
            <img class="h-full object-none object-left" src="https://icatcare.org/app/uploads/2018/07/Elderly-cats.png" />
        </Navbar.Menu>
    </Navbar.Root>
);

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
    title: "UI/Navbar",
    component: NavbarStory,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
    tags: ["autodocs"],
} satisfies Meta<typeof NavbarStory>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Default: Story = {};
