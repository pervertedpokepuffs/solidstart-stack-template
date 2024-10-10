import { createSignal, splitProps } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs";
import { Button } from "../buttons/Button";
import { Toast } from "./Toast";
import { ToasterProvider, useToaster } from "./ToasterContext";

type StoryProps = {
    type: "success" | "error" | "loading" | "info" | (string & {});
};

const StoryComponent = (props) => {
    const toaster = useToaster();
    const types = ["success", "error", "loading", "info"];
    const [counter, setCounter] = createSignal(0);
    const incrementCounter = () => setCounter(counter() + 1);
    const handleOpenToast = () => {
        const toastType = !types.includes(props.type)
            ? types[Math.floor(Math.random() * types.length)]
            : props.type;
        const toastId = toaster?.create({
            title: `Hi! I'm ${toastType} toast #${incrementCounter()}!`,
            description: "Lorem Ipsum meow meow.",
            type: toastType,
        });
        if (toastType === "loading")
            setTimeout(() => {
                toaster?.update(toastId || "", {
                    title: "Finished loading!",
                    description: "Loading completed!",
                    type: "success",
                });
            }, 10000);
    };

    return (
        <>
            <Button onClick={handleOpenToast}>Click Me!</Button>
            <Toast />
        </>
    );
};

const ToastStory = (props: StoryProps) => {
    const [local, rest] = splitProps(props, ["type"]);

    return (
        <ToasterProvider>
            <StoryComponent type={local.type} />
        </ToasterProvider>
    );
};

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
    title: "UI/Toast",
    component: ToastStory,
    argTypes: {
        type: {
            options: ["success", "error", "loading", "info", "random"],
            control: { type: "select" },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ToastStory>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Random: Story = {
    args: {
        children: "Click Me!",
        type: "random",
    },
};

export const Info: Story = {
    args: {
        children: "Click Me!",
        type: "info",
    },
};

export const Loading: Story = {
    args: {
        children: "Click Me!",
        type: "loading",
    },
};

export const Success: Story = {
    args: {
        children: "Click Me!",
        type: "success",
    },
};

export const Error: Story = {
    args: {
        children: "Click Me!",
        type: "error",
    },
};
