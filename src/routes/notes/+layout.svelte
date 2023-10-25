<script lang="ts">
  export let data;
  import { userNotes } from "../../stores/stores.js";
  import { supabase } from "$lib/supabase.js";
  import { onDestroy } from "svelte";

  async function loadData() {
    try {
      const { data: tableData } = await data.supabase.from("notes").select("");
      userNotes.actualizar(tableData);
      console.log("Data loaded successfully:", tableData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  loadData();
  const updateInterval = 2000; // 1000 milliseconds = 1 second
  const intervalId = setInterval(loadData, updateInterval);

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<slot />
