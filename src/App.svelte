<script>
  import About from "./components/About.svelte"  // traemos componente about se debe colocar eñ .svelte
  import Text from "./components/Text.svelte"
  import Person from "./components/Person.svelte"

	export let name;
  export let lastName ; // export traer/pasar como propiedad al documento

  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

// Pasar objeto al componente Person
  const data = {
    namePet: 'Haru',
    pet : 'Gata',
    age: 1
  }

</script>




<main>
	<h1>Hello {name} {lastName}!</h1>
  <About/>
  <!-- Asigno props a mo componente -->
  <Text anotherText="Pasando Props desde mi componente Text"/>
  <!-- Toma props declarado por defecto sino le asigno nada -->
  <Text/>
  <Person {...data}/>
  <img src={svelteLogo} alt="Svelte" />
</main>

<style>
/* Definicion de estilos globales */
  :global(body) {
    background-color: #e1eacd;
    color: #01352c;
  }

  :global(:root) {
    --color-lightMode: purple;
    --color-darkMode: #ffffff;

  }
  :global(body.dark-mode){
    background: #01352c;
    color: #bfc2c7;
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
    color: #61b390;
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
