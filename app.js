// Carousel
const carouselImages = document.querySelector(".carouselimages");
const carouselButtons = document.querySelectorAll(".carouselbutton");
let carouselXpos = 0;
let imageNum = 0;

for (let button of carouselButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("last") && imageNum > 0) {
            imageNum--;
            carouselXpos += 1200;
        }
        if (e.target.classList.contains("next") && imageNum < 4) {
            imageNum++;
            carouselXpos -= 1200;
        }
        carouselImages.style.transform = `translateX(${carouselXpos}px)`;
    });
}
