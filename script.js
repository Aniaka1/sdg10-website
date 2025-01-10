const navBar = document.querySelector("nav");
const menuBtn = document.querySelector("#mobile-menu");
const navMenu = document.querySelector(".navbar-menu");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".navbar-menu-link");

window.addEventListener("scroll",()=>{
    navBar.classList.toggle("sticky",window.scrollY > 0);
})

menuBtn.addEventListener("click",()=>{
    navMenu.classList.add("active");
})

closeBtn.onclick = ()=>{navMenu.classList.remove("active")};

navLinks.forEach(link =>{
    link.addEventListener("click",()=>{
        navMenu.classList.remove("active");
    })
})

//scroll reveal
const sr = ScrollReveal({
    origin:"bottom",
    duration:2000,
    distance:"40px",
    delay:400,
    easing:"ease-in-out",
});

sr.reveal(".hero-headlines",{origin:"left"});
sr.reveal(".hero-page-img",{origin:"right"});
sr.reveal(".about-container h1",{delay:500});
sr.reveal(".about-container p",{delay:700});
sr.reveal(".about-info");
