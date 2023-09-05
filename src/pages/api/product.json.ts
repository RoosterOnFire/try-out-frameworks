export async function GET({}) {
  return new Response(
    JSON.stringify({
      id: 1,
      name: "Basic Tee 6-Pack",
      description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
      breadcrumbs: [
        ["men", "Men"],
        ["clothing", "Clothing"],
        ["basic-tee-6-pack", "Basic Tee 6-Pack"],
      ],
      images: [
        [
          "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
          "Two each of gray, white, and black shirts laying flat.",
        ],
        [
          "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
          "Model wearing plain black basic tee.",
        ],
        [
          "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
          "Model wearing plain gray basic tee.",
        ],
        [
          "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
          "Model wearing plain white basic tee.",
        ],
      ],
    })
  );
}
