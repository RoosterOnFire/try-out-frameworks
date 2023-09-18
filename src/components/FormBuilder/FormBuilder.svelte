<script>
  import Sortable from "sortablejs";
  import { onMount } from "svelte";

  let leftComponent;
  let formElements = [];

  function addFormElement(type) {
    formElements = [...formElements, "form element"];
  }

  onMount(() => {
    new Sortable(leftComponent, {
      animation: 150,
    });
  });
</script>

<div class="w-100 bg-gray-50 flex gap-5">
  <ul
    class="block flex-1 border border-1 border-gray-300 rounded bg-gray-100 px-4 py-2 space-y-3"
    bind:this={leftComponent}
  >
    {#each formElements as formElement}
      <li>{formElement}</li>
    {/each}
  </ul>
  <ul
    class="block flex-1 border border-1 border-gray-300 rounded bg-gray-100 px-4 py-2 space-y-3"
  >
    <li class="flex items-center gap-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class="w-4 h-4 bg-gray-400 inline-flex justify-center items-center rounded-full cursor-pointer"
        on:click={addFormElement}
      />
      <input class="w-full" placeholder="text" disabled />
    </li>
    <li class="flex items-center gap-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class="w-4 h-4 bg-gray-400 inline-flex justify-center items-center rounded-full cursor-pointer"
        on:click={addFormElement}
      />
      <input class="w-full" placeholder="inputWithPrefix" disabled />
    </li>
    <li class="flex items-center gap-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class="w-4 h-4 bg-gray-400 inline-flex justify-center items-center rounded-full cursor-pointer"
        on:click={addFormElement}
      />
      <select class="w-full" disabled>
        <option selected>select</option>
      </select>
    </li>
    <li class="flex items-center gap-2">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class="w-4 h-4 bg-gray-400 inline-flex justify-center items-center rounded-full cursor-pointer"
        on:click={addFormElement}
      />
      <textarea class="w-full" disabled>textarea</textarea>
    </li>
  </ul>
</div>
