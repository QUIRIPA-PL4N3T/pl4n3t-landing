import { c as create_ssr_component, a as subscribe, d as escape } from "../../chunks/ssr.js";
import { $ as $format } from "../../chunks/runtime.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe__();
  return `<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"><div class="mx-auto max-w-screen-sm text-center"><h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500" data-svelte-h="svelte-195ldm2">404</h1> <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">${escape($_("not_found"))}</p> <a class="mb-8 text-primary font-bold lg:text-xl" href="/">${escape($_("back"))}</a></div></div></section>`;
});
export {
  Error as default
};
