<script>
  import Icon from "@iconify/svelte";
</script>

<section class="bg-gray-50 dark:bg-gray-800">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
    <figure class="max-w-screen-md mx-auto">
      <Icon
        icon="mdi:comment-quote"
        class="size-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
      />
      <blockquote>
        <p
          class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white"
        >
          "Brutas, pero dicididas"
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <img
          class="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          alt="profile picture"
        />
        <div
          class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
        >
          <div class="pr-3 font-medium text-gray-900 dark:text-white">
            Maria Camila Fajardo
          </div>
          <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            CEO de Quiripa
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>
