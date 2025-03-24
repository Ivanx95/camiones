import {resetClass, setClass} from './utilities/element.util.mjs';


let sendEmailBtn = document.querySelector('#emailBtnAction');
let successToast = document.querySelector("#toast-simple");
let sucessBanner = document.querySelector("#successBanner");

let contactForm = document.querySelector("#contactForm");

let nameInputEl = document.querySelector('#nameInput');
let empresaInput = document.querySelector('#empresaInput');

let emailInputEl = document.querySelector('#emailInput');

let phoneInputEl = document.querySelector('#phoneInput');

let comentariosInputEl = document.querySelector('#comentariosInput');


function onEnter(e) {
    if (e.key === 'Enter') {
        doCall();
    }
}

nameInputEl.addEventListener('keypress', e => onEnter(e));


emailInputEl.addEventListener('keypress', e => onEnter(e));

phoneInputEl.addEventListener('keypress', e => onEnter(e));

comentariosInputEl.addEventListener('keypress', onEnter);


function validateInputs() {
    let warningNameInput = document.querySelector('#inputWarningName');
    let inputWarningPhone = document.querySelector('#inputWarningPhone');
    let inputWarningEmail = document.querySelector('#inputWarningEmail');
    let inputWarningComments = document.querySelector('#inputWarningComments');
    let inputWarningEmpresa = document.querySelector('#inputWarningEmpresa');

    let flag = true;
    flag &= validateVal(nameInputEl, warningNameInput);
    flag &= validateVal(phoneInputEl, inputWarningPhone);
    flag &= validateVal(emailInputEl, inputWarningEmail);
    flag &= validateVal(empresaInput, inputWarningEmpresa);
    flag &= validateVal(comentariosInputEl, inputWarningComments);
    return flag;
}

function validateVal(el, warningEl) {
    if (!el.value) {
        resetClass('hidden', warningEl);
        return false;
    } else {
        setClass('hidden', warningEl);
    }
    return true;
}

function doCall() {
    sendEmailBtn.disabled = true;
    if (!validateInputs()) {
        sendEmailBtn.disabled = false;
        return;
    }

    fetch("https://srv669887.hstgr.cloud/mail", {
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
            empresa: empresaInput.value,
            content: comentariosInputEl.value

        })
    }).then((response) => {

        if (response.status == 200) {
            toast();
        } else {
            alert("Un error ocurrío, por favor intente de nuevo mas tarde")

        }
    }).catch(e => {
        sendEmailBtn.disabled = false;
        alert("Un error ocurrío, por favor intente de nuevo mas tarde")
    });
}

sendEmailBtn.addEventListener('click', doCall);


function toast() {
    resetClass('hidden', sucessBanner);
    resetClass('hidden', successToast);
    setTimeout(() => {
        setClass('hidden', successToast);
    }, 5000);

    contactForm.innerHTML = '';
    contactForm.append(sucessBanner);

}