import { Component, ViewChild } from '@angular/core';
import { FormationListComponent } from '../formation-list/formation-list.component';
import{ GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-tab2', 
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  @ViewChild(FormationListComponent) formationList;
  
  constructor() {}
  

  ngOnInit() {}
  
  ionViewWillEnter(){
    console.info('fire every time tab2 in entered');
    
    if(GlobalConstants.reload_formations_tab){
        this.formationList.authenticationService.getUser().then(user => {    
            GlobalConstants.reload_formations_tab = false;
            this.formationList.user = JSON.parse(user);
            this.formationList.formations$ = this.formationList.formationsService.getFormationBySecteur(this.formationList.user.secteur_activite.split(','));
        });
    }
    
        
    
  }

}
