<script>
  export let colors;

  let selectedColor = undefined;
</script>

<div>
  <h3 class="text-sm font-medium text-gray-900">Color</h3>

  <fieldset class="mt-4">
    <legend class="sr-only">Choose a color</legend>
    <div class="flex items-center space-x-3">
      <!--
        Active and Checked: "ring ring-offset-1"
        Not Active and Checked: "ring-2"
      -->
      {#each colors as color, key}
        <label
          class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400 {color.name ==
            selectedColor && 'ring-2'}"
        >
          <input
            type="radio"
            name="color-choice"
            value={color.name}
            class="sr-only"
            aria-labelledby="color-choice-{key}-label"
            bind:group={selectedColor}
          />
          <span id="color-choice-{key}-label" class="sr-only">{color.name}</span
          >
          <span
            aria-hidden="true"
            class="h-8 w-8 {color.class} rounded-full border border-black border-opacity-10"
          />
        </label>
      {/each}
    </div>
  </fieldset>
</div>
