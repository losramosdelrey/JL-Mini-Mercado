/**
 * JL Mini Mercado - Sistema de idioma ES / EN
 * Guarda la preferencia en localStorage
 */
(function () {
  "use strict";

  const TRANSLATIONS = {
    es: {
      // Navegación
      "nav.home": "Inicio",
      "nav.catalog": "Catálogo",
      "nav.about": "Nosotros",
      "nav.contact": "Contacto",
      "nav.board": "Pizarra",
      "nav.open": "Abrir menú de navegación",
      "nav.close": "Cerrar menú de navegación",

      // Inicio - Hero
      "home.hero.title": '"El Precio se olvida, <br /><strong>la Calidad se recuerda</strong>"',
      "home.hero.subtitle": "Tu destino de confianza en Pinar del Río. Descubre nuestra selección premium de productos para la cocina, el hogar y tu estilo de vida.",
      "home.hero.cta": "Visítanos en nuestra Tienda",

      // Inicio - Propuesta de valor
      "home.why": "¿Por qué elegirnos?",
      "home.commitment": "Compromiso con Nuestros Clientes",
      "home.quality.title": "Calidad e Innovación",
      "home.quality.text": "Ofrecemos productos de alta calidad que combinan el buen gusto, la calidad y todo con un excelente servicio. Nuestro Mini Mercado JL trabaja para satisfacer tus necesidades con soluciones confiables, precios competitivos y atención personalizada. Descubre la diferencia de comprar con nosotros.",
      "home.leader.title": "El Mercado Líder de Pinar del Río",
      "home.leader.text": "No somos el mayor, pero sí somos el mejor Mercado para la familia pinareña para compras de Alimentos, Aseo Personal y del Hogar, Perfumería y muchísimo más.",

      // Testimonios
      "home.testimonials": "Lo Que Dicen Nuestros Clientes",
      "home.t1.text": "\"Encontré todo lo que buscaba para prepararle una sabrosa cena a mi hija embarazada. Escribí por WhatsApp, me confirmaron la disponibilidad al momento y no perdí tiempo en el viaje hasta la tienda.\"",
      "home.t1.role": "Cliente satisfecha con nuestros productos congelados",
      "home.t2.text": "\"Compré unos licores y confituras y el precio realmente valió la pena frente a lo que había visto en otros lugares. La calidad es la que prometen: se nota que seleccionan muy bien lo que venden.\"",
      "home.t2.role": "Cliente complacido con nuestros precios.",
      "home.t3.text": "\"Es mi tienda de confianza para la perfumería y el aseo personal y del hogar. La atención es siempre amable y personalizada, y siempre queda claro qué hay disponible antes de ir, solo basta con preguntar por WhatsApp.\"",
      "home.t3.role": "Cliente de Perfumería",

      // Divisiones / teaser
      "home.divisions": "Nuestras Divisiones Comerciales",
      "home.divisions.text": "Aseo Personal y del Hogar, Alimentos Variados y Perfumería: todo lo que necesitas en un solo lugar.",
      "home.catalog.cta": "Ver Catálogo Completo",
      "home.promise": "Más que una tienda, una promesa de calidad",
      "home.promise.text": "Conoce la esencia, los valores y el equipo humano detrás de cada producto que llega a tus manos en Mini Mercado JL.",
      "home.history.cta": "Conoce Nuestra Historia",
      "home.visit": "Visítanos o Contáctanos",
      "home.visit.text": "Calle Martí No. 124, Ciudad Pinar del Río. Escríbenos por WhatsApp o consulta todos nuestros datos de contacto.",
      "home.contact.cta": "Ver Datos de Contacto",

      // Catálogo
      "catalog.title": "Nuestro <strong>Catálogo</strong>",
      "catalog.subtitle": "Explora nuestras divisiones comerciales y consulta disponibilidad y precios en la Pizarra Digital.",
      "catalog.divisions": "Nuestras Divisiones Comerciales",
      "catalog.food": "Alimentos",
      "catalog.food.desc": "Sabor y frescura seleccionada para tu mesa.",
      "catalog.drinks": "Bebidas y Licores",
      "catalog.drinks.desc": "El buen gusto en cada sorbo.",
      "catalog.personal": "Aseo Personal",
      "catalog.personal.desc": "Productos de higiene personal.",
      "catalog.home": "Aseo del Hogar",
      "catalog.home.desc": "Detergentes, lavavajillas y limpieza.",
      "catalog.fragrances": "Fragancias",
      "catalog.fragrances.desc": "Fragancias que dejan huella.",
      "catalog.note": "* Los productos están sujetos a disponibilidad en nuestra tienda física.<br>Consulta la <strong>Pizarra Digital</strong> para ver existencia y precios actualizados.",
      "catalog.board.cta": "Abrir Pizarra Digital",
      "catalog.wa.cta": "Consultar disponibilidad por WhatsApp",

      // Contacto
      "contact.title": "Contáctanos",
      "contact.subtitle": "Estamos para servirte. Escríbenos, llámanos o visítanos en nuestro Mini Mercado.",
      "contact.section": "Visítanos o Contáctanos",
      "contact.serve": "Estamos para servirte",
      "contact.address": "Dirección Física",
      "contact.hours": "Horario de Atención",
      "contact.hours.value": "Todos los días,<br>de 8:00 a. m. a 7:00 p. m.",
      "contact.phones": "Teléfonos Móviles",
      "contact.emails": "Correos Electrónicos",
      "contact.wa.cta": "Escríbenos por WhatsApp — Respondemos al momento",
      "contact.map": "Abrir en Google Maps",

      // Nosotros
      "about.hero.title": "Más que una tienda,<br>una promesa de calidad",
      "about.hero.subtitle": "Conoce la esencia, los valores y el equipo humano detrás de cada producto que llega a tus manos desde JL Mini Mercado en Pinar del Río.",
      "about.history": "Nuestra Historia",
      "about.history.p1": "JL Mini Mercado nació con una convicción simple pero poderosa: los pinareños merecen acceder a productos de calidad mundial sin salir de su ciudad. Desde nuestros primeros pasos en la Calle Martí No. 124, hemos evolucionado de un pequeño local a un referente comercial diversificado.",
      "about.history.p2": "No solo vendemos productos; también curamos experiencias. Cada división, desde nuestra variedad de alimentos hasta el aseo personal y del hogar y la perfumería, han sido construida sobre la base de la confianza y el servicio personalizado.",
      "about.quote": '"Crecimos escuchando a nuestra comunidad, adaptándonos a sus sueños y necesidades."',
      "about.essence": "Nuestra <span>Esencia</span>",
      "about.essence.sub": "Los pilares que sostienen cada decisión que tomamos.",
      "about.mission": "Misión",
      "about.mission.text": "Ser el aliado confiable del hogar y la familia pinareña, ofreciendo una selección premium de productos que combinan calidad, buen gusto y excelentes precios. Nos dedicamos a transformar la compra en un acto de satisfacción y tranquilidad.",
      "about.vision": "Visión",
      "about.vision.text": "Aspiramos a ser el Mercado más querido y confiable de Pinar del Río, reconocido no solo por lo que vendemos, sino por cómo hacemos sentir a nuestros clientes. Queremos expandir nuestra presencia manteniendo la calidez de un negocio familiar.",
      "about.goals": "¿Qué <span>Queremos Lograr?</span>",
      "about.excel": "Excelencia Absoluta",
      "about.excel.text": "Garantizar que cada producto de nuestro catálogo supere las expectativas de calidad.",
      "about.loyalty": "Fidelización Real",
      "about.loyalty.text": "Crear vínculos duraderos donde el cliente se sienta parte de nuestra familia.",
      "about.innov": "Innovación Constante",
      "about.innov.text": "Traer las últimas tendencias en presencia y calidad de productos a nuestro mercado local antes que nadie.",
      "about.impact": "Impacto Local",
      "about.impact.text": "Contribuir al desarrollo económico y social de nuestra hermosa provincia.",
      "about.space": "Nuestro Espacio",
      "about.space.text": "Diseñado para tu comodidad, donde cada rincón invita a descubrir productos excepcionales.",
      "about.cta.title": "Ven a conocernos",
      "about.cta.text": "La mejor forma de entender nuestra pasión es visitándonos. Te esperamos con los brazos abiertos.",
      "about.cta.btn": "Visite nuestra tienda física",

      // Pizarra
      "board.title": "Pizarra <strong>Digital</strong>",
      "board.subtitle": "Consulta disponibilidad y precios de todos nuestros productos.",
      "board.hours": "Horario de atención: todos los días, de 8:00 a. m. a 7:00 p. m.",
      "board.available": "Si Hay",
      "board.unavailable": "Hoy no tenemos",
      "board.product": "Producto",
      "board.availability": "Disponibilidad",
      "board.price": "Precio",
      "board.note": "Nuestros productos han sido clasificados e inspeccionados por un comité profesional de la calidad.",
      "board.loading": "Cargando pizarra...",
      "board.available.word": "Si hay",
      "board.unavailable.word": "Hoy no tenemos",
      "board.available.count": "disponibles",


      // Categorías pizarra
      "board.cat.alimentos": "Alimentos",
      "board.cat.bebidas": "Bebidas y Licores",
      "board.cat.aseo_personal": "Aseo Personal",
      "board.cat.aseo_hogar": "Aseo del Hogar",
      "board.cat.fragancias": "Fragancias",

      // Subcategorías pizarra
      "board.sub.conservas": "Conservas",
      "board.sub.granos": "Granos",
      "board.sub.pastas": "Pastas",
      "board.sub.carnicos": "Cárnicos Frescos",
      "board.sub.jugos": "Jugos",
      "board.sub.mermeladas": "Mermeladas y Confituras",
      "board.sub.lacteos": "Lácteos",
      "board.sub.cereales": "Cereales",
      "board.sub.sopas": "Sopas y Potajes",
      "board.sub.condimentos": "Condimentos",
      "board.sub.infusiones": "Infusiones",
      "board.sub.vinos": "Línea de Vinos",
      "board.sub.espumosos": "Champagne, Sidras y Espumosos",
      "board.sub.licores": "Línea de Licores",
      "board.sub.rones": "Línea de Rones",
      "board.sub.destilados": "Vodka, Coñac, Ginebras y Whiskies",
      "board.sub.cervezas": "Cervezas, Maltas y Refrescos",
      "board.sub.desodorantes": "Desodorantes",
      "board.sub.jabones": "Jabones",
      "board.sub.shampoo": "Shampoo",
      "board.sub.acondicionador": "Acondicionador",
      "board.sub.cremas_piel": "Cremas para la Piel",
      "board.sub.dental": "Cepillos y Crema Dental",
      "board.sub.gel_bano": "Gel de Baño",
      "board.sub.papel_higienico": "Papel Higiénico",
      "board.sub.servilletas": "Servilletas",
      "board.sub.toallitas": "Toallitas Húmedas",
      "board.sub.sanitarias": "Almohadillas Sanitarias",
      "board.sub.detergente_polvo": "Detergente en Polvo",
      "board.sub.detergente_liquido": "Detergente Líquido para Lavar",
      "board.sub.lavavajillas": "Lavavajillas",
      "board.sub.suavizante": "Suavizante para Ropa",
      "board.sub.frazadas": "Frazadas y Accesorios",
      "board.sub.agua_tocador": "Agua de Tocador",
      "board.sub.perfumes": "Perfumes",

      // Footer
      "footer.slogan": '"El Precio se olvida, la Calidad se recuerda"',
      "footer.copyright": "© 2026 Sitio web creado por MSc. Reynaldo Ramos Pérez. Todos los derechos reservados. Pinar del Río, Cuba.",

      // Selector idioma
      "lang.es": "Español",
      "lang.en": "English"
    },

    en: {
      "nav.home": "Home",
      "nav.catalog": "Catalog",
      "nav.about": "About Us",
      "nav.contact": "Contact",
      "nav.board": "Board",
      "nav.open": "Open navigation menu",
      "nav.close": "Close navigation menu",

      "home.hero.title": '"Price is forgotten, <br /><strong>Quality is remembered</strong>"',
      "home.hero.subtitle": "Your trusted destination in Pinar del Río. Discover our premium selection of products for the kitchen, the home and your lifestyle.",
      "home.hero.cta": "Visit Us at Our Store",

      "home.why": "Why choose us?",
      "home.commitment": "Commitment to Our Customers",
      "home.quality.title": "Quality and Innovation",
      "home.quality.text": "We offer high-quality products that combine good taste, quality and excellent service. JL Mini Mercado works to meet your needs with reliable solutions, competitive prices and personalized attention. Discover the difference of shopping with us.",
      "home.leader.title": "The Leading Market of Pinar del Río",
      "home.leader.text": "We are not the largest, but we are the best Market for the Pinar del Río family for Food, Personal and Home Care, Perfumes and much more.",

      "home.testimonials": "What Our Customers Say",
      "home.t1.text": "\"I found everything I needed to prepare a delicious dinner for my pregnant daughter. I wrote on WhatsApp, they confirmed availability right away and I didn't waste time going to the store.\"",
      "home.t1.role": "Satisfied customer with our frozen products",
      "home.t2.text": "\"I bought some liquors and preserves and the price was really worth it compared to what I had seen elsewhere. The quality is what they promise: you can tell they carefully select what they sell.\"",
      "home.t2.role": "Customer pleased with our prices.",
      "home.t3.text": "\"It is my trusted store for perfumes and personal and home care. The service is always kind and personalized, and it is always clear what is available before going, just ask on WhatsApp.\"",
      "home.t3.role": "Perfume customer",

      "home.divisions": "Our Commercial Divisions",
      "home.divisions.text": "Personal and Home Care, Varied Foods and Perfumes: everything you need in one place.",
      "home.catalog.cta": "View Full Catalog",
      "home.promise": "More than a store, a promise of quality",
      "home.promise.text": "Discover the essence, values and the people behind every product that reaches your hands at JL Mini Mercado.",
      "home.history.cta": "Our Story",
      "home.visit": "Visit or Contact Us",
      "home.visit.text": "Calle Martí No. 124, Pinar del Río City. Write to us on WhatsApp or check all our contact details.",
      "home.contact.cta": "View Contact Details",

      "catalog.title": "Our <strong>Catalog</strong>",
      "catalog.subtitle": "Explore our commercial divisions and check availability and prices on the Digital Board.",
      "catalog.divisions": "Our Commercial Divisions",
      "catalog.food": "Food",
      "catalog.food.desc": "Selected taste and freshness for your table.",
      "catalog.drinks": "Drinks & Liquors",
      "catalog.drinks.desc": "Good taste in every sip.",
      "catalog.personal": "Personal Care",
      "catalog.personal.desc": "Personal hygiene products.",
      "catalog.home": "Home Care",
      "catalog.home.desc": "Detergents, dishwashing and cleaning.",
      "catalog.fragrances": "Fragrances",
      "catalog.fragrances.desc": "Fragrances that leave a mark.",
      "catalog.note": "* Products are subject to availability at our physical store.<br>Check the <strong>Digital Board</strong> for updated stock and prices.",
      "catalog.board.cta": "Open Digital Board",
      "catalog.wa.cta": "Check availability on WhatsApp",

      "contact.title": "Contact Us",
      "contact.subtitle": "We are here to serve you. Write to us, call us or visit us at our Mini Market.",
      "contact.section": "Visit or Contact Us",
      "contact.serve": "We are here to serve you",
      "contact.address": "Physical Address",
      "contact.hours": "Opening Hours",
      "contact.hours.value": "Every day,<br>from 8:00 a.m. to 7:00 p.m.",
      "contact.phones": "Mobile Phones",
      "contact.emails": "Email Addresses",
      "contact.wa.cta": "Message us on WhatsApp — We reply promptly",
      "contact.map": "Open in Google Maps",

      "about.hero.title": "More than a store,<br>a promise of quality",
      "about.hero.subtitle": "Discover the essence, values and the people behind every product that reaches your hands from JL Mini Mercado in Pinar del Río.",
      "about.history": "Our Story",
      "about.history.p1": "JL Mini Mercado was born with a simple but powerful conviction: the people of Pinar del Río deserve access to world-class products without leaving their city. From our first steps at Calle Martí No. 124, we have grown from a small shop into a diversified commercial reference.",
      "about.history.p2": "We do not just sell products; we also curate experiences. Every division, from our variety of foods to personal and home care and perfumes, has been built on trust and personalized service.",
      "about.quote": '"We grew by listening to our community, adapting to their dreams and needs."',
      "about.essence": "Our <span>Essence</span>",
      "about.essence.sub": "The pillars that support every decision we make.",
      "about.mission": "Mission",
      "about.mission.text": "To be the trusted ally of the home and the Pinar del Río family, offering a premium selection of products that combine quality, good taste and excellent prices. We are dedicated to turning shopping into an act of satisfaction and peace of mind.",
      "about.vision": "Vision",
      "about.vision.text": "We aspire to be the most loved and trusted Market in Pinar del Río, recognized not only for what we sell, but for how we make our customers feel. We want to expand our presence while keeping the warmth of a family business.",
      "about.goals": "What We <span>Want to Achieve</span>",
      "about.excel": "Absolute Excellence",
      "about.excel.text": "Ensure that every product in our catalog exceeds quality expectations.",
      "about.loyalty": "Real Loyalty",
      "about.loyalty.text": "Create lasting bonds where the customer feels part of our family.",
      "about.innov": "Constant Innovation",
      "about.innov.text": "Bring the latest trends in presence and product quality to our local market before anyone else.",
      "about.impact": "Local Impact",
      "about.impact.text": "Contribute to the economic and social development of our beautiful province.",
      "about.space": "Our Space",
      "about.space.text": "Designed for your comfort, where every corner invites you to discover exceptional products.",
      "about.cta.title": "Come meet us",
      "about.cta.text": "The best way to understand our passion is to visit us. We welcome you with open arms.",
      "about.cta.btn": "Visit our physical store",

      "board.title": "Digital <strong>Board</strong>",
      "board.subtitle": "Check availability and prices of all our products.",
      "board.hours": "Opening hours: every day, from 8:00 a.m. to 7:00 p.m.",
      "board.available": "In Stock",
      "board.unavailable": "Out of Stock",
      "board.product": "Product",
      "board.availability": "Availability",
      "board.price": "Price",
      "board.note": "Our products have been classified and inspected by a professional quality committee.",
      "board.loading": "Loading board...",
      "board.available.word": "In stock",
      "board.unavailable.word": "Out of stock",
      "board.available.count": "available",

      // Board categories
      "board.cat.alimentos": "Food",
      "board.cat.bebidas": "Drinks & Liquors",
      "board.cat.aseo_personal": "Personal Care",
      "board.cat.aseo_hogar": "Home Care",
      "board.cat.fragancias": "Fragrances",

      // Board subcategories
      "board.sub.conservas": "Canned Goods",
      "board.sub.granos": "Grains",
      "board.sub.pastas": "Pasta",
      "board.sub.carnicos": "Fresh Meats",
      "board.sub.jugos": "Juices",
      "board.sub.mermeladas": "Jams & Preserves",
      "board.sub.lacteos": "Dairy",
      "board.sub.cereales": "Cereals",
      "board.sub.sopas": "Soups & Stews",
      "board.sub.condimentos": "Seasonings",
      "board.sub.infusiones": "Teas & Infusions",
      "board.sub.vinos": "Wines",
      "board.sub.espumosos": "Champagne, Cider & Sparkling",
      "board.sub.licores": "Liqueurs",
      "board.sub.rones": "Rums",
      "board.sub.destilados": "Vodka, Cognac, Gin & Whisky",
      "board.sub.cervezas": "Beer, Malt & Soft Drinks",
      "board.sub.desodorantes": "Deodorants",
      "board.sub.jabones": "Soaps",
      "board.sub.shampoo": "Shampoo",
      "board.sub.acondicionador": "Conditioner",
      "board.sub.cremas_piel": "Skin Creams",
      "board.sub.dental": "Toothbrushes & Toothpaste",
      "board.sub.gel_bano": "Shower Gel",
      "board.sub.papel_higienico": "Toilet Paper",
      "board.sub.servilletas": "Napkins",
      "board.sub.toallitas": "Wet Wipes",
      "board.sub.sanitarias": "Sanitary Pads",
      "board.sub.detergente_polvo": "Powder Detergent",
      "board.sub.detergente_liquido": "Liquid Laundry Detergent",
      "board.sub.lavavajillas": "Dishwashing",
      "board.sub.suavizante": "Fabric Softener",
      "board.sub.frazadas": "Cloths & Accessories",
      "board.sub.agua_tocador": "Eau de Toilette",
      "board.sub.perfumes": "Perfumes",


      "footer.slogan": '"Price is forgotten, Quality is remembered"',
      "footer.copyright": "© 2026 Website created by MSc. Reynaldo Ramos Pérez. All rights reserved. Pinar del Río, Cuba.",

      "lang.es": "Español",
      "lang.en": "English"
    }
  };

  function getLang() {
    return localStorage.getItem("jl-lang") || "es";
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem("jl-lang", lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateSwitcherUI(lang);
  }

  function t(key, lang) {
    const L = lang || getLang();
    return (TRANSLATIONS[L] && TRANSLATIONS[L][key]) || (TRANSLATIONS.es && TRANSLATIONS.es[key]) || key;
  }

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = t(key, lang);
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", t(key, lang));
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-title");
      el.setAttribute("title", t(key, lang));
    });

    // Notificar a otros scripts (p. ej. pizarra)
    window.dispatchEvent(new CustomEvent("jl-lang-change", { detail: { lang: lang } }));
  }

  function updateSwitcherUI(lang) {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("active", btnLang === lang);
      btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
    });
  }

  function initSwitcher() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        if (lang) setLang(lang);
      });
    });
  }

  // API pública
  window.JL_I18N = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    apply: function () {
      applyTranslations(getLang());
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    const lang = getLang();
    document.documentElement.lang = lang;
    initSwitcher();
    applyTranslations(lang);
    updateSwitcherUI(lang);
  });
})();
