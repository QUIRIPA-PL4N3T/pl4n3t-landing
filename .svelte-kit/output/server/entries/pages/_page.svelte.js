import { c as create_ssr_component, v as validate_component, d as escape, b as add_attribute, a as subscribe, e as each } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
import { $ as $format } from "../../chunks/runtime.js";
import { __servicesImages, __featureMemberships, __membership } from "./_page.ts.js";
import { c as camila } from "../../chunks/camila.js";
const Quote_avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  return `<section class="bg-gray-50 dark:bg-gray-800"><div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6"><figure class="max-w-screen-md mx-auto">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:comment-quote",
      class: "size-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
    },
    {},
    {}
  )} <blockquote><p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">&quot;${escape(props.summary)}&quot;</p></blockquote> <figcaption class="flex items-center justify-center mt-6 space-x-3"><img class="w-6 h-6 rounded-full"${add_attribute("src", props.img, 0)}${add_attribute("alt", props.person, 0)}> <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"><div class="pr-3 font-medium text-gray-900 dark:text-white">${escape(props.person)}</div> <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">${escape(props.position)}</div></div></figcaption></figure></div></section>`;
});
const Newsletter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const details = [
    {
      icon: "mdi:calendar-month-outline",
      name: "Articulos mensuales",
      text: "Enterate con nosotros de todad nuestras actualizaciones, noticias, investigaciones."
    },
    {
      icon: "mdi:hand-back-left-outline",
      name: "No spam",
      text: "No compartimos nuestros datos a terceros, no generamos contenido de spam"
    }
  ];
  $$unsubscribe__();
  return `<div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"><div class="max-w-xl lg:max-w-lg"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${escape($_("newsletter.title"))}</h2> <p class="mt-4 text-lg leading-8 text-gray-300">${escape($_("newsletter.summary"))}</p> <div class="mt-6 flex max-w-md gap-x-4"><label for="email-address" class="sr-only" data-svelte-h="svelte-e5sb3t">Correo electronico</label> <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Email"> <button type="submit" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">${escape($_("subscribe"))}</button></div></div> <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">${each(details, ({ icon, name, text }) => {
    return `<div class="flex flex-col items-start"><div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">${validate_component(Icon, "Icon").$$render($$result, { icon, class: "text-white" }, {}, {})}</div> <dt class="mt-4 font-semibold text-white">${escape(name)}</dt> <dd class="mt-2 leading-7 text-gray-400">${escape(text)}</dd> </div>`;
  })}</dl></div></div> <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true" data-svelte-h="svelte-1aohcad"><div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-dark to-primary opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div></div>`;
});
const Application = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
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
  return `<section class="bg-gray-50 dark:bg-gray-800"><div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">${each(features, ({ title, summary, img, how }, i) => {
    return `<div class="mx-auto flex justify-between items-center gap-4"><div${add_attribute("class", `${(i + 1) % 2 === 0 ? "right-0" : "order-last"} hidden w-full h-full mb-4 mx-2 rounded-lg lg:mb-0 lg:flex`, 0)}><img class="hidden mb-4 rounded-lg lg:mb-0 lg:flex"${add_attribute("src", __servicesImages[i], 0)}${add_attribute("alt", title, 0)}></div> <div${add_attribute("class", `text-gray-500 sm:text-lg dark:text-gray-400`, 0)}><h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">${escape(title)}</h2> <p class="mb-8 font-light lg:text-xl">${escape(summary)}</p> <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">${each(how.slice(0, 3), (item, i2) => {
      return `<li class="flex space-x-3 items-center">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "text-primary size-6",
          icon: "mdi:check-circle"
        },
        {},
        {}
      )} <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">${escape(item)}</span> </li>`;
    })}</ul> <a class="mb-8 font-light lg:text-xl"${add_attribute("href", "/services/#" + title, 0)}>${escape($_("read_more"))}</a></div> </div>`;
  })}</div></section>`;
});
const Global_data = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const data = [
    {
      icon: "mdi:server-outline",
      title: "99.99% on",
      summary: "App online & offline"
    },
    {
      icon: "mdi:molecule-co2",
      title: "600M CO2",
      summary: "Contabilidad total de nuestras empresas"
    },
    {
      icon: "mdi:earth",
      title: "10+ Countries",
      summary: "Estamos a nivel internacional"
    },
    {
      icon: "mdi:trending-down",
      title: "10M Reducciones",
      summary: "Nuestros planes de mitigación logran 1M al año"
    }
  ];
  $$unsubscribe__();
  return `<section class="bg-white dark:bg-gray-900"><div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6"><div class="col-span-2 mb-8"><p class="text-lg font-bold text-purple-600 dark:text-purple-500">${escape($_("home.global.question"))}</p> <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">${escape($_("home.global.title"))}</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">${escape($_("home.global.text"))}</p></div> <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">${each(data, ({ icon, title, summary }, i) => {
    return `<div>${validate_component(Icon, "Icon").$$render($$result, { class: "text-primary size-12", icon }, {}, {})} <h3 class="mb-2 text-2xl font-bold dark:text-white">${escape(title)}</h3> <p class="font-light text-gray-500 dark:text-gray-400">${escape(summary)}</p> </div>`;
  })}</div></div></section>`;
});
const hero = "/_app/immutable/assets/hero.B3w1ATRI.png";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe__();
  return `<section class="bg-white dark:bg-gray-900"><div class="flex flex-wrap max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10"><div class="mr-auto place-self-center lg:w-1/3"><h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">${escape($_("home.hero.title"))} <br><span class="text-primary" data-svelte-h="svelte-6i4g2">Net Zero.</span></h1> <p class="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">${escape($_("home.hero.resume"))}</p> <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"><a href="https://app.pl4n3t.com/sing-up" class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-200 bg-slate-700 dark:bg-white border border-gray-200 rounded-lg sm:w-auto hover:bg-slate-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${escape($_("home.hero.register"))}</a> <a href="/contact/#request-date" class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">${escape($_("home.hero.request_date"))}</a></div></div> <div class="hidden lg:mt-0 lg:w-2/3 lg:flex translate-x-[260px]" data-svelte-h="svelte-1v5b5yk"><img alt="hero"${add_attribute("src", hero, 0)} class="w-full h-full"></div></div></section>`;
});
const Memberships = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const memberships = [__membership, __membership, __membership];
  $$unsubscribe__();
  return `<section class="bg-gray-50 dark:bg-gray-800"><div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6"><div class="max-w-screen-sm mx-auto text-center"><h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">${escape($_("home.memberships.trial.title"))}</h2> <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">${escape($_("home.memberships.trial.text"))}</p> <a href="https://app.pl4n3t.com/" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">${escape($_("home.memberships.trial.button"))}</a></div></div></section> <div class="container mx-auto antialiased text-gray-900 bg-white"><main class="mx-4 my-16"><div class="text-center"><h1 class="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">${escape($_("home.memberships.title"))}</h1> <p class="text-sm font-normal text-gray-400">${escape($_("home.memberships.summary"))}</p></div> <div class="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">${each(memberships, (membership) => {
    return `<section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md"><div class="flex-shrink-0"><span class="text-4xl font-medium tracking-tight">${escape(membership.membership_type)}</span> <br> <span class="text-green-800 text-5xl font-semibold">$${escape(membership.price)}</span></div> <div class="flex-shrink-0 pb-6 space-y-2 border-b"><h2 class="text-2xl font-normal">${escape(membership.name)}</h2> <p class="text-sm text-gray-400">${escape(membership.description)} </p></div> <ul class="mb-8 space-y-4 h-full overflow-auto">${each(__featureMemberships, ({ attribute, key }) => {
      return `<li class="flex gap-x-2 items-start">${typeof membership[key] === "boolean" ? `<div class="w-[20px]">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: `text-${membership[key] ? "green-500" : "red-500"}  size-4`,
          icon: "mdi:check"
        },
        {},
        {}
      )}</div> <span class="text-sm">${escape(attribute)}</span>` : `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "text-green-500 size-4",
          icon: "mdi:check-all"
        },
        {},
        {}
      )} <div class="flex flex-col"><p class="text-sm">${escape(attribute)}</p> <small class="text-gray-500">${escape(membership[key])}</small> </div>`} </li>`;
    })}</ul> <div class="flex-shrink-0 pt-4"><button class="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-primary">${escape($_("buy"))} ${escape(membership.membership_type)} </button></div> </section>`;
  })}</div></main></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-8gb88t_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-8gb88t_END -->`, ""} <section>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}  ${validate_component(Application, "Application").$$render($$result, {}, {}, {})} ${validate_component(Global_data, "GlobalData").$$render($$result, {}, {}, {})} ${validate_component(Memberships, "Memberships").$$render($$result, {}, {}, {})} ${validate_component(Quote_avatar, "QuoteAvatar").$$render(
    $$result,
    {
      props: {
        person: $_("home.ceo.person"),
        position: $_("home.ceo.position"),
        summary: $_("home.ceo.summary"),
        img: camila
      }
    },
    {},
    {}
  )} ${validate_component(Newsletter, "Newsletter").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
