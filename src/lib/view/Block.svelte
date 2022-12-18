<div class="block">
   <slot></slot>
</div>

<style>
   .block {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      gap: 20px;
   }

   @media (max-width: 500px) {
      .block {
         flex-direction: column;
         gap: 5px;
      }
   }
</style>