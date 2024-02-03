import { Administrateur } from "./Administrateur";
import { Centre } from "./Centre";
import { StatutAdmin } from "./StatutAdmin";

export class SuperAdmin implements Administrateur {
    
    id!:number;
    nom!: string;
    prenom!: string;
    email!: string;
    statut!: StatutAdmin.superAdmin;

}