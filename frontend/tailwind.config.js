module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'text-gray-500', 'bg-gray-100',
    'text-blue-700', 'bg-blue-100',
    'text-green-700', 'bg-green-100',
    'text-red-600', 'text-blue-600', 'text-gray-800', 'text-blue-500',
    'bg-blue-600', 'bg-green-600', 'bg-gray-400',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
