/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*/jsx',
  ],
  // fontFamily: {
  //   body: ['Space Grotesk', 'sans-serif'],
  // },
  theme: {
    colors: {
      black: 'hsl(0, 0%, 8%)',
      green: 'hsl(153, 71%, 59%)',
      grey: 'hsl(0, 0%, 14%)',
      lightGrey: 'hsl(0, 0%, 85%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontSize: {
      32: '2rem',
      40: '2.5rem', // 40px
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      lineHeight: {
        26: '1.625rem',
      },
      letterSpacing: {
        custom: '0.14288rem',
        minus: '-0.0625rem',
        minus2: '-0.071rem',
      },
      minHeight: {
        668: '6.68rem',
      },
      spacing: {
        25: '1.6rem',
        contact: '5.625rem',
        39: '2.44rem',
        50: '3.13rem',
        375: '3.75rem',
        87: '5.44rem',
      },
      backgroundImage: {
        header:
          "url('../public/images/pattern-rings.svg'), url('../public/images/pattern-circle.svg')",
        'pattern-circle': "url('../public/images/pattern-circle.svg')",
        'pattern-rings': "url('../public/images/pattern-rings.svg')",
      },
      backgroundPosition: {
        'mob-ring': '-21.38rem 7.75rem',
        'mob-circle': 'right -4.06rem top 15.88rem',
      },
      borderRadius: {
        borderRadius: {
          50: '0.25rem', // 4px
          100: '0.5rem', // 8px
          200: '0.875rem', // 12px
          300: '1rem', // 16px
          350: '1.125rem', // 18px
          400: '1.5rem', // 24px
          500: '2rem', // 32px
          600: '2.5rem', // 40px
          700: '2.875rem', // 46px
          800: '3.5rem', // 56px
        },

        spacing: {
          50: '0.25rem', // 4px
          100: '0.5rem', // 8px
          200: '0.875rem', // 12px
          300: '1rem', // 16px
          350: '1.125rem', // 18px
          400: '1.5rem', // 24px
          500: '2rem', // 32px
          600: '2.5rem', // 40px
          700: '2.875rem', // 46px
          800: '3.5rem', // 56px
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
