<<<<<<< HEAD
<<<<<<< HEAD
# svelte-clerk-auth
Clerk Auth Library For SvelteKit
=======
# create-svelte
=======
# svelte-clerk-auth
>>>>>>> a0ca65d (Updated README.md and LICENSE)

## Clerk Auth Library for Sveltekit
A Svelte kit library implementing the [Clerk js Auth](https://clerk.com).

## Installation
```bash
pnpm install svelte-clerk-auth
```
```bash
npm install svelte-clerk-auth
```


## Usage
```html
<script lang="ts">
    import { initializeClerk, signIn, signOut, SignedIn, SignedOut, UserButton } from "svelte-clerk-auth";
    import { onMount } from "svelte"

    const clerkOptions = {}; // Refer from Clerk documentation
    const optionalSignInProps = {}; // Refer from Clerk documentation
    const optionalSignInProps = {}; // Refer from Clerk documentation
    onMount(async () => await initializeClerk(clerkOptions))
</script>

<SignedIn>
    <span>Shows only when SignedIn.</span>

    <!--UserButton provides convinient way to show user profile-->
    <UserButton />

    <button on:click={_ => signOut(optionalSignOutOptions)}>Sign Out</button>
</SignedIn>
<SignedOut>
    <span>Shows only when SignedOut</span>
    <button on:click={_ => signIn(optionalSignInProps)}>Sign In</button>
<SignedOut>
```
### ClerkStore Object
```js
type ClerkStoreProps = {
    loading: boolean; // Checks if clerk has loaded
    user?: UserResource | null; // Shows UserResource only if user is logged in
    session?: SessionResource | null; // Current Session for the user
    userIsSignedIn: () => boolean; // Returns true if user is logged in
};
// For specifcs refer to Clerk Documentation
```
```html
<script lang="ts">
    import { ClerkStore} from "svelte-clerk-auth";

    $: console.log($ClerkStore);
</script>
```

### Info
Documentations of the project is ongoing.

Project is safe to use.

Raise any issues [here](https://github.com/MuriithiMark/svelte-clerk-auth/issues) and support this project's documentation and any other necessary improvements.

Care should be taken to only use SignedIn component where needed, since clerk-js is fully client side.

Only encapsulate code that truly needs user authentication.

For example in a Ecommerce Store, where you wish the products to be easily indexed by search engines, or better SEO for the overall website, but only authenticated users can place products in the Cart then do as follows: 

In ```Procuct.svelte```
```html
<script lang="ts">
    import { signIn } from "svelte-clerk-auth";

    let id = "78828dh-d88u8-kdj83";
    let name = "Peanut Butter";
    let imgSrc = "https://.../img.jpeg";
    let price = 400;

    function addProductToCart() {
        // Add Product To Cart
    }

    function signInUser() {
        signIn({ /* SignInProps */ });
    }
</script>

<<<<<<< HEAD
To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
>>>>>>> d9cedf2 (Initial commit)
=======
<div class="card">
    <img src={imgSrc} />
    <span>{name}</span>
    <span>{price}</span>
    <SignedIn>
        <button on:click="{addProuctToCart}">
    </SignedIn>
    <SignedOut>
        <button on:click="{signInUser}">Login To Add Products</button>
    </SignedOut>
</div>
```
>>>>>>> a0ca65d (Updated README.md and LICENSE)
