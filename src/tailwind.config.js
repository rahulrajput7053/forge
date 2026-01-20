/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-bg": "#0a0a0a",
        "component-bg": "#1a1a1a",
        "border-color": "#2a2a2a",
        accent: "#34C759",
        "accent-hover": "#2db34d",
        "text-primary": "#f0f0f0",
        "text-secondary": "#a0a0a0",
      },
    },
  },
  plugins: [],
};
