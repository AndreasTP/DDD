import { writable, derived } from "svelte/store";
import { oauth2 as Smart } from 'fhirclient';
import {patient, fhir} from 'dips-smart-on-fhir-svelte';

export const patientName = derived(
    patient,
    ($patient, set) => {
        if ($patient != null && $patient.name != null) {
            let familyName = $patient.name[0].family;
            let givenName = $patient.name[0].given[0];
            let patientName = givenName + " " + familyName;
            set(patientName);
        }
    }
);

export const gender = derived (
    patient,
    ($patient, set) => {
        if ($patient != null) {
            set($patient.gender);
        }
    }
);

export const documentId = derived(
    fhir,
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null)
        {
            let documentId = $fhir.client.state.tokenResponse.resource
            set(documentId)
        }
    }
);

export const birthDate = derived(
    patient,
    ($patient, set) => {
        if ($patient != null) {
            set($patient.birthDate);
        }
    }
)