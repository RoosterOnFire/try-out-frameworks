<script>
  export let header;
  export let content;
  export let type = "normal";
</script>

<div class="border-b border-gray-900/10 pb-12">
  <h2 class="text-base font-semibold leading-7 text-gray-900">
    {header}
  </h2>
  <p class="mt-1 text-sm leading-6 text-gray-600">
    {content}
  </p>
  {#if type == "grid"}
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <slot />
    </div>
  {:else}
    <div class="mt-10 space-y-10">
      <slot />
    </div>
  {/if}
</div>
