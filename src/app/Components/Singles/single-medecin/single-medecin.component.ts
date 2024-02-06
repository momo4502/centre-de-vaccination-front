import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/Models/Medecin';
import { MedecinService } from 'src/app/Services/MedecinService/medecin.service';

@Component({
  selector: 'app-single-medecin',
  templateUrl: './single-medecin.component.html',
  styleUrls: ['./single-medecin.component.scss']
})
export class SingleMedecinComponent implements OnInit{

  medecinId!: number;
  medecin!: Medecin;

  constructor(private route: ActivatedRoute,
              private medecinService: MedecinService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if(idParam !== null) {
        this.medecinId =+ idParam;
        this.loadMedecinsDetails();
      }
    });
  }

  loadMedecinsDetails(): void {
      this.medecinService.getMedecinById(this.medecinId).subscribe(patient => {
      this.medecin = patient;
    });
  }

}
