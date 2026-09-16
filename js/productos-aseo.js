// 1. Listado real de productos (nombre corregido + archivo de imagen del banner)
        const boxIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>';
        const imgFolder = '../images/banners/catalogo/productos-aseo/';

        const products = [
            { file: "acondicionador_de_argan_355ml.webp", name: "Acondicionador de Argán 355ml" },
            { file: "algodon_facial_120_piezas.webp", name: "Algodón Facial 120 Piezas" },
            { file: "ambientador_de_coche_marc_marquez.webp", name: "Ambientador de Coche Marc Márquez" },
            { file: "champu_con_extracto_de_keratina_doxa_ml.webp", name: "Champú con Extracto de Keratina Doxa" },
            { file: "champu_con_keratina_doxa_life_ml.webp", name: "Champú con Keratina Doxa Life" },
            { file: "champu_de_argan_355ml.webp", name: "Champú de Argán 355ml" },
            { file: "champu_menta_doxa_life_ml.webp", name: "Champú de Menta Doxa Life" },
            { file: "combo_aseo_1.webp", name: "Combo de Aseo 1" },
            { file: "combo_aseo_2.webp", name: "Combo de Aseo 2" },
            { file: "combo_aseo_3.webp", name: "Combo de Aseo 3" },
            { file: "desengrasante_1l.webp", name: "Desengrasante 1L" },
            { file: "desodorante_Avena_Roll_On_IE_ml.webp", name: "Desodorante Avena Roll-On IE" },
            { file: "desodorante_invisible_antitranspirante_250ml.webp", name: "Desodorante Invisible Antitranspirante 250ml" },
            { file: "desodorante_roll_on_oliva_50_ml_babaria.webp", name: "Desodorante Roll-On Oliva 50ml BABARIA" },
            { file: "desodorante_spray_fragancia_folonia_200ml_belle_france.webp", name: "Desodorante Spray Fragancia Colonia 200ml Belle France" },
            { file: "desodorante_xtra_care_dry_fresh_57gr.webp", name: "Desodorante Xtra Care Dry Fresh 57gr" },
            { file: "detergente_alcalino_clean_plac_2kg.webp", name: "Detergente Alcalino Clean Plac 2kg" },
            { file: "detergente_amoniacal_amon_2kg.webp", name: "Detergente Amoniacal Amón 2kg" },
            { file: "detergente_de_lavar_en_polvo_500g_washo_plus.webp", name: "Detergente de Lavar en Polvo 500g WASHO PLUS" },
            { file: "detergente_lavado_de_ropa_klisol_2l.webp", name: "Detergente para Lavado de Ropa Klisol 2L" },
            { file: "detergente_multiusos_laf_5kg.webp", name: "Detergente Multiusos LAF 5kg" },
            { file: "detergente_ropa_blanca_prodoxa_kg.webp", name: "Detergente Ropa Blanca Prodoxa" },
            { file: "gel_de_bano_urea_ml.webp", name: "Gel de Baño Urea" },
            { file: "gel_de_bano_vita_san_2kg.webp", name: "Gel de Baño Vita San 2kg" },
            { file: "guantes_para_la_limpieza.webp", name: "Guantes para la Limpieza" },
            { file: "jabon_barra_aloe_vera_60_gr.webp", name: "Jabón en Barra Aloe Vera 60gr" },
            { file: "jabon_barra_aloe_vera_y_crema_150gr.webp", name: "Jabón en Barra Aloe Vera y Crema 150gr" },
            { file: "jabon_barra_miel_y_leche_150gr.webp", name: "Jabón en Barra Miel y Leche 150gr" },
            { file: "jabon_barra_miel_y_leche_60_gr.webp", name: "Jabón en Barra Miel y Leche 60gr" },
            { file: "jabon_barra_rosa_150gr.webp", name: "Jabón en Barra Rosa 150gr" },
            { file: "jabon_barra_rosa_60_gr.webp", name: "Jabón en Barra Rosa 60gr" },
            { file: "jabon_de_lavar_a_roma_vainilla_200gr.webp", name: "Jabón de Lavar Aroma Vainilla 200gr" },
            { file: "jabon_herbal_extract_170gr.webp", name: "Jabón Herbal Extract 170gr" },
            { file: "jabon_moisture_care_170gr.webp", name: "Jabón Moisture Care 170gr" },
            { file: "lavaplatos_en_gel_de_fresa_250gr.webp", name: "Lavaplatos en Gel de Fresa 250gr" },
            { file: "lavaplatos_en_gel_de_limon_250gr.webp", name: "Lavaplatos en Gel de Limón 250gr" },
            { file: "lavavajillas_teide_2l.webp", name: "Lavavajillas Teide 2L" },
            { file: "lejia_con_detergente_2l_.webp", name: "Lejía con Detergente 2L" },
            { file: "mascarilla_capital_oro_liquido_350gr.webp", name: "Mascarilla Capilar Oro Líquido 350gr" },
            { file: "papel_higienico_doble_capa_columbia_rollos.webp", name: "Papel Higiénico Doble Capa Columbia" },
            { file: "papel_higienico_familiar_2_capas_4u_familia.webp", name: "Papel Higiénico Familiar 2 Capas 4u FAMILIA" },
            { file: "papel_higienico_ole_4u_renova.webp", name: "Papel Higiénico Olé 4u RENOVA" },
            { file: "papel_higienico_renova_super_2_rollos.webp", name: "Papel Higiénico Renova Super 2 Rollos" },
            { file: "pasta_dental_activa_3_active_110g_astera.webp", name: "Pasta Dental Activa 3 Active 110g ASTERA" },
            { file: "pasta_dental_fresh_g.webp", name: "Pasta Dental Fresh" },
            { file: "pasta_dental_proteccion_contra_caries_110_gr_astera.webp", name: "Pasta Dental Protección Contra Caries 110gr ASTERA" },
            { file: "stel_conservacion_para_suelos_20kg.webp", name: "Stel Conservación para Suelos 20kg" },
            { file: "suavizante_para_ropa_3l.webp", name: "Suavizante para Ropa 3L" },
            { file: "suavizante_para_ropa_aroma_lavanda_3l.webp", name: "Suavizante para Ropa Aroma Lavanda 3L" },
            { file: "supervix_desengrasante_en_frio_5l.webp", name: "Supervix Desengrasante en Frío 5L" },
            { file: "tinte_para_cabello_castano_oscuro.webp", name: "Tinte para el Cabello Castaño Oscuro" },
            { file: "tinte_para_el_cabello_caramelo_dulce_16_45ml_aroma_color.webp", name: "Tinte para el Cabello Caramelo Dulce 16 45ml Aroma Color" },
            { file: "tinte_para_el_cabello_negro_01_45ml_aroma_color.webp", name: "Tinte para el Cabello Negro 01 45ml Aroma Color" },
            { file: "tinte_para_el_cabello_rojo_profundo_27_45ml_aroma_color.webp", name: "Tinte para el Cabello Rojo Profundo 27 45ml Aroma Color" },
            { file: "tinte_para_el_cabello_rubio_escandinavo_18_45ml_aroma_color.webp", name: "Tinte para el Cabello Rubio Escandinavo 18 45ml Aroma Color" },
            { file: "toallas_hmedas_agua_bolsa_12u_renova.webp", name: "Toallas Húmedas de Agua Bolsa 12u RENOVA" },
            { file: "Toallitas_Hmedas_Baby_Blue_Doxa_u.webp", name: "Toallitas Húmedas Baby Blue Doxa" },
            { file: "toallitas_hmedas_baby_pink_doxa_u.webp", name: "Toallitas Húmedas Baby Pink Doxa" },
            { file: "toallitas_hmedas_bloom_doxa_u.webp", name: "Toallitas Húmedas Bloom Doxa" },
            { file: "toallitas_hmedas_romance_doxa_u.webp", name: "Toallitas Húmedas Romance Doxa" }
        ];

        // 2. Generar las tarjetas a partir del listado real
        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        products.forEach((p, index) => {
            const imgSrc = encodeURI(imgFolder + p.file);
            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${index + 1}</span>
                    <div class="product-banner">
                        <img src="${imgSrc}" alt="${p.name}" loading="lazy"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                        <div class="banner-fallback">${boxIcon}</div>
                    </div>
                    <div class="product-info">
                        <p>${p.name}<br><span class="price">$0.00 USD</span></p>
                    </div>
                </div>
            `;
        });

        productGrid.innerHTML = cardsHTML;

        // 3. Control del Menú Móvil (igual que en index.html)
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        function closeMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }

        // 4. Animación de aparición al hacer scroll (igual que en index.html)
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
