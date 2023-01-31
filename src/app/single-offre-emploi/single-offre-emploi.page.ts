import { Component, OnInit } from '@angular/core';
import { OffreEmploi } from '../models/offre-emploi.model';
import { OffresEmploiService } from '../services/offres-emploi.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-offre-emploi',
  templateUrl: './single-offre-emploi.page.html',
  styleUrls: ['./single-offre-emploi.page.scss'],
})
export class SingleOffreEmploiPage implements OnInit {
  
  offreEmploi$: Observable<any>;
  offreEmploiId!: number;
  
  constructor(private offresEmploiService: OffresEmploiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  
    this.offreEmploiId = +this.route.snapshot.params['id'];
    this.offreEmploi$ = this.offresEmploiService.getOffreEmploiById(this.offreEmploiId);
  }
  
  onViewPostulerOffreEmploi() {
    const offreEmploiId = +this.route.snapshot.params['id'];
    this.router.navigateByUrl(`/tabs/offres-emploi/postuler/${offreEmploiId}`);
  }

}