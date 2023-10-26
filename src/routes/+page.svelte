<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import ShowNotesCard from "$lib/components/user/ShowNotesCard.svelte";
  import ShowNotesList from "$lib/components/user/ShowNotesList.svelte";
  export let data;
  import { Rows } from "radix-icons-svelte";
  import { Columns } from "radix-icons-svelte";

  $: ({ user, tableData } = data);

  let display = true;
  const toggleDisplay = () => {
    display = !display;
  };
</script>

<div class="absolute w-full h-auto min-h-full flex items-center flex-col">
  <div class="w-[850px] text-center">
    <h1 class="mt-10 text-5xl font-bold min-h-[120px]">
      Hola, bienvenido {user.email?.split("@gmail.com")}
    </h1>
    <hr class="max-w[800px]" />
    {#if tableData}
      <div class="flex flex-col items-start">
        <p class="mt-5 font-bold text-xl">Tus notas</p>
        <Button
          variant="secondary"
          on:click={toggleDisplay}
          class="absolute ml-[800px] mt-4"
        >
          {#if display}
            <Rows />
          {/if}
          {#if !display}
            <Columns />
          {/if}
        </Button>
        {#if display}
          <ShowNotesCard notes={tableData} />
        {/if}
        {#if !display}
          <ShowNotesList notes={tableData} />
        {/if}
      </div>
    {/if}
  </div>
</div>
