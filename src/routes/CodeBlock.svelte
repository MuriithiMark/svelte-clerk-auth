
In Your `script` tag in <span style="font-weight: 700; color: brown;">routes/+layout.svelte</span>
<br />
<div class="code-block">
	<pre><code>
{"import {initializeClerk} from 'svelte-clerk-auth'"}
{"const clerkOptions = {};"} <span style="color: green;">// Refer in Clerk Documenttaion</span>
{"onMount( async () => await initilizeClerk(clerkOptions));"}
  
  </code></pre>
</div>
<div class="code-block">
	<pre><code>
{"import {initializeClerk} from 'svelte-clerk-auth'"}
{"const clerkOptions = {}"} <span style="color: green;">// Refer in Clerk Documenttaion</span>
{"  onMount(() => {"}
{"  initializeClerk(clerkOptions).then(() => console.log('Clerk has loaded'))"}
{"});"}

  </code></pre>
</div>

<style>
	div.code-block {
		background-color: black;
		color: white;
	}
  pre {
    margin-left: 20px;

  }
	code {
		padding: 12px;
	}
</style>
