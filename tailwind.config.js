/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',  // Define custom screen size for very large devices
      },
      container: {
        center: true,  // Center the container
        padding: '1rem',  // Optional: Add default padding for the container
        screens: {
          'sm': '100%',  // Full width on small devices
          'md': '100%',  // Full width on medium devices
          'lg': '1024px',  // Default large width
          'xl': '1280px',  // Default extra-large width
          '2xl': '1440px',  // Custom container width for screens 1440px and larger
        },
      },
    },
  },
  plugins: [],
}

