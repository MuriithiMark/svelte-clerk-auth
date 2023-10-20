<script lang="ts">
	import { clerk } from ".";
	import type { UserProfileProps } from "@clerk/types";
	import ClerkStore from "./stores/clerk-store";

	let UserProfileComponent: HTMLDivElement;
	export let userProfileProps: UserProfileProps = {};

	$: {
		if ($ClerkStore.clerkHasLoaded) {
			clerk.mountUserProfile(UserProfileComponent, userProfileProps);
		}
	}
</script>

<div class="user-profile" bind:this={UserProfileComponent} />
