const header = document.querySelector("header");

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar);

let sr = ScrollReveal({
    duration: 2500,
    ddistance: "60px",
});

sr.reveal(".showcase-info", {delay: 400})
sr.reveal(".showcase-image", {origin:"top", delay: 400})


