// 1. Generar las tarjetas de producto a partir de las imágenes reales
        // (basta con agregar/quitar un nombre de archivo en este arreglo;
        // el nombre visible y el banner se generan solos)
        const boxIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>';

        // Carpeta donde viven las fotos de esta categoría (ruta relativa desde /products/)
        // Si en el servidor la carpeta usa guiones: productos-bebidas-y-licores
        // Si usa espacios: productos-bebidas y licores
        const IMG_FOLDER = '../images/banners/catalogo/productos-bebidas y licores/';

        // Nombres de archivo tal cual están guardados en el servidor
        const productImages = [
            "anillos_de_acero_inoxidable_con_corazon_de_circon_para_mujer.webp",
            "aretes_de_acero_inoxidable_ss.webp",
            "aretes_de_acero_inoxidable.webp",
            "cadenas_de_acero_inoxidable_para_mujer_ss.webp",
            "cadenas_de_acero_inoxidable_para_mujer.webp",
            "colgante_de_plata_s925_estilo_pandora_alas_majestuosas.webp",
            "collar_de_acero_inoxidable_con_colgante_redondo.webp",
            "collar_de_acero_inoxidable_con_forma_de_corazon.webp",
            "collar_de_acero_inoxidable_de_eslabones_cubanos.webp",
            "conjunto_de_collares_multi_capa_en_dorado_18k.webp",
            "conjunto_de_joyas_de_4_piezas_con_diseño_de_estrella.webp",
            "reloj_dorado_con_esfera_negra.webp",
            "nuevo_reloj_de_cuarzo_de_alta_gama_resistente_al_agua.webp",
            "pendientes_de_aro_de_acero_inoxidable_de_estilo_minimalista.webp",
            "pendientes_de_aro_minimalistas_de_acero_inoxidable_glu.webp",
            "pendientes_de_aro_minimalistas_de_acero_inoxidable_chap.webp",
            "pendientes_de_boton_con_forma_de_hoja.webp",
            "pendientes_de_plata_s925_estilo_pandora_lazo_brillante.webp",
            "pulsera_blake_con_cuentas_marron_brecha_de_jaspe_de_8mm_y_4m.webp",
            "pulsera_de_plata_s925_estilo_pandora_momentos_con_corazon.webp",
            "relojes_de_mujer_de_cuerzo_con-correa_de_acero_inoxidable.webp",
            "pulsera_de_plata_s925_estilo_pandora_momentos_con_dado.webp",
            "pulsera_de_plata_s925_estilo_pandora_moments_con_lazo.webp",
            "pulsera_de_plata_s925_estilo_pandora_reflexions.webp",
            "pulsera_dorada_de_acero_inoxidable_304_con_baño_de_oro.webp",
            "pulsera_para_mujer_con_diseno_de_cruz.webp",
            "pulsera_para_mujer_de_acero_de_titanio_con_perlas.webp",
            "pulseras_de_acero_inoxidable.webp",
            "pulseras_joyeria_zirconia.webp",
            "reloj_de_caballero_con_movimiento_de_cuarzo.webp",
            "reloj_de_caballero_con_movimiento_de_cuarzo_y_esfera.webp",
            "reloj_green_de_cuarzo_para_hombre_con_correa_de_acero_inoxidable.webp",
            "reloj_de_cuarzo_para_hombre_con_correa_de_acero_y_esfera_redonda.webp",
            "reloj_de_cuarzo_para_hombre_con_correa_de_acero_esfera_redonda_plus.webp",
            "reloj_de_cuarzo_para_hombre_con_cristal_organico_brazalete.webp",
            "reloj_de_cuarzo_para_hombre_new_casual.webp",
            "reloj_de_cuarzo_para_mujer_con_correa_de_acero_inoxidable.webp",
            "pareja_reloj_de_cuarzo_para_mujer_con_correa_de_aleacion_y_cierre.webp",
            "reloj_de_cuarzo_para_mujer_con_correa_de_aleacion_esfera.webp",
            "reloj_de_hombre_con_movimiento_de_cuarzo_correa_de_malla.webp",
            "reloj_de_hombre_luminoso_resistente_al_agua.webp",
            "reloj_de_pulsera_elegante_para_mujer_bifanchi_gold_snake.webp",
            "reloj_mecánico_luminoso_e_impermeable_para_hombre.webp",
            "reloj_unisex_de_cuarzo_con_correa_de_acero_inoxidable_esfera.webp",
            "reloj_unisex_de_cuarzo_con_correa_de_acero_esfera_cuadrada.webp",
            "reloj_unisex_de_cuarzo_con_correa_de_acero_esfera_redonda.webp",
            "reloj_unisex_de_cuarzo_con_correa_de_aleacion_esfera.webp",
            "reloj_unisex_de_cuarzo_con_correa_de_aleacion_hebilla.webp",
            "zarcillos_joyeria_zirconia.webp",
            "tobilleras_de_acero_inoxidable_para_mujer.webp"
        ];

        // Convierte el nombre de archivo en un nombre de producto legible
        // Ej: "Reloj_de_cuarzo_para_hombre_New_Casual.webp" -> "Reloj de cuarzo para hombre New Casual"
        function nombreDesdeArchivo(filename) {
            return filename
                .replace(/(\.webp)+$/i, '')   // quita la(s) extensión(es) .webp
                .replace(/_/g, ' ')            // guiones bajos -> espacios
                .replace(/\s+/g, ' ')          // colapsa espacios repetidos
                .trim();
        }

        // Si una foto no carga, sustituye el <img> por el ícono de caja genérico
        // (se hace como función aparte -y no dentro del atributo onerror- porque
        // el SVG trae comillas dobles y rompía el HTML si iba embebido ahí)
        function manejarErrorImagen(imgEl) {
            const banner = imgEl.closest('.product-banner');
            if (banner) banner.innerHTML = boxIcon;
        }

        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        productImages.forEach((file, index) => {
            const i = index + 1;
            const nombre = nombreDesdeArchivo(file);
            // Codifica espacios en la ruta para que el navegador cargue bien la imagen
            const src = (IMG_FOLDER + file).replace(/ /g, '%20');

            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${i}</span>
                    <div class="product-banner">
                        <img src="${src}" alt="${nombre}" loading="lazy" onerror="manejarErrorImagen(this)">
                    </div>
                    <div class="product-info">
                        <p class="product-name">${nombre}</p>
                        <p><span class="price">$0.00 USD</span></p>
                    </div>
                </div>
            `;
        });

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
