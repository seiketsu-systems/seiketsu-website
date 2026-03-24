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
        orange: {
          DEFAULT: "#FF6B35",
          hover: "#e55a25",
          light: "#FF8F65",
          lighter: "#FFB088",
          dark: "#CC5529",
          glow: "rgba(255, 107, 53, 0.15)",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          card: "#1A1A1A",
          "card-hover": "#1E1E1E",
          border: "#2A2A2A",
          "border-light": "#333333",
          surface: "#141414",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-down": "slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        float: "float 20s ease-in-out infinite",
        "float-slow": "float 30s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        shimmer: "shimmer 3s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(30px, -30px) scale(1.05)" },
          "50%": { transform: "translate(-20px, 20px) scale(0.95)" },
          "75%": { transform: "translate(15px, 10px) scale(1.02)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 107, 53, 0.15)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 107, 53, 0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 107, 53, 0.2)",
        "glow-lg": "0 0 60px rgba(255, 107, 53, 0.25)",
        premium: "0 25px 50px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
