const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
    purge: {
      mode: 'layers',
      layers: ['base','components','utilities'],
      content: [
        './components/**/*.js',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './public/**/*.html', 
      ],
    },
    corePlugins: {
      container: false
    },
    
    theme: {
      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        // xxl: '1360px',
        // xxxl: '1680px',
        // xs: {'min': '320px', 'max': '479px'},
        // sm: {'min': '480px', 'max': '767px'},
        // md: {'min': '768px', 'max': '1023px'},
        // lg: {'min': '1024px', 'max': '1279px'},
        // xl: {'min': '1280px', 'max': '1535px'},
        // 2xl: {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
        
      },

      // container: {
      //   center: true,
      //   padding: {
      //     DEFAULT: '0',
      //     xs:'20px',
      //     sm: '20px',
      //     md: '20px',
      //     lg: '40px',
      //     xl:'0px'
      //   },
      // },

      boxShadow : {
        'custom-1' : '0 2px 4px 0 rgba(0, 0, 0 , 0.07)'
      },

      extend: {
        fontFamily : {
          'roboto': ['Roboto', 'Arial', 'sans-serif'],
          'sans' : [ 'Roboto', ...defaultTheme.fontFamily.sans],
          'montserrat' : ['Montserrat','sans-serif'],
        },
        minHeight: {
          'inherit': 'inherit',
        },
        width : {
          "205" : '205px'
        },
        transitionDelay: {
          '0': '0ms',
        },
        transitionDuration: {
          '0': '0ms',
        },
        textOpacity: {
          '54' : '.54'
        },
        padding : {
          '28' : '88px'
        },
        borderWidth : {
          '3' : '3px'
        },
        letterSpacing : {
          'custom-1' : '1px'
        }
      },

      colors : {
        transparent: 'transparent',
        primary : '#00335a',
        secondary : '#33b6b1',
        ternary : '#3f3f3f',
        white : "#FFFFFF",
        teal : {
          100 : '#006c8e',
          200 : '#006C8D',
        },
        gray : {
          40 : '#f2f2f2',
          50 : '#f5f5f5',
          55: '#fafafa',
          60: '#f6f6f6',
          100 : '#e0e0e0',
          200: '#3f3f3f',
        },
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        black : {
          20 : '#222',
        }
      },

      fontSize: {
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        72: ['72px' , '88px'],
        }
    },

    variants: {
      extend: {
        padding: ['last'],
        margin: ['last','responsive'],
      }
    },

    plugins: [
      require('tw-elements/dist/plugin'),
      function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
            '@screen xs': {
              paddingLeft : '20px',
              paddingRight : '20px',
            },
            '@screen lg': {
              maxWidth: '944px',
              paddingLeft : '0px',
              paddingRight : '0px',
            },
            '@screen xl': {
              maxWidth: '1200px',
            },
          }
        })
      }
    ],
}
