import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  authentifie: boolean = false;
  selectedStatut: string = '';
  selectedAdminType: string = '';

  constructor() { }

  setAuthentifie(value: boolean): void {
    this.authentifie = value;
  }

  setUserRole(statut: string, adminType: string) {
    this.selectedStatut = statut;
    this.selectedAdminType = adminType;
  }

  getUserRole(): string {
    switch (this.selectedStatut) {
      case 'patient':
        return 'patient';
      case 'medecin':
        return 'doctor';
      case 'admin':
        if (this.selectedAdminType === 'adminCentre') {
          return 'admin';
        } else {
          return 'superAdmin';
        }
      default:
        return '';
    }
  }
}
