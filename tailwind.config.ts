import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#231F20",
        green: "#2C5F2D",
        darkBrown: "#6D2200",
        lightBrown: "#B5814F",
        ochre: "#C75400",
        grey: "#C8BEB7",
        lightGrey: "#C8BEB7",
        ashGrey: "#E3DEDB",
        red: "#C8BEB7",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
