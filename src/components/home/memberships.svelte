<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import type { IMembership } from "$types/IMembership.js";
  import { __featureMemberships, __membership } from "$routes/+page";
  import { _ } from 'svelte-i18n'

  const memberships: IMembership[] = [__membership, __membership, __membership];

  const endpoint = "https://pl4n3t.com/api/memberships/types/";

  onMount(async function () {
    const response = await fetch(endpoint);
    const memberships = await response.json();
    console.log(memberships);
  });
</script>

<section class="bg-gray-50 dark:bg-gray-800">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
    <div class="max-w-screen-sm mx-auto text-center">
      <h2
        class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
      >
        {$_('home.memberships.trial.title')}
      </h2>
      <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
        {$_('home.memberships.trial.text')}
      </p>
      <a
        href="https://app.pl4n3t.com/"
        class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
        >
        {$_('home.memberships.trial.button')}

      </a
      >
    </div>
  </div>
</section>
<div class="container mx-auto antialiased text-gray-900 bg-white">
  <main class="mx-4 my-16">
    <div class="text-center">
      <h1 class="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
        {$_('home.memberships.title')}
      </h1>
      <p class="text-sm font-normal text-gray-400">
        {$_('home.memberships.summary')}
      </p>
    </div>
    <div
      class="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0"
    >
      {#each memberships as membership}
        <section
          class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md"
        >
          <div class="flex-shrink-0">
            <span class="text-4xl font-medium tracking-tight"
              >{membership.membership_type}</span
            >
            <br />
            <span class="text-green-800 text-5xl font-semibold"
              >${membership.price}</span
            >
          </div>
          <div class="flex-shrink-0 pb-6 space-y-2 border-b">
            <h2 class="text-2xl font-normal">
              {membership.name}
            </h2>
            <p class="text-sm text-gray-400">
              {membership.description}
            </p>
          </div>
          <ul class="mb-8 space-y-4 h-full overflow-auto">
            {#each __featureMemberships as { attribute, key }}
              <li class="flex gap-x-2 items-start">
                {#if typeof membership[key] === "boolean"}
                  <div class="w-[20px]">
                    <Icon
                      class={`text-${membership[key] ? "green-500" : "red-500"}  size-4`}
                      icon="mdi:check"
                    />
                  </div>
                  <span class="text-sm">{attribute}</span>
                {:else}
                  <Icon class="text-green-500 size-4" icon="mdi:check-all" />
                  <div class="flex flex-col">
                    <p class="text-sm">{attribute}</p>
                    <small class="text-gray-500">{membership[key]}</small>
                  </div>
                {/if}
              </li>
            {/each}
          </ul>

          <div class="flex-shrink-0 pt-4">
            <button
              class="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-primary"
            >
            {$_('buy')} {membership.membership_type}
            </button>
          </div>
        </section>
      {/each}
    </div>
  </main>
</div>
