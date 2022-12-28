<script lang="ts">
   import type { PageData } from "./$types";
   import Card from "$lib/Card.svelte";
   
   export let data: PageData;
</script>

{#await data}
   <p class="wait">Please wait...</p>
{:then cards}
   <div class="cards">
      {#each data as card}
         asd
         <!-- <Card data={card} /> -->
      {/each}
   </div>
<!-- {:catch error}
   <div class="error">
      <p>Oh no</p>
      <p>Something wrong...</p>
   </div> -->
{/await}

<style>
   .wait {
      font-size: var(--font-size-big);
   }
</style>
