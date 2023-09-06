import type { APIRoute } from "astro";
import type { Breadcrumbs } from "../../../pageTypes";

const breadcrumbs: Breadcrumbs = {
  "1": [
    ["men", "Men"],
    ["clothing", "Clothing"],
    ["basic-tee-6-pack", "Basic Tee 6-Pack"],
  ],
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

  return new Response(JSON.stringify(breadcrumbs[id]));
};

export function getStaticPaths() {
  return [{ params: { id: "1" } }];
}
