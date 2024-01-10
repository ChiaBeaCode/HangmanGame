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
        overcast: {
          100: "rgb(68, 91, 106, 0.7 )",
          200: "#78909A",
          300: "#4D6A75",
        },
      },
    },
  },
  plugins: [],
};
export default config;
