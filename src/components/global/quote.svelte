<script lang="ts">
  import Icon from "@iconify/svelte";

  interface IProps {
    summary: string,
    person: string,
    position: string
  }
  export let props: IProps;

</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <Icon
        icon="mdi:comment-quote-outline"
        class="size-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
      />
      <p class="leading-relaxed text-lg">"{props.summary}"</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{props.person}</h2>
      <p class="text-gray-500">{props.position}</p>
    </div>
  </div>
</section>
