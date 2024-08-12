import { c as create_ssr_component, v as validate_component, d as escape, b as add_attribute, a as subscribe, e as each } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { $ as $format } from "../../../chunks/runtime.js";
import { __servicesImages } from "../_page.ts.js";
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  return `<section class="text-gray-600 body-font"><div class="container px-5 py-24 mx-auto"><div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:comment-quote-outline",
      class: "size-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
    },
    {},
    {}
  )} <p class="leading-relaxed text-lg">&quot;${escape(props.summary)}&quot;</p> <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span> <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">${escape(props.person)}</h2> <p class="text-gray-500">${escape(props.position)}</p></div></div></section>`;
});
const Classes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  return `<div class="p-4 md:w-1/3"><div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col"><div class="flex items-center mb-3"><div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:video-image",
      class: "size-6 mx-auto text-gray-200 dark:text-gray-600"
    },
    {},
    {}
  )}</div> <h2 class="text-gray-900 text-lg title-font font-medium">${escape(props.title)}</h2></div> <div class="flex-grow"><p class="leading-relaxed text-base">${escape(props.summary)}</p> <a class="mt-3 text-primary inline-flex items-center gap-2"${add_attribute("href", props.link, 0)}>Learn More
        ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:arrow-right",
      class: "mx-auto text-primary dark:text-gray-600"
    },
    {},
    {}
  )}</a></div></div></div>`;
});
const Service = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { props } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  $$unsubscribe__();
  return `<section class="overflow-hidden bg-white py-8 sm:py-16"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto flex justify-between"><div class="lg:pr-8 lg:pt-4"><div class="lg:max-w-lg"><h3${add_attribute("id", props.title, 0)} class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${escape(props.title)}</h3> <p class="mt-6 text-lg leading-8 text-gray-600">${escape(props.summary)}</p> <div class="w-full border-b-2 mt-3"><h4 class="text-xl text-primary font-semibold">${escape($_("service.how_do"))}</h4></div> <dl class="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">${each(props.how, (how, i) => {
    return `<div class="relative pl-9"><dt class="inline font-semibold text-gray-900"><span class="absolute left-1 top-1 size-3 text-indigo-600">${escape(i + 1)} </span></dt> <dd class="inline">${escape(how)}</dd> </div>`;
  })}</dl> <div class="w-full border-b-2 mt-3"><h4 class="text-xl text-primary font-semibold">${escape($_("service.benefits"))}</h4></div> <dl class="mt-3 space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">${each(props.benefits, (benefit) => {
    return `<div class="relative pl-9"><dt class="inline font-bold text-primary">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mdi:check-all",
        class: "absolute left-1 top-1 size-5 text-indigo-600"
      },
      {},
      {}
    )}</dt> <dd class="inline">${escape(benefit)}</dd> </div>`;
  })}</dl></div> <div class="mt-10 flex items-center gap-x-6"><a href="/" class="text-sm font-semibold leading-6 text-gray-700">${escape($_("request_date"))} <span aria-hidden="true" data-svelte-h="svelte-59zckz">→</span></a></div></div> <div${add_attribute("class", `${props.left ? "right-0" : "order-last"} w-[28rem] max-w-none hidden lg:flex xl:w-1/2 sm:w-[57rem] md:-ml-4 lg:-ml-0`, 0)}><img${add_attribute("src", props.img, 0)}${add_attribute("alt", props.title, 0)} class="object-contain"></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const masterClasses = [
    {
      title: "Usar el formato de columna para personalizar SharePoint",
      summary: "Crear un objeto JSON para describir elementos y estilos en vistas de lista de SharePoint",
      link: ""
    },
    {
      title: "Cómo serializar JSON en C# - .NET",
      summary: "Uso del espacio de nombres System.Text.Json para serializar en JSON en .NET",
      link: ""
    },
    {
      title: "Dar formato a la vista de lista para personalizar SharePoint",
      summary: "Crear un objeto JSON para describir elementos y estilos en vistas de lista de SharePoint",
      link: ""
    }
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
  ];
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-xrysok_START -->${$$result.title = `<title>${escape($_("nav.services"))}</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-xrysok_END -->`, ""} <section class="text-gray-600 body-font hidden"><div class="container px-5 py-24 mx-auto"><div class="flex flex-col text-center w-full mb-20"><h2 class="text-md text-indigo-500 tracking-widest font-medium title-font mb-1">${escape($_("services.masterclass.subtitle"))}</h2> <h1 class="sm:text-3xl text-3xl font-medium title-font text-gray-900">${escape($_("services.masterclass.title"))}</h1></div> <div class="flex flex-wrap justify-center -m-4">${each(masterClasses, (masterClass, i) => {
    return `${validate_component(Classes, "Classes").$$render($$result, { props: masterClass }, {}, {})}`;
  })}</div></div></section> <section class="flex flex-col gap-2">${each(features, (service, i) => {
    return `${validate_component(Service, "Service").$$render(
      $$result,
      {
        props: {
          title: service.title,
          summary: service.summary,
          how: service.how,
          benefits: service.benefits,
          left: (i + 1) % 2 === 0,
          img: __servicesImages[i]
        }
      },
      {},
      {}
    )}`;
  })}</section> ${validate_component(Quote, "Quote").$$render(
    $$result,
    {
      props: {
        person: $_("home.ceo.person"),
        position: $_("home.ceo.position"),
        summary: $_("home.ceo.summary")
      }
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
