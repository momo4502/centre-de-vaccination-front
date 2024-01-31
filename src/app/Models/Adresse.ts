import { Medecin } from "./Medecin";
import { Patient } from "./Patient";

export class Adresse {

    id!: number;
    ville!: String;
    rue!: String;
    zip_code!: number;
    docteur!: Medecin;
    patient!: Patient;
}