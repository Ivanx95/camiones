export const animations = {
    shake: {

        '0%': {transform: 'translateX(0px)'},
        '25%': {transform: 'translateX(5x)'},
        '75%': {transform: 'translateX(-5px)'},

    },
    fadeIn: {
        '0%': {opacity: 0},
        '100%': {opacity: 1},
    },
    slideIn: {
        from: {left: "-300px"},
        to: {left: 0}
    },
    fadeSlideIn: {
        from: {
            left: "-100px",
            opacity: 0,
            position: 'relative'
        },
        to: {
            left: 0,
            opacity: 1,
            position: 'relative'
        }
    },
    SlideInTop: {
        from: {
            top: "-300px",
            opacity: 0,
            position: 'relative'
        },
        to: {
            top: 0,
            opacity: 1,
            position: 'relative'
        }
    },
    fadeSlideInTop: {
        from: {
            top: "-100px",
            opacity: 0,
            position: 'relative'
        },
        to: {
            top: 0,
            opacity: 1,
            position: 'relative'
        }
    },
    fadeSlideInBottom: {
        from: {
            top: "100px",
            opacity: 0,
            position: 'relative'
        },
        to: {
            top: 0,
            opacity: 1,
            position: 'relative'
        }
    },
    blinkingColor: {
        from: {fill: 'blue;'},
        to: {fill: 'red;'}
    },
    particleEffect: {
        '0%': {filter: "blur(15px)"},
        '100%': {filter: "blur(0px)"},
    }
    ,
    zoomInRight:{
        '0%':{
            transform: 'scale3d(.1,.1,.1) translate3d(1000px,0,0)',
            timing: 'cubic-bezier(0.55,0.055,0.675,0.19);',
            opacity: 0,


           },
        '60%':{
            transform: 'scale3d(.475,.475,.475) translate3d(-10px,0,0)',
            timing: 'cubic-bezier(0.175,0.885,0.32,1)',
            opacity: 1,
        }

    }
    ,
    bounceIn: {
        '20%,40%,60%,80%,from,to': {
            timing: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)'
        },

        '0%': {
            opacity: 0,
            transform: 'scale3d(.3,.3,.3)'
        },

        '20%': {
            transform: 'scale3d(1.1,1.1,1.1)'
        },

        '40%': {
            transform: 'scale3d(.9,.9,.9)'
        },

        '60%': {
            opacity: 1,
            transform: 'scale3d(1.03,1.03,1.03)'
        },

        '80%': {
            transform: 'scale3d(.97,.97,.97)'
        },

        'to': {
            opacity: 1,
            transform: 'scale3d(1,1,1)'
        }
    }

}
