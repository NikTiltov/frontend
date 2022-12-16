<script lang="ts">
   import type { text } from "./types";
   import { bind, onMount } from "svelte/internal";
   export let data: text;

   let textarea: HTMLTextAreaElement;

   function autoGrow() {
      textarea.style.height = "1em";
      textarea.style.height = textarea.scrollHeight + "px";
   }

   onMount(autoGrow);
</script>

<textarea 
   class="text {data.style} {data.size}" 
   bind:this={textarea} 
   on:input={autoGrow}
   >
   {data.text}
</textarea>

<style>
   .text {
      width: 100%;
      border: 2px dashed #00f;
      font-family: 'Poppins', sans-serif;
      color: var(--custom-color-text);
      text-align: justify;
      white-space: pre-line;
      resize: none;
      overflow: hidden;
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