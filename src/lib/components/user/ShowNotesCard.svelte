<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Pencil2 } from "radix-icons-svelte";
  import { MixerHorizontal } from "radix-icons-svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

  export let notes: any;

  // Función para formatear la fecha
  function formatFecha(fechaISO8601: any) {
    const fecha = new Date(fechaISO8601);
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const día = fecha.getDate();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    return `${día}/${mes}/${año} ${hora}:${minutos}:${segundos}`;
  }
</script>

<div class="mygrid w-[850px] mt-10">
  {#each notes as note}
    <Card.Root class="w-[400px] myz h-[140px]">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class="absolute -mt-2 ml-[190px]   ">
          <MixerHorizontal className="h-12 w-7 " /></DropdownMenu.Trigger
        >
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Label>{note.id}</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Properties</DropdownMenu.Item>
            <DropdownMenu.Item>Change Name: {note.title}</DropdownMenu.Item>
            <DropdownMenu.Item>Delete</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Card.Header>
        <Card.Title class="flex">
          <div class="flex">
            <p class="text-start w-[275px]">{note.title}</p>
            <Button href={note.id} class="-mt-2 rounded-md flex gap-2">
              <Pencil2 className="h-4 w-4" />
              Open</Button
            >
          </div>
        </Card.Title>
        <Card.Description class="flex">
          <p class="text-xs -mt-3">
            {formatFecha(note.last_edited)}
          </p>
        </Card.Description>
      </Card.Header>
      <Card.Content class="flex text-sm">
        <div class="content-container -mt-4">
          <p>{note.content}</p>
        </div>
      </Card.Content>
      <Card.Footer class="flex justify-between" />
    </Card.Root>
  {/each}
</div>

<style>
  .mygrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 16px;
  }

  @media (max-width: 850px) {
    .mygrid {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
  .content-container {
    height: 40px;
    overflow: hidden;
    word-wrap: break-word;
    white-space: pre-line;
  }
</style>
