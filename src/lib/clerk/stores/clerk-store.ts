import { writable } from "svelte/store";

const ClerkStore = writable({
    clerkHasLoaded: true,
});

export default ClerkStore;