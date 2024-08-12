<script>
  import video from "$lib/videos/hero-about.mp4";
  import offices from "$lib/images/offices.jpeg";
  import camila from "$lib/images/team/camila.webp";
  import juan from "$lib/images/team/juan.webp";
  import sebastian from "$lib/images/team/sebastian.webp";
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";

  const corpValues = [
    {
      summary: $_("about_us.commitment_summary"),
      color: "text-red-700",
      value: $_("about_us.commitment"),
    },
    {
      summary: $_("about_us.collaboration_summary"),
      color: "text-orange-700",
      value: $_("about_us.collaboration"),
    },
    {
      summary: $_("about_us.transparency_summary"),
      color: "text-gray-400",
      value: $_("about_us.transparency"),
    },
    {
      summary: $_("about_us.innovation_summary"),
      color: "text-purple-700",
      value: $_("about_us.innovation"),
    },
  ];

  const team = [
    {
      name: "Maria Camila fajardo",
      charge: $_("position.ceo"),
      photo: camila,
    },
    {
      name: "Juan Sebastian Munoz",
      charge: $_("position.counter"),
      photo: juan,
    },
    {
      name: "Juan Sebastian Torres",
      charge: $_("position.developer"),
      photo: sebastian,
    },
  ];
</script>

<svelte:head>
  <title>{$_("nav.about_us")}</title>
  <meta name="description" content="About this app" />
</svelte:head>

<section class=" top-0 flex items-center justify-center mb-12 overflow-hidden">
  <div
    class="absolute max-w-4xl px-8 py-2 border-gray-200 border text-left z-30 p-5 text-2xl font-semibold text-white"
  >
    <div class="bg-black text-white py-20">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center my-2 md:my-2"
      >
        <div
          class="flex flex-col w-full px-16 justify-center text-center items-start py-2"
        >
          <h1 class="text-8xl font-bold text-gray-300">Pl4n3t</h1>
          <h1 class="text-7xl text-gray-300">Quiripa</h1>
          <small class="font-bold mt-2">{$_("about_us.founded")} en 2023</small>

          <a href="#funtation">
            <Icon
              icon="mdi:arrow-down"
              class="text-white text-center size-8 animate-bounce"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <video
    autoplay
    loop
    muted
    class="relative -z-10 top-0 w-auto min-w-full min-h-full max-w-none"
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>
<div class="container mx-12 flex flex-wrap items-center justify-center">
  <div class="flex flex-wrap gap-10 justify-center items-center w-full">
    <div class="lg:w-1/3 md:w-full w-full flex flex-col gap-4">
      <h2 class="font-sans font-semibold text-primary-dark text-3xl">
        {$_("about_us.about_us")}
      </h2>
      <p>
        {@html $_("about_us.about_us_summary")}
      </p>
      <h2 class="font-sans font-semibold text-primary-dark text-3xl">{$_("about_us.vision")}</h2>
      <p>
        {@html $_("about_us.vision_summary")}
      </p>
      <h2 class="font-sans font-semibold text-primary-dark text-3xl">{$_("about_us.mission")}</h2>
      <p>
        {@html $_("about_us.mission_summary")}
      </p>
      <h2 class="font-sans font-semibold text-primary-dark text-3xl">
        {$_("about_us.value_proposal")}
      </h2>
      <p>
        {@html $_("about_us.mission_summary")}
      </p>
    </div>
    <div class="lg:w-1/3 md:w-full w-full mb-4 mx-2 rounded-lg lg:mb-0 lg:flex">
      <img
        class="hidden w-full h-[650px] mb-4 rounded-lg lg:mb-0 lg:flex -rotate-6"
        src={offices}
        alt="pl4n3t"
      />
    </div>
  </div>
</div>
<section class="bg-gray-50 dark:bg-gray-800">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
    <h5 class="text-xl font-bold">{$_("about_us.values")}</h5>

    <div class="flex flex-wrap justify-center items-center gap-4 p-8">
      {#each corpValues as { value, color, summary }}
        <div
          class={`max-w-md w-[400px] p-2 rounded-lg flex flex-col`}
        >
          <span class="text-md font-semibold my-2">{value}</span>
          <Icon
            icon="mdi:sprout-outline"
            class='size-12 mx-auto mb-3'
          />
          <p class="text-md font-semibold my-2">{summary}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1
        class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"
      >
        {$_("about_us.team.title")}
      </h1>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
      {#each team as { name, photo, charge }}
        <div class="p-4 max-w-md">
          <div
            class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
          >
            <img
              alt="team"
              class="flex-shrink-0 rounded-lg w-32 h-32 object-center sm:mb-0 mb-4"
              src={photo}
            />
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900">
                {name}
              </h2>
              <h3 class="text-gray-500 mb-3">{charge}</h3>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<div class="w-full text-center my-10">
  <div class="flex flex-wrap gap-2 justify-center">
    <h5 class="text-xl font-medium">Estamos ubicados</h5>
    <Icon icon="mdi:map-marker" class="text-black text-center size-8" />
  </div>
  <small>Carre 20 #36 - 04 Colombia (Yopal - Casanare)</small>
</div>
<div class="relative w-full h-96 mt-10 opacity-40 hover:opacity-100">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <iframe
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.592175613873!2d-72.39133558885885!3d5.326126735894974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0df373987cdd%3A0x7d0f9ae52a43184f!2sFundaci%C3%B3n%20Cataruben!5e0!3m2!1ses-419!2sco!4v1721405594874!5m2!1ses-419!2sco"
    frameborder="0"
    style="border:0;"
    allowfullscreen={true}
    tabindex="0"
    title="map"
  />
</div>
