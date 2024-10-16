import { Component, JSX, splitProps } from "solid-js";
import { solidTwMerge } from "../../utils/solidTwMerge";
import { useNavbar } from "./navbar-context";

export const Bar: Component<JSX.IntrinsicElements["div"]> = (props) => {
    const [local, styling, rest] = splitProps(
        props,
        ["children"],
        ["class", "classList"],
    );

    const { setTopNavbarRef } = useNavbar();

    const classStr = solidTwMerge(styling, [
        "backdrop-blur-sm",
        "dark:text-slate-300",
    ]);

    return (
        <div ref={setTopNavbarRef} {...rest} class={classStr}>
            {local.children}
        </div>
    );
};
