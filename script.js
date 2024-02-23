//activate menu button

let menuBtn = document.querySelector("#menu-btn");
let menuBar = document.querySelector(".menu-bar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("bx-x");
  menuBar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("bx-x");
  menuBar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 1000,
  delay: 500,
});

ScrollReveal().reveal(".home-bio h1,.about-resume", { origin: "left" });
ScrollReveal().reveal(".home-bio p", { origin: "right" });
ScrollReveal().reveal(".home-bio, heading", { origin: "top" });
ScrollReveal().reveal(
  ".profile-pic,.about-items, .skills-items,.projects-items,.form",
  { origin: "bottom" }
);

const animText = new Typed(".animated-text", {
  strings: ["Web Developer", "Copy Writer", "Footballer"],
  backSpeed: 100,
  typeSpeed: 100,
  backdelay: 600,
  loop: true,
});
