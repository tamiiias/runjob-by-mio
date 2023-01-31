import { Component, OnInit, Input } from '@angular/core';
import { OffreEmploi } from '../models/offre-emploi.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.scss'],
})
export class OffreEmploiComponent implements OnInit {
  
  @Input() offreEmploi!: OffreEmploi;
  
  public iconName: string = 'heart-outline';
  public iconHeartColor: string = 'medium';

  constructor( private router: Router) { }

  ngOnInit() {}
  
  onViewOffreEmploi() {
    console.info(this.offreEmploi);
    this.router.navigateByUrl(`/tabs/offres-emploi/single/${this.offreEmploi.id}`);
  }


  onToggleLiked(){
    if(this.iconName == 'heart-outline'){
      this.iconName = 'heart';
      this.iconHeartColor = 'primary';
    } else {
      this.iconName = 'heart-outline';
      this.iconHeartColor = 'medium';
    }
  }
}
