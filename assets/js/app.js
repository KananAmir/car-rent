// HOME PAGE
let liked = document.querySelectorAll('.fa-heart');

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


// PAYMENT PAGE

let payments = Array.from(document.getElementsByClassName('pick_method'));
let methods = Array.from(document.getElementsByClassName('payment_method_content'));
let method;

function changeVisibility(element) {
    if (element.id === method) {
        element.style.display = 'inherit';
    } else {
        element.style.display = 'none';
    }
}

function showMethod(event) {
    method = event.target.value;
    methods.forEach(element => changeVisibility(element));
}

payments.forEach(method => method.addEventListener('change', showMethod));
