import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Preview, SolidRenderer } from "storybook-solidjs";
import "../src/index.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        // @ts-expect-error SolidRenderer is supposed to be compatible.
        withThemeByDataAttribute<SolidRenderer>({
            themes: {
                light: "light",
                dark: "dark",
            },
            defaultTheme: "light",
            attributeName: "data-mode",
        }),
    ],

    tags: ["autodocs"]
};

export default preview;
