<script lang="ts">
   import type { text } from "../types";
   export let data: text;
</script>

<div class="text {data.style} {data.size}">
   {data.text}
</div>

<style>
   .text {
      font-family: 'Poppins', sans-serif;
      color: var(--custom-color-text);
      text-align: justify;
      white-space: pre-line;
   }

   .normal {
      font-weight: 400;
   }

   .bold {
      font-weight: 600;
   }

   .italic {
      font-style: italic;
   }

   .small {
      font-size: 12px;
   }

   .medium {
      font-size: 16px;
   }

   .big {
      font-size: 24px;
   }

   .large {
      font-size: 40px;
   }
</style>