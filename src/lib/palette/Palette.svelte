<script lang="ts">
   import type { colors } from "$lib/types";
   import ColorPanel from "./ColorPanel.svelte";

   export let colors: colors;

   function toColorName(colorName: string) {
      return (colorName as keyof colors);
   }
</script>

<div class="palette">
   {#each Object.keys(colors) as colorName}
      <ColorPanel {colorName} bind:value={colors[toColorName(colorName)]} />
   {/each}
</div>

<style>
   .palette {
      display: flex;
      flex-direction: column;
      gap: 12px;
   }
</style>