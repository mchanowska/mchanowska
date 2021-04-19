  module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          nunito: ['Nunito'],
          shadows: ['Shadows Into Light Two'] 
           },
           keyframes: {
            figma: {
              '0%': {width: '0%'},
              '100%': {width: '75%'}
            },
            html : {
              '0%': {width: '0%'},
              '100%': {width: '50%'}
            },
            javascript : {
              '0%': {width: '0%'},
              '100%': {width: '25%'}
            },
            fade : {
              'from' : {opacity: 0},
              'to' : {opacity: 1}
            }
           },
           animation: {
             figma: 'figma 1s ease-in-out',
             html: 'html 1s ease-in-out',
             javascript: 'javascript 1s ease-in-out',
             fade: 'fade 1s',
           },
           backgroundImage: theme => ({
            'contact': "url('/public/img/map.png')",
           }),
           colors: {
            body: "#475385",
            primary: {
              50: "#4F68D5",
              100: "#2F4AC2",
              200: "#1B2B70",
              300: "#111B47",
            }
           }
      },
    },
    variants: {
      extend: {
        animation: ['hover' , 'focus'],
        display: ['group-hover' , 'group-focus'],
      },
    },
    plugins: [],
  }
