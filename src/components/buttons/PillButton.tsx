import clsx from "clsx";
import { Component, JSX, splitProps } from "solid-js";
import { solidTwMerge } from "../../utils/solidTwMerge";
import buttonCommonStyling from "./button-common-styling";

export type ButtonProps = {
    children: JSX.Element;
    buttonColor?: "primary" | "secondary" | "tertiary";
} & JSX.IntrinsicElements["button"];

export const PillButton: Component<ButtonProps> = (props) => {
    const [local, styling, rest] = splitProps(
        props,
        ["children", "buttonColor"],
        ["classList", "class"],
    );

    const classStr = solidTwMerge(
        styling,
        clsx("rounded-full", buttonCommonStyling(local.buttonColor)),
    );

    return (
        <button {...rest} class={classStr}>
            {local.children}
        </button>
    );
};
