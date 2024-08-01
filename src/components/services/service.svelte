<script lang="ts">
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";

  interface IProps {
    title: string;
    summary: string;
    how: string[];
    benefits: string[];
    left: boolean;
    img: string;
  }
  export let props: IProps;
</script>

<section class="overflow-hidden bg-white py-8 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto flex justify-between">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h3
            id={props.title}
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {props.title}
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {props.summary}
          </p>
          <div class="w-full border-b-2 mt-3">
            <h4 class="text-xl text-primary font-semibold">
              {$_("service.how_do")}
            </h4>
          </div>
          <dl
            class="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none"
          >
            {#each props.how as how, i}
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <span class="absolute left-1 top-1 size-3 text-indigo-600">
                    {i + 1}
                  </span>
                </dt>
                <dd class="inline">{how}</dd>
              </div>
            {/each}
          </dl>
          <div class="w-full border-b-2 mt-3">
            <h4 class="text-xl text-primary font-semibold">
              {$_("service.benefits")}
            </h4>
          </div>
          <dl
            class="mt-3 space-y-2 text-base leading-7 text-gray-600 lg:max-w-none"
          >
            {#each props.benefits as benefit}
              <div class="relative pl-9">
                <dt class="inline font-bold text-primary">
                  <Icon
                    icon="mdi:check-all"
                    class="absolute left-1 top-1 size-5 text-indigo-600"
                  />
                </dt>
                <dd class="inline">{benefit}</dd>
              </div>
            {/each}
          </dl>
        </div>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="/" class="text-sm font-semibold leading-6 text-gray-700"
            >{$_("request_date")}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div class={`${props.left ? "right-0" : "order-last"} w-[28rem] max-w-none hidden lg:flex xl:w-1/2 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0`}>
        <img
          src={props.img}
          alt={props.title}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
</section>
