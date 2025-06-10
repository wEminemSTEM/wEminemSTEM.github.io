// This file contains the JavaScript code for the application. It handles the functionality and interactivity of the web application.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Hello, welcome to my web project!';
});

// Hamburger menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Navbar button scroll functionality
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const section = document.getElementById(this.dataset.target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu on mobile after click
    document.querySelector('.nav-links').classList.remove('show');
  });
});