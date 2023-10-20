import Clerk from '@clerk/clerk-js';
import * as jose from 'jose';
import type { Cookies } from '@sveltejs/kit';
import type { ClerkOptions } from '@clerk/types'

import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
import { PUBLIC_CLERK_FRONTEND_API } from '$env/static/public';

// Auth Functions
import { signIn, signOut, getUser, showUserProfile } from './AuthFunctions.svelte';
import ClerkStore from './stores/clerk-store';


// Clerk Initialize
const clerkFrontendApi = PUBLIC_CLERK_PUBLISHABLE_KEY
const clerk = new Clerk(clerkFrontendApi);

/**
 * 
 * @param {ClerkOptions} options
 * 
 * Initilizes Clerk. Since Clerk requires window. It must be done in onMount
 * 
 * Ensure that PUBLIC_CLERK_FRONTEND_API and PUBLIC_CLERK_PUBLISHABLE_KEY are set
 * 
 * Initializing clerk can be done as follows
 * @example
 * const clerkOptions = {}; // Refer from Clerk Documentation
 * onMount(async () => await initializeClerk(clerkOptions));
 * 
 * @example
 * const clerkOptions = {}; // Refer from Clerk Documentation
 * onMount(() => {
 *     initializeClerk(clerkOptions).then(() => {
 *         // Do something now that clerk has loaded. eg set clerkLoaded to true
 *         console.log($ClerkStore.clerkHasLoaded)
 *     });
 * });
 * 
 */
async function initializeClerk(options?: ClerkOptions) {
    if (!PUBLIC_CLERK_FRONTEND_API || !PUBLIC_CLERK_PUBLISHABLE_KEY) {
        console.error('[CLERK_AUTH] ', 'Ensure that both PUBLIC_CLERK_FRONTEND_API and PUBLIC_CLERK_PUBLISHABLE_KEY are set');
        throw new Error('PUBLIC_CLERK_FRONTEND_API_NOT_SET');
    }

    clerk.load(options).then(() => {
        ClerkStore.set({ clerkHasLoaded: true });
    });
}

/**
 * Check whether user is Authenticated in the Server Side 
 * 
 * Works only in `+page.server.[ts | js]`, `+server.ts`, `hooks.server.[ts | js]`
 * @param {Cookies} cookies
 * @returns {{ userId: string }}
 */
async function auth(cookies: Cookies) {

    const sessionToken = cookies.get('__session');
    if (!sessionToken) return { userId: undefined };

    const remoteJWKSUrl = `https://${PUBLIC_CLERK_FRONTEND_API}/.well-known/jwks.json`;
    const JWKS = jose.createRemoteJWKSet(new URL(remoteJWKSUrl));

    try {
        const { payload } = await jose.jwtVerify(sessionToken, JWKS);

        // Note that payload dates are in seconds
        const timeAtVerification = new Date().getTime();
        const tokenNotBefore = Number(payload.nbf) * 1000
        const tokenExpiresAt = Number(payload.exp) * 1000

        // Check that the Token Dates are valid
        if (tokenExpiresAt < timeAtVerification ||
            tokenNotBefore > timeAtVerification) {
            console.log('Invalid Token ', payload.sub)
            throw new Error('Invalid Token');
        }

        return { userId: payload.sub };
    } catch (err) {
        console.error('Auth Func Error ', err)
        throw err;
    }
}


export {
    clerk,
    initializeClerk,
    auth,

    signIn,
    signOut,
    getUser,
    showUserProfile,
}
