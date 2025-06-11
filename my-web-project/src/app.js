// This file contains the JavaScript code for the application. It handles the functionality and interactivity of the web application.

document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = "Hello, welcome to my web project!";
});

// Hamburger menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Navbar button scroll functionality
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const section = document.getElementById(this.dataset.target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close menu on mobile after click
    document.querySelector(".nav-links").classList.remove("show");
  });
});

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.remove("show");
  });
});

// Accordion functionality
document.querySelectorAll(".accordion-toggle").forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const isActive = this.classList.contains("active");
    document
      .querySelectorAll(".accordion-toggle")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".accordion-content")
      .forEach((c) => c.classList.remove("active"));
    if (!isActive) {
      this.classList.add("active");
      content.classList.add("active");
    }
  });
});

// Contact form modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact-form");
  const modal = document.querySelector("#contact-modal");
  const modalContent = document.querySelector("#contact-modal-content");
  const modalClose = document.querySelector("#contact-modal-close");

  if (contactForm && modal && modalContent && modalClose) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      let output = "<h2>Submitted Information</h2><ul>";
      for (const [key, value] of formData.entries()) {
        output += `<li><strong>${key}:</strong> ${value}</li>`;
      }
      output += "</ul>";
      modalContent.innerHTML = `<button id="contact-modal-close">&times;</button>${output}`;
      modal.classList.add("show");
      modal.querySelector("#contact-modal-close").onclick = function () {
        modal.classList.remove("show");
      };
    });

    modalClose.addEventListener("click", function () {
      modal.classList.remove("show");
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
});
