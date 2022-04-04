// tailwind.config.js
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fc9200',
        secondary: '#062b5b',
        accent: '#fff0db',
        links: '#062b5b'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screns: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    }
  }
  // more options here
}
