import type { PageLoad } from "./$types";
import type { PortfolioCard } from "$lib/types";
import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/public";

export const load: PageLoad = async ({ fetch }) => {
   const data: PortfolioCard[] = [
      { name: "name", discription: "disc" },
      { name: "name1", discription: "disc1" },
   ];

   return data;

   const path = ``;
   return await fetch(path, { method: "POST" })
      .then(response => response.json())
      .then(json => json as PortfolioCard[])
      .catch(() => data);
};