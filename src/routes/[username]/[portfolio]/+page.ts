import type { PageLoad } from "./$types";
import type { portfolio } from "$lib/types";
import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/public";
import { default_portfolio } from "$lib/preset";

export const load: PageLoad = async ({ params, fetch }) => {
   // await fetch(`${env.API_HOST}/${params.username}/${params.portfolio}`, { method: "POST" })
   return await fetch(`${env.PUBLIC_API_HOST}/portfolio/open`, { method: "POST" })
      .then(response => response.json())
      .then(json => json["portfolio"] as portfolio)
      .catch(err => {
         throw error(404, { message: "page not found" });
      });
};