import { writable } from "svelte/store";
import { clerk } from "..";
import type { SessionResource, UserResource } from "@clerk/types";

type ClerkStoreProps = {
    loaded: boolean;
    user?: UserResource | null;
    session?: SessionResource | null;
    userIsSignedIn: () => boolean;//Promise<boolean>;
}

const ClerkStore = writable<ClerkStoreProps>({
    loaded: false,
    user: clerk.user,
    session: clerk.session,
    userIsSignedIn() {
        return this.loaded && !!this.user && this.session?.status === "active"
    },
});

export default ClerkStore;