<script>
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";
</script>

<section class="bg-gray-50 dark:bg-gray-800">
  <div
    class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
  >
    {#each $_("home.features") as { title, summary, img, how }, i}
      <div class="mx-auto flex justify-between">
        <div
          class={`${(i + 1) % 2 === 0 ? "right-0" : "order-last"} hidden w-full h-full mb-4 mx-2 rounded-lg lg:mb-0 lg:flex`}
        >
          <img
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={img}
            alt={title}
          />
        </div>
        <div class={`text-gray-500 sm:text-lg dark:text-gray-400`}>
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {summary}
          </p>
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {#each how.slice(0, 3) as item, i}
              <li class="flex space-x-3 items-center">
                <Icon class="text-primary size-6" icon="mdi:check-circle" />
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >{item}</span
                >
              </li>
            {/each}
          </ul>
          <a class="mb-8 font-light lg:text-xl" href={"/services/#" + title}>{$_("read_more")}</a>
        </div>
      </div>
    {/each}
  </div>
</section>
