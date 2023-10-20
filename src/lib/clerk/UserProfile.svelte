<script lang="ts">
	import { clerk } from ".";
	import type { UserProfileProps } from "@clerk/types";
	import ClerkStore from "./stores/clerk-store";
	import { onDestroy } from "svelte";

	let UserProfileComponent: HTMLDivElement;
	export let userProfileProps: UserProfileProps;

	$: {
		if ($ClerkStore.userIsSignedIn()) {
			clerk.mountUserProfile(UserProfileComponent, userProfileProps);
		}
	}

	onDestroy(() => clerk.unmountUserProfile(UserProfileComponent));

</script>

<div class="clerk-user-profile" bind:this={UserProfileComponent} />
