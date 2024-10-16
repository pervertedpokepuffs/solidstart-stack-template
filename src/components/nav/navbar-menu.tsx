import { Component, createEffect, createMemo, JSX, Show, splitProps } from "solid-js";
import { twJoin } from "tailwind-merge";
import { solidTwMerge } from "../../utils/solidTwMerge";
import { useNavbar } from "./navbar-context";

export type MenuProps = JSX.IntrinsicElements["div"];

export const Menu: Component<MenuProps> = (props) => {
    const [local, styling] = splitProps(
        props,
        ["children"],
        ["class", "classList"],
    );

    const { topNavbarRef, isMenuOpen } = useNavbar();

    const getMenuHeight = () => {
        const navbarBottom =
            topNavbarRef()?.getBoundingClientRect().bottom || 0;
        const windowHeight = document.documentElement.clientHeight;
        return windowHeight - navbarBottom;
    };

    const classStr = createMemo(() => solidTwMerge(
        styling,
        twJoin(
            "backdrop-blur-sm",
            "w-10/12 sm:w-96",
            "absolute",
            "transform",
            "transition-transform",
            "overflow-y-hidden hover:overflow-y-auto",
            "overflow-x-hidden"
        ),
        isMenuOpen() && "translate-x-0",
        !isMenuOpen() && "-translate-x-full",
    ));

    createEffect(() => console.log(isMenuOpen(), classStr()));

    return (
        <div
            {...props}
            class={classStr()}
            style={{
                height: `${getMenuHeight()}px`,
            }}
        >
            {local.children}
        </div>
    );
};
