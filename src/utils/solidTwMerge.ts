import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

/**
 * Styling props of a typical SolidJS component.
 *
 * Get with `const [styling, rest] = splitProps(props, ['class', 'classList'])`
 */

export interface SolidStylingProps {
    class?: string;
    classList?: { [k: string]: boolean | undefined };
}

/**
 * Merges a class/classList with SolidJS component's default styling.
 * @param props Get with `const [styling, rest] = splitProps(['class', 'classList', 'style'])`
 * @param defaultClassLists Any twMerge compatible values.
 * @returns string
 */
export const solidTwMerge = (
    props?: SolidStylingProps,
    ...defaultClassLists: ClassNameValue[]
) => {
    const classLists = twMerge(...defaultClassLists);
    return twMerge(classLists, props?.class || '', clsx(props?.classList || []));
};
