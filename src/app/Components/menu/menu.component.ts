import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/AuthentificationService/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  sections: { label: string, route: string }[] = [];

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
    const userRole = this.authService.getUserRole();
    console.log(userRole);
    switch (userRole) {
      case 'doctor':
        this.sections = [
          { label: 'Patients', route: '/patients' },
          { label: 'Centres de vaccination', route: '/centres' },
          { label: 'Tableau de bord', route: '/tableau-de-bord' },
          { label: 'Mon Compte', route: '/mon-compte' }
        ];
        break;
      case 'patient':
        this.sections = [
          { label: 'Médecins', route: '/medecins' },
          { label: 'Centres de vaccination', route: '/centres' },
          { label: 'Tableau de bord', route: '/tableau-de-bord' },
          { label: 'Mon Compte', route: '/mon-compte' }
        ];
        break;
      case 'admin':
        this.sections = [
          { label: 'Médecins', route: '/medecins' },
          { label: 'Centres de vaccination', route: '/centres' },
          { label: 'Administrateurs de centre', route: '/admin' },
          { label: 'Tableau de bord', route: '/tableau-de-bord' },
          { label: 'Mon Compte', route: '/mon-compte' }
        ];
        break;
      default:
        // Faites quelque chose pour gérer le cas où le rôle n'est pas défini
        break;
    }
    console.log(this.sections);
  }
}
