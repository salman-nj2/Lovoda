// Carousel

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')
let counter = 1
var size = 1220
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // will show second set of 4 slides when refreshed


// previous button to show previous 4 slides

function prev(){
    if(counter >= 3) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// next button to show next 4 slides

function frd(){
    if(counter<=0) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}




