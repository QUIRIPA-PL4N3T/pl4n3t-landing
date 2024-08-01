<script lang="ts">
  import Icon from "@iconify/svelte";

  interface IProps {
    summary: string,
    person: string,
    position: string,
    img: string
  }
  export let props: IProps;

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
        "{props.summary}"
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <img
          class="w-6 h-6 rounded-full"
          src={props.img}
          alt={props.person}
        />
        <div
          class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
        >
          <div class="pr-3 font-medium text-gray-900 dark:text-white">
            {props.person}
          </div>
          <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            {props.position}
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

