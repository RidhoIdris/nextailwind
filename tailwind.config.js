module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'],
      },
      screens: {
        '-xl': {'max': '1279px'},  
        '-lg': {'max': '1023px'},  
        '-md': {'max': '767px'},  
        '-sm': {'max': '639px'},
        '-xs': {'max': '320px'},
      },
      colors:{},
      spacing: {
        '10p' : '10%',
        '15p' : '15%',
        '20p' : '20%',
        '30p' : '30%',
        '40p' : '40%',
        '50p' : '50%',
        '60p' : '60%',
        '70p' : '70%',
        '80p' : '80%',
        '90p' : '90%',
        '100p' : '100%',
        '10vh' : '10vh',
        '20vh' : '20vh',
        '30vh' : '30vh',
        '35vw' : '35vw',
        '40vh' : '40vh',
        '50vh' : '50vh',
        '60vh' : '60vh',
        '70vh' : '70vh',
        '80vh' : '80vh',
        '90vh' : '90vh',
        '100vh' : '100vh',
        '10vw' : '10vw',
        '20vw' : '20vw',
        '30vw' : '30vw',
        '40vw' : '40vw',
        '50vw' : '50vw',
        '60vw' : '60vw',
        '70vw' : '70vw',
        '80vw' : '80vw',
        '90vw' : '90vw',
        '100vw' : '100vw',
        '400px' : '400px'
      },
    },
  },
  variants: [
    'responsive', 
    // 'group-hover', 
    // 'group-focus', 
    // 'focus-within', 
    // 'first', 
    // 'last', 
    // 'odd', 
    // 'even', 
      'hover', 
      'focus', 
    // 'active', 
    // 'visited', 
    // 'disabled'
  ],
  plugins: [],
};