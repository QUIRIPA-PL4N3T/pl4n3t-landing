<script lang="ts">
  import Icon from "@iconify/svelte";

  interface IProps {
    title: string;
    summary: string;
    link: string;
  }
  export let props: IProps;
</script>

<div class="p-4 md:w-1/3">
  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
    <div class="flex items-center mb-3">
      <div
        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0"
      >
        <Icon
          icon="mdi:video-image"
          class="size-6 mx-auto text-gray-200 dark:text-gray-600"
        />
      </div>
      <h2 class="text-gray-900 text-lg title-font font-medium">
        {props.title}
      </h2>
    </div>
    <div class="flex-grow">
      <p class="leading-relaxed text-base">
        {props.summary}
      </p>
      <a class="mt-3 text-primary inline-flex items-center gap-2" href={props.link}
        >Learn More
        <Icon
          icon="mdi:arrow-right"
          class="mx-auto text-primary dark:text-gray-600"
        />
      </a>
    </div>
  </div>
</div>
