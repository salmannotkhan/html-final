const header = document.querySelector("header");
const homeSection = document.querySelector("section#about");

const slider = document.querySelector(".slider-images");
const sliderControls = document.querySelectorAll(".slider button");

const observe = (entries, observer) => {
    if (entries[0].isIntersecting) {
        header.classList.add("white-bg");
        header.querySelector(".brand img").src =
            "./assets/images/logo-black.png";
    } else if (entries[0].boundingClientRect.y > 0) {
        header.classList.remove("white-bg");
        header.querySelector(".brand img").src =
            "./assets/images/logo-white.png";
    }
};

const observer = new IntersectionObserver(observe);
observer.observe(homeSection);

sliderControls.forEach((control, idx) => {
    control.addEventListener("click", (e) => {
        sliderControls.forEach((ctrl, idx) => {
            ctrl.classList.remove("active");
        });
        e.target.classList.add("active");
        slider.scrollTo({ left: idx * window.innerWidth, behavior: "smooth" });
    });
});
