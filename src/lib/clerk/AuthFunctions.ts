import type { SignInProps, SignOutOptions, UserProfileProps, UserResource } from '@clerk/types';

import { clerk } from '.';
import ClerkStore from './stores/clerk-store';

/**
 * 
 * @param {SignInProps} options SignInOptions. Refer to Clerk Documenation
 */
function signIn(options?: SignInProps) {
	clerk.openSignIn(options);
}

/**
 * 
 * @param {SignOutOptions} options SignOutOptions. Refer to Clerk Documentation
 */
function signOut(options?: SignOutOptions) {
	clerk.signOut(options).then(() => {
		ClerkStore.update((ClerkStore) => {
			return {
				...ClerkStore,
				loaded: clerk.loaded,
				user: clerk.user,
				session: clerk.session,
			}
		})
	});
}
/**
 * Returns the Current User only if the user is logged in.
 * @returns {UserResource | null | undefined} 
 */
function getUser() {
	return clerk.user;
}

/**
 * Opens modal show the profile for the Currently logged in user
 * @param {UserProfileProps} props Refer to Clerk Documentation
 */
function showUserProfile(props?: UserProfileProps): void {
	clerk.openUserProfile(props);
}

export { signIn, signOut, getUser, showUserProfile };