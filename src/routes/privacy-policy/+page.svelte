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
      <h1 class="text-4xl font-bold">{$_("footer.privacy_policy")}</h1>
      <p class="text-md mt-4 leading-relaxed">
        {$_("privacy_policy.summary")}
      </p>
    </div>
  </div>
</div>
