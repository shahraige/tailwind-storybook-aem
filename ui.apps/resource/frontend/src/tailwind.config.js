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
    
    theme: {
      fontFamily : {
        'sans': 'Roboto, Arial, sans-serif',
        'heading': ['Roboto', 'Arial', 'sans-serif'],
        'body': ['Roboto', 'Arial', 'sans-serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1360px',
        xxxl: '1680px',
      },

      container: {
        center: true,
        padding : "20px",
      },

      boxShadow : {
        'custom-1' : '0 2px 4px 0 rgba(0, 0, 0 , 0.07)'
      },

      extend: {
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
        }
      },

      colors : {
        primary : '#00335a',
        secondary : '#33b6b1',
        ternary : '#3f3f3f',
        white : "#FFFFFF",
        gray : {
          50 : '#f5f5f5',
          55: '#fafafa',
          100 : '#e0e0e0',
          200: '#3f3f3f',
        },
        'black-rgba': 'rgba(0, 0, 0, 0.54)'
      },

      fontSize: {
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
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
            '@screen sm': {
              maxWidth: '1200px',
            },
            '@screen md': {
              maxWidth: '1200px',
            },
            '@screen lg': {
              maxWidth: '1200px',
            },
            '@screen xl': {
              maxWidth: '1200px',
            },
          }
        })
      }
    ],
}
