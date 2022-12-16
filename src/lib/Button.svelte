<script lang="ts">
   export let action = () => {};
</script>

<button on:click|preventDefault={action}>
   <slot></slot>
</button>

<style>
   button {
      cursor: pointer;
      color: var(--color-fg);
      background-color: var(--color-bg);
      border: 2px solid var(--color-fg);
      padding: 100px 120px;
      transform: rotate3d();
   }
</style>