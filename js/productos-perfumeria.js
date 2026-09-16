// 1. Generar las tarjetas de producto con un bucle
        // (mucho más práctico que escribir cada bloque de HTML a mano;
        // si mañana cambian las fotos o el formato, se cambia en un solo lugar)
        const imageBasePath = '../images/banners/catalogo/productos-perfumeria/';

        const productImages = [
            'agua_de_colonia_jazmin_radiante.webp',
            'agua_de_colonia_para_hombres_aqua_intense_s&c_(400_ml).webp',
            'agua_de_jazmin_bonabel_(300_ml).webp',
            'agua_de_perfume_para_mujer_missy_gg_azul_100ml.webp',
            'agua_de_tocador_para_hombre_romeo_y_julieta_confidential_s&c.webp',
            'apres_d_amor.webp',
            'black_opium.webp',
            'colonia_agua_de_orquideas_bonabel_s&c_(300_ml).webp',
            'colonia_battle_steel_lattino_de_scenabella_(250_ml).webp',
            'colonia_flor_de_cerezo_duru_(200_ml).webp',
            'colonia_oceano_fresco_duru_(200_ml).webp',
            'dolce_and_gabbana_light_blue.webp',
            'eau_de_parfum_alas_de_mariposa_mujer_suchel_camacho_(55_ml).webp',
            'eau_de_parfum_para_hombre_con_spray_men_power_(25_ml).webp',
            'eau_de_parfum_para_mujer_romeo_y_julieta_s&c_(100_ml).webp',
            'eau_de_toilette_para_mujer_romeo_y_julieta_confidential_s&c_(100_ml).webp',
            'perfume_1_billion.webp',
            'perfume_212.webp',
            'perfume_acqua_di_gio.webp',
            'perfume_boss.webp',
            'perfume_en_aerosol_natural_flor_carmesi_lovali_(100_ml).webp',
            'perfume_en_aerosol_natural_hotel_paris_heredera_(35_ml).webp',
            'perfume_en_aerosol_natural_la_vida_es_bella_onlyou_(35_ml).webp',
            'perfume_miss_coco_paris.webp',
            'perfume_n_3.webp',
            'perfume_para_hombre_advance_warning_lovali.webp',
            'perfume_para_hombre_franker_black_lovali.webp',
            'perfume_play_sport_pour_homme.webp',
            'perfume_vercage.webp',
            'sauvage_dior.webp',
            'set_de_gel_de_ducha_eau_de_toilette_solo_diva_para_mujer.webp',
            'set_de_gel_de_ducha_eau_de_toilette_solo_diva_para_mujer_nero.webp',
            'terre_de_hermes.webp',
            'tinte_para_cabello_castano_oscuro.webp',
            'tinte_para_el_cabello_caramelo_dulce_16_45ml_aroma_color.webp',
            'tinte_para_el_cabello_negro_01_45ml_aroma_color.webp',
            'tinte_para_el_cabello_rojo_profundo_27_45ml_aroma_color.webp',
            'tinte_para_el_cabello_rubio_escandinavo_18_45ml_aroma_color.webp',
            'udv_ulric_de_varens_original_oficial.webp'
        ];

        // Escapa caracteres especiales (& < > ") para que el HTML generado sea válido
        function escapeHtml(str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }

        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        productImages.forEach((fileName, index) => {
            const num = index + 1;
            // Nombre para mostrar: quita la extensión y cambia "_" por espacios
            const displayName = fileName.replace(/\.webp$/i, '').replace(/_/g, ' ');
            const safeDisplayName = escapeHtml(displayName);
            // Codifica los espacios del nombre de archivo y escapa el "&" para una URL/HTML válidos
            const srcPath = escapeHtml(imageBasePath + fileName.replace(/ /g, '%20'));

            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${num}</span>
                    <div class="product-banner">
                        <img src="${srcPath}" alt="${safeDisplayName}" loading="lazy" onerror="imgError(this)">
                    </div>
                    <div class="product-info">
                        <p>${safeDisplayName}: <span class="price">$0.00 USD</span></p>
                    </div>
                </div>
            `;
        });

        productGrid.innerHTML = cardsHTML;

        // Si una imagen no carga (ruta o nombre incorrecto), muestra un texto en su lugar
        function imgError(img) {
            img.onerror = null;
            img.style.display = 'none';
            const fallback = document.createElement('span');
            fallback.className = 'img-fallback';
            fallback.textContent = 'Imagen no disponible';
            img.parentElement.appendChild(fallback);
        }

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
