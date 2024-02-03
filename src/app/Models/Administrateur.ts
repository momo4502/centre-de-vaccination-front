import { Centre } from "./Centre";
import { StatutAdmin } from "./StatutAdmin";

export interface Administrateur {

    id:number;
    nom: String;
    prenom: String;
    email: String;
    statut: StatutAdmin;

}