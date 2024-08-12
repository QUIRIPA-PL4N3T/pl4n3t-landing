<script>
  import logo from "$lib/images/logo.png";
  import { _ } from 'svelte-i18n'
  import { page } from '$app/stores';  

  export const menu = [
    { label: $_('nav.services'), link: "/services" },
    { label: $_('nav.about_us'), link: "/about-us" },
    // { label: $_('nav.blog'), link: "/blog" },
    { label: $_('nav.contact'), link: "/contact" },
  ];  
</script>

<header class=" w-full px-6">
  <nav class="border-b-gray-600 border-b-2 py-2.5">
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
    >
      <a href="/" class="flex items-center">
        <img src={logo} class="w-32 h-24 object-contain" alt="PL4N3T Logo" />
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
                  class={`block py-2 pl-3 pr-4 hover:text-primary ${$page.url.pathname === link ? 'text-primary' : ''}`}
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
