import { Medecin } from "./Medecin";
import { Patient } from "./Patient";

export class Adresse {

    id!: number;
    ville!: String;
    rue!: String;
    zip_code!: number;
    docteur!: Medecin;
    patient!: Patient;

    toString(): String {
        return this.zip_code + ' ' + this.rue + ' ' + this.ville; 
    }
}