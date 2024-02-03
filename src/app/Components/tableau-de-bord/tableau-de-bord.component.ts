import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/Models/Utilisateur';
import { UtilisateurService } from 'src/app/Services/UtilisateurService/utilisateur.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})
export class TableauDeBordComponent implements OnInit{

  utilisateur!: Utilisateur;

  constructor(private utilisateurService: UtilisateurService) { 
    
  }

  ngOnInit(): void {
    this.utilisateur = this.utilisateurService.getUtilisateur();
  }
}
