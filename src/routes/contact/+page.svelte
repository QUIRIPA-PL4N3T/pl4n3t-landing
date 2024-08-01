<script>
  import Contact from "$components/global/contact.svelte";
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";

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
  <title>{$_("nav.services")}</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg">
  <div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
    <div class="px-10">
      <h1 class="text-4xl font-bold">{$_("contact.title")}</h1>
      <p class="text-md mt-4 leading-relaxed">
        {$_("contact.summary")}
      </p>

      <ul class="mt-12 space-y-8">
        {#each links as { icon, link, label }}
          <li class="flex items-center opacity-70 hover:opacity-100">
            <a href={link}>
              <Icon {icon} class="size-5" />
            </a>
            <a href={link} class="text-sm ml-4">
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

    <div class="p-6 rounded-lg">
      <p class="mb-4 font-semibold text-xl">{$_("contact.title")}</p>
      <Contact />
    </div>
  </div>
</div>
