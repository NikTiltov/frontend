<script lang="ts">
   import { portfolio } from "$lib/stores";
   import Tools from "$lib/tools/Tools.svelte";
   import Palette from "$lib/palette/Palette.svelte";
   import EditBlock from "$lib/editor/EditBlock.svelte";

   function complete() {
      const formData = new FormData();
      formData.append("portfolio", JSON.stringify($portfolio.toStruct()));
      console.log(formData);
   }

   let selected_block = -1;
</script>

<div class="container">
   <div class="tool left">
      <Tools bind:selected_block />
   </div>
   <div class="view">
      {#each $portfolio.getBlocks() as _, id}
         <EditBlock bind:selected_block {id} />
      {/each}
   </div>
   <div class="tool right">
      <Palette />
   </div>
   <button class="complete" on:click={complete}>Ok</button>
</div>

<style>
   .container {
      position: relative;
      min-height: 100vh;
      width: 100%;
      background-color: var(--custom-color-base);
   }

   .tool {
      z-index: 1;
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
   }

   .left {
      left: 20px;
   }

   .right {
      right: 20px;
   }

   .complete {
      position: fixed;
      right: 20px;
      bottom: 20px;
      border: 2px solid var(--custom-color-primary);
      background-color: var(--custom-color-base);
      padding: 8px 10px;
      font-size: 20px;
   }

   .view {
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 80px 10px;
      gap: 30px;
   }
</style>