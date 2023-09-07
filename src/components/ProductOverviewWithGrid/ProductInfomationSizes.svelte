<script>
  export let sizes;
</script>

<!-- Sizes -->
<div class="mt-10">
  <div class="flex items-center justify-between">
    <h3 class="text-sm font-medium text-gray-900">Size</h3>
    <a
      href="#"
      class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
    >
      Size guide
    </a>
  </div>
  <fieldset class="mt-4">
    <legend class="sr-only">Choose a size</legend>
    <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200"
      >
        <input
          type="radio"
          name="size-choice"
          value="XXS"
          disabled
          class="sr-only"
          aria-labelledby="size-choice-0-label"
        />
        <span id="size-choice-0-label">XXS</span>
        <span
          aria-hidden="true"
          class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
        >
          <svg
            class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            stroke="currentColor"
          >
            <line
              x1="0"
              y1="100"
              x2="100"
              y2="0"
              vector-effect="non-scaling-stroke"
            />
          </svg>
        </span>
      </label>
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
      >
        <input
          type="radio"
          name="size-choice"
          value="XS"
          class="sr-only"
          aria-labelledby="size-choice-1-label"
        />
        <span id="size-choice-1-label">XS</span>
        <!-- Active: "border", Not Active: "border-2" Checked: "border-indigo-500", Not Checked: "border-transparent" -->
        <span
          class="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        />
      </label>
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
      >
        <input
          type="radio"
          name="size-choice"
          value="S"
          class="sr-only"
          aria-labelledby="size-choice-2-label"
        />
        <span id="size-choice-2-label">S</span>
        <!-- Active: "border", Not Active: "border-2" Checked: "border-indigo-500", Not Checked: "border-transparent" -->
        <span
          class="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        />
      </label>
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
      >
        <input
          type="radio"
          name="size-choice"
          value="M"
          class="sr-only"
          aria-labelledby="size-choice-3-label"
        />
        <span id="size-choice-3-label">M</span>
        <!-- Active: "border", Not Active: "border-2" Checked: "border-indigo-500", Not Checked: "border-transparent" -->
        <span
          class="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        />
      </label>
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
      >
        <input
          type="radio"
          name="size-choice"
          value="L"
          class="sr-only"
          aria-labelledby="size-choice-4-label"
        />
        <span id="size-choice-4-label">L</span>
        <!-- Active: "border", Not Active: "border-2" Checked: "border-indigo-500", Not Checked: "border-transparent" -->
        <span
          class="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        />
      </label>
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
      >
        <input
          type="radio"
          name="size-choice"
          value="XL"
          class="sr-only"
          aria-labelledby="size-choice-5-label"
        />
        <span id="size-choice-5-label">XL</span>
        <!-- Active: "border", Not Active: "border-2" Checked: "border-indigo-500", Not Checked: "border-transparent" -->
        <span
          class="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        />
      </label>
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
      >
        <input
          type="radio"
          name="size-choice"
          value="2XL"
          class="sr-only"
          aria-labelledby="size-choice-6-label"
        />
        <span id="size-choice-6-label">2XL</span>
        <!-- Active: "border", Not Active: "border-2" Checked: "border-indigo-500", Not Checked: "border-transparent" -->
        <span
          class="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        />
      </label>
      <!-- Active: "ring-2 ring-indigo-500" -->
      <label
        class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
      >
        <input
          type="radio"
          name="size-choice"
          value="3XL"
          class="sr-only"
          aria-labelledby="size-choice-7-label"
        />
        <span id="size-choice-7-label">3XL</span>
        <!-- Active: "border", Not Active: "border-2" Checked: "border-indigo-500", Not Checked: "border-transparent" -->
        <span
          class="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        />
      </label>
    </div>
  </fieldset>
</div>
