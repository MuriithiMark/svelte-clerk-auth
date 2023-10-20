<script lang="ts">
	import ClerkStore from "./stores/clerk-store";
	import { clerk } from '.';
	import { onDestroy } from "svelte";
	import type { SignInProps } from "@clerk/types";

	let SignInComponent: HTMLDivElement;

	export let signInProps: SignInProps;

	$: {
		if ($ClerkStore.loaded) {
			clerk.mountSignIn(SignInComponent, signInProps);
		}
	}

	onDestroy(() => clerk.unmountSignIn(SignInComponent))
</script>

<div class="sign-in" bind:this={SignInComponent} />
