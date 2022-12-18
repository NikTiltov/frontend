import type { PageLoad } from "./$types";
import { default_portfolio } from "$lib/preset";

export const load: PageLoad = () => {
   return default_portfolio;
};