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
const journalSubmissionForm = document.getElementById("journalSubmissionForm");
const formMessage = document.getElementById("formMessage");

if (journalSubmissionForm && formMessage) {
  journalSubmissionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.classList.add("success");
    formMessage.innerHTML =
      "Thank you. Your manuscript information has been recorded in this demo form. To receive real submissions, please connect this form to Google Forms, Formspree, Netlify Forms, or a backend service.";

    journalSubmissionForm.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  });
}
