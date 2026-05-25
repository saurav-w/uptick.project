import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F6F5",
        foreground: "#091210",
        primary: {
          DEFAULT: "#004B44",
          50: "#F0F9F7",
          100: "#D9F0EC",
          200: "#B3E0D9",
          300: "#8DD1C6",
          400: "#66C1B3",
          500: "#004B44",
          600: "#00423A",
          700: "#003930",
          800: "#003026",
          900: "#00281E",
        },
        secondary: {
          DEFAULT: "#1E293B",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        accent: {
          DEFAULT: "#10B981",
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        muted: "#E6EAE8",
        border: "#D2DCD9",
      },
      backgroundColor: {
        DEFAULT: "#F4F6F5",
        dark: "#091210",
      },
      textColor: {
        DEFAULT: "#091210",
        light: "#F4F6F5",
      },
      borderColor: {
        DEFAULT: "#D2DCD9",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-soft": "pulseSoft 2s infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #004B44 0%, #10B981 100%)",
        "gradient-secondary": "linear-gradient(135deg, #1E293B 0%, #004B44 100%)",
        "gradient-accent": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "glass": "rgba(255, 255, 255, 0.25)",
        "glass-dark": "rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        glass: "10px",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "card": "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 12px 24px rgba(0, 0, 0, 0.12)",
        "lg": "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
