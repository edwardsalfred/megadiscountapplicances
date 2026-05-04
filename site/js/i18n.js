/* Mega Discount Appliances — i18n
   English is the source of truth (lives in the HTML).
   Spanish overrides come from the ES dictionary below.
   Toggle button (.lang-toggle) swaps locale, persists in localStorage.
*/

(function () {
  'use strict';

  const STORAGE_KEY = 'mda-lang';

  const ES = {
    // Nav
    'nav.hot_sale': 'Ofertas',
    'nav.shop': 'Tienda',
    'nav.brands': 'Marcas',
    'nav.why': 'Por Qué Mega',
    'nav.visit': 'Visítanos',
    'nav.shop_deals': 'Ver Ofertas',

    // Hero
    'hero.eyebrow_html': '<span class="pulse" aria-hidden="true"></span>Súper Ahorros · Evento Especial',
    'hero.h1_html': 'Ahorra hasta el <span class="accent">60%</span> en los electrodomésticos que las <span class="underline">familias</span> de Houston realmente quieren.',
    'hero.lede': 'Refrigeradores, estufas, lavadoras, secadoras, lavavajillas — más Waterdrop, Robam, Seewin y Casabrews. Marcas premium a precios de outlet, con entrega gratis, instalación gratis y garantía real de 1 año.',
    'hero.cta_primary_html': 'Ver Las Ofertas <span class="arrow">→</span>',
    'hero.cta_secondary': 'Llamar (346) 730-4870',
    'hero.meta_1_html': '<strong>Showroom en Houston</strong> · 10861 Katy Fwy',
    'hero.meta_2_html': '<strong>Abierto Hoy</strong> · Lun–Sáb 10–7 · Dom 11–6',
    'hero.meta_3_html': 'Recogida <strong>Mismo Día</strong> Disponible',
    'hero.card_tag': 'Oferta Destacada · 13% Off',
    'hero.card_name_html': 'Sistema RO<br>Waterdrop X12',
    'hero.stat_1_label': 'Sobre Lista',
    'hero.stat_2_label': 'Instalación Pro',

    // Trifecta
    'trifecta.delivered_title': 'Entregado.',
    'trifecta.delivered_sub': 'Recogida mismo día · Entrega semanal',
    'trifecta.installed_title': 'Instalado.',
    'trifecta.installed_sub': 'Servicio profesional en sitio · Dentro de 72 horas',
    'trifecta.warrantied_title': 'Garantizado.',
    'trifecta.warrantied_sub': '1 año gratis · Hasta 4 años',

    // Hot Sale
    'hot_sale.eyebrow': 'Ofertas Calientes · Esta Semana',
    'hot_sale.h2_html': 'Precios reales.<br>Ahorros reales.<br>Mientras duren.',
    'hot_sale.lede': 'Tres selecciones que más nos emocionan ahora mismo. Pasa por el showroom o llama para confirmar disponibilidad — las ofertas destacadas se mueven rápido.',
    'deal.save_200': 'Ahorra $200',
    'deal.save_270': 'Ahorra $270',
    'deal.view_details_html': 'Ver Detalles <span class="arrow">→</span>',
    'deal.smart_toilet_name': 'Inodoro Inteligente — Munich Pro',
    'deal.x12_name': 'Sistema RO Serie X — X12',
    'deal.range_hood_name': 'Campana R-Max3 — 30″',

    // Shop categories
    'shop.eyebrow': 'Compra Por Categoría',
    'shop.h2': 'Hechos para la manera en que Houston cocina, limpia y vive.',
    'shop.lede': 'Seis categorías principales — cada una surtida con las marcas que las familias de Houston piden, y algunas líneas especiales que no encontrarás en ningún otro lugar de la ciudad.',
    'cat.refrigerators': 'Refrigeradores',
    'cat.laundry': 'Lavandería',
    'cat.dishwashers': 'Lavavajillas',
    'cat.ranges': 'Estufas',
    'cat.range_hoods': 'Campanas',
    'cat.water_filtration': 'Filtración de Agua',

    // Specialty brands
    'specialty.eyebrow': 'Marcas Especializadas',
    'specialty.h2': 'Marcas premium de cocina y estilo de vida que no encontrarás en las grandes tiendas.',
    'specialty.lede': 'Tenemos un conjunto curado de marcas especializadas que cocineros serios, dueños de casa con buen gusto y entusiastas de la calidad del agua piden por nombre. Distribuidor autorizado en Houston para cada una.',
    'brand.water_tag': 'Filtración de Agua',
    'brand.waterdrop_desc': 'Agua limpia, segura y de excelente sabor con filtración avanzada de ósmosis inversa. Diseño minimalista bajo el lavabo, una mejora dramática sobre el agua de la ciudad.',
    'brand.shop_waterdrop_html': 'Comprar Waterdrop <span class="arrow">→</span>',
    'brand.kitchen_tag': 'Ventilación de Cocina',
    'brand.robam_desc': 'Electrodomésticos premium de cocina conocidos por sus campanas, parrillas y hornos avanzados. Diseñados para cocinar en serio — y para cocinas con presencia.',
    'brand.shop_robam_html': 'Comprar ROBAM <span class="arrow">→</span>',
    'brand.smart_bath_tag': 'Baño Inteligente',
    'brand.seewin_desc': 'Inodoros bidé inteligentes diseñados para comodidad, higiene y vida moderna. Asiento calefactado, agua caliente instantánea, descarga automática y luz nocturna.',
    'brand.shop_seewin_html': 'Comprar Seewin <span class="arrow">→</span>',
    'brand.coffee_tag': 'Café y Espresso',
    'brand.casabrews_desc': 'Máquinas de espresso y café de calidad de cafetería para baristas en casa. Estilo elegante, presión profesional, características prosumer a un precio que no te hace pestañear.',
    'brand.shop_casabrews_html': 'Comprar Casabrews <span class="arrow">→</span>',

    // Trust
    'trust.label': 'Distribuidor Autorizado · Marcas Confiables',

    // Why
    'why.eyebrow': 'Por Qué Mega Discount',
    'why.h2_html': 'Precios de gran tienda.<br>Servicio de barrio.',
    'why.lede': 'Estamos entre el showroom premium y el liquidador outlet. El resultado: mejores marcas que los descuentos, mejor precio que las cadenas y una persona real que contesta el teléfono.',
    'why.off_retail_title': 'Sobre Lista',
    'why.off_retail_desc': 'Ahorra hasta el 60% en electrodomésticos que las familias de Houston realmente quieren — cada categoría, cada semana.',
    'why.warranty_title': 'Garantía Real',
    'why.warranty_desc': 'Garantía gratis de 1 año en cada pedido. Ampliable a cuatro años para mayor tranquilidad.',
    'why.install_title': 'Instalación Pro',
    'why.install_desc': 'Servicio profesional en sitio adaptado a tu hogar. La mayoría de instalaciones se programan dentro de 72 horas.',
    'why.local_title': 'Local de Houston',
    'why.local_desc': 'Negocio familiar en Katy Freeway, sirviendo Greater Houston y Dallas–Fort Worth. Personas reales, número real.',

    // Reviews
    'reviews.eyebrow': 'Historias de Clientes',
    'reviews.h2': 'Lo que dice Houston.',
    'reviews.lede_html': 'Tres reseñas recientes de clientes — del libro de visitas del showroom y listados en línea. <em style="color:#fff8;">Nota: el cliente reemplazará con reseñas reales de Google.</em>',
    'review.1_quote': '"Me llevé un refrigerador counter-depth por casi la mitad de lo que me cotizó Lowe\'s. Entregaron la misma semana, instalaron limpio, y el equipo llamó al día siguiente para asegurarse de que todo funcionara. Volveré por el par de lavandería."',
    'review.1_where': 'Houston · Spring Branch',
    'review.2_quote': '"Quería una campana Robam para la remodelación de mi cocina. No pude encontrar un distribuidor autorizado en Houston hasta que probé Mega. Precios honestos, conocían el producto a fondo, instalado dentro de la semana."',
    'review.2_where': 'Houston · Memorial',
    'review.3_quote': '"Compré el Waterdrop X12 y un inodoro inteligente Seewin en el mismo viaje. El dueño me explicó las dos opciones y no intentó venderme algo más caro. Toda la experiencia se sintió como una tienda de electrodomésticos de barrio debería sentirse."',
    'review.3_where': 'Katy, TX',

    // Visit
    'visit.eyebrow': 'Visita El Showroom',
    'visit.h2_html': '10861 Katy Freeway.<br>Míralo. Tócalo. Llévatelo a casa.',
    'visit.lede': 'Algunas decisiones de electrodomésticos son más fáciles en persona. Pasa por el showroom — ve las unidades funcionando, platica de tu proyecto y sal con una cotización (o el electrodoméstico mismo).',
    'visit.showroom_details': 'Detalles del Showroom',
    'visit.address_lbl': 'Dirección',
    'visit.phone_lbl': 'Teléfono',
    'visit.email_lbl': 'Correo',
    'visit.hours_lbl': 'Horario',
    'visit.hours_value_html': 'Lun–Sáb &nbsp;10am – 7pm<br>Domingo &nbsp;&nbsp;11am – 6pm',
    'visit.directions_html': 'Cómo Llegar <span class="arrow">→</span>',

    // FAQ
    'faq.eyebrow': 'Preguntas Frecuentes',
    'faq.h2': 'Respuestas antes de llamar.',
    'faq.lede': 'La mayoría de las llamadas que recibimos son sobre entrega, garantía y cómo funcionan los precios de open-box. Aquí está la versión corta.',
    'faq.q1': '¿Cómo funciona la garantía?',
    'faq.a1': 'Cada electrodoméstico viene con una garantía gratis de 1 año que cubre piezas y mano de obra. Puedes ampliar a una garantía extendida de 4 años al pagar — solo pídelo, o menciónalo por teléfono cuando llames a confirmar disponibilidad.',
    'faq.q2': '¿Son scratch-and-dent? ¿Mi electrodoméstico se verá usado?',
    'faq.a2': 'La mayoría de nuestro inventario son unidades nuevas, open-box o de piso de exhibición con imperfecciones cosméticas. La gran mayoría de los "rayones" están en lugares que desaparecen una vez instalado el electrodoméstico — el costado de un refrigerador contra un gabinete, la parte trasera de una lavadora, la esquina de un lavavajillas bajo el mostrador. Somos transparentes sobre cada imperfección antes de que compres y probamos cada unidad antes de que salga del showroom.',
    'faq.q3': '¿Entregan e instalan?',
    'faq.a3': 'Sí. La recogida el mismo día está disponible en el showroom, las rutas de entrega semanales cubren Greater Houston, y atendemos Dallas–Fort Worth en un horario aparte. La instalación profesional en sitio está disponible dentro de 72 horas de la compra para la mayoría de los trabajos — llámanos para programar.',
    'faq.q4': '¿Ofrecen financiamiento?',
    'faq.a4': 'Sí — llama al showroom para platicar sobre los socios de financiamiento disponibles y opciones de aprobación. La mayoría de los perfiles de crédito califican para algún tipo de plan de pagos.',
    'faq.q5': '¿Cuál es su política de devoluciones?',
    'faq.a5_html': 'Consulta nuestra <a href="https://megadiscountappliance.com/refund-and-returns-policy/" style="color:var(--red);font-weight:600;">Política de Reembolsos y Devoluciones</a> para los términos completos. La versión corta: las devoluciones se evalúan caso por caso; las unidades defectuosas están cubiertas por la garantía; los reclamos cosméticos sobre artículos open-box declarados no son devolubles.',
    'faq.q6': '¿Pueden confirmar lo que está en stock hoy?',
    'faq.a6_html': 'Las ofertas destacadas en el sitio web se rotan rápido. La forma más rápida de confirmar que una unidad específica está en stock hoy es llamar al <a href="tel:+13467304870" style="color:var(--red);font-weight:600;">(346) 730-4870</a> — revisaremos el piso en tiempo real.',

    // Final CTA
    'cta.h2': '¿Listo para ahorrar en el electrodoméstico que has estado posponiendo?',
    'cta.lede': 'Pasa por el showroom en Katy Freeway, llámanos, o navega las ofertas en línea. La recogida el mismo día es una opción para la mayoría de los artículos en stock.',
    'cta.shop_html': 'Ver Las Ofertas <span class="arrow">→</span>',
    'cta.call': 'Llamar (346) 730-4870',

    // Mobile sticky call
    'mobile_call.label': 'Llamar Ahora',

    // Footer
    'foot.brand_desc': 'Outlet de electrodomésticos premium de Houston. Refrigeradores, estufas, lavadoras, secadoras, lavavajillas — más Waterdrop, Robam, Seewin, Casabrews. Entrega gratis, instalación gratis, garantía real.',
    'foot.shop_h4': 'Tienda',
    'foot.brands_h4': 'Marcas',
    'foot.visit_h4': 'Visítanos',
    'foot.cat_smart_toilets': 'Inodoros Inteligentes',
    'foot.all_brands': 'Todas Las Marcas',
    'foot.about': 'Sobre Nosotros',
    'foot.contact': 'Contacto',
    'foot.hours_short': 'Lun–Sáb 10–7 · Dom 11–6',
    'foot.copyright_html': '© <span id="year">2026</span> Mega Discount Appliances · Todos los derechos reservados · <a href="https://megadiscountappliance.com/privacy-policy/" style="color:rgba(255,255,255,0.7);">Privacidad</a> · <a href="https://megadiscountappliance.com/refund-and-returns-policy/" style="color:rgba(255,255,255,0.7);">Devoluciones</a>',
    'foot.credit_html': 'Creado por <a href="https://www.chatbotboy.ai/" target="_blank" rel="noopener">Chatbot Boy AI</a>',
  };

  const META_ES = {
    title: 'Mega Discount Appliances · Outlet Premium de Houston · Hasta 60% Off',
    description: 'Ahorra hasta 60% en electrodomésticos premium en Houston. Refrigeradores, estufas, lavadoras, secadoras, lavavajillas, más Waterdrop, Robam, Seewin y Casabrews. Entrega gratis, instalación gratis, garantía de 1 año.',
  };

  let originalTitle = null;
  let originalDescription = null;

  function snapshotOriginals() {
    originalTitle = document.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) originalDescription = m.getAttribute('content');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.dataset.i18nOriginal = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.dataset.i18nOriginalHtml = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.dataset.i18nOriginalAria = el.getAttribute('aria-label') || '';
    });
  }

  function applyLang(lang) {
    const isEs = lang === 'es';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (isEs && ES[key] !== undefined) {
        el.textContent = ES[key];
      } else if (el.dataset.i18nOriginal !== undefined) {
        el.textContent = el.dataset.i18nOriginal;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (isEs && ES[key] !== undefined) {
        el.innerHTML = ES[key];
      } else if (el.dataset.i18nOriginalHtml !== undefined) {
        el.innerHTML = el.dataset.i18nOriginalHtml;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (isEs && ES[key] !== undefined) {
        el.setAttribute('aria-label', ES[key]);
      } else if (el.dataset.i18nOriginalAria !== undefined) {
        el.setAttribute('aria-label', el.dataset.i18nOriginalAria);
      }
    });

    document.documentElement.lang = isEs ? 'es' : 'en';
    document.title = isEs ? META_ES.title : (originalTitle || document.title);
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', isEs ? META_ES.description : (originalDescription || ''));

    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.dataset.lang = isEs ? 'es' : 'en';
      const label = btn.querySelector('.lang-label');
      if (label) label.textContent = isEs ? 'English' : 'Español';
      btn.setAttribute('aria-label', isEs ? 'Switch to English' : 'Cambiar a español');
      btn.setAttribute('aria-pressed', isEs ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, isEs ? 'es' : 'en'); } catch (e) {}
  }

  function init() {
    snapshotOriginals();
    let stored = 'en';
    try { stored = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
    applyLang(stored);

    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = btn.dataset.lang === 'es' ? 'es' : 'en';
        applyLang(current === 'es' ? 'en' : 'es');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
