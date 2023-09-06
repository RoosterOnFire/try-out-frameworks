import type { APIRoute } from "astro";
import type { Products } from "../../../pageTypes";

const products: Products = {
  "1": {
    id: 1,
    name: "Basic Tee 6-Pack",
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    descriptionHighlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    price: 192,
    reviews: {
      average: 4,
      total: 117,
    },
    color: ["white", "gray", "black"],
    size: [
      {
        name: "xss",
        stock: 0,
      },
      {
        name: "xs",
        stock: 1,
      },
      {
        name: "s",
        stock: 1,
      },
      {
        name: "m",
        stock: 1,
      },
      {
        name: "l",
        stock: 1,
      },
      {
        name: "xl",
        stock: 1,
      },
      {
        name: "2xl",
        stock: 1,
      },
      {
        name: "3xl",
        stock: 1,
      },
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
  },
};

export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;

  if (id == undefined) {
    return new Response(
      JSON.stringify({
        response: "error",
      })
    );
  }

  return new Response(JSON.stringify(products[id]));
};

export function getStaticPaths() {
  return [{ params: { id: "1" } }];
}
