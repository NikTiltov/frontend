<script lang="ts">
   import Palette from "$lib/palette/Palette.svelte";
   import View from "$lib/View.svelte";
</script>

<div class="container">
   <View />
   <div class="tool right"><Palette /></div>
</div>

<style>
   .container {
      min-height: 100vh;
      background-color: var(--custom-color-base);
   }

   .tool {
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
</style>