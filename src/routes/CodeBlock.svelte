<div class="code-block">
	<pre><code>

{"const clerkOptions = {};"} <span style="color: green;">// Refer in Clerk Documenttaion</span>
{"onMount( async () => await initilizeClerk(clerkOptions));"}
  
  </code></pre>
</div>
OR
<div class="code-block">
	<pre><code>

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
    margin: 20px;
  }
	code {
		margin: 12px;
		padding: 12px;
	}
</style>
