<script lang="ts">
	import ClerkStore from "./stores/clerk-store";
	import { getUser } from './AuthFunctions.svelte'

	$: isSignedOut = !$ClerkStore.clerkHasLoaded || !getUser()
</script>

{#if isSignedOut}
	<slot />
{/if}
