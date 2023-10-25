<!-- // src/routes/auth/+page.svelte -->
<script>
  import { redirect } from "@sveltejs/kit";

  export let data;
  let { supabase } = data;
  $: ({ supabase } = data);

  let email;
  let password;

  const handleSignUp = async () => {
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
    console.log("signed in");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
</script>

<form on:submit={handleSignUp}>
  <input name="email" bind:value={email} />
  <input type="password" name="password" bind:value={password} />
  <button>Sign up</button>
</form>

<button on:click={handleSignIn}>Sign in</button>
<button on:click={handleSignOut}>Sign out</button>
