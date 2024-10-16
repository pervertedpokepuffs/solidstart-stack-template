import { twMerge } from "tailwind-merge";

export default (type?: "primary" | "secondary" | "tertiary") =>
    twMerge(
        "transition-color",
        "duration-200",
        "p-4",
        "border",
        "border-slate-200",
        "hover:border-slate-500",
        "bg-slate-50 dark:bg-slate-500",
        "text-current",
        "hover:bg-slate-200 dark:hover:bg-slate-400",
        "active:bg-slate-300 dark:active:bg-slate-300",
        "focus:outline-none focus:ring focus:ring-slate-200",
        type == "primary" &&
            "bg-primary dark:bg-primary text-slate-200 hover:bg-primary-600 active:bg-primary-700 dark:hover:bg-primary-400 dark:active:bg-primary-300 focus:outline-none focus:ring focus:ring-primary-300",
        type == "secondary" &&
            "bg-secondary dark:bg-secondary text-slate-200 hover:bg-secondary-600 active:bg-secondary-700 dark:hover:bg-secondary-400 dark:active:bg-secondary-300 focus:outline-none focus:ring focus:ring-secondary-300",
        type == "tertiary" &&
            "bg-tertiary dark:bg-tertiary text-slate-200 hover:bg-tertiary-600 active:bg-tertiary-700 dark:hover:bg-tertiary-400 dark:active:bg-tertiary-300 focus:outline-none focus:ring focus:ring-tertiary-300",
    );
