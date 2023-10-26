<script lang="ts">
  export let data;
  import Navbar from "$lib/components/user/Navbar.svelte";
  import Editor from "$lib/components/user/Editor.svelte";
  $: ({ user, tableData } = data);
</script>

<div class="absolute w-full min-h-full left-0 top-0 flex">
  <Navbar name={user.email} id={user.id} {data} noteId={tableData[0].id} />
  <Editor note={tableData[0]} />
</div>

<style>
  .editor {
  }
</style>
