import { Administrateur } from "./Administrateur";
import { Centre } from "./Centre";
import { Medecin } from "./Medecin";
import { Reservation } from "./Reservation";


export class AdministrateurCentre implements Administrateur {
    
    id!:number;
    nom!: String;
    prenom!: String;
    email!: String;
    statut!: StatutAdmin.adminClassique;
    centre!: Centre;
    medecins!: Medecin[];
    reservations!: Reservation;
    
}