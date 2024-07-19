<script>
  import contact from "$lib/images/contact.jpg";
  import Contact from "$components/global/contact.svelte";
  import Icon from "@iconify/svelte";

  const links = [
    { icon: "mdi:email-outline", label: "info@example.com", link: "" },
    { icon: "mdi:phone", label: "+158 996 888", link: "" },
    {
      icon: "mdi:map-marker",
      label: "123 Street 256 House",
      link: "",
    },
  ];

  const socials = [
    { icon: "mdi:facebook", link: "" },
    { icon: "mdi:linkedin", link: "" },
    { icon: "mdi:twitter", link: "" },
  ];
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-slate-900 rounded-lg">
  <div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
    <div class="px-10">
      <h1 class="text-4xl font-bold text-white">Contacta con nostros</h1>
      <p class="text-sm text-gray-300 mt-4 leading-relaxed">
        Envia tus solicitudes por este formulario, te atenderemos los mas pronto
        posible.
      </p>

      <ul class="mt-12 space-y-8">
        {#each links as { icon, link, label }}
          <li class="flex items-center opacity-70 hover:opacity-100">
            <a href={link}>
              <Icon {icon} class="text-white size-5" />
            </a>
            <a href={link} class="text-white text-sm ml-4">
              {label}
            </a>
          </li>
        {/each}
      </ul>

      <ul class="flex mt-12 space-x-4">
        {#each socials as { icon, link }}
          <li
            class="bg-primary hover:bg-primary-dark h-10 w-10 rounded-full flex items-center justify-center shrink-0"
          >
            <a href={link}>
              <Icon {icon} class="text-white size-5" />
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="bg-slate-700 bg-opacity-50 p-6 rounded-lg text-gray-200">
      <p class="mb-4 font-semibold text-xl">Contactanos</p>
      <Contact />
    </div>
  </div>
</div>
