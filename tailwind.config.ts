import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          foreground: '#f8fafc'
        },
        surface: '#0f172a',
        card: '#1e293b'
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
