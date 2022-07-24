let burger = document.getElementById('burger');
let navLinks = document.getElementById('nav-links')

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('nav-active');
});