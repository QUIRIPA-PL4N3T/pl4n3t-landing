import { g as getContext, c as create_ssr_component, a as subscribe$2, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
import { $ as $format, a as addMessages, i as init, g as getLocaleFromNavigator, b as $isLoading } from "../../chunks/runtime.js";
import "../../chunks/exports.js";
import "devalue";
import { I as Icon } from "../../chunks/Icon.js";
const logo = "/_app/immutable/assets/logo.bDRZZK8X.png";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $page, $$unsubscribe_page;
  $$unsubscribe__ = subscribe$2($format, (value) => $_ = value);
  $$unsubscribe_page = subscribe$2(page, (value) => $page = value);
  const menu = [
    {
      label: $_("nav.services"),
      link: "/services"
    },
    {
      label: $_("nav.about_us"),
      link: "/about-us"
    },
    // { label: $_('nav.blog'), link: "/blog" },
    {
      label: $_("nav.contact"),
      link: "/contact"
    }
  ];
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0) $$bindings.menu(menu);
  $$unsubscribe__();
  $$unsubscribe_page();
  return `<header class="w-full px-6"><nav class="border-b-gray-600 border-b-2 py-2.5"><div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"><a href="/" class="flex items-center" data-svelte-h="svelte-j2no1u"><img${add_attribute("src", logo, 0)} class="w-32 h-24 object-contain" alt="PL4N3T Logo"></a> <div class="flex"><div class="flex items-center" data-svelte-h="svelte-u909s7"><a href="https://app.pl4n3t.com/sing-in" target="_blank" class="text-white bg-slate-800 hover:bg-gray-900 dark:bg-white dark:text-black focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-12 py-2 lg:py-2 sm:mr-2 lg:mr-6">Log In</a></div> <div class="items-center justify-between hidden w-full lg:flex lg:w-auto"><ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">${each(menu, ({ label, link }, i) => {
    return `<li><a${add_attribute("href", link, 0)}${add_attribute("class", `block py-2 pl-3 pr-4 hover:text-primary ${$page.url.pathname === link ? "text-primary" : ""}`, 0)} aria-current="page">${escape(label)}</a> </li>`;
  })}</ul></div></div></div></nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe$2($format, (value) => $_ = value);
  const footer2 = [
    {
      title: $_("footer.company"),
      links: [
        {
          label: $_("footer.contact"),
          link: "/contact"
        },
        {
          label: $_("footer.about_us"),
          link: "/about-us"
        },
        { label: $_("footer.blog"), link: "/blog" }
      ]
    },
    {
      title: $_("footer.legacy_and_help"),
      links: [
        {
          label: $_("footer.privacy_policy"),
          link: "/privacy-policy"
        },
        {
          label: $_("footer.date"),
          link: "/privacy-policy"
        }
      ]
    },
    {
      title: $_("footer.platform"),
      links: [
        {
          label: "PL4N3T",
          link: "https://app.pl4n3t.com"
        }
      ]
    }
  ];
  const socials = [
    { icon: "mdi:facebook", link: "" },
    { icon: "mdi:linkedin", link: "" },
    { icon: "mdi:twitter", link: "" }
  ];
  $$unsubscribe__();
  return `<footer class="bg-white dark:bg-gray-800"><div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10"><div class="grid place-items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">${each(footer2, (ref) => {
    return `<div><h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">${escape(ref.title)}</h3> <ul class="text-gray-500 dark:text-gray-400">${each(ref.links, ({ label, link }) => {
      return `<li class="mb-4"><a${add_attribute("href", link, 0)} class="hover:underline">${escape(label)}</a> </li>`;
    })}</ul> </div>`;
  })}</div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="text-center"><a href="/" class="flex items-center justify-center mb-5 text-md font-semibold text-gray-600 dark:text-white" data-svelte-h="svelte-dd34ht"><img${add_attribute("src", logo, 0)} class="h-[200px] mr-3 sm:h-9" alt="PL4N3T"></a> <span class="block text-sm text-center text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1aay8k4">© 2021-2024 PL4N3T. All Rights Reserved.</span> <ul class="flex justify-center mt-5 space-x-5">${each(socials, ({ icon, link }) => {
    return `<li><a${add_attribute("href", link, 0)} class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}</a> </li>`;
  })}</ul></div></div></footer>`;
});
const nav$1 = {
  services: "Services",
  about_us: "About Us",
  contact: "Contact",
  blog: "Blog"
};
const footer$1 = {
  company: "Company",
  contact: "Contact",
  about_us: "About Us",
  blog: "Blog",
  legacy_and_help: "Legal & Help",
  privacy_policy: "Privacy Policy",
  date: "Request Appointment",
  platform: "Platform"
};
const home$1 = {
  hero: {
    title: "Turn Your Company Into",
    resume: "At PL4N3T, our goal is to turn our clients into Net Zero companies. We provide support in carbon footprint quantification, reduction, and accreditation.",
    register: "Register",
    request_date: "Request Appointment"
  },
  features: [
    {
      title: "GHG Information Management",
      summary: "We help you manage all the information about your Greenhouse Gas (GHG) emissions effectively and accurately. Our goal is to provide a comprehensive system that allows you to identify, quantify, monitor, report, and reduce your organization's GHG emissions.",
      how: [
        "We review all your operations to identify and classify emission sources using standards such as the GHG Protocol and ISO 14064-1.",
        "We determine your organization's specific needs in terms of GHG management.",
        "We create and adapt specific formats for the collection, validation, and storage of emission data.",
        "We train your team to use the system efficiently and understand the importance of GHG management.",
        "We provide manuals and guides to ensure the correct and continuous use of the system.",
        "We offer tools for continuous emission monitoring.",
        "We provide constant support to resolve issues and optimize the system.",
        "We conduct periodic internal audits to ensure the system works correctly and meets the established objectives."
      ],
      benefits: [
        "Total Control: Monitor and record all your emissions in one place, making information management and decision-making easier.",
        "It provides a clear overview of how to manage GHG emissions."
      ]
    },
    {
      title: "GHG Inventory Development / Carbon Footprint Reporting",
      summary: "We conduct a detailed diagnosis of all your Greenhouse Gas (GHG) emissions so you know exactly where they come from and how to reduce them. We provide a solid foundation for developing effective reduction strategies.",
      how: [
        "We collect comprehensive information about all your operational activities and processes.",
        "We use primary and secondary data to ensure full coverage of all emission sources.",
        "We use international standards such as the GHG Protocol and ISO 14064-1 to classify and analyze your emissions in Scopes 1, 2, and 3.",
        "We break down emissions by categories and processes, providing a clear view of your carbon footprint.",
        "We provide a comprehensive report that includes the GHG inventory and detailed analyses.",
        "We offer specific recommendations to reduce emissions and improve operational efficiency."
      ],
      benefits: [
        "Clear Vision: Identify all your emission sources and understand their impact.",
        "Effective Strategies: Baseline for developing reduction plans based on solid data and detailed analysis."
      ]
    },
    {
      title: "Decarbonization Plan",
      summary: "We create personalized plans that align your business operations with global sustainability goals, significantly reducing your GHG emissions.",
      how: [
        "We use your GHG inventory to identify mitigation options and areas for improvement.",
        "We assess the environmental impact of your activities and processes.",
        "We use methodologies like Science Based Targets (SBTi) to set reduction targets aligned with climate science.",
        "We create an action plan with short, medium, and long-term measures, detailing the specific actions needed.",
        "We assist in implementing optimized practices to reduce emissions.",
        "We monitor your progress and adjust strategies as necessary.",
        "We provide periodic reports on progress and improvements made."
      ],
      benefits: [
        "Real Reduction: Implement effective strategies to decrease your emissions.",
        "Guaranteed Sustainability: Meet your short, medium, and long-term sustainability goals."
      ]
    },
    {
      title: "Neutrality Declaration",
      summary: "We help you design and implement a program that allows you to officially declare your carbon-neutral status, demonstrating your commitment to sustainability.",
      how: [
        "We advise you on the process of identifying and selecting accredited carbon offset projects that align with your goals.",
        "We guide you in purchasing carbon credits to offset emissions that cannot be directly reduced.",
        "We organize and prepare all the necessary documentation for the certification audit.",
        "We prepare a neutrality declaration that meets the requirements of the selected standard.",
        "We coordinate with an accredited external verifier to validate your neutrality declaration and underlying data.",
        "We publish your carbon neutrality declaration, including all details of emissions, reductions, and offsets, as well as external validation."
      ],
      benefits: [
        "Obtain your carbon-neutral certification with international standards.",
        "Demonstrate your commitment to the environment and improve your public image.",
        "Complete support during the audit, ensuring a smooth process.",
        "Differentiate yourself in the market as a responsible and committed company to sustainability."
      ]
    },
    {
      title: "Carbon Neutrality Support",
      summary: "We accompany you throughout the audit process for carbon neutrality certification, ensuring that you meet all necessary requirements and standards.",
      how: [
        "We organize and review all the necessary documentation for the audit.",
        "We prepare your team for the audit, ensuring they understand the requirements and processes.",
        "We assist in selecting a suitable and recognized certification entity.",
        "We coordinate with the certification entity to schedule the audit and ensure a smooth process.",
        "We provide advice and technical support at every stage of the audit process.",
        "We address any questions or concerns that arise during the process.",
        "We facilitate compliance with the certification entity's requirements.",
        "We ensure that all documentation and procedures meet the necessary standards for successful certification."
      ],
      benefits: [
        "Specialized technical support at every stage of the process.",
        "Facilitates obtaining your carbon neutrality certification."
      ]
    }
  ],
  global: {
    question: "Did you know?",
    title: "Currently, around 15B Greenhouse Gases are generated worldwide",
    text: "Our commitment to the planet is to reduce and mitigate the carbon footprint. PL4N3T supports our companies in becoming NETZERO",
    data: [
      {
        icon: "mdi:server-outline",
        title: "99.99% on",
        summary: "App online & offline"
      },
      {
        icon: "mdi:molecule-co2",
        title: "600M CO2",
        summary: "Total accounting of our companies"
      },
      {
        icon: "mdi:earth",
        title: "10+ Countries",
        summary: "We are internationally present"
      },
      {
        icon: "mdi:trending-down",
        title: "10M Reductions",
        summary: "Our mitigation plans achieve 1M per year"
      }
    ]
  },
  memberships: {
    trial: {
      title: "Start Your Free Trial Today",
      text: "Try our platform with a FREE membership, no credit card required",
      button: "Start Now"
    },
    title: "Our Plans for Your Company",
    summary: "Check out our available plans to manage, calculate, and mitigate your carbon footprint. Start our free plan."
  },
  ceo: {
    summary: "At Quiripa, we work every day to integrate science, technology and innovation to develop solutions that allow us to manage and mitigate environmental impact, encouraging organizations to be more sustainable and responsible, taking advantage of opportunities and managing environmental challenges.",
    person: "Maria Camila Fajardo",
    position: "CEO of Quiripa"
  }
};
const services$1 = {
  masterclass: {
    subtitle: "Start now, take advantage of our master classes",
    title: "Master Classes for Companies"
  },
  quote: {
    summary: "Bold but Determined",
    person: "Maria Camila Fajardo",
    subject: "CEO of Quiripa"
  }
};
const about_us$1 = {
  masterclass: {
    subtitle: "Start now, take advantage of our master classes",
    title: "Master Classes for Companies"
  },
  quote: {
    summary: "Bold but Determined",
    person: "Maria Camila Fajardo",
    subject: "CEO of Quiripa"
  },
  vision_summary: "Actively contribute to building a <b>sustainable future</b> by developing <b>integral solutions based on technology and innovation</b> for the mitigation of the carbon, water, and plastic footprints.",
  mission_summary: "By 2030, be <b>leaders in integral technological solutions to drive sustainability</b> of organizations in Colombia and Latin America.",
  founded: "Founded",
  values: "Corporate Values",
  integrity: "Integrity",
  commitment: "Commitment",
  respect: "Respect",
  collaboration: "Collaboration",
  transparency: "Transparency",
  innovation: "Innovation",
  team: {
    title: "Our Team"
  },
  vision: "Vision",
  mission: "Mission",
  about_us: "About us",
  about_us_summary: "We are leaders in sustainability, integrating science, technology and innovation to offer strategic solutions for managing sustainability for organizations. We are dedicated to empowering companies to turn environmental challenges into opportunities for growth and leadership.",
  value_proposal: "Value proposal",
  value_proposal_summary: "Our value proposition focuses on boosting the sustainability and competitiveness of our clients through tools and strategies for managing their carbon and water footprints. We offer comprehensive solutions based on technology and innovation, designed to address today's most critical environmental challenges.",
  commitment_summary: "Determined to forge a sustainable future, we strive to generate a positive impact on the environment and communities, acting with passion and firm commitment in each solution we develop.",
  collaboration_summary: "We believe in the power of collaboration to achieve our sustainability goals. We work hand in hand with our collaborators and stakeholders to create synergies that maximize the positive impact of our solutions",
  transparency_summary: "We are committed to open and honest communication both within our organization and with our stakeholders, fostering trust through clarity in all our operations. Transparency guides our ethical behavior and supports our responsibility toward sustainability.",
  innovation_summary: "Innovation is at the heart of everything we do. We constantly seek to develop comprehensive solutions that address environmental challenges in effective and innovative ways."
};
const newsletter$1 = {
  title: "Subscribe to our newsletter.",
  summary: "We generate monthly content about standards, carbon footprint news, updates on our activities, and our clients. We aim to keep you updated.",
  details: [
    {
      icon: "mdi:calendar-month-outline",
      name: "Monthly Articles",
      text: "Stay informed with all our updates, news, and research."
    },
    {
      icon: "mdi:hand-back-left-outline",
      name: "No Spam",
      text: "We do not share our data with third parties and do not generate spam content."
    }
  ]
};
const buy$1 = "Buy";
const request_date$1 = "Request Appointment";
const subscribe$1 = "Subscribe";
const service$1 = {
  benefits: "Benefits",
  how_do: "How Do We Do It?"
};
const position$1 = {
  ceo: "CEO",
  developer: "Developer",
  counter: "Accountant"
};
const read_more$1 = "Read More...";
const contact$1 = {
  title: "Contact Us",
  summary: "Our mission is to provide you with a safe, private, and personalized search experience. We are here to listen to you and improve our services according to your needs.",
  form: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    action: "Send Message",
    subject: "Subject",
    success: "Your message has been sent!",
    error: "An error has occurred, please wait a moment"
  }
};
const not_found$1 = "Page not found";
const back$1 = "home";
const en = {
  nav: nav$1,
  footer: footer$1,
  home: home$1,
  services: services$1,
  about_us: about_us$1,
  newsletter: newsletter$1,
  buy: buy$1,
  request_date: request_date$1,
  subscribe: subscribe$1,
  service: service$1,
  position: position$1,
  read_more: read_more$1,
  contact: contact$1,
  not_found: not_found$1,
  back: back$1
};
const nav = {
  services: "Servicios",
  about_us: "Nosotros",
  contact: "Contacto",
  blog: "Blog"
};
const footer = {
  company: "Empresa",
  contact: "Contacto",
  about_us: "Nosotros",
  blog: "Blog",
  legacy_and_help: "Legalidad & Ayuda",
  privacy_policy: "Politicas de privacidad",
  date: "Solicitar cita",
  platform: "Plataforma"
};
const home = {
  hero: {
    title: "Convierte tu Empresa en",
    resume: "En PL4N3T nuestra meta es convertir a nuestro clientes en empresa Net Zero, realizamos acompañamiento en cuantificación, reducción y acreditación en huella de carbono",
    register: "Registrate",
    request_date: "Solicitar cita"
  },
  features: [
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
  ],
  global: {
    question: "¿Sabías que?",
    title: "Actualmente en el mundo se genera alrededor de 15B de Gases de efecto invernadero",
    text: "El compromiso con el planeta es reducir y mitigar la huella de carbono, PL4N3T apoya a nuestras empresas en ser NETZERO",
    data: [
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
    ]
  },
  memberships: {
    trial: {
      title: "Inicia tu prueba gratuito hoy",
      text: "Prueba nuestra plataforma por una membresia FREE, sin ingreso de tarjetas",
      button: "Iniciar ahorar"
    },
    title: "Nuestros planes para tu empresa",
    summary: "Mira nuestros planes disponibles para gestionar, calcular y mitigar tu huella de carbono. Inicia nuestro plan gratuito."
  },
  ceo: {
    summary: "En Quiripa, cada día trabajamos en integrar ciencia, tecnología e innovación para desarrollar soluciones que permitan gestionar y mitigar el impacto ambiental, impulsando a las organizaciones a ser más sostenibles y responsables, aprovechando las oportunidades y gestionando los retos del entorno.",
    person: "Maria Camila Fajardo",
    position: "CEO de Quiripa"
  }
};
const services = {
  masterclass: {
    subtitle: "Inicia ahora, aprovecha nuestras master classes",
    title: "Master classes para empresas"
  },
  quote: {
    summary: "En Quiripa, cada día trabajamos en integrar ciencia, tecnología e innovación para desarrollar soluciones que permitan gestionar y mitigar el impacto ambiental, impulsando a las organizaciones a ser más sostenibles y responsables, aprovechando las oportunidades y gestionando los retos del entorno.",
    person: "Maria Camila Fajardo",
    subject: "CEO de Quiripa"
  }
};
const about_us = {
  masterclass: {
    subtitle: "Inicia ahora, aprovecha nuestras master classes",
    title: "Master classes para empresas"
  },
  quote: {
    summary: "Brutas, pero dicididas",
    person: "Maria Camila Fajardo",
    subject: "CEO de Quiripa"
  },
  vision_summary: "Contribuir activamente a la construcción de un <b>futuro sostenible</b>         mediante el desarrollo de soluciones         <b>integrales basadas en tecnología e innovación</b> para la mitigación de         la huella de carbono, hídrica y plástica.",
  mission_summary: "Para el 2030 ser <b>           líderes en soluciones tecnológicas integrales para impulsar la           sostenibilidad         </b> de las organizaciones en Colombia y América Latina.",
  founded: "Fundada",
  values: "Valores coorporativos",
  integrity: "Integridad",
  commitment: "Compromiso",
  respect: "Respeto",
  collaboration: "Colaboracion",
  transparency: "Transparencia",
  innovation: "Innovacion",
  team: {
    title: "Nuestro Equipo"
  },
  vision: "Vision",
  mission: "Mision",
  about_us: "Sobre nosotros",
  about_us_summary: "Somos líderes en sostenibilidad, integramos la ciencia, la tecnología y la innovación para ofrecer soluciones estratégicas para la gestión de la sostenibilidad para las organizaciones. Nos dedicamos a empoderar a las empresas para que conviertan los desafíos ambientales en oportunidades de  crecimiento y liderazgo.",
  value_proposal: "Propuesrta de valor",
  value_proposal_summary: "Nuestra propuesta de valor se centra en impulsar la sostenibilidad competitividad de nuestros clientes mediante herramientas y estrategias para la gestión de su  huella de carbono y huella hídrica. ofrecemos soluciones integrales basadas en tecnología e innovación, diseñadas para abordar los desafíos ambientales más críticos de la actualidad.",
  commitment_summary: "Decididos a forjar un futuro sostenible, nos esforzamos por generar un impacto positivo en el medio ambiente y en las comunidades, actuando con pasión y firme compromiso en cada solución que desarrollamos.",
  collaboration_summary: "Creemos en el poder de la colaboración para alcanzar nuestros objetivos de sostenibilidad. Trabajamos de la mano con nuestros colaboradores y stakeholders para crear sinergias que maximicen el impacto positivo de nuestras soluciones",
  transparency_summary: "Nos comprometemos a mantener una comunicación abierta y honesta tanto dentro de nuestra organización como con nuestros stakeholders, fomentando la confianza a través de la claridad en todas nuestras operaciones. La transparencia guía nuestro comportamiento ético y respalda nuestra responsabilidad hacia la sostenibilidad.",
  innovation_summary: "La innovación está en el corazón de todo lo que hacemos. Buscamos constantemente desarrollar soluciones integrales que aborden los retos ambientales de manera efectiva y novedosa."
};
const newsletter = {
  title: "Subscribete a nuestro newsletter.",
  summary: "Generamos contenido mensuales acerca de estandares, notificas de huella de carbono, actualizaciones de nuestras actividades, y nuestros clientes, buscamos mantenerte actualizado.",
  details: [
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
  ]
};
const buy = "Comprar";
const request_date = "Solicitar cita";
const subscribe = "Subscribirse";
const service = {
  benefits: "Beneficios",
  how_do: "Como lo hacemos ?"
};
const position = {
  ceo: "CEO",
  developer: "Desarrollador",
  counter: "Contador"
};
const read_more = "Leer mas...";
const contact = {
  title: "Contactanos",
  summary: "Nuestra misión es brindarte una experiencia de búsqueda segura, privada y personalizada. Estamos aquí para escucharte y mejorar nuestros servicios según tus necesidades.",
  form: {
    name: "Nombres",
    email: "Correo electronico",
    phone: "Celular",
    message: "Mensaje",
    action: "Enviar mensaje",
    subject: "Asunto",
    success: "Se ha enviado tu mensaje!",
    error: "Ha ocurrido un error, espera un momento"
  }
};
const not_found = "Pagina no encontrada";
const back = "home";
const es = {
  nav,
  footer,
  home,
  services,
  about_us,
  newsletter,
  buy,
  request_date,
  subscribe,
  service,
  position,
  read_more,
  contact,
  not_found,
  back
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading$1, $$unsubscribe_isLoading;
  $$unsubscribe_isLoading = subscribe$2($isLoading, (value) => $isLoading$1 = value);
  addMessages("en", en);
  addMessages("es", es);
  init({
    fallbackLocale: "es",
    initialLocale: getLocaleFromNavigator()
  });
  $$unsubscribe_isLoading();
  return `<div class="app">${$isLoading$1 ? `Please wait...` : `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`}</div>`;
});
export {
  Layout as default
};
