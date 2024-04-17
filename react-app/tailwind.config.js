/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  important: "#root",
  theme: {
    extend: {
      textColor: {
        skin: {
          light: 'var(--text-light)',
          dark: 'var(--text-dark)',
          secondary: 'var(--text-secondary)',
          headline: 'var(--text-headline)',
          paragraph: 'var(--text-paragraph)',
          paragraphMuted: 'var(--text-paragraph-muted)',
          link: 'var(--text-link)',
          success: 'var(--text-success)',
          error: 'var(--text-error)',
          overprimary: 'var(--text-over-primary)',
        }
      },
      backgroundColor: {
        skin: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          background: 'var(--bg-background)',
          card: 'var(--bg-card)',
          paper: 'var(--bg-paper)',
          light: 'var(--bg-light)',
          dark: 'var(--bg-dark)',
        }
      }
    },
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    }
  },
  plugins: [],
}

