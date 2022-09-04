let payments = Array.from(document.getElementsByClassName('pick_method'));
let methods = Array.from(document.getElementsByClassName('payment_method_content'));
let method;

function changeVisibility (element) {
    if(element.id === method){
        element.style.display = 'inherit';
    } else {
        element.style.display = 'none';
    }
}

function showMethod(event) {
    method = event.target.value;    
    methods.forEach( element => changeVisibility(element));
}

payments.forEach(method => method.addEventListener('change', showMethod));