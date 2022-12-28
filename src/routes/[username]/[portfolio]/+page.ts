import type { PageLoad } from "./$types";
import type { portfolio } from "$lib/types";
import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/public";

export const load: PageLoad = async ({ params, fetch }) => {
   // const path = `${env.PUBLIC_API_HOST}/${params.username}/${params.portfolio}`;
   const path = `${env.PUBLIC_API_HOST}/portfolio/open`;
   return await fetch(path, { method: "POST" })
      .then(response => response.json())
      .then(json => json["portfolio"] as portfolio)
      .catch(() => {
         throw error(404, { message: "page not found" });
      });
};