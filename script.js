const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
