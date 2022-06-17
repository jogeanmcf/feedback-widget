module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
