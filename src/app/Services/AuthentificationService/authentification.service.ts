import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  authentifie: boolean = false;

  constructor() { }

  getAuthetifie(): boolean {
    return this.authentifie; 
  }

  setAuthentifie(value: boolean): void {
    this.authentifie = value;
  }

}
