<script lang="ts">
	import ClerkStore from "./stores/clerk-store";
	import { clerk } from '.';

	let SignInComponent: HTMLDivElement;

	$: {
		if ($ClerkStore.clerkHasLoaded) {
			clerk.mountSignIn(SignInComponent);
		}
	}
</script>

<div class="sign-in" bind:this={SignInComponent} />
