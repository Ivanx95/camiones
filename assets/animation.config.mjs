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
    slideIn :{
        from: { left: "-300px"},
        to: {left: 0}
    },
    blinkingColor: {
        from: {fill: 'blue;'},
        to: {fill: 'red;'}
    },
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