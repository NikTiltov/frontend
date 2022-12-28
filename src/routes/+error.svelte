<div class="bg">
   <div class="container">
      <p class="error-message">The page you are looking for can't be found.</p>
      <div class="error-code">404</div>
   </div>
</div>

<style>
   .bg {
      min-height: 100vh;
      background-color: var(--color-base);
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .container {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .error-message {
      font-size: var(--font-size-big);
   }

   .error-code {
      font-size: 200px;
      color: var(--color-error);
   }
</style>