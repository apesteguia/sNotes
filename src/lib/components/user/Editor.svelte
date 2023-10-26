<script lang="ts">
  export let note: any;
  import { fade } from "svelte/transition";
  import Button from "../ui/button/button.svelte";
  import { text } from "@sveltejs/kit";
  import Input from "../ui/input/input.svelte";

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

  function applyStyle(style: string) {
    if (style === "insertOrderedList" || style === "insertUnorderedList") {
      document.execCommand(style, false, undefined);
    } else {
      document.execCommand(style, false, undefined);
    }
  }

  function applyFontSize(size: string) {
    document.execCommand("fontSize", false, size);
  }

  let a: string;
  let fontSize: string = 14;
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

  <div class="w-full flex justify-center gap-4">
    <Button on:click={() => applyStyle("bold")} variant="outline">B</Button>
    <Button on:click={() => applyStyle("italic")} variant="outline">I</Button>
    <Button on:click={() => applyStyle("insertOrderedList")} variant="outline"
      >List</Button
    >
    <Button on:click={() => applyStyle("insertUnorderedList")} variant="outline"
      >List</Button
    >
    <Button on:click={() => (a = "center")}>Centrar</Button>
    <Button on:click={() => (a = "left")}>Izquierda</Button>
    <Button on:click={() => (a = "right")}>Derecha</Button>

    <Button on:click={() => applyFontSize("" + fontSize + 1)}>subir</Button>
  </div>

  <div
    class="fixed left-[300px] w-[calc(100%-300px)] h-10 flex justify-center min-h-full"
  >
    <!-- svelte-ignore a11y-autofocus -->
    <div
      bind:innerHTML={note.content}
      autofocus
      class:text-center={a === "center"}
      class:text-left={a === "left"}
      class:text-right={a === "right"}
      contenteditable="true"
      class="border mt-20 w-[80%]"
      style="font-size: {fontSize + 'px'}"
    />
  </div>
</div>

<style>
  ul {
    list-style: decimal;
  }
</style>
