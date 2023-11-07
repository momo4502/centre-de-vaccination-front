import { Centre } from "./Centre";
import { Medecin } from "./Medecin";
import { Patient } from "./Patient";

export interface DossierPatient {
    id:number;
    patient: Patient;
    medecin: Medecin;
    centre: Centre;
    date: Date;
}