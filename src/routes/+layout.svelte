<script>
  import logo from "$lib/images/logo.png";
  import Header from "./Header.svelte";
  import "../app.css";
  import Icon from "@iconify/svelte";

  const references = [
    {
      title: "Company",
      links: [
        { label: "Nosotros", link: "/about-us" },
        { label: "Blog", link: "/blog" },
        { label: "Contacto", link: "/contact" },
      ],
    },
    {
      title: "Legalidad & Ayuda",
      links: [
        { label: "Politicas de privadiad", link: "/privacy-policy" },
        { label: "Solicitar Cita", link: "/privacy-policy" },
      ],
    },
    {
      title: "Plataforma",
      links: [{ label: "PL4N3T", link: "https://app.pl4n3t.com" }],
    },
  ];
  const socials = [
    { icon: "mdi:facebook", link: "" },
    { icon: "mdi:linkedin", link: "" },
    { icon: "mdi:twitter", link: "" },
  ];
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
  <!-- End block -->
  <footer class="bg-white dark:bg-gray-800">
    <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
      <div
        class="grid place-items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
      >
        {#each references as ref}
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              {ref.title}
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              {#each ref.links as { label, link }}
                <li class="mb-4">
                  <a href={link} class=" hover:underline">{label}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="text-center">
        <a
          href="/"
          class="flex items-center justify-center mb-5 text-md font-semibold text-gray-600 dark:text-white"
        >
          <img src={logo} class="h-[200px] mr-3 sm:h-9" alt="PL4N3T" />
        </a>
        <span class="block text-sm text-center text-gray-500 dark:text-gray-400"
          >© 2021-2024 PL4N3T. All Rights Reserved.
        </span>
        <ul class="flex justify-center mt-5 space-x-5">
          {#each socials as { icon, link }}
            <li>
              <a
                href={link}
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon {icon} />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </footer>
</div>
