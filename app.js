function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Close the menu if a link is clicked
var links = document.querySelectorAll(".nav-links li");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("show");
  });
});
