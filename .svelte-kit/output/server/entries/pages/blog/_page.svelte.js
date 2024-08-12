import { c as create_ssr_component, a as subscribe, d as escape, v as validate_component } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { $ as $format } from "../../../chunks/runtime.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-j48s0a_START -->${$$result.title = `<title>${escape($_("nav.blog"))}</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-j48s0a_END -->`, ""} <section class="text-gray-600 body-font overflow-hidden"><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap -m-12"><div class="p-12 md:w-1/2 flex flex-col items-start"><span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest" data-svelte-h="svelte-w35koh">CATEGORY</span> <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4" data-svelte-h="svelte-1u33gg2">Roof party normcore before they sold out, cornhole vape</h2> <p class="leading-relaxed mb-8" data-svelte-h="svelte-1op212z">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90&#39;s, slow-carb etsy tumeric. Cray pug you probably haven&#39;t heard of them hexagon kickstarter craft beer pork chic.</p> <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"><a href="#" class="text-indigo-500 inline-flex items-center">Learn More
            ${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:arrow-right" }, {}, {})}</a></div> <a href="#" class="inline-flex items-center" data-svelte-h="svelte-tlj71k"><img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> <span class="flex-grow flex flex-col pl-4"><span class="title-font font-medium text-gray-900">Holden Caulfield</span> <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span></span></a></div> <div class="p-12 md:w-1/2 flex flex-col items-start"><span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest" data-svelte-h="svelte-w35koh">CATEGORY</span> <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4" data-svelte-h="svelte-dblkz6">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2> <p class="leading-relaxed mb-8" data-svelte-h="svelte-1twdvwu">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90&#39;s, slow-carb etsy tumeric.</p> <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"><a href="#" class="text-indigo-500 inline-flex items-center">Learn More
            ${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:arrow-right" }, {}, {})}</a></div> <a href="#" class="inline-flex items-center" data-svelte-h="svelte-13upsq0"><img alt="blog" src="https://dummyimage.com/103x103" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> <span class="flex-grow flex flex-col pl-4"><span class="title-font font-medium text-gray-900">Alper Kamu</span> <span class="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span></span></a></div></div></div></section>`;
});
export {
  Page as default
};
