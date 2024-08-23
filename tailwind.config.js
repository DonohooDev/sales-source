const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        screens: {
            "sm": "480px",
            "md": "768px",
            "lg": "976px",
            "xl": "1200px",
            "2xl": "1440px",
        },
        colors: {
            "primary": "#202046",
            "secondary": "#41497E",
            "bg-primary": "#F9F9F9",
            "bg-soft": "#f2f2f4",
            "bg-contrast": "#EAEAEC",
            "disabled": "#D1D1D4",
            "divider": "#DDDDF2",
            "txt-hover": colors.gray[400],
            "txt-header": "#101828",
            "txt": colors.gray[600],
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
        extend: {
            transitionProperty: {
                width: "width",
                height: "height",
                spacing: "margin, padding",
                bg: "background-color",
                border: "border-color",
                transform: "transform",
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents, addVariant, theme }) {
            addVariant("hocus", ["&:hover", "&:focus"]);
            addComponents({
                ".text-h1": {
                    "fontSize": theme("fontSize.4xl"),
                    "@screen md": {
                        fontSize: theme("fontSize.5xl"),
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.6xl"),
                    },
                    "color": theme("colors.txt-header"),
                    "fontWeight": theme("fontWeight.semibold"),
                },

                ".text-h2": {
                    "fontSize": theme("fontSize.3xl"),
                    "@screen md": {
                        fontSize: theme("fontSize.4xl"),
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.5xl"),
                    },
                    "color": theme("colors.txt-header"),
                    "fontWeight": theme("fontWeight.semibold"),
                },

                ".text-h3": {
                    "fontSize": theme("fontSize.2xl"),
                    "@screen md": {
                        fontSize: theme("fontSize.3xl"),
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.4xl"),
                    },
                    "color": theme("colors.txt-header"),
                    "fontWeight": theme("fontWeight.semibold"),
                },

                ".text-h4": {
                    "fontSize": theme("fontSize.xl"),
                    "@screen md": {
                        fontSize: theme("fontSize.2xl"),
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.3xl"),
                    },
                    "color": theme("colors.txt-header"),
                    "fontWeight": theme("fontWeight.semibold"),
                },

                ".text-h5": {
                    "fontSize": theme("fontSize.lg"),
                    "@screen md": {
                        fontSize: theme("fontSize.xl"),
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.2xl"),
                    },
                    "color": theme("colors.txt-header"),
                    "fontWeight": theme("fontWeight.semibold"),
                },

                ".text-h6": {
                    "fontSize": theme("fontSize.base"),
                    "@screen md": {
                        fontSize: theme("fontSize.lg"),
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xl"),
                    },
                    "color": theme("colors.txt-header"),
                    "fontWeight": theme("fontWeight.semibold"),
                },

                ".text-paragraph": {
                    "marginBottom": theme("spacing.3"),
                    "@screen md": {
                        marginBottom: theme("spacing.4"),
                    },
                    "@screen 2xl": {
                        marginBottom: theme("spacing.6"),
                    },
                },

                ".text-subtitle": {
                    "fontSize": theme("fontSize.base"),
                    "@screen md": {
                        fontSize: theme("fontSize.lg"),
                    },
                    "marginBottom": theme("spacing.12"),
                    "@screen xl": {
                        marginBottom: theme("spacing.20"),
                    },
                    "fontWeight": theme("fontWeight.normal"),
                },

                ".text-subtext": {
                    "fontSize": theme("fontSize.sm"),
                    "@screen md": {
                        fontSize: theme("fontSize.base"),
                    },
                },

                ".content-xs": {
                    maxWidth: theme("maxWidth.2xl"),
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                },

                ".content-sm": {
                    maxWidth: theme("maxWidth.4xl"),
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                },

                ".content-md": {
                    maxWidth: theme("maxWidth.6xl"),
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                },

                ".content-lg": {
                    maxWidth: "1400px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                },

                ".header-only-section": {
                    "marginBottom": theme("spacing.4"),
                    "@screen md": {
                        marginBottom: theme("spacing.8"),
                    },
                    "@screen 2xl": {
                        marginBottom: theme("spacing.10"),
                    },
                    "paddingTop": theme("spacing.8"),
                    "@screen md": {
                        paddingTop: theme("spacing.12"),
                    },
                    "paddingLeft": theme("spacing.8"),
                    "paddingRight": theme("spacing.8"),
                    "@screen lg": {
                        paddingLeft: theme("spacing.12"),
                        paddingRight: theme("spacing.12"),
                    },
                    "& > .text-subtitle": {
                        "marginBottom": theme("spacing.4"),
                        "@screen md": {
                            marginBottom: theme("spacing.6"),
                        },
                        "@screen 2xl": {
                            marginBottom: theme("spacing.8"),
                        },
                    },
                },

                ".section": {
                    "marginBottom": theme("spacing.4"),
                    "@screen md": {
                        marginBottom: theme("spacing.8"),
                    },
                    "@screen 2xl": {
                        marginBottom: theme("spacing.10"),
                    },
                    "paddingTop": theme("spacing.8"),
                    "paddingBottom": theme("spacing.8"),
                    "@screen md": {
                        paddingTop: theme("spacing.12"),
                        paddingBottom: theme("spacing.12"),
                    },
                    "paddingLeft": theme("spacing.8"),
                    "paddingRight": theme("spacing.8"),
                    "@screen lg": {
                        paddingLeft: theme("spacing.12"),
                        paddingRight: theme("spacing.12"),
                    },
                },
            });
        }),
    ],
};
