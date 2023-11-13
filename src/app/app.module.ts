import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrateurComponent } from './Components/administrateur/administrateur.component';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { CentreComponent } from './Components/centre/centre.component';
import { MedecinComponent } from './Components/medecin/medecin.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PatientComponent } from './Components/patient/patient.component';
import { VaccinationComponent } from './Components/vaccination/vaccination.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableauDeBordComponent } from './Components/tableau-de-bord/tableau-de-bord.component';
import { MonCompteComponent } from './Components/mon-compte/mon-compte.component';
import { PatientService } from './Services/PatientService/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { SinglePatientComponent } from './Components/Singles/single-patient/single-patient.component';
import { MedecinCreateComponent } from './Components/Create/medecin-create/medecin-create.component';
import { PatientCreateComponent } from './Components/Create/patient-create/patient-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrateurComponent,
    AuthentificationComponent,
    CentreComponent,
    MedecinComponent,
    MenuComponent,
    PatientComponent,
    VaccinationComponent,
    TableauDeBordComponent,
    MonCompteComponent,
    SinglePatientComponent,
    MedecinCreateComponent,
    PatientCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    CommonModule,
    HttpClientModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
