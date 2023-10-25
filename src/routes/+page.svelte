<script>
  export let data;

  $: ({ user, tableData } = data);
</script>

<div>
  <h1>Hola, bienvenido, {user.email}</h1>
  {#each tableData as data}
    <p>{data.id}</p>
    <p>{data.created_at}</p>
    <p>{data.title}</p>
    <p>{data.content}</p>
  {/each}
</div>

<style>
</style>
