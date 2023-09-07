<script>
  import ProductInfomationColors from "./ProductInfomationColors.svelte";
  import ProductInfomationSizes from "./ProductInfomationSizes.svelte";
  import ProductInformationReviews from "./ProductInformationReviews.svelte";

  export let product;
</script>

<div class="mt-4 lg:row-span-3 lg:mt-0">
  <h2 class="sr-only">Product information</h2>
  <p class="text-3xl tracking-tight text-gray-900">${product.price}</p>
  <!-- <ProductInformationReviews {reviews} /> -->
  <form class="mt-10">
    <ProductInfomationColors colors={product.colors} />
    <ProductInfomationSizes size={product.sizes} />
    <button
      type="submit"
      class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Add to bag
    </button>
  </form>
</div>
