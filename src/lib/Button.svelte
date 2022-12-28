<script lang="ts">
   export let color: Color = "primary";
   export let size: Size = "medium";
   export let shadow: Shadow = "none";

   type Color =
      | "primary"
      | "success"
      | "warning"
      | "error";

   type Size =
      | "medium"
      | "big";

   type Shadow =
      | "left"
      | "right"
      | "none";
</script>

<button on:click
   class="{size} shadow-{shadow}" 
   style="background: var(--color-{color})">
   <slot></slot>
</button>

<style>
   button {
      box-shadow: 0px 0px var(--color-dark);
      border: 2px solid var(--color-dark);
      border-radius: 16px;
   }
   
   .big {
      padding: 10px 20px;
      font-size: var(--font-size-big);
   }
   
   .medium {
      padding: 8px 16px;
      font-size: var(--font-size-medium);
   }
   
   .shadow-left {
      box-shadow: -10px 0px var(--color-dark);
   }
   
   .shadow-right {
      box-shadow: 10px 0px var(--color-dark);
   }
</style>