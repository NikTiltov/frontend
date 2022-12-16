<script lang="ts">
   import { onMount } from "svelte";
   import updateColor from "./updateColor";

   export let colorName = "";
   export let value = "#ffffff";

   onMount(() => updateColor(colorName, value));
</script>

<label>
   <input type="color" bind:value on:change={() => updateColor(colorName, value)} />
</label>

<style>
   label {
      width: 52px;
      height: 52px;
      cursor: pointer;
      display: inline-block;
      border: 2px solid #000000;
      border-radius: 50px;
      overflow: hidden;
   }
   
   input {
      width: 100%;
      height: 100%;
      cursor: pointer;
      overflow: hidden;
      border: 3px solid #ffffff;
      border-radius: 50px;
   }

   input[type=color]::-moz-focus-inner {
      border: none;
   }

   input[type=color]::-moz-color-swatch {
      border: none;
   }

</style>