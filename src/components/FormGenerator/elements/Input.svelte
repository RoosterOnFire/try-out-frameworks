<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let name;
  export let label;
  export let colspan = 3;

  let colspans = {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4",
    5: "sm:col-span-5",
    6: "sm:col-span-full",
  };

  const dispatch = createEventDispatcher();
</script>

<div class={colspans[colspan]}>
  <label for={name} class="block text-sm font-medium leading-6 text-gray-900">
    {label}
  </label>
  <div class="mt-2">
    <input
      type="text"
      {name}
      {id}
      autocomplete={name}
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      on:input={() => dispatch("elementValueChanged", name)}
    />
  </div>
</div>
