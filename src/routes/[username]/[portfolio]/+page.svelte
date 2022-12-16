<script lang="ts">
   import type { PageData } from "./$types";
   import { onMount } from "svelte";
   import Block from "$lib/blocks/Block.svelte";
   import Element from "$lib/blocks/Element.svelte";
   import TextElement from "$lib/blocks/TextElement.svelte";
   import ImageElement from "$lib/blocks/ImageElement.svelte";
   import updateColor from "$lib/palette/updateColor";

   export let data: PageData;

   onMount(() => {
      Object.entries(data.colors)
         .forEach(([color, value]) => updateColor(color, value));
   });
</script>

<div class="view">
   {#each data.structure as block}
      <Block>
         {#each block as element}
         <Element>
            {#if element.type === "text"}
               <TextElement data={data.texts[element.index]}></TextElement>
            {:else if element.type === "image"}
               <ImageElement data={data.images[element.index]}></ImageElement>
            {/if}
         </Element>
         {/each}
      </Block>
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
