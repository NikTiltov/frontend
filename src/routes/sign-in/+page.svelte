<script lang="ts">
   import Button from "$lib/Button.svelte";
   import { env } from "$env/dynamic/public";

   const maxlength = 30;
   const placeholder = "_";

   const form = {
      login: "",
      password: "",
   };

   let error = "";

   const signUp = async () => {
      await fetch(`${env.PUBLIC_API_HOST}/sign-in`, {
         method: "POST",
         body: JSON.stringify(form),
      }).then(response => response.json())
      .then(result => console.log(result["token"]))
      .catch(err => console.error(err));
   };
</script>

<form>
   <div class="error">{error}</div>
   <div class="inputs">
      <div class="input">
         <div class="title">Username / Email</div>
         <input type="text" {maxlength} {placeholder} bind:value={form.login}>
      </div>
      <div class="input">
         <div class="title">Password</div>
         <input type="password" {maxlength} {placeholder} bind:value={form.password}>
      </div>
   </div>
   <Button size="big" shadow="right" on:click={signUp}>Sign In</Button>
</form>
<a href="/sign-up">No account?</a>

<style>
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
   }
   
   .inputs {
      display: flex;
      flex-direction: column;
      gap: 24px;
   }

   .title {
      font-size: var(--font-size-medium);
      padding: 6px 10px;
   }

   input {
      box-shadow: 10px 0px var(--color-dark);
      border: 2px solid var(--color-dark);
      border-radius: 16px;
      padding: 10px 20px;
      background-color: var(--color-light);
      font-size: var(--font-size-big);
   }
   
   a {
      margin: 20px;
      font-size: var(--font-size-medium);
      text-decoration: underline;
   }
   
   a:hover {
      color: var(--color-primary);
   }
   
   .error {
      font-size: var(--font-size-big);
      color: var(--color-error);
   }
</style>
