import { writable } from "svelte/store";

function createFormState() {
  const formStateWritable = writable({});

  return {
    subscribe: formStateWritable.subscribe,

    update: (key: string, value: any) =>
      formStateWritable.update((state) => {
        return { ...state, [key]: value };
      }),

    reset: () => formStateWritable.set({}),

    init: (formBlocks: any) => {
      formBlocks.forEach((block: any) => {
        block.elements.forEach((element: any) => {
          formStateWritable.update((state) => {
            return { ...state, [element.name]: undefined };
          });
        });
      });
    },
  };
}

export const formState = createFormState();
