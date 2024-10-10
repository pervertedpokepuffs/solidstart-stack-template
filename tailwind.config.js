/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ["selector", '[data-mode="dark"]'],
    theme: {
        extend: {
            keyframes: {
                slidedown: {
                    "0%": {
                        transform: "translateY(-2rem)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                slidedown: "500ms ease-out 0s 1 normal none running slidedown"
            },
            colors: {
                primary: {
                    DEFAULT: "#22c55e",
                    50: "#f0fdf5",
                    100: "#dcfce8",
                    200: "#bbf7d1",
                    300: "#86efad",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803c",
                    800: "#166533",
                    900: "#14532b",
                    950: "#052e14",
                },
                secondary: {
                    DEFAULT: "#ef4444",
                    50: "#fef2f2",
                    100: "#fee2e2",
                    200: "#fecaca",
                    300: "#fca5a5",
                    400: "#f87171",
                    500: "#ef4444",
                    600: "#dc2626",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d",
                    950: "#450a0a",
                },
                tertiary: {
                    DEFAULT: "#f59e0b",
                    50: "#fff8eb",
                    100: "#feeac7",
                    200: "#fdd28a",
                    300: "#fcbb4d",
                    400: "#fbab24",
                    500: "#f59e0b",
                    600: "#d98b06",
                    700: "#b47409",
                    800: "#92610e",
                    900: "#78510f",
                    950: "#452c03",
                },
            },
        },
    },
    plugins: [],
};
