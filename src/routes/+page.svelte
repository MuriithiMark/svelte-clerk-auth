<script lang="ts">
	import {
		initializeClerk,
		showUserProfile,
		signIn,
		signOut,
		SignedIn,
		SignedOut
	} from "../lib/index";
	import { onMount } from "svelte";
	import CodeBlock from "./CodeBlock.svelte";

	const clerkOptions = {};
	onMount(async () => await initializeClerk(clerkOptions));
</script>

<hgroup>
	<h1>Svelte Clerk Auth</h1>
    <h2>Documentation is in Progress </h2>
</hgroup>
<div>
	<CodeBlock />
	<div class="clerk-test">
		<h2>Test Svelte Clerk Auth AuthFunctions</h2>
		<SignedIn>
			<span class="fun-text">Hi! Awawesome 🤗 🤗, You are Signed In!</span>
			<button on:click={signOut}>Sign Out</button>
			<button on:click={showUserProfile}>See your profile. Hope you used google auth</button>
		</SignedIn>
		<SignedOut>
			<span class="fun-text">Ooh 😭 😭! Why don't you Sign In?</span>
			<button on:click={(event) => signIn(event)}>Sign In</button>
		</SignedOut>
	</div>
</div>

<style>
    .clerk-test {
        justify-content: center;
        display: grid;
        row-gap: 10px;
    }

    button {
        outline: none;
        appearance: none;
        border: none;
        background-color: blueviolet;
        color: white;
        font-weight: 700;
        font-size: small;
        text-transform: uppercase;
        height: 40px;
        width: 120px;
        border-radius: 20px;
        cursor: pointer;
    }

    button:hover {
        opacity: 0.7;
    }
</style>
