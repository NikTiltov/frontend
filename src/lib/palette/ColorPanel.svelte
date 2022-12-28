<script lang="ts">
   import { portfolio } from "$lib/stores";
   import type { colors } from "$lib/types";
   import { onMount } from "svelte";
   import updateColor from "./updateColor";

   export let colorName = "";
   let value = "#ffffff";

   function update() {
      portfolio.update(portfolio => {
         portfolio.colors[colorName as keyof colors] = value;
         return portfolio;
      });
      updateColor(colorName, value);
   }

   onMount(() => {
      value = $portfolio.colors[colorName as keyof colors];
      update();
   });
</script>

<label>
   <input type="color" bind:value on:change={update} />
</label>

<style>
   label {
      width: 52px;
      height: 52px;
      display: inline-block;
      border: 2px solid #000000;
      border-radius: 50px;
      overflow: hidden;
   }
   
   input {
      width: 100%;
      height: 100%;
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