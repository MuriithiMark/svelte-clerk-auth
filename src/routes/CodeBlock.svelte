<div class="code-block">
	<pre><code>

{"const clerkOptions = {};"} <span style="color: green;">// Refer in Clerk Documenttaion</span>
{"onMount( async () => await initilizeClerk(clerkOptions));"}
  
  </code></pre>
</div>
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
    margin-left: 20px;

  }
	code {
		padding: 12px;
	}
</style>
