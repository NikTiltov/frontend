<script lang="ts">
   import type { PageData } from "./$types";
   import { onMount } from "svelte";
   import Block from "$lib/view/Block.svelte";
   import Element from "$lib/view/Element.svelte";
   import TextElement from "$lib/view/TextElement.svelte";
   import ImageElement from "$lib/view/ImageElement.svelte";
   import updateColor from "$lib/palette/updateColor";

   export let data: PageData;

   onMount(() => {
      Object.entries(data.colors)
         .forEach(([color, value]) => updateColor(color, value));
   });
</script>

<div class="bg">
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
</div>

<style>
   .bg {
      width: 100%;
      background-color: var(--custom-color-base);
      min-height: 100vh;
   }

   .view {
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 60px 10px;
      gap: 30px;
   }
</style>
