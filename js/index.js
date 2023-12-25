const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.addEventListener("DOMContentLoaded", function () {
    var moon = document.querySelector(".moon");

    function handleScroll() {
      var scrollPosition = window.scrollY;

      if (scrollPosition === 0) {
        moon.classList.remove("scrolled");
      } else {
        moon.classList.add("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);
});
