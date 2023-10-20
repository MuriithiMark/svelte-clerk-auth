<script lang="ts">
    import { cn } from "../utils";
    import { getUser, showUserProfile } from "./AuthFunctions.svelte";

    const user = getUser();

    let className: string;
    export { className as class };
</script>

{#if user}
    <button on:click={showUserProfile} class="outline-none appearance-none">
        <img
            class={cn(
                "object-contain rounded-full hover:opacity-75",
                className
            )}
            src={user.imageUrl}
            alt={`${user.fullName} Avatar`}
        />
    </button>
{/if}
