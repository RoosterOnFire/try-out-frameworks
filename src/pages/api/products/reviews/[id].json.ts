import type { APIRoute } from "astro";

import type { Reviews } from "../../../../pageTypes";

const reviews: Reviews = {
  1: { href: "#", average: 4, totalCount: 94 },
  2: { href: "#", average: 4, totalCount: 94 },
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

  return new Response(JSON.stringify(reviews[id]));
};

export function getStaticPaths() {
  return [{ params: { id: "1" } }, { params: { id: "2" } }];
}
