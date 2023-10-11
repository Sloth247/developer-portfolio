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
      18: '1.125rem',
      32: '2rem',
      40: '2.5rem', // 40px
      48: '3rem',
      72: '4.5rem',
      88: '5.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },

      lineHeight: {
        26: '1.625rem',
        175: '1.75rem',
        35: '3.5rem',
        '7xl': '4.5rem',
        88: '5.5rem',
      },
      letterSpacing: {
        custom: '0.14288rem',
        minus: '-0.0625rem',
        minus2: '-0.071rem',
        minus3: '-0.12781rem',
        minus4: '-0.09375rem',
        minus5: '-0.15625rem',
      },
      minHeight: {
        668: '6.68rem',
      },
      spacing: {
        0.44: '0.44rem',
        0.88: '0.88rem',
        25: '1.6rem',
        184: '1.84rem',
        187: '1.87rem',
        contact: '5.625rem',
        39: '2.44rem',
        50: '3.13rem',
        1875: '1.875rem',
        212: '2.12rem',
        269: '2.69rem',
        325: '3.25rem',
        3625: '3.625rem',
        375: '3.75rem',
        412: '4.12rem',
        431: '4.31rem',
        45: '4.5rem',
        87: '5.44rem',
        625: '6.25rem',
        65: '6.5rem',
        669: '6.69rem',
        794: '7.94rem',
        863: '8.63rem',
        875: '8.75rem',
        1031: '10.31rem',
        1256: '12.56rem',
        1369: '13.69rem',
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
      maxWidth: {
        400: '400px',
        445: '445px',
        tab: '322px',
        706: '706px',
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

        // spacing: {
        //   50: '0.25rem', // 4px
        //   100: '0.5rem', // 8px
        //   200: '0.875rem', // 12px
        //   300: '1rem', // 16px
        //   350: '1.125rem', // 18px
        //   400: '1.5rem', // 24px
        //   500: '2rem', // 32px
        //   600: '2.5rem', // 40px
        //   700: '2.875rem', // 46px
        //   800: '3.5rem', // 56px
        // },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
