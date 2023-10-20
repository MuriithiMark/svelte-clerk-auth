<script lang="ts">
	import {
		initializeClerk,
		signIn,
		signOut,
		SignedIn,
		SignedOut,
        ClerkStore,
		UserButton,
	} from "../lib/index";
	import { onMount } from "svelte";
	import CodeBlock from "./CodeBlock.svelte";

	const clerkOptions = {};
	onMount(async () => await initializeClerk(clerkOptions));
</script>

<hgroup>
	<h1>Svelte Clerk Auth</h1>
    <h2>Documentation is in Progress 🔧🛠️! </h2>
</hgroup>
<div class="support">
    <span>Help improve this project at <a href="https://github.com/MuriithiMark/svelte-clerk-auth">github</a>
    <span>
        Support in documenting it.
    </span>
</span>
</div>
<div>
	<CodeBlock />
	<div class="clerk-test">
		<h2>Test Svelte Clerk Auth AuthFunctions</h2>
        <span class="info-text">
            ❗ ❗ Ensure that you nest the SignedIn component as deep as possible. This is beacuse clerk has some initial loading time especially in slow networks!!
        </span>
		<SignedIn>
			<span class="fun-text">Hi {$ClerkStore.user?.firstName}! Awawesome 🤗 🤗, You are Signed In!</span>
			<button on:click={_ => signOut()}>Sign Out</button>
			<!--button on:click={showUserProfile}>Show Profile</button-->
            <UserButton />
		</SignedIn>
		<SignedOut>
			<span class="fun-text">Ooh 😭 😭! Why don't you Sign In?</span>
			<button on:click={_ => signIn()}>Sign In</button>
		</SignedOut>
	</div>
</div>

<style>
    .clerk-test {
        justify-content: center;
        display: grid;
        row-gap: 10px;
    }

    .fun-text {
        justify-self: center;
    }

    .info-text {
        font-weight: 800;
    }

    button {
        justify-self: center;
        outline: none;
        appearance: none;
        border: none;
        background-color: blueviolet;
        color: white;
        font-weight: 700;
        font-size: small;
        height: 40px;
        width: 120px;
        border-radius: 20px;
        cursor: pointer;
    }

    button:hover {
        opacity: 0.8;
    }
</style>
