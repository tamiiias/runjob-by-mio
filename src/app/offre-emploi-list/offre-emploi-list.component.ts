import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OffreEmploi } from '../models/offre-emploi.model';
import { SecteurActivite } from '../models/secteur-activite.model';
import { OffresEmploiService } from '../services/offres-emploi.service';
import { AuthenticationService } from '../services/authentication.service';
import { SecteursActiviteService } from '../services/secteurs-activite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offre-emploi-list',
  templateUrl: './offre-emploi-list.component.html',
  styleUrls: ['./offre-emploi-list.component.scss'],
})
export class OffreEmploiListComponent implements OnInit {

  offresEmploi$: Observable<Array<OffreEmploi>>;
  secteursActivite$: Observable<Array<SecteurActivite>>;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  user: any;
  
  constructor(
    private offresEmploiService: OffresEmploiService,
    private secteursActiviteService: SecteursActiviteService,
    private authenticationService: AuthenticationService
  ) {}
  
  ngOnInit(): void {
  
    this.authenticationService.getUser().then(user => {
      
        this.user = JSON.parse(user);
        this.offresEmploi$ = this.offresEmploiService.getOffreEmploiBySecteur(this.user.secteur_activite.split(','));
        
    });
  }
  
  /*
  onSecteurChange($event){
    console.info($event.detail.value);
    const secteur_activite_slug_array = $event.detail.value;
    this.offresEmploi$ = this.offresEmploiService.getOffreEmploiBySecteur(secteur_activite_slug_array);
  }
  */
  
  getMorePosts(evt) {
    this.offresEmploiService.getMorePosts().subscribe((data: Observable<any>) => {
        this.offresEmploi$ = data;
        this.infiniteScroll.complete();
    });
  }

  infiniteScrollDisabled() {
    if (this.offresEmploiService.hasMorePosts()) {
        console.info('hasMorePosts');
        return false;
    } else {
        console.info('noMorePosts');
        return true;
    }
  }

}

