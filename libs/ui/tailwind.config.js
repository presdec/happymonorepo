/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // Toggle dark-mode based on data-mode="dark"
  theme: {},
  important: true,
  presets: [require('../../tailwind-workspace-preset.js')],
};
