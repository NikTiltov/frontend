<script lang="ts">
   import type { portfolio } from "../types";
   import EditBlock from "./EditBlock.svelte";
   import EditElement from "./EditElement.svelte";
   import TextEditElement from "./TextEditElement.svelte";
   import ImageEditElement from "./ImageEditElement.svelte";

   export let data: portfolio;

   let selected = -1;
</script>

<div class="view">
   {#each data.structure as block, id}
      <EditBlock bind:selected {id}>
         {#each block as element}
         <EditElement>
            {#if element.type === "text"}
               <TextEditElement data={data.texts[element.index]}></TextEditElement>
            {:else if element.type === "image"}
               <ImageEditElement data={data.images[element.index]}></ImageEditElement>
            {/if}
         </EditElement>
         {/each}
      </EditBlock>
   {/each}
</div>

<style>
   .view {
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 60px 10px;
      gap: 30px;
   }
</style>

