document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
  
    // Change menu style on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#555";
      } else {
        navbar.style.backgroundColor = "#333";
      }
    });
  });