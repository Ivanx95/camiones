import {animations} from './assets/animation.config.mjs';

module.exports = {
    content: ["./*.{html,js}"],
    theme: {

        extend: {
            colors: {
                main_blue: '#040c4c',
                main_orange: '#f5320f'
            },
            backgroundImage: {
                striped: 'linear-gradient(90deg, #040c4c 70%, rgb(229 231 235 ) 30%)',
                stripedThird: 'linear-gradient(90deg, #040c4c 50%, rgb(229 231 235 ) 50%)'
            },
            keyframes: animations,
            animation: {
                shake: 'shake 1s linear',
                fadeIn: 'fadeIn 2s linear',
                bounceIn: 'bounceIn 1s linear',
                slideIn: 'slideIn .25s linear',
                SlideInTop: 'SlideInTop .50s linear',
                fadeSlideIn : 'fadeSlideIn 1s linear',
                fadeSlideInTop : 'fadeSlideInTop 1s linear',
                fadeSlideInBottom : 'fadeSlideInBottom 1s linear'
            },
            spacing: {
                '104': '26rem',
                '128': '32rem',
                '160': '38rem',
                '170': '40rem',
            }
        }
    },
    plugins: [],
}

