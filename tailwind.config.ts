import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f0fbfa",
                    100: "#d6f2f0",
                    200: "#aee4e1",
                    300: "#7bcecb",
                    400: "#4eb0ad",
                    500: "#349491",
                    600: "#297775",
                    700: "#245f5d",
                    800: "#204c4b",
                    900: "#1e403f",
                    950: "#0d2525",
                },
                accent: {
                    50: "#fef8ee",
                    100: "#fdf0d5",
                    200: "#fbe0ab",
                    300: "#f8c978",
                    400: "#f5a740",
                    500: "#f08c16",
                    600: "#e0700d",
                    700: "#ba540d",
                    800: "#944211",
                    900: "#783811",
                    950: "#401a05",
                }
            },
            fontFamily: {
                sans: ["Nunito", "system-ui", "sans-serif"],
            },
            borderRadius: {
                card: "8px",
            },
            boxShadow: {
                soft: "0 1px 3px rgba(0, 0, 0, 0.05)",
                card: "0 1px 3px rgba(0, 0, 0, 0.08)",
            },
        },
    },
    plugins: [],
};
export default config;
