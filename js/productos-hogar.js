// 1. Generar las 50 tarjetas de producto con un bucle
        // (mucho más práctico que escribir 50 bloques de HTML a mano;
        // si mañana cambian el ícono o el formato, se cambia en un solo lugar)
        const boxIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>';

        // Ruta base de los banners de esta categoría
        const imgBasePath = '../images/banners/catalogo/productos-hogar/';

        // Archivos de banner disponibles, en el orden en que se asignan a los productos 1..N
        const productImages = [
            'bascula_digital_corporal.webp',
            'bolsas_de_basura_15_piezas.webp',
            'bombillo_recargable_de_tres_baterias.webp',
            'bombillo_recargable_cogante_xc30.webp',
            'bombillo_recargable_de_2_baterias.webp',
            'cafetera_marwa_estilo_italiano.webp',
            'cestos_de_basura_con_tapa_abatible.webp',
            'cochon_full_camero_la_linda.webp',
            'cortina_de_ducha_de_pvc.webp',
            'desengrasante_1lt.webp',
            'detergente_alcalino_clean_plac_2kg.webp',
            'escoba_con_recogedor.webp',
            'frazada_de_piso.webp',
            'detergente_amoniacal_amon_2kg.webp',
            'esponja_para_fregado.webp',
            'estropajo_con_fibra_verde_alimerka.webp',
            'frazada_de_piso_lil.webp',
            'set_de_utensilios_de_limpieza.webp',
            'guantes_para_la_limpieza.webp',
            'lampara_recargable_hnb_7718_2w.webp',
            'lampara_recargable_multifuncional_jy_7078d.webp',
            'lamparas_recargables_con_bombillo_ja_2011a.webp',
            'lavaplatos_en_gel_de_fresa_250gr.webp',
            'lavaplatos_en_gel_de_limon_250gr.webp',
            'lavavajillas_teide_2l.webp',
            'lejia_con_detergente_2lt.webp',
            'limpiador_para_muebles_283gr.webp',
            'olla_de_presion_5lt_china.webp',
            'olla_de_presion_de_rosca_5lt.webp',
            'olla_de_presion_inducción_7lts.webp',
            'olla_de_presion_millexus.webp',
            'recogedor.webp',
            'sanibrill_2kg.webp',
            'set_de_4_tazas_con_organizador.webp',
            'set_de_cazuelas_marwa.webp',
            'set_de_cocina_multifuncional.webp',
            'set_de_cuchillos_15_piezas.webp',
            'set_de_utencilios_de_cocina_color_negro.webp',
            'set_conservacion_para_suelos_20kg.webp'

        ];

        // Convierte "Detergente_Alcalino_Clean_Plac_2kg.webp" en "Detergente Alcalino Clean Plac 2kg"
        function toDisplayName(filename) {
            const noExt = filename.replace(/\.[^/.]+$/, '');
            const spaced = noExt.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
            return spaced.charAt(0).toUpperCase() + spaced.slice(1);
        }

        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        for (let i = 1; i <= 50; i++) {
            const imgFile = productImages[i - 1];
            let bannerHTML;
            let nameText;

            if (imgFile) {
                const displayName = toDisplayName(imgFile);
                const src = imgBasePath + encodeURIComponent(imgFile);
                bannerHTML = `<img src="${src}" alt="${displayName}" loading="lazy">`;
                nameText = displayName;
            } else {
                bannerHTML = boxIcon;
                nameText = `Producto ${i}`;
            }

            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${i}</span>
                    <div class="product-banner${imgFile ? ' has-image' : ''}">${bannerHTML}</div>
                    <div class="product-info">
                        <p>${nameText}: <span class="price">$0.00 USD</span></p>
                    </div>
                </div>
            `;
        }

        productGrid.innerHTML = cardsHTML;

        // 2. Control del Menú Móvil (igual que en index.html)
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        function closeMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }

        // 3. Animación de aparición al hacer scroll (igual que en index.html)
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
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => observer.observe(el));
        });
