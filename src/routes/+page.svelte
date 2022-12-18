<script lang="ts">
   import { goto } from "$app/navigation";
   import Button from "$lib/Button.svelte";
</script>

<div class="container">
   <div class="divider" />
   <div class="name">Portfolio You</div>
   <div class="divider" />
   <div class="divider" />
   <Button action={() => goto("/editor")}>create</Button>
</div>

<style>
   .container {
      min-height: 100vh;
      background-color: var(--color-bg);
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .name {
      text-align: center;
      color: var(--color-fg);
      font-size: 128px;
      font-family: 'Roboto mono', monospace;
   }

   .divider {
      height: 100px;
   }     
</style>