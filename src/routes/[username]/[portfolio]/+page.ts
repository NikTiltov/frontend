import type { PageLoad } from "./$types";
import { getPortfolio } from "$lib/api";
import { 
   default_struct, 
   default_texts, 
   default_images,
   default_colors
} from "$lib/preset";

export const load: PageLoad = (({ params }) => {
   return {
      structure: default_struct,
      colors: default_colors,
      texts: default_texts,
      images: default_images,
   };
   // return getPortfolio(params.username, params.portfolio);
});