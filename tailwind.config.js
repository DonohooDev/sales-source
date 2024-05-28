const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            "primary": "#202046",
            "secondary": "#41497E",
            "bg-primary": "#F9F9F9",
            "bg-soft": colors.zinc[100],
            "bg-contrast": colors.neutral[300],
            "bg-contrast": "#EBEBEB",
            "disabled": "#D1D5DB",
            "txt-hover": colors.gray[300],
            "txt-header": "#101828",
            "txt": colors.gray[500],
            "txt-white": "#F9F9F9",
            "transparent": "transparent",
            "current": "currentColor",
            "slate": colors.slate,
            "gray": colors.gray,
            "zinc": colors.zinc,
            "neutral": colors.neutral,
            "stone": colors.stone,
            "red": colors.red,
            "orange": colors.orange,
            "amber": colors.amber,
            "yellow": colors.yellow,
            "lime": colors.lime,
            "green": colors.green,
            "emerald": colors.emerald,
            "teal": colors.teal,
            "cyan": colors.cyan,
            "sky": colors.sky,
            "blue": colors.blue,
            "indigo": colors.indigo,
            "violet": colors.violet,
            "purple": colors.purple,
            "fuchsia": colors.fuchsia,
            "pink": colors.pink,
            "rose": colors.rose,
        },
        extend: {},
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("hocus", ["&:hover", "&:focus"]);
        }),
    ],
};
