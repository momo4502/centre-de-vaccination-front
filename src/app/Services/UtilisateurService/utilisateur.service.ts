import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  
  private _utilisateur: Utilisateur = new Utilisateur();

  constructor() { }

  getUtilisateur(): Utilisateur {
    return this._utilisateur;
  }

  setUtilisateur(value: Utilisateur) {
    this._utilisateur = value;
  }
}
