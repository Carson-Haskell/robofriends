<script>
  import CardList from '../components/CardList.svelte';
  import SearchBox from '../components/SearchBox.svelte';

  export let data;

  let searchFilter = '';

  $: filteredRobots = data.robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchFilter.toLowerCase()),
  );
</script>

<div class="home-page">
  <h1 class="animate-character">Welcome to RoboFriends</h1>
  <SearchBox bind:query={searchFilter} />
  {#if filteredRobots.length > 0}
    <CardList robots={filteredRobots} />
  {:else}
    <p class="message">No robots with that name!</p>
  {/if}
</div>

<style>
  .home-page {
    padding: 0;
    margin: 0;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .animate-character {
    letter-spacing: 5px;
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    font-size: 3em;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  .message {
    margin-top: 10rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
</style>
