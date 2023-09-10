<script setup>
  import { onMount } from "svelte";
  import Block from "./Block.svelte";
  import { formState } from "./GeneratorStore";
  import InputWithPrefix from "./InputWithPrefix.svelte";
  import Photo from "./Photo.svelte";
  import Textarea from "./Textarea.svelte";
  import Upload from "./Upload.svelte";

  export let formBlocks;

  let generatorForm;

  function synsStore(event) {
    const formdata = new FormData(generatorForm);
    formState.update(event.detail, formdata.get(event.detail));
  }

  function handleSubmit() {
    console.log($formState);
  }

  onMount(() => {
    formState.init(formBlocks);
  });
</script>

<form bind:this={generatorForm} on:submit|preventDefault={handleSubmit}>
  <div class="space-y-12">
    {#each formBlocks as formBlock}
      <Block header={formBlock.header} content={formBlock.content}>
        {#each formBlock.elements as element, formElementIndex}
          {#if element.type == "inputWithPrefix"}
            <InputWithPrefix
              id={`${element.name}-${formElementIndex}`}
              name={element.name}
              label={element.label}
              prefix={element.prefix}
              placeholder={element.placeholder}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "textarea"}
            <Textarea
              id={`${element.name}-${formElementIndex}`}
              name={element.name}
              label={element.label}
              placeholder={element.placeholder}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "photo"}
            <Photo
              id={`${element.name}-${formElementIndex}`}
              name={element.name}
              label={element.label}
            />
          {:else if element.type == "upload"}
            <Upload
              id={`${element.name}-${formElementIndex}`}
              name={element.name}
              label={element.label}
              fileTypes={element.fileTypes}
              fileMaxSize={element.fileMaxSize}
            />
          {/if}
        {/each}
      </Block>
    {/each}
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900">Cancel</button
      >
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </div>
</form>
