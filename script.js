document.addEventListener('DOMContentLoaded', function() {

    // 1. Particles.js Background Animation
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff004f"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.8,
                "random": false
            },
            "size": {
                "value": 5,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ff004f",
                "opacity": 0.8,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_opacity": 1
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // 2. Typed.js Text Animation
    new Typed('#typed-text', {
        strings: ['Front-end Developer', 'Virtual Assistant', 'Creative Coder', 'Building Digital Experiences'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
    });
    
    // 3. Scroll Reveal Animations (Using a single IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const revealElements = document.querySelectorAll('.scroll-animate');
    revealElements.forEach(el => observer.observe(el));

    // Fix for skills section
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(el => skillObserver.observe(el));
});