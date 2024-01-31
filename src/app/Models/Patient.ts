import { Adresse } from "./Adresse";
import { Medecin } from "./Medecin";

export class Patient {

    id!:number;
    nom!: String;
    prenom!: String;
    email!: String;
    dateDeNaissance!: Date;
    dateDInscription!: Date;
    telephone!: number;
    adresse!: Adresse;
    docteur!: Medecin;

}