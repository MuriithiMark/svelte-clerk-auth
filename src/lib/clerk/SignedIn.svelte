<script lang="ts">
	import ClerkStore from "./stores/clerk-store";
	import { getUser } from './AuthFunctions.svelte';

	$: hasSignedIn = $ClerkStore.clerkHasLoaded && !!getUser()
</script>

{#if hasSignedIn}
	<slot />
{/if}
