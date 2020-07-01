<!-- Logica -->
<script>
  let someText = "Frontend Developer";
  let count = 0;
  function handleClick (){
    count += 1;
  }
</script>


<!-- Estilos -->
<style>
  p{
    color:var(--theme-color);
  }
</style>


<!-- html -->
<div class="About">
  <p>{someText}</p>
  <button on:click={handleClick}>Click{count === 0 ? '' : count}</button>
</div>