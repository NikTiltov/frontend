<script lang="ts">
   import type { block, text, image } from "./blocks/types";
   import { default_struct, default_texts, default_images } from "./preset";
   import Block from "$lib/blocks/Block.svelte";
   import Element from "./blocks/Element.svelte";
   import TextEditElement from "./blocks/TextEditElement.svelte";
   import ImageElement from "./blocks/ImageElement.svelte";

   let blocks: block[] = default_struct;
   let texts: text[] = default_texts;
   let images: image[] = default_images;
</script>

<div class="view">
   {#each blocks as block}
      <Block>
         {#each block as element}
         <Element>
            {#if element.type === "text"}
               <TextEditElement data={texts[element.index]}></TextEditElement>
            {:else if element.type === "image"}
               <ImageElement data={images[element.index]}></ImageElement>
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

