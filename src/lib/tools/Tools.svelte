<script lang="ts">
   import type { block } from "$lib/types";
   import { portfolio } from "$lib/stores";

   export let selected_block: number;

   function addBlock() {
      $portfolio.addBlock(selected_block + 1);
      $portfolio = $portfolio;
      selected_block += 1;
   }
   
   function removeBlock() {
      $portfolio.removeBlock(selected_block);
      $portfolio = $portfolio;
      selected_block -= 1;
   }
   
   function moveBlockUp() {
      if (selected_block == 0) return;
      $portfolio.moveBlockUp(selected_block);
      $portfolio = $portfolio;
      selected_block -= 1;
   }
   
   function moveBlockDown() {
      if (selected_block == $portfolio.getBlocks().length - 1) return;
      $portfolio.moveBlockDown(selected_block);
      $portfolio = $portfolio;
      selected_block += 1;
   }

   function showInfo() {
      let {structure, colors, texts, images} = $portfolio.toStruct();
      console.log(structure, colors, texts, images);
   }
</script>

<div class="tools">
   <button on:click={moveBlockUp}>↑</button>
   <button on:click={addBlock}>+</button>
   <button on:click={removeBlock}>-</button>
   <button on:click={moveBlockDown}>↓</button>
   <button on:click={showInfo}>Q</button> 
</div>

<style>
   .tools {
      display: flex;
      flex-direction: column;
      gap: 12px;
   }
   
   button {
      width: 52px;
      height: 52px;
      display: inline-block;
      border: 2px solid #000000;
      border-radius: 50%;
      background-color: #ffffff;
      font-size: 30px;
   }
</style>