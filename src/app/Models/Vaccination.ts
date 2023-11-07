import { Centre } from "./Centre";
import { DossierPatient } from "./DossierPatient";
import { Medecin } from "./Medecin";
import { Patient } from "./Patient";

export class Vaccination implements DossierPatient{

    id!:number;
    patient!: Patient;
    medecin!: Medecin;
    centre!: Centre;
    date!: Date;
    statutDossierPatient!: StatutDossierPatient.vaccination; 

}