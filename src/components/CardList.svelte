<script>
  import Card from './Card.svelte';

  export let robots;
</script>

<div class="card-list">
  {#each robots as { id, name, email }}
    <Card {id} {name} {email} />
  {/each}
</div>

<style>
  .card-list {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
