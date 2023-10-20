<script lang="ts">
	import ClerkStore from "./stores/clerk-store";
	import { clerk } from '.'
	import { onDestroy } from "svelte";
	import type { SignUpProps } from "@clerk/types";

	let SignUpComponent: HTMLDivElement
	export let signUpProps: SignUpProps;
	$: {
		if ($ClerkStore.loaded) {
			clerk.mountSignUp(SignUpComponent, signUpProps)
		}
	}

	onDestroy(() => clerk.unmountSignUp(SignUpComponent))
</script>

<div class="clerk-sign-up" bind:this={SignUpComponent} />
