import {resetClass, setClass} from './utilities/element.util.mjs';


let sendEmailBtn = document.querySelector('#emailBtnAction');
let successToast = document.querySelector("#toast-simple");
let sucessBanner = document.querySelector("#successBanner");

let contactForm = document.querySelector("#contactForm");

let nameInputEl = document.querySelector('#nameInput');

let emailInputEl = document.querySelector('#emailInput');

let phoneInputEl = document.querySelector('#phoneInput');

let comentariosInputEl= document.querySelector('#comentariosInput');

sendEmailBtn.addEventListener('click', () => {

    resetClass('hidden', sucessBanner);
    resetClass('hidden', successToast);
    setTimeout(() => {
        setClass('hidden', successToast);
    }, 5000);

    contactForm.innerHTML = '';
    contactForm.append(sucessBanner);
    sendEmailBtn.disable = true;
    fetch("https://www.card-points.uk/mail", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            name: nameInputEl.value,
            email: emailInputEl.value,
            phone: phoneInputEl.value,
            content: comentariosInputEl.value

        })
    })
        .then((response) => {
            sendEmailBtn.disable = false;

        });


});
