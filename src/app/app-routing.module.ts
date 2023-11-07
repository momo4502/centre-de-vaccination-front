import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { CentreComponent } from './Components/centre/centre.component';
import { PatientComponent } from './Components/patient/patient.component';
import { MedecinComponent } from './Components/medecin/medecin.component';
import { AdministrateurComponent } from './Components/administrateur/administrateur.component';

const routes: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'centres', component: CentreComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'medecins', component: MedecinComponent },
  { path: 'centres', component: CentreComponent },
  { path: 'admin', component: AdministrateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
