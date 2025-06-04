import {animations} from './assets/animation.config.mjs';

module.exports = {
    content: ["./*.{html,js}","./assets/*.{html,js}"],
    important: true,
    theme: {

        extend: {
            colors: {
                main_blue: '#040c4c',
                light_blue:'#2596be',
                strong_orange: '#f4340c',
                main_orange: '#ff7414',
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
                fadeSlideInBottom : 'fadeSlideInBottom 1s linear',
                particleEffect : 'particleEffect .3s linear',
                zoomInRight: 'zoomInRight 1.25s linear'
            },
            listStyleImage: {
                checkmark: 'url("/assets/checkmark.jpeg")',
            },
            spacing: {
                '104': '26rem',
                '128': '32rem',
                '132': '34rem',
                '136': '37rem',
                '152': '43rem',
                '160': '46rem',
                '170': '52rem',
                '172': '54rem',
                '190': '72rem',
            }
        }
    },
    plugins: [],
}

