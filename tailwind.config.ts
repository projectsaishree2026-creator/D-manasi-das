import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'var(--font-outfit)', 'sans-serif'],
        heading: ['Outfit', 'var(--font-outfit)', 'sans-serif'],
        body: ['Outfit', 'var(--font-outfit)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card':         '0 20px 40px -15px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover':   '0 24px 48px -12px rgba(14,165,233,0.12), 0 2px 6px rgba(0,0,0,0.06)',
        'premium':      '0 20px 40px -15px rgba(0,0,0,0.05)',
        'glow':         '0 0 40px rgba(14, 165, 233, 0.15)',
        'glow-lg':      '0 0 80px rgba(14, 165, 233, 0.2)',
        'nav':          '0 1px 0 rgba(0,0,0,0.06)',
        'inner-highlight': 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #F1F5F9 0%, #E0F2FE 100%)',
        'primary-gradient': 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)',
        'soft-gradient':    'linear-gradient(180deg, #F1F5F9 0%, #ffffff 100%)',
        'card-gradient':    'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(224,242,254,0.9) 100%)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'slide-up':    'slideUp 0.5s cubic-bezier(0.34,1.56,0.64,1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
