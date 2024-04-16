import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "animation": {
        shimmer: "shimmer 2s linear infinite"
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      colors: {
        black: {
          100: "#d2d2d2",
          200: "#a4a4a4",
          300: "#777777",
          400: "#494949",
          500: "#1c1c1c",
          600: "#161616",
          700: "#111111",
          800: "#0b0b0b",
          900: "#060606"
        },
        white: {
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
        },
      },
      fontFamily: {
        'space': "Space Grotesk",
        'dm-sans': "DM Sans 9pt",
      }
    },
  },
  plugins: [],
};
export default config;
