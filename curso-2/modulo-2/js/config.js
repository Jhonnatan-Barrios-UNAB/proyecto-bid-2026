/* =====================================================================
   CONFIGURACIÓN DEL MULTIMEDIA · Curso 2 · Módulo 2 (proyecto BID)
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
  "claveProgreso": "bid-curso2-modulo2-progreso",
  "videos": {
    "video-inicial": {
      "titulo": "Video inicial",
      "url": "videos/slide-03/video.mp4",
      "youtube": "",
      "fuente": "Video de bienvenida (avatar). Guion: ver videos/slide-03/GUION-video.txt"
    }
  },
  "documentos": {
    "anexo-1-categoria-1": {
      "titulo": "Anexo 1. Formato único nacional de solicitud de registro, actualización y cancelación de guaduales y bambusales categoría 1",
      "url": "documentos/slide-08/Formato-ppt8-MinAmbiente proyecto de resolución registro de guaduales y bambusales-Formato Único Nacional.pdf"
    }
  },
  "imagenes": {},
  "textosLocucion": {
    "slide-01/titulo.mp3": "Módulo 2. Marco normativo y legal para el manejo de los ecosistemas de guadua y bambú.",
    "slide-02/titulo.mp3": "Tabla de contenido.",
    "slide-03/titulo.mp3": "Video inicial.",
    "slide-04/titulo.mp3": "Subsección 1: Ley 2206 de 2022, principios, definiciones, categorías y registro de guaduales y bambusales",
    "slide-04/general.mp3": "En esta sección conocerás los artículos que deben ser considerados por los productores de guadua y bambú a nivel nacional, por las empresas que transforman y comercializan estos productos y por quienes transportan productos en primer grado de transformación.",
    "slide-05/titulo.mp3": "Disposiciones normativas: Ley 2206 de 2022",
    "slide-05/general.mp3": "Inicialmente, es importante conocer que en los artículos 1 y 2 de la Ley 2206 de 2022, se definen el objeto y los objetivos específicos de la ley que contribuirán a incentivar el uso productivo de la guadua y el bambú; y su sostenibilidad ambiental en el territorio Nacional.\n\nEn conclusión, la ley busca incentivar y articular las acciones de diferentes sectores de la economía, en respeto de los derechos constitucionales relacionados con el ambiente sano, y más recientemente con las metas de sostenibilidad y mitigación del cambio climático; incorporando nuevas definiciones como las relacionadas con la clasificación de los guaduales, manteniendo la aplicación de las disposiciones normativas del sector ambiente que aplican para su manejo y aprovechamiento legal, y también ratificando la necesidad de aplicar los aspectos legales asociados a la movilización y transformación de los productos.\n\nPor lo anterior, la citada ley no va en contravía ni oposición de los aspectos que ya han sido reglamentados previamente por cada una de los Ministerios que la misma norma señala, sino que da lineamientos asociados a cómo cada cartera –desde sus competencias– puede promover e incentivar el uso de la guadua a nivel nacional, y cómo esto se integra en la economía de la nación.",
    "slide-05/popup-r-1.mp3": "Artículo 1°. Objeto.",
    "slide-05/popup-r-2.mp3": "Artículo 2°. Objetivos específicos.",
    "slide-06/titulo.mp3": "Disposiciones normativas: Ley 2206 de 2022 · Artículo 3°. Clasificación",
    "slide-06/general.mp3": "Con respecto a las categorías definidas en la Ley 2206 de 2022, para efectos de su manejo sostenible (uso, preservación, restauración y manejo), la guadua y el bambú (familia Poaceae) se clasifican según lo establecido en su artículo tercero.\n\nEs importante que tengas en cuenta esta clasificación, ya que la misma ley define, a partir de ella, las competencias de las autoridades ambientales y del Instituto Colombiano Agropecuario (ICA).",
    "slide-06/popup-categoria-1.mp3": "Categoría 1: Guaduales y bambusales naturales dentro de áreas protectoras.",
    "slide-06/popup-categoria-2.mp3": "Categoría 2: Guaduales y bambusales plantados con carácter protector y protector-productor.",
    "slide-06/popup-categoria-3.mp3": "Categoría 3: Guaduales y bambusales plantados con carácter productor.",
    "slide-07/titulo.mp3": "Disposiciones normativas: Ley 2206 de 2022 · Competencias",
    "slide-07/popup-r-1.mp3": "Guaduales y bambusales categorías 1 y 2.",
    "slide-07/popup-r-2.mp3": "Guaduales y bambusales categoría 3.",
    "slide-08/titulo.mp3": "Artículo 4°. Registro: categoría 1",
    "slide-08/general.mp3": "En cumplimiento de lo dispuesto en la ley, el registro de los ecosistemas de guaduales y bambusales Categoría 1, incorpora un nuevo procedimiento que permitirá a los interesados registrar estos ecosistemas ante las autoridades ambientales y avanzar hacia una gestión más ordenada y responsable de estos recursos.\nEl proceso inicia con el diligenciamiento del formato de registro, actualización o cancelación a través de la Ventanilla Integral de Trámites Ambientales – VITAL, el cual se completa en línea y constituye el punto de partida del trámite. Junto con este formato, el interesado debe adjuntar la información geográfica del guadual o bambusal que se desea registrar, la cual puede presentarse mediante coordenadas, archivos KML o KMZ, o shapefiles georreferenciados en el sistema Magna-Sirgas conforme a la normativa del IGAC. También se debe anexar la copia del documento de identidad y, cuando aplique, la autorización o poder correspondiente si el trámite es realizado por un apoderado.\nDependiendo del tipo de solicitante, pueden requerirse documentos adicionales, por ejemplo: actas de organizaciones campesinas que autoricen al representante legal, documentos de constitución y representación en el caso de consejos comunitarios o resguardos indígenas, o certificaciones de ocupación para predios baldíos. Una vez radicada la solicitud, la autoridad ambiental abre el expediente en un plazo de cinco días hábiles. Posteriormente, evalúa la información presentada y, si es necesario, puede realizar una visita técnica sin costo. Con base en esta evaluación se emite un concepto técnico que permitirá adoptar la decisión correspondiente.\nSi la información está completa, la autoridad ambiental expedirá la resolución de registro en un plazo máximo de cinco días hábiles, en la cual se asignan los códigos alfanuméricos que identificarán cada guadual o bambusal registrado. Es importante tener en cuenta que este trámite no tiene costo, que en un mismo predio puede registrarse más de un guadual dentro de un solo proceso, y que el registro no autoriza automáticamente el manejo o aprovechamiento sostenible, para lo cual deberán adelantarse los trámites correspondientes ante la autoridad ambiental.",
    "slide-09/titulo.mp3": "Artículo 4°. Registro: categoría 2",
    "slide-09/general.mp3": "El registro de los guaduales y bambusales de categoría 2 se realiza ante la autoridad ambiental competente, según el Decreto 1532 de 2019. Para iniciar el trámite, el interesado diligencia el formulario de solicitud ante la entidad con jurisdicción en el área y adjunta la información básica del predio, datos de contacto, mapa de localización con coordenadas georreferenciadas y copia del documento de identidad.\n\nTras la radicación de la solicitud, la autoridad verifica la información y puede efectuar una visita técnica al terreno. Si el proceso cumple los requisitos, se expide una resolución de registro con número oficial. Este trámite es gratuito y no sustituye otros permisos de aprovechamiento.\n\nPara profundizar en las disposiciones legales, la subsección 2 de este módulo contiene el detalle de esta normativa.",
    "slide-10/titulo.mp3": "Artículo 4°. Registro: categoría 3",
    "slide-10/general.mp3": "El registro de los guaduales y bambusales de categoría 3 se realiza ante el Instituto Colombiano Agropecuario (ICA), según lo dispuesto en la Resolución 141 de 2025 del Ministerio de Agricultura y Desarrollo Rural. Para iniciar el trámite, la persona interesada diligencia y presenta la solicitud ante el ICA, incluyendo la identificación del solicitante, sus datos de contacto y la ubicación del predio.\n\nAsimismo, se debe describir el guadual o bambusal objeto del registro e indicar sus coordenadas georreferenciadas o un mapa de localización. Esta información permite a la autoridad ubicar con precisión el área e iniciar el análisis técnico. El conjunto de documentos presentados constituye la base para la verificación y evaluación preliminar por parte del Instituto.\nUna vez radicada la solicitud, el ICA realiza una revisión inicial para verificar que la información esté completa. En caso de que falte algún documento o dato, podrá solicitar al interesado la información adicional requerida. Asimismo, la entidad podrá programar una visita al predio con el fin de verificar en campo la existencia y las condiciones del guadual o bambusal.\nCon base en la documentación presentada y en la visita técnica cuando ésta se realice, el ICA emitirá un concepto técnico sobre la procedencia del registro. Si la solicitud cumple con los requisitos establecidos, se expedirá la resolución correspondiente, mediante la cual se formaliza el registro del guadual o bambusal categoría 3 y se asigna un número de identificación en el registro público del ICA.\nNo obstante, en caso de inquietudes y dudas, los interesados en el registro podrán acercarse a la oficina del ICA más cercana para recibir más información.",
    "slide-11/titulo.mp3": "Artículo 4°. Movilización",
    "slide-11/general.mp3": "Movilización\nPara la movilización de productos en primer grado de transformación provenientes de guaduales y bambusales de categorías 1 y 2, se deberá dar cumplimiento a lo establecido en la Resolución 1909 de 2017 y en la Resolución 0081 de 2018, expedida por el Ministerio de Ambiente y Desarrollo Sostenible, o a las normas que la modifiquen, sustituyan o deroguen. En este sentido, la movilización de dichos productos deberá realizarse mediante la expedición del Salvoconducto Único Nacional en Línea (SUNL) por parte de la autoridad ambiental competente, garantizando que el transporte de los productos de guadua y bambú se encuentre amparado por el respectivo documento de movilización y que la información sobre origen, volumen y destino sea registrada conforme a los procedimientos establecidos.\nPara la movilización de los productos en primer grado de transformación, obtenidos del aprovechamiento de guaduales y bambusales categoría 3, se deberá implementar el certificado de movilización, conforme a lo dispuesto en la Resolución 141 de 2025 del Ministerio de Agricultura y Desarrollo Rural.\nTransformación y comercialización\nCuando se trate de guadua seca proveniente de plantas de preservación que apliquen productos para el control fitosanitario, se deberá cumplir con lo dispuesto en la Resolución 1971 de 2019, mediante la implementación del Libro de Operaciones Forestales en Línea (LOFL) o el instrumento que haga sus veces. En estos casos, la movilización deberá soportarse mediante la correspondiente remisión o factura de venta, y los movimientos de ingreso, transformación y salida de los productos deberán registrarse en el libro de operaciones, con el fin de garantizar la trazabilidad y el control sobre los productos forestales transformados.\nNo obstante, la obligatoriedad de implementar el libro de operaciones para las empresas que transformen o comercialicen guadua se sustenta en que estas se clasifican como empresas forestales, de conformidad con lo dispuesto en el Decreto 1076 de 2015, y por tanto deben cumplir con los instrumentos de control y seguimiento establecidos para este tipo de actividades.",
    "slide-12/titulo.mp3": "Consideraciones finales",
    "slide-12/general.mp3": "Se sintetizan algunas conclusiones derivadas de las disposiciones de la Ley 2206 de 2022. No clasifica la guadua como producto de la flora o agrícola. Incentiva su uso en armonía con la sostenibilidad ambiental y sus servicios ecosistémicos en la mitigación de los efectos del cambio climático. Incorpora un trámite nuevo asociado al registro de guaduales. Categoría 1 y 2 ante autoridad ambiental; categoría 3 ante ICA. No condiciona el aprovechamiento de guaduales y bambusales al registro. Los clasifica acorde con su origen, localización y finalidad. No deroga la Resolución 1740 de 2016. La resolución establece los lineamientos generales para el manejo, aprovechamiento y establecimiento de guaduales y bambusales. No exceptúa cumplimiento de disposiciones para movilización, transformación y comercialización. Resolución 1909 de 2017. Resolución 1791 de 2019.",
    "slide-13/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿Cuál es el propósito principal de la Ley 2206 de 2022? a. Restringir el uso de la guadua para su conservación absoluta. b. Incentivar el uso productivo y sostenible de la guadua y el bambú. c. Autorizar únicamente plantaciones con fines ornamentales. d. Permitir su aprovechamiento sin regulación ambiental.",
    "slide-13/popup-q13-ok.mp3": "¡Acertaste! Continúas avanzando en la construcción de tu aprendizaje.",
    "slide-13/popup-q13-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-14/titulo.mp3": "Pon a prueba tus conocimientos. Relaciona cada categoría con su descripción y con la entidad ante la que se registra.",
    "slide-14/popup-retro-relaciona.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje.",
    "slide-15/titulo.mp3": "Subsección 2: Decreto 1532 de 2019, compilado en el Decreto 1076 de 2015: requisitos y procedimientos para el registro de guaduales y bambusales categoría 2",
    "slide-15/general.mp3": "Para profundizar en las disposiciones sobre el registro de guaduales y bambusales de categoría 2, se detallan los aspectos relacionados con este procedimiento.",
    "slide-16/titulo.mp3": "Decreto 1532 de 2019, compilado en el Decreto 1076 de 2015.",
    "slide-16/popup-articulo-1.mp3": "Ámbito de aplicación.",
    "slide-16/popup-articulo-2.mp3": "Del registro.",
    "slide-16/popup-articulo-3.mp3": "Requisitos para el registro.",
    "slide-17/titulo.mp3": "Artículo 2.2.1.1.12.4. Formación del registro",
    "slide-17/popup-tab-18-1.mp3": "Formulario de solicitud de registro.",
    "slide-17/popup-tab-18-2.mp3": "Mapa de localización.",
    "slide-17/popup-tab-18-3.mp3": "Acreditar la propiedad del predio.",
    "slide-17/popup-tab-18-4.mp3": "Revisión de la información.",
    "slide-17/popup-tab-18-5.mp3": "Finalización del proceso.",
    "slide-18/titulo.mp3": "Decreto 1532 de 2019: periodicidad, actualización, costo y cancelación del registro",
    "slide-18/popup-articulo19-1.mp3": "Periodicidad del registro.",
    "slide-18/popup-articulo19-2.mp3": "Actualización del registro.",
    "slide-18/popup-articulo19-3.mp3": "Costo del registro.",
    "slide-18/popup-articulo19-4.mp3": "Cancelación del registro.",
    "slide-19/titulo.mp3": "Decreto 1532 de 2019: cosecha, comercialización, movilización, reporte y restricciones",
    "slide-19/popup-decreto-1.mp3": "Cosecha/Aprovechamiento. Para aprovechar las plantaciones forestales protectoras-productoras y protectoras no se requerirá de permiso o autorización.",
    "slide-19/popup-decreto-2.mp3": "Comercialización. “Los productos forestales maderables y no maderables obtenidos del aprovechamiento de plantaciones forestales, barreras rompevientos o cercas vivas, así como de árboles de sombrío, árboles frutales y árboles aislados, podrán comercializarse”.",
    "slide-19/popup-decreto-3.mp3": "Movilización. “Para su movilización se requerirá del Salvoconducto Único Nacional en línea SUNL, de conformidad con las Resoluciones 1909 de 2017 y 081 de 2018 del Ministerio de Ambiente y Desarrollo Sostenible, o las normas que las sustituyan, modifiquen o deroguen”.",
    "slide-19/popup-decreto-4.mp3": "Reporte. “La autoridad ambiental regional competente reportará la información estadística relacionada con las plantaciones forestales, mencionadas en el artículo 2.2.1.1.12.2. del presente Decreto”.",
    "slide-19/popup-decreto-5.mp3": "Restricciones. “No podrá realizarse la remoción del bosque natural para el establecimiento de plantaciones forestales protectoras y protectoras - productoras”.",
    "slide-19/popup-cosecha-ver-mas.mp3": "Cosecha y aprovechamiento.",
    "slide-20/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿Para qué categoría de guadual y bambusal aplican las disposiciones del Decreto 1532 de 2019 compilado en el Decreto 1076 de 2017? a. Categoría 3 b. Categoría 1 c. Categoría 2 d. Ninguna",
    "slide-20/popup-q22-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje.",
    "slide-20/popup-q22-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-21/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿Si tengo un guadual y bambusal establecido en área protectora, ante qué entidad debo realizar el registro del mismo? a. Autoridad Ambiental Competente b. ICA c. Ministerio de Ambiente y Desarrollo Sostenible d. Ninguna",
    "slide-21/popup-q24-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje.",
    "slide-21/popup-q24-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-22/titulo.mp3": "Consideraciones del Decreto 1532 de 2019",
    "slide-22/general.mp3": "Se sintetizan las conclusiones derivadas del Decreto 1532 de 2019, compilado en el Decreto 1076 de 2015, y su actualización normativa. Incorpora los guaduales y bambusales como un ecosistema diferenciado. Objeto: 4. El manejo sostenible de ecosistemas de guaduales y bambusales categorías 1 y 2. Modifica el concepto de aprovechamiento y cosecha. Propone el concepto de manejo sostenible. Ratifica disposiciones para movilización, transformación y comercialización. Incorpora el sistema nacional de trazabilidad forestal como parte del procedimiento. Deroga la Resolución 1740 de 2016, modifica los aspectos relacionados con Decreto 1532 de 2019. Incorpora un capítulo específico para ecosistemas de guaduales y bambusales categorías 1 y 2.",
    "slide-23/titulo.mp3": "Subsección 3: Resolución 1740 de 2016: tipos de aprovechamiento, requisitos y trámites para permisos y autorizaciones",
    "slide-24/titulo.mp3": "Resolución 1740 de 2016: definiciones (categorías)",
    "slide-24/general.mp3": "El esquema conceptual define la clasificación de los guaduales y bambusales bajo los siguientes criterios:\nPrimero, los naturales se asignan exclusivamente a la categoría 1.\nSegundo, aquellos establecidos con fines de protección o de protección-producción corresponden únicamente a la categoría 2.\n\nFinalmente, tanto los núcleos como los ejemplares con certificación internacional, ya sean naturales o establecidos para protección y producción, pueden asociarse a cualquiera de estas dos categorías.",
    "slide-25/titulo.mp3": "Resolución 1740 de 2016: definiciones",
    "slide-25/general.mp3": "Los lineamientos generales establecidos en la presente Resolución 1740 de 2016, son una herramienta de consulta obligatoria y de orientación para las autoridades ambientales y los particulares, para el manejo, aprovechamiento y establecimiento de guaduales y/o bambusales, para lo cual es necesario conocer y comprender las siguientes definiciones.",
    "slide-25/popup-tab-29-1.mp3": "Aprovechamiento Tipo 1.",
    "slide-25/popup-tab-29-2.mp3": "Aprovechamiento Tipo 2.",
    "slide-25/popup-tab-29-3.mp3": "Asistencia técnica forestal.",
    "slide-25/popup-tab-29-4.mp3": "Empresa forestal.",
    "slide-25/popup-tab-29-5.mp3": "Manejo silvicultural del guadual y/o bambusal.",
    "slide-26/titulo.mp3": "Resolución 1740 de 2016: definiciones (estudios)",
    "slide-26/popup-tab-30-1.mp3": "Estudio para cambio definitivo en el uso del suelo.",
    "slide-26/popup-tab-30-2.mp3": "Estudio para aprovechamiento Tipo 1.",
    "slide-26/popup-tab-30-3.mp3": "Estudio para aprovechamiento Tipo 2.",
    "slide-26/popup-tab-30-4.mp3": "Estudio de establecimiento y manejo de guaduales y/o bambusales.",
    "slide-27/titulo.mp3": "¿Por qué se solicita un estudio técnico?",
    "slide-27/general.mp3": "Los estudios permiten conocer las características del guadual, planificar la intervención y demostrar que el aprovechamiento puede realizarse sin comprometer la permanencia del recurso.\nEstudio Tipo 1 / Tipo 2\nLa diferencia entre los estudios responde a las características y condiciones del aprovechamiento. La información técnica ayuda a tomar decisiones acordes con el tamaño del área y el nivel de intervención.",
    "slide-28/titulo.mp3": "¿Sabías qué? Definiciones clave",
    "slide-29/titulo.mp3": "Resolución 1740 de 2016: solicitud de aprovechamiento de guadua y/o bambusal",
    "slide-29/popup-tab-33-1.mp3": "1. Solicitud escrita.",
    "slide-29/popup-tab-33-2.mp3": "2. Acreditar la calidad de tenencia del propietario del predio.",
    "slide-29/popup-tab-33-3.mp3": "3. Se adjunta el estudio correspondiente.",
    "slide-30/titulo.mp3": "¿Sabías qué? Requisitos de la solicitud",
    "slide-31/titulo.mp3": "Resolución 1740 de 2016: trámite del registro",
    "slide-31/popup-paso-1.mp3": "Radicar: presentar la solicitud y la documentación requerida.",
    "slide-31/popup-paso-2.mp3": "Revisar: la autoridad evalúa la solicitud y verifica los requisitos.",
    "slide-31/popup-paso-3.mp3": "Solicitar información adicional: cuando es necesario, se solicita completar o aclarar información.",
    "slide-31/popup-paso-4.mp3": "Entregar información: el interesado aporta la información solicitada dentro del plazo establecido.",
    "slide-31/popup-paso-5.mp3": "Devolver: si corresponde, se devuelve la documentación aportada.",
    "slide-31/popup-paso-6.mp3": "Archivar: si no se presenta la información requerida, puede producirse el desistimiento y archivo.",
    "slide-31/popup-paso-7.mp3": "Decidir: se expide una resolución que otorga o niega el permiso o autorización.",
    "slide-31/popup-paso-8.mp3": "Recurrir: cuando proceda, el interesado puede presentar recurso de reposición.",
    "slide-32/titulo.mp3": "¿Qué debe incluir el estudio para aprovechar guadua?",
    "slide-33/titulo.mp3": "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 1 - Ubicación e identificación",
    "slide-33/popup-fase-1.mp3": "¿Por qué necesitamos conocer dónde y qué vamos a aprovechar?\nLa localización y georreferenciación permiten saber exactamente dónde está el guadual y cuál es el área que se propone intervenir. La taxonomía ayuda a identificar las especies presentes para asegurar que el aprovechamiento corresponda a los recursos autorizados.",
    "slide-34/titulo.mp3": "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 2 - Inventario y volumen",
    "slide-34/popup-fase-2.mp3": "¿Por qué debemos conocer la madurez de los culmos?\nDebemos conocer la madurez de los culmos porque esto nos permite identificar cuáles están en crecimiento, cuáles ya están maduros y cuáles han pasado su etapa adecuada. De esta manera, podemos planificar mejor cuáles se pueden cortar, evitando afectar innecesariamente el crecimiento y la renovación del guadual.",
    "slide-35/titulo.mp3": "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 3 - Planificación temporal, cronograma y sostenibilidad",
    "slide-35/popup-fase-3.mp3": "¿Por qué se planifica el tiempo de aprovechamiento?\nRenovabilidad: el aprovechamiento debe considerar la capacidad del guadual para recuperarse y continuar ofreciendo sus servicios ecosistémicos.\nCronograma: organiza las actividades y ayuda a controlar que la intervención se realice de acuerdo con lo planificado.",
    "slide-36/titulo.mp3": "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 4 - Operación y salidas del proceso",
    "slide-36/popup-fase-4.mp3": "¿Por qué se deben definir métodos, equipos e infraestructura?",
    "slide-37/titulo.mp3": "¿Qué es el estudio para el aprovechamiento tipo 2?",
    "slide-38/titulo.mp3": "Identificación y localización del predio",
    "slide-38/popup-r-1.mp3": "Identificación del predio.",
    "slide-38/popup-r-2.mp3": "Mapa del predio (escala 1:10.000).",
    "slide-38/popup-r-3.mp3": "Área del guadual dentro del predio.",
    "slide-38/popup-r-4.mp3": "Hectáreas a aprovechar.",
    "slide-38/popup-r-5.mp3": "Mapa del área a aprovechar (1:1.000).",
    "slide-38/popup-glosario-escalas.mp3": "Glosario visual de escalas\nEscala 1:10.000: 1 cm en el mapa representa 100 metros en el territorio.\nEscala 1:1.000: 1 cm en el mapa representa 10 metros en el territorio. Se utiliza para observar con mayor detalle el área que se pretende intervenir.\n\n¿Por qué importa?\nUna escala más detallada permite ubicar con mayor precisión el área del guadual que será objeto de aprovechamiento.",
    "slide-39/titulo.mp3": "Entorno del guadual: caracterización físico-biótica",
    "slide-39/popup-entorno.mp3": "¿Qué información debemos conocer sobre el entorno del guadual antes de realizar su aprovechamiento?",
    "slide-40/titulo.mp3": "Predios públicos e identificación de especies",
    "slide-41/titulo.mp3": "El guadual como parte de la cultura y del territorio",
    "slide-41/popup-r-1.mp3": "Los valores culturales e históricos no son solo un requisito. Permiten reconocer la relación que las comunidades han construido con el guadual a lo largo del tiempo.",
    "slide-41/popup-r-2.mp3": "Uso artesanal. Reconocer prácticas tradicionales de transformación de la guadua para la elaboración de objetos, utensilios y artesanías permite valorar conocimientos transmitidos entre generaciones.",
    "slide-41/popup-r-3.mp3": "Uso constructivo tradicional. En diferentes territorios la guadua ha sido utilizada en viviendas, estructuras rurales y otros espacios. Estos usos forman parte de la memoria y de las prácticas locales.",
    "slide-41/popup-r-4.mp3": "Saberes de la comunidad. Los conocimientos sobre selección, corte, manejo, transformación y utilización de la guadua constituyen aportes que pueden dialogar con el conocimiento técnico para promover un manejo sostenible.",
    "slide-41/popup-r-5.mp3": "Paisaje Cultural Cafetero. La guadua también forma parte de la identidad de territorios, donde sus usos tradicionales se relacionan con la vida rural y la cultura. Reconocer esta dimensión permite comprender el valor integral del ecosistema.",
    "slide-42/titulo.mp3": "¿Cuántos guaduales hay y en qué estado están? Inventario forestal",
    "slide-42/general.mp3": "¿Por qué medir antes de cortar?\nPorque conocer la cantidad y el estado de la guadua permite planificar un aprovechamiento que considere la capacidad de renovación del ecosistema.\n\nPor esta razón, cuando se pretenda aprovechar un guadual o bambusal con densidad total inferior a dos mil tallos o culmos por hectárea, solo se realizan prácticas silvícolas para su mejoramiento. Además, el sistema de aprovechamiento a emplear debe ser el de entresaca selectiva de los tallos o culmos maduros y sobremaduros; y el aprovechamiento total de los tallos secos y secos partidos. El porcentaje de intervención será como máximo el 35% de la población comercial.",
    "slide-42/popup-glosario-inventario.mp3": "Glosario.",
    "slide-43/titulo.mp3": "Duración y planificación",
    "slide-43/popup-uca.mp3": "¿Por qué se utiliza la Unidad de Corta Anual (UCA)?\nUCA – Unidad de Corta Anual: es una forma de organizar el aprovechamiento por periodos anuales cuando la intervención supera el tiempo establecido para un solo periodo.\nFinalidad ambiental: dividir el área por años permite ordenar la intervención y dar tiempo al guadual para recuperarse antes de una nueva intervención.",
    "slide-44/titulo.mp3": "¿Qué se obtiene y cómo se cuida el guadual?",
    "slide-44/popup-r-1.mp3": "¿Qué productos se obtendrán?",
    "slide-44/popup-r-2.mp3": "¿Cómo se evitan daños al ambiente?",
    "slide-44/popup-r-3.mp3": "¿Cómo se mejora el guadual?",
    "slide-45/titulo.mp3": "Contenido del estudio tipo 2 con POF (1, 2, 3, 4)",
    "slide-45/popup-r-1.mp3": "Identificación, localización y extensión del predio. Identificación, localización y extensión del predio donde se encuentra ubicado el guadual y/o bambusal objeto de la solicitud de aprovechamiento, indicando jurisdicción departamental, municipal y veredal.",
    "slide-45/popup-r-2.mp3": "Mapa del predio. Mapa del predio a escala no mayor a 1:5000.",
    "slide-45/popup-r-3.mp3": "Área del guadual dentro del predio. Localización y extensión del área georreferenciada que ocupa el guadual y/o bambusal dentro del predio.",
    "slide-45/popup-r-4.mp3": "Área total a aprovechar. Área total en hectáreas que será objeto de aprovechamiento.",
    "slide-46/titulo.mp3": "Contenido del estudio tipo 2 con POF (5, 6, 7)",
    "slide-46/popup-r-1.mp3": "Mapa del área a aprovechar. Mapa del área objeto de aprovechamiento a escala 1:1000.",
    "slide-46/popup-r-2.mp3": "Identificación de las especies. Identificación de las especies de guadua y/o bambusal que serán objeto de aprovechamiento.",
    "slide-46/popup-r-3.mp3": "Inventario y estado de madurez.",
    "slide-47/titulo.mp3": "Contenido del estudio tipo 2 con POF (8, 9, 10, 11)",
    "slide-47/popup-r-1.mp3": "Duración del aprovechamiento.",
    "slide-47/popup-r-2.mp3": "Cronograma. Cronograma de las actividades para la totalidad del período o UCA del respectivo aprovechamiento.",
    "slide-47/popup-r-3.mp3": "Métodos y equipos. Métodos y equipos a utilizar para el aprovechamiento del guadual y/o bambusal.",
    "slide-47/popup-r-4.mp3": "Planificación del aprovechamiento. Descripción de la planificación del aprovechamiento (diseño de vías, campamentos, patios de acopio, etc.).",
    "slide-48/titulo.mp3": "Contenido del estudio tipo 2 con POF (12, 13, 14)",
    "slide-48/popup-r-1.mp3": "Productos a obtener. Descripción de los productos a obtener.",
    "slide-48/popup-r-2.mp3": "Prevención y manejo de impactos. Medidas para prevenir, mitigar y corregir los posibles efectos e impactos negativos causados por el aprovechamiento de estas especies.",
    "slide-48/popup-r-3.mp3": "Mejoramiento del guadual. Medidas a implementar para el mejoramiento de la productividad del guadual y/o bambusal.",
    "slide-49/titulo.mp3": "Contenido del estudio: cambio en el uso del suelo (1, 2, 3, 4)",
    "slide-49/popup-r-1.mp3": "Identificación y ubicación del predio. Identificación, localización y extensión del predio donde se encuentra ubicado el guadual y/o bambusal objeto de la solicitud de aprovechamiento, indicando jurisdicción departamental, municipal y veredal.",
    "slide-49/popup-r-2.mp3": "Mejor aptitud del suelo. Estudio técnico que demuestre una mejor aptitud de uso del suelo.",
    "slide-49/popup-r-3.mp3": "Utilidad pública e interés social. Razones de utilidad pública e interés social, cuando estas sean el motivo de la solicitud.",
    "slide-49/popup-r-4.mp3": "Mapa del predio. Mapa del predio a escala no menor a 1:5000.",
    "slide-50/titulo.mp3": "Contenido del estudio: cambio en el uso del suelo (5, 6, 7, 8)",
    "slide-50/popup-r-1.mp3": "Área ocupada por el guadual. Localización y extensión del área georreferenciada que ocupa el guadual y/o bambusal dentro del predio.",
    "slide-50/popup-r-2.mp3": "Área a aprovechar. Área total en hectáreas que será objeto de aprovechamiento.",
    "slide-50/popup-r-3.mp3": "Mapa detallado del área. Mapa del área objeto de aprovechamiento a escala 1:1000.",
    "slide-50/popup-r-4.mp3": "Caracterización del entorno.",
    "slide-51/titulo.mp3": "Contenido del estudio: cambio en el uso del suelo (9, 10, 11, 12)",
    "slide-51/popup-r-1.mp3": "Identificación de especies. Identificación de las especies de guadua y/o bambusal que serán objeto de aprovechamiento.",
    "slide-51/popup-r-2.mp3": "Cantidad, madurez y volumen. Inventario estadístico, con una intensidad de muestreo de forma tal que el error no sea superior al quince por ciento, con una probabilidad del noventa y cinco por ciento, para determinar la cantidad de culmos en el área y su estado de madurez (renuevo, verde, madura, sobremadura y seca), y volumen total.",
    "slide-51/popup-r-3.mp3": "Volumen por especie. Volumen total estimado por especie.",
    "slide-52/titulo.mp3": "Contenido del estudio: cambio en el uso del suelo (13, 14, 15, 16)",
    "slide-52/popup-r-1.mp3": "Productos y destino. Descripción de los productos a obtener y disposición final.",
    "slide-52/popup-r-2.mp3": "Cronograma. Cronograma de actividades para la totalidad del aprovechamiento.",
    "slide-52/popup-r-3.mp3": "Manejo de impactos. Propuesta para prevenir, mitigar, corregir y compensar los posibles efectos e impactos negativos causados por el aprovechamiento de estas especies.",
    "slide-53/titulo.mp3": "Contenido del estudio para el establecimiento y manejo de guaduales (1, 2, 3, 4)",
    "slide-53/popup-r-1.mp3": "Identificación, ubicación y extensión. Identificación, localización y extensión del predio donde se estableció o pretende establecerse el guadual y/o bambusal, indicando jurisdicción departamental, municipal y veredal.",
    "slide-53/popup-r-2.mp3": "Mapa del predio. Mapa del predio a escala no menor a 1:5000.",
    "slide-53/popup-r-3.mp3": "Área de la plantación. Localización y extensión del área georreferenciada que ocupa u ocupará la plantación de guadual y/o bambusal dentro del predio.",
    "slide-53/popup-r-4.mp3": "Mapa del área. Mapa del área objeto de aprovechamiento a escala 1:1000.",
    "slide-54/titulo.mp3": "Contenido del estudio para el establecimiento y manejo de guaduales (5, 6, 7, 8)",
    "slide-54/popup-r-1.mp3": "Identificación de especies. Indicar el nombre común y científico de las especies de guadual y/o bambusal establecido o a establecer.",
    "slide-54/popup-r-2.mp3": "Diseño del establecimiento. Diseño del establecimiento del guadual y/o bambusal.",
    "slide-54/popup-r-3.mp3": "Mantenimiento. Sistema de mantenimiento del guadual y/o bambusal establecido o a establecer.",
    "slide-55/titulo.mp3": "Contenido del estudio para el establecimiento y manejo de guaduales (9, 10, 11, 12)",
    "slide-55/popup-r-1.mp3": "Volumen total a obtener. Cuantificación del volumen total a obtener.",
    "slide-55/popup-r-2.mp3": "Productos a obtener. Descripción de los productos a obtener.",
    "slide-55/popup-r-3.mp3": "Cronograma de siembra, mantenimiento y aprovechamiento. Cronograma de actividades de siembra, mantenimiento y aprovechamiento.",
    "slide-56/titulo.mp3": "Conexión entre establecimiento, manejo y sostenibilidad",
    "slide-56/general.mp3": "¿Por qué planificar desde la siembra?\nEl establecimiento y mantenimiento también determinan la calidad futura del guadual. Planificar desde el inicio ayuda a conservar el recurso y a orientar su aprovechamiento posterior.\nDiálogo con conocimientos locales: cuando existan prácticas tradicionales de establecimiento o manejo, pueden reconocerse como parte del conocimiento del territorio, y complementarlas con los criterios técnicos aplicables.",
    "slide-57/titulo.mp3": "Otras consideraciones",
    "slide-57/popup-tab-61-1.mp3": "Prioridades.",
    "slide-57/popup-tab-61-2.mp3": "Reportes especiales.",
    "slide-57/popup-tab-61-3.mp3": "Visitas de seguimiento.",
    "slide-58/titulo.mp3": "Definiciones: otros aspectos reglamentarios",
    "slide-58/popup-tab-62-1.mp3": "Manejo silvicultural.",
    "slide-58/popup-tab-62-2.mp3": "Asistencia técnica.",
    "slide-58/popup-tab-62-3.mp3": "Movilización y comercialización.",
    "slide-58/popup-tab-62-4.mp3": "Ordenación.",
    "slide-59/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! ¿De acuerdo con la Resolución 1740 de 2016, qué documento técnico de soporte debo entregar para tramitar el aprovechamiento persistente de los guaduales y bambusales Tipo 1 y Tipo 2 en la Categoría 1 de la Ley 2206 de 2022? a. Estudio técnico Tipo 1 o Tipo 2 b. Plan de manejo Tipo 1 o Tipo 2 c. Plan de establecimiento y aprovechamiento Tipo 1 o Tipo 2 d. Plan de ordenación forestal",
    "slide-59/popup-q63-ok.mp3": "¡Acertaste! Los objetivos de este módulo se han cumplido con éxito, demostrando una sólida construcción del aprendizaje.",
    "slide-59/popup-q63-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-60/titulo.mp3": "Bibliografía.",
    "slide-61/titulo.mp3": "Bibliografía.",
    "slide-62/titulo.mp3": "¡Felicitaciones! Finalizaste los contenidos del Módulo 2 con éxito."
  },
  "subtitulos": {
    "slide-01/titulo.mp3": {
      "d": 6.53,
      "c": [
        [
          0.0,
          1.44,
          "Módulo 2."
        ],
        [
          1.45,
          6.3,
          "Marco normativo y legal para el manejo de los ecosistemas de guadua y bambú."
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
      "d": 10.27,
      "c": [
        [
          0.0,
          10.08,
          "Subsección 1: Ley 2206 de 2022, principios, definiciones, categorías y registro de guaduales y bambusales"
        ]
      ]
    },
    "slide-04/general.mp3": {
      "d": 15.57,
      "c": [
        [
          0.0,
          7.25,
          "En esta sección conocerás los artículos que deben ser considerados por los productores de guadua y bambú a"
        ],
        [
          7.26,
          12.71,
          "nivel nacional, por las empresas que transforman y comercializan estos productos y por quienes transportan"
        ],
        [
          12.66,
          15.57,
          "productos en primer grado de transformación."
        ]
      ]
    },
    "slide-05/titulo.mp3": {
      "d": 5.33,
      "c": [
        [
          0.0,
          5.33,
          "Disposiciones normativas: Ley 2206 de 2022"
        ]
      ]
    },
    "slide-05/general.mp3": {
      "d": 84.35,
      "c": [
        [
          0.0,
          5.56,
          "Inicialmente, es importante conocer que en los artículos 1 y 2 de la Ley 2206 de 2022,"
        ],
        [
          5.51,
          12.27,
          "se definen el objeto y los objetivos específicos de la ley que contribuirán a incentivar el uso productivo de"
        ],
        [
          12.22,
          16.279999999999998,
          "la guadua y el bambú; y su sostenibilidad ambiental en el territorio Nacional."
        ],
        [
          16.29,
          25.02,
          "En conclusión, la ley busca incentivar y articular las acciones de diferentes sectores de la economía,"
        ],
        [
          24.97,
          29.96,
          "en respeto de los derechos constitucionales relacionados con el ambiente sano,"
        ],
        [
          29.91,
          37.260000000000005,
          "y más recientemente con las metas de sostenibilidad y mitigación del cambio climático;"
        ],
        [
          37.27,
          42.07,
          "incorporando nuevas definiciones como las relacionadas con la clasificación de los guaduales,"
        ],
        [
          42.02,
          48.61,
          "manteniendo la aplicación de las disposiciones normativas del sector ambiente que aplican para su manejo y"
        ],
        [
          48.56,
          55.51,
          "aprovechamiento legal, y también ratificando la necesidad de aplicar los aspectos legales asociados a la"
        ],
        [
          55.46,
          59.25,
          "movilización y transformación de los productos."
        ],
        [
          59.26,
          66.33,
          "Por lo anterior, la citada ley no va en contravía ni oposición de los aspectos que ya han sido reglamentados"
        ],
        [
          66.28,
          71.05999999999999,
          "previamente por cada una de los Ministerios que la misma norma señala,"
        ],
        [
          71.07,
          78.38,
          "sino que da lineamientos asociados a cómo cada cartera –desde sus competencias– puede promover e incentivar"
        ],
        [
          78.33,
          84.15,
          "el uso de la guadua a nivel nacional, y cómo esto se integra en la economía de la nación."
        ]
      ]
    },
    "slide-05/popup-r-1.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          1.54,
          "Artículo 1°."
        ],
        [
          1.55,
          2.21,
          "Objeto."
        ]
      ]
    },
    "slide-05/popup-r-2.mp3": {
      "d": 3.63,
      "c": [
        [
          0.0,
          1.7,
          "Artículo 2°."
        ],
        [
          1.71,
          3.63,
          "Objetivos específicos."
        ]
      ]
    },
    "slide-06/titulo.mp3": {
      "d": 8.2,
      "c": [
        [
          0.0,
          6.890000000000001,
          "Disposiciones normativas: Ley 2206 de 2022 · Artículo 3°."
        ],
        [
          6.9,
          7.99,
          "Clasificación"
        ]
      ]
    },
    "slide-06/general.mp3": {
      "d": 31.63,
      "c": [
        [
          0.0,
          8.13,
          "Con respecto a las categorías definidas en la Ley 2206 de 2022, para efectos de su manejo sostenible (uso,"
        ],
        [
          8.14,
          14.85,
          "preservación, restauración y manejo), la guadua y el bambú (familia Poaceae) se clasifican según lo"
        ],
        [
          14.86,
          19.08,
          "establecido en su artículo tercero."
        ],
        [
          19.09,
          25.1,
          "Es importante que tengas en cuenta esta clasificación, ya que la misma ley define, a partir de ella,"
        ],
        [
          25.05,
          31.63,
          "las competencias de las autoridades ambientales y del Instituto Colombiano Agropecuario (ICA)."
        ]
      ]
    },
    "slide-06/popup-categoria-1.mp3": {
      "d": 5.88,
      "c": [
        [
          0.0,
          5.88,
          "Categoría 1: Guaduales y bambusales naturales dentro de áreas protectoras."
        ]
      ]
    },
    "slide-06/popup-categoria-2.mp3": {
      "d": 7.0,
      "c": [
        [
          0.0,
          6.78,
          "Categoría 2: Guaduales y bambusales plantados con carácter protector y protector-productor."
        ]
      ]
    },
    "slide-06/popup-categoria-3.mp3": {
      "d": 5.41,
      "c": [
        [
          0.0,
          5.19,
          "Categoría 3: Guaduales y bambusales plantados con carácter productor."
        ]
      ]
    },
    "slide-07/titulo.mp3": {
      "d": 6.43,
      "c": [
        [
          0.0,
          6.43,
          "Disposiciones normativas: Ley 2206 de 2022 · Competencias"
        ]
      ]
    },
    "slide-07/popup-r-1.mp3": {
      "d": 3.97,
      "c": [
        [
          0.0,
          3.97,
          "Guaduales y bambusales categorías 1 y 2."
        ]
      ]
    },
    "slide-07/popup-r-2.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          3.08,
          "Guaduales y bambusales categoría 3."
        ]
      ]
    },
    "slide-08/titulo.mp3": {
      "d": 4.05,
      "c": [
        [
          0.0,
          1.52,
          "Artículo 4°."
        ],
        [
          1.53,
          3.81,
          "Registro: categoría 1"
        ]
      ]
    },
    "slide-08/general.mp3": {
      "d": 153.63,
      "c": [
        [
          0.0,
          2.4400000000000004,
          "En cumplimiento de lo dispuesto en la ley,"
        ],
        [
          2.45,
          7.77,
          "el registro de los ecosistemas de guaduales y bambusales Categoría 1,"
        ],
        [
          7.72,
          14.29,
          "incorpora un nuevo procedimiento que permitirá a los interesados registrar estos ecosistemas ante las"
        ],
        [
          14.24,
          21.38,
          "autoridades ambientales y avanzar hacia una gestión más ordenada y responsable de estos recursos."
        ],
        [
          21.39,
          25.25,
          "El proceso inicia con el diligenciamiento del formato de registro,"
        ],
        [
          25.26,
          32.13,
          "actualización o cancelación a través de la Ventanilla Integral de Trámites Ambientales – VITAL,"
        ],
        [
          32.14,
          37.85,
          "el cual se completa en línea y constituye el punto de partida del trámite."
        ],
        [
          37.86,
          45.660000000000004,
          "Junto con este formato, el interesado debe adjuntar la información geográfica del guadual o bambusal que se"
        ],
        [
          45.67,
          50.010000000000005,
          "desea registrar, la cual puede presentarse mediante coordenadas, archivos KML o KMZ,"
        ],
        [
          50.02,
          56.79,
          "o shapefiles georreferenciados en el sistema Magna-Sirgas conforme a la normativa del IGAC."
        ],
        [
          56.74,
          63.160000000000004,
          "También se debe anexar la copia del documento de identidad y, cuando aplique,"
        ],
        [
          63.17,
          70.52,
          "la autorización o poder correspondiente si el trámite es realizado por un apoderado."
        ],
        [
          70.53,
          75.42999999999999,
          "Dependiendo del tipo de solicitante, pueden requerirse documentos adicionales, por ejemplo:"
        ],
        [
          75.44,
          80.83999999999999,
          "actas de organizaciones campesinas que autoricen al representante legal,"
        ],
        [
          80.85,
          87.78999999999999,
          "documentos de constitución y representación en el caso de consejos comunitarios o resguardos indígenas,"
        ],
        [
          87.8,
          91.78,
          "o certificaciones de ocupación para predios baldíos."
        ],
        [
          91.79,
          99.41,
          "Una vez radicada la solicitud, la autoridad ambiental abre el expediente en un plazo de cinco días hábiles."
        ],
        [
          99.42,
          104.24,
          "Posteriormente, evalúa la información presentada y, si es necesario,"
        ],
        [
          104.19,
          108.07,
          "puede realizar una visita técnica sin costo."
        ],
        [
          108.08,
          115.49,
          "Con base en esta evaluación se emite un concepto técnico que permitirá adoptar la decisión correspondiente."
        ],
        [
          115.5,
          122.37,
          "Si la información está completa, la autoridad ambiental expedirá la resolución de registro en un plazo máximo"
        ],
        [
          122.32,
          129.16,
          "de cinco días hábiles, en la cual se asignan los códigos alfanuméricos que identificarán cada guadual o"
        ],
        [
          129.11,
          131.29000000000002,
          "bambusal registrado."
        ],
        [
          131.3,
          135.42000000000002,
          "Es importante tener en cuenta que este trámite no tiene costo,"
        ],
        [
          135.43,
          141.3,
          "que en un mismo predio puede registrarse más de un guadual dentro de un solo proceso,"
        ],
        [
          141.31,
          147.56,
          "y que el registro no autoriza automáticamente el manejo o aprovechamiento sostenible,"
        ],
        [
          147.57,
          153.4,
          "para lo cual deberán adelantarse los trámites correspondientes ante la autoridad ambiental."
        ]
      ]
    },
    "slide-09/titulo.mp3": {
      "d": 4.13,
      "c": [
        [
          0.0,
          1.53,
          "Artículo 4°."
        ],
        [
          1.54,
          4.13,
          "Registro: categoría 2"
        ]
      ]
    },
    "slide-09/general.mp3": {
      "d": 56.11,
      "c": [
        [
          0.0,
          6.71,
          "El registro de los guaduales y bambusales de categoría 2 se realiza ante la autoridad ambiental competente,"
        ],
        [
          6.66,
          10.950000000000001,
          "según el Decreto 1532 de 2019."
        ],
        [
          10.96,
          16.33,
          "Para iniciar el trámite, el interesado diligencia el formulario de solicitud ante la entidad con jurisdicción"
        ],
        [
          16.28,
          21.029999999999998,
          "en el área y adjunta la información básica del predio, datos de contacto,"
        ],
        [
          21.04,
          28.95,
          "mapa de localización con coordenadas georreferenciadas y copia del documento de identidad."
        ],
        [
          28.96,
          34.6,
          "Tras la radicación de la solicitud, la autoridad verifica la información y puede efectuar una visita técnica"
        ],
        [
          34.55,
          36.81,
          "al terreno."
        ],
        [
          36.82,
          43.14,
          "Si el proceso cumple los requisitos, se expide una resolución de registro con número oficial."
        ],
        [
          43.15,
          48.47,
          "Este trámite es gratuito y no sustituye otros permisos de aprovechamiento."
        ],
        [
          48.48,
          51.2,
          "Para profundizar en las disposiciones legales,"
        ],
        [
          51.15,
          55.88,
          "la subsección 2 de este módulo contiene el detalle de esta normativa."
        ]
      ]
    },
    "slide-10/titulo.mp3": {
      "d": 4.05,
      "c": [
        [
          0.0,
          1.52,
          "Artículo 4°."
        ],
        [
          1.53,
          4.05,
          "Registro: categoría 3"
        ]
      ]
    },
    "slide-10/general.mp3": {
      "d": 118.13,
      "c": [
        [
          0.0,
          7.08,
          "El registro de los guaduales y bambusales de categoría 3 se realiza ante el Instituto Colombiano Agropecuario"
        ],
        [
          7.09,
          16.369999999999997,
          "(ICA), según lo dispuesto en la Resolución 141 de 2025 del Ministerio de Agricultura y Desarrollo Rural."
        ],
        [
          16.38,
          20.68,
          "Para iniciar el trámite, la persona interesada diligencia y presenta la solicitud ante el ICA,"
        ],
        [
          20.63,
          27.34,
          "incluyendo la identificación del solicitante, sus datos de contacto y la ubicación del predio."
        ],
        [
          27.35,
          33.61,
          "Asimismo, se debe describir el guadual o bambusal objeto del registro e indicar sus coordenadas"
        ],
        [
          33.56,
          36.65,
          "georreferenciadas o un mapa de localización."
        ],
        [
          36.6,
          44.120000000000005,
          "Esta información permite a la autoridad ubicar con precisión el área e iniciar el análisis técnico."
        ],
        [
          44.13,
          51.08,
          "El conjunto de documentos presentados constituye la base para la verificación y evaluación preliminar por"
        ],
        [
          51.03,
          54.96,
          "parte del Instituto."
        ],
        [
          54.97,
          59.93,
          "Una vez radicada la solicitud, el ICA realiza una revisión inicial para verificar que la información esté"
        ],
        [
          59.94,
          63.21,
          "completa."
        ],
        [
          63.22,
          70.58999999999999,
          "En caso de que falte algún documento o dato, podrá solicitar al interesado la información adicional requerida."
        ],
        [
          70.6,
          76.63,
          "Asimismo, la entidad podrá programar una visita al predio con el fin de verificar en campo la existencia y"
        ],
        [
          76.58,
          80.74,
          "las condiciones del guadual o bambusal."
        ],
        [
          80.75,
          85.80999999999999,
          "Con base en la documentación presentada y en la visita técnica cuando ésta se realice,"
        ],
        [
          85.82,
          91.03,
          "el ICA emitirá un concepto técnico sobre la procedencia del registro."
        ],
        [
          91.04,
          96.94999999999999,
          "Si la solicitud cumple con los requisitos establecidos, se expedirá la resolución correspondiente,"
        ],
        [
          96.96,
          103.74,
          "mediante la cual se formaliza el registro del guadual o bambusal categoría 3 y se asigna un número de"
        ],
        [
          103.69,
          107.46,
          "identificación en el registro público del ICA."
        ],
        [
          107.47,
          110.71,
          "No obstante, en caso de inquietudes y dudas,"
        ],
        [
          110.72,
          117.92,
          "los interesados en el registro podrán acercarse a la oficina del ICA más cercana para recibir más información."
        ]
      ]
    },
    "slide-11/titulo.mp3": {
      "d": 2.77,
      "c": [
        [
          0.0,
          1.48,
          "Artículo 4°."
        ],
        [
          1.49,
          2.77,
          "Movilización"
        ]
      ]
    },
    "slide-11/general.mp3": {
      "d": 153.0,
      "c": [
        [
          0.0,
          1.6,
          "Movilización"
        ],
        [
          1.61,
          9.08,
          "Para la movilización de productos en primer grado de transformación provenientes de guaduales y bambusales de"
        ],
        [
          9.03,
          15.67,
          "categorías 1 y 2, se deberá dar cumplimiento a lo establecido en la Resolución 1909 de 2017 y en la"
        ],
        [
          15.62,
          21.59,
          "Resolución 0081 de 2018, expedida por el Ministerio de Ambiente y Desarrollo Sostenible,"
        ],
        [
          21.54,
          25.53,
          "o a las normas que la modifiquen, sustituyan o deroguen."
        ],
        [
          25.48,
          33.23,
          "En este sentido, la movilización de dichos productos deberá realizarse mediante la expedición del"
        ],
        [
          33.18,
          39.13,
          "Salvoconducto Único Nacional en Línea (SUNL) por parte de la autoridad ambiental competente,"
        ],
        [
          39.14,
          46.98,
          "garantizando que el transporte de los productos de guadua y bambú se encuentre amparado por el respectivo"
        ],
        [
          46.93,
          51.18,
          "documento de movilización y que la información sobre origen,"
        ],
        [
          51.13,
          56.62,
          "volumen y destino sea registrada conforme a los procedimientos establecidos."
        ],
        [
          56.57,
          62.26,
          "Para la movilización de los productos en primer grado de transformación,"
        ],
        [
          62.21,
          66.94,
          "obtenidos del aprovechamiento de guaduales y bambusales categoría 3,"
        ],
        [
          66.89,
          70.87,
          "se deberá implementar el certificado de movilización,"
        ],
        [
          70.82,
          77.81,
          "conforme a lo dispuesto en la Resolución 141 de 2025 del Ministerio de Agricultura y Desarrollo Rural."
        ],
        [
          77.76,
          81.94,
          "Transformación y comercialización"
        ],
        [
          81.95,
          89.11,
          "Cuando se trate de guadua seca proveniente de plantas de preservación que apliquen productos para el control"
        ],
        [
          89.06,
          94.71,
          "fitosanitario, se deberá cumplir con lo dispuesto en la Resolución 1971 de 2019,"
        ],
        [
          94.66,
          102.04,
          "mediante la implementación del Libro de Operaciones Forestales en Línea (LOFL) o el instrumento que haga sus"
        ],
        [
          101.99,
          103.16,
          "veces."
        ],
        [
          103.17,
          111.65,
          "En estos casos, la movilización deberá soportarse mediante la correspondiente remisión o factura de venta,"
        ],
        [
          111.6,
          119.13,
          "y los movimientos de ingreso, transformación y salida de los productos deberán registrarse en el libro de"
        ],
        [
          119.08,
          125.6,
          "operaciones, con el fin de garantizar la trazabilidad y el control sobre los productos forestales"
        ],
        [
          125.55,
          128.23000000000002,
          "transformados."
        ],
        [
          128.24,
          135.83,
          "No obstante, la obligatoriedad de implementar el libro de operaciones para las empresas que transformen o"
        ],
        [
          135.84,
          140.66,
          "comercialicen guadua se sustenta en que estas se clasifican como empresas forestales,"
        ],
        [
          140.61,
          145.56,
          "de conformidad con lo dispuesto en el Decreto 1076 de 2015,"
        ],
        [
          145.57,
          151.77,
          "y por tanto deben cumplir con los instrumentos de control y seguimiento establecidos para este tipo de"
        ],
        [
          151.72,
          153.0,
          "actividades."
        ]
      ]
    },
    "slide-12/titulo.mp3": {
      "d": 1.96,
      "c": [
        [
          0.0,
          1.76,
          "Consideraciones finales"
        ]
      ]
    },
    "slide-12/general.mp3": {
      "d": 66.77,
      "c": [
        [
          0.0,
          7.36,
          "Se sintetizan algunas conclusiones derivadas de las disposiciones de la Ley 2206 de 2022."
        ],
        [
          7.37,
          11.55,
          "No clasifica la guadua como producto de la flora o agrícola."
        ],
        [
          11.56,
          18.92,
          "Incentiva su uso en armonía con la sostenibilidad ambiental y sus servicios ecosistémicos en la mitigación de"
        ],
        [
          18.87,
          20.84,
          "los efectos del cambio climático."
        ],
        [
          20.85,
          28.38,
          "Incorpora un trámite nuevo asociado al registro de guaduales."
        ],
        [
          28.39,
          30.58,
          "Categoría 1 y 2 ante autoridad ambiental; categoría 3 ante ICA."
        ],
        [
          30.59,
          39.78,
          "No condiciona el aprovechamiento de guaduales y bambusales al registro."
        ],
        [
          39.79,
          42.49,
          "Los clasifica acorde con su origen, localización y finalidad."
        ],
        [
          42.44,
          44.27,
          "No deroga la Resolución 1740 de 2016."
        ],
        [
          44.28,
          50.45,
          "La resolución establece los lineamientos generales para el manejo,"
        ],
        [
          50.4,
          55.2,
          "aprovechamiento y establecimiento de guaduales y bambusales."
        ],
        [
          55.15,
          63.050000000000004,
          "No exceptúa cumplimiento de disposiciones para movilización, transformación y comercialización."
        ],
        [
          63.06,
          64.74,
          "Resolución 1909 de 2017."
        ],
        [
          64.69,
          66.77,
          "Resolución 1791 de 2019."
        ]
      ]
    },
    "slide-13/titulo.mp3": {
      "d": 29.47,
      "c": [
        [
          0.0,
          2.1100000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.12,
          4.6000000000000005,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.61,
          10.07,
          "¿Cuál es el propósito principal de la Ley 2206 de 2022?"
        ],
        [
          10.08,
          14.83,
          "a. Restringir el uso de la guadua para su conservación absoluta."
        ],
        [
          14.84,
          20.259999999999998,
          "b. Incentivar el uso productivo y sostenible de la guadua y el bambú."
        ],
        [
          20.27,
          25.47,
          "c. Autorizar únicamente plantaciones con fines ornamentales."
        ],
        [
          25.48,
          29.47,
          "d. Permitir su aprovechamiento sin regulación ambiental."
        ]
      ]
    },
    "slide-13/popup-q13-ok.mp3": {
      "d": 4.75,
      "c": [
        [
          0.0,
          1.07,
          "¡Acertaste!"
        ],
        [
          1.02,
          4.75,
          "Continúas avanzando en la construcción de tu aprendizaje."
        ]
      ]
    },
    "slide-13/popup-q13-mal.mp3": {
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
      "d": 7.63,
      "c": [
        [
          0.0,
          2.16,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.17,
          7.42,
          "Relaciona cada categoría con su descripción y con la entidad ante la que se registra."
        ]
      ]
    },
    "slide-14/popup-retro-relaciona.mp3": {
      "d": 4.52,
      "c": [
        [
          0.0,
          1.22,
          "¡Acertaste!"
        ],
        [
          1.23,
          4.52,
          "Estás construyendo muy bien tu aprendizaje."
        ]
      ]
    },
    "slide-15/titulo.mp3": {
      "d": 14.21,
      "c": [
        [
          0.0,
          6.71,
          "Subsección 2: Decreto 1532 de 2019, compilado en el Decreto 1076 de 2015:"
        ],
        [
          6.66,
          14.21,
          "requisitos y procedimientos para el registro de guaduales y bambusales categoría 2"
        ]
      ]
    },
    "slide-15/general.mp3": {
      "d": 9.87,
      "c": [
        [
          0.0,
          5.96,
          "Para profundizar en las disposiciones sobre el registro de guaduales y bambusales de categoría 2,"
        ],
        [
          5.91,
          9.87,
          "se detallan los aspectos relacionados con este procedimiento."
        ]
      ]
    },
    "slide-16/titulo.mp3": {
      "d": 7.31,
      "c": [
        [
          0.0,
          7.31,
          "Decreto 1532 de 2019, compilado en el Decreto 1076 de 2015."
        ]
      ]
    },
    "slide-16/popup-articulo-1.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.4,
          "Ámbito de aplicación."
        ]
      ]
    },
    "slide-16/popup-articulo-2.mp3": {
      "d": 1.46,
      "c": [
        [
          0.18,
          1.07,
          "Del registro."
        ]
      ]
    },
    "slide-16/popup-articulo-3.mp3": {
      "d": 2.19,
      "c": [
        [
          0.18,
          1.83,
          "Requisitos para el registro."
        ]
      ]
    },
    "slide-17/titulo.mp3": {
      "d": 7.24,
      "c": [
        [
          0.0,
          5.5,
          "Artículo 2.2.1.1.12.4."
        ],
        [
          5.51,
          7.04,
          "Formación del registro"
        ]
      ]
    },
    "slide-17/popup-tab-18-1.mp3": {
      "d": 2.59,
      "c": [
        [
          0.0,
          2.59,
          "Formulario de solicitud de registro."
        ]
      ]
    },
    "slide-17/popup-tab-18-2.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.51,
          "Mapa de localización."
        ]
      ]
    },
    "slide-17/popup-tab-18-3.mp3": {
      "d": 2.35,
      "c": [
        [
          0.0,
          2.16,
          "Acreditar la propiedad del predio."
        ]
      ]
    },
    "slide-17/popup-tab-18-4.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.88,
          "Revisión de la información."
        ]
      ]
    },
    "slide-17/popup-tab-18-5.mp3": {
      "d": 1.96,
      "c": [
        [
          0.0,
          1.73,
          "Finalización del proceso."
        ]
      ]
    },
    "slide-18/titulo.mp3": {
      "d": 8.2,
      "c": [
        [
          0.0,
          8.2,
          "Decreto 1532 de 2019: periodicidad, actualización, costo y cancelación del registro"
        ]
      ]
    },
    "slide-18/popup-articulo19-1.mp3": {
      "d": 2.12,
      "c": [
        [
          0.18,
          2.12,
          "Periodicidad del registro."
        ]
      ]
    },
    "slide-18/popup-articulo19-2.mp3": {
      "d": 2.35,
      "c": [
        [
          0.18,
          2.05,
          "Actualización del registro."
        ]
      ]
    },
    "slide-18/popup-articulo19-3.mp3": {
      "d": 1.7,
      "c": [
        [
          0.18,
          1.7,
          "Costo del registro."
        ]
      ]
    },
    "slide-18/popup-articulo19-4.mp3": {
      "d": 2.09,
      "c": [
        [
          0.18,
          1.75,
          "Cancelación del registro."
        ]
      ]
    },
    "slide-19/titulo.mp3": {
      "d": 8.67,
      "c": [
        [
          0.0,
          8.67,
          "Decreto 1532 de 2019: cosecha, comercialización, movilización, reporte y restricciones"
        ]
      ]
    },
    "slide-19/popup-decreto-1.mp3": {
      "d": 10.61,
      "c": [
        [
          0.0,
          2.5,
          "Cosecha/Aprovechamiento."
        ],
        [
          2.51,
          9.08,
          "Para aprovechar las plantaciones forestales protectoras-productoras y protectoras no se requerirá de permiso"
        ],
        [
          9.03,
          10.38,
          "o autorización."
        ]
      ]
    },
    "slide-19/popup-decreto-2.mp3": {
      "d": 18.29,
      "c": [
        [
          0.0,
          7.12,
          "Comercialización. “Los productos forestales maderables y no maderables obtenidos del aprovechamiento de"
        ],
        [
          7.07,
          13.61,
          "plantaciones forestales, barreras rompevientos o cercas vivas, así como de árboles de sombrío,"
        ],
        [
          13.62,
          18.05,
          "árboles frutales y árboles aislados, podrán comercializarse”."
        ]
      ]
    },
    "slide-19/popup-decreto-3.mp3": {
      "d": 22.83,
      "c": [
        [
          0.0,
          8.66,
          "Movilización. “Para su movilización se requerirá del Salvoconducto Único Nacional en línea SUNL,"
        ],
        [
          8.61,
          16.9,
          "de conformidad con las Resoluciones 1909 de 2017 y 081 de 2018 del Ministerio de Ambiente y Desarrollo"
        ],
        [
          16.85,
          22.6,
          "Sostenible, o las normas que las sustituyan, modifiquen o deroguen”."
        ]
      ]
    },
    "slide-19/popup-decreto-4.mp3": {
      "d": 16.93,
      "c": [
        [
          0.0,
          9.56,
          "Reporte. “La autoridad ambiental regional competente reportará la información estadística relacionada con las"
        ],
        [
          9.51,
          16.93,
          "plantaciones forestales, mencionadas en el artículo 2.2.1.1.12.2. del presente Decreto”."
        ]
      ]
    },
    "slide-19/popup-decreto-5.mp3": {
      "d": 10.53,
      "c": [
        [
          0.0,
          6.84,
          "Restricciones. “No podrá realizarse la remoción del bosque natural para el establecimiento de plantaciones"
        ],
        [
          6.79,
          10.53,
          "forestales protectoras y protectoras - productoras”."
        ]
      ]
    },
    "slide-19/popup-cosecha-ver-mas.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          1.97,
          "Cosecha y aprovechamiento."
        ]
      ]
    },
    "slide-20/titulo.mp3": {
      "d": 24.53,
      "c": [
        [
          0.0,
          2.0300000000000002,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.04,
          4.46,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.47,
          13.62,
          "¿Para qué categoría de guadual y bambusal aplican las disposiciones del Decreto 1532 de 2019 compilado en el"
        ],
        [
          13.57,
          16.279999999999998,
          "Decreto 1076 de 2017?"
        ],
        [
          16.29,
          18.49,
          "a. Categoría 3"
        ],
        [
          18.5,
          20.729999999999997,
          "b. Categoría 1"
        ],
        [
          20.74,
          22.97,
          "c. Categoría 2"
        ],
        [
          22.98,
          24.29,
          "d. Ninguna"
        ]
      ]
    },
    "slide-20/popup-q22-ok.mp3": {
      "d": 4.52,
      "c": [
        [
          0.0,
          1.22,
          "¡Acertaste!"
        ],
        [
          1.23,
          4.52,
          "Estás construyendo muy bien tu aprendizaje."
        ]
      ]
    },
    "slide-20/popup-q22-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-21/titulo.mp3": {
      "d": 22.75,
      "c": [
        [
          0.0,
          2.0900000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.1,
          4.5200000000000005,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.53,
          8.87,
          "¿Si tengo un guadual y bambusal establecido en área protectora,"
        ],
        [
          8.82,
          12.67,
          "ante qué entidad debo realizar el registro del mismo?"
        ],
        [
          12.68,
          15.790000000000001,
          "a. Autoridad Ambiental Competente"
        ],
        [
          15.8,
          17.38,
          "b. ICA"
        ],
        [
          17.39,
          21.229999999999997,
          "c. Ministerio de Ambiente y Desarrollo Sostenible"
        ],
        [
          21.24,
          22.75,
          "d. Ninguna"
        ]
      ]
    },
    "slide-21/popup-q24-ok.mp3": {
      "d": 4.52,
      "c": [
        [
          0.0,
          1.22,
          "¡Acertaste!"
        ],
        [
          1.23,
          4.52,
          "Estás construyendo muy bien tu aprendizaje."
        ]
      ]
    },
    "slide-21/popup-q24-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-22/titulo.mp3": {
      "d": 4.36,
      "c": [
        [
          0.0,
          4.36,
          "Consideraciones del Decreto 1532 de 2019"
        ]
      ]
    },
    "slide-22/general.mp3": {
      "d": 58.28,
      "c": [
        [
          0.0,
          7.32,
          "Se sintetizan las conclusiones derivadas del Decreto 1532 de 2019, compilado en el Decreto 1076 de 2015,"
        ],
        [
          7.27,
          11.790000000000001,
          "y su actualización normativa."
        ],
        [
          11.8,
          16.65,
          "Incorpora los guaduales y bambusales como un ecosistema diferenciado."
        ],
        [
          16.66,
          17.599999999999998,
          "Objeto: 4."
        ],
        [
          17.61,
          24.63,
          "El manejo sostenible de ecosistemas de guaduales y bambusales categorías 1 y 2."
        ],
        [
          24.64,
          28.18,
          "Modifica el concepto de aprovechamiento y cosecha."
        ],
        [
          28.19,
          31.16,
          "Propone el concepto de manejo sostenible."
        ],
        [
          31.17,
          36.52,
          "Ratifica disposiciones para movilización, transformación y comercialización."
        ],
        [
          36.53,
          45.64,
          "Incorpora el sistema nacional de trazabilidad forestal como parte del procedimiento."
        ],
        [
          45.65,
          51.440000000000005,
          "Deroga la Resolución 1740 de 2016, modifica los aspectos relacionados con Decreto 1532 de 2019."
        ],
        [
          51.45,
          58.28,
          "Incorpora un capítulo específico para ecosistemas de guaduales y bambusales categorías 1 y 2."
        ]
      ]
    },
    "slide-23/titulo.mp3": {
      "d": 10.61,
      "c": [
        [
          0.0,
          6.73,
          "Subsección 3: Resolución 1740 de 2016: tipos de aprovechamiento,"
        ],
        [
          6.74,
          10.61,
          "requisitos y trámites para permisos y autorizaciones"
        ]
      ]
    },
    "slide-24/titulo.mp3": {
      "d": 6.03,
      "c": [
        [
          0.0,
          6.03,
          "Resolución 1740 de 2016: definiciones (categorías)"
        ]
      ]
    },
    "slide-24/general.mp3": {
      "d": 34.69,
      "c": [
        [
          0.0,
          6.86,
          "El esquema conceptual define la clasificación de los guaduales y bambusales bajo los siguientes criterios:"
        ],
        [
          6.87,
          12.31,
          "Primero, los naturales se asignan exclusivamente a la categoría 1."
        ],
        [
          12.32,
          19.35,
          "Segundo, aquellos establecidos con fines de protección o de protección-producción corresponden únicamente a"
        ],
        [
          19.3,
          21.459999999999997,
          "la categoría 2."
        ],
        [
          21.47,
          26.72,
          "Finalmente, tanto los núcleos como los ejemplares con certificación internacional,"
        ],
        [
          26.67,
          30.939999999999998,
          "ya sean naturales o establecidos para protección y producción,"
        ],
        [
          30.95,
          34.69,
          "pueden asociarse a cualquiera de estas dos categorías."
        ]
      ]
    },
    "slide-25/titulo.mp3": {
      "d": 4.91,
      "c": [
        [
          0.0,
          4.91,
          "Resolución 1740 de 2016: definiciones"
        ]
      ]
    },
    "slide-25/general.mp3": {
      "d": 24.45,
      "c": [
        [
          0.0,
          6.63,
          "Los lineamientos generales establecidos en la presente Resolución 1740 de 2016,"
        ],
        [
          6.64,
          12.43,
          "son una herramienta de consulta obligatoria y de orientación para las autoridades ambientales y los"
        ],
        [
          12.38,
          19.259999999999998,
          "particulares, para el manejo, aprovechamiento y establecimiento de guaduales y/o bambusales,"
        ],
        [
          19.27,
          24.22,
          "para lo cual es necesario conocer y comprender las siguientes definiciones."
        ]
      ]
    },
    "slide-25/popup-tab-29-1.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          1.93,
          "Aprovechamiento Tipo 1."
        ]
      ]
    },
    "slide-25/popup-tab-29-2.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          2.19,
          "Aprovechamiento Tipo 2."
        ]
      ]
    },
    "slide-25/popup-tab-29-3.mp3": {
      "d": 2.19,
      "c": [
        [
          0.0,
          2.19,
          "Asistencia técnica forestal."
        ]
      ]
    },
    "slide-25/popup-tab-29-4.mp3": {
      "d": 1.57,
      "c": [
        [
          0.0,
          1.36,
          "Empresa forestal."
        ]
      ]
    },
    "slide-25/popup-tab-29-5.mp3": {
      "d": 3.79,
      "c": [
        [
          0.0,
          3.57,
          "Manejo silvicultural del guadual y/o bambusal."
        ]
      ]
    },
    "slide-26/titulo.mp3": {
      "d": 5.96,
      "c": [
        [
          0.0,
          5.96,
          "Resolución 1740 de 2016: definiciones (estudios)"
        ]
      ]
    },
    "slide-26/popup-tab-30-1.mp3": {
      "d": 3.63,
      "c": [
        [
          0.0,
          3.43,
          "Estudio para cambio definitivo en el uso del suelo."
        ]
      ]
    },
    "slide-26/popup-tab-30-2.mp3": {
      "d": 3.0,
      "c": [
        [
          0.0,
          2.77,
          "Estudio para aprovechamiento Tipo 1."
        ]
      ]
    },
    "slide-26/popup-tab-30-3.mp3": {
      "d": 3.0,
      "c": [
        [
          0.0,
          2.79,
          "Estudio para aprovechamiento Tipo 2."
        ]
      ]
    },
    "slide-26/popup-tab-30-4.mp3": {
      "d": 4.99,
      "c": [
        [
          0.0,
          4.8,
          "Estudio de establecimiento y manejo de guaduales y/o bambusales."
        ]
      ]
    },
    "slide-27/titulo.mp3": {
      "d": 2.59,
      "c": [
        [
          0.0,
          2.39,
          "¿Por qué se solicita un estudio técnico?"
        ]
      ]
    },
    "slide-27/general.mp3": {
      "d": 27.09,
      "c": [
        [
          0.0,
          3.6300000000000003,
          "Los estudios permiten conocer las características del guadual,"
        ],
        [
          3.64,
          10.52,
          "planificar la intervención y demostrar que el aprovechamiento puede realizarse sin comprometer la permanencia"
        ],
        [
          10.47,
          11.69,
          "del recurso."
        ],
        [
          11.7,
          14.52,
          "Estudio Tipo 1 / Tipo 2"
        ],
        [
          14.53,
          20.22,
          "La diferencia entre los estudios responde a las características y condiciones del aprovechamiento."
        ],
        [
          20.23,
          26.88,
          "La información técnica ayuda a tomar decisiones acordes con el tamaño del área y el nivel de intervención."
        ]
      ]
    },
    "slide-28/titulo.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          1.42,
          "¿Sabías qué?"
        ],
        [
          1.43,
          2.84,
          "Definiciones clave"
        ]
      ]
    },
    "slide-29/titulo.mp3": {
      "d": 7.55,
      "c": [
        [
          0.0,
          7.35,
          "Resolución 1740 de 2016: solicitud de aprovechamiento de guadua y/o bambusal"
        ]
      ]
    },
    "slide-29/popup-tab-33-1.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          0.7,
          "1."
        ],
        [
          0.71,
          2.21,
          "Solicitud escrita."
        ]
      ]
    },
    "slide-29/popup-tab-33-2.mp3": {
      "d": 4.6,
      "c": [
        [
          0.0,
          0.88,
          "2."
        ],
        [
          0.89,
          4.6,
          "Acreditar la calidad de tenencia del propietario del predio."
        ]
      ]
    },
    "slide-29/popup-tab-33-3.mp3": {
      "d": 3.47,
      "c": [
        [
          0.0,
          0.86,
          "3."
        ],
        [
          0.87,
          3.23,
          "Se adjunta el estudio correspondiente."
        ]
      ]
    },
    "slide-30/titulo.mp3": {
      "d": 3.24,
      "c": [
        [
          0.0,
          1.3699999999999999,
          "¿Sabías qué?"
        ],
        [
          1.38,
          3.03,
          "Requisitos de la solicitud"
        ]
      ]
    },
    "slide-31/titulo.mp3": {
      "d": 5.33,
      "c": [
        [
          0.0,
          5.11,
          "Resolución 1740 de 2016: trámite del registro"
        ]
      ]
    },
    "slide-31/popup-paso-1.mp3": {
      "d": 4.6,
      "c": [
        [
          0.0,
          4.4,
          "Radicar: presentar la solicitud y la documentación requerida."
        ]
      ]
    },
    "slide-31/popup-paso-2.mp3": {
      "d": 5.64,
      "c": [
        [
          0.0,
          5.42,
          "Revisar: la autoridad evalúa la solicitud y verifica los requisitos."
        ]
      ]
    },
    "slide-31/popup-paso-3.mp3": {
      "d": 7.16,
      "c": [
        [
          0.0,
          6.94,
          "Solicitar información adicional: cuando es necesario, se solicita completar o aclarar información."
        ]
      ]
    },
    "slide-31/popup-paso-4.mp3": {
      "d": 6.84,
      "c": [
        [
          0.0,
          6.63,
          "Entregar información: el interesado aporta la información solicitada dentro del plazo establecido."
        ]
      ]
    },
    "slide-31/popup-paso-5.mp3": {
      "d": 4.75,
      "c": [
        [
          0.0,
          4.75,
          "Devolver: si corresponde, se devuelve la documentación aportada."
        ]
      ]
    },
    "slide-31/popup-paso-6.mp3": {
      "d": 6.69,
      "c": [
        [
          0.0,
          6.69,
          "Archivar: si no se presenta la información requerida, puede producirse el desistimiento y archivo."
        ]
      ]
    },
    "slide-31/popup-paso-7.mp3": {
      "d": 6.69,
      "c": [
        [
          0.0,
          6.69,
          "Decidir: se expide una resolución que otorga o niega el permiso o autorización."
        ]
      ]
    },
    "slide-31/popup-paso-8.mp3": {
      "d": 5.96,
      "c": [
        [
          0.0,
          5.76,
          "Recurrir: cuando proceda, el interesado puede presentar recurso de reposición."
        ]
      ]
    },
    "slide-32/titulo.mp3": {
      "d": 3.16,
      "c": [
        [
          0.0,
          3.16,
          "¿Qué debe incluir el estudio para aprovechar guadua?"
        ]
      ]
    },
    "slide-33/titulo.mp3": {
      "d": 7.97,
      "c": [
        [
          0.0,
          7.76,
          "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 1 - Ubicación e identificación"
        ]
      ]
    },
    "slide-33/popup-fase-1.mp3": {
      "d": 21.97,
      "c": [
        [
          0.0,
          4.32,
          "¿Por qué necesitamos conocer dónde y qué vamos a aprovechar?"
        ],
        [
          4.33,
          11.17,
          "La localización y georreferenciación permiten saber exactamente dónde está el guadual y cuál es el área que"
        ],
        [
          11.12,
          13.56,
          "se propone intervenir."
        ],
        [
          13.57,
          20.07,
          "La taxonomía ayuda a identificar las especies presentes para asegurar que el aprovechamiento corresponda a"
        ],
        [
          20.02,
          21.97,
          "los recursos autorizados."
        ]
      ]
    },
    "slide-34/titulo.mp3": {
      "d": 7.24,
      "c": [
        [
          0.0,
          7.24,
          "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 2 - Inventario y volumen"
        ]
      ]
    },
    "slide-34/popup-fase-2.mp3": {
      "d": 24.35,
      "c": [
        [
          0.0,
          3.35,
          "¿Por qué debemos conocer la madurez de los culmos?"
        ],
        [
          3.36,
          10.11,
          "Debemos conocer la madurez de los culmos porque esto nos permite identificar cuáles están en crecimiento,"
        ],
        [
          10.12,
          14.96,
          "cuáles ya están maduros y cuáles han pasado su etapa adecuada."
        ],
        [
          14.97,
          19.06,
          "De esta manera, podemos planificar mejor cuáles se pueden cortar,"
        ],
        [
          19.07,
          24.13,
          "evitando afectar innecesariamente el crecimiento y la renovación del guadual."
        ]
      ]
    },
    "slide-35/titulo.mp3": {
      "d": 9.33,
      "c": [
        [
          0.0,
          7.15,
          "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 3 - Planificación temporal,"
        ],
        [
          7.16,
          9.03,
          "cronograma y sostenibilidad"
        ]
      ]
    },
    "slide-35/popup-fase-3.mp3": {
      "d": 20.35,
      "c": [
        [
          0.0,
          3.08,
          "¿Por qué se planifica el tiempo de aprovechamiento?"
        ],
        [
          3.09,
          9.95,
          "Renovabilidad: el aprovechamiento debe considerar la capacidad del guadual para recuperarse y continuar"
        ],
        [
          9.9,
          12.83,
          "ofreciendo sus servicios ecosistémicos."
        ],
        [
          12.84,
          19.31,
          "Cronograma: organiza las actividades y ayuda a controlar que la intervención se realice de acuerdo con lo"
        ],
        [
          19.26,
          20.35,
          "planificado."
        ]
      ]
    },
    "slide-36/titulo.mp3": {
      "d": 8.12,
      "c": [
        [
          0.0,
          7.92,
          "Registro de aprovechamiento: contenido del estudio tipo 1 · Fase 4 - Operación y salidas del proceso"
        ]
      ]
    },
    "slide-36/popup-fase-4.mp3": {
      "d": 4.13,
      "c": [
        [
          0.0,
          4.13,
          "¿Por qué se deben definir métodos, equipos e infraestructura?"
        ]
      ]
    },
    "slide-37/titulo.mp3": {
      "d": 3.32,
      "c": [
        [
          0.0,
          3.11,
          "¿Qué es el estudio para el aprovechamiento tipo 2?"
        ]
      ]
    },
    "slide-38/titulo.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.85,
          "Identificación y localización del predio"
        ]
      ]
    },
    "slide-38/popup-r-1.mp3": {
      "d": 1.96,
      "c": [
        [
          0.0,
          1.75,
          "Identificación del predio."
        ]
      ]
    },
    "slide-38/popup-r-2.mp3": {
      "d": 3.47,
      "c": [
        [
          0.0,
          3.27,
          "Mapa del predio (escala 1:10.000)."
        ]
      ]
    },
    "slide-38/popup-r-3.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          2.22,
          "Área del guadual dentro del predio."
        ]
      ]
    },
    "slide-38/popup-r-4.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.88,
          "Hectáreas a aprovechar."
        ]
      ]
    },
    "slide-38/popup-r-5.mp3": {
      "d": 3.47,
      "c": [
        [
          0.0,
          3.47,
          "Mapa del área a aprovechar (1:1.000)."
        ]
      ]
    },
    "slide-38/popup-glosario-escalas.mp3": {
      "d": 29.23,
      "c": [
        [
          0.0,
          2.33,
          "Glosario visual de escalas"
        ],
        [
          2.34,
          9.09,
          "Escala 1:10.000: 1 cm en el mapa representa 100 metros en el territorio."
        ],
        [
          9.1,
          13.64,
          "Escala 1:1.000: 1 cm en el mapa representa 10 metros en el territorio."
        ],
        [
          13.59,
          18.91,
          "Se utiliza para observar con mayor detalle el área que se pretende intervenir."
        ],
        [
          18.86,
          20.759999999999998,
          "¿Por qué importa?"
        ],
        [
          20.77,
          27.6,
          "Una escala más detallada permite ubicar con mayor precisión el área del guadual que será objeto de"
        ],
        [
          27.55,
          29.0,
          "aprovechamiento."
        ]
      ]
    },
    "slide-39/titulo.mp3": {
      "d": 4.13,
      "c": [
        [
          0.0,
          4.13,
          "Entorno del guadual: caracterización físico-biótica"
        ]
      ]
    },
    "slide-39/popup-entorno.mp3": {
      "d": 5.72,
      "c": [
        [
          0.0,
          5.72,
          "¿Qué información debemos conocer sobre el entorno del guadual antes de realizar su aprovechamiento?"
        ]
      ]
    },
    "slide-40/titulo.mp3": {
      "d": 3.32,
      "c": [
        [
          0.0,
          3.32,
          "Predios públicos e identificación de especies"
        ]
      ]
    },
    "slide-41/titulo.mp3": {
      "d": 3.55,
      "c": [
        [
          0.0,
          3.33,
          "El guadual como parte de la cultura y del territorio"
        ]
      ]
    },
    "slide-41/popup-r-1.mp3": {
      "d": 10.61,
      "c": [
        [
          0.0,
          4.37,
          "Los valores culturales e históricos no son solo un requisito."
        ],
        [
          4.38,
          10.38,
          "Permiten reconocer la relación que las comunidades han construido con el guadual a lo largo del tiempo."
        ]
      ]
    },
    "slide-41/popup-r-2.mp3": {
      "d": 13.64,
      "c": [
        [
          0.0,
          1.64,
          "Uso artesanal."
        ],
        [
          1.65,
          7.95,
          "Reconocer prácticas tradicionales de transformación de la guadua para la elaboración de objetos,"
        ],
        [
          7.9,
          13.42,
          "utensilios y artesanías permite valorar conocimientos transmitidos entre generaciones."
        ]
      ]
    },
    "slide-41/popup-r-3.mp3": {
      "d": 14.37,
      "c": [
        [
          0.0,
          2.45,
          "Uso constructivo tradicional."
        ],
        [
          2.46,
          9.620000000000001,
          "En diferentes territorios la guadua ha sido utilizada en viviendas, estructuras rurales y otros espacios."
        ],
        [
          9.63,
          14.37,
          "Estos usos forman parte de la memoria y de las prácticas locales."
        ]
      ]
    },
    "slide-41/popup-r-4.mp3": {
      "d": 15.23,
      "c": [
        [
          0.0,
          2.0100000000000002,
          "Saberes de la comunidad."
        ],
        [
          2.02,
          5.95,
          "Los conocimientos sobre selección, corte, manejo,"
        ],
        [
          5.9,
          12.73,
          "transformación y utilización de la guadua constituyen aportes que pueden dialogar con el conocimiento técnico"
        ],
        [
          12.68,
          15.23,
          "para promover un manejo sostenible."
        ]
      ]
    },
    "slide-41/popup-r-5.mp3": {
      "d": 16.27,
      "c": [
        [
          0.0,
          2.3800000000000003,
          "Paisaje Cultural Cafetero."
        ],
        [
          2.39,
          6.32,
          "La guadua también forma parte de la identidad de territorios,"
        ],
        [
          6.27,
          11.4,
          "donde sus usos tradicionales se relacionan con la vida rural y la cultura."
        ],
        [
          11.41,
          16.27,
          "Reconocer esta dimensión permite comprender el valor integral del ecosistema."
        ]
      ]
    },
    "slide-42/titulo.mp3": {
      "d": 4.91,
      "c": [
        [
          0.0,
          3.33,
          "¿Cuántos guaduales hay y en qué estado están?"
        ],
        [
          3.34,
          4.7,
          "Inventario forestal"
        ]
      ]
    },
    "slide-42/general.mp3": {
      "d": 42.92,
      "c": [
        [
          0.0,
          2.3600000000000003,
          "¿Por qué medir antes de cortar?"
        ],
        [
          2.37,
          9.33,
          "Porque conocer la cantidad y el estado de la guadua permite planificar un aprovechamiento que considere la"
        ],
        [
          9.28,
          11.32,
          "capacidad de renovación del ecosistema."
        ],
        [
          11.33,
          18.99,
          "Por esta razón, cuando se pretenda aprovechar un guadual o bambusal con densidad total inferior a dos mil"
        ],
        [
          18.94,
          24.04,
          "tallos o culmos por hectárea, solo se realizan prácticas silvícolas para su mejoramiento."
        ],
        [
          24.05,
          32.28,
          "Además, el sistema de aprovechamiento a emplear debe ser el de entresaca selectiva de los tallos o culmos"
        ],
        [
          32.29,
          36.81,
          "maduros y sobremaduros; y el aprovechamiento total de los tallos secos y secos partidos."
        ],
        [
          36.82,
          42.67,
          "El porcentaje de intervención será como máximo el 35% de la población comercial."
        ]
      ]
    },
    "slide-42/popup-glosario-inventario.mp3": {
      "d": 1.18,
      "c": [
        [
          0.0,
          1.18,
          "Glosario."
        ]
      ]
    },
    "slide-43/titulo.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Duración y planificación"
        ]
      ]
    },
    "slide-43/popup-uca.mp3": {
      "d": 25.55,
      "c": [
        [
          0.0,
          3.8800000000000003,
          "¿Por qué se utiliza la Unidad de Corta Anual (UCA)?"
        ],
        [
          3.89,
          11.26,
          "UCA – Unidad de Corta Anual: es una forma de organizar el aprovechamiento por periodos anuales cuando la"
        ],
        [
          11.21,
          15.450000000000001,
          "intervención supera el tiempo establecido para un solo periodo."
        ],
        [
          15.46,
          22.52,
          "Finalidad ambiental: dividir el área por años permite ordenar la intervención y dar tiempo al guadual para"
        ],
        [
          22.47,
          25.35,
          "recuperarse antes de una nueva intervención."
        ]
      ]
    },
    "slide-44/titulo.mp3": {
      "d": 3.0,
      "c": [
        [
          0.0,
          3.0,
          "¿Qué se obtiene y cómo se cuida el guadual?"
        ]
      ]
    },
    "slide-44/popup-r-1.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.63,
          "¿Qué productos se obtendrán?"
        ]
      ]
    },
    "slide-44/popup-r-2.mp3": {
      "d": 2.43,
      "c": [
        [
          0.0,
          2.21,
          "¿Cómo se evitan daños al ambiente?"
        ]
      ]
    },
    "slide-44/popup-r-3.mp3": {
      "d": 1.8,
      "c": [
        [
          0.0,
          1.56,
          "¿Cómo se mejora el guadual?"
        ]
      ]
    },
    "slide-45/titulo.mp3": {
      "d": 6.11,
      "c": [
        [
          0.0,
          6.11,
          "Contenido del estudio tipo 2 con POF (1, 2, 3, 4)"
        ]
      ]
    },
    "slide-45/popup-r-1.mp3": {
      "d": 18.44,
      "c": [
        [
          0.0,
          4.33,
          "Identificación, localización y extensión del predio."
        ],
        [
          4.34,
          11.77,
          "Identificación, localización y extensión del predio donde se encuentra ubicado el guadual y/o bambusal objeto"
        ],
        [
          11.72,
          18.23,
          "de la solicitud de aprovechamiento, indicando jurisdicción departamental, municipal y veredal."
        ]
      ]
    },
    "slide-45/popup-r-2.mp3": {
      "d": 5.56,
      "c": [
        [
          0.0,
          1.56,
          "Mapa del predio."
        ],
        [
          1.57,
          5.35,
          "Mapa del predio a escala no mayor a 1:5000."
        ]
      ]
    },
    "slide-45/popup-r-3.mp3": {
      "d": 9.8,
      "c": [
        [
          0.0,
          2.49,
          "Área del guadual dentro del predio."
        ],
        [
          2.5,
          9.8,
          "Localización y extensión del área georreferenciada que ocupa el guadual y/o bambusal dentro del predio."
        ]
      ]
    },
    "slide-45/popup-r-4.mp3": {
      "d": 5.96,
      "c": [
        [
          0.0,
          2.3600000000000003,
          "Área total a aprovechar."
        ],
        [
          2.37,
          5.74,
          "Área total en hectáreas que será objeto de aprovechamiento."
        ]
      ]
    },
    "slide-46/titulo.mp3": {
      "d": 5.25,
      "c": [
        [
          0.0,
          5.25,
          "Contenido del estudio tipo 2 con POF (5, 6, 7)"
        ]
      ]
    },
    "slide-46/popup-r-1.mp3": {
      "d": 6.77,
      "c": [
        [
          0.0,
          2.3600000000000003,
          "Mapa del área a aprovechar."
        ],
        [
          2.37,
          6.77,
          "Mapa del área objeto de aprovechamiento a escala 1:1000."
        ]
      ]
    },
    "slide-46/popup-r-2.mp3": {
      "d": 8.59,
      "c": [
        [
          0.0,
          2.43,
          "Identificación de las especies."
        ],
        [
          2.44,
          8.59,
          "Identificación de las especies de guadua y/o bambusal que serán objeto de aprovechamiento."
        ]
      ]
    },
    "slide-46/popup-r-3.mp3": {
      "d": 2.51,
      "c": [
        [
          0.0,
          2.51,
          "Inventario y estado de madurez."
        ]
      ]
    },
    "slide-47/titulo.mp3": {
      "d": 6.53,
      "c": [
        [
          0.0,
          6.29,
          "Contenido del estudio tipo 2 con POF (8, 9, 10, 11)"
        ]
      ]
    },
    "slide-47/popup-r-1.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          1.81,
          "Duración del aprovechamiento."
        ]
      ]
    },
    "slide-47/popup-r-2.mp3": {
      "d": 7.55,
      "c": [
        [
          0.0,
          1.26,
          "Cronograma."
        ],
        [
          1.27,
          7.55,
          "Cronograma de las actividades para la totalidad del período o UCA del respectivo aprovechamiento."
        ]
      ]
    },
    "slide-47/popup-r-3.mp3": {
      "d": 7.31,
      "c": [
        [
          0.0,
          1.98,
          "Métodos y equipos."
        ],
        [
          1.99,
          7.31,
          "Métodos y equipos a utilizar para el aprovechamiento del guadual y/o bambusal."
        ]
      ]
    },
    "slide-47/popup-r-4.mp3": {
      "d": 10.19,
      "c": [
        [
          0.0,
          2.5500000000000003,
          "Planificación del aprovechamiento."
        ],
        [
          2.56,
          9.99,
          "Descripción de la planificación del aprovechamiento (diseño de vías, campamentos, patios de acopio, etc.)."
        ]
      ]
    },
    "slide-48/titulo.mp3": {
      "d": 6.03,
      "c": [
        [
          0.0,
          5.74,
          "Contenido del estudio tipo 2 con POF (12, 13, 14)"
        ]
      ]
    },
    "slide-48/popup-r-1.mp3": {
      "d": 4.44,
      "c": [
        [
          0.0,
          1.82,
          "Productos a obtener."
        ],
        [
          1.83,
          4.21,
          "Descripción de los productos a obtener."
        ]
      ]
    },
    "slide-48/popup-r-2.mp3": {
      "d": 11.96,
      "c": [
        [
          0.0,
          2.7,
          "Prevención y manejo de impactos."
        ],
        [
          2.71,
          9.29,
          "Medidas para prevenir, mitigar y corregir los posibles efectos e impactos negativos causados por el"
        ],
        [
          9.24,
          11.75,
          "aprovechamiento de estas especies."
        ]
      ]
    },
    "slide-48/popup-r-3.mp3": {
      "d": 7.63,
      "c": [
        [
          0.0,
          2.0100000000000002,
          "Mejoramiento del guadual."
        ],
        [
          2.02,
          7.63,
          "Medidas a implementar para el mejoramiento de la productividad del guadual y/o bambusal."
        ]
      ]
    },
    "slide-49/titulo.mp3": {
      "d": 6.69,
      "c": [
        [
          0.0,
          6.69,
          "Contenido del estudio: cambio en el uso del suelo (1, 2, 3, 4)"
        ]
      ]
    },
    "slide-49/popup-r-1.mp3": {
      "d": 17.08,
      "c": [
        [
          0.0,
          2.99,
          "Identificación y ubicación del predio."
        ],
        [
          3.0,
          10.53,
          "Identificación, localización y extensión del predio donde se encuentra ubicado el guadual y/o bambusal objeto"
        ],
        [
          10.48,
          16.86,
          "de la solicitud de aprovechamiento, indicando jurisdicción departamental, municipal y veredal."
        ]
      ]
    },
    "slide-49/popup-r-2.mp3": {
      "d": 6.43,
      "c": [
        [
          0.0,
          2.06,
          "Mejor aptitud del suelo."
        ],
        [
          2.07,
          6.43,
          "Estudio técnico que demuestre una mejor aptitud de uso del suelo."
        ]
      ]
    },
    "slide-49/popup-r-3.mp3": {
      "d": 9.25,
      "c": [
        [
          0.0,
          3.0100000000000002,
          "Utilidad pública e interés social."
        ],
        [
          3.02,
          9.03,
          "Razones de utilidad pública e interés social, cuando estas sean el motivo de la solicitud."
        ]
      ]
    },
    "slide-49/popup-r-4.mp3": {
      "d": 5.64,
      "c": [
        [
          0.0,
          1.59,
          "Mapa del predio."
        ],
        [
          1.6,
          5.44,
          "Mapa del predio a escala no menor a 1:5000."
        ]
      ]
    },
    "slide-50/titulo.mp3": {
      "d": 6.53,
      "c": [
        [
          0.0,
          6.27,
          "Contenido del estudio: cambio en el uso del suelo (5, 6, 7, 8)"
        ]
      ]
    },
    "slide-50/popup-r-1.mp3": {
      "d": 9.33,
      "c": [
        [
          0.0,
          2.24,
          "Área ocupada por el guadual."
        ],
        [
          2.25,
          9.07,
          "Localización y extensión del área georreferenciada que ocupa el guadual y/o bambusal dentro del predio."
        ]
      ]
    },
    "slide-50/popup-r-2.mp3": {
      "d": 5.64,
      "c": [
        [
          0.0,
          1.88,
          "Área a aprovechar."
        ],
        [
          1.89,
          5.42,
          "Área total en hectáreas que será objeto de aprovechamiento."
        ]
      ]
    },
    "slide-50/popup-r-3.mp3": {
      "d": 6.43,
      "c": [
        [
          0.0,
          2.0500000000000003,
          "Mapa detallado del área."
        ],
        [
          2.06,
          6.2,
          "Mapa del área objeto de aprovechamiento a escala 1:1000."
        ]
      ]
    },
    "slide-50/popup-r-4.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          1.83,
          "Caracterización del entorno."
        ]
      ]
    },
    "slide-51/titulo.mp3": {
      "d": 6.92,
      "c": [
        [
          0.0,
          6.67,
          "Contenido del estudio: cambio en el uso del suelo (9, 10, 11, 12)"
        ]
      ]
    },
    "slide-51/popup-r-1.mp3": {
      "d": 8.67,
      "c": [
        [
          0.0,
          2.35,
          "Identificación de especies."
        ],
        [
          2.36,
          8.44,
          "Identificación de las especies de guadua y/o bambusal que serán objeto de aprovechamiento."
        ]
      ]
    },
    "slide-51/popup-r-2.mp3": {
      "d": 24.03,
      "c": [
        [
          0.0,
          2.91,
          "Cantidad, madurez y volumen."
        ],
        [
          2.92,
          9.83,
          "Inventario estadístico, con una intensidad de muestreo de forma tal que el error no sea superior al quince"
        ],
        [
          9.78,
          13.97,
          "por ciento, con una probabilidad del noventa y cinco por ciento,"
        ],
        [
          13.92,
          20.79,
          "para determinar la cantidad de culmos en el área y su estado de madurez (renuevo, verde, madura,"
        ],
        [
          20.8,
          23.8,
          "sobremadura y seca), y volumen total."
        ]
      ]
    },
    "slide-51/popup-r-3.mp3": {
      "d": 4.44,
      "c": [
        [
          0.0,
          1.82,
          "Volumen por especie."
        ],
        [
          1.83,
          4.24,
          "Volumen total estimado por especie."
        ]
      ]
    },
    "slide-52/titulo.mp3": {
      "d": 7.16,
      "c": [
        [
          0.0,
          7.16,
          "Contenido del estudio: cambio en el uso del suelo (13, 14, 15, 16)"
        ]
      ]
    },
    "slide-52/popup-r-1.mp3": {
      "d": 5.64,
      "c": [
        [
          0.0,
          1.92,
          "Productos y destino."
        ],
        [
          1.93,
          5.4,
          "Descripción de los productos a obtener y disposición final."
        ]
      ]
    },
    "slide-52/popup-r-2.mp3": {
      "d": 5.25,
      "c": [
        [
          0.0,
          1.32,
          "Cronograma."
        ],
        [
          1.33,
          5.02,
          "Cronograma de actividades para la totalidad del aprovechamiento."
        ]
      ]
    },
    "slide-52/popup-r-3.mp3": {
      "d": 12.2,
      "c": [
        [
          0.0,
          1.9,
          "Manejo de impactos."
        ],
        [
          1.91,
          9.36,
          "Propuesta para prevenir, mitigar, corregir y compensar los posibles efectos e impactos negativos causados por"
        ],
        [
          9.31,
          11.99,
          "el aprovechamiento de estas especies."
        ]
      ]
    },
    "slide-53/titulo.mp3": {
      "d": 7.31,
      "c": [
        [
          0.0,
          7.07,
          "Contenido del estudio para el establecimiento y manejo de guaduales (1, 2, 3, 4)"
        ]
      ]
    },
    "slide-53/popup-r-1.mp3": {
      "d": 16.77,
      "c": [
        [
          0.0,
          3.4800000000000004,
          "Identificación, ubicación y extensión."
        ],
        [
          3.49,
          11.15,
          "Identificación, localización y extensión del predio donde se estableció o pretende establecerse el guadual"
        ],
        [
          11.1,
          16.55,
          "y/o bambusal, indicando jurisdicción departamental, municipal y veredal."
        ]
      ]
    },
    "slide-53/popup-r-2.mp3": {
      "d": 5.64,
      "c": [
        [
          0.0,
          1.59,
          "Mapa del predio."
        ],
        [
          1.6,
          5.44,
          "Mapa del predio a escala no menor a 1:5000."
        ]
      ]
    },
    "slide-53/popup-r-3.mp3": {
      "d": 11.0,
      "c": [
        [
          0.0,
          1.85,
          "Área de la plantación."
        ],
        [
          1.86,
          9.22,
          "Localización y extensión del área georreferenciada que ocupa u ocupará la plantación de guadual y/o bambusal"
        ],
        [
          9.17,
          10.76,
          "dentro del predio."
        ]
      ]
    },
    "slide-53/popup-r-4.mp3": {
      "d": 5.96,
      "c": [
        [
          0.0,
          1.48,
          "Mapa del área."
        ],
        [
          1.49,
          5.75,
          "Mapa del área objeto de aprovechamiento a escala 1:1000."
        ]
      ]
    },
    "slide-54/titulo.mp3": {
      "d": 7.24,
      "c": [
        [
          0.0,
          7.24,
          "Contenido del estudio para el establecimiento y manejo de guaduales (5, 6, 7, 8)"
        ]
      ]
    },
    "slide-54/popup-r-1.mp3": {
      "d": 9.64,
      "c": [
        [
          0.0,
          2.2800000000000002,
          "Identificación de especies."
        ],
        [
          2.29,
          9.43,
          "Indicar el nombre común y científico de las especies de guadual y/o bambusal establecido o a establecer."
        ]
      ]
    },
    "slide-54/popup-r-2.mp3": {
      "d": 6.19,
      "c": [
        [
          0.0,
          2.14,
          "Diseño del establecimiento."
        ],
        [
          2.15,
          5.97,
          "Diseño del establecimiento del guadual y/o bambusal."
        ]
      ]
    },
    "slide-54/popup-r-3.mp3": {
      "d": 7.16,
      "c": [
        [
          0.0,
          1.43,
          "Mantenimiento."
        ],
        [
          1.44,
          6.93,
          "Sistema de mantenimiento del guadual y/o bambusal establecido o a establecer."
        ]
      ]
    },
    "slide-55/titulo.mp3": {
      "d": 7.47,
      "c": [
        [
          0.0,
          7.47,
          "Contenido del estudio para el establecimiento y manejo de guaduales (9, 10, 11, 12)"
        ]
      ]
    },
    "slide-55/popup-r-1.mp3": {
      "d": 5.07,
      "c": [
        [
          0.0,
          2.1300000000000003,
          "Volumen total a obtener."
        ],
        [
          2.14,
          5.07,
          "Cuantificación del volumen total a obtener."
        ]
      ]
    },
    "slide-55/popup-r-2.mp3": {
      "d": 4.44,
      "c": [
        [
          0.0,
          1.82,
          "Productos a obtener."
        ],
        [
          1.83,
          4.21,
          "Descripción de los productos a obtener."
        ]
      ]
    },
    "slide-55/popup-r-3.mp3": {
      "d": 8.91,
      "c": [
        [
          0.0,
          4.28,
          "Cronograma de siembra, mantenimiento y aprovechamiento."
        ],
        [
          4.29,
          8.71,
          "Cronograma de actividades de siembra, mantenimiento y aprovechamiento."
        ]
      ]
    },
    "slide-56/titulo.mp3": {
      "d": 4.21,
      "c": [
        [
          0.0,
          3.9,
          "Conexión entre establecimiento, manejo y sostenibilidad"
        ]
      ]
    },
    "slide-56/general.mp3": {
      "d": 28.37,
      "c": [
        [
          0.0,
          2.4400000000000004,
          "¿Por qué planificar desde la siembra?"
        ],
        [
          2.45,
          7.8,
          "El establecimiento y mantenimiento también determinan la calidad futura del guadual."
        ],
        [
          7.81,
          14.200000000000001,
          "Planificar desde el inicio ayuda a conservar el recurso y a orientar su aprovechamiento posterior."
        ],
        [
          14.21,
          21.23,
          "Diálogo con conocimientos locales: cuando existan prácticas tradicionales de establecimiento o manejo,"
        ],
        [
          21.18,
          24.96,
          "pueden reconocerse como parte del conocimiento del territorio,"
        ],
        [
          24.91,
          28.37,
          "y complementarlas con los criterios técnicos aplicables."
        ]
      ]
    },
    "slide-57/titulo.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.65,
          "Otras consideraciones"
        ]
      ]
    },
    "slide-57/popup-tab-61-1.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Prioridades."
        ]
      ]
    },
    "slide-57/popup-tab-61-2.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.72,
          "Reportes especiales."
        ]
      ]
    },
    "slide-57/popup-tab-61-3.mp3": {
      "d": 1.8,
      "c": [
        [
          0.0,
          1.56,
          "Visitas de seguimiento."
        ]
      ]
    },
    "slide-58/titulo.mp3": {
      "d": 3.71,
      "c": [
        [
          0.0,
          3.5,
          "Definiciones: otros aspectos reglamentarios"
        ]
      ]
    },
    "slide-58/popup-tab-62-1.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.72,
          "Manejo silvicultural."
        ]
      ]
    },
    "slide-58/popup-tab-62-2.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.44,
          "Asistencia técnica."
        ]
      ]
    },
    "slide-58/popup-tab-62-3.mp3": {
      "d": 2.59,
      "c": [
        [
          0.0,
          2.59,
          "Movilización y comercialización."
        ]
      ]
    },
    "slide-58/popup-tab-62-4.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          0.96,
          "Ordenación."
        ]
      ]
    },
    "slide-59/titulo.mp3": {
      "d": 39.08,
      "c": [
        [
          0.0,
          2.1,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.11,
          4.5200000000000005,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.53,
          8.93,
          "¿De acuerdo con la Resolución 1740 de 2016,"
        ],
        [
          8.94,
          16.09,
          "qué documento técnico de soporte debo entregar para tramitar el aprovechamiento persistente de los guaduales"
        ],
        [
          16.1,
          22.779999999999998,
          "y bambusales Tipo 1 y Tipo 2 en la Categoría 1 de la Ley 2206 de 2022?"
        ],
        [
          22.79,
          26.91,
          "a. Estudio técnico Tipo 1 o Tipo 2"
        ],
        [
          26.92,
          30.99,
          "b. Plan de manejo Tipo 1 o Tipo 2"
        ],
        [
          31.0,
          36.410000000000004,
          "c. Plan de establecimiento y aprovechamiento Tipo 1 o Tipo 2"
        ],
        [
          36.42,
          38.84,
          "d. Plan de ordenación forestal"
        ]
      ]
    },
    "slide-59/popup-q63-ok.mp3": {
      "d": 8.44,
      "c": [
        [
          0.0,
          1.2,
          "¡Acertaste!"
        ],
        [
          1.21,
          8.44,
          "Los objetivos de este módulo se han cumplido con éxito, demostrando una sólida construcción del aprendizaje."
        ]
      ]
    },
    "slide-59/popup-q63-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-60/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Bibliografía."
        ]
      ]
    },
    "slide-61/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Bibliografía."
        ]
      ]
    },
    "slide-62/titulo.mp3": {
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
