import { Centre } from "./Centre";

export interface Administrateur {

    id:number;
    nom: String;
    prenom: String;
    email: String;
    statut: StatutAdmin;
    centre: Centre;

}