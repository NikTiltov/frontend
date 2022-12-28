<script lang="ts">
   import { portfolio } from "$lib/stores";
   import TextEditElement from "./TextEditElement.svelte";
   import ImageEditElement from "./ImageEditElement.svelte";

   export let selected_block: number;
   export let selected_el: number;
   export let block_id: number;
   export let id: number;

   $: type = $portfolio.getElement(block_id, id).type;
   
   function remove() {
      $portfolio.removeElement(block_id, id);
      $portfolio = $portfolio;
   }

   $: selected = selected_el === id && selected_block == block_id;
</script>

<div class="element">
   <!-- svelte-ignore a11y-click-events-have-key-events -->
   <!-- svelte-ignore a11y-label-has-associated-control -->
   <label class="wrapper" class:selected on:click={() => selected_el = id}>
      {#if type == "text" }
         <TextEditElement {block_id} {id} />
      {:else if type == "image"}
         <ImageEditElement {block_id} {id} />
      {/if}
   </label>
   {#if selected}
      <button class="delete" on:click={remove}>☓</button>
   {/if}
</div>

<style>
   .element {
      position: relative;
      min-width: 30%;
      flex-grow: 1;
   }
   
   .wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      background: none;
      border: 2px dashed var(--custom-color-contrast);
   }
   
   .selected {
      border: 2px solid var(--custom-color-primary);
   }

   .delete {
      position: absolute;
      right: 0px;
      top: 0px;
      transform: translate(50%, -50%);
      width: 24px;
      height: 24px;
      background-color: var(--custom-color-base);
      border-radius: 50%;
      border: 2px solid var(--custom-color-primary);
      text-align: center;
      font-weight: 900;
   }
</style>