

let navBarMenu = document.querySelector("#navBarMenu")

let menuOptions = [...navBarMenu.children];


let navBarActiveColor = 'bg-main_blue';
let navBArActiveTextColor = 'text-white';
let navBarSecoundaryTextColor = 'text-gray-400';


menuOptions.forEach(e=>{
	e.addEventListener('click',(e1)=>{

		menuOptions.forEach(e => e.classList.remove(navBarActiveColor,navBArActiveTextColor));
		menuOptions.forEach(e => e.classList.add(navBarSecoundaryTextColor));

		const source = event.target || event.srcElement;
		source.classList.add("bg-main_blue","text-white");

	});
})


if(window.location.hash) {
	let hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

	menuOptions.forEach(e => e.classList.remove(navBarActiveColor,navBArActiveTextColor));
	menuOptions.forEach(e => e.classList.add(navBarSecoundaryTextColor));

	let selectedSeciton =  document.querySelectorAll("[href*=\"#"+hash+"\"]")[1];
	selectedSeciton.classList.add("bg-main_blue","text-white");
	// hash found
} else {
	// No hash found
}
