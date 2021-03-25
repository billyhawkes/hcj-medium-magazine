// Carousel //
// Getting Elements
const carouselImages = document.querySelector(".carouselimages");
const carouselButtons = document.querySelectorAll(".carouselbutton");
let carouselXpos = 0;
let imageNum = 0;

// For Both Arrows
for (let button of carouselButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        // Shifts carouselXpos on arrow click and changes Image number
        if (e.target.classList.contains("last") && imageNum > 0) {
            imageNum--;
            carouselXpos += 1200;
        }
        if (e.target.classList.contains("next") && imageNum < 4) {
            imageNum++;
            carouselXpos -= 1200;
        }
        // Shifts CSS
        carouselImages.style.transform = `translateX(${carouselXpos}px)`;
    });
}

// Subscribe Form //
import users from "./data/users.js";
// Selecting Elements
const subsribe_form = document.querySelector("#subscribe_form");
const user_name = document.querySelector("#name");
const user_email = document.querySelector("#email");

// Submit Form Function
const handleSubscribe = (e) => {
    e.preventDefault();
    // User Model
    const new_user = {
        name: user_name.value,
        email: user_email.value,
    };
    // Push to user array (*Would be Magazine Database)
    users.push(new_user);
    console.log(users);
    // Resets form
    subsribe_form.reset();
};
// Form Submit Event Listener
if (subsribe_form) {
    subsribe_form.addEventListener("submit", handleSubscribe);
}
