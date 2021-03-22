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

// Subscribe Form
import users from "../data/users.js";
const subsribe_form = document.querySelector(".subscribe_form");
const user_name = document.querySelector("#name");
const user_email = document.querySelector("#email");

const handleSubscribe = (e) => {
    e.preventDefault();
    const new_user = {
        name: user_name.value,
        email: user_email.value,
    };
    users.push(new_user);
    console.log(users);
    subsribe_form.reset();
};

subsribe_form.addEventListener("submit", handleSubscribe);
