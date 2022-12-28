<script lang="ts">
   import type { PortfolioCard } from "./types";

   export let data: PortfolioCard;
</script>

<div class="card">
   {data.name}
   {data.discription}
</div>

<style>

</style>