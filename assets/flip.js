

let cardsAndImg = {};

let allCards = document.querySelectorAll("#servicios-link div.flip-card-inner");
let allImg = document.querySelectorAll("#servicios-link .flip-card");

for (let i = 0; i < allCards.length; i++) {
    cardsAndImg[i] = false;
    allImg[i].addEventListener('mouseenter', (e) => {
        if (cardsAndImg[i]) {
            return;
        }
        allCards[i].classList.add("rotate");
        cardsAndImg[i] = true;
        setTimeout(function () {
            cardsAndImg[i] = false;
            console.log("hi")
        }, 2000);
    });

    allImg[i].addEventListener('mouseleave', (e) => {

        console.log("on out");
        if (cardsAndImg[i]) {
            setTimeout(function () {
                cardsAndImg[i] = false;
                allCards[i].classList.remove("rotate");
            }, 2000);
            return;
        }
        allCards[i].classList.remove("rotate");
    });
}
