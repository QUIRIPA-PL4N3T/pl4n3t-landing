<script>
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";
  import "../app.css";

  import {
    addMessages,
    init,
    getLocaleFromNavigator,
    isLoading,
  } from "svelte-i18n";

  import en from "../locales/en.json";
  import es from "../locales/es.json";

  addMessages("en", en);
  addMessages("es", es);

  init({
    fallbackLocale: "es",
    initialLocale: getLocaleFromNavigator(),
  });
</script>

<div class="app">
  {#if $isLoading}
    Please wait...
  {:else}
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  {/if}
</div>
