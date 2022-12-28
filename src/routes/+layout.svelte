<script lang="ts">
   import "../style.css";
</script>

<main>
   <slot></slot>
</main>

<style>
   main {
      min-height: 100vh;
      background-color: var(--color-base);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
</style>