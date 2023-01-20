<script lang="ts">
   import { goto } from "$app/navigation";
   import Button from "$lib/Button.svelte";
</script>

<div class="container">
   <h1>Portfolio <span>You</span></h1>
   <div class="btns">
      <Button color="success" size="big" shadow="right" 
         on:click={() => goto("/sign-in")}>
         Sign In
      </Button>
      <Button color="primary" size="big" shadow="right" 
         on:click={() => goto("/sign-up")}>
         Sign Up
      </Button>
   </div>
</div>

<style>
   .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
   }

   h1 {
      text-shadow: 10px 0px var(--color-dark);
      -webkit-text-stroke: 2px var(--color-dark);
      color: var(--color-base);
      font-size: 160px;
      font-weight: 700;
      text-align: center;
   }

   h1 > span {
      color: var(--color-error);
   }

   .text {
      font-size: var(--font-size-big);
      text-align: center;
      line-height: 1.7em;
      margin-bottom: 20px;
   }

   .text > span {
      background-color: var(--color-primary);
      border-radius: 20px;
      padding: 0px 14px 5px 14px;
      margin: 0px 8px;
   }

   .btns {
      display: flex;
      flex-direction: column;
      gap: 16px;
   }
</style>