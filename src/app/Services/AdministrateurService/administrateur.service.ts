import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministrateurCentre } from 'src/app/Models/AdministrateurCentre';
import { SuperAdmin } from 'src/app/Models/SuperAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private apiUrl = 'http://localhost:8083';
  private administarteurUrl = '/administrateurs';
  private superAdminUrl = '/superAdmins';

  constructor(private http: HttpClient) { }

  getAdministrateurCentres(): Observable<AdministrateurCentre[]> {
    return this.http.get<AdministrateurCentre[]>(this.apiUrl + this.administarteurUrl + '/get');
  }
  
  getAdministrateurCentreById(AdministrateurCentreId: number): Observable<AdministrateurCentre> {
    return this.http.get<AdministrateurCentre>(this.apiUrl + this.administarteurUrl + '/get/' + AdministrateurCentreId);
  }
  
  getAdministrateurCentreByEmail(email: string): Observable<AdministrateurCentre> {
    return this.http.get<AdministrateurCentre>(this.apiUrl + this.administarteurUrl + '/getByEmail/' + email);
  }

  getSuperAdmins(): Observable<SuperAdmin[]> {
    return this.http.get<SuperAdmin[]>(this.apiUrl + this.superAdminUrl + '/get');
  }
  
  getSuperAdminById(superAdminId: number): Observable<SuperAdmin> {
    return this.http.get<SuperAdmin>(this.apiUrl + this.superAdminUrl + '/get/' + superAdminId);
  }
  
  getSuperAdminByEmail(email: string): Observable<SuperAdmin> {
    return this.http.get<SuperAdmin>(this.apiUrl + this.superAdminUrl + '/getByEmail/' + email);
  }
  
}
