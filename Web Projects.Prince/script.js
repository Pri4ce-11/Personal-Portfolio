// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeMobileMenu();
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Projects Modal
const projectsBtn = document.querySelectorAll('.projects-btn');
const modal = document.getElementById('projectsModal');
const closeBtn = document.querySelector('.close');

projectsBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Parallax effect for stars
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.stars').style.transform = `translateY(${scrolled * 0.5}px)`;
    document.querySelector('.stars2').style.transform = `translateY(${scrolled * 0.25}px)`;
    document.querySelector('.stars3').style.transform = `translateY(${scrolled * 0.75}px)`;
});

// Web slinging effect (Spiderman vibe)
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(45deg, #ff0000, #ff6600)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(45deg, #00ffff, #0099cc)';
    });
});