<script>
  import logo from "$lib/images/logo.png";
  import Icon from "@iconify/svelte";

  export const feat = {
    subtitle: "¿Sabías que?",
    title:
      "Actualmente en el mundo se genera alrededor de 15B de Gases de efecto invernadero",
    summary:
      "El compromiso con el planeta es reducir y mitigar la huella de carbono, PL4N3T apoya a nuestras empresas en ser NETZERO",
    links: [
      { label: "Some link", link: "" },
      { label: "Some link", link: "" },
    ],
  };

  export const data = [
    {
      icon: "mdi:server-outline",
      title: "99.99% on",
      summary: "App online & offline",
    },
    {
      icon: "mdi:molecule-co2",
      title: "600M CO2",
      summary: "Contabilidad total de nuestras empresas",
    },
    {
      icon: "mdi:earth",
      title: "10+ Countries",
      summary: "Estamos a nivel internacional",
    },
    {
      icon: "mdi:trending-down",
      title: "10M Reducciones",
      summary: "Nuestros planes de mitigación logran 1M al año",
    },
  ];
</script>

<section class="bg-white dark:bg-gray-900">
  <div
    class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6"
  >
    <div class="col-span-2 mb-8">
      <p class="text-lg font-bold text-purple-600 dark:text-purple-500">
        {feat.subtitle}
      </p>
      <h2
        class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
      >
        {feat.title}
      </h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        {feat.summary}
      </p>
      <div
        class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700"
      >
        {#each feat.links as { label, link }, i}
          <div>
            <a
              href={link}
              class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
              {label}
              <Icon class="text-primary size-6" icon="mdi:arrow-right" />
            </a>
          </div>
        {/each}
      </div>
    </div>
    <div
      class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
    >
      {#each data as { icon, title, summary }, i}
        <div>
          <Icon class="text-primary size-12" {icon} />

          <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            {summary}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
