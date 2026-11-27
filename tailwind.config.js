/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#A50062',
          deep: '#80004F',
          secondary: '#D52A91',
          light: '#FBEAF4',
          soft: '#FFF9FC',
          surface: '#FFF2F8',
          border: '#F1D3E5',
          text: {
            primary: '#202033',
            secondary: '#626273',
            muted: '#8A8A9E'
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(165, 0, 98, 0.04)',
        'card': '0 8px 30px rgba(165, 0, 98, 0.06)',
        'card-hover': '0 16px 40px rgba(165, 0, 98, 0.12)',
        'glow': '0 0 25px rgba(165, 0, 98, 0.25)',
        'elevated': '0 30px 80px -20px rgba(111, 0, 67, 0.35)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}

