import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Formation } from '../models/formation.model';
import { SecteurActivite } from '../models/secteur-activite.model';
import { FormationsService } from '../services/formations.service';
import { AuthenticationService } from '../services/authentication.service';
import { SecteursActiviteService } from '../services/secteurs-activite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss'],
})
export class FormationListComponent implements OnInit {

  formations$: Observable<Array<Formation>>;
  secteursActivite$: Observable<Array<SecteurActivite>>;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  user: any;
  
  constructor(
    private formationsService: FormationsService,
    private secteursActiviteService: SecteursActiviteService,
    private authenticationService: AuthenticationService
  ) {}
  
  ngOnInit(): void {
  
    /*this.authenticationService.getUser().then(user => {
      
        this.user = JSON.parse(user);
        //this.formations$ = this.formationsService.getFormationBySecteur(this.user.secteur_activite.split(','));
        
    });
    */
    
    //this.formations$ = this.formationsService.formations;
    //this.secteursActivite$ = this.secteursActiviteService.secteursActivite;
  }
  
  /*
  onSecteurChange($event){
    console.info($event.detail.value);
    const secteur_activite_slug_array = $event.detail.value;
    this.formations$ = this.formationsService.getFormationBySecteur(secteur_activite_slug_array);
  }
  */
  
  getMorePosts(evt) {
    
    console.info('getMorePosts');
    this.formationsService.getMorePosts().subscribe((data: Observable<any>) => {
        this.formations$ = data;
        this.infiniteScroll.complete();
    });
    
  }

  infiniteScrollDisabled() {
    if (this.formationsService.hasMorePosts()) {
        return false;
    } else {
        return true;
    }
  }

}