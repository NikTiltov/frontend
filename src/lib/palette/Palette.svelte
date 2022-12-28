<script lang="ts">
   import { portfolio } from "$lib/stores";
   import type { colors } from "$lib/types";
   import ColorPanel from "./ColorPanel.svelte";

   function toColorName(colorName: string) {
      return (colorName as keyof colors);
   }
</script>

<div class="palette">
   {#each Object.keys($portfolio.colors) as colorName}
      <ColorPanel {colorName} />
   {/each}
</div>

<style>
   .palette {
      display: flex;
      flex-direction: column;
      gap: 12px;
   }
</style>