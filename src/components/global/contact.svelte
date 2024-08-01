<script>
  import { _ } from "svelte-i18n";
  import emailjs from "@emailjs/browser";
  let status = $_("contact.form.action");
  let fields = [
    {
      value: "",
      label: $_("contact.form.name"),
      type: "text",
      name: "name",
    },
    {
      value: "",
      label: $_("contact.form.email"),
      type: "email",
      name: "email",
    },
    {
      value: "",
      label: $_("contact.form.phone"),
      type: "text",
      name: "phone",
    },
    {
      value: "",
      label: $_("contact.form.subject"),
      type: "text",
      name: "subject",
    },
    {
      value: "",
      label: $_("contact.form.message"),
      type: "textarea",
      name: "message",
    },
  ];

  const sendEmail = (e) => {
    emailjs
      .sendForm("default_service", "template_a69d92u", e.target, {
        publicKey: "iHKL6oBJgidEw9uV-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          clear();
          status = $_("contact.form.success");
          setTimeout(() => {
            status = $_("contact.form.action");
          }, 2000);
        },
        (error) => {
          clear();
          console.warn(error.text);
        }
      );
  };

  const clear = () => {
    fields = [
      ...fields.map((f) => {
        return {
          ...f,
          value: "",
        };
      }),
    ];
  };
</script>

<form class="mx-auto w-full" on:submit|preventDefault={sendEmail}>
  <div class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
    {#each fields as { label, type, name, value }}
      <div class="sm:col-span-2">
        <label for="first-name" class="block text-sm font-semibold leading-6"
          >{label}</label
        >
        <div class="mt-2.5">
          {#if type === "text" || type === "number" || type === "email"}
            <input
              bind:value
              required
              type="text"
              {name}
              id={name}
              placeholder={label}
              autocomplete={`give-${name}`}
              class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          {:else}
            <textarea
              {name}
              id={name}
              rows="4"
              placeholder={label}
              bind:value
              required
              autocomplete={`give-${name}`}
              class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          {/if}
        </div>
      </div>
    {/each}
  </div>
  <div class="mt-10">
    <button
      type="submit"
      class="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >{status}</button
    >
  </div>
</form>
