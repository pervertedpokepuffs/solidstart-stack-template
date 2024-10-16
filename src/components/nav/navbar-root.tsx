import { Component, JSX, splitProps } from "solid-js";
import { InteractType, NavbarProvider } from "./navbar-context";

export type NavbarRootProps = {
    interactType: InteractType;
} & JSX.IntrinsicElements["div"];

export const Root: Component<NavbarRootProps> = (props) => {
    const [local] = splitProps(props, ["children"]);

    return <NavbarProvider>{local.children}</NavbarProvider>;
};
