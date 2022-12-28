<script lang="ts">
   import type { editText } from "$lib/types";
   import { portfolio } from "$lib/stores";
   import { afterUpdate, onMount } from "svelte/internal";

   export let block_id: number;
   export let id: number;

   $: data = $portfolio.getElement(block_id, id) as editText;
   
   let textarea: HTMLTextAreaElement;
   
   function autoGrow() {
      textarea.style.height = "1em";
      textarea.style.height = textarea.scrollHeight + "px";
   }
   
   onMount(autoGrow);
   afterUpdate(autoGrow);
</script>

<textarea 
   class="text {data.style} {data.size}"
   placeholder="Write something..."
   bind:this={textarea}
   bind:value={data.text}
   ></textarea>

<style>
   .text {
      width: 100%;
      font-family: 'Poppins', sans-serif;
      color: var(--custom-color-text);
      text-align: justify;
      white-space: pre-line;
      resize: none;
      overflow: hidden;
      background: none;
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