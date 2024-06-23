
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

function redirectToNewPage() {
    window.location.href = 'index.html'; // Change 'newpage.html' to the desired URL
}

    // Add event listener to the button
    document.getElementById('home-button').addEventListener('click', redirectToNewPage);
    
const unit9Btn = document.getElementById('unit9');

unit9Btn.addEventListener('click', function () {
    window.location.href = 'electro.html';
});

const unit1Btn = document.getElementById('unit1');

unit1Btn.addEventListener('click', function () {
    window.location.href = 'unit1.html';
});

const unit2Btn = document.getElementById('unit2');

unit2Btn.addEventListener('click', function () {
    window.location.href = 'unit2.html';
});

const unit3Btn = document.getElementById('unit3');

unit3Btn.addEventListener('click', function () {
    window.location.href = 'unit3.html';
});

const unit4Btn = document.getElementById('unit4');

unit4Btn.addEventListener('click', function () {
    window.location.href = 'unit4.html';
});

const unit5Btn = document.getElementById('unit5');

unit5Btn.addEventListener('click', function () {
    window.location.href = 'unit5.html';
});

const unit6Btn = document.getElementById('unit6');

unit6Btn.addEventListener('click', function () {
    window.location.href = 'unit6.html';
});

const unit7Btn = document.getElementById('unit7');

unit7Btn.addEventListener('click', function () {
    window.location.href = 'unit7.html';
});

const unit8Btn = document.getElementById('unit8');

unit8Btn.addEventListener('click', function () {
    window.location.href = 'unit8.html';
});

const pracQuizBtn = document.getElementById('prac-quiz');

pracQuizBtn.addEventListener('click', function () {
    window.location.href = 'apprac.html';
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
