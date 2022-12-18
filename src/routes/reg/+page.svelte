<script lang="ts">
   let files: FileList;
   let data: any;

   function Image() {
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = () => {
         data = reader.result;
      };
   }
</script>


<input type="file" bind:files={files}/>
<button on:click={Image}>generate</button>
{data}