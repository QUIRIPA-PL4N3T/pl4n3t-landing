<script>
  import logo from "$lib/images/logo.png";
  import Icon from "@iconify/svelte";
  import { _ } from 'svelte-i18n'

  const footer = [
    {
      title: $_('footer.company'),
      links: [
        { label: $_('footer.contact'), link: "/contact" },
        { label: $_('footer.about_us'), link: "/about-us" },
        { label: $_('footer.blog'), link: "/blog" },
      ],
    },
    {
      title: $_('footer.legacy_and_help'),
      links: [
        { label: $_('footer.privacy_policy'), link: "/privacy-policy" },
        { label: $_('footer.date'), link: "/privacy-policy" },
      ],
    },
    {
      title: $_('footer.platform'),
      links: [{ label: "PL4N3T", link: "https://app.pl4n3t.com" }],
    },
  ];
  const socials = [
    { icon: "mdi:facebook", link: "" },
    { icon: "mdi:linkedin", link: "" },
    { icon: "mdi:twitter", link: "" },
  ];
</script>

<footer class="bg-white dark:bg-gray-800">
  <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
    <div
      class="grid place-items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
    >
      {#each footer as ref}
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
