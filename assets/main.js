let trucksSticky  = document.getElementsByClassName('sticky')[0];

let trucksIncon  = document.getElementsByTagName('svg')[0];
let  origOffsetY = trucksSticky.offsetTop;

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}


addEventListener('scroll',function onScroll(e) {

	if(window.scrollY+convertRemToPixels(80)>=origOffsetY){
		  trucksIncon.style.fill=("blue");
		}else{
			
		}

});