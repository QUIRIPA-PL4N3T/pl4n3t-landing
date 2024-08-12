import { c as create_ssr_component, a as subscribe, d as escape } from "../../../chunks/ssr.js";
import { $ as $format } from "../../../chunks/runtime.js";
import "@emailjs/browser";
import "../../../chunks/functions.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-xrysok_START -->${$$result.title = `<title>${escape($_("nav.services"))}</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-xrysok_END -->`, ""} <div class="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg"><div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4"><div class="px-10"><h1 class="text-4xl font-bold">${escape($_("footer.privacy_policy"))}</h1> <p class="text-md mt-4 leading-relaxed">${escape($_("privacy_policy.summary"))}</p></div></div></div>`;
});
export {
  Page as default
};
