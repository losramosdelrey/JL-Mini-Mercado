// 1. Generar las tarjetas de producto (igual que productos-juguetes.html)
        // Ruta relativa desde products/productos-alimentos.html
        const imageBasePath = '../images/banners/catalogo/productos-alimentos/';

        const productImages = [
            'aceite_de_girasol_lda_lt.webp',
            'agua_natural_pet_330ml_mondariz.webp',
            'alitas_de_pollo_1kg.webp',
            'arroz_de_grano_extra_largo.webp',
            'atun_premium_en_aceite_vegetal_vima.webp',
            'azucar_blanca_cristalina_energy_kg.webp',
            'bebida_energetica_en_lata_250ml.webp',
            'bistec_de_cerdo_4lb.webp',
            'bolsa_de_caramelos_frutales_125gr_arcor.webp',
            'bolsa_de_pollo_2lb.webp',
            'café_molido_250g_purasangre.webp',
            'caja_de_cerveza_cristal_24u_335ml.webp',
            'caldo_de_ajo_y_perejil_12u_x_10g.webp',
            'caldo_de_pollo_12u_x_10g.webp',
            'carne_cocida_enlatada_loaf_200g_anglo.webp',
            'cartón_de_huevos_30_unidades.webp',
            'cerveza_parranda_500ml.webp',
            'cerveza-cristal-pack-de-4-unidades.webp',
            'chorizos_en_manteca_640gr_la_cayetana.webp',
            'delicias-de-pollo-precocidas-y-cogeladas-300gr.webp',
            'espaguetis_doga.webp',
            'espaguetis_lilla.webp',
            'extracto_de_tomate_stand_up_200g_oderich.webp',
            'filete_de_pescado_de_mar_jurel_merluza_perro_o_bonito_lb.webp',
            'frijol_negro_1kg.webp',
            'galletas_con_crema_de_vainilla_30gr.webp',
            'galletas_milk.webp',
            'garbanzo_en_frasco_de_cristal_400g_gourmet.webp',
            'garbanzos_iberia_340g.webp',
            'garbanzos_vima_540g.webp',
            'guisantes_partidos_chicharos_partidos_arbel_kg.webp',
            'hamburguesa_de_res_6u.webp',
            'hamburguesa_de_res_90g.webp',
            'hamburguesas_de_res_plena_ud_de_90g.webp',
            'leche_evaporada_377ml_vima_foods.webp',
            'lomo_de_cerdo_en_filete_lb.webp',
            'lomos_de_atun_en_aceite_vegetal_vima_1kg.webp',
            'malta_6x355ml.webp',
            'malta_24x355ml.webp',
            'malta_12x355ml.webp',
            'mayonesa_casera_vima_700ml.webp',
            'nectar_de_mango_sunchy_24_unidades.webp',
            'pasta_de_tomate_virna_400g.webp',
            'salchichon_al_ajo_2kg_bravo.webp',
            'salchichon_al_ajo_2kg.webp',
            'salsa_de_pimienta_verde_50g_calinort.webp',
            'salsa_de_pimientos_tabasco_59ml.webp',
            'ternera_a_la_jardinera_415gr_la_cayetana.webp'
        ];

        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        productImages.forEach((fileName, index) => {
            const num = index + 1;
            // Nombre para mostrar: quita la extensión y cambia "_" por espacios
            const displayName = fileName.replace(/\.webp$/i, '').replace(/_/g, ' ');
            // Codifica los espacios del nombre de archivo para que la URL sea válida
            const srcPath = imageBasePath + fileName.replace(/ /g, '%20');

            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${num}</span>
                    <div class="product-banner">
                        <img src="${srcPath}" alt="${displayName}" loading="lazy" onerror="imgError(this)">
                    </div>
                    <div class="product-info">
                        <p>${displayName}: <span class="price">$0.00 USD</span></p>
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
