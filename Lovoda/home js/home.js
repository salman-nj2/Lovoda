// //  CAROUSEL

// var left = 1;
// var right = 4;

// function show(){
//     for(var i=left;i<=right;i++){
//     document.getElementById('c'+i).style.display = 'inline-block';
//     }
// }




// function prev(){
//     if(left <= 12 && right<=16){
//     document.getElementById('c'+left).style.display = 'none';
//     left++;
//     right++;


//     for(i=left;i<=right;i++){
//         document.getElementById("c"+i).style.display = "inline-block"
//     }
// } else {
//     return
// }
// }

// function frd(){
//     if(left>=2 && right >=0){
//     document.getElementById('c'+right).style.display = 'none';
    
//     left--;
//     right--;


//     for(i=left;i<=right;i++){
//         document.getElementById("c"+i).style.display = "inline-block"
//     }
// } else {
//     return
// }
// }




const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')
let counter = 1
var size = 1220
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


function prev(){
    if(counter >= 3) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function frd(){
    if(counter<=0) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}




