export { default as SignedIn } from './clerk/SignedIn.svelte';
export { default as SignedOut } from './clerk/SignedOut.svelte';
export { default as UserButton } from './clerk/UserButton.svelte';

export { default as UserProfile } from './clerk/UserProfile.svelte';
export { default as SignIn } from './clerk/SignIn.svelte';
export { default as SignUp } from './clerk/SignUp.svelte';

export { default as ClerkStore } from './clerk/stores/clerk-store'

export { signIn, signOut, getUser, showUserProfile, } from './clerk/AuthFunctions'
export { auth, initializeClerk, clerk } from './clerk'