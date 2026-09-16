// Control del Menú Móvil
        function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }

        function closeMenu() {
            document.getElementById('navLinks').classList.remove('active');
        }

        // Efecto de aparición al hacer scroll (Fade In Up)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Solo animar una vez
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Efecto de sombra en el header al hacer scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
