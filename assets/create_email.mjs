import {resetClass, setClass} from './utilities/element.util.mjs';


let sendEmailBtn = document.querySelector('#emailBtnAction');
let successToast = document.querySelector("#toast-simple");
let sucessBanner = document.querySelector("#successBanner");

let contactForm = document.querySelector("#contactForm");

let nameInputEl =  document.querySelector('#nameInput');

let emailInputEl =  document.querySelector('#emailInput');

let phoneInputEl =  document.querySelector('#phoneInput');


sendEmailBtn.addEventListener('click',()=>{

    resetClass('hidden',sucessBanner);
    resetClass('hidden',successToast);
    setTimeout(()=>{
        setClass('hidden',successToast);
    },5000);

    contactForm.innerHTML='';
    contactForm.append(sucessBanner);
 //sendEmailBtn.disable=true;
 /*fetch("https://my-first-worker.jaisen-95.workers.dev/send", {
   method: "post",
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },

   //make sure to serialize your JSON body
   body: JSON.stringify({

     user: {
	name:nameInputEl.value,
        email: emailInputEl.value,
	phone: phoneInputEl.value
	}
   })
 })
 .then( (response) => {
   sendEmailBtn.disable=false;

 });*/
 

});
