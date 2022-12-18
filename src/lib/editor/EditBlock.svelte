<script lang="ts">
   export let id = 0;
   export let selected = -1;
</script>

<button 
   class="block"
   class:selected={id === selected}
   on:click={() => selected = id}
   >
   <slot></slot>
</button>

<style>
   .block {
      border: 2px dashed var(--custom-color-contrast);
      background: none;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      gap: 20px;
   }

   .selected {
      border: 2px solid var(--custom-color-primary);
   }

   @media (max-width: 500px) {
      .block {
         flex-direction: column;
         gap: 5px;
      }
   }
</style>