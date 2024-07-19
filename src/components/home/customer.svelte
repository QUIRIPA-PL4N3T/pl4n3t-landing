<script>
  import logo from "$lib/images/logo.png";

  export const customer = [
    { label: "TSCasanare", link: "services", img: logo },
    { label: "Cataruben", link: "about-us", img: logo },
    { label: "Quits", link: "quit", img: logo },
    { label: "Quits", link: "quit", img: logo },
    { label: "Quits", link: "quit", img: logo },
    { label: "Quits", link: "quit", img: logo },
  ];
</script>

<section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
    <div
      class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
    >
      {#each customer as { label, link, img }, i}
        <a href={link} class="flex items-center lg:justify-center">
          <img
            alt={label}
            src={img}
            class="h-12 grayscale hover:grayscale-0 hover:text-gray-900 dark:hover:text-white opacity-50 hover:opacity-100"
          />
        </a>
      {/each}
    </div>
  </div>
</section>
