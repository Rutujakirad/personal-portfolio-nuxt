module.exports = {
  // ...other config...
  theme: {
    extend: {
      colors: {
        'nav-link': '#4338ca', // indigo-700
        'nav-link-dark': '#a5b4fc', // indigo-300
      },
      backgroundImage: {
        'nav-link-gradient': 'linear-gradient(to right, #4f46e5, #a21caf)', // indigo-600, purple-600
      },
       animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'), // Add this line if using tailwindcss-filters
  ],
}