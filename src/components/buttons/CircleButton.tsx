import { Component, JSX, splitProps } from "solid-js";
import { twJoin } from "tailwind-merge";
import { solidTwMerge } from "../../utils/solidTwMerge";
import buttonCommonStyling from "./button-common-styling";

export type ButtonProps = {
    children: JSX.Element;
    buttonColor?: "primary" | "secondary" | "tertiary";
} & JSX.IntrinsicElements["button"];

export const CircleButton: Component<ButtonProps> = (props) => {
    const [local, styling, rest] = splitProps(
        props,
        ["children", "buttonColor"],
        ["classList", "class"],
    );

    const classStr = solidTwMerge(
        styling,
        twJoin(
            "rounded-full",
            "aspect-square",
            buttonCommonStyling(local.buttonColor),
        ),
    );

    return (
        <button {...rest} class={classStr}>
            {local.children}
        </button>
    );
};
