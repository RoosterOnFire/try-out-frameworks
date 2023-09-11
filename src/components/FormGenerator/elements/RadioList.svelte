<script>
  import { createEventDispatcher } from "svelte";

  export let labels;
  export let name;

  const dispatch = createEventDispatcher();
</script>

<fieldset>
  <div class="mt-6 space-y-6">
    {#each labels as label}
      <div class="flex items-center gap-x-3">
        <input
          id={label.name}
          {name}
          type="radio"
          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          on:input={() => dispatch("elementValueChanged", name)}
        />
        <label
          for={label.name}
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          {label.label}
        </label>
      </div>
    {/each}
  </div>
</fieldset>
