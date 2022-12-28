<script lang="ts">
   import type { editImage } from "$lib/types";
   import { portfolio } from "$lib/stores";

   export let block_id: number;
   export let id: number;

   $: data = $portfolio.getElement(block_id, id) as editImage
</script>

<img src={URL.createObjectURL(data.src)} alt=" ">

<style>
   img {
      height: 300px;
      width: 300px;
   }
</style>