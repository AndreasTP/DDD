<script>
    import {oauth2 as Smart} from 'fhirclient';
    import {onMount} from 'svelte';
    import {launch} from 'dips-smart-on-fhir-svelte';

    let clientId = 'sykepenger_dokument';
    let scope = 'launch openid fhirUser patient/*.read patient/*.write offline_access documentReference/*.read documentReference/*.write';
    let patientId = "123";			
    let iss = 'https://foi.dips.fhir.service.sandbox.dips.no';
    let launchString = '6c5d9ca9-54d7-42f5-bfae-a7c19cd217f2::DocumentReference/b3e32146-848c-4d3b-b8a9-c9b3a7861a6a';

    onMount(async () => {	
		  launch(clientId, scope, patientId, iss, launchString);
    });
</script> 