module.exports = {
  mode: 'jit',
    purge: {
      content: [
        './components/**/*.js',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './public/**/*.html', 
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
      minHeight: {
        'inherit': 'inherit',
      },
    },
    plugins: [
      require('tw-elements/dist/plugin'),
    ],
}
