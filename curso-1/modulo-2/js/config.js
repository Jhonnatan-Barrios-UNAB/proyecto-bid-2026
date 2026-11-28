/* =====================================================================
   CONFIGURACIÓN DEL MULTIMEDIA · Curso 1 · Módulo 2 (proyecto BID)
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
  "claveProgreso": "bid-curso1-modulo2-progreso",
  "videos": {
    "video-inicial": {
      "titulo": "Video inicial",
      "url": "videos/slide-03/video.mp4",
      "youtube": "",
      "fuente": "Video de bienvenida (avatar). Guion: ver videos/slide-03/GUION-video.txt"
    },
    "video-normativa": {
      "titulo": "La normativa forestal",
      "url": "videos/slide-05/video.mp4",
      "youtube": "https://www.youtube.com/watch?v=csJcKeLyCks&t=117s",
      "fuente": "GIZ Colombia. (2024). La normativa Forestal [Video]. YouTube."
    },
    "video-piml": {
      "titulo": "Madera Legal para el sector Construcción en Colombia",
      "url": "videos/slide-20/video.mp4",
      "youtube": "https://www.youtube.com/watch?v=L_75HanqCBI",
      "fuente": "Elija Madera Legal Compre Responsable - PIML. (2021). Madera Legal para el sector Construcción en Colombia [Video]. YouTube."
    },
    "video-esquema": {
      "titulo": "Webinar PIMLC 31 julio / Esquema de Reconocimiento a la Procedencia Legal",
      "url": "videos/slide-23/video.mp4",
      "youtube": "https://www.youtube.com/watch?v=bSFjKc7U33c",
      "fuente": "Elija Madera Legal Compre Responsable - PIML. (2020). Webinar PIMLC 31 julio / Esquema de Reconocimiento a la Procedencia Legal [Video]. YouTube."
    }
  },
  "documentos": {
    "guia-compra": {
      "titulo": "Guía de compra y consumo responsable de madera en Colombia",
      "url": "documentos/Guia-de-Compra-y-Consumo-Responsable-de-Madera-en-Colombia.pdf"
    }
  },
  "imagenes": {},
  "textosLocucion": {
    "slide-01/titulo.mp3": "Módulo 2. Instrumentos para la compra y consumo responsable de productos forestales maderables.",
    "slide-02/titulo.mp3": "Tabla de contenido.",
    "slide-03/titulo.mp3": "Video inicial.",
    "slide-04/titulo.mp3": "Resumen del módulo anterior. Veamos los recursos forestales.",
    "slide-04/popup-e-1.mp3": "Bosque natural.",
    "slide-04/popup-e-2.mp3": "Bosque plantado: corresponde a las áreas de reforestación con especies tanto nativas como exóticas, y cuyo establecimiento puede ser el producto de un proceso productivo o con fines de protección y conservación ambiental.",
    "slide-04/popup-e-3.mp3": "Otros ecosistemas forestales: tierra ocupada por ecosistemas con presencia de individuos forestales con distribución dispersa, incluyen pastos arbolados; o en arreglos con baja densidad de individuos forestales, arreglos agrosilvopastoriles.",
    "slide-05/titulo.mp3": "Instrumentos normativos.",
    "slide-06/titulo.mp3": "En resumen, sobre el video introductorio del marco normativo forestal.",
    "slide-06/popup-r-1.mp3": "Bosque natural.",
    "slide-06/popup-r-2.mp3": "Otros ecosistemas naturales: páramos, humedales, sabanas, etc.",
    "slide-06/popup-r-3.mp3": "Plantaciones forestales protectoras.",
    "slide-06/popup-r-4.mp3": "Plantaciones forestales protectoras-productoras.",
    "slide-06/popup-r-5.mp3": "Plantaciones forestales y sistemas agroforestales con fines comerciales.",
    "slide-07/titulo.mp3": "Marco normativo forestal.",
    "slide-07/popup-anio-7-1959.mp3": "1959.",
    "slide-07/popup-anio-7-1974.mp3": "1974.",
    "slide-07/popup-anio-7-1991.mp3": "1991.",
    "slide-07/popup-anio-7-1993.mp3": "1993.",
    "slide-07/popup-anio-7-1994.mp3": "1994.",
    "slide-07/popup-anio-7-1996.mp3": "1996.",
    "slide-07/popup-anio-7-2015.mp3": "2015.",
    "slide-08/titulo.mp3": "Marco normativo forestal.",
    "slide-08/popup-anio-8-2017.mp3": "2017.",
    "slide-08/popup-anio-8-2018.mp3": "2018.",
    "slide-08/popup-anio-8-2019.mp3": "2019.",
    "slide-08/popup-anio-8-2024.mp3": "2024.",
    "slide-09/titulo.mp3": "Marco normativo forestal.",
    "slide-09/popup-anio-9-2015.mp3": "2015.",
    "slide-09/popup-anio-9-2018.mp3": "2018.",
    "slide-09/popup-anio-9-2019.mp3": "2019.",
    "slide-09/popup-anio-9-2020.mp3": "2020.",
    "slide-10/titulo.mp3": "Administración del acceso al recurso forestal",
    "slide-10/popup-recurso-1.mp3": "Plantaciones forestales protectoras-productoras.",
    "slide-10/popup-recurso-2.mp3": "Árboles aislados.",
    "slide-10/popup-recurso-3.mp3": "Cercas vivas.",
    "slide-10/popup-recurso-4.mp3": "Barreras rompevientos.",
    "slide-10/popup-recurso-5.mp3": "Árboles de sombrío.",
    "slide-10/popup-recurso-6.mp3": "Árboles frutales con características leñosas.",
    "slide-10/popup-recurso-7.mp3": "Guaduales y bambusales categorías 1 y 2.",
    "slide-11/titulo.mp3": "Administración del acceso al recurso forestal.",
    "slide-11/popup-r-1.mp3": "Cultivos o plantaciones forestales comerciales.",
    "slide-11/popup-r-2.mp3": "Sistemas Agroforestales - SAF.",
    "slide-11/popup-r-3.mp3": "Plantaciones forestales con recursos del Certificado de Incentivo Forestal.",
    "slide-11/popup-r-4.mp3": "Barreras rompevientos y cercas vivas.",
    "slide-11/popup-registro-ica.mp3": "El registro de plantaciones forestales y sistemas agroforestales con fines comerciales tiene como objetivo permitir la cosecha forestal para la obtención de productos forestales maderables (madera). No aplica para la producción de látex o de productos no maderables que sean aprovechados de plantaciones forestales comerciales.",
    "slide-12/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿Qué entidad tiene la competencia de registrar los sistemas agroforestales SAF? a. Ministerio de Ambiente y Desarrollo Sostenible. b. Autoridad Ambiental Regional. c. Instituto Colombiano Agropecuario.",
    "slide-12/popup-q13-ok.mp3": "Muy bien.",
    "slide-12/popup-q13-mal.mp3": "Repasa el contenido.",
    "slide-13/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿Qué entidad tiene la competencia de registrar las plantaciones forestales protectoras productoras que no accedieron a CIF? a. Ministerio de Ambiente y Desarrollo Sostenible. b. Autoridad Ambiental Regional competente. c. Instituto Colombiano Agropecuario.",
    "slide-13/popup-q14-ok.mp3": "Muy bien.",
    "slide-13/popup-q14-mal.mp3": "Repasa el contenido.",
    "slide-14/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿El aprovechamiento de las cercas vivas y barreras rompevientos que no hagan parte de cultivos forestales, sistemas agroforestales y plantaciones CIF requerirán algún permiso o autorización? a. Sí, ante la Autoridad Ambiental Regional. b. No, solo requerirán SUNL.",
    "slide-14/popup-q15-ok.mp3": "Muy bien.",
    "slide-14/popup-q15-mal.mp3": "Repasa el contenido del decreto 1532 de 2019.",
    "slide-15/titulo.mp3": "El sistema de trazabilidad forestal",
    "slide-15/popup-trazabilidad.mp3": "El objetivo es implementar un Sistema Nacional de Trazabilidad Forestal en línea que permita realizar el seguimiento histórico, ubicación y trayectoria a los productos forestales de primer y segundo grado de transformación, a lo largo de su cadena de abastecimiento, desde su origen hasta su destino final.",
    "slide-16/titulo.mp3": "Aplicativo Forestales+",
    "slide-16/popup-aplicativo.mp3": "El Aplicativo Forestales del ICA es una herramienta tecnológica vía web que permite el registro de plantaciones forestales y sistemas agroforestales con fines comerciales; y la expedición de certificados de movilización de productos de transformación primaria obtenidos de áreas debidamente registradas.",
    "slide-17/titulo.mp3": "Productos forestales maderables",
    "slide-17/popup-mas-1.mp3": "Productos forestales maderables.",
    "slide-17/popup-mas-2.mp3": "Productos forestales de transformación primaria: son los productos obtenidos directamente a partir de las trozas, tales como: bloques, bancos, tablones, tablas y chapas, entre otros, sin ser sometidos a ningún proceso o grado de elaboración y/o de acabado industrial con mayor valor agregado.",
    "slide-17/popup-mas-3.mp3": "Productos forestales de transformación secundaria: productos de la madera obtenidos mediante diferentes procesos y grados de elaboración y de acabado industrial con mayor valor agregado como molduras, puertas, muebles, contrachapados y otros productos terminados afines.",
    "slide-18/titulo.mp3": "Para resumir.",
    "slide-19/titulo.mp3": "Pon a prueba tus conocimientos. ¡Relaciona cada producto forestal maderable con el documento que debe amparar su movilización!",
    "slide-19/popup-retro-relaciona-productos.mp3": "Muy bien.",
    "slide-20/titulo.mp3": "Instrumentos técnicos.",
    "slide-20/popup-e-1.mp3": "Nuevas fichas técnicas con criterios ambientales 2019-2025.",
    "slide-20/popup-e-2.mp3": "Guía para la compra responsable de madera en el sector de la construcción.",
    "slide-20/popup-e-3.mp3": "Reglamento Colombiano de Construcción Sismo Resistente.",
    "slide-20/popup-ficha-ver-mas.mp3": "Nuevas fichas técnicas con criterios ambientales 2019-2025.",
    "slide-20/popup-guia-ver-mas.mp3": "Guía para la compra responsable de madera en el sector de la construcción.",
    "slide-20/popup-nsr-ver-mas.mp3": "Reglamento Colombiano de Construcción Sismo Resistente.",
    "slide-21/titulo.mp3": "Instrumentos de mercado. Certificación Forestal Voluntaria.",
    "slide-21/popup-fsc.mp3": "Consejo de Administración Forestal (FSC).",
    "slide-22/titulo.mp3": "Impacto en Colombia",
    "slide-22/popup-fsc-colombia.mp3": "En Colombia, el FSC inició su actividad en 1996 y ya cuenta con un estándar nacional de manejo forestal responsable adaptado para el país, así como la primera empresa forestal comunitaria afrodescendiente certificada en Latinoamérica.",
    "slide-23/titulo.mp3": "Instrumentos de mercado. Esquema de Reconocimiento a la Procedencia Legal.",
    "slide-23/popup-esquema.mp3": "Esquema de Reconocimiento a la Procedencia Legal.",
    "slide-24/titulo.mp3": "Esquema de Reconocimiento a la Procedencia Legal. Beneficios para los usuarios (empresas).",
    "slide-24/popup-esquema-empresas.mp3": "Formarán parte del esquema, todas aquellas empresas forestales que hayan cumplido exitosamente el proceso de verificación, y que cuenten con el reconocimiento otorgado por la autoridad ambiental competente.",
    "slide-25/titulo.mp3": "¿Cómo acceder?",
    "slide-25/popup-verificadores.mp3": "Evaluación de los verificadores.",
    "slide-26/titulo.mp3": "Resultado.",
    "slide-26/popup-resultado.mp3": "Reconocimiento de la Autoridad Ambiental.",
    "slide-27/titulo.mp3": "Esquema de Reconocimiento a la Procedencia Legal. Beneficios para el consumidor.",
    "slide-28/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿Qué es un verificador obligatorio? a. Confirma que el producto se encuentra certificado. b. Acciones de trazabilidad establecidas en los protocolos de gobernanza forestal. c. Es un requisito establecido por el Decreto 1076/2015, o por la A.A. competente.",
    "slide-28/popup-q31-ok.mp3": "Muy bien.",
    "slide-28/popup-q31-mal.mp3": "Revisa el contenido.",
    "slide-29/titulo.mp3": "Pon a prueba tus conocimientos. ¡Relaciona la descripción con el instrumento!",
    "slide-29/popup-retro-relaciona-instrumentos.mp3": "Muy bien.",
    "slide-30/titulo.mp3": "Pon a prueba tus conocimientos. Completa la frase:  Uno de los beneficios de que una empresa cuente con el reconocimiento a la procedencia legal es que: Toca los fragmentos en orden para completarla.",
    "slide-30/popup-frase-ok.mp3": "Muy bien. La frase completa es: mejora la competitividad forestal y la apertura hacia nuevos mercados.",
    "slide-30/popup-frase-mal.mp3": "Repasa el contenido.",
    "slide-31/titulo.mp3": "Bibliografía.",
    "slide-32/titulo.mp3": "Bibliografía.",
    "slide-33/titulo.mp3": "¡Felicitaciones! Finalizaste los contenidos del Módulo 2 con éxito."
  },
  "subtitulos": {
    "slide-01/titulo.mp3": {
      "d": 6.84,
      "c": [
        [
          0.0,
          1.39,
          "Módulo 2."
        ],
        [
          1.4,
          6.63,
          "Instrumentos para la compra y consumo responsable de productos forestales maderables."
        ]
      ]
    },
    "slide-02/titulo.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.27,
          "Tabla de contenido."
        ]
      ]
    },
    "slide-03/titulo.mp3": {
      "d": 1.31,
      "c": [
        [
          0.0,
          1.31,
          "Video inicial."
        ]
      ]
    },
    "slide-04/titulo.mp3": {
      "d": 4.68,
      "c": [
        [
          0.0,
          2.22,
          "Resumen del módulo anterior."
        ],
        [
          2.23,
          4.47,
          "Veamos los recursos forestales."
        ]
      ]
    },
    "slide-04/popup-e-1.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.41,
          "Bosque natural."
        ]
      ]
    },
    "slide-04/popup-e-2.mp3": {
      "d": 14.29,
      "c": [
        [
          0.0,
          6.61,
          "Bosque plantado: corresponde a las áreas de reforestación con especies tanto nativas como exóticas,"
        ],
        [
          6.56,
          12.54,
          "y cuyo establecimiento puede ser el producto de un proceso productivo o con fines de protección y"
        ],
        [
          12.49,
          14.29,
          "conservación ambiental."
        ]
      ]
    },
    "slide-04/popup-e-3.mp3": {
      "d": 17.16,
      "c": [
        [
          0.0,
          7.28,
          "Otros ecosistemas forestales: tierra ocupada por ecosistemas con presencia de individuos forestales con"
        ],
        [
          7.23,
          14.620000000000001,
          "distribución dispersa, incluyen pastos arbolados; o en arreglos con baja densidad de individuos forestales,"
        ],
        [
          14.63,
          16.94,
          "arreglos agrosilvopastoriles."
        ]
      ]
    },
    "slide-05/titulo.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.88,
          "Instrumentos normativos."
        ]
      ]
    },
    "slide-06/titulo.mp3": {
      "d": 4.75,
      "c": [
        [
          0.0,
          4.75,
          "En resumen, sobre el video introductorio del marco normativo forestal."
        ]
      ]
    },
    "slide-06/popup-r-1.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.41,
          "Bosque natural."
        ]
      ]
    },
    "slide-06/popup-r-2.mp3": {
      "d": 5.8,
      "c": [
        [
          0.0,
          5.8,
          "Otros ecosistemas naturales: páramos, humedales, sabanas, etc."
        ]
      ]
    },
    "slide-06/popup-r-3.mp3": {
      "d": 2.69,
      "c": [
        [
          0.0,
          2.45,
          "Plantaciones forestales protectoras."
        ]
      ]
    },
    "slide-06/popup-r-4.mp3": {
      "d": 3.4,
      "c": [
        [
          0.0,
          3.4,
          "Plantaciones forestales protectoras-productoras."
        ]
      ]
    },
    "slide-06/popup-r-5.mp3": {
      "d": 5.07,
      "c": [
        [
          0.0,
          4.86,
          "Plantaciones forestales y sistemas agroforestales con fines comerciales."
        ]
      ]
    },
    "slide-07/titulo.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Marco normativo forestal."
        ]
      ]
    },
    "slide-07/popup-anio-7-1959.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          2.19,
          "1959."
        ]
      ]
    },
    "slide-07/popup-anio-7-1974.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          2.19,
          "1974."
        ]
      ]
    },
    "slide-07/popup-anio-7-1991.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "1991."
        ]
      ]
    },
    "slide-07/popup-anio-7-1993.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          2.19,
          "1993."
        ]
      ]
    },
    "slide-07/popup-anio-7-1994.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          2.19,
          "1994."
        ]
      ]
    },
    "slide-07/popup-anio-7-1996.mp3": {
      "d": 2.27,
      "c": [
        [
          0.0,
          2.27,
          "1996."
        ]
      ]
    },
    "slide-07/popup-anio-7-2015.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.17,
          "2015."
        ]
      ]
    },
    "slide-08/titulo.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Marco normativo forestal."
        ]
      ]
    },
    "slide-08/popup-anio-8-2017.mp3": {
      "d": 1.57,
      "c": [
        [
          0.0,
          1.57,
          "2017."
        ]
      ]
    },
    "slide-08/popup-anio-8-2018.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.34,
          "2018."
        ]
      ]
    },
    "slide-08/popup-anio-8-2019.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.34,
          "2019."
        ]
      ]
    },
    "slide-08/popup-anio-8-2024.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.44,
          "2024."
        ]
      ]
    },
    "slide-09/titulo.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Marco normativo forestal."
        ]
      ]
    },
    "slide-09/popup-anio-9-2015.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.17,
          "2015."
        ]
      ]
    },
    "slide-09/popup-anio-9-2018.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.34,
          "2018."
        ]
      ]
    },
    "slide-09/popup-anio-9-2019.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.34,
          "2019."
        ]
      ]
    },
    "slide-09/popup-anio-9-2020.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.2,
          "2020."
        ]
      ]
    },
    "slide-10/titulo.mp3": {
      "d": 3.24,
      "c": [
        [
          0.0,
          3.24,
          "Administración del acceso al recurso forestal"
        ]
      ]
    },
    "slide-10/popup-recurso-1.mp3": {
      "d": 3.4,
      "c": [
        [
          0.0,
          3.4,
          "Plantaciones forestales protectoras-productoras."
        ]
      ]
    },
    "slide-10/popup-recurso-2.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.45,
          "Árboles aislados."
        ]
      ]
    },
    "slide-10/popup-recurso-3.mp3": {
      "d": 1.49,
      "c": [
        [
          0.0,
          1.49,
          "Cercas vivas."
        ]
      ]
    },
    "slide-10/popup-recurso-4.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          1.97,
          "Barreras rompevientos."
        ]
      ]
    },
    "slide-10/popup-recurso-5.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.48,
          "Árboles de sombrío."
        ]
      ]
    },
    "slide-10/popup-recurso-6.mp3": {
      "d": 3.32,
      "c": [
        [
          0.0,
          3.12,
          "Árboles frutales con características leñosas."
        ]
      ]
    },
    "slide-10/popup-recurso-7.mp3": {
      "d": 3.97,
      "c": [
        [
          0.0,
          3.97,
          "Guaduales y bambusales categorías 1 y 2."
        ]
      ]
    },
    "slide-11/titulo.mp3": {
      "d": 3.24,
      "c": [
        [
          0.0,
          3.24,
          "Administración del acceso al recurso forestal."
        ]
      ]
    },
    "slide-11/popup-r-1.mp3": {
      "d": 3.4,
      "c": [
        [
          0.0,
          3.19,
          "Cultivos o plantaciones forestales comerciales."
        ]
      ]
    },
    "slide-11/popup-r-2.mp3": {
      "d": 2.85,
      "c": [
        [
          0.0,
          2.85,
          "Sistemas Agroforestales - SAF."
        ]
      ]
    },
    "slide-11/popup-r-3.mp3": {
      "d": 4.83,
      "c": [
        [
          0.0,
          4.83,
          "Plantaciones forestales con recursos del Certificado de Incentivo Forestal."
        ]
      ]
    },
    "slide-11/popup-r-4.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          3.08,
          "Barreras rompevientos y cercas vivas."
        ]
      ]
    },
    "slide-11/popup-registro-ica.mp3": {
      "d": 21.08,
      "c": [
        [
          0.0,
          6.39,
          "El registro de plantaciones forestales y sistemas agroforestales con fines comerciales tiene como objetivo"
        ],
        [
          6.34,
          13.11,
          "permitir la cosecha forestal para la obtención de productos forestales maderables (madera)."
        ],
        [
          13.12,
          19.14,
          "No aplica para la producción de látex o de productos no maderables que sean aprovechados de plantaciones"
        ],
        [
          19.09,
          20.88,
          "forestales comerciales."
        ]
      ]
    },
    "slide-12/titulo.mp3": {
      "d": 19.96,
      "c": [
        [
          0.0,
          2.0900000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.1,
          4.57,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.58,
          10.01,
          "¿Qué entidad tiene la competencia de registrar los sistemas agroforestales SAF?"
        ],
        [
          10.02,
          13.870000000000001,
          "a. Ministerio de Ambiente y Desarrollo Sostenible."
        ],
        [
          13.88,
          16.83,
          "b. Autoridad Ambiental Regional."
        ],
        [
          16.84,
          19.73,
          "c. Instituto Colombiano Agropecuario."
        ]
      ]
    },
    "slide-12/popup-q13-ok.mp3": {
      "d": 0.99,
      "c": [
        [
          0.0,
          0.99,
          "Muy bien."
        ]
      ]
    },
    "slide-12/popup-q13-mal.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.65,
          "Repasa el contenido."
        ]
      ]
    },
    "slide-13/titulo.mp3": {
      "d": 24.35,
      "c": [
        [
          0.0,
          2.0900000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.1,
          4.67,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.68,
          11.35,
          "¿Qué entidad tiene la competencia de registrar las plantaciones forestales protectoras productoras que no"
        ],
        [
          11.3,
          13.36,
          "accedieron a CIF?"
        ],
        [
          13.37,
          17.389999999999997,
          "a. Ministerio de Ambiente y Desarrollo Sostenible."
        ],
        [
          17.4,
          21.22,
          "b. Autoridad Ambiental Regional competente."
        ],
        [
          21.23,
          24.11,
          "c. Instituto Colombiano Agropecuario."
        ]
      ]
    },
    "slide-13/popup-q14-ok.mp3": {
      "d": 0.99,
      "c": [
        [
          0.0,
          0.99,
          "Muy bien."
        ]
      ]
    },
    "slide-13/popup-q14-mal.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.65,
          "Repasa el contenido."
        ]
      ]
    },
    "slide-14/titulo.mp3": {
      "d": 26.67,
      "c": [
        [
          0.0,
          2.0300000000000002,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.04,
          4.61,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.62,
          12.75,
          "¿El aprovechamiento de las cercas vivas y barreras rompevientos que no hagan parte de cultivos forestales,"
        ],
        [
          12.7,
          18.2,
          "sistemas agroforestales y plantaciones CIF requerirán algún permiso o autorización?"
        ],
        [
          18.21,
          23.639999999999997,
          "a. Sí, ante la Autoridad Ambiental Regional."
        ],
        [
          23.65,
          26.67,
          "b. No, solo requerirán SUNL."
        ]
      ]
    },
    "slide-14/popup-q15-ok.mp3": {
      "d": 0.99,
      "c": [
        [
          0.0,
          0.99,
          "Muy bien."
        ]
      ]
    },
    "slide-14/popup-q15-mal.mp3": {
      "d": 4.68,
      "c": [
        [
          0.0,
          4.68,
          "Repasa el contenido del decreto 1532 de 2019."
        ]
      ]
    },
    "slide-15/titulo.mp3": {
      "d": 2.59,
      "c": [
        [
          0.0,
          2.59,
          "El sistema de trazabilidad forestal"
        ]
      ]
    },
    "slide-15/popup-trazabilidad.mp3": {
      "d": 19.33,
      "c": [
        [
          0.0,
          6.34,
          "El objetivo es implementar un Sistema Nacional de Trazabilidad Forestal en línea que permita realizar el"
        ],
        [
          6.29,
          12.76,
          "seguimiento histórico, ubicación y trayectoria a los productos forestales de primer y segundo grado de"
        ],
        [
          12.71,
          19.11,
          "transformación, a lo largo de su cadena de abastecimiento, desde su origen hasta su destino final."
        ]
      ]
    },
    "slide-16/titulo.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          2.43,
          "Aplicativo Forestales+"
        ]
      ]
    },
    "slide-16/popup-aplicativo.mp3": {
      "d": 19.07,
      "c": [
        [
          0.0,
          5.9,
          "El Aplicativo Forestales del ICA es una herramienta tecnológica vía web que permite el registro de"
        ],
        [
          5.85,
          11.02,
          "plantaciones forestales y sistemas agroforestales con fines comerciales;"
        ],
        [
          11.03,
          17.09,
          "y la expedición de certificados de movilización de productos de transformación primaria obtenidos de áreas"
        ],
        [
          17.04,
          18.88,
          "debidamente registradas."
        ]
      ]
    },
    "slide-17/titulo.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          2.43,
          "Productos forestales maderables"
        ]
      ]
    },
    "slide-17/popup-mas-1.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          2.43,
          "Productos forestales maderables."
        ]
      ]
    },
    "slide-17/popup-mas-2.mp3": {
      "d": 21.32,
      "c": [
        [
          0.0,
          3.16,
          "Productos forestales de transformación primaria:"
        ],
        [
          3.17,
          11.15,
          "son los productos obtenidos directamente a partir de las trozas, tales como: bloques, bancos, tablones,"
        ],
        [
          11.16,
          18.46,
          "tablas y chapas, entre otros, sin ser sometidos a ningún proceso o grado de elaboración y/o de acabado"
        ],
        [
          18.41,
          21.11,
          "industrial con mayor valor agregado."
        ]
      ]
    },
    "slide-17/popup-mas-3.mp3": {
      "d": 18.52,
      "c": [
        [
          0.0,
          3.3400000000000003,
          "Productos forestales de transformación secundaria:"
        ],
        [
          3.35,
          10.88,
          "productos de la madera obtenidos mediante diferentes procesos y grados de elaboración y de acabado industrial"
        ],
        [
          10.83,
          18.52,
          "con mayor valor agregado como molduras, puertas, muebles, contrachapados y otros productos terminados afines."
        ]
      ]
    },
    "slide-18/titulo.mp3": {
      "d": 1.07,
      "c": [
        [
          0.0,
          1.07,
          "Para resumir."
        ]
      ]
    },
    "slide-19/titulo.mp3": {
      "d": 7.89,
      "c": [
        [
          0.0,
          2.0500000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.06,
          7.89,
          "¡Relaciona cada producto forestal maderable con el documento que debe amparar su movilización!"
        ]
      ]
    },
    "slide-19/popup-retro-relaciona-productos.mp3": {
      "d": 0.99,
      "c": [
        [
          0.0,
          0.99,
          "Muy bien."
        ]
      ]
    },
    "slide-20/titulo.mp3": {
      "d": 1.8,
      "c": [
        [
          0.0,
          1.8,
          "Instrumentos técnicos."
        ]
      ]
    },
    "slide-20/popup-e-1.mp3": {
      "d": 5.8,
      "c": [
        [
          0.0,
          5.59,
          "Nuevas fichas técnicas con criterios ambientales 2019-2025."
        ]
      ]
    },
    "slide-20/popup-e-2.mp3": {
      "d": 4.44,
      "c": [
        [
          0.0,
          4.44,
          "Guía para la compra responsable de madera en el sector de la construcción."
        ]
      ]
    },
    "slide-20/popup-e-3.mp3": {
      "d": 3.79,
      "c": [
        [
          0.0,
          3.79,
          "Reglamento Colombiano de Construcción Sismo Resistente."
        ]
      ]
    },
    "slide-20/popup-ficha-ver-mas.mp3": {
      "d": 5.8,
      "c": [
        [
          0.0,
          5.59,
          "Nuevas fichas técnicas con criterios ambientales 2019-2025."
        ]
      ]
    },
    "slide-20/popup-guia-ver-mas.mp3": {
      "d": 4.44,
      "c": [
        [
          0.0,
          4.44,
          "Guía para la compra responsable de madera en el sector de la construcción."
        ]
      ]
    },
    "slide-20/popup-nsr-ver-mas.mp3": {
      "d": 3.79,
      "c": [
        [
          0.0,
          3.79,
          "Reglamento Colombiano de Construcción Sismo Resistente."
        ]
      ]
    },
    "slide-21/titulo.mp3": {
      "d": 4.44,
      "c": [
        [
          0.0,
          1.88,
          "Instrumentos de mercado."
        ],
        [
          1.89,
          4.44,
          "Certificación Forestal Voluntaria."
        ]
      ]
    },
    "slide-21/popup-fsc.mp3": {
      "d": 4.21,
      "c": [
        [
          0.0,
          3.99,
          "Consejo de Administración Forestal (FSC)."
        ]
      ]
    },
    "slide-22/titulo.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.72,
          "Impacto en Colombia"
        ]
      ]
    },
    "slide-22/popup-fsc-colombia.mp3": {
      "d": 18.52,
      "c": [
        [
          0.0,
          8.19,
          "En Colombia, el FSC inició su actividad en 1996 y ya cuenta con un estándar nacional de manejo forestal"
        ],
        [
          8.14,
          15.93,
          "responsable adaptado para el país, así como la primera empresa forestal comunitaria afrodescendiente"
        ],
        [
          15.88,
          18.52,
          "certificada en Latinoamérica."
        ]
      ]
    },
    "slide-23/titulo.mp3": {
      "d": 5.25,
      "c": [
        [
          0.0,
          1.95,
          "Instrumentos de mercado."
        ],
        [
          1.96,
          5.25,
          "Esquema de Reconocimiento a la Procedencia Legal."
        ]
      ]
    },
    "slide-23/popup-esquema.mp3": {
      "d": 3.24,
      "c": [
        [
          0.0,
          3.24,
          "Esquema de Reconocimiento a la Procedencia Legal."
        ]
      ]
    },
    "slide-24/titulo.mp3": {
      "d": 6.61,
      "c": [
        [
          0.0,
          3.5100000000000002,
          "Esquema de Reconocimiento a la Procedencia Legal."
        ],
        [
          3.52,
          6.61,
          "Beneficios para los usuarios (empresas)."
        ]
      ]
    },
    "slide-24/popup-esquema-empresas.mp3": {
      "d": 12.93,
      "c": [
        [
          0.0,
          6.97,
          "Formarán parte del esquema, todas aquellas empresas forestales que hayan cumplido exitosamente el proceso de"
        ],
        [
          6.92,
          12.93,
          "verificación, y que cuenten con el reconocimiento otorgado por la autoridad ambiental competente."
        ]
      ]
    },
    "slide-25/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          0.96,
          "¿Cómo acceder?"
        ]
      ]
    },
    "slide-25/popup-verificadores.mp3": {
      "d": 2.27,
      "c": [
        [
          0.0,
          2.27,
          "Evaluación de los verificadores."
        ]
      ]
    },
    "slide-26/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          0.84,
          "Resultado."
        ]
      ]
    },
    "slide-26/popup-resultado.mp3": {
      "d": 2.69,
      "c": [
        [
          0.0,
          2.69,
          "Reconocimiento de la Autoridad Ambiental."
        ]
      ]
    },
    "slide-27/titulo.mp3": {
      "d": 5.56,
      "c": [
        [
          0.0,
          3.5300000000000002,
          "Esquema de Reconocimiento a la Procedencia Legal."
        ],
        [
          3.54,
          5.36,
          "Beneficios para el consumidor."
        ]
      ]
    },
    "slide-28/titulo.mp3": {
      "d": 25.08,
      "c": [
        [
          0.0,
          2.1100000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.12,
          4.59,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.6,
          7.87,
          "¿Qué es un verificador obligatorio?"
        ],
        [
          7.88,
          11.950000000000001,
          "a. Confirma que el producto se encuentra certificado."
        ],
        [
          11.96,
          17.799999999999997,
          "b. Acciones de trazabilidad establecidas en los protocolos de gobernanza forestal."
        ],
        [
          17.81,
          24.85,
          "c. Es un requisito establecido por el Decreto 1076/2015, o por la A.A. competente."
        ]
      ]
    },
    "slide-28/popup-q31-ok.mp3": {
      "d": 0.99,
      "c": [
        [
          0.0,
          0.99,
          "Muy bien."
        ]
      ]
    },
    "slide-28/popup-q31-mal.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.49,
          "Revisa el contenido."
        ]
      ]
    },
    "slide-29/titulo.mp3": {
      "d": 4.91,
      "c": [
        [
          0.0,
          2.1300000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.14,
          4.72,
          "¡Relaciona la descripción con el instrumento!"
        ]
      ]
    },
    "slide-29/popup-retro-relaciona-instrumentos.mp3": {
      "d": 0.99,
      "c": [
        [
          0.0,
          0.99,
          "Muy bien."
        ]
      ]
    },
    "slide-30/titulo.mp3": {
      "d": 13.32,
      "c": [
        [
          0.0,
          2.2800000000000002,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.29,
          10.53,
          "Completa la frase: Uno de los beneficios de que una empresa cuente con el reconocimiento a la procedencia"
        ],
        [
          10.54,
          13.12,
          "legal es que: Toca los fragmentos en orden para completarla."
        ]
      ]
    },
    "slide-30/popup-frase-ok.mp3": {
      "d": 7.71,
      "c": [
        [
          0.0,
          0.89,
          "Muy bien."
        ],
        [
          0.9,
          7.71,
          "La frase completa es: mejora la competitividad forestal y la apertura hacia nuevos mercados."
        ]
      ]
    },
    "slide-30/popup-frase-mal.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.65,
          "Repasa el contenido."
        ]
      ]
    },
    "slide-31/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Bibliografía."
        ]
      ]
    },
    "slide-32/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Bibliografía."
        ]
      ]
    },
    "slide-33/titulo.mp3": {
      "d": 5.07,
      "c": [
        [
          0.0,
          1.33,
          "¡Felicitaciones!"
        ],
        [
          1.34,
          5.07,
          "Finalizaste los contenidos del Módulo 2 con éxito."
        ]
      ]
    }
  }
};
