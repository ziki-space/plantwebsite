import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes:{
      move:{
        "50%": { transform: "translateY(-1rem)"}
      },
      rotate: {
        "0%": {transform: "rotate(0deg)"},
        "100%": {transform: "rotate(360deg)"},
      },
      scaleUp: {
        "0%": {transform: "scale(0.8)"},
        "50%": {transform: "scale(1.2)"},
        "100%": {transform: "scale(0.8)"}
      }
    },
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleUp 3s linear infinite"
    },
    fontFamily:{
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"]
    },
    container:{
      center: true,
      padding:{
        DEFAULT: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
};
export default config;
