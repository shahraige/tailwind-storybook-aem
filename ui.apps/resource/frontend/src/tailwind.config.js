module.exports = {
    purge: {
      mode: 'jit',
      content: [
        './components/**/*.js',
        './src/**/*.js',
      ],
    },
    // theme: {
    //   screens: {
    //     'sm': '640px',
    //     // => @media (min-width: 640px) { ... }
  
    //     'md': '768px',
    //     // => @media (min-width: 768px) { ... }
  
    //     'lg': '1024px',
    //     // => @media (min-width: 1024px) { ... }
  
    //     'xl': '1280px',
    //     // => @media (min-width: 1280px) { ... }
  
    //     '2xl': '1536px',
    //     // => @media (min-width: 1536px) { ... }
    //   }
    // },
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... } 
    
        'md': '768px',
        // => @media (min-width: 768px) { ... }
    
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
    
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
        container: {
          center: true,
          padding : "20px",
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
          }
        },

        colors : {
          primary : '#00335a',
          secondary : '#33b6b1',
          ternary : '#3f3f3f',
          white : "#FFFFFF",
          gray : {
            50 : '#f5f5f5',
            100: '#fafafa',
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
      require('tw-elements/dist/plugin')
    ],
}
