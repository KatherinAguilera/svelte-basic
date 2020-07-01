<script>
	export let name;
	export let lastName ; // export traer/pasar como propiedad al documento
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<p>Frontend Developer</p>
  <img src={svelteLogo} alt="Svelte" />
</main>

<style>
/* Definicion de estilos globales */
  :global(body) {
    background-color: #ddceca;
    color: #0084f6;
  }

  :global(:root) {
    --theme-color: purple;
  }

  p {
    color: var(--theme-color);
    font-size: 22px;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 30%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
