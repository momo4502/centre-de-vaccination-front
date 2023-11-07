import { Administrateur } from "./Administrateur";
import { Centre } from "./Centre";

export class SuperAdmin implements Administrateur {
    
    id!:number;
    nom!: String;
    prenom!: String;
    email!: String;
    statut!: StatutAdmin.superAdmin;
    centre!: Centre;
    centres!: Centre[];
    administrateurs!: Administrateur[];
    super_admins!: SuperAdmin[];
}