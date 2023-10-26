<script lang="ts">
  import Button from "../ui/button/button.svelte";
  let content = "asdfasdfasdf";

  function handleInput(event) {
    content = event.target.innerHTML;
  }

  function applyBold() {
    document.execCommand("bold", false, null);
  }
</script>

<div>
  <Button on:click={applyBold}>Negrita</Button>
  <div
    class="bg-blue-100 w-[100px] h-10 border border-white"
    contenteditable="true"
    bind:innerHTML={content}
    on:input={handleInput}
  />
</div>
