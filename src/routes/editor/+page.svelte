<script lang="ts">
   import type { PageData } from "./$types";
   import Palette from "$lib/palette/Palette.svelte";
   import View from "$lib/editor/View.svelte";

   export let data: PageData;
</script>

<div class="container">
   <div class="tool left"><button on:click={() => console.log(data)}>show</button></div>
   <View bind:data={data}/>
   <div class="tool right"><Palette bind:colors={data.colors}/></div>
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