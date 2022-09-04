// HOME PAGE
let likeCount = 0;
let likes = document.querySelector("#heart-count")
let liked = document.querySelectorAll('.fa-heart');
likes.innerText = likeCount

liked.forEach(heart => {
    heart.addEventListener('click', function () {
        if (heart.classList.contains('fa-regular')) {
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
            likeCount+=1
            likes.innerText = likeCount
        } else {
            heart.classList.add('fa-regular');
            heart.classList.remove('fa-solid');
            likeCount -=1;
            likes.innerText = likeCount

        }
    });
});


//menu

let menuBtn = document.getElementById("sidebar-btn");
let sideBar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function(){
    if(sideBar.classList.contains("active")){
        sideBar.classList.remove("active");
    }else{
        sideBar.classList.add("active")
    }
})


//images 
let mainImg = document.getElementById("mainImg");
let carImages = document.querySelectorAll(".car-image");

carImages.forEach(carImage => {
    carImage.addEventListener("click", function(){
        let carToRemove = document.querySelector(".image-wrapper.active");
        if(carToRemove != undefined){
            carToRemove.classList.remove("active")
        }
        carImage.parentElement.classList.add("active");
        let image = carImage.src
        mainImg.src = image
    })
})
