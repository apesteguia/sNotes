<script lang="ts">
  export let note: any;
  import { fade } from "svelte/transition";

  function formatDate(dateString: any) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  }
</script>

<div
  in:fade={{ duration: 1000 }}
  out:fade={{ duration: 1 }}
  class="absolute top-0 right-0 w-[calc(100%-300px)] h-full"
>
  <div class="mt-5 ml-5">
    <p class="font-bold">{note.title}</p>
    <p class="text-sm">Última edición: {formatDate(note.last_edited)}</p>
    <p class="text-sm">Creado: {formatDate(note.created_at)}</p>
  </div>
  <div class="w-full flex justify-center">
    {note.content}
  </div>
</div>
