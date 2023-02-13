// Animate on Scroll
AOS.init({
    once: true
});

// Burger menu
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = "./static/icons/nav/nav-close.svg";
    } else {
        navBtnImg.src = "./static/icons/nav/nav-open.svg";
    }
}