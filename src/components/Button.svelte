<script>
  export let count;
  export let text;
</script>


<div>
  <button on:click>
    {text}
    {count ===  0 ? '' : count}
    
  </button>
</div>
