<script setup>
  import { onMount } from "svelte";
  import { generatorStore } from "./GeneratorStore";
  import Block from "./elements/Block.svelte";
  import CheckboxListWithDescription from "./elements/CheckboxListWithDescription.svelte";
  import Input from "./elements/Input.svelte";
  import InputWithPrefix from "./elements/InputWithPrefix.svelte";
  import Photo from "./elements/Photo.svelte";
  import Select from "./elements/Select.svelte";
  import Textarea from "./elements/Textarea.svelte";
  import Upload from "./elements/Upload.svelte";
  import RadioList from "./elements/RadioList.svelte";

  export let formBlocks;

  let generatorForm;

  function synsStore(event) {
    const formdata = new FormData(generatorForm);
    generatorStore.update(event.detail, formdata.get(event.detail));
  }

  function handleSubmit() {
    console.log($generatorStore);
  }

  onMount(() => {
    generatorStore.init(formBlocks);
  });
</script>

<form bind:this={generatorForm} on:submit|preventDefault={handleSubmit}>
  <div class="space-y-12">
    {#each formBlocks as formBlock}
      <Block {...formBlock}>
        {#each formBlock.elements as element, formElementIndex}
          {#if element.type == "input"}
            <Input
              id={`${element.name}-${formElementIndex}`}
              {...element}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "inputWithPrefix"}
            <InputWithPrefix
              id={`${element.name}-${formElementIndex}`}
              {...element}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "textarea"}
            <Textarea
              id={`${element.name}-${formElementIndex}`}
              {...element}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "select"}
            <Select
              id={`${element.name}-${formElementIndex}`}
              {...element}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "checkbox-list-with-description"}
            <CheckboxListWithDescription
              id={`${element.name}-${formElementIndex}`}
              {...element}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "radio-list"}
            <RadioList
              id={`${element.name}-${formElementIndex}`}
              {...element}
              on:elementValueChanged={synsStore}
            />
          {:else if element.type == "photo"}
            <Photo
              id={`${element.name}-${formElementIndex}`}
              name={element.name}
              label={element.label}
            />
          {:else if element.type == "upload"}
            <Upload id={`${element.name}-${formElementIndex}`} {...element} />
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
