<script>
  import Quote from "$components/global/quote.svelte";
  import Classes from "$components/services/classes.svelte";
  import Service from "$components/services/service.svelte";
  import { _ } from "svelte-i18n";

  const masterClasses = [
    {
      title: "Usar el formato de columna para personalizar SharePoint",
      summary:
        "Crear un objeto JSON para describir elementos y estilos en vistas de lista de SharePoint",
      link: "",
    },
    {
      title: "Cómo serializar JSON en C# - .NET",
      summary:
        "Uso del espacio de nombres System.Text.Json para serializar en JSON en .NET",
      link: "",
    },
    {
      title: "Dar formato a la vista de lista para personalizar SharePoint",
      summary:
        "Crear un objeto JSON para describir elementos y estilos en vistas de lista de SharePoint",
      link: "",
    },
  ];
</script>

<svelte:head>
  <title>{$_("nav.services")}</title>
  <meta name="description" content="About this app" />
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2
        class="text-md text-indigo-500 tracking-widest font-medium title-font mb-1"
      >
        {$_("services.masterclass.subtitle")}
      </h2>
      <h1 class="sm:text-3xl text-3xl font-medium title-font text-gray-900">
        {$_("services.masterclass.title")}
      </h1>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
      {#each masterClasses as masterClass, i}
        <Classes props={masterClass} />
      {/each}
    </div>
  </div>
</section>
<section class="flex flex-col gap-2">
  {#each $_("home.features") as service, i}
    <Service props={service} />
  {/each}
</section>
<Quote
  props={{
    person: $_("home.ceo.person"),
    position: $_("home.ceo.position"),
    summary: $_("home.ceo.summary"),
  }}
/>
