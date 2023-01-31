import { Component, ViewChild } from '@angular/core';
import { CandidatureListComponent } from '../candidature-list/candidature-list.component';
import { CandidaturesService } from '../services/candidatures.service';
import { of } from 'rxjs';
import{ GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  @ViewChild(CandidatureListComponent) candidatureList;
  
  constructor(
    private candidaturesService: CandidaturesService,
  ) {}
  
  
  ionViewWillEnter(){
    console.info('fire every time tab3 is entered');
    
    if(GlobalConstants.reload_candidatures_tab){
        GlobalConstants.reload_candidatures_tab = false;    
        this.candidaturesService.cache$ = of([]);
        this.candidatureList.candidatures$ = this.candidaturesService.getCandidatures();
    }
    
  }
  
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.candidaturesService.cache$ = of([]);
      this.candidatureList.candidatures$ = this.candidaturesService.getCandidatures();
      
      event.target.complete();
    }, 2000);
  };
  
}
