<script lang="ts">
   import type { image } from "../types";
   import { getImage } from "$lib/api";

   export let data: image;
</script>

<div class="image">
   <img src={getImage(data.src)} alt="">
</div>

<style>
   .image {
      width: 100%;
      padding-top: 100%;
      position: relative;
   }

   img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border: 2px solid var(--custom-color-contrast);
      object-fit: cover;
   }
</style>