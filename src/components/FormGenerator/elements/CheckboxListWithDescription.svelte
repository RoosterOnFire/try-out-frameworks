<script>
  import { createEventDispatcher } from "svelte";

  export let name;
  export let legend;
  export let items;

  const dispatch = createEventDispatcher();
</script>

<fieldset>
  <legend class="text-sm font-semibold leading-6 text-gray-900">
    {legend}
  </legend>
  <div class="mt-6 space-y-6">
    {#each items as item}
      <div class="relative flex gap-x-3">
        <div class="flex h-6 items-center">
          <input
            id={item.name}
            {name}
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            on:input={() => dispatch("elementValueChanged", name)}
          />
        </div>
        <div class="text-sm leading-6">
          <label for={item.name} class="font-medium text-gray-900">
            {item.label}
          </label>
          <p class="text-gray-500">
            {item.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</fieldset>
