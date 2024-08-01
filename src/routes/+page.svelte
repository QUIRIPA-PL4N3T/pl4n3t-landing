<script>
	import QuoteAvatar from '$components/global/quote-avatar.svelte';
  import Newsletter from "$components/global/newsletter.svelte";
  import Application from "$components/home/application.svelte";
  import Customer from "$components/home/customer.svelte";
  import GlobalData from "$components/home/global-data.svelte";
  import Hero from "$components/home/hero.svelte";
  import camila from "$lib/images/team/camila.webp";
  import Memberships from "$components/home/memberships.svelte";
    import { _ } from 'svelte-i18n'
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
  <QuoteAvatar props={{
    person: $_('home.ceo.person'),
    position: $_('home.ceo.position'),
    summary: $_('home.ceo.summary'),
    img: camila
  }} />
  <Newsletter />
</section>
