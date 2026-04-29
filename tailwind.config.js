/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Brand palette — Linear/Vercel-style: deep navy + electric cyan + amber
        brand: {
          navy: {
            50: "#f0f4fa",
            100: "#dbe4f1",
            200: "#b8c9e3",
            300: "#8aa6cf",
            400: "#5a7fb6",
            500: "#3a5e9b",
            600: "#2a4880",
            700: "#1f3766",
            800: "#172a4d",
            900: "#0f1d36",
            950: "#0a1426",
          },
          cyan: {
            50: "#ecfeff",
            100: "#cffafe",
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
          },
          amber: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
          },
        },
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #06b6d4 0%, #0891b2 45%, #f59e0b 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, #67e8f9 0%, #22d3ee 50%, #fbbf24 100%)",
        "gradient-aurora":
          "radial-gradient(at 20% 20%, rgba(34,211,238,0.18) 0px, transparent 50%), radial-gradient(at 80% 30%, rgba(245,158,11,0.14) 0px, transparent 55%), radial-gradient(at 50% 90%, rgba(58,94,155,0.22) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(34,211,238,0.45), 0 0 60px -16px rgba(245,158,11,0.25)",
        "glow-cyan": "0 8px 32px -8px rgba(34,211,238,0.55)",
        "glow-amber": "0 8px 32px -8px rgba(245,158,11,0.55)",
        "glow-soft": "0 10px 40px -12px rgba(15,29,54,0.35)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%,-2%,0) scale(1.05)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "aurora-shift": "aurora-shift 18s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
