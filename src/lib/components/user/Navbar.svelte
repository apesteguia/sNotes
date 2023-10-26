<script lang="ts">
  export let name: string | undefined;
  export let id: string;
  export let data: any;
  export let noteId: string | null;
  import { notesTitles } from "$lib/stores/notesTitles";
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Button from "../ui/button/button.svelte";
  import Input from "../ui/input/input.svelte";
  import { MagnifyingGlass } from "radix-icons-svelte";
  import { Cross1 } from "radix-icons-svelte";

  async function loadData() {
    const { data: result } = await data.supabase
      .from("notes")
      .select("id, title, last_edited");
    notesTitles.set(result);
  }

  let interval: any;
  let search: string = "";

  onMount(() => {
    loadData();
    interval = setInterval(loadData, 2000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div
  class="fixed left-0 h-full border border-r-neutral-600 min-w-[300px] bg-neutral-900 flex flex-col items-start"
>
  <div class="flex flex-col ml-5 mt-4">
    <p class="font-bold">{name}</p>
    <p class="text-xs">{id}</p>
  </div>

  <div transition:fade class="  ml-5 mt-10 w-[260px] flex flex-col gap-4">
    {#each $notesTitles as note, i}
      {#if note.id === noteId}
        <Button
          disabled
          href={note.id}
          class=" flex flex-col cursor-pointer border-neutral-700 border rounded-md h-14 items-start"
        >
          <p class="ml-3 mt-2 font-bold">{note.title}</p>
          <p class="mb-3 ml-3 text-xs">{note.last_edited}</p>
        </Button>
      {/if}
    {/each}
    <div>
      {#if search.length > 1}
        <Button
          on:click={() => (search = "")}
          size="sm"
          variant="link"
          class="rounded-full absolute ml-[210px]"><Cross1 /></Button
        >
      {/if}
      <MagnifyingGlass class="absolute mt-2 ml-2" />
      <Input bind:value={search} placeholder="Busca notas" class="indent-4" />
    </div>
    {#each $notesTitles as note, i}
      {#if !(note.id === noteId) && note.title.includes(search)}
        <Button
          href={note.id}
          variant="secondary"
          class="hover:bg-neutral-800 flex flex-col cursor-pointer border-neutral-700 border rounded-md h-14 items-start"
        >
          <p class="ml-3 mt-2 font-bold">{note.title}</p>
          <p class="mb-3 ml-3 text-xs">{note.last_edited}</p>
        </Button>
      {/if}
    {/each}
  </div>
</div>
