<script lang="ts">
	import { onDestroy } from "svelte";
	import { clerk } from ".";
	import ClerkStore from "./stores/clerk-store";
	import type { UserButtonProps } from "@clerk/types";

	let UserButtonComponent: HTMLDivElement;

    export let userButtonProps: UserButtonProps = {}

	$: {
		if ($ClerkStore.userIsSignedIn()) {
			clerk.mountUserButton(UserButtonComponent, userButtonProps);
		}
	}

	onDestroy(() => clerk.unmountUserButton(UserButtonComponent));
</script>

<div class="clerk-user-button" bind:this={UserButtonComponent} />