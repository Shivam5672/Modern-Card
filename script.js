const slider = document.querySelectorAll('.swipe-cont');
let displaySlide = document.querySelector('#section');
const nextbtn = document.querySelector('.next-swipe-btn');
const prevbtn = document.querySelector('.prev-swipe-btn');
let slideNumber = 0;
displaySlide.innerHTML = slider[slideNumber].outerHTML;

nextbtn.addEventListener('click', function(){
    slideNumber++;
    if(slideNumber >= slider.length){
        slideNumber = 0;
    }
    console.log(slideNumber);
    displaySlide.innerHTML = slider[slideNumber].outerHTML;

});
prevbtn.addEventListener('click',function(){
    slideNumber--;
    if(slideNumber < 0){
        slideNumber = slider.length - 1;
    }
    console.log(slideNumber);
    displaySlide.innerHTML = slider[slideNumber].outerHTML;

});