<script>
	import {Router, Route} from "svelte-routing";
	import Home from "./Home.svelte";
	import Launch from "./Launch.svelte";

	export let url = "";

	export let name;

</script>

<Router url={url}>
	<Route path="/">
		<Launch/>
	</Route>
	<Route path="/app">
		<Home/>
	</Route>
</Router>