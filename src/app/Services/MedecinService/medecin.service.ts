import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from 'src/app/Models/Medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  private apiUrl = 'http://localhost:8083/docteurs';

  constructor(private http: HttpClient) { }

  getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.apiUrl + '/get');
  }

  getMedecinById(medecinId: number): Observable<Medecin> {
    return this.http.get<Medecin>(this.apiUrl + '/get/' + medecinId);
  }
}
