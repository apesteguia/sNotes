<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
  export let data;
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Checkbox } from "$lib/components/ui/checkbox";

  let { supabase } = data;
  $: ({ supabase } = data);

  let email: string;
  let password: string;
  let loginPassVisible: boolean = false;
  let singIntPassVisible: boolean = false;

  const handleSignUp = async () => {
    console.log(email, password);
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
</script>

<div class="inset-0 flex fixed justify-center">
  <Tabs.Root value="account" class="w-[400px] mt-28">
    <Tabs.List class="grid w-full grid-cols-2">
      <Tabs.Trigger value="account">Inicia Sesión</Tabs.Trigger>
      <Tabs.Trigger value="password">¡Régistrate!</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="account">
      <Card.Root>
        <Card.Header>
          <Card.Title>Inicia Sesión</Card.Title>
          <Card.Description>
            Inicia sesion para acceder a tus notas.
          </Card.Description>
        </Card.Header>
        <Card.Content class="space-y-2">
          <form on:submit={handleSignIn}>
            <div class="space-y-1">
              <Label for="name">Correo</Label>
              <Input
                id="name"
                bind:value={email}
                placeholder="ej: Pedro@gmail.com"
              />
            </div>
            <div class="space-y-1 mt-4">
              <Label for="username">Contraseña</Label>
              {#if !loginPassVisible}
                <Input
                  bind:value={password}
                  type="password"
                  id="username"
                  placeholder="*******"
                />
              {:else}
                <Input
                  bind:value={password}
                  type="text"
                  id="username"
                  placeholder="*******"
                />
              {/if}
            </div>
            <div class="flex gap-3 mt-5">
              <Checkbox
                id="terms"
                on:click={() => (loginPassVisible = !loginPassVisible)}
              />
              <p class="text-sm">¿Mostar contraseña?</p>
            </div>
            <div class="flex items-center gap-28">
              <Button type="submit" class="mt-5">Inicia Sesión</Button>
              <Button
                variant="destructive"
                on:click={handleSignOut}
                class="mt-5 ml-2">Cerrar Sesion</Button
              >
            </div>
          </form>
        </Card.Content>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="password">
      <Card.Root>
        <Card.Header>
          <Card.Title>Registrarse</Card.Title>
          <Card.Description>
            ¡Régistrate para acceder a todas las funciones que ofrecemos, crea
            noteas infinitas!
          </Card.Description>
        </Card.Header>
        <Card.Content class="space-y-2">
          <div class="space-y-1">
            <Label for="current" placeholder="ej: hoal@gmail.com"
              >Correo eléctronico</Label
            >
            <Input bind:value={email} id="current" type="text" />
          </div>
          <div class="space-y-1">
            <Label for="username">Contraseña</Label>
            {#if !singIntPassVisible}
              <Input
                bind:value={password}
                type="password"
                id="username"
                placeholder="*******"
              />
            {:else}
              <Input
                bind:value={password}
                type="text"
                id="username"
                placeholder="*******"
              />
            {/if}
          </div>
          <div class="space-y-1">
            <Label for="username">Repetir contraseña</Label>
            {#if !singIntPassVisible}
              <Input
                bind:value={password}
                type="password"
                id="username"
                placeholder="*******"
              />
            {:else}
              <Input
                bind:value={password}
                type="text"
                id="username"
                placeholder="*******"
              />
            {/if}
          </div>
          <div class="flex gap-3 mt-5">
            <Checkbox
              id="terms"
              on:click={() => (singIntPassVisible = !singIntPassVisible)}
            />
            <p class="text-sm">¿Mostar contraseña?</p>
          </div>
          <div class="mt-5">
            <Button on:click={handleSignUp} class="mt-3">Registrarse</Button>
          </div>
        </Card.Content>
      </Card.Root>
    </Tabs.Content>
  </Tabs.Root>
</div>
