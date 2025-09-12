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
                "value": "#ff004f" // Red glow color
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
        strings: ['Frontend Developer', 'Typist', 'Creative Coder', 'Building Digital Worlds'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
    });
    
    // 3. Scroll Reveal Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // 10% hissa nazar anay par animation trigger ho
    });

    // Observe all elements with the class 'scroll-reveal'
    // const revealElements = document.querySelectorAll('.scroll-reveal');
    // revealElements.forEach(el => observer.observe(el));

const revealElements = document.querySelectorAll('.scroll-animate');
revealElements.forEach(el => observer.observe(el));


    // Special observer for skill bars to trigger animation only once
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                skillObserver.unobserve(entry.target); // Animation ke baad observe karna band kar dein
            }
        });
    }, {
        threshold: 0.5 // 50% hissa nazar anay par
    });
    
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(el => skillObserver.observe(el));

});