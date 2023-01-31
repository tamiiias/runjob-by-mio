import { Component, ViewChild } from '@angular/core';
import { OffreEmploiListComponent } from '../offre-emploi-list/offre-emploi-list.component';
import{ GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-tab1', 
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  @ViewChild(OffreEmploiListComponent) offreEmploiList;
  
  constructor() {}
  

  ngOnInit() {}
  
  ionViewWillEnter(){
    console.info('fire every time tab1 in entered');
    
    if(GlobalConstants.reload_offres_emploi_tab){
        this.offreEmploiList.authenticationService.getUser().then(user => {
            GlobalConstants.reload_offres_emploi_tab = false;
            this.offreEmploiList.user = JSON.parse(user);
            this.offreEmploiList.offresEmploi$ = this.offreEmploiList.offresEmploiService.getOffreEmploiBySecteur(this.offreEmploiList.user.secteur_activite.split(','));
        });
    }
    
  }

}
