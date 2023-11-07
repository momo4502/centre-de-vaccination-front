import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  sections = [
    { label: 'Patients', route: '/patients' },
    { label: 'Médecins', route: '/medecins' },
    { label: 'Centres de vaccination', route: '/centres' },
    { label: 'Administrateurs de centre', route: '/admin' },
    { label: 'Mon Compte', route: '/mon-compte' },
  ];
}
