const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

const allNavLinks = document.querySelectorAll(".nav-links a");

allNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", function () {
  if (!backToTop) return;

  if (window.scrollY > 450) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

const allNavLinks = document.querySelectorAll(".nav-links a");

allNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", function () {
  if (!backToTop) return;

  if (window.scrollY > 450) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
