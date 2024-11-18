import { twMerge } from "tailwind-merge";

export default (type?: "primary" | "secondary" | "tertiary") =>
    twMerge(
        "p-6",
        "border",
        "border-slate-200",
        "bg-white dark:bg-slate-700",
        "text-slate-800 dark:text-slate-200",
        "hover:shadow-lg",
        "transition-shadow",
        "duration-200",
        type == "primary" &&
            "bg-primary dark:bg-primary text-white hover:bg-primary-600 active:bg-primary-700 dark:hover:bg-primary-400 dark:active:bg-primary-300 focus:outline-none focus:ring focus:ring-primary-300",
        type == "secondary" &&
            "bg-secondary dark:bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 dark:hover:bg-secondary-400 dark:active:bg-secondary-300 focus:outline-none focus:ring focus:ring-secondary-300",
        type == "tertiary" &&
            "bg-tertiary dark:bg-tertiary text-white hover:bg-tertiary-600 active:bg-tertiary-700 dark:hover:bg-tertiary-400 dark:active:bg-tertiary-300 focus:outline-none focus:ring focus:ring-tertiary-300",
    );