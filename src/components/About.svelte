<!-- Logica -->
<script>
  let someText = "Frontend Developer";
  let count = 0;
  let styles = {darkMode : false}

  function handleClick (){
    count += 1;
  }

  function toggle(){
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>


<!-- Estilos -->
<style>
  p{
    font-size: 2rem;
    font-weight:500;
    letter-spacing: 0.25rem
  }
  .text-darkMode {
    color: var(--color-darkMode);
  }
  .text-lightMode {
    color: var(--color-lightMode);
  }

  button{
    border-radius: 0.25rem;
    transition: all 350ms;
    border: none;
  }
  button:focus, button:hover{
    transform: scale(1.1);
  }
  .btn-darkMode {
    color: #e1eacd;
    background: #1d3040;
  }
  .btn-lightMode {
    color: #1d3040;
    background: #e1eacd;
  }
</style>


<!-- html -->
<div class="About">

<!-- condicional if con svelte -->
{#if !styles.darkMode}
    <p class="text-lightMode">{someText}</p>
    {:else}
      <p class="text-darkMode">
        Hello Dark Mode
      </p>
  {/if}
  <button on:click={handleClick} class={styles.darkMode ? 'btn-lightMode' : ' btn-darkMode'}>Click{count === 0 ? '' : count}</button>
  <button on:click={toggle} class={styles.darkMode ? 'btn-lightMode' : ' btn-darkMode'}>DarkMode {styles.darkMode ? '🌘' : '🌞'}</button>
</div>