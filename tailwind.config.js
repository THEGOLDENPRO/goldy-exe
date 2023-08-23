/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        extend: {
            colors: {
                exeBlack: "#090b11",
                goldyPink: "#fb89ab",
                goldyCream: "#fbc689",
                goldyOrangy: {
                    DEFAULT: "#f5671b",
                    100: "#f5671b",
                    300: "#f57d3d"
                }
            }
        },

        fontFamily: {
            "hacked": ["Hacked-KerX"],
            "typewriter": ["atwriter"]
        },
        animation: {
            "glow": "glow 3s ease-in-out infinite alternate",
        },
        keyframes: {
            glow: {
                "from": { 
                    textShadow: "0 0 0px #fff, 0 0 2px #fff, 0 0 5px theme(colors.goldyOrangy.100), 0 0 10px theme(colors.goldyOrangy.100), 0 0 15px theme(colors.goldyOrangy.100), 0 0 20px theme(colors.goldyOrangy.100), 0 0 25px theme(colors.goldyOrangy.100)" 
                },
                "to": { 
                    textShadow: "0 0 3px #fff, 0 0 5px theme(colors.goldyOrangy.300), 0 0 10px theme(colors.goldyOrangy.300), 0 0 15px theme(colors.goldyOrangy.300), 0 0 20px theme(colors.goldyOrangy.300), 0 0 25px theme(colors.goldyOrangy.300), 0 0 30px theme(colors.goldyOrangy.300)" 
                },
            }
        }
    }
}