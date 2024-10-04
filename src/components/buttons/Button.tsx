import clsx from "clsx";
import { Component, JSX, splitProps } from "solid-js";
import { solidTwMerge } from "../../utils/solidTwMerge";

export type ButtonProps = {
    children: JSX.Element;
    buttonColor?: "primary" | "secondary" | "tertiary";
} & JSX.IntrinsicElements["button"];

export const Button: Component<ButtonProps> = (props) => {
    const [local, styling, rest] = splitProps(
        props,
        ["children", "buttonColor"],
        ["classList", "class"],
    );

    const classStr = solidTwMerge(
        styling,
        clsx(
            [
                "transition-color",
                "duration-200",
                "p-4",
                "border",
                "border-slate-200",
                "hover:border-slate-500",
                "rounded-2xl",
            ],
            {
                "bg-slate-50 text-current hover:bg-slate-200 active:bg-slate-300 focus:ouline-none focus:ring focus:ring-slate-200": !local?.buttonColor,
                "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-300": local?.buttonColor == "primary",
                "bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-secondary-300": local?.buttonColor == "secondary",
                "bg-tertiary-500 text-white hover:bg-tertiary-600 active:bg-tertiary-700 focus:outline-none focus:ring focus:ring-tertiary-300": local?.buttonColor == "tertiary",
            },
        ),
    );

    return (
        <button {...rest} class={classStr}>
            {local.children}
        </button>
    );
};
