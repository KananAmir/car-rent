// HOME PAGE
let liked = document.querySelectorAll('.fa-heart');

console.log(liked);

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

