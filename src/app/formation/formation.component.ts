import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../models/formation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  
  @Input() formation!: Formation;

  constructor( private router: Router) { }

  ngOnInit() {}
  
  onViewFormation() {
    console.info(this.formation);
    this.router.navigateByUrl(`/tabs/formations/single/${this.formation.id}`);
  }

}
