let sendEmailBtn = document.querySelector('#emailBtnAction');

let nameInputEl =  document.querySelector('#nameInput');

let emailInputEl =  document.querySelector('#emailInput');

let phoneInputEl =  document.querySelector('#phoneInput');


sendEmailBtn.addEventListener('click',()=>{

 sendEmailBtn.disable=true;
 fetch("https://my-first-worker.jaisen-95.workers.dev/send", {
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

    alert('Gracias por ponerte en contacto con nosotros!');
 });
 

});
