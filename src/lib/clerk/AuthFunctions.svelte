<script lang="ts" context="module">
	import type { SignInProps, SignOutOptions, UserProfileProps } from '@clerk/types';

	import { clerk } from '.';
	
	function signIn(event?: Event, options?: SignInProps) {
		clerk.openSignIn(options);
	}

	function signOut(event?: Event, options?: SignOutOptions) {
		clerk.signOut(options);
	}

	function getUser() {
		return clerk.user;
	}

	function showUserProfile(event?: Event, props?: UserProfileProps) {
		clerk.openUserProfile(props);
	}

	export { signIn, signOut, getUser, showUserProfile };
</script>
