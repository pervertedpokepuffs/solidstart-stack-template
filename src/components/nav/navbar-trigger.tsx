import { Component, JSX, Show, splitProps } from "solid-js";
import { twJoin } from "tailwind-merge";
import { solidTwMerge } from "../../utils/solidTwMerge";
import { useNavbar } from "./navbar-context";

export type NavbarMenuTriggerProps = {
    children: JSX.Element;
    delay?: number;
} & JSX.IntrinsicElements["button"];

export const MenuTrigger = (props: NavbarMenuTriggerProps) => {
    const { interactType, openMenu, toggleMenu } = useNavbar();
    const [local, styling, rest] = splitProps(
        props,
        ["children", "delay"],
        ["class", "classList"],
    );
    const classStr = solidTwMerge(
        styling,
        twJoin(
            "transition-color",
            "backdrop-blur-sm",
            "hover:bg-slate-200 dark:hover:bg-slate-700",
            "h-full",
            "aspect-square",
            "flex",
            "items-center justify-center",
        ),
    );

    if (interactType === "click")
        return (
            <button {...rest} class={classStr} onClick={toggleMenu}>
                {local.children}
            </button>
        );

    return (
        <button {...rest} class={classStr} onMouseEnter={openMenu}>
            {local.children}
        </button>
    );
};

export const MenuTriggerOpenIcon: Component<{ children: JSX.Element }> = (
    props,
) => {
    const { isMenuOpen } = useNavbar();

    return <Show when={!isMenuOpen()}>{props.children}</Show>;
};

export const MenuTriggerCloseIcon: Component<{ children: JSX.Element }> = (
    props,
) => {
    const { isMenuOpen } = useNavbar();

    return <Show when={isMenuOpen()}>{props.children}</Show>;
};
