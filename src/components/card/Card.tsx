import { Component, JSX, splitProps } from "solid-js";
import { twJoin } from "tailwind-merge";
import { solidTwMerge } from "../../utils/solidTwMerge";
import cardCommonStyling from "./Card-common-styling";

export type CardProps = {
    children: JSX.Element;
    cardStyle?: "primary" | "secondary" | "tertiary";
    width?: string;    // Optional width prop for custom sizing
    height?: string;   // Optional height prop for custom sizing
} & JSX.IntrinsicElements["div"];

export const Card: Component<CardProps> = (props) => {
    const [local, styling, rest] = splitProps(
        props,
        ["children", "cardStyle", "width", "height"],  // Include width and height here
        ["classList", "class"]
    );

    const classStr = solidTwMerge(
        styling,
        twJoin("rounded-lg shadow-md", cardCommonStyling(local.cardStyle), local.width, local.height)
    );

    return (
        <div {...rest} class={classStr}>
            {local.children}
        </div>
    );
};