document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .card, .leader-card, .link-card, .about-text, .about-image');
        const windowHeight = window.innerHeight;
        
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translate(0)';
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Form submission
    const form = document.getElementById('subscribe-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            // Here you would typically send the data to a server
            console.log('Subscribed with email:', email);
            
            // Show success message
            alert('Спасибо за подписку! Мы будем держать вас в курсе наших новостей.');
            form.reset();
        });
    }

    // Add hover effect to cards on touch devices
    function setupTouchHover() {
        if ('ontouchstart' in window) {
            document.querySelectorAll('.card, .leader-card, .link-card').forEach(card => {
                card.addEventListener('touchstart', function() {
                    this.classList.add('hover');
                });
                
                card.addEventListener('touchend', function() {
                    setTimeout(() => {
                        this.classList.remove('hover');
                    }, 500);
                });
            });
        }
    }
    
    setupTouchHover();
});