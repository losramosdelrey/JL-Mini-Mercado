// 1. Control del Menú Móvil
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        function closeMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }

        // 2. Animación de aparición al hacer scroll (Intersection Observer)
        // Es mucho más ligero que escuchar el evento 'scroll' constantemente
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Dejar de observar una vez animado
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => observer.observe(el));
        });

        // 3. Smooth Scroll para navegadores antiguos que no soporten CSS scroll-behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
