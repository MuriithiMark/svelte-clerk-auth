<script lang="ts">
	import ClerkStore from "./stores/clerk-store";
	import { clerk } from '.'

	let SignUpComponent: HTMLDivElement

	$: {
		if ($ClerkStore.clerkHasLoaded) {
			clerk.mountSignUp(SignUpComponent)
		}
	}
</script>

<div class="sign-up" bind:this={SignUpComponent} />
