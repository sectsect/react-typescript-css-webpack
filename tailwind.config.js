const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px',
      // @ https://tailwindcss.com/docs/font-size#providing-a-default-line-height
      // xs: ['12px', '1'],
      // sm: ['14px', '1.25'],
      // base: ['16px', '1.5'],
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
    extend: {
      spacing: {
        '1x1': '100%',
        '4x5': '125%',
      },
      fontFamily: {
        // sans: [
        //   '"Helvetica Neue"',
        //   'Helvetica',
        //   '"Hiragino Sans"',
        //   '"Hiragino Kaku Gothic ProN"',
        //   '"Yu Gothic"',
        //   ...defaultTheme.fontFamily.sans,
        // ],

        // Merge with default theme without Duplicates (Because Duplicate with "Helvetica Neue" in defaults)
        sans: [
          ...new Set(
            [
              '"Helvetica Neue"',
              'Helvetica',
              '"Hiragino Kaku Gothic ProN"',
              '"Yu Gothic"',
            ].concat(defaultTheme.fontFamily.sans),
          ),
        ],
        // serif: [
        //   'garamond-premier-pro',
        //   '"Times New Roman"',
        //   '"YuMincho"',
        //   '"Hiragino Mincho ProN"',
        //   '"Yu Mincho"',
        //   '"MS PMincho"',
        //   'serif',
        //   ...defaultTheme.fontFamily.serif,
        // ],

        // Merge with default theme without Duplicates
        serif: [
          ...new Set(
            [
              'garamond-premier-pro',
              '"Times New Roman"',
              '"YuMincho"',
              '"Hiragino Mincho ProN"',
              '"Yu Mincho"',
              '"MS PMincho"',
            ].concat(defaultTheme.fontFamily.serif),
          ),
        ],
      },
      colors: {
        'key-green': '#00ff00',
        facebook: '#1877f2',
        twitter: '#1da1f2',
        instagram: '#dc3b89',
        youtube: '#ff3434',
      },
      // lineHeight: {
      //   3: '12px',
      //   4: '16px',
      //   5: '20px',
      //   6: '24px',
      //   7: '28px',
      //   8: '32px',
      //   9: '36px',
      //   10: '40px',
      // },
      maxWidth: {
        'screen-2xl': '1440px',
        'screen-3xl': '1536px',
      },
      height: {
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        'screen-inner': 'var(--inner-height)', // To support 'inner-vh'
        article: 'var(--article-height, auto)',
      },
      textIndent: {
        'negative-99999': '-99999px',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line global-require
  ],
}
