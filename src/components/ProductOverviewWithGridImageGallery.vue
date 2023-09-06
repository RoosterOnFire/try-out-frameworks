<script setup>
const props = defineProps({
  images: Array,
});
</script>

<template>
  <div
    class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
  >
    <div
      class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"
    >
      <img
        :src="images[0][0]"
        :alt="images[0][1]"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
      <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
        <img
          :src="images[1][0]"
          :alt="images[1][1]"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
        <img
          :src="images[2][0]"
          :alt="images[2][1]"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <div
      class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
    >
      <img
        :src="images[3][0]"
        :alt="images[3][1]"
        class="h-full w-full object-cover object-center"
      />
    </div>
  </div>
</template>
