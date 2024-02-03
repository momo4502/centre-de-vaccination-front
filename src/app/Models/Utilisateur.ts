import { RoleUtilisateur } from "./RoleUtilisateur";

export class Utilisateur {

  private _nom: string;
  private _role: RoleUtilisateur;

  constructor(nom: string = '', role: RoleUtilisateur = RoleUtilisateur.patient) {
    this._nom = nom;
    this._role = role;
  }

  getNom(): string {
    return this._nom;
  }

  setNom(value: string) {
    this._nom = value;
  }

  getRole(): RoleUtilisateur {
    return this._role;
  }

  setRole(value: RoleUtilisateur) {
    this._role = value;
  }
}
