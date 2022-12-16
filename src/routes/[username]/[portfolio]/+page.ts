import type { PageLoad } from "./$types";
import type { portfolio } from "$lib/blocks/types";
import { getPortfolio } from "$lib/api";

export const load: PageLoad = async ({ params }) => {
   const portfolio: portfolio = await getPortfolio(params.username, params.portfolio);
   return portfolio;
};