/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./web/**/*.{html,js}", "./templates/**/*.{html,js}"],
    plugins: [
        require('@tailwindcss/typography')
    ],
    theme: {
        extend: {
            colors: {
                exeBlack: "#090b11",
                exeGray: "#9ca3af",
                goldyPink: "#fb89ab",
                goldyCream: "#fbc689",
                goldyOrangy: {
                    DEFAULT: "#f5671b",
                    100: "#f5671b",
                    300: "#f57d3d",
                    800: "#f5be3d"
                },
                goldyGreen: "#d0f54c"
            },
            dropShadow: {
                "flicker": "0.06rem 0 0.06rem theme(colors.goldyPink), -0.125rem 0 0.06rem theme(colors.goldyOrangy.300);"
            },
            typography: ({ theme }) => ({
                exeWhite: {
                    css: {
                        '--tw-prose-body': theme('colors.white'),
                        '--tw-prose-headings': theme('colors.goldyCream'),
                        '--tw-prose-lead': theme('colors.white'),
                        '--tw-prose-links': theme('colors.goldyOrangy[800]'),
                        '--tw-prose-bold': theme('colors.white'),
                        '--tw-prose-counters': theme('colors.white'),
                        '--tw-prose-bullets': theme('colors.white'),
                        '--tw-prose-hr': theme('colors.white'),
                        '--tw-prose-quotes': theme('colors.white'),
                        '--tw-prose-quote-borders': theme('colors.white'),
                        '--tw-prose-captions': theme('colors.white'),
                        '--tw-prose-code': theme('colors.white'),
                        '--tw-prose-pre-code': theme('colors.white'),
                        '--tw-prose-pre-bg': theme('colors.black'),
                        '--tw-prose-th-borders': theme('colors.white'),
                        '--tw-prose-td-borders': theme('colors.white'),
                    },
                },
            }),
        },

        screens: {
            "mobile": {"max": "430px"},
            "tablet": {"max": "640px"},
            "desktop": {"max": "1280px"}
        },

        fontFamily: {
            "hacked": ["Hacked-KerX"],
            "typewriter": ["atwriter"]
        },
        animation: {
            "flicker": "flicker 0.02s infinite ease-in",
        },
        keyframes: {
            flicker: {
                "from" : {
                    textShadow: "1px 0 0 theme(colors.goldyPink), -2px 0 0 theme(colors.goldyOrangy.300);",
                },
                "to" : {
                    textShadow: "5px 0.5px 2px theme(colors.goldyPink), -1px -0.5px 2px theme(colors.goldyOrangy.300);",
                },
            }
        }
    }
}