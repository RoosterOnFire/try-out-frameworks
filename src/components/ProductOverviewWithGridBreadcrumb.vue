<script setup>
const props = defineProps({
  breadcrumbs: Array,
});
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol
      role="list"
      class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <template v-for="(breadcrumb, breadcrumbIndex) in breadcrumbs">
        <li v-if="breadcrumbIndex < breadcrumbs.length - 1">
          <div class="flex items-center">
            <a
              :href="breadcrumb[0]"
              class="mr-2 text-sm font-medium text-gray-900"
            >
              {{ breadcrumb[1] }}
            </a>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li v-else class="text-sm">
          <a
            :href="breadcrumb[0]"
            aria-current="page"
            class="font-medium text-gray-500 hover:text-gray-600"
          >
            {{ breadcrumb[1] }}
          </a>
        </li>
      </template>
    </ol>
  </nav>
</template>
