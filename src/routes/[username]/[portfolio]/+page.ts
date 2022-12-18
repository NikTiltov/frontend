import type { PageLoad } from "./$types";
import { default_portfolio } from "$lib/preset";
import { env } from "$env/dynamic/public";

export const load: PageLoad = async ({ params, fetch }) => {
   let portfolio = default_portfolio;
   // fetch(`${env.API_HOST}/${params.username}/${params.portfolio}`)
   fetch(`${env.PUBLIC_API_HOST}/portfolio/open`)
      .then(response => response.json())
      .then(json => portfolio = json["portfolio"])
      .catch(error => console.error(error));
   return portfolio;
};