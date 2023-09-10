<script setup>
  import FormGeneratorInputWithPrefix from "./FormGeneratorInputWithPrefix.svelte";

  export let formElements;
</script>

<form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {#each formElements as formElement, formElementIndex}
          {#if formElement.type == "inputWithPrefix"}
            <FormGeneratorInputWithPrefix
              id={`${formElement.name}-${formElementIndex}`}
              name={formElement.name}
              label={formElement.label}
              prefix={formElement.prefix}
              placeholder={formElement.placeholder}
            />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</form>
