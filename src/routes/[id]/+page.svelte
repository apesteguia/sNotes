<script lang="ts">
  import * as ContextMenu from "$lib/components/ui/context-menu";

  let showBookmarks = false;
  let showFullURLs = true;

  let value = "pedro";
</script>

<ContextMenu.Root>
  <ContextMenu.Trigger
    class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
  >
    Right click here
  </ContextMenu.Trigger>
  <ContextMenu.Content class="w-64">
    <ContextMenu.Item inset>
      Back
      <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
    </ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
