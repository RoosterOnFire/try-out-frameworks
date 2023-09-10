<script setup>
  import FormGeneratorInputWithPrefix from "./FormGeneratorInputWithPrefix.svelte";
  import FormGeneratorPhoto from "./FormGeneratorPhoto.svelte";
  import FormGeenratorTextarea from "./FormGeneratorTextarea.svelte";
  import FormGeneratorUpload from "./FormGeneratorUpload.svelte";

  export let formBlocks;
</script>

<form>
  <div class="space-y-12">
    {#each formBlocks as formBlock}
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          {formBlock.header}
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          {formBlock.content}
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {#each formBlock.elements as element, formElementIndex}
            {#if element.type == "inputWithPrefix"}
              <FormGeneratorInputWithPrefix
                id={`${element.name}-${formElementIndex}`}
                name={element.name}
                label={element.label}
                prefix={element.prefix}
                placeholder={element.placeholder}
              />
            {:else if element.type == "textarea"}
              <FormGeenratorTextarea
                id={`${element.name}-${formElementIndex}`}
                name={element.name}
                label={element.label}
                placeholder={element.placeholder}
              />
            {:else if element.type == "photo"}
              <FormGeneratorPhoto
                id={`${element.name}-${formElementIndex}`}
                name={element.name}
                label={element.label}
              />
            {:else if element.type == "upload"}
              <FormGeneratorUpload
                id={`${element.name}-${formElementIndex}`}
                name={element.name}
                label={element.label}
                fileTypes={element.fileTypes}
                fileMaxSize={element.fileMaxSize}
              />
            {/if}
          {/each}
        </div>
      </div>
    {/each}
  </div>
</form>
