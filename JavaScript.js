// JavaScript.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menu = document.getElementById('menu');
    const navbar = document.querySelector('.navbar ul');

    menu.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu after click
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    // Highlight current section in the navbar
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });

    // Handle contact form submission
    const form = document.querySelector('.form-container form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const number = formData.get('number');
        const message = formData.get('message');

        // Log the form data (replace this with actual form submission logic)
        console.log({
            name,
            email,
            number,
            message
        });

        // Clear the form
        form.reset();

        // Display a success message (replace this with your own logic)
        alert('Form submitted successfully!');
    });
});
