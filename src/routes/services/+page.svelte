<script>
  import Quote from "$components/global/quote.svelte";
  import Classes from "$components/services/classes.svelte";
  import Service from "$components/services/service.svelte";
  import { _ } from "svelte-i18n";
  import { __servicesImages } from "$routes/+page";

  const masterClasses = [
    {
      title: "Usar el formato de columna para personalizar SharePoint",
      summary:
        "Crear un objeto JSON para describir elementos y estilos en vistas de lista de SharePoint",
      link: "",
    },
    {
      title: "Cómo serializar JSON en C# - .NET",
      summary:
        "Uso del espacio de nombres System.Text.Json para serializar en JSON en .NET",
      link: "",
    },
    {
      title: "Dar formato a la vista de lista para personalizar SharePoint",
      summary:
        "Crear un objeto JSON para describir elementos y estilos en vistas de lista de SharePoint",
      link: "",
    },
  ];


  const features = [
      {
        title: "Gestión de la Información de GEI",
        summary: "Te ayudamos a gestionar toda la información sobre tus emisiones de Gases de Efecto Invernadero (GEI) de manera efectiva y precisa. Nuestro objetivo es proporcionar un sistema integral que permita identificar, cuantificar, monitorear, reportar y reducir las emisiones de GEI de tu organización.",
        how: [
          "Revisamos todas tus operaciones para identificar y clasificar fuentes de emisiones utilizando estándares como el GHG Protocol y la ISO 14064-1.",
          "Determinamos las necesidades específicas de tu organización en términos de gestión de GEI.",
          "Creamos y adaptamos formatos específicos para la recolección, validación y almacenamiento de datos de emisiones.",
          "Formamos a tu equipo para que puedan utilizar el sistema de manera eficiente y comprender la importancia de la gestión de GEI.",
          "Proveemos manuales y guías para asegurar el uso correcto y continuo del sistema.",
          "Ofrecemos herramientas para el monitoreo continuo de las emisiones.",
          "Brindamos soporte constante para resolver problemas y optimizar el sistema.",
          "Realizamos auditorías internas periódicas para asegurar que el sistema funcione correctamente y cumpla con los objetivos establecidos."
        ],
        benefits: [
          "Control Total: Monitorea y registra todas tus emisiones en un solo lugar, facilitando la gestión de la información y la toma de decisiones.",
          "Permite tener un panorama claro sobre cómo gestionar las emisiones de GEI."
        ]
      },
      {
        title: "Desarrollo del Inventario de GEI / Elaboración de informes de huella de carbono",
        summary: "Realizamos un diagnóstico detallado de todas tus emisiones de Gases de Efecto Invernadero (GEI) para que sepas exactamente de dónde provienen y cómo reducirlas. Proporcionamos una base sólida para el desarrollo de estrategias de reducción efectivas.",
        how: [
          "Recopilamos información exhaustiva sobre todas tus actividades operativas y procesos.",
          "Utilizamos datos primarios y secundarios para asegurar una cobertura completa de todas las fuentes de emisiones.",
          "Utilizamos estándares internacionales como el GHG Protocol y la ISO 14064-1 para clasificar y analizar tus emisiones en Alcances 1, 2 y 3.",
          "Desglosamos las emisiones por categorías y procesos, proporcionando una visión clara de tu huella de carbono.",
          "Proporcionamos un informe comprensivo que incluye el inventario de GEI y análisis detallados.",
          "Ofrecemos recomendaciones específicas para reducir las emisiones y mejorar la eficiencia operativa."
        ],
        benefits: [
          "Visión Clara: Identifica todas tus fuentes de emisiones y entiende su impacto",
          "Estrategias Eficaces: Línea base para el desarrollo planes de reducción basados en datos sólidos y análisis detallados."
        ]
      },
      {
        title: "Plan de Descarbonización",
        summary: "Creamos planes personalizados que alinean tus operaciones comerciales con objetivos de sostenibilidad global, reduciendo significativamente tus emisiones de GEI.",
        how: [
          "Utilizamos tu inventario de GEI para identificar opciones de mitigación y áreas de mejora.",
          "Evaluamos el impacto ambiental de tus actividades y procesos.",
          "Utilizamos metodologías como Science Based Targets (SBTi) para establecer metas de reducción alineadas con la ciencia del clima.",
          "Creamos un plan de acción con medidas a corto, mediano y largo plazo, detallando las acciones específicas necesarias.",
          "Asistimos en la implementación de prácticas optimizadas para reducir las emisiones.",
          "Monitoreamos tu progreso y ajustamos las estrategias según sea necesario.",
          "Proveemos informes periódicos sobre el progreso y las mejoras realizadas."
        ],
        benefits: [
          "Reducción Real: Implementa estrategias efectivas para disminuir tus emisiones.",
          "Sostenibilidad Garantizada: Cumple con tus objetivos de sostenibilidad a corto, mediano y largo plazo."
        ]
      },
      {
        title: "Declaración de Neutralidad",
        summary: "Te ayudamos a diseñar e implementar un programa que te permita declarar oficialmente tu estado de carbono neutral, demostrando tu compromiso con la sostenibilidad.",
        how: [
          "Te asesoramos en el proceso de identificación y selección de proyectos de compensación de carbono acreditados que se alineen con tus objetivos.",
          "Te asesoramos en la compra de créditos de carbono para compensar las emisiones que no se pueden reducir directamente.",
          "Organizamos y preparamos toda la documentación necesaria para la auditoría de certificación.",
          "Preparamos una declaración de neutralidad que cumpla con los requisitos del estándar seleccionado.",
          "Coordinamos con una entidad verificadora externa acreditada para validar tu declaración de neutralidad y los datos subyacentes.",
          "Publicamos tu declaración de neutralidad de carbono, incluyendo todos los detalles de las emisiones, reducciones y compensaciones, así como la validación externa."
        ],
        benefits: [
          "Obtén tu certificación de carbono neutral con estándares internacionales.",
          "1Demuestra tu compromiso con el medio ambiente y mejora tu imagen pública.",
          "Acompañamiento completo durante la auditoría, asegurando un proceso sin contratiempos.",
          "Diferénciate en el mercado como una empresa responsable y comprometida con la sostenibilidad."
        ]
      },
      {
        title: "Acompañamiento Carbono Neutralidad",
        summary: "Te acompañamos durante todo el proceso de auditoría para la certificación de carbono neutralidad, asegurando que cumplas con todos los requisitos y estándares necesarios.",
        how: [
          "Organizamos y revisamos toda la documentación necesaria para la auditoría.",
          "Preparamos a tu equipo para la auditoría, asegurando que todos comprendan los requisitos y procesos.",
          "Asistimos en la selección de una entidad certificadora adecuada y reconocida.",
          "Coordinamos con la entidad certificadora para programar la auditoría y asegurar un proceso fluido.",
          "Proveemos asesoría y apoyo técnico en cada etapa del proceso de auditoría.",
          "Respondemos a cualquier duda o inquietud que surja durante el proceso.",
          "Facilitamos el cumplimiento de los requisitos de la entidad certificadora.",
          "Aseguramos que toda la documentación y procedimientos cumplan con los estándares necesarios para una certificación exitosa."
        ],
        benefits: [
          "Apoyo técnico especializado en cada etapa del proceso.",
          "Facilita la obtención de tu certificación de carbono neutralidad."
        ]
      }
    ]
</script>

<svelte:head>
  <title>{$_("nav.services")}</title>
  <meta name="description" content="About this app" />
</svelte:head>

<section class="text-gray-600 body-font hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2
        class="text-md text-indigo-500 tracking-widest font-medium title-font mb-1"
      >
        {$_("services.masterclass.subtitle")}
      </h2>
      <h1 class="sm:text-3xl text-3xl font-medium title-font text-gray-900">
        {$_("services.masterclass.title")}
      </h1>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
      {#each masterClasses as masterClass, i}
        <Classes props={masterClass} />
      {/each}
    </div>
  </div>
</section>
<section class="flex flex-col gap-2">
  {#each features as service, i}
    <Service props={{
          title: service.title,
          summary: service.summary,
          how: service.how,
          benefits: service.benefits,
          left: (i + 1) % 2 === 0,
          img: __servicesImages[i],
    }} />
  {/each}
</section>
<Quote
  props={{
    person: $_("home.ceo.person"),
    position: $_("home.ceo.position"),
    summary: $_("home.ceo.summary"),
  }}
/>
