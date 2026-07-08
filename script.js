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
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Button interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Button clicked:', this.textContent);
        // Add your button logic here
        if (this.textContent.includes('Launch Dashboard')) {
            alert('Dashboard feature coming soon! Stay tuned.');
        } else if (this.textContent.includes('Learn More')) {
            // Scroll to features section
            document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Feature card hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Lazy loading animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .step').forEach(el => {
    observer.observe(el);
});

// Console message for fun
console.log('%c Welcome to DetonationLab Dashboard! 🚀', 'color: #ff4444; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 68, 68, 0.5);');
console.log('%c Malware Analysis Platform in Development', 'color: #b0b0b0; font-size: 12px;');
