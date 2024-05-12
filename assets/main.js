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



function onVisibilityChange(el, callback) {
	var old_visible;
	return function () {
		var visible = isElementInViewport(el);

		if (visible != old_visible) {

			if(visible){
				let allExceptelement = [...allTrucks];

				if(allExceptelement.includes(el)){
					var index = allExceptelement.indexOf(el);
					if (index !== -1) {
						allExceptelement.splice(index, 1);
					}
				}
				allExceptelement.forEach(e=>	{
					e.style.fill=("red")
					e.classList.remove("animate-shake");
				});
				if (typeof callback == 'function') {
					callback();
				}
			}
			old_visible = visible;
		}
	}
}

let handlers = allTrucks.map(e=> onVisibilityChange(e, ()=>{
	e.style.fill=("blue");
	e.classList.add("animate-shake");

}));



if (window.addEventListener) {
	handlers.forEach(f=>{
		addEventListener('DOMContentLoaded', f, false);
		addEventListener('load', f, false);
		addEventListener('scroll', f, false);
		addEventListener('resize', f, false);
	})

}





function incrementStatus(){
	let travelsCounter = document.querySelector("#travelsCounter");
	let counter=1;
	let intervalCounterID = setInterval(()=>{
		travelsCounter.innerHTML=counter+"+";
		counter++;
		if(counter>500){
			clearInterval(intervalCounterID);
		}
	},5);
}
setInterval(incrementStatus,5000)
incrementStatus();
// addEventListener('scroll',function onScroll(e) {
//
// 	if(window.scrollY+convertRemToPixels(80)>=origOffsetY){
// 		  trucksIncon.style.fill=("blue");
// 		}else{
//
// 		}
//
// });