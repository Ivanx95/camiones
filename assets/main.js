let trucksSticky  = document.getElementsByClassName('sticky')[0];

let trucksIncon1  = document.getElementsByTagName('svg')[0];
let trucksIncon2  = document.getElementsByTagName('svg')[1];
let trucksIncon3  = document.getElementsByTagName('svg')[2];
// let  origOffsetY = trucksSticky.offsetTop;

let allTrucks = [trucksIncon1,trucksIncon2,trucksIncon3];
function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function pixelToRem(px) {
	return (px / (parseFloat(getComputedStyle(document.documentElement).fontSize))/2);
}

function isElementInViewport (el) {



	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
	);
}




let navBarMenu = document.querySelector("#navBarMenu")

let menuOptions = [...navBarMenu.children];


let navBarActiveColor = 'bg-orange-500';
let navBArActiveTextColor = 'text-white';
let navBarSecoundaryTextColor = 'text-gray-400';
let firstOption = menuOptions[0];

menuOptions.forEach(e=>{
	e.addEventListener('click',()=>{
		setClass(navBarSecoundaryTextColor,firstOption);
		menuOptions.forEach(e1=>resetClass(navBarActiveColor, e1));
		setClass(navBarActiveColor,e);
		menuOptions.forEach(e1=>resetClass(navBArActiveTextColor, e1));
		setClass(navBArActiveTextColor,e);
	});
})

console.log("Hi")
