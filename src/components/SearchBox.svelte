<script>
  export let query = '';
</script>

<div>
  <input
    class="robo-search"
    type="search"
    placeholder="Search robots..."
    bind:value={query}
  />
</div>

<style>
  .robo-search {
    width: 15em;
    padding: 15px;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
  }
</style>
