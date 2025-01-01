
function configureAnimation(elements, cssClass, once){
    // the callback function that will be fired
// when the element apears in the viewport

    let allShown ={};
    function onEntry(entry) {

        entry.forEach((change) => {
            if(change.isIntersecting){
                change.target.classList.add(cssClass);
                change.target.classList.remove('opacity-0');
                allShown[change]=true;
            }
        });
        if(allShown.lenght===elements.length){
            for (let elm of elements) {
                observer.unobserve(elm);
            }
        }

    }

// list of options
    let options = {
        threshold: [1]
    };

// instantiate a new Intersection Observer
    let observer = new IntersectionObserver(onEntry, options);

// list of paragraphs

    elements =  Array.from(elements);
// loop through all elements
// pass each element to observe method
// ES2015 for-of loop can traverse through DOM Elements
    for (let elm of elements) {
        observer.observe(elm);
    }

}


(function init(){
    let elements = document.querySelectorAll("[data-animation]")

    for (let elm of elements) {
        configureAnimation([elm], elm.dataset.animation,true);
    }
})();