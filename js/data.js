/**
 * ============================================================
 *  DATOS DE LA PIZARRA - JL MINI MERCADO
 * ============================================================
 *  EDITA SOLO ESTE ARCHIVO para cambiar:
 *  - Nombres de productos
 *  - Disponibilidad (true = Si hay | false = Hoy no tenemos)
 *  - Precios en CUP
 *
 *  No toques pizarra.html ni pizarra.js
 * ============================================================
 */

const INVENTARIO = {

  /* ========== 1. ALIMENTOS ========== */
  alimentos: {
    nombre: "Alimentos",
    color: "#38A169",
    subcategorias: {
      conservas: {
        nombre: "Conservas",
        productos: [
          { nombre: "Atún en aceite 170g", disponible: true, precio: 850 },
        
          { nombre: "Tomate triturado 400g", disponible: false, precio: 490 },
          { nombre: "Manzanas  1u", disponible: false, precio:0.00},
          { nombre: "Dulce tres Leches", disponible: true, precio:700},
          { nombre: "Garbanzos 400g", disponible: false, precio: 0.00 }
        ]
      },
      granos: {
        nombre: "Granos",
        productos: [
          { nombre: "Arroz 1kg", disponible: true, precio: 180 },
          { nombre: "Frijol negro 500g", disponible: true, precio: 320 },
          { nombre: "Frijol colorado 500g", disponible: true, precio: 340 },
          { nombre: "Garbanzo seco 500g", disponible: false, precio: 450 },
          { nombre: "Lentejas 500g", disponible: true, precio: 380 }
        ]
      },
      pastas: {
        nombre: "Pastas",
        productos: [
          { nombre: "Spaghetti 500g", disponible: true, precio: 280 },
          { nombre: "Macarrones 500g", disponible: true, precio: 270 },
          { nombre: "Fideos finos 400g", disponible: false, precio: 250 },
          { nombre: "Lasagna 250g", disponible: true, precio: 420 }
        ]
      },
      carnicos: {
        nombre: "Cárnicos Frescos",
        productos: [
          { nombre: "Lomo de cerdo 1Lb", disponible: false, precio: 0.00 },
          { nombre: "Pierna de Cerdo 1Lb", disponible: true, precio: 1950 },
          { nombre: "Solomillo de Cerdo 1Lb", disponible: true, precio: 2350 },
          { nombre: "Chuleta de Cerdo 1Lb", disponible: true, precio: 1860 },
          { nombre: "Lomo ahumado Import 1Lb", disponible: true, precio: 2300 },
          { nombre: "Pierna ahumada Import 1Lb", disponible: true, precio: 2200 },
{ nombre: "Alitas de Pollo 1kg", disponible: false, precio: 0.00 },
{ nombre: "Bistec de Cerdo 4lb", disponible: false, precio: 0.00 },
{ nombre: "Bolsa de Pollo 2lb", disponible: false, precio: 0.00 },
{ nombre: "Filete de Pescado  1lb", disponible: false, precio: 0.00 },
{ nombre: "Hamburguesa de Res 6u", disponible: false, precio: 0.00 },
{ nombre: "Hamburguesa de Res 90g", disponible: false, precio: 0.00 },
{ nombre: "Hamburguesas de Res Plena ud de 90g", disponible: false, precio: 0.00 },
{ nombre: "Lomo de Cerdo en Filete lb", disponible: false, precio: 0.00 },
          { nombre: "Pollo MCM Pqt 10 Lbs", disponible: false, precio: 0.00 },
          { nombre: "Pollo Muslo Pqt 10 Lbs", disponible: false, precio: 0.00 },
          { nombre: "Pechuga de Pollo  1 Lbs", disponible: false, precio:2650},
          { nombre: "Hígado de Pollo  1 Lbs", disponible: true, precio:1815},
          { nombre: "Molleja de Pollo  1 Lbs", disponible: false, precio:0.00},
          { nombre: "Salchichas  (340g)", disponible: true, precio:1300},
          { nombre: "Hamburguezas", disponible: false, precio:0.00},
          { nombre: "Picadillo Cocinero", disponible: true, precio:815},
          { nombre: "Bacon   (340g)", disponible: true, precio:2860},
          { nombre: "Pierna de Pavo  1Lb", disponible: true, precio:1600}
        ]
      },
      jugos: {
        nombre: "Jugos",
        productos: [
          { nombre: "Jugo de naranja 1L", disponible: true, precio: 320 },
          { nombre: "Jugo de mango 1L", disponible: true, precio: 340 },
          { nombre: "Néctar de guayaba 1L", disponible: false, precio: 300 },
          { nombre: "Jugo multifruta 1L", disponible: true, precio: 310 }
        ]
      },
      mermeladas: {
        nombre: "Mermeladas y Confituras",
        productos: [
          { nombre: "Mermelada de fresa 300g", disponible: true, precio: 480 },
          { nombre: "Mermelada de guayaba 300g", disponible: true, precio: 450 },
          { nombre: "Confitura de mango 250g", disponible: false, precio: 520 }
        ]
      },
      lacteos: {
        nombre: "Lácteos",
        productos: [
          { nombre: "Leche en polvo 400g", disponible: true, precio: 980 },
          { nombre: "Yogur natural 1L", disponible: true, precio: 420 },
          { nombre: "Queso blanco 250g", disponible: false, precio: 650 },
          { nombre: "Mantequilla 200g", disponible: true, precio: 580 }
        ]
      },
      cereales: {
        nombre: "Cereales",
        productos: [
          { nombre: "Avena 500g", disponible: true, precio: 380 },
          { nombre: "Corn Flakes 250g", disponible: true, precio: 450 },
          { nombre: "Granola 300g", disponible: false, precio: 620 }
        ]
      },
      sopas: {
        nombre: "Sopas y Potajes",
        productos: [
          { nombre: "Sopa de pollo sobre", disponible: true, precio: 180 },
          { nombre: "Crema de maíz sobre", disponible: true, precio: 190 },
          { nombre: "Potaje de frijoles sobre", disponible: false, precio: 200 }
        ]
      },
      condimentos: {
        nombre: "Condimentos",
        productos: [
          { nombre: "Sal fina 1kg", disponible: true, precio: 80 },
          { nombre: "Pimienta molida 50g", disponible: true, precio: 220 },
          { nombre: "Comino 50g", disponible: true, precio: 180 },
          { nombre: "Ajo en polvo 50g", disponible: false, precio: 200 },
          { nombre: "Sazón completo 100g", disponible: true, precio: 250 }
        ]
      },
      infusiones: {
        nombre: "Infusiones",
        productos: [
          { nombre: "Té verde 20 sobres", disponible: true, precio: 280 },
          { nombre: "Manzanilla 20 sobres", disponible: true, precio: 260 },
          { nombre: "Té negro 20 sobres", disponible: false, precio: 270 },
          { nombre: "Hierba buena 15 sobres", disponible: true, precio: 240 }
        ]
      }
    }
  },

  /* ========== 2. BEBIDAS Y LICORES ========== */
  bebidas: {
    nombre: "Bebidas y Licores",
    color: "#D69E2E",
    subcategorias: {
      vinos: {
        nombre: "Línea de Vinos",
        productos: [
          { nombre: "Vino tinto seco 750ml", disponible: true, precio: 1200 },
          { nombre: "Vino blanco 750ml", disponible: true, precio: 1100 },
          { nombre: "Vino rosado 750ml", disponible: false, precio: 1150 }
        ]
      },
      espumosos: {
        nombre: "Champagne, Sidras y Espumosos",
        productos: [
          { nombre: "Sidra 750ml", disponible: true, precio: 850 },
          { nombre: "Vino espumoso 750ml", disponible: true, precio: 1400 },
          { nombre: "Champagne nacional 750ml", disponible: false, precio: 2200 }
        ]
      },
      licores: {
        nombre: "Línea de Licores",
        productos: [
          { nombre: "Licor de café 700ml", disponible: true, precio: 980 },
          { nombre: "Licor de menta 700ml", disponible: false, precio: 920 },
          { nombre: "Crema de ron 700ml", disponible: true, precio: 1050 }
        ]
      },
      rones: {
        nombre: "Línea de Rones",
        productos: [
          { nombre: "Ron Habana Club Añejo Especial 700ml", disponible: true, precio: 4350 },
          { nombre: "Ron Habana Club Añejo 3 años 700ml", disponible: true, precio: 5980 },
          { nombre: "Ron Habana Club Añejo Reserva 700ml", disponible: true, precio: 6800 },
          { nombre: "Ron Habana Club Añejo Especial 1000ml", disponible: false, precio: 6200 },
          { nombre: "Ron Habana Club Añejo Reserva 1000ml", disponible: false, precio: 7200 },
          { nombre: "Ron Habana Club Añejo 7 años 700ml", disponible: false, precio: 8200 },
          { nombre: "Ron Habana Club Selección de Maestros 700ml", disponible: false, precio: 15200 },
          { nombre: "Ron Habana Club Añejo Blanco 700ml", disponible: false, precio: 3200 },
          { nombre: "Ron Habana Club Añejo Blanco 1000ml", disponible: false, precio: 4200 },
          { nombre: "Ron Habana Club Ritual 700ml", disponible: false, precio: 6000 }
        ]
      },
      destilados: {
        nombre: "Vodka, Coñac, Ginebras y Whiskies",
        productos: [
          { nombre: "Vodka 700ml", disponible: true, precio: 1100 },
          { nombre: "Coñac 700ml", disponible: false, precio: 2500 },
          { nombre: "Ginebra 700ml", disponible: true, precio: 1450 },
          { nombre: "Whisky 700ml", disponible: true, precio: 2800 }
        ]
      },
      cervezas: {
        nombre: "Cervezas, Maltas y Refrescos",
        productos: [
          { nombre: "Cerveza nacional lata 355ml", disponible: true, precio: 180 },
          { nombre: "Cerveza importada 330ml", disponible: true, precio: 320 },
          { nombre: "Malta 355ml", disponible: true, precio: 150 },
          { nombre: "Refresco cola 1.5L", disponible: true, precio: 280 },
          { nombre: "Refresco naranja 1.5L", disponible: false, precio: 270 },
          { nombre: "Agua mineral 1.5L", disponible: true, precio: 120 }
        ]
      }
    }
  },

  /* ========== 3. ASEO PERSONAL ========== */
  aseo_personal: {
    nombre: "Aseo Personal",
    color: "#3182CE",
    subcategorias: {
      desodorantes: {
        nombre: "Desodorantes",
        productos: [
          { nombre: "Desodorante roll-on 50ml", disponible: true, precio: 380 },
          { nombre: "Desodorante spray 150ml", disponible: true, precio: 520 },
          { nombre: "Desodorante barra 50g", disponible: false, precio: 350 }
        ]
      },
      jabones: {
        nombre: "Jabones",
        productos: [
          { nombre: "Jabón de tocador 90g", disponible: true, precio: 120 },
          { nombre: "Jabón antibacterial 90g", disponible: true, precio: 150 },
          { nombre: "Jabón líquido 250ml", disponible: true, precio: 280 }
        ]
      },
      shampoo: {
        nombre: "Shampoo",
        productos: [
          { nombre: "Shampoo cabello normal 400ml", disponible: true, precio: 480 },
          { nombre: "Shampoo anticaspa 400ml", disponible: true, precio: 520 },
          { nombre: "Shampoo niños 300ml", disponible: false, precio: 420 }
        ]
      },
      acondicionador: {
        nombre: "Acondicionador",
        productos: [
          { nombre: "Acondicionador 400ml", disponible: true, precio: 490 },
          { nombre: "Crema de peinar 250ml", disponible: true, precio: 380 }
        ]
      },
      cremas_piel: {
        nombre: "Cremas para la Piel",
        productos: [
          { nombre: "Crema hidratante 200ml", disponible: true, precio: 650 },
          { nombre: "Crema de manos 100ml", disponible: true, precio: 280 },
          { nombre: "Protector solar 50ml", disponible: false, precio: 890 }
        ]
      },
      dental: {
        nombre: "Cepillos y Crema Dental",
        productos: [
          { nombre: "Cepillo dental adulto", disponible: true, precio: 180 },
          { nombre: "Cepillo dental niños", disponible: true, precio: 150 },
          { nombre: "Crema dental 100g", disponible: true, precio: 220 },
          { nombre: "Enjuague bucal 250ml", disponible: false, precio: 380 }
        ]
      },
      gel_bano: {
        nombre: "Gel de Baño",
        productos: [
          { nombre: "Gel de baño 400ml", disponible: true, precio: 420 },
          { nombre: "Gel de ducha 250ml", disponible: true, precio: 320 }
        ]
      },
      papel_higienico: {
        nombre: "Papel Higiénico",
        productos: [
          { nombre: "Papel higiénico 4 rollos", disponible: true, precio: 380 },
          { nombre: "Papel higiénico 12 rollos", disponible: true, precio: 980 },
          { nombre: "Papel higiénico premium 4r", disponible: false, precio: 520 }
        ]
      },
      servilletas: {
        nombre: "Servilletas",
        productos: [
          { nombre: "Servilletas 100 und", disponible: true, precio: 180 },
          { nombre: "Servilletas 50 und", disponible: true, precio: 100 }
        ]
      },
      toallitas: {
        nombre: "Toallitas Húmedas",
        productos: [
          { nombre: "Toallitas húmedas 80 und", disponible: true, precio: 420 },
          { nombre: "Toallitas bebé 100 und", disponible: true, precio: 480 },
          { nombre: "Toallitas desinfectantes 50u", disponible: false, precio: 350 }
        ]
      },
      sanitarias: {
        nombre: "Almohadillas Sanitarias",
        productos: [
          { nombre: "Toallas sanitarias 10 und", disponible: true, precio: 280 },
          { nombre: "Toallas sanitarias noche 8u", disponible: true, precio: 320 },
          { nombre: "Protectores diarios 20 und", disponible: true, precio: 250 }
        ]
      }
    }
  },

  /* ========== 4. ASEO DEL HOGAR ========== */
  aseo_hogar: {
    nombre: "Aseo del Hogar",
    color: "#DD6B20",
    subcategorias: {
      detergente_polvo: {
        nombre: "Detergente en Polvo",
        productos: [
          { nombre: "Detergente en polvo 1kg", disponible: true, precio: 480 },
          { nombre: "Detergente en polvo 500g", disponible: true, precio: 280 },
          { nombre: "Detergente enzimático 1kg", disponible: false, precio: 620 }
        ]
      },
      detergente_liquido: {
        nombre: "Detergente Líquido para Lavar",
        productos: [
          { nombre: "Detergente líquido 1L", disponible: true, precio: 550 },
          { nombre: "Detergente líquido 500ml", disponible: true, precio: 320 }
        ]
      },
      lavavajillas: {
        nombre: "Lavavajillas",
        productos: [
          { nombre: "Lavavajillas líquido 500ml", disponible: true, precio: 280 },
          { nombre: "Lavavajillas limón 750ml", disponible: true, precio: 380 },
          { nombre: "Pastillas lavavajillas 20u", disponible: false, precio: 650 }
        ]
      },
      suavizante: {
        nombre: "Suavizante para Ropa",
        productos: [
          { nombre: "Suavizante 1L", disponible: true, precio: 420 },
          { nombre: "Suavizante concentrado 500ml", disponible: true, precio: 380 }
        ]
      },
      frazadas: {
        nombre: "Frazadas y Accesorios",
        productos: [
          { nombre: "Frazada de piso", disponible: true, precio: 180 },
          { nombre: "Esponja de cocina 2u", disponible: true, precio: 120 },
          { nombre: "Guantes de limpieza", disponible: false, precio: 150 },
          { nombre: "Trapero microfibra", disponible: true, precio: 220 }
        ]
      }
    }
  },

  /* ========== 5. FRAGANCIAS ========== */
  fragancias: {
    nombre: "Fragancias",
    color: "#805AD5",
    subcategorias: {
      agua_tocador: {
        nombre: "Agua de Tocador",
        productos: [
          { nombre: "Agua de tocador floral 100ml", disponible: true, precio: 850 },
          { nombre: "Agua de tocador cítrica 100ml", disponible: true, precio: 820 },
          { nombre: "Agua de tocador unisex 100ml", disponible: false, precio: 900 }
        ]
      },
      perfumes: {
        nombre: "Perfumes",
        productos: [
          { nombre: "Perfume dama 50ml", disponible: true, precio: 1800 },
          { nombre: "Perfume caballero 50ml", disponible: true, precio: 1750 },
          { nombre: "Perfume premium 100ml", disponible: false, precio: 3200 },
          { nombre: "Colonia infantil 100ml", disponible: true, precio: 680 }
        ]
      }
    }
  }
};
