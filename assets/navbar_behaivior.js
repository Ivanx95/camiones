import {resetClass, setClass} from './utilities/element.util.mjs';

let state = true;

function showMenu() {
    if (state) {
        resetClass('hidden', burguerMenu);
        state = !state;
    } else {
        setClass('hidden', burguerMenu);
        state = !state;
    }
}


window.onload=function (){

    let burguerMenu = document.querySelector("#burguerMenu");
    let closeBtn = document.querySelector("#closeBtn");
    let burguerBtn = document.querySelector("#burguerBtn")


    burguerBtn.addEventListener('click', showMenu);
    closeBtn.addEventListener('click', showMenu);

};