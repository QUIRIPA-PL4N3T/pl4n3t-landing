import { c as create_ssr_component, a as subscribe, e as each, d as escape, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { $ as $format } from "../../../chunks/runtime.js";
import "@emailjs/browser";
import { I as Icon } from "../../../chunks/Icon.js";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let status = $_("contact.form.action");
  let fields = [
    {
      value: "",
      label: $_("contact.form.name"),
      type: "text",
      name: "name"
    },
    {
      value: "",
      label: $_("contact.form.email"),
      type: "email",
      name: "email"
    },
    {
      value: "",
      label: $_("contact.form.phone"),
      type: "text",
      name: "phone"
    },
    {
      value: "",
      label: $_("contact.form.subject"),
      type: "text",
      name: "subject"
    },
    {
      value: "",
      label: $_("contact.form.message"),
      type: "textarea",
      name: "message"
    }
  ];
  $$unsubscribe__();
  return `<form class="mx-auto w-full"><div class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">${each(fields, ({ label, type, name, value }) => {
    return `<div class="sm:col-span-2"><label for="first-name" class="block text-sm font-semibold leading-6">${escape(label)}</label> <div class="mt-2.5">${type === "text" || type === "number" || type === "email" ? `<input required type="text"${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}${add_attribute("placeholder", label, 0)}${add_attribute("autocomplete", `give-${name}`, 0)} class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", value, 0)}>` : `<textarea${add_attribute("name", name, 0)}${add_attribute("id", name, 0)} rows="4"${add_attribute("placeholder", label, 0)} required${add_attribute("autocomplete", `give-${name}`, 0)} class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">${escape(value || "")}</textarea>`}</div> </div>`;
  })}</div> <div class="mt-10"><button type="submit" class="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${escape(status)}</button></div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const links = [
    {
      icon: "mdi:email-outline",
      label: "info@example.com",
      link: ""
    },
    {
      icon: "mdi:phone",
      label: "+158 996 888",
      link: ""
    },
    {
      icon: "mdi:map-marker",
      label: "123 Street 256 House",
      link: ""
    }
  ];
  const socials = [
    { icon: "mdi:facebook", link: "" },
    { icon: "mdi:linkedin", link: "" },
    { icon: "mdi:twitter", link: "" }
  ];
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-xrysok_START -->${$$result.title = `<title>${escape($_("nav.services"))}</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-xrysok_END -->`, ""} <div class="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg"><div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4"><div class="px-10"><h1 class="text-4xl font-bold">${escape($_("contact.title"))}</h1> <p class="text-md mt-4 leading-relaxed">${escape($_("contact.summary"))}</p> <ul class="mt-12 space-y-8">${each(links, ({ icon, link, label }) => {
    return `<li class="flex items-center opacity-70 hover:opacity-100"><a${add_attribute("href", link, 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon, class: "size-5" }, {}, {})}</a> <a${add_attribute("href", link, 0)} class="text-sm ml-4">${escape(label)}</a> </li>`;
  })}</ul> <ul class="flex mt-12 space-x-4">${each(socials, ({ icon, link }) => {
    return `<li class="bg-primary hover:bg-primary-dark h-10 w-10 rounded-full flex items-center justify-center shrink-0"><a${add_attribute("href", link, 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon, class: "text-white size-5" }, {}, {})}</a> </li>`;
  })}</ul></div> <div class="p-6 rounded-lg"><p class="mb-4 font-semibold text-xl">${escape($_("contact.title"))}</p> ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div> <div id="request-date" class="col-span-2 w-full flex flex-wrap justify-center items-center"><h1 class="text-4xl font-bold">${escape($_("request_date"))}</h1>  <div class="calendly-inline-widget w-full" data-url="https://calendly.com/desarrollo-pl4n3t/30min?hide_event_type_details=1&hide_gdpr_banner=1" style="display:block:370px;height:700px;"></div> <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async data-svelte-h="svelte-1gz8cdi"><\/script> </div></div></div>`;
});
export {
  Page as default
};
