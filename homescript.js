
// Smooth scrolling for anchor links with offset to adjust for fixed header
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = document.querySelector('header').offsetHeight;

        if (target) {
            window.scrollTo({
                top: target.offsetTop - headerOffset,
                behavior: 'smooth'
            });
        }
    });
});
const startQuizBtn = document.getElementById('start-quiz');

startQuizBtn.addEventListener('click', function () {
    window.location.href = 'home.html';
});

const chargeQuizBtn = document.getElementById('charge-quiz');

chargeQuizBtn.addEventListener('click', function () {
    window.location.href = 'charge.html';
});

const balanceQuizBtn = document.getElementById('balance-quiz');

balanceQuizBtn.addEventListener('click', function () {
    window.location.href = 'balance.html';
});

// Highlight active menu item based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Simple form validation for the contact section
const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const email = formData.get('email');
    const message = formData.get('message');

    if (!validateEmail(email)) {
        showFormErrorMessage('Please enter a valid email address.');
        return;
    }

    if (message.trim() === '') {
        showFormErrorMessage('Please enter a message.');
        return;
    }

    showFormSuccessMessage('Form submitted successfully!');
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showFormSuccessMessage(message) {
    formMessage.textContent = message;
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
}

function showFormErrorMessage(message) {
    formMessage.textContent = message;
    formMessage.classList.remove('success');
    formMessage.classList.add('error');
}
