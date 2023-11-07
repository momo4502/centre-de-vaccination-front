import { Centre } from "./Centre";
import { DossierPatient } from "./DossierPatient";
import { Medecin } from "./Medecin";
import { Patient } from "./Patient";

export class Reservation implements DossierPatient{
    
    id!: number;
    date!: Date;
    patient!: Patient;
    centre!: Centre;
    medecin!: Medecin;
}