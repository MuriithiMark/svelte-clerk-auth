<script lang="ts">
	import ClerkStore from "./stores/clerk-store";

</script>

{#if !$ClerkStore.userIsSignedIn()}
	<slot />
{/if}
