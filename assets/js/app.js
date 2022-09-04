// HOME PAGE
const popuarCars = Array.from(document.getElementsByClassName('popular'));
const popularContainer = document.getElementById('popular_cars_container');
let liked = document.querySelectorAll('.fa-heart');
let mob_view = window.matchMedia("(max-width: 768px)");
let slideStart = 0;

liked.forEach(heart => {
    heart.addEventListener('click', function () {
        if (heart.classList.contains('fa-regular')) {
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
        } else {
            heart.classList.add('fa-regular');
            heart.classList.remove('fa-solid');
        }
    });
});

function hideRest(){
    popuarCars[0].style.display = 'block'
    for(let i=1; i<popuarCars.length; i++){
        popuarCars[i].style.display = 'none';
    }
}

function slideTouched (){
    let slides = Array.from(popularContainer.children);
    if(slideStart<3) {
        slides[slideStart].style.display = 'none';
        slideStart++;
        slides[slideStart].style.display = 'block';
    } else {
        slides[slideStart].style.display = 'none';
        slideStart = 0;
        slides[slideStart].style.display = 'block';
    }
}

if(mob_view) {
    hideRest();
}

popularContainer.addEventListener('touchend', slideTouched)

