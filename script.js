// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Change navigation bar style on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const scrolled = window.scrollY > 50;

    if (scrolled) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields in the form.');
    }
});
