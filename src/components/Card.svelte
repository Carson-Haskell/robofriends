<script>
  export let id, name, email;
</script>

<div class="card">
  <img src={`https://robohash.org/${id}?200x200`} alt="a robot" />
  <div>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
</div>

<style>
  .card {
    text-align: center;
    background-color: white;
    padding: 2rem;
    margin: 1.5rem;
    border-radius: 2rem;
    border-width: 0.5rem;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
    transition: transform 1s;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.1);
  }
</style>
