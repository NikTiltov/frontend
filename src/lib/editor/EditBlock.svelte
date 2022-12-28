<script lang="ts">
   import { portfolio } from "$lib/stores";
   import EditElement from "./EditElement.svelte";

   export let selected_block: number;
   export let id: number;
   
   let selected_el = -1;

   let filer: HTMLInputElement;

   function addTextElement() {
      $portfolio.addTextElement(id, selected_el + 1);
      $portfolio = $portfolio;
      selected_el += 1;
   }
   
   function addImageElement() {
      let file = filer.files?.item(0);
      if (file === null || file === undefined) return;
      $portfolio.addImageElement(id, selected_el + 1, file);
      $portfolio = $portfolio;
      selected_el += 1;
   }

   $: selected = selected_block === id;
</script>

<button class="block" class:selected on:click={() => selected_block = id}>
   {#each $portfolio.getBlock(id) as _, element_id}
      <EditElement bind:selected_el id={element_id} {selected_block} block_id={id} />
   {/each}
   
   {#if selected_block === id && $portfolio.getBlock(id).length < 3}
      <div class="add-btns">
         <button on:click={addTextElement} class="btn">T</button>
         <button on:click={() => filer.click()} class="btn">I</button>
      </div>
      {/if}
   </button>
<input 
   class="filer" 
   type="file" 
   multiple={false} 
   accept=".jpg, .png, .jpeg" 
   on:change={addImageElement}
   bind:this={filer} /> 

<style>
   .block {
      position: relative;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      gap: 20px;
      background: none;
      border: 2px dashed var(--custom-color-contrast);
   }
   
   .selected {
      border: 2px solid var(--custom-color-primary);
   }
   
   @media (max-width: 500px) {
      .block {
         flex-direction: column;
         gap: 5px;
      }
   }

   .add-btns {
      position: absolute;
      right: 0px;
      top: 50%;
      display: flex;
      flex-direction: column;
      transform: translate(60px, -50%);
      gap: 10px;
   }

   .btn {
      width: 40px;
      height: 40px;
      font-size: 24px;
      border-radius: 50%;
      background-color: var(--custom-color-base);
      border: 2px solid var(--custom-color-primary);
      color: var(--custom-color-primary);
      text-align: center;
   }

   .filer {
      display: none;
   }
</style>