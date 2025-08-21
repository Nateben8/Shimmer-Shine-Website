import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        navy: {
          DEFAULT: '#00357a',
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#00357a',
          600: '#002d66',
          700: '#002452',
          800: '#001c3d',
          900: '#001429',
        },
        yellow: {
          DEFAULT: '#fdc737',
          50: '#fffbf0',
          100: '#fff4d1',
          200: '#ffecb3',
          300: '#ffe494',
          400: '#ffdd75',
          500: '#fdc737',
          600: '#e5b32f',
          700: '#cc9f28',
          800: '#b38b20',
          900: '#997718',
        },
        gray: {
          DEFAULT: '#a6a6a6',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a6a6a6',
          400: '#8a8a8a',
          500: '#6f6f6f',
          600: '#525252',
          700: '#393939',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        'yellowtail': ['Yellowtail', 'cursive'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'arvo': ['Arvo', 'serif'],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0, 53, 122, 0.3)',
        'retro-yellow': '4px 4px 0px 0px rgba(253, 199, 55, 0.3)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
