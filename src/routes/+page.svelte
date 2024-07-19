<script>
  import Newsletter from "./../components/global/newsletter.svelte";
  import Application from "$components/home/application.svelte";
  import Ceo from "$components/home/CEO.svelte";
  import Customer from "$components/home/customer.svelte";
  import GlobalData from "$components/home/global-data.svelte";
  import Hero from "$components/home/hero.svelte";
  import Memberships from "$components/home/memberships.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Hero />
  <Customer />
  <Application />
  <GlobalData />
  <Memberships />
  <Ceo />
  <Newsletter />
</section>
