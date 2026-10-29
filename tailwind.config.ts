import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C1915",
        foam: "#F7F3EC",
        cream: "#EFE6D8",
        dune: "#E2D3BF",
        sandstone: "#C4623A",
        "sandstone-deep": "#9C4630",
        ocean: "#163A4A",
        "ocean-deep": "#0E2834",
        mist: "#D5E3EA",
        kelp: "#3E6B52",
        // Light enough for small text on ocean (#163A4A).
        gold: "#E0B45A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 16px 40px -28px rgba(22, 58, 74, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
