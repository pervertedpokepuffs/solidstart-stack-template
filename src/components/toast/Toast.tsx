import { Toast as ArkToast, Toaster } from "@ark-ui/solid";
import clsx from "clsx";
import { Icon } from "solid-heroicons";
import { xCircle } from "solid-heroicons/outline";
import { splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";
import { SolidStylingProps, solidTwMerge } from "../../utils/solidTwMerge";
import { useToaster } from "./ToasterContext";

export type ToastProps = {
    rootClass?: SolidStylingProps;
    titleClass?: SolidStylingProps;
    closeIconClass?: SolidStylingProps;
    descriptionClass?: SolidStylingProps;
};

/**
 * Use with { ToasterProvider, useToaster } from src/components/toast/ToasterContext.
 *
 * Should just include this element at the application root.
 * @returns Toast element.
 */
export const Toast = (props: ToastProps) => {
    const toaster = useToaster();
    const [styling, rest] = splitProps(props, [
        "rootClass",
        "titleClass",
        "closeIconClass",
        "descriptionClass",
    ]);

    const rootClass = solidTwMerge(
        styling.rootClass,
        clsx([
            "transition",
            "duration-500",
            "flex",
            "flex-col",
            "bg-white hover:bg-slate-50",
            "dark:text-white",
            "border",
            "border-slate-500",
            "shadow",
            "p-4",
            "rounded-xl",
            "z-40",
            "data-[first]:z-50 data-[first]:animate-slidedown",
            "group-hover:opacity-100 group-hover:scale-100 group-hover:transition-none",
            "group-hover:data-[first]:animate-none",
            "[&:nth-child(2)]:-translate-y-4 [&:nth-child(2)]:scale-90 [&:nth-child(2)]:opacity-75 group-hover:[&:nth-child(2)]:-translate-y-[125%]",
            "[&:nth-child(3)]:-translate-y-8 [&:nth-child(3)]:scale-75 [&:nth-child(3)]:opacity-50 group-hover:[&:nth-child(3)]:-translate-y-[250%]",
            "[&:nth-child(4)]:-translate-y-12 [&:nth-child(4)]:scale-50 [&:nth-child(4)]:opacity-25 group-hover:[&:nth-child(4)]:-translate-y-[375%]",
            "[&:nth-child(n+5)]:hidden",
        ]),
    );
    const titleClass = solidTwMerge(styling.titleClass, "min-w-64");
    const closeIconClass = solidTwMerge(
        styling.closeIconClass,
        "size-4 hover:text-red-500 transition-colors duration-300",
    );
    const descriptionClass = solidTwMerge(styling.descriptionClass, "text-sm");

    return (
        <Toaster class="group" toaster={toaster}>
            {(toast) => {
                const innerRootClass = twMerge(
                    rootClass,
                    clsx({
                        "bg-white dark:bg-slate-500 dark:hover:bg-slate-400 dark:text-white":
                            toast().type === "info" ||
                            toast().type === "loading",
                        "bg-green-200 dark:bg-green-700 dark:hover:bg-green-600":
                            toast().type === "success",
                        "bg-red-200 dark:bg-red-700 dark:hover:bg-red-600":
                            toast().type === "error",
                    }),
                );
                return (
                    <ArkToast.Root class={innerRootClass}>
                        <div class="flex">
                            <ArkToast.Title class={titleClass}>
                                {toast().title}
                            </ArkToast.Title>
                            <ArkToast.CloseTrigger>
                                <Icon path={xCircle} class={closeIconClass} />
                            </ArkToast.CloseTrigger>
                        </div>
                        <ArkToast.Description class={descriptionClass}>
                            {toast().description}
                        </ArkToast.Description>
                    </ArkToast.Root>
                );
            }}
        </Toaster>
    );
};
