import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/Patient';
import { PatientService } from 'src/app/Services/PatientService/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],

  providers: [PatientService]
})

export class PatientComponent implements OnInit{

  patients!: Patient[];
  filteredPatients: Patient[] = [];
  searchTerm: string = '';

  constructor(private patienService: PatientService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patienService.getPatients()
      .subscribe(patients => {
        this.patients = patients;
        this.filteredPatients = patients;
      });

  }

  filterPatients(): void {
    if (!this.searchTerm) {
      this.filteredPatients = this.patients; // Si la barre de recherche est vide, afficher tous les patients
      return;
    }

    // Filtrer les patients en fonction du terme de recherche
    this.filteredPatients = this.patients.filter(patient =>
      (patient.nom && patient.nom.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
      (patient.prenom && patient.prenom.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }

  DisplayAllPatients(): void {
    this.searchTerm = '';
    this.filteredPatients = this.patients;
  }

  goToSinglePatient(patientId: number): void {
    this.router.navigate(['patients', patientId]);
  }
}
