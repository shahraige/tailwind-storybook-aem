module.exports = {
    purge: {
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
        extend: {
          colors : {
            primary : '#00BFB2',
            brown: {
              50: '#fdf8f6',
              100: '#f2e8e5',
              200: '#eaddd7',
              300: '#e0cec7',
              400: '#d2bab0',
              500: '#bfa094',
              600: '#a18072',
              700: '#977669',
              800: '#846358',
              900: '#43302b',
            },
            black : '#000000',
            'black-rgba': 'rgba(0, 0, 0, 0.54)'
          },
          minHeight: {
            'inherit': 'inherit',
          },
          textOpacity: {
            '54' : '.54'
          }
        },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
}
