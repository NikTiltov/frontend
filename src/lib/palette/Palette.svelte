<script lang="ts">
   import ColorPanel from "./ColorPanel.svelte";

   let colors = [
      {colorName: "base", value: "#ffffff"},
      {colorName: "text", value: "#000000"},
      {colorName: "contrast", value: "#2e2c29"},
      {colorName: "primary", value: "#4b62dc"},
      {colorName: "secondary", value: "#ab62e5"},
   ]
</script>

<div class="palette">
   {#each colors as {...params}}
      <ColorPanel {...params} />
   {/each}
</div>

<style>
   .palette {
      display: flex;
      flex-direction: column;
      gap: 12px;
   }
</style>