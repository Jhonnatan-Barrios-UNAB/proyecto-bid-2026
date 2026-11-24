/* =====================================================================
   CONFIGURACIÓN DEL MULTIMEDIA · Curso 1 · Módulo 1 (proyecto BID)
   Aquí se cambian sonidos, videos, documentos e imágenes sin tocar el resto del código.
   - Sonidos: reemplaza los archivos de assets/audio/ con el mismo nombre ("" desactiva uno).
   - Videos: cada pantalla tiene su carpeta en videos/slide-XX/ (archivo video.mp4).
   - Locuciones: assets/audio/locuciones/slide-XX/ (ver GUION.txt).
   ===================================================================== */
window.CONFIG = {
  "sonidos": {
    "inicio": "assets/audio/inicio.mp3",
    "fin": "assets/audio/fin.mp3",
    "cambio": "assets/audio/cambio-slide.mp3",
    "popup": "assets/audio/popup.mp3",
    "correcto": "assets/audio/correcto.mp3",
    "incorrecto": "assets/audio/incorrecto.mp3",
    "volumen": 0.7
  },
  "locuciones": {
    "activas": true,
    "carpeta": "assets/audio/locuciones",
    "volumen": 1
  },
  "retrasoEntreElementos": 0.3,
  "claveProgreso": "bid-curso1-modulo1-progreso",
  "videos": {
    "video-inicial": {
      "titulo": "Video inicial",
      "url": "videos/slide-02/video.mp4",
      "youtube": "",
      "fuente": "Video de bienvenida (avatar o sonoviso). Guion del video (ppt-contenidos): ¡Bienvenido al módulo introductorio del curso de compra y consumo responsable de productos forestales maderables! En esta sección te acercarás al contexto del sector forestal colombiano, conocerás la estructura de la cadena forestal maderable en Colombia, así como algunos productos de madera y los usos que normalmente se le dan a la madera en Colombia. Finalmente podrás diferenciar la compra y el consumo responsable, y entenderás la importancia de tu elección de un producto forestal en la promoción de un mercado legal y sostenible de madera en el país. Toma atenta nota, ya que tendrás la oportunidad de probar tu avance con un cuestionario final. Disfruta y amplía tu conocimiento con el material de apoyo del módulo."
    },
    "video-sina": {
      "titulo": "¿Qué es el Sistema Nacional Ambiental (SINA)?",
      "url": "videos/slide-04/video.mp4",
      "youtube": "https://www.youtube.com/watch?v=GkZlYDxp_WE",
      "fuente": "Ministerio de Ambiente y Desarrollo Sostenible (2015). ¿Qué es el Sistema Nacional Ambiental (SINA)? [Video]. YouTube."
    },
    "video-upra": {
      "titulo": "Zonificación para plantaciones forestales con fines comerciales en Colombia",
      "url": "videos/slide-06/video.mp4",
      "youtube": "https://www.youtube.com/watch?v=6lh7_v_vlx0",
      "fuente": "UPRAColombia. (2022). [Video]. YouTube."
    },
    "video-piml": {
      "titulo": "Madera legal para el sector construcción en Colombia",
      "url": "videos/slide-16/video.mp4",
      "youtube": "https://www.youtube.com/watch?v=L_75HanqCBI",
      "fuente": "Elija Madera Legal Compre Responsable - PIML. (2021). [Video]. YouTube."
    },
    "video-fsc": {
      "titulo": "¡Compra productos con el Sello FSC!",
      "url": "videos/slide-20/video.mp4",
      "youtube": "https://www.youtube.com/watch?v=bpw2lq48IjE",
      "fuente": "WWF Colombia. (2018). [Video]. YouTube."
    }
  },
  "documentos": {
    "mapa-upra": {
      "titulo": "Mapa de aptitud para plantaciones forestales con fines comerciales (UPRA)",
      "url": "documentos/MAPA_UPRA.pdf"
    },
    "guia-compra": {
      "titulo": "Guía de compra y consumo responsable de madera en Colombia",
      "url": "documentos/Guia-de-Compra-y-Consumo-Responsable-de-Madera-en-Colombia.pdf"
    }
  },
  "imagenes": {
    "mapa-bosque": {
      "titulo": "Bosque natural en Colombia (2024)",
      "url": "assets/img/contenido/slide-04/mapa-bosque-natural.jpg",
      "nota": "Original en el drive: BNB_2024_Landsat_C_2025-07-21"
    },
    "imagen-deforestacion": {
      "titulo": "Deforestación en Colombia",
      "url": "assets/img/contenido/slide-04/deforestacion.jpg",
      "nota": "Imagen indicada en ppt-contenidos: https://www.flickr.com/photos/minambientecolombia/53425157756/in/album-72177720313672029"
    }
  },
  "textosLocucion": {
    "slide-01/titulo.mp3": "Módulo 1. Introducción a la compra y consumo responsable de productos forestales maderables.",
    "slide-02/titulo.mp3": "Video inicial.",
    "slide-03/titulo.mp3": "Tabla de contenido",
    "slide-04/titulo.mp3": "Sector forestal colombiano. Bosque natural.",
    "slide-04/popup-e-1.mp3": "Bosque natural en Colombia.",
    "slide-04/popup-e-2.mp3": "Administración del bosque natural: el Sistema Nacional Ambiental, SINA.",
    "slide-04/popup-e-3.mp3": "Deforestación en Colombia.",
    "slide-04/popup-mapa-bosque.mp3": "Mapa de bosque natural de Colombia.",
    "slide-04/popup-imagen-deforestacion.mp3": "Deforestación en Colombia.",
    "slide-05/titulo.mp3": "Sector forestal colombiano. Cultivos forestales con fines comerciales.",
    "slide-05/popup-ver-mas-cultivos.mp3": "Plantaciones forestales por departamento y región.",
    "slide-06/titulo.mp3": "Cultivos forestales con fines comerciales. Zonificación para plantaciones forestales.",
    "slide-07/titulo.mp3": "Cultivos forestales con fines comerciales. Entidad competente.",
    "slide-08/titulo.mp3": "Cifras del sector forestal colombiano.",
    "slide-08/popup-cifras-1.mp3": "Aporte de 3.5 billones de pesos al valor agregado.",
    "slide-08/popup-cifras-2.mp3": "La balanza comercial es deficitaria.",
    "slide-08/popup-cifras-3.mp3": "Los principales destinos de exportación son Estados Unidos (18,7 %), Panamá (16,3 %) y China (12,3 %), seguidos por México, India y otros países de América Latina.",
    "slide-08/popup-cifras-4.mp3": "En 2024 se importó un total de USD 314,2 millones CIF en productos correspondientes a los capítulos 44 y 94, lo que representa 353.282 toneladas netas.",
    "slide-08/popup-cifras-5.mp3": "En 2023, por cada mil habitantes se consumieron 182,70 toneladas de insumos naturales del bosque.",
    "slide-09/titulo.mp3": "Cifras del sector forestal colombiano. Movilización.",
    "slide-09/general.mp3": "En el año 2024 fueron cuatro los departamentos que concentraron el 62,25 % del volumen total de madera movilizada en el país: Antioquia (30,09 %), Valle del Cauca (15,76 %), Cauca (12,48 %) y Boyacá (5,69 %). En cuanto a la movilización de madera reportada por el Ministerio de Ambiente, los principales departamentos fueron: Nariño (141.575 m³), Antioquia (118.056 m³) y Boyacá (62.245 m³).",
    "slide-10/titulo.mp3": "Pon a prueba tus conocimientos. ¡Relaciona cada concepto con su definición!",
    "slide-10/popup-retro-relaciona.mp3": "Retroalimentación. La ley 99 del 1993 crea el Sistema Nacional Ambiental (SINA), para la administración del Bosque Natural en Colombia. El Ministerio de Agricultura es la entidad competente para formular la política de cultivos forestales con fines comerciales, y ha delegado funciones en el Instituto Colombiano Agropecuario (ICA). Colombia es un país de alto potencial para el desarrollo forestal con aproximadamente el 50% de su territorio cubierto en bosques naturales; con 14MM de hectáreas con vocación –o aptitud catalogada alta y media– para plantaciones forestales comerciales.",
    "slide-11/titulo.mp3": "Algunos conceptos básicos.",
    "slide-11/popup-e-1.mp3": "Producto forestal.",
    "slide-11/popup-e-2.mp3": "Producto forestal maderable.",
    "slide-11/popup-e-3.mp3": "Madera legal.",
    "slide-11/popup-e-4.mp3": "Gobernanza Forestal.",
    "slide-12/titulo.mp3": "Cadena forestal.",
    "slide-12/popup-eslabon-1.mp3": "Eslabón 01.",
    "slide-12/popup-eslabon-2.mp3": "Eslabón 02.",
    "slide-12/popup-eslabon-3.mp3": "Eslabón 03.",
    "slide-12/popup-eslabon-4.mp3": "Eslabón 04.",
    "slide-13/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿Qué entidad se encarga de administrar los recursos forestales naturales en Colombia? a. Se realiza a través del Sistema Nacional Ambiental (SINA). b. El Ministerio de Ambiente y Desarrollo Sostenible. c. El Ministerio de Agricultura y Desarrollo Rural.",
    "slide-13/popup-q19-ok.mp3": "Muy bien, has acertado.",
    "slide-13/popup-q19-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-14/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿En qué entidad ha delegado el Ministerio de Agricultura y Desarrollo Rural la formulación de la política de cultivos forestales con fines comerciales? a. Institutos de investigación como IIAP, Sinchi e Invemar. b. Instituto Colombiano Agropecuario (ICA). c. Ministerio de Ambiente y Desarrollo Sostenible.",
    "slide-14/popup-q21-ok.mp3": "Muy bien, has acertado.",
    "slide-14/popup-q21-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-15/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿En qué eslabón de la cadena forestal se encuentra el consumidor/comprador? a. Es el actor final de la cadena forestal y se encuentra en el último eslabón. b. Es el actor inicial de la cadena y se encuentra en el primer eslabón. c. Es un actor que se encuentra a lo largo de toda la cadena forestal y que genera, con su decisión, un efecto dominó con impacto en todos los actores.",
    "slide-15/popup-q23-ok.mp3": "Muy bien, has acertado.",
    "slide-15/popup-q23-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-16/titulo.mp3": "¿Te has preguntado en qué se usa la madera?",
    "slide-17/titulo.mp3": "Presentación de la madera.",
    "slide-17/popup-madera-58.mp3": "Poste.",
    "slide-17/popup-madera-59.mp3": "Vara corredor.",
    "slide-17/popup-madera-60.mp3": "Vara limatón.",
    "slide-17/popup-madera-61.mp3": "Pilote.",
    "slide-17/popup-madera-62.mp3": "Troza.",
    "slide-17/popup-madera-63.mp3": "Bloque.",
    "slide-17/popup-madera-64.mp3": "Viga.",
    "slide-17/popup-madera-65.mp3": "Tabla.",
    "slide-17/popup-madera-66.mp3": "Tablón.",
    "slide-17/popup-madera-67.mp3": "Tablero finger joint.",
    "slide-17/popup-madera-75.mp3": "Tablero de madera-cemento.",
    "slide-17/popup-madera-68.mp3": "Tablero de partículas aglomeradas.",
    "slide-17/popup-madera-69.mp3": "Tablero de fibra o MDF.",
    "slide-17/popup-madera-70.mp3": "Tablero contrachapado.",
    "slide-17/popup-madera-71.mp3": "Tablero tricapa o chapeado.",
    "slide-17/popup-madera-72.mp3": "Tablero de virutas orientadas (OSB).",
    "slide-17/popup-categoria-rolliza.mp3": "Madera rolliza.",
    "slide-17/popup-categoria-aserrada.mp3": "Madera aserrada.",
    "slide-17/popup-madera-ver-mas.mp3": "Madera maciza y derivados de madera.",
    "slide-18/titulo.mp3": "Tendencias de uso de la madera aserrada.",
    "slide-18/popup-e-1.mp3": "De uso temporal.",
    "slide-18/popup-e-2.mp3": "Para construcción.",
    "slide-18/popup-e-3.mp3": "De uso estético.",
    "slide-18/popup-e-4.mp3": "Para elementos interiores.",
    "slide-19/titulo.mp3": "Ventajas del uso de madera.",
    "slide-19/general.mp3": "Aquí se destacan algunas de las ventajas de usar madera legal y sostenible en usos transitorios o permanentes en obras de construcción, instrumentos musicales, mobiliario, artesanías, entre otros.",
    "slide-19/popup-r-tree.mp3": "Material natural de origen renovable y con cadenas de suministro controladas para garantizar sostenibilidad.",
    "slide-19/popup-r-bulb.mp3": "Por sus características, es de fácil reuso o reciclaje.",
    "slide-19/popup-r-truck.mp3": "Material liviano, lo cual reduce los costos de transporte y disposición final.",
    "slide-19/popup-r-gear.mp3": "Es adaptable al diseño estético y belleza final cuando se usa en construcción.",
    "slide-19/popup-r-roots.mp3": "Reservorio de carbono secuestrado de la atmósfera de almacenamiento de largo plazo.",
    "slide-19/popup-r-bin.mp3": "Ser un buen aislante acústico por sus características de densidad y estructura porosa.",
    "slide-19/popup-r-recycle.mp3": "Por sus excelentes características porosas, puede ser un aislante térmico.",
    "slide-20/titulo.mp3": "¿Qué es un consumo responsable de productos forestales maderables?",
    "slide-21/titulo.mp3": "Algunos conceptos básicos.",
    "slide-22/titulo.mp3": "¿Qué es una compra responsable de productos forestales maderables?",
    "slide-23/titulo.mp3": "¿Cuáles son los beneficios de comprar responsablemente?",
    "slide-23/popup-beneficios-1.mp3": "Mejora de imagen reputacional",
    "slide-23/popup-beneficios-2.mp3": "Oportunidades de acceso a mercados diferenciados",
    "slide-23/popup-beneficios-3.mp3": "Generación de redes de valor",
    "slide-23/popup-beneficios-4.mp3": "Sostenibilidad ambiental",
    "slide-23/popup-beneficios-5.mp3": "Sostenibilidad social",
    "slide-24/titulo.mp3": "Rol del consumidor/comprador responsable",
    "slide-25/titulo.mp3": "¿Qué promueves como consumidor/comprador responsable?",
    "slide-25/popup-e-1.mp3": "Promueve la cadena de valor",
    "slide-25/popup-e-2.mp3": "Promueve la economía circular",
    "slide-25/popup-e-3.mp3": "Promueve la conciencia a través del ejemplo",
    "slide-25/popup-e-4.mp3": "Promueve el consumo/compra local",
    "slide-26/titulo.mp3": "Para reflexionar.",
    "slide-26/popup-e-1.mp3": "Como comprador, debes asegurarte de adquirir productos forestales maderables en establecimientos comerciales legalmente constituidos; cuya compra sea respaldada por una factura, sin evadir el pago del IVA, ya que impactan negativamente a todo el sector y puedes recibir sanciones.",
    "slide-26/popup-e-2.mp3": "Un consumidor responsable puede convertirse en el catalizador del cambio en la cadena productiva forestal, modificaciones ligeras en nuestros hábitos de consumo pueden generar un gran impacto en la sociedad. Es primordial implementar políticas de compra responsable que apoyen un cambio hacia prácticas sostenibles.",
    "slide-26/popup-e-3.mp3": "Como comprador y consumidor debes: informarte del origen del producto que consumes y el impacto que genera su obtención; cuestionar tu necesidad de consumo y aplicar el pensamiento de reducir, reutilizar, reusar, reciclar; y elegir la opción que genere menor impacto negativo, mayor confiabilidad y beneficio social, priorizando productos forestales cuyo origen legal esté garantizado. Para ello puedes utilizar herramientas como la certificación forestal voluntaria, el reconocimiento a la procedencia legal, y el catálogo de productos en elijamaderalegal.com sobre los que profundizaremos en el siguiente módulo.",
    "slide-27/titulo.mp3": "Para resumir.",
    "slide-27/general.mp3": "Resumiendo, el consumo responsable corresponde a la adquisición de productos forestales maderables para uso doméstico o uso final sin interés comercial, por tanto, es realizada por individuos que aplican criterios ambientales, sociales y económicos; verifican etiquetas de certificación creíbles y seleccionan establecimientos comerciales legales. Por otro lado, la compra responsable se asocia a la realizada por empresas públicas o empresas privadas que, a través de la definición de un programa de compra responsable, implementan una hoja de ruta con pasos secuenciales, indicadores y verificadores para la selección de proveedores de productos forestales maderables terminados, o en transformación intermedia, para construcción, adecuación o mobiliario; entre otros usos y servicios que prestan estos productos. Tanto los compradores como los consumidores responsables reconocen su rol en la cadena forestal y su impacto en la degradación o conservación de los bosques, las dinámicas de mercado, el cumplimiento legal, laboral, y la distribución de beneficios de manera equitativa en la cadena productiva.",
    "slide-28/titulo.mp3": "Conoce más",
    "slide-29/titulo.mp3": "Bibliografía.",
    "slide-30/titulo.mp3": "Bibliografía.",
    "slide-31/titulo.mp3": "Bibliografía. Videos finales.",
    "slide-32/titulo.mp3": "¡Felicitaciones!",
    "slide-33/titulo.mp3": "Introducción a la compra y consumo responsable de productos forestales maderables."
  },
  "subtitulos": {
    "slide-01/titulo.mp3": {
      "d": 6.61,
      "c": [
        [
          0.0,
          1.39,
          "Módulo 1."
        ],
        [
          1.4,
          6.61,
          "Introducción a la compra y consumo responsable de productos forestales maderables."
        ]
      ]
    },
    "slide-02/titulo.mp3": {
      "d": 1.31,
      "c": [
        [
          0.0,
          1.31,
          "Video inicial."
        ]
      ]
    },
    "slide-03/titulo.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.27,
          "Tabla de contenido"
        ]
      ]
    },
    "slide-04/titulo.mp3": {
      "d": 3.63,
      "c": [
        [
          0.0,
          2.29,
          "Sector forestal colombiano."
        ],
        [
          2.3,
          3.63,
          "Bosque natural."
        ]
      ]
    },
    "slide-04/popup-e-1.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Bosque natural en Colombia."
        ]
      ]
    },
    "slide-04/popup-e-2.mp3": {
      "d": 5.56,
      "c": [
        [
          0.0,
          5.56,
          "Administración del bosque natural: el Sistema Nacional Ambiental, SINA."
        ]
      ]
    },
    "slide-04/popup-e-3.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Deforestación en Colombia."
        ]
      ]
    },
    "slide-04/popup-mapa-bosque.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          2.43,
          "Mapa de bosque natural de Colombia."
        ]
      ]
    },
    "slide-04/popup-imagen-deforestacion.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Deforestación en Colombia."
        ]
      ]
    },
    "slide-05/titulo.mp3": {
      "d": 5.25,
      "c": [
        [
          0.0,
          2.3000000000000003,
          "Sector forestal colombiano."
        ],
        [
          2.31,
          5.25,
          "Cultivos forestales con fines comerciales."
        ]
      ]
    },
    "slide-05/popup-ver-mas-cultivos.mp3": {
      "d": 3.55,
      "c": [
        [
          0.0,
          3.55,
          "Plantaciones forestales por departamento y región."
        ]
      ]
    },
    "slide-06/titulo.mp3": {
      "d": 6.03,
      "c": [
        [
          0.0,
          3.12,
          "Cultivos forestales con fines comerciales."
        ],
        [
          3.13,
          6.03,
          "Zonificación para plantaciones forestales."
        ]
      ]
    },
    "slide-07/titulo.mp3": {
      "d": 4.6,
      "c": [
        [
          0.0,
          3.02,
          "Cultivos forestales con fines comerciales."
        ],
        [
          3.03,
          4.6,
          "Entidad competente."
        ]
      ]
    },
    "slide-08/titulo.mp3": {
      "d": 2.59,
      "c": [
        [
          0.0,
          2.59,
          "Cifras del sector forestal colombiano."
        ]
      ]
    },
    "slide-08/popup-cifras-1.mp3": {
      "d": 4.44,
      "c": [
        [
          0.0,
          4.44,
          "Aporte de 3.5 billones de pesos al valor agregado."
        ]
      ]
    },
    "slide-08/popup-cifras-2.mp3": {
      "d": 2.69,
      "c": [
        [
          0.0,
          2.69,
          "La balanza comercial es deficitaria."
        ]
      ]
    },
    "slide-08/popup-cifras-3.mp3": {
      "d": 16.85,
      "c": [
        [
          0.0,
          10.53,
          "Los principales destinos de exportación son Estados Unidos (18,7 %), Panamá (16,3 %) y China (12,3 %),"
        ],
        [
          10.54,
          16.85,
          "seguidos por México, India y otros países de América Latina."
        ]
      ]
    },
    "slide-08/popup-cifras-4.mp3": {
      "d": 16.77,
      "c": [
        [
          0.0,
          10.81,
          "En 2024 se importó un total de USD 314,2 millones CIF en productos correspondientes a los capítulos 44 y 94,"
        ],
        [
          10.82,
          16.77,
          "lo que representa 353.282 toneladas netas."
        ]
      ]
    },
    "slide-08/popup-cifras-5.mp3": {
      "d": 8.59,
      "c": [
        [
          0.0,
          8.59,
          "En 2023, por cada mil habitantes se consumieron 182,70 toneladas de insumos naturales del bosque."
        ]
      ]
    },
    "slide-09/titulo.mp3": {
      "d": 4.05,
      "c": [
        [
          0.0,
          2.72,
          "Cifras del sector forestal colombiano."
        ],
        [
          2.73,
          4.05,
          "Movilización."
        ]
      ]
    },
    "slide-09/general.mp3": {
      "d": 47.65,
      "c": [
        [
          0.0,
          10.55,
          "En el año 2024 fueron cuatro los departamentos que concentraron el 62,25 % del volumen total de madera"
        ],
        [
          10.56,
          25.95,
          "movilizada en el país: Antioquia (30,09 %), Valle del Cauca (15,76 %), Cauca (12,48 %) y Boyacá (5,69 %)."
        ],
        [
          25.96,
          33.830000000000005,
          "En cuanto a la movilización de madera reportada por el Ministerio de Ambiente,"
        ],
        [
          33.84,
          47.38,
          "los principales departamentos fueron: Nariño (141.575 m³), Antioquia (118.056 m³) y Boyacá (62.245 m³)."
        ]
      ]
    },
    "slide-10/titulo.mp3": {
      "d": 5.15,
      "c": [
        [
          0.0,
          1.94,
          "Pon a prueba tus conocimientos."
        ],
        [
          1.95,
          5.15,
          "¡Relaciona cada concepto con su definición!"
        ]
      ]
    },
    "slide-10/popup-retro-relaciona.mp3": {
      "d": 43.55,
      "c": [
        [
          0.0,
          1.85,
          "Retroalimentación."
        ],
        [
          1.86,
          6.41,
          "La ley 99 del 1993 crea el Sistema Nacional Ambiental (SINA),"
        ],
        [
          6.36,
          12.3,
          "para la administración del Bosque Natural en Colombia."
        ],
        [
          12.31,
          19.889999999999997,
          "El Ministerio de Agricultura es la entidad competente para formular la política de cultivos forestales con"
        ],
        [
          19.9,
          24.93,
          "fines comerciales, y ha delegado funciones en el Instituto Colombiano Agropecuario (ICA)."
        ],
        [
          24.94,
          33.07,
          "Colombia es un país de alto potencial para el desarrollo forestal con aproximadamente el 50% de su territorio"
        ],
        [
          33.02,
          40.86,
          "cubierto en bosques naturales; con 14MM de hectáreas con vocación –o aptitud catalogada alta y media– para"
        ],
        [
          40.81,
          43.55,
          "plantaciones forestales comerciales."
        ]
      ]
    },
    "slide-11/titulo.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          1.99,
          "Algunos conceptos básicos."
        ]
      ]
    },
    "slide-11/popup-e-1.mp3": {
      "d": 1.57,
      "c": [
        [
          0.0,
          1.34,
          "Producto forestal."
        ]
      ]
    },
    "slide-11/popup-e-2.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Producto forestal maderable."
        ]
      ]
    },
    "slide-11/popup-e-3.mp3": {
      "d": 1.31,
      "c": [
        [
          0.0,
          1.31,
          "Madera legal."
        ]
      ]
    },
    "slide-11/popup-e-4.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.51,
          "Gobernanza Forestal."
        ]
      ]
    },
    "slide-12/titulo.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.17,
          "Cadena forestal."
        ]
      ]
    },
    "slide-12/popup-eslabon-1.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.41,
          "Eslabón 01."
        ]
      ]
    },
    "slide-12/popup-eslabon-2.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.41,
          "Eslabón 02."
        ]
      ]
    },
    "slide-12/popup-eslabon-3.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.26,
          "Eslabón 03."
        ]
      ]
    },
    "slide-12/popup-eslabon-4.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.28,
          "Eslabón 04."
        ]
      ]
    },
    "slide-13/titulo.mp3": {
      "d": 23.25,
      "c": [
        [
          0.0,
          2.0900000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.1,
          4.59,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.6,
          10.03,
          "¿Qué entidad se encarga de administrar los recursos forestales naturales en Colombia?"
        ],
        [
          10.04,
          15.120000000000001,
          "a. Se realiza a través del Sistema Nacional Ambiental (SINA)."
        ],
        [
          15.13,
          19.38,
          "b. El Ministerio de Ambiente y Desarrollo Sostenible."
        ],
        [
          19.39,
          23.0,
          "c. El Ministerio de Agricultura y Desarrollo Rural."
        ]
      ]
    },
    "slide-13/popup-q19-ok.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Muy bien, has acertado."
        ]
      ]
    },
    "slide-13/popup-q19-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-14/titulo.mp3": {
      "d": 28.45,
      "c": [
        [
          0.0,
          2.1100000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.12,
          4.62,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.63,
          11.85,
          "¿En qué entidad ha delegado el Ministerio de Agricultura y Desarrollo Rural la formulación de la política de"
        ],
        [
          11.8,
          14.27,
          "cultivos forestales con fines comerciales?"
        ],
        [
          14.28,
          20.669999999999998,
          "a. Institutos de investigación como IIAP, Sinchi e Invemar."
        ],
        [
          20.68,
          24.61,
          "b. Instituto Colombiano Agropecuario (ICA)."
        ],
        [
          24.62,
          28.22,
          "c. Ministerio de Ambiente y Desarrollo Sostenible."
        ]
      ]
    },
    "slide-14/popup-q21-ok.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Muy bien, has acertado."
        ]
      ]
    },
    "slide-14/popup-q21-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-15/titulo.mp3": {
      "d": 32.13,
      "c": [
        [
          0.0,
          2.1100000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.12,
          4.65,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.66,
          9.72,
          "¿En qué eslabón de la cadena forestal se encuentra el consumidor/comprador?"
        ],
        [
          9.73,
          15.71,
          "a. Es el actor final de la cadena forestal y se encuentra en el último eslabón."
        ],
        [
          15.72,
          21.369999999999997,
          "b. Es el actor inicial de la cadena y se encuentra en el primer eslabón."
        ],
        [
          21.38,
          28.77,
          "c. Es un actor que se encuentra a lo largo de toda la cadena forestal y que genera, con su decisión,"
        ],
        [
          28.72,
          32.13,
          "un efecto dominó con impacto en todos los actores."
        ]
      ]
    },
    "slide-15/popup-q23-ok.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Muy bien, has acertado."
        ]
      ]
    },
    "slide-15/popup-q23-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-16/titulo.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.84,
          "¿Te has preguntado en qué se usa la madera?"
        ]
      ]
    },
    "slide-17/titulo.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.88,
          "Presentación de la madera."
        ]
      ]
    },
    "slide-17/popup-madera-58.mp3": {
      "d": 0.76,
      "c": [
        [
          0.0,
          0.56,
          "Poste."
        ]
      ]
    },
    "slide-17/popup-madera-59.mp3": {
      "d": 1.31,
      "c": [
        [
          0.0,
          1.07,
          "Vara corredor."
        ]
      ]
    },
    "slide-17/popup-madera-60.mp3": {
      "d": 1.31,
      "c": [
        [
          0.0,
          1.08,
          "Vara limatón."
        ]
      ]
    },
    "slide-17/popup-madera-61.mp3": {
      "d": 0.84,
      "c": [
        [
          0.0,
          0.62,
          "Pilote."
        ]
      ]
    },
    "slide-17/popup-madera-62.mp3": {
      "d": 0.76,
      "c": [
        [
          0.0,
          0.76,
          "Troza."
        ]
      ]
    },
    "slide-17/popup-madera-63.mp3": {
      "d": 0.76,
      "c": [
        [
          0.0,
          0.76,
          "Bloque."
        ]
      ]
    },
    "slide-17/popup-madera-64.mp3": {
      "d": 0.76,
      "c": [
        [
          0.0,
          0.76,
          "Viga."
        ]
      ]
    },
    "slide-17/popup-madera-65.mp3": {
      "d": 0.76,
      "c": [
        [
          0.0,
          0.55,
          "Tabla."
        ]
      ]
    },
    "slide-17/popup-madera-66.mp3": {
      "d": 0.84,
      "c": [
        [
          0.0,
          0.84,
          "Tablón."
        ]
      ]
    },
    "slide-17/popup-madera-67.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.63,
          "Tablero finger joint."
        ]
      ]
    },
    "slide-17/popup-madera-75.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Tablero de madera-cemento."
        ]
      ]
    },
    "slide-17/popup-madera-68.mp3": {
      "d": 2.59,
      "c": [
        [
          0.0,
          2.59,
          "Tablero de partículas aglomeradas."
        ]
      ]
    },
    "slide-17/popup-madera-69.mp3": {
      "d": 2.77,
      "c": [
        [
          0.0,
          2.77,
          "Tablero de fibra o MDF."
        ]
      ]
    },
    "slide-17/popup-madera-70.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.51,
          "Tablero contrachapado."
        ]
      ]
    },
    "slide-17/popup-madera-71.mp3": {
      "d": 2.35,
      "c": [
        [
          0.0,
          2.1,
          "Tablero tricapa o chapeado."
        ]
      ]
    },
    "slide-17/popup-madera-72.mp3": {
      "d": 3.55,
      "c": [
        [
          0.0,
          3.32,
          "Tablero de virutas orientadas (OSB)."
        ]
      ]
    },
    "slide-17/popup-categoria-rolliza.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.41,
          "Madera rolliza."
        ]
      ]
    },
    "slide-17/popup-categoria-aserrada.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.41,
          "Madera aserrada."
        ]
      ]
    },
    "slide-17/popup-madera-ver-mas.mp3": {
      "d": 2.77,
      "c": [
        [
          0.0,
          2.77,
          "Madera maciza y derivados de madera."
        ]
      ]
    },
    "slide-18/titulo.mp3": {
      "d": 2.93,
      "c": [
        [
          0.0,
          2.93,
          "Tendencias de uso de la madera aserrada."
        ]
      ]
    },
    "slide-18/popup-e-1.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.28,
          "De uso temporal."
        ]
      ]
    },
    "slide-18/popup-e-2.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.41,
          "Para construcción."
        ]
      ]
    },
    "slide-18/popup-e-3.mp3": {
      "d": 1.57,
      "c": [
        [
          0.0,
          1.34,
          "De uso estético."
        ]
      ]
    },
    "slide-18/popup-e-4.mp3": {
      "d": 1.96,
      "c": [
        [
          0.0,
          1.96,
          "Para elementos interiores."
        ]
      ]
    },
    "slide-19/titulo.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Ventajas del uso de madera."
        ]
      ]
    },
    "slide-19/general.mp3": {
      "d": 13.71,
      "c": [
        [
          0.0,
          7.31,
          "Aquí se destacan algunas de las ventajas de usar madera legal y sostenible en usos transitorios o permanentes"
        ],
        [
          7.26,
          13.47,
          "en obras de construcción, instrumentos musicales, mobiliario, artesanías, entre otros."
        ]
      ]
    },
    "slide-19/popup-r-tree.mp3": {
      "d": 6.69,
      "c": [
        [
          0.0,
          6.69,
          "Material natural de origen renovable y con cadenas de suministro controladas para garantizar sostenibilidad."
        ]
      ]
    },
    "slide-19/popup-r-bulb.mp3": {
      "d": 4.05,
      "c": [
        [
          0.0,
          3.83,
          "Por sus características, es de fácil reuso o reciclaje."
        ]
      ]
    },
    "slide-19/popup-r-truck.mp3": {
      "d": 5.41,
      "c": [
        [
          0.0,
          5.41,
          "Material liviano, lo cual reduce los costos de transporte y disposición final."
        ]
      ]
    },
    "slide-19/popup-r-gear.mp3": {
      "d": 5.15,
      "c": [
        [
          0.0,
          4.96,
          "Es adaptable al diseño estético y belleza final cuando se usa en construcción."
        ]
      ]
    },
    "slide-19/popup-r-roots.mp3": {
      "d": 5.33,
      "c": [
        [
          0.0,
          5.33,
          "Reservorio de carbono secuestrado de la atmósfera de almacenamiento de largo plazo."
        ]
      ]
    },
    "slide-19/popup-r-bin.mp3": {
      "d": 5.41,
      "c": [
        [
          0.0,
          5.41,
          "Ser un buen aislante acústico por sus características de densidad y estructura porosa."
        ]
      ]
    },
    "slide-19/popup-r-recycle.mp3": {
      "d": 4.91,
      "c": [
        [
          0.0,
          4.7,
          "Por sus excelentes características porosas, puede ser un aislante térmico."
        ]
      ]
    },
    "slide-20/titulo.mp3": {
      "d": 4.21,
      "c": [
        [
          0.0,
          4.0,
          "¿Qué es un consumo responsable de productos forestales maderables?"
        ]
      ]
    },
    "slide-21/titulo.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          1.99,
          "Algunos conceptos básicos."
        ]
      ]
    },
    "slide-22/titulo.mp3": {
      "d": 4.21,
      "c": [
        [
          0.0,
          4.21,
          "¿Qué es una compra responsable de productos forestales maderables?"
        ]
      ]
    },
    "slide-23/titulo.mp3": {
      "d": 3.55,
      "c": [
        [
          0.0,
          3.55,
          "¿Cuáles son los beneficios de comprar responsablemente?"
        ]
      ]
    },
    "slide-23/popup-beneficios-1.mp3": {
      "d": 2.27,
      "c": [
        [
          0.0,
          2.05,
          "Mejora de imagen reputacional"
        ]
      ]
    },
    "slide-23/popup-beneficios-2.mp3": {
      "d": 3.55,
      "c": [
        [
          0.0,
          3.34,
          "Oportunidades de acceso a mercados diferenciados"
        ]
      ]
    },
    "slide-23/popup-beneficios-3.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          2.0,
          "Generación de redes de valor"
        ]
      ]
    },
    "slide-23/popup-beneficios-4.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Sostenibilidad ambiental"
        ]
      ]
    },
    "slide-23/popup-beneficios-5.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.88,
          "Sostenibilidad social"
        ]
      ]
    },
    "slide-24/titulo.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          3.08,
          "Rol del consumidor/comprador responsable"
        ]
      ]
    },
    "slide-25/titulo.mp3": {
      "d": 3.63,
      "c": [
        [
          0.0,
          3.44,
          "¿Qué promueves como consumidor/comprador responsable?"
        ]
      ]
    },
    "slide-25/popup-e-2.mp3": {
      "d": 2.27,
      "c": [
        [
          0.0,
          2.27,
          "Promueve la economía circular"
        ]
      ]
    },
    "slide-25/popup-e-3.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          3.08,
          "Promueve la conciencia a través del ejemplo"
        ]
      ]
    },
    "slide-25/popup-e-4.mp3": {
      "d": 2.77,
      "c": [
        [
          0.0,
          2.52,
          "Promueve el consumo/compra local"
        ]
      ]
    },
    "slide-26/titulo.mp3": {
      "d": 1.31,
      "c": [
        [
          0.0,
          1.31,
          "Para reflexionar."
        ]
      ]
    },
    "slide-26/popup-e-1.mp3": {
      "d": 18.91,
      "c": [
        [
          0.0,
          7.04,
          "Como comprador, debes asegurarte de adquirir productos forestales maderables en establecimientos comerciales"
        ],
        [
          6.99,
          13.86,
          "legalmente constituidos; cuya compra sea respaldada por una factura, sin evadir el pago del IVA,"
        ],
        [
          13.81,
          18.71,
          "ya que impactan negativamente a todo el sector y puedes recibir sanciones."
        ]
      ]
    },
    "slide-26/popup-e-2.mp3": {
      "d": 19.96,
      "c": [
        [
          0.0,
          6.28,
          "Un consumidor responsable puede convertirse en el catalizador del cambio en la cadena productiva forestal,"
        ],
        [
          6.29,
          13.16,
          "modificaciones ligeras en nuestros hábitos de consumo pueden generar un gran impacto en la sociedad."
        ],
        [
          13.17,
          19.96,
          "Es primordial implementar políticas de compra responsable que apoyen un cambio hacia prácticas sostenibles."
        ]
      ]
    },
    "slide-27/titulo.mp3": {
      "d": 1.07,
      "c": [
        [
          0.0,
          1.07,
          "Para resumir."
        ]
      ]
    },
    "slide-27/general.mp3": {
      "d": 71.47,
      "c": [
        [
          0.0,
          6.97,
          "Resumiendo, el consumo responsable corresponde a la adquisición de productos forestales maderables para uso"
        ],
        [
          6.92,
          10.07,
          "doméstico o uso final sin interés comercial, por tanto,"
        ],
        [
          10.08,
          16.68,
          "es realizada por individuos que aplican criterios ambientales, sociales y económicos;"
        ],
        [
          16.69,
          23.08,
          "verifican etiquetas de certificación creíbles y seleccionan establecimientos comerciales legales."
        ],
        [
          23.09,
          29.55,
          "Por otro lado, la compra responsable se asocia a la realizada por empresas públicas o empresas privadas que,"
        ],
        [
          29.5,
          33.58,
          "a través de la definición de un programa de compra responsable,"
        ],
        [
          33.53,
          36.97,
          "implementan una hoja de ruta con pasos secuenciales,"
        ],
        [
          36.92,
          43.49,
          "indicadores y verificadores para la selección de proveedores de productos forestales maderables terminados,"
        ],
        [
          43.44,
          49.11,
          "o en transformación intermedia, para construcción, adecuación o mobiliario;"
        ],
        [
          49.12,
          52.980000000000004,
          "entre otros usos y servicios que prestan estos productos."
        ],
        [
          52.99,
          59.79,
          "Tanto los compradores como los consumidores responsables reconocen su rol en la cadena forestal y su impacto"
        ],
        [
          59.74,
          65.91,
          "en la degradación o conservación de los bosques, las dinámicas de mercado, el cumplimiento legal, laboral,"
        ],
        [
          65.92,
          71.47,
          "y la distribución de beneficios de manera equitativa en la cadena productiva."
        ]
      ]
    },
    "slide-28/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Conoce más"
        ]
      ]
    },
    "slide-29/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Bibliografía."
        ]
      ]
    },
    "slide-30/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Bibliografía."
        ]
      ]
    },
    "slide-31/titulo.mp3": {
      "d": 2.77,
      "c": [
        [
          0.0,
          1.34,
          "Bibliografía."
        ],
        [
          1.35,
          2.56,
          "Videos finales."
        ]
      ]
    },
    "slide-32/titulo.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.49,
          "¡Felicitaciones!"
        ]
      ]
    },
    "slide-33/titulo.mp3": {
      "d": 5.25,
      "c": [
        [
          0.0,
          5.25,
          "Introducción a la compra y consumo responsable de productos forestales maderables."
        ]
      ]
    }
  }
};
