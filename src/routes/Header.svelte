<script>
  import logo from "$lib/images/logo.png";

  export const menu = [
    { label: "Servicios", link: "services" },
    { label: "Nosotros", link: "about-us" },
    { label: "Blog", link: "blog" },
    { label: "Contacto", link: "contact" },
  ];
</script>

<header class=" w-full px-6">
  <nav class="border-b-gray-600 border-b-2 py-2.5">
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
    >
      <a href="/" class="flex items-center">
        <img src={logo} class="h-[80px] mr-3 sm:h-[80px]" alt="PL4N3T Logo" />
      </a>
      <div class="flex">
        <div class="flex items-center">
          <a
            href="https://app.pl4n3t.com/sing-in"
            target="_blank"
            class="text-white bg-slate-800 hover:bg-gray-900 dark:bg-white dark:text-black focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-12 py-2 lg:py-2 sm:mr-2 lg:mr-6"
            >Log In</a
          >
        </div>
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            {#each menu as { label, link }, i}
              <li>
                <a
                  href={link}
                  class="block py-2 pl-3 pr-4 hover:text-primary"
                  aria-current="page">{label}</a
                >
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
