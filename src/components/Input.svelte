<script>
  export let value = "Write your message!"

</script>

<style>
  textarea{
    border: 1px solid #E76F51;
    height: 5rem;
    border-radius: 1rem 0;
    background: transparent;
    opacity: .8;
    padding: .875rem;
  }
  textarea:focus{
    border: 1px solid #E76F51;

  }

</style>
<div class="Input">
  <textarea type="text" bind:value = {value} />
  <p>Hello {value}!</p>
</div>