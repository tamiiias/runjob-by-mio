import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation.model';
import { FormationsService } from '../services/formations.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-formation',
  templateUrl: './single-formation.page.html',
  styleUrls: ['./single-formation.page.scss'],
})
export class SingleFormationPage implements OnInit {
  
  formation$: Observable<any>;
  formationId!: number;
  
  constructor(private formationsService: FormationsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  
    this.formationId = +this.route.snapshot.params['id'];
    this.formation$ = this.formationsService.getFormationById(this.formationId);
  }
  
  onViewPostulerFormation() {
    const formationId = +this.route.snapshot.params['id'];
    this.router.navigateByUrl(`/tabs/formations/postuler/${formationId}`);
  }

}

