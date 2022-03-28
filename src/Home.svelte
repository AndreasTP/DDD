<script>
    import {patientName, gender, documentId, birthDate} from "./SmartOnFhirStore";
	let dips_logo = '/images/dips_logo.png'
</script>

<!-- <main>
	<h1>Hello {$patientName}!</h1>
    <h2>Gender: {$gender}</h2>
    <h2>Document: {$documentId}</h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->

<main>
    <div>
        <h1 class="sameLine">Welcome to Smart on FHIR demo-app</h1>
        <img src="/images/dips_logo.png" alt="Dips Logo" height="100" align="center"/>
		<img src="/favicon.png" alt="Logo" height="100" align="center"/>
    </div>

    <div class="border">
        <p><b>Patient name: </b>{$patientName}</p>
        <p><b>Gender: </b>{$gender}</p>
        <p><b>Birth date: </b>{$birthDate}</p>
        <!-- <p><b>Address: </b>{$patient?.address[0]?.line}, {$patient?.address[0]?.city}</p> -->
    </div>
</main>


<style>
    .sameLine {
        display: inline-block;
    }

    .border {
        border-style: solid;
        border-radius: 10px;
        border-color: lightseagreen;
        display: inline-block;
        padding: 10px;
    }

</style>