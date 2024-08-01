<script>
  import hero from "$lib/images/hero.png";
  import { _ } from 'svelte-i18n'

</script>

<section class="bg-white dark:bg-gray-900">
  <div
    class="flex flex-wrap max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10"
  >
    <div class="mr-auto place-self-center lg:w-1/3">
      <h1
        class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
      >
        {$_('home.hero.title')} <br /><span class="text-primary">Net Zero.</span>
      </h1>
      <p
        class="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
      >
        {$_('home.hero.resume')}
      </p>
      <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a
          href="https://app.pl4n3t.com/sing-up"
          class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-200 bg-slate-700 dark:bg-white border border-gray-200 rounded-lg sm:w-auto hover:bg-slate-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
        {$_('home.hero.register')}
        </a>
        <a
          href="https://app.pl4n3t.com/sing-in"
          class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
        {$_('home.hero.request_date')}
        </a>
      </div>
    </div>
    <div class="hidden lg:mt-0 lg:w-2/3 lg:flex translate-x-[260px]">
      <img alt="hero" src={hero} class="w-full h-full" />
    </div>
  </div>
</section>
