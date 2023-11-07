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

@NgModule({
  declarations: [
    AppComponent,
    AdministrateurComponent,
    AuthentificationComponent,
    CentreComponent,
    MedecinComponent,
    MenuComponent,
    PatientComponent,
    VaccinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
