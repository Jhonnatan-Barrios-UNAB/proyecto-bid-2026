/* =====================================================================
   CONFIGURACIÓN DEL MULTIMEDIA · Curso 2 · Módulo 1 (proyecto BID)
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
  "claveProgreso": "bid-curso2-modulo1-progreso",
  "videos": {
    "video-inicial": {
      "titulo": "Video inicial",
      "url": "videos/slide-02/video.mp4",
      "youtube": "",
      "fuente": "Video de bienvenida (avatar). Guion: ver GUION.txt, slide-02/titulo.mp3"
    }
  },
  "documentos": {
    "formulario-registro": {
      "titulo": "Formato Único Nacional de solicitud de registro de plantaciones forestales protectoras y/o protectoras-productoras (F-TA-28)",
      "url": "documentos/F-TA-28_Formulario_Registro_Plantacion_Forestal_V.06.pdf"
    }
  },
  "imagenes": {
    "mapa-distribucion": {
      "titulo": "Distribución de la guadua en Colombia",
      "url": "assets/img/diseno/image37.png",
      "nota": "Imagen del mapa de ppt-design (diapositiva 6). Nota. Fuente OpenAI (2024)."
    }
  },
  "textosLocucion": {
    "slide-01/titulo.mp3": "Módulo 1. Introducción a los ecosistemas de guadua y bambú.",
    "slide-02/titulo.mp3": "Video inicial.",
    "slide-03/titulo.mp3": "Tabla de contenido.",
    "slide-04/titulo.mp3": "Subsección 1: diversidad y especies de bambúes en Colombia",
    "slide-04/general.mp3": "Colombia es uno de los países con mayor diversidad de bambúes en el mundo, albergando numerosas especies distribuidas en diferentes ecosistemas y regiones. Entre ellas, la guadua ocupa un lugar destacado por su importancia ecológica, económica y cultural, aunque existen muchas otras especies que cumplen funciones clave en la conservación de la biodiversidad y el desarrollo de actividades productivas. \nConocer esta diversidad, sus características y su distribución permite comprender el enorme potencial de estos recursos para el manejo sostenible de los paisajes, la restauración de ecosistemas y el fortalecimiento de las economías locales. En esta subsección se exploran las principales especies de bambú presentes en Colombia y su relevancia para el país.",
    "slide-05/titulo.mp3": "Diversidad y especies de bambúes en Colombia",
    "slide-05/general.mp3": "Los bambúes corresponden a un grupo especializado de gramíneas pertenecientes a la familia Poaceae y a la subfamilia Bambusoideae. Se caracterizan por presentar tallos segmentados o culmos, un rápido crecimiento y alta capacidad de regeneración vegetativa. Aunque frecuentemente son asociados con árboles o arbustos, taxonómicamente corresponden a pastos leñosos o herbáceos, adaptados a diferentes condiciones ecológicas y climáticas.\nA nivel general, los bambúes se clasifican en bambúes leñosos y bambúes herbáceos, siendo los primeros los de mayor importancia estructural y productiva debido a sus culmos lignificados. En Colombia, la especie más conocida es la guadua Guadua angustifolia Kunth, considerada uno de los bambúes estructuralmente más importantes del neotrópico, aunque el país alberga una alta diversidad de géneros y especies.",
    "slide-06/titulo.mp3": "Distribución en Colombia",
    "slide-06/general.mp3": "Colombia es considerada uno de los países con mayor diversidad de bambúes en América Latina, favorecida por su heterogeneidad climática, altitudinal y ecosistémica. Se estima la presencia de aproximadamente 80 especies nativas, agrupadas en 8 géneros distribuidos desde bosques húmedos tropicales hasta ecosistemas altoandinos y de páramo, de las cuales 24 especies son endémicas y al menos 12 especies quedan por describirse.\nEntre los géneros más representativos se encuentran Guadua, predominante en zonas andinas y subandinas; Chusquea, asociada a bosques montanos, bosques de niebla y páramos; así como Rhipidocladum, Aulonemia y Arthrostylidium, presentes en ecosistemas tropicales y montanos. \nLa distribución de estas especies responde a variables como altitud, precipitación, humedad y tipo de suelo, permitiendo funciones relevantes en protección hídrica, conectividad ecológica y estabilidad del paisaje.",
    "slide-06/popup-mapa-distribucion.mp3": "Mapa de distribución de la guadua en Colombia.",
    "slide-07/titulo.mp3": "Los guaduales y bambusales como cobertura",
    "slide-07/general.mp3": "Históricamente, los guaduales han sido incorporados dentro de categorías amplias de bosque, en clasificaciones de coberturas vegetales, donde la guadua aparece incluida dentro del bosque denso cuando presenta determinadas condiciones de altura y extensión. Sin embargo, esta aproximación, aunque funcional para ciertos ejercicios cartográficos, ha limitado la comprensión precisa sobre su verdadera distribución, estado y dinámica en el territorio.\nHoy existe una necesidad urgente de avanzar en la identificación, delimitación y registro diferenciado de los guaduales en Colombia, reconociéndolos como formaciones vegetales con características ecológicas, productivas y funcionales particulares, distintas a otros tipos de bosque. Conocer dónde están los guaduales, cuál es su extensión, estado de conservación, conectividad y potencial de manejo resulta fundamental para orientar decisiones relacionadas con la conservación, restauración, el ordenamiento territorial, adaptación al cambio climático, desarrollo rural y sostenibilidad productiva.\nLa diferenciación de los guaduales también permite fortalecer los procesos de monitoreo, planificación y gobernanza, facilitando la formulación de estrategias específicas para su manejo sostenible, y evitando que permanezcan invisibilizados dentro de categorías generales de cobertura.\nEn este contexto, el Ministerio de Ambiente y Desarrollo Sostenible y el Ministerio de Agricultura y Desarrollo Rural, junto con entidades adscritas a ambos sectores, vienen avanzando en iniciativas orientadas al registro y reconocimiento de los guaduales en el país, con el propósito de consolidar información más precisa sobre su localización y distribución, y así fortalecer la toma de decisiones técnicas e institucionales alrededor de esta especie estratégica para Colombia.",
    "slide-07/popup-ver-mas-cobertura.mp3": "Bosque denso.",
    "slide-08/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! En Colombia solo existe una especie de guadua y bambú. a. Verdadero b. Falso",
    "slide-08/popup-q9-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje. Efectivamente en Colombia hay más de 80 especies de guadua y bambú, pero la más reconocida es la guadua (Guadua angustifolia).",
    "slide-08/popup-q9-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-09/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! El bambú y la guadua hacen parte de la misma familia que la caña de azúcar. a. Verdadero b. Falso",
    "slide-09/popup-q11-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje. Efectivamente, aunque la guadua (y los bambúes en general) y la caña de azúcar comparten el mismo origen familiar en las gramíneas (Poaceae), evolutivamente tomaron caminos morfológicos y fisiológicos completamente opuestos. La gran diferencia radica en que los bambúes desarrollaron una estrategia de persistencia estructural basada en la lignificación, mientras que la caña de azúcar se especializó en el almacenamiento metabólico de carbohidratos en tejidos blandos.",
    "slide-09/popup-q11-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-10/titulo.mp3": "Subsección 2: importancia ecológica, económica, cultural y social",
    "slide-10/general.mp3": "Los ecosistemas de guadua y bambú desempeñan un papel fundamental en el equilibrio ambiental y en el desarrollo sostenible de numerosos territorios. Además de contribuir a la conservación de la biodiversidad, la protección del suelo y del recurso hídrico, estas especies representan una importante fuente de ingresos, empleo y bienestar para las comunidades que dependen de su manejo y aprovechamiento. Su estrecha relación con las tradiciones culturales, las prácticas constructivas y las economías locales, las convierten en un recurso estratégico con múltiples beneficios. \nEn esta subsección conocerás la importancia ecológica, económica, cultural y social de la guadua y el bambú, comprendiendo por qué su conservación y manejo sostenible son esenciales para el desarrollo de los territorios y el bienestar de las generaciones presentes y futuras.",
    "slide-11/titulo.mp3": "Importancia ecológica del bambú y guadua",
    "slide-11/general.mp3": "Cuando hablamos de guadua en Colombia, no estamos hablando solamente de una planta o de un material de construcción; estamos hablando de una especie profundamente conectada con la historia, los paisajes y los medios de vida rurales del país.\nLa guadua, Guadua angustifolia Kunth, es considerada una de las especies de bambú de mayor relevancia ecológica, económica y cultural en América Latina. En Colombia, su distribución natural se concentra principalmente en la región Andina y subandina, especialmente en territorios como el Eje Cafetero, el Valle del Cauca, Tolima, Huila, Antioquia y Santander, donde históricamente ha formado parte de sistemas productivos locales, prácticas constructivas tradicionales y dinámicas comunitarias.\nDesde una perspectiva ecológica, los guaduales cumplen funciones fundamentales para el equilibrio de los ecosistemas. Contribuyen a la protección de rondas hídricas y quebradas, favorecen la estabilización de suelos en zonas de pendiente, ayudan a disminuir procesos erosivos y aportan a la captura y almacenamiento de carbono. Asimismo, constituyen hábitats importantes para múltiples especies de fauna y flora, favoreciendo la conectividad ecológica de los paisajes.\nFinalmente, la guadua se ha consolidado como una especie estratégica para procesos de restauración ecológica y manejo sostenible del territorio, particularmente en la recuperación de rondas hídricas, estabilización de taludes y establecimiento de soluciones basadas en la naturaleza.",
    "slide-11/popup-r-1.mp3": "Protección de rondas hídricas.",
    "slide-11/popup-r-2.mp3": "Estabilización de suelos.",
    "slide-11/popup-r-3.mp3": "Control de erosión.",
    "slide-11/popup-r-4.mp3": "Captura y almacenamiento de carbono.",
    "slide-11/popup-r-5.mp3": "Hábitat para fauna y flora.",
    "slide-11/popup-r-6.mp3": "Conectividad ecológica.",
    "slide-12/titulo.mp3": "Importancia económica del bambú y guadua",
    "slide-12/general.mp3": "La importancia de la guadua no se limita a su papel ambiental. También posee un alto valor económico y productivo, siendo empleada tradicionalmente en vivienda rural, bioconstrucción, infraestructura, artesanías y elaboración de muebles. Actualmente, además, representa una oportunidad importante para iniciativas relacionadas con materiales sostenibles, innovación y bioeconomía.",
    "slide-13/titulo.mp3": "Importancia cultural y social del bambú y la guadua",
    "slide-13/general.mp3": "A lo anterior se suma un fuerte componente cultural y social. En distintas regiones del país, la guadua hace parte de la identidad territorial, de los conocimientos tradicionales y de prácticas constructivas transmitidas entre generaciones, especialmente en el paisaje cultural cafetero, donde ha contribuido históricamente a la configuración de viviendas y espacios rurales. \nEsto se reconoce explícitamente en el Artículo 12. Identidad cultural para el uso y manejo de la guadua y el bambú, de la Ley 2206 de 2022. Este artículo indica que, con el fin de crear conciencia educativa y cultural, se impulsarán los valores ambientales y productivos del paisaje rural y urbano colombiano, paisaje cultural cafetero de Colombia, al igual que de otras zonas donde se incentive el uso de la guadua y el bambú; de tal forma que se recuperen los saberes tradicionales, el conocimiento sobre su manejo y uso en la arquitectura rural y urbana, y en la prestación de servicios ecosistémicos. Contenidos que se deberán promover en las líneas educativas de los planes de desarrollo y en los diferentes niveles educativos.",
    "slide-13/popup-r-1.mp3": "Identidad cultural.",
    "slide-13/popup-r-2.mp3": "Arquitectura y patrimonio.",
    "slide-13/popup-r-3.mp3": "Cohesión social y organización.",
    "slide-13/popup-r-4.mp3": "Educación y conciencia.",
    "slide-13/popup-r-5.mp3": "Saberes tradicionales.",
    "slide-13/popup-r-6.mp3": "Servicios ecosistémicos y bienestar.",
    "slide-14/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! Las especies de guadua y bambú pueden ser empleadas en el sector de la construcción. a. Verdadero b. Falso",
    "slide-14/popup-q17-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje. Así es, la guadua y el bambú leñoso se justifican en la construcción gracias a sus excepcionales propiedades mecánicas. Al poseer una geometría tubular natural combinada con nudos intermedios y una alta densidad de fibras de lignina en su periferia, el material ofrece una excelente relación resistencia-peso. Es capaz de soportar grandes esfuerzos de tracción y flexión, lo que le ha valido el apelativo técnico de \"acero vegetal\" por su alta eficiencia estructural con un peso propio mínimo.\nDesde el punto de vista sísmico, su comportamiento es ideal para zonas de alta vulnerabilidad. Al ser estructuras considerablemente ligeras, las fuerzas de inercia que genera un terremoto sobre la edificación disminuyen drásticamente en comparación con el concreto o la mampostería. A esto se suma su notable elasticidad y capacidad de deformación, características que permiten a la estructura absorber y disipar la energía del movimiento telúrico sin sufrir un colapso frágil o inmediato.\nEn el ámbito ambiental, representa una alternativa de sostenibilidad radical frente a los materiales convencionales. Su ciclo de maduración estructural es sumamente rápido, requiriendo apenas entre 3 y 5 años para estar listo para el aprovechamiento, periodo en el cual captura y confina grandes volúmenes de dióxido de carbono. Además, los procesos de corte, curado e instalación demandan una cantidad mínima de energía incorporada, reduciendo drásticamente la huella de carbono general de la obra.\nFinalmente, su uso está plenamente respaldado por la ingeniería formal y la legislación actual. Lejos de ser un método empírico, el diseño con guadua está estandarizado en códigos sismorresistentes nacionales e internacionales, los cuales regulan sus esfuerzos admisibles. Gracias al desarrollo de conexiones técnicas modernas, como la inyección de mortero en los entrenudos, combinada con pernos de acero, se mitiga el riesgo de que se raje longitudinalmente, y se garantiza la seguridad estructural a largo plazo.",
    "slide-14/popup-q17-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-15/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! En Colombia los guaduales y bambusales hacen parte de la identidad cultural del país, especialmente en la región del eje cafetero. a. Verdadero b. Falso",
    "slide-15/popup-q19-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje. En Colombia, los guaduales y bambusales trascienden su valor ecológico para consolidarse como un pilar fundamental de la identidad cultural y el patrimonio colectivo de la nación, con un arraigo excepcional en la región del Eje Cafetero. En este territorio, declarado Patrimonio Mundial por la UNESCO, la guadua ha moldeado durante siglos el paisaje cultural, la economía local y la arquitectura tradicional a través de la técnica del bahareque, convirtiéndose en el símbolo vivo de la resiliencia, el ingenio y el saber hacer de sus comunidades.",
    "slide-15/popup-q19-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-16/titulo.mp3": "Subsección 3: tipos de productos derivados de la guadua y el bambú",
    "slide-16/general.mp3": "La versatilidad de la guadua y el bambú permite que estos recursos naturales sean aprovechados de manera integral para la obtención de una amplia variedad de productos con aplicaciones en la construcción, la industria, la artesanía y el diseño.\nCada parte del culmo posee características particulares que determinan sus posibles usos y procesos de transformación, desde productos primarios obtenidos directamente del material, hasta productos terminados con alto valor agregado. En esta subsección conocerás los principales productos derivados de la guadua y el bambú, así como su importancia para promover el aprovechamiento sostenible, la innovación y el desarrollo económico de los territorios.",
    "slide-17/titulo.mp3": "Estadios de desarrollo fisiológico",
    "slide-17/general.mp3": "Los culmos de la guadua y el bambú atraviesan diferentes estadios fisiológicos a lo largo de su ciclo de vida, cada uno con características morfológicas y funcionales que permiten identificar su grado de desarrollo y su aptitud para el aprovechamiento. \nReconocer estos estados es fundamental para implementar prácticas de manejo sostenible, ya que facilita la toma de decisiones sobre cuáles individuos deben conservarse para garantizar la regeneración natural del guadual o bambusal, y cuáles pueden ser aprovechados sin afectar su productividad y estabilidad ecológica. En este apartado conocerás las principales características de cada estadio, desde el renuevo hasta el culmo seco, así como su importancia para un manejo técnico y responsable del recurso.",
    "slide-17/popup-estadio-1.mp3": "01. Renuevo o rebrote.",
    "slide-17/popup-estadio-2.mp3": "02. Verde/juvenil o viche.",
    "slide-17/popup-estadio-3.mp3": "03. Maduro.",
    "slide-17/popup-estadio-4.mp3": "04. Sobremaduro.",
    "slide-17/popup-estadio-5.mp3": "05. Seco.",
    "slide-18/titulo.mp3": "Productos obtenidos del culmo: productos primarios",
    "slide-18/general.mp3": "El culmo de la guadua y el bambú constituye la materia prima principal para la obtención de una amplia variedad de productos y subproductos con aplicaciones en la construcción, la industria, la artesanía y el diseño. Dependiendo de la sección del culmo y del tipo de transformación que se realice, es posible obtener piezas con características específicas que optimizan su aprovechamiento y generan mayor valor agregado. Conocer la clasificación de estas secciones y sus posibilidades de transformación permite comprender el potencial productivo de la guadua y promover un uso eficiente, sostenible e integral del recurso. \nEl aprovechamiento debe estar ligado a una gestión forestal sostenible para evitar la sobreexplotación de los guaduales naturales, especialmente teniendo en cuenta que un porcentaje bajo cuenta con manejo adecuado según los datos expuestos.",
    "slide-19/titulo.mp3": "Otros productos potenciales",
    "slide-19/general.mp3": "Además de los productos obtenidos directamente del culmo, la guadua y el bambú están conformados por diferentes estructuras vegetativas que cumplen funciones esenciales para el crecimiento, la protección y la regeneración de la planta. Elementos como el rizoma, las hojas caulinares, las hojas de follaje, las ramas y las matambas desempeñan un papel fundamental en el desarrollo del guadual o bambusal y, en algunos casos, también poseen usos productivos. Conocer estas partes permite comprender la biología de la especie y aplicar prácticas de manejo sostenible que favorezcan su conservación y aprovechamiento integral.",
    "slide-20/titulo.mp3": "Productos obtenidos del culmo: productos secundarios",
    "slide-20/general.mp3": "El culmo de la guadua y el bambú constituye la materia prima principal para la obtención de una amplia variedad de productos y subproductos con aplicaciones en la construcción, la industria, la artesanía y el diseño. Dependiendo de la sección del culmo y del tipo de transformación que se realice, es posible obtener piezas con características específicas que optimizan su aprovechamiento y generan mayor valor agregado. Conocer la clasificación de estas secciones y sus posibilidades de transformación permite comprender el potencial productivo de la guadua y promover un uso eficiente, sostenible e integral del recurso.",
    "slide-21/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! Los productos primarios de guadua y bambú no han sido sometidos a ningún proceso de dimensionamiento. a. Verdadero b. Falso",
    "slide-21/popup-q27-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje. Esta afirmación es falsa porque confunde el concepto de transformación industrial avanzada con los procesos físicos esenciales de preparación en la etapa poscosecha. Los productos primarios de guadua y bambú, para poder ser comercializados y catalogados como material aprovechable, requieren obligatoriamente un proceso de dimensionamiento básico, el cual incluye el corte a longitudes comerciales específicas, el desramado, el despunte y, en muchos casos, el rajado longitudinal en listones o esteras. Además, estas piezas pasan por un riguroso dimensionamiento de selección por diámetros y espesores de pared según su uso final, desvirtuando por completo la idea de que el material se presenta en un estado bruto o inalterado tras su extracción del guadual.",
    "slide-21/popup-q27-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-22/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! De la guadua y bambú únicamente se puede aprovechar y elaborar productos a partir del culmo. a. Verdadero b. Falso",
    "slide-22/popup-q29-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje. Esta afirmación es falsa porque ignora el concepto de aprovechamiento integral de la planta, donde absolutamente todos sus componentes (órganos), y no solo el culmo, generan productos de alto valor. Desde una perspectiva biológica e industrial, el rizoma (raíz) se extrae y transforma en piezas artesanales de alta calidad, esculturas y mangos de herramientas debido a su alta densidad leñosa, mientras que las hojas se aprovechan en la industria farmacéutica y cosmética para la extracción de silicio orgánico, antioxidantes y la elaboración de tés medicinales. \nAdicionalmente, las ramas delgadas se procesan para fabricar pulpa de papel, carbón activo y biochar para el mejoramiento de suelos, e incluso los rebrotes tiernos o \"renuevos\" de varias especies de bambú (y ensayos con guadua) se cosechan para el consumo humano en la industria alimentaria, gracias a su alto contenido de fibra.",
    "slide-22/popup-q29-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-23/titulo.mp3": "Subsección 4: implementación de sistemas productivos y de restauración sostenible con especies de guadua y bambú en contextos locales",
    "slide-23/general.mp3": "Hasta este punto has conocido las características biológicas de la guadua y el bambú, sus estadios de desarrollo y las posibilidades de aprovechamiento de sus diferentes partes. Ahora es momento de comprender cómo este conocimiento se lleva a la práctica mediante la implementación de sistemas productivos y de restauración sostenible en contextos locales. En esta subsección explorarás los principios, criterios y estrategias para establecer y manejar plantaciones, así como acciones de restauración que contribuyan a la conservación de los ecosistemas, al fortalecimiento de las economías locales y al uso sostenible de estos valiosos recursos naturales.",
    "slide-24/titulo.mp3": "Sistemas productivos",
    "slide-24/general.mp3": "La implementación de especies de guadua y bambú en contextos locales puede realizarse de múltiples maneras, dependiendo de las características biofísicas del territorio, las necesidades de las comunidades y los objetivos de manejo que se busquen alcanzar. Más que modelos únicos, se trata de soluciones flexibles capaces de integrar producción, restauración y sostenibilidad.",
    "slide-25/titulo.mp3": "Sistemas productivos: arreglos silvopastoriles",
    "slide-26/titulo.mp3": "Sistemas productivos: sistemas agroforestales",
    "slide-26/general.mp3": "Un sistema agroforestal, donde cultivos agrícolas como café, cacao, plátano u otras especies pueden integrarse con bambú o guadua. \nEstos arreglos permiten diversificar la producción, mejorar las condiciones microclimáticas del sistema, favorecer la conservación del suelo y generar oportunidades futuras de aprovechamiento de productos derivados del bambú. Además, aumentan la resiliencia productiva frente a variaciones climáticas y económicas.\nFinalmente, hacia la parte derecha observamos un sistema multipropósito comunitario, en el cual la guadua y el bambú se articulan con viveros, procesos de transformación artesanal y usos locales del material vegetal. Este tipo de iniciativas puede fortalecer capacidades comunitarias, promover el uso sostenible de la biodiversidad y generar alternativas económicas vinculadas a la construcción, artesanías, restauración ecológica y producción local.\nEn conjunto, estos ejemplos muestran que la implementación de sistemas con guadua y bambú no responde a un modelo estandarizado. Su éxito depende de reconocer las condiciones ecológicas del territorio, los conocimientos locales y las necesidades de quienes habitan el paisaje.",
    "slide-27/titulo.mp3": "Sistemas productivos: sistemas multipropósito comunitarios",
    "slide-27/general.mp3": "Estos tres ejemplos muestran que la implementación de sistemas con guadua y bambú no responde a un modelo estandarizado. Su éxito depende del reconocimiento de las condiciones ecológicas del territorio, de los conocimientos locales y de las necesidades de quienes habitan el paisaje.",
    "slide-28/titulo.mp3": "Sistemas de restauración",
    "slide-28/general.mp3": "La restauración ecológica no consiste únicamente en sembrar especies vegetales. Restaurar significa recuperar funciones ecológicas, mejorar la conectividad entre ecosistemas y fortalecer la relación entre el suelo, el agua y la biodiversidad en el territorio.",
    "slide-28/popup-etapa-1.mp3": "Un fragmento de guadual y bambusal categoría 1 representa un ecosistema natural que aún conserva biodiversidad, hábitats y procesos ecológicos importantes. Sin embargo, muchos paisajes rurales presentan zonas transformadas o fragmentadas debido a procesos de intervención humana.",
    "slide-28/popup-etapa-2.mp3": "Un área degradada es aquella en la que la pérdida de cobertura vegetal, la erosión o la alteración del suelo han reducido la capacidad del ecosistema para mantener sus funciones naturales. Frente a estas condiciones, la restauración ecológica busca recuperar gradualmente la estabilidad del paisaje.",
    "slide-28/popup-etapa-3.mp3": "Un corredor con guadua y bambú puede facilitar la recuperación de áreas degradadas gracias a su rápido crecimiento, su capacidad de regeneración y su aporte a la estabilización del suelo. Además, estos corredores contribuyen a reconectar fragmentos de ecosistemas previamente aislados.",
    "slide-28/popup-etapa-4.mp3": "Una ronda hídrica restaurada, donde la vegetación protege las quebradas y los cuerpos de agua, favorece la regulación hídrica y contribuye a reducir los procesos erosivos.",
    "slide-28/popup-etapa-5.mp3": "Finalmente, se llega a un ecosistema conectado, donde nuevamente es posible el movimiento de fauna, la dispersión de semillas y la recuperación progresiva de funciones ecológicas esenciales para la resiliencia del paisaje. En este contexto, la guadua y el bambú pueden desempeñar un papel importante como especies facilitadoras de la restauración, especialmente cuando su implementación responde a las características ecológicas del territorio y a las necesidades locales.",
    "slide-29/titulo.mp3": "Pon a prueba tus conocimientos. ¡Selecciona la respuesta correcta! La guadua y el bambú no pueden ser empleados en sistemas productivos y de restauración. a. Verdadero b. Falso",
    "slide-29/popup-q38-ok.mp3": "¡Acertaste! Estás construyendo muy bien tu aprendizaje. Esta afirmación es falsa porque ignora que la guadua y el bambú son herramientas de vanguardia para la recuperación ecológica y el desarrollo rural sostenible. En el ámbito de la restauración, su denso sistema de rizomas entrelazados funciona como una red subterránea inigualable para la estabilización de laderas, el control de la erosión y la protección de cuencas hidrográficas, regulando el ciclo hídrico al actuar como \"esponjas naturales\". \nParalelamente, en el entorno productivo, su altísima tasa de crecimiento y capacidad de rebrote continuo permiten un aprovechamiento forestal selectivo y anual sin necesidad de deforestar, convirtiéndolos en un sumidero de carbono altamente eficiente que se integra con éxito en sistemas agroforestales que generan ingresos estables mientras recuperan suelos degradados.",
    "slide-29/popup-q38-mal.mp3": "Es incorrecto, puedes intentarlo de nuevo.",
    "slide-30/titulo.mp3": "Conclusiones",
    "slide-31/titulo.mp3": "Bibliografía.",
    "slide-32/titulo.mp3": "Bibliografía.",
    "slide-33/titulo.mp3": "¡Felicitaciones! Finalizaste los contenidos del Módulo 1 con éxito."
  },
  "subtitulos": {
    "slide-01/titulo.mp3": {
      "d": 4.75,
      "c": [
        [
          0.0,
          1.32,
          "Módulo 1."
        ],
        [
          1.33,
          4.75,
          "Introducción a los ecosistemas de guadua y bambú."
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
          "Tabla de contenido."
        ]
      ]
    },
    "slide-04/titulo.mp3": {
      "d": 5.07,
      "c": [
        [
          0.0,
          5.07,
          "Subsección 1: diversidad y especies de bambúes en Colombia"
        ]
      ]
    },
    "slide-04/general.mp3": {
      "d": 50.29,
      "c": [
        [
          0.0,
          4.67,
          "Colombia es uno de los países con mayor diversidad de bambúes en el mundo,"
        ],
        [
          4.62,
          10.700000000000001,
          "albergando numerosas especies distribuidas en diferentes ecosistemas y regiones."
        ],
        [
          10.71,
          16.3,
          "Entre ellas, la guadua ocupa un lugar destacado por su importancia ecológica, económica y cultural,"
        ],
        [
          16.25,
          23.13,
          "aunque existen muchas otras especies que cumplen funciones clave en la conservación de la biodiversidad y el"
        ],
        [
          23.08,
          26.75,
          "desarrollo de actividades productivas."
        ],
        [
          26.76,
          33.18,
          "Conocer esta diversidad, sus características y su distribución permite comprender el enorme potencial de"
        ],
        [
          33.13,
          37.46,
          "estos recursos para el manejo sostenible de los paisajes,"
        ],
        [
          37.47,
          42.830000000000005,
          "la restauración de ecosistemas y el fortalecimiento de las economías locales."
        ],
        [
          42.84,
          49.17,
          "En esta subsección se exploran las principales especies de bambú presentes en Colombia y su relevancia para"
        ],
        [
          49.12,
          50.08,
          "el país."
        ]
      ]
    },
    "slide-05/titulo.mp3": {
      "d": 3.32,
      "c": [
        [
          0.0,
          3.11,
          "Diversidad y especies de bambúes en Colombia"
        ]
      ]
    },
    "slide-05/general.mp3": {
      "d": 60.03,
      "c": [
        [
          0.0,
          6.92,
          "Los bambúes corresponden a un grupo especializado de gramíneas pertenecientes a la familia Poaceae y a la"
        ],
        [
          6.87,
          9.3,
          "subfamilia Bambusoideae."
        ],
        [
          9.31,
          13.11,
          "Se caracterizan por presentar tallos segmentados o culmos,"
        ],
        [
          13.12,
          18.389999999999997,
          "un rápido crecimiento y alta capacidad de regeneración vegetativa."
        ],
        [
          18.4,
          22.91,
          "Aunque frecuentemente son asociados con árboles o arbustos,"
        ],
        [
          22.86,
          26.95,
          "taxonómicamente corresponden a pastos leñosos o herbáceos,"
        ],
        [
          26.9,
          31.08,
          "adaptados a diferentes condiciones ecológicas y climáticas."
        ],
        [
          31.09,
          37.2,
          "A nivel general, los bambúes se clasifican en bambúes leñosos y bambúes herbáceos,"
        ],
        [
          37.15,
          44.09,
          "siendo los primeros los de mayor importancia estructural y productiva debido a sus culmos lignificados."
        ],
        [
          44.1,
          49.82,
          "En Colombia, la especie más conocida es la guadua Guadua angustifolia Kunth,"
        ],
        [
          49.77,
          55.120000000000005,
          "considerada uno de los bambúes estructuralmente más importantes del neotrópico,"
        ],
        [
          55.13,
          59.79,
          "aunque el país alberga una alta diversidad de géneros y especies."
        ]
      ]
    },
    "slide-06/titulo.mp3": {
      "d": 1.96,
      "c": [
        [
          0.0,
          1.73,
          "Distribución en Colombia"
        ]
      ]
    },
    "slide-06/general.mp3": {
      "d": 66.27,
      "c": [
        [
          0.0,
          6.17,
          "Colombia es considerada uno de los países con mayor diversidad de bambúes en América Latina,"
        ],
        [
          6.12,
          11.02,
          "favorecida por su heterogeneidad climática, altitudinal y ecosistémica."
        ],
        [
          11.03,
          15.85,
          "Se estima la presencia de aproximadamente 80 especies nativas,"
        ],
        [
          15.8,
          23.459999999999997,
          "agrupadas en 8 géneros distribuidos desde bosques húmedos tropicales hasta ecosistemas altoandinos y de"
        ],
        [
          23.47,
          30.889999999999997,
          "páramo, de las cuales 24 especies son endémicas y al menos 12 especies quedan por describirse."
        ],
        [
          30.9,
          38.36,
          "Entre los géneros más representativos se encuentran Guadua, predominante en zonas andinas y subandinas;"
        ],
        [
          38.37,
          45.82,
          "Chusquea, asociada a bosques montanos, bosques de niebla y páramos; así como Rhipidocladum,"
        ],
        [
          45.83,
          51.61,
          "Aulonemia y Arthrostylidium, presentes en ecosistemas tropicales y montanos."
        ],
        [
          51.62,
          59.330000000000005,
          "La distribución de estas especies responde a variables como altitud, precipitación, humedad y tipo de suelo,"
        ],
        [
          59.34,
          66.07,
          "permitiendo funciones relevantes en protección hídrica, conectividad ecológica y estabilidad del paisaje."
        ]
      ]
    },
    "slide-06/popup-mapa-distribucion.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          3.08,
          "Mapa de distribución de la guadua en Colombia."
        ]
      ]
    },
    "slide-07/titulo.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.88,
          "Los guaduales y bambusales como cobertura"
        ]
      ]
    },
    "slide-07/general.mp3": {
      "d": 121.81,
      "c": [
        [
          0.0,
          5.84,
          "Históricamente, los guaduales han sido incorporados dentro de categorías amplias de bosque,"
        ],
        [
          5.79,
          8.76,
          "en clasificaciones de coberturas vegetales,"
        ],
        [
          8.71,
          16.479999999999997,
          "donde la guadua aparece incluida dentro del bosque denso cuando presenta determinadas condiciones de altura y"
        ],
        [
          16.49,
          17.529999999999998,
          "extensión."
        ],
        [
          17.54,
          23.04,
          "Sin embargo, esta aproximación, aunque funcional para ciertos ejercicios cartográficos,"
        ],
        [
          22.99,
          29.669999999999998,
          "ha limitado la comprensión precisa sobre su verdadera distribución, estado y dinámica en el territorio."
        ],
        [
          29.68,
          34.32,
          "Hoy existe una necesidad urgente de avanzar en la identificación,"
        ],
        [
          34.33,
          39.57,
          "delimitación y registro diferenciado de los guaduales en Colombia,"
        ],
        [
          39.52,
          44.26,
          "reconociéndolos como formaciones vegetales con características ecológicas,"
        ],
        [
          44.21,
          49.4,
          "productivas y funcionales particulares, distintas a otros tipos de bosque."
        ],
        [
          49.41,
          55.03,
          "Conocer dónde están los guaduales, cuál es su extensión, estado de conservación,"
        ],
        [
          55.04,
          62.370000000000005,
          "conectividad y potencial de manejo resulta fundamental para orientar decisiones relacionadas con la"
        ],
        [
          62.38,
          69.25999999999999,
          "conservación, restauración, el ordenamiento territorial, adaptación al cambio climático,"
        ],
        [
          69.27,
          71.77,
          "desarrollo rural y sostenibilidad productiva."
        ],
        [
          71.78,
          77.05999999999999,
          "La diferenciación de los guaduales también permite fortalecer los procesos de monitoreo,"
        ],
        [
          77.07,
          84.7,
          "planificación y gobernanza, facilitando la formulación de estrategias específicas para su manejo sostenible,"
        ],
        [
          84.65,
          90.47999999999999,
          "y evitando que permanezcan invisibilizados dentro de categorías generales de cobertura."
        ],
        [
          90.49,
          97.38,
          "En este contexto, el Ministerio de Ambiente y Desarrollo Sostenible y el Ministerio de Agricultura y"
        ],
        [
          97.39,
          101.69,
          "Desarrollo Rural, junto con entidades adscritas a ambos sectores,"
        ],
        [
          101.64,
          108.05,
          "vienen avanzando en iniciativas orientadas al registro y reconocimiento de los guaduales en el país,"
        ],
        [
          108.0,
          113.14,
          "con el propósito de consolidar información más precisa sobre su localización y distribución,"
        ],
        [
          113.15,
          120.61,
          "y así fortalecer la toma de decisiones técnicas e institucionales alrededor de esta especie estratégica para"
        ],
        [
          120.56,
          121.59,
          "Colombia."
        ]
      ]
    },
    "slide-07/popup-ver-mas-cobertura.mp3": {
      "d": 1.41,
      "c": [
        [
          0.0,
          1.2,
          "Bosque denso."
        ]
      ]
    },
    "slide-08/titulo.mp3": {
      "d": 12.43,
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
          8.96,
          "En Colombia solo existe una especie de guadua y bambú."
        ],
        [
          8.97,
          10.82,
          "a. Verdadero"
        ],
        [
          10.83,
          12.18,
          "b. Falso"
        ]
      ]
    },
    "slide-08/popup-q9-ok.mp3": {
      "d": 14.37,
      "c": [
        [
          0.0,
          1.18,
          "¡Acertaste!"
        ],
        [
          1.13,
          4.25,
          "Estás construyendo muy bien tu aprendizaje."
        ],
        [
          4.26,
          9.68,
          "Efectivamente en Colombia hay más de 80 especies de guadua y bambú,"
        ],
        [
          9.69,
          14.15,
          "pero la más reconocida es la guadua (Guadua angustifolia)."
        ]
      ]
    },
    "slide-08/popup-q9-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-09/titulo.mp3": {
      "d": 13.01,
      "c": [
        [
          0.0,
          2.0100000000000002,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.02,
          4.42,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.43,
          9.5,
          "El bambú y la guadua hacen parte de la misma familia que la caña de azúcar."
        ],
        [
          9.51,
          11.33,
          "a. Verdadero"
        ],
        [
          11.34,
          12.72,
          "b. Falso"
        ]
      ]
    },
    "slide-09/popup-q11-ok.mp3": {
      "d": 36.13,
      "c": [
        [
          0.0,
          1.17,
          "¡Acertaste!"
        ],
        [
          1.18,
          4.680000000000001,
          "Estás construyendo muy bien tu aprendizaje."
        ],
        [
          4.69,
          11.46,
          "Efectivamente, aunque la guadua (y los bambúes en general) y la caña de azúcar comparten el mismo origen"
        ],
        [
          11.41,
          18.75,
          "familiar en las gramíneas (Poaceae), evolutivamente tomaron caminos morfológicos y fisiológicos completamente"
        ],
        [
          18.7,
          20.93,
          "opuestos."
        ],
        [
          20.94,
          26.95,
          "La gran diferencia radica en que los bambúes desarrollaron una estrategia de persistencia estructural basada"
        ],
        [
          26.9,
          33.63,
          "en la lignificación, mientras que la caña de azúcar se especializó en el almacenamiento metabólico de"
        ],
        [
          33.58,
          36.13,
          "carbohidratos en tejidos blandos."
        ]
      ]
    },
    "slide-09/popup-q11-mal.mp3": {
      "d": 3.0,
      "c": [
        [
          0.0,
          3.0,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-10/titulo.mp3": {
      "d": 6.11,
      "c": [
        [
          0.0,
          5.9,
          "Subsección 2: importancia ecológica, económica, cultural y social"
        ]
      ]
    },
    "slide-10/general.mp3": {
      "d": 56.27,
      "c": [
        [
          0.0,
          6.28,
          "Los ecosistemas de guadua y bambú desempeñan un papel fundamental en el equilibrio ambiental y en el"
        ],
        [
          6.23,
          9.8,
          "desarrollo sostenible de numerosos territorios."
        ],
        [
          9.81,
          16.77,
          "Además de contribuir a la conservación de la biodiversidad, la protección del suelo y del recurso hídrico,"
        ],
        [
          16.72,
          21.74,
          "estas especies representan una importante fuente de ingresos,"
        ],
        [
          21.75,
          26.59,
          "empleo y bienestar para las comunidades que dependen de su manejo y aprovechamiento."
        ],
        [
          26.6,
          33.44,
          "Su estrecha relación con las tradiciones culturales, las prácticas constructivas y las economías locales,"
        ],
        [
          33.39,
          37.95,
          "las convierten en un recurso estratégico con múltiples beneficios."
        ],
        [
          37.96,
          45.65,
          "En esta subsección conocerás la importancia ecológica, económica, cultural y social de la guadua y el bambú,"
        ],
        [
          45.66,
          51.91,
          "comprendiendo por qué su conservación y manejo sostenible son esenciales para el desarrollo de los"
        ],
        [
          51.86,
          56.27,
          "territorios y el bienestar de las generaciones presentes y futuras."
        ]
      ]
    },
    "slide-11/titulo.mp3": {
      "d": 3.16,
      "c": [
        [
          0.0,
          3.16,
          "Importancia ecológica del bambú y guadua"
        ]
      ]
    },
    "slide-11/general.mp3": {
      "d": 100.28,
      "c": [
        [
          0.0,
          6.62,
          "Cuando hablamos de guadua en Colombia, no estamos hablando solamente de una planta o de un material de"
        ],
        [
          6.63,
          11.93,
          "construcción; estamos hablando de una especie profundamente conectada con la historia,"
        ],
        [
          11.88,
          15.41,
          "los paisajes y los medios de vida rurales del país."
        ],
        [
          15.42,
          23.31,
          "La guadua, Guadua angustifolia Kunth, es considerada una de las especies de bambú de mayor relevancia"
        ],
        [
          23.32,
          26.709999999999997,
          "ecológica, económica y cultural en América Latina."
        ],
        [
          26.72,
          33.02,
          "En Colombia, su distribución natural se concentra principalmente en la región Andina y subandina,"
        ],
        [
          33.03,
          41.71,
          "especialmente en territorios como el Eje Cafetero, el Valle del Cauca, Tolima, Huila, Antioquia y Santander,"
        ],
        [
          41.72,
          45.58,
          "donde históricamente ha formado parte de sistemas productivos locales,"
        ],
        [
          45.53,
          50.79,
          "prácticas constructivas tradicionales y dinámicas comunitarias."
        ],
        [
          50.8,
          56.62,
          "Desde una perspectiva ecológica, los guaduales cumplen funciones fundamentales para el equilibrio de los"
        ],
        [
          56.57,
          58.18,
          "ecosistemas."
        ],
        [
          58.19,
          61.940000000000005,
          "Contribuyen a la protección de rondas hídricas y quebradas,"
        ],
        [
          61.95,
          66.51,
          "favorecen la estabilización de suelos en zonas de pendiente,"
        ],
        [
          66.46,
          71.86999999999999,
          "ayudan a disminuir procesos erosivos y aportan a la captura y almacenamiento de carbono."
        ],
        [
          71.88,
          77.8,
          "Asimismo, constituyen hábitats importantes para múltiples especies de fauna y flora,"
        ],
        [
          77.81,
          81.61999999999999,
          "favoreciendo la conectividad ecológica de los paisajes."
        ],
        [
          81.63,
          89.06,
          "Finalmente, la guadua se ha consolidado como una especie estratégica para procesos de restauración ecológica"
        ],
        [
          89.01,
          94.85,
          "y manejo sostenible del territorio, particularmente en la recuperación de rondas hídricas,"
        ],
        [
          94.8,
          100.05,
          "estabilización de taludes y establecimiento de soluciones basadas en la naturaleza."
        ]
      ]
    },
    "slide-11/popup-r-1.mp3": {
      "d": 2.35,
      "c": [
        [
          0.0,
          2.35,
          "Protección de rondas hídricas."
        ]
      ]
    },
    "slide-11/popup-r-2.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          1.84,
          "Estabilización de suelos."
        ]
      ]
    },
    "slide-11/popup-r-3.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          1.47,
          "Control de erosión."
        ]
      ]
    },
    "slide-11/popup-r-4.mp3": {
      "d": 2.59,
      "c": [
        [
          0.0,
          2.4,
          "Captura y almacenamiento de carbono."
        ]
      ]
    },
    "slide-11/popup-r-5.mp3": {
      "d": 2.27,
      "c": [
        [
          0.0,
          2.07,
          "Hábitat para fauna y flora."
        ]
      ]
    },
    "slide-11/popup-r-6.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Conectividad ecológica."
        ]
      ]
    },
    "slide-12/titulo.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          3.08,
          "Importancia económica del bambú y guadua"
        ]
      ]
    },
    "slide-12/general.mp3": {
      "d": 26.75,
      "c": [
        [
          0.0,
          3.8600000000000003,
          "La importancia de la guadua no se limita a su papel ambiental."
        ],
        [
          3.87,
          11.28,
          "También posee un alto valor económico y productivo, siendo empleada tradicionalmente en vivienda rural,"
        ],
        [
          11.29,
          16.919999999999998,
          "bioconstrucción, infraestructura, artesanías y elaboración de muebles."
        ],
        [
          16.93,
          24.01,
          "Actualmente, además, representa una oportunidad importante para iniciativas relacionadas con materiales"
        ],
        [
          23.96,
          26.75,
          "sostenibles, innovación y bioeconomía."
        ]
      ]
    },
    "slide-13/titulo.mp3": {
      "d": 3.87,
      "c": [
        [
          0.0,
          3.87,
          "Importancia cultural y social del bambú y la guadua"
        ]
      ]
    },
    "slide-13/general.mp3": {
      "d": 72.99,
      "c": [
        [
          0.0,
          4.38,
          "A lo anterior se suma un fuerte componente cultural y social."
        ],
        [
          4.39,
          9.68,
          "En distintas regiones del país, la guadua hace parte de la identidad territorial,"
        ],
        [
          9.69,
          15.48,
          "de los conocimientos tradicionales y de prácticas constructivas transmitidas entre generaciones,"
        ],
        [
          15.49,
          18.66,
          "especialmente en el paisaje cultural cafetero,"
        ],
        [
          18.67,
          24.509999999999998,
          "donde ha contribuido históricamente a la configuración de viviendas y espacios rurales."
        ],
        [
          24.52,
          28.439999999999998,
          "Esto se reconoce explícitamente en el Artículo 12."
        ],
        [
          28.45,
          36.2,
          "Identidad cultural para el uso y manejo de la guadua y el bambú, de la Ley 2206 de 2022."
        ],
        [
          36.21,
          39.79,
          "Este artículo indica que, con el fin de crear conciencia educativa y cultural,"
        ],
        [
          39.74,
          45.42,
          "se impulsarán los valores ambientales y productivos del paisaje rural y urbano colombiano,"
        ],
        [
          45.37,
          52.02,
          "paisaje cultural cafetero de Colombia, al igual que de otras zonas donde se incentive el uso de la guadua y"
        ],
        [
          51.97,
          57.92,
          "el bambú; de tal forma que se recuperen los saberes tradicionales,"
        ],
        [
          57.93,
          61.34,
          "el conocimiento sobre su manejo y uso en la arquitectura rural y urbana,"
        ],
        [
          61.29,
          65.64999999999999,
          "y en la prestación de servicios ecosistémicos."
        ],
        [
          65.66,
          71.28,
          "Contenidos que se deberán promover en las líneas educativas de los planes de desarrollo y en los diferentes"
        ],
        [
          71.23,
          72.78,
          "niveles educativos."
        ]
      ]
    },
    "slide-13/popup-r-1.mp3": {
      "d": 1.65,
      "c": [
        [
          0.0,
          1.42,
          "Identidad cultural."
        ]
      ]
    },
    "slide-13/popup-r-2.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Arquitectura y patrimonio."
        ]
      ]
    },
    "slide-13/popup-r-3.mp3": {
      "d": 2.51,
      "c": [
        [
          0.0,
          2.29,
          "Cohesión social y organización."
        ]
      ]
    },
    "slide-13/popup-r-4.mp3": {
      "d": 2.04,
      "c": [
        [
          0.0,
          2.04,
          "Educación y conciencia."
        ]
      ]
    },
    "slide-13/popup-r-5.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.67,
          "Saberes tradicionales."
        ]
      ]
    },
    "slide-13/popup-r-6.mp3": {
      "d": 2.77,
      "c": [
        [
          0.0,
          2.77,
          "Servicios ecosistémicos y bienestar."
        ]
      ]
    },
    "slide-14/titulo.mp3": {
      "d": 13.64,
      "c": [
        [
          0.0,
          2.12,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.13,
          4.5,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.51,
          10.19,
          "Las especies de guadua y bambú pueden ser empleadas en el sector de la construcción."
        ],
        [
          10.2,
          12.03,
          "a. Verdadero"
        ],
        [
          12.04,
          13.38,
          "b. Falso"
        ]
      ]
    },
    "slide-14/popup-q17-ok.mp3": {
      "d": 139.73,
      "c": [
        [
          0.0,
          1.14,
          "¡Acertaste!"
        ],
        [
          1.15,
          4.51,
          "Estás construyendo muy bien tu aprendizaje."
        ],
        [
          4.52,
          11.35,
          "Así es, la guadua y el bambú leñoso se justifican en la construcción gracias a sus excepcionales propiedades"
        ],
        [
          11.3,
          12.76,
          "mecánicas."
        ],
        [
          12.77,
          19.23,
          "Al poseer una geometría tubular natural combinada con nudos intermedios y una alta densidad de fibras de"
        ],
        [
          19.18,
          25.889999999999997,
          "lignina en su periferia, el material ofrece una excelente relación resistencia-peso."
        ],
        [
          25.9,
          29.54,
          "Es capaz de soportar grandes esfuerzos de tracción y flexión,"
        ],
        [
          29.55,
          35.64,
          "lo que le ha valido el apelativo técnico de \"acero vegetal\" por su alta eficiencia estructural con un peso"
        ],
        [
          35.65,
          38.0,
          "propio mínimo."
        ],
        [
          38.01,
          44.35,
          "Desde el punto de vista sísmico, su comportamiento es ideal para zonas de alta vulnerabilidad."
        ],
        [
          44.36,
          47.13,
          "Al ser estructuras considerablemente ligeras,"
        ],
        [
          47.14,
          54.0,
          "las fuerzas de inercia que genera un terremoto sobre la edificación disminuyen drásticamente en comparación"
        ],
        [
          53.95,
          56.59,
          "con el concreto o la mampostería."
        ],
        [
          56.6,
          60.85,
          "A esto se suma su notable elasticidad y capacidad de deformación,"
        ],
        [
          60.86,
          67.95,
          "características que permiten a la estructura absorber y disipar la energía del movimiento telúrico sin sufrir"
        ],
        [
          67.9,
          70.78,
          "un colapso frágil o inmediato."
        ],
        [
          70.79,
          77.29,
          "En el ámbito ambiental, representa una alternativa de sostenibilidad radical frente a los materiales"
        ],
        [
          77.24,
          78.25999999999999,
          "convencionales."
        ],
        [
          78.27,
          82.75,
          "Su ciclo de maduración estructural es sumamente rápido,"
        ],
        [
          82.7,
          87.27,
          "requiriendo apenas entre 3 y 5 años para estar listo para el aprovechamiento,"
        ],
        [
          87.28,
          92.83,
          "periodo en el cual captura y confina grandes volúmenes de dióxido de carbono."
        ],
        [
          92.84,
          100.30999999999999,
          "Además, los procesos de corte, curado e instalación demandan una cantidad mínima de energía incorporada,"
        ],
        [
          100.32,
          105.44,
          "reduciendo drásticamente la huella de carbono general de la obra."
        ],
        [
          105.45,
          112.28,
          "Finalmente, su uso está plenamente respaldado por la ingeniería formal y la legislación actual."
        ],
        [
          112.29,
          117.92,
          "Lejos de ser un método empírico, el diseño con guadua está estandarizado en códigos sismorresistentes"
        ],
        [
          117.87,
          124.53,
          "nacionales e internacionales, los cuales regulan sus esfuerzos admisibles."
        ],
        [
          124.54,
          130.48000000000002,
          "Gracias al desarrollo de conexiones técnicas modernas, como la inyección de mortero en los entrenudos,"
        ],
        [
          130.49,
          135.78,
          "combinada con pernos de acero, se mitiga el riesgo de que se raje longitudinalmente,"
        ],
        [
          135.79,
          139.44,
          "y se garantiza la seguridad estructural a largo plazo."
        ]
      ]
    },
    "slide-14/popup-q17-mal.mp3": {
      "d": 2.93,
      "c": [
        [
          0.0,
          2.93,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-15/titulo.mp3": {
      "d": 17.55,
      "c": [
        [
          0.0,
          2.02,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.03,
          4.5200000000000005,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.53,
          10.46,
          "En Colombia los guaduales y bambusales hacen parte de la identidad cultural del país,"
        ],
        [
          10.47,
          14.03,
          "especialmente en la región del eje cafetero."
        ],
        [
          14.04,
          15.94,
          "a. Verdadero"
        ],
        [
          15.95,
          17.34,
          "b. Falso"
        ]
      ]
    },
    "slide-15/popup-q19-ok.mp3": {
      "d": 40.99,
      "c": [
        [
          0.0,
          1.11,
          "¡Acertaste!"
        ],
        [
          1.06,
          4.59,
          "Estás construyendo muy bien tu aprendizaje."
        ],
        [
          4.6,
          11.21,
          "En Colombia, los guaduales y bambusales trascienden su valor ecológico para consolidarse como un pilar"
        ],
        [
          11.16,
          16.08,
          "fundamental de la identidad cultural y el patrimonio colectivo de la nación,"
        ],
        [
          16.09,
          20.33,
          "con un arraigo excepcional en la región del Eje Cafetero."
        ],
        [
          20.34,
          24.72,
          "En este territorio, declarado Patrimonio Mundial por la UNESCO,"
        ],
        [
          24.67,
          28.349999999999998,
          "la guadua ha moldeado durante siglos el paisaje cultural,"
        ],
        [
          28.36,
          33.81,
          "la economía local y la arquitectura tradicional a través de la técnica del bahareque,"
        ],
        [
          33.82,
          40.78,
          "convirtiéndose en el símbolo vivo de la resiliencia, el ingenio y el saber hacer de sus comunidades."
        ]
      ]
    },
    "slide-15/popup-q19-mal.mp3": {
      "d": 3.0,
      "c": [
        [
          0.0,
          2.74,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-16/titulo.mp3": {
      "d": 4.99,
      "c": [
        [
          0.0,
          4.99,
          "Subsección 3: tipos de productos derivados de la guadua y el bambú"
        ]
      ]
    },
    "slide-16/general.mp3": {
      "d": 45.71,
      "c": [
        [
          0.0,
          6.32,
          "La versatilidad de la guadua y el bambú permite que estos recursos naturales sean aprovechados de manera"
        ],
        [
          6.27,
          13.03,
          "integral para la obtención de una amplia variedad de productos con aplicaciones en la construcción,"
        ],
        [
          13.04,
          16.59,
          "la industria, la artesanía y el diseño."
        ],
        [
          16.6,
          22.32,
          "Cada parte del culmo posee características particulares que determinan sus posibles usos y procesos de"
        ],
        [
          22.27,
          27.36,
          "transformación, desde productos primarios obtenidos directamente del material,"
        ],
        [
          27.31,
          31.869999999999997,
          "hasta productos terminados con alto valor agregado."
        ],
        [
          31.88,
          37.410000000000004,
          "En esta subsección conocerás los principales productos derivados de la guadua y el bambú,"
        ],
        [
          37.42,
          41.84,
          "así como su importancia para promover el aprovechamiento sostenible,"
        ],
        [
          41.85,
          45.49,
          "la innovación y el desarrollo económico de los territorios."
        ]
      ]
    },
    "slide-17/titulo.mp3": {
      "d": 2.51,
      "c": [
        [
          0.0,
          2.51,
          "Estadios de desarrollo fisiológico"
        ]
      ]
    },
    "slide-17/general.mp3": {
      "d": 49.63,
      "c": [
        [
          0.0,
          7.0200000000000005,
          "Los culmos de la guadua y el bambú atraviesan diferentes estadios fisiológicos a lo largo de su ciclo de vida,"
        ],
        [
          7.03,
          13.66,
          "cada uno con características morfológicas y funcionales que permiten identificar su grado de desarrollo y su"
        ],
        [
          13.61,
          16.24,
          "aptitud para el aprovechamiento."
        ],
        [
          16.25,
          21.529999999999998,
          "Reconocer estos estados es fundamental para implementar prácticas de manejo sostenible,"
        ],
        [
          21.54,
          27.96,
          "ya que facilita la toma de decisiones sobre cuáles individuos deben conservarse para garantizar la"
        ],
        [
          27.91,
          31.4,
          "regeneración natural del guadual o bambusal,"
        ],
        [
          31.41,
          37.29,
          "y cuáles pueden ser aprovechados sin afectar su productividad y estabilidad ecológica."
        ],
        [
          37.3,
          41.870000000000005,
          "En este apartado conocerás las principales características de cada estadio,"
        ],
        [
          41.88,
          48.52,
          "desde el renuevo hasta el culmo seco, así como su importancia para un manejo técnico y responsable del"
        ],
        [
          48.47,
          49.42,
          "recurso."
        ]
      ]
    },
    "slide-17/popup-estadio-1.mp3": {
      "d": 2.69,
      "c": [
        [
          0.0,
          0.77,
          "01."
        ],
        [
          0.78,
          2.45,
          "Renuevo o rebrote."
        ]
      ]
    },
    "slide-17/popup-estadio-2.mp3": {
      "d": 3.4,
      "c": [
        [
          0.0,
          0.9299999999999999,
          "02."
        ],
        [
          0.94,
          3.19,
          "Verde/juvenil o viche."
        ]
      ]
    },
    "slide-17/popup-estadio-3.mp3": {
      "d": 1.72,
      "c": [
        [
          0.0,
          0.86,
          "03."
        ],
        [
          0.87,
          1.52,
          "Maduro."
        ]
      ]
    },
    "slide-17/popup-estadio-4.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          0.86,
          "04."
        ],
        [
          0.87,
          1.89,
          "Sobremaduro."
        ]
      ]
    },
    "slide-17/popup-estadio-5.mp3": {
      "d": 1.88,
      "c": [
        [
          0.0,
          1.02,
          "05."
        ],
        [
          1.03,
          1.65,
          "Seco."
        ]
      ]
    },
    "slide-18/titulo.mp3": {
      "d": 3.79,
      "c": [
        [
          0.0,
          3.58,
          "Productos obtenidos del culmo: productos primarios"
        ]
      ]
    },
    "slide-18/general.mp3": {
      "d": 56.53,
      "c": [
        [
          0.0,
          6.29,
          "El culmo de la guadua y el bambú constituye la materia prima principal para la obtención de una amplia"
        ],
        [
          6.24,
          12.28,
          "variedad de productos y subproductos con aplicaciones en la construcción, la industria,"
        ],
        [
          12.29,
          14.620000000000001,
          "la artesanía y el diseño."
        ],
        [
          14.63,
          19.77,
          "Dependiendo de la sección del culmo y del tipo de transformación que se realice,"
        ],
        [
          19.72,
          26.29,
          "es posible obtener piezas con características específicas que optimizan su aprovechamiento y generan mayor"
        ],
        [
          26.24,
          27.63,
          "valor agregado."
        ],
        [
          27.64,
          34.48,
          "Conocer la clasificación de estas secciones y sus posibilidades de transformación permite comprender el"
        ],
        [
          34.43,
          41.1,
          "potencial productivo de la guadua y promover un uso eficiente, sostenible e integral del recurso."
        ],
        [
          41.11,
          48.01,
          "El aprovechamiento debe estar ligado a una gestión forestal sostenible para evitar la sobreexplotación de los"
        ],
        [
          47.96,
          54.7,
          "guaduales naturales, especialmente teniendo en cuenta que un porcentaje bajo cuenta con manejo adecuado según"
        ],
        [
          54.65,
          56.53,
          "los datos expuestos."
        ]
      ]
    },
    "slide-19/titulo.mp3": {
      "d": 2.12,
      "c": [
        [
          0.0,
          2.12,
          "Otros productos potenciales"
        ]
      ]
    },
    "slide-19/general.mp3": {
      "d": 41.4,
      "c": [
        [
          0.0,
          3.52,
          "Además de los productos obtenidos directamente del culmo,"
        ],
        [
          3.53,
          10.24,
          "la guadua y el bambú están conformados por diferentes estructuras vegetativas que cumplen funciones"
        ],
        [
          10.19,
          15.39,
          "esenciales para el crecimiento, la protección y la regeneración de la planta."
        ],
        [
          15.4,
          20.279999999999998,
          "Elementos como el rizoma, las hojas caulinares, las hojas de follaje,"
        ],
        [
          20.29,
          26.93,
          "las ramas y las matambas desempeñan un papel fundamental en el desarrollo del guadual o bambusal y,"
        ],
        [
          26.94,
          31.319999999999997,
          "en algunos casos, también poseen usos productivos."
        ],
        [
          31.33,
          37.6,
          "Conocer estas partes permite comprender la biología de la especie y aplicar prácticas de manejo sostenible"
        ],
        [
          37.55,
          41.4,
          "que favorezcan su conservación y aprovechamiento integral."
        ]
      ]
    },
    "slide-20/titulo.mp3": {
      "d": 3.87,
      "c": [
        [
          0.0,
          3.68,
          "Productos obtenidos del culmo: productos secundarios"
        ]
      ]
    },
    "slide-20/general.mp3": {
      "d": 40.83,
      "c": [
        [
          0.0,
          6.29,
          "El culmo de la guadua y el bambú constituye la materia prima principal para la obtención de una amplia"
        ],
        [
          6.24,
          12.3,
          "variedad de productos y subproductos con aplicaciones en la construcción, la industria,"
        ],
        [
          12.31,
          14.64,
          "la artesanía y el diseño."
        ],
        [
          14.65,
          19.79,
          "Dependiendo de la sección del culmo y del tipo de transformación que se realice,"
        ],
        [
          19.74,
          26.31,
          "es posible obtener piezas con características específicas que optimizan su aprovechamiento y generan mayor"
        ],
        [
          26.26,
          27.58,
          "valor agregado."
        ],
        [
          27.59,
          34.52,
          "Conocer la clasificación de estas secciones y sus posibilidades de transformación permite comprender el"
        ],
        [
          34.47,
          40.83,
          "potencial productivo de la guadua y promover un uso eficiente, sostenible e integral del recurso."
        ]
      ]
    },
    "slide-21/titulo.mp3": {
      "d": 14.76,
      "c": [
        [
          0.0,
          2.0500000000000003,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.06,
          4.51,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.52,
          11.31,
          "Los productos primarios de guadua y bambú no han sido sometidos a ningún proceso de dimensionamiento."
        ],
        [
          11.32,
          13.15,
          "a. Verdadero"
        ],
        [
          13.16,
          14.5,
          "b. Falso"
        ]
      ]
    },
    "slide-21/popup-q27-ok.mp3": {
      "d": 55.07,
      "c": [
        [
          0.0,
          1.1,
          "¡Acertaste!"
        ],
        [
          1.05,
          4.59,
          "Estás construyendo muy bien tu aprendizaje."
        ],
        [
          4.6,
          11.3,
          "Esta afirmación es falsa porque confunde el concepto de transformación industrial avanzada con los procesos"
        ],
        [
          11.25,
          15.200000000000001,
          "físicos esenciales de preparación en la etapa poscosecha."
        ],
        [
          15.21,
          18.61,
          "Los productos primarios de guadua y bambú,"
        ],
        [
          18.56,
          23.25,
          "para poder ser comercializados y catalogados como material aprovechable,"
        ],
        [
          23.2,
          26.729999999999997,
          "requieren obligatoriamente un proceso de dimensionamiento básico,"
        ],
        [
          26.74,
          34.7,
          "el cual incluye el corte a longitudes comerciales específicas, el desramado, el despunte y, en muchos casos,"
        ],
        [
          34.65,
          38.53,
          "el rajado longitudinal en listones o esteras."
        ],
        [
          38.54,
          45.18,
          "Además, estas piezas pasan por un riguroso dimensionamiento de selección por diámetros y espesores de pared"
        ],
        [
          45.13,
          51.94,
          "según su uso final, desvirtuando por completo la idea de que el material se presenta en un estado bruto o"
        ],
        [
          51.89,
          54.84,
          "inalterado tras su extracción del guadual."
        ]
      ]
    },
    "slide-21/popup-q27-mal.mp3": {
      "d": 2.93,
      "c": [
        [
          0.0,
          2.93,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-22/titulo.mp3": {
      "d": 14.45,
      "c": [
        [
          0.0,
          2.0300000000000002,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.04,
          4.44,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.45,
          10.84,
          "De la guadua y bambú únicamente se puede aprovechar y elaborar productos a partir del culmo."
        ],
        [
          10.85,
          12.73,
          "a. Verdadero"
        ],
        [
          12.74,
          14.16,
          "b. Falso"
        ]
      ]
    },
    "slide-22/popup-q29-ok.mp3": {
      "d": 67.4,
      "c": [
        [
          0.0,
          1.14,
          "¡Acertaste!"
        ],
        [
          1.09,
          4.7,
          "Estás construyendo muy bien tu aprendizaje."
        ],
        [
          4.71,
          10.74,
          "Esta afirmación es falsa porque ignora el concepto de aprovechamiento integral de la planta,"
        ],
        [
          10.69,
          18.9,
          "donde absolutamente todos sus componentes (órganos), y no solo el culmo, generan productos de alto valor."
        ],
        [
          18.91,
          22.06,
          "Desde una perspectiva biológica e industrial,"
        ],
        [
          22.07,
          28.24,
          "el rizoma (raíz) se extrae y transforma en piezas artesanales de alta calidad,"
        ],
        [
          28.25,
          33.300000000000004,
          "esculturas y mangos de herramientas debido a su alta densidad leñosa,"
        ],
        [
          33.31,
          39.78,
          "mientras que las hojas se aprovechan en la industria farmacéutica y cosmética para la extracción de silicio"
        ],
        [
          39.73,
          44.75,
          "orgánico, antioxidantes y la elaboración de tés medicinales."
        ],
        [
          44.76,
          50.14,
          "Adicionalmente, las ramas delgadas se procesan para fabricar pulpa de papel,"
        ],
        [
          50.15,
          53.78,
          "carbón activo y biochar para el mejoramiento de suelos,"
        ],
        [
          53.79,
          60.79,
          "e incluso los rebrotes tiernos o \"renuevos\" de varias especies de bambú (y ensayos con guadua) se cosechan"
        ],
        [
          60.8,
          67.13,
          "para el consumo humano en la industria alimentaria, gracias a su alto contenido de fibra."
        ]
      ]
    },
    "slide-22/popup-q29-mal.mp3": {
      "d": 3.0,
      "c": [
        [
          0.0,
          2.77,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-23/titulo.mp3": {
      "d": 9.48,
      "c": [
        [
          0.0,
          7.42,
          "Subsección 4: implementación de sistemas productivos y de restauración sostenible con especies de guadua y"
        ],
        [
          7.37,
          9.48,
          "bambú en contextos locales"
        ]
      ]
    },
    "slide-23/general.mp3": {
      "d": 42.92,
      "c": [
        [
          0.0,
          5.32,
          "Hasta este punto has conocido las características biológicas de la guadua y el bambú,"
        ],
        [
          5.33,
          11.370000000000001,
          "sus estadios de desarrollo y las posibilidades de aprovechamiento de sus diferentes partes."
        ],
        [
          11.38,
          18.77,
          "Ahora es momento de comprender cómo este conocimiento se lleva a la práctica mediante la implementación de"
        ],
        [
          18.72,
          22.759999999999998,
          "sistemas productivos y de restauración sostenible en contextos locales."
        ],
        [
          22.77,
          30.549999999999997,
          "En esta subsección explorarás los principios, criterios y estrategias para establecer y manejar plantaciones,"
        ],
        [
          30.56,
          36.39,
          "así como acciones de restauración que contribuyan a la conservación de los ecosistemas,"
        ],
        [
          36.34,
          42.72,
          "al fortalecimiento de las economías locales y al uso sostenible de estos valiosos recursos naturales."
        ]
      ]
    },
    "slide-24/titulo.mp3": {
      "d": 1.8,
      "c": [
        [
          0.0,
          1.8,
          "Sistemas productivos"
        ]
      ]
    },
    "slide-24/general.mp3": {
      "d": 24.35,
      "c": [
        [
          0.0,
          6.57,
          "La implementación de especies de guadua y bambú en contextos locales puede realizarse de múltiples maneras,"
        ],
        [
          6.58,
          10.26,
          "dependiendo de las características biofísicas del territorio,"
        ],
        [
          10.27,
          16.049999999999997,
          "las necesidades de las comunidades y los objetivos de manejo que se busquen alcanzar."
        ],
        [
          16.06,
          22.009999999999998,
          "Más que modelos únicos, se trata de soluciones flexibles capaces de integrar producción,"
        ],
        [
          22.02,
          24.35,
          "restauración y sostenibilidad."
        ]
      ]
    },
    "slide-25/titulo.mp3": {
      "d": 3.97,
      "c": [
        [
          0.0,
          3.97,
          "Sistemas productivos: arreglos silvopastoriles"
        ]
      ]
    },
    "slide-26/titulo.mp3": {
      "d": 4.05,
      "c": [
        [
          0.0,
          3.83,
          "Sistemas productivos: sistemas agroforestales"
        ]
      ]
    },
    "slide-26/general.mp3": {
      "d": 80.17,
      "c": [
        [
          0.0,
          4.5200000000000005,
          "Un sistema agroforestal, donde cultivos agrícolas como café, cacao,"
        ],
        [
          4.53,
          10.33,
          "plátano u otras especies pueden integrarse con bambú o guadua."
        ],
        [
          10.34,
          16.77,
          "Estos arreglos permiten diversificar la producción, mejorar las condiciones microclimáticas del sistema,"
        ],
        [
          16.78,
          23.34,
          "favorecer la conservación del suelo y generar oportunidades futuras de aprovechamiento de productos derivados"
        ],
        [
          23.29,
          24.439999999999998,
          "del bambú."
        ],
        [
          24.45,
          30.819999999999997,
          "Además, aumentan la resiliencia productiva frente a variaciones climáticas y económicas."
        ],
        [
          30.83,
          36.77,
          "Finalmente, hacia la parte derecha observamos un sistema multipropósito comunitario,"
        ],
        [
          36.72,
          40.54,
          "en el cual la guadua y el bambú se articulan con viveros,"
        ],
        [
          40.49,
          46.160000000000004,
          "procesos de transformación artesanal y usos locales del material vegetal."
        ],
        [
          46.17,
          50.29,
          "Este tipo de iniciativas puede fortalecer capacidades comunitarias,"
        ],
        [
          50.24,
          57.14,
          "promover el uso sostenible de la biodiversidad y generar alternativas económicas vinculadas a la construcción,"
        ],
        [
          57.09,
          62.300000000000004,
          "artesanías, restauración ecológica y producción local."
        ],
        [
          62.31,
          68.32,
          "En conjunto, estos ejemplos muestran que la implementación de sistemas con guadua y bambú no responde a un"
        ],
        [
          68.27,
          70.71,
          "modelo estandarizado."
        ],
        [
          70.72,
          75.22999999999999,
          "Su éxito depende de reconocer las condiciones ecológicas del territorio,"
        ],
        [
          75.24,
          80.17,
          "los conocimientos locales y las necesidades de quienes habitan el paisaje."
        ]
      ]
    },
    "slide-27/titulo.mp3": {
      "d": 4.75,
      "c": [
        [
          0.0,
          4.53,
          "Sistemas productivos: sistemas multipropósito comunitarios"
        ]
      ]
    },
    "slide-27/general.mp3": {
      "d": 17.55,
      "c": [
        [
          0.0,
          6.07,
          "Estos tres ejemplos muestran que la implementación de sistemas con guadua y bambú no responde a un modelo"
        ],
        [
          6.02,
          7.63,
          "estandarizado."
        ],
        [
          7.64,
          12.47,
          "Su éxito depende del reconocimiento de las condiciones ecológicas del territorio,"
        ],
        [
          12.48,
          17.55,
          "de los conocimientos locales y de las necesidades de quienes habitan el paisaje."
        ]
      ]
    },
    "slide-28/titulo.mp3": {
      "d": 1.96,
      "c": [
        [
          0.0,
          1.73,
          "Sistemas de restauración"
        ]
      ]
    },
    "slide-28/general.mp3": {
      "d": 18.36,
      "c": [
        [
          0.0,
          5.3500000000000005,
          "La restauración ecológica no consiste únicamente en sembrar especies vegetales."
        ],
        [
          5.36,
          9.58,
          "Restaurar significa recuperar funciones ecológicas,"
        ],
        [
          9.59,
          15.18,
          "mejorar la conectividad entre ecosistemas y fortalecer la relación entre el suelo,"
        ],
        [
          15.19,
          18.13,
          "el agua y la biodiversidad en el territorio."
        ]
      ]
    },
    "slide-28/popup-etapa-1.mp3": {
      "d": 19.57,
      "c": [
        [
          0.0,
          6.29,
          "Un fragmento de guadual y bambusal categoría 1 representa un ecosistema natural que aún conserva"
        ],
        [
          6.24,
          11.23,
          "biodiversidad, hábitats y procesos ecológicos importantes."
        ],
        [
          11.24,
          17.88,
          "Sin embargo, muchos paisajes rurales presentan zonas transformadas o fragmentadas debido a procesos de"
        ],
        [
          17.83,
          19.57,
          "intervención humana."
        ]
      ]
    },
    "slide-28/popup-etapa-2.mp3": {
      "d": 19.57,
      "c": [
        [
          0.0,
          4.59,
          "Un área degradada es aquella en la que la pérdida de cobertura vegetal,"
        ],
        [
          4.54,
          11.14,
          "la erosión o la alteración del suelo han reducido la capacidad del ecosistema para mantener sus funciones"
        ],
        [
          11.09,
          12.42,
          "naturales."
        ],
        [
          12.43,
          19.57,
          "Frente a estas condiciones, la restauración ecológica busca recuperar gradualmente la estabilidad del paisaje."
        ]
      ]
    },
    "slide-28/popup-etapa-3.mp3": {
      "d": 18.91,
      "c": [
        [
          0.0,
          7.37,
          "Un corredor con guadua y bambú puede facilitar la recuperación de áreas degradadas gracias a su rápido"
        ],
        [
          7.38,
          12.33,
          "crecimiento, su capacidad de regeneración y su aporte a la estabilización del suelo."
        ],
        [
          12.34,
          18.91,
          "Además, estos corredores contribuyen a reconectar fragmentos de ecosistemas previamente aislados."
        ]
      ]
    },
    "slide-28/popup-etapa-4.mp3": {
      "d": 11.47,
      "c": [
        [
          0.0,
          6.25,
          "Una ronda hídrica restaurada, donde la vegetación protege las quebradas y los cuerpos de agua,"
        ],
        [
          6.2,
          11.26,
          "favorece la regulación hídrica y contribuye a reducir los procesos erosivos."
        ]
      ]
    },
    "slide-28/popup-etapa-5.mp3": {
      "d": 30.28,
      "c": [
        [
          0.0,
          6.13,
          "Finalmente, se llega a un ecosistema conectado, donde nuevamente es posible el movimiento de fauna,"
        ],
        [
          6.08,
          12.84,
          "la dispersión de semillas y la recuperación progresiva de funciones ecológicas esenciales para la resiliencia"
        ],
        [
          12.79,
          14.91,
          "del paisaje."
        ],
        [
          14.92,
          21.16,
          "En este contexto, la guadua y el bambú pueden desempeñar un papel importante como especies facilitadoras de"
        ],
        [
          21.11,
          27.59,
          "la restauración, especialmente cuando su implementación responde a las características ecológicas del"
        ],
        [
          27.54,
          30.28,
          "territorio y a las necesidades locales."
        ]
      ]
    },
    "slide-29/titulo.mp3": {
      "d": 13.79,
      "c": [
        [
          0.0,
          2.0300000000000002,
          "Pon a prueba tus conocimientos."
        ],
        [
          2.04,
          4.390000000000001,
          "¡Selecciona la respuesta correcta!"
        ],
        [
          4.4,
          10.3,
          "La guadua y el bambú no pueden ser empleados en sistemas productivos y de restauración."
        ],
        [
          10.31,
          12.19,
          "a. Verdadero"
        ],
        [
          12.2,
          13.55,
          "b. Falso"
        ]
      ]
    },
    "slide-29/popup-q38-ok.mp3": {
      "d": 58.91,
      "c": [
        [
          0.0,
          1.1,
          "¡Acertaste!"
        ],
        [
          1.05,
          4.61,
          "Estás construyendo muy bien tu aprendizaje."
        ],
        [
          4.62,
          11.17,
          "Esta afirmación es falsa porque ignora que la guadua y el bambú son herramientas de vanguardia para la"
        ],
        [
          11.12,
          14.92,
          "recuperación ecológica y el desarrollo rural sostenible."
        ],
        [
          14.93,
          22.3,
          "En el ámbito de la restauración, su denso sistema de rizomas entrelazados funciona como una red subterránea"
        ],
        [
          22.25,
          25.0,
          "inigualable para la estabilización de laderas,"
        ],
        [
          25.01,
          29.279999999999998,
          "el control de la erosión y la protección de cuencas hidrográficas,"
        ],
        [
          29.29,
          34.21,
          "regulando el ciclo hídrico al actuar como \"esponjas naturales\"."
        ],
        [
          34.22,
          41.42,
          "Paralelamente, en el entorno productivo, su altísima tasa de crecimiento y capacidad de rebrote continuo"
        ],
        [
          41.37,
          47.13,
          "permiten un aprovechamiento forestal selectivo y anual sin necesidad de deforestar,"
        ],
        [
          47.14,
          53.69,
          "convirtiéndolos en un sumidero de carbono altamente eficiente que se integra con éxito en sistemas"
        ],
        [
          53.64,
          58.91,
          "agroforestales que generan ingresos estables mientras recuperan suelos degradados."
        ]
      ]
    },
    "slide-29/popup-q38-mal.mp3": {
      "d": 3.08,
      "c": [
        [
          0.0,
          2.83,
          "Es incorrecto, puedes intentarlo de nuevo."
        ]
      ]
    },
    "slide-30/titulo.mp3": {
      "d": 1.15,
      "c": [
        [
          0.0,
          1.15,
          "Conclusiones"
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
      "d": 1.23,
      "c": [
        [
          0.0,
          1.02,
          "Bibliografía."
        ]
      ]
    },
    "slide-33/titulo.mp3": {
      "d": 5.07,
      "c": [
        [
          0.0,
          1.48,
          "¡Felicitaciones!"
        ],
        [
          1.43,
          5.07,
          "Finalizaste los contenidos del Módulo 1 con éxito."
        ]
      ]
    }
  }
};
