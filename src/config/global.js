export default {
  global: {
    componenteFormativo: 'Cultura del riesgo',
    descripcionCurso:
      'Este componente tiene como fin dar a conocer los elementos para formular una matriz de riesgo permitiendo visualizar la probabilidad de impacto y las acciones que se deben ejecutar en cada proceso para minimizar los riesgos, además de las variables que influyen, los métodos de evaluación y los factores que llevan al cumplimiento de metas, políticas y procedimientos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-0', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cultura del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables de influencia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Matriz de probabilidad de impacto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Políticas de riesgo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Informes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Planes de mejora',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_12_123500_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2. Matriz de probabilidad de impacto',
      referencia:
        'Grupo Proikos. (20221, 13 de enero). Métodos para evaluar los riesgos [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qYWBhFbN-zs',
    },
    {
      tema: '1.5. Planes de mejora',
      referencia:
        'Gestión del riesgo: Orientación para la implementación de la NTC-ISO 31000 = <em>Risk management: Guidance for the implementation of</em> ISO 31000. (2016). Bogotá: Icontec.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000012244',
    },
    {
      tema: '1.5. Planes de mejora',
      referencia:
        'Economía Gobierno de El Salvador. (2020, 26 de junio). Gestión de riesgo ISO 3100. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=R7sjfJj4Ows',
    },
  ],
  glosario: [
    {
      termino: 'Cultura del riesgo',
      significado:
        'Describe e integra conocimientos, valores, actitudes y creencias que comparten y unifican un grupo de personas con un objetivo común, aplicarla en el interior de las empresas.',
    },
    {
      termino: 'Indicadores de riesgo',
      significado:
        'Los KRI permiten determinar el grado de riesgo presente en una empresa en el momento de existir un evento o amenaza. Este indicador está definido por el apetito de riesgos de la empresa; su objetivo es generar alertas para que el gestor de riesgos pueda alcanzar a generar un cambio en la tendencia de las amenazas de manera preventiva, y se pueden iniciar acciones para su tratamiento oportuno.',
    },
    {
      termino: 'Matriz de Probabilidad de Impacto',
      significado:
        'Herramienta que prioriza las señales o tendencias de cambio notorias de una manera sencilla y gráfica, conformada por dos dimensiones, referentes al nivel de oportunidad y riesgo: la probabilidad que el evento ocurra Vs. El impacto provocado si ocurre el evento.',
    },
    {
      termino: 'Matriz de riesgo',
      significado:
        'Identifica de forma gráfica los riesgos a los que se expone una empresa, teniendo en cuenta la probabilidad y el impacto que pueden causar.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'En este se define el tratamiento que se les dará a los riesgos, teniendo en cuenta acciones de implementación y responsables. Aquí, debe quedar bien definido los alcances, etapas y procesos que se deben ejecutar para dar un monitoreo eficiente y documentar el seguimiento realizado.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad que un evento desafortunado ocurra y genere consecuencias a una persona, entidad o cosa.',
    },
  ],
  referencias: [
    {
      referencia: 'AE. (2022). Agencia Europea para el SG-SST.',
      link: 'https://osha.europa.eu/es',
    },
    {
      referencia:
        'Auditol. (2015). Diferencia entre apetito de riesgo y tolerancia al riesgo.',
      link:
        'https://www.auditool.org/blog/auditoria-interna/diferencia-entre-apetito-de-riesgo-y-tolerancia-al-riesgo',
    },
    {
      referencia:
        'Blog. (2019). Administración de los Recursos y la Función Informática.',
      link: 'https://admoninformaticos201-1.blogspot.com/',
    },
    {
      referencia:
        'Economía Gobierno de El Salvador. (2022). Gestión de riesgo ISO 3100.',
      link:
        'https://www.youtube.com/watch?v=R7sjfJj4Ows&ab_channel=Econom%C3%ADaGobiernodeElSalvador',
    },
    {
      referencia:
        'Gestión Del Riesgo: Orientación Para La Implementación De La NTC-ISO 31000 = <i>Risk Management : Guidance for the Implementation of</i> ISO 31000. Bogotá: Icontec, 2016. <i>Print</i>.',
    },
    {
      referencia:
        'Grupo Bancolombia, (2019) 6 reglas para gestionar riesgos en las empresas.',
      link:
        'https://www.bancolombia.com/wps/portal/empresas/capital-inteligente/actualidad-economica-sectorial/6-reglas-gestionar-riesgos-empresariales',
    },
    {
      referencia: 'MinTic. (2016). Guía de gestión de riesgos.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      referencia: 'UNGRD. (2022). Plan de Tratamiento de Riesgos.',
      link:
        'https://portal.gestiondelriesgo.gov.co/Documents/GTI/Plan-de-Tratamiento-de-Riesgos-2022.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesoría Metodológica y Pedagógica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Abel Fernando Becerra Carrillo',
          cargo: 'Experto Temático',
          centro:
            'Centro de la industria, la empresa y los servicios - Región Norte de Santander',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseño Instruccional',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesoría Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluación Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción Audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción Audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador Web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
