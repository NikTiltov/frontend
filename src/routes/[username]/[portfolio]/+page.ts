import type { PageLoad } from "./$types";
import type { portfolio } from "$lib/types";
import { getPortfolio } from "$lib/api";
import { 
   default_struct,
   default_colors,
   default_texts,
   default_images
} from "$lib/preset";

export const load: PageLoad = async ({ params }) => {
   // return {
   //    structure: default_struct,
   //    colors: default_colors,
   //    texts: default_texts,
   //    images: default_images,
   // };
   const json: { portfolio: portfolio } = await getPortfolio(params.username, params.portfolio);
   return json.portfolio;
};