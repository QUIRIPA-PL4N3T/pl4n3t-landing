<script>
  import logo from "$lib/images/logo.png";
  import Icon from "@iconify/svelte";

  export const features = [
    {
      title: "Trabaja con herramientas en tiempo real",
      img: logo,
      summary:
        "cumplimos los protocolos GHP & ISO 14064-1 de 2009, acreditando a nuestros clientes con el cumplimiento de sus procesos de cuantificación y reducción de huella de carbono.",
      subtext: "Compensa, disminuye y contabiliza tus emisiones con PL4N3T",
      subs: [
        "Gestion de recursos de emision",
        "Administracion de actividades de emision",
        "Clasificacion de recursos GHP & ISO 14064-1 de 2009",
      ],
    },
    {
      title: "Invertimos y capacitamos a nuestros cliente",
      img: logo,
      summary:
        "Nuestros servicios apoyan y facilitan el proceso de cálculo y manejo de fuentes de emisión",
      subtext:
        "Calcular permite conocer no solo tu huella, sino también ver donde estás generando mayor consumo y reducir costos amigables con el medio ambiente.",
      subs: [
        "Gráficas de seguimiento",
        "Reportes de cuantificación con estándares GHP & GHP & ISO 14064-1 de 2009",
        "Módulo de compensación",
      ],
    },
  ];
</script>

<section class="bg-gray-50 dark:bg-gray-800">
  <div
    class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
  >
    {#each features as { title, summary, subtext, img, subs }, i}
      <div class="flex justify-between ...">
        <div
          class={`${(i + 1) % 2 === 0 ? "right-0" : "order-last"} w-full h-full mb-4 mx-2 rounded-lg lg:mb-0 lg:flex`}
        >
          <img
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={img}
            alt={title}
          />
        </div>
        <div class={`text-gray-500 sm:text-lg dark:text-gray-400`}>
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {summary}
          </p>
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {#each subs as item, i}
              <li class="flex space-x-3 items-center">
                <Icon class="text-primary size-6" icon="mdi:check-circle" />
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >{item}</span
                >
              </li>
            {/each}
          </ul>
          <p class="mb-8 font-light lg:text-xl">
            {subtext}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
