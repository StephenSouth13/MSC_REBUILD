import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C3C78",
          50: "#E6F0FF",
          100: "#CCE1FF",
          200: "#99C3FF",
          300: "#66A5FF",
          400: "#3387FF",
          500: "#0C3C78",
          600: "#0A3366",
          700: "#082A54",
          800: "#062142",
          900: "#041830",
        },
        accent: {
          DEFAULT: "#F7931E",
          50: "#FEF7ED",
          100: "#FDEFD6",
          200: "#FBDFAD",
          300: "#F9CF84",
          400: "#F7BF5B",
          500: "#F7931E",
          600: "#E67E0A",
          700: "#B86208",
          800: "#8A4706",
          900: "#5C2F04",
        },
        // Enhanced dark mode color palette
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9", 
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Neon colors for dark mode accents
        neon: {
          blue: "#00d4ff",
          purple: "#a855f7",
          pink: "#ec4899",
          green: "#00f5a0",
          orange: "#ff6b35",
          yellow: "#ffd23f",
        },
        // Gradient stops for dark mode
        gradient: {
          primary: {
            from: "#0f172a",
            via: "#1e293b", 
            to: "#334155"
          },
          secondary: {
            from: "#1e1b4b",
            via: "#312e81",
            to: "#4338ca"
          },
          accent: {
            from: "#991b1b",
            via: "#dc2626", 
            to: "#f97316"
          }
        },
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        // Enhanced dark mode animations
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite alternate",
        "particle-float": "particle-float 20s linear infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "aurora": "aurora 15s ease-in-out infinite",
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
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Enhanced dark mode keyframes
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%": { 
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            filter: "brightness(1)"
          },
          "100%": { 
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)",
            filter: "brightness(1.1)"
          },
        },
        "particle-float": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-200px, -100px, 0)" },
        },
        "gradient-shift": {
          "0%, 100%": { 
            backgroundPosition: "0% 50%" 
          },
          "50%": { 
            backgroundPosition: "100% 50%" 
          },
        },
        "neon-pulse": {
          "0%": { 
            textShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
            filter: "brightness(1)"
          },
          "100%": { 
            textShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor",
            filter: "brightness(1.2)"
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0"
          },
          "100%": {
            backgroundPosition: "200% 0"
          }
        },
        aurora: {
          "0%, 100%": {
            transform: "translateX(0%) rotate(0deg)",
            opacity: "0.3"
          },
          "25%": {
            transform: "translateX(25%) rotate(90deg)",
            opacity: "0.6"
          },
          "50%": {
            transform: "translateX(50%) rotate(180deg)",
            opacity: "0.8"
          },
          "75%": {
            transform: "translateX(25%) rotate(270deg)",
            opacity: "0.6"
          }
        }
      },
      // Enhanced shadow system for dark mode
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.4)',
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.4)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'dark-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.2)',
      },
      // Enhanced gradient system
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gradient-primary': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'dark-gradient-secondary': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        'dark-gradient-accent': 'linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #f97316 100%)',
        'aurora-gradient': 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      // Enhanced backdrop filters
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      // Enhanced border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
