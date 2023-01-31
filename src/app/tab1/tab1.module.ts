import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OffreEmploiComponent } from '../offre-emploi/offre-emploi.component';
import { OffreEmploiListComponent } from '../offre-emploi-list/offre-emploi-list.component';




import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    Tab1Page,
    OffreEmploiComponent,
    OffreEmploiListComponent
  ]
})
export class Tab1PageModule {}
