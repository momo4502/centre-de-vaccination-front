import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/AuthentificationService/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit{

  email: String = "";
  motDePasse: String = "";
  creer_un_compte: string = 'Créer un compte';
  se_connecter: string = 'Se connecter';
  submitButtonText: string = this.se_connecter;

  constructor(private router: Router, 
              private authentificationService: AuthentificationService) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.authentificationService.setAuthentifie(true);
    this.router.navigate(['centres']);
  }

  resetForm() {
    this.motDePasse = ''; 
      if (this.submitButtonText === this.se_connecter) {
        this.submitButtonText = this.creer_un_compte;
    } else {
      this.submitButtonText = this.se_connecter;
    }
  }

}
